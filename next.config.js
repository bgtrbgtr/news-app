/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.guim.co.uk",
      },
      {
        protocol: "http",
        hostname: "static.guim.co.uk",
      },
      {
        protocol: "https",
        hostname: "static.guim.co.uk",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
