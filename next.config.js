/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      remotePatterns: [
        // Match all images from res.cloudinary.com
        {
          hostname: 'res.cloudinary.com',
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  