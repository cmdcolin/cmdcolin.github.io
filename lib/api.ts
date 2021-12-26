import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const { data, content } = matter(fs.readFileSync(fullPath, 'utf8'))
  return {
    ...data,
    slug: realSlug,
    date: '' + data.date?.toISOString().slice(0, 10),
    content,
  }
}

export function getAllPosts() {
  return fs
    .readdirSync(postsDirectory)
    .map(slug => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}
