import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional FC Services UK',
  description: 'Hire a Fractional Financial Controller. Accounting management, month-end, controls.',
  keywords: 'fractional financial controller, fractional fc, hire fractional controller, part time financial controller, fractional accounting services',
  alternates: {
    canonical: 'https://fractional.quest/fractional-financial-controller-services',
  },
  openGraph: {
    title: 'Fractional Financial Controller Services UK | Hire a Part-Time FC',
    description: 'Hire a Fractional FC. Expert accounting management and financial controls.',
    images: ['/images/fractional-financial-controller-services.jpg'],
    url: 'https://fractional.quest/fractional-financial-controller-services',
  },
}

const FC_FAQS = [
  {
    question: 'What is a Fractional Financial Controller?',
    answer: 'A Fractional Financial Controller is a senior accountant who manages your finance function part-time. They ensure your books are accurate, run the month-end process, and maintain robust financial controls.',
  },
  {
    question: 'Why do I need a Fractional FC?',
    answer: 'If your business is too big for a bookkeeper but too small for a full-time Controller, a Fractional FC fills the gap. They provide the technical accounting expertise to ensure your numbers are audit-ready and reliable.',
  },
  {
    question: 'How much does a Fractional FC cost?',
    answer: 'Rates are typically £400-£700 per day. This is a cost-effective way to access a qualified accountant (ACA/ACCA) for the critical days of the month (e.g., month-end close).',
  },
  {
    question: 'What systems do they use?',
    answer: 'Fractional FCs are experts in modern cloud accounting stacks: Xero, QuickBooks, NetSuite, and add-ons like Dext, Pleo, and Fathom.',
  },
]

export default function FractionalFinancialControllerServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700/90 via-blue-600/80 to-sky-700/60" />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-white text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Accounting Services
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Fractional FC<br />
                <span className="text-white/70">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire a <strong className="text-white">Fractional Financial Controller</strong> to manage your ledger.
                Precise accounting, robust controls, and audit readiness—at a flexible cost.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">100%</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Accuracy</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">3-5</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Days/Month</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Audit</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Ready</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
                  Hire a Fractional FC
                </Link>
                <Link href="#calculator" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Calculate Costs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Fractional FC */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is a Fractional FC?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              A <strong className="font-semibold text-gray-900">Fractional Financial Controller</strong> is the technical backbone of your finance team. They take ownership of the accounting function, ensuring that every transaction is recorded correctly and that the month-end close happens like clockwork.
            </p>
            <p>
              While an FD or CFO looks at the future, an FC ensures the past and present are accurately reported. This foundation of trust is essential for any business planning to raise funds or sell.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Impact</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Accounting Excellence</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Month-End Close',
                description: 'Running a disciplined process to close the books within 10 days of month-end, enabling timely reporting.',
                icon: '📅',
              },
              {
                title: 'Audit Management',
                description: 'Leading the annual audit process, preparing schedules, and answering auditor queries to ensure a clean report.',
                icon: '🔍',
              },
              {
                title: 'Financial Controls',
                description: 'Implementing checks and balances (e.g., PO systems, expense policies) to prevent fraud and error.',
                icon: '🛡️',
              },
              {
                title: 'Tax Compliance',
                description: 'Ensuring VAT returns, R&D tax credit claims, and Corporation Tax filings are accurate and on time.',
                icon: '🏛️',
              },
              {
                title: 'Payroll Oversight',
                description: 'Managing the payroll process, pension contributions, and P11D reporting.',
                icon: '💷',
              },
              {
                title: 'Technical Accounting',
                description: 'Handling complex areas like revenue recognition (IFRS 15) and consolidation for groups.',
                icon: '📐',
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Estimated FC Costs</h2>
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
          <FAQ skipSchema={true} items={FC_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Build a Solid<br /><span className="text-blue-200">Financial Foundation</span>
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Find the right fractional controller to secure your ledger.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Find a Fractional FC
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
