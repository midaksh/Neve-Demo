import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.linecheck.it',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'www.linecheck.it',
        port: '',
        pathname: '/wp-content/themes/**',
      },
    ],
  },
};

export default nextConfig;
