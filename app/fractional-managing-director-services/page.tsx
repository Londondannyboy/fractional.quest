import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'
import { BreadcrumbsLight } from '@/components/Breadcrumbs'
import { getRoleBreadcrumbs } from '@/lib/seo-config'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Managing Director Services UK | Hire a Part-Time MD',
  description: 'Hire a Fractional Managing Director (MD) for your business. Experienced general management for turnarounds, interim leadership, and subsidiary oversight. Flexible and effective.',
  keywords: 'fractional md, fractional managing director, hire fractional md, part time managing director, fractional general manager, fractional leadership services',
  alternates: {
    canonical: 'https://fractional.quest/fractional-managing-director-services',
  },
  openGraph: {
    title: 'Fractional Managing Director Services UK | Hire a Part-Time MD',
    description: 'Hire a Fractional MD. Senior operational leadership for businesses in transition.',
    images: ['/images/fractional-managing-director-services.jpg'],
    url: 'https://fractional.quest/fractional-managing-director-services',
  },
}

const MD_FAQS = [
  {
    question: 'What is a Fractional MD?',
    answer: 'A Fractional Managing Director is an experienced business leader who takes operational control of a company or division part-time. They manage the P&L, lead the team, and execute strategy. This flexible leadership model is increasingly popular among UK businesses, as outlined by the <a href="https://www.gov.uk/browse/business" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">UK government business guidance</a>.',
  },
  {
    question: 'How is this different from a Consultant?',
    answer: 'A consultant advises; an MD decides and executes. A Fractional MD has the authority to hire, fire, sign contracts, and make operational decisions. They are accountable for the results. The <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute</a> recognizes this hands-on leadership approach as essential for growing businesses.',
  },
  {
    question: 'What are the typical use cases?',
    answer: 'Common scenarios include: covering a long-term absence; leading a turnaround supported by organizations like the <a href="https://www.british-business-bank.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Business Bank</a>; managing a specific subsidiary or division; or providing leadership while a permanent MD is recruited. Private equity and venture capital firms, including <a href="https://www.bvca.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">BVCA members</a>, frequently use fractional executives.',
  },
  {
    question: 'How much does a Fractional MD cost?',
    answer: 'Rates typically range from £800 to £1,500 per day. This offers a high-calibre leader for a flexible period without the commitment of a permanent contract. According to <a href="https://www.ons.gov.uk/employmentandlabourmarket" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS employment data</a>, this represents significant value compared to full-time executive compensation.',
  },
]

export default function FractionalManagingDirectorServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-indigo-900/60" />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('md', 'services')} className="mb-8" />
            <div className="max-w-4xl">
              <span className="inline-block bg-white text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Management Services
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Fractional MD<br />
                <span className="text-white/70">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire a <strong className="text-white">Fractional Managing Director</strong> to steer the ship.
                Operational control, P&L responsibility, and steady leadership—at a flexible cost.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">P&L</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Owner</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">2-4</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Days/Week</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Rapid</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Deployment</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
                  Hire a Fractional MD
                </Link>
                <Link href="#calculator" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Calculate Costs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Fractional MD */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is a Fractional MD?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              A <strong className="font-semibold text-gray-900">Fractional Managing Director</strong> provides experienced general management to businesses that need leadership but perhaps not a full-time CEO. Often used by owners who want to step back through <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexible working arrangements</a>, or international companies establishing a UK presence, a Fractional MD takes operational responsibility for the business.
            </p>
            <p>
              They focus on execution—turning the board's strategy into reality, managing the senior team, and ensuring the business hits its financial targets. According to the <a href="https://www.iod.com/about-us/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors</a>, effective operational leadership is critical for sustainable business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Impact</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Operational Leadership</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'P&L Ownership',
                description: 'Taking full responsibility for the profit and loss account. Managing budgets, costs, and revenue targets, aligned with best practices from the Chartered Management Institute.',
                icon: '📊',
              },
              {
                title: 'Operational Oversight',
                description: 'Ensuring day-to-day operations run smoothly. Identifying efficiencies and fixing bottlenecks.',
                icon: '⚙️',
              },
              {
                title: 'Team Management',
                description: 'Leading and mentoring functional heads (Sales, Ops, Marketing). Hiring and performance management.',
                icon: '👥',
              },
              {
                title: 'Strategy Execution',
                description: 'Translating high-level board strategy into actionable operational plans and KPIs.',
                icon: '📋',
              },
              {
                title: 'Stakeholder Reporting',
                description: 'Reporting performance to the board, owners, or investors with transparency and clarity.',
                icon: '📢',
              },
              {
                title: 'Crisis Management',
                description: 'Providing a steady hand during periods of change, turnaround, or crisis.',
                icon: '⚓',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 hover:border-gray-400 transition-colors">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                  {item.title === 'P&L Ownership' && (
                    <> Learn more from <a href="https://www.managers.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CMI</a>.</>
                  )}
                  {item.title === 'Team Management' && (
                    <> <a href="https://www.cipd.org/uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD guidance</a> available.</>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section id="calculator" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Calculator</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Estimated MD Costs</h2>
          </div>
          <RoleCalculator role="ceo" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ items={MD_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Lead Your Business<br /><span className="text-blue-400">Forward</span>
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Find the right fractional Managing Director to take the helm. Join businesses across the UK, as reported by the <a href="https://www.cbi.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CBI</a>, who are leveraging flexible executive talent.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Find a Fractional MD
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
