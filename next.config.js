/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: [
      "st.kp.yandex.net",
      "avatars.mds.yandex.net",
      "www.themoviedb.org",
      "imagetmdb.com",
    ],
  },
};

module.exports = nextConfig;
