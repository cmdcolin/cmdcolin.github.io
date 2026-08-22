# My blog

Deployed on github pages, made using astro

https://cmdcolin.github.io/

## deploy

Pushing to `main` builds and publishes to the `gh-pages` branch via GitHub
Actions (`.github/workflows/deploy.yml`)

## dev

Syntax highlighting shells out to the `arborium` CLI at build time, so it has to
be on your PATH or the build will fail:

```
cargo install arborium-cli
```

Then

```
pnpm install
pnpm dev
```

Starts locally on http://localhost:3000

Checks: `pnpm lint` (oxlint), `pnpm format` (oxfmt), `pnpm typecheck` (tsc)

## Note

Blog used to be made with next.js. Converted to astro in 2025

Blogpost on how this site is made, things have changed so it may be of
historical note https://cmdcolin.github.io/posts/2021-12-26-nextjs

April 2023, converted blog to statically export the Next 13 'app' directory, see
https://cmdcolin.github.io/posts/2023-04-08-nextjs-appdir-blog
