/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BACKEND: process.env.BACKEND,
      },
    images: {
      domains: [
        "api.microlink.io", // Microlink Image Preview
      ],
  },
}

module.exports = nextConfig
