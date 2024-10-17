import svgoConfig from './svgo.config.mjs'
import i18nextConfig from './next-i18next.config.js'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // set headers to solve Cross-Origin issue, according to the 
  // https://blog.logrocket.com/using-cors-next-js-handle-cross-origin-requests/#additionalsecuritywithcrossoriginpolicies
  async headers() {
        return [
            {
                // matching all API routes
                source: "/api/:path*",
                headers: [
                    // other headers omitted for brevity...
                    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }
                ]
            }
        ]
    },
  i18n: i18nextConfig.i18n,
  reactStrictMode: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'cdn-api.bratislava.sk',
      },
      {
        protocol: 'https',
        hostname: `${process.env.MINIO_BUCKET}.s3.bratislava.sk`,
      },
      {
        protocol: 'https',
        hostname: 'api.mapbox.com',
      },
    ],
  },
  rewrites: async () => {
    return [
      // Media proxy for getting media from Strapi
      {
        source: '/uploads/:path*',
        destination: `${process.env.NEXT_PUBLIC_STRAPI_URL}/uploads/:path*`,
      },
    ]
  },
  // Docs: https://react-svgr.com/docs/next/
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'))

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: {
          loader: '@svgr/webpack',
          options: { svgoConfig },
        },
      },
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
}

export default nextConfig
