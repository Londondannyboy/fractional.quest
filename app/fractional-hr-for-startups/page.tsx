import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional HR for Startups | Expert People Leadership for £3k-£8k/Month',
  description: 'Fractional HR services for startups. Get expert people leadership, employment compliance, and culture building without £150k+ full-time cost. £144 CPC high-value keyword.',
  keywords: 'fractional hr for startups, startup hr, fractional hr seed stage, series a hr, startup people leadership, startup hr director',
  alternates: {
    canonical: 'https://fractional.quest/fractional-hr-for-startups',
  },
  openGraph: {
    title: 'Fractional HR for Startups | Expert People Leadership',
    description: 'Fractional HR for startups - build culture, hire great people, and navigate employment law without full-time HR cost.',
    images: ['/images/fractional-hr-startups.jpg'],
    url: 'https://fractional.quest/fractional-hr-for-startups',
  },
}

const STARTUP_HR_FAQS = [
  {
    question: 'When should a startup hire fractional HR?',
    answer: 'Consider fractional HR when you hit 15-25 employees, are hiring more than 2 people per month, face your first complex ER issue, are preparing for fundraising, or when founder-led HR is taking more than 10% of CEO time. Most startups engage fractional HR between Seed and Series A.'
  },
  {
    question: 'How much does fractional HR cost for startups?',
    answer: 'Startup fractional HR costs £3,000-£8,000/month for 1-2 days/week. Pre-seed/seed startups typically need 1 day/week (£3,000-£4,500/month). Series A startups need 1.5-2 days/week (£5,000-£8,000/month). This is 60-75% cheaper than full-time.'
  },
  {
    question: 'What does fractional HR do for startups?',
    answer: 'Startup fractional HR focuses on: building HR foundations (contracts, handbook, policies), ensuring UK employment law compliance, creating hiring processes, developing culture and values, managing early employee relations, and preparing for investor due diligence on people matters.'
  },
  {
    question: 'Do startups really need HR?',
    answer: 'Not at very early stage (under 10 people). But once you have 15+ employees, are hiring regularly, or face your first people problem, you need professional HR guidance. Employment tribunals cost £8,500-£50,000+, and one bad hire at startup stage can derail the company.'
  },
  {
    question: 'Can fractional HR help with fundraising?',
    answer: 'Yes. Investors increasingly scrutinise people practices. Fractional HR can build professional HR infrastructure, create retention data, develop org charts and headcount plans, and ensure compliant employment practices—all things VCs look for during due diligence.'
  },
]

export default function FractionalHRForStartupsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Fractional HR for Startups | Expert People Leadership',
    description: 'Fractional HR for startups - build culture, hire great people, and navigate employment law without full-time cost.',
    author: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    publisher: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    datePublished: '2025-01-16',
    dateModified: '2025-01-16',
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="relative bg-gray-50 text-gray-900 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/fractional-hr" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
            <span className="mr-2">←</span> Back to HR Hub
          </Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-pink-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              High-Value (£144 CPC)
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tight">
              Fractional HR<br />
              <span className="text-gray-400">for Startups</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
              Get <strong className="text-white">expert people leadership</strong> and employment compliance without the £150k+ full-time HR cost. Perfect for Seed through Series B startups.
            </p>
            <div className="flex flex-wrap gap-8 mb-10">
              <div>
                <div className="text-4xl md:text-5xl font-black">£3k-£8k</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">Monthly Cost</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-pink-400">£144</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">CPC Value</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black">60-75%</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">Cost Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Startups Need HR */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">The Startup Challenge</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Why Startups Need Fractional HR</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Most <a href="https://www.startups.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">startup</a> founders face a dilemma: <strong>You need proper HR to hire well, stay compliant, and build culture—but you can't afford or justify a £150k+ full-time HR Director.</strong> Fractional HR solves this perfectly.
            </p>

            <div className="bg-pink-50 border-l-4 border-pink-500 p-8 mb-10">
              <h3 className="text-2xl font-black text-gray-900 mt-0 mb-4">The Startup HR Gap</h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">What Investors & Employees Expect:</p>
                  <ul className="space-y-1 text-sm list-none pl-0">
                    <li>• Proper employment contracts</li>
                    <li>• Compliant HR policies</li>
                    <li>• Professional hiring process</li>
                    <li>• Clear performance management</li>
                    <li>• Culture and values framework</li>
                    <li>• Retention and engagement data</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">What Most Startups Have:</p>
                  <ul className="space-y-1 text-sm list-none pl-0">
                    <li>• Template contracts from the internet</li>
                    <li>• No handbook or policies</li>
                    <li>• Ad-hoc, founder-led hiring</li>
                    <li>• Informal feedback conversations</li>
                    <li>• Implicit, undefined culture</li>
                    <li>• No people metrics</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 mt-6 mb-0 font-semibold">
                Fractional HR bridges this gap—giving you professional people infrastructure without full-time cost.
              </p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">When Startups Hire Fractional HR</h3>

            <div className="grid gap-6 my-10">
              <div className="bg-gray-50 p-6 border-l-4 border-pink-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">15-25 Employees</h4>
                <p className="text-gray-700 mb-0">The inflection point where informal HR breaks. You're spending too much time on people issues. Your first complex employee problem appears. You need proper <a href="https://www.acas.org.uk/employment-contracts" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">contracts</a> and policies.</p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-gray-900">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Hiring 2+ People Per Month</h4>
                <p className="text-gray-700 mb-0">Rapid hiring requires process. Without proper onboarding, contracts, and management frameworks, you'll create problems that cost 10x more to fix later.</p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-pink-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Pre-Fundraise (6-12 Months Out)</h4>
                <p className="text-gray-700 mb-0"><a href="https://www.british-business-bank.co.uk/finance-hub/growth-and-scaling-up/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Investors</a> scrutinise people practices. Professional HR infrastructure, retention data, and compliant employment practices signal maturity and reduce DD risk.</p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-gray-900">
                <h4 className="text-lg font-bold text-gray-900 mb-2">First Serious ER Issue</h4>
                <p className="text-gray-700 mb-0">Performance problem? Potential dismissal? Grievance? These situations need expert handling. <a href="https://www.gov.uk/employment-tribunal-decisions" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">Employment tribunals</a> cost £8,500-£50,000+.</p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-pink-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">CEO Spending 10%+ Time on HR</h4>
                <p className="text-gray-700 mb-0">If people issues are consuming significant founder time, it's more efficient to bring in expert help. Your time is better spent on product, customers, and fundraising.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What They Do for Startups */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Responsibilities</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What Fractional HR Does for Startups</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-6">
              <div className="bg-white p-8 border-2 border-gray-900">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-4">1. Build HR Foundations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Create compliant <a href="https://www.cipd.org/uk/knowledge/factsheets/employment-law-factsheet/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">employment contracts</a> (fixing risky template ones)</li>
                  <li>• Develop employee handbook with key policies</li>
                  <li>• Set up basic HRIS for employee records</li>
                  <li>• Implement proper onboarding process</li>
                  <li>• Create offer letters, contract amendments, exit letters</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4 mb-0"><strong>Typical timeline:</strong> 2-3 months to establish basics</p>
              </div>

              <div className="bg-white p-8 border-l-4 border-pink-500">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-4">2. Ensure UK Employment Compliance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <a href="https://www.gov.uk/employment-contracts-and-conditions" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">Written statement of particulars</a> compliance</li>
                  <li>• <a href="https://www.gov.uk/check-job-applicant-right-to-work" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">Right to work</a> checks and documentation</li>
                  <li>• Holiday and working time compliance</li>
                  <li>• GDPR and employee data protection</li>
                  <li>• Avoid common startup compliance mistakes</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4 mb-0"><strong>Risk avoided:</strong> Tribunal claims averaging £8,500-£50,000</p>
              </div>

              <div className="bg-white p-8 border-l-4 border-gray-300">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-4">3. Professionalise Hiring</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Create <a href="https://www.cipd.org/uk/knowledge/guides/recruitment/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">structured interview processes</a></li>
                  <li>• Develop job descriptions and levelling frameworks</li>
                  <li>• Implement assessment methods that work</li>
                  <li>• Build employer brand basics</li>
                  <li>• Train founders and managers on hiring</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4 mb-0"><strong>Impact:</strong> Better hires, faster ramp, lower turnover</p>
              </div>

              <div className="bg-white p-8 border-l-4 border-gray-300">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-4">4. Culture & Performance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Articulate and codify company values</li>
                  <li>• Design performance feedback processes</li>
                  <li>• Run initial engagement pulse surveys</li>
                  <li>• Create recognition and reward approaches</li>
                  <li>• Support founders with difficult conversations</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4 mb-0"><strong>Outcome:</strong> Intentional culture vs accidental culture</p>
              </div>

              <div className="bg-white p-8 border-l-4 border-pink-500">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-4">5. Handle Early ER Issues</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Manage first <a href="https://www.acas.org.uk/managing-performance" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">performance problems</a> properly</li>
                  <li>• Navigate probation period decisions</li>
                  <li>• Handle sensitive exits professionally</li>
                  <li>• Respond to early <a href="https://www.acas.org.uk/grievance-procedure-step-by-step" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">grievances</a> correctly</li>
                  <li>• Advise on team restructures</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4 mb-0"><strong>Critical:</strong> One mishandled exit can cost £25,000+ and damage employer brand</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Startup Stage Pricing */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional HR Cost by Startup Stage</h2>
          </div>

          <div className="overflow-x-auto my-10">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-900">
                  <th className="p-4 text-left">Stage</th>
                  <th className="p-4 text-left">Team Size</th>
                  <th className="p-4 text-left">HR Time Needed</th>
                  <th className="p-4 text-left">Monthly Cost</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="p-4 font-semibold">Pre-Seed</td>
                  <td className="p-4">5-15 people</td>
                  <td className="p-4">0.5-1 day/week</td>
                  <td className="p-4">£1,500-£4,000</td>
                </tr>
                <tr className="border-b bg-pink-50">
                  <td className="p-4 font-semibold">Seed</td>
                  <td className="p-4">15-30 people</td>
                  <td className="p-4">1 day/week</td>
                  <td className="p-4 text-pink-600 font-bold">£3,500-£5,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Series A</td>
                  <td className="p-4">30-60 people</td>
                  <td className="p-4">1.5-2 days/week</td>
                  <td className="p-4">£5,000-£8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Series B</td>
                  <td className="p-4">60-120 people</td>
                  <td className="p-4">2-3 days/week</td>
                  <td className="p-4">£8,000-£12,000</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Series B+</td>
                  <td className="p-4">120+ people</td>
                  <td className="p-4 text-gray-600">Consider full-time HR Director</td>
                  <td className="p-4 text-gray-600">£130k-£180k/year</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 text-gray-900 p-8 my-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sweet Spot: Seed to Series A</h3>
            <p className="text-gray-600 mb-4">
              The PERFECT time for fractional HR is <strong className="text-white">post-Seed, pre-Series A</strong>. You have 20-40 people, you're hiring regularly, and you need professional HR but can't justify £150k+ full-time. <a href="https://www.scaleupinstitute.org.uk/scaleup-programmes/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Scaling companies</a> at this stage benefit most from fractional expertise.
            </p>
            <div className="bg-white/10 p-6">
              <p className="text-white font-semibold mb-2">Typical Engagement:</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• 1 day/week for 12-18 months</li>
                <li>• £42k-£60k total cost</li>
                <li>• Saves £90k-£120k vs full-time HR Director</li>
                <li>• Builds complete HR infrastructure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI for Startups */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Value</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">ROI: Real Startup Examples</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div className="bg-white p-8 border-l-4 border-pink-500">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-4">SaaS Startup - Avoided Tribunal</h3>
                <p className="text-gray-700 mb-2"><strong>Situation:</strong> 25-person SaaS company. Employee performance issue escalating. Founder about to dismiss without proper process.</p>
                <p className="text-gray-700 mb-2"><strong>Fractional HR Action:</strong> Implemented proper <a href="https://www.acas.org.uk/performance-management" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">performance improvement plan</a>, documented everything correctly, managed exit with settlement agreement.</p>
                <p className="text-gray-700 mb-2"><strong>Cost:</strong> £12,000 (3-month engagement, 1 day/week)</p>
                <p className="text-gray-700 mb-2"><strong>Outcome:</strong> Clean exit with settlement agreement. Avoided £25,000+ tribunal claim + £15,000 legal fees + 6 months founder distraction.</p>
                <p className="text-pink-600 font-bold">ROI: 3-4x (£40k+ saved for £12k investment)</p>
              </div>

              <div className="bg-white p-8 border-l-4 border-gray-900">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-4">FinTech - Series A Due Diligence</h3>
                <p className="text-gray-700 mb-2"><strong>Situation:</strong> 35-person FinTech raising Series A. No proper employment contracts, no handbook, compliance gaps.</p>
                <p className="text-gray-700 mb-2"><strong>Fractional HR Action:</strong> Built complete HR infrastructure in 4 months: new contracts for all employees, comprehensive handbook, HRIS, <a href="https://www.gov.uk/browse/employing-people" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">compliance audit</a>.</p>
                <p className="text-gray-700 mb-2"><strong>Cost:</strong> £20,000 (4-month engagement, 1.5 days/week)</p>
                <p className="text-gray-700 mb-2"><strong>Outcome:</strong> Passed investor DD with no HR issues. Successfully raised £8M Series A. Investor specifically noted "professional HR setup for company this size."</p>
                <p className="text-pink-600 font-bold">ROI: Enabled funding round—invaluable</p>
              </div>

              <div className="bg-white p-8 border-l-4 border-pink-500">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-4">E-Commerce - Reduced Bad Hires</h3>
                <p className="text-gray-700 mb-2"><strong>Situation:</strong> 40-person e-commerce startup. High turnover (35%). Several recent bad hires costing £30k+ each in replacement costs.</p>
                <p className="text-gray-700 mb-2"><strong>Fractional HR Action:</strong> Redesigned hiring process, implemented structured interviews, created <a href="https://www.cipd.org/uk/knowledge/factsheets/competency-factsheet/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">competency framework</a>, trained hiring managers.</p>
                <p className="text-gray-700 mb-2"><strong>Cost:</strong> £35,000 (8-month engagement, 1 day/week)</p>
                <p className="text-gray-700 mb-2"><strong>Outcome:</strong> Turnover dropped to 18%. Quality of hires improved significantly. Saved estimated £120,000 in year-one bad hire and replacement costs.</p>
                <p className="text-pink-600 font-bold">ROI: 3.4x (£120k saved for £35k investment)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Interactive Tool</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Calculate Your Startup HR Costs</h2>
          </div>
          <RoleCalculator role="hr" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ skipSchema={true} items={STARTUP_HR_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-50 text-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready for Fractional HR for Your Startup?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Find experienced startup HR leaders who've scaled companies from Seed to Series C. Resources from <a href="https://www.enterprisenation.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Enterprise Nation</a> and <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IoD</a> can also support your growth journey.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-hr-jobs-uk" className="px-8 py-4 bg-pink-500 text-white font-bold uppercase tracking-wider hover:bg-pink-400 transition-colors">
              Find Startup HR Leaders
            </Link>
            <Link href="/fractional-hr-cost" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              Calculate Costs
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
              <Link href="/fractional-hr-cost" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Cost Guide</Link>
              <Link href="/fractional-hr-director" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Director</Link>
              <Link href="/what-is-fractional-hr" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">What is Fractional HR?</Link>
              <Link href="/fractional-hr-services" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
