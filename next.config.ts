import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
};
const withNextIntl = createNextIntlPlugin('./utils/i18n/request.ts');

export default withNextIntl(nextConfig);
