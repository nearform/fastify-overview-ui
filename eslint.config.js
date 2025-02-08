import js from '@eslint/js'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'

export default [
  js.configs.recommended,
  prettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser
      },
      ecmaVersion: 'latest',
      sourceType: 'module'
    }
  },
  {
    ignores: ['node_modules', '.DS_Store', 'dist', 'dist-ssr', '*.local']
  }
]
