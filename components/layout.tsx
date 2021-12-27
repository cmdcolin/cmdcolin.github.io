import Footer from './footer'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
