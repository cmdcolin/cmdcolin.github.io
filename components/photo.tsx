export default function Photo({ src }: { src: string }) {
  return (
    <a href={src}>
      <img src={src} style={{ maxWidth: 800, maxHeight: 600 }} />
    </a>
  )
}
