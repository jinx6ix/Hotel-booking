import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/config.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  trailingSlash: false,

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "jaetravel.com",
          },
        ],
        destination: "https://www.jaetravel.com/:path*",
        permanent: true,
      },
    ]
  },

  images: {
    domains: ['www.jaetravel.com'],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true,
  },

  compress: true,
  poweredByHeader: false,
  generateEtags: true,
}

export default withNextIntl(nextConfig);