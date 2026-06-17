/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — required for GitHub Pages (no Node server).
  output: "export",
  // next/image optimization needs a server; disable for static export.
  images: { unoptimized: true },
  // Serve each route as a folder with index.html (friendlier on GitHub Pages).
  trailingSlash: true,
};

export default nextConfig;
