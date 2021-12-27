import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="favicon.ico" />
          <link rel="alternate" type="application/rss+xml" href="/rss.xml" />
          <meta name="description" content={`Blogging for the future`} />
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/prism.min.js"
            integrity="sha512-hpZ5pDCF2bRCweL5WoA0/N1elet1KYL5mx3LP555Eg/0ZguaHawxNvEjF6O3rufAChs16HVNhEc6blF/rZoowQ=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          ></script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
