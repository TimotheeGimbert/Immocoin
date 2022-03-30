/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://immocoin-api-51.herokuapp.com/', 'localhost', 'api-immocoin.herokuapp.com']
  }
}

module.exports = nextConfig
