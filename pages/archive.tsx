import Head from 'next/head'

import Container from '../components/container'
import Posts from '../components/posts'
import { generateRSSFeed, getAllPosts } from '../lib/api'
import Layout from '../components/layout'
import Header from '../components/header'

export async function getStaticProps() {
  const allPosts = await getAllPosts()

  generateRSSFeed(allPosts)

  return {
    props: { allPosts },
  }
}

export default ({ allPosts }: { allPosts: any }) => (
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
