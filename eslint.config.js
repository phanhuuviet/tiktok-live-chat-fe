import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';

export default [
    { ignores: ['dist'] },
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.browser,
                process: 'readonly',
                __dirname: 'readonly',
            },
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module',
            },
        },
        plugins: {
            prettier,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            import: importPlugin,
            'unused-imports': unusedImports,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
            'import/order': [
                'warn',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    'newlines-between': 'always',
                    alphabetize: { order: 'asc', caseInsensitive: true },
                },
            ],
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'unused-imports/no-unused-imports': [
                'warn',
                { vars: 'all', varsIgnorePattern: '^[A-Z]', args: 'after-used', argsIgnorePattern: '^_' },
            ],
        },
    },
];
