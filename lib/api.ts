import fs from 'fs'
import matter from 'gray-matter'
import { Feed } from 'feed'
import { join } from 'path'
import { unified } from 'unified'
import remarkGfm from 'remark-gfm'

import rehypeSlug from 'rehype-slug'

import sketches from './sketches.json'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'

//@ts-ignore
import rehypeStarryNight from './rehype-starry-night.js'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

const postsDirectory = join(process.cwd(), '_posts')

function getPostFiles() {
  return fs.readdirSync(postsDirectory)
}

function getSketchFiles() {
  return sketches.map(d => ({ ...d, date: +new Date(d.date) }))
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const { data, content } = matter(fs.readFileSync(fullPath, 'utf8'))

  const html = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStarryNight)
    .use(remarkGfm)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      content: arg => {
        return {
          type: 'element',
          tagName: 'a',
          properties: {
            href: '#' + arg.properties?.id,
            style: 'margin-right: 10px',
          },
          children: [{ type: 'text', value: '#' }],
        }
      },
    })
    .process(content)

  return {
    ...data,
    slug: realSlug,
    date: `${data.date?.toISOString().slice(0, 10)}`,
    html: html.value,
  }
}

export async function getAllPosts() {
  const posts = await Promise.all(
    getPostFiles().map(slug => getPostBySlug(slug)),
  )

  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}

export function getAllSketches() {
  return getSketchFiles()
}

export function generateRSSFeed(articles: any) {
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
  articles.forEach((post: any) => {
    const { html, slug, date, description, title } = post
    const url = `${baseUrl}/posts/${slug}`

    feed.addItem({
      title,
      id: url,
      link: url,
      description,
      content: html,
      date: new Date(date),
      author: [author],
    })
  })

  // Write the RSS output to a public file
  fs.writeFileSync('public/rss.xml', feed.rss2())
}
