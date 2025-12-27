import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { JobsGraph3D } from '@/components/JobsGraph3D'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'HR Consultant vs HR Director',
  description: 'Fractional HR Consultant vs Director. Key differences, costs £700-£1,100/day, when to hire each.',
  keywords: 'fractional hr consultant, fractional hr consulting, hr consultant vs hr director, fractional hr consultant jobs, part time hr consultant',
  alternates: {
    canonical: 'https://fractional.quest/fractional-hr-consultant',
  },
  openGraph: {
    title: 'Fractional HR Consultant vs HR Director: Which Do You Need?',
    description: 'Complete comparison guide - when to hire a fractional HR consultant vs fractional HR director, with costs and use cases.',
    images: ['/images/fractional-hr-consultant.jpg'],
    url: 'https://fractional.quest/fractional-hr-consultant',
  },
}

const CONSULTANT_FAQS = [
  {
    question: 'What does a Fractional HR Consultant do?',
    answer: 'Fractional HR Consultants provide specialist expertise on specific HR projects or problems—HRIS implementation, compensation benchmarking, <a href="https://www.cipd.org/uk/knowledge/factsheets/hr-policies-factsheet/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">policy development</a>, DE&I strategy, or tribunal preparation. They advise and implement but typically don\'t take ongoing leadership responsibility for your HR function.'
  },
  {
    question: 'How much does a Fractional HR Consultant cost?',
    answer: 'Fractional HR Consultants in the UK typically charge £700-£950 per day, or offer project-based pricing (e.g., £5,000-£15,000 for handbook development, £10,000-£25,000 for HRIS implementation). This is lower than HR Directors (£900-£1,100/day) because they focus on specific deliverables rather than ongoing leadership. Rates align with <a href="https://www.shrm.org/topics-tools/tools/hr-answers/what-is-hr-consultant" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">SHRM guidance</a> on HR consulting.'
  },
  {
    question: 'When should I hire an HR Consultant vs HR Director?',
    answer: 'Hire an HR Consultant for: specific projects with clear scope, specialist expertise you lack internally, one-off initiatives. Hire an HR Director for: ongoing strategic leadership, building your HR function, complex ER requiring continuous involvement, being embedded in leadership team. Consider <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexible working arrangements</a> for either role.'
  },
  {
    question: 'Can an HR Consultant become an HR Director?',
    answer: 'Yes, some engagements start as consulting (specific project) and evolve into ongoing fractional HR Director roles once value is proven. However, many HR Consultants prefer <a href="https://www.ipse.co.uk/resources/research-and-reports.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">project-based work</a> and may not want ongoing leadership responsibility.'
  },
  {
    question: 'Do I need both an HR Consultant and HR Director?',
    answer: 'Sometimes. A Fractional HR Director handles ongoing leadership while bringing in HR Consultants for specialist projects (compensation review, HRIS selection, M&A HR integration). This is common for companies with 100+ employees.'
  },
]

export default function FractionalHRConsultantPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Fractional HR Consultant vs HR Director: Which Do You Need?',
    description: 'Complete comparison guide - when to hire a fractional HR consultant vs fractional HR director.',
    author: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    publisher: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    datePublished: '2025-01-16',
    dateModified: '2025-01-16',
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Fractional HR consultant UK - HR team in strategy meeting" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/fractional-hr" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to HR Hub
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-pink-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Comparison Guide
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                HR Consultant vs<br />
                <span className="text-pink-400">HR Director</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Which <strong className="text-white">fractional HR role</strong> do you need? A complete comparison to help you make the right choice.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">30/mo</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Monthly Searches</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-pink-400">£700-£950</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Consultant Rate</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">£900-£1,100</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Director Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Quick Answer</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">The Key Difference</h2>
          </div>

          <div className="bg-pink-50 border-l-4 border-pink-500 p-8 mb-12">
            <p className="text-2xl md:text-3xl font-light text-gray-900 leading-relaxed mb-0">
              <strong className="font-bold">Fractional HR Consultants</strong> deliver specific projects and expertise. <strong className="font-bold">Fractional HR Directors</strong> take ownership of your HR function. Consultants are <strong>"do this for me"</strong>—Directors are <strong>"be my HR leader."</strong> Both roles can help businesses navigate <a href="https://www.gov.uk/browse/employing-people" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">UK employment regulations</a> effectively.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-black text-gray-900 mt-8 mb-6">Side-by-Side Comparison</h3>

            <div className="overflow-x-auto my-10">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-900">
                    <th className="p-4 text-left">Factor</th>
                    <th className="p-4 text-left">Fractional HR Consultant</th>
                    <th className="p-4 text-left">Fractional HR Director</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Primary Role</td>
                    <td className="p-4">Specialist expertise, project delivery</td>
                    <td className="p-4 bg-pink-50">Strategic leadership, owns HR function</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Day Rate</td>
                    <td className="p-4">£700-£950</td>
                    <td className="p-4 bg-pink-50">£900-£1,100</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Engagement Type</td>
                    <td className="p-4">Project-based, defined scope</td>
                    <td className="p-4 bg-pink-50">Ongoing, open-ended</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Duration</td>
                    <td className="p-4">Weeks to months</td>
                    <td className="p-4 bg-pink-50">6-18+ months</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Accountability</td>
                    <td className="p-4">Deliverables</td>
                    <td className="p-4 bg-pink-50">Outcomes & results</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Team Integration</td>
                    <td className="p-4">External advisor</td>
                    <td className="p-4 bg-pink-50">Leadership team member</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Decision Making</td>
                    <td className="p-4">Recommends</td>
                    <td className="p-4 bg-pink-50">Decides & implements</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Best For</td>
                    <td className="p-4">Specific projects, specialist skills</td>
                    <td className="p-4 bg-pink-50">Ongoing leadership, building HR</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* When to Hire Each */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Decision Guide</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">When to Hire Each</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 border-2 border-gray-200">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-4">Hire an HR Consultant When...</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">✓</span>
                    <span>You have a specific project with clear scope and timeline</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">✓</span>
                    <span>You need specialist expertise you don't have (e.g., <a href="https://www.cipd.org/uk/knowledge/factsheets/pay-reward-factsheet/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">compensation</a>, DE&I)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">✓</span>
                    <span>You already have internal HR but need expert support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">✓</span>
                    <span>You want recommendations and implementation help</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">✓</span>
                    <span>Budget is limited and you need targeted intervention</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-gray-600 mb-2"><strong>Example projects:</strong></p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• HRIS implementation (£10k-£25k)</li>
                    <li>• <a href="https://www.acas.org.uk/writing-employee-handbook" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Employee handbook</a> (£5k-£10k)</li>
                    <li>• Compensation benchmarking (£8k-£15k)</li>
                    <li>• DE&I strategy (£10k-£20k)</li>
                    <li>• Performance framework (£8k-£15k)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 border-2 border-pink-500">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-4">Hire an HR Director When...</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">✓</span>
                    <span>You need someone to own your HR function</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">✓</span>
                    <span>You want an embedded member of <a href="https://www.iod.com/professional-development/articles/how-to-succeed-as-a-first-time-director/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">leadership team</a></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">✓</span>
                    <span>You're building HR from scratch</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">✓</span>
                    <span>You have ongoing complex <a href="https://www.acas.org.uk/employment-relations" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ER issues</a></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">✓</span>
                    <span>You need someone accountable for people outcomes</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-gray-600 mb-2"><strong>Typical scope:</strong></p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Own <a href="https://www.cipd.org/uk/knowledge/guides/hr-strategy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">people strategy</a></li>
                    <li>• Attend leadership meetings</li>
                    <li>• Manage complex ER</li>
                    <li>• Lead senior hiring</li>
                    <li>• Build HR infrastructure</li>
                    <li>• Report to CEO/board</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">Real-World Examples</h3>

            <div className="space-y-6">
              <div className="bg-white p-6 border-l-4 border-pink-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Consultant Example: HRIS Implementation</h4>
                <p className="text-gray-700 mb-0">"We're 60 employees using spreadsheets for HR. We need someone to select and implement an HRIS (HiBob, Personio, etc.), migrate our data, and train the team. 3-month project." Understanding your <a href="https://scaleupinstitute.org.uk/scaleup-insights/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">scaleup requirements</a> is crucial at this stage.</p>
                <p className="text-pink-600 font-semibold mt-2">→ Hire HR Consultant. Clear project, specialist skill, defined end.</p>
              </div>

              <div className="bg-white p-6 border-l-4 border-gray-900">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Director Example: Building HR Function</h4>
                <p className="text-gray-700 mb-0">"We're 45 employees with no HR. Founders are drowning in people issues. We need someone to build everything—<a href="https://www.gov.uk/employment-contracts-and-conditions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">contracts</a>, policies, processes—and be our ongoing HR leader."</p>
                <p className="text-pink-600 font-semibold mt-2">→ Hire HR Director. Need ownership, ongoing leadership, embedded partner.</p>
              </div>

              <div className="bg-white p-6 border-l-4 border-pink-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Consultant Example: Compensation Review</h4>
                <p className="text-gray-700 mb-0">"We have an HR team but need specialist help to benchmark our salaries against market using <a href="https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earningsandworkinghours" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS earnings data</a>, redesign our bands, and create a new compensation philosophy."</p>
                <p className="text-pink-600 font-semibold mt-2">→ Hire HR Consultant. Specialist expertise, defined deliverable, internal HR continues.</p>
              </div>

              <div className="bg-white p-6 border-l-4 border-gray-900">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Director Example: Complex ER & Restructure</h4>
                <p className="text-gray-700 mb-0">"We're facing potential <a href="https://www.acas.org.uk/employment-tribunals" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">tribunal claims</a>, need to restructure the team, and have ongoing performance issues. We need experienced leadership to navigate this over the next 12 months."</p>
                <p className="text-pink-600 font-semibold mt-2">→ Hire HR Director. Complex ongoing issues, need accountability, leadership presence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Costs</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Cost Comparison</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="grid md:grid-cols-2 gap-8 my-10">
              <div className="bg-gray-50 p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Fractional HR Consultant</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Day Rate:</strong> £700-£950</li>
                  <li><strong>Project fees:</strong> £5,000-£25,000</li>
                  <li><strong>Typical engagement:</strong> £15,000-£50,000</li>
                  <li><strong>Duration:</strong> 1-6 months</li>
                </ul>
              </div>
              <div className="bg-pink-50 p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Fractional HR Director</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Day Rate:</strong> £900-£1,100</li>
                  <li><strong>Monthly (2 days/week):</strong> £7,800-£9,500</li>
                  <li><strong>Annual (2 days/week):</strong> £94,000-£114,000</li>
                  <li><strong>Duration:</strong> 6-18+ months</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 text-gray-900 p-8 my-10">
              <h4 className="text-xl font-bold text-gray-900 mb-4">When to Use Both</h4>
              <p className="text-gray-600 mb-0">
                Companies with 100+ employees often have a Fractional HR Director for ongoing leadership while bringing in HR Consultants for specialist projects. For example: HR Director handles day-to-day leadership while a Compensation Consultant runs a salary benchmarking project, or an HRIS Consultant implements new HR technology. This hybrid approach is increasingly common in <a href="https://www.british-business-bank.co.uk/research/small-business-insights/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">growing UK businesses</a>.
              </p>
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
          <FAQ items={CONSULTANT_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Find the Right HR Support</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Whether you need project-based consulting or ongoing leadership, find experienced HR professionals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-hr-jobs-uk" className="px-8 py-4 bg-pink-500 text-white font-bold uppercase tracking-wider hover:bg-pink-400 transition-colors">
              Browse HR Professionals
            </Link>
            <Link href="/fractional-hr-director" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              HR Director Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">HR Cluster</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-hr" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Complete HR Guide</Link>
              <Link href="/fractional-hr-jobs-uk" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Jobs UK</Link>
              <Link href="/fractional-hr-director" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Director</Link>
              <Link href="/fractional-hr-roles" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">All HR Roles</Link>
              <Link href="/fractional-hr-cost" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Cost Guide</Link>
              <Link href="/fractional-chro" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Fractional CHRO</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
