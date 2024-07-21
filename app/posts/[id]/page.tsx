import { getPostById, getAllPosts } from '@/lib/api'
import GiscusBox from '@/components/giscus'

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string }
}) {
  const { title } = await getPostById(id)
  return {
    title,
  }
}

export default async function Post({
  params: { id },
}: {
  params: { id: string }
}) {
  const { html, title, date } = await getPostById(id)
  return (
    <article className="lg:w-1/2 m-auto tiny">
      <div>
        <h1>{title}</h1>
        <h4>{date}</h4>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
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
