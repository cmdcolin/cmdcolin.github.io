import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ marginTop: 100 }}>
      <Link href="/">Home</Link> <Link href="/archive">Blog archive</Link>{' '}
      <Link href="https://github.com/cmdcolin/">Github</Link>{' '}
      <Link href="https://twitter.com/cmdcolin">Twitter</Link>{' '}
      <Link href="/projects">Projects</Link> <Link href="/photos">Photos</Link>{' '}
      <Link href="/about">About</Link>
    </footer>
  )
}
