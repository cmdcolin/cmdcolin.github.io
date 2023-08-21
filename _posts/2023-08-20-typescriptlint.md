---
title: ~7 eslint rules that will tumble the lint right off your lil sockies
date: 2023-08-20
---

Do you think of your linter as a piece of crap that makes annoying suggestions
that are best ignored?

Well, after you enable some of these amazing new rules you'll probably continue
to do so with renewed gusto, but maybe thank it just a lil bit

![](/cat.jpg)

Figure 1. Your project manager looks on as you clean up the dust bunnies from
the codebase

### @typescript-eslint/no-unsafe-\*

You think your codebase is safe? You got `noImplicitAny` and you feel cozy in
bed at night?

Then you better wake up! The rumble and tumble of the linter starts off with the
`@typescript-eslint/no-unsafe-*` rule pack\*. These rules will absolutely crush
the usage of type `any` out of your codebase in a way that no tsconfig.json
setting can.

But what does `noImplicitAny` even do if not check for usage of any?

Well, the `noImplicitAny` tsconfig is very limited in scope... it is not
catching all "implied uses of type `any` in your codebase"; it's just catching
narrow usages where e.g. you don't specify the type of a function parameter in
your function definition. Example:

```typescript
function foo(param) {
  return param + 1
}
```

That is allowed with noImplicitAny disabled, it just "implicitly sets param to
type `any`"

The no-unsafe-\* rule pack is made of ~5 rules aimed at removing usage of type
`any`, explicit or implicit in your code

- [`@typescript-eslint/no-unsafe-argument`](https://typescript-eslint.io/rules/no-unsafe-argument) -
  Disallow calling a function with a value with type `any`
- [`@typescript-eslint/no-unsafe-assignment`](https://typescript-eslint.io/rules/no-unsafe-assignment) -
  Disallow assigning a value with type `any` to variables and properties
- [`@typescript-eslint/no-unsafe-call`](https://typescript-eslint.io/rules/no-unsafe-call) -
  Disallow calling a value with type `any`
- [`@typescript-eslint/no-unsafe-member-access`](https://typescript-eslint.io/rules/no-unsafe-member-access) -
  Disallow member access on a value with type `any`
- [`@typescript-eslint/no-unsafe-return`](https://typescript-eslint.io/rules/no-unsafe-return) -
  Disallow returning a value with type `any` from a function

Fail

```typescript
function jsonParse(str: string) {
  // @typescript-eslint/no-unsafe-assignment balks because JSON.parse returns type any
  const x = JSON.parse(str)
}
```

Pass

```typescript
function jsonParse(str: string) {
  const x = JSON.parse(str) as { a: number; b: number }
}
```

Whether it's truly better to use the `as` casts is up to you, but it may be
better than insidious type `any` flowing through your type system!

Note 1: The no-unsafe rule set is part of the "types required"
`@typescript-eslint/recommended-type-checked` rule set which is separate from
`@typescript-eslint/recommended`!

Note 2: These rules might be difficult to enable because your code has been such
a bad mess for so long that you will have to incrementally work towards
enabling, if it even is possible at this point (smdh)

### @typescript-eslint/no-explicit-any

Link:
https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-explicit-any.md

This rule is a true typescript classic if I do say so myself

If you ever explicitly write the type `any`, you have to additionally,
SHAEMFULLY, write out
`// eslint-disable-next-line @typescript-eslint/no-explicit-any` to allow it to
continue living on living as a line of code in your codebase. I happen to have
done this many times.

Fail

```typescript
function x(param: any) {
  return param + 1
}
```

Pass

```typescript
// big muscle emoji energy, just disable the wimpy error
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function x(param: any) {
  return param + 1
}
```

### @typescript-eslint/no-floating-promises

Link:
https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-floating-promises.md

Do you ever look in your web console and see a "Uncaught (in promise)" error? Do
you sheepishly blush, knowing your code is a terrible amalgamation of chaos?
Well you SHOULD.

But a shining light could come to you from this lint rule...you can turn on
`@typescript-eslint/no-floating-promises` and it will actually alert you when
you forget to handle a promise

Fail

```typescript
function getSomeStuff() {
  // Uncaught (in promise) error if fails to fetch
  fetch('http://google.com')
}
```

Pass

```typescript
async function getSomeStuff() {
  // properly awaited
  const result = await fetch('http://google.com')
}
```

Note 1: this issue happens more than you might think. It is a 'types required'
rule and part of the recommended-type-checked pack, but even if you don't enable
the full recommended-type-checked pack, I highly recommend enabling it. It could
have been my number one in the list.

Note 2: If you have an async "IIFE" (immediately invoked function expression),
you may have to explicitly disable this warning. This is common in useEffect in
React for example. But be aware, by ignoring the error you should have full
error handling built into your IIFE (see Footnote 3)

Note 3: there is also apparently a code-themed darkwave band that named
themselves "Uncaught (in promise)". Enjoy
https://uncaughtinpromise.bandcamp.com/track/hamilton-leliumoj

### unicorn/prefer-set-has

Link:
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-has.md

Coming to us from the land of eslint-plugin-unicorn, we have a rule that could
save you from making
[accidentally quadratic](https://accidentallyquadratic.tumblr.com/) code

Fail

```typescript
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
for (let i = 0; i < arr1.length; i++) {
  // bad: includes is linear inside already linear loop
  if (arr2.includes(arr1[i])) {
    alert('Found an element in arr1 that matches arr2')
  }
}
```

Pass (autofixed from above!)

```typescript
const arr1 = [1, 2, 3]
const arr2 = new Set([4, 5, 6])
for (let i = 0; i < arr1.length; i++) {
  // good: fast set based membership :+1:
  if (arr2.has(arr1[i])) {
    alert('Found an element in arr1 that matches arr2')
  }
}
```

Most usages of javascript don't handle big enough datasets for this to matter,
but that's what many accidentally quadratic authors think...before their code
blows up

### curly

Link: https://eslint.org/docs/latest/rules/curly

Coming to us from the land of ancient built-in eslint rules, this is one of the
few "stylistic" rules I like eslint performing, because prettier won't do it

Fail

```typescript
if (test) console.log('do thing')
```

Pass (autofixed from above!)

```typescript
if (test) {
  console.log('do thing')
}
```

Discussion about prettier and curlies
https://github.com/prettier/prettier/issues/7659

Note: I know, I know, we all want that
[OG Horstmann style indentation](https://en.wikipedia.org/wiki/Indentation_style),
but we can't have nice things

### unicorn/no-array-for-each

Link:
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-for-each.md

This is perhaps a controversial one, but this rule bans use of
Array.prototype.forEach and calls JS programmers back 'round to the fire of the
for loop. Specifically: the for-of loop

The callback based forEach dominated the jquery era, but the for-of loop is
pretty easy to write, and can be auto-fixed by this eslint rule, and as a bonus,
is sometimes a non-trivial-amount-faster

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

There is also an explanation at the rule link
(https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-for-each.md)
that there is improved "type narrowing" and better detection of unused variables
with the for-loop for typescript users.

### @typescript-eslint/prefer-ts-expect-error

Link: https://typescript-eslint.io/rules/prefer-ts-expect-error/

This is one for you machete wielding hackers of the javascript jungle who add,
despite the best of your intentions, one or more ill-advised `// @ts-ignore`
statements to their code.

Change those to `// @ts-expect-error` statements! It's not much better, but you
can feel slightly cozier in that bed of yours. The wilderness of your javascript
jungle might one day change, causing that comment to one day be unneeded.

Fail

```typescript
// ts-ignore
doSomethingReallyDumb()
```

Pass

```typescript
// ts-expect-error
doSomethingReallyDumb() // cool we're ok now
```

## Conclusion?

There are many cool eslint rules. I think turning on the
`@typescript-eslint/recommended-type-checked` rule set is important to try out.
Try out the unicorn/recommended set also, and let me know if you have any other
favorites

### Footnote 1. Lint your lint

Run your eslint with --report-unused-disable-directives --max-warnings 0. Don't
accept warnings, and auto-remove unused eslint disables!

### Footnote 2. In older @typescript-eslint versions

The @typescript-eslint/recommended-type-checked is called
@typescript-eslint/recommended-requiring-type-checking in older versions

### Footnote 3. Example of the "full error handling" in IIFE

```typescript
const [data, setData] = useState<MyData>()
const [data, setError] = useState<unknown>()
useEffect(() => {
  // gotta ignore the warning in this case
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  ;(async () => {
    // do full try/catch error handling in here because the "buck stops here"
    // as far as the promise is concerned
    try {
      const response = await fetch('http://google.com')
      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${await response.text()}`)
      }
      const result = await response.json()
      setData(result)
    } catch (e) {
      setError(e)
    }
  })()
}, [])
```

### Footnote 4. Example of the type narrowing

```typescript
export function typeNarrowingForLoop() {
  let x
  const arr = [1, 2, 3]
  for (const elt of arr) {
    x = elt
  }
  return x // some type inference took place from usage inside for loop, type is number|undefined
}

export function nonTypeNarrowingForEach() {
  let x
  const arr = [1, 2, 3]
  arr.forEach(elt => {
    x = elt
  })
  return x // no type inference took place from the forEach, type is undefined
}
```
