---
title: Be careful when you rename an optional "prop" in typescript
date: 2024-09-18T00:00:00.000Z
layout: ../../layouts/MarkdownLayout.astro
---

## Scenario

The "doStuff" team at your company created a function for you to use

```typescript
function doStuff({ x, y, z }: { x: number; y: number; z?: number }) {
  console.log({ x, y, z })
}
```

and then you diligently call it in your code like this

```typescript
const obj = { x: 1, y: 2, z: 3 }
doStuff(obj)
```

all fine and good

## Later on, the optional "prop" is renamed

The `doStuff` team says, well, it's not really a true "z coordinate"....it's
more of a "z-index" so they change the function definition to be

```typescript
function doStuff({ x, y, zIndex }: { x: number; y: number; zIndex?: number }) {
  console.log({ x, y, zIndex })
}
```

## Now you might have a bug

Since `zIndex` is optional, typescript will not warn you about `zIndex` not
being supplied by your existing code. Typescript is also not bothered that you
have this "rider" variable `z` that "does nothing" in this case.

```typescript
const obj = { x: 1, y: 2, z: 3 }
doStuff(obj) // no typescript error, z is no longer used, zIndex is optional, and you don't get the behavior you want
```

## But wait, why didn't typescript catch it?

Here is the funny thing:

- Typescript DOES NOT catch this issue when you pass it via this separately
  created "obj" variable.

- Typescript DOES(!!!) catch this issue when you pass it directly to the
  function (as an "object literal")

```typescript
doStuff({ x: 1, y: 2, z: 3 }) // ERROR!
// Object literal may only specify known properties, and 'z' does not exist in type '{ x: number; y: number; zIndex?: number | undefined; }'.
```

Demo playground

https://www.typescriptlang.org/play/?#code/FAMwrgdgxgLglgewgAgCYIMozCEAKAb2QA8AaZAT3IC9kBfALmSOKYjAFsAjAUwCcA3JTadeg5NQD8I7v3oBKZsGTIoSAM4IANjwB0WhAHNCJclQkLgdYKEixEKdFhwgATCbKUaASQioexPRMLDJiQhSh-ELUvv7E0sjssnwKSipqEJo6+kYeZj5+AZbWNsBO2LiErACMpBGupNQMAMx08qUA9B1oCDzqqgCGMFAAFshwMGWYFW5VDLX1jS1tNl09fRAA5DCDw2MTwBnqOwhcAFYAvAQ1dQwNTa1Tzrjup2ftpUA

## Footnote

I am certainly not the only person to come across this "topic/issue", and people
often come across it in different contexts.

My particular take away is to "be careful when you rename optional props". Of
course, changing any API comes with risks, but this one particularly :)

## More resources

Typescript Deep Dive - "Freshness"

https://basarat.gitbook.io/typescript/type-system/freshness

## Follow up

This post was given lots of downvotes in /r/typescript and sarcasm that "no duh,
breaking changes are breaking".

However, some helpful comments were made also. Read on
https://www.reddit.com/r/typescript/comments/1fk1rqe/be_careful_when_you_rename_an_optional_prop_in/

I think maybe people are distracted that I posited this as the "doStuff team" vs
"you", but keep in mind this could just be your left brain vs right brain in an
actively developed codebase
