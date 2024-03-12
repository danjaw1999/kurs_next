import mdx from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["ts", "tsx", "mdx"],
    experimental: {
        typedRoutes: true,
        mdxRs: true,
    },
    redirects: async () => ([
            {
                source: "/categories/:category",
                destination: "/categories/:category/1",
                permanent: true,
            },
            {
                source: "/products",
                destination: "/products/1",
                permanent: true,
            },
        ]
    ),
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "picsum.photos",
                port: "",
            },
            {
                protocol: "https",
                hostname: "loremflickr.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "static-ourstore.hyperfunctor.com",
                port: "",
            },
        ],
    },
};

export default mdx()(nextConfig);
