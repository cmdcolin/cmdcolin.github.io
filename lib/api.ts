import fs from 'fs'
import matter from 'gray-matter'
import { Feed } from 'feed'
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

export function generateRSSFeed(articles: any) {
  const baseUrl = 'https://ashleemboyer.com'
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
    const { content, fileName, date, description, title } = post
    const url = `${baseUrl}/${fileName}`

    feed.addItem({
      title,
      id: url,
      link: url,
      description,
      content,
      author: [author],
      date: new Date(date),
    })
  })

  // Write the RSS output to a public file, making it
  // accessible at ashleemboyer.com/rss.xml
  fs.writeFileSync('public/rss.xml', feed.rss2())
}
