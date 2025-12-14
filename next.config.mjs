/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // 🔒 Canonical URL control
  trailingSlash: false,

  async redirects() {
    return [
      // Force HTTPS + www
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
  swcMinify: true,
  poweredByHeader: false,
  generateEtags: true,
}

export default nextConfig
