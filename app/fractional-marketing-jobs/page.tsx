import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Marketing Jobs UK 2025',
  description: 'Find fractional marketing jobs UK. CMO, marketing director, VP marketing roles.',
  keywords: 'fractional marketing jobs, fractional cmo jobs, marketing director jobs, part-time marketing jobs, vp marketing jobs, marketing executive jobs',
  alternates: {
    canonical: 'https://fractional.quest/fractional-marketing-jobs',
  },
  openGraph: {
    title: 'Fractional Marketing Jobs UK 2025',
    description: 'Part-time marketing leadership roles across CMO, director, VP positions.',
    url: 'https://fractional.quest/fractional-marketing-jobs',
  },
}

const faqItems = [
  {
    question: 'What are fractional marketing jobs?',
    answer: 'Fractional marketing jobs are part-time marketing leadership roles where experienced marketing executives work 1-3 days per week. Common roles include fractional CMO, marketing director, VP marketing, and head of marketing positions.',
  },
  {
    question: 'How much do fractional marketing jobs pay?',
    answer: 'Fractional marketing jobs in the UK typically pay £700-£1,400 per day. CMO-level roles command £900-£1,400/day, while director-level roles range from £700-£1,100/day. Annual earnings of £100,000-£250,000+ are common working with multiple clients.',
  },
  {
    question: 'What experience do I need for fractional marketing jobs?',
    answer: 'Most fractional marketing jobs require 12-15+ years of marketing experience with at least 5 years in senior leadership roles. Specific expertise in marketing channels (performance, brand, PLG, ABM) and industry experience are typically required.',
  },
  {
    question: 'What is the difference between fractional CMO and marketing consultant?',
    answer: 'A fractional CMO is an embedded leader who manages teams and owns marketing outcomes on an ongoing basis. A marketing consultant typically advises on specific projects without team management responsibility. Fractional CMOs are part of the leadership team.',
  },
  {
    question: 'Are fractional marketing jobs remote?',
    answer: 'Many fractional marketing jobs are hybrid (1-2 days on-site, rest remote) or fully remote. Marketing leadership translates well to remote work, though some companies prefer occasional in-person time for team building and strategic sessions.',
  },
  {
    question: 'What industries hire fractional marketing executives?',
    answer: 'The highest demand comes from B2B SaaS, FinTech, DTC/ecommerce, HealthTech, and Professional Services. Startups post-Series A and scale-ups are particularly active in hiring fractional marketing leadership.',
  },
]

export default function FractionalMarketingJobsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Fractional Marketing Jobs: Find Part-Time Marketing Leadership Roles UK',
    description: 'Find fractional marketing jobs in the UK. Browse CMO, marketing director, VP marketing, and other part-time marketing leadership opportunities.',
    author: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    publisher: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    datePublished: '2025-01-16',
    dateModified: '2025-01-16',
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-600 to-pink-500 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Marketing Jobs
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional<br />Marketing Jobs
            </h1>
            <p className="text-2xl md:text-3xl text-pink-100 leading-relaxed font-light">
              Part-time marketing leadership roles across CMO, director, and VP positions.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-pink-50 border-b-4 border-pink-500">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center border border-pink-200">
              <div className="text-3xl font-black text-pink-600">£700-1,400</div>
              <div className="text-sm text-gray-600">Daily Rate Range</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-pink-200">
              <div className="text-3xl font-black text-pink-600">1-3</div>
              <div className="text-sm text-gray-600">Days Per Week</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-pink-200">
              <div className="text-3xl font-black text-pink-600">12+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-pink-200">
              <div className="text-3xl font-black text-pink-600">B2B SaaS</div>
              <div className="text-sm text-gray-600">Top Industry</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Marketing team meeting - fractional marketing jobs"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-sm text-gray-500 mt-3 text-center">Fractional marketing executives provide strategic leadership on a part-time basis</p>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-xl prose-gray max-w-none">
            <h2 className="text-3xl font-black text-gray-900">Fractional Marketing Jobs by Role</h2>

            <p className="text-lg leading-relaxed">
              The fractional marketing market spans multiple seniority levels. Here are the main roles and current market rates:
            </p>

            <div className="grid gap-6 my-10">
              <Link href="/fractional-cmo-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-pink-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-pink-600">Fractional CMO</h3>
                  <p className="text-gray-600 text-sm mb-0">
                    Strategic marketing leadership, team management, board-level reporting
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-pink-600 font-bold">£900-£1,400/day</div>
                  <div className="text-sm text-gray-500">Most senior</div>
                </div>
              </Link>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Fractional VP Marketing</h3>
                    <p className="text-gray-600 text-sm mb-0">
                      Demand generation, marketing ops, team leadership
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-pink-600 font-bold">£800-£1,200/day</div>
                    <div className="text-sm text-gray-500">Senior</div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Fractional Marketing Director</h3>
                    <p className="text-gray-600 text-sm mb-0">
                      Marketing strategy, channel management, execution oversight
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-pink-600 font-bold">£700-£1,100/day</div>
                    <div className="text-sm text-gray-500">Mid-senior</div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Fractional Head of Marketing</h3>
                    <p className="text-gray-600 text-sm mb-0">
                      First marketing hire, building function, hands-on execution
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-pink-600 font-bold">£600-£900/day</div>
                    <div className="text-sm text-gray-500">Scaling companies</div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Marketing Specializations in Demand</h2>

            <p className="text-lg">
              Within fractional marketing, certain specializations command premium rates:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Product-Led Growth (PLG)</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Expertise in self-serve acquisition, activation, and growth loops for SaaS products.
                </p>
                <p className="text-sm text-pink-600">High demand in SaaS</p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">B2B Demand Generation</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Pipeline generation, ABM, content marketing, and sales enablement for B2B.
                </p>
                <p className="text-sm text-pink-600">Core B2B skill</p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Performance Marketing</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Paid acquisition, CAC optimization, attribution, and marketing analytics.
                </p>
                <p className="text-sm text-pink-600">DTC & ecommerce</p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Brand Strategy</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Positioning, messaging, rebrand, and brand-building for scale-ups.
                </p>
                <p className="text-sm text-pink-600">Premium positioning</p>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Industries Hiring Fractional Marketing</h2>

            <p className="text-lg">
              According to research from the <a href="https://www.cim.co.uk/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">Chartered Institute of Marketing</a>, these sectors lead fractional marketing hiring:
            </p>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-pink-300 transition-colors">
                <div className="w-1.5 bg-pink-500 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">B2B SaaS</h4>
                  <p className="text-sm text-gray-600 m-0">Post-Series A companies scaling marketing. PLG, demand gen, and content expertise valued.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-pink-300 transition-colors">
                <div className="w-1.5 bg-pink-500 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">FinTech</h4>
                  <p className="text-sm text-gray-600 m-0">Regulated marketing, financial services positioning, B2B and B2C expertise.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-pink-300 transition-colors">
                <div className="w-1.5 bg-pink-500 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">DTC / E-commerce</h4>
                  <p className="text-sm text-gray-600 m-0">Performance marketing, CRM, retention, and brand building for consumer brands.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-pink-300 transition-colors">
                <div className="w-1.5 bg-pink-500 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">HealthTech</h4>
                  <p className="text-sm text-gray-600 m-0">B2B and B2C healthcare marketing, NHS engagement, and health comms expertise.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-pink-300 transition-colors">
                <div className="w-1.5 bg-pink-500 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">Professional Services</h4>
                  <p className="text-sm text-gray-600 m-0">Thought leadership, BD marketing, and partner marketing for law, accounting, consulting.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Where to Find Fractional Marketing Jobs</h2>

            <p className="text-lg">
              Fractional marketing opportunities come through multiple channels:
            </p>

            <ul className="text-lg space-y-3">
              <li><strong>Specialist platforms:</strong> <Link href="/fractional-jobs" className="text-pink-600 hover:underline">Fractional.Quest</Link>, Chief Outsiders</li>
              <li><strong>LinkedIn:</strong> Search "fractional CMO" or "part-time marketing director"</li>
              <li><strong>VC networks:</strong> Portfolio company opportunities</li>
              <li><strong>Marketing communities:</strong> <a href="https://www.dma.org.uk/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">DMA</a>, CIM, industry Slack groups</li>
              <li><strong>Referrals:</strong> Former colleagues, clients, and founders</li>
            </ul>

            <div className="bg-pink-50 border-l-4 border-pink-500 p-8 my-10">
              <p className="text-xl font-semibold text-gray-900 mb-3">
                Pro Tip: Build Your Personal Brand
              </p>
              <p className="text-gray-700 mb-0">
                Successful fractional marketers often attract clients through content marketing—LinkedIn posts, newsletters, speaking—demonstrating the expertise they'll bring to clients. This "eating your own cooking" approach is particularly relevant for marketing roles.
              </p>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">The Bottom Line</h2>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-xl leading-relaxed mb-6">
                <strong className="text-pink-400">Fractional marketing jobs in summary:</strong>
              </p>
              <p className="text-2xl font-light leading-relaxed mb-0">
                Part-time marketing leadership roles (CMO, VP, Director) paying £700-£1,400/day, primarily in B2B SaaS, FinTech, and DTC. Requires 12-15+ years experience and specific industry/channel expertise.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Frequently Asked Questions</h2>
          <FAQ skipSchema={true} items={faqItems} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Browse Marketing Jobs
          </h2>
          <p className="text-xl text-pink-100 mb-10 max-w-2xl mx-auto">
            See all live fractional marketing opportunities from CMO to marketing director.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-cmo-jobs-uk" className="px-10 py-5 bg-white text-pink-600 font-bold uppercase tracking-wider hover:bg-pink-50 transition-colors">
              CMO Jobs
            </Link>
            <Link href="/fractional-cmo" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-pink-600 transition-colors">
              CMO Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Related</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-cmo-jobs-uk" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">
                CMO Jobs UK
              </Link>
              <Link href="/fractional-cmo" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">
                Fractional CMO Guide
              </Link>
              <Link href="/hire-fractional-cmo" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">
                Hire a CMO
              </Link>
              <Link href="/fractional-executive-jobs" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">
                All Executive Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
