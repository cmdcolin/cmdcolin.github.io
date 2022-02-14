interface Post {
  title: string
  date: string
  src: string
  url: string
  note?: string
}

type Props = {
  sketches: Post[]
}

const PostPreview = ({ post, idx }: { post: Post; idx: number }) => {
  const k1 = '/sketches/k' + (idx + 1) + '.resized.webp'
  const k2 = '/sketches/j' + (idx + 1) + '.resized.webp'
  return (
    <div style={{ marginBottom: 100 }}>
      <a href={k1}>
        <img height={450} src={k1} loading="lazy" />
      </a>
      <a href={k2}>
        <img height={450} src={k2} loading="lazy" />
      </a>
      <br />
      {new Date(post.date).toLocaleDateString()} -{' '}
      <a href={post.url}>{post.title}</a> {post.note ? `(${post.note})` : ''}
    </div>
  )
}

const MoreStories = ({ sketches }: Props) => {
  return (
    <section>
      <h1>Sketches</h1>
      {sketches.map((post, idx) => (
        <PostPreview
          key={JSON.stringify(post)}
          post={post}
          idx={sketches.length - idx - 1}
        />
      ))}
    </section>
  )
}

export default MoreStories
