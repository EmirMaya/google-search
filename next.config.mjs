/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "i.pravatar.cc",
          },
          {
            protocol: "https",
            hostname: "i.pinimg.com",
          },
          {
            protocol: "https",
            hostname: "upload.wikimedia.org",
          }
        ],
      },
};

export default nextConfig;
