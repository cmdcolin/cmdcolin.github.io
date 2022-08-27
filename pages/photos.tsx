import Container from '../components/container'
import Head from 'next/head'
import Layout from '../components/layout'
import Header from '../components/header'

function Contents() {
  return (
    <div>
      <h1>Photos</h1>
      <ul>
        <li>
          Photos of our cat <a href="kitty">beezle</a>
        </li>
        <li>
          My sketch log <a href="sketches">sketches</a>
        </li>
        <li>
          A big old{' '}
          <a href="https://raw.githubusercontent.com/cmdcolin/logistic_chaos_map/master/img/2.png">
            logistic fractal
          </a>
          from my renderer (see projects)
        </li>
        <li>
          Picture of <a href="me2.jpg">me</a>
        </li>
      </ul>
    </div>
  )
}

export default function Page() {
  return (
    <>
      <Head>
        <title>Misc scribblings - Kitty</title>
      </Head>
      <Layout>
        <Container>
          <Header />
          <div className="tiny">
            <Contents />
          </div>
        </Container>
      </Layout>
    </>
  )
}
