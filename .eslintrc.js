module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@next/next/core-web-vitals',
    'prettier',
  ],
  ignorePatterns: ['.eslintrc.js'],
  settings: {
    next: {
      rootDir: 'packages/web/',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
