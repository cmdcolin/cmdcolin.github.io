import Head from 'next/head'
import { getPostById, getAllPosts } from '@/lib/api'
import GiscusBox from '@/components/giscus'

export default async function Post({ params }: { params: { id: string } }) {
  const { id } = params
  const { html, title, date } = await getPostById(id)
  return (
    <article>
      <Head>
        <title>{title}</title>
      </Head>

      <div>
        <h1>{title}</h1>
        <h4>{date}</h4>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html.toString() }} />
      <GiscusBox />
    </article>
  )
}

export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map(post => ({
    id: post.id,
  }))
}
