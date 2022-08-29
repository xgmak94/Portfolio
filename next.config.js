/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'upload.wikimedia.org'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(jpg|png|gif|svg|pdf)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
