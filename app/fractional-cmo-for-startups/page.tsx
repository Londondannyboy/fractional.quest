import { Metadata } from 'next'
import Link from 'next/link'
import { RoleCalculator } from '@/components/RoleCalculator'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CMO for Startups: Why Startups Choose Part-Time Marketing Leadership | 2025',
  description: 'Complete guide to hiring a fractional CMO for startups. Why startups need fractional vs full-time, stage-by-stage breakdown (pre-seed to Series B), costs, equity models, and when to convert to full-time.',
  keywords: 'fractional cmo for startups, startup fractional cmo, fractional cmo seed stage, fractional cmo series a, startup marketing leadership',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cmo-for-startups',
  },
  openGraph: {
    title: 'Fractional CMO for Startups: Complete Guide',
    description: 'Why startups from pre-seed to Series B choose fractional CMOs. Stage-specific advice, costs, and equity models.',
    url: 'https://fractional.quest/fractional-cmo-for-startups',
  },
}

const faqItems = [
  {
    question: 'Should a pre-seed startup hire a fractional CMO?',
    answer: 'Usually not. Pre-seed startups (pre-£500k ARR) should have founder-led marketing focused on finding PMF. Hiring a fractional CMO too early means paying £3k-£5k/month for strategic advice when you need hands-on execution. Wait until you have PMF, repeatable sales motion, and £500k+ ARR before bringing in a fractional CMO.',
  },
  {
    question: 'When should a startup hire a fractional CMO?',
    answer: 'Ideal timing: Post-Series A when you have £1M-£5M ARR, proven PMF, and need to scale customer acquisition systematically. Other triggers: founder-led marketing has hit a wall, you have a marketing team but no leadership, or you\'re preparing for Series B and need to professionalize marketing.',
  },
  {
    question: 'How much does a fractional CMO cost for startups?',
    answer: 'Seed/Series A startups pay £700-£1,000/day (£70k-£104k annually for 2 days/week). Series B+ pay £1,000-£1,400/day (£104k-£145k annually). Some CMOs take 0.1-0.25% equity in exchange for reduced day rates. Still 40-60% cheaper than full-time CMO at £150k-£250k+ with equity.',
  },
  {
    question: 'Should I offer equity to a fractional CMO?',
    answer: 'Optional but increasingly common. For long-term engagements (12+ months), offer 0.1-0.25% advisory shares with quarterly vesting. This aligns incentives and can reduce day rate by 10-15%. Ensure vesting accelerates on exit or if they convert to full-time.',
  },
  {
    question: 'Can we convert a fractional CMO to full-time later?',
    answer: 'Yes, and many startups do this. Common transition points: Series B fundraising, £5M-£10M ARR, or when marketing team exceeds 8-10 people. Discuss upfront—most fractional CMOs are open to conversion if timing and package (salary + equity) make sense.',
  },
  {
    question: 'What\'s the minimum engagement for a startup fractional CMO?',
    answer: 'Start with 3-month trial at 1-2 days/week. This gives the CMO time to audit, strategize, and deliver early wins. If it works, extend to 12 months. Most meaningful impact happens after 6-12 months as systems scale and team grows.',
  },
]

export default function FractionalCMOForStartupsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-500 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/fractional-cmo" className="text-purple-100 hover:text-white mb-8 inline-flex items-center text-sm">
            <span className="mr-2">←</span> Back to Fractional CMO Guide
          </Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-white text-purple-600 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Startup Guide
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional CMO<br />
              <span className="text-purple-200">for Startups</span>
            </h1>
            <p className="text-2xl md:text-3xl text-purple-50 leading-relaxed font-light mb-10">
              Why startups from seed to Series B choose fractional marketing leadership over full-time hires.
            </p>
            <div className="flex flex-wrap gap-10 mb-12">
              <div>
                <div className="text-5xl font-black text-white">50%</div>
                <div className="text-purple-100 text-sm uppercase tracking-wider mt-1">Cost Savings</div>
              </div>
              <div>
                <div className="text-5xl font-black text-white">Series A</div>
                <div className="text-purple-100 text-sm uppercase tracking-wider mt-1">Ideal Stage</div>
              </div>
              <div>
                <div className="text-5xl font-black text-white">12-24mo</div>
                <div className="text-purple-100 text-sm uppercase tracking-wider mt-1">Typical Engagement</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="#when-to-hire" className="px-10 py-5 bg-white text-purple-600 font-bold uppercase tracking-wider hover:bg-purple-50 transition-colors text-lg">
                When to Hire
              </Link>
              <Link href="#cost" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-purple-600 transition-colors text-lg">
                See Costs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Startups Choose Fractional */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-3 block">Why Fractional?</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Why Startups Choose Fractional CMOs</h2>
            <p className="text-xl text-gray-600">
              Startups face unique constraints. Fractional CMOs solve the "too expensive for full-time, too important to ignore" problem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                reason: 'Cash Preservation',
                description: 'A full-time CMO costs £150k-£250k in salary + £40k-£60k in benefits, equity, and overhead. That\'s £200k-£300k+ annually. A fractional CMO delivers strategic leadership for £70k-£140k—saving you £100k+ to invest in product, engineering, or customer acquisition. According to the <a href="https://www.britishbusinessbank.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Business Bank</a>, cash preservation is critical for early-stage startup survival.',
                impact: '£100k+ saved annually',
                icon: '💰',
              },
              {
                reason: 'Speed to Hire',
                description: 'Recruiting a full-time CMO takes 3-6 months. Most startups can\'t wait that long—growth stalls, campaigns drift, and competitors gain ground. Fractional CMOs start within 1-2 weeks with proven playbooks ready to deploy immediately.',
                impact: '10x faster hiring',
                icon: '⚡',
              },
              {
                reason: 'Experienced Expertise',
                description: 'Fractional CMOs bring 15-20 years of experience scaling startups from £1M to £10M+ ARR. They\'ve done it before at 3-5 companies, know what works, and avoid rookie mistakes. You get seasoned expertise without paying £200k+ for someone still learning. The <a href="https://www.cim.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Chartered Institute of Marketing</a> recognizes this senior-level experience as crucial for startup growth.',
                impact: '15-20 years experience',
                icon: '🎯',
              },
              {
                reason: 'Flexible Scaling',
                description: 'Startups have variable needs. Increase to 3 days/week for product launches or fundraising, reduce to 1 day/week during quiet periods. No long-term employment risk—exit with 30 days notice if priorities change or budget tightens.',
                impact: '1-3 days/week flexible',
                icon: '📊',
              },
              {
                reason: 'Cross-Pollinated Insights',
                description: 'Fractional CMOs work with 2-4 startups simultaneously. They see what\'s working across different models, markets, and stages. You get best practices from the wider ecosystem, not just one person\'s limited experience. <a href="https://scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute</a> research shows that cross-industry learning accelerates startup growth.',
                impact: '3-5 companies\' insights',
                icon: '🔄',
              },
              {
                reason: 'Lower Risk',
                description: 'Hiring a full-time CMO is high-risk: 6-month onboarding, long notice periods, severance costs if it doesn\'t work. Fractional engagements start with 3-month trials—low commitment, fast iteration, clean exit if needed.',
                impact: '30-day notice period',
                icon: '✅',
              },
            ].map((item, index) => (
              <div key={index} className="bg-purple-50 p-8 border-l-4 border-purple-500">
                <div className="flex items-start gap-6">
                  <div className="text-5xl">{item.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.reason}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{item.description}</p>
                    <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      {item.impact}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stage-by-Stage Breakdown */}
      <section id="when-to-hire" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-3 block">Stage-by-Stage</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">When to Hire a Fractional CMO</h2>
            <p className="text-xl text-gray-600">
              The right timing depends on your stage, ARR, and marketing maturity. Here's what works at each stage.
            </p>
          </div>

          <div className="space-y-10">
            {/* Pre-Seed / Seed */}
            <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-gray-200">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-3xl">
                  🌱
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-3xl font-black text-gray-900">Pre-Seed / Seed</h3>
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">Too Early</span>
                  </div>
                  <div className="text-gray-600 mb-4">£0-£500k ARR | Pre-PMF | 1-5 employees</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">What You Need Instead:</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• <strong>Founder-led marketing:</strong> Founder should own messaging, positioning, early customers</li>
                    <li>• <strong>Hands-on execution:</strong> You need doers (freelance content writers, performance marketers), not strategists</li>
                    <li>• <strong>PMF experiments:</strong> Rapid iteration on channels, messaging, ICP—too early for systematic strategy</li>
                    <li>• <strong>Low-cost tactics:</strong> Content, community, founder brand, organic channels (see <a href="https://www.startups.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Startups.co.uk</a> for early-stage marketing guides)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Why Fractional Doesn't Work Yet:</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>❌ No PMF = Strategy changes weekly (CMO can't keep up)</li>
                    <li>❌ Limited budget means every £ must go to execution, not leadership</li>
                    <li>❌ Founder should own marketing to deeply understand customers</li>
                    <li>❌ You need tactical help, not strategic oversight</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Post-Seed / Early Series A */}
            <div className="bg-purple-50 p-10 rounded-lg shadow-md border-2 border-purple-400">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0 w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-3xl">
                  🚀
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-3xl font-black text-gray-900">Post-Seed / Early Series A</h3>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">Perfect Timing</span>
                  </div>
                  <div className="text-gray-600 mb-4">£500k-£3M ARR | PMF Proven | 10-30 employees</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Why Now Is Perfect:</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>✅ <strong>PMF validated:</strong> You know who buys and why—time to scale acquisition systematically</li>
                    <li>✅ <strong>Founder-led marketing plateaued:</strong> CEO needs to focus on product, fundraising, hiring (see <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors</a> on leadership prioritization)</li>
                    <li>✅ <strong>Marketing budget growing:</strong> £10k-£50k/month but no one strategically managing it</li>
                    <li>✅ <strong>First marketing hires:</strong> Content person or performance marketer needs leadership (recruitment best practices from <a href="https://www.cipd.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD</a>)</li>
                    <li>✅ <strong>Preparing for Series A/B:</strong> Investors want to see professional marketing function</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">What Fractional CMO Does:</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Build marketing strategy from scratch (positioning, ICP, channel mix)</li>
                    <li>• Professionalize founder-led efforts (messaging, brand, website using <a href="https://www.ipa.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IPA</a> effectiveness frameworks)</li>
                    <li>• Set up measurement systems (analytics, attribution, dashboards)</li>
                    <li>• Hire first 2-3 marketing team members</li>
                    <li>• Launch systematic demand gen engine (SEO, paid, content, partnerships)</li>
                    <li>• Report to investors/board with credible marketing narrative</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-white p-6 rounded-lg border-2 border-purple-200">
                <p className="text-gray-900 font-bold mb-2">Typical Engagement:</p>
                <p className="text-gray-700 text-sm">
                  2 days/week for 12-18 months. Cost: £70k-£104k annually. Transition to full-time CMO when you hit £3M-£5M ARR or raise Series B.
                </p>
              </div>
            </div>

            {/* Series A / B */}
            <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-gray-200">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-3xl">
                  📈
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-3xl font-black text-gray-900">Series A / B</h3>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">Still Makes Sense</span>
                  </div>
                  <div className="text-gray-600 mb-4">£3M-£10M ARR | Scaling Fast | 30-100 employees</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">When Fractional Still Works:</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>✅ Strong marketing team in place (3-8 people) but no senior leader</li>
                    <li>✅ Budget constraints: Can't justify £200k+ full-time CMO yet (growth funding options via <a href="https://www.bvca.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">BVCA</a>)</li>
                    <li>✅ Transitional period: Between CMOs or building to full-time</li>
                    <li>✅ Specialist needs: PLG expert, brand positioning, relaunch project</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">When to Hire Full-Time Instead:</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>⚠️ Marketing team exceeds 8-10 people (needs daily leadership)</li>
                    <li>⚠️ Hitting £10M+ ARR (full-time CMO becomes cost-effective)</li>
                    <li>⚠️ Board demands full-time executive presence</li>
                    <li>⚠️ Complex multi-product or multi-market expansion</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-900 font-bold mb-2">Typical Engagement:</p>
                <p className="text-gray-700 text-sm">
                  2-3 days/week for 6-18 months. Cost: £104k-£145k annually. Often transitions to full-time hire as company scales past £10M ARR.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-purple-600 text-white p-10 rounded-lg text-center">
            <p className="text-2xl font-bold mb-3">Golden Rule for Startups</p>
            <p className="text-xl font-light">
              Hire a fractional CMO when you have <strong className="font-bold">proven PMF</strong>, <strong className="font-bold">£500k+ ARR</strong>,
              and <strong className="font-bold">founder-led marketing has hit a wall</strong>. Too early = wasted money. Too late = missed growth. Learn more about scaling best practices from <a href="https://technation.io/" target="_blank" rel="noopener noreferrer" className="text-purple-100 hover:text-white underline">Tech Nation</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Startup Pricing */}
      <section id="cost" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-3 block">Startup Pricing</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">What Startups Pay for Fractional CMOs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pricing varies by stage, with many fractional CMOs offering equity options for early-stage startups.
            </p>
          </div>

          <RoleCalculator role="cmo" />

          <div className="mt-16 prose prose-lg prose-gray max-w-none">
            <h3 className="text-2xl font-bold text-gray-900">Startup-Specific Pricing Models</h3>

            <div className="grid md:grid-cols-2 gap-8 my-10 not-prose">
              <div className="bg-purple-50 p-8 rounded-lg border-2 border-purple-200">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Cash-Only Model</h4>
                <div className="mb-6">
                  <div className="text-3xl font-black text-purple-600 mb-2">£700-£1,000/day</div>
                  <div className="text-gray-600 text-sm">Seed / Series A rates</div>
                </div>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Standard day rate with no equity</li>
                  <li>• 1-2 days/week = £70k-£104k annually</li>
                  <li>• Best for startups with strong cash position</li>
                  <li>• Clean exit if priorities change</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-8 rounded-lg border-2 border-purple-200">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Cash + Equity Model</h4>
                <div className="mb-6">
                  <div className="text-3xl font-black text-purple-600 mb-2">£600-£850/day</div>
                  <div className="text-gray-600 text-sm">+ 0.1-0.25% equity</div>
                </div>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Reduced day rate in exchange for advisory shares</li>
                  <li>• Quarterly or annual vesting over 2-4 years</li>
                  <li>• Aligns incentives for long-term growth</li>
                  <li>• Saves £15k-£30k cash annually</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-12">Equity Considerations for Startups</h3>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-8 my-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Should You Offer Equity?</h4>
              <p className="text-gray-700 mb-4">
                Offering 0.1-0.25% equity to a fractional CMO makes sense if:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>✅ You're cash-constrained but equity-rich (typical post-raise, see <a href="https://www.enterprisenation.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Enterprise Nation</a> funding guides)</li>
                <li>✅ You want long-term alignment (12+ month engagement)</li>
                <li>✅ The CMO has deep startup experience and high conviction in your vision</li>
                <li>✅ You can negotiate 10-15% day rate reduction in exchange</li>
              </ul>
              <p className="text-gray-700 mt-4 mb-0">
                <strong>Avoid equity if:</strong> It's a short-term project (3-6 months), the CMO doesn't add strategic value beyond execution, or your cap table is already crowded.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900">Startup vs Full-Time Cost Comparison</h3>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-purple-50 border-b-2 border-purple-600">
                    <th className="text-left p-4 font-bold text-gray-900">Cost Item</th>
                    <th className="text-left p-4 font-bold text-gray-900">Fractional CMO</th>
                    <th className="text-left p-4 font-bold text-gray-900">Full-Time CMO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 text-gray-900">Cash Compensation</td>
                    <td className="p-4 text-purple-700 font-bold">£70k-£104k/year</td>
                    <td className="p-4 text-gray-700">£150k-£200k/year</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 text-gray-900">Benefits & Pension</td>
                    <td className="p-4 text-purple-700 font-bold">£0</td>
                    <td className="p-4 text-gray-700">£22k-£30k</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 text-gray-900">Equity (typical)</td>
                    <td className="p-4 text-purple-700 font-bold">0-0.25%</td>
                    <td className="p-4 text-gray-700">0.5-2.0%</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 text-gray-900">Recruitment Fees</td>
                    <td className="p-4 text-purple-700 font-bold">£0</td>
                    <td className="p-4 text-gray-700">£37k-£50k (25% salary)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 text-gray-900">Notice / Severance Risk</td>
                    <td className="p-4 text-purple-700 font-bold">30 days</td>
                    <td className="p-4 text-gray-700">3-6 months</td>
                  </tr>
                  <tr className="bg-purple-100 font-bold">
                    <td className="p-4 text-gray-900">Total Year 1 Cost</td>
                    <td className="p-4 text-purple-700 text-lg">£70k-£104k</td>
                    <td className="p-4 text-gray-900 text-lg">£209k-£280k</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-purple-600 text-white p-8 rounded-lg text-center my-10">
              <div className="text-5xl font-black mb-3">£120k-£180k</div>
              <p className="text-xl">Year 1 savings with fractional vs full-time CMO</p>
              <p className="text-purple-200 mt-2">That's 6-18 months of runway for a seed-stage startup</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-3 block">Case Studies</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Startup Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real examples of startups that hired fractional CMOs and scaled successfully.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                company: 'B2B SaaS Startup',
                stage: 'Series A | £2M ARR → £8M ARR',
                engagement: '18 months, 2 days/week',
                challenge: 'Founder-led marketing plateaued at £2M ARR. No clear ICP, scattered channel efforts, CAC rising.',
                solution: 'Fractional CMO conducted ICP research using <a href="https://www.dma.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">DMA</a> best practices, built demand gen engine (SEO + paid), hired 3 marketers, implemented attribution.',
                results: [
                  'Scaled from £2M to £8M ARR in 18 months',
                  'Reduced CAC from £3,800 to £1,900 (50% improvement)',
                  'MQLs grew from 80/month to 320/month',
                  'Hired full-time CMO post-Series B',
                ],
                cost: 'Investment: £104k/year. Return: £6M incremental ARR.',
              },
              {
                company: 'FinTech Startup',
                stage: 'Seed | £800k ARR → £3.5M ARR',
                engagement: '14 months, 2 days/week',
                challenge: 'Strong product, no marketing expertise in founding team. Struggled with positioning and GTM for regulated industry.',
                solution: 'Fractional CMO repositioned product for compliance teams, launched thought leadership following <a href="https://www.cim.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIM</a> professional standards, built partnerships channel, created sales enablement.',
                results: [
                  'Grew from £800k to £3.5M ARR in 14 months',
                  'Landed 3 enterprise logos (£100k+ ACV each)',
                  'Built repeatable partnership motion (40% of pipeline)',
                  'Raised Series A with professional marketing narrative',
                ],
                cost: 'Investment: £91k total. Outcome: Successful £8M Series A raise.',
              },
            ].map((story, index) => (
              <div key={index} className="bg-white p-10 rounded-lg shadow-sm border-2 border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{story.company}</h3>
                <div className="text-purple-600 font-bold mb-1">{story.stage}</div>
                <div className="text-sm text-gray-500 mb-6">{story.engagement}</div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-700 text-sm">{story.challenge}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-700 text-sm">{story.solution}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">Results:</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    {story.results.map((result, idx) => (
                      <li key={idx}>✓ {result}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm font-bold text-purple-900">{story.cost}</p>
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
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Scale Your Startup?
          </h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
            Browse fractional CMOs with startup experience. Find someone who's scaled companies from £1M to £10M+ ARR.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-cmo-jobs-uk" className="px-10 py-5 bg-white text-purple-600 font-bold uppercase tracking-wider hover:bg-purple-50 transition-colors">
              Find a Startup CMO
            </Link>
            <Link href="/fractional-cmo" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-purple-600 transition-colors">
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
              <Link href="/fractional-cmo" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                Fractional CMO Guide
              </Link>
              <Link href="/fractional-cmo-cost" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                CMO Cost Guide
              </Link>
              <Link href="/hire-fractional-cmo" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                How to Hire
              </Link>
              <Link href="/fractional-cmo-services" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                CMO Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
