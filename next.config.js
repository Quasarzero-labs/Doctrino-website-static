/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/Doctrino-website-static' : '',
  assetPrefix: isProd ? '/Doctrino-website-static/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
