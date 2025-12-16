import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'How to Become a Fractional CFO UK 2025 | Step-by-Step Career Guide',
  description: 'Learn how to become a fractional CFO. Required experience (15+ years), step-by-step career path, how to get your first client, and earn £100k-£300k+ annually. 140/mo searches.',
  keywords: 'how to become a fractional cfo, fractional cfo career, become fractional cfo, fractional cfo requirements, fractional cfo transition',
  alternates: {
    canonical: 'https://fractional.quest/how-to-become-fractional-cfo',
  },
  openGraph: {
    title: 'How to Become a Fractional CFO | Complete Career Guide 2025',
    description: 'Step-by-step guide to transitioning to fractional CFO work. Experience required, career path, finding clients, and earnings potential.',
    images: ['/images/how-to-become-fractional-cfo.jpg'],
    url: 'https://fractional.quest/how-to-become-fractional-cfo',
  },
}

const BECOME_CFO_FAQS = [
  {
    question: "How many years of experience do you need to become a fractional CFO?",
    answer: "Typically 15+ years of finance experience including at least 3-5 years in senior finance leadership (CFO, Finance Director, or VP Finance). Most successful fractional CFOs have 18+ years experience with multiple prior CFO roles before going fractional."
  },
  {
    question: "Do you need to be a qualified accountant to become a fractional CFO?",
    answer: "Not strictly required, but helpful. Many fractional CFOs are ACA, ACCA, CIMA, or CPA qualified, but it's not mandatory. Experience, track record, and results matter more than qualifications. However, qualifications help with credibility, especially early in your fractional career."
  },
  {
    question: "How do fractional CFOs find their first client?",
    answer: "80%+ of first clients come from your network: former colleagues, investors you've worked with, recruiters, or referrals from other fractional executives. Cold outreach rarely works for first client. Leverage your existing relationships and reputation."
  },
  {
    question: "How much can you earn as a fractional CFO?",
    answer: "UK fractional CFOs typically earn £100,000-£300,000+ annually. With 2-4 clients at £700-£1,500/day each, working 2-3 days per week per client, many fractional CFOs earn more than they would full-time while working fewer total hours."
  },
  {
    question: "Should I go fractional full-time or start part-time?",
    answer: "Most successful fractional CFOs start with one part-time client (1-2 days/week) while still employed full-time, then transition to full-time fractional once they have 2 clients secured. This reduces financial risk and lets you test if fractional work suits you."
  },
]

export default function HowToBecomeFractionalCFOPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Become a Fractional CFO UK 2025 | Step-by-Step Career Guide',
    description: 'Learn how to become a fractional CFO. Required experience (15+ years), step-by-step career path, how to get your first client, and earn £100k-£300k+ annually.',
    author: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    publisher: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    datePublished: '2025-01-16',
    dateModified: '2025-01-16',
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {/* Hero */}
      <section className="relative bg-gray-900 text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/fractional-cfo" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
            <span className="mr-2">←</span> Back to CFO Hub
          </Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-white text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Career Guide 2025
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tight">
              How to Become a<br />
              <span className="text-gray-400">Fractional CFO</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
              Complete step-by-step guide to transitioning to <strong className="text-white">fractional CFO work</strong>. Required experience, career path, finding clients, and earning £100k-£300k+ annually.
            </p>
            <div className="flex flex-wrap gap-8 mb-10">
              <div>
                <div className="text-4xl md:text-5xl font-black">15+ Years</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">Experience Required</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black">£100k-£300k</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">Annual Earnings</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black">140/mo</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">Monthly Searches</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Prerequisites</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Required Experience & Qualifications</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Fractional CFO work is NOT for junior finance professionals. You need significant senior experience and a proven track record. Here's what's required:
            </p>

            <div className="bg-blue-950/20 border-l-4 border-blue-600 p-8 mb-10">
              <h3 className="text-2xl font-black text-gray-900 mt-0 mb-6">Minimum Requirements (Non-Negotiable)</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">15+ Years Finance Experience</p>
                    <p className="text-sm mb-0">Including progression through Analyst → Manager → Senior Manager → Director → CFO/VP Finance. You need the full journey, not just time served.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Prior CFO or Finance Director Role</p>
                    <p className="text-sm mb-0">You must have been THE finance leader (reporting to CEO/board) at least once. Controller/VP Finance acceptable if very senior. Head of FP&A typically not enough.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Track Record of Results</p>
                    <p className="text-sm mb-0">Quantifiable achievements: "Raised £15M Series B," "Reduced costs £2M," "Led acquisition of Company X," "Took company public." Generic "managed finance team" won't cut it.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Strong Communication & Presence</p>
                    <p className="text-sm mb-0">Fractional CFOs present to boards, pitch VCs, and lead teams remotely. If you can't present financials credibly and command a room, fractional work will be difficult.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Self-Starter Mentality</p>
                    <p className="text-sm mb-0">You're running your own business. No HR, no IT support, no admin help. You handle client acquisition, contracts, invoicing, and delivery solo. Not for everyone.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border-2 border-gray-900 mb-10">
              <h3 className="text-2xl font-black text-gray-900 mt-0 mb-6">Helpful But Not Required</h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900 mb-3">Professional Qualifications:</p>
                  <ul className="space-y-2 text-sm list-none pl-0">
                    <li>• ACA, ACCA, CIMA (UK)</li>
                    <li>• CPA, CMA (International)</li>
                    <li>• MBA from top school</li>
                  </ul>
                  <p className="text-sm mt-3 mb-0">Adds credibility, especially early in fractional career, but experience &gt; qualifications. Professional bodies like <a href="https://www.icaew.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ICAEW</a> and <a href="https://www.accaglobal.com/gb/en.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ACCA</a> provide ongoing CPD.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-3">Specialized Experience:</p>
                  <ul className="space-y-2 text-sm list-none pl-0">
                    <li>• Big 4 audit background</li>
                    <li>• VC, PE, or IB experience</li>
                    <li>• IPO experience</li>
                    <li>• M&A transaction expertise</li>
                    <li>• International/multi-currency</li>
                  </ul>
                  <p className="text-sm mt-3 mb-0">Commands premium rates and opens doors to complex engagements.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Reality Check: Are You Ready?</h3>
              <p className="text-gray-700 mb-4">Ask yourself honestly:</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Have I been THE CFO (not "a" finance leader) for at least 3 years?</li>
                <li>• Can I name 3+ major achievements with numbers (£/$ impact)?</li>
                <li>• Have I raised capital, led M&A, or managed complex projects independently?</li>
                <li>• Do I have a network that trusts me enough to hire me or refer me?</li>
                <li>• Am I comfortable with sales, self-promotion, and business development?</li>
              </ul>
              <p className="text-gray-700 mt-4 mb-0">If you answered "no" to 2+ questions, you may need more experience before going fractional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Path */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Career Roadmap</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Step-by-Step: How to Become a Fractional CFO</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              The typical path to fractional CFO work takes 18-25 years from starting your finance career. Here's the roadmap:
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gray-900 text-white flex items-center justify-center text-3xl font-black rounded-full">1</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-3">Build Foundation Finance Experience (Years 0-10)</h3>
                  <div className="bg-white p-6">
                    <p className="text-gray-700 mb-4"><strong>Typical Path:</strong></p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <strong>Years 0-3:</strong> Analyst roles (Big 4 audit, corporate finance, FP&A, investment banking)</li>
                      <li>• <strong>Years 3-6:</strong> Senior Analyst → Manager (specialize in FP&A, controllership, or strategy)</li>
                      <li>• <strong>Years 6-10:</strong> Senior Manager → Associate Director (manage teams, own processes)</li>
                    </ul>
                    <p className="text-gray-700 mt-4 mb-0"><strong>Goal:</strong> Develop technical excellence (accounting, FP&A, systems) and start leading small teams.</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gray-900 text-white flex items-center justify-center text-3xl font-black rounded-full">2</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-3">Progress to Finance Director / VP Finance (Years 10-15)</h3>
                  <div className="bg-white p-6">
                    <p className="text-gray-700 mb-4"><strong>Critical Transition:</strong> Move from "doing finance" to "leading finance function."</p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <strong>Years 10-12:</strong> Finance Director at mid-size company (£5-50M revenue)</li>
                      <li>• <strong>Years 12-15:</strong> VP Finance at scale-up or larger enterprise</li>
                      <li>• Own budgeting, forecasting, reporting, systems</li>
                      <li>• Build and manage finance teams (3-10 people)</li>
                      <li>• Report to CEO, present to board</li>
                    </ul>
                    <p className="text-gray-700 mt-4 mb-0"><strong>Goal:</strong> Gain exposure to board reporting, strategic planning, and full finance function ownership.</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-blue-600 text-white flex items-center justify-center text-3xl font-black rounded-full">3</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-3">Land Your First CFO Role (Years 15-18)</h3>
                  <div className="bg-blue-950/20 p-6 border-l-4 border-blue-600">
                    <p className="text-gray-700 mb-4"><strong>THE Career Milestone:</strong> Your first CFO title. This is essential for fractional work.</p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <strong>Target:</strong> CFO at startup, scale-up, or SME (£1M-£50M revenue)</li>
                      <li>• Lead fundraising (seed, Series A/B) OR M&A OR international expansion</li>
                      <li>• Build credibility and track record: "Raised £X," "Acquired Company Y," "Reduced costs £Z"</li>
                      <li>• Stay minimum 2-3 years to show staying power and deliver results</li>
                    </ul>
                    <p className="text-gray-700 mt-4 mb-0"><strong>Why This Matters:</strong> "Former CFO of [Company]" is your calling card for fractional work. No CFO title = very difficult to go fractional.</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gray-900 text-white flex items-center justify-center text-3xl font-black rounded-full">4</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-3">Develop Specialized Expertise (Years 18-20)</h3>
                  <div className="bg-white p-6">
                    <p className="text-gray-700 mb-4"><strong>Differentiate yourself.</strong> Fractional CFO market is competitive—you need a niche.</p>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">Industry Specialization:</p>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• SaaS / Tech</li>
                          <li>• FinTech</li>
                          <li>• Life Sciences / Biotech</li>
                          <li>• E-Commerce</li>
                          <li>• Manufacturing</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">Functional Specialization:</p>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Fundraising expert</li>
                          <li>• M&A specialist</li>
                          <li>• Turnaround/restructuring</li>
                          <li>• IPO readiness</li>
                          <li>• International expansion</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-gray-700 mt-4 mb-0"><strong>Example:</strong> "Fractional CFO for SaaS companies raising Series A" beats "Fractional CFO" in a competitive market.</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gray-900 text-white flex items-center justify-center text-3xl font-black rounded-full">5</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-3">Build Your Network (Ongoing, Years 15-25)</h3>
                  <div className="bg-white p-6">
                    <p className="text-gray-700 mb-4"><strong>80%+ of fractional work comes from referrals.</strong> Your network IS your business.</p>
                    <p className="font-semibold text-gray-900 mb-3">Key Relationships to Cultivate:</p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <strong>VCs & Angels:</strong> They refer portfolio companies needing fractional CFOs</li>
                      <li>• <strong>Startup Founders:</strong> Former colleagues who'll hire you or refer others</li>
                      <li>• <strong>Executive Recruiters:</strong> Fractional-focused recruiters place interim/fractional roles</li>
                      <li>• <strong>Other Fractional Executives:</strong> Fractional CEOs, CMOs, CTOs who can refer overflow work</li>
                      <li>• <strong>Accountants & Lawyers:</strong> They see clients who need fractional CFO support</li>
                      <li>• <strong>PE Firms:</strong> Portfolio companies often need fractional CFO during integration</li>
                    </ul>
                    <p className="text-gray-700 mt-4 mb-0"><strong>Action:</strong> Attend startup events, join fractional executive groups, stay active on LinkedIn, maintain relationships religiously.</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-blue-600 text-white flex items-center justify-center text-3xl font-black rounded-full">6</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-3">Land Your First Fractional Client (Year 20+)</h3>
                  <div className="bg-blue-950/20 p-6 border-l-4 border-blue-600">
                    <p className="text-gray-700 mb-4"><strong>The Transition Moment.</strong> Two approaches:</p>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">Option A: Start Part-Time (Lower Risk) ✓</p>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Keep full-time CFO job</li>
                          <li>• Take ONE fractional client (1-2 days/week, weekends/evenings initially)</li>
                          <li>• Test if you like fractional work</li>
                          <li>• Build confidence and case study</li>
                          <li>• Once you have 1-2 clients secured, quit full-time</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">Option B: Jump Full-Time (Higher Risk)</p>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Leave full-time role</li>
                          <li>• Go all-in on fractional</li>
                          <li>• Requires 6-12 months runway saved</li>
                          <li>• More time to find clients, but financial pressure</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-blue-600 font-bold mt-4 mb-0">Recommended: Option A. Most successful fractional CFOs started with one part-time client.</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gray-900 text-white flex items-center justify-center text-3xl font-black rounded-full">7</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-3">Build Portfolio (2-4 Clients)</h3>
                  <div className="bg-white p-6">
                    <p className="text-gray-700 mb-4"><strong>Steady State:</strong> Most fractional CFOs stabilize at 2-4 simultaneous clients.</p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <strong>2 clients:</strong> £100k-£150k/year, working 2-3 days/week total (great work-life balance)</li>
                      <li>• <strong>3 clients:</strong> £150k-£225k/year, working 3-4 days/week (optimal for most)</li>
                      <li>• <strong>4 clients:</strong> £200k-£300k/year, working 4-5 days/week (high earnings, busier)</li>
                    </ul>
                    <p className="text-gray-700 mt-4 mb-0"><strong>Client Mix:</strong> Ideally 1-2 ongoing retainers (stability) + 1-2 project-based (variety, higher rates).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting First Client */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Client Acquisition</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How to Get Your First Fractional CFO Client</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              This is the hardest part. Your first client validates you as a fractional CFO. Here's how to land it:
            </p>

            <div className="bg-gray-900 text-white p-8 mb-10">
              <h3 className="text-2xl font-bold text-white mb-6">Where First Clients Come From (Real Data)</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex justify-between items-center pb-3 border-b border-gray-700">
                  <span>Former colleagues / employers</span>
                  <span className="font-bold text-white">35%</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-700">
                  <span>Investor referrals (VCs, angels)</span>
                  <span className="font-bold text-white">25%</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-700">
                  <span>Executive recruiter placements</span>
                  <span className="font-bold text-white">20%</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-700">
                  <span>Referrals from other fractionals</span>
                  <span className="font-bold text-white">10%</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-700">
                  <span>LinkedIn / personal network</span>
                  <span className="font-bold text-white">8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Cold outreach / job boards</span>
                  <span className="font-bold text-white">2%</span>
                </div>
              </div>
              <p className="text-gray-300 mt-6 mb-0">
                <strong className="text-white">Key Insight:</strong> 90%+ of first clients come from WARM introductions. Cold outreach almost never works for fractional CFO.
              </p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">Step-by-Step: Landing Your First Client</h3>

            <div className="space-y-6">
              <div className="bg-white p-8 border-l-4 border-gray-900">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Step 1: Make "The List" (Week 1)</h4>
                <p className="text-gray-700 mb-4">Create a spreadsheet of everyone who might hire you or refer you:</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Former colleagues now at other companies</li>
                  <li>• Startup founders you've worked with</li>
                  <li>• VCs/angels you've pitched to or worked with</li>
                  <li>• Executive recruiters you've used</li>
                  <li>• Accountants, lawyers, consultants in your network</li>
                  <li>• Other fractional executives (CEO, CMO, CTO)</li>
                </ul>
                <p className="text-gray-700 mt-4 mb-0"><strong>Target:</strong> 50-100 names. If you can't get to 50, your network needs work before going fractional.</p>
              </div>

              <div className="bg-white p-8 border-l-4 border-blue-600">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Step 2: Announce Your Transition (Week 2)</h4>
                <p className="text-gray-700 mb-4">Post on LinkedIn (and email "The List"):</p>
                <div className="bg-gray-50 p-6 text-sm text-gray-700 italic">
                  "After 18 years in finance, including CFO roles at [Company A] and [Company B] where I [achievement 1] and [achievement 2], I'm transitioning to fractional CFO work.
                  <br/><br/>
                  I'm taking on 2-3 clients who need strategic CFO support for fundraising, scaling, or M&A—without the cost of a full-time hire.
                  <br/><br/>
                  If you know a £1M-£20M revenue company that could use fractional CFO expertise, I'd love an introduction."
                </div>
                <p className="text-gray-700 mt-4 mb-0"><strong>Result:</strong> Expect 5-15 responses. 2-3 will be real leads.</p>
              </div>

              <div className="bg-white p-8 border-l-4 border-gray-900">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Step 3: Coffee Chats (Weeks 3-8)</h4>
                <p className="text-gray-700 mb-4">Schedule 20+ coffee chats with people from "The List":</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• NOT sales meetings—relationship building</li>
                  <li>• Ask: "Who do you know that might need fractional CFO help?"</li>
                  <li>• Offer value: "Happy to do a free 30-min finance audit for any introduction"</li>
                  <li>• Follow up with thank you + stay-in-touch cadence</li>
                </ul>
                <p className="text-gray-700 mt-4 mb-0"><strong>Conversion:</strong> 20 coffees typically generates 3-5 intros → 1-2 proposals → 1 client.</p>
              </div>

              <div className="bg-white p-8 border-l-4 border-blue-600">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Step 4: Free Consultation (Close the Deal)</h4>
                <p className="text-gray-700 mb-4">When you get a warm intro, offer free 30-60 minute consultation:</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Review their current financials</li>
                  <li>• Identify 2-3 quick wins you'd deliver</li>
                  <li>• Propose specific engagement (1-2 days/week, 3-6 months)</li>
                  <li>• Share day rate or monthly retainer</li>
                  <li>• Provide 2-3 founder references to call</li>
                </ul>
                <p className="text-gray-700 mt-4 mb-0"><strong>Close rate:</strong> If the intro is warm and you deliver strong consultation, 50%+ close rate.</p>
              </div>
            </div>

            <div className="bg-blue-950/20 border-l-4 border-blue-600 p-6 mt-10">
              <p className="text-lg font-semibold text-gray-900 mb-2">Timeline Expectations</p>
              <p className="text-gray-700 mb-0">
                <strong>Average time to first client:</strong> 2-4 months from starting outreach. Some get lucky in 2 weeks (former colleague immediately hires them). Others take 6 months. Be patient and systematic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Earnings Potential</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How Much Do Fractional CFOs Earn?</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="grid md:grid-cols-3 gap-6 my-10 not-prose">
              <div className="bg-white p-6 border-2 border-gray-200">
                <div className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Entry Level Fractional</div>
                <div className="text-4xl font-black text-gray-900 mb-2">£100k-£150k</div>
                <div className="text-sm text-gray-600 mb-4">annually</div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 1-2 clients</li>
                  <li>• 2-3 days/week total</li>
                  <li>• Building reputation</li>
                  <li>• £800-£1,000/day rate</li>
                </ul>
              </div>

              <div className="bg-gray-900 text-white p-6 border-2 border-gray-900">
                <div className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Established Fractional</div>
                <div className="text-4xl font-black mb-2">£150k-£250k</div>
                <div className="text-sm text-gray-300 mb-4">annually</div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• 2-3 clients</li>
                  <li>• 3-4 days/week total</li>
                  <li>• Strong track record</li>
                  <li>• £1,000-£1,300/day rate</li>
                </ul>
              </div>

              <div className="bg-white p-6 border-2 border-gray-200">
                <div className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Top Tier Fractional</div>
                <div className="text-4xl font-black text-gray-900 mb-2">£250k-£400k+</div>
                <div className="text-sm text-gray-600 mb-4">annually</div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 3-4 clients</li>
                  <li>• 4-5 days/week</li>
                  <li>• Specialized expertise</li>
                  <li>• £1,300-£1,500+ day rate</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 my-10 border-2 border-gray-900">
              <h3 className="text-2xl font-black text-gray-900 mt-0 mb-6">Real Earnings Example: Typical Portfolio</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Client A: 2 days/week @ £1,200/day</span>
                  <span className="font-bold">£9,600/month</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Client B: 1.5 days/week @ £1,100/day</span>
                  <span className="font-bold">£6,600/month</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Client C (project): £30k/4 months</span>
                  <span className="font-bold">£7,500/month</span>
                </div>
                <div className="flex justify-between items-center pt-4 bg-blue-950/20 px-4 py-3">
                  <span className="font-bold text-lg">Total Monthly Income</span>
                  <span className="font-bold text-2xl text-blue-600">£23,700</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 px-4 py-3">
                  <span className="font-bold">Annual Income (before tax)</span>
                  <span className="font-bold text-xl">£284,400</span>
                </div>
              </div>
              <p className="text-gray-700 mt-6 mb-0">
                Working 4.5 days/week across 3 clients. More than most full-time CFOs earn (£150k-£200k) with better flexibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ items={BECOME_CFO_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Start Your Fractional CFO Career?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Explore fractional CFO opportunities and learn more about the career path.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-cfo-jobs-uk" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Browse Fractional CFO Jobs
            </Link>
            <Link href="/fractional-cfo-training" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              Explore CFO Training
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
