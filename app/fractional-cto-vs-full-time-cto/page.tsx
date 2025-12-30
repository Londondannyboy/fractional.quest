import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'
import { StrategicComparisonInfographic, ComparisonData } from '@/components/infographics/StrategicComparisonInfographic'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional vs Full-Time CTO',
  description: 'Fractional CTO vs Full-Time. Cost, commitment, when each model makes sense.',
  keywords: 'fractional cto vs full time, fractional vs full time cto, part time cto vs full time',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cto-vs-full-time-cto',
  },
  openGraph: {
    title: 'Fractional vs Full-Time CTO: Complete Comparison',
    description: 'Comprehensive comparison to help you choose between fractional and full-time CTO.',
    images: ['/images/fractional-vs-full-time-cto.jpg'],
    url: 'https://fractional.quest/fractional-cto-vs-full-time-cto',
  },
}

const COMPARISON_FAQS = [
  {
    question: "Is a Fractional CTO better than a full-time CTO?",
    answer: "Neither is universally better—it depends on your situation. Fractional CTOs are better for companies with £1M-£20M revenue, 5-20 engineers, who need strategic leadership 1-3 days/week and want 50-60% cost savings. Full-time CTOs are better for £20M+ revenue, 25+ engineers, complex daily operations, or when technology is core competitive advantage."
  },
  {
    question: "Can a Fractional CTO really replace a full-time CTO?",
    answer: "Fractional CTOs don't 'replace' full-time CTOs—they provide CTO-level strategic leadership in fewer days. For companies that don't need 40 hours weekly of CTO time, fractional provides the same strategic value at lower cost. But they're not suitable for daily operational management or complex organizations."
  },
  {
    question: "Do investors prefer full-time or fractional CTOs?",
    answer: "Seed and Series A investors are increasingly comfortable with fractional CTOs—they care about technical competence and credibility, not employment status. However, Series B+ investors typically expect full-time technical leadership. The key is having an experienced, credible technical leader who can handle due diligence."
  },
  {
    question: "When should I transition from fractional to full-time CTO?",
    answer: "Transition when: (1) Revenue exceeds £15-£20M, (2) Engineering team grows beyond 20-25 engineers, (3) Technology becomes so complex it requires daily CTO presence, (4) You're post-Series B with investor expectations for full-time executive team. Many companies keep fractional CTOs for years before transitioning."
  },
]

const ctoComparisonData: ComparisonData = {
  role: 'CTO',
  fullTime: {
    baseSalary: 210000,
    bonusesBenefits: 60000,
    recruitmentTraining: 45000,
    hiddenCosts: 0,
    total: 315000,
  },
  fractional: {
    fee: 120000,
    total: 120000,
    daysPerWeek: 2,
  },
  strengths: {
    fractional: 'Ideal for scaling engineering teams from 5-20 people, addressing technical debt, and providing Series A investor credibility.',
    fullTime: 'Required for 25+ engineers and complex AI/DeepTech daily oversight where technology is the core competitive advantage.',
  }
}

export default function FractionalVsFullTimeCTOPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 md:py-28 bg-white relative">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Fractional vs Full-Time CTO"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <Link href="/fractional-cto" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors text-sm tracking-wide">
            <span className="mr-2">←</span> Back to CTO Hub
          </Link>
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Comparison Guide</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Fractional vs<br />Full-Time CTO
            </h1>
            <p className="text-xl text-gray-600">Complete comparison to help you choose the right model for your company</p>
          </div>

          <StrategicComparisonInfographic data={ctoComparisonData} />

          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 mb-12">
            <p className="text-xl text-gray-900 leading-relaxed mb-0">
              The choice between <strong>fractional and full-time CTO</strong> depends on your company stage, engineering team size, and technical needs. Companies with £1M-£20M revenue and 5-20 engineers typically benefit from fractional CTOs (50-60% cost savings, same strategic value). Companies with £20M+ revenue and 25+ engineers usually need full-time CTOs for daily operational leadership.
            </p>
          </div>

          <div className="prose prose-lg prose-gray max-w-none">
            <h2 className="text-3xl font-black text-gray-900 mt-0 mb-6">Quick Comparison</h2>

            <div className="bg-white border-2 border-gray-900 p-8 my-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Fractional CTO</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✅ £85k-£160k annually (50-60% savings)</li>
                    <li>✅ 1-3 days/week strategic leadership</li>
                    <li>✅ 15-20+ years experience</li>
                    <li>✅ Start within 1-2 weeks</li>
                    <li>✅ Flexible scaling (30-60 day notice)</li>
                    <li>❌ Not for daily operations</li>
                    <li>❌ Limited availability</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4 mb-0"><strong>Best for:</strong> £1M-£20M revenue, 5-20 engineers, strategic needs</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Full-Time CTO</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✅ Full 5 days/week availability</li>
                    <li>✅ Daily operational leadership</li>
                    <li>✅ Full team immersion</li>
                    <li>✅ Equity alignment</li>
                    <li>❌ £250k-£350k+ total cost</li>
                    <li>❌ 3-6 months to hire</li>
                    <li>❌ 8-15 years experience (at your budget)</li>
                    <li>❌ Hard to replace if wrong fit</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4 mb-0"><strong>Best for:</strong> £20M+ revenue, 25+ engineers, complex operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Detailed Comparison</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Side-by-Side Comparison</h2>
          </div>
          <ServiceComparisonTable role="CTO" accentColor="blue" />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg prose-gray max-w-none">
            <h2 className="text-3xl font-black text-gray-900 mt-0 mb-6">Cost Comparison</h2>

            <div className="overflow-x-auto my-10">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-900">
                    <th className="p-4">Cost Component</th>
                    <th className="p-4">Fractional (2 days/wk)</th>
                    <th className="p-4">Full-Time</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Base Salary/Fee</td>
                    <td className="p-4 bg-blue-50">£85k-£160k</td>
                    <td className="p-4">£180k-£250k</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-semibold">Employer NI (13.8%)</td>
                    <td className="p-4 bg-blue-50">£0 (contractor)</td>
                    <td className="p-4">£25k-£35k</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Pension</td>
                    <td className="p-4 bg-blue-50">£0</td>
                    <td className="p-4">£9k-£25k</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-semibold">Benefits</td>
                    <td className="p-4 bg-blue-50">£0</td>
                    <td className="p-4">£5k-£15k</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Equity</td>
                    <td className="p-4 bg-blue-50">Minimal/None</td>
                    <td className="p-4">0.5-2% (£50k-£500k+ at exit)</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-semibold">Recruitment</td>
                    <td className="p-4 bg-blue-50">£0-£5k</td>
                    <td className="p-4">£36k-£50k (20% fee)</td>
                  </tr>
                  <tr className="bg-white font-bold">
                    <td className="p-4">TOTAL YEAR 1 COST</td>
                    <td className="p-4 bg-blue-50">£85k-£165k</td>
                    <td className="p-4">£255k-£375k</td>
                  </tr>
                  <tr className="bg-blue-50 font-bold text-blue-900">
                    <td className="p-4" colSpan={3}>SAVINGS: 50-60% with Fractional</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>For detailed cost analysis, see: <Link href="/fractional-cto-cost" className="text-blue-600 hover:text-blue-700 underline">Fractional CTO Cost Guide</Link>.</p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">Decision Framework: Which Should You Choose?</h3>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-8 my-10">
              <h4 className="text-xl font-bold text-gray-900 mb-4">✅ Choose Fractional CTO if:</h4>
              <ul className="space-y-2 text-gray-700 mb-0">
                <li>• Revenue £1M-£20M with 5-20 engineers</li>
                <li>• Need strategic leadership more than daily operations</li>
                <li>• Strong Tech Lead handles day-to-day technical management</li>
                <li>• Want 50-60% cost savings vs full-time</li>
                <li>• Need fast start (1-2 weeks vs 3-6 months)</li>
                <li>• Preparing for fundraising (Seed/Series A)</li>
                <li>• Want flexibility to scale up/down</li>
              </ul>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-300 p-8 my-10">
              <h4 className="text-xl font-bold text-gray-900 mb-4">✅ Choose Full-Time CTO if:</h4>
              <ul className="space-y-2 text-gray-700 mb-0">
                <li>• Revenue £20M+ with 25-50+ engineers</li>
                <li>• Need daily operational leadership and hands-on management</li>
                <li>• Technology is your core competitive advantage (AI, deep tech)</li>
                <li>• Post-Series B with investor expectations for full-time leadership</li>
                <li>• Multiple technical crises requiring constant attention</li>
                <li>• Can offer meaningful equity (0.5-2%) to attract top talent</li>
                <li>• Need someone building company culture 5 days/week</li>
              </ul>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">Experience Level Comparison</h3>

            <p className="text-xl text-gray-600 mb-8">
              One surprising advantage of fractional CTOs: they're often MORE experienced than full-time candidates you can afford.
            </p>

            <div className="space-y-6 my-10">
              <div className="bg-gray-50 p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Fractional CTO at £1,200/day (£120k/year for 2 days/wk)</h4>
                <p className="text-gray-700 mb-0">Typical profile: 18-25 years experience, CTO at 2-3 companies, scaled teams to 50+ engineers, successful exit experience. Would cost £250k-£350k+ full-time but you access their expertise 2 days/week.</p>
              </div>

              <div className="bg-gray-50 p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Full-Time CTO at £180k salary (£255k total cost)</h4>
                <p className="text-gray-700 mb-0">Typical profile: 10-15 years experience, VP Engineering or first-time CTO, scaled team to 15-25 engineers. Good candidate but less experienced than fractional CTO you could afford.</p>
              </div>
            </div>

            <p>The economics work because fractional CTOs spread their expertise across 2-4 companies, earning £150k-£300k+ annually while you only pay for the fraction of time you need.</p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">Transition Path: Fractional → Full-Time</h3>

            <p>Many companies start with fractional CTO and transition to full-time as they scale. Here's the typical path:</p>

            <div className="bg-white border-2 border-gray-900 p-8 my-10">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Stage 1: Pre-Seed to Seed (£500k-£2M revenue, 3-10 engineers)</h4>
                  <p className="text-gray-700 mb-0"><strong>Model:</strong> Fractional CTO 1-2 days/week (£42k-£80k/year). Provides strategic direction, architecture, investor credibility.</p>
                </div>
                <div className="border-t pt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Stage 2: Series A (£2M-£10M revenue, 10-20 engineers)</h4>
                  <p className="text-gray-700 mb-0"><strong>Model:</strong> Fractional CTO 2-3 days/week (£85k-£160k/year). More intensive engagement for scaling team and preparing for Series B.</p>
                </div>
                <div className="border-t pt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Stage 3: Series B+ (£10M-£20M revenue, 20-30 engineers)</h4>
                  <p className="text-gray-700 mb-0"><strong>Transition Decision:</strong> Either (a) Convert fractional CTO to full-time if they're interested, or (b) Hire full-time CTO and transition fractional to advisory. Many fractional CTOs help hire their replacement.</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">Hybrid Models</h3>

            <p>Some companies use creative combinations:</p>

            <ul className="space-y-3">
              <li><strong>Fractional CTO + Strong VP Engineering:</strong> Fractional CTO (1 day/week) sets strategy, VP Eng (full-time) handles operations. Common at £10M-£20M revenue.</li>
              <li><strong>Fractional CTO + Fractional CFO:</strong> Both executives work 1-2 days/week. Total executive cost £120k-£240k vs £500k+ for both full-time.</li>
              <li><strong>Interim → Fractional:</strong> Hire interim CTO full-time for 6 months during crisis/transition, then convert to fractional ongoing.</li>
              <li><strong>Advisory + Fractional:</strong> Former full-time CTO stays as fractional advisor (1 day/month) after leaving, providing continuity during transition.</li>
            </ul>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">What Investors Think</h3>

            <p className="text-xl text-gray-600 mb-8">
              Investor perspective on fractional vs full-time CTOs:
            </p>

            <div className="space-y-6 my-10">
              <div className="bg-gray-50 p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Seed & Series A Investors</h4>
                <p className="text-gray-700 mb-0">Increasingly comfortable with fractional CTOs. They care about: (1) Technical competence and credibility, (2) Ability to scale systems, (3) Strong technical DD responses, (4) Clear technical roadmap. Employment status (fractional vs full-time) matters less than capability.</p>
              </div>

              <div className="bg-gray-50 p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Series B+ Investors</h4>
                <p className="text-gray-700 mb-0">Typically expect full-time executive team including CTO. At this stage (£10M+ revenue, 25+ engineers), investors want full-time leadership with equity alignment and long-term commitment.</p>
              </div>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">Common Misconceptions</h3>

            <div className="space-y-6 my-10">
              <div className="bg-gray-50 p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-start gap-3">
                  <span className="text-red-500">✗</span>
                  <span>Misconception: "Fractional CTOs aren't as committed"</span>
                </h4>
                <p className="text-gray-700 ml-10 mb-0"><strong className="text-blue-600">Reality:</strong> Fractional CTOs take full ownership and accountability. They're present and engaged on their working days, attend key meetings, and drive outcomes. The difference is hours worked, not commitment level.</p>
              </div>

              <div className="bg-gray-50 p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-start gap-3">
                  <span className="text-red-500">✗</span>
                  <span>Misconception: "You always need to transition to full-time"</span>
                </h4>
                <p className="text-gray-700 ml-10 mb-0"><strong className="text-blue-600">Reality:</strong> Many companies keep fractional CTOs for years, even at £10M-£20M revenue. The decision depends on complexity and needs, not automatic at certain revenue.</p>
              </div>

              <div className="bg-gray-50 p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-start gap-3">
                  <span className="text-red-500">✗</span>
                  <span>Misconception: "Full-time CTOs are always better quality"</span>
                </h4>
                <p className="text-gray-700 ml-10 mb-0"><strong className="text-blue-600">Reality:</strong> Fractional CTOs are often MORE experienced (15-20+ years) than full-time candidates at your budget. You're accessing senior expertise you couldn't afford full-time.</p>
              </div>
            </div>

            <p className="mt-12">
              Ready to decide? Explore: <Link href="/fractional-cto-services" className="text-blue-600 hover:text-blue-700 underline">Hire a Fractional CTO</Link> or <Link href="/fractional-cto" className="text-blue-600 hover:text-blue-700 underline">Complete CTO Guide</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ items={COMPARISON_FAQS} title="" />
        </div>
      </section>

      <section className="py-20 bg-gray-50 text-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Find the Right CTO Model for Your Company</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Whether you choose fractional or full-time, we can help you find the right technical leadership.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-cto-services" className="px-8 py-4 bg-blue-500 text-white font-bold uppercase tracking-wider hover:bg-blue-400 transition-colors">
              Explore Fractional CTOs
            </Link>
            <Link href="/fractional-cto" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              Complete Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
