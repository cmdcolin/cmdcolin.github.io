import Header from '../components/header'
import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'

import { getProjects } from '@/lib/api'

export default function Post({ post }: { post: { html: string } }) {
  const { html } = post
  return (
    <>
      <Head>
        <title>Misc scribblings - Projects</title>
      </Head>
      <Layout>
        <Container>
          <Header />
          <div className="tiny" dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const post = await getProjects()

  return {
    props: {
      post,
    },
  }
}
