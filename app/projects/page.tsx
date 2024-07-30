import Container from '@/components/container'
import { getPageMarkdown } from '@/lib/api'

export const metadata = {
  title: 'Projects',
}
export default async function Post() {
  const { html } = await getPageMarkdown('projects.md')
  return (
    <Container>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  )
}
