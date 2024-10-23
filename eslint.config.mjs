import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import removeFirstCommentLine from './custom-rules/removeFirstCommentLine.js';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react: pluginReact,
      'custom-rules': {
        rules: {
          'remove-first-comment-line': removeFirstCommentLine,
        },
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'custom-rules/remove-first-comment-line': 'error',
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];