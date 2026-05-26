/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // three / r3f ship ESM that Next transpiles cleanly
  transpilePackages: ["three"],
};
export default nextConfig;
