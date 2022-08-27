import Container from '../components/container'
import Head from 'next/head'
import Layout from '../components/layout'
import Header from '../components/header'

function Contents() {
  return (
    <div>
      <h2 id="about-me">About me</h2>
      <p>
        I am currently working for UC Berkeley on the{' '}
        <a href="https://jbrowse.org">JBrowse</a>
        project, which is a web-based genome browser.
      </p>
      <p>
        I&apos;m from Boulder, CO and currently work remotely from ABQ, NM. In
        previous lives I also lived in Columbia, MO and Detroit, MI
      </p>
      <p>
        <img src="/me2.jpg" alt="" />
      </p>
      <p>
        This website is made with next.js, source here
        <a href="https://github.com/cmdcolin/cmdcolin.github.io">
          https://github.com/cmdcolin/cmdcolin.github.io
        </a>
      </p>
    </div>
  )
}

export default function Page() {
  return (
    <>
      <Head>
        <title>Misc scribblings - About me</title>
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
