import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

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
  },
  output: 'export',
};
const withNextIntl = createNextIntlPlugin('./utils/i18n/request.ts');

export default withNextIntl(nextConfig);
