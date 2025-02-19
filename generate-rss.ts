import fs from 'node:fs'
import { Feed } from 'feed'
import { getAllPosts } from './lib/api.ts'

generateRSSFeed(await getAllPosts())

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
    link: 'https://cmdcolin.github.io',
  }

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
