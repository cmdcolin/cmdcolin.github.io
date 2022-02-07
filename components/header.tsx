import Link from 'next/link'

const Header = () => {
  return (
    <div style={{ marginBottom: 100 }}>
      <Link href="/">
        <a>Misc scribbles</a>
      </Link>
    </div>
  )
}

export default Header
