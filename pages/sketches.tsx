import Container from '../components/container'
import Sketches from '../components/sketches'
import Head from 'next/head'
import { getAllSketches } from '../lib/api'
import Layout from '../components/layout'
import Header from '../components/header'

export default ({ allSketches }: { allSketches: any }) => (
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

export async function getStaticProps() {
  const posts = await getAllSketches()

  return {
    props: { allSketches: posts },
  }
}
