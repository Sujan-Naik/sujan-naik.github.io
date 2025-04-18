import type {NextConfig} from "next";
import createMDX from '@next/mdx'


const nextConfig: NextConfig = {
    /* config options here */
    pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
    output: 'export',
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
    transpilePackages: ['next-mdx-remote'],
};


const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [
            // You can add more Remark plugins as needed
        ],
        format: 'mdx',
    }
})


// Merge MDX config with Next.js config
export default withMDX(nextConfig)
