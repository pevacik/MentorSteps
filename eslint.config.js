import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // ТВОИ ПРАВИЛА КРАСОТЫ:
      'indent': ['error', 2], // Отступ 2 пробела
      'quotes': ['error', 'single'], // Одинарные кавычки
      'semi': ['error', 'never'], // Без точек с запятой
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }], // Чистит лишние пустые строки (оставляет максимум одну)
      'no-trailing-spaces': 'error', // Удаляет пробелы в конце строк
    },
  },
]
