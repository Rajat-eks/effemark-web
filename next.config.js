// next.config.js


/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Remove the default SVG rule so ours can take over
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
