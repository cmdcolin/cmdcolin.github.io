export const metadata = {
  title: 'Photos',
}

export default function Page() {
  return (
    <div className="tiny">
      <h1>Photos</h1>
      <ul>
        <li>
          Photos of our cat <a href="kitty">beezle</a>
        </li>
        <li>
          My sketch log <a href="sketches">sketches</a>
        </li>
        <li>
          A big old{' '}
          <a href="https://raw.githubusercontent.com/cmdcolin/logistic_chaos_map/master/img/2.png">
            logistic fractal
          </a>{' '}
          from my renderer (see projects)
        </li>
        <li>
          Picture of <a href="me2.jpg">me</a>
        </li>
      </ul>
    </div>
  )
}
