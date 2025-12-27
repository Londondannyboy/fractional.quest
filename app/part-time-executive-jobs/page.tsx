import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Part-Time Executive Jobs UK 2025',
  description: 'Part-time executive jobs UK. Senior leadership roles with flexible hours across all C-suite functions.',
  keywords: 'part-time executive jobs, part-time c-suite, part-time director jobs, flexible executive roles, senior part-time jobs',
  alternates: {
    canonical: 'https://fractional.quest/part-time-executive-jobs',
  },
  openGraph: {
    title: 'Part-Time Executive Jobs UK 2025',
    description: 'Senior leadership roles with flexible working arrangements.',
    url: 'https://fractional.quest/part-time-executive-jobs',
  },
}

const faqItems = [
  {
    question: 'What are part-time executive jobs?',
    answer: 'Part-time executive jobs are senior leadership roles—C-suite, Director, VP level—that don\'t require full-time commitment. These include fractional executives (1-3 days/week), job shares, compressed hours, and interim roles.',
  },
  {
    question: 'How much do part-time executives earn?',
    answer: 'Part-time executives in the UK typically earn £600-£1,500 per day or £50,000-£150,000 annually depending on role level and time commitment. This often equates to higher hourly rates than equivalent full-time positions.',
  },
  {
    question: 'Are part-time executive jobs becoming more common?',
    answer: 'Yes, significantly. Post-pandemic, flexible working has become standard at senior levels. The fractional executive market has grown 300%+ since 2020, with companies increasingly open to part-time leadership arrangements.',
  },
  {
    question: 'What industries hire part-time executives?',
    answer: 'Tech/SaaS, professional services, financial services, and manufacturing are leading sectors. Scale-ups and PE-backed companies are particularly active, along with charities and education organizations.',
  },
]

export default function PartTimeExecutiveJobsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-700 to-violet-600 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Executive Jobs
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Part-Time<br />Executive Jobs
            </h1>
            <p className="text-2xl md:text-3xl text-violet-100 leading-relaxed font-light">
              Senior leadership roles that don't require full-time commitment. The future of executive work.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-violet-50 border-b-4 border-violet-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center border border-violet-200">
              <div className="text-3xl font-black text-violet-600">£600-1,500</div>
              <div className="text-sm text-gray-600">Day Rate</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-violet-200">
              <div className="text-3xl font-black text-violet-600">1-4</div>
              <div className="text-sm text-gray-600">Days/Week</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-violet-200">
              <div className="text-3xl font-black text-violet-600">300%</div>
              <div className="text-sm text-gray-600">Growth Since 2020</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-violet-200">
              <div className="text-3xl font-black text-violet-600">All</div>
              <div className="text-sm text-gray-600">C-Suite Functions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Executive working in flexible office environment"
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
            <h2 className="text-3xl font-black text-gray-900">Part-Time Executive Roles by Function</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Part-time executive opportunities exist across all C-suite and senior leadership functions. The most established markets are in finance and marketing, with growing demand in operations, technology, and people functions.
            </p>

            <div className="grid gap-6 my-10">
              <Link href="/fractional-cfo-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-violet-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-violet-600">Part-Time CFO / Finance Director</h3>
                  <p className="text-gray-600 text-sm mb-0">Financial strategy, fundraising, reporting—most mature market</p>
                </div>
                <div className="text-right">
                  <div className="text-violet-600 font-bold">£800-£1,500/day</div>
                </div>
              </Link>

              <Link href="/fractional-cmo-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-violet-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-violet-600">Part-Time CMO / Marketing Director</h3>
                  <p className="text-gray-600 text-sm mb-0">Brand, growth, digital marketing leadership</p>
                </div>
                <div className="text-right">
                  <div className="text-violet-600 font-bold">£800-£1,400/day</div>
                </div>
              </Link>

              <Link href="/fractional-cto-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-violet-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-violet-600">Part-Time CTO / Tech Director</h3>
                  <p className="text-gray-600 text-sm mb-0">Technology strategy, architecture, engineering leadership</p>
                </div>
                <div className="text-right">
                  <div className="text-violet-600 font-bold">£900-£1,500/day</div>
                </div>
              </Link>

              <Link href="/fractional-coo-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-violet-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-violet-600">Part-Time COO / Operations Director</h3>
                  <p className="text-gray-600 text-sm mb-0">Operational efficiency, scaling, process optimization</p>
                </div>
                <div className="text-right">
                  <div className="text-violet-600 font-bold">£800-£1,400/day</div>
                </div>
              </Link>

              <Link href="/fractional-chro-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-violet-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-violet-600">Part-Time CHRO / People Director</h3>
                  <p className="text-gray-600 text-sm mb-0">HR strategy, culture, talent management</p>
                </div>
                <div className="text-right">
                  <div className="text-violet-600 font-bold">£700-£1,200/day</div>
                </div>
              </Link>

              <Link href="/fractional-cro-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-violet-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-violet-600">Part-Time CRO / Revenue Director</h3>
                  <p className="text-gray-600 text-sm mb-0">Revenue strategy, sales and marketing alignment</p>
                </div>
                <div className="text-right">
                  <div className="text-violet-600 font-bold">£900-£1,400/day</div>
                </div>
              </Link>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Types of Part-Time Executive Work</h2>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Fractional Executive</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>1-3 days per week</li>
                  <li>Ongoing engagement (6+ months)</li>
                  <li>Member of leadership team</li>
                  <li>Multiple clients possible</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Interim Executive</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>3-5 days per week</li>
                  <li>Fixed term (3-12 months)</li>
                  <li>Gap-fill or transformation</li>
                  <li>Usually one client at a time</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Portfolio Executive</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Multiple part-time roles</li>
                  <li>Board and advisory positions</li>
                  <li>Flexible commitment</li>
                  <li>Diversified income</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Job Share</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Split full-time role with partner</li>
                  <li>Employed position</li>
                  <li>Shared accountability</li>
                  <li>Benefits included</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Why Part-Time Executive Jobs Are Growing</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              According to the <a href="https://www.iod.com" target="_blank" rel="noopener noreferrer" className="text-violet-700 hover:text-violet-800">Institute of Directors</a>, flexible working at senior levels has become mainstream. Several factors are driving this growth:
            </p>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-violet-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Cost Efficiency</h4>
                  <p className="text-sm text-gray-600 m-0">Companies access senior talent at 50-70% of full-time cost—critical for scaling businesses with limited resources.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-violet-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Talent Preferences</h4>
                  <p className="text-sm text-gray-600 m-0">Experienced executives increasingly choose portfolio careers, work-life balance, and varied challenges over single employers.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-violet-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Post-Pandemic Shift</h4>
                  <p className="text-sm text-gray-600 m-0">Remote work normalization proved senior roles can be effective without full-time physical presence.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-violet-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Specialization Value</h4>
                  <p className="text-sm text-gray-600 m-0">Companies need specific expertise (fundraising, digital transformation, M&A) without permanent headcount.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Finding Part-Time Executive Roles</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Part-time executive opportunities are sourced through several channels:
            </p>

            <ul className="text-lg space-y-3 my-8">
              <li><strong>Fractional platforms:</strong> Specialized marketplaces matching executives with companies</li>
              <li><strong>Executive networks:</strong> Professional communities and peer referrals</li>
              <li><strong>Search firms:</strong> Executive recruiters with interim/fractional practices</li>
              <li><strong>Direct approach:</strong> Targeting companies at the right stage and sector</li>
              <li><strong>LinkedIn:</strong> Profile optimization and proactive outreach</li>
            </ul>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-violet-400">Summary:</strong> Part-time executive jobs offer senior leadership roles at £600-£1,500/day across all C-suite functions. The market has grown 300%+ since 2020 with no signs of slowing.
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
      <section className="py-20 bg-violet-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Browse Executive Jobs</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-executive-jobs" className="px-10 py-5 bg-white text-violet-700 font-bold uppercase tracking-wider hover:bg-violet-50 transition-colors">
              All Executive Jobs
            </Link>
            <Link href="/fractional-work" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-violet-700 transition-colors">
              Fractional Work Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-executive-jobs" className="text-gray-600 hover:text-violet-700 font-medium">Executive Jobs</Link>
            <Link href="/fractional-work" className="text-gray-600 hover:text-violet-700 font-medium">Fractional Work</Link>
            <Link href="/fractional-jobs-remote" className="text-gray-600 hover:text-violet-700 font-medium">Remote Jobs</Link>
            <Link href="/fractional-executive" className="text-gray-600 hover:text-violet-700 font-medium">What is Fractional?</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
