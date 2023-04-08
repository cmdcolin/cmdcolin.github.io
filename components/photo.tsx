import Image from 'next/image'

export default function Photo({
  src,
  maxWidth = 800,
}: {
  src: { src: string }
  maxWidth?: number
}) {
  return (
    <div style={{ maxWidth }}>
      <a href={src.src}>
        {/*@ts-ignore*/}
        <Image src={src} />
      </a>
    </div>
  )
}
