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

## Introducing: the `noUncheckedIndexedAccess` tsconfig.json setting

There is actually a built-in Typescript setting called
[`noUncheckedIndexedAccess`](https://www.typescriptlang.org/tsconfig#noUncheckedIndexedAccess)

This setting makes the return type of accessing any Record or Array into an
`T|undefined`.

The catch?

- This setting is turned off by default
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

## Footnote 2: Consider using a `Map` instead

The `Map::get` method returns `T|undefined`, so it forces you to consider the
undefined case always. I find Maps slightly more cumbersome to use than plain
old objects, but has this benefit amongst others!

## Footnote 3: Small downside to `Record<string, T|undefined>`

Maybe you are certain there aren't actually undefined values stored in your
object, and you just used `Record<string, T|undefined>` to be able to say
`obj['randomthing']` returns undefined.

Well, now calling e.g. `Object.values(obj)` will return `(T|undefined)[]`
(similar for `Object.entries`) which is slightly annoying as a user, why may
want it to just be `T[]` but they can non-null assert or filter out potential
undefined's as a workaround.

## Footnote 4: Small upside to `Record<string, T|undefined>`

If you read this article and said, ya, I'm gonna use `noUncheckedIndexedAccess`
in the tsconfig.json of my library, and you feel all safe and cozy using
`Record<string, T>`, well your users may still have trouble: if the consumers of
your library don't use the `noUncheckedIndexedAccess` tsconfig.json setting,
then they will not get the benefit of that undefined condition unless you
explicitly mark your exported types as `Record<string, T|undefined>`

## Footnote 5: See my updated article

https://cmdcolin.github.io/posts/2024-10-29-superstitionsbegone
