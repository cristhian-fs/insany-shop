import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
