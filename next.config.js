/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'kartinkof.club',
          },
        ],
      },
}

module.exports = nextConfig
