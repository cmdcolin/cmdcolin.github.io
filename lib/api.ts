import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeShiki from '@shikijs/rehype'
import { unified } from 'unified'

import sketches from './sketches.ts'

const postsDirectory = path.join(process.cwd(), '_posts')

function getPostFiles() {
  return fs.readdirSync(postsDirectory)
}

function getSketchFiles() {
  return sketches.map(d => ({ ...d, date: +new Date(d.date) }))
}

function getParser() {
  return unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(remarkGfm)
    .use(rehypeShiki, {
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
          href: `#${String(argument.properties.id)}`,
          style: 'margin-right: 10px',
        },
        children: [{ type: 'text', value: '#' }],
      }),
    })
}

// small speedup from caching this variable
const parser = getParser()

export async function getPostById(id: string) {
  const realId = id.replace(/\.md$/, '')
  const fullPath = path.join(postsDirectory, `${realId}.md`)
  const { data, content } = matter(await fs.promises.readFile(fullPath, 'utf8'))

  const html = await parser.process(content)
  const date = data.date as Date

  return {
    ...data,
    title: data.title as string,
    id: realId,
    date: date.toISOString().slice(0, 10),
    html: html.value.toString(),
  }
}

export async function getPageMarkdown(string_: string) {
  const { data, content } = matter(
    fs.readFileSync(path.join('_pages', string_), 'utf8'),
  )
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
