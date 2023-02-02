/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withImages = require("next-images");

module.exports = nextConfig;
module.exports = withImages({
  esModule: true,
});
module.exports = {
  images: {
    unoptimized: true,
  },
};
module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
};
