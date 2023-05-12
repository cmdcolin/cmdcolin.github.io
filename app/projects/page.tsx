import { getPageMarkdown } from '@/lib/api'

export const metadata = {
  title: 'Projects',
}
export default async function Post() {
  const { html } = await getPageMarkdown('projects.md')
  return (
    <div className="tiny">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
