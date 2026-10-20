/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Set by the GitHub Pages workflow when the site is served from a
  // subpath (e.g. username.github.io/webvorming). Empty for a custom domain.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
