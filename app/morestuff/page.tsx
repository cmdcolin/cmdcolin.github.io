import { getPageMarkdown } from '@/lib/api'

export const metadata = {
  title: 'More stuff',
}
export default async function Post() {
  const { html } = await getPageMarkdown('morestuff.md')
  return <div className="tiny" dangerouslySetInnerHTML={{ __html: html }} />
}
