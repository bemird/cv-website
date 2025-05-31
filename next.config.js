<<<<<<< Updated upstream
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://backend:8000/:path*', // internal Docker hostname
        },
      ];
    },
  };
=======
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://backend:8000/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
>>>>>>> Stashed changes

  module.exports = nextConfig;
