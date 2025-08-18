// eslint.config.js
import neostandard from 'neostandard'
import stylistic from '@stylistic/eslint-plugin'

export default [
  ...neostandard({
    ts: true,
    jsx: true,
    tsx: true,
    // If you want Stylistic rules, register the plugin here
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      // Stylistic formatting rules
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/quotes': ['error', 'double'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],

      // Tailwind class sorting
      '@stylistic/tailwind/order': 'warn',
      '@stylistic/tailwind/no-custom-classname': 'off',
    },
  }),
]
