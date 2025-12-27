import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { JobsGraph3D } from '@/components/JobsGraph3D'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'What is Fractional HR? Definition, Meaning & Guide (2025)',
  description: 'Fractional HR is part-time HR leadership (1-3 days/week) from experienced CHROs and HR Directors. Save 50-70% vs full-time. Complete definition and guide for UK businesses.',
  keywords: 'what is fractional hr, fractional hr meaning, fractional hr definition, what does fractional hr mean, fractional human resources',
  alternates: {
    canonical: 'https://fractional.quest/what-is-fractional-hr',
  },
  openGraph: {
    title: 'What is Fractional HR? Complete Definition & Guide',
    description: 'Everything you need to know about fractional HR - definition, how it works, costs, and when UK businesses should hire fractional HR leaders.',
    images: ['/images/what-is-fractional-hr.jpg'],
    url: 'https://fractional.quest/what-is-fractional-hr',
  },
}

const WHAT_IS_HR_FAQS = [
  {
    question: 'What does fractional HR mean?',
    answer: 'Fractional HR means hiring an experienced HR leader (CHRO, HR Director, or People Partner) on a part-time basis—typically 1-3 days per week. "Fractional" refers to having a fraction of their time rather than full-time. This gives companies access to senior HR expertise without the £150k-£250k+ cost of a full-time hire.'
  },
  {
    question: 'Is fractional HR the same as part-time HR?',
    answer: 'Yes and no. Both describe HR leadership that isn\'t full-time. However, "fractional" typically implies working with multiple clients simultaneously, operating through a limited company (contractor), and focusing on strategic leadership rather than HR administration. "Part-time HR" may suggest a single employer relationship.'
  },
  {
    question: 'What is the difference between fractional HR and HR consulting?',
    answer: 'Fractional HR professionals become embedded team members who take ownership of outcomes—attending leadership meetings, making decisions, and being accountable for results. HR consultants provide external advice and recommendations without implementation responsibility. Fractional HR is "in the boat rowing with you."'
  },
  {
    question: 'How much does fractional HR cost?',
    answer: 'Fractional HR in the UK costs £700-£1,300 per day depending on seniority. For 2 days per week, expect £5,600-£10,400 monthly (£67,200-£124,800 annually). This is 50-70% less than the full cost of a full-time CHRO (£150,000-£250,000+ including salary, benefits, and equity).'
  },
  {
    question: 'What do fractional HR professionals do?',
    answer: 'Fractional HR leaders handle strategic people work: people strategy, culture development, talent acquisition leadership, complex employee relations, compliance, HR infrastructure, performance management frameworks, and investor/board reporting. They delegate HR administration to your team or outsourced providers.'
  },
  {
    question: 'When should a company hire fractional HR?',
    answer: 'Consider fractional HR when you have 20-150 employees and need senior HR expertise but not full-time; you\'re scaling rapidly; you\'re preparing for fundraising; you face complex ER issues; or you need to build HR infrastructure from scratch. It\'s ideal for companies outgrowing founder-led HR.'
  },
]

export default function WhatIsFractionalHRPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What is Fractional HR? Complete Definition & Guide',
    description: 'Everything you need to know about fractional HR - definition, how it works, costs, and when UK businesses should hire fractional HR leaders.',
    author: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    publisher: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    datePublished: '2025-01-16',
    dateModified: '2025-01-16',
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1920)' }} />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/fractional-hr" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to HR Hub
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-white text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Definition Guide
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                What is<br />
                <span className="text-pink-400">Fractional HR?</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                The complete answer to the most searched question about fractional people leadership. 30+ monthly searches, growing demand.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">30/mo</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Monthly Searches</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">1-3 Days</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Per Week</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-pink-400">50-70%</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Cost Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Snippet Definition */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Quick Answer</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional HR Definition</h2>
          </div>

          {/* Featured Snippet Target */}
          <div className="bg-pink-50 border-l-4 border-pink-500 p-8 mb-12">
            <p className="text-2xl md:text-3xl font-light text-gray-900 leading-relaxed mb-0">
              <strong className="font-bold">Fractional HR</strong> is a model where experienced HR leaders—CHROs, HR Directors, and People Partners—provide <strong>strategic HR leadership on a part-time basis</strong>, typically working 1-3 days per week. Unlike consultants who advise externally, fractional HR professionals become embedded members of your leadership team, taking ownership of your people strategy, culture, and HR operations at <strong>50-70% less cost</strong> than a full-time hire.
            </p>
          </div>

          <div className="prose prose-lg prose-gray max-w-none">
            <h3 className="text-2xl font-black text-gray-900 mt-8 mb-6">Breaking Down the Term</h3>

            <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
              <div className="bg-gray-50 p-6 border-l-4 border-pink-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">"Fractional"</h4>
                <p className="text-gray-700 mb-0">Means a fraction of time—not full-time. Fractional executives work with multiple companies simultaneously, dedicating 1-3 days per week to each client. This allows businesses to access senior expertise without full-time commitment.</p>
              </div>
              <div className="bg-gray-50 p-6 border-l-4 border-gray-900">
                <h4 className="text-lg font-bold text-gray-900 mb-2">"HR" (Human Resources)</h4>
                <p className="text-gray-700 mb-0">Refers to the people function—talent acquisition, <a href="https://www.acas.org.uk/employment-contracts-and-conditions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">employee relations</a>, performance management, culture, compensation, compliance, and organisational development. At senior levels: CHRO (Chief Human Resources Officer), HR Director, or People Partner.</p>
              </div>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">How Fractional HR Works</h3>

            <p>
              When you engage a fractional HR professional, they become your senior people leader—but part-time. According to <a href="https://www.cipd.org/uk/knowledge/reports/profession-map/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD research</a>, this model has grown 43% since 2020 as businesses seek flexible access to senior expertise.
            </p>

            <p>A typical engagement looks like this:</p>

            <div className="bg-gray-50 text-gray-900 p-8 my-10">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Example: Fractional HR Director, 2 Days/Week</h4>
              <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">What They Do:</p>
                  <ul className="space-y-1 text-sm list-none pl-0">
                    <li>• Attend weekly leadership meetings</li>
                    <li>• Develop and implement HR strategy</li>
                    <li>• Manage complex <a href="https://www.acas.org.uk/employment-rights" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">employee relations</a></li>
                    <li>• Lead talent acquisition for key hires</li>
                    <li>• Build HR policies and processes</li>
                    <li>• Mentor any junior HR team members</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">What They Don't Do:</p>
                  <ul className="space-y-1 text-sm list-none pl-0">
                    <li>• Day-to-day HR administration</li>
                    <li>• Payroll processing</li>
                    <li>• First-line employee queries</li>
                    <li>• Routine recruitment coordination</li>
                    <li>• Benefits administration</li>
                    <li>• (These are delegated to your team or outsourced)</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">Who Uses Fractional HR?</h3>

            <p>Fractional HR is most commonly used by:</p>

            <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
              <div className="bg-gray-50 p-5">
                <h4 className="font-bold text-gray-900 mb-2">Scale-ups (20-150 employees)</h4>
                <p className="text-sm text-gray-700">Companies that have outgrown founder-led HR but aren't ready for a £150k+ full-time CHRO. According to the <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute</a>, this is the fastest-growing business segment in the UK.</p>
              </div>
              <div className="bg-gray-50 p-5">
                <h4 className="font-bold text-gray-900 mb-2">VC/PE-Backed Companies</h4>
                <p className="text-sm text-gray-700">Portfolio companies that need professional HR leadership to support rapid growth and investor expectations. The <a href="https://www.britishbusinessbank.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Business Bank</a> reports strong growth in this segment.</p>
              </div>
              <div className="bg-gray-50 p-5">
                <h4 className="font-bold text-gray-900 mb-2">SMEs Facing HR Challenges</h4>
                <p className="text-sm text-gray-700">Businesses dealing with <a href="https://www.acas.org.uk/employment-tribunals" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">tribunals</a>, restructuring, M&A, or culture issues that require senior expertise.</p>
              </div>
              <div className="bg-gray-50 p-5">
                <h4 className="font-bold text-gray-900 mb-2">Companies Building HR Infrastructure</h4>
                <p className="text-sm text-gray-700">Organisations that need to establish proper HR foundations—<a href="https://www.gov.uk/browse/employing-people" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">employment contracts</a>, handbooks, HRIS, policies—from scratch.</p>
              </div>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">Fractional HR vs Other Models</h3>

            <p>Understanding how fractional HR compares to other <a href="https://www.cipd.org/uk/knowledge/factsheets/hr-outsourcing-factsheet/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">HR service models</a> helps you make the right choice for your business:</p>

            <div className="overflow-x-auto my-10">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-900">
                    <th className="p-4 text-left">Model</th>
                    <th className="p-4 text-left">Time</th>
                    <th className="p-4 text-left">Role</th>
                    <th className="p-4 text-left">Cost (Annual)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b bg-pink-50">
                    <td className="p-4 font-semibold">Fractional HR</td>
                    <td className="p-4">1-3 days/week, ongoing</td>
                    <td className="p-4">Embedded leader, owns outcomes</td>
                    <td className="p-4 font-bold text-pink-600">£67k-£135k</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Full-Time CHRO</td>
                    <td className="p-4">5 days/week, permanent</td>
                    <td className="p-4">Full-time executive</td>
                    <td className="p-4">£150k-£250k+</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Interim HR</td>
                    <td className="p-4">5 days/week, temporary</td>
                    <td className="p-4">Gap-fill during transition</td>
                    <td className="p-4">£120k-£200k</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">HR Consultant</td>
                    <td className="p-4">Project-based</td>
                    <td className="p-4">External advisor, no ownership</td>
                    <td className="p-4">£50k-£150k</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">HR Outsourcing</td>
                    <td className="p-4">Varies</td>
                    <td className="p-4">Admin & transactions</td>
                    <td className="p-4">£20k-£60k</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">Key Benefits of Fractional HR</h3>

            <div className="grid gap-6 my-10">
              <div className="bg-gray-50 p-6 border-l-4 border-pink-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">1. Cost Efficiency (50-70% Savings)</h4>
                <p className="text-gray-700 mb-0">Access CHRO-level expertise at a fraction of full-time cost. A 2-day/week fractional HR Director costs £94k-£114k annually vs £145k-£183k+ for full-time (including NI, <a href="https://www.gov.uk/workplace-pensions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">pension</a>, benefits).</p>
              </div>
              <div className="bg-gray-50 p-6 border-l-4 border-gray-300">
                <h4 className="text-lg font-bold text-gray-900 mb-2">2. Senior Expertise</h4>
                <p className="text-gray-700 mb-0">Fractional HR leaders typically have 15-20+ years experience and have held multiple CHRO/HR Director roles. They bring pattern recognition and <a href="https://www.cipd.org/uk/knowledge/guides/hr-practices/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">best practices</a> from across industries.</p>
              </div>
              <div className="bg-gray-50 p-6 border-l-4 border-pink-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">3. Flexibility</h4>
                <p className="text-gray-700 mb-0">Scale from 1 to 3 days per week as your needs change. Intensive during rapid growth or crisis, lighter during steady state. 30-60 day notice periods vs 3-6 months for full-time. This aligns with the UK's growing <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexible working</a> trends.</p>
              </div>
              <div className="bg-gray-50 p-6 border-l-4 border-gray-300">
                <h4 className="text-lg font-bold text-gray-900 mb-2">4. Speed to Impact</h4>
                <p className="text-gray-700 mb-0">Start within 1-2 weeks vs 4-6 months to hire full-time. Critical when facing urgent HR challenges—tribunal, <a href="https://www.acas.org.uk/reorganising-your-workforce" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">restructuring</a>, or rapid hiring.</p>
              </div>
              <div className="bg-gray-50 p-6 border-l-4 border-pink-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">5. External Perspective</h4>
                <p className="text-gray-700 mb-0">Working across multiple companies, fractional HR leaders bring fresh perspective and can quickly identify what's working elsewhere in similar businesses. This cross-sector knowledge is valued by <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">business directors</a> seeking competitive advantage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ skipSchema={true} items={WHAT_IS_HR_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Explore Fractional HR?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Learn more about how fractional HR can work for your business, or browse available opportunities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-hr" className="px-8 py-4 bg-pink-500 text-white font-bold uppercase tracking-wider hover:bg-pink-400 transition-colors">
              Complete HR Guide
            </Link>
            <Link href="/fractional-hr-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              Browse HR Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">HR Cluster</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-hr" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Complete HR Guide</Link>
              <Link href="/fractional-hr-jobs-uk" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Jobs UK</Link>
              <Link href="/fractional-hr-director" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Director</Link>
              <Link href="/fractional-chro" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Fractional CHRO</Link>
              <Link href="/fractional-hr-salary" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Salary Guide</Link>
              <Link href="/fractional-hr-vs-full-time" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">vs Full-Time</Link>
              <Link href="/part-time-hr" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Part-Time HR</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
