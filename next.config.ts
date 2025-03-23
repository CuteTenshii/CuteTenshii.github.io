import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/JustYuuto/deezer-discord-rpc/master/screenshots/rpc.png',
      }
    ]
  }
};

export default nextConfig;
