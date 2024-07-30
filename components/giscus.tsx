'use client'

import Giscus from '@giscus/react'
import { useMediaQuery } from 'usehooks-ts'

export default function GiscusBox() {
  const matches = useMediaQuery('(prefers-color-scheme: dark)')
  return (
    <div className="mt-5">
      <Giscus
        theme={matches ? 'transparent_dark' : undefined}
        id="comments"
        repo="cmdcolin/cmdcolin.github.io"
        repoId="MDEwOlJlcG9zaXRvcnkyNjE0OTY3Nw=="
        category="General"
        categoryId="DIC_kwDOAY8DLc4CO-L9"
        mapping="pathname"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        lang="en"
        loading="lazy"
      />
    </div>
  )
}
