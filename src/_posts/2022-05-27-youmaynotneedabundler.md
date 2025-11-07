---
title: You may not need a bundler for your NPM library
date: 2022-05-27T00:00:00.000Z
---

I have seen a couple threads on twitter where people complain about the
difficulty with publishing NPM libraries or ask what starter kit they should use
(or, people recommended starter packs anyways)

Example threads

- https://twitter.com/cramforce/status/1513903035197526017
- https://twitter.com/oleg008/status/1510006191296061441
- https://twitter.com/iansu/status/1524860613943382017
- https://twitter.com/mpocock1/status/1525075901905522691

One thing that is notable to me in these threads is that people often recommend
that you use a bundler (a program that combines multiple src files into a single
or fewer output files) when developing a library

Examples of starter packs suggested in these threads that use bundlers

- `microbundle` - https://github.com/developit/microbundle - uses rollup
- `esno` - https://www.npmjs.com/package/esno - uses esbuild
- `unbuild` - https://github.com/unjs/unbuild - uses rollup
- `preconstruct` - https://github.com/preconstruct/preconstruct - uses rollup
- `tsup` - https://github.com/egoist/tsup - uses esbuild
- `tsdx` - https://github.com/jaredpalmer/tsdx - uses rollup
- `vite library mode` - https://vitejs.dev/guide/build.html#library-mode - uses
  rollup
- `packemon` - https://github.com/milesj/packemon - uses rollup
- `ts-library-template` - https://github.com/shortercode/ts-library-template -
  uses rollup
- `parcel` - https://twitter.com/devongovett/status/1524944991402999810 - uses
  parcel
- `dts` - https://weiran-zsd.github.io/dts-cli/ - uses rollup
- `pkgroll` - https://github.com/privatenumber/pkgroll - uses rollup
- `mkdist` - https://github.com/unjs/mkdist - referenced by `unbuild`, uses
  esbuild

Not using bundlers

- `gts` - https://github.com/google/gts
- `ts-react-toolbox` - https://github.com/zzarcon/ts-react-toolbox/

In summary 2/15 do not use a bundler, 13/15 do use a bundler. Sidenote: webpack
notably absent. Sidenote 2: I don't necessarily give praise to the two not using
bundlers, just saying they exist.

## Why would you _NOT_ want a bundler for your library?

My main argument is that the consumer of your library is the one that should use
a bundler if it is relevant to them. If the library uses a bundler:

- in the best case, it has no impact on the consumer
- in the worst case, it affects the complexity of your library and makes
  possible limitations for your consumers also.

An example where it can actually create limitations, you might consider code
splitting with async `import()`. If you create a single file bundle, then the
consumer of your library may not be able to do code splitting properly via async
`import()`

Another example is the now common usage of 'use client' in source code. A
library targeted bundler (e.g. rollup) can't reasonably bundle this properly and
prints error messages (see https://github.com/rollup/rollup/issues/4699)

## Why would you _MAYBE_ want a bundler for your library

If you really care about producing a `UMD` bundle that can be used in a script
tag, maybe you want a bundler, but the future does not seem to be in `UMD`. One
other possible bundle type is maybe you like the idea of a single file `ESM`
module. It is similar where you could maybe reference this from a script tag
with type module, but this seems like a niche usage. For example, you would
still have to consider:

- If you are not bundling dependencies, then what is the benefit of using a
  bundler?
- If you are bundling dependencies, you are not allowing people to get updates
  to your sub-dependencies with semver!

Add-on: Another concern brought up by users in discussion thread: There is a
cost to having many small files, e.g. in app startup cost on serverless or any
nodejs application to loading many small files off disk. To me, this is an app
level concern, similar to bundling for the browser though.

## My suggestion: no bundler, no starter pack, just `tsc`

I'd recommend just compiling your code with `tsc`, no bundler involved. This
way, you can develop with typescript, it will output `js` files, and you can
directly deploy a `dist` folder of `js` files to NPM.

### Example `package.json`

```json
{
  "name": "yourlib",
  "version": "1.0.0",
  "main": "dist/index.js",
  "scripts": {
    "clean": "rimraf dist",
    "prebuild": "npm run clean",
    "build": "tsc",
    "preversion": "npm run build",
    "postversion": "git push --follow-tags"
  },
  "files": ["dist", "src"],
  "devDependencies": {
    "rimraf": "^3.0.2",
    "typescript": "^4.6.2"
  }
}
```

#### Features of the above `package.json`

- We can use a single command, `yarn publish` to publish to npm
- The single `yarn publish` automatically runs `clean` and `build` via
  `preversion`, then `postversion`, which pushes the tag to the remote repo
- The `"files": ["dist", "src"]` refers to publishing the `dist` and `src`
  directories, and src is used for the `sourceMap`

### Example` tsconfig.json`

```json
{
  "include": ["src"],
  "compilerOptions": {
    "target": "es2018",
    "outDir": "dist",
    "lib": ["dom", "esnext"],
    "declaration": true,
    "moduleResolution": "node",
    "sourceMap": true,
    "strict": true,
    "esModuleInterop": true
  }
}
```

#### Features of the above `tsconfig.json`

- Uses `"moduleResolution": "node"` - this is not pure-ESM because pure-ESM
  expects you to import filenames with their file extension, while node module
  resolution can import extensionless paths, but node module resolution
  generally works well with consumers that use bundlers themselves
- Uses `"target": "es2018"` - This is does a small amount of transpilation of
  super modern features, but would generally not require your users to babel-ify
  their `node_modules` if they consume your library

## What about testing?

Adding testing is not immediately solved by the above, but bundling doesn't
really help testing anyways. It's just a starter pack feature we can add on.
Some options you have include

- Use `ts-jest`
- Use `jest` on it's own, plus a `babel` config with `@babel/preset-typescript`
- Use `jest` on it's own, run over the compiled output without a `babel` config
- Use `vitest` (edit 2024: this is probably the most popular way to do things
  now)
- Possibly something else? Node now has a built-in test runner. It will be a
  slow road to adoption but might become more popular over time
  https://fusebit.io/blog/node-testing-comes-to-core/

## Conclusion

It is tempting to have nice zero-config solutions and starter kits, but to me,
it is not really beneficial to use the bundler aspect of many of these for
publishing to NPM. Am I wrong? Let me know if I am.

Also, these starter kits may not be maintained for perpetuity. Our team used
`tsdx` for some time, but it was not maintained well, and used old typescript
version 3.x, and it ended up being hard to remove from our codebase. Learning
the basic tools like `tsc` will help

## Footnote 1: Shipping "pure-ESM"

Do you want to make a pure-ESM package? Then you do not want to use
`"moduleResolution": "node"` in `tsconfig.json`, and you will want to set
`"type": "module"` in `package.json`.

You may also need to explicitly import with `.js` extensions in your source
code, even if you write `.ts`.

This is awkward, and something the community is still grappling with. This is
ACTUALLY one of the areas that a bundler can help, because by bundling, you
don't ever encounter any actual imported files in the published artifacts.

You will also probably use the "exports" field in package.json.

If you have ever stumbled on this topic, you will probably want to see this link
https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

## Footnote 2: Shipping ESM and CommonJS side by side without going "pure-ESM"

It can be tricky to go pure-ESM, but you can go most of the way there by using
both the "main" and "module" fields in package.json

- Compile with tsc with `tsc --module commonjs --outDir dist`
- Compile with tsc again with `tsc --module esnext --outDir esm`
- Then set "main":"dist/index.js" for node and `"module":"esm/index.js"` for
  bundlers

The "module" field is a field only bundlers recognizes
https://stackoverflow.com/questions/42708484/what-is-the-module-package-json-field-for

Note: This is different from the "type":"module" which marks your module as
pure-ESM!

I have found this technique can go a long ways towards keeping your package
compatible with nodeJS and bundlers and it does not require "export maps" or
anything which I have found to be difficult to configure

## Footnote 3: What does it look like when you compile with tsc?

When I refer to compiling with tsc above, I compile a `src` directory into a
`dist` directory

So if I have:

```
src/index.ts
src/util.ts
src/components/Button.ts
```

Running `tsc` will output:

```
dist/index.js
dist/index.d.ts
dist/index.js.map
dist/util.js
dist/util.d.ts
dist/util.js.map
dist/components/Button.js
dist/components/Button.d.ts
dist/components/Button.js.map
```

Then, the `dist` and `src` directories are published to npm which enables the
`sourceMaps` to work.

Note: We do not need to explicitly say where the typescript types are with
"types" in `package.json`, many starter packs do this but it is unneeded for
this package as the d.ts files are automatically found.

See https://cmdcolin.github.io/posts/2021-12-31-npm-package for my article on
creating a typescript package for npm

## Footnote 4: Publishing the raw JS with JSDoc checked types

You may not even need `tsc` to compile your dist folder. You can literally
publish your source `.js` files as-is to NPM. This suggestion comes from
@trevmanz [1](https://twitter.com/trevmanz/status/1534962190008172545)
[2](https://twitter.com/trevmanz/status/1534962940348092417). I don't personally
use this technique yet but there are many users with this workflow

An interesting thing is you can write in `.js` but still get `typescript` to get
type checking using `jsdoc`, just use `allowJs`/`checkJs` flags in
`tsconfig.json`

## Footnote 5: What about if your library is using JSX/React?

What about using React in your library? Bundlers are still not needed, and not
even babel is needed: you can code your library as in `jsx` or `tsx` files and
use `tsc` to compile it, and it will be converted to React.createElement
statements (or the newer jsx transform if you elect to use it in your tsconfig).

## Footnote 6: 2025 update

- A new article where we make a "Pure ESM" package with just tsc
  https://cmdcolin.github.io/posts/2025-01-12-pureesm
- A new article where I complain about vite library mode bundling dependencies
  https://cmdcolin.github.io/posts/2025-02-23-vitelibrarymode
