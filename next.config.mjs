/** @type {import('next').NextConfig} */
const nextConfig = {
  skipTypescriptChecking: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
