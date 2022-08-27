import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

// locals
import Container from '../../components/container'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import Giscus from '@giscus/react'

type Props = {
  post: any
  preview?: boolean
}

const Post = ({ post }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  const { title, date } = post
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <Container>
          <Header />
          {router.isFallback ? (
            <div>Loading...</div>
          ) : (
            <article>
              <Head>
                <title>{title}</title>
              </Head>
              <PostHeader title={title} date={date} />
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              <div style={{ marginTop: 200 }}>
                <Giscus
                  id="comments"
                  repo="cmdcolin/cmdcolin.github.io"
                  repoId="MDEwOlJlcG9zaXRvcnkyNjE0OTY3Nw=="
                  category="General"
                  categoryId="DIC_kwDOAY8DLc4CO-L9"
                  mapping="pathname"
                  term="Welcome to @giscus/react component!"
                  reactionsEnabled="1"
                  emitMetadata="0"
                  inputPosition="top"
                  lang="en"
                  loading="lazy"
                />
              </div>
            </article>
          )}
        </Container>
      </Layout>
    </>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = await getPostBySlug(params.slug)

  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts()

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
