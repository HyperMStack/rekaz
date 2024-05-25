/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "ar"],
    defaultLocale: "en-US",
    localeDetection: false,
  },
};

export default nextConfig;
