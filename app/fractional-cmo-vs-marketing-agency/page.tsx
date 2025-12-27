import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { StrategicComparisonInfographic, ComparisonData } from '@/components/infographics/StrategicComparisonInfographic'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CMO vs Agency 2025',
  description: 'Fractional CMO vs marketing agency comparison. Costs, when to use each, can you use both?',
  keywords: 'fractional cmo vs marketing agency, fractional cmo vs agency, cmo vs marketing agency, should i hire cmo or agency',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cmo-vs-marketing-agency',
  },
  openGraph: {
    title: 'Fractional CMO vs Marketing Agency: Complete Comparison',
    description: 'Should you hire a fractional CMO or marketing agency? Complete comparison with costs, pros/cons, and when to use each.',
    url: 'https://fractional.quest/fractional-cmo-vs-marketing-agency',
  },
}

const faqItems = [
  {
    question: 'What\'s the main difference between a fractional CMO and marketing agency?',
    answer: 'A fractional CMO is a strategic leader who owns your entire marketing function—setting strategy, building teams, managing budgets, and driving results. A marketing agency is a vendor that executes specific tactics (ads, content, SEO) based on your direction. As the <a href="https://www.cim.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Chartered Institute of Marketing</a> emphasizes, CMOs lead, agencies execute.',
  },
  {
    question: 'Is a fractional CMO more expensive than a marketing agency?',
    answer: 'Depends on scope. Fractional CMOs cost £70k-£140k/year for strategic leadership. Full-service agencies cost £5k-£20k/month (£60k-£240k/year) for execution. Many companies use both: fractional CMO for strategy + agency for execution, which can be more cost-effective than either alone.',
  },
  {
    question: 'Can I use a fractional CMO and marketing agency together?',
    answer: 'Yes, and this is actually the ideal setup for many companies. The fractional CMO sets strategy, manages the agency, ensures work aligns with goals, and owns results. The agency executes tactics at scale. This combines strategic leadership with specialized execution, a model supported by <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors</a> research on flexible leadership.',
  },
  {
    question: 'When should I hire a fractional CMO instead of an agency?',
    answer: 'Hire a fractional CMO when: you need strategic direction (not just execution), your founder is overwhelmed with marketing, you have a marketing team that needs leadership, agencies aren\'t delivering results because there\'s no strategy, or you\'re preparing for growth/fundraising.',
  },
  {
    question: 'When should I hire a marketing agency instead of a fractional CMO?',
    answer: 'Hire an agency when: you have clear strategy but lack execution resources, you need specialized skills (e.g., advanced paid ads, SEO, creative), you want to scale a specific channel quickly, or you have strong internal leadership but need extra hands.',
  },
  {
    question: 'Do marketing agencies provide strategic leadership?',
    answer: 'Some agencies offer strategic consulting, but they\'re fundamentally execution partners, not internal leaders. They won\'t hire your team, sit in leadership meetings, own your P&L, or make hard prioritization calls across all marketing. That\'s what CMOs do.',
  },
]

const cmoComparisonData: ComparisonData = {
  role: 'CMO',
  labels: {
    fullTime: 'Marketing Agency',
    fractional: 'Fractional CMO'
  },
  fullTime: {
    baseSalary: 120000,
    bonusesBenefits: 0,
    recruitmentTraining: 0,
    hiddenCosts: 0,
    total: 120000,
  },
  fractional: {
    fee: 104000,
    total: 104000,
    daysPerWeek: 2,
  },
  stats: [
    { label: 'Strategic Leadership', full: 30, frac: 95 },
    { label: 'Execution Power', full: 95, frac: 60 },
    { label: 'Cost Efficiency', full: 50, frac: 90 },
    { label: 'Internal Integration', full: 20, frac: 95 },
    { label: 'Specialized Skills', full: 95, frac: 70 },
    { label: 'Scalability', full: 95, frac: 70 },
  ],
  strengths: {
    fractional: 'Embedded leadership that owns strategy, builds internal teams, and drives business-wide growth objectives beyond campaign metrics.',
    fullTime: 'Turnkey resources and specialized channel expertise (SEO, Ads, Content) with proven execution playbooks and high scalability.',
  }
}

export default function FractionalCMOvsAgencyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-500 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/fractional-cmo" className="text-teal-100 hover:text-white mb-8 inline-flex items-center text-sm">
            <span className="mr-2">←</span> Back to Fractional CMO Guide
          </Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-white text-teal-600 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Comparison Guide
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional CMO vs<br />
              <span className="text-teal-200">Marketing Agency</span>
            </h1>
            <p className="text-2xl md:text-3xl text-teal-50 leading-relaxed font-light mb-10">
              Complete comparison to help you decide: strategic leadership vs tactical execution, and why many companies use both.
            </p>
            <div className="flex flex-wrap gap-10 mb-12">
              <div>
                <div className="text-5xl font-black text-white">Leadership</div>
                <div className="text-teal-100 text-sm uppercase tracking-wider mt-1">vs Execution</div>
              </div>
              <div>
                <div className="text-5xl font-black text-white">Internal</div>
                <div className="text-teal-100 text-sm uppercase tracking-wider mt-1">vs External</div>
              </div>
              <div>
                <div className="text-5xl font-black text-white">Both?</div>
                <div className="text-teal-100 text-sm uppercase tracking-wider mt-1">Yes, Often</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-teal-50 border-b-4 border-teal-500">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <StrategicComparisonInfographic data={cmoComparisonData} />
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-teal-200 mt-12">
            <div className="text-sm font-bold uppercase tracking-wider text-teal-600 mb-4">TL;DR</div>
            <h2 className="text-3xl font-black text-gray-900 mb-6">The Core Difference</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fractional CMO</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Strategic Leader</strong> who owns your entire marketing function. Sets direction, builds teams, manages budgets, and is accountable for results.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Embedded in your company</li>
                  <li>✓ Owns marketing strategy</li>
                  <li>✓ Builds and leads teams</li>
                  <li>✓ Accountable for revenue</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Marketing Agency</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Execution Partner</strong> that delivers specialized tactics (ads, SEO, content) based on your strategy. Vendor relationship, not leadership.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ External service provider</li>
                  <li>✓ Executes specific tactics</li>
                  <li>✓ Specialized capabilities</li>
                  <li>✓ Scalable resources</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-6 bg-teal-600 text-white rounded-lg text-center">
              <p className="text-xl font-bold">
                Best Setup for Most Companies: Fractional CMO (strategy) + Agency (execution)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-3 block">Detailed Comparison</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Side-by-Side Breakdown</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-50 border-b-2 border-teal-600">
                  <th className="text-left p-6 font-bold text-gray-900 w-1/3">Category</th>
                  <th className="text-left p-6 font-bold text-gray-900 bg-teal-100">Fractional CMO</th>
                  <th className="text-left p-6 font-bold text-gray-900">Marketing Agency</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-6 font-semibold text-gray-900">Role</td>
                  <td className="p-6 bg-teal-50">Strategic leader & executive</td>
                  <td className="p-6">Tactical execution partner</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-6 font-semibold text-gray-900">Relationship</td>
                  <td className="p-6 bg-teal-50">Embedded team member, internal</td>
                  <td className="p-6">External vendor</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-6 font-semibold text-gray-900">Primary Focus</td>
                  <td className="p-6 bg-teal-50">Strategy, leadership, team building</td>
                  <td className="p-6">Campaign execution, deliverables</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-6 font-semibold text-gray-900">Accountability</td>
                  <td className="p-6 bg-teal-50">Owns marketing results & revenue</td>
                  <td className="p-6">Delivers on SOW & KPIs</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-6 font-semibold text-gray-900">Team Management</td>
                  <td className="p-6 bg-teal-50">Hires, manages, develops your team</td>
                  <td className="p-6">Manages their own team only</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-6 font-semibold text-gray-900">Strategic Input</td>
                  <td className="p-6 bg-teal-50">Sets the entire marketing strategy</td>
                  <td className="p-6">Provides channel-specific recommendations</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-6 font-semibold text-gray-900">Budget Ownership</td>
                  <td className="p-6 bg-teal-50">Manages entire marketing budget</td>
                  <td className="p-6">Manages their specific project budget</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-6 font-semibold text-gray-900">Scope</td>
                  <td className="p-6 bg-teal-50">Full marketing function</td>
                  <td className="p-6">Specific channels or tactics</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-6 font-semibold text-gray-900">Cost</td>
                  <td className="p-6 bg-teal-50">£70k-£140k/year (2 days/week)</td>
                  <td className="p-6">£5k-£20k/month (£60k-£240k/year)</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-6 font-semibold text-gray-900">Commitment</td>
                  <td className="p-6 bg-teal-50">3-12 months, renewable</td>
                  <td className="p-6">3-12 months, project-based</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-6 font-semibold text-gray-900">Time Investment</td>
                  <td className="p-6 bg-teal-50">1-3 days/week with you</td>
                  <td className="p-6">Variable, works on multiple clients</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-6 font-semibold text-gray-900">Best For</td>
                  <td className="p-6 bg-teal-50">Strategic direction, leadership gaps</td>
                  <td className="p-6">Scaling specific channels, execution</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When to Choose Each */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-3 block">Decision Framework</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">When to Choose Each</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Choose Fractional CMO */}
            <div className="bg-teal-50 p-10 rounded-lg border-2 border-teal-400">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose a Fractional CMO When:</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">You need strategic direction.</strong> You're spending on marketing but lack a cohesive <a href="https://www.cim.co.uk/content-hub/resources/marketing-strategy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">strategy</a> or clear positioning.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Founder-led marketing has hit a wall.</strong> CEO is overwhelmed and needs to delegate <a href="https://www.iod.com/resources/management/leadership/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">marketing leadership</a>.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">You have a team with no leader.</strong> 2-5 marketers executing without strategic oversight or prioritization.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Agencies aren't delivering results.</strong> You've hired agencies but they work in silos without strategic alignment.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Preparing for growth or fundraising.</strong> Need professional marketing function to <a href="https://www.scaleupinstitute.org.uk/scaleup-essentials/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">scale</a> or impress investors.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Building marketing from scratch.</strong> No marketing function exists; need someone to build it end-to-end.
                  </div>
                </li>
              </ul>
            </div>

            {/* Choose Marketing Agency */}
            <div className="bg-white p-10 rounded-lg border-2 border-gray-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose a Marketing Agency When:</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">You have clear strategy.</strong> You know what to do, just need skilled people to execute it at scale.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Need specialized skills.</strong> Require expertise you don't have in-house (e.g., advanced <a href="https://www.ipa.co.uk/knowledge/ipa-effectiveness-awards" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">SEO, paid ads</a>, video production).
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Scaling a single channel.</strong> Want to 10x your SEO, paid ads, or content without hiring full-time.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Project-based work.</strong> Rebrand, website redesign, or campaign launch with defined start/end.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Resource constraints.</strong> Strong internal leadership but need extra hands for execution.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Speed to market.</strong> Need campaigns live quickly with proven playbooks and turnkey execution.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Can You Use Both */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-3 block">Best Practice</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Can You Use Both Together?</h2>
            <p className="text-2xl text-teal-600 font-bold">Yes—and this is often the ideal setup.</p>
          </div>

          <div className="bg-teal-50 p-10 rounded-lg border-2 border-teal-400 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">The Fractional CMO + Agency Model</h3>
            <p className="text-lg text-gray-700 mb-6">
              Many successful companies use a <strong>fractional CMO for strategy and leadership</strong> plus
              <strong> specialized agencies for execution</strong>. This combines the best of both worlds and aligns with <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexible working</a> best practices.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Fractional CMO Handles:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Overall marketing strategy & positioning</li>
                  <li>• Channel prioritization & <a href="https://www.cipd.org.uk/knowledge/fundamentals/people/performance/factsheets" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">budget allocation</a></li>
                  <li>• Agency selection, briefs, and management</li>
                  <li>• Team hiring and leadership</li>
                  <li>• Performance tracking & optimization</li>
                  <li>• Reporting to CEO/board</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Agencies Handle:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Paid advertising (Google, Meta, LinkedIn)</li>
                  <li>• SEO implementation & link building</li>
                  <li>• <a href="https://www.cim.co.uk/qualifications/content-marketing/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Content creation</a> at scale (blog, video, social)</li>
                  <li>• Creative design (ads, landing pages, emails)</li>
                  <li>• Technical implementation (website, automation)</li>
                  <li>• Specialized tactics (PR, influencer, partnerships)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 text-gray-900 p-10 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Real Example: Series A SaaS Company</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="text-teal-400 font-bold mb-2">ROLE</div>
                <div>Fractional CMO (2 days/week)</div>
              </div>
              <div>
                <div className="text-teal-400 font-bold mb-2">COST</div>
                <div>£104k/year</div>
              </div>
              <div>
                <div className="text-teal-400 font-bold mb-2">RESPONSIBILITIES</div>
                <div>Strategy, team, agencies</div>
              </div>
            </div>
            <div className="border-t border-gray-700 my-6"></div>
            <div className="grid md:grid-cols-3 gap-6 text-sm mb-6">
              <div>
                <div className="text-teal-400 font-bold mb-2">AGENCIES</div>
                <div>SEO agency, Paid ads agency, Content freelancers</div>
              </div>
              <div>
                <div className="text-teal-400 font-bold mb-2">COST</div>
                <div>£60k/year total</div>
              </div>
              <div>
                <div className="text-teal-400 font-bold mb-2">RESPONSIBILITIES</div>
                <div>Execution only</div>
              </div>
            </div>
            <div className="border-t border-teal-600 pt-6">
              <div className="text-lg font-bold">Total Marketing Investment: £164k/year</div>
              <p className="text-gray-300 mt-2">
                vs £200k-£300k for full-time CMO + in-house team to achieve same output.
                Saved £50k-£140k while getting strategic leadership + specialized execution, a model increasingly popular with <a href="https://www.british-business-bank.co.uk/research/small-business-report/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">growing UK businesses</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-3 block">Avoid These</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Common Mistakes to Avoid</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                mistake: 'Hiring an agency when you need strategic leadership',
                why: 'Agencies execute tactics, not strategy. If you don\'t know what to do, they can\'t help—they need your direction. Hiring an SEO agency won\'t solve "we don\'t have a positioning strategy." As the <a href="https://www.ipa.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IPA</a> notes, strategy must precede execution.',
                fix: 'Get strategic clarity first (fractional CMO or consultant), then hire agencies to execute that strategy.',
              },
              {
                mistake: 'Hiring a fractional CMO when you just need execution',
                why: 'If you have clear strategy and just need someone to run ads or write content, a CMO is overkill and expensive. You need doers, not strategists.',
                fix: 'Hire specialized agencies or freelancers for execution. Save CMO for when you need leadership.',
              },
              {
                mistake: 'Expecting agencies to "own" marketing results',
                why: 'Agencies deliver on their SOW (e.g., "increase organic traffic by 30%"), but they don\'t own business outcomes. That\'s the CMO\'s job.',
                fix: 'CMO owns business results. Agency delivers channel-specific KPIs. Clear separation of accountability.',
              },
              {
                mistake: 'Hiring multiple agencies with no one coordinating',
                why: 'SEO agency, paid agency, and content agency working in silos = wasted budget, conflicting messages, no synergy. Research from <a href="https://www.ons.gov.uk/businessindustryandtrade/business/businessservices" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS</a> shows coordinated marketing drives better ROI.',
                fix: 'Fractional CMO acts as "client-side quarterback" to coordinate agencies and ensure strategic alignment.',
              },
              {
                mistake: 'Choosing based on cost alone',
                why: 'Cheap agency = junior talent, cookie-cutter approach. Cheap fractional CMO = lacks experience to drive results. You get what you pay for. <a href="https://www.cipd.org.uk/knowledge/strategy/organisational-development/factsheet" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Quality talent</a> drives better outcomes.',
                fix: 'Optimize for value, not cost. £10k/month for great agency or £1,200/day CMO pays back 10x with results.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 border-l-4 border-red-500 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">❌ {item.mistake}</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-bold text-gray-700 mb-1">Why it fails:</div>
                    <p className="text-gray-600">{item.why}</p>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-teal-700 mb-1">✓ The fix:</div>
                    <p className="text-gray-700">{item.fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Frequently Asked Questions</h2>
          <FAQ items={faqItems} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Need Strategic Leadership?
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Browse fractional CMOs who can set strategy, manage agencies, and drive real marketing results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-cmo-jobs-uk" className="px-10 py-5 bg-white text-teal-600 font-bold uppercase tracking-wider hover:bg-teal-50 transition-colors">
              Find a Fractional CMO
            </Link>
            <Link href="/fractional-cmo" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-teal-600 transition-colors">
              Complete CMO Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Related Resources</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-cmo" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">
                Fractional CMO Guide
              </Link>
              <Link href="/hire-fractional-cmo" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">
                How to Hire
              </Link>
              <Link href="/fractional-cmo-cost" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">
                CMO Cost
              </Link>
              <Link href="/what-does-a-fractional-cmo-do" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">
                What CMOs Do
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
