import { getPageMarkdown } from '@/lib/api'

export const metadata = {
  title: 'Hobbies',
}

export default async function Page() {
  const { html } = await getPageMarkdown('hobbies.md')
  return <div className="tiny" dangerouslySetInnerHTML={{ __html: html }} />
}
