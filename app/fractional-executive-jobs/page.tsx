import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Executive Jobs UK 2025',
  description: 'Find fractional executive jobs UK. CFO, CMO, CTO, COO roles. Part-time C-suite positions.',
  keywords: 'fractional executive jobs, fractional jobs, part-time executive jobs, fractional cfo jobs, fractional cmo jobs, fractional cto jobs, c-suite jobs',
  alternates: {
    canonical: 'https://fractional.quest/fractional-executive-jobs',
  },
  openGraph: {
    title: 'Fractional Executive Jobs UK 2025',
    description: 'Find part-time C-suite roles across CFO, CMO, CTO, COO.',
    url: 'https://fractional.quest/fractional-executive-jobs',
  },
}

const faqItems = [
  {
    question: 'What are fractional executive jobs?',
    answer: 'Fractional executive jobs are part-time C-suite positions where experienced executives work 1-3 days per week for a company. Common roles include fractional CFO, CMO, CTO, COO, and CHRO. These jobs offer senior leadership experience without full-time commitment.',
  },
  {
    question: 'How much do fractional executive jobs pay?',
    answer: 'Fractional executive jobs in the UK typically pay £700-£1,600 per day, depending on role and experience. Working with 2-4 clients at 1-2 days each, annual earnings of £150,000-£350,000+ are common for experienced fractional executives.',
  },
  {
    question: 'Where can I find fractional executive jobs?',
    answer: 'Fractional executive jobs can be found through specialist platforms like Fractional.Quest, executive networks, fractional agencies, LinkedIn, and referrals. Many fractional jobs are not publicly advertised and come through network connections.',
  },
  {
    question: 'What experience do I need for fractional executive jobs?',
    answer: 'Most fractional executive jobs require 15-20+ years of experience with significant senior leadership or C-suite roles. Specific expertise in a function (finance, marketing, technology) and industry experience are typically essential.',
  },
  {
    question: 'Are fractional executive jobs remote?',
    answer: 'Many fractional executive jobs are hybrid, with 1-2 days on-site and the remainder remote. Some roles are fully remote, particularly in tech companies. The flexibility varies by company and role requirements.',
  },
  {
    question: 'How do I transition to fractional executive work?',
    answer: 'To transition to fractional work, start by defining your niche (industry, function, company stage), build your network, establish your personal brand, and begin with 1-2 clients while potentially maintaining other work. Many executives transition gradually over 6-12 months.',
  },
]

export default function FractionalExecutiveJobsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Fractional Executive Jobs: Find Part-Time C-Suite Roles UK',
    description: 'Find fractional executive jobs in the UK. Browse CFO, CMO, CTO, COO, and other part-time C-suite opportunities.',
    author: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    publisher: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    datePublished: '2025-01-16',
    dateModified: '2025-01-16',
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-700 to-violet-600 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Jobs Guide
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional<br />Executive Jobs
            </h1>
            <p className="text-2xl md:text-3xl text-violet-100 leading-relaxed font-light">
              Find part-time C-suite roles across CFO, CMO, CTO, COO, and other senior positions.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-violet-50 border-b-4 border-violet-500">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center border border-violet-200">
              <div className="text-3xl font-black text-violet-600">£700-1,600</div>
              <div className="text-sm text-gray-600">Daily Rate Range</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-violet-200">
              <div className="text-3xl font-black text-violet-600">1-3</div>
              <div className="text-sm text-gray-600">Days Per Week</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-violet-200">
              <div className="text-3xl font-black text-violet-600">2-4</div>
              <div className="text-sm text-gray-600">Typical Clients</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-violet-200">
              <div className="text-3xl font-black text-violet-600">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Executive working on laptop - fractional executive jobs"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-sm text-gray-500 mt-3 text-center">Fractional executives work across multiple companies, building portfolio careers</p>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-xl prose-gray max-w-none">
            <h2 className="text-3xl font-black text-gray-900">Fractional Executive Jobs by Role</h2>

            <p className="text-lg leading-relaxed">
              The fractional executive market spans virtually every C-suite function. Here are the most common roles and where to find opportunities:
            </p>

            <div className="grid gap-6 my-10">
              <Link href="/fractional-cfo-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-violet-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-violet-600">Fractional CFO Jobs</h3>
                  <p className="text-gray-600 text-sm mb-0">
                    Financial leadership, fundraising, board reporting, M&A support
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-violet-600 font-bold">£800-£1,500/day</div>
                  <div className="text-sm text-gray-500">720 searches/mo</div>
                </div>
              </Link>

              <Link href="/fractional-cmo-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-violet-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-violet-600">Fractional CMO Jobs</h3>
                  <p className="text-gray-600 text-sm mb-0">
                    Marketing strategy, team leadership, demand generation, brand
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-violet-600 font-bold">£700-£1,400/day</div>
                  <div className="text-sm text-gray-500">480 searches/mo</div>
                </div>
              </Link>

              <Link href="/fractional-cto-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-violet-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-violet-600">Fractional CTO Jobs</h3>
                  <p className="text-gray-600 text-sm mb-0">
                    Technical strategy, architecture, engineering leadership
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-violet-600 font-bold">£850-£1,600/day</div>
                  <div className="text-sm text-gray-500">320 searches/mo</div>
                </div>
              </Link>

              <Link href="/fractional-coo-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-violet-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-violet-600">Fractional COO Jobs</h3>
                  <p className="text-gray-600 text-sm mb-0">
                    Operations strategy, scaling, process optimization
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-violet-600 font-bold">£750-£1,400/day</div>
                  <div className="text-sm text-gray-500">320 searches/mo</div>
                </div>
              </Link>

              <Link href="/fractional-hr-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-violet-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-violet-600">Fractional HR/CHRO Jobs</h3>
                  <p className="text-gray-600 text-sm mb-0">
                    People strategy, employment law, talent acquisition
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-violet-600 font-bold">£700-£1,300/day</div>
                  <div className="text-sm text-gray-500">480 searches/mo</div>
                </div>
              </Link>

              <Link href="/fractional-cio-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-violet-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-violet-600">Fractional CIO Jobs</h3>
                  <p className="text-gray-600 text-sm mb-0">
                    IT strategy, digital transformation, security
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-violet-600 font-bold">£800-£1,400/day</div>
                  <div className="text-sm text-gray-500">140 searches/mo</div>
                </div>
              </Link>

              <Link href="/fractional-ciso-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-violet-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-violet-600">Fractional CISO Jobs</h3>
                  <p className="text-gray-600 text-sm mb-0">
                    Security strategy, compliance, risk management
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-violet-600 font-bold">£900-£1,600/day</div>
                  <div className="text-sm text-gray-500">70 searches/mo</div>
                </div>
              </Link>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Where to Find Fractional Executive Jobs</h2>

            <p className="text-lg">
              Fractional executive opportunities come through multiple channels:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Specialist Platforms</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><Link href="/fractional-jobs" className="text-violet-600 hover:underline">Fractional.Quest</Link> - UK fractional jobs</li>
                  <li>Chief Outsiders (CMO-focused)</li>
                  <li>Various CFO-specific platforms</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Executive Networks</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>LinkedIn (search "fractional" + role)</li>
                  <li>Private equity networks</li>
                  <li>VC portfolio connections</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Agencies</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Specialist fractional agencies</li>
                  <li>Executive search firms with interim divisions</li>
                  <li>Industry-specific recruiters</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Network Referrals</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Former colleagues and clients</li>
                  <li>Board members and advisors</li>
                  <li>Investors and founders you know</li>
                </ul>
              </div>
            </div>

            <div className="bg-violet-50 border-l-4 border-violet-500 p-8 my-10">
              <p className="text-xl font-semibold text-gray-900 mb-3">
                Pro Tip: Most Jobs Are Not Advertised
              </p>
              <p className="text-gray-700 mb-0">
                According to research from the <a href="https://www.fim.org.uk/" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:text-violet-700 underline">Institute of Interim Management</a>, 70%+ of fractional and interim roles are filled through networks and referrals. Building relationships is as important as searching job boards.
              </p>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional Executive Job Requirements</h2>

            <p className="text-lg">
              While specific requirements vary by role, most fractional executive jobs share common expectations:
            </p>

            <ul className="text-lg space-y-3">
              <li><strong>Experience:</strong> 15-20+ years with significant senior/C-suite leadership</li>
              <li><strong>Track record:</strong> Demonstrable results in similar roles</li>
              <li><strong>Industry expertise:</strong> Relevant sector knowledge (SaaS, ecommerce, etc.)</li>
              <li><strong>Flexibility:</strong> Ability to work across multiple clients</li>
              <li><strong>Self-direction:</strong> No one manages fractional executives day-to-day</li>
              <li><strong>Communication:</strong> Board-level presentation and stakeholder management</li>
            </ul>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional Executive Jobs by Location</h2>

            <p className="text-lg">
              While many fractional jobs are remote or hybrid, some regions have higher concentrations:
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-10">
              <Link href="/fractional-jobs-london" className="bg-white border-2 border-gray-200 p-5 rounded-lg hover:border-violet-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-violet-600">London</h3>
                <p className="text-sm text-gray-600">60%+ of UK opportunities</p>
              </Link>

              <Link href="/fractional-jobs-manchester" className="bg-white border-2 border-gray-200 p-5 rounded-lg hover:border-violet-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-violet-600">Manchester</h3>
                <p className="text-sm text-gray-600">Growing Northern hub</p>
              </Link>

              <Link href="/fractional-jobs-birmingham" className="bg-white border-2 border-gray-200 p-5 rounded-lg hover:border-violet-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-violet-600">Birmingham</h3>
                <p className="text-sm text-gray-600">Midlands market</p>
              </Link>

              <Link href="/fractional-jobs-cambridge" className="bg-white border-2 border-gray-200 p-5 rounded-lg hover:border-violet-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-violet-600">Cambridge</h3>
                <p className="text-sm text-gray-600">Deep tech & biotech</p>
              </Link>

              <Link href="/fractional-jobs-leeds" className="bg-white border-2 border-gray-200 p-5 rounded-lg hover:border-violet-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-violet-600">Leeds</h3>
                <p className="text-sm text-gray-600">Legal & financial services</p>
              </Link>

              <Link href="/remote-fractional-jobs" className="bg-white border-2 border-gray-200 p-5 rounded-lg hover:border-violet-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-violet-600">Remote</h3>
                <p className="text-sm text-gray-600">Work from anywhere</p>
              </Link>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">The Bottom Line</h2>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-xl leading-relaxed mb-6">
                <strong className="text-violet-400">Finding fractional executive jobs:</strong>
              </p>
              <p className="text-2xl font-light leading-relaxed mb-0">
                Build your network, define your niche (industry + function + stage), establish your personal brand, and combine proactive outreach with platform visibility. Most roles come through relationships, not job boards.
              </p>
            </div>
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
      <section className="py-20 bg-violet-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Browse All Fractional Jobs
          </h2>
          <p className="text-xl text-violet-100 mb-10 max-w-2xl mx-auto">
            See all live fractional executive opportunities across CFO, CMO, CTO, COO, and more.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-jobs" className="px-10 py-5 bg-white text-violet-600 font-bold uppercase tracking-wider hover:bg-violet-50 transition-colors">
              Browse All Jobs
            </Link>
            <Link href="/fractional-executive" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-violet-600 transition-colors">
              Executive Guide
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
              <Link href="/fractional-cfo-jobs-uk" className="text-gray-600 hover:text-violet-600 font-medium transition-colors">
                CFO Jobs
              </Link>
              <Link href="/fractional-cmo-jobs-uk" className="text-gray-600 hover:text-violet-600 font-medium transition-colors">
                CMO Jobs
              </Link>
              <Link href="/fractional-cto-jobs-uk" className="text-gray-600 hover:text-violet-600 font-medium transition-colors">
                CTO Jobs
              </Link>
              <Link href="/fractional-coo-jobs-uk" className="text-gray-600 hover:text-violet-600 font-medium transition-colors">
                COO Jobs
              </Link>
              <Link href="/fractional-executive" className="text-gray-600 hover:text-violet-600 font-medium transition-colors">
                Executive Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
