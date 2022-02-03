module.exports = {
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
    '@typescript-eslint/no-use-before-define': 'off',
    'react/style-prop-object': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'no-param-reassign': 'off',
    'react/jsx-no-useless-fragment': 'off',
  },
};
