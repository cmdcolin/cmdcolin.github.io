import Image from './photo'

interface Post {
  title: string
  date: string
  src: { src: string }
}

type Props = {
  sketches: Post[]
}

const PostPreview = ({ post }: { post: Post }) => {
  return (
    <div>
      <Image src={post.src} />
      {post.date} - <a>{post.title}</a>
    </div>
  )
}

const MoreStories = ({ sketches }: Props) => {
  return (
    <section>
      <h1>Sketches</h1>
      {sketches.map(post => (
        <PostPreview post={post} />
      ))}
    </section>
  )
}

export default MoreStories
