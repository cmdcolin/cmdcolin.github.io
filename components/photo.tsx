import Image from 'next/image'
export default function Photo({ src }: { src: { src: string } }) {
  return (
    <div style={{ maxWidth: 800 }}>
      <a href={src.src}>
        {/*@ts-ignore*/}
        <Image src={src} />
      </a>
    </div>
  )
}
