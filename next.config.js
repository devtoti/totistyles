/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports =  {
  async redirects() {
  return [
    {
      source: '/contact/visit',
      destination: 'https://devtoti.github.io',
      permanent: true,
    },
  ]
},
}
