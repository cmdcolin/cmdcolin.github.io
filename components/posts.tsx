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
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <PostPreview
              key={post.slug}
              title={post.title}
              date={post.date}
              slug={post.slug}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default MoreStories
