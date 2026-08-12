import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      // import文のソートを有効化
      'simple-import-sort/imports': [
        'error',
        {
          // グループの設定とグループ間の空行制御
          groups: [
            // 1. 外部ライブラリ (node_modules)
            ['^react', '^@?\\w'],
            // 2. エイリアスパスや絶対パス (@/ などの設定)
            ['^@/'],
            // 3. 親ディレクトリルート (..)
            ['^\\.\\.'],
            // 4. 同一ディレクトリルート (.)
            ['^\\.'],
            // 5. 型定義のimport (TypeScript使用時)
            ['^.*\\u0000$'],
            // 6. スタイルファイルのimport (CSS/SCSS等)
            ['^.+\\.s?css$'],
          ],
        },
      ],
      // export文のソートも有効化
      'simple-import-sort/exports': 'error',
    },
  },
])
