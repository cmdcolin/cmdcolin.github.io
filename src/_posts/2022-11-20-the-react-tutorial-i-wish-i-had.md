---
title: The React tutorial I wish I had
date: 2022-11-20T00:00:00.000Z
---

When I was learning React, I found it very challenging, and my eyes would glaze
over any time I tried to learn it.

Here is a short tutorial that could help you get started. Ultimately, for me,
sitting down with a book was what finally helped me, but this blogpost aims to
be a sort of TLDR for certain concepts.

### The simplest React component

Here is a "React component" that prints hello world in a div

```tsx
function HelloWorld() {
  return <div>Hello world!</div>
}
```

The HTML-like syntax inside JS is called JSX (see appendix below for how it
works).

I like to think of React components as "functions that return HTML". That is an
oversimplification, but it can be a helpful thinking tool to help you get
started.

### Using our `HelloWorld` component in another component

We said React can be thought of as "functions that return HTML" but we can also
combine them together.

For example, we can create a component named "App" that uses our "HelloWorld"
component

```tsx
function App() {
  return (
    <div>
      <p>This is my app</p>
      <HelloWorld />
    </div>
  )
}
```

It is common to have an "App" level component, that renders all the other
components in your page

### How do these components get rendered to HTML?

Typically, just once in your app, you use ReactDOM to render the "App" level
component to the page.

```tsx
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(<App />)
```

And in your index.html you have e.g.

```html
<!doctype html>
<html>
  <body>
    <div id="root"></div>
  </body>
</html>
```

The index.html guarantees that the document.getElementById('root') succeeds, and
then react renders the 'App' component into this div

### Accepting parameters to your components

React components can accept "props" which are like parameters to your component

```tsx
function Hello(props) {
  const name = props.name
  return <div>Hello {name}!</div>
}
```

We then pass props using HTML like attributes

```tsx
function App() {
  return (
    <div>
      <Hello name="Colin" />
    </div>
  )
}
```

This will print "Hello Colin!"

### Rendering lists of items

The `{name}` inside the div is a little snippet of plain-JS code. It can be used
to do more complicated things. For example you can render a list of items

```tsx
function List() {
  const list = ['Apples', 'Oranges', 'Pears']
  return (
    <ul>
      {list.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
```

Inside the "list" each item has a key prop that is specified. See the appendix
below for why keys are needed, and https://react.dev/learn/rendering-lists for
more discussion

### How do I use React in my own app?

Commonly, React is downloaded from npm using your package manager, but often
requires some extra steps to get JSX to compile, which is often done by Babel. I
will not cover a minimal React setup here, but I will recommend a couple setups
that make it easy for starting out.

- Use `vite`. You run `npm create vite@latest` on your command line, follow the
  steps to create a React app (with or without TypeScript). Then it starts a
  "dev server" at http://localhost:5173, and you can then change files, and the
  results are instantly updated in your web browser

- If you don't want to run commands on your computer, try CodeSandbox: this is a
  100% web-based IDE that you can use to experiment with React or other
  toolkits, visit https://codesandbox.io and run "Create" and then click "React
  app", this is the React app that it creates
  https://codesandbox.io/s/cool-moon-7x96jk (note that there are many others
  like this like StackBlitz, etc. also)

IMPORTANT! If you are trying to incorporate React into a legacy or existing
project, then I encourage you to not bring in any legacy baggage in your brain.
Come into this with an open mind and just experiment in these starter kit
environments first.

It can be difficult to bolt on React to your existing mental model and existing
legacy apps. Just approaching it fresh to learn the basics will help.

### Conclusion

I hope this helps you get started with React, let me know if you have any
questions.

### Appendix: Why list items need keys

Keys help React identify which items in a list changed, were added, or were
removed. Without them, React would have to re-render the entire list on every
update instead of updating only the affected items.

### Appendix: JSX explained

The HTML-like syntax may look odd in JS code. So code like this:

```tsx
function HelloWorld() {
  return <div>Hello world</div>
}
```

would get converted to this by Babel or another JSX transpiler:

```js
function HelloWorld() {
  // null just means no props to the div element
  return React.createElement('div', null, 'Hello world')
}
```

It's not common to write React without JSX, but as seen above, it can be done :)

### Appendix: Common learning pitfalls

The React learning experience, when it's good, is quite nice. Many people find
react 'easy to learn'. But there can be many roadblocks

- You can be bogged down by many different sometimes conflicted learning
  resources - The new docs at https://react.dev ideally make the learning
  experience better but honestly, it's still a web based resource, and it is
  easy to get distracted on ye olde' internet

- You can be bogged down by the difficulty in setting up your dev environment -
  as I mentioned above the 'just choose vite' is often a good choice for single
  page apps these days. It is much less of a wild west than when I learned
  in 2018. But understanding that there are transpilers for the JSX syntax and
  such is not easy, and often runs on the command line so learning the command
  line is often an important stepping stone to becoming comfortable with modern
  JS dev tooling.

- You can be bogged down by the many "tangential" concepts that complicate the
  modern web like state management, hooks, async/await, ESM modules, etc. there
  is a steep learning curve and it just takes time to develop an intuition for
  them.

- React codebases often use newer features of javascript like destructuring,
  which can be confusing for newcomers ("Why does this function have curly
  braces in the place of the function arguments?"...that is modern
  'destructuring' syntax in javascript. So instead of
  `function MyComponent(props) { return <div>{props.name}</div> }` React
  components generally say
  `function MyComponent({name}) { return <div>{name}</div> }` even though the
  two are equivalent

- You can be confused by weird concepts like "controlled" components (and how
  React hooks like useState integrate with these) — see the useState appendix
  below for an intro

- You can be bogged down by Typescript or PropTypes - When I was learning React,
  the concept of 'prop-types' was very common
  (https://legacy.reactjs.org/docs/typechecking-with-proptypes.html). PropTypes
  are fully optional though, and are just used to check the types of props at
  runtime. Most modern React instead uses compile time checking with TypeScript
  now, but TypeScript can be tricky also

### Appendix: useState

The component HelloWorld does not do much, it just renders a simple `div`. How
do you make dynamic content in React? One way is with React hooks like useState
and useEffect.

```tsx
import { useState } from 'react'

function FormField() {
  const [value, setValue] = useState('Initial value')
  const [clicked, setClicked] = useState(false)
  return (
    <div>
      <input value={value} onChange={evt => setValue(evt.target.value)} />
      <button onClick={() => setClicked(true)}>Click me</button>
      {clicked ? <p>You clicked the button!</p> : null}
      <div>Current value: {value}</div>
    </div>
  )
}
```

This adds 'state' to the component. Specifically, when the user types in the
input box, that makes your component (the function) re-run, or "re-render".
Then, notably, the new value that the user typed is passed back into the 'value'
in the input box, which is actually the value displayed in the input box.

This is called a 'controlled component' in React terms: we control the value
that is displayed by the `<input>` box with the 'value prop' and any time the
user types something, we run the setValue callback, and then it re-renders. Any
time a 'setter' from the useState is called, React re-renders the component.

There are also uncontrolled components, but it is worth understanding the
controlled component perspective to see how just typing a letter in the input
box causes a re-render. That makes your app suddenly more dynamic and 'reactive'
to a user's typing or button presses, etc.

### Appendix: useEffect

The useEffect hook runs after the component renders. You can use it to fetch
data from an API, for example: "after this component renders, go fetch some data
from this API". Then you can combine it with useState to re-render once the
fetch completes.

example

```tsx
import { useState, useEffect } from 'react'

// I use this myfetch helper a lot, many examples with fetch neglect to handle
// !result.ok
async function myfetch(url: string) {
  const result = await fetch(url)
  if (!result.ok) {
    throw new Error(
      `HTTP ${result.status} fetching ${url} ${await result.text()}`,
    )
  }
  return result.json()
}
function FetchStuff() {
  const [data, setData] = useState()
  const [error, setError] = useState()
  useEffect(() => {
    // useEffect callbacks can't be async directly, so we use an immediately
    // invoked async function expression (IIFE) as a workaround
    ;(async () => {
      try {
        const result = await myfetch('/my/api')
        setData(result)
      } catch (e) {
        setError(e)
      }
    })()
  }, []) // the empty array means this effect runs only once on mount
  if (data) {
    return <div>Got some data {JSON.stringify(data)}</div>
  } else if (error) {
    return <div style={{ background: 'red' }}>Error {`${error}`}</div>
  } else {
    return <div>Loading...</div>
  }
}
```

Notably, instead of manually doing this, many people use a pre-made 'hook
library' like 'react-query' or 'swr' https://tanstack.com/query/latest
https://swr.vercel.app/ which automatically helps with handling aborting,
caching, and other things like that regarding async fetch behavior

### Appendix: Class based components

In the old days, React used "class based components", here is the Hello world
example as a class based component

```tsx
class HelloWorld extends React.Component {
  render() {
    return <div>Hello world!</div>
  }
}
```

The class based components had other "lifecycle functions" like
"componentDidMount" and such that do not exist in function based components. In
function components, React hooks are used instead.

You will probably mostly see function components instead of class based
components these days
