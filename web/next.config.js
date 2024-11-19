/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Add image configuration
  images: {
    domains: ['imgs.search.brave.com', 'burst.shopifycdn.com'],
  },
};

module.exports = nextConfig;