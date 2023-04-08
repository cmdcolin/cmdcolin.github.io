import Head from 'next/head'
import Header from '@/components/header'
import Container from '@/components/container'
import Layout from '@/components/layout'
import { getProjects } from '@/lib/api'

export default async function Post() {
  const post = await getProjects()
  return (
    <>
      <Head>
        <title>Misc scribblings - Projects</title>
      </Head>
      <Layout>
        <Container>
          <Header />
          <div
            className="tiny"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Container>
      </Layout>
    </>
  )
}
