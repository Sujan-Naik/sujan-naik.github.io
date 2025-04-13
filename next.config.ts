import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  /* config options here */
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

      images: {
      remotePatterns: [
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app",
        port: "",
        pathname: "/**",
      },
      ], dangerouslyAllowSVG: true
  },
};


const withMDX = createMDX({
  // Add markdown plugins here, as desired

})




// Merge MDX config with Next.js config
export default withMDX(nextConfig)
