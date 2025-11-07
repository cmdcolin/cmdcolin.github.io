---
title: Things typescript didn't catch that should probably be lint rules
date: 2023-02-05T00:00:00.000Z
layout: ../../layouts/MarkdownLayout.astro
---

This is a short list of silly things that I wish Typescript would have caught
for me, but are silly logic errors

## Using `Object.entries` accidentally instead of `Object.fromEntries`

Typescript will not complain if you use `Object.entries` instead of
`Object.fromEntries`

```typescript
const stuff = [1, 2, 3]

// woops, meant to use Object.fromEntries
Object.entries(stuff.map(entry => [entry, { id: entry }]))
```

[playground](https://www.typescriptlang.org/play?#code/FAYw9gdgzgLgBLArgM2QXgNoEYA0AmHAZgF1gB5AIwCsBTEGAOhohgCcBLGqACiVQYC2AQwAO3ZmwCeaAHwYJrSTjgBvdgBMAXAskBfYgEoDQA)

Summary: should probably be a lint rule (a "types required" lint rule, a la
@typescript-eslint) not to accept arrays for Object.entries

Update 02-27-23: Proposing this rule here
https://github.com/typescript-eslint/typescript-eslint/issues/6537 (it was
rejected)

## Passing garbage to the second argument of Array.prototype.map accidentally

```typescript
function doStuff(arr: number[], extra?: { sayHiToMom: boolean }) {
  if (extra?.sayHiToMom) {
    console.log('Hi mom')
  }
  return arr
}

const stuff = [1, 2, 3]

// woops, meant to pass that as second argument to doStuff
doStuff(stuff.map(a => a * 2, { sayHiToMom: true }))
```

[playground](https://www.typescriptlang.org/play?#code/FAMwrgdgxgLglgewgAgCYIMozCEAKAQwCciAuCMAWwCMBTIgbQF0AaZWgDxiIIH5SA3gGcCATwAScACoIAsgkqlqCBABtaBCAF8AlMgHBkyOPk7c+AOhETpchXoNGjUJELW0LqhAHM8AcklkSgU-HUNkLXCiWmwiFGIiYEjgFwghGGR0nBAAXgYARhYAJhYAZiZgdCxsvCzcC0oCAAdCHIA+AgAqEuExSRl5RW4wWl0dIA)

This one would be difficult for typescript to catch, the second arg is
"thisArg", what the callback refers to as `this`

Summary: should probably be a lint rule to avoid this second arg, as it is
obscure

Update 02-27-23: This lint rule exists already :)
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-method-this-argument.md#disallow-using-the-this-argument-in-array-methods

## Any others?

Any other ones that you find in your work? This is just from the past week for
me :)

I will need to learn how to make eslint rules!
