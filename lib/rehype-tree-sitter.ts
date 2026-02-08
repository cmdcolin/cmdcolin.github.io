import { visit } from 'unist-util-visit'
import { toString as hastToString } from 'hast-util-to-string'
import { execFile } from 'node:child_process'
import type { Element, Text, Root } from 'hast'

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

function resolveLanguage(lang: string) {
  const lower = lang.toLowerCase()
  return LANG_ALIASES[lower] || lower
}

function runArborium(lang: string, code: string) {
  return new Promise<string | null>(resolve => {
    const child = execFile(
      'arborium',
      ['--lang', lang, '--html'],
      (err, stdout) => {
        resolve(err ? null : stdout)
      },
    )
    child.stdin!.write(code)
    child.stdin!.end()
  })
}

function unescapeHtml(text: string) {
  return text
    .replaceAll('&#39;', "'")
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
}

// Parse arborium HTML output (custom elements like <a-k>, <a-v>) into HAST nodes
function parseArboriumHtml(html: string) {
  const children: (Element | Text)[] = []
  let i = 0
  while (i < html.length) {
    if (html[i] === '<' && html[i + 1] !== '/') {
      // Opening tag like <a-k>
      const tagEnd = html.indexOf('>', i)
      if (tagEnd === -1) {
        break
      }
      const tagName = html.slice(i + 1, tagEnd)
      const closeTag = `</${tagName}>`
      const closeIdx = html.indexOf(closeTag, tagEnd + 1)
      if (closeIdx === -1) {
        break
      }
      const innerHtml = html.slice(tagEnd + 1, closeIdx)
      children.push({
        type: 'element',
        tagName,
        properties: {},
        children: [{ type: 'text', value: unescapeHtml(innerHtml) }],
      })
      i = closeIdx + closeTag.length
    } else {
      // Plain text until next tag
      let j = html.indexOf('<', i)
      if (j === -1) {
        j = html.length
      }
      const text = unescapeHtml(html.slice(i, j))
      if (text) {
        children.push({ type: 'text', value: text })
      }
      i = j
    }
  }
  return children
}

async function highlightCode(lang: string, code: string) {
  const resolved = resolveLanguage(lang)
  const html = await runArborium(resolved, code)
  if (!html) {
    return null
  }
  return parseArboriumHtml(html)
}

export default function rehypeTreeSitter() {
  return async function (tree: Root) {
    const codeBlocks: { codeEl: Element; lang: string; code: string }[] = []

    visit(tree, 'element', node => {
      if (node.tagName !== 'pre') {
        return
      }
      const codeEl = node.children.find(
        (c): c is Element => c.type === 'element' && c.tagName === 'code',
      )
      if (!codeEl) {
        return
      }
      const className = codeEl.properties?.className
      if (!className) {
        return
      }
      const langClass = (
        Array.isArray(className) ? className : [className]
      ).find(c => typeof c === 'string' && c.startsWith('language-'))
      if (!langClass) {
        return
      }
      const lang = (langClass as string).slice('language-'.length)
      const code = hastToString(codeEl)
      codeBlocks.push({ codeEl, lang, code })
    })

    await Promise.all(
      codeBlocks.map(async ({ codeEl, lang, code }) => {
        const children = await highlightCode(lang, code)
        if (children) {
          codeEl.children = children
        }
      }),
    )
  }
}
