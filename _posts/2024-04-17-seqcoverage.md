## Download fasta from SARS-CoV2 genome

From
https://www.ncbi.nlm.nih.gov/nuccore/NC_045512.2?report=fasta

## Download some viral reads

From
https://trace.ncbi.nlm.nih.gov/Traces/?view=run_browser&acc=SRR28230429&display=download

## Align with minimap2

Create a small script

```bash

#!/bin/bash
minimap2 -t 8 -a -x sr "$1" "$2"  | \
samtools fixmate -u -m - - | \
samtools sort -u -@2 - | \
samtools markdup -@8 --reference "$1" - --write-index "$3"
```


Then run

```bash
easy_align.sh ref.fa file.fastq out.cram

```


This creates out.cram and out.cram.crai
