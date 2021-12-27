import Container from './container'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer style={{ marginTop: 20 }}>
      <Container>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        <Link href="/archive">
          <a>Blog archive</a>
        </Link>{' '}
        <Link href="https://github.com/cmdcolin">
          <a>Github</a>
        </Link>{' '}
        <Link href="https://twitter.com/cmdcolin">
          <a>Twitter</a>
        </Link>{' '}
        <Link href="/projects">
          <a>Projects</a>
        </Link>{' '}
        <Link href="/photos">
          <a>Photos</a>
        </Link>{' '}
        <Link href="/rss.xml">
          <a>RSS</a>
        </Link>
      </Container>
    </footer>
  )
}

export default Footer
