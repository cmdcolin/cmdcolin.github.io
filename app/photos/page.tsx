import { getPageMarkdown } from '@/lib/api'

export const metadata = {
  title: 'Photos',
}

export default async function Page() {
  const { html } = await getPageMarkdown('photos.md')
  return <div className="tiny" dangerouslySetInnerHTML={{ __html: html }} />
}
