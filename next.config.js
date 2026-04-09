/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Remove the entire experimental section or just comment it out
  // experimental: {
  //   serverActions: true,  // <-- Remove this line - it's now default
  // },
  
  output: 'standalone',
  compress: true,
  poweredByHeader: false,
  trailingSlash: false,
};

module.exports = nextConfig;