---
title: Handling component state with React...you gotta reset it sometimes
date: 2022-10-10T00:00:00.000Z
---

If you make a React component that has, say, a prop for a item id, and an async
action in a `useEffect` to fetch data for that item from an API, then you
probably also have a `useState` to set data after you get results back from your
API (or an error occurs). But, the interesting thing to me is

**you have to remember to reset that state, including error state, when your
props change**

It seems obvious, but I just wanted to write some working examples here

## Part 1: Having component state for API response or error

Working codesandbox

https://codesandbox.io/s/practical-rubin-l2d5el?file=/src/App.tsx:0-2003

In the below example, we will handle fetching from the Pokemon API, and use a
`useState` to handle the returned data or a returned error. The important thing
to highlight is: when you go to refetch a new item from the API, you likely need
to clear the state of what was previously there (unless you want to display
stale results)

```tsx
import { useState, useEffect } from 'react'

interface PokemonType {
  type: {
    name: string
  }
}
interface PokemonInfo {
  name: string
  types: PokemonType
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

Can we make a hook to make this easier? I don't often make custom hooks, but you
can try to "encapsulate" some of the multiple-related hooks (the useStates for
error, pokemonInfo, and useEffect) into a single hook. This does not drastically
affect our approach, but in the below example, we can call
`usePokemonInfo(pokemonName)` and error handling and fetching is handled for us

Working codesandbox

https://codesandbox.io/s/fragrant-wind-008pfn?file=/src/App.tsx:0-2234

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

function ErrorMessage({ error }: { error: unknown }) {
  return <div style={{ background: 'red' }}>{`${error}`}</div>
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

I think it's sometimes common to forget error handling in async JS code
(useEffect async or many other contexts, etc), and there aren't e.g. lint rules
to really help, leaving errors uncaught or handled poorly. If you don't manually
handle the error in the `useEffect`, your user probably will not see that an
error occurred.

In addition to this error handling rant, the other point of this article is you
need to reset your component state when props change, which in the code above,
are the calls to setError(undefined) and setPokemonInfo(undefined) before I
fetch a new Pokemon from the API.

## Footnote 0 - Web perf pontificating

I think sometimes, this manner of fetching data inside a component can lead to
what some web-perf-experts refer to as waterfall. Can you get your state from
your parent? That might result in fewer individual requests made, but is also
quite a different architecture.

## Footnote 1 - ErrorBoundaries don't automatically save you from manually handling error

You can also consider using an ErrorBoundary, but this does not automatically
catch errors that happen in e.g. a useEffect. If you want your ErrorBoundary to
handle your useEffect related error, then you can use something like this. This
assumes a `react-error-boundary` type ErrorBoundary.

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

Another trick, instead of throwing in the body of the component is throwing in
the callback form of the useState-setter. Then you wouldn't necessarily need to
have a separate useState for the error state, but you would then need an
ErrorBoundary or something to help display a nice error.

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

This was just announced so there is a lot to unpack there, I can update this
blog post if I come up with an analogous example using this RFC

## Footnote 3: Using react-query or swr

There are helper libraries that try to help

One helper library suggested was called `react-query`, so I made a demo using
`@tanstack/react-query` v4.

https://codesandbox.io/s/hungry-framework-ctmhkz?file=/src/App.tsx

Another is `swr`, here is a demo for that library

https://codesandbox.io/s/condescending-poitras-fiwxym?file=/src/App.tsx

These libraries definitely **do** a lot of things, so take on some more baggage
than the simple hooks described above, but may be helpful to you also.

## Footnote 4: Fetching is just one aspect of this blogpost

Really, the thing I wanted to make more clear in general was also how "sticky"
useState can be. I find other patterns in my codebase besides just fetching
where I have to "reset" the useState hook to a neutral state, sometimes related
to controlled components.

See also
https://bikeshedd.ing/posts/use_state_should_require_a_dependency_array/

## Footnote 5: You can also use the "key" prop as an alternative to manually resetting state

See https://codesandbox.io/s/cool-grass-9nb43y?file=/src/App.tsx

I am not sure I recommend this as it basically forces the component to unmount,
which may be ok in some cases but I don't know all the ramifications. A quote
from https://kentcdodds.com/blog/understanding-reacts-key-prop explains

"This allows you to return the exact same element type, but force React to
unmount the previous instance, and mount a new one. This means that all state
that had existed in the component at the time is completely removed and the
component is "reinitialized" for all intents and purposes."

See also
https://react.dev/learn/you-might-not-need-an-effect#resetting-all-state-when-a-prop-changes

## Footnote 6: The `use` hook

Might also be related https://blixtdev.com/all-about-reacts-new-use-hook/
