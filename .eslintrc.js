const a11yOff = Object.keys(require('eslint-plugin-jsx-a11y').rules).reduce(
    (acc, rule) => {
        acc[`jsx-a11y/${rule}`] = 'off';
        return acc;
    },
    {}
);

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
        ...a11yOff,
        'import/prefer-default-export': 'off',
        'react/jsx-filename-extension': 'off',
        'react/no-unescaped-entities': 'off',
        'react/require-default-props': 'off'
    }
};
