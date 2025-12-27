import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Interim Marketing Director UK 2025',
  description: 'Interim marketing director roles UK. Temporary marketing leadership for transitions, transformations, and growth.',
  keywords: 'interim marketing director, temporary marketing director, interim head of marketing, marketing director contract, interim cmo',
  alternates: {
    canonical: 'https://fractional.quest/interim-marketing-director',
  },
  openGraph: {
    title: 'Interim Marketing Director UK 2025',
    description: 'Temporary marketing leadership for UK businesses.',
    url: 'https://fractional.quest/interim-marketing-director',
  },
}

const faqItems = [
  {
    question: 'What is an interim marketing director?',
    answer: 'An interim marketing director is an experienced marketing executive who takes a temporary leadership role, typically for 3-12 months. They provide immediate capability during transitions, transformations, or while recruiting a permanent hire.',
  },
  {
    question: 'How much does an interim marketing director cost?',
    answer: 'Interim marketing directors in the UK typically charge £700-£1,200 per day, working 4-5 days per week. This translates to £14,000-£24,000 monthly or £150,000-£250,000 annually for full-time interim engagement.',
  },
  {
    question: 'What is the difference between interim and fractional marketing director?',
    answer: 'Interim marketing directors work near full-time (4-5 days/week) on a fixed-term basis, often filling a gap. Fractional marketing directors work part-time (1-3 days/week) on an ongoing basis, typically serving multiple clients.',
  },
  {
    question: 'When should I hire an interim marketing director?',
    answer: 'Hire an interim when: your marketing director leaves suddenly; you need immediate transformation capability; you\'re restructuring the marketing function; or you need senior cover while recruiting a permanent hire.',
  },
]

export default function InterimMarketingDirectorPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-fuchsia-700 to-fuchsia-600 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Interim Roles
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Interim Marketing<br />Director
            </h1>
            <p className="text-2xl md:text-3xl text-fuchsia-100 leading-relaxed font-light">
              Temporary marketing leadership for transitions, transformations, and critical periods.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-fuchsia-50 border-b-4 border-fuchsia-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-fuchsia-200">
            <h2 className="text-3xl font-black text-gray-900 mb-6">What is an Interim Marketing Director?</h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
              An <strong className="font-semibold text-gray-900">interim marketing director</strong> is a senior marketing executive who steps into a temporary leadership role, typically working 4-5 days per week for 3-12 months to provide immediate capability and drive results.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Unlike fractional executives who work part-time on an ongoing basis, interim directors provide near full-time commitment for a defined period—ideal for leadership transitions, transformations, or urgent capability gaps.
            </p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Marketing director leading team meeting"
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
            <h2 className="text-3xl font-black text-gray-900">When to Hire an Interim Marketing Director</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Interim marketing directors are brought in during critical moments when businesses need immediate senior marketing capability. Here are the most common scenarios:
            </p>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-fuchsia-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Leadership Gap</h4>
                  <p className="text-sm text-gray-600 m-0">Your marketing director has left suddenly or is on extended leave. You need immediate senior cover while recruiting a permanent replacement.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-fuchsia-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Transformation Project</h4>
                  <p className="text-sm text-gray-600 m-0">You're undertaking a major marketing transformation—rebrand, digital shift, or go-to-market overhaul—and need experienced leadership to drive it.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-fuchsia-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Turnaround Situation</h4>
                  <p className="text-sm text-gray-600 m-0">Marketing performance has declined significantly. You need someone to diagnose issues, restructure the function, and restore momentum.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-fuchsia-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">M&A Integration</h4>
                  <p className="text-sm text-gray-600 m-0">Post-acquisition, you need to integrate marketing functions across companies, requiring experienced hands for a finite period.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-fuchsia-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Scaling Quickly</h4>
                  <p className="text-sm text-gray-600 m-0">Rapid growth requires immediate marketing leadership while you build the permanent team—common post-funding.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">What Interim Marketing Directors Do</h2>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Immediate Impact</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Assess current marketing performance</li>
                  <li>Stabilize team and operations</li>
                  <li>Maintain campaign continuity</li>
                  <li>Quick wins identification</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Strategic Leadership</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Develop/refine marketing strategy</li>
                  <li>Align with business objectives</li>
                  <li>Board and stakeholder reporting</li>
                  <li>Budget management</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Team Development</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Coach and develop team members</li>
                  <li>Restructure if needed</li>
                  <li>Hire key positions</li>
                  <li>Manage agency relationships</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Transition Planning</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Define permanent role requirements</li>
                  <li>Support recruitment process</li>
                  <li>Onboard and hand over</li>
                  <li>Document processes and plans</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Interim Marketing Director Costs</h2>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Daily Rate</div>
                <div className="text-2xl font-black text-gray-900">£700-£1,200</div>
                <div className="text-xs text-gray-500">per day</div>
              </div>
              <div className="p-6 bg-fuchsia-50 border border-fuchsia-200 rounded-xl text-center">
                <div className="text-sm font-bold text-fuchsia-700 uppercase mb-2">Monthly Cost</div>
                <div className="text-2xl font-black text-gray-900">£14,000-£24,000</div>
                <div className="text-xs text-gray-500">4-5 days/week</div>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Typical Duration</div>
                <div className="text-2xl font-black text-gray-900">3-12</div>
                <div className="text-xs text-gray-500">months</div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Interim vs Fractional Marketing Director</h2>

            <div className="overflow-x-auto my-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 font-bold text-gray-900">Aspect</th>
                    <th className="text-left py-3 font-bold text-fuchsia-700">Interim</th>
                    <th className="text-left py-3 font-bold text-gray-500">Fractional</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 font-medium">Time Commitment</td>
                    <td className="py-3 text-fuchsia-700">4-5 days/week</td>
                    <td className="py-3 text-gray-600">1-3 days/week</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Duration</td>
                    <td className="py-3 text-fuchsia-700">3-12 months (fixed)</td>
                    <td className="py-3 text-gray-600">Ongoing (6+ months)</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Purpose</td>
                    <td className="py-3 text-fuchsia-700">Gap fill, transformation</td>
                    <td className="py-3 text-gray-600">Ongoing leadership</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Clients</td>
                    <td className="py-3 text-fuchsia-700">Usually one</td>
                    <td className="py-3 text-gray-600">Often multiple</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Monthly Cost</td>
                    <td className="py-3 text-fuchsia-700">£14,000-£24,000</td>
                    <td className="py-3 text-gray-600">£6,000-£12,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Finding Interim Marketing Directors</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Interim marketing directors are sourced through specialist interim management firms, executive search consultancies, and professional networks. Key UK providers include organizations listed with the <a href="https://www.iim.org.uk" target="_blank" rel="noopener noreferrer" className="text-fuchsia-700 hover:text-fuchsia-800">Institute of Interim Management</a>.
            </p>

            <ul className="text-lg space-y-3 my-8">
              <li><strong>Interim management firms:</strong> Specialists in temporary executive placements</li>
              <li><strong>Executive search firms:</strong> Traditional recruiters with interim practices</li>
              <li><strong>Marketing networks:</strong> Industry-specific communities and referrals</li>
              <li><strong>Direct approach:</strong> LinkedIn and professional connections</li>
            </ul>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Related Roles</h2>

            <div className="grid md:grid-cols-3 gap-4 my-10">
              <Link href="/fractional-marketing-director" className="bg-white border-2 border-gray-200 p-5 rounded-lg hover:border-fuchsia-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-fuchsia-600">Fractional Marketing Director</h3>
                <p className="text-sm text-gray-600">Part-time ongoing</p>
              </Link>

              <Link href="/fractional-cmo-jobs-uk" className="bg-white border-2 border-gray-200 p-5 rounded-lg hover:border-fuchsia-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-fuchsia-600">CMO Jobs</h3>
                <p className="text-sm text-gray-600">Senior marketing roles</p>
              </Link>

              <Link href="/fractional-marketing-jobs" className="bg-white border-2 border-gray-200 p-5 rounded-lg hover:border-fuchsia-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-fuchsia-600">Marketing Jobs</h3>
                <p className="text-sm text-gray-600">All marketing roles</p>
              </Link>
            </div>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-fuchsia-400">Summary:</strong> Interim marketing directors provide near full-time temporary leadership (4-5 days/week) at £700-£1,200/day for 3-12 months. Ideal for transitions, transformations, and urgent capability gaps.
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
      <section className="py-20 bg-fuchsia-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Marketing Leaders</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-cmo-jobs-uk" className="px-10 py-5 bg-white text-fuchsia-700 font-bold uppercase tracking-wider hover:bg-fuchsia-50 transition-colors">
              CMO Jobs
            </Link>
            <Link href="/fractional-marketing-jobs" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-fuchsia-700 transition-colors">
              All Marketing Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-marketing-director" className="text-gray-600 hover:text-fuchsia-700 font-medium">Fractional Marketing Director</Link>
            <Link href="/fractional-cmo-jobs-uk" className="text-gray-600 hover:text-fuchsia-700 font-medium">CMO Jobs</Link>
            <Link href="/fractional-marketing-jobs" className="text-gray-600 hover:text-fuchsia-700 font-medium">Marketing Jobs</Link>
            <Link href="/interim-executive" className="text-gray-600 hover:text-fuchsia-700 font-medium">Interim Executive</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
