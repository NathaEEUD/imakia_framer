import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/:path*',
        destination: "https://imakia.framer.ai/:path*"
      },
    ]
  }
};

export default nextConfig;
