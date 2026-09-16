import rss from '@astrojs/rss'
import { getAllPosts } from '../../lib/api.ts'

const site = 'https://cmdcolin.github.io'

export function GET() {
  return rss({
    title: 'Misc scribblings',
    description: 'Misc scribblings by Colin Diesh',
    site,
    xmlns: { atom: 'http://www.w3.org/2005/Atom' },
    customData: `<language>en</language><copyright>Colin Diesh</copyright><atom:link href="${site}/rss.xml" rel="self" type="application/rss+xml"/>`,
    items: getAllPosts().map(post => ({
      title: post.title,
      link: `/posts/${post.id}/`,
      pubDate: new Date(post.date),
    })),
  })
}
