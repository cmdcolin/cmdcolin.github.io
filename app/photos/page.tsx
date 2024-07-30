import Container from '@/components/container'
import { getPageMarkdown } from '@/lib/api'

export const metadata = {
  title: 'Photos',
}

export default async function Page() {
  const { html } = await getPageMarkdown('photos.md')
  return (
    <Container>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  )
}
