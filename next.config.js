/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
// const isProd = process.env.NODE_ENV === 'production'

module.exports = nextConfig
// {
//   // Use the CDN in production and localhost for development.
//   nextConfig,
//   assetPrefix: isProd ? 'https://cdn.statically.io/gh/NaveenDA/naveenda.github.io/gh-pages/' : '',
// }