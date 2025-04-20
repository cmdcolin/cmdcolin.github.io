import Link from 'next/link'

function Link2({
  children,
  href,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link className="m-2" href={href}>
      {children}
    </Link>
  )
}
export default function Footer() {
  return (
    <footer className="mt-16">
      <Link2 href="/">Home</Link2>
      <Link2 href="/archive">Blog archive</Link2>
      <Link2 href="https://github.com/cmdcolin/">Github</Link2>
      <Link2 href="/projects">Projects</Link2>
      <Link2 href="/books">Books</Link2>
      <Link2 href="/about">About</Link2>
      <Link2 href="/rss.xml">RSS</Link2>
    </footer>
  )
}
