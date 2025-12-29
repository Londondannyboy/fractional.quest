import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Fractional Executive Guide 2025 | Download PDF',
  description: 'Download our comprehensive guide to becoming a fractional executive. Day rates, finding clients, structuring engagements, and building a portfolio career in the UK.',
  keywords: 'fractional executive guide, fractional CFO guide, fractional CTO guide, portfolio career guide, fractional work UK',
  alternates: {
    canonical: 'https://fractional.quest/fractional-executive-guide',
  },
  openGraph: {
    title: 'Free Fractional Executive Guide 2025',
    description: 'Everything you need to know about going fractional: rates, clients, and building a successful portfolio career.',
    type: 'website',
  },
}

const guideChapters = [
  {
    number: '01',
    title: 'What is Fractional Work?',
    description: 'Understanding the fractional model, how it differs from consulting, and why it\'s growing.',
    topics: ['Definition & history', 'Fractional vs consulting', 'Market growth trends', 'Who hires fractional executives'],
  },
  {
    number: '02',
    title: 'Is Fractional Right for You?',
    description: 'Self-assessment framework to determine if fractional work matches your goals and circumstances.',
    topics: ['Experience requirements', 'Financial readiness', 'Personality fit', 'Risk tolerance'],
  },
  {
    number: '03',
    title: 'UK Day Rates & Earnings',
    description: 'Comprehensive rate data by role, location, and industry. What you can realistically expect to earn.',
    topics: ['CFO/CTO/CMO rate benchmarks', 'London vs regional rates', 'Industry premiums', 'Annual earnings potential'],
  },
  {
    number: '04',
    title: 'Finding Your First Clients',
    description: 'Practical strategies for building your client pipeline from scratch.',
    topics: ['Networking strategies', 'LinkedIn optimization', 'Fractional platforms', 'Referral systems'],
  },
  {
    number: '05',
    title: 'Structuring Engagements',
    description: 'Contracts, pricing models, and managing multiple clients effectively.',
    topics: ['Contract templates', 'Retainer vs project pricing', 'Managing 3-4 clients', 'Setting boundaries'],
  },
  {
    number: '06',
    title: 'Building Your Brand',
    description: 'Positioning yourself as the go-to expert in your niche.',
    topics: ['Niche selection', 'Thought leadership', 'Case studies', 'Speaking & writing'],
  },
]

const stats = [
  { value: '68%', label: 'YoY market growth' },
  { value: '£5.7B', label: 'Global market size' },
  { value: '25%', label: 'US businesses using fractional' },
  { value: '£200K+', label: 'Typical annual earnings' },
]

// JSON-LD for the guide
const guideSchema = {
  '@context': 'https://schema.org',
  '@type': 'Book',
  name: 'The Fractional Executive Guide 2025',
  author: {
    '@type': 'Organization',
    name: 'Fractional Quest',
    url: 'https://fractional.quest',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Fractional Quest',
  },
  datePublished: '2025-01-01',
  description: 'Comprehensive guide to becoming a fractional executive in the UK.',
  inLanguage: 'en-GB',
  isAccessibleForFree: true,
  url: 'https://fractional.quest/fractional-executive-guide',
}

export default function FractionalExecutiveGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-16 md:py-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.3),transparent_50%)]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-blue-500/20 text-blue-200 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider border border-blue-400/30 mb-6">
            Free Download
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
            The Fractional Executive Guide
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Everything you need to transition from full-time to fractional. Rates, clients, contracts, and building a £200K+ portfolio career.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#download"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl bg-white text-gray-900 hover:bg-gray-100 transition-colors"
            >
              Download Free Guide
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
            <Link
              href="/fractional-jobs-uk"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              Browse Jobs First
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-black">{stat.value}</div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Inside the Guide
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              60+ pages of actionable insights, templates, and real-world examples from successful fractional executives.
            </p>
          </div>

          <div className="space-y-6">
            {guideChapters.map((chapter) => (
              <div
                key={chapter.number}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <span className="text-blue-700 font-bold">{chapter.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{chapter.title}</h3>
                    <p className="text-gray-600 mb-3">{chapter.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {chapter.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Form */}
      <section id="download" className="py-16 md:py-24 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Download Your Free Guide
            </h2>
            <p className="text-gray-400 mb-8">
              Enter your email and we'll send the guide straight to your inbox.
            </p>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-4 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors"
              >
                Send Me the Guide
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-6">
              By downloading, you'll also receive our weekly fractional jobs digest. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Author/Credibility */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
              FQ
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Created by Fractional Quest</h3>
              <p className="text-gray-600">
                We're the UK's leading platform for fractional executive jobs. This guide is based on insights from hundreds of successful fractional executives and the companies that hire them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Related Resources</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/fractional-jobs-uk" className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <span className="font-medium text-gray-900">Browse Jobs</span>
              <p className="text-sm text-gray-500 mt-1">Live fractional roles</p>
            </Link>
            <Link href="/fractional-cfo-salary-report-2025" className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <span className="font-medium text-gray-900">CFO Salary Report</span>
              <p className="text-sm text-gray-500 mt-1">2025 rate data</p>
            </Link>
            <Link href="/how-to-become-a-fractional-executive" className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <span className="font-medium text-gray-900">Getting Started</span>
              <p className="text-sm text-gray-500 mt-1">Step-by-step guide</p>
            </Link>
            <Link href="/about" className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <span className="font-medium text-gray-900">About Us</span>
              <p className="text-sm text-gray-500 mt-1">Our mission</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
