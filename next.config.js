/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  eslint: {
    // Add this to ignore specific ESLint rules during build
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;