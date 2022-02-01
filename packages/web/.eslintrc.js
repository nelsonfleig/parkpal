module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['../../.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  rules: {
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/no-unescaped-entities': 'off',
  },
};
