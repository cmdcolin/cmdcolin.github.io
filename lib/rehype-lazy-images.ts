import { visit } from 'unist-util-visit'
import type { Root } from 'hast'

export default function rehypeLazyImages() {
  return function (tree: Root) {
    visit(tree, 'element', node => {
      if (node.tagName === 'img') {
        node.properties.loading ??= 'lazy'
        node.properties.decoding ??= 'async'
      }
    })
  }
}
