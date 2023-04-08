import Head from 'next/head'
import Link from 'next/link'
import Container from '@/components/container'
import Layout from '@/components/layout'
import Header from '@/components/header'
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
  const posts = await getAllPosts()

  return (
    <>
      <Head>
        <title>Misc scribblings</title>
      </Head>
      <Layout>
        <Container>
          <Header />
          <Contents />
          <section>
            <h1>Posts</h1>
            <ul>
              {posts.slice(0, 8).map(post => {
                const { id, date, title } = post
                return (
                  <li key={id}>
                    <Link href={`/posts/${id}`}>
                      {date}-{title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </section>
          <Link href="/archive">More posts...</Link>
        </Container>
      </Layout>
    </>
  )
}
