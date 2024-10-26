import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/**', // Allow all image paths under /t/p/
      },
    ],
  },
  // Ignore TypeScript build errors
  typescript: {
    ignoreBuildErrors: true,
  },

  // Ignore ESLint build errors
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
