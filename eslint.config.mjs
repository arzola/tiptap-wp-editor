import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginImport from 'eslint-plugin-import';
import eslintRecommendedConfig from '@eslint/js';
import prettierRecommendedConfig from 'eslint-config-prettier';

export default [
  // Include ESLint's recommended config
  eslintRecommendedConfig.configs.recommended,

  // Include Prettier's recommended config
  prettierRecommendedConfig,

  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Target relevant file extensions
    ignores: ['node_modules/**'], // Ignore unnecessary files
    languageOptions: {
      ecmaVersion: 'latest', // Use the latest ECMAScript features
      sourceType: 'module', // Enable ES Modules
      globals: {
        browser: true,
        node: true,
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
      react: eslintPluginReact,
      import: eslintPluginImport,
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the version of React
      },
    },
    rules: {
      // Prettier rules
      'prettier/prettier': ['error'],

      // React rules
      'react/jsx-no-constructed-context-values': 'error',
      'react/jsx-no-bind': ['warn', { allowArrowFunctions: true }],
      'react/jsx-key': 'error',
      'react/display-name': 'warn',
      // Import rules
      'import/no-anonymous-default-export': 'off',
    },
  },
];