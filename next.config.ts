import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect old voice onboarding paths to /frac
      {
        source: '/voice/new',
        destination: '/frac',
        permanent: true,
      },
      {
        source: '/new-voice',
        destination: '/frac',
        permanent: true,
      },
      // Redirect old /articles/[slug] to root-level /[slug] for SEO preservation
      {
        source: '/articles/:slug',
        destination: '/:slug',
        permanent: true, // 301 redirect for SEO
      },
      // Redirect old URLs to new clean SEO-optimized URL: /fractional-jobs-uk
      {
        source: '/fractional-jobs',
        destination: '/fractional-jobs-uk',
        permanent: true, // 301 redirect for SEO
      },
      {
        source: '/fractional-jobs-london',
        destination: '/fractional-jobs-uk',
        permanent: true, // 301 redirect for SEO
      },
      {
        source: '/uk-fractional-jobs-uk-london-fractional-jobs-london',
        destination: '/fractional-jobs-uk',
        permanent: true, // 301 redirect for SEO
      },
      {
        source: '/london',
        destination: '/fractional-jobs-uk',
        permanent: true, // 301 redirect for SEO
      },
      // Redirect part-time pages to new SEO-optimized URLs with "jobs-uk" suffix
      {
        source: '/part-time-cfo',
        destination: '/part-time-cfo-jobs-uk',
        permanent: true, // 301 redirect for SEO
      },
      {
        source: '/part-time-cmo',
        destination: '/part-time-cmo-jobs-uk',
        permanent: true, // 301 redirect for SEO
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Enable Link prefetching for better performance
          {
            key: "Link",
            value: "</fractional-jobs>; rel=prefetch, </fractional-jobs-articles>; rel=prefetch",
          },
        ],
      },
    ];
  },

  images: {
    unoptimized: true, // For Vercel deployment
  },

  // Optimize CSS and package imports for modern browsers
  experimental: {
    // Tree-shake heavy packages more aggressively
    optimizePackageImports: [
      "@tailwindcss/typography",
      "react-markdown",
      "@humeai/voice-react",
      "@stackframe/stack",
      "@neondatabase/serverless",
      "zod",
      "three",
      "three-spritetext",
    ],
    // Inline critical CSS to eliminate render-blocking requests
    optimizeCss: true,
  },
};

export default nextConfig;
