/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')([
  '@mui/material',
  '@mui/system',
  '@mui/icons-material', // If @mui/icons-material is being used
]);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['artifice-dev.s3.eu-west-2.amazonaws.com'],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@mui/styled-engine': '@mui/styled-engine-sc',
    };
    return config;
  },
});
