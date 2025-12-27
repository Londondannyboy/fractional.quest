import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Sales Leader UK 2025',
  description: 'Hire a fractional sales leader UK. Part-time sales leadership for scaling companies.',
  keywords: 'fractional sales leader, fractional sales, part-time sales leader, fractional vp sales, fractional cro',
  alternates: {
    canonical: 'https://fractional.quest/fractional-sales-leader',
  },
  openGraph: {
    title: 'Fractional Sales Leader UK 2025',
    description: 'Part-time sales leadership for building and scaling revenue.',
    url: 'https://fractional.quest/fractional-sales-leader',
  },
}

const faqItems = [
  {
    question: 'What is a fractional sales leader?',
    answer: 'A fractional sales leader is an experienced sales executive (CRO, VP Sales, Sales Director) who works with companies on a part-time basis, typically 1-3 days per week. They provide strategic sales leadership, build sales processes, and coach teams without full-time commitment.',
  },
  {
    question: 'How much does a fractional sales leader cost?',
    answer: 'Fractional sales leaders in the UK typically cost £700-£1,400 per day, depending on seniority. At 2 days per week, this translates to £70,000-£140,000 annually - compared to £120,000-£200,000+ for a full-time VP Sales.',
  },
  {
    question: 'When should I hire a fractional sales leader?',
    answer: 'Hire a fractional sales leader when: transitioning from founder-led sales; building your first sales team; scaling post-Series A/B; entering new markets; fixing underperforming sales; or needing experienced leadership at reduced cost.',
  },
  {
    question: 'What does a fractional sales leader do?',
    answer: 'Fractional sales leaders develop sales strategy, build and coach teams, implement sales processes and CRM, create playbooks, manage pipeline, set targets, and drive revenue - all on a part-time basis.',
  },
]

export default function FractionalSalesLeaderPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-500 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Complete Guide
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional<br />Sales Leader
            </h1>
            <p className="text-2xl md:text-3xl text-orange-100 leading-relaxed font-light">
              Part-time sales leadership for companies building and scaling revenue functions.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-orange-50 border-b-4 border-orange-500">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-orange-200">
            <h2 className="text-3xl font-black text-gray-900 mb-6">What is a Fractional Sales Leader?</h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
              A <strong className="font-semibold text-gray-900">fractional sales leader</strong> is an experienced sales executive who provides part-time leadership—typically 1-3 days per week—to help companies build, fix, or scale their sales function.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              This model gives growing companies access to senior sales expertise (CRO, VP Sales, Sales Director) at 50-70% less cost than a full-time hire. Perfect for post-seed to Series B companies transitioning from founder-led sales.
            </p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Sales leader coaching team"
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
            <h2 className="text-3xl font-black text-gray-900">What Fractional Sales Leaders Do</h2>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Build</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Sales strategy and GTM</li>
                  <li>Team structure and hiring</li>
                  <li>Sales process and playbook</li>
                  <li>CRM and tech stack</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Lead</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Coaching and development</li>
                  <li>Pipeline management</li>
                  <li>Target setting and forecasting</li>
                  <li>Performance management</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional Sales Leader Costs</h2>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Sales Director</div>
                <div className="text-2xl font-black text-gray-900">£700-£1,000</div>
                <div className="text-xs text-gray-500">per day</div>
              </div>
              <div className="p-6 bg-orange-50 border border-orange-200 rounded-xl text-center">
                <div className="text-sm font-bold text-orange-600 uppercase mb-2">VP Sales</div>
                <div className="text-2xl font-black text-gray-900">£900-£1,200</div>
                <div className="text-xs text-gray-500">per day</div>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">CRO</div>
                <div className="text-2xl font-black text-gray-900">£1,000-£1,400</div>
                <div className="text-xs text-gray-500">per day</div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">When to Hire a Fractional Sales Leader</h2>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-orange-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Transitioning from Founder-Led Sales</h4>
                  <p className="text-sm text-gray-600 m-0">Founder has been doing all selling, needs to hire and build a team.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-orange-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Post-Funding Scale</h4>
                  <p className="text-sm text-gray-600 m-0">Series A/B company needs to professionalize sales but can't justify full-time VP.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-orange-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Sales Turnaround</h4>
                  <p className="text-sm text-gray-600 m-0">Sales team underperforming, needs experienced leader to diagnose and fix.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-orange-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">New Market Entry</h4>
                  <p className="text-sm text-gray-600 m-0">Expanding to new geography or segment, needs GTM expertise.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Related Sales Roles</h2>

            <div className="grid md:grid-cols-3 gap-4 my-10">
              <Link href="/fractional-cro-jobs-uk" className="bg-white border-2 border-gray-200 p-5 rounded-lg hover:border-orange-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-orange-600">Fractional CRO</h3>
                <p className="text-sm text-gray-600">Revenue strategy</p>
              </Link>

              <Link href="/fractional-sales-jobs" className="bg-white border-2 border-gray-200 p-5 rounded-lg hover:border-orange-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-orange-600">Sales Jobs</h3>
                <p className="text-sm text-gray-600">All opportunities</p>
              </Link>

              <Link href="/fractional-sales-director-jobs-uk" className="bg-white border-2 border-gray-200 p-5 rounded-lg hover:border-orange-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-orange-600">Sales Director</h3>
                <p className="text-sm text-gray-600">Director roles</p>
              </Link>
            </div>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-orange-400">In summary:</strong> A fractional sales leader provides part-time (1-3 days/week) senior sales leadership at £700-£1,400/day - ideal for scaling companies building or fixing their revenue engine.
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
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Sales Leaders</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-sales-jobs" className="px-10 py-5 bg-white text-orange-600 font-bold uppercase tracking-wider hover:bg-orange-50 transition-colors">
              Sales Jobs
            </Link>
            <Link href="/contact" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-orange-600 transition-colors">
              Get Matched
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-sales-jobs" className="text-gray-600 hover:text-orange-600 font-medium">Sales Jobs</Link>
            <Link href="/fractional-cro-jobs-uk" className="text-gray-600 hover:text-orange-600 font-medium">CRO Jobs</Link>
            <Link href="/fractional-executive" className="text-gray-600 hover:text-orange-600 font-medium">Executive Guide</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
