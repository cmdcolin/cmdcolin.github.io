import { getAllSketches } from '@/lib/api'

export const metadata = {
  title: 'Sketches',
}

interface Post {
  title: string
  date: number
  url: string
  note?: string
}

const PostPreview = ({ post, idx }: { post: Post; idx: number }) => {
  const id = String(idx + 1)
  const k1 = `/sketches/k${id}.resized.webp`
  const k2 = `/sketches/j${id}.resized.webp`
  return (
    <div className="mb-8">
      <div>
        <a href={k1}>
          <img height={400} src={k1} loading="lazy" alt="mine" />
        </a>
        <a href={k2}>
          <img height={400} src={k2} loading="lazy" alt="orig" />
        </a>
      </div>
      <br />
      {new Date(post.date).toLocaleDateString()} -{' '}
      <a href={post.url}>{post.title}</a> {post.note ? `(${post.note})` : ''}
    </div>
  )
}

export default function Page() {
  const sketches = getAllSketches()
  return (
    <div>
      <h1>Sketches</h1>
      {sketches.map((post, index) => (
        <PostPreview
          key={JSON.stringify(post)}
          post={post}
          idx={sketches.length - index - 1}
        />
      ))}
    </div>
  )
}
