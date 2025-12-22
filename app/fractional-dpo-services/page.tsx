import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional DPO Services UK | Hire a Part-Time Data Protection Officer',
  description: 'Hire a Fractional Data Protection Officer (DPO). Ensure GDPR compliance and data privacy with expert guidance. Flexible, cost-effective DPO services.',
  keywords: 'fractional dpo, fractional data protection officer, hire fractional dpo, part time dpo, gdpr compliance services, data privacy officer',
  alternates: {
    canonical: 'https://fractional.quest/fractional-dpo-services',
  },
  openGraph: {
    title: 'Fractional DPO Services UK | Hire a Part-Time Data Protection Officer',
    description: 'Hire a Fractional DPO. Ensure GDPR compliance with expert data privacy leadership.',
    images: ['/images/fractional-dpo-services.jpg'],
    url: 'https://fractional.quest/fractional-dpo-services',
  },
}

const DPO_FAQS = [
  {
    question: 'What is a Fractional DPO?',
    answer: 'A Fractional DPO is an outsourced Data Protection Officer who fulfils your statutory GDPR obligations on a part-time basis. They are the independent expert who monitors your compliance and acts as the contact point for the ICO.',
  },
  {
    question: 'Why outsource the DPO role?',
    answer: 'The DPO must be independent and expert in data law. For many companies, it is hard to find an internal employee with this skillset who doesn\'t have a conflict of interest (e.g., Head of IT or Marketing cannot be DPO). Outsourcing solves this.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Fractional DPO services typically cost between £500 and £900 per day, often delivered as a monthly retainer (e.g., 2-4 days per month).',
  },
  {
    question: 'Is it mandatory?',
    answer: 'For public authorities and companies processing large scale sensitive data, yes. For others, it is best practice to demonstrate accountability.',
  },
]

export default function FractionalDPOServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/90 via-cyan-900/80 to-blue-950/60" />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-white text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Privacy Services
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Fractional DPO<br />
                <span className="text-white/70">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire a <strong className="text-white">Fractional DPO</strong> to safeguard your data.
                GDPR compliance, privacy impact assessments, and ICO liaison—at a flexible cost.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">GDPR</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Compliant</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">1-2</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Days/Month</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Expert</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Guidance</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
                  Hire a Fractional DPO
                </Link>
                <Link href="#calculator" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Calculate Costs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Fractional DPO */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is a Fractional DPO?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              A <strong className="font-semibold text-gray-900">Fractional Data Protection Officer</strong> provides the mandatory independent oversight required by GDPR. They act as your internal privacy watchdog, advising on data strategy, monitoring compliance, and training staff.
            </p>
            <p>
              This role is crucial for building trust with customers. In an era of data breaches, having a qualified DPO demonstrates that you take data privacy seriously.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Coverage</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Data Privacy Management</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Compliance Monitoring',
                description: 'Auditing data processing activities to ensuring they align with GDPR and the Data Protection Act 2018.',
                icon: '👁️',
              },
              {
                title: 'DPIAs',
                description: 'Conducting Data Protection Impact Assessments for new projects or high-risk processing.',
                icon: '📋',
              },
              {
                title: 'Staff Training',
                description: 'Educating employees on data privacy, security hygiene, and how to spot a breach.',
                icon: '🎓',
              },
              {
                title: 'Breach Management',
                description: 'Leading the response to data breaches, including assessing severity and notifying the ICO within 72 hours.',
                icon: '🚨',
              },
              {
                title: 'DSARs',
                description: 'Handling Data Subject Access Requests and other rights requests from individuals.',
                icon: '📩',
              },
              {
                title: 'Regulator Liaison',
                description: 'Acting as the primary contact point for the Information Commissioner\'s Office (ICO).',
                icon: '🏛️',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 hover:border-gray-400 transition-colors">
                <div className="text-3xl mb-4 text-cyan-800">{item.icon}</div>
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Estimated DPO Costs</h2>
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
          <FAQ items={DPO_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-cyan-950 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Protect Your<br /><span className="text-cyan-400">Data</span>
          </h2>
          <p className="text-xl text-cyan-100 mb-10 max-w-2xl mx-auto">
            Find the right fractional DPO to ensure your compliance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Find a Fractional DPO
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
