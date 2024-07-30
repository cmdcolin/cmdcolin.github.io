import Container from '@/components/container'
import { getPageMarkdown } from '@/lib/api'

export const metadata = {
  title: 'Hobbies',
}

export default async function Page() {
  const { html } = await getPageMarkdown('hobbies.md')
  return (
    <Container>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  )
}
