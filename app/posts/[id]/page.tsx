import Head from 'next/head'
import Container from '@/components/container'
import Header from '@/components/header'
import PostHeader from '@/components/post-header'
import Layout from '@/components/layout'
import { getPostById, getAllPosts } from '@/lib/api'
import GiscusBox from '@/components/giscus'

export default async function Post({ params }: { params: { id: string } }) {
  const { id } = params
  const { html, title, date } = await getPostById(id)
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <Container>
          <Header />
          <article>
            <Head>
              <title>{title}</title>
            </Head>
            <PostHeader title={title} date={date} />
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <GiscusBox />
          </article>
        </Container>
      </Layout>
    </>
  )
}

export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map(post => ({
    id: post.id,
  }))
}
