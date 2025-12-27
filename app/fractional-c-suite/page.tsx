import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional C-Suite UK 2025',
  description: 'Fractional C-suite executives UK. Part-time CEO, CFO, CMO, CTO, COO and more for growing businesses.',
  keywords: 'fractional c-suite, fractional c-level, part-time c-suite, fractional executives, c-suite on demand',
  alternates: {
    canonical: 'https://fractional.quest/fractional-c-suite',
  },
  openGraph: {
    title: 'Fractional C-Suite UK 2025',
    description: 'Part-time C-level executives for growing businesses.',
    url: 'https://fractional.quest/fractional-c-suite',
  },
}

const faqItems = [
  {
    question: 'What is a fractional C-suite?',
    answer: 'A fractional C-suite refers to C-level executives (CEO, CFO, CMO, CTO, COO, CHRO, CRO) who work with companies on a part-time basis, typically 1-3 days per week, providing senior leadership without full-time commitment or cost.',
  },
  {
    question: 'Which C-suite roles can be fractional?',
    answer: 'All C-suite roles can be fractional: CFO (most common), CMO, CTO, COO, CHRO, CRO, and even CEO. The most established markets are fractional CFO and CMO, with other roles growing rapidly.',
  },
  {
    question: 'How much does a fractional C-suite executive cost?',
    answer: 'Fractional C-suite executives in the UK typically charge £800-£1,500 per day depending on the role. At 2 days per week, this equals £80,000-£150,000 annually—compared to £200,000-£400,000+ for full-time C-level hires.',
  },
  {
    question: 'Can a startup afford fractional C-suite?',
    answer: 'Yes, fractional C-suite is designed for startups and scale-ups. By paying for only the time needed (1-3 days/week), companies access senior expertise at 50-70% less than full-time hires—making C-level talent accessible earlier.',
  },
]

export default function FractionalCSuitePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-700 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Executive Leadership
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional<br />C-Suite
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 leading-relaxed font-light">
              C-level executives on demand. Senior leadership for growing businesses without full-time cost.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-slate-100 border-b-4 border-slate-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center border border-slate-200">
              <div className="text-3xl font-black text-slate-800">7+</div>
              <div className="text-sm text-gray-600">C-Suite Roles</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-slate-200">
              <div className="text-3xl font-black text-slate-800">£800-1,500</div>
              <div className="text-sm text-gray-600">Daily Rate</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-slate-200">
              <div className="text-3xl font-black text-slate-800">50-70%</div>
              <div className="text-sm text-gray-600">Cost Savings</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-slate-200">
              <div className="text-3xl font-black text-slate-800">1-3</div>
              <div className="text-sm text-gray-600">Days/Week</div>
            </div>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Executive boardroom meeting"
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
            <h2 className="text-3xl font-black text-gray-900">Fractional C-Suite Roles</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              The fractional model applies across all C-level positions. Each role can be engaged part-time to provide strategic leadership in its domain. Here's the complete landscape:
            </p>

            <div className="grid gap-6 my-10">
              <Link href="/fractional-cfo-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-slate-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-slate-700">Fractional CFO</h3>
                  <p className="text-gray-600 text-sm mb-0">Financial strategy, fundraising, reporting, and compliance</p>
                </div>
                <div className="text-right">
                  <div className="text-slate-700 font-bold">£800-£1,500/day</div>
                  <div className="text-xs text-gray-500">Most established</div>
                </div>
              </Link>

              <Link href="/fractional-cmo-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-slate-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-slate-700">Fractional CMO</h3>
                  <p className="text-gray-600 text-sm mb-0">Marketing strategy, brand, and growth leadership</p>
                </div>
                <div className="text-right">
                  <div className="text-slate-700 font-bold">£800-£1,400/day</div>
                  <div className="text-xs text-gray-500">High demand</div>
                </div>
              </Link>

              <Link href="/fractional-cto-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-slate-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-slate-700">Fractional CTO</h3>
                  <p className="text-gray-600 text-sm mb-0">Technology strategy, architecture, and engineering leadership</p>
                </div>
                <div className="text-right">
                  <div className="text-slate-700 font-bold">£900-£1,500/day</div>
                  <div className="text-xs text-gray-500">Growing fast</div>
                </div>
              </Link>

              <Link href="/fractional-coo-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-slate-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-slate-700">Fractional COO</h3>
                  <p className="text-gray-600 text-sm mb-0">Operations, scaling, and efficiency optimization</p>
                </div>
                <div className="text-right">
                  <div className="text-slate-700 font-bold">£800-£1,400/day</div>
                  <div className="text-xs text-gray-500">Scale-up focus</div>
                </div>
              </Link>

              <Link href="/fractional-chro-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-slate-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-slate-700">Fractional CHRO</h3>
                  <p className="text-gray-600 text-sm mb-0">People strategy, culture, talent, and HR leadership</p>
                </div>
                <div className="text-right">
                  <div className="text-slate-700 font-bold">£700-£1,200/day</div>
                  <div className="text-xs text-gray-500">Emerging</div>
                </div>
              </Link>

              <Link href="/fractional-cro-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-slate-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-slate-700">Fractional CRO</h3>
                  <p className="text-gray-600 text-sm mb-0">Revenue strategy across sales, marketing, and customer success</p>
                </div>
                <div className="text-right">
                  <div className="text-slate-700 font-bold">£900-£1,400/day</div>
                  <div className="text-xs text-gray-500">SaaS focused</div>
                </div>
              </Link>

              <Link href="/fractional-ceo" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-slate-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-slate-700">Fractional CEO</h3>
                  <p className="text-gray-600 text-sm mb-0">Overall leadership, often for transitions or specific phases</p>
                </div>
                <div className="text-right">
                  <div className="text-slate-700 font-bold">£1,000-£1,500/day</div>
                  <div className="text-xs text-gray-500">Specialized</div>
                </div>
              </Link>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Why Companies Choose Fractional C-Suite</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              The fractional C-suite model has become mainstream for growing businesses. Research from the <a href="https://www.scaleupinstitute.org.uk" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-800">ScaleUp Institute</a> shows that access to senior talent is one of the top challenges for scaling companies—fractional executives solve this.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Cost Efficiency</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Pay only for time needed</li>
                  <li>No equity dilution required</li>
                  <li>Avoid expensive mis-hires</li>
                  <li>Flexible scale up/down</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Experience Access</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Senior talent at your stage</li>
                  <li>Battle-tested expertise</li>
                  <li>Multiple company experience</li>
                  <li>Best practices across sectors</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Flexibility</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Start quickly (weeks not months)</li>
                  <li>Adjust commitment as needed</li>
                  <li>Exit without complexity</li>
                  <li>Test before permanent hire</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Objectivity</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>External perspective</li>
                  <li>No political baggage</li>
                  <li>Challenge assumptions</li>
                  <li>Focus on outcomes</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">When to Engage Fractional C-Suite</h2>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-slate-700 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Post-Funding Scale</h4>
                  <p className="text-sm text-gray-600 m-0">You've raised capital and need senior leadership to deploy it effectively, but can't afford or justify full C-suite yet.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-slate-700 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Specific Capability Gap</h4>
                  <p className="text-sm text-gray-600 m-0">You need expertise in finance, marketing, or tech that doesn't exist in the current team—without permanent hire.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-slate-700 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Strategic Inflection Point</h4>
                  <p className="text-sm text-gray-600 m-0">M&A, IPO preparation, market expansion, or major pivot—times when senior leadership is critical.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-slate-700 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Board/Investor Expectation</h4>
                  <p className="text-sm text-gray-600 m-0">Investors want C-level expertise on the team, but the company isn't ready for full-time hires at that level.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Building a Fractional C-Suite</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Some companies engage multiple fractional C-suite executives simultaneously, creating a part-time leadership team. This works when:
            </p>

            <ul className="text-lg space-y-3 my-8">
              <li><strong>Clear CEO leadership:</strong> A full-time CEO coordinates the fractional team</li>
              <li><strong>Defined boundaries:</strong> Each executive's scope is clear and non-overlapping</li>
              <li><strong>Communication rhythm:</strong> Regular leadership meetings keep alignment</li>
              <li><strong>Complementary skills:</strong> The mix covers company's key capability gaps</li>
            </ul>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-slate-300">Summary:</strong> Fractional C-suite provides access to all C-level roles (CFO, CMO, CTO, COO, CHRO, CRO, CEO) on a part-time basis at £800-£1,500/day—delivering 50-70% cost savings vs permanent hires.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">FAQs</h2>
          <FAQ items={faqItems} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find C-Suite Executives</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-executive-jobs" className="px-10 py-5 bg-white text-slate-800 font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors">
              Executive Jobs
            </Link>
            <Link href="/fractional-executive" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-slate-800 transition-colors">
              What is Fractional?
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-executive" className="text-gray-600 hover:text-slate-700 font-medium">Fractional Executive</Link>
            <Link href="/fractional-cxo" className="text-gray-600 hover:text-slate-700 font-medium">Fractional CXO</Link>
            <Link href="/fractional-board-member" className="text-gray-600 hover:text-slate-700 font-medium">Board Member</Link>
            <Link href="/fractional-executive-jobs" className="text-gray-600 hover:text-slate-700 font-medium">Executive Jobs</Link>
            <Link href="/fractional-cfo-jobs-uk" className="text-gray-600 hover:text-slate-700 font-medium">CFO Jobs</Link>
            <Link href="/fractional-cmo-jobs-uk" className="text-gray-600 hover:text-slate-700 font-medium">CMO Jobs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
