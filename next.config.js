/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  }
}

module.exports = nextConfig
