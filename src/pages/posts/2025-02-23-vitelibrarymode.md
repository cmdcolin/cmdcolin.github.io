---
title: >-
  Vite library mode bundles your library's dependencies (which I don't think is
  good for libraries published to NPM)
date: 2025-02-23T00:00:00.000Z
layout: ../../layouts/MarkdownLayout.astro
---

![my cats](/chiblets.jpg)

Vite is a very popular "build tool" for making all sorts of javascript apps. It
is most commonly used for making single page apps, but it also has a feature
called ["library mode"](https://vite.dev/guide/build#library-mode) which helps
you publish things that you have written on NPM. I imagine it is much less
commonly used than vite itself, but I wanted to comment on it because it has a
behavior I'm not a big fan of...

## Vite library mode completely minifies+bundles all your dependencies

For example, if your library that is using vite library mode has

```typescript
import leftPad from 'left-pad'

const str = leftPad('foobar', 6)
```

then it is turned into this in the dist folder by vite library mode

```typescript
function d(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default')
    ? t.default
    : t
}
var f, o
function n() {
  if (o) return f
  ;(o = 1), (f = i)
  var t = [
    '',
    ' ',
    '  ',
    '   ',
    '    ',
    '     ',
    '      ',
    '       ',
    '        ',
    '         ',
  ]
  function i(a, r, e) {
    if (((a = a + ''), (r = r - a.length), r <= 0)) return a
    if ((!e && e !== 0 && (e = ' '), (e = e + ''), e === ' ' && r < 10))
      return t[r] + a
    for (var u = ''; r & 1 && (u += e), (r >>= 1), r; ) e += e
    return u + a
  }
  return f
}
var P = n()
const l = /* @__PURE__ */ d(P)
l('foobar', 6)
```

yes, that's the left-pad source code, inlined into your library's distribution

I personally believe this is bad. It could have just put this into the dist
folder:

```typescript
import leftPad from 'left-pad'

const str = leftPad('foobar', 6)
```

then, any consumer of your library can trace the import from your library to
left-pad, which is responsibly declared in your package.json "dependencies", and
everything is fine and normal.

But this is not how vite library mode does it, so I must construct some strawmen
to wonder why anyone would do this

### Why someone might bundle their dependencies they upload to NPM

- They are anti-toolchain enthusiasts or appeasing anti-toolchain
  enthusiasts/luddites/non-JS users and want a single javascript file that they
  can put in a script tag, from unpkg or similar
- They think they are helping against supply chain attacks by bundling all their
  dependencies to a fixed version. After all, left-pad happened one time
- They don't realize they are doing it

### Why someone might minify the things they upload to NPM

- They are anti-toolchain enthusiasts (see above) and yet they want the optimal
  byte size savings from minification
- They feel deeply connected to memes about node_modules folders being a black
  hole and think minifying might help
- They feel bad for NPMs servers having to serve so much data, and think
  minifying could help save the internet (see articles titled "I saved NPM from
  serving 440gb per week by removing THIS ONE LINER")
- They like inscrutable things

(you can likely toggle minification in vite library mode settings, but it
minifies by default)

### Why I think it is bad to bundle your dependencies for artifacts that you upload to NPM

- Consumers of your library will not get semver updates from your
  sub-dependencies
- Consumers might think they are getting semver updates from your
  sub-dependencies if you list these in the "dependencies" in your package.json,
  but since you effectively hard-coded the particular version at build time via
  bundling, they are not getting the updates
- They may end up with duplicate dependencies, that could even be incompatible
  in insane ways
- The vite library technique only (to my knowledge) has the technique of
  one-by-one externalizing dependencies e.g. only externalize React. Personal
  note: I really don't like this. Why do you think that you externalize React in
  particular? Yes, it is because having multiple versions of React on a page
  causes the most insane error messages the world has ever seen. I only wrote
  this blogpost because of one of these errors. I wasn't able to consume a plain
  old function component that I exported from a package I tried to make with
  vite library mode.
- Users of your library will have very little recourse to fix the issue
  (particularly combined with the minification), so they will not be able to use
  a yarn `resolution` to lock to a working version or use `yarn link` to get a
  patched version
- Couple more reasons listed here
  https://cmdcolin.github.io/posts/2022-05-27-youmaynotneedabundler#why-would-you-not-want-a-bundler-for-your-library

### Why I think it is bad to minify the libraries that you upload to NPM

- It is an obscure mess that is difficult to inspect
- Consumers of the app should do minification if they need it

## Conclusions

I am a dependencies apologist. I like libraries, they do good things for me, and
I enjoy getting regular bugfixes and improvements. I like good library hygiene

I have previously written about why you may NOT need a bundler for your library
here https://cmdcolin.github.io/posts/2022-05-27-youmaynotneedabundler.

I also wrote a small article about a bundler-less way to make a pure-ESM
typescript packages here https://cmdcolin.github.io/posts/2025-01-12-pureesm

## Footnote 1

I am not trying to pick on vite here. They do great work for the community. I
bet many other quickstart NPM library creation kits have this same trouble (e.g.
from my list https://cmdcolin.github.io/posts/2022-05-27-youmaynotneedabundler)

For example, the first one on that list, microbundle, has a full wiki page to
justify doing things this way, but has even more complex subtle behavior
https://github.com/developit/microbundle/wiki/How-Microbundle-decides-which-dependencies-to-bundle

## Footnote 2

I changed the title to explicitly say that I think it is bad for libraries that
are published to NPM.

If you want to make a single file build that people can use in script tag, then
you can use it
