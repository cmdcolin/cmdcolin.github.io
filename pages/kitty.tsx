import Container from '../components/container'
import Head from 'next/head'
import Layout from '../components/layout'
import Header from '../components/header'

function Contents() {
  return (
    <div>
      <h1>Kitty</h1>
      <p>
        We adopted a cat in late 2021. His name is beezlebub. Beezle for short.
        Or beezee. Or little man. He is very devilish, and in his current life
        stage likes to wake me up at all hours of the night to try to get food.
      </p>
      <img src="/media/kitty3.resized.jpg" />
      <img src="/media/kitty2.resized.jpg" />
      <img src="/media/kitty4.resized.jpg" />
      <img src="/media/kitty1.resized.jpg" />
      <img src="/media/socks.jpg" />
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
