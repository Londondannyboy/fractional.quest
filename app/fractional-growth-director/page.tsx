import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Growth Director UK 2025',
  description: 'Fractional growth director UK. Part-time growth leadership for scaling startups and scale-ups.',
  keywords: 'fractional growth director, part-time growth director, fractional head of growth, growth leadership, fractional vp growth',
  alternates: {
    canonical: 'https://fractional.quest/fractional-growth-director',
  },
  openGraph: {
    title: 'Fractional Growth Director UK 2025',
    description: 'Part-time growth leadership for scaling businesses.',
    url: 'https://fractional.quest/fractional-growth-director',
  },
}

const faqItems = [
  {
    question: 'What is a fractional growth director?',
    answer: 'A fractional growth director is an experienced growth leader who works with companies on a part-time basis, typically 1-3 days per week. They drive customer acquisition, activation, retention, and revenue growth using data-driven experimentation.',
  },
  {
    question: 'How much does a fractional growth director cost?',
    answer: 'Fractional growth directors in the UK typically charge £700-£1,200 per day. At 2 days per week, this equals £70,000-£120,000 annually—compared to £100,000-£150,000+ for a full-time VP/Director of Growth.',
  },
  {
    question: 'When should I hire a fractional growth director?',
    answer: 'Hire a fractional growth director when: you have product-market fit but need to scale acquisition; growth has plateaued and you need fresh expertise; building a growth team; or need to improve unit economics and LTV/CAC.',
  },
  {
    question: 'What is the difference between growth director and CMO?',
    answer: 'Growth Directors focus specifically on acquisition, activation, and retention metrics using experimentation. CMOs have broader responsibility including brand, communications, and overall marketing strategy. Growth is more tactical and data-driven.',
  },
]

export default function FractionalGrowthDirectorPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-500 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Growth Leadership
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional<br />Growth Director
            </h1>
            <p className="text-2xl md:text-3xl text-green-100 leading-relaxed font-light">
              Part-time growth leadership for startups and scale-ups driving sustainable customer acquisition.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-green-50 border-b-4 border-green-500">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-green-200">
            <h2 className="text-3xl font-black text-gray-900 mb-6">What is a Fractional Growth Director?</h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
              A <strong className="font-semibold text-gray-900">fractional growth director</strong> is a senior growth leader who works with companies 1-3 days per week, driving customer acquisition, activation, retention, and revenue through data-driven experimentation and optimization.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              This role is particularly valuable for funded startups and scale-ups that have achieved product-market fit and need experienced growth expertise to scale efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Growth team analyzing metrics"
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
            <h2 className="text-3xl font-black text-gray-900">What a Fractional Growth Director Does</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              A fractional growth director brings systematic, data-driven expertise to scaling customer acquisition and revenue. They typically own:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Acquisition</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Channel strategy and mix</li>
                  <li>Paid acquisition optimization</li>
                  <li>Organic growth initiatives</li>
                  <li>CAC reduction strategies</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Activation</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Onboarding optimization</li>
                  <li>Time-to-value reduction</li>
                  <li>Conversion rate optimization</li>
                  <li>User experience improvements</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Retention</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Churn analysis and reduction</li>
                  <li>Engagement optimization</li>
                  <li>Lifecycle marketing</li>
                  <li>Customer success alignment</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Experimentation</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>A/B testing frameworks</li>
                  <li>Growth experiment design</li>
                  <li>Data analysis and insights</li>
                  <li>Growth model development</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">When to Hire a Fractional Growth Director</h2>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Post Product-Market Fit</h4>
                  <p className="text-sm text-gray-600 m-0">You've validated your product and need to scale acquisition efficiently.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Growth Plateau</h4>
                  <p className="text-sm text-gray-600 m-0">Initial growth has slowed and you need fresh expertise to find new levers.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Unit Economics Challenge</h4>
                  <p className="text-sm text-gray-600 m-0">CAC is too high, LTV is too low—need someone to optimize the growth engine.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Building Growth Team</h4>
                  <p className="text-sm text-gray-600 m-0">Hiring growth marketers and need experienced leadership to structure and lead the function.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Fundraising Preparation</h4>
                  <p className="text-sm text-gray-600 m-0">Need to demonstrate growth capability and improve metrics before your next round.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional Growth Director Costs</h2>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Day Rate</div>
                <div className="text-2xl font-black text-gray-900">£700-£1,200</div>
                <div className="text-xs text-gray-500">per day</div>
              </div>
              <div className="p-6 bg-green-50 border border-green-200 rounded-xl text-center">
                <div className="text-sm font-bold text-green-600 uppercase mb-2">Annual (2 days/wk)</div>
                <div className="text-2xl font-black text-gray-900">£70,000-£120,000</div>
                <div className="text-xs text-gray-500">vs £130,000+ full-time</div>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Savings</div>
                <div className="text-2xl font-black text-gray-900">40-50%</div>
                <div className="text-xs text-gray-500">vs permanent hire</div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">The AARRR Framework</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Fractional growth directors often work within the <a href="https://www.reforge.com" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">Reforge</a>-style growth framework, addressing each stage of the customer journey:
            </p>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-green-600">A</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Acquisition</h4>
                  <p className="text-sm text-gray-600 m-0">How do users find you? Channel mix, paid/organic, partnerships.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-green-600">A</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Activation</h4>
                  <p className="text-sm text-gray-600 m-0">Do users have a great first experience? Onboarding, time-to-value.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-green-600">R</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Retention</h4>
                  <p className="text-sm text-gray-600 m-0">Do users come back? Engagement, churn reduction, stickiness.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-green-600">R</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Revenue</h4>
                  <p className="text-sm text-gray-600 m-0">How do you monetize? Pricing, upsells, expansion revenue.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-green-600">R</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Referral</h4>
                  <p className="text-sm text-gray-600 m-0">Do users tell others? Virality, referral programs, word-of-mouth.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">What to Look for in a Fractional Growth Director</h2>

            <ul className="text-lg space-y-3 my-8">
              <li><strong>Stage experience:</strong> Has scaled companies at your stage (seed, Series A, etc.)</li>
              <li><strong>Channel expertise:</strong> Deep knowledge of channels relevant to your business</li>
              <li><strong>Data fluency:</strong> Can build models, run experiments, and draw insights</li>
              <li><strong>Technical capability:</strong> Understands product and can work with engineering</li>
              <li><strong>Experimentation mindset:</strong> Hypothesis-driven, comfortable with failure</li>
            </ul>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-green-400">Summary:</strong> A fractional growth director provides part-time (1-3 days/week) growth leadership at £700-£1,200/day—ideal for post-PMF startups scaling acquisition and improving unit economics.
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
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Growth Leaders</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-cmo-jobs-uk" className="px-10 py-5 bg-white text-green-600 font-bold uppercase tracking-wider hover:bg-green-50 transition-colors">
              CMO Jobs
            </Link>
            <Link href="/fractional-cro-jobs-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-green-600 transition-colors">
              CRO Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-cmo-jobs-uk" className="text-gray-600 hover:text-green-600 font-medium">CMO Jobs</Link>
            <Link href="/fractional-cro-jobs-uk" className="text-gray-600 hover:text-green-600 font-medium">CRO Jobs</Link>
            <Link href="/fractional-marketing-director" className="text-gray-600 hover:text-green-600 font-medium">Marketing Director</Link>
            <Link href="/fractional-executive-jobs" className="text-gray-600 hover:text-green-600 font-medium">Executive Jobs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
