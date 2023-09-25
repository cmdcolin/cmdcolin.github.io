---
title:
  I see you don't have noUncheckedIndexedAccess:true. Are you sure you didn't
  mean Record<string, X|undefined>?
date: 2023-09-27
---

It is common in typescript to write Record<string,X> for whatever type X you
store in an object (or {[key:string]:X}).

But, are you sure you're actually going to get a string back?

There is an actually quite cool Typescript setting called
noUncheckedIndexedAccess that will always make the return type of any access you
make X|undefined, but very few people use this setting, it is default false.

Therefore: ask yourself. Do you have a Record<string,X> or
Record<string,X|undefined>?

Or should you consider using noUncheckedIndexedAccess??!!! In my current
project, turning it on produces

```
[10:06:14 PM] Found 1006 errors.
```

Enjoy! https://www.typescriptlang.org/tsconfig#noUncheckedIndexedAccess
