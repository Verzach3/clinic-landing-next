/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    optimizePackageImports: ["@mantine/core", "@tabler/icons-react", "react-icons"],
    swcPlugins: [['@swc-jotai/react-refresh', {}]]
  },
  output: "standalone",
}
module.exports = nextConfig