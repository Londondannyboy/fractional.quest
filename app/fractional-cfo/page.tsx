import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { RoleNews } from '@/components/RoleNews'
import { RoleHubHeader } from '@/components/RoleHubHeader'
import { RoleSidebar } from '@/components/RoleSidebar'
import { RoleContentHub } from '@/components/RoleContentHub'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CFO Guide UK 2025',
  description: 'What is a fractional CFO? Complete guide - pricing, how to hire, become a fractional CFO.',
  keywords: 'fractional cfo, what is a fractional cfo, fractional cfo services, fractional cfo salary, fractional cfo jobs, hire fractional cfo, become fractional cfo',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cfo',
  },
  openGraph: {
    title: 'Fractional CFO: The Complete Guide 2025',
    description: 'Everything you need to know about Fractional CFOs - from what they do to how to hire or become one.',
    images: ['/images/fractional-cfo.jpg'],
    url: 'https://fractional.quest/fractional-cfo',
  },
}

const CFO_FAQS = [
  {
    question: "What is a Fractional CFO?",
    answer: "A Fractional CFO is an experienced Chief Financial Officer who works with your company part-time (typically 1-3 days per week), providing strategic financial leadership without the cost of a full-time hire. They manage your finance function, build investor relationships, and drive financial strategy."
  },
  {
    question: "How much does a Fractional CFO cost?",
    answer: "Fractional CFO costs in the UK typically range from £700-£1,500 per day depending on experience, or £3,000-£6,000 per week for part-time engagements. This is 50-70% less expensive than hiring a full-time CFO at £150,000-£250,000 annually."
  },
  {
    question: "When should I hire a Fractional CFO?",
    answer: "Consider hiring a fractional CFO when you're preparing for fundraising, experiencing rapid growth, need financial expertise for M&A, require investor-ready financials, or need strategic financial leadership but can't justify a full-time CFO hire."
  },
  {
    question: "How much do Fractional CFOs earn?",
    answer: "Fractional CFOs in the UK typically earn £100,000-£300,000+ annually depending on their client portfolio. With 2-4 clients at £3,000-£6,000/week each, many fractional CFOs earn more than they would in a full-time role while enjoying flexibility."
  },
  {
    question: "How do I become a Fractional CFO?",
    answer: "To become a fractional CFO, you typically need 15+ years of finance experience, prior CFO or senior finance leadership roles, strong industry expertise, and the ability to build client relationships. Many successful fractional CFOs are CPA or CMA qualified and have worked in PE, VC, or high-growth startups."
  },
  {
    question: "What's the difference between a Fractional CFO and a Full-Time CFO?",
    answer: "The main differences are time commitment (part-time vs full-time), cost (£3,000-£6,000/week vs £150,000-£250,000/year), and flexibility. Fractional CFOs work 1-3 days per week, are often engaged for specific projects or phases, and can be scaled up or down as needed."
  },
]

export default function FractionalCFOGuidePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Fractional CFO: The Complete Guide 2025',
    description: 'The complete guide to Fractional CFOs. Learn what a fractional CFO does, pricing, how to hire one, and how to become a fractional CFO.',
    author: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    publisher: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    datePublished: '2025-01-16',
    dateModified: '2025-01-16',
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      
      {/* Role Hub Header */}
      <RoleHubHeader role="cfo" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <main className="lg:col-span-3 space-y-12">
            
            {/* Table of Contents */}
            <section className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl font-black text-gray-900 mb-6">In This Guide</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="#guide" className="flex items-center p-3 bg-white rounded-lg border border-gray-100 hover:border-blue-500 transition-colors group">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-3 text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">1</span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">What is a Fractional CFO?</span>
                </Link>
                <Link href="#vs-fulltime" className="flex items-center p-3 bg-white rounded-lg border border-gray-100 hover:border-blue-500 transition-colors group">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-3 text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">2</span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Fractional vs Full-Time</span>
                </Link>
                <Link href="#when-to-hire" className="flex items-center p-3 bg-white rounded-lg border border-gray-100 hover:border-blue-500 transition-colors group">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-3 text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">3</span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">When to Hire</span>
                </Link>
                <Link href="#pricing" className="flex items-center p-3 bg-white rounded-lg border border-gray-100 hover:border-blue-500 transition-colors group">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-3 text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">4</span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Pricing & Costs</span>
                </Link>
                <Link href="#become" className="flex items-center p-3 bg-white rounded-lg border border-gray-100 hover:border-blue-500 transition-colors group">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-3 text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">5</span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">How to Become One</span>
                </Link>
                <Link href="#jobs" className="flex items-center p-3 bg-white rounded-lg border border-gray-100 hover:border-blue-500 transition-colors group">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-3 text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">6</span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Find CFO Jobs</span>
                </Link>
              </div>
            </section>

            {/* Latest News Section */}
            <RoleNews category="Finance" title="Latest CFO News & Insights" limit={3} />

            {/* Section 1: What is a Fractional CFO */}
            <section id="guide" className="scroll-mt-24">
              <div className="mb-8 pb-4 border-b border-gray-100">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2 block">Section 01</span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is a Fractional CFO?</h2>
              </div>

              <div className="prose prose-lg max-w-none text-gray-600">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                  <p className="text-xl font-semibold text-gray-900 mb-2">Definition</p>
                  <p className="text-lg text-gray-700 mb-0">
                    A <strong>Fractional CFO</strong> is an experienced Chief Financial Officer who provides strategic financial leadership to companies on a part-time basis—typically working 1-3 days per week. According to <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute research</a>, UK scale-ups increasingly rely on fractional executives for flexible access to senior expertise. Unlike consultants, fractional CFOs become embedded members of your leadership team, managing your finance function and driving outcomes at 50-70% less cost than a full-time hire.
                  </p>
                </div>

                <p className="leading-relaxed">
                  Think of a fractional CFO as your company's senior financial leader—just not five days a week. As <a href="https://www.cipd.org/uk/knowledge/reports/flexible-working-trends/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD flexible working research</a> shows, senior executives are increasingly embracing portfolio careers. They attend board meetings, manage your finance team, build investor relationships, oversee fundraising, and take full ownership of financial strategy and outcomes.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">What Does a Fractional CFO Do?</h3>

                <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                  <div className="bg-white border border-gray-200 p-6 rounded-lg">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center"><span className="text-blue-600 mr-2">✦</span> Strategic</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>Financial strategy & planning</li>
                      <li>Fundraising & investor relations</li>
                      <li>Board reporting & governance</li>
                      <li>M&A due diligence & integration</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center"><span className="text-green-600 mr-2">✦</span> Operational</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>Cash flow management & forecasting</li>
                      <li>Financial modeling & scenario planning</li>
                      <li>Finance team leadership & hiring</li>
                      <li>Systems implementation & process</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Typical Engagement Models</h3>

                <div className="overflow-x-auto my-8 border rounded-lg">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50 text-gray-900 border-b">
                        <th className="p-4 text-left font-bold text-sm uppercase">Model</th>
                        <th className="p-4 text-left font-bold text-sm uppercase">Time</th>
                        <th className="p-4 text-left font-bold text-sm uppercase">Cost</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm">
                      <tr className="border-b">
                        <td className="p-4 font-semibold">Day Rate</td>
                        <td className="p-4">1-3 days/week</td>
                        <td className="p-4">£700-£1,500/day</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-semibold">Retainer</td>
                        <td className="p-4">Fixed monthly</td>
                        <td className="p-4">£3k-£8k/month</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold">Project</td>
                        <td className="p-4">3-6 months</td>
                        <td className="p-4">£15k-£50k</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 2: Fractional vs Full-Time CFO */}
            <section id="vs-fulltime" className="scroll-mt-24">
              <div className="mb-8 pb-4 border-b border-gray-100">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2 block">Section 02</span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional CFO vs Full-Time CFO</h2>
              </div>

              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="leading-relaxed">
                  The choice between a fractional and full-time CFO comes down to three factors: <strong>time requirements, budget constraints, and business stage</strong>.
                </p>

                <div className="overflow-x-auto my-10 border rounded-lg shadow-sm">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="bg-gray-900 text-white">
                        <th className="p-4">Factor</th>
                        <th className="p-4 bg-blue-600">Fractional CFO</th>
                        <th className="p-4">Full-Time CFO</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white text-sm">
                      <tr className="border-b">
                        <td className="p-4 font-semibold">Annual Cost</td>
                        <td className="p-4 text-blue-600 font-bold bg-blue-50">£36k-£120k</td>
                        <td className="p-4 text-gray-600">£150k-£250k+</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-semibold">Commitment</td>
                        <td className="p-4 bg-blue-50">1-3 days/week</td>
                        <td className="p-4">5 days/week</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-semibold">Flexibility</td>
                        <td className="p-4 bg-blue-50">High (Monthly)</td>
                        <td className="p-4">Low (Permanent)</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold">Experience</td>
                        <td className="p-4 bg-blue-50">High (15+ yrs)</td>
                        <td className="p-4">Varies</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                    <h4 className="font-bold text-green-800 mb-3">Choose Fractional If:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>✓ Revenue is £1M-£20M</li>
                      <li>✓ Pre-Series B funding</li>
                      <li>✓ Need specific expertise (e.g. fundraising)</li>
                      <li>✓ Want flexibility to scale</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-3">Choose Full-Time If:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>→ Revenue is £20M+</li>
                      <li>→ Complex multi-entity / international</li>
                      <li>→ Preparing for IPO</li>
                      <li>→ Need 40+ hours/week coverage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: When to Hire */}
            <section id="when-to-hire" className="scroll-mt-24">
              <div className="mb-8 pb-4 border-b border-gray-100">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2 block">Section 03</span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">When to Hire</h2>
              </div>

              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="leading-relaxed mb-8">
                  Most companies hire a fractional CFO during critical growth phases or strategic events. According to <a href="https://www.bvca.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">BVCA research</a>, PE-backed companies increasingly mandate fractional CFOs. The <a href="https://www.britishbusinessbank.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Business Bank</a> notes common scenarios include:
                </p>

                <div className="grid gap-4">
                  {[
                    { title: 'Fundraising', desc: 'Planning a seed or Series A round and need credible financials.' },
                    { title: 'Rapid Growth', desc: 'Revenue growing 3x+ and founder finance can no longer keep up.' },
                    { title: 'Cash Flow Issues', desc: 'Runway is <12 months or cash management needs discipline.' },
                    { title: 'Board Demands', desc: 'Investors requiring professional reporting and strategic analysis.' },
                    { title: 'M&A', desc: 'Buying a company or preparing to be acquired.' },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 p-4 border rounded-lg bg-white hover:border-blue-300 transition-colors">
                      <div className="w-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <div>
                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600 m-0">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 4: Pricing */}
            <section id="pricing" className="scroll-mt-24">
              <div className="mb-8 pb-4 border-b border-gray-100">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2 block">Section 04</span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">Pricing & Costs</h2>
              </div>

              <div className="prose prose-lg max-w-none text-gray-600">
                <p>UK fractional CFO rates typically fall into these bands. Professional bodies like <a href="https://www.icaew.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ICAEW</a> and <a href="https://www.accaglobal.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ACCA</a> qualified CFOs command premium rates. According to <a href="https://www.ons.gov.uk/employmentandlabourmarket" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS data</a>, finance executives are among the highest-paid flexible workers:</p>
                
                <div className="grid md:grid-cols-3 gap-4 my-8 not-prose">
                  <div className="p-6 bg-white border border-gray-200 rounded-xl text-center">
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Junior</div>
                    <div className="text-2xl font-black text-gray-900">£700-950</div>
                    <div className="text-xs text-gray-500">per day</div>
                  </div>
                  <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl text-center">
                    <div className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Standard</div>
                    <div className="text-2xl font-black text-gray-900">£950-1,250</div>
                    <div className="text-xs text-gray-500">per day</div>
                  </div>
                  <div className="p-6 bg-white border border-gray-200 rounded-xl text-center">
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Senior</div>
                    <div className="text-2xl font-black text-gray-900">£1,250+</div>
                    <div className="text-xs text-gray-500">per day</div>
                  </div>
                </div>

                <div className="bg-gray-900 text-white p-8 rounded-xl my-8 not-prose">
                  <h3 className="text-xl font-bold mb-4">Calculate Your ROI</h3>
                  <RoleCalculator role="cfo" className="bg-transparent p-0" />
                </div>
              </div>
            </section>

            {/* Section 5: Jobs & Hiring */}
            <section id="jobs" className="scroll-mt-24">
              <div className="mb-8 pb-4 border-b border-gray-100">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2 block">Section 05</span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">Find Jobs</h2>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Looking for a Fractional CFO?</h3>
                <p className="text-gray-700 mb-6">Browse our curated list of opportunities or post a job to reach thousands of qualified experts.</p>
                <div className="flex gap-4">
                  <Link href="/fractional-cfo-jobs-uk" className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                    Browse Jobs
                  </Link>
                  <Link href="/handler/sign-up" className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">
                    Post a Job
                  </Link>
                </div>
              </div>
            </section>

            <FAQ skipSchema={true} items={CFO_FAQS} title="Common Questions" />

          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <RoleSidebar role="cfo" relatedRoles={['FD', 'Controller', 'CEO']} />
              
              {/* Mini CTA */}
              <div className="bg-gray-900 rounded-xl p-6 text-white text-center">
                <div className="text-3xl mb-2">👋</div>
                <h4 className="font-bold mb-2">Need help hiring?</h4>
                <p className="text-sm text-gray-400 mb-4">We can match you with a vetted Fractional CFO in 48 hours.</p>
                <Link href="/contact" className="block w-full py-2 bg-white text-gray-900 font-bold rounded hover:bg-gray-100 text-sm transition-colors">
                  Get Matched
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <RoleContentHub currentRole="cfo" />
    </div>
  )
}
