module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'prettier',
        'prettier/react'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['react'],
    ignorePatterns: ['node_modules', 'dist', 'webpack/*'],
    rules: {
        'import/prefer-default-export': 'off',
        'react/jsx-filename-extension': 'off',
        'react/no-unescaped-entities': 'off',
        'react/require-default-props': 'off',
        'jsx-a11y/no-autofocus': 'off'
    }
};
