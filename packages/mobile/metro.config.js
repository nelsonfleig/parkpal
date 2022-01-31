const { createMetroConfiguration } = require('expo-yarn-workspaces');

const config = createMetroConfiguration(__dirname);
config.resolver.sourceExts.push('cjs');

module.exports = config;
