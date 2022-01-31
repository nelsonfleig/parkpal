const buildEslintCommand = (packagePath) => (filenames) =>
  `cd ${packagePath} && yarn lint-staged:lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  // Run ESLint on /server
  'packages/server/src/**/*.{ts,tsx}': [buildEslintCommand('packages/server')],
  // Run ESLint on /web
  'packages/web/src/**/*.{ts,tsx}': [buildEslintCommand('packages/web')],
  // Run ESLint on /mobile
  'packages/mobile/src/**/*.{ts,tsx}': [buildEslintCommand('packages/mobile')],
};