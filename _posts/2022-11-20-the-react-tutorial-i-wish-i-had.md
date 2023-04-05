---
title: The React tutorial I wish I had
date: 2022-11-20
---

When I was learning React, I found it very challenging, and my eyes would glaze
over any time I tried to learn

Here is a short tutorial that could help you get started. Ultimately, for me,
sitting down with a book was what finally helped me, but this blogpost aims to
be a sort of TLDR for certain concepts.

### The simplest React component

Here is a "React component" that prints hello world in a div

```jsx
function HelloWorld() {
  return <div>Hello world!</div>
}
```

I like to think of React components as "functions that return HTML". That is a
oversimplification, but it can be a helpful thinking tool to help you get
started.

### Using our `HelloWorld` component in another component

We said React can be thought of as "functions that return HTML" but we can also
combine them together.

For example, we can create a component named "App" that uses our "HelloWorld"
component

```jsx
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

```js
import ReactDOM from 'react-dom'

ReactDOM.render(<App />, document.getElementById('root'))
```

And in your index.html you have e.g.

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="root" />
  </body>
</html>
```

### Accepting parameters to your components

React components can accept "props" which are like parameters to your component

```jsx
function Hello(props) {
  const name = props.name
  return <div>Hello {name}!</div>
}
```

We then pass props using HTML like attributes

```jsx
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

```jsx
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

Inside the "list" each item has a key prop that is specified. See
https://reactjs.org/docs/lists-and-keys.html for more discussion on this

### How do I use React in my own app?

Commonly, React is downloaded from npm using your package manager, but often
requires some extra steps to get JSX to compile which is often done by babel. I
will not cover a minimal React setup here, but I will recommend a couple setups
that make it easy for starting out.

- Use `create-react-app`. You run `npx create-react-app yourapp` on your command
  line, this creates a folder named `yourapp` on your computer, and then you
  `cd yourapp` to go into that directory and run `npm run start`. This starts a
  "dev server" that runs at http://localhost:3000, and you can then change the
  js files, and the results are instantly updated in your web browser
- CodeSandbox: this is a 100% web based IDE that you can use to experiment with
  React or other toolkits, visit https://codesandbox.io and run "Create" and
  then click "React app", this is the React app that it creates
  https://codesandbox.io/s/cool-moon-7x96jk

If you are trying to incorporate React into a legacy or existing project, then I
encourage you to experiment in these starter kit environments first. It can be
difficult to bolt on React to an existing environment in some ways and
understanding the basics will help.

### Conclusion

I hope this helps you get started with React, let me know if you have any
questions.

### Footnote 1. Class based components

In the old days, React used "class based components", here is the Hello world
example as a class based component

```js
class HelloWorld {
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

### Footnote 2. How is this HTML allowed in React?

The HTML-like syntax may look odd in JS code. It is called JSX. So code like
this:

```js
function HelloWorld() {
  return <div>Hello world</div>
}
```

would get converted to this by babel or other jsx transpiler:

```js
function HelloWorld() {
  // null just means no props to the div element
  return React.createElement('div', null, 'Hello world')
}
```

It's not common to write React without jsx, but as seen above, it can be done :)

### Footnote 3. Slightly changed in React 18

React 18 uses `createRoot` instead of `ReactDOM.render` and is a little bit more
verbose, but I'm going for brevity here

### Footnote 4. Things that sometimes complicate your React learning experience

The React learning experience, when it's good, is quite nice. But there can be
many roadblocks

- You can be bogged down by many different sometimes conflicted learning
  resources - The new docs at https://react.dev should make the learning
  experience better.

- You can be bogged down by the difficulty in setting up your dev environment -
  the need to get transpilers and compilers for the JSX syntax and such is not
  easy, and has led to an explosion of developer tooling that often needs to be
  run on the command line to do any sort of programming for the web. This is a
  unfortunate consequence of the web becoming more complicated. Learning to be
  comfortable with the command line is often an important stepping stone to
  becoming comfortable with modern JS dev tooling.

- You can be bogged down by "tangential" concepts like state management

- React codebases often use newer features of javascript like destructuring,
  which can be confusing for newcomers ("Why does this function have curly
  braces in the place of the arguments?")

- You can be confused by weird concepts like "controlled" components (and how
  React hooks like useState integrate with these)

- You can be bogged down by Typescript or PropTypes - When I was learning React,
  I was confused by PropTypes in code. PropTypes are fully optional though, and
  are just used to check the types of props at runtime. TypeScript can be tricky
  also, and does type checking at "compile time"

### Footnote 5. Brief intro to useState

The component HelloWorld does not do much, it just does a div. How do you make
dynamic content in React? One way is with React hooks like useState and
useEffect.

```tsx
function FormField() {
  const [value, setValue] = useState('Initial value')
  return <input value={value} onChange={evt => setValue(evt.target.value)} />
}
```

This is a 'controlled component' in React terms: we control the value that is
displayed by the `<input>` box with the 'value prop' and any time the user types
something, we run the setValue callback, and then it re-renders. Any time a
'setter' from the useState is called, React re-renders the component.

### Footnote 6. Brief intro to useEffect

The useEffect method can be thought of as saying: "as a side effect of rendering
the component, do some stuff". You can use it to fetch data from an API for
example, and so you'd say "as a side effect of rendering this component, go
fetch some data from this API". Then you can combine it with a useState and make
it re-render after the fetch has completed.

example

```tsx
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
    ;(async () => {
      try {
        const result = await myfetch('/my/api')
        setData(result)
      } catch (e) {
        setError(e)
      }
    })()
  })
  if (data) {
    return <div>Got some data {JSON.stringify(data)}</div>
  } else if (error) {
    return <div style={{ background: 'red' }}>Error {`${error}`}</div>
  } else {
    return <div>Loading...</div>
  }
}
```
