---
title: Memoizing async functions so that you don't cache errors
date: 2022-02-26
---

There are two hard problems in computer science: [Cache invalidation and naming
things](https://martinfowler.com/bliki/TwoHardThings.html). In this post we'll
show how memoize an async function, and how to invalidate the memoization when
the promise throws an error.

This helps us with being able to re-try because since the error is not cached,
calling it again after an error retries automatically.

Example async function: fetch from the pokemon API

```javascript
async function getPokemon() {
  const id = Math.floor(Math.random() * 150)
  const url = 'https://pokeapi.co/api/v2/pokemon/' + id
  const ret = await fetch(url)
  if (!ret.ok) {
    throw new Error(
      `Failed to fetch ${url} HTTP ${ret.status} ${ret.statusText}`,
    )
  }
  return ret.json()
}
```

Here is a technique that can be used to memoize this function

```javascript
function getPokemonMemoized() {
  if (!this.promise) {
    this.promise = getPokemon().catch(e => {
      this.promise = undefined
      throw e
    })
  }
  return this.promise
}
```

The promise is held in this.promise, and the important part of this function is
that when I get an error, I clear this.promise and re-throw the error. The caller
of the function, on error, will receive the error message, but caching will not
take place, allowing retries to take place later on.

See https://cmdcolin.github.io/pokemon.html for demo

## Footnote 0: Arguments to function

If your function takes arguments, then you can use a hashmap associating the
argument with the promise. You may also consider using an LRU cache so that
your hashmap doesn't grow infinitely in size

Generally you need a way to stringify or otherwise make them able to be stored
in a Map or Object to do this.

See https://github.com/nodeca/promise-memoize for example

## Footnote 1: Error handling of `fetch`

This demo also demonstrates some basic fetch error handling, and uses
`statusText` [which happens to not exist in
HTTP/2](https://developer.mozilla.org/en-US/docs/Web/API/Response/statusText).
If you want a semblence of status message text in HTTP/2 you can try to use
await ret.json() (if the API returns json error messages) or await ret.text()
inside the catch clause, but note that it could cause yet another error to be
thrown

## Footnote 2: Global cache

You could also keep a cache in a global variable, or as a property on a class,
or other methods. I have also found it useful to have a specific function for
clearing the cache, so you can get a clean slate each time a test runs in unit
testing or similar

```javascript
let promise
async function getPokemonMemoized() {
  if (!promise) {
    promise = getPokemon().catch(e => {
      promise = undefined
      throw e
    })
  }
  return promise
}
function clearCache() {
  promise = undefined
}
```

You can also make a general purpose utility to memoize any promise function

```javascript
function memoize(fn) {
  let promise
  return () => {
    if (!promise) {
      promise = fn().catch(e => {
        promise = undefined
        throw e
      })
    }
  }
}
```

## Footnote 3 - Aborting

If you want to handle aborting, it is a bit trickier. Aborting in javascript is
handled by
[AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/AbortController).
This is an object that gives you an
[AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal)
that can be passed to fetch calls and the like to stop a big download from
happening.

In our above example, if we passed an abort signal to the first call to fetch,
and then aborted it, it would abort the fetch, [which throws a DOMException
called
"AbortError"](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort).
You can detect that it is an AbortError like this, and may choose not to
display or re-throw the abort exception

```javascript
function isAbortException(e) {
  return e instanceof Error && exception.name === 'AbortError'
}
```

Now, what if 5 functions call getPokemonMemoized(), all passing different abort
signals. What if the first one aborts? Then all the rest will get aborted also.
But what if we only want to abort the cached call if literally all of them
aborted? Then we may have to synthesize an abortcontroller inside our function

```javascript
let promise
let abortcontroller
let listeners = 0
async function getPokemonMemoized(signal) {
  if (!promise) {
    abortcontroller = new AbortController()

    // synthesize a new signal instead of using the passed in signal
    promise = getPokemon(abortcontroller.signal).catch(e => {
      promise = undefined
      throw e
    })
  }
  if (signal) {
    listeners++
    // add listener to the passed in signal
    signal.addEventListener('abort', () => {
      listeners--
      if (listeners === 0) {
        abortcontroller.abort()
      }
    })
  }
  return promise
}
```

A library my team created,
[abortable-promise-cache](https://github.com/GMOD/abortable-promise-cache),
tries to help with this scenario with a cleaner abstraction.

## Footnote 4

I have been playing through Pokemon Yellow and find it really amusing hence the
pokemon theme

Fun stuff: The cutting room floor wiki with unused moves, sounds, and sprites
in Pokemon Yellow https://tcrf.net/Pok%C3%A9mon_Yellow

## Footnote 5

This blog post mentioned in a comment thread https://zansh.in/memoizer.html has
great interactive examples and shows the "invalidate on .catch()" behavior!
