import mdx from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["ts", "tsx", "mdx"],
    experimental: {
        typedRoutes: true,
        mdxRs: true
    }
};

export default mdx()(nextConfig);
