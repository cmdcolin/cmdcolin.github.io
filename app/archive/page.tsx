import Head from 'next/head'
import Container from '@/components/container'
import Posts from '@/components/posts'
import Layout from '@/components/layout'
import Header from '@/components/header'
import { getAllPosts } from '@/lib/api'

export default async function Page() {
  const allPosts = await getAllPosts()
  return (
    <>
      <Head>
        <title>Misc scribblings - Blog archive</title>
      </Head>
      <Layout>
        <Container>
          <Header />
          <h1>Blog archive</h1>
          <Posts posts={allPosts} />
        </Container>
      </Layout>
    </>
  )
}
