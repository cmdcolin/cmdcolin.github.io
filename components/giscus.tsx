'use client'

import Giscus from '@giscus/react'

export default function GiscusBox() {
  return (
    <div className="mt-5 p-8 bg-white rounded-xl">
      <Giscus
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
