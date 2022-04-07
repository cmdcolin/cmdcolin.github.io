import Link from 'next/link'

const Footer = () => {
  return (
    <footer style={{ marginTop: 100 }}>
      <Link href="/">
        <a>Home</a>
      </Link>{' '}
      <Link href="/archive">
        <a>Blog archive</a>
      </Link>{' '}
      <Link href="https://github.com/cmdcolin/">
        <a>Github</a>
      </Link>{' '}
      <Link href="https://twitter.com/cmdcolin">
        <a>Twitter</a>
      </Link>{' '}
      <Link href="/projects">
        <a>Projects</a>
      </Link>{' '}
      <Link href="https://scholar.google.com/citations?view_op=list_works&hl=en&user=--FwzsgAAAAJ">
        <a>Publications</a>
      </Link>{' '}
      <Link href="/sketches">
        <a>Sketches</a>
      </Link>{' '}
      <Link href="/kitty">
        <a>Kitty</a>
      </Link>{' '}
      <Link href="/rss.xml">
        <a>RSS</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>{' '}
    </footer>
  )
}

export default Footer
