import NextLink from 'next/link'

export default function Link(props: any) {
  return <NextLink prefetch={false} {...props} />
}
