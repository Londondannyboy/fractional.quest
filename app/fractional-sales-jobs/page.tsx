import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Sales Jobs UK 2025',
  description: 'Fractional sales jobs UK. CRO, VP Sales, sales director roles.',
  keywords: 'fractional sales jobs, fractional cro jobs, fractional vp sales, sales director jobs, part-time sales jobs',
  alternates: {
    canonical: 'https://fractional.quest/fractional-sales-jobs',
  },
  openGraph: {
    title: 'Fractional Sales Jobs UK 2025',
    description: 'Part-time sales leadership roles across CRO, VP Sales.',
    url: 'https://fractional.quest/fractional-sales-jobs',
  },
}

const faqItems = [
  {
    question: 'What are fractional sales jobs?',
    answer: 'Fractional sales jobs are part-time sales leadership roles where experienced sales executives work 1-3 days per week. Common roles include fractional CRO, VP Sales, Sales Director, and Head of Sales positions.',
  },
  {
    question: 'How much do fractional sales jobs pay?',
    answer: 'Fractional sales jobs in the UK typically pay £700-£1,400 per day. CRO-level roles command £900-£1,400/day, while VP/Director-level roles range from £700-£1,100/day.',
  },
  {
    question: 'What experience do I need for fractional sales jobs?',
    answer: 'Most fractional sales jobs require 15+ years of sales experience with at least 5 years in senior leadership. Proven track record of hitting revenue targets and building sales teams is essential.',
  },
  {
    question: 'What industries hire fractional sales leaders?',
    answer: 'B2B SaaS, FinTech, Professional Services, and Manufacturing are the main industries hiring fractional sales leadership. Scale-ups and PE-backed companies are particularly active.',
  },
]

export default function FractionalSalesJobsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-600 to-red-500 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Sales Jobs
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional<br />Sales Jobs
            </h1>
            <p className="text-2xl md:text-3xl text-red-100 leading-relaxed font-light">
              Part-time sales leadership roles. CRO, VP Sales, and Sales Director opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-red-50 border-b-4 border-red-500">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center border border-red-200">
              <div className="text-3xl font-black text-red-600">£700-1,400</div>
              <div className="text-sm text-gray-600">Daily Rate</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-red-200">
              <div className="text-3xl font-black text-red-600">1-3</div>
              <div className="text-sm text-gray-600">Days/Week</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-red-200">
              <div className="text-3xl font-black text-red-600">15+</div>
              <div className="text-sm text-gray-600">Years Exp</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-red-200">
              <div className="text-3xl font-black text-red-600">B2B</div>
              <div className="text-sm text-gray-600">Top Sector</div>
            </div>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Sales team meeting"
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
            <h2 className="text-3xl font-black text-gray-900">Fractional Sales Jobs by Role</h2>

            <div className="grid gap-6 my-10">
              <Link href="/fractional-cro-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-red-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-red-600">Fractional CRO</h3>
                  <p className="text-gray-600 text-sm mb-0">Chief Revenue Officer - revenue strategy, GTM leadership</p>
                </div>
                <div className="text-right">
                  <div className="text-red-600 font-bold">£900-£1,400/day</div>
                </div>
              </Link>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Fractional VP Sales</h3>
                  <p className="text-gray-600 text-sm mb-0">Sales team leadership, process, coaching</p>
                </div>
                <div className="text-right">
                  <div className="text-red-600 font-bold">£800-£1,200/day</div>
                </div>
              </div>

              <Link href="/fractional-sales-director-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-red-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-red-600">Fractional Sales Director</h3>
                  <p className="text-gray-600 text-sm mb-0">Sales strategy, team management, target delivery</p>
                </div>
                <div className="text-right">
                  <div className="text-red-600 font-bold">£700-£1,100/day</div>
                </div>
              </Link>

              <Link href="/fractional-sales-leader" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-red-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-red-600">Fractional Sales Leader</h3>
                  <p className="text-gray-600 text-sm mb-0">First sales hire, building function from scratch</p>
                </div>
                <div className="text-right">
                  <div className="text-red-600 font-bold">£600-£1,000/day</div>
                </div>
              </Link>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">What Fractional Sales Leaders Do</h2>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Strategy</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Sales strategy and planning</li>
                  <li>Go-to-market design</li>
                  <li>Target setting and forecasting</li>
                  <li>Territory and segment planning</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Operations</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Sales process optimization</li>
                  <li>CRM and tech stack</li>
                  <li>Pipeline management</li>
                  <li>Compensation design</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Team</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Hiring and team structure</li>
                  <li>Coaching and development</li>
                  <li>Performance management</li>
                  <li>Sales enablement</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Execution</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Key account leadership</li>
                  <li>Deal support and closing</li>
                  <li>Customer success alignment</li>
                  <li>Revenue reporting</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">When Companies Hire Fractional Sales</h2>

            <ul className="text-lg space-y-3">
              <li><strong>Post-funding:</strong> Series A/B companies building sales motion</li>
              <li><strong>Founder-led sales transition:</strong> Moving beyond founder doing all selling</li>
              <li><strong>New market entry:</strong> Launching in new geography or segment</li>
              <li><strong>Turnaround:</strong> Fixing underperforming sales team</li>
              <li><strong>Scale-up:</strong> Professionalizing sales as company grows</li>
            </ul>

            <h2 className="text-3xl font-black text-gray-900 mt-16">The Bottom Line</h2>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                Fractional sales jobs offer part-time leadership (CRO, VP Sales, Director) paying £700-£1,400/day. Ideal for B2B companies building or scaling sales functions without full-time commitment.
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
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Browse Sales Jobs</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-cro-jobs-uk" className="px-10 py-5 bg-white text-red-600 font-bold uppercase tracking-wider hover:bg-red-50 transition-colors">
              CRO Jobs
            </Link>
            <Link href="/fractional-sales-leader" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-red-600 transition-colors">
              Sales Leader Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-cro-jobs-uk" className="text-gray-600 hover:text-red-600 font-medium">CRO Jobs</Link>
            <Link href="/fractional-sales-director-jobs-uk" className="text-gray-600 hover:text-red-600 font-medium">Sales Director Jobs</Link>
            <Link href="/fractional-sales-leader" className="text-gray-600 hover:text-red-600 font-medium">Sales Leader</Link>
            <Link href="/fractional-executive-jobs" className="text-gray-600 hover:text-red-600 font-medium">All Executive Jobs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
