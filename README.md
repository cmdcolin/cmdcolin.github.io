# welcome

Blogpost on how this site is made

https://cmdcolin.github.io/posts/2021-12-26-nextjs


I manually exported a bunch of tumblr data in HTML, converted to markdown with
pandoc which was sort of scrappy, and then hand edited it into a nextjs style
static website. I did a v2 of this where I adapted from
https://github.com/vercel/next.js/tree/canary/examples/blog-starter-typescript
to allow creating a RSS feed and the pages/posts/[slug] concept instead of
hardcoding all pages. The benefits are a little hard to tell. To me, it created
more complication with not that many benefits, which goes against the
minimalism of the blog, but may be more next.js-idiomatic

## deploy

```
yarn deploy
```


## dev

```
yarn dev
```

Starts locally on http://localhost:3000

