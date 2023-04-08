import Head from 'next/head'
import Container from '@/components/container'
import Layout from '@/components/layout'
import Header from '@/components/header'

function Contents() {
  return (
    <div>
      <h1>Kitty</h1>
      <p>
        We adopted a cat in late 2021. His name is beezlebub. Beezle for short.
        Or beezee. Or little man. He is very devilish.
      </p>
      <img src="/media/kitty3.resized.jpg" />
      <img src="/media/kitty2.resized.jpg" />
      <img src="/media/kitty4.resized.jpg" />
      <img src="/media/kitty1.resized.jpg" />
      <img src="/media/kitty5.jpg" />
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
