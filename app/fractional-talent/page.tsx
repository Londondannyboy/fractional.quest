import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Talent UK 2025',
  description: 'Fractional talent for growing businesses. Part-time executives and senior leaders on demand.',
  keywords: 'fractional talent, fractional executives, part-time talent, on-demand executives, fractional hiring',
  alternates: {
    canonical: 'https://fractional.quest/fractional-talent',
  },
  openGraph: {
    title: 'Fractional Talent UK 2025',
    description: 'Part-time executives and senior leaders on demand.',
    url: 'https://fractional.quest/fractional-talent',
  },
}

const faqItems = [
  {
    question: 'What is fractional talent?',
    answer: 'Fractional talent refers to experienced executives and senior professionals who work with companies on a part-time basis—typically 1-3 days per week. They provide senior-level expertise on demand, without full-time commitment.',
  },
  {
    question: 'What types of fractional talent are available?',
    answer: 'Fractional talent spans all senior functions: C-suite (CFO, CMO, CTO, COO, CHRO, CRO), directors (marketing, finance, sales, product, HR), and specialists (growth, digital, strategy, chief of staff).',
  },
  {
    question: 'How do I find fractional talent?',
    answer: 'Fractional talent can be found through: specialist fractional platforms, executive search firms with fractional practices, professional networks like LinkedIn, industry communities, and direct referrals.',
  },
  {
    question: 'What is the cost of fractional talent?',
    answer: 'Fractional talent typically costs £600-£1,500 per day depending on seniority and function. At 2 days per week, annual cost is £60,000-£150,000—compared to £120,000-£300,000+ for full-time equivalents.',
  },
]

export default function FractionalTalentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-500 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Talent Guide
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional<br />Talent
            </h1>
            <p className="text-2xl md:text-3xl text-orange-100 leading-relaxed font-light">
              Senior executives and leaders on demand. Access top talent without full-time commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-orange-50 border-b-4 border-orange-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center border border-orange-200">
              <div className="text-3xl font-black text-orange-600">10+</div>
              <div className="text-sm text-gray-600">Talent Types</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-orange-200">
              <div className="text-3xl font-black text-orange-600">£600-1,500</div>
              <div className="text-sm text-gray-600">Day Rate</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-orange-200">
              <div className="text-3xl font-black text-orange-600">50-70%</div>
              <div className="text-sm text-gray-600">Cost Savings</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-orange-200">
              <div className="text-3xl font-black text-orange-600">300%</div>
              <div className="text-sm text-gray-600">Market Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Diverse team of professionals collaborating"
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
            <h2 className="text-3xl font-black text-gray-900">What is Fractional Talent?</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Fractional talent describes experienced executives and senior professionals who work with companies on a part-time basis. Rather than hiring full-time, businesses engage these leaders for 1-3 days per week—accessing their expertise when needed, at a fraction of the cost.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              The fractional talent market has grown significantly since 2020. According to the <a href="https://www.scaleupinstitute.org.uk" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700">ScaleUp Institute</a>, access to senior talent is one of the top challenges for growing companies—fractional talent solves this.
            </p>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Types of Fractional Talent</h2>

            <div className="grid md:grid-cols-3 gap-4 my-10">
              <Link href="/fractional-cfo-jobs-uk" className="bg-white border-2 border-gray-200 p-4 rounded-lg hover:border-orange-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-orange-600">Fractional CFO</h3>
                <p className="text-xs text-gray-600">Finance leadership</p>
              </Link>

              <Link href="/fractional-cmo-jobs-uk" className="bg-white border-2 border-gray-200 p-4 rounded-lg hover:border-orange-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-orange-600">Fractional CMO</h3>
                <p className="text-xs text-gray-600">Marketing leadership</p>
              </Link>

              <Link href="/fractional-cto-jobs-uk" className="bg-white border-2 border-gray-200 p-4 rounded-lg hover:border-orange-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-orange-600">Fractional CTO</h3>
                <p className="text-xs text-gray-600">Technology leadership</p>
              </Link>

              <Link href="/fractional-coo-jobs-uk" className="bg-white border-2 border-gray-200 p-4 rounded-lg hover:border-orange-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-orange-600">Fractional COO</h3>
                <p className="text-xs text-gray-600">Operations leadership</p>
              </Link>

              <Link href="/fractional-chro-jobs-uk" className="bg-white border-2 border-gray-200 p-4 rounded-lg hover:border-orange-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-orange-600">Fractional CHRO</h3>
                <p className="text-xs text-gray-600">HR leadership</p>
              </Link>

              <Link href="/fractional-cro-jobs-uk" className="bg-white border-2 border-gray-200 p-4 rounded-lg hover:border-orange-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-orange-600">Fractional CRO</h3>
                <p className="text-xs text-gray-600">Revenue leadership</p>
              </Link>

              <Link href="/fractional-product-director" className="bg-white border-2 border-gray-200 p-4 rounded-lg hover:border-orange-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-orange-600">Product Director</h3>
                <p className="text-xs text-gray-600">Product leadership</p>
              </Link>

              <Link href="/fractional-growth-director" className="bg-white border-2 border-gray-200 p-4 rounded-lg hover:border-orange-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-orange-600">Growth Director</h3>
                <p className="text-xs text-gray-600">Growth leadership</p>
              </Link>

              <Link href="/fractional-chief-of-staff" className="bg-white border-2 border-gray-200 p-4 rounded-lg hover:border-orange-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-orange-600">Chief of Staff</h3>
                <p className="text-xs text-gray-600">CEO support</p>
              </Link>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Benefits of Fractional Talent</h2>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">For Companies</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>50-70% cost savings vs full-time</li>
                  <li>Access more experienced talent</li>
                  <li>Flexibility to scale up/down</li>
                  <li>Reduced hiring risk</li>
                  <li>Fresh external perspective</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">For Talent</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Portfolio career variety</li>
                  <li>Work-life balance</li>
                  <li>Multiple income streams</li>
                  <li>Diverse challenges</li>
                  <li>Autonomy and flexibility</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Finding Fractional Talent</h2>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-orange-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Specialist Platforms</h4>
                  <p className="text-sm text-gray-600 m-0">Dedicated fractional executive marketplaces matching talent with companies.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-orange-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Executive Networks</h4>
                  <p className="text-sm text-gray-600 m-0">Professional communities and peer networks where fractional talent connects.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-orange-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Search Firms</h4>
                  <p className="text-sm text-gray-600 m-0">Executive recruiters with fractional and interim practices.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-orange-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Referrals</h4>
                  <p className="text-sm text-gray-600 m-0">Recommendations from investors, advisors, and professional contacts.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional Talent Costs</h2>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Director Level</div>
                <div className="text-2xl font-black text-gray-900">£600-£1,000</div>
                <div className="text-xs text-gray-500">per day</div>
              </div>
              <div className="p-6 bg-orange-50 border border-orange-200 rounded-xl text-center">
                <div className="text-sm font-bold text-orange-600 uppercase mb-2">C-Suite Level</div>
                <div className="text-2xl font-black text-gray-900">£800-£1,500</div>
                <div className="text-xs text-gray-500">per day</div>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">vs Full-Time</div>
                <div className="text-2xl font-black text-gray-900">50-70%</div>
                <div className="text-xs text-gray-500">savings</div>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-orange-400">Summary:</strong> Fractional talent provides on-demand access to senior executives and leaders at £600-£1,500/day. The market has grown 300%+ since 2020.
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
          <h2 className="text-4xl font-black mb-6">Find Fractional Talent</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-executive-jobs" className="px-10 py-5 bg-white text-orange-600 font-bold uppercase tracking-wider hover:bg-orange-50 transition-colors">
              Executive Jobs
            </Link>
            <Link href="/fractional-roles" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-orange-600 transition-colors">
              All Roles
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-executive" className="text-gray-600 hover:text-orange-600 font-medium">Fractional Executive</Link>
            <Link href="/fractional-leadership" className="text-gray-600 hover:text-orange-600 font-medium">Fractional Leadership</Link>
            <Link href="/fractional-roles" className="text-gray-600 hover:text-orange-600 font-medium">All Roles</Link>
            <Link href="/fractional-executive-jobs" className="text-gray-600 hover:text-orange-600 font-medium">Executive Jobs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
