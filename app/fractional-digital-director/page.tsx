import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Digital Director UK 2025',
  description: 'Fractional digital director UK. Part-time digital leadership for businesses driving digital transformation.',
  keywords: 'fractional digital director, part-time digital director, fractional head of digital, digital transformation, digital leadership',
  alternates: {
    canonical: 'https://fractional.quest/fractional-digital-director',
  },
  openGraph: {
    title: 'Fractional Digital Director UK 2025',
    description: 'Part-time digital leadership for growing businesses.',
    url: 'https://fractional.quest/fractional-digital-director',
  },
}

const faqItems = [
  {
    question: 'What is a fractional digital director?',
    answer: 'A fractional digital director is an experienced digital leader who works with companies on a part-time basis, typically 1-3 days per week. They drive digital transformation, oversee digital channels, and build digital capabilities without full-time cost.',
  },
  {
    question: 'How much does a fractional digital director cost?',
    answer: 'Fractional digital directors in the UK typically charge £700-£1,200 per day. At 2 days per week, this equals £70,000-£120,000 annually—compared to £90,000-£140,000+ for a full-time digital director.',
  },
  {
    question: 'When should I hire a fractional digital director?',
    answer: 'Hire a fractional digital director when: undertaking digital transformation; building digital capabilities; launching new digital products or channels; improving digital customer experience; or needing senior digital expertise without full-time commitment.',
  },
  {
    question: 'What is the difference between digital director and CTO?',
    answer: 'A Digital Director focuses on digital channels, customer experience, and digital marketing/product. A CTO focuses on technology infrastructure, engineering, and technical architecture. Some companies need both; others combine roles.',
  },
]

export default function FractionalDigitalDirectorPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-500 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Digital Leadership
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional<br />Digital Director
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 leading-relaxed font-light">
              Part-time digital leadership for businesses driving transformation and building digital capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-blue-50 border-b-4 border-blue-500">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-blue-200">
            <h2 className="text-3xl font-black text-gray-900 mb-6">What is a Fractional Digital Director?</h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
              A <strong className="font-semibold text-gray-900">fractional digital director</strong> is a senior digital leader who works with companies 1-3 days per week, providing expertise in digital transformation, channel strategy, and building digital-first capabilities.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              This role bridges the gap between marketing, technology, and product—ideal for traditional businesses going digital or digital-native companies scaling their capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Digital team collaborating on strategy"
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
            <h2 className="text-3xl font-black text-gray-900">What a Fractional Digital Director Does</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              A fractional digital director brings senior digital expertise to organisations navigating digital change. Key responsibilities include:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Digital Strategy</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Digital transformation roadmap</li>
                  <li>Channel strategy and prioritization</li>
                  <li>Digital business model development</li>
                  <li>Competitive digital analysis</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Digital Experience</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Customer journey optimization</li>
                  <li>UX and digital product direction</li>
                  <li>Personalization strategy</li>
                  <li>Conversion optimization</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Digital Marketing</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Performance marketing oversight</li>
                  <li>SEO and content strategy</li>
                  <li>Marketing technology stack</li>
                  <li>Data and analytics</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Team & Capability</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Build digital team and skills</li>
                  <li>Agency and vendor management</li>
                  <li>Digital culture development</li>
                  <li>Ways of working</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">When to Hire a Fractional Digital Director</h2>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Digital Transformation</h4>
                  <p className="text-sm text-gray-600 m-0">Traditional business needs to digitize operations, channels, or customer experience.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">D2C Launch</h4>
                  <p className="text-sm text-gray-600 m-0">B2B company launching direct-to-consumer digital channels and needs expertise.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Digital Marketing Scale</h4>
                  <p className="text-sm text-gray-600 m-0">Scaling digital acquisition and need senior oversight of performance and strategy.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">E-commerce Growth</h4>
                  <p className="text-sm text-gray-600 m-0">E-commerce business needs senior leadership to optimize and scale digital operations.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">MarTech Implementation</h4>
                  <p className="text-sm text-gray-600 m-0">Implementing major digital platforms (CDP, CRM, analytics) and need strategic oversight.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional Digital Director Costs</h2>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Day Rate</div>
                <div className="text-2xl font-black text-gray-900">£700-£1,200</div>
                <div className="text-xs text-gray-500">per day</div>
              </div>
              <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl text-center">
                <div className="text-sm font-bold text-blue-600 uppercase mb-2">Annual (2 days/wk)</div>
                <div className="text-2xl font-black text-gray-900">£70,000-£120,000</div>
                <div className="text-xs text-gray-500">vs £120,000+ full-time</div>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Savings</div>
                <div className="text-2xl font-black text-gray-900">40-50%</div>
                <div className="text-xs text-gray-500">vs permanent hire</div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Digital Leadership Landscape</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Digital roles can overlap. Here's how they typically differ:
            </p>

            <div className="overflow-x-auto my-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 font-bold text-gray-900">Role</th>
                    <th className="text-left py-3 font-bold text-gray-600">Primary Focus</th>
                    <th className="text-left py-3 font-bold text-gray-600">Day Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-blue-50">
                    <td className="py-3 font-bold text-blue-600">Digital Director</td>
                    <td className="py-3 text-gray-700">Digital channels, experience, transformation</td>
                    <td className="py-3 text-gray-700">£700-£1,200</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">CMO</td>
                    <td className="py-3 text-gray-600">Overall marketing strategy and brand</td>
                    <td className="py-3 text-gray-600">£800-£1,400</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">CTO</td>
                    <td className="py-3 text-gray-600">Technology infrastructure and engineering</td>
                    <td className="py-3 text-gray-600">£900-£1,500</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Product Director</td>
                    <td className="py-3 text-gray-600">Product strategy and development</td>
                    <td className="py-3 text-gray-600">£700-£1,200</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">What to Look for in a Fractional Digital Director</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              According to the <a href="https://www.econsultancy.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">Econsultancy</a> digital skills framework, effective digital leaders combine strategic vision with hands-on expertise:
            </p>

            <ul className="text-lg space-y-3 my-8">
              <li><strong>Transformation experience:</strong> Led digital change in organisations at your stage</li>
              <li><strong>Channel expertise:</strong> Deep knowledge across web, mobile, social, and emerging channels</li>
              <li><strong>Data fluency:</strong> Can drive decisions with analytics and customer data</li>
              <li><strong>Technology understanding:</strong> Knows digital platforms without being a pure technologist</li>
              <li><strong>Commercial acumen:</strong> Connects digital investment to business outcomes</li>
            </ul>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-blue-400">Summary:</strong> A fractional digital director provides part-time (1-3 days/week) digital leadership at £700-£1,200/day—ideal for businesses driving digital transformation or scaling digital capabilities.
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
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Digital Leaders</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-cmo-jobs-uk" className="px-10 py-5 bg-white text-blue-600 font-bold uppercase tracking-wider hover:bg-blue-50 transition-colors">
              CMO Jobs
            </Link>
            <Link href="/fractional-executive-jobs" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-blue-600 transition-colors">
              All Executive Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-cmo-jobs-uk" className="text-gray-600 hover:text-blue-600 font-medium">CMO Jobs</Link>
            <Link href="/fractional-cto-jobs-uk" className="text-gray-600 hover:text-blue-600 font-medium">CTO Jobs</Link>
            <Link href="/fractional-marketing-director" className="text-gray-600 hover:text-blue-600 font-medium">Marketing Director</Link>
            <Link href="/fractional-executive-jobs" className="text-gray-600 hover:text-blue-600 font-medium">Executive Jobs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
