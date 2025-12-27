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
  title: 'Fractional Compliance UK 2025',
  description: 'Hire a Fractional Compliance Officer. FCA, GDPR, ISO regulatory guidance on demand.',
  keywords: 'fractional compliance officer, fractional compliance manager, hire fractional compliance, part time compliance officer, regulatory compliance services',
  alternates: {
    canonical: 'https://fractional.quest/fractional-compliance-services',
  },
  openGraph: {
    title: 'Fractional Compliance Services UK | Hire a Part-Time Compliance Officer',
    description: 'Hire a Fractional Compliance Officer. Expert regulatory guidance and risk management.',
    images: ['/images/fractional-compliance-services.jpg'],
    url: 'https://fractional.quest/fractional-compliance-services',
  },
}

const COMPLIANCE_FAQS = [
  {
    question: 'What is a Fractional Compliance Officer?',
    answer: 'A Fractional Compliance Officer is a regulatory expert who manages your company\'s compliance obligations on a part-time basis. They ensure you adhere to laws and standards like <a href="https://www.fca.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">FCA rules</a>, <a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">GDPR</a>, and ISO 27001.',
  },
  {
    question: 'Why outsource compliance?',
    answer: 'Compliance is critical but often doesn\'t require a full-time role in smaller companies. Outsourcing to a fractional expert gives you access to senior knowledge without the cost of a full-time salary, ensuring you stay legal and avoid fines. This model is particularly effective for firms navigating <a href="https://www.fca.org.uk/firms/authorisation" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">FCA authorisation</a> processes.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Rates vary by sector complexity. For financial services, expect £700-£1,000 per day. For general corporate compliance, £500-£800 per day is common. These rates reflect the seniority of professionals often holding qualifications from bodies like <a href="https://www.cisi.org/cisiweb2/cisi-website" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CISI</a> or <a href="https://www.int-comp.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ICA (International Compliance Association)</a>.',
  },
  {
    question: 'What sectors do they cover?',
    answer: 'We have specialists across <a href="https://www.fca.org.uk/firms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Financial Services (FCA)</a>, Healthcare (CQC), <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Data Privacy (ICO)</a>, and General Corporate Compliance.',
  },
]

export default function FractionalComplianceServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800/90 via-slate-700/80 to-gray-800/60" />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('compliance', 'services')} className="mb-8" />
            <div className="max-w-4xl">
              <span className="inline-block bg-white text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Compliance Services
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Fractional Compliance<br />
                <span className="text-white/70">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire a <strong className="text-white">Fractional Compliance Officer</strong> to manage risk.
                Regulatory expertise for <a href="https://www.fca.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">FCA</a>, <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">GDPR</a>, and policy management—at a flexible cost.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Risk</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Zero</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">1-2</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Days/Week</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Audit</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Ready</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
                  Hire a Fractional Officer
                </Link>
                <Link href="#calculator" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Calculate Costs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Fractional Compliance Officer */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is a Fractional Compliance Officer?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              A <strong className="font-semibold text-gray-900">Fractional Compliance Officer</strong> is a specialist who takes ownership of your company's regulatory health. They identify risks, write policies, train staff, and ensure you are ready for any external audit from bodies like the <a href="https://www.bankofengland.co.uk/prudential-regulation" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Prudential Regulation Authority (PRA)</a> or sector-specific regulators.
            </p>
            <p>
              Unlike a consultant who writes a report and leaves, a fractional officer stays with you to implement the changes and maintain standards over time. This approach aligns with <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexible working arrangements</a> that enable businesses to access senior expertise without full-time commitments, a model increasingly adopted by <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">UK scaleups</a> seeking flexible leadership solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you're preparing for <a href="https://www.fca.org.uk/firms/financial-crime" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">financial crime compliance</a>, implementing <a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">GDPR requirements</a>, or building governance frameworks aligned with <a href="https://www.iod.com/membership/member-benefits/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors (IoD)</a> best practices, a fractional compliance officer provides the strategic oversight you need without the overhead of a permanent hire.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Coverage</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Regulatory Peace of Mind</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[ 
              {
                title: 'Policy Management',
                description: 'Creating and maintaining the employee handbook and compliance manuals, aligned with <a href="https://www.cipd.org/uk/knowledge/guides/hr-policies/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD best practices</a>.',
                icon: 'Docs',
              },
              {
                title: 'Risk Assessment',
                description: 'Conducting regular audits to identify and mitigate operational and legal risks, following <a href="https://www.fca.org.uk/firms/risk-management" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">FCA risk management guidance</a>.',
                icon: '🔍',
              },
              {
                title: 'Training',
                description: 'Delivering mandatory training (e.g., Anti-Bribery, <a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/training/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">GDPR from ICO</a>, Health & Safety) to staff.',
                icon: '🎓',
              },
              {
                title: 'Reporting',
                description: 'Preparing compliance reports for the board and external regulators including the <a href="https://www.fca.org.uk/firms/reporting" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">FCA</a> and <a href="https://ico.org.uk/for-organisations/report-a-breach/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ICO</a>.',
                icon: '📊',
              },
              {
                title: 'Incident Response',
                description: 'Managing the response to breaches, complaints, or regulatory inquiries in line with <a href="https://www.ukfinance.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">UK Finance</a> standards and regulatory requirements.',
                icon: '🚨',
              },
              {
                title: 'Culture',
                description: 'Embedding a culture of ethics and integrity throughout the organisation, supported by <a href="https://www.iod.com/news/governance/compliance-and-ethics-building-a-culture-of-integrity/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IoD governance principles</a>.',
                icon: '🤝',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 hover:border-gray-400 transition-colors">
                <div className="text-3xl mb-4 text-slate-700">{item.icon}</div>
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Estimated Compliance Costs</h2>
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
          <FAQ items={COMPLIANCE_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Protect Your<br /><span className="text-slate-400">Business</span>
          </h2>
          <p className="text-xl text-slate-100 mb-10 max-w-2xl mx-auto">
            Find the right fractional compliance expert to manage your regulatory risk, whether you need expertise in <a href="https://www.cisi.org/cisiweb2/cisi-website/study-with-us/professional-refresher" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">financial services compliance (CISI)</a>, <a href="https://ico.org.uk/for-organisations/accountability-framework/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">data protection accountability</a>, or general corporate governance informed by <a href="https://www.cipd.org/uk/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">CIPD</a> standards.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Find a Compliance Officer
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}