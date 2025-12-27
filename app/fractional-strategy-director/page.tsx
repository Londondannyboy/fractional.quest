import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Strategy Director UK 2025',
  description: 'Fractional strategy director UK. Part-time strategy leadership for businesses navigating growth and change.',
  keywords: 'fractional strategy director, part-time strategy director, fractional head of strategy, strategy consulting, business strategy',
  alternates: {
    canonical: 'https://fractional.quest/fractional-strategy-director',
  },
  openGraph: {
    title: 'Fractional Strategy Director UK 2025',
    description: 'Part-time strategy leadership for growing businesses.',
    url: 'https://fractional.quest/fractional-strategy-director',
  },
}

const faqItems = [
  {
    question: 'What is a fractional strategy director?',
    answer: 'A fractional strategy director is an experienced strategist who works with companies on a part-time basis, typically 1-3 days per week. They provide strategic planning, market analysis, and business development support without full-time cost.',
  },
  {
    question: 'How much does a fractional strategy director cost?',
    answer: 'Fractional strategy directors in the UK typically charge £800-£1,400 per day. At 2 days per week, this equals £80,000-£140,000 annually—compared to £120,000-£180,000+ for a full-time strategy director.',
  },
  {
    question: 'When should I hire a fractional strategy director?',
    answer: 'Hire a fractional strategy director when: planning major growth initiatives; entering new markets; preparing for M&A; developing corporate strategy; or when you need consulting-quality strategic thinking without agency fees.',
  },
  {
    question: 'What is the difference between strategy director and COO?',
    answer: 'A Strategy Director focuses on strategic planning, analysis, and business development. A COO focuses on operational execution and running day-to-day business. Strategy sets direction; operations delivers it.',
  },
]

export default function FractionalStrategyDirectorPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-700 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Strategy Leadership
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional<br />Strategy Director
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light">
              Part-time strategy leadership for businesses navigating growth, change, and competitive challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-gray-100 border-b-4 border-gray-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-gray-200">
            <h2 className="text-3xl font-black text-gray-900 mb-6">What is a Fractional Strategy Director?</h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
              A <strong className="font-semibold text-gray-900">fractional strategy director</strong> is a senior strategist who works with companies 1-3 days per week, providing consulting-quality strategic thinking, planning, and business development without retaining a full-time executive or expensive consultancy.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Often ex-McKinsey, Bain, or BCG consultants, they bring structured problem-solving and strategic frameworks to growing businesses at a fraction of traditional consulting costs.
            </p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Strategy session with executive team"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-xl prose-gray max-w-none">
            <h2 className="text-3xl font-black text-gray-900">What a Fractional Strategy Director Does</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              A fractional strategy director brings structured strategic thinking to growing businesses. Key areas of focus include:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Strategic Planning</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Vision and mission development</li>
                  <li>3-5 year strategic plans</li>
                  <li>Annual planning process</li>
                  <li>OKR/goal framework design</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Market Analysis</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Competitive landscape assessment</li>
                  <li>Market sizing and opportunity</li>
                  <li>Customer segmentation</li>
                  <li>Industry trend analysis</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Growth Strategy</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>New market entry planning</li>
                  <li>Product expansion strategy</li>
                  <li>M&A target identification</li>
                  <li>Partnership development</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Execution Support</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Strategic initiative management</li>
                  <li>Board and investor presentations</li>
                  <li>Decision support and analysis</li>
                  <li>Change management</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">When to Hire a Fractional Strategy Director</h2>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-gray-700 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Major Growth Initiative</h4>
                  <p className="text-sm text-gray-600 m-0">Planning significant expansion—new markets, products, or business lines—and need structured approach.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-gray-700 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Strategic Crossroads</h4>
                  <p className="text-sm text-gray-600 m-0">Facing important decisions about direction and need objective analysis and frameworks.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-gray-700 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">M&A Preparation</h4>
                  <p className="text-sm text-gray-600 m-0">Preparing to acquire or be acquired and need strategic due diligence and planning.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-gray-700 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Board/Investor Expectations</h4>
                  <p className="text-sm text-gray-600 m-0">Board or investors want more rigorous strategic planning than current team can deliver.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-gray-700 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Alternative to Consultancy</h4>
                  <p className="text-sm text-gray-600 m-0">Need strategic support but can't justify £500k+ for a Big 4 or MBB engagement.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional Strategy Director Costs</h2>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Day Rate</div>
                <div className="text-2xl font-black text-gray-900">£800-£1,400</div>
                <div className="text-xs text-gray-500">per day</div>
              </div>
              <div className="p-6 bg-gray-100 border border-gray-300 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-700 uppercase mb-2">Annual (2 days/wk)</div>
                <div className="text-2xl font-black text-gray-900">£80,000-£140,000</div>
                <div className="text-xs text-gray-500">vs £300k+ consultancy</div>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">vs Consultancy</div>
                <div className="text-2xl font-black text-gray-900">70-80%</div>
                <div className="text-xs text-gray-500">cost savings</div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional vs Management Consultancy</h2>

            <div className="overflow-x-auto my-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 font-bold text-gray-900">Aspect</th>
                    <th className="text-left py-3 font-bold text-gray-700">Fractional Strategy Director</th>
                    <th className="text-left py-3 font-bold text-gray-500">Management Consultancy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 font-medium">Annual Cost</td>
                    <td className="py-3 text-gray-700">£80,000-£140,000</td>
                    <td className="py-3 text-gray-600">£300,000-£1,000,000+</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Continuity</td>
                    <td className="py-3 text-gray-700">Ongoing relationship</td>
                    <td className="py-3 text-gray-600">Project-based</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Context</td>
                    <td className="py-3 text-gray-700">Deep company knowledge</td>
                    <td className="py-3 text-gray-600">Ramp-up each project</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Execution</td>
                    <td className="py-3 text-gray-700">Strategy + implementation</td>
                    <td className="py-3 text-gray-600">Strategy + handoff</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">What to Look for in a Fractional Strategy Director</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              The best fractional strategists combine analytical rigor with practical business experience:
            </p>

            <ul className="text-lg space-y-3 my-8">
              <li><strong>Consulting background:</strong> Training from top-tier firms (McKinsey, Bain, BCG, LEK, etc.)</li>
              <li><strong>Industry experience:</strong> In-house strategy roles or relevant sector expertise</li>
              <li><strong>Structured thinking:</strong> Frameworks, hypothesis-driven problem-solving</li>
              <li><strong>Communication:</strong> Can translate strategy for boards, teams, and investors</li>
              <li><strong>Execution orientation:</strong> Not just decks—focused on implementation</li>
            </ul>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-gray-300">Summary:</strong> A fractional strategy director provides part-time (1-3 days/week) consulting-quality strategic support at £800-£1,400/day—70-80% less than traditional management consultancy.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">FAQs</h2>
          <FAQ skipSchema={true} items={faqItems} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Strategy Leaders</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-executive-jobs" className="px-10 py-5 bg-white text-gray-800 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Executive Jobs
            </Link>
            <Link href="/fractional-coo-jobs-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-gray-800 transition-colors">
              COO Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-coo-jobs-uk" className="text-gray-600 hover:text-gray-800 font-medium">COO Jobs</Link>
            <Link href="/fractional-chief-of-staff" className="text-gray-600 hover:text-gray-800 font-medium">Chief of Staff</Link>
            <Link href="/fractional-executive-jobs" className="text-gray-600 hover:text-gray-800 font-medium">Executive Jobs</Link>
            <Link href="/fractional-c-suite" className="text-gray-600 hover:text-gray-800 font-medium">C-Suite</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
