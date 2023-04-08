import Head from 'next/head'
import Container from '@/components/container'
import Posts from '@/components/posts'
import Layout from '@/components/layout'
import Header from '@/components/header'
import Link from '@/components/link'
import { getAllPosts } from '@/lib/api'

function Contents() {
  return (
    <div>
      <h1>Colin Diesh</h1>
      <p>
        I&apos;m a software developer and bioinformatician attempting to blog
        stuff.
      </p>
    </div>
  )
}

export default async function Page() {
  const allPosts = await getAllPosts()

  return (
    <>
      <Head>
        <title>Misc scribblings</title>
      </Head>
      <Layout>
        <Container>
          <Header />
          <Contents />
          <Posts posts={allPosts.slice(0, 8)} />
          <Link href="/archive">More posts...</Link>
        </Container>
      </Layout>
    </>
  )
}
