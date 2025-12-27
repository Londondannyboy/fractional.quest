import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Roles UK 2025',
  description: 'Complete guide to fractional roles. All fractional executive positions from CFO to CTO explained.',
  keywords: 'fractional roles, fractional executive roles, fractional positions, fractional c-suite roles, part-time executive roles',
  alternates: {
    canonical: 'https://fractional.quest/fractional-roles',
  },
  openGraph: {
    title: 'Fractional Roles UK 2025',
    description: 'Complete guide to all fractional executive roles.',
    url: 'https://fractional.quest/fractional-roles',
  },
}

const faqItems = [
  {
    question: 'What fractional roles are available?',
    answer: 'All C-suite and senior leadership roles can be fractional: CFO, CMO, CTO, COO, CHRO, CRO, CEO, plus director-level roles in finance, marketing, product, sales, HR, IT, and operations.',
  },
  {
    question: 'Which fractional role is most common?',
    answer: 'Fractional CFO is the most established market, followed by fractional CMO and CTO. These functions often don\'t need full-time leadership until companies reach significant scale.',
  },
  {
    question: 'Can any role be fractional?',
    answer: 'Most strategic and leadership roles can work fractionally. Roles requiring constant physical presence or real-time decision-making (e.g., some COO functions) may need more than typical fractional time allocation.',
  },
  {
    question: 'How do I choose the right fractional role for my business?',
    answer: 'Identify your biggest capability gap or strategic challenge. If it\'s financial—fractional CFO. If it\'s growth/marketing—fractional CMO. If it\'s technology—fractional CTO. Most companies start with one and add others as needed.',
  },
]

export default function FractionalRolesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-stone-800 to-stone-700 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Complete Guide
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional<br />Roles
            </h1>
            <p className="text-2xl md:text-3xl text-stone-300 leading-relaxed font-light">
              The complete guide to all fractional executive roles and how to choose the right one for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-stone-100 border-b-4 border-stone-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center border border-stone-200">
              <div className="text-3xl font-black text-stone-800">10+</div>
              <div className="text-sm text-gray-600">Core Roles</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-stone-200">
              <div className="text-3xl font-black text-stone-800">£600-1,500</div>
              <div className="text-sm text-gray-600">Day Rate Range</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-stone-200">
              <div className="text-3xl font-black text-stone-800">1-3</div>
              <div className="text-sm text-gray-600">Days/Week</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-stone-200">
              <div className="text-3xl font-black text-stone-800">All</div>
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
              src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Leadership team in boardroom"
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
            <h2 className="text-3xl font-black text-gray-900">C-Suite Fractional Roles</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              C-level fractional roles are the most established part of the market. These executives join the leadership team and take ownership of their function:
            </p>

            <div className="grid gap-6 my-10">
              <Link href="/fractional-cfo-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-stone-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-stone-700">Fractional CFO</h3>
                  <p className="text-gray-600 text-sm mb-0">Financial strategy, fundraising, reporting, compliance, investor relations</p>
                </div>
                <div className="text-right">
                  <div className="text-stone-700 font-bold">£800-£1,500/day</div>
                  <div className="text-xs text-green-600">Most established</div>
                </div>
              </Link>

              <Link href="/fractional-cmo-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-stone-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-stone-700">Fractional CMO</h3>
                  <p className="text-gray-600 text-sm mb-0">Marketing strategy, brand, demand generation, team leadership</p>
                </div>
                <div className="text-right">
                  <div className="text-stone-700 font-bold">£800-£1,400/day</div>
                  <div className="text-xs text-green-600">High demand</div>
                </div>
              </Link>

              <Link href="/fractional-cto-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-stone-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-stone-700">Fractional CTO</h3>
                  <p className="text-gray-600 text-sm mb-0">Technology strategy, architecture, engineering leadership, product tech</p>
                </div>
                <div className="text-right">
                  <div className="text-stone-700 font-bold">£900-£1,500/day</div>
                  <div className="text-xs text-green-600">Growing fast</div>
                </div>
              </Link>

              <Link href="/fractional-coo-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-stone-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-stone-700">Fractional COO</h3>
                  <p className="text-gray-600 text-sm mb-0">Operations, scaling, efficiency, process optimization</p>
                </div>
                <div className="text-right">
                  <div className="text-stone-700 font-bold">£800-£1,400/day</div>
                  <div className="text-xs text-gray-500">Scale-up focus</div>
                </div>
              </Link>

              <Link href="/fractional-chro-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-stone-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-stone-700">Fractional CHRO</h3>
                  <p className="text-gray-600 text-sm mb-0">People strategy, culture, talent, HR transformation</p>
                </div>
                <div className="text-right">
                  <div className="text-stone-700 font-bold">£700-£1,200/day</div>
                  <div className="text-xs text-gray-500">Emerging</div>
                </div>
              </Link>

              <Link href="/fractional-cro-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-stone-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-stone-700">Fractional CRO</h3>
                  <p className="text-gray-600 text-sm mb-0">Revenue strategy, sales + marketing alignment, customer success</p>
                </div>
                <div className="text-right">
                  <div className="text-stone-700 font-bold">£900-£1,400/day</div>
                  <div className="text-xs text-gray-500">SaaS focused</div>
                </div>
              </Link>

              <Link href="/fractional-ceo" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-stone-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-stone-700">Fractional CEO</h3>
                  <p className="text-gray-600 text-sm mb-0">Overall leadership, often for transitions or specific phases</p>
                </div>
                <div className="text-right">
                  <div className="text-stone-700 font-bold">£1,000-£1,500/day</div>
                  <div className="text-xs text-gray-500">Specialized</div>
                </div>
              </Link>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Director-Level Fractional Roles</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Below C-suite, director and VP-level fractional roles are increasingly common:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <Link href="/fractional-marketing-director" className="bg-white border-2 border-gray-200 p-5 rounded-lg hover:border-stone-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-stone-700">Marketing Director</h3>
                <p className="text-sm text-gray-600 mb-2">Marketing team leadership and execution</p>
                <div className="text-stone-700 font-bold text-sm">£700-£1,100/day</div>
              </Link>

              <Link href="/fractional-finance-director" className="bg-white border-2 border-gray-200 p-5 rounded-lg hover:border-stone-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-stone-700">Finance Director</h3>
                <p className="text-sm text-gray-600 mb-2">Financial operations and management</p>
                <div className="text-stone-700 font-bold text-sm">£700-£1,200/day</div>
              </Link>

              <Link href="/fractional-product-director" className="bg-white border-2 border-gray-200 p-5 rounded-lg hover:border-stone-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-stone-700">Product Director</h3>
                <p className="text-sm text-gray-600 mb-2">Product strategy and team leadership</p>
                <div className="text-stone-700 font-bold text-sm">£700-£1,200/day</div>
              </Link>

              <Link href="/fractional-sales-director-jobs-uk" className="bg-white border-2 border-gray-200 p-5 rounded-lg hover:border-stone-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-stone-700">Sales Director</h3>
                <p className="text-sm text-gray-600 mb-2">Sales team leadership and process</p>
                <div className="text-stone-700 font-bold text-sm">£700-£1,100/day</div>
              </Link>

              <Link href="/fractional-hr-director" className="bg-white border-2 border-gray-200 p-5 rounded-lg hover:border-stone-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-stone-700">HR Director</h3>
                <p className="text-sm text-gray-600 mb-2">People operations and HR leadership</p>
                <div className="text-stone-700 font-bold text-sm">£600-£1,000/day</div>
              </Link>

              <Link href="/fractional-it-director" className="bg-white border-2 border-gray-200 p-5 rounded-lg hover:border-stone-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-stone-700">IT Director</h3>
                <p className="text-sm text-gray-600 mb-2">IT infrastructure and operations</p>
                <div className="text-stone-700 font-bold text-sm">£600-£1,100/day</div>
              </Link>

              <Link href="/fractional-operations-director" className="bg-white border-2 border-gray-200 p-5 rounded-lg hover:border-stone-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-stone-700">Operations Director</h3>
                <p className="text-sm text-gray-600 mb-2">Operational efficiency and process</p>
                <div className="text-stone-700 font-bold text-sm">£600-£1,100/day</div>
              </Link>

              <Link href="/fractional-digital-director" className="bg-white border-2 border-gray-200 p-5 rounded-lg hover:border-stone-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-stone-700">Digital Director</h3>
                <p className="text-sm text-gray-600 mb-2">Digital transformation and channels</p>
                <div className="text-stone-700 font-bold text-sm">£700-£1,200/day</div>
              </Link>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Specialist Fractional Roles</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Emerging fractional roles address specific needs:
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-10">
              <Link href="/fractional-chief-of-staff" className="bg-white border-2 border-gray-200 p-4 rounded-lg hover:border-stone-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-stone-700">Chief of Staff</h3>
                <p className="text-xs text-gray-600">CEO support</p>
              </Link>

              <Link href="/fractional-growth-director" className="bg-white border-2 border-gray-200 p-4 rounded-lg hover:border-stone-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-stone-700">Growth Director</h3>
                <p className="text-xs text-gray-600">Acquisition & retention</p>
              </Link>

              <Link href="/fractional-strategy-director" className="bg-white border-2 border-gray-200 p-4 rounded-lg hover:border-stone-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-stone-700">Strategy Director</h3>
                <p className="text-xs text-gray-600">Strategic planning</p>
              </Link>

              <Link href="/fractional-head-of-sales" className="bg-white border-2 border-gray-200 p-4 rounded-lg hover:border-stone-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-stone-700">Head of Sales</h3>
                <p className="text-xs text-gray-600">Sales leadership</p>
              </Link>

              <Link href="/fractional-cio" className="bg-white border-2 border-gray-200 p-4 rounded-lg hover:border-stone-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-stone-700">CIO</h3>
                <p className="text-xs text-gray-600">Information strategy</p>
              </Link>

              <Link href="/fractional-cpo-jobs-uk" className="bg-white border-2 border-gray-200 p-4 rounded-lg hover:border-stone-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-stone-700">CPO</h3>
                <p className="text-xs text-gray-600">Product leadership</p>
              </Link>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Choosing the Right Fractional Role</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Not sure which fractional role you need? Start with your biggest challenge:
            </p>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-stone-700 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">"We need to raise funding / improve financial controls"</h4>
                  <p className="text-sm text-gray-600 m-0">→ <Link href="/fractional-cfo-jobs-uk" className="text-stone-700 hover:text-stone-800 font-medium">Fractional CFO</Link></p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-stone-700 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">"We need more customers / better marketing"</h4>
                  <p className="text-sm text-gray-600 m-0">→ <Link href="/fractional-cmo-jobs-uk" className="text-stone-700 hover:text-stone-800 font-medium">Fractional CMO</Link> or <Link href="/fractional-growth-director" className="text-stone-700 hover:text-stone-800 font-medium">Growth Director</Link></p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-stone-700 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">"Our technology is holding us back"</h4>
                  <p className="text-sm text-gray-600 m-0">→ <Link href="/fractional-cto-jobs-uk" className="text-stone-700 hover:text-stone-800 font-medium">Fractional CTO</Link></p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-stone-700 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">"We can't scale efficiently"</h4>
                  <p className="text-sm text-gray-600 m-0">→ <Link href="/fractional-coo-jobs-uk" className="text-stone-700 hover:text-stone-800 font-medium">Fractional COO</Link> or <Link href="/fractional-operations-director" className="text-stone-700 hover:text-stone-800 font-medium">Operations Director</Link></p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-stone-700 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">"We need to build a better sales engine"</h4>
                  <p className="text-sm text-gray-600 m-0">→ <Link href="/fractional-cro-jobs-uk" className="text-stone-700 hover:text-stone-800 font-medium">Fractional CRO</Link> or <Link href="/fractional-head-of-sales" className="text-stone-700 hover:text-stone-800 font-medium">Head of Sales</Link></p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-stone-300">Summary:</strong> Fractional roles span all C-suite and director functions at £600-£1,500/day. CFO, CMO, and CTO are most established, with specialist roles growing rapidly.
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
      <section className="py-20 bg-stone-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Your Role</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-executive-jobs" className="px-10 py-5 bg-white text-stone-800 font-bold uppercase tracking-wider hover:bg-stone-100 transition-colors">
              Executive Jobs
            </Link>
            <Link href="/fractional-executive" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-stone-800 transition-colors">
              Complete Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-executive" className="text-gray-600 hover:text-stone-700 font-medium">Fractional Executive</Link>
            <Link href="/fractional-c-suite" className="text-gray-600 hover:text-stone-700 font-medium">C-Suite</Link>
            <Link href="/fractional-cxo" className="text-gray-600 hover:text-stone-700 font-medium">Fractional CXO</Link>
            <Link href="/fractional-director" className="text-gray-600 hover:text-stone-700 font-medium">Fractional Director</Link>
            <Link href="/fractional-team" className="text-gray-600 hover:text-stone-700 font-medium">Fractional Team</Link>
            <Link href="/fractional-executive-jobs" className="text-gray-600 hover:text-stone-700 font-medium">Executive Jobs</Link>
            <Link href="/how-to-become-a-fractional-executive" className="text-gray-600 hover:text-stone-700 font-medium">Become Fractional</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
