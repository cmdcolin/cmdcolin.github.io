import { visit } from 'unist-util-visit'
import { toString as hastToString } from 'hast-util-to-string'
import { fromHtml } from 'hast-util-from-html'
import { execFile } from 'node:child_process'
import type { Element, ElementContent, Root } from 'hast'

const LANG_ALIASES: Record<string, string> = {
  sh: 'bash',
  shell: 'bash',
  zsh: 'bash',
  js: 'javascript',
  jsx: 'javascript',
  ts: 'typescript',
  rs: 'rust',
  py: 'python',
  yml: 'yaml',
  golang: 'go',
  md: 'markdown',
}

function runArborium(lang: string, code: string) {
  return new Promise<string>((resolve, reject) => {
    const child = execFile(
      'arborium',
      [
        '--lang',
        LANG_ALIASES[lang.toLowerCase()] ?? lang.toLowerCase(),
        '--html',
      ],
      (err, stdout) => {
        if (err) {
          reject(err)
        } else {
          resolve(stdout)
        }
      },
    )
    child.stdin?.end(code)
  })
}

function isMissingBinary(error: unknown) {
  return error instanceof Error && 'code' in error && error.code === 'ENOENT'
}

async function highlightCode(lang: string, code: string) {
  try {
    const html = await runArborium(lang, code)
    return fromHtml(html, { fragment: true }).children.filter(
      (c): c is ElementContent => c.type === 'element' || c.type === 'text',
    )
  } catch (error) {
    if (isMissingBinary(error)) {
      throw new Error(
        'The `arborium` CLI is required for syntax highlighting but was not found on PATH. Install it with `cargo install arborium-cli`.',
        { cause: error },
      )
    }
    console.warn(`arborium could not highlight a ${lang} block: ${error}`)
    return null
  }
}

function codeLanguage(node: Element) {
  const codeEl = node.children.find(
    (c): c is Element => c.type === 'element' && c.tagName === 'code',
  )
  const className = codeEl?.properties.className
  const classes = Array.isArray(className) ? className : [className]
  const langClass = classes.find(
    c => typeof c === 'string' && c.startsWith('language-'),
  )
  return codeEl && typeof langClass === 'string'
    ? { codeEl, lang: langClass.slice('language-'.length) }
    : undefined
}

export default function rehypeTreeSitter() {
  return async function (tree: Root) {
    const codeBlocks: { codeEl: Element; lang: string }[] = []

    visit(tree, 'element', node => {
      if (node.tagName === 'pre') {
        const block = codeLanguage(node)
        if (block) {
          codeBlocks.push(block)
        }
      }
    })

    await Promise.all(
      codeBlocks.map(async ({ codeEl, lang }) => {
        const children = await highlightCode(lang, hastToString(codeEl))
        if (children) {
          codeEl.children = children
        }
      }),
    )
  }
}
