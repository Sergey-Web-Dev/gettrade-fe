import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "https://music-shop-dueo.onrender.com/:path*",
            },
        ];
    },
};

export default nextConfig;
