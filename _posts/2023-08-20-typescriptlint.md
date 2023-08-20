---
title: ~7 eslint rules that will tumble the lint right off your lil socks
date: 2023-08-20
---

Do you think of your linter as a piece of crap that makes annoying suggestions
that are best ignored? Well you will absolutely think more bad things about your
linter after you enable some of these rules (and maybe thank it for other ones)

### @typescript-eslint/no-unsafe-\*

You think your codebase is safe? You got `noImplicitAny` and you feel cozy in
bed at night? Then you better wake up little one, the rumble and tumble of the
linter is now beginning with this combo pack of @typescript-eslint rules:

- `@typescript-eslint/no-unsafe-argument` - Disallow calling a function with a
  value with type any
- `@typescript-eslint/no-unsafe-assignment` - Disallow assigning a value with
  type any to variables and properties
- `@typescript-eslint/no-unsafe-call` - Disallow calling a value with type any
- `@typescript-eslint/no-unsafe-member-access` - Disallow member access on a
  value with type any
- `@typescript-eslint/no-unsafe-return` - Disallow returning a value with type
  any from a function

These rules will absolutely crush the usage of type `any` out of your codebase
in a way that no tsconfig setting can.

These are part of the "types required"
`@typescript-eslint/recommended-type-checked` rule set which is separate from
`@typescript-eslint/recommended`!

These rules might be difficult to enable because your code has been such a bad
mess for so long that you will have to incrementally work towards enabling it if
it is even possible.

### @typescript-eslint/no-explicit-any

A true classic if I do say so myself. If you ever explicitly write the type
`any`, you have to additionally, SHAEMFULLY, write out
`// eslint-disable-next-line @typescript-eslint/no-explicit-any` to allow it to
continue living on living as a line of code in your codebase. I happen to have
done this many times.

### @typescript-eslint/no-floating-promises

Do you ever look in your web console and see a "Uncaught (in promise)" error? Do
you sheepishly blush, knowing your code is a terrible amalgamation of chaos?
Well you SHOULD.

But a shining light could come to you from this lint rule...you can turn on
`@typescript-eslint/no-floating-promises` and it will actually alert you when
you forget to handle a promise

Also note: there is also apparently a code-themed darkwave band that named
themselves "Uncaught (in promise)". Enjoy
https://uncaughtinpromise.bandcamp.com/track/hamilton-leliumoj

### unicorn/prefer-set-has

Coming to us from the land of eslint-plugin-unicorn, which has a number of
delightful rules that don't really belong anywhere else, we have a rule that
could save you from making accidentally quadratic code.

While most usages of javascript don't have big enough datasets for this to
matter, imagine for a moment that you write some code that does something like
this

```typescript
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
for (let i = 0; i < arr1.length; i++) {
  if (arr2.includes(arr1[i])) {
    alert('Found an element in arr1 that matches arr2')
  }
}
```

This is bad because the `includes` statement is linear in time and your loop
itself is linear in time, so you get
[accidentally quadratic](https://accidentallyquadratic.tumblr.com/) behavior.

But unicorn/prefer-set-has can not just warn you, but actually can auto-fix your
code to use `Set` pretty reliably. It fixed several instances of this in a
larger project

```typescript
const arr1 = [1, 2, 3]
const arr2 = new Set([4, 5, 6])
for (let i = 0; i < arr1.length; i++) {
  if (arr2.has(arr1[i])) {
    alert('Found an element in arr1 that matches arr2')
  }
}
```

### curly

Coming to us from the land of weird built-in eslint rules, this is one of the
few "stylistic" rules I care about eslint performing, because prettier won't do
it

Fail

```typescript
if (test) console.log('do thing')
```

This drives me crazy. This eslint rule auto-fixes to add curlies. Yay

```typescript
if (test) {
  console.log('do thing')
}
```

rule about prettier and curlies https://github.com/prettier/prettier/issues/7659

I know, I know, we all want OG Horstmann style, but we can't have nice things
all the time https://en.wikipedia.org/wiki/Indentation_style

### unicorn/no-array-for-each

This is a controversial one, but this rule calls js programmers back 'round to
the fire of the for loop. Specifically: the for-of loop

It is very nice and easy way to loop over your elements, can be auto-fixed by
this eslint rule, and is as a bonus, and is sometimes a
non-trivial-amount-faster

Fail

```typescript
array.forEach(elt => console.log(elt))
```

Pass

```typescript
for (const elt of array) {
  console.log(elt)
}
```

### @typescript-eslint/prefer-ts-expect-error

This is one for the machete wielding hackers of the javascript jungle who add,
despite the best of your intentions, one or more `// @ts-ignore` statements to
their code. Change those to `.. @ts-expect-error` statements! The wilderness of
your javascript jungle might just one day cause that expect-error to one day be
unneeded.

## Conclusion?

There are many cool eslint rules. I think turning on the types-required
@typescript-eslint rule set is important to try out. Try out the
unicorn/recommended set also, and let me know if you have any other favorites

### Footnote

Run your eslint with --report-unused-disable-directives --max-warnings 0. Don't
accept warnings, and auto-remove unused eslint disables!

