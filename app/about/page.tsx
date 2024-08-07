import Container from '@/components/container'

export const metadata = {
  title: 'About me',
}

export default function Contents() {
  return (
    <Container>
      <h2 id="about-me">About me</h2>
      <p>
        I am currently working for UC Berkeley on the{' '}
        <a href="https://jbrowse.org">JBrowse</a> project, which is a web-based
        genome browser.
      </p>
      <p>
        I&apos;m from Boulder, CO and work remotely from Greenfield, MA. I have
        also lived in Columbia, MO, Detroit, MI, and Albuquerque, NM
      </p>
      <p>
        <img src="/me2.jpg" alt="" />
      </p>
      <p>
        This website is made with next.js, source here{' '}
        <a href="https://github.com/cmdcolin/cmdcolin.github.io">
          https://github.com/cmdcolin/cmdcolin.github.io
        </a>
      </p>
    </Container>
  )
}
