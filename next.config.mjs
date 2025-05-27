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
          },
          {
            protocol:"https",
            hostname:"www.google.co.uk"
          }
        ],
      },
      output: 'export',
};

export default nextConfig;
