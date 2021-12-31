---
title: How to make your own NPM package in 2022
date: 2021-12-31
---

There is a lot of mystery around making your own NPM package. Every package
likely does it a bit differently, and it can be tricky to get a setup you like. Should you use a "starter kit" or a boilerplate example? Or just roll your own? Should you use a bundler? How do you use typescript?

All good questions.

However, NPM packages can be very bare bones. In some sense, npmjs.org which hosts NPM packages is just like a file host, and you can upload pretty much anything you want to it

Let's try an experiment...Open up a terminal, and run

```sh
mkdir mypackage
cd mypackage
npm init
```

This outputs

```
npm init
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
