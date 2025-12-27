import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Product Director UK 2025',
  description: 'Fractional product director UK. Part-time product leadership for scaling tech companies.',
  keywords: 'fractional product director, part-time product director, fractional head of product, fractional cpo, product leadership',
  alternates: {
    canonical: 'https://fractional.quest/fractional-product-director',
  },
  openGraph: {
    title: 'Fractional Product Director UK 2025',
    description: 'Part-time product leadership for tech companies.',
    url: 'https://fractional.quest/fractional-product-director',
  },
}

const faqItems = [
  {
    question: 'What is a fractional product director?',
    answer: 'A fractional product director is an experienced product leader who works with companies on a part-time basis, typically 1-3 days per week. They provide product strategy, team leadership, and process development without the cost of a full-time hire.',
  },
  {
    question: 'How much does a fractional product director cost?',
    answer: 'Fractional product directors in the UK typically charge £700-£1,200 per day. At 2 days per week, this equals £70,000-£120,000 annually—compared to £100,000-£150,000+ for a full-time product director.',
  },
  {
    question: 'When should I hire a fractional product director?',
    answer: 'Hire a fractional product director when: building your first product team; transitioning from founder-led product; scaling product operations; improving product-market fit; or needing experienced product leadership before committing full-time.',
  },
  {
    question: 'What is the difference between product director and CPO?',
    answer: 'A Product Director typically leads a product team or area, while a CPO (Chief Product Officer) has company-wide product responsibility and sits on the executive team. For smaller companies, these roles often overlap.',
  },
]

export default function FractionalProductDirectorPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-700 to-purple-600 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Product Leadership
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional<br />Product Director
            </h1>
            <p className="text-2xl md:text-3xl text-purple-100 leading-relaxed font-light">
              Part-time product leadership for tech companies building and scaling products.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-purple-50 border-b-4 border-purple-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-purple-200">
            <h2 className="text-3xl font-black text-gray-900 mb-6">What is a Fractional Product Director?</h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
              A <strong className="font-semibold text-gray-900">fractional product director</strong> is a senior product leader who works with companies 1-3 days per week, providing strategic product direction, team development, and process optimization without full-time commitment.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              This role is ideal for tech startups and scale-ups that need experienced product leadership to guide product strategy, improve discovery and delivery, and build high-performing product teams.
            </p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Product team collaborating on strategy"
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
            <h2 className="text-3xl font-black text-gray-900">What a Fractional Product Director Does</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              A fractional product director brings senior product expertise to growing tech companies. They typically own the following areas:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Product Strategy</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Define product vision and roadmap</li>
                  <li>Prioritize features and initiatives</li>
                  <li>Align product with business goals</li>
                  <li>Competitive and market analysis</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Discovery</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>User research frameworks</li>
                  <li>Problem validation</li>
                  <li>Solution ideation</li>
                  <li>Product-market fit</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Team Development</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Coach product managers</li>
                  <li>Define team structure</li>
                  <li>Hire product talent</li>
                  <li>Improve ways of working</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Process</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Implement product frameworks</li>
                  <li>Define metrics and OKRs</li>
                  <li>Improve cross-team collaboration</li>
                  <li>Stakeholder management</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">When to Hire a Fractional Product Director</h2>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-purple-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Founder-Led Product Transition</h4>
                  <p className="text-sm text-gray-600 m-0">The founder has been running product but needs to step back as the company scales.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-purple-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Building First Product Team</h4>
                  <p className="text-sm text-gray-600 m-0">Hiring first product managers and need someone to lead, coach, and set them up for success.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-purple-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Product-Market Fit Challenges</h4>
                  <p className="text-sm text-gray-600 m-0">Struggling to find PMF and need experienced guidance on discovery and validation.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-purple-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Scaling Product Operations</h4>
                  <p className="text-sm text-gray-600 m-0">Product team is growing and needs better processes, frameworks, and ways of working.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-purple-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Pre-Full-Time Hire</h4>
                  <p className="text-sm text-gray-600 m-0">Want to validate the need for senior product leadership before making a permanent hire.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional Product Director Costs</h2>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Day Rate</div>
                <div className="text-2xl font-black text-gray-900">£700-£1,200</div>
                <div className="text-xs text-gray-500">per day</div>
              </div>
              <div className="p-6 bg-purple-50 border border-purple-200 rounded-xl text-center">
                <div className="text-sm font-bold text-purple-700 uppercase mb-2">Annual (2 days/wk)</div>
                <div className="text-2xl font-black text-gray-900">£70,000-£120,000</div>
                <div className="text-xs text-gray-500">vs £130,000+ full-time</div>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Savings</div>
                <div className="text-2xl font-black text-gray-900">40-50%</div>
                <div className="text-xs text-gray-500">vs permanent hire</div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Product Leadership Hierarchy</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Understanding product leadership levels helps you choose the right role for your needs:
            </p>

            <div className="grid gap-4 my-10">
              <Link href="/fractional-cpo-jobs-uk" className="flex gap-4 p-5 border rounded-lg bg-white hover:border-purple-400 transition-colors group">
                <div className="w-1.5 bg-gray-300 rounded-full flex-shrink-0 group-hover:bg-purple-500"></div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 group-hover:text-purple-600">Chief Product Officer (CPO)</h4>
                  <p className="text-sm text-gray-600 m-0">Company-wide product responsibility, executive team member. £900-£1,400/day.</p>
                </div>
              </Link>

              <div className="flex gap-4 p-5 border-2 border-purple-300 rounded-lg bg-purple-50">
                <div className="w-1.5 bg-purple-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Product Director / VP Product</h4>
                  <p className="text-sm text-gray-600 m-0">Leads product team and strategy, reports to CEO or CPO. £700-£1,200/day.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Head of Product</h4>
                  <p className="text-sm text-gray-600 m-0">Manages product team, often first senior product hire. £600-£1,000/day.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Senior Product Manager</h4>
                  <p className="text-sm text-gray-600 m-0">Individual contributor on specific product areas. £500-£800/day.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">What to Look for in a Fractional Product Director</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              According to the <a href="https://www.mindtheproduct.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700">Mind the Product</a> community, effective product leaders combine strategic vision with hands-on expertise:
            </p>

            <ul className="text-lg space-y-3 my-8">
              <li><strong>Relevant experience:</strong> Track record in your industry, business model, and company stage</li>
              <li><strong>Discovery expertise:</strong> Can run user research and validate problems effectively</li>
              <li><strong>Delivery capability:</strong> Understands agile, works well with engineering</li>
              <li><strong>Commercial acumen:</strong> Connects product to business outcomes</li>
              <li><strong>Leadership skills:</strong> Can coach PMs and build team culture</li>
            </ul>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-purple-400">Summary:</strong> A fractional product director provides part-time (1-3 days/week) product leadership at £700-£1,200/day—ideal for tech companies building or scaling their product function.
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
      <section className="py-20 bg-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Product Leaders</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-cpo-jobs-uk" className="px-10 py-5 bg-white text-purple-700 font-bold uppercase tracking-wider hover:bg-purple-50 transition-colors">
              CPO Jobs
            </Link>
            <Link href="/fractional-executive-jobs" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-purple-700 transition-colors">
              All Executive Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-cpo-jobs-uk" className="text-gray-600 hover:text-purple-700 font-medium">CPO Jobs</Link>
            <Link href="/fractional-cto-jobs-uk" className="text-gray-600 hover:text-purple-700 font-medium">CTO Jobs</Link>
            <Link href="/fractional-executive-jobs" className="text-gray-600 hover:text-purple-700 font-medium">Executive Jobs</Link>
            <Link href="/fractional-c-suite" className="text-gray-600 hover:text-purple-700 font-medium">C-Suite</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
