---
title: Idea for a "short-circuiting evaluation" operator in javascript
date: 2024-08-03
---

## Background

This idea that I had is a little bit similar to the nullish coalescing operator

With the nullish coalescing we have a cool operator like this

```js
const result = value ?? default
```

In the above code, if `value` is `undefined` (or `null`!), then we get variable
`default` in the result, otherwise we get `value`

## My idea: the short circuit

Sometimes I want a behavior more like this:

- if `value` is undefined, then make the result undefined
- else, do the right side of the operator

```
const result = key ??? map[key]
```

Then, if `key` is `undefined`, then make result `undefined`, and not try to
access the map. If it is defined, I get to access the map

```js
const result = key === undefined ? undefined : map[key]
```

Currently I always write ternary operator to represent this instead. Ternary is
quite flexible, so ultimately, this idea is not that good. Just stick with ther
ternary right?

## Subtext of this article / conclusion

I think it is important to make sure to propagate `undefined` states through
your codebase carefully. Avoid trying to just force something into being defined
just because it is more convenient for representing a value, or to make
typescript happy, etc.

I don't intend to try to push this idea really but let me know if you have any
thoughts
