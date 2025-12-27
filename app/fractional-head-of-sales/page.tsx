import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Head of Sales UK 2025',
  description: 'Fractional head of sales UK. Part-time sales leadership for building and scaling your sales function.',
  keywords: 'fractional head of sales, part-time head of sales, fractional sales leader, fractional vp sales, sales leadership',
  alternates: {
    canonical: 'https://fractional.quest/fractional-head-of-sales',
  },
  openGraph: {
    title: 'Fractional Head of Sales UK 2025',
    description: 'Part-time sales leadership for growing businesses.',
    url: 'https://fractional.quest/fractional-head-of-sales',
  },
}

const faqItems = [
  {
    question: 'What is a fractional head of sales?',
    answer: 'A fractional head of sales is an experienced sales leader who works with companies on a part-time basis, typically 1-3 days per week. They provide sales strategy, team leadership, and process development without the cost of a full-time hire.',
  },
  {
    question: 'How much does a fractional head of sales cost?',
    answer: 'Fractional heads of sales in the UK typically charge £600-£1,000 per day. At 2 days per week, this equals £60,000-£100,000 annually—compared to £80,000-£150,000+ for a full-time head of sales with benefits.',
  },
  {
    question: 'When should I hire a fractional head of sales?',
    answer: 'Hire a fractional head of sales when: transitioning from founder-led sales; building your first sales team; scaling post-funding; entering new markets; or needing experienced leadership before committing to a full-time hire.',
  },
  {
    question: 'What is the difference between fractional head of sales and VP Sales?',
    answer: 'Head of Sales typically manages the sales team and day-to-day operations. VP Sales operates at a more strategic level, often overseeing multiple teams or regions. In practice, for smaller companies, the terms are often interchangeable.',
  },
]

export default function FractionalHeadOfSalesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-600 to-rose-500 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Sales Leadership
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional<br />Head of Sales
            </h1>
            <p className="text-2xl md:text-3xl text-rose-100 leading-relaxed font-light">
              Part-time sales leadership for companies building and scaling their revenue function.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-rose-50 border-b-4 border-rose-500">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-rose-200">
            <h2 className="text-3xl font-black text-gray-900 mb-6">What is a Fractional Head of Sales?</h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
              A <strong className="font-semibold text-gray-900">fractional head of sales</strong> is an experienced sales executive who works with companies 1-3 days per week, providing the leadership needed to build, manage, and scale sales operations without full-time cost.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              This role is perfect for scale-ups transitioning from founder-led sales, post-funding companies building their first sales team, or businesses needing experienced guidance during critical growth phases.
            </p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200"
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
            <h2 className="text-3xl font-black text-gray-900">What a Fractional Head of Sales Does</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              A fractional head of sales brings senior sales expertise to growing companies that need leadership but can't justify or afford a full-time hire. They typically own the following responsibilities:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Sales Strategy</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Define go-to-market approach</li>
                  <li>Set targets and quotas</li>
                  <li>Design sales process and playbook</li>
                  <li>Territory and segment planning</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Team Building</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Hire and onboard sales reps</li>
                  <li>Define roles and team structure</li>
                  <li>Create compensation plans</li>
                  <li>Build sales enablement</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Operations</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Implement and optimize CRM</li>
                  <li>Pipeline management</li>
                  <li>Forecasting and reporting</li>
                  <li>Sales tech stack</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Coaching</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>1:1 rep coaching</li>
                  <li>Deal support and strategy</li>
                  <li>Skills development</li>
                  <li>Performance management</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">When to Hire a Fractional Head of Sales</h2>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-rose-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Founder-Led Sales Transition</h4>
                  <p className="text-sm text-gray-600 m-0">The founder has been doing all selling but needs to step back and build a team. A fractional leader can own this transition.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-rose-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Post-Funding Scale</h4>
                  <p className="text-sm text-gray-600 m-0">You've raised a seed or Series A round and need to build a sales function quickly but smartly.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-rose-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Building First Sales Team</h4>
                  <p className="text-sm text-gray-600 m-0">You're hiring your first 2-5 salespeople and need experienced leadership to set them up for success.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-rose-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Sales Turnaround</h4>
                  <p className="text-sm text-gray-600 m-0">Your sales aren't hitting targets and you need someone to diagnose issues and implement fixes.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-rose-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Test Before Full-Time</h4>
                  <p className="text-sm text-gray-600 m-0">You want to validate that a head of sales role will work before making a permanent, expensive hire.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional Head of Sales Costs</h2>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Day Rate</div>
                <div className="text-2xl font-black text-gray-900">£600-£1,000</div>
                <div className="text-xs text-gray-500">per day</div>
              </div>
              <div className="p-6 bg-rose-50 border border-rose-200 rounded-xl text-center">
                <div className="text-sm font-bold text-rose-600 uppercase mb-2">Annual (2 days/wk)</div>
                <div className="text-2xl font-black text-gray-900">£60,000-£100,000</div>
                <div className="text-xs text-gray-500">vs £120,000+ full-time</div>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Savings</div>
                <div className="text-2xl font-black text-gray-900">40-60%</div>
                <div className="text-xs text-gray-500">vs permanent hire</div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Sales Leadership Hierarchy</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Understanding how head of sales fits into the broader sales leadership landscape helps you choose the right level for your needs:
            </p>

            <div className="grid gap-4 my-10">
              <Link href="/fractional-cro-jobs-uk" className="flex gap-4 p-5 border rounded-lg bg-white hover:border-rose-400 transition-colors group">
                <div className="w-1.5 bg-gray-300 rounded-full flex-shrink-0 group-hover:bg-rose-500"></div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 group-hover:text-rose-600">Chief Revenue Officer (CRO)</h4>
                  <p className="text-sm text-gray-600 m-0">Owns entire revenue engine: sales, marketing, customer success. £900-£1,400/day.</p>
                </div>
              </Link>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">VP Sales</h4>
                  <p className="text-sm text-gray-600 m-0">Strategic sales leadership, often overseeing multiple teams or regions. £800-£1,200/day.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border-2 border-rose-300 rounded-lg bg-rose-50">
                <div className="w-1.5 bg-rose-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Head of Sales</h4>
                  <p className="text-sm text-gray-600 m-0">Day-to-day sales team leadership, process, and performance. £600-£1,000/day.</p>
                </div>
              </div>

              <Link href="/fractional-sales-director-jobs-uk" className="flex gap-4 p-5 border rounded-lg bg-white hover:border-rose-400 transition-colors group">
                <div className="w-1.5 bg-gray-300 rounded-full flex-shrink-0 group-hover:bg-rose-500"></div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 group-hover:text-rose-600">Sales Director</h4>
                  <p className="text-sm text-gray-600 m-0">Similar to Head of Sales, sometimes more strategic focus. £700-£1,100/day.</p>
                </div>
              </Link>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">What to Look for in a Fractional Head of Sales</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              According to the <a href="https://www.ism.org" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-700">Institute of Sales Management</a>, effective sales leaders combine strategic thinking with hands-on execution capability:
            </p>

            <ul className="text-lg space-y-3 my-8">
              <li><strong>Relevant experience:</strong> Track record in your industry, business model, and stage</li>
              <li><strong>Building capability:</strong> Experience hiring and developing sales teams from scratch</li>
              <li><strong>Process orientation:</strong> Ability to design and implement scalable sales processes</li>
              <li><strong>Coaching skills:</strong> Can develop individual reps, not just manage numbers</li>
              <li><strong>Commercial acumen:</strong> Understands unit economics, not just closing deals</li>
            </ul>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-rose-400">Summary:</strong> A fractional head of sales provides part-time (1-3 days/week) sales leadership at £600-£1,000/day—ideal for companies building or scaling their first sales function.
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
      <section className="py-20 bg-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Sales Leaders</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-sales-jobs" className="px-10 py-5 bg-white text-rose-600 font-bold uppercase tracking-wider hover:bg-rose-50 transition-colors">
              Sales Jobs
            </Link>
            <Link href="/fractional-cro-jobs-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-rose-600 transition-colors">
              CRO Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-sales-leader" className="text-gray-600 hover:text-rose-600 font-medium">Sales Leader Guide</Link>
            <Link href="/fractional-cro-jobs-uk" className="text-gray-600 hover:text-rose-600 font-medium">CRO Jobs</Link>
            <Link href="/fractional-sales-jobs" className="text-gray-600 hover:text-rose-600 font-medium">Sales Jobs</Link>
            <Link href="/fractional-sales-director-jobs-uk" className="text-gray-600 hover:text-rose-600 font-medium">Sales Director</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
