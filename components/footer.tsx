import Container from './container'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-14 flex flex-col lg:flex-row items-center">
          <div className="m-4">
            <Link href="/">
              <a className="hover:underline">Home</a>
            </Link>
          </div>
          <div className="m-4">
            <Link href="https://github.com/cmdcolin">
              <a className="hover:underline">Github</a>
            </Link>
          </div>
          <div className="m-4">
            <Link href="https://twitter.com/cmdcolin">
              <a className="hover:underline">Twitter</a>
            </Link>
          </div>
          <div className="m-4">
            <Link href="/projects">
              <a className="hover:underline">Projects</a>
            </Link>
          </div>
          <div className="m-4">
            <Link href="/photos">
              <a className="hover:underline">Photos</a>
            </Link>
          </div>
          <div className="m-4">
            <Link href="/rss.xml">
              <a className="hover:underline">RSS</a>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
