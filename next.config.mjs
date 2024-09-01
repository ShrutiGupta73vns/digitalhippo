/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "digitalhippo-production-54a3.up.railway.app",
			},
		],
    }
};

export default nextConfig;
