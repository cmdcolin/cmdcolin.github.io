import { getProjects } from '@/lib/api'

export default async function Post() {
  const post = await getProjects()
  return (
    <div
      className="tiny"
      dangerouslySetInnerHTML={{ __html: post.html.toString() }}
    />
  )
}
