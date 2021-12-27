import Link from 'next/link'

const Header = () => {
  return (
    <div className="text-2xl md:text-4xl font-bold py-14 border-b border-accent-2 flex flex-col lg:flex-row items-center">
      <Link href="/">
        <a className="header">Misc scribbles</a>
      </Link>
    </div>
  )
}

export default Header
