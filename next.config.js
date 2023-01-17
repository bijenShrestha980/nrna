/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8002",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "mangareader.to",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
