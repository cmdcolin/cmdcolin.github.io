import { visit } from 'unist-util-visit'
import { toString as hastToString } from 'hast-util-to-string'
import { readFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const QUERIES_DIR = join(__dirname, '..', 'queries')

const SCOPES = [
  'keyword',
  'keyword.control',
  'keyword.control.conditional',
  'keyword.control.repeat',
  'keyword.control.import',
  'keyword.control.return',
  'keyword.control.exception',
  'keyword.operator',
  'keyword.directive',
  'keyword.function',
  'keyword.return',
  'keyword.storage',
  'keyword.storage.type',
  'keyword.storage.modifier',
  'keyword.storage.modifier.mut',
  'keyword.storage.modifier.ref',
  'keyword.special',
  'function',
  'function.builtin',
  'function.call',
  'function.macro',
  'function.method',
  'type',
  'type.builtin',
  'type.parameter',
  'type.enum.variant',
  'type.enum.variant.builtin',
  'constant',
  'constant.builtin',
  'constant.builtin.boolean',
  'constant.character',
  'constant.character.escape',
  'constant.macro',
  'constant.numeric',
  'constant.numeric.integer',
  'constant.numeric.float',
  'string',
  'string.regexp',
  'string.special',
  'string.special.path',
  'string.special.symbol',
  'variable',
  'variable.builtin',
  'variable.parameter',
  'variable.other',
  'variable.other.member',
  'comment',
  'comment.line',
  'comment.block',
  'comment.block.documentation',
  'comment.line.documentation',
  'comment.unused',
  'punctuation',
  'punctuation.bracket',
  'punctuation.delimiter',
  'punctuation.special',
  'operator',
  'attribute',
  'label',
  'namespace',
  'constructor',
  'special',
  'tag',
  'tag.attribute',
  'tag.delimiter',
  'markup.bold',
  'markup.italic',
  'markup.strikethrough',
  'markup.heading',
  'markup.link.text',
  'markup.link.url',
  'markup.list',
  'markup.quote',
  'markup.raw',
]

const SCOPE_TO_CLASS = new Map(
  SCOPES.map(s => [s, 'hl-' + s.replaceAll('.', '-')]),
)

function resolveScope(scope) {
  let s = scope
  while (true) {
    const cls = SCOPE_TO_CLASS.get(s)
    if (cls) {
      return cls
    }
    const idx = s.lastIndexOf('.')
    if (idx === -1) {
      return undefined
    }
    s = s.slice(0, idx)
  }
}

const LANG_CONFIG = {
  bash: { wasm: 'tree-sitter-bash.wasm', queries: ['bash'] },
  sh: { wasm: 'tree-sitter-bash.wasm', queries: ['bash'] },
  shell: { wasm: 'tree-sitter-bash.wasm', queries: ['bash'] },
  zsh: { wasm: 'tree-sitter-bash.wasm', queries: ['bash'] },
  c: { wasm: 'tree-sitter-c.wasm', queries: ['c'] },
  css: { wasm: 'tree-sitter-css.wasm', queries: ['css'] },
  go: { wasm: 'tree-sitter-go.wasm', queries: ['go'] },
  golang: { wasm: 'tree-sitter-go.wasm', queries: ['go'] },
  html: { wasm: 'tree-sitter-html.wasm', queries: ['html'] },
  javascript: {
    wasm: 'tree-sitter-javascript.wasm',
    queries: ['ecma', '_javascript'],
  },
  js: { wasm: 'tree-sitter-javascript.wasm', queries: ['ecma', '_javascript'] },
  jsx: {
    wasm: 'tree-sitter-javascript.wasm',
    queries: ['ecma', '_javascript'],
  },
  json: { wasm: 'tree-sitter-json.wasm', queries: ['json'] },
  typescript: {
    wasm: 'tree-sitter-typescript.wasm',
    queries: ['ecma', '_typescript'],
  },
  ts: { wasm: 'tree-sitter-typescript.wasm', queries: ['ecma', '_typescript'] },
  tsx: { wasm: 'tree-sitter-tsx.wasm', queries: ['ecma', '_typescript'] },
  rust: { wasm: 'tree-sitter-rust.wasm', queries: ['rust'] },
  rs: { wasm: 'tree-sitter-rust.wasm', queries: ['rust'] },
  python: { wasm: 'tree-sitter-python.wasm', queries: ['python'] },
  py: { wasm: 'tree-sitter-python.wasm', queries: ['python'] },
  toml: { wasm: 'tree-sitter-toml.wasm', queries: ['toml'] },
  // yaml/yml disabled: tree-sitter-yaml WASM is incompatible with web-tree-sitter 0.24
}

let parserReady = null
let TreeSitter = null
const languageCache = new Map()
const queryTextCache = new Map()

async function initParser() {
  if (parserReady) {
    return parserReady
  }
  parserReady = (async () => {
    const mod = await import('web-tree-sitter')
    TreeSitter = mod.default
    await TreeSitter.init()
  })()
  return parserReady
}

async function getLanguage(wasmFile) {
  if (languageCache.has(wasmFile)) {
    return languageCache.get(wasmFile)
  }
  const wasmPath = join(
    __dirname,
    '..',
    'node_modules',
    'tree-sitter-wasms',
    'out',
    wasmFile,
  )
  const wasmBuffer = await readFile(wasmPath)
  const lang = await TreeSitter.Language.load(wasmBuffer)
  languageCache.set(wasmFile, lang)
  return lang
}

async function getQueryText(queryDirs) {
  const key = queryDirs.join(',')
  if (queryTextCache.has(key)) {
    return queryTextCache.get(key)
  }
  const parts = []
  for (const dir of queryDirs) {
    const filePath = join(QUERIES_DIR, dir, 'highlights.scm')
    const text = await readFile(filePath, 'utf-8')
    parts.push(text)
  }
  const combined = parts.join('\n')
  queryTextCache.set(key, combined)
  return combined
}

function stripUnsupportedPredicates(queryText) {
  return queryText
    .replaceAll('#set!', '; #set!')
    .replaceAll('#is?', '; #is?')
    .replaceAll('#is-not?', '; #is-not?')
    .replaceAll('#any-of?', '; #any-of?')
    .replaceAll('#not-any-of?', '; #not-any-of?')
}

function tryCompileQuery(language, queryText) {
  let text = queryText
  for (let attempt = 0; attempt < 20; attempt++) {
    try {
      return language.query(text)
    } catch (e) {
      const msg = e.message || ''
      // Extract bad node name and remove patterns containing it
      const badNodeMatch = msg.match(/Bad node name '([^']+)'/)
      if (badNodeMatch) {
        const badName = badNodeMatch[1]
        text = removePatternsWithNode(text, badName)
        continue
      }
      // Try stripping unsupported predicates
      if (attempt === 0) {
        text = stripUnsupportedPredicates(text)
        continue
      }
      console.warn(`Failed to compile query: ${msg}`)
      return null
    }
  }
  return null
}

function removePatternsWithNode(queryText, nodeName) {
  // Split into top-level S-expressions and filter out ones containing the bad node
  const result = []
  let depth = 0
  let start = 0
  let inComment = false

  for (let i = 0; i < queryText.length; i++) {
    const ch = queryText[i]
    if (ch === ';' && depth === 0) {
      inComment = true
    }
    if (ch === '\n') {
      inComment = false
    }
    if (inComment) {
      continue
    }
    if (ch === '(' || ch === '[') {
      if (depth === 0) {
        // Save any text before this pattern (comments, whitespace)
        result.push(queryText.slice(start, i))
        start = i
      }
      depth++
    }
    if (ch === ')' || ch === ']') {
      depth--
      if (depth === 0) {
        const pattern = queryText.slice(start, i + 1)
        // Only include pattern if it doesn't reference the bad node
        const nodeRegex = new RegExp('\\(' + nodeName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[\\s)]')
        if (!nodeRegex.test(pattern)) {
          result.push(pattern)
        }
        start = i + 1
      }
    }
  }
  // Trailing text
  result.push(queryText.slice(start))
  return result.join('')
}

function highlightToHast(code, captures) {
  // Sort captures by start position, then by length (longer first for nesting)
  captures.sort((a, b) => {
    const aStart = a.node.startIndex
    const bStart = b.node.startIndex
    if (aStart !== bStart) {
      return aStart - bStart
    }
    // Longer spans first (parent before child)
    return (b.node.endIndex - b.node.startIndex) - (a.node.endIndex - a.node.startIndex)
  })

  // Build a flat list of [start, end, class] intervals, resolving overlaps
  // by keeping the most specific (last-applied) capture for each character
  const charClass = new Array(code.length).fill(null)
  for (const capture of captures) {
    const cls = resolveScope(capture.name)
    if (!cls) {
      continue
    }
    const start = capture.node.startIndex
    const end = Math.min(capture.node.endIndex, code.length)
    for (let i = start; i < end; i++) {
      charClass[i] = cls
    }
  }

  // Build HAST nodes from consecutive runs with the same class
  const children = []
  let i = 0
  while (i < code.length) {
    const cls = charClass[i]
    let j = i + 1
    while (j < code.length && charClass[j] === cls) {
      j++
    }
    const text = code.slice(i, j)
    if (cls) {
      children.push({
        type: 'element',
        tagName: 'span',
        properties: { className: [cls] },
        children: [{ type: 'text', value: text }],
      })
    } else {
      children.push({ type: 'text', value: text })
    }
    i = j
  }
  return children
}

const queryCache = new Map()

// Queue to serialize all WASM operations (web-tree-sitter uses shared memory)
const queue = []
let processing = false

function enqueue(fn) {
  return new Promise((resolve, reject) => {
    queue.push({ fn, resolve, reject })
    processQueue()
  })
}

async function processQueue() {
  if (processing) {
    return
  }
  processing = true
  while (queue.length > 0) {
    const { fn, resolve, reject } = queue.shift()
    try {
      resolve(await fn())
    } catch (e) {
      reject(e)
    }
  }
  processing = false
}

async function highlightCode(lang, code) {
  const config = LANG_CONFIG[lang.toLowerCase()]
  if (!config) {
    return null
  }

  return enqueue(async () => {
    try {
      await initParser()
      const language = await getLanguage(config.wasm)
      const queryText = await getQueryText(config.queries)

      const cacheKey = config.wasm + '|' + config.queries.join(',')
      let query = queryCache.get(cacheKey)
      if (query === undefined) {
        query = tryCompileQuery(language, queryText)
        queryCache.set(cacheKey, query)
      }
      if (!query) {
        return null
      }

      const parser = new TreeSitter()
      parser.setLanguage(language)
      const tree = parser.parse(code)
      const captures = query.captures(tree.rootNode)
      const result = highlightToHast(code, captures)
      tree.delete()
      parser.delete()
      return result
    } catch (e) {
      console.warn(`Tree-sitter highlight failed for ${lang}:`, e.message)
      return null
    }
  })
}

export default function rehypeTreeSitter() {
  return async function (tree) {
    const codeBlocks = []

    visit(tree, 'element', (node) => {
      if (node.tagName !== 'pre') {
        return
      }
      const codeEl = node.children.find(
        c => c.type === 'element' && c.tagName === 'code',
      )
      if (!codeEl) {
        return
      }
      const className = codeEl.properties?.className
      if (!className) {
        return
      }
      const langClass = (Array.isArray(className) ? className : [className]).find(
        c => typeof c === 'string' && c.startsWith('language-'),
      )
      if (!langClass) {
        return
      }
      const lang = langClass.slice('language-'.length)
      const code = hastToString(codeEl)
      codeBlocks.push({ codeEl, lang, code })
    })

    for (const { codeEl, lang, code } of codeBlocks) {
      const children = await highlightCode(lang, code)
      if (children) {
        codeEl.children = children
      }
    }
  }
}
