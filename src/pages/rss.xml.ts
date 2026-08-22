import { getAllPosts } from '../../lib/api.ts'

function escapeXml(str: string) {
  return str
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

export function GET() {
  const siteUrl = 'https://cmdcolin.github.io'
  const posts = getAllPosts()

  const items = posts
    .map(post => {
      const link = `${siteUrl}/posts/${post.id}/`
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="false">${link}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Misc scribblings</title>
    <link>${siteUrl}/</link>
    <description>Misc scribblings</description>
    <language>en</language>
    <copyright>Colin Diesh</copyright>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  })
}
