module.exports = {
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'next/core-web-vitals',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'airbnb-typescript',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier',
    ],
    plugins: ['import', '@typescript-eslint'],
    settings: {
        next: {
            rootDir: [
                'apps/devlance.io/',
                'packages/ui/',
                'packages/config/',
                'packages/tsconfig/',
            ],
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                project: ['tsconfig.json', 'package/tsconfig.json'],
            },
            typescript: {
                alwaysTryTypes: true,
                project: ['tsconfig.json', 'package/tsconfig.json'],
            },
        },
    },
    rules: {
        'no-console': 2,
        'react/function-component-definition': [
            2,
            { namedComponents: 'arrow-function' },
        ],
        '@next/next/no-html-link-for-pages': ['error', './src/pages'],
    },
    overrides: [
        {
            env: {
                jest: true,
            },
            files: [
                '**/__tests__/**/*.[jt]s?(x)',
                '**/?(*.)+(spec|test).[jt]s?(x)',
            ],
            extends: [
                'plugin:testing-library/react',
                'plugin:jest/recommended',
            ],
            rules: {
                'import/no-extraneous-dependencies': [
                    'off',
                    { devDependencies: ['**/?(*.)+(spec|test).[jt]s?(x)'] },
                ],
            },
        },
    ],
    ignorePatterns: [
        '**/*.js',
        '**/*.json',
        'node_modules',
        '.turbo',
        '.next',
        'public',
        'coverage',
    ],
};
