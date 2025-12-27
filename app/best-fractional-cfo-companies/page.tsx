import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Best Fractional CFO Companies UK 2025',
  description: 'Best fractional CFO companies UK. Top providers of part-time CFO services for growing businesses.',
  keywords: 'best fractional cfo companies, fractional cfo providers, fractional cfo firms uk, part-time cfo services, fractional finance companies',
  alternates: {
    canonical: 'https://fractional.quest/best-fractional-cfo-companies',
  },
  openGraph: {
    title: 'Best Fractional CFO Companies UK 2025',
    description: 'Top UK providers of fractional CFO services.',
    url: 'https://fractional.quest/best-fractional-cfo-companies',
  },
}

const faqItems = [
  {
    question: 'What are fractional CFO companies?',
    answer: 'Fractional CFO companies are firms that provide part-time CFO services to businesses. They maintain networks of experienced finance executives and match them with companies needing strategic financial leadership without a full-time hire.',
  },
  {
    question: 'How do I choose a fractional CFO company?',
    answer: 'Evaluate based on: relevant sector experience, quality of their CFO network, pricing transparency, client testimonials, process for matching, and whether they provide support beyond the individual CFO placement.',
  },
  {
    question: 'How much do fractional CFO companies charge?',
    answer: 'Fractional CFO companies typically charge £4,000-£12,000 per month for ongoing engagements, or day rates of £800-£1,500. Some charge placement fees (10-20% of first-year fees) while others include this in their rates.',
  },
  {
    question: 'Should I hire directly or through a fractional CFO company?',
    answer: 'Companies offer vetting, replacement guarantees, and admin support. Direct hire gives more control and potentially lower cost. Use companies when you lack finance hiring expertise or want reduced risk; hire directly when you have clear requirements and recruitment capability.',
  },
]

export default function BestFractionalCFOCompaniesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-700 to-teal-600 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              CFO Providers
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Best Fractional<br />CFO Companies
            </h1>
            <p className="text-2xl md:text-3xl text-teal-100 leading-relaxed font-light">
              Leading UK providers of part-time CFO services for growing businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-teal-50 border-b-4 border-teal-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-teal-200">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Finding the Right CFO Provider</h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
              The <strong className="font-semibold text-gray-900">best fractional CFO companies</strong> combine deep networks of qualified finance executives with industry expertise and a rigorous matching process to connect businesses with the right CFO for their stage and sector.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Whether you need fundraising expertise, turnaround leadership, or strategic finance for growth, specialized providers offer vetted candidates, reduced hiring risk, and ongoing support.
            </p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Finance team meeting in modern office"
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
            <h2 className="text-3xl font-black text-gray-900">Types of Fractional CFO Providers</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              The UK market offers several types of fractional CFO companies, each with different strengths. Understanding these categories helps you find the right fit for your needs.
            </p>

            <div className="grid gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Specialist Fractional CFO Firms</h3>
                <p className="text-gray-600 text-sm mb-3">Dedicated to fractional CFO placements. Deep networks of part-time CFOs with proven matching processes.</p>
                <div className="text-xs text-teal-700 bg-teal-50 px-3 py-1 rounded inline-block">Best for: Scale-ups needing ongoing CFO support</div>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Executive Search Firms</h3>
                <p className="text-gray-600 text-sm mb-3">Traditional recruiters expanding into fractional/interim. Strong networks but may lack fractional-specific expertise.</p>
                <div className="text-xs text-gray-700 bg-gray-100 px-3 py-1 rounded inline-block">Best for: Larger companies with established requirements</div>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Finance Director Networks</h3>
                <p className="text-gray-600 text-sm mb-3">Membership-based communities of FDs offering fractional services. Often self-matching with peer vetting.</p>
                <div className="text-xs text-gray-700 bg-gray-100 px-3 py-1 rounded inline-block">Best for: Cost-conscious businesses comfortable with DIY</div>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Virtual CFO Platforms</h3>
                <p className="text-gray-600 text-sm mb-3">Tech-enabled platforms combining CFO expertise with software. Often bundled with bookkeeping/accounting.</p>
                <div className="text-xs text-gray-700 bg-gray-100 px-3 py-1 rounded inline-block">Best for: Early-stage companies needing full finance function</div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">What to Look for in CFO Companies</h2>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Network Quality</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Depth of CFO experience</li>
                  <li>Sector specializations</li>
                  <li>Vetting and qualification process</li>
                  <li>Size of active network</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Matching Process</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Understanding your needs</li>
                  <li>Candidate presentation</li>
                  <li>Interview support</li>
                  <li>Replacement guarantees</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Pricing Model</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Fee transparency</li>
                  <li>Placement vs ongoing fees</li>
                  <li>What's included</li>
                  <li>Contract flexibility</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Support</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Onboarding assistance</li>
                  <li>Ongoing account management</li>
                  <li>Performance monitoring</li>
                  <li>Additional resources</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Key UK Fractional CFO Providers</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              The UK has a growing ecosystem of fractional CFO providers. Key players include specialist firms like <a href="https://www.fdcapital.co.uk" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:text-teal-800">FD Capital</a>, networks like <a href="https://www.thefdintelligence.com" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:text-teal-800">The FD Intelligence</a>, and executive search firms expanding into the fractional market.
            </p>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-teal-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Specialist Fractional Firms</h4>
                  <p className="text-sm text-gray-600 m-0">FD Capital, The FD Centre, Finance Director Network—dedicated to fractional/part-time FD and CFO placements.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-teal-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Executive Search with Fractional</h4>
                  <p className="text-sm text-gray-600 m-0">Odgers Berndtson, Norman Broadbent, Executives Online—traditional search firms with fractional divisions.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-teal-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Sector Specialists</h4>
                  <p className="text-sm text-gray-600 m-0">Providers focused on specific industries—tech/SaaS CFOs, PE-backed company finance, manufacturing specialists.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-teal-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Virtual CFO Platforms</h4>
                  <p className="text-sm text-gray-600 m-0">Pilot, Bench (expanding to UK), and local providers offering tech-enabled CFO services bundled with accounting.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Typical Pricing</h2>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Monthly Retainer</div>
                <div className="text-2xl font-black text-gray-900">£4,000-£12,000</div>
                <div className="text-xs text-gray-500">1-3 days/week</div>
              </div>
              <div className="p-6 bg-teal-50 border border-teal-200 rounded-xl text-center">
                <div className="text-sm font-bold text-teal-700 uppercase mb-2">Day Rate</div>
                <div className="text-2xl font-black text-gray-900">£800-£1,500</div>
                <div className="text-xs text-gray-500">through provider</div>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Placement Fee</div>
                <div className="text-2xl font-black text-gray-900">10-20%</div>
                <div className="text-xs text-gray-500">of first year</div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Questions to Ask CFO Companies</h2>

            <ul className="text-lg space-y-3 my-8">
              <li><strong>Network:</strong> How many active CFOs do you have? What's their average experience level?</li>
              <li><strong>Matching:</strong> How do you match CFOs to clients? What's your typical shortlist size?</li>
              <li><strong>Guarantee:</strong> What happens if the CFO doesn't work out? Is there a replacement policy?</li>
              <li><strong>Pricing:</strong> What's included in your fees? Are there additional costs?</li>
              <li><strong>Support:</strong> What ongoing support do you provide after placement?</li>
              <li><strong>Experience:</strong> Have you placed CFOs in our industry/stage before?</li>
            </ul>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Company vs Direct Hire</h2>

            <div className="overflow-x-auto my-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 font-bold text-gray-900">Factor</th>
                    <th className="text-left py-3 font-bold text-teal-700">Through Company</th>
                    <th className="text-left py-3 font-bold text-gray-500">Direct Hire</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 font-medium">Vetting</td>
                    <td className="py-3 text-teal-700">Pre-vetted candidates</td>
                    <td className="py-3 text-gray-600">You assess yourself</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Speed</td>
                    <td className="py-3 text-teal-700">Often faster</td>
                    <td className="py-3 text-gray-600">Depends on network</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Cost</td>
                    <td className="py-3 text-teal-700">10-20% premium</td>
                    <td className="py-3 text-gray-600">Direct rates</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Risk</td>
                    <td className="py-3 text-teal-700">Replacement guarantee</td>
                    <td className="py-3 text-gray-600">Your risk</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-teal-400">The Bottom Line:</strong> The best fractional CFO companies combine quality networks, rigorous matching, and ongoing support. Expect to pay £4,000-£12,000/month or 10-20% above direct rates for reduced hiring risk.
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
      <section className="py-20 bg-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find CFO Services</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-cfo-jobs-uk" className="px-10 py-5 bg-white text-teal-700 font-bold uppercase tracking-wider hover:bg-teal-50 transition-colors">
              CFO Jobs
            </Link>
            <Link href="/fractional-cfo-consulting" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-teal-700 transition-colors">
              CFO Consulting
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-cfo" className="text-gray-600 hover:text-teal-700 font-medium">Fractional CFO</Link>
            <Link href="/fractional-cfo-jobs-uk" className="text-gray-600 hover:text-teal-700 font-medium">CFO Jobs</Link>
            <Link href="/fractional-cfo-consulting" className="text-gray-600 hover:text-teal-700 font-medium">CFO Consulting</Link>
            <Link href="/fractional-finance-director" className="text-gray-600 hover:text-teal-700 font-medium">Finance Director</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
