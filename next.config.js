/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
  },
  distDir: "build",
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "",
  //       port: "",
  //       pathname: "",
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
