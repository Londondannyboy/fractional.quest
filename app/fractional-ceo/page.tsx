import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CEO Guide UK 2025',
  description: 'What is a fractional CEO? Part-time chief executive roles UK. When to hire, costs, vs interim.',
  keywords: 'fractional ceo, what is a fractional ceo, part-time ceo, fractional chief executive, fractional ceo services, fractional ceo cost, hire fractional ceo',
  alternates: {
    canonical: 'https://fractional.quest/fractional-ceo',
  },
  openGraph: {
    title: 'Fractional CEO Guide UK 2025',
    description: 'Part-time chief executive leadership for growing companies.',
    url: 'https://fractional.quest/fractional-ceo',
  },
}

const faqItems = [
  {
    question: 'What is a Fractional CEO?',
    answer: 'A Fractional CEO is an experienced chief executive who works with a company on a part-time basis, typically 2-3 days per week. They provide strategic leadership, board management, and overall company direction without the cost of a full-time CEO. This model is common for companies between executive stages or those needing specific expertise.',
  },
  {
    question: 'How much does a Fractional CEO cost?',
    answer: 'Fractional CEOs in the UK typically charge £1,200-£2,000 per day, or £10,000-£20,000 per month for 2-3 days per week. This compares to full-time CEO compensation of £200,000-£500,000+ annually (salary, bonus, and equity). Companies typically save 50-70% with a fractional model.',
  },
  {
    question: 'When should a company hire a Fractional CEO?',
    answer: 'Companies hire fractional CEOs when: founders want to step back but the company isn\'t ready for full-time CEO; during transition between CEOs; when specific expertise is needed (turnaround, scale-up, exit preparation); or when a board wants experienced leadership oversight at reduced cost.',
  },
  {
    question: 'What\'s the difference between a Fractional CEO and Interim CEO?',
    answer: 'A Fractional CEO works part-time (2-3 days/week) on an ongoing basis across potentially multiple companies. An Interim CEO works full-time (5 days/week) temporarily (3-12 months) for one company during a transition. Fractional is ongoing part-time; interim is temporary full-time.',
  },
  {
    question: 'What does a Fractional CEO do?',
    answer: 'A Fractional CEO provides strategic direction, manages the board and investors, oversees the executive team, represents the company externally, drives key initiatives, and takes overall accountability for company performance—all on a part-time basis. They typically focus on high-level strategy rather than day-to-day operations.',
  },
  {
    question: 'Can a startup have a Fractional CEO?',
    answer: 'Yes, though it\'s more common for post-seed or Series A companies. Fractional CEOs work well when: a technical founder wants to focus on product; the company needs "adult supervision" for investors; or there\'s a specific growth phase requiring CEO-level experience the founding team lacks.',
  },
]

export default function FractionalCEOPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Fractional CEO: The Complete Guide to Part-Time Chief Executive Leadership',
    description: 'A comprehensive guide to fractional CEOs - what they do, when to hire one, typical costs, and how they differ from interim CEOs.',
    author: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    publisher: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    datePublished: '2025-01-16',
    dateModified: '2025-01-16',
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Complete Guide 2025
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional<br />CEO
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light">
              Part-time chief executive leadership for companies that need strategic direction without full-time cost.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-gray-50 border-b-4 border-gray-400">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-gray-200">
            <div className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-4">Definition</div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
              What is a Fractional CEO?
            </h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
              A <strong className="font-semibold text-gray-900">Fractional CEO</strong> is an experienced chief executive who provides part-time leadership to a company, typically working 2-3 days per week.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Unlike full-time CEOs, fractional CEOs split their time across companies, providing strategic direction, board management, and executive oversight at a fraction of full-time cost. According to the <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 underline">Institute of Directors</a>, this model is increasingly used by PE-backed companies, founder-led businesses, and organisations in transition.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="CEO leading executive meeting"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-sm text-gray-500 mt-3 text-center">Fractional CEOs provide strategic leadership on a part-time basis</p>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-xl prose-gray max-w-none">
            <h2 className="text-3xl font-black text-gray-900">Understanding the Fractional CEO Model</h2>

            <p className="text-lg leading-relaxed">
              The CEO role is unique among C-suite positions. While fractional CFOs, CMOs, and CTOs have become mainstream, fractional CEOs remain less common—but they're growing rapidly. The model works particularly well in specific situations where companies need experienced leadership but full-time isn't practical or necessary.
            </p>

            <p className="text-lg leading-relaxed">
              According to research from the <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 underline">ScaleUp Institute</a>, the demand for flexible C-suite leadership has grown 300% since 2019, with CEO-level roles representing the fastest-growing segment as founders seek experienced co-pilots for growth phases.
            </p>

            <div className="bg-gray-50 border-l-4 border-gray-500 p-8 my-10">
              <p className="text-xl font-semibold text-gray-900 mb-3">
                When Fractional CEOs Make Sense
              </p>
              <ul className="text-gray-700 mb-0 space-y-2">
                <li><strong>Founder stepping back:</strong> Technical founder wants to focus on product while company gets "CEO-level" leadership</li>
                <li><strong>Portfolio companies:</strong> PE/VC-backed companies needing experienced oversight across multiple investments</li>
                <li><strong>Transition phases:</strong> Between full-time CEOs or during restructuring</li>
                <li><strong>Specific expertise:</strong> Turnaround, exit preparation, international expansion</li>
              </ul>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">What Does a Fractional CEO Do?</h2>

            <p className="text-lg">
              A fractional CEO handles the same responsibilities as a full-time CEO—just on a reduced schedule. The key is focus: fractional CEOs typically concentrate on high-leverage activities rather than day-to-day operations.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <span className="text-gray-600 mr-2">01</span> Strategic Direction
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Setting and communicating company vision</li>
                  <li>Strategic planning and execution oversight</li>
                  <li>Key decision-making on priorities</li>
                  <li>Resource allocation</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <span className="text-gray-600 mr-2">02</span> Board & Investors
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Board meeting preparation and leadership</li>
                  <li>Investor relations and reporting</li>
                  <li>Fundraising strategy and execution</li>
                  <li>Stakeholder communication</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <span className="text-gray-600 mr-2">03</span> Executive Team
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Building and developing leadership team</li>
                  <li>Executive hiring decisions</li>
                  <li>Performance management</li>
                  <li>Culture and values leadership</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <span className="text-gray-600 mr-2">04</span> External Leadership
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Key customer and partner relationships</li>
                  <li>Industry representation</li>
                  <li>M&A and partnership opportunities</li>
                  <li>Crisis management</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional CEO vs Interim CEO</h2>

            <p className="text-lg">
              These terms are often confused, but they represent different models:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 font-semibold text-gray-900 border-b-2 border-gray-400">Factor</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b-2 border-gray-400">Fractional CEO</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b-2 border-gray-400">Interim CEO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-gray-900">Time Commitment</td>
                    <td className="p-4 text-gray-700">Part-time (2-3 days/week)</td>
                    <td className="p-4 text-gray-700">Full-time (5 days/week)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-gray-900">Duration</td>
                    <td className="p-4 text-gray-700">Ongoing (6 months+)</td>
                    <td className="p-4 text-gray-700">Temporary (3-12 months)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-gray-900">Clients</td>
                    <td className="p-4 text-gray-700">2-3 simultaneously</td>
                    <td className="p-4 text-gray-700">One at a time</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-gray-900">Purpose</td>
                    <td className="p-4 text-gray-700">Ongoing leadership</td>
                    <td className="p-4 text-gray-700">Crisis/transition coverage</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-gray-900">Cost</td>
                    <td className="p-4 text-gray-700">£10k-£20k/month</td>
                    <td className="p-4 text-gray-700">£25k-£50k/month</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-lg">
              Choose <strong>Fractional</strong> for ongoing part-time leadership. Choose <strong><Link href="/interim-ceo" className="text-gray-600 hover:text-gray-800 underline">Interim</Link></strong> for temporary full-time coverage during CEO transitions or crises.
            </p>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional CEO Costs</h2>

            <p className="text-lg">
              Fractional CEO compensation in the UK typically falls into these ranges:
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">1 Day/Week</div>
                <div className="text-2xl font-black text-gray-900">£5k-£8k</div>
                <div className="text-xs text-gray-500">per month</div>
              </div>
              <div className="p-6 bg-gray-900 text-white rounded-xl text-center">
                <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">2-3 Days/Week</div>
                <div className="text-2xl font-black text-white">£10k-£20k</div>
                <div className="text-xs text-gray-400">per month (most common)</div>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Day Rate</div>
                <div className="text-2xl font-black text-gray-900">£1,200-£2,000</div>
                <div className="text-xs text-gray-500">per day</div>
              </div>
            </div>

            <p className="text-lg">
              Compare this to full-time CEO compensation: £200,000-£500,000+ base salary plus bonus and equity. A fractional CEO at 2 days per week costs roughly <strong>40-60% less</strong> than a full-time hire, with flexibility to adjust as needs change.
            </p>

            <h2 className="text-3xl font-black text-gray-900 mt-16">When to Hire a Fractional CEO</h2>

            <p className="text-lg">
              Fractional CEOs work best in specific situations. The model is less suitable for companies that need intensive, daily CEO involvement:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                <h4 className="font-bold text-green-800 mb-3">Good Fit</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Technical founder wants to step back from CEO duties</li>
                  <li>Company between growth stages (e.g., post-Series A)</li>
                  <li>PE/VC wants experienced oversight across portfolio</li>
                  <li>Preparing for exit or major transaction</li>
                  <li>Strong COO/team handles day-to-day operations</li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                <h4 className="font-bold text-red-800 mb-3">Poor Fit</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Crisis requiring intensive daily leadership</li>
                  <li>Company needs CEO for external representation daily</li>
                  <li>Weak or non-existent management team</li>
                  <li>Highly operational role required</li>
                  <li>Team needs constant direction and support</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">How Fractional CEOs Structure Their Work</h2>

            <p className="text-lg">
              Most fractional CEOs work with 2-3 companies simultaneously, dedicating 1-3 days per week to each:
            </p>

            <div className="bg-gray-50 p-8 rounded-lg my-8 border-l-4 border-gray-500">
              <h3 className="text-2xl font-bold text-gray-900 mt-0 mb-4">Typical Week (2 clients, 2 days each)</h3>
              <ul className="text-gray-700 space-y-2 mb-0">
                <li><strong>Monday-Tuesday:</strong> Company A - board prep, exec team meetings, strategic decisions</li>
                <li><strong>Wednesday-Thursday:</strong> Company B - investor meetings, key hires, customer calls</li>
                <li><strong>Friday:</strong> Admin, networking, business development</li>
              </ul>
            </div>

            <p className="text-lg">
              The key to success is having a strong operating team—COO, department heads—who handle daily execution. The fractional CEO focuses on strategy, board, investors, and key decisions that only the CEO can make.
            </p>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Related Executive Roles</h2>

            <p className="text-lg">
              If you're exploring fractional leadership, consider these related options:
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-10">
              <Link href="/fractional-cfo" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-gray-600">Fractional CFO</h3>
                <p className="text-gray-600 text-sm mb-0">Financial leadership, fundraising, board reporting</p>
              </Link>

              <Link href="/fractional-coo" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-gray-600">Fractional COO</h3>
                <p className="text-gray-600 text-sm mb-0">Operations, scaling, process optimization</p>
              </Link>

              <Link href="/interim-ceo" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-gray-600">Interim CEO</h3>
                <p className="text-gray-600 text-sm mb-0">Full-time temporary coverage during transitions</p>
              </Link>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">The Bottom Line</h2>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-xl leading-relaxed mb-6">
                <strong className="text-gray-400">Fractional CEO in one sentence:</strong>
              </p>
              <p className="text-2xl font-light leading-relaxed mb-0">
                An experienced chief executive who provides part-time (2-3 days/week) strategic leadership—board management, investor relations, executive team oversight—at 40-60% less cost than a full-time CEO.
              </p>
            </div>

            <p className="text-lg">
              The fractional CEO model isn't for every company, but for founder-led businesses scaling up, PE portfolio companies, or organisations in transition, it offers a compelling way to access experienced CEO leadership without the full-time commitment and cost.
            </p>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Frequently Asked Questions</h2>
          <FAQ items={faqItems} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Explore Fractional CEO Opportunities
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Browse live fractional and interim CEO roles, or learn about related leadership positions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-ceo-jobs-uk" className="px-10 py-5 bg-white text-gray-900 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Fractional CEO Jobs UK
            </Link>
            <Link href="/contact" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-gray-900 transition-colors">
              Get Matched
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Related Guides</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-ceo-jobs-uk" className="text-gray-600 hover:text-gray-800 font-medium transition-colors">
                Fractional CEO Jobs UK
              </Link>
              <Link href="/interim-ceo" className="text-gray-600 hover:text-gray-800 font-medium transition-colors">
                Interim CEO
              </Link>
              <Link href="/fractional-cfo" className="text-gray-600 hover:text-gray-800 font-medium transition-colors">
                Fractional CFO
              </Link>
              <Link href="/fractional-coo" className="text-gray-600 hover:text-gray-800 font-medium transition-colors">
                Fractional COO
              </Link>
              <Link href="/fractional-executive" className="text-gray-600 hover:text-gray-800 font-medium transition-colors">
                Fractional Executive Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
