---
title: Handling component state with React...you gotta reset it sometimes
date: 2022-10-10
---

**Note:** Before reaching for `useEffect` + `useState` to fetch data, check
whether you actually need an effect: https://react.dev/learn/you-might-not-need-an-effect.
Libraries like `react-query` or `swr` (see Footnote 3) also handle many of
these concerns. The examples below assume you've decided `useEffect` is the
right tool.

---

If you make a React component with a prop for an item id and a `useEffect` to
fetch data for that item, you probably also have a `useState` for the result or
error. The thing to remember is

**you have to reset that state, including error state, when your props change**

It seems obvious, but here are some working examples

## Part 1: Having component state for API response or error

Working codesandbox

https://codesandbox.io/s/practical-rubin-l2d5el?file=/src/App.tsx:0-2003

When refetching a new item, you need to clear the previous state — otherwise
you'll show stale results while the new fetch is in flight.

```tsx
import { useState, useEffect } from 'react'

interface PokemonType {
  type: {
    name: string
  }
}
interface PokemonInfo {
  name: string
  types: PokemonType[]
}

// util fetch function to throw if !response.ok, I use this util often
async function myfetch(url: string, opts?: RequestInit) {
  const response = await fetch(url, opts)
  if (!response.ok) {
    throw new Error(
      `Error fetching ${url}: HTTP ${response.status} ${await response.text()}`,
    )
  }
  return response.json()
}

function ErrorMessage({ error }: { error: unknown }) {
  return <div style={{ background: 'red' }}>{`${error}`}</div>
}

function PokemonCard({ pokemonName }: { pokemonName: string }) {
  const [error, setError] = useState<unknown>()
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfo>()
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        // important: reset the error and item state of the component!
        setError(undefined)
        setPokemonInfo(undefined)

        const data = await myfetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
        )
        if (!cancelled) {
          setPokemonInfo(data)
        }
      } catch (e) {
        console.error(e)
        if (!cancelled) {
          setError(e)
        }
      }
    })()

    return () => {
      cancelled = true
    }
  }, [pokemonName])

  return (
    <div>
      {error ? (
        <ErrorMessage error={error} />
      ) : pokemonInfo ? (
        <div>
          {pokemonInfo.name} is of type{' '}
          {pokemonInfo.types.map(t => t.type.name).join(', ')}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default function App() {
  const [value, setValue] = useState('oddish')
  return (
    <div className="App">
      <label htmlFor="pokemon_name">Pokemon name</label>
      <input
        id="pokemon_name"
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <PokemonCard pokemonName={value} />
    </div>
  )
}
```

## Part 2: A custom hook?

You can encapsulate the related hooks (`useState` for error and data, plus
`useEffect`) into a single custom hook. The approach is the same, but callers
just write `usePokemonInfo(pokemonName)` and get error handling and fetching for
free.

Working codesandbox

https://codesandbox.io/s/fragrant-wind-008pfn?file=/src/App.tsx:0-2234

```tsx
import { useState, useEffect } from 'react'

// ...same myfetch, PokemonType, PokemonInfo, ErrorMessage as above...

function usePokemonInfo(pokemonName: string) {
  const [error, setError] = useState<unknown>()
  const [pokemonInfo, setItemInfo] = useState<PokemonInfo>()
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        setItemInfo(undefined) // <-- important to reset the state of the app
        setError(undefined) // <-- important to reset the state of the app
        const data = await myfetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
        )
        if (!cancelled) {
          setItemInfo(data)
        }
      } catch (e) {
        console.error(e)
        if (!cancelled) {
          setError(e)
        }
      }
    })()

    return () => {
      cancelled = true
    }
  }, [pokemonName])

  return [error, pokemonInfo] as const
}

function PokemonCard({ pokemonName }: { pokemonName: string }) {
  const [error, pokemonInfo] = usePokemonInfo(pokemonName)

  return (
    <div>
      {error ? (
        <ErrorMessage error={error} />
      ) : pokemonInfo ? (
        <div>
          {pokemonInfo.name} is of type{' '}
          {pokemonInfo.types.map(t => t.type.name).join(', ')}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default function App() {
  const [value, setValue] = useState('oddish')
  return (
    <div className="App">
      <label htmlFor="pokemon_name">Pokemon name</label>
      <input
        id="pokemon_name"
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <PokemonCard pokemonName={value} />
    </div>
  )
}
```

## Conclusion

It's easy to forget error handling in async `useEffect` code — there are no
lint rules to catch it, so errors often go silently uncaught. If you don't
handle the error manually, your user won't know anything went wrong.

The broader point is also how "sticky" `useState` is. You need to reset your
component state when props change — in the code above, that's the
`setError(undefined)` and `setPokemonInfo(undefined)` calls before fetching a
new Pokemon.

## Footnote 0 - Web perf pontificating

Fetching inside a component can lead to what web-perf folks call waterfall.
Lifting the fetch to a parent might reduce individual requests, but it's quite
a different architecture.

## Footnote 1 - ErrorBoundaries don't automatically save you from manually handling error

`ErrorBoundary` does not automatically catch errors from `useEffect`. To route
a `useEffect` error through an ErrorBoundary (e.g. `react-error-boundary`), you
can throw it in the component body:

```tsx
import { ErrorBoundary } from 'react-error-boundary'

function PokemonCard({ pokemonName }: { pokemonName: string }) {
  const [error, pokemonInfo] = usePokemonInfo(pokemonName)
  if (error) {
    throw error
  }

  return (
    <div>
      {pokemonInfo ? (
        <div>
          {pokemonInfo.name} is of type{' '}
          {pokemonInfo.types.map(t => t.type.name).join(', ')}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default function App() {
  const [value, setValue] = useState('oddish')
  return (
    <ErrorBoundary FallbackComponent={({ error }) => <div>{`${error}`}</div>}>
      <PokemonCard pokemonName={value} />
    </ErrorBoundary>
  )
}
```

Another trick is throwing inside the `useState` setter callback, which lets you
drop the separate error state entirely — though you'd still need an ErrorBoundary
to display it nicely.

```tsx
useEffect(() => {
  let cancelled = false
  ;(async () => {
    try {
      // important: reset the error and item state of the component!
      setPokemonInfo(undefined)

      const data = await myfetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
      )
      if (!cancelled) {
        setPokemonInfo(data)
      }
    } catch (e) {
      console.error(e)
      if (!cancelled) {
        setPokemonInfo(() => {
          throw e
        })
      }
    }
  })()

  return () => {
    cancelled = true
  }
}, [pokemonName])
```

## Footnote 2: The future with React data fetching

See https://github.com/reactjs/rfcs/pull/229

## Footnote 3: Using react-query or swr

`@tanstack/react-query` v4 demo:

https://codesandbox.io/s/hungry-framework-ctmhkz?file=/src/App.tsx

`swr` demo:

https://codesandbox.io/s/condescending-poitras-fiwxym?file=/src/App.tsx

These libraries do a lot more than the simple hooks above, so they carry more
baggage, but may be worth it depending on your use case.

## Footnote 4: Fetching is just one aspect of this blogpost

The broader point is how "sticky" `useState` can be. I run into this beyond
just fetching — anytime I have a controlled component that needs to reset when
its props change.

See also
https://bikeshedd.ing/posts/use_state_should_require_a_dependency_array/

## Footnote 5: You can also use the "key" prop as an alternative to manually resetting state

See https://codesandbox.io/s/cool-grass-9nb43y?file=/src/App.tsx

This forces the component to unmount and remount, wiping all state. A quote
from https://kentcdodds.com/blog/understanding-reacts-key-prop explains it well:

"This allows you to return the exact same element type, but force React to
unmount the previous instance, and mount a new one. This means that all state
that had existed in the component at the time is completely removed and the
component is 'reinitialized' for all intents and purposes."

I'm not sure I'd recommend it by default — unmounting has side effects — but
it's useful to know about.

See also
https://react.dev/learn/you-might-not-need-an-effect#resetting-all-state-when-a-prop-changes

## Footnote 6: The `use` hook

https://react.dev/reference/react/use

`use` is a stable React API that reads a Promise or context value. Its main
data-fetching use case is with Server Components: the server creates a Promise,
passes it as a prop, and the client component calls `use(promise)`, which
suspends until it resolves (integrated with Suspense and ErrorBoundary). It's
not really a replacement for the `useEffect` pattern shown in this post — if
you're doing pure client-side fetching without Server Components, `use` doesn't
help much here.

## Footnote 7: AbortController vs the `cancelled` flag

The examples use a `cancelled` boolean rather than `AbortController`.
`AbortController` is more correct — it actually cancels the in-flight request —
but threading an `AbortSignal` through every layer of your call chain,
especially when the fetch is buried several functions deep, adds real complexity
and is easy to get wrong. The `cancelled` flag is simpler, covers the part that
matters (no stale renders), and is easier to reason about. If cancelling the
request itself matters for your use case (e.g. reducing server load),
`AbortController` is worth the extra work.
