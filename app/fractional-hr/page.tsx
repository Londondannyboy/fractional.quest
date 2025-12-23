import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { createDbQuery } from '@/lib/db'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional HR UK | Fractional HR Director & CHRO Services 2025',
  description: 'Fractional HR services UK - Hire a fractional HR director, fractional CHRO, or fractional HR manager. Part-time HR leadership from £700-£1,300/day. Interim HR director & outsourced HR solutions for UK businesses.',
  keywords: 'fractional hr, fractional hr director, fractional chro, fractional hr services, fractional hr uk, fractional hr manager, part time hr, interim hr director, fractional hr consultant, outsourced hr, fractional hr cost, fractional hr salary, fractional hr for startups, what is fractional hr, fractional people director, hr director jobs, fractional chief people officer',
  alternates: { canonical: 'https://fractional.quest/fractional-hr' },
  openGraph: {
    title: 'Fractional HR UK | Hire a Fractional HR Director or CHRO',
    description: 'Fractional HR services UK. Hire a fractional HR director, fractional CHRO, or part-time HR manager. £700-£1,300/day.',
    images: ['/images/fractional-hr-guide.jpg'],
    url: 'https://fractional.quest/fractional-hr',
  },
}

async function getHRStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'HR'`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'HR' AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 32, remoteCount: 14 }
  }
}

const HR_GUIDE_FAQS = [
  {
    question: 'What is fractional HR?',
    answer: 'Fractional HR is a model where experienced HR leaders (CHROs, HR Directors, People Partners) provide part-time strategic HR leadership to companies, typically working 1-3 days per week. Unlike HR consultants who advise, fractional HR professionals become embedded members of your leadership team, taking ownership of your people strategy, culture, and HR operations at 50-70% less cost than a full-time hire.'
  },
  {
    question: 'How much does fractional HR cost in the UK?',
    answer: 'Fractional HR professionals in the UK typically charge £700-£1,300 per day depending on seniority and specialisation. For 2 days per week, expect to pay £5,600-£10,400 monthly (£67,200-£124,800 annually). This compares to £150,000-£250,000+ for a full-time CHRO including salary, bonus, benefits, and equity—representing 50-70% cost savings.'
  },
  {
    question: 'When should a company hire fractional HR?',
    answer: 'Consider fractional HR when: you have 20-150 employees and need senior HR expertise but not full-time; you\'re scaling rapidly and founder-led HR is breaking; you\'re preparing for fundraising and investors expect professional people operations; you face complex employee relations issues; or you need to build HR infrastructure (policies, HRIS, processes) from scratch.'
  },
  {
    question: 'What is the difference between fractional HR and HR consulting?',
    answer: 'Fractional HR professionals become embedded team members who take ownership of outcomes—attending leadership meetings, making decisions, managing teams, and being accountable for results. HR consultants typically provide external advice and recommendations without implementation responsibility. Fractional is "in the boat rowing with you" while consulting is "advising from the shore."'
  },
  {
    question: 'Can fractional HR work remotely?',
    answer: 'Yes, many fractional HR roles are now hybrid or fully remote. Strategic HR work (policy development, HRIS implementation, board reporting) can be done remotely, while some activities (culture building, sensitive ER matters, team workshops) benefit from on-site presence. A typical model is 1 day on-site, 1-2 days remote per week.'
  },
  {
    question: 'What qualifications do fractional HR professionals need?',
    answer: 'Most fractional HR leaders have 12-20+ years HR experience with 5+ years in senior roles (CHRO, HR Director, People Director). CIPD Level 7 (Advanced Diploma in Strategic People Management) is highly valued in the UK. They typically have experience building HR functions from scratch, managing complex employee relations, and supporting companies through scale-up phases.'
  },
]

export default async function FractionalHRGuidePage() {
  const stats = await getHRStats()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Fractional HR UK: Complete Guide to Fractional HR Director & CHRO Services',
    description: 'Fractional HR services UK - hire a fractional HR director, fractional CHRO, or fractional HR manager. Part-time HR leadership from £700-£1,300/day.',
    author: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    publisher: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    datePublished: '2025-01-16',
    dateModified: '2025-12-23',
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero Section with Unsplash Background and Purple Gradient */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&q=80"
            alt="HR background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-purple-600/60 to-purple-900/80"></div>
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-white/20 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Complete Guide 2025
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Fractional<br />
                <span className="text-purple-200">HR</span>
              </h1>
              <p className="text-xl md:text-2xl text-white leading-relaxed max-w-2xl mb-8">
                The definitive UK guide to <strong className="text-white">fractional HR</strong>. What it means, what it costs, and how to access senior people leadership without full-time commitment.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-purple-200">{stats.total}+</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Live HR Roles</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">170/mo</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Monthly Searches</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">£950</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Avg Day Rate</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#what-is" className="px-8 py-4 bg-white/20 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-purple-900 transition-colors">
                  Read the Guide
                </Link>
                <Link href="/fractional-hr-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-purple-900 transition-colors">
                  Browse HR Jobs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Fractional HR */}
      <section id="what-is" className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Chapter 1</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is Fractional HR?</h2>
          </div>

          <div className="bg-pink-50 border-l-4 border-pink-500 p-8 mb-12">
            <p className="text-2xl md:text-3xl font-light text-gray-900 leading-relaxed mb-0">
              <strong className="font-bold">Fractional HR</strong> is a model where experienced HR leaders—CHROs, HR Directors, and People Partners—provide <strong>part-time strategic HR leadership</strong> to companies, typically working 1-3 days per week. Unlike consultants who advise externally, fractional HR professionals become embedded members of your leadership team at <strong>50-70% less cost</strong> than full-time hires.
            </p>
          </div>

          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed">
              The "fractional" model allows growing companies to access <strong>senior HR expertise and experience</strong> (typically 15-20+ years in people leadership roles) without the commitment, cost, and overhead of a full-time executive hire. According to <a href="https://www.cipd.org" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">CIPD's Future of Work research</a>, part-time senior executive roles have grown 43% since 2020, reflecting the shift toward flexible leadership models across all functions.
            </p>

            <p>
              Think of a fractional HR leader as your company's senior people executive—attending leadership meetings, shaping culture, hiring key talent, navigating complex employee relations, and taking ownership of your people strategy—just not five days a week. The fractional model is particularly powerful for HR because many strategic people initiatives (policy development, performance frameworks, employer branding) don't require daily presence, while the expertise required is extremely senior.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">Key Characteristics of Fractional HR</h3>

            <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
              <div className="bg-gray-50 p-6">
                <div className="text-3xl mb-3">⏱️</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Part-Time Commitment</h4>
                <p className="text-gray-700">Works 1-3 days per week (8-24 hours), not full-time. You get CHRO-level thinking, decision-making, and leadership when you need it without paying for 40 hours you don't need.</p>
              </div>

              <div className="bg-gray-50 p-6">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Strategic Focus</h4>
                <p className="text-gray-700">Handles high-value work: people strategy, culture development, talent acquisition leadership, complex ER, and compliance. Delegates HR administration to your team or outsourced providers.</p>
              </div>

              <div className="bg-gray-50 p-6">
                <div className="text-3xl mb-3">👔</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Senior Experience</h4>
                <p className="text-gray-700">Typically 15-20+ years in HR with prior CHRO or HR Director roles at scale-ups or enterprise. More experienced than most full-time candidates you could afford at this stage.</p>
              </div>

              <div className="bg-gray-50 p-6">
                <div className="text-3xl mb-3">💰</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Cost-Effective</h4>
                <p className="text-gray-700">£67k-£125k annually for 2 days/week vs £150k-£250k+ total comp for full-time CHRO. Save 50-70% while getting better expertise and proven track record.</p>
              </div>

              <div className="bg-gray-50 p-6">
                <div className="text-3xl mb-3">📈</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Flexible & Scalable</h4>
                <p className="text-gray-700">Scale from 1 to 3 days per week as needs change. Intensive during restructuring or rapid hiring, lighter during steady state. 30-60 day notice periods.</p>
              </div>

              <div className="bg-gray-50 p-6">
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Fast to Start</h4>
                <p className="text-gray-700">Begin within 1-2 weeks vs 3-6 months to hire full-time. Critical when you need help NOW—tribunal looming, rapid scaling, or culture crisis.</p>
              </div>
            </div>

            <div className="bg-gray-50 text-gray-900 p-8 my-10">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Fractional HR vs Full-Time HR: Quick Comparison</h4>
              <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Fractional HR:</p>
                  <ul className="space-y-1 text-sm list-none pl-0">
                    <li>• 1-3 days/week (8-24 hours)</li>
                    <li>• £67k-£125k annually (2 days/week)</li>
                    <li>• Contractor (no NI, pension, benefits)</li>
                    <li>• 30-60 day notice periods</li>
                    <li>• 15-20+ years experience typical</li>
                    <li>• Start within 1-2 weeks</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Full-Time CHRO:</p>
                  <ul className="space-y-1 text-sm list-none pl-0">
                    <li>• 5 days/week (40+ hours)</li>
                    <li>• £150k-£250k+ total comp</li>
                    <li>• Employee (NI, pension, benefits, equity)</li>
                    <li>• 3-6 month notice periods</li>
                    <li>• 10-15 years experience typical</li>
                    <li>• 4-6 month recruitment process</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Fractional HR Roles */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Chapter 2</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Types of Fractional HR Roles</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Fractional HR comes in several flavours, each suited to different company stages and needs. In the UK market, the term "HR Director" is more commonly used than "CHRO" for the same level of seniority.
            </p>

            <div className="space-y-8">
              <div className="bg-white p-8 border-2 border-gray-900">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">👑</span>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-0">Fractional CHRO / Chief People Officer</h3>
                    <p className="text-sm text-pink-600 font-semibold mb-0">£1,100-£1,300/day</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">The most senior HR leadership role. Fractional CHROs sit on the executive team, report to the CEO, and own the entire people function. They focus on strategic people planning, culture transformation, executive hiring, board reporting, and organisational design.</p>
                <div className="bg-gray-50 p-4">
                  <p className="text-sm text-gray-600 mb-0"><strong>Best for:</strong> Series B+ companies (100-500 employees), PE-backed businesses, companies preparing for exit or major transformation.</p>
                </div>
                <div className="mt-4">
                  <Link href="/fractional-chro-services" className="text-pink-600 hover:text-pink-700 font-semibold text-sm">Learn more about Fractional CHRO →</Link>
                </div>
              </div>

              <div className="bg-white p-8 border-l-4 border-pink-500">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">📊</span>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-0">Fractional HR Director</h3>
                    <p className="text-sm text-pink-600 font-semibold mb-0">£900-£1,100/day</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">The most common fractional HR role in the UK. HR Directors provide senior people leadership—developing HR strategy, building the HR function, managing complex ER cases, and professionalising people operations. They may manage a small HR team or work with outsourced HR admin.</p>
                <div className="bg-gray-50 p-4">
                  <p className="text-sm text-gray-600 mb-0"><strong>Best for:</strong> Scale-ups (30-150 employees), companies building their first formal HR function, businesses outgrowing founder-led HR.</p>
                </div>
                <div className="mt-4">
                  <Link href="/fractional-hr-director" className="text-pink-600 hover:text-pink-700 font-semibold text-sm">Learn more about Fractional HR Director →</Link>
                </div>
              </div>

              <div className="bg-white p-8 border-l-4 border-gray-300">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">🔧</span>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-0">Fractional HR Consultant</h3>
                    <p className="text-sm text-pink-600 font-semibold mb-0">£700-£950/day</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">HR consultants provide specialised expertise on specific projects or problems—such as implementing an HRIS, developing a performance management framework, or preparing for a tribunal. They advise and implement but typically don't take ongoing leadership responsibility.</p>
                <div className="bg-gray-50 p-4">
                  <p className="text-sm text-gray-600 mb-0"><strong>Best for:</strong> Specific projects with defined scope and timeline, specialist expertise needs (e.g., compensation benchmarking, DE&I strategy), companies that have internal HR but need expert support.</p>
                </div>
                <div className="mt-4">
                  <Link href="/fractional-hr-consultant" className="text-pink-600 hover:text-pink-700 font-semibold text-sm">Fractional HR Consultant vs Director →</Link>
                </div>
              </div>

              <div className="bg-white p-8 border-l-4 border-gray-300">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">🤝</span>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-0">Fractional People Partner / HR Business Partner</h3>
                    <p className="text-sm text-pink-600 font-semibold mb-0">£600-£850/day</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">People Partners work closely with specific business units or leadership teams, providing hands-on HR support and coaching. They handle day-to-day people matters—performance conversations, team conflicts, hiring support—while escalating strategic issues to senior HR or the CEO.</p>
                <div className="bg-gray-50 p-4">
                  <p className="text-sm text-gray-600 mb-0"><strong>Best for:</strong> Smaller companies (10-50 employees) needing practical HR support, businesses with a Fractional HR Director who need additional capacity, startups wanting hands-on people guidance.</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 p-6 border border-pink-200 rounded-lg my-10">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Which Role Do You Need?</h4>
              <p className="text-gray-700 mb-0">
                <strong>20-50 employees:</strong> Fractional People Partner or HR Director (1 day/week)<br />
                <strong>50-150 employees:</strong> Fractional HR Director (2-3 days/week)<br />
                <strong>150-500 employees:</strong> Fractional CHRO or transition to full-time HR Director
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When You Need Fractional HR */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Chapter 3</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">When Your Business Needs Fractional HR</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Most companies engage fractional HR during specific growth phases or when they need senior people expertise but can't justify full-time cost. Here are the most common triggers:
            </p>

            <div className="grid gap-6 my-10">
              <div className="bg-gray-50 p-6 border-l-4 border-pink-500">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">🚀 Rapid Growth (Hiring 10+ People/Quarter)</h3>
                <p className="text-gray-700 mb-0">"We've gone from 15 to 45 people in 12 months. Hiring is chaotic, onboarding is inconsistent, and we have no real people processes. The founders are drowning in HR issues." A fractional HR Director can build the infrastructure for scale.</p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-gray-900">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">💰 Fundraising & Investor Expectations</h3>
                <p className="text-gray-700 mb-0">"We're raising Series A and investors are asking about our people strategy, retention rates, and leadership team. We need someone who can articulate our approach professionally." Fractional HR leaders bring investor credibility.</p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-pink-500">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">⚠️ Complex Employee Relations Issues</h3>
                <p className="text-gray-700 mb-0">"We're facing a potential tribunal, have difficult performance issues, or need to restructure the team. We need someone who's navigated <a href="https://www.gov.uk/employment-tribunal-decisions" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">UK employment law</a> and tribunals before." Senior ER expertise is critical.</p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-gray-900">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">🏗️ Building HR From Scratch</h3>
                <p className="text-gray-700 mb-0">"We've hit 30 employees and have no contracts, no handbook, no HRIS, and inconsistent practices. We need someone to build the foundations." A fractional HR Director can establish professional HR infrastructure.</p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-pink-500">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">🔄 M&A or Restructuring</h3>
                <p className="text-gray-700 mb-0">"We're acquiring a company and need to integrate teams, harmonise terms, and manage TUPE. We need experienced HR leadership for this transformation." M&A HR expertise is specialised and temporary.</p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-gray-900">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">🎯 Culture & Engagement Crisis</h3>
                <p className="text-gray-700 mb-0">"Engagement scores are dropping, we're losing key people, and there's tension in the leadership team. We need someone who can diagnose the culture issues and drive change." Culture transformation requires senior expertise.</p>
              </div>
            </div>

            <div className="bg-gray-50 text-gray-900 p-8 my-10">
              <h4 className="text-xl font-bold text-gray-900 mb-4">The Sweet Spot for Fractional HR</h4>
              <p className="text-gray-600 mb-4">
                Companies with <strong className="text-white">20-150 employees and £2M-£20M revenue</strong> who need strategic HR expertise but don't require 40 hours weekly of CHRO time.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Below 20 employees: Often a People Partner or HR consultant suffices</li>
                <li>• 20-50 employees: Fractional HR Director 1 day/week</li>
                <li>• 50-100 employees: Fractional HR Director 2 days/week</li>
                <li>• 100-150 employees: Fractional CHRO 2-3 days/week</li>
                <li>• Above 150 employees: Consider full-time HR Director/CHRO</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Costs and Pricing */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Chapter 4</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional HR Costs & Pricing Models in the UK</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Understanding fractional HR pricing helps you budget appropriately and evaluate value. Here's the complete breakdown for the UK market.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-8 mb-6">Day Rates by Seniority</h3>

            <div className="overflow-x-auto my-10">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-900">
                    <th className="p-4 text-left">Role Level</th>
                    <th className="p-4 text-left">Experience</th>
                    <th className="p-4 text-left">Day Rate</th>
                    <th className="p-4 text-left">2 Days/Week Annual</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Fractional People Partner</td>
                    <td className="p-4">8-12 years</td>
                    <td className="p-4">£600-£850</td>
                    <td className="p-4">£62k-£88k</td>
                  </tr>
                  <tr className="border-b bg-pink-50">
                    <td className="p-4 font-semibold">Fractional HR Director</td>
                    <td className="p-4">12-18 years</td>
                    <td className="p-4 font-bold text-pink-600">£900-£1,100</td>
                    <td className="p-4 font-bold text-pink-600">£94k-£114k</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Fractional CHRO</td>
                    <td className="p-4">18+ years</td>
                    <td className="p-4">£1,100-£1,300</td>
                    <td className="p-4">£114k-£135k</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">Pricing Models</h3>

            <div className="space-y-6 my-10">
              <div className="bg-white p-6 border-2 border-gray-900">
                <h4 className="text-lg font-bold text-gray-900 mb-3">1. Day Rate (Most Common)</h4>
                <p className="text-gray-700 mb-2">Book specific days per week (e.g., every Tuesday + Thursday). Pay only for days worked.</p>
                <p className="text-sm text-gray-600 mb-0"><strong>Typical:</strong> £900-£1,100/day × 2 days/week = £7,800-£9,500/month</p>
              </div>

              <div className="bg-white p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">2. Monthly Retainer</h4>
                <p className="text-gray-700 mb-2">Fixed monthly fee for defined scope (e.g., 8 days/month, all HR leadership needs).</p>
                <p className="text-sm text-gray-600 mb-0"><strong>Typical:</strong> £4,000-£12,000/month depending on scope and seniority</p>
              </div>

              <div className="bg-white p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">3. Project-Based</h4>
                <p className="text-gray-700 mb-2">Fixed fee for specific projects with clear deliverables.</p>
                <p className="text-sm text-gray-600 mb-0"><strong>Examples:</strong> HRIS implementation £15-25k, handbook development £5-10k, restructure support £20-40k</p>
              </div>
            </div>

            <div className="bg-pink-50 p-6 border border-pink-200 rounded-lg my-10">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Full-Time vs Fractional: True Cost Comparison</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Fractional HR Director (2 days/week):</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Day rate × 2 × 52 weeks: £93,600-£114,400</li>
                    <li>• No employer NI: £0</li>
                    <li>• No pension: £0</li>
                    <li>• No benefits: £0</li>
                    <li>• <strong>Total: £93,600-£114,400</strong></li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Full-Time HR Director:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Base salary: £120,000-£150,000</li>
                    <li>• Employer NI (13.8%): £16,560-£20,700</li>
                    <li>• Pension (5%): £6,000-£7,500</li>
                    <li>• Benefits: £3,000-£5,000</li>
                    <li>• <strong>Total: £145,560-£183,200</strong></li>
                  </ul>
                </div>
              </div>
              <p className="text-pink-800 font-semibold mt-4 mb-0">Savings: £32,000-£69,000 annually (22-38%)</p>
            </div>
          </div>

          <div className="mt-10">
            <RoleCalculator role="hr" />
          </div>

          <div className="mt-8 text-center">
            <Link href="/fractional-hr-cost" className="inline-flex items-center text-pink-600 hover:text-pink-700 font-bold">
              View Full Cost Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* UK Employment Law Considerations */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Chapter 5</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">UK Employment Law Considerations</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Understanding UK employment law is critical when engaging fractional HR—both for structuring the engagement correctly and for the work the fractional HR leader will do.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-8 mb-6">Engaging a Fractional HR Professional</h3>

            <div className="bg-gray-50 p-6 border-l-4 border-pink-500 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-3">IR35 Considerations</h4>
              <p className="text-gray-700 mb-4">Most fractional HR professionals operate through limited companies. Under <a href="https://www.gov.uk/guidance/understanding-off-payroll-working-ir35" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">IR35 legislation</a>, the engaging company is responsible for determining employment status for tax purposes if it's a medium or large business.</p>
              <p className="text-gray-700 mb-0"><strong>Key factors for outside IR35:</strong> Multiple clients, own equipment, right to substitution, control over how/when work is done, no mutuality of obligation, genuine business risk.</p>
            </div>

            <div className="bg-white p-6 border border-gray-200 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Contract Structure</h4>
              <p className="text-gray-700 mb-0">Fractional HR engagements are typically structured as B2B service agreements with the individual's limited company. Key terms include: scope of work, day rate or retainer, notice period (usually 30-60 days), IP ownership, confidentiality, and professional indemnity insurance requirements.</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">What Fractional HR Professionals Handle</h3>

            <p className="text-gray-700 mb-6">
              One of the key reasons to engage a fractional HR leader is navigating <a href="https://www.gov.uk/browse/employing-people" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">UK employment law</a>. Critical areas include:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
              <div className="bg-gray-50 p-5">
                <h4 className="font-bold text-gray-900 mb-2">Employment Contracts</h4>
                <p className="text-sm text-gray-700">Ensuring contracts meet legal requirements, including the <a href="https://www.gov.uk/employment-contracts-and-conditions" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">written statement of particulars</a> requirements.</p>
              </div>
              <div className="bg-gray-50 p-5">
                <h4 className="font-bold text-gray-900 mb-2">Dismissal & Redundancy</h4>
                <p className="text-sm text-gray-700">Managing fair dismissal processes, <a href="https://www.acas.org.uk/redundancy" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">redundancy consultations</a>, and avoiding unfair dismissal claims.</p>
              </div>
              <div className="bg-gray-50 p-5">
                <h4 className="font-bold text-gray-900 mb-2">Discrimination</h4>
                <p className="text-sm text-gray-700">Ensuring compliance with <a href="https://www.equalityhumanrights.com/equality/equality-act-2010" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">Equality Act 2010</a> across all protected characteristics.</p>
              </div>
              <div className="bg-gray-50 p-5">
                <h4 className="font-bold text-gray-900 mb-2">Working Time</h4>
                <p className="text-sm text-gray-700">Compliance with <a href="https://www.gov.uk/maximum-weekly-working-hours" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">Working Time Regulations</a>, including holiday entitlement and rest breaks.</p>
              </div>
              <div className="bg-gray-50 p-5">
                <h4 className="font-bold text-gray-900 mb-2">TUPE</h4>
                <p className="text-sm text-gray-700">Managing <a href="https://www.gov.uk/transfers-takeovers" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">business transfers</a> and protecting employee rights during M&A.</p>
              </div>
              <div className="bg-gray-50 p-5">
                <h4 className="font-bold text-gray-900 mb-2">Data Protection</h4>
                <p className="text-sm text-gray-700">GDPR compliance for employee data, including <a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">ICO guidance</a> on HR data processing.</p>
              </div>
            </div>

            <div className="bg-gray-50 text-gray-900 p-8 my-10">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Why Senior ER Experience Matters</h4>
              <p className="text-gray-600 mb-0">
                <a href="https://www.gov.uk/employment-tribunals" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 underline">Employment tribunal claims</a> cost UK businesses an average of £8,500 in legal fees even when successful, and £25,000+ when claims succeed. Fractional HR leaders with tribunal experience can identify risks early, manage processes correctly, and often avoid litigation entirely. This expertise pays for itself many times over.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Hire */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Chapter 6</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How to Hire a Fractional HR Professional</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Finding the right fractional HR leader requires a different approach than traditional recruitment. Here's a proven process for UK businesses.
            </p>

            <div className="space-y-8">
              <div className="bg-white p-8 border-l-4 border-pink-500">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-4">1. Define Your Needs</h3>
                <p className="text-gray-700 mb-4">Before searching, clarify:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• What specific HR challenges are you facing?</li>
                  <li>• What seniority level do you need (People Partner, HR Director, CHRO)?</li>
                  <li>• How many days per week do you need?</li>
                  <li>• Do you need industry-specific experience (tech, financial services, healthcare)?</li>
                  <li>• What's your budget range?</li>
                  <li>• Do you need on-site presence or is remote acceptable?</li>
                </ul>
              </div>

              <div className="bg-white p-8 border-l-4 border-gray-300">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-4">2. Source Candidates</h3>
                <p className="text-gray-700 mb-4">The best fractional HR professionals often come through:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Specialist platforms:</strong> Fractional.quest, HR Consultants Ltd, Interim HR Network</li>
                  <li>• <strong>Professional networks:</strong> CIPD, HR Directors Forum, LinkedIn</li>
                  <li>• <strong>VC/PE networks:</strong> Portfolio company HR recommendations</li>
                  <li>• <strong>Referrals:</strong> Ask other founders, CEOs, or board members</li>
                </ul>
              </div>

              <div className="bg-white p-8 border-l-4 border-gray-300">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-4">3. Evaluate Candidates</h3>
                <p className="text-gray-700 mb-4">Key evaluation criteria:</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Must-Haves:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 12+ years HR experience</li>
                      <li>• Prior HR Director or above role</li>
                      <li>• Experience at your company stage</li>
                      <li>• Strong UK employment law knowledge</li>
                      <li>• <a href="https://www.cipd.org" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">CIPD qualification</a> (Level 7 preferred)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Nice-to-Haves:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Your industry experience</li>
                      <li>• Scale-up or startup background</li>
                      <li>• M&A or restructuring experience</li>
                      <li>• International HR experience</li>
                      <li>• Active fractional portfolio</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 border-l-4 border-gray-300">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-4">4. Trial & Onboard</h3>
                <p className="text-gray-700 mb-4">Best practice for starting the engagement:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Start with a short trial (1-2 months) before committing long-term</li>
                  <li>• Brief them thoroughly on company context, culture, and challenges</li>
                  <li>• Introduce them to key stakeholders (CEO, leadership team, any existing HR)</li>
                  <li>• Define clear 30/60/90 day priorities and success metrics</li>
                  <li>• Set up regular check-ins (weekly to start, then fortnightly)</li>
                </ul>
              </div>
            </div>

            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-10">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Red Flags to Avoid</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✗ No prior HR Director or senior HR role experience</li>
                <li>✗ Only large corporate experience (may struggle with scale-up pace)</li>
                <li>✗ Can't articulate specific outcomes from previous roles</li>
                <li>✗ Too many current clients (spread too thin for your needs)</li>
                <li>✗ No references from founders or CEOs they've worked with</li>
                <li>✗ Vague on UK employment law specifics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hire Process Stepper */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <HireProcessStepper accentColor="pink" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ items={HR_GUIDE_FAQS} title="" />
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Continue Learning</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Related HR Resources</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/fractional-hr-jobs-uk" className="p-6 bg-gray-50 hover:bg-gray-100 hover:text-gray-900 transition-all group">
              <h3 className="text-lg font-bold mb-2">Fractional HR Jobs UK</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-600 mb-4">Browse live fractional HR roles and career opportunities</p>
              <div className="text-sm font-bold uppercase tracking-wider text-pink-600 group-hover:text-pink-400">Browse Jobs →</div>
            </Link>

            <Link href="/fractional-hr-cost" className="p-6 bg-gray-50 hover:bg-gray-100 hover:text-gray-900 transition-all group">
              <h3 className="text-lg font-bold mb-2">Fractional HR Cost Guide</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-600 mb-4">Detailed pricing breakdown and ROI analysis</p>
              <div className="text-sm font-bold uppercase tracking-wider text-pink-600 group-hover:text-pink-400">View Costs →</div>
            </Link>

            <Link href="/fractional-hr-for-startups" className="p-6 bg-gray-50 hover:bg-gray-100 hover:text-gray-900 transition-all group">
              <h3 className="text-lg font-bold mb-2">Fractional HR for Startups</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-600 mb-4">Startup-specific guidance and pricing</p>
              <div className="text-sm font-bold uppercase tracking-wider text-pink-600 group-hover:text-pink-400">Learn More →</div>
            </Link>

            <Link href="/fractional-hr-director" className="p-6 bg-gray-50 hover:bg-gray-100 hover:text-gray-900 transition-all group">
              <h3 className="text-lg font-bold mb-2">Fractional HR Director</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-600 mb-4">What they do and when to hire one</p>
              <div className="text-sm font-bold uppercase tracking-wider text-pink-600 group-hover:text-pink-400">Read Guide →</div>
            </Link>

            <Link href="/fractional-chro-services" className="p-6 bg-gray-50 hover:bg-gray-100 hover:text-gray-900 transition-all group">
              <h3 className="text-lg font-bold mb-2">Fractional CHRO Services</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-600 mb-4">Executive-level HR leadership</p>
              <div className="text-sm font-bold uppercase tracking-wider text-pink-600 group-hover:text-pink-400">Explore →</div>
            </Link>

            <Link href="/what-is-fractional-hr" className="p-6 bg-gray-50 hover:bg-gray-100 hover:text-gray-900 transition-all group">
              <h3 className="text-lg font-bold mb-2">What is Fractional HR?</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-600 mb-4">Quick definition and overview</p>
              <div className="text-sm font-bold uppercase tracking-wider text-pink-600 group-hover:text-pink-400">Read More →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-28 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Find Your<br /><span className="text-pink-400">Fractional HR Leader</span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Access senior HR expertise at 50-70% less than full-time cost. Browse opportunities or create your profile today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-hr-jobs-uk" className="px-10 py-5 bg-pink-500 text-white font-bold uppercase tracking-wider hover:bg-pink-400 transition-colors">
              Browse HR Jobs
            </Link>
            <Link href="/handler/sign-up" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              Create Profile
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">HR Cluster</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-hr-jobs-uk" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Jobs UK</Link>
              <Link href="/fractional-hr-salary" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Salary Guide</Link>
              <Link href="/fractional-hr-vs-full-time" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Fractional vs Full-Time</Link>
              <Link href="/fractional-hr-roles" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Roles</Link>
              <Link href="/fractional-chro" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Fractional CHRO</Link>
              <Link href="/part-time-hr" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Part-Time HR</Link>
              <Link href="/interim-hr-director" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Interim HR</Link>
              <Link href="/fractional-hr-services" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
