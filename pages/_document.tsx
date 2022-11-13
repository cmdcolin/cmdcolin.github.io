import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="favicon.ico" />
          <link rel="alternate" type="application/rss+xml" href="/rss.xml" />
          <meta name="description" content={`Blogging for the future`} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
