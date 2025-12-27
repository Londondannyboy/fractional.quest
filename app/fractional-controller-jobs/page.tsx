import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { WebPageSchema } from '@/components/WebPageSchema'

export const metadata: Metadata = {
  title: 'Fractional Controller Jobs UK',
  description: 'Fractional controller jobs UK. Part-time roles £500-£1,000/day, CFO career path.',
  openGraph: {
    title: 'Fractional Financial Controller Jobs UK 2025',
    description: 'Find fractional controller opportunities. £500-£1,000/day rates, part-time financial controller roles.',
    url: 'https://fractional.quest/fractional-controller-jobs',
  },
  alternates: {
    canonical: 'https://fractional.quest/fractional-controller-jobs',
  },
}

export const revalidate = 3600

export default function FractionalControllerJobsPage() {
  const lastUpdatedDate = new Date() // Use current date

  const faqItems = [
    {
      question: 'What is the difference between fractional controller and fractional CFO?',
      answer: 'Controllers focus on operations (accounting, reporting, compliance) while CFOs provide strategic leadership (fundraising, M&A, board relations). Controllers earn £500-£1,000/day vs CFOs at £1,200-£1,800/day. Many start as fractional controllers and progress to fractional CFO roles after 3-5 years.'
    },
    {
      question: 'What day rates do fractional controllers earn?',
      answer: 'UK fractional controllers earn £500-£1,000/day depending on experience. Entry (5-10 years): £500-£700, Mid-level (10-15 years): £700-£900, Senior/specialist: £900-£1,200. With 4-5 clients at 2 days/week each, annual earnings range £48K-£115K.'
    },
    {
      question: 'What qualifications do I need?',
      answer: 'ACA, ACCA, or CIMA qualification is expected for controller-level positions. Part-qualified accountants can work as financial accountants (£300-£500/day) but fully qualified status significantly improves rates and opportunities. 8-10 years post-qualification experience typically required.'
    },
  ]

  return (
    <>
      <WebPageSchema
        title="Fractional Financial Controller Jobs UK 2025 | Part-Time Controller Roles"
        description="Fractional financial controller jobs with day rates £500-£1,000"
        url="https://fractional.quest/fractional-controller-jobs"
        dateModified={lastUpdatedDate}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Fractional Financial Controller Jobs UK 2025',
            description: 'Find fractional controller opportunities with day rates, responsibilities, and career progression paths.',
            author: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
            publisher: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
            datePublished: '2025-01-16',
            dateModified: '2025-01-16',
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-950/20/30 to-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/fractional-cfo" className="hover:text-blue-600 transition-colors">Fractional CFO</Link>
            <span>/</span>
            <span className="text-slate-900">Controller Jobs</span>
          </nav>

          <header className="mb-12">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Fractional Financial Controller Jobs UK 2025
            </h1>
            <p className="text-xl leading-relaxed text-slate-600">
              Entry route to fractional finance. Find part-time financial controller opportunities with day rates £500-£1,000, career progression to CFO roles.
            </p>
          </header>

          <div className="mb-12 rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-900/5">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Role Overview</h2>
            <p className="mb-6 text-slate-700">
              Fractional controllers provide operational finance leadership part-time for multiple clients. Focus on accounting, reporting, compliance, and team management.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-blue-950/20 p-4">
                <div className="text-2xl font-bold text-blue-700">£500-£1K</div>
                <div className="text-sm text-slate-700">Day rate range</div>
              </div>
              <div className="rounded-lg bg-blue-50 p-4">
                <div className="text-2xl font-bold text-blue-700">4-6</div>
                <div className="text-sm text-slate-700">Typical clients</div>
              </div>
              <div className="rounded-lg bg-purple-50 p-4">
                <div className="text-2xl font-bold text-purple-700">8-15 yrs</div>
                <div className="text-sm text-slate-700">Experience needed</div>
              </div>
            </div>
          </div>

          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">Core Responsibilities</h2>
            <ul className="text-slate-700">
              <li>Month-end close and management accounts</li>
              <li>Financial reporting and KPI dashboards</li>
              <li>Cash flow forecasting and working capital management</li>
              <li>Budgeting and variance analysis</li>
              <li>Systems implementation (Xero, QuickBooks, NetSuite)</li>
              <li>Process improvement and automation</li>
              <li>Finance team management and development</li>
              <li>Audit coordination and compliance</li>
            </ul>
          </section>

          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">Career Progression: Controller to CFO</h2>
            <p className="text-lg text-slate-600">
              Many fractional CFOs start as controllers. Typical progression:
            </p>
            <div className="not-prose space-y-3">
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="font-bold text-slate-900">Years 1-3: Fractional Controller</div>
                <p className="text-sm text-slate-600">Build client portfolio, establish processes, earn £50K-£80K annually</p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="font-bold text-slate-900">Years 3-5: Senior Controller / Part-time CFO Advisory</div>
                <p className="text-sm text-slate-600">Take on strategic projects, advise on fundraising/systems, earn £80K-£110K</p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="font-bold text-slate-900">Years 5+: Fractional CFO</div>
                <p className="text-sm text-slate-600">Full CFO positioning with board interaction, earn £120K-£200K+ annually</p>
              </div>
            </div>
            <p className="text-slate-700">
              Learn more about <Link href="/how-to-become-fractional-cfo" className="text-blue-600 hover:text-blue-700 underline">becoming a fractional CFO</Link>.
            </p>
          </section>

          <div className="mb-12 rounded-xl bg-gradient-to-br from-blue-950/200 to-blue-600 p-8 text-white shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Find Controller Opportunities</h2>
            <p className="mb-6 text-blue-950/20">
              Join Fractional Quest to access part-time financial controller opportunities across the UK.
            </p>
            <Link href="/fractional-cfo-jobs-remote" className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-all hover:bg-blue-950/20">
              Browse Finance Jobs
            </Link>
          </div>

          <FAQ items={faqItems} title="Fractional Controller FAQs" />

          <section className="mt-12 rounded-xl bg-slate-50 p-8">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">Related Resources</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link href="/fractional-cfo-jobs-remote" className="group rounded-lg bg-white p-4 shadow-sm hover:shadow-md">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">Remote CFO Jobs</h3>
                <p className="mt-1 text-sm text-slate-600">Progress to CFO-level opportunities</p>
              </Link>
              <Link href="/contract-cfo-jobs" className="group rounded-lg bg-white p-4 shadow-sm hover:shadow-md">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">Contract Finance Jobs</h3>
                <p className="mt-1 text-sm text-slate-600">Full-time interim positions</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
