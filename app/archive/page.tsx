import Link from 'next/link'
import { getAllPosts } from '@/lib/api'

export default async function Page() {
  const allPosts = await getAllPosts()
  return (
    <div>
      <h1>Blog archive</h1>

      <section>
        <h1>Posts</h1>
        <ul>
          {allPosts.map(post => {
            const { id, date, title } = post
            return (
              <li key={id}>
                <Link href={`/posts/${id}`}>
                  {date}-{title}
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
