import Head from 'next/head'
import Link from 'next/link'
import Container from '@/components/container'
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

          <section>
            <h1>Posts</h1>
            <ul>
              {allPosts.map(post => {
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
        </Container>
      </Layout>
    </>
  )
}
