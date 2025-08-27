import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    GITHUB_ID: "Ov23liQfM8LI425VF1Cq",
    GITHUB_SECRET: "50249171436b4876fc9f5c17f9b5c66190e780af",
  },
  images: {
    domains: ["github.com", "avatars.githubusercontent.com"],
  },
  serverExternalPackages: ["bcrypt"],
};

export default nextConfig;
