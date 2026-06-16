import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Set this to true if you want to bypass image optimization (resizing/compression) 
    // entirely to save CPU on very low-resource server laptops.
    unoptimized: false,
  },
};

export default nextConfig;
