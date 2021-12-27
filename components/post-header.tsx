type Props = {
  title: string
  date: string
}

const PostHeader = ({ title, date }: Props) => {
  return (
    <h1>
      {title} - {date}
    </h1>
  )
}

export default PostHeader
