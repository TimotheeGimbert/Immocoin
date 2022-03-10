/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://immocoin-api-rails.herokuapp.com', 'localhost']
    // group heroku : domains: ["api-immocoin.herokuapp.com", "api-immocoin-staging.herokuapp.com"]
  }
}

module.exports = nextConfig
