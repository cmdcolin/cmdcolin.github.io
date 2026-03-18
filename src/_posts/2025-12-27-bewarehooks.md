---
title:
  Beware! If you make custom React hooks, eslint-plugin-react-hooks may not
  catch some issues
date: 2025-12-27
---

I am reporting to you live from the debugging session...A useEffect has
triggered in an infinite loop in my code. But this doesn't just cause trouble
for me....

## A problem for everybody

This type of issue is something probably everyone has seen. Even Cloudflare saw
this bug in Sept 2025, and it caused some big troubles

> The incident’s impact stemmed from several issues, but the immediate trigger
> was a bug in the dashboard. This bug caused repeated, unnecessary calls to the
> Tenant Service API. The API calls were managed by a React useEffect hook, but
> we mistakenly included a problematic object in its dependency array. Because
> this object was recreated on every state or prop change, React treated it as
> “always new,” causing the useEffect to re-run each time. As a result, the API
> call executed many times during a single dashboard render instead of just
> once. This behavior coincided with a service update to the Tenant Service API,
> compounding instability and ultimately overwhelming the service, which then
> failed to recover.
>
> Source:
> https://blog.cloudflare.com/deep-dive-into-cloudflares-sept-12-dashboard-and-api-outage/

Maybe interestingly, their "takeaways" going forward did not include more static
analysis of React to identify issues like this. Their takeaways were to try to
narrow the blast radius of things like this by "Reducing impact" and "Improving
visibility". That is fine, every postmortem has a complex set of conditions that
leads to failure, but could this issue have been caught at compile time? (the
best time!)

## I have eslint-plugin-react-hooks, it's supposed to warn about this, why is this happening???

The critical reader may slap their forehead and say...you may not NEED a
useEffect! don't you know?
([You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect))

Sometimes you just do though. Ok moving on

Let's see what eslint-plugin-react-hooks can help catch

```typescript
useEffect(() => {}, [new Number(94)])
```

This produces

```
  warning  React Hook useEffect has a complex expression in the dependency array. Extract it to a separate variable so it can be statically checked  react-hooks/exhaustive-deps

```

What about

```typescript
const num = new Number(94)
useEffect(() => {}, [num])
```

This says

```
  warning  The 'num' object construction makes the dependencies of useEffect Hook (at line 11) change on every render. Move it inside the useEffect callback. Alternatively, wrap the initialization of 'num' in its own useMemo() Hook  react-hooks/exhaustive-deps
```

But what about...

```tsx
import { useEffect, useState } from 'react'

interface User {
  id: string
  name: string
}

function useFetchUsers(params: { role: string; active: boolean }) {
  const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    fetch(`/api/users?role=${params.role}&active=${params.active}`)
      .then(r => r.json())
      .then(setUsers)
  }, [params])
  return users
}

function UserList() {
  const users = useFetchUsers({ role: 'admin', active: true })
  return (
    <ul>
      {users.map(u => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  )
}

export default UserList
```

This is an infinite loop because `{ role: 'admin', active: true }` creates a new
object on every render, and we are not informed by the lint rule because the
dependency is inside a custom hook. The result: your API gets hammered endlessly

### A thought to leave you with

Things like typescript eliminate huge classes of bugs via static analysis, and
typescript-eslint is able to push it even further by adding typed lints, but
what about this class of bugs? It appears to only be able to be detected via
heuristics. I was already a bit wary of using custom hooks in my code and this
will make me think two or three more times about it, since the heuristic, while
imperfect, can help. There are of course also other reasons this failure case
could be triggered... a prop being used probably breaks the heuristic as well.

Are there other ways we can catch or fix this issue? Feel free to let me know.
Maybe there are completely different programming paradigms that are needed to
solve it.

## Footnote 1

I was alerted to the fact that eslint-plugin-react-hooks actually allows you to
check custom hooks with exhaustive-deps with advanced configuration
https://www.npmjs.com/package/eslint-plugin-react-hooks however it also
recommends to just not do this

## Footnote 2

Part of this issue is really the use of complex objects in useEffect hooks. I
have half the mind to make a type-aware eslint rule that type checks all
arguments to be primitives, and require an eslint-disable-next-line for any
non-primitive object
