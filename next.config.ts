import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Your existing settings to ignore errors during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // ADDED: The new configuration to fix the build errors
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // This tells webpack to ignore Node.js specific modules (net, fs, etc.)
      // on the client-side, preventing the build from failing.
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
        fs: false,
        http2: false,
      };
    }

    return config;
  },
};

export default nextConfig;
