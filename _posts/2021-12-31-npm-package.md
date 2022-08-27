---
title: How to make your own npm package with typescript
date: 2021-12-31
---

There is a lot of mystery around making your own `npm` package. Every package
likely does it a bit differently, and it can be tricky to get a setup you like.
Should you use a "starter kit" or a boilerplate example? Or just roll your own?
Should you use a bundler? How do you use typescript?

**\*Record scratch \*\***

Why don't we try starting from scratch and seeing where we can get?

TLDR: here is a github repo with a template package
https://github.com/cmdcolin/npm-package-tutorial/

## Introduction

An `npm` package can be very bare bones. In some sense, npmjs.com is just an
arbitrary file host, and you can upload pretty much anything you want to it.

The magic is in the package.json file, which tells npm:

- what files are part of your package
- what to use as the "entry point" (e.g. the file that should be referenced
  when you say `const lib = require('mypackage')`)
- what pre- and post- processing steps should be done when the package is being
  published
- and more!

Let's try an experiment...

## Initializing a package

Open up a terminal, and run

```sh
mkdir mypackage
cd mypackage
git init # make mypackage version controlled
npm init
# or
yarn init
```

This init command outputs something like this, and we accept the defaults

```sh
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (mypackage)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
license: (ISC)
About to write to /home/cdiesh/mypackage/package.json:

{
  "name": "mypackage",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Colin",
  "license": "ISC"
}

```

Then, you can create a file named `index.js` (in your package.json it says
`"main": "index.js"` to refer to this file, the entrypoint)

In your `index.js` file, generally, you would do things like export a function
or functions. I will use commonjs exports here for maximum compatibility:

```js
module.exports = {
  hello: () => {
    console.log('hello world')
  },
}
```

## Publishing a package

This npm package, `mypackage` can now be published to `npm` with a simple
command.

```sh
npm publish
# or
yarn publish
```

This will prompt you for your npmjs.com username, password, email, and if
needed, 2FA token (highly recommended)

## Using your package after it is published

Once it is published, you can use it in your create-react-app app or other npm
package.

```sh
npm install mypackage
# or
yarn add mypackage
```

Then you can use

```js
import { hello } from 'mypackage'
```

in any of your other codebases

## Summary of the simplest NPM package

This all seems pretty boring thus far but it tells us a couple things

1. packages can be very very bare bones
1. no transpiler or bundler is needed for publishing an npm package
1. our package can consist of a single file and it is uploaded to npm, and the
   "main" field in package.json provides an entry point
1. the filename index.js is not special, probably it is a hangover from the
   name index.html. you can use whatever name you want

## Adding typescript

Let's try adding typescript

To do this, we will use the typescript compiler to compile a directory of files
in our "src" directory and output the compiled files to a directory named
"dist"

To start, let's add typescript

```sh
npm install --save-dev typescript
# or
yarn add -D typescript
```

Our package.json now will have `typescript` in it's `devDependencies` (this
means that when someone installs your package, it they don't get typescript as
a dependency, it is just a dependency for while you are developing the library
locally).

Then we need to create a tsconfig.json for typescript to use

```sh
yarn tsc --init
# or
npx tsc --init
```

This will generate a `tsconfig.json` file (needed by `typescript`) with a bunch of
options, but I have stripped it down in my projects to look like this

```json
{
  "include": ["src"],
  "compilerOptions": {
    "target": "es2018",
    "moduleResolution": "node",
    "declaration": true, // generate .d.ts files
    "sourceMap": true, // generate source map
    "outDir": "dist", // output compiled js, d.ts, and source map to dist folder
    "strict": true,
    "esModuleInterop": true
  }
}
```

Now, we want to change our `js` to `ts` files to use `typescript`, let's change them
to use normal ESM import/exports

util.ts

```typescript
export function getMessage() {
  return 'hello'
}
```

index.ts

```typescript
import { getMessage } from './util'
export function sayMessage() {
  console.log(getMessage())
}
```

And then we will add a `"build"` script to `package.json` to compile the
library, and refer to the `"dist"` directory for the `"files"` and `"main"`
fields in `package.json`

```json
{
  "name": "mypackage",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.js",
  "files": ["dist"],
  "scripts": {
    "build": "tsc"
  },
  "author": "Colin",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^4.5.4"
  }
}
```

We can now run

```sh
npm run build
# or
yarn build
```

And this will run the `"build"` script we created, which in turn, just runs
`tsc` with no arguments.

You can also add a `"prebuild"` script that clears out the old contents. In fact,
npm scripts generalizes the naming system -- you can make scripts with whatever name you want, e.g.

```json
{
  "scripts": {
    "preparty": "echo preparty",
    "party": "echo party",
    "postparty": "echo postparty"
  }
}
```

Then running

```sh
$ yarn party
preparty
party
postparty
```

To make this useful, we will use `rimraf` (a node package) to make a
cross-platform removal of the `dist` directory

```sh
npm install --save-dev rimraf
# or
yarn add -D rimraf
```

and then update your package.json

```json
{
  ...
  "scripts": {
    "clean": "rimraf dist",
    "prebuild": "npm run clean",
    "build": "tsc"
  },
  "devDependencies": {
    "rimraf": "^3.0.2",
    "typescript": "^4.5.4"
  }
}
```

We could make it say "rm -rf dist" instead of "rimraf dist" (e.g. run arbitrary
shell commands), but rimraf allows it to be cross-platform

## Making sure you create a fresh build before you publish

Without extra instructions, your `yarn publish` command would not create a
fresh build and you could publish an older version that was lingering in the
`dist` folder.

We can use a `preversion` script that will automatically get invoked when you
run `yarn publish` to make sure you get a fresh build in the `dist` folder
before you publish

```json
{
  ...
  "scripts": {
    ...
    "preversion": "npm run build",
  },
}
```

## Making sure you push your tag to github after publish

When you run `yarn publish`, npm will automatically create a commit with the
version name and a git tag, it _will not_ automatically push tag to your
repository.

Add a `postversion` script that pushes the tag to your repo after your publish

```json
{
  ...
  "scripts": {
    ...
    "postversion": "git push --follow-tags",
  },
}
```

## Incremental builds

We can use this to do incremental/watch builds

```
npm run build --watch
# or
yarn build --watch
```

## Adding testing with ts-jest

You can use ts-jest to test your code. This involves installing jest, typescript, ts-jest, @types/jest, and then initializing a jest.config.json

```sh
npm i -D jest typescript
# or
yarn add --dev jest typescript
```

```sh
npm i -D ts-jest @types/jest
# or
yarn add --dev ts-jest @types/jest
```

```sh
npx ts-jest config:init
# or
yarn ts-jest config:init
```

We can then create a test

`test/util.spec.ts`

```typescript
import { getMessage } from '../src/util'
test('expected message returned', () => {
  expect(getMessage()).toBe('hello')
})
```

Then we can then create a script in the package.json that says `"test": "jest"`, and then we can say

```
npm run test
# or
yarn test
```

You can also create an alternative system where you use `babel-eslint` and
various babel strategies to test your code, but if you are using typescript,
ts-jest+typescript works great.

## Add a .gitignore

Create a .gitignore with just a line that references this `dist` folder and `node_modules` folder

```
dist
node_modules
```

## The future of ESM modules

There is a shift happening where modules are changing to be pure ESM rather
than keeping commonjs equivalents

https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

There are many challenges here, and will not be discussed, but it may be a
useful further reading page

## Conclusion

This tutorial shows you how you can create a basic package that you can publish
to `npm`. This little boilerplate includes these features:

- Makes clean build when running `yarn build` or `yarn publish`
- Pushes to github after publish
- Uses ts-jest for testing
- Uses esm modules

You also have full control, and understand the decisions we took to get to this
point. This package does not use any bundling (rollup or webpack or otherwise).
It just uses `tsc` is used to compile the files to the `dist` folder, and the
dist folder is published to `npm`! If you need your package to be usable by
consumers that don't themselves use bundlers, consider looking into `<script type="module">` for importing ESM modules in the browser, or you can bundle
your library using rollup or webpack and output e.g. a UMD bundle

## Final product

See https://github.com/cmdcolin/npm-package-tutorial/
