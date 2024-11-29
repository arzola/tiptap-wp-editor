import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginImport from 'eslint-plugin-import'
import eslintRecommendedConfig from '@eslint/js'
import prettierRecommendedConfig from 'eslint-config-prettier'

export default [
  eslintRecommendedConfig.configs.recommended,
  prettierRecommendedConfig,
  {
    ignores: ['node_modules/', 'dist/', 'idea/', '.vscode/', '.git/']
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        browser: true,
        node: true
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      prettier: eslintPluginPrettier,
      react: eslintPluginReact,
      import: eslintPluginImport
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'prettier/prettier': ['error'],
      // React rules
      'react/jsx-uses-react': 'off', // Not needed in React 17+
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+
      'react/jsx-no-constructed-context-values': 'error',
      'react/jsx-no-bind': ['warn', { allowArrowFunctions: true }],
      'react/jsx-key': 'error',
      'react/display-name': 'warn',
      // Import rules
      'import/no-anonymous-default-export': 'off'
    }
  }
]
