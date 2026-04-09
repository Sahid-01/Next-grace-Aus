/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  // Allow all image sources (assets are served from public/)
  images: {
    unoptimized: true,
  },
  // Suppress Leaflet SSR warnings
  webpack: (config) => {
    config.resolve.fallback = { ...config.resolve.fallback, fs: false, net: false, tls: false };
    return config;
  },
};

module.exports = nextConfig;
