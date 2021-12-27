import Link from 'next/link'

type Props = {
  posts: { title: string; date: string; slug: string }[]
}

const PostPreview = ({
  title,
  date,
  slug,
}: {
  title: string
  date: string
  slug: string
}) => {
  return (
    <div>
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a>
          {date} - {title}
        </a>
      </Link>
    </div>
  )
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <h1>Posts</h1>
      <div>
        {posts.map(post => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
