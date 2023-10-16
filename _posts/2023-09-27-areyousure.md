---
title:
  I see that noUncheckedIndexedAccess is false. Did you want to use
  Record<string, T|undefined>?
date: 2023-09-27
---

![](/clippy.jpg)

It is common in typescript to write `Record<string,T>` for whatever type `T` you
store in an object.

But, are you sure you're actually going to get an `T` back? What if some random
user provided string is used to index the Record, and it produces undefined? You
might think, as a typescripter "do I really have to add undefined to the
signature, shouldn't Typescript check this for me"? Well..

## `noUncheckedIndexedAccess`

There is actually a built-in Typescript setting called
[`noUncheckedIndexedAccess`](https://www.typescriptlang.org/tsconfig#noUncheckedIndexedAccess)
that will basically change your usage of a `Record<string,T>` into a
`Record<string,T|undefined>`. It actually makes the return type of accessing
both objects and arrays into an `T|undefined`.

The catch?

- It is default false
- It is probably too "annoying" (or produces too many "false positives") for
  most projects to warrant it being turned on
- Hence, very few people use this setting

Therefore: you really do have to ask yourself. Do you feel lucky punk? Sorry
wrong line. I mean, do you want to use a `Record<string,T>` or a
`Record<string,T|undefined>`?

Enjoy! https://www.typescriptlang.org/tsconfig#noUncheckedIndexedAccess

Discussion on why this is not on by default:
https://github.com/microsoft/TypeScript/issues/49169

## Footnote 1: Should `noUncheckedIndexedAccess` be split into two settings?

I feel like using 'untrusted input' or 'runtime values' to access a Record is
more common than using 'untrusted input' to access an array index, so it would
be sort of nice if `noUncheckedIndexedAccess` was split into two separate
settings...one for Records, one for Arrays. A common complaint is that the
'array access' part of this setting is a little too strict, and requires
non-null assertions

## Footnote 2: Consider using a Map instead

The Map .get method has the signature T|undefined, so it forces you to consider
this. Slightly more cumbersome to use than plain old objects, but has this
benefit amongst others!
