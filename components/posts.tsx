import Link from 'next/link'
interface Post {
  title: string
  date: string
  slug: string
}
interface Props {
  posts: Post[]
}

const PostPreview = ({ post }: { post: Post }) => {
  const { title, date, slug } = post
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
            <PostPreview post={post} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default MoreStories
