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
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  rules: {
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
  },
};
