import Link from "next/link";
import { Metadata } from "next";
import { createDbQuery } from "@/lib/db";
import { FractionalCalculator } from "@/components/FractionalCalculator";
import { JobCard } from "@/components/JobCard";
import { AuthAwareHumeWidget } from "@/components/AuthAwareHumeWidget";
import { AnimatedStats } from "@/components/AnimatedStats";
import { LatestNews } from "@/components/RoleNews";
import { JobsGraph3D } from "@/components/JobsGraph3D";
import { DesktopOnly } from "@/components/DesktopOnly";

export const metadata: Metadata = {
  title: "Fractional Jobs | CFO, CMO, CTO Executive Roles UK",
  description: "Find fractional jobs or hire fractional executives. CFO, CMO, CTO roles. £600-£1,500 day rates. Browse fractional jobs UK.",
  keywords: "fractional jobs, fractional jobs uk, fractional executive jobs, fractional services, fractional cfo roles, fractional roles uk, remote fractional jobs, fractional c-suite recruitment",
  alternates: {
    canonical: "https://fractional.quest",
  },
};

// Revalidate homepage every hour
export const revalidate = 3600

interface HomepageSection {
  section_type: string
  section_order: number
  title: string
  subtitle: string
  content: any
}

interface RoleItem {
  icon: string
  name: string
  count: number
  description: string
}

interface BenefitItem {
  icon: string
  title: string
  description: string
}

interface HowItWorksStep {
  step: string
  title: string
  description: string
}

interface Testimonial {
  name: string
  role: string
  quote: string
  companies: string
}

interface Agency {
  name: string
  specialty: string
}

async function getHomepageContent(): Promise<HomepageSection[]> {
  try {
    const sql = createDbQuery()
    const sections = await sql`
      SELECT section_type, section_order, title, subtitle, content
      FROM homepage_content
      WHERE site = 'fractional' AND is_active = true
      ORDER BY section_order ASC
    `
    return sections as HomepageSection[]
  } catch (error) {
    console.error('Error fetching homepage content:', error)
    return []
  }
}

async function getJobStats() {
  try {
    const sql = createDbQuery()
    // Only count actual fractional jobs
    const result = await sql`
      SELECT COUNT(*) as total FROM jobs WHERE is_active = true AND is_fractional = true
    `
    return parseInt((result[0] as any)?.total || '0')
  } catch (error) {
    return 0 // Honest fallback - don't inflate
  }
}

async function getFeaturedJobs() {
  try {
    const sql = createDbQuery()
    // Only show jobs that are actually fractional roles
    const jobs = await sql`
      SELECT
        id,
        slug,
        title,
        company_name,
        location,
        is_remote,
        workplace_type,
        compensation,
        role_category,
        skills_required,
        posted_date,
        description_snippet
      FROM jobs
      WHERE is_active = true AND is_fractional = true
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 6
    `
    return jobs
  } catch (error) {
    console.error('Error fetching featured jobs:', error)
    return []
  }
}

async function getDetailedStats() {
  try {
    const sql = createDbQuery()
    const avgRateResult = await sql`
      SELECT AVG(CAST(REGEXP_REPLACE(compensation, '[^0-9]', '', 'g') AS INTEGER)) as avg
      FROM jobs
      WHERE is_active = true AND compensation IS NOT NULL AND compensation ~ '^[£$]?[0-9]+'
    `
    return {
      avgDayRate: Math.round(parseFloat((avgRateResult[0] as any)?.avg || '500'))
    }
  } catch (error) {
    return { avgDayRate: 500 } // Honest fallback
  }
}

export default async function Home() {
  const [sections, totalJobs, featuredJobs, detailedStats] = await Promise.all([
    getHomepageContent(),
    getJobStats(),
    getFeaturedJobs(),
    getDetailedStats()
  ])

  // Extract sections by type
  const rolesSection = sections.find(s => s.section_type === 'roles')
  const benefitsSection = sections.find(s => s.section_type === 'benefits')
  const howItWorksSection = sections.find(s => s.section_type === 'how_it_works')
  const testimonialsSection = sections.find(s => s.section_type === 'testimonials')
  const agenciesSection = sections.find(s => s.section_type === 'agencies')

  // FAQ JSON-LD for search engines
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a fractional job?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A fractional job is a part-time executive role where you work 1-3 days per week providing strategic leadership without full-time commitment. Fractional executives typically work with 2-4 companies simultaneously, offering their expertise as a Fractional CFO, CMO, CTO, COO, or HR Director."
        }
      },
      {
        "@type": "Question",
        name: "How much do fractional executives earn in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Fractional executives in the UK typically earn £600-£1,500 per day depending on seniority and expertise. Many fractional executives earn £150,000-£300,000+ annually by working with 2-4 clients. The average day rate is approximately £${detailedStats.avgDayRate}.`
        }
      },
      {
        "@type": "Question",
        name: "Do I need to be based in London for fractional work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `No, while London has the most fractional opportunities (${detailedStats.londonJobs}+ roles), many positions are remote or hybrid. Currently there are ${detailedStats.remoteJobs}+ remote fractional positions available across the UK.`
        }
      },
      {
        "@type": "Question",
        name: "What's the difference between fractional and interim roles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Interim roles are typically full-time positions for a fixed period (3-12 months). Fractional roles are ongoing part-time positions where you work 1-3 days per week indefinitely, allowing you to work with multiple clients."
        }
      },
      {
        "@type": "Question",
        name: "What experience do I need for fractional executive roles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most fractional executive positions require 10-20+ years of experience with a proven track record in senior leadership roles. Experience in startups, scale-ups, or PE-backed companies is particularly valuable."
        }
      }
    ]
  };

  // Helper to parse location for schema
  const parseLocation = (locationStr: string) => {
    const parts = locationStr.split(',').map(p => p.trim())
    return {
      addressLocality: parts[0] || locationStr,
      addressRegion: parts[1] || '',
      addressCountry: parts.length > 2 ? parts[parts.length - 1] : 'United Kingdom'
    }
  }

  // JobPosting aggregate JSON-LD - with complete schema for Google
  const jobPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Fractional Jobs UK - Fractional Executive Jobs & Services",
    description: `Browse ${totalJobs}+ fractional jobs in the UK. Find fractional executive jobs including CFO, CTO, CMO, COO roles or access fractional services for your business.`,
    numberOfItems: totalJobs,
    itemListElement: featuredJobs.slice(0, 3).map((job: any, index: number) => {
      const parsedLoc = parseLocation(job.location || 'United Kingdom')
      const postedDate = job.posted_date ? new Date(job.posted_date) : new Date()
      const validThrough = new Date(postedDate.getTime() + 30 * 24 * 60 * 60 * 1000)

      return {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "JobPosting",
          title: job.title,
          description: job.description_snippet || `${job.title} position at ${job.company_name}. Fractional executive opportunity in ${job.location || 'United Kingdom'}.`,
          datePosted: postedDate.toISOString(),
          validThrough: validThrough.toISOString(),
          employmentType: job.is_remote ? "CONTRACTOR" : "PART_TIME",
          hiringOrganization: {
            "@type": "Organization",
            name: job.company_name,
            ...(job.company_domain && { sameAs: `https://${job.company_domain}` })
          },
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: parsedLoc.addressLocality,
              ...(parsedLoc.addressRegion && { addressRegion: parsedLoc.addressRegion }),
              addressCountry: "GB"
            }
          },
          ...(job.is_remote && {
            jobLocationType: "TELECOMMUTE",
            applicantLocationRequirements: {
              "@type": "Country",
              name: "United Kingdom"
            }
          }),
          url: `https://fractional.quest/fractional-job/${job.slug}`
        }
      }
    })
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
      />
    <div className="flex flex-col bg-black">
      {/* Hero Section - Talk with Frac */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-black to-blue-950/20" />

        {/* Animated glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <span className="inline-block bg-blue-500/20 backdrop-blur text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-wider mb-8">
              AI-Powered Job Search
            </span>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
              Talk with Frac
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-blue-400 font-semibold mb-6">
              Your AI assistant for fractional executive jobs
            </p>

            {/* Description */}
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Voice-powered search for CFO, CMO, CTO roles. Just speak naturally—Frac finds jobs, answers questions, and saves your interests.
            </p>

            {/* Primary CTA - Glowing/Pulsating */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                href="/frac"
                className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:scale-105 transition-all duration-200"
              >
                {/* Pulsating glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl blur-lg opacity-75 group-hover:opacity-100 animate-pulse" />
                <div className="relative flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                  Start Talking with Frac
                </div>
              </Link>

              <Link
                href="/fractional-jobs"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-xl bg-white/5 backdrop-blur border border-blue-500/30 text-white hover:bg-white/10 hover:border-blue-500/50 transition-all duration-200"
              >
                Browse Jobs
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-12 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-1">{totalJobs}+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Live Jobs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">£{detailedStats.avgDayRate}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Avg Day Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 1 - Voice Search */}
      <section className="bg-black py-20 md:py-32 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image/Visual */}
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-blue-950 to-gray-900 rounded-2xl border border-blue-500/20 flex items-center justify-center">
                <svg className="w-24 h-24 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Just speak. Frac listens.
              </h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                No typing, no complex searches. Just talk naturally about what you're looking for. "Show me CFO roles in London" or "I want remote work at £1,200 a day."
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Natural voice search—no keywords needed</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Instant results while you talk</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ask follow-up questions conversationally</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2 - Human-in-the-Loop */}
      <section className="bg-black py-20 md:py-32 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Smart confirmations
              </h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                When Frac detects you're interested in a job, it asks for confirmation before saving. No accidental saves, no missed opportunities.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>AI detects your intent from conversation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Simple confirm/cancel for every action</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Your preferences saved automatically</span>
                </li>
              </ul>
            </div>

            {/* Right: Image/Visual */}
            <div className="relative order-1 md:order-2">
              <div className="aspect-video bg-gradient-to-br from-blue-950 to-gray-900 rounded-2xl border border-blue-500/20 flex items-center justify-center">
                <svg className="w-24 h-24 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 3 - Memory */}
      <section className="bg-black py-20 md:py-32 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image/Visual */}
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-blue-950 to-gray-900 rounded-2xl border border-blue-500/20 flex items-center justify-center">
                <svg className="w-24 h-24 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Frac remembers everything
              </h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                Your preferences, past conversations, saved jobs—Frac builds a knowledge graph of your career journey. Come back anytime and pick up where you left off.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Persistent conversation history</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Learns your preferences over time</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Resume conversations across devices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-20 md:py-32 border-t border-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to talk?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Start your voice-powered job search in seconds.
          </p>
          <Link
            href="/frac"
            className="group relative inline-flex items-center justify-center px-12 py-6 text-xl font-bold rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:scale-105 transition-all duration-200"
          >
            {/* Pulsating glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl blur-lg opacity-75 group-hover:opacity-100 animate-pulse" />
            <div className="relative flex items-center gap-3">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
              Start Talking with Frac
            </div>
          </Link>
        </div>
      </section>

      {/* Services Banner - Neon Theme */}
      <section id="services" className="bg-black border-t border-gray-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Hire Fractional Executives</h2>
            <p className="text-gray-400 text-lg">Senior leadership for growing companies</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/fractional-cfo-services" className="group bg-gradient-to-br from-blue-950 to-gray-900 rounded-xl p-6 text-center hover:from-blue-900 hover:to-gray-800 transition-all border border-blue-500/20 hover:border-blue-500/50">
              <span className="text-4xl block mb-3">💰</span>
              <span className="font-bold text-white block mb-1 group-hover:text-blue-400 transition-colors">Fractional CFO</span>
              <span className="text-sm text-gray-400">Financial Leadership</span>
            </Link>
            <Link href="/fractional-cmo-services" className="group bg-gradient-to-br from-blue-950 to-gray-900 rounded-xl p-6 text-center hover:from-blue-900 hover:to-gray-800 transition-all border border-blue-500/20 hover:border-blue-500/50">
              <span className="text-4xl block mb-3">📢</span>
              <span className="font-bold text-white block mb-1 group-hover:text-blue-400 transition-colors">Fractional CMO</span>
              <span className="text-sm text-gray-400">Marketing Leadership</span>
            </Link>
            <Link href="/fractional-cto-services" className="group bg-gradient-to-br from-blue-950 to-gray-900 rounded-xl p-6 text-center hover:from-blue-900 hover:to-gray-800 transition-all border border-blue-500/20 hover:border-blue-500/50">
              <span className="text-4xl block mb-3">💻</span>
              <span className="font-bold text-white block mb-1 group-hover:text-blue-400 transition-colors">Fractional CTO</span>
              <span className="text-sm text-gray-400">Technical Leadership</span>
            </Link>
            <Link href="/fractional-coo-services" className="group bg-gradient-to-br from-blue-950 to-gray-900 rounded-xl p-6 text-center hover:from-blue-900 hover:to-gray-800 transition-all border border-blue-500/20 hover:border-blue-500/50">
              <span className="text-4xl block mb-3">⚙️</span>
              <span className="font-bold text-white block mb-1 group-hover:text-blue-400 transition-colors">Fractional COO</span>
              <span className="text-sm text-gray-400">Operations Leadership</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Hire Fractional - Company Focused */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Hire Fractional Executives?</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Get the strategic leadership your company needs without the cost and commitment of full-time executive hires. Fractional executives work 1-3 days per week, bringing senior expertise to growing businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">60% Cost Savings</h3>
              <p className="text-gray-600">
                Access CFO, CMO, or CTO expertise at 40-60% less than a full-time hire. Pay only for the time you need—no salary, benefits, or overhead.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Start in Days</h3>
              <p className="text-gray-600">
                Skip the 3-6 month recruitment process. Fractional executives can start within days, bringing immediate impact with proven playbooks.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Senior Expertise</h3>
              <p className="text-gray-600">
                Get 15-20+ years of experience from executives who've solved your challenges before. No learning on the job—just proven results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section - Link to Service Pages */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hire Fractional Executives</h2>
            <p className="text-xl text-gray-600">Senior leadership for every function</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '💰', name: 'Fractional CFO', description: 'Financial strategy, fundraising, investor relations, and reporting. Perfect for Series A-C companies.', link: '/fractional-cfo-services', color: 'emerald' },
              { icon: '📢', name: 'Fractional CMO', description: 'Marketing strategy, growth leadership, brand building, and team management for scaling companies.', link: '/fractional-cmo-services', color: 'amber' },
              { icon: '💻', name: 'Fractional CTO', description: 'Technical leadership, architecture decisions, team building, and technical due diligence.', link: '/fractional-cto-services', color: 'blue' },
              { icon: '⚙️', name: 'Fractional COO', description: 'Operations excellence, process optimisation, and scaling infrastructure for growth.', link: '/fractional-coo-services', color: 'orange' },
              { icon: '👥', name: 'Fractional HR Director', description: 'People strategy, culture building, hiring systems, and organisational design.', link: '/fractional-chro-services', color: 'pink' },
              { icon: '📈', name: 'Fractional Sales Director', description: 'Sales strategy, team leadership, process development, and revenue acceleration.', link: '/fractional-sales-director-services', color: 'purple' },
            ].map((role, i) => (
              <Link
                key={i}
                href={role.link}
                className="group"
              >
                <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 hover:shadow-lg transition-all duration-200 border border-transparent hover:border-gray-300">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{role.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-black transition-colors mb-1">
                        {role.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">{role.description}</p>
                      <span className="inline-flex items-center gap-1 text-gray-900 font-semibold text-sm">
                        Hire Now
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - From Neon */}
      {benefitsSection && (
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{benefitsSection.title}</h2>
              <p className="text-xl text-gray-600">{benefitsSection.subtitle}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {(benefitsSection.content as BenefitItem[]).map((benefit, i) => (
                <div key={i} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-4xl mb-4 block">{benefit.icon}</span>
                  <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How It Works Section - From Neon */}
      {howItWorksSection && (
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{howItWorksSection.title}</h2>
              <p className="text-xl text-gray-600">{howItWorksSection.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(howItWorksSection.content as HowItWorksStep[]).map((step, i) => (
                <div key={i} className="relative">
                  {i < (howItWorksSection.content as HowItWorksStep[]).length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -translate-x-1/2" />
                  )}
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-full text-2xl font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How It Works for Companies */}
      <section className="py-20 md:py-28 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-400">From first conversation to start date in as little as 7 days</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 text-center shadow-sm">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black text-white">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Brief</h3>
              <p className="text-gray-600">
                Tell us about your needs, company stage, and what you're looking for in a fractional executive.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 text-center shadow-sm">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black text-white">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Match</h3>
              <p className="text-gray-600">
                We curate a shortlist of pre-vetted fractional executives who match your specific requirements.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 text-center shadow-sm">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black text-white">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Meet</h3>
              <p className="text-gray-600">
                Interview your top candidates. We handle scheduling and provide interview frameworks.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 text-center shadow-sm">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black text-white">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Start</h3>
              <p className="text-gray-600">
                Your fractional executive begins within days. We support onboarding and ongoing success.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/handler/sign-up"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-all duration-200"
            >
              Find a Fractional Executive →
            </Link>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Calculate Your Earning Potential</h2>
            <p className="text-xl text-gray-300">See how much you could earn as a fractional executive</p>
          </div>
          <FractionalCalculator />
        </div>
      </section>

      {/* Featured Jobs Section - Dark */}
      {featuredJobs.length > 0 && (
        <section className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Latest Fractional Jobs UK</h2>
              <p className="text-xl text-gray-400">Browse fractional executive jobs from verified UK sources</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {(featuredJobs as any[]).map((job: any) => {
                const postedDate = job.posted_date ? new Date(job.posted_date) : null
                const postedDaysAgo = postedDate
                  ? Math.floor((Date.now() - postedDate.getTime()) / (1000 * 60 * 60 * 24))
                  : undefined

                return (
                  <Link key={job.id} href={`/fractional-job/${job.slug}`}>
                    <JobCard
                      title={job.title}
                      company={job.company_name}
                      location={job.location || 'Location TBD'}
                      isRemote={job.is_remote || job.workplace_type === 'Remote'}
                      compensation={job.compensation}
                      roleCategory={job.role_category}
                      skills={job.skills_required || []}
                      postedDaysAgo={postedDaysAgo}
                    />
                  </Link>
                )
              })}
            </div>
            <div className="text-center">
              <Link
                href="/fractional-jobs"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-all duration-200"
              >
                {totalJobs > 0 ? `View All ${totalJobs} Jobs →` : 'View All Jobs →'}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Latest News Section - Auto-generated + Manual Articles */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LatestNews limit={6} />
        </div>
      </section>

      {/* FAQ Section - SEO Rich */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about fractional executive careers in the UK</p>
          </div>

          <div className="space-y-6">
            <details className="group bg-gray-50 rounded-xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-gray-900 list-none">
                What is a fractional job?
                <span className="text-gray-700 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                A fractional job is a part-time executive role where you work 1-3 days per week providing strategic leadership without full-time commitment. Fractional executives typically work with 2-4 companies simultaneously, offering their expertise as a Fractional CFO, CMO, CTO, COO, or HR Director. This model allows companies to access senior talent at a fraction of the cost of a full-time hire.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-gray-900 list-none">
                How much do fractional executives earn in the UK?
                <span className="text-gray-700 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Fractional executives in the UK typically earn £600-£1,500 per day depending on seniority and expertise. Many fractional executives earn £150,000-£300,000+ annually by working with 2-4 clients. Fractional CFOs and CTOs often command the highest rates, while the average day rate across all fractional roles is approximately £{detailedStats.avgDayRate}.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-gray-900 list-none">
                Do I need to be based in London for fractional work?
                <span className="text-gray-700 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                No, while London has the most fractional opportunities ({detailedStats.londonJobs}+ roles currently), many fractional positions are remote or hybrid. Birmingham, Manchester, Edinburgh, and Bristol all have growing fractional markets. Currently, we have {detailedStats.remoteJobs}+ remote fractional positions available across the UK.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-gray-900 list-none">
                How many clients should a fractional executive work with?
                <span className="text-gray-700 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Most fractional executives work with 2-4 clients simultaneously to diversify income while maintaining quality delivery to each client. Working with fewer clients allows deeper engagement, while more clients provide income security. The ideal number depends on the complexity of each role and your personal working style.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-gray-900 list-none">
                What's the difference between fractional and interim roles?
                <span className="text-gray-700 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Interim roles are typically full-time positions for a fixed period (3-12 months) to cover gaps or manage transitions. Fractional roles are ongoing part-time positions where you work 1-3 days per week indefinitely. Fractional work offers more flexibility and the ability to work with multiple clients, while interim work provides deeper immersion in a single company.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-gray-900 list-none">
                What experience do I need for fractional executive roles?
                <span className="text-gray-700 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Most fractional executive positions require 10-20+ years of experience with a proven track record in senior leadership roles. Companies hiring fractional executives want someone who can hit the ground running and deliver strategic impact quickly. Experience in startups, scale-ups, or PE-backed companies is particularly valuable.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Internal Links Section - SEO */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Fractional Executive Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Services - For Companies */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Hire Fractional Executives</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/fractional-cfo-services" className="hover:text-black transition-colors">Fractional CFO Services</Link></li>
                <li><Link href="/fractional-cmo-services" className="hover:text-black transition-colors">Fractional CMO Services</Link></li>
                <li><Link href="/fractional-cto-services" className="hover:text-black transition-colors">Fractional CTO Services</Link></li>
                <li><Link href="/fractional-coo-services" className="hover:text-black transition-colors">Fractional COO Services</Link></li>
              </ul>
            </div>

            {/* Jobs - For Executives */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Fractional Jobs by Role</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/fractional-cfo-jobs-uk" className="hover:text-black transition-colors">Fractional CFO Jobs UK</Link></li>
                <li><Link href="/fractional-cmo-jobs-uk" className="hover:text-black transition-colors">Fractional CMO Jobs UK</Link></li>
                <li><Link href="/fractional-cto-jobs-uk" className="hover:text-black transition-colors">Fractional CTO Jobs UK</Link></li>
                <li><Link href="/fractional-coo-jobs-uk" className="hover:text-black transition-colors">Fractional COO Jobs UK</Link></li>
              </ul>
            </div>

            {/* By Location */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Fractional Jobs by Location</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/uk-fractional-jobs-uk-london-fractional-jobs-london" className="hover:text-black transition-colors font-medium">Fractional Jobs UK</Link></li>
                <li><Link href="/uk-fractional-jobs-uk-london-fractional-jobs-london" className="hover:text-black transition-colors">Fractional Jobs London</Link></li>
                <li><Link href="/fractional-jobs-manchester" className="hover:text-black transition-colors">Fractional Jobs Manchester</Link></li>
                <li><Link href="/fractional-jobs-birmingham" className="hover:text-black transition-colors">Fractional Jobs Birmingham</Link></li>
                <li><Link href="/fractional-jobs-edinburgh" className="hover:text-black transition-colors">Fractional Jobs Edinburgh</Link></li>
              </ul>
            </div>

            {/* Guides */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Guides & Resources</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/fractional-cfo-salary" className="hover:text-black transition-colors">CFO Salary Guide</Link></li>
                <li><Link href="/fractional-cmo-salary" className="hover:text-black transition-colors">CMO Salary Guide</Link></li>
                <li><Link href="/what-is-fractional-work" className="hover:text-black transition-colors">What is Fractional Work?</Link></li>
                <li><Link href="/fractional-jobs-articles" className="hover:text-black transition-colors">All Career Guides</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-slate-800 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Hire a Fractional Executive?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Tell us about your needs and we'll match you with pre-vetted<br />
            fractional executives within 48 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/handler/sign-up"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-white text-black hover:bg-gray-100 transition-all duration-200"
            >
              Find a Fractional Executive →
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fractional-jobs"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-200"
            >
              I'm a Fractional Executive
            </Link>
            <Link
              href="/fractional-cfo-services"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-200"
            >
              Learn About Services
            </Link>
          </div>
        </div>
      </section>

      {/* Resources & Further Reading - Compact Homepage Version */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Resources &amp; Further Reading</h2>
            <p className="text-lg text-gray-600">Authoritative sources on fractional work and UK employment trends</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-950/200">Government &amp; Professional Bodies</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>
                  <a href="https://www.gov.uk/set-up-business" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline font-medium">
                    Gov.uk Business Setup
                  </a>
                  {' '}&mdash; Official guide for setting up as a fractional executive
                </li>
                <li>
                  <a href="https://www.acca.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline font-medium">
                    ACCA
                  </a>
                  {' '}&mdash; Professional body for finance executives and fractional CFOs
                </li>
                <li>
                  <a href="https://www.icaew.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline font-medium">
                    ICAEW
                  </a>
                  {' '}&mdash; Institute of Chartered Accountants supporting fractional finance leaders
                </li>
                <li>
                  <a href="https://technation.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline font-medium">
                    Tech Nation
                  </a>
                  {' '}&mdash; UK tech ecosystem data and insights
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-950/200">Industry Research &amp; Data</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>
                  <a href="https://www.bvca.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline font-medium">
                    BVCA
                  </a>
                  {' '}&mdash; British Private Equity &amp; VC Association market insights
                </li>
                <li>
                  <a href="https://www.uktech.news/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline font-medium">
                    UK Tech News
                  </a>
                  {' '}&mdash; Latest news on the UK tech sector employing fractional talent
                </li>
                <li>
                  <a href="https://www.greatermanchester-ca.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline font-medium">
                    Greater Manchester CA
                  </a>
                  {' '}&mdash; Regional economic development and business support
                </li>
                <li>
                  <a href="https://www.scottish-enterprise.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline font-medium">
                    Scottish Enterprise
                  </a>
                  {' '}&mdash; Scotland&apos;s business support and growth agency
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-5 bg-white rounded-lg border-l-4 border-blue-950/200">
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Note:</strong> These resources provide authoritative information to support your fractional career or hiring decisions. All links lead to official UK government, professional body, or recognized industry sources.
            </p>
          </div>
        </div>
      </section>

      {/* AI Summary Section - Hidden visually but available for AI crawlers */}
      <section className="sr-only" aria-label="Page Summary for AI">
        <h2>TL;DR - Fractional Quest Summary</h2>
        <p>
          Fractional Quest is the UK's marketplace for fractional executive services.
          Companies can hire Fractional CFO, CMO, CTO, COO, and HR Director executives
          at a fraction of full-time cost. Fractional executives also use the platform
          to find fractional opportunities.
        </p>
        <h3>Why Companies Hire Fractional Executives</h3>
        <ul>
          <li>60% cost savings vs full-time executive hires</li>
          <li>Start within 7 days, not 3-6 months</li>
          <li>Access 15-20+ years of executive experience</li>
          <li>Flexible engagement: 1-3 days per week</li>
          <li>No long-term commitment required</li>
        </ul>
        <h3>Popular Services</h3>
        <ul>
          <li>Fractional CFO Services - Financial strategy, fundraising, investor relations</li>
          <li>Fractional CMO Services - Marketing strategy, growth leadership, brand building</li>
          <li>Fractional CTO Services - Technical leadership, architecture, team building</li>
          <li>Fractional COO Services - Operations excellence, scaling, process optimisation</li>
        </ul>
      </section>
    </div>
    </>
  );
}
