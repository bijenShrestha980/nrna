/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
  },
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
