import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Finance Director Services UK | Hire a Part-Time FD',
  description: 'Hire a Fractional Finance Director (FD) for your business. Operational finance leadership for SMEs. Manage cash flow, reporting, and compliance at a flexible cost.',
  keywords: 'fractional fd, fractional finance director, hire fractional fd, part time finance director, fractional finance leadership, fractional fd services',
  alternates: {
    canonical: 'https://fractional.quest/fractional-finance-director-services',
  },
  openGraph: {
    title: 'Fractional Finance Director Services UK | Hire a Part-Time FD',
    description: 'Hire a Fractional FD. Operational finance leadership for SMEs.',
    images: ['/images/fractional-finance-director-services.jpg'],
    url: 'https://fractional.quest/fractional-finance-director-services',
  },
}

const FD_FAQS = [
  {
    question: 'What is a Fractional Finance Director?',
    answer: 'A Fractional FD is a qualified accountant and experienced finance leader who manages your company\'s finances part-time. They are more operationally focused than a CFO, handling day-to-day financial management, reporting, and cash flow.',
  },
  {
    question: 'Who needs a Fractional FD?',
    answer: 'SMEs with turnover between £2m and £10m often need more than a bookkeeper but can\'t afford a full-time FD. A fractional FD provides the necessary oversight and strategic input to keep the business financially healthy.',
  },
  {
    question: 'How much does a Fractional FD cost?',
    answer: 'Fractional FD rates are typically £600-£1,000 per day. This is significantly less than a full-time salary, and you only pay for the days you need (e.g., 2-4 days per month).',
  },
  {
    question: 'What is the difference between an FD and a Financial Controller?',
    answer: 'A Controller looks backward (accounting accuracy). An FD looks forward (forecasting and strategy). An FD also manages external relationships with banks, auditors, and investors.',
  },
]

export default function FractionalFinanceDirectorServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800/90 via-blue-700/80 to-sky-800/60" />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-white text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Finance Services
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Fractional FD<br />
                <span className="text-white/70">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire a <strong className="text-white">Fractional Finance Director</strong> to control your cash.
                Operational rigour, accurate reporting, and financial stability—at a flexible cost.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Cash</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Control</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">1-2</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Days/Week</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Total</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Clarity</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
                  Hire a Fractional FD
                </Link>
                <Link href="#calculator" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Calculate Costs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Fractional FD */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is a Fractional FD?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              A <strong className="font-semibold text-gray-900">Fractional Finance Director</strong> is the financial conscience of your business. They work with you part-time to ensure your financial house is in order. From producing reliable management accounts to managing cash flow and dealing with the bank, they provide the operational grip that allows the business to scale safely.
            </p>
            <p>
              For many UK SMEs, this is the most critical hire after the initial founding team. It professionalises the business and prepares it for future growth or investment.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Impact</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Financial Control</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Management Accounts',
                description: 'Producing accurate, timely monthly board packs that explain what the numbers actually mean.',
                icon: '📊',
              },
              {
                title: 'Cash Flow Forecasting',
                description: 'Building robust 13-week cash flow forecasts to prevent surprises and manage working capital.',
                icon: '💷',
              },
              {
                title: 'Budgeting',
                description: 'Setting annual budgets and tracking performance against them. Identifying variances early.',
                icon: '📉',
              },
              {
                title: 'Compliance',
                description: 'Ensuring all statutory obligations (VAT, PAYE, Annual Accounts) are met on time and accurately.',
                icon: '✅',
              },
              {
                title: 'Systems & Process',
                description: 'Implementing modern finance tools (Xero, Pleo, etc.) to automate manual work and reduce errors.',
                icon: '⚙️',
              },
              {
                title: 'Bank Relationships',
                description: 'Managing relationships with lenders and securing necessary facilities like invoice finance or loans.',
                icon: '🏦',
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Estimated FD Costs</h2>
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
          <FAQ items={FD_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Take Control of<br /><span className="text-blue-400">Your Finances</span>
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Find the right fractional FD to secure your financial future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Find a Fractional FD
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
