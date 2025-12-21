import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { createDbQuery } from '@/lib/db'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { JobsGraph3D } from '@/components/JobsGraph3D'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'What is a Fractional CHRO? Complete Guide for UK Businesses (2025)',
  description: 'A Fractional CHRO is a part-time Chief Human Resources Officer providing executive-level people leadership at £1,100-£1,300/day. Complete UK guide with costs and use cases.',
  keywords: 'fractional chro, fractional chro meaning, fractional chief people officer, part time chro, fractional chro uk',
  alternates: {
    canonical: 'https://fractional.quest/fractional-chro',
  },
  openGraph: {
    title: 'What is a Fractional CHRO? Complete Guide for UK Businesses',
    description: 'Everything you need to know about Fractional CHROs - definition, responsibilities, costs, and when to hire for UK businesses.',
    images: ['/images/fractional-chro.jpg'],
    url: 'https://fractional.quest/fractional-chro',
  },
}

async function getHRStats() {
  try {
    const sql = createDbQuery()
    const [totalResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'HR'`
    ])
    return { total: parseInt((totalResult[0] as any)?.count || '0') }
  } catch {
    return { total: 32 }
  }
}

const CHRO_FAQS = [
  {
    question: 'What does a Fractional CHRO do?',
    answer: 'A Fractional CHRO handles executive-level people leadership: strategic people planning, culture transformation, executive team development, board reporting, organisational design, M&A people integration, and executive hiring. They sit on the leadership team and own the entire people function at a strategic level.'
  },
  {
    question: 'How much does a Fractional CHRO cost?',
    answer: 'Fractional CHROs in the UK typically charge £1,100-£1,300 per day. For 2 days/week, expect to pay £9,500-£11,300 monthly (£114,000-£135,000 annually). This is 40-50% less than a full-time CHRO at £200,000-£300,000+ total compensation.'
  },
  {
    question: 'What is the difference between CHRO and HR Director?',
    answer: 'CHROs focus on board-level strategy, executive team alignment, culture transformation, and organisational design. HR Directors focus on building and running HR operations. CHROs are typically 10-15% more expensive and suited to larger, more complex organisations (100+ employees).'
  },
  {
    question: 'When should I hire a Fractional CHRO vs HR Director?',
    answer: 'Hire a CHRO if: you have 100+ employees, need board-level strategic thinking, are going through major transformation (M&A, restructure, culture change), or preparing for exit. Hire an HR Director if: you have 30-100 employees and need hands-on HR leadership and infrastructure building.'
  },
  {
    question: 'What qualifications do Fractional CHROs have?',
    answer: 'Fractional CHROs typically have 18-25+ years HR experience with 8+ years in CHRO, CPO, or Group HR Director roles. Most hold CIPD Level 7 and have led HR through significant growth, M&A, or transformation at companies with 200-1000+ employees.'
  },
]

export default async function FractionalCHROPage() {
  const stats = await getHRStats()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What is a Fractional CHRO? Complete Guide for UK Businesses',
    description: 'Everything you need to know about Fractional CHROs - definition, responsibilities, costs, and when to hire.',
    author: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    publisher: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    datePublished: '2025-01-16',
    dateModified: '2025-01-16',
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <JobsGraph3D categoryFilter="HR" limit={25} height="100%" isHero={true} showOverlay={true} />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/fractional-hr" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to HR Hub
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-pink-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Executive Guide
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Fractional<br />
                <span className="text-pink-400">CHRO</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                What is a <strong className="text-white">Fractional CHRO</strong>? The complete UK guide to Chief Human Resources Officers on a part-time basis.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">10/mo</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Monthly Searches</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-pink-400">£1,100-£1,300</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Day Rate</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">{stats.total}+</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Live HR Roles</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/fractional-chro-services" className="px-8 py-4 bg-pink-500 text-white font-bold uppercase tracking-wider hover:bg-pink-400 transition-colors">
                  CHRO Services
                </Link>
                <Link href="/fractional-hr-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Browse HR Jobs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Definition */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Definition</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is a Fractional CHRO?</h2>
          </div>

          <div className="bg-pink-50 border-l-4 border-pink-500 p-8 mb-12">
            <p className="text-2xl md:text-3xl font-light text-gray-900 leading-relaxed mb-0">
              A <strong className="font-bold">Fractional CHRO</strong> (Chief Human Resources Officer) is an experienced executive-level HR leader who provides <strong>strategic people leadership on a part-time basis</strong>—typically 2-3 days per week. They sit on your leadership team, own the entire people function, and drive culture and organisational transformation at <strong>40-50% less cost</strong> than a full-time CHRO.
            </p>
          </div>

          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed">
              The CHRO (also called Chief People Officer or CPO) is the most senior HR role in an organisation. They report directly to the CEO, sit on the executive team, and are responsible for all aspects of people strategy—culture, talent, organisational effectiveness, and HR operations.
            </p>

            <p>
              In the UK market, "CHRO" terminology is more common at larger organisations (200+ employees) and US-influenced companies. Many UK businesses use "HR Director" or "People Director" for similar roles. The key distinction is that CHROs focus on <strong>board-level strategic work</strong> rather than operational HR management.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">CHRO vs HR Director</h3>

            <div className="overflow-x-auto my-10">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50 text-white">
                    <th className="p-4 text-left">Factor</th>
                    <th className="p-4 text-left">Fractional CHRO</th>
                    <th className="p-4 text-left">Fractional HR Director</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b bg-pink-50">
                    <td className="p-4 font-semibold">Day Rate</td>
                    <td className="p-4 font-bold text-pink-600">£1,100-£1,300</td>
                    <td className="p-4">£900-£1,100</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Experience</td>
                    <td className="p-4">18+ years, multiple CHRO roles</td>
                    <td className="p-4">12-18 years, senior HR roles</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Company Size</td>
                    <td className="p-4">100-500+ employees</td>
                    <td className="p-4">30-150 employees</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Focus</td>
                    <td className="p-4">Board strategy, culture, org design</td>
                    <td className="p-4">Building HR, operations, ER</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Board Interaction</td>
                    <td className="p-4">Regular board member</td>
                    <td className="p-4">Occasional updates</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Best For</td>
                    <td className="p-4">Transformation, M&A, executive alignment</td>
                    <td className="p-4">Building HR function, day-to-day leadership</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* What CHROs Do */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Responsibilities</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What Does a Fractional CHRO Do?</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-6">
              <div className="bg-white p-8 border-l-4 border-pink-500">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-4">1. Strategic People Planning</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Develop long-term people strategy aligned with business strategy</li>
                  <li>• Create workforce planning and organisational design</li>
                  <li>• Design leadership team structure and succession planning</li>
                  <li>• Present people strategy to board and investors</li>
                </ul>
              </div>

              <div className="bg-white p-8 border-l-4 border-gray-300">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-4">2. Culture & Transformation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Lead culture transformation initiatives</li>
                  <li>• Shape and reinforce company values at scale</li>
                  <li>• Drive diversity, equity, and inclusion strategy</li>
                  <li>• Manage change during M&A, restructuring, or rapid growth</li>
                </ul>
              </div>

              <div className="bg-white p-8 border-l-4 border-pink-500">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-4">3. Executive Team Development</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Coach CEO and executive team on people matters</li>
                  <li>• Lead executive hiring and onboarding</li>
                  <li>• Facilitate leadership team effectiveness</li>
                  <li>• Manage executive compensation and incentives</li>
                </ul>
              </div>

              <div className="bg-white p-8 border-l-4 border-gray-300">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-4">4. Board & Investor Relations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Present people metrics and strategy to board</li>
                  <li>• Support investor due diligence on people matters</li>
                  <li>• Advise on people implications of strategic decisions</li>
                  <li>• Manage board-level compensation decisions</li>
                </ul>
              </div>

              <div className="bg-white p-8 border-l-4 border-pink-500">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-4">5. Organisational Effectiveness</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Design organisational structure for scale</li>
                  <li>• Lead major restructuring and change programmes</li>
                  <li>• Implement talent management and succession frameworks</li>
                  <li>• Drive employee engagement at enterprise level</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Hire */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Use Cases</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">When to Hire a Fractional CHRO</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="grid gap-6 my-10">
              <div className="bg-gray-50 p-6 border-l-4 border-pink-500">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">100-500 Employees</h3>
                <p className="text-gray-700 mb-0">You've grown beyond where an HR Director can handle strategic needs. You need board-level thinking on people matters, but can't justify £200k+ for full-time CHRO.</p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-gray-900">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">PE-Backed Portfolio Company</h3>
                <p className="text-gray-700 mb-0">Private equity investors often mandate senior HR leadership across portfolio companies. Fractional CHROs can work across multiple portfolio companies efficiently.</p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-pink-500">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">Major Transformation</h3>
                <p className="text-gray-700 mb-0">Going through M&A integration, significant restructuring, culture change, or preparing for exit? These require CHRO-level expertise for a defined period.</p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-gray-900">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">Preparing for IPO or Sale</h3>
                <p className="text-gray-700 mb-0">Exit preparation requires professional people infrastructure, governance, and documentation that meets institutional standards.</p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-pink-500">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">CHRO Vacancy During Transition</h3>
                <p className="text-gray-700 mb-0">Your CHRO left and you need senior coverage while recruiting replacement. Fractional CHROs can maintain momentum and even help hire their successor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Costs</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional CHRO Costs</h2>
          </div>

          <div className="prose prose-lg max-w-none mb-10">
            <div className="bg-white p-8 border-2 border-gray-900 mb-10">
              <h3 className="text-xl font-black text-gray-900 mt-0 mb-6">Cost Comparison</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Fractional CHRO (2 days/week)</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Day rate £1,200 × 2 days × 52 weeks: <strong>£124,800</strong></li>
                    <li>• No employer NI: £0</li>
                    <li>• No pension/benefits: £0</li>
                    <li className="font-bold">Total: £124,800/year</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Full-Time CHRO</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Salary + bonus: £180,000-£250,000</li>
                    <li>• Employer NI + pension: £30,000-£40,000</li>
                    <li>• Benefits + equity: £20,000-£50,000</li>
                    <li className="font-bold">Total: £230,000-£340,000/year</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-pink-50">
                <p className="text-pink-800 font-semibold mb-0">Savings: £105,000-£215,000 annually (46-63%)</p>
              </div>
            </div>
          </div>

          <RoleCalculator role="hr" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ items={CHRO_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Find a Fractional CHRO</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Access executive-level people leadership without full-time cost.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-chro-services" className="px-8 py-4 bg-pink-500 text-white font-bold uppercase tracking-wider hover:bg-pink-400 transition-colors">
              CHRO Services
            </Link>
            <Link href="/fractional-hr-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              Browse HR Roles
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">HR Cluster</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-hr" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Complete HR Guide</Link>
              <Link href="/fractional-hr-jobs-uk" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Jobs UK</Link>
              <Link href="/fractional-hr-director" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Director</Link>
              <Link href="/fractional-chro-jobs-uk" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">CHRO Jobs UK</Link>
              <Link href="/fractional-hr-salary" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Salary Guide</Link>
              <Link href="/interim-chro" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Interim CHRO</Link>
              <Link href="/fractional-hr-services" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
