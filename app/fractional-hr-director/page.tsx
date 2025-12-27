import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { createDbQuery } from '@/lib/db'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { JobsGraph3D } from '@/components/JobsGraph3D'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional HR Director UK | What They Do & When to Hire (2025)',
  description: 'Fractional HR Directors provide senior people leadership 1-3 days/week at £900-£1,100/day. Learn what they do, when to hire, and how they compare to CHROs and HR Consultants.',
  keywords: 'fractional hr director, fractional head of hr, fractional hr leader, part time hr director, fractional hr director jobs',
  alternates: {
    canonical: 'https://fractional.quest/fractional-hr-director',
  },
  openGraph: {
    title: 'Fractional HR Director: What They Do & When to Hire',
    description: 'Complete guide to fractional HR Directors - responsibilities, costs, when to hire, and how they compare to fractional CHROs.',
    images: ['/images/fractional-hr-director.jpg'],
    url: 'https://fractional.quest/fractional-hr-director',
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

const HR_DIRECTOR_FAQS = [
  {
    question: 'What does a Fractional HR Director do?',
    answer: 'A Fractional HR Director handles strategic people leadership: developing HR strategy aligned with <a href="https://www.cipd.org/uk/knowledge/factsheets/hr-strategy-factsheet/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD best practices</a>, building HR infrastructure, managing complex employee relations in accordance with <a href="https://www.gov.uk/browse/employing-people" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">UK employment law</a>, leading talent acquisition, implementing performance management, ensuring compliance, and mentoring any junior HR team. They typically work 1-3 days per week and take full ownership of HR outcomes.'
  },
  {
    question: 'How much does a Fractional HR Director cost?',
    answer: 'Fractional HR Directors in the UK typically charge £900-£1,100 per day. For 2 days per week, expect to pay £7,800-£9,500 monthly (£93,600-£114,400 annually). This is 35-45% less than a full-time HR Director at £145,000-£183,000 total cost including salary, NI, pension, and benefits.'
  },
  {
    question: 'What is the difference between a Fractional HR Director and a Fractional CHRO?',
    answer: 'Fractional CHROs are more senior (£1,100-£1,300/day) and focus on board-level strategy, executive hiring, culture transformation, and organisational design. Fractional HR Directors (£900-£1,100/day) handle hands-on HR leadership—building infrastructure, managing ER, and professionalising operations. For 30-150 employees, HR Director is usually sufficient.'
  },
  {
    question: 'When should I hire a Fractional HR Director?',
    answer: 'Consider a Fractional HR Director when: you have 30-150 employees and need senior HR expertise; you\'re building HR from scratch; founder-led HR is becoming unsustainable; you\'re facing complex ER issues; you\'re scaling rapidly; or you need to professionalise HR operations for investors or growth.'
  },
  {
    question: 'What qualifications do Fractional HR Directors have?',
    answer: 'Most Fractional HR Directors have 12-18 years HR experience with 5+ years in senior HR roles. <a href="https://www.cipd.org/uk/learn/qualifications/level-7-advanced-diploma/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD Level 7</a> qualification is common. They typically have experience building HR functions from scratch, managing complex employee relations according to <a href="https://www.acas.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ACAS</a> best practices, and supporting companies through scale-up phases. Strong UK employment law knowledge is essential.'
  },
  {
    question: 'How many days per week do I need a Fractional HR Director?',
    answer: 'It depends on company size and complexity. 30-50 employees: 1 day/week usually suffices. 50-100 employees: 1.5-2 days/week. 100-150 employees: 2-3 days/week. During intensive periods (restructuring, rapid hiring, tribunal), you may need to temporarily increase days.'
  },
]

export default async function FractionalHRDirectorPage() {
  const stats = await getHRStats()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Fractional HR Director: What They Do & When to Hire',
    description: 'Complete guide to fractional HR Directors - responsibilities, costs, when to hire, and how they compare to fractional CHROs.',
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
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1920)' }} />
          <JobsGraph3D categoryFilter="HR" limit={25} height="100%" isHero={true} showOverlay={true} />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/fractional-hr" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to HR Hub
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-pink-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Role Guide
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Fractional<br />
                <span className="text-pink-400">HR Director</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                What <strong className="text-white">Fractional HR Directors</strong> do and when to hire one. The most common senior HR role in the UK fractional market.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">40/mo</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Monthly Searches</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-pink-400">£900-£1,100</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Day Rate</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">{stats.total}+</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Live Roles</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/fractional-hr-jobs-uk" className="px-8 py-4 bg-pink-500 text-white font-bold uppercase tracking-wider hover:bg-pink-400 transition-colors">
                  Browse HR Director Jobs
                </Link>
                <Link href="/fractional-hr-cost" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  View Costs
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
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Definition</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is a Fractional HR Director?</h2>
          </div>

          <div className="bg-pink-50 border-l-4 border-pink-500 p-8 mb-12">
            <p className="text-2xl md:text-3xl font-light text-gray-900 leading-relaxed mb-0">
              A <strong className="font-bold">Fractional HR Director</strong> is an experienced senior HR leader who provides strategic people leadership on a <strong>part-time basis</strong>—typically 1-3 days per week. They take ownership of your HR function, building infrastructure, managing complex matters, and professionalising people operations, at <strong>35-45% less cost</strong> than a full-time HR Director.
            </p>
          </div>

          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed">
              The Fractional HR Director is the <strong>most common senior HR role</strong> in the UK fractional market. In British business culture, "HR Director" is often used interchangeably with "CHRO" (Chief Human Resources Officer), though HR Directors typically focus more on operational excellence while CHROs emphasise board-level strategy.
            </p>

            <p>
              According to <a href="https://www.cipd.org/uk/knowledge/reports/professionalising-hr/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">CIPD research</a>, the demand for flexible senior HR leadership has grown significantly as UK businesses seek expertise without full-time overhead. Fractional HR Directors fill this gap for companies with 30-150 employees, particularly in the <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">scale-up sector</a> where agility is critical.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">Key Characteristics</h3>

            <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
              <div className="bg-gray-50 p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Seniority Level</h4>
                <p className="text-gray-700">12-18 years HR experience with 5+ years in senior HR roles. Typically <a href="https://www.cipd.org/uk/learn/qualifications/level-7-advanced-diploma/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD Level 7</a> qualified. Has built and led HR functions at scale-up or mid-market companies.</p>
              </div>
              <div className="bg-gray-50 p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Day Rate</h4>
                <p className="text-gray-700">£900-£1,100 per day in the UK market. Mid-point between People Partners (£600-£850) and CHROs (£1,100-£1,300).</p>
              </div>
              <div className="bg-gray-50 p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Time Commitment</h4>
                <p className="text-gray-700">Typically 1-3 days per week, depending on company size and complexity. Can scale up during intensive periods.</p>
              </div>
              <div className="bg-gray-50 p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Best For</h4>
                <p className="text-gray-700">Companies with 30-150 employees needing senior HR leadership but not full-time capacity. Scale-ups building their first formal HR function.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Responsibilities</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What Does a Fractional HR Director Do?</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-6">
              <div className="bg-white p-8 border-l-4 border-pink-500">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-4">1. HR Strategy & Planning</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Develop people strategy aligned with business objectives</li>
                  <li>• Create annual HR plans and priorities</li>
                  <li>• Design organisational structure for growth</li>
                  <li>• Advise leadership team on people matters</li>
                  <li>• Present HR updates to board/investors when needed</li>
                </ul>
              </div>

              <div className="bg-white p-8 border-l-4 border-gray-300">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-4">2. Employee Relations & Compliance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Manage complex ER cases following <a href="https://www.acas.org.uk/disciplinary-and-grievance-procedures" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ACAS guidelines</a> (disciplinaries, grievances, capability)</li>
                  <li>• Lead restructuring and <a href="https://www.gov.uk/staff-redundant" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">redundancy processes</a></li>
                  <li>• Handle <a href="https://www.gov.uk/employment-tribunal-decisions" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">tribunal preparation</a> and settlement negotiations</li>
                  <li>• Ensure <a href="https://www.gov.uk/browse/employing-people" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">UK employment law</a> compliance</li>
                  <li>• Review and update employment contracts and policies</li>
                </ul>
              </div>

              <div className="bg-white p-8 border-l-4 border-pink-500">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-4">3. HR Infrastructure & Operations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Implement HRIS systems (HiBob, BambooHR, Personio)</li>
                  <li>• Develop employee handbook and HR policies</li>
                  <li>• Design onboarding and offboarding processes</li>
                  <li>• Establish HR data and reporting frameworks</li>
                  <li>• Set up performance management systems</li>
                </ul>
              </div>

              <div className="bg-white p-8 border-l-4 border-gray-300">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-4">4. Talent & Performance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Lead hiring for senior and critical roles</li>
                  <li>• Develop talent acquisition strategy and employer brand</li>
                  <li>• Design and implement performance review cycles</li>
                  <li>• Create career frameworks and progression paths</li>
                  <li>• Identify and develop high-potential employees</li>
                </ul>
              </div>

              <div className="bg-white p-8 border-l-4 border-pink-500">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-4">5. Culture & Engagement</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Shape and reinforce company culture and values</li>
                  <li>• Run engagement surveys and action planning</li>
                  <li>• Design recognition and rewards programmes aligned with <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexible working</a> policies</li>
                  <li>• Support managers with team issues</li>
                  <li>• Champion diversity, equity, and inclusion initiatives</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">What They Delegate</h3>

            <div className="bg-gray-50 text-gray-900 p-8 my-10">
              <p className="text-gray-600 mb-4">Fractional HR Directors focus on strategic work and delegate operational tasks:</p>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong className="text-white">HR administration:</strong> Contracts, letters, filing → HR Coordinator or outsourced</li>
                <li>• <strong className="text-white">Payroll:</strong> Monthly processing → Finance or payroll provider</li>
                <li>• <strong className="text-white">Recruitment coordination:</strong> Scheduling, initial screening → Recruiter or TA team</li>
                <li>• <strong className="text-white">Benefits admin:</strong> Enrolments, queries → Benefits provider or admin support</li>
                <li>• <strong className="text-white">First-line queries:</strong> Holiday requests, policy questions → HR system or junior HR</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* When to Hire */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Decision Guide</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">When to Hire a Fractional HR Director</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="grid gap-6 my-10">
              <div className="bg-gray-50 p-6 border-l-4 border-pink-500">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">You Have 30-150 Employees</h3>
                <p className="text-gray-700 mb-0">This is the sweet spot for Fractional HR Directors. According to <a href="https://www.ons.gov.uk/businessindustryandtrade/business/activitysizeandlocation" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS data</a>, businesses in this size range represent a significant portion of UK employment. Below 30, a People Partner often suffices. Above 150, you may need full-time or a CHRO. Within this range, you need senior expertise but not 5 days a week.</p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-gray-900">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">Founder-Led HR Is Breaking</h3>
                <p className="text-gray-700 mb-0">"I'm the CEO but I'm spending 20% of my time on HR issues. We've had some near-misses with employee problems. We need a professional to take this off my plate."</p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-pink-500">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">Building HR From Scratch</h3>
                <p className="text-gray-700 mb-0">"We've grown to 40 people but have no formal HR. No proper contracts, no handbook, no processes. We need someone to build the foundations properly."</p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-gray-900">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">Complex ER Situations</h3>
                <p className="text-gray-700 mb-0">"We're facing potential tribunal claims, need to restructure the team, or have difficult performance issues. We need someone who's navigated these situations before."</p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-pink-500">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">Scaling Rapidly</h3>
                <p className="text-gray-700 mb-0">"We're hiring 5-10 people per month. Onboarding is inconsistent, managers are overwhelmed, and we're losing people because of poor processes." Many <a href="https://www.british-business-bank.co.uk/finance-hub/scaleup-support/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">scale-up businesses</a> face this challenge as they grow.</p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-gray-900">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">Investor Expectations</h3>
                <p className="text-gray-700 mb-0">"We've raised funding and the board expects professional HR. We need to show proper people metrics, retention data, and have someone credible at leadership meetings." Professional governance is increasingly important for <a href="https://www.iod.com/news/good-governance/corporate-governance-code/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">growing businesses</a>.</p>
              </div>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">HR Director vs CHRO: Which Do You Need?</h3>

            <div className="overflow-x-auto my-10">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-900">
                    <th className="p-4 text-left">Factor</th>
                    <th className="p-4 text-left">Fractional HR Director</th>
                    <th className="p-4 text-left">Fractional CHRO</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b bg-pink-50">
                    <td className="p-4 font-semibold">Day Rate</td>
                    <td className="p-4 font-bold text-pink-600">£900-£1,100</td>
                    <td className="p-4">£1,100-£1,300</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Company Size</td>
                    <td className="p-4">30-150 employees</td>
                    <td className="p-4">100-500 employees</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Focus</td>
                    <td className="p-4">Building HR infrastructure, hands-on leadership</td>
                    <td className="p-4">Board-level strategy, culture transformation</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Experience</td>
                    <td className="p-4">12-18 years</td>
                    <td className="p-4">18+ years</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Board Interaction</td>
                    <td className="p-4">Occasional updates</td>
                    <td className="p-4">Regular board member</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-pink-50 p-6 border border-pink-200 rounded-lg my-10">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Quick Decision Guide</h4>
              <p className="text-gray-700 mb-0">
                <strong>Choose HR Director if:</strong> You need someone to build and run HR operations, manage day-to-day people leadership, and professionalise your function. Most <a href="https://www.scaleupinstitute.org.uk/scaleup-report/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">scale-ups</a> need this.<br /><br />
                <strong>Choose CHRO if:</strong> You need board-level strategy, culture transformation, executive team coaching, or are preparing for major events (IPO, sale, significant restructure).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Costs</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional HR Director Costs</h2>
          </div>

          <div className="prose prose-lg max-w-none mb-10">
            <div className="bg-white p-8 border-2 border-gray-900 mb-10">
              <h3 className="text-xl font-black text-gray-900 mt-0 mb-6">Cost Comparison</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Fractional HR Director (2 days/week)</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Day rate £1,000 × 2 days × 52 weeks: <strong>£104,000</strong></li>
                    <li>• No <a href="https://www.gov.uk/national-insurance-rates-letters" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">employer NI</a>: £0</li>
                    <li>• No pension contribution: £0</li>
                    <li>• No benefits: £0</li>
                    <li className="font-bold">Total: £104,000/year</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Full-Time HR Director</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Salary: £110,000-£140,000</li>
                    <li>• <a href="https://www.gov.uk/national-insurance-rates-letters" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Employer NI</a> (13.8%): £15,180-£19,320</li>
                    <li>• Pension (5%): £5,500-£7,000</li>
                    <li>• Benefits: £3,000-£5,000</li>
                    <li className="font-bold">Total: £133,680-£171,320/year</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-pink-50">
                <p className="text-pink-800 font-semibold mb-0">Savings: £30,000-£67,000 annually (22-39%)</p>
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
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ skipSchema={true} items={HR_DIRECTOR_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Find a Fractional HR Director</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Browse experienced fractional HR Directors or create your profile to attract opportunities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-hr-jobs-uk" className="px-8 py-4 bg-pink-500 text-white font-bold uppercase tracking-wider hover:bg-pink-400 transition-colors">
              Browse HR Director Jobs
            </Link>
            <Link href="/handler/sign-up" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              Create Profile
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
              <Link href="/fractional-hr-director-jobs" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Director Jobs</Link>
              <Link href="/fractional-chro" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Fractional CHRO</Link>
              <Link href="/fractional-hr-salary" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Salary Guide</Link>
              <Link href="/fractional-hr-roles" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">All HR Roles</Link>
              <Link href="/interim-hr-director" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Interim HR Director</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
