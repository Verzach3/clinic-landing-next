/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    turbotrace: {},
    turbo: {
    },
    optimizePackageImports: ["@mantine/core", "@tabler/icons-react", "react-icons"],
    swcPlugins: [['@swc-jotai/react-refresh', {}]]
  },
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "curmgtrnrpyjsizyhdzy.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/landing-bucket/**"
      }
    ]
  }
}
module.exports = nextConfig