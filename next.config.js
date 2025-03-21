/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static HTML export for Cloudflare Pages
  distDir: 'out',
  images: {
    unoptimized: true, // For static export
  },
  trailingSlash: true,
};

module.exports = nextConfig; 