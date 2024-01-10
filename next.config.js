/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
    swcPlugins: [['@swc-jotai/react-refresh', {}]]
  },
  output: "standalone"
}

module.exports = nextConfig
