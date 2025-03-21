/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only enable export mode when building for production
  ...(process.env.NODE_ENV === 'production' ? {
    output: 'export',
    distDir: 'out',
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
  } : {
    // Dev mode config
    images: {
      domains: [],
    },
  }),
};

module.exports = nextConfig; 