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
      // Redirect old article URLs to new job pages (from Search Console data)
      {
        source: '/articles/fractional-cmo-jobs-uk',
        destination: '/fractional-cmo-jobs-uk',
        permanent: true,
      },
      {
        source: '/articles/fractional-cfo-jobs-uk',
        destination: '/fractional-cfo-jobs-uk',
        permanent: true,
      },
      {
        source: '/articles/fractional-cfo-services-uk',
        destination: '/fractional-cfo-services',
        permanent: true,
      },
      // /fractional-jobs is now a master hub page (not redirected)
      {
        source: '/uk-fractional-jobs-uk-london-fractional-jobs-london',
        destination: '/fractional-jobs-london',
        permanent: true, // 301 redirect for SEO - point malformed URL to London page
      },
      {
        source: '/london',
        destination: '/fractional-jobs-london',
        permanent: true, // 301 redirect for SEO - short URL to London page
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
      // Redirect long recruitment agency URL to short SEO-optimized URL
      {
        source: '/top-fractional-recruitment-agencies-best-fractional-recruitment-agency-fractional-recruiter',
        destination: '/fractional-recruitment-agency',
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
    // Enable image optimization for better Core Web Vitals
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
    // Use modern formats for better compression
    formats: ['image/avif', 'image/webp'],
    // Optimize device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
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
