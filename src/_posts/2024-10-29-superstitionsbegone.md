---
title: "Begone, superstitious if-statements!"
date: 2024-10-29T00:00:00.000Z
---

![](/superstitions.png)

[adapted from](https://creazilla.com/media/emoji/47538/crossed-fingers)

## Very superstitious

As a codebase grows, it often ends up accumulating a lot of what one might call
'superstitious' if-statements. They might have even 'fixed a bug' a long time
ago. But, if your typescript types can tell you that such a condition is not
even possible, should you even have these superstitions anymore?

By using `@typescript-eslint/no-unnecessary-condition`, you can begin the
process of exorcising these superstitious if-statements from your codebase!

https://typescript-eslint.io/rules/no-unnecessary-condition/

## Enabling this rule

You can enable this rule just by itself, or you can enable it as part of the
`strict-type-checked` rule set.

I personally enabled this rule almost on accident almost when I "upgraded" from
the `recommended-type-checked` rule set to the `strict-type-checked` ruleset. I
wasn't even aware of the difference between these two rulesets and just sort of
switched to the strict version randomly one day.

Generally I think it's good to crank up typescript-eslint strictness as much as
you can. Even if you have to disable some of the rules from the ruleset, the
rule packs are full of goodies that are often worth enabling!

Now, I know it's a bit low effort to blog about lint rules as often as I do, but
I think these rule packs are probably a bit underused by the community, and
additionally...

I also wanted to cover...the catch

## You should probably make `noUncheckedIndexedAccess:true` to use this rule

To use `@typescript-eslint/no-unnecessary-condition` properly in a lot of
codebases, you may need to make `noUncheckedIndexedAccess: true` in your
tsconfig.json.

The reason being is that the rule will otherwise flag your good natured checks
for `if(object[key])` since a lot of objects are typed `Record<string,string>`

I have previously written about `noUncheckedIndexedAccess` tsconfig.json
https://cmdcolin.github.io/posts/2023-09-27-areyousure and in my previous
article, my conclusion was to NOT to enable it, but my recent experience now has
made it so that I think it is better if you DO enable it.

I am a waffler and sometimes yesterday's "simple" is today's gigantic hack that
I have to fix now

## What should you expect after enabling everything?

After you enable `noUncheckedIndexedAccess` above, you may have to add some well
placed non-null assertions (e.g. the !, but this is no worse than what your code
was before), or alternatively change your code to handle the new undefined part
of the types.

In a small number of cases, I had to keep a couple of superstitious
if-statements alive with a disable-next-line
`// eslint-disable-next-line for @typescript-eslint/no-unnecessary-condition`

...but these are generally due to poor typescript typing, and is probably a
signal to refactor!

## Playground

Example code, try it in the typescript-eslint playground

- [noUncheckedIndexedAccess:false](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.tsx&code=MYewdgzgLgBCBGArGBeGBvGBDAXDALDAL7YQwBKApqAE4AmAPNDQJZgDmANGAK4C28SjQB8AKFCRYAa0oBPVDADkWRePDQYANywAbHpQUJEAbRmyAuqJYAzGAAptegwEIUaHmDqVrbSnQCUGKKiREA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYkACAXAngA4oDG0AlobgLQrzkB2uA9AwPbWwMOIkrIBDaPmok2DACblc5ceiiJo0NtEgBfEGqA&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3QAacDUhFYAVSLQ%2Bg9ABMAkkVXoAHmoCC0aOhLCwAMwCGqEuikBfEPaA&tokens=false)
- [noUncheckedIndexedAccess:true](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.tsx&code=MYewdgzgLgBCBGArGBeGBvGBDAXDALDAL7YQwBKApqAE4AmAPNDQJZgDmANGAK4C28SjQB8AKFCRYAa0oBPVDADkWRePDQYANywAbHpQUJEAbRmyAuqJYAzGAAptegwEIUaHmDqVrbSnQCUGKKiREA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYkACAXAngA4oDG0AlobgLQrzkB2uA9AwPbWwMOIkrIBDaPmok2DACblc5ceiiJo0NtEgBfEGqA&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3QAacDUhFYAVSLQ%2Bg9ABMAkkVXoAHmoCC0aOhLCwo9FIC%2BIK0A&tokens=false)

## Happy halloween!

Enjoy this collection of wikimedia Jack o' Lanterns
https://commons.wikimedia.org/wiki/Category:Jack-o%27-lantern (make sure to
visit the subcategories)
