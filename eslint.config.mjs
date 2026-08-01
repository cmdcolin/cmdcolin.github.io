import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginAstro from 'eslint-plugin-astro'
import unicorn from 'eslint-plugin-unicorn'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  unicorn.configs['flat/recommended'],
  {
    rules: {
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/no-null': 'off',
    },
  },
  {
    files: ['**/*.astro', '**/*.astro/*.ts'],
    rules: {
      'unicorn/prefer-module': 'off',
      'unicorn/prefer-dom-node-dataset': 'off',
      'unicorn/prefer-dom-node-append': 'off',
      'unicorn/prefer-query-selector': 'off',
      'unicorn/text-encoding-identifier-case': 'off',
    },
  },
  {
    files: ['src/env.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
  {
    ignores: ['dist/', '.astro/', 'node_modules/'],
  },
)
