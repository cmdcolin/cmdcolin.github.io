import Header from '@/components/header'
import Footer from '@/components/footer'
import './index.css'

export const metadata = {
  title: 'Misc scribblings',
  description: 'A blog',
  icons: {
    icon: 'favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
