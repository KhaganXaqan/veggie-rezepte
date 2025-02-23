/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { 
    domains: ['images.unsplash.com'],
    unoptimized: false,
  },
  experimental: {
    optimizeCss: false,
  },
};

module.exports = nextConfig;