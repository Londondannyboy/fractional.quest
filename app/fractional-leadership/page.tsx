import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Leadership UK 2025',
  description: 'Fractional leadership for growing businesses. Part-time senior leaders across all executive functions.',
  keywords: 'fractional leadership, fractional leaders, part-time leadership, fractional executive leadership, senior leadership',
  alternates: {
    canonical: 'https://fractional.quest/fractional-leadership',
  },
  openGraph: {
    title: 'Fractional Leadership UK 2025',
    description: 'Part-time senior leadership for growing businesses.',
    url: 'https://fractional.quest/fractional-leadership',
  },
}

const faqItems = [
  {
    question: 'What is fractional leadership?',
    answer: 'Fractional leadership is a model where experienced senior leaders work with companies on a part-time basis—typically 1-3 days per week. This gives growing businesses access to executive-level expertise without the cost and commitment of full-time hires.',
  },
  {
    question: 'What are the benefits of fractional leadership?',
    answer: 'Benefits include: 50-70% cost savings vs full-time hires, access to more experienced talent, flexibility to scale up/down, fresh external perspective, faster start (weeks not months), and reduced hiring risk.',
  },
  {
    question: 'Which leadership roles can be fractional?',
    answer: 'All senior leadership roles can be fractional: C-suite (CFO, CMO, CTO, COO, CHRO, CRO), directors (marketing, finance, product, sales, HR, IT, operations), and specialist roles (chief of staff, growth, strategy).',
  },
  {
    question: 'How do fractional leaders work with existing teams?',
    answer: 'Fractional leaders integrate with your leadership team, attending key meetings, leading their function, and coaching existing staff. They typically work on-site 1-2 days and remotely otherwise, maintaining regular communication throughout the week.',
  },
]

export default function FractionalLeadershipPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-neutral-800 to-neutral-700 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Leadership Guide
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional<br />Leadership
            </h1>
            <p className="text-2xl md:text-3xl text-neutral-300 leading-relaxed font-light">
              Senior leadership on demand. Part-time executives for growing businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-neutral-100 border-b-4 border-neutral-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center border border-neutral-200">
              <div className="text-3xl font-black text-neutral-800">50-70%</div>
              <div className="text-sm text-gray-600">Cost Savings</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-neutral-200">
              <div className="text-3xl font-black text-neutral-800">1-3</div>
              <div className="text-sm text-gray-600">Days/Week</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-neutral-200">
              <div className="text-3xl font-black text-neutral-800">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-neutral-200">
              <div className="text-3xl font-black text-neutral-800">All</div>
              <div className="text-sm text-gray-600">Functions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Leadership team in strategic meeting"
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
            <h2 className="text-3xl font-black text-gray-900">What is Fractional Leadership?</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Fractional leadership is a flexible model where experienced senior executives work with companies on a part-time basis. Rather than hiring a full-time CFO, CMO, or CTO, businesses engage these leaders for 1-3 days per week—accessing their expertise at a fraction of the cost.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              This model has grown significantly since 2020, driven by the shift to remote work and growing acceptance of flexible arrangements at senior levels. According to the <a href="https://www.iod.com" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-neutral-800">Institute of Directors</a>, fractional and portfolio executive careers are now mainstream.
            </p>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Why Fractional Leadership Works</h2>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">For Companies</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Access senior talent earlier</li>
                  <li>50-70% cost savings</li>
                  <li>Flexibility to scale</li>
                  <li>Reduce hiring risk</li>
                  <li>Fresh external perspective</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">For Leaders</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Portfolio career variety</li>
                  <li>Work-life balance</li>
                  <li>Multiple income streams</li>
                  <li>Diverse challenges</li>
                  <li>Autonomy and flexibility</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional Leadership Roles</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Fractional leadership spans all senior functions. Here are the most common roles:
            </p>

            <div className="grid gap-4 my-10">
              <Link href="/fractional-cfo-jobs-uk" className="flex gap-4 p-5 border rounded-lg bg-white hover:border-neutral-400 transition-colors group">
                <div className="w-1.5 bg-neutral-700 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 group-hover:text-neutral-700">Fractional CFO</h4>
                  <p className="text-sm text-gray-600 m-0">Financial strategy, fundraising, reporting. Most established fractional market.</p>
                </div>
              </Link>

              <Link href="/fractional-cmo-jobs-uk" className="flex gap-4 p-5 border rounded-lg bg-white hover:border-neutral-400 transition-colors group">
                <div className="w-1.5 bg-neutral-700 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 group-hover:text-neutral-700">Fractional CMO</h4>
                  <p className="text-sm text-gray-600 m-0">Marketing strategy, brand, demand generation. High demand from scale-ups.</p>
                </div>
              </Link>

              <Link href="/fractional-cto-jobs-uk" className="flex gap-4 p-5 border rounded-lg bg-white hover:border-neutral-400 transition-colors group">
                <div className="w-1.5 bg-neutral-700 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 group-hover:text-neutral-700">Fractional CTO</h4>
                  <p className="text-sm text-gray-600 m-0">Technology strategy, architecture, engineering leadership. Growing fast.</p>
                </div>
              </Link>

              <Link href="/fractional-coo-jobs-uk" className="flex gap-4 p-5 border rounded-lg bg-white hover:border-neutral-400 transition-colors group">
                <div className="w-1.5 bg-neutral-700 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 group-hover:text-neutral-700">Fractional COO</h4>
                  <p className="text-sm text-gray-600 m-0">Operations, scaling, efficiency. Popular with scale-ups.</p>
                </div>
              </Link>

              <Link href="/fractional-chro-jobs-uk" className="flex gap-4 p-5 border rounded-lg bg-white hover:border-neutral-400 transition-colors group">
                <div className="w-1.5 bg-neutral-700 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 group-hover:text-neutral-700">Fractional CHRO</h4>
                  <p className="text-sm text-gray-600 m-0">People strategy, culture, HR transformation. Emerging market.</p>
                </div>
              </Link>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">When to Use Fractional Leadership</h2>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-neutral-700 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Post-Funding Scale</h4>
                  <p className="text-sm text-gray-600 m-0">You've raised capital and need to professionalize, but can't justify full C-suite yet.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-neutral-700 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Capability Gap</h4>
                  <p className="text-sm text-gray-600 m-0">You need specific expertise (finance, marketing, tech) that doesn't exist in current team.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-neutral-700 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Strategic Inflection</h4>
                  <p className="text-sm text-gray-600 m-0">M&A, expansion, transformation—times when senior leadership is critical.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-neutral-700 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Test Before Hire</h4>
                  <p className="text-sm text-gray-600 m-0">Validate you need a role before committing to expensive permanent hire.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional Leadership Costs</h2>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Day Rate</div>
                <div className="text-2xl font-black text-gray-900">£600-£1,500</div>
                <div className="text-xs text-gray-500">depending on role</div>
              </div>
              <div className="p-6 bg-neutral-100 border border-neutral-300 rounded-xl text-center">
                <div className="text-sm font-bold text-neutral-700 uppercase mb-2">Annual (2 days/wk)</div>
                <div className="text-2xl font-black text-gray-900">£60,000-£150,000</div>
                <div className="text-xs text-gray-500">vs £150-300k+ full-time</div>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Savings</div>
                <div className="text-2xl font-black text-gray-900">50-70%</div>
                <div className="text-xs text-gray-500">vs permanent hire</div>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-neutral-300">Summary:</strong> Fractional leadership gives growing businesses access to senior executives (CFO, CMO, CTO, etc.) at 1-3 days/week for 50-70% less than full-time hires.
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
      <section className="py-20 bg-neutral-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Fractional Leaders</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-executive-jobs" className="px-10 py-5 bg-white text-neutral-800 font-bold uppercase tracking-wider hover:bg-neutral-100 transition-colors">
              Executive Jobs
            </Link>
            <Link href="/fractional-roles" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-neutral-800 transition-colors">
              All Roles
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-executive" className="text-gray-600 hover:text-neutral-700 font-medium">Fractional Executive</Link>
            <Link href="/fractional-roles" className="text-gray-600 hover:text-neutral-700 font-medium">All Roles</Link>
            <Link href="/fractional-c-suite" className="text-gray-600 hover:text-neutral-700 font-medium">C-Suite</Link>
            <Link href="/fractional-executive-jobs" className="text-gray-600 hover:text-neutral-700 font-medium">Executive Jobs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
