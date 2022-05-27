---
title: You may not need a bundler for your NPM library
date: 2022-05-15
---

Very often on twitter, people complain about the difficulty with publishing NPM
libraries or ask what "starter kit" they should use (or otherwise get
recommended starter packs by people trying to make it easier for them)

Example threads

- https://twitter.com/cramforce/status/1513903035197526017
- https://twitter.com/oleg008/status/1510006191296061441
- https://twitter.com/iansu/status/1524860613943382017
- https://twitter.com/mpocock1/status/1525075901905522691

I'm not trying to criticize the posters in these threads, but one thing that is
notable to me in these threads is that people often recommend that you use a
bundler, e.g. a program that combines the multiple files of your codebase, when
developing a library

Examples of programs suggested in these threads that use bundlers

- `microbundle` - https://github.com/developit/microbundle (uses rollup)
- `esno` - https://www.npmjs.com/package/esno (uses esbuild)
- `unbuild` - https://github.com/unjs/unbuild (uses rollup)
- `preconstruct` - https://github.com/preconstruct/preconstruct (uses rollup)
- `tsup` - https://github.com/egoist/tsup (uses esbuild)
- `tsdx` - https://github.com/jaredpalmer/tsdx (uses rollup)
- `vite library mode` - https://vitejs.dev/guide/build.html#library-mode
- `packemon` - https://github.com/milesj/packemon (uses rollup)
- `ts-library-template` - https://github.com/shortercode/ts-library-template (uses rollup)
- `parcel` - https://twitter.com/devongovett/status/1524944991402999810 (uses parcel)
- `dts` - https://weiran-zsd.github.io/dts-cli/

Not using bundlers

- `gts` - https://github.com/google/gts
- `ts-react-toolbox` - https://github.com/zzarcon/ts-react-toolbox/

Other things people recommend

- `deno` - not clear to me how this helps when deploying to npm
- `ts-node ` - not clear to me how this helps when deploying to npm
- `nx` - heavy monorepo-based solution
- `elm` - that's just a different thing
- `Typescript-Node-Starter` - https://github.com/microsoft/TypeScript-Node-Starter (not a library, full stack framework)
- `joystick` - https://github.com/CheatCode/joystick (not a library, full stack framework)

## My solution

To me, you do not need a bundler. If you are using typescript, at this stage in time, you should deploy js files to NPM though. In which case, you can run `tsc` over your library code, and just deploy the folder of outputted files to NPM

Example

package.json:

```json
{
  "scripts": {
    "build": "tsc"
  },
  "files": ["dist"]
}
```

tsconfig.json

```json
{
  "include": ["src"],
  "compilerOptions": {
    "target": "es2018",
    "outDir": "dist",
    "lib": ["dom", "esnext"],
    "declaration": true,
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true
  }
}
```

## What about testing?

Performing testing is not immediately solved by the above

Some options you have

- Use `ts-jest`
- Use `jest` on it's own, plus a `babel` config with `@babel/preset-typescript`
- Use `jest` on it's own, run over the compiled output without a `babel` config
- Use `vitest`
- Possibly something else?

## Caveats

If you really care about producing a UMD bundle that can be used in a script
tag, maybe you want a bundler, but the future does not seem to lie here. Even
the idea of a single file ESM module is, at best, a bit hazy: for example, are
you bundling your dependencies or not?

- If you are not bundling dependencies, then what is the benefit of using a
  bundler anyways?
- If you are bundling dependencies, you are not allowing people to get updates
  to the subdenpendencies with semver!

## Conclusion

You may not need a bundler or a starter kit when developing NPM libraries.

It is tempting to have a nice zero-config solutions and starter kits, but you
will benefit from understanding your tools: specifically, using `tsc` by
itself. The starter kits may not be maintained for perpetuity. Our team used
`tsdx` for some time, but it was not maintained well, and used old typescript
version 3.x, and it ended up being hard to remove from our codebase.

Similar things happen if you take on dependencies like `create-react-app`. You
become very committed to their particular way of doing things, and can only
modify their config with things like `rescripts`, `craco` or `rewired`. If you
crafted your setup with just `webpack`, you may not be so tied down.

There is a nice speed to these starter kits, but I do think it is valuable to
learn your tools
