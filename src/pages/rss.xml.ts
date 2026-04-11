import { Feed } from 'feed'
import { getAllPosts } from '../../lib/api.ts'

export async function GET() {
  const siteUrl = 'https://cmdcolin.github.io'
  const feed = new Feed({
    title: 'Misc scribblings',
    description: 'Misc scribblings',
    id: siteUrl,
    link: siteUrl,
    language: 'en',
    copyright: 'Colin Diesh',
    author: {
      name: 'Colin Diesh',
      link: siteUrl,
    },
  })

  const posts = await getAllPosts()
  posts.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())

  for (const post of posts) {
    const link = `${siteUrl}/posts/${post.id}/`
    feed.addItem({
      title: post.title,
      id: link,
      link,
      date: new Date(post.date),
    })
  }

  return new Response(feed.rss2(), {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  })
}
