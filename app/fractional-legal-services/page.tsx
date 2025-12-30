import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'
import { BreadcrumbsLight } from '@/components/Breadcrumbs'
import { getRoleBreadcrumbs } from '@/lib/seo-config'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Legal Services UK',
  description: 'Hire a Fractional General Counsel. Contracts, IP, employment. In-house legal quality.',
  keywords: 'fractional general counsel, fractional legal counsel, hire fractional lawyer, part time general counsel, fractional head of legal, legal services for startups',
  alternates: {
    canonical: 'https://fractional.quest/fractional-legal-services',
  },
  openGraph: {
    title: 'Fractional Legal Services UK | Hire a Part-Time General Counsel',
    description: 'Hire a Fractional General Counsel. Strategic legal support for growing businesses.',
    images: ['/images/fractional-legal-services.jpg'],
    url: 'https://fractional.quest/fractional-legal-services',
  },
}

const LEGAL_FAQS = [
  {
    question: 'What is Fractional Legal Counsel?',
    answer: 'Fractional Legal Counsel is a qualified lawyer who acts as your in-house legal team part-time. They handle day-to-day legal matters like contracts, IP, and employment queries for a fixed fee or day rate.',
  },
  {
    question: 'Why not use a law firm?',
    answer: 'Law firms are expensive and reactive. A fractional lawyer is embedded in your team, understands your business context, and proactively manages risk. They are faster and more commercially minded.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Typically £800-£1,500 per day. Compared to law firm partner rates (£500+ per hour), this offers exceptional value for senior legal expertise.',
  },
  {
    question: 'What areas do they cover?',
    answer: 'Most are generalists who cover Commercial Contracts, Corporate/Governance, Employment, and basic IP/Data Protection. For specialist litigation or M&A, they manage external firms for you.',
  },
]

export default function FractionalLegalServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1920&q=80"
            alt="Legal documents and contract management"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-800/80 to-slate-800/60" />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('legal', 'services')} className="mb-8" />
            <div className="max-w-4xl">
              <span className="inline-block bg-white text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Legal Services
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Fractional Legal<br />
                <span className="text-white/70">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire a <strong className="text-white">Fractional General Counsel</strong> to protect your business.
                Strategic legal advice, contract management, and risk mitigation—at a flexible cost.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Risk</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Mitigated</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">1-2</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Days/Week</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">In-House</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Quality</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
                  Hire a Fractional Lawyer
                </Link>
                <Link href="#calculator" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Calculate Costs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Fractional Legal Counsel */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is a Fractional General Counsel?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              A <strong className="font-semibold text-gray-900">Fractional General Counsel</strong> serves as your company's primary lawyer on a retainer basis. They attend management meetings, understand your commercial goals, and provide the legal infrastructure to support them.
            </p>
            <p>
              Instead of paying external firms by the hour to "review this contract," you have a dedicated senior lawyer who knows your risk appetite and can negotiate deals quickly to get them over the line.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Coverage</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Legal Support Areas</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Commercial Contracts',
                description: 'Drafting, reviewing, and negotiating customer MSAs, supplier agreements, and partnerships.',
                icon: '📝',
              },
              {
                title: 'Corporate Governance',
                description: 'Managing board minutes, shareholder resolutions, and Companies House compliance.',
                icon: '🏛️',
              },
              {
                title: 'Employment Law',
                description: 'Advising on hiring, firing, settlement agreements, and HR policies.',
                icon: '👥',
              },
              {
                title: 'Intellectual Property',
                description: 'Protecting your brand through trademark management and IP assignment clauses.',
                icon: '💡',
              },
              {
                title: 'Data Protection',
                description: 'Ensuring GDPR compliance, managing data breaches, and reviewing data processing agreements.',
                icon: '🔒',
              },
              {
                title: 'Fundraising Support',
                description: 'Managing the legal due diligence process and documentation for investment rounds.',
                icon: '💰',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 hover:border-gray-400 transition-colors">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Estimated Legal Costs</h2>
          </div>
          <RoleCalculator role="cfo" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ items={LEGAL_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-300 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Secure Your<br /><span className="text-gray-400">Legal Foundation</span>
          </h2>
          <p className="text-xl text-gray-100 mb-10 max-w-2xl mx-auto">
            Connect with experienced fractional General Counsels to protect your growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Find a Fractional GC
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
