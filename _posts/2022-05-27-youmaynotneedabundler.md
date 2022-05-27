---
title: You may not need a bundler for your NPM library
date: 2022-05-27
---

I have seen a couple threads on twitter where people complain about the
difficulty with publishing NPM libraries or ask what starter kit they should
use (or, people recommended starter packs anyways)

Example threads

- [https://twitter.com/cramforce/status/1513903035197526017](https://twitter.com/cramforce/status/1513903035197526017)
- [https://twitter.com/oleg008/status/1510006191296061441](https://twitter.com/oleg008/status/1510006191296061441)
- [https://twitter.com/iansu/status/1524860613943382017](https://twitter.com/iansu/status/1524860613943382017)
- [https://twitter.com/mpocock1/status/1525075901905522691](https://twitter.com/mpocock1/status/1525075901905522691)

One thing that is notable to me in these threads is that people often recommend
that you use a bundler (a program that combines multiple src files into a
single or fewer output files) when developing a library

Examples of starter packs suggested in these threads that use bundlers

- `microbundle` - [https://github.com/developit/microbundle](https://github.com/developit/microbundle) - uses rollup
- `esno` - [https://www.npmjs.com/package/esno](https://www.npmjs.com/package/esno) - uses esbuild
- `unbuild` - [https://github.com/unjs/unbuild](https://github.com/unjs/unbuild) - uses rollup
- `preconstruct` - [https://github.com/preconstruct/preconstruct](https://github.com/preconstruct/preconstruct) - uses rollup
- `tsup` - [https://github.com/egoist/tsup](https://github.com/egoist/tsup) - uses esbuild
- `tsdx` - [https://github.com/jaredpalmer/tsdx](https://github.com/jaredpalmer/tsdx) - uses rollup
- `vite library mode` - [https://vitejs.dev/guide/build.html#library-mode](https://vitejs.dev/guide/build.html#library-mode) - uses rollup
- `packemon` - [https://github.com/milesj/packemon](https://github.com/milesj/packemon) - uses rollup
- `ts-library-template` - [https://github.com/shortercode/ts-library-template](https://github.com/shortercode/ts-library-template) - uses rollup
- `parcel` - [https://twitter.com/devongovett/status/1524944991402999810](https://twitter.com/devongovett/status/1524944991402999810) - uses parcel
- `dts` - [https://weiran-zsd.github.io/dts-cli/](https://weiran-zsd.github.io/dts-cli/) - uses rollup
- `pkgroll` - [https://github.com/privatenumber/pkgroll](https://github.com/privatenumber/pkgroll) - uses rollup
- `mkdist` - [https://github.com/unjs/mkdist](https://github.com/unjs/mkdist) - referenced by `unbuild`, uses esbuild

Not using bundlers

- `gts` - [https://github.com/google/gts](https://github.com/google/gts)
- `ts-react-toolbox` - [https://github.com/zzarcon/ts-react-toolbox/](https://github.com/zzarcon/ts-react-toolbox/)

In summary 2/15 do not use a bundler, 13/15 do use a bundler. Sidenote: webpack notably absent

## Why would you _NOT_ want a bundler for your library?

My main argument is that the consumer of your library is the one that should
use a bundler if it is relevant to them. If the library uses a bundler:

- in the best case, it has no impact on the consumer
- in the worst case, it affects the complexity of your library and makes
  possible limitations for your consumers also.

An example where it can actually create limitations, you might consider code
splitting with async `import()`. If you create a single file bundle, then the
consumer of your library may not be able to do code splitting properly via
async `import()`

## Why would you _MAYBE_ want a bundler for your library

If you really care about producing a `UMD` bundle that can be used in a script
tag, maybe you want a bundler, but the future does not seem to be in `UMD`.
One other possible bundle type is maybe you like the idea of a single file
`ESM` module. It is similar where you could maybe reference this from a script
tag with type module, but this seems like a niche usage. For example, you
would still have to consider:

- If you are not bundling dependencies, then what is the benefit of using a
  bundler?
- If you are bundling dependencies, you are not allowing people to get updates
  to your sub-dependencies with semver!

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
- The `"files": ["dist", "src"]` refers to published the `dist` and `src` directories,
  and src is used for the `sourceMap`

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
  expects you to import with the filenames, while node module resolution can
  import extensionless paths, but it works well with consumers that use
  bundlers themselves
- Uses `"target": "es2018"` - This is does a small amount of transpilation of
  super modern features, but would generally not require your users to
  babel-ify their `node_modules` if they consume your library

## What about testing?

Adding testing is not immediately solved by the above, but bundling doesn't
really help testing anyways. It's just a starter pack feature we can add on.
Some options you have include

- Use `ts-jest`
- Use `jest` on it's own, plus a `babel` config with `@babel/preset-typescript`
- Use `jest` on it's own, run over the compiled output without a `babel` config
- Use `vitest`
- Possibly something else? Node now has a built-in test runner. It will be a
  slow road to adoption but might become more popular over time
  [https://fusebit.io/blog/node-testing-comes-to-core/](https://fusebit.io/blog/node-testing-comes-to-core/)

## Conclusion

It is tempting to have a nice zero-config solutions and starter kits, but to
me, it is not really beneficial to use the bundler aspect of many of these for
publishing to NPM. Am I wrong? Let me know if I am.

Also, these starter kits may not be maintained for perpetuity. Our team used
`tsdx` for some time, but it was not maintained well, and used old typescript
version 3.x, and it ended up being hard to remove from our codebase. Learning
the basic tools like `tsc` will help

## Footnote 1: Shipping pure-ESM

Do you want to make a pure-ESM package? Then you do not want to use
`"moduleResolution": "node"` in `tsconfig.json`, and you will want to set
`"type": "module"` in `package.json`. You may also need to explicitly import
with `.js` extensions in your source code, even if you write `.ts`. This is
awkward, and something the community is still grappling with.

If you have ever stumbled on this topic, you will probably want to see this
link
[https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)

## Footnote 2: Learning your tools

Several people on the
[my recent post](https://cmdcolin.github.io/posts/2022-05-04-findseddangerous)
post suggested that I did not understand my tools, and that I should just learn
the tools correctly and I wouldn't have the problem I had.

Indeed, what I am now telling people to do in this post is similar: I am saying
"just use `tsc` by itself! Understand you tools! You may have to do more
research and create more boilerplate, but it's **better**".

Ultimately though, it's up to you to choose your tools and starter packs and
whatnot.

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

See
[https://cmdcolin.github.io/posts/2021-12-31-npm-package](https://cmdcolin.github.io/posts/2021-12-31-npm-package)
for my article on creating a typescript package for npm

## Footnote 4: Other things people recommend

Other things people recommend in the starter pack threads

- `deno` - not clear to me how this helps when deploying to npm, but I still gotta try deno
- `ts-node ` - not clear to me how this helps when deploying to npm
- `nx` - heavy monorepo-based solution
- `elm` - that's just a different thing
- `Typescript-Node-Starter` - [https://github.com/microsoft/TypeScript-Node-Starter](https://github.com/microsoft/TypeScript-Node-Starter) - not a library, full stack framework
- `joystick` - [https://github.com/CheatCode/joystick](https://github.com/CheatCode/joystick) - not a library, full stack framework

## Footnote 5:

Similar things happen if you take on dependencies of starter kits like
`create-react-app`. You become very committed to their particular way of doing
things, and can only modify their config with things like `rescripts`, `craco`
or `rewired`. If you crafted your setup with just `webpack`, you may not be so
tied down. But, I still use things like `create-react-app` because they do seem
to help me significantly. Now though, the tide seems to be turning other
directions like next.js which can do static site generation at a basic level
and extend to multiple pages more easily.
