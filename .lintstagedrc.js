const path = require('path');

const buildEslintCommand = (packagePath) => (filenames) => {
  const str = `cd ${path.join(
    process.cwd(),
    packagePath
  )} && yarn lint-staged:lint --max-warnings=0 --fix --file ${filenames.join(' ')}`;
  // .map((f) => path.relative(process.cwd(), f))
  // .join(' --file ')}`;
  console.log(str);
  return str;
};

module.exports = {
  // Run ESLint on /server
  'packages/server/src/**/*.{ts,tsx}': [buildEslintCommand('packages/server')],
  // Run ESLint on /web
  'packages/web/src/**/*.{ts,tsx}': [buildEslintCommand('packages/web')],
  // Run ESLint on /mobile
  'packages/mobile/src/**/*.{ts,tsx}': [buildEslintCommand('packages/mobile')],
};
