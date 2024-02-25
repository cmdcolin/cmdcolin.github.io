import fs from 'node:fs'
import matter from 'gray-matter'
import { Feed } from 'feed'
import { join } from 'node:path'
import { unified } from 'unified'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypePrettyCode from 'rehype-pretty-code'

import sketches from './sketches.json' assert { type: 'json' }

const postsDirectory = join(process.cwd(), '_posts')

function getPostFiles() {
  return fs.readdirSync(postsDirectory)
}

function getSketchFiles() {
  return sketches.map(d => ({ ...d, date: +new Date(d.date) }))
}

// cache the unified parser, this actually takes a significant time to
// initialize across many blogposts so caching went from ~60s->~10s to run a
// yarn build
let p: ReturnType<typeof getParserPre> | undefined

function getParser() {
  return unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(remarkGfm)
    .use(rehypePrettyCode, {
      // See Options section below.
      //
      theme: 'one-dark-pro',
    })
    .use(rehypeStringify)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      content: argument => ({
        type: 'element',
        tagName: 'a',
        properties: {
          href: `#${String(argument.properties?.id)}`,
          style: 'margin-right: 10px',
        },
        children: [{ type: 'text', value: '#' }],
      }),
    })
}

export async function getPostById(id: string) {
  const realId = id.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realId}.md`)
  const { data, content } = matter(await fs.promises.readFile(fullPath, 'utf8'))

  const parser = getParser()
  const html = await parser.process(content)
  const date = data.date as Date

  return {
    ...data,
    title: data.title as string,
    id: realId,
    date: `${date.toISOString().slice(0, 10)}`,
    html: html.value.toString(),
  }
}

export async function getPageMarkdown(string_: string) {
  const { data, content } = matter(
    fs.readFileSync(join('_pages', string_), 'utf8'),
  )
  const parser = await getParser()
  const html = await parser.process(content)

  return {
    ...data,
    html: html.value.toString(),
  }
}

export async function getAllPosts() {
  const posts = await Promise.all(getPostFiles().map(id => getPostById(id)))
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}

export function getAllSketches() {
  return getSketchFiles()
}

export function generateRSSFeed(
  articles: {
    title: string
    id: string
    date: string
    description?: string
    html: string
  }[],
) {
  const baseUrl = 'https://cmdcolin.github.io'
  const author = {
    name: 'Colin Diesh',
    email: 'colin.diesh@gmail.com',
    link: 'https://twitter.com/cmdcolin',
  }

  // Construct a new Feed object
  const feed = new Feed({
    title: 'Misc scribblings',
    description: 'Blog by Colin Diesh',
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    copyright: 'n/a',
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`,
    },
    author,
  })

  // Add each article to the feed
  for (const post of articles) {
    const { html, id, date, description, title } = post
    const url = `${baseUrl}/posts/${id}`

    feed.addItem({
      title,
      id: url,
      link: url,
      description,
      content: html,
      date: new Date(date),
      author: [author],
    })
  }

  // Write the RSS output to a public file
  fs.writeFileSync('public/rss.xml', feed.rss2())
}
