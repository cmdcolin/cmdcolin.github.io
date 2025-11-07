---
title: Making a static site blog with the Next.js 'app' directory
date: 2023-04-08T00:00:00.000Z
---

I just converted my blog to use the Next.js 'app' directory, and thought I'd
show how you can make your own static site with it. Static export of the Next.js
'app' directory was added in version 13.3
https://nextjs.org/blog/next-13-3#static-export-for-app-router

Update 2025: converted the blog to use astro. The next.js rollercoaster was fun
while it lasted

## TL;DR

See here

https://github.com/cmdcolin/nextjs-appdir-blog

If you take nothing else away from this article, let it be that

- The 'app' dir, with react server components, can be used to create static
  websites

- That react server components (RSC) can be "async function components" whereas
  this does not exist on the client side. It's quite interesting

The exact step-by-step here is probably unnecessary but just trying to show the
raw basics

## Step 1. Run create-next-app

I accepted all defaults but added "YES" to the use experimental app directory

```bash

$ npx create-next-app myblog
✔ Would you like to use TypeScript with this project? … No / YES
✔ Would you like to use ESLint with this project? … No / YES
✔ Would you like to use `src/` directory with this project? … NO / Yes
✔ Would you like to use experimental `app/` directory with this project? … No / YES
✔ What import alias would you like configured? … @/*
Creating a new Next.js app in /home/cdiesh/myblog.

Using npm.

Initializing project with template: app


Installing dependencies:
- react
- react-dom
- next
- typescript
- @types/react
- @types/node
- @types/react-dom
- eslint
- eslint-config-next
```

## Step 2. Edit next.config.js

Add 'output': 'export' to the next.config.js file

```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
};

module.exports = nextConfig;
```

## Step 3. Create the page that will display your posts

Create a new directory like this on the command line, yes there are square
brackets in the directory name

```bash
mkdir -p app/posts/\[id\]/
```

Then make a file page.tsx in there so it is 'app/posts/[id]/page.tsx'

Then on this page, fill in with this

```tsx
import { getPostById, getAllPosts } from "@/lib/api";

// Generate the post, note that this is a "react server component"! it is
// allowed to be async
export default async function Post({
  params: { id },
}: {
  params: { id: string };
}) {
  const { html, title, date } = await getPostById(id);
  return (
    <article>
      <h1>{title}</h1>
      <h4>{date}</h4>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}

// This function can statically allow nextjs to find all the posts that you
// have made, and statically generate them
export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: post.id,
  }));
}

// Set the title of the page to be the post title, note that we no longer use
// e.g. next/head in app dir, and this can be async just like the server
// component
export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const { title } = await getPostById(id);
  return {
    title,
  };
}
```

## Step 4. Fix the cart being ahead of the horse: parse the markdown blogposts

In the last post, I use functions "getAllPosts" and "getPostById", these are
functions that I define that parse my markdown blog posts.

So let's make those functions. The code below performs markdown parsing manually
using unified/remark/rehype and allows github flavored markdown. See Footnote 1
for more info. So first install these

```bash
npm install gray-matter unified remark-gfm remark-parse remark-rehype rehype-stringify rehype-autolink-headings rehype-slug @leafac/rehype-shiki shiki
```

And then, add this code

```typescript
// lib/api.ts
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { unified } from "unified";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";

const postsDirectory = path.join(process.cwd(), "_posts");

function getPostFiles() {
  return fs.readdirSync(postsDirectory);
}

function getParser() {
  return unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(remarkGfm)
    .use(rehypePrettyCode, {
      theme: "one-dark-pro",
    })
    .use(rehypeStringify)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      content: (arg) => ({
        type: "element",
        tagName: "a",
        properties: {
          href: `#${String(arg.properties?.id)}`,
          style: "margin-right: 10px",
        },
        children: [{ type: "text", value: "#" }],
      }),
    });
}

// small speedup from caching this parser
const parser = getParser();

export async function getPostById(id: string) {
  const realId = id.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realId}.md`);
  const { data, content } = matter(
    await fs.promises.readFile(fullPath, "utf8"),
  );

  const html = await parser.process(content);
  const date = data.date as Date;

  return {
    ...data,
    title: data.title as string,
    id: realId,
    date: `${date.toISOString().slice(0, 10)}`,
    html: html.value.toString(),
  };
}

export async function getPageMarkdown(string_: string) {
  const { data, content } = matter(
    fs.readFileSync(path.join("_pages", string_), "utf8"),
  );
  const html = await parser.process(content);

  return {
    ...data,
    html: html.value.toString(),
  };
}

export async function getAllPosts() {
  const posts = await Promise.all(getPostFiles().map((id) => getPostById(id)));
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
```

## Step 5. Create a 'blog index' showing all your blogposts

Edit the `app/page.tsx` file, and replace with the below: this is the root of
your site

```tsx
// app/page.tsx
import Link from "next/link";
import { getAllPosts } from "@/lib/api";

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <div>
      <h1>My blog</h1>

      <h2>All posts:</h2>
      <ul>
        {posts.map((post) => {
          const { id, date, title } = post;
          return (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                {date} - {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
```

## Step 6. Put markdown files in the `_posts` dir

Example

\_posts/2023-04-08-first-post.md

```markdown
---
title: First post
date: 2023-04-08
---

Hello world!
```

## Step 7. Deploy to Github Pages

Create your repo named `yourname.github.io` under yourname account

Then run

```
npm install gh-pages
```

Then add a "predeploy" and "deploy" script to package.json

```json
{
  "private": true,
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next dev",
    "lint": "next lint",
    "predeploy": "npm run build && touch out/.nojekyll",
    "deploy": "gh-pages -d out -t true",
    "postdeploy": "git push --follow-tags"
  },
...
}
```

Then when you use `npm run deploy` it will build, push to github pages, and push
to the the regular content to the main branch too

## Result

Source https://github.com/cmdcolin/nextjs-appdir-blog

Deployed https://cmdcolin.github.io/nextjs-appdir-blog

I manually added `basePath: "/nextjs-appdir-blog",` to `next.config.js` to
deploy it to that sub-URI, if you deploy without a sub-URI, you won't need this

## Footnote 1. The unified/remark/rehype stack

I use the 'unified/remark/rehype' stack for parsing my blogpost markdown. My
unified/remark/rehype setup allows github flavored markdown (so e.g. links are
automatically converted to `<a href>`s) and code will be highlighted by
https://github.com/shikijs/shiki which I found did a pretty good job with e.g.
typescript (I look forward to maybe a treesitter powered coloring, if you find
this let me know)

## Footnote 2. Why not MDX?

There may be some temptation to use things like MDX for your blog, and indeed, I
used MDX with my original blog setup with the `pages` directory
(https://cmdcolin.github.io/posts/2021-12-26-nextjs#using-mdx-for-blogposts-in-nextjs)
but to me it is overkill and harder to understand. If it is desirable or needed
to use it for your setup, see
https://github.com/hashicorp/next-mdx-remote#react-server-components-rsc--nextjs-app-directory-support
