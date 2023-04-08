import Head from 'next/head'
import Container from '@/components/container'
import Sketches from '@/components/sketches'
import Layout from '@/components/layout'
import Header from '@/components/header'
import { getAllSketches } from '@/lib/api'

export default async function Page() {
  const allSketches = getAllSketches()
  return (
    <>
      <Head>
        <title>Misc scribblings - Sketches</title>
      </Head>
      <Layout>
        <Container>
          <Header />
          <Sketches sketches={allSketches} />
        </Container>
      </Layout>
    </>
  )
}
