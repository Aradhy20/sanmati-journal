/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'sanmatijournal.in',
            },
        ],
    },
    async headers() {
        return [
            {
                source: '/articles/:slug*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=7200',
                    },
                ],
            },
            {
                source: '/',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=300, s-maxage=3600',
                    },
                ],
            },
            {
                source: '/api/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'no-store',
                    },
                ],
            },
            {
                source: '/admin/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'no-store, private',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
