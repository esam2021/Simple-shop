/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //  remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'unsplash.com.com',
    //     pathname: '/images',
    //   },
    // ]
    domains: ["images.unsplash.com", "cdn.dummyjson.com"],
  },
};

export default nextConfig;
