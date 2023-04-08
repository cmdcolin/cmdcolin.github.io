export default function PostHeader({
  title,
  date,
}: {
  title: string
  date: string
}) {
  return (
    <div>
      <h1>{title}</h1>
      <h4>{date}</h4>
    </div>
  )
}
