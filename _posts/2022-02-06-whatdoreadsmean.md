---
title: Detecting structural variants and the SAM format
date: 2022-02-06
---

The `SAM` specification is pretty amazing
https://samtools.github.io/hts-specs/SAMv1.pdf but it is also fairly terse and
abstract. Really understanding the may require playing with real world data

I am not even by any means a an expert at looking at alignments, but there are
some things that you can pick up from looking at them a lot (either in text
form or in a genome browser), and also, if you need to write code to interpret
them, actually interpreting

## Basics

### What is a `SAM` file and how does it relate to BAM and CRAM

A `SAM` file contains "reads" from a sequencer. The "reads" often come in the
form fastq files. The reads from `fastq` format are inputted into an aligner
such as `bwa`, `bowtie`, `minimap2`, which map the reads to a reference genome,
and output SAM format.

`SAM` is a text format that you can read with your text editor. `BAM` and
`CRAM` are compressed representations of the `SAM` format, and you can use
`samtools view yourfile.bam` or `samtools view yourfile.cram` to convert them
back to SAM (or pipe to `less` to just read snippets of it without a full
conversion)

### What is a `CIGAR` string

A `CIGAR` string is a "compact idiosyncratic gapped alignment report". Yes,
that's an acronym. It can tell you where insertions and deletions are in an
alignment. Some CIGAR strings tell you where mismatches are, but often, the
`CIGAR` string does not tell you this.

### What is an `MD` string

An `MD` string is a tag in `SAM` file that helps tell you where the mismatches
are, and can be combined with a `CIGAR` to get the position of the mismatches
without looking at a reference genome. The `MD` string is commonly seen in BAM
files. However, the `MD` string has some limitations, and if you have a
reference genome file and a `CIGAR` string, you can calculate where the
mismatches are without the `MD` tag

See https://github.com/samtools/hts-specs/issues/505 for some complaints about
the `MD` string format

The `MD` tag contains information about deletions (including the bases of the
reference genome, which would otherwise not be indicated) and mismatches (same,
indicating the base of the reference genome at a SNPs position), but not
insertions

## What are split alignments?

Split alignments, or chimeric-alignments are alignments where part of the read
aligns to perhaps chr1, and part of it maps to perhaps chr4. It is worth
reading the definition of "Chimeric alignment" from SAMv1.pdf (not reproduced
here)

https://samtools.github.io/hts-specs/SAMv1.pdf

There is no limitation on how many splits might occur so the split can align to
3, 4, or more different places. Each part of the split puts a new line in the
SAM file. As SAMv1.pdf tells us, one read is marked as "representative", I call
this the "primary" read, while the other components of the split read are maked
supplementary, given the 2048 flag (0x80). Only the "primary" read generally
has a `SEQ` field (column 10)

Split alignments are especially common with long reads, and it can indicate
that there may be a structural variant where the two chromosomes are fused
together (which may create gene fusions, or other types of phenomena).

note: split alignments are different from "multi-mappers" where the entire read
maps maps equally well to, say, chr4 and chr1. Split reads maps part to chr1,
and part to chr4

See again the SAMv1.pdf for the definition of multi-mapping

### The SA tag can result in a 'quadratic explosion of data'

Read mappers output the `SA` tag on each part of the split read, indicating
where the other parts of the split read. Interestingly, this could lead to a
quadratic explosion of data, because if a read is split into 4 pieces, then
each read would would have an SA tag with 3 segments, so 3\*4 segments will be
documented in the SA tag.

### Reconstructing a split alignment given the primary alignment

If we are given the the primary alignment of an arbitrary split read, then we
can construct what that split looks like compared to the reference genome.

If we are not given the primary alignment (e.g. we are starting from a
supplementary alignment) then we can search the `SA` list for the one that is
primary, because at least one will be.

Now that we have the primary alignment, it will have the `SEQ` and the `SA` tag
containing the `CIGAR` of all the different parts of the split. Therefore, we
can piece together the complete picture of the entire split alignment.

![](/media/linear-alignment.png)
Figure showing JBrowse 2 piecing together a long read vs the reference genome from a single read

I can take the CIGAR strings of the primary alignment and each of the segments
of the SA tag, sort them by the amount of softclipping in them, and then this
tells me where each piece of the split alignment came from in the original
`SEQ`

### Reconstructing the derived genome is easier with SAM than with VCF breakends?

An interesting outcome of this is that from a single record in a BAM file, I
can reconstruct the "derived" genome around a region of interest from a single
read.

If I was to try to do this with the VCF Breakend specification, it may actually
be more challenging than from a SAM read. This is because a Breakend in VCF
format is only an edge in a graph (and the sequences are nodes). Therefore, in
order to properly reconstruct a structural variant from a VCF with Breakends, I
would have to construct the graph,

Now, this has caveats: a single read is noisy and does not contain as aggregate
evidence as looking at all the reads in a region. But still, interpretation of
the VCF breakend specification is challenging due to imposing a sequence graph
on the genome, while the SA tag remains just a simple set of linear alignments
that can easily be pieces together

## How do you detect SVs with paired-end reads?

Paired-end reads are short reads, e.g. 150bp each. This makes them unable to
recover some large structural variants.

However, paired-end reads have a number of attributes that can be used to
detect paired end reads

### Distance between pairs being abnormally large or short

The distance between pairs is encoded by the `TLEN` column in the `SAM` format.
The distance between pairs with good mapping is relatively constant and called
the "insert length". This comes from how the sequencing is done: paired-end
sequencing performs sequencing on both ends of a fragment.

But, if you are mapping reads vs the reference genome, and you observe that
they are abnormally far apart, say 50kb apart instead of 1kb apart, this may
indicate there your sample contains a deletion relative to the reference.

### An abundance of reads being "clipped" at a particular position

This can indicate that part of the reads map well, but then there was an abrupt
stop to the mapping. This might mean that there is a sequence that was an
insertion at that position, or a deletion, or a translocation.

The clipping is indicated by the CIGAR string, either at the start or end of it
by an S or an H

The S indicates "soft clipping", and indicates that the sequence of the clipped
portion can be found in the `SEQ` field of the primary alignment.

### Unexpected pair orientation

With standard paired end sequencing, the pairs normally point at each other

```
forward reverse
 --->    <---
```

If the stranded-ness of the pair is off, then it could indicate a structural variant

```typescript
// rnext: rnext column in sam
// ref: refname column in sam
// flags: flag integer in sam
// tlen: tlen column in sam
// code adapted from IGV
function getPairOrientation(
  flags: number,
  ref: string,
  rnext: string,
  tlen: number,
) {
  // this read is not unmapped &&
  // this read's mate is also not unmapped &&
  // this read's mate is on the same reference genome
  if (!flags & 4 && !flags & 8 && ref === rnext) {
    const s1 = flags & 16 ? 'R' : 'F'
    const s2 = flags & 32 ? 'R' : 'F'
    let o1 = ' '
    let o2 = ' '

    // if first in pair
    if (flags & 64) {
      o1 = '1'
      o2 = '2'
    }

    // else if second in pair
    else if (flags & 128) {
      o1 = '2'
      o2 = '1'
    }

    const tmp = []
    if (tlen > 0) {
      tmp[0] = s1
      tmp[1] = o1
      tmp[2] = s2
      tmp[3] = o2
    } else {
      tmp[2] = s1
      tmp[3] = o1
      tmp[0] = s2
      tmp[1] = o2
    }
    return tmp.join('')
  }
  return null
}
```

If you have standard paired end reads, it will return `FR` forward-reverse, similar to the text diagram

```
forward reverse
 --->    <---
```

This guide from IGV is helpful for interpreting the pair directionality with
patterns of SVs using "Color by pair orientation"

https://software.broadinstitute.org/software/igv/interpreting_pair_orientations

### Caveat about TLEN

Note that `TLEN` is a field in the SAM format that is somewhat ill defined,
at least in the sense that different tools may use it differently
https://github.com/pysam-developers/pysam/issues/667#issuecomment-381521767

If needed, you can calculate `TLEN` yourself if process the file yourself
(process all reads, get the actual records for the pairs, and calculate
distance) but I have not had trouble with basic usage of tools that rely on the
`TLEN` from the data files themselves

## How does clipping work?
