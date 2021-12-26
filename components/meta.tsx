import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
      <link rel="shortcut icon" href="favicon.ico" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={`Blogging for the future`} />
    </Head>
  )
}

export default Meta
