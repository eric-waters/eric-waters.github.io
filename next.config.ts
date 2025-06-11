import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true, // If using images
  },
  basePath: "", // Set if you're deploying to a subpath
};

export default nextConfig;
