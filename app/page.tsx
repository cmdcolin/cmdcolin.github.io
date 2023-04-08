import Link from 'next/link'
import { getAllPosts } from '@/lib/api'

export default async function Page() {
  const posts = await getAllPosts()

  return (
    <div>
      <div>
        <h1>Colin Diesh</h1>
        <p>
          I&apos;m a bioinformatician/software engineer/web developer. Blogging
          for the future.
        </p>
      </div>

      <section>
        <h1>Posts</h1>
        <ul>
          {posts.slice(0, 8).map(post => {
            const { id, date, title } = post
            return (
              <li key={id}>
                <Link href={`/posts/${id}`}>
                  {date} - {title}
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
      <Link href="/archive">More posts...</Link>
    </div>
  )
}
