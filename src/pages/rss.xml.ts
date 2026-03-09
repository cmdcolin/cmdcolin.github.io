import { Feed } from 'feed'

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

  const postModules = import.meta.glob('../_posts/*.md', { eager: true }) as Record<
    string,
    { frontmatter: { title: string; date: string } }
  >
  const posts = Object.entries(postModules).map(([path, module]) => {
    const filename = path.split('/').pop()!.replace('.md', '')
    return {
      title: module.frontmatter.title,
      pubDate: new Date(module.frontmatter.date),
      link: `${siteUrl}/posts/${filename}/`,
    }
  })
  posts.sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf())

  for (const post of posts) {
    feed.addItem({
      title: post.title,
      id: post.link,
      link: post.link,
      date: post.pubDate,
    })
  }

  return new Response(feed.rss2(), {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  })
}
