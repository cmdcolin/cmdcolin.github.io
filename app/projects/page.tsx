import { getProjects } from '@/lib/api'
export const metadata = {
  title: 'Projects',
}
export default async function Post() {
  const { html } = await getProjects()
  return <div className="tiny" dangerouslySetInnerHTML={{ __html: html }} />
}
