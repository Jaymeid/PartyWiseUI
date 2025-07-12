import pluginJs from '@eslint/js';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
    },
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'lf' }],
      'react/no-unescaped-entities': 'off',
      'import/order': [
        'error',
        {
          alphabetize: { order: 'asc' },
          groups: [
            ['builtin', 'external', 'internal'],
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
          pathGroups: [
            { group: 'builtin', pattern: 'react', position: 'before' },
            {
              group: 'external',
              pattern: '@material-ui/**',
              position: 'after',
            },
            { group: 'external', pattern: '@reach/**', position: 'after' },
            { group: 'external', pattern: '@saeris/**', position: 'after' },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
    },
  },
  prettier, // Disables conflicting ESLint rules
];
