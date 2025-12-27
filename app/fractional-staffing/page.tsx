import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Staffing UK 2025: Executive Staffing Solutions',
  description: 'Guide to fractional executive staffing. How staffing agencies provide part-time C-suite talent on flexible terms for growing businesses.',
  keywords: 'fractional staffing, executive staffing, fractional executive staffing, part-time executive staffing, C-suite staffing',
  alternates: {
    canonical: 'https://fractional.quest/fractional-staffing',
  },
  openGraph: {
    title: 'Fractional Staffing UK 2025: Executive Staffing Solutions',
    description: 'Fractional executive staffing for growing businesses.',
    url: 'https://fractional.quest/fractional-staffing',
  },
}

const faqItems = [
  {
    question: 'What is fractional staffing?',
    answer: 'Fractional staffing refers to staffing arrangements where executives or professionals work part-time for multiple clients rather than full-time for one. It\'s a model where senior talent is shared across organizations based on their needs.',
  },
  {
    question: 'How is fractional staffing different from traditional staffing?',
    answer: 'Traditional staffing places full-time permanent or contract workers. Fractional staffing provides ongoing part-time professionals who work a set number of days per week/month, maintaining relationships with multiple clients simultaneously.',
  },
  {
    question: 'Do staffing agencies provide fractional executives?',
    answer: 'Some do. Traditional staffing agencies focus on full-time roles, but specialist agencies and platforms have emerged specifically for fractional and interim executive placements. Look for agencies with fractional expertise.',
  },
  {
    question: 'What are the benefits of fractional staffing?',
    answer: 'Benefits include cost savings (60-70% vs full-time), flexibility to scale up/down, access to senior talent, and reduced hiring risk. Companies get executive expertise without long-term employment commitments.',
  },
]

export default function FractionalStaffingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-700 to-pink-600 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Staffing Guide
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional<br />Staffing
            </h1>
            <p className="text-2xl md:text-3xl text-pink-100 leading-relaxed font-light">
              Executive staffing reimagined. Part-time leaders, full-time impact.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-pink-50 border-b-4 border-pink-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-pink-200">
            <h2 className="text-3xl font-black text-gray-900 mb-6">What is Fractional Staffing?</h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
              <strong className="font-semibold text-gray-900">Fractional staffing</strong> is a workforce model where experienced professionals—particularly executives—work part-time across multiple organizations. Unlike traditional staffing (full-time placements), fractional staffing provides ongoing flexible talent.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              It's particularly relevant at the executive level, where companies need senior expertise but not full-time commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Professional staffing and recruitment"
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
            <h2 className="text-3xl font-black text-gray-900">Types of Staffing Models</h2>

            <div className="overflow-x-auto my-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 font-bold text-gray-900">Model</th>
                    <th className="text-left py-3 font-bold text-gray-900">Commitment</th>
                    <th className="text-left py-3 font-bold text-gray-900">Duration</th>
                    <th className="text-left py-3 font-bold text-gray-900">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-pink-50">
                    <td className="py-3 font-bold text-pink-700">Fractional</td>
                    <td className="py-3">Part-time (1-3 days/week)</td>
                    <td className="py-3">Ongoing</td>
                    <td className="py-3">Executive leadership needs</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Permanent</td>
                    <td className="py-3 text-gray-600">Full-time</td>
                    <td className="py-3 text-gray-600">Indefinite</td>
                    <td className="py-3 text-gray-600">Core team building</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Contract</td>
                    <td className="py-3 text-gray-600">Full-time</td>
                    <td className="py-3 text-gray-600">Fixed term</td>
                    <td className="py-3 text-gray-600">Project-based work</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Interim</td>
                    <td className="py-3 text-gray-600">Full-time</td>
                    <td className="py-3 text-gray-600">3-12 months</td>
                    <td className="py-3 text-gray-600">Gap-fill, transitions</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Temp</td>
                    <td className="py-3 text-gray-600">Full or part-time</td>
                    <td className="py-3 text-gray-600">Short-term</td>
                    <td className="py-3 text-gray-600">Immediate capacity</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">The Fractional Staffing Model</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Fractional staffing has grown significantly as companies recognize that many roles—especially at senior levels—don't require full-time commitment. The model works particularly well for:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-pink-50 border-2 border-pink-200 p-6 rounded-lg">
                <h3 className="font-bold text-pink-700 mb-3">Executive Functions</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>CFO, CMO, CTO, COO, CHRO</li>
                  <li>Strategy-focused, not daily operations</li>
                  <li>Senior expertise needed, not capacity</li>
                  <li>Functions that can be led part-time</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-700 mb-3">Company Stages</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Scale-ups (£1M-£30M revenue)</li>
                  <li>PE portfolio companies</li>
                  <li>SMEs professionalizing</li>
                  <li>Startups post-Series A</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Benefits of Fractional Staffing</h2>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-pink-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Cost Efficiency</h4>
                  <p className="text-sm text-gray-600 m-0">Pay for the time you need. 1-2 days per week costs 60-70% less than full-time equivalents including salary, benefits, and overhead.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-pink-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Access to Senior Talent</h4>
                  <p className="text-sm text-gray-600 m-0">Get executives who would be too expensive or unattainable full-time. Fractional attracts experienced leaders seeking flexibility.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-pink-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Flexibility</h4>
                  <p className="text-sm text-gray-600 m-0">Scale up or down based on needs. Add days during busy periods, reduce during quiet times. Exit with short notice periods.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-pink-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Reduced Risk</h4>
                  <p className="text-sm text-gray-600 m-0">Lower commitment than full-time hires. Easier to change if it's not working. Test before making permanent hires.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-pink-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Fresh Perspectives</h4>
                  <p className="text-sm text-gray-600 m-0">Fractional executives work with multiple companies, bringing current best practices and cross-industry insights.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Finding Fractional Staff</h2>

            <ul className="text-lg space-y-3 my-8">
              <li><strong>Specialist agencies:</strong> Firms focused on fractional/interim executive placement</li>
              <li><strong>Platforms:</strong> Online marketplaces connecting companies with fractional talent</li>
              <li><strong>Networks:</strong> Portfolio executive communities and referral networks</li>
              <li><strong>Direct sourcing:</strong> LinkedIn, industry connections, personal networks</li>
              <li><strong>Investor networks:</strong> VC/PE portfolio support teams</li>
            </ul>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional Staffing Costs</h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-8 bg-pink-50 border-2 border-pink-200 rounded-xl">
                <div className="text-sm font-bold text-pink-700 uppercase mb-2">Fractional Executive</div>
                <div className="text-3xl font-black text-gray-900 mb-2">£2,500-£7,000/month</div>
                <p className="text-gray-600 text-sm mb-0">1-2 days/week, ongoing engagement</p>
              </div>
              <div className="p-8 bg-gray-50 border-2 border-gray-200 rounded-xl">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Full-Time Equivalent</div>
                <div className="text-3xl font-black text-gray-900 mb-2">£10,000-£20,000/month</div>
                <p className="text-gray-600 text-sm mb-0">Salary + benefits + employer costs</p>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-pink-400">Summary:</strong> Fractional staffing provides part-time executives who work 1-3 days per week on an ongoing basis. It offers 60-70% cost savings vs full-time while providing access to senior talent and flexibility to scale.
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
      <section className="py-20 bg-pink-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Explore Fractional Staffing</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-hiring" className="px-10 py-5 bg-white text-pink-700 font-bold uppercase tracking-wider hover:bg-pink-50 transition-colors">
              Hiring Guide
            </Link>
            <Link href="/fractional-recruitment" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-pink-700 transition-colors">
              Find Recruiters
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-hiring" className="text-gray-600 hover:text-pink-700 font-medium">Fractional Hiring</Link>
            <Link href="/fractional-recruitment" className="text-gray-600 hover:text-pink-700 font-medium">Recruitment</Link>
            <Link href="/fractional-workforce" className="text-gray-600 hover:text-pink-700 font-medium">Fractional Workforce</Link>
            <Link href="/fractional-team" className="text-gray-600 hover:text-pink-700 font-medium">Fractional Team</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
