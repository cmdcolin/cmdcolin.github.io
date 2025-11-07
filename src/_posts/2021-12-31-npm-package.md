---
title: How to make your own npm package with typescript
date: 2021-12-31T00:00:00.000Z
---

There is a lot of mystery around making your own `npm` package. Every package
likely does it a bit differently, and it can be tricky to get a setup you like.
Should you use a "starter kit" or a boilerplate example? Or just roll your own?
Should you use a bundler? How do you use typescript? Well, why don't we try
starting from scratch and seeing where we can get?

TLDR: here is a github repo with a template package
https://github.com/cmdcolin/npm-package-tutorial/

## Introduction

An `npm` package can be very bare bones. In some sense, npmjs.com is just an
arbitrary file host, and you can upload pretty much anything you want to it.

The magic is in the package.json file, which tells npm:

- what files are part of your package (by default, the whole folder with your
  package.json is published, with the "files" field you can say what particular
  folders or files are uploaded or you can use .npmignore to choose which files
  NOT to publish)
- what to use as the "entry point" (e.g. the file that should be referenced when
  you say `const lib = require('mypackage')`, this is governed by the "main"
  field, "module" field which is bundler specific, and "export maps" which are
  newer but tricky)
- what pre- and post- processing steps should be done when the package is being
  published (the various "scripts", where you can have "clean", "build", "test",
  "lint", "prebuild", etc)
- and more!

Let's try an experiment...

# Part 1: the most basic package with plain JS code in commonjs format

Open up a terminal, and run

```sh
mkdir mypackage
cd mypackage
git init # make mypackage version controlled
npm init # or yarn init
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
    console.log("hello world");
  },
};
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
import { hello } from "mypackage";
```

in any of your other codebases

## Summary of the simplest NPM package

This all seems pretty boring thus far but it tells us a couple things

1. packages can be very very bare bones
1. no transpiler or bundler is needed for publishing an npm package
1. our package can consist of a single file and it is uploaded to npm, and the
   "main" field in package.json provides an entry point
1. the filename index.js is not special, probably it is a hangover from the name
   index.html. you can use whatever name you want

# Part 2: Adding typescript

Let's try adding typescript

To do this, we will use the typescript compiler to compile a directory of files
in our "src" directory and output the compiled files to a directory named "dist"

To start, let's add typescript

```sh
npm install --save-dev typescript
# or
yarn add -D typescript
```

Our package.json now will have `typescript` in it's `devDependencies` (this
means that when someone installs your package, it they don't get typescript as a
dependency, it is just a dependency for while you are developing the library
locally).

Then we need to create a tsconfig.json for typescript to use

```sh
yarn tsc --init
# or
npx tsc --init
```

This will generate a `tsconfig.json` file (needed by `typescript`) with a bunch
of options, but I have stripped it down in my projects to look like this

```json
{
  "include": ["src"],
  "compilerOptions": {
    "target": "es2018",
    "moduleResolution": "node", // don't have to import actual filenames, can import extensionless files
    "declaration": true, // generate .d.ts files
    "sourceMap": true, // generate source map
    "outDir": "dist", // output compiled js, d.ts, and source map to dist folder
    "strict": true,
    "esModuleInterop": true
  }
}
```

Now, let's wrote a little typescript. We can now use "ESM" style code, we will
compile it to commonjs format.

util.ts

```typescript
export function getMessage() {
  return "hello";
}
```

index.ts

```typescript
import { getMessage } from "./util";
export function sayMessage() {
  console.log(getMessage());
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
  "files": ["dist", "src"], // we publish both dist and src to get proper sourceMaps
  "scripts": {
    "build": "tsc --module commonjs"
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

You can also add a `"prebuild"` script that clears out the old contents. In
fact, npm scripts generalizes the naming system -- you can make scripts with
whatever name you want, e.g.

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
    "build": "tsc --module commonjs"
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

Without extra instructions, your `yarn publish` command would not create a fresh
build and you could publish an older version that was lingering in the `dist`
folder.

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

```sh
npm run build --watch
# or
yarn build --watch
```

## Adding testing with ts-jest

You can use ts-jest to test your code. This involves installing jest,
typescript, ts-jest, @types/jest, and then initializing a jest.config.json

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
import { getMessage } from "../src/util";
test("expected message returned", () => {
  expect(getMessage()).toBe("hello");
});
```

Then we can then create a script in the package.json that says `"test": "jest"`,
and then we can say

```sh
npm run test
# or
yarn test
```

You can also create an alternative system where you use `babel-eslint` and
various babel strategies to test your code, but if you are using `typescript`,
`ts-jest` and `typescript` works great.

## Add a .gitignore

Create a .gitignore with just a line that references this `dist` folder and
`node_modules` folder

```
dist
node_modules
```

## The future of ESM modules

There is a shift happening where modules are changing to be pure ESM rather than
keeping commonjs equivalents

https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

There are many challenges here, but one shortcut that I have used is to actually
go "halfway to ESM" and just publish a "dual" package: one "main" field in the
package.json referring to a commonjs file, and one "module" field with an ESM
style build for bundlers. I do it like this:

```json
{
  "files": ["dist", "esm", "src"],
  "scripts": {
     ...
    "clean": "rimraf dist esm",
    "prebuild": "npm run clean",
    "build:cjs": "tsc --module commonjs --ourDir dist",
    "build:esm": "tsc --target es2018 --outDir esm",
    "build": "npm run build:esm && npm run build:cjs"
  },
  "main": "dist/index.js",
  "module": "esm/index.js"
}
```

The "module" field is understood by bundlers like webpack and you can do
slightly less polyfilling/babeling on it (hence the different `--target`
attributes)

This is not "pure ESM" with the "type":"module" in package.json, but it does
help to have less "babelification" (which in our case is done by tsc) of your
source code.

## Conclusion

This tutorial shows you how you can create a basic package that you can publish
to `npm`. This little boilerplate includes these features:

- Makes clean build when running `yarn build` or `yarn publish`
- Pushes to github after publish
- Uses `ts-jest` for testing
- Uses esm modules

You also have full control, and understand the decisions we took to get to this
point. This package does not use any bundling (rollup or webpack or otherwise).
It just uses `tsc` is used to compile the files to the `dist` folder, and the
dist folder is published to `npm`!

If you need your package to be usable by consumers that don't themselves use
bundlers, consider looking into `<script type="module">` for importing ESM
modules in the browser, or you can bundle your library using rollup or webpack
and output e.g. a UMD bundle

## Final product

See https://github.com/cmdcolin/npm-package-tutorial/

This is a setup that works for me, but there are many ways to publish a package
so take it with a grain of salt!

Also see my follow up rant: you may not need a bundler
https://cmdcolin.github.io/posts/2022-05-27-youmaynotneedabundler

## Footnote 1 - what about monorepos?

There are many high powered "monorepo" setups like lerna, nx, turborepo, etc.

I think for many purposes, these can be a bit overkill. I would start with yarn
workspaces. Basically, the way this works is you can have e.g. in your root
package.json in your repo something likely

```json
{
  "name": "root",
  "private": true,
  "workspaces": ["lib", "app"]
}
```

And then in your `lib` directory you can have your library as we created above
and `app` for example can be an instance of a `vite` app that uses your library.
You can reference your lib by name in the `app` folders package.json, and it
will automatically get the latest version of it that you have built from the
`lib` directory e.g. your `app` will look at the libs "dist" folder: it's
compiled outputs. That means you can run `yarn tsc --watch` in the lib folder to
continuously build it, and then e.g. when you are running e.g. `yarn dev` in the
`app` directory, it will see updates to the `lib` dist directory and auto-update
via hot module refresh

High powered solutions like nx, turborepo, etc may have solutions for
'automatically building all the stuff' without you explicitly having to run the
build in the `lib` directory, but for simple monorepo setups, this works ok

## Footnote 2 - 2025 update

See https://cmdcolin.github.io/posts/2025-01-12-pureesm
