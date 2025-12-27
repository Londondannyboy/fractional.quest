import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Client Services Director Services UK | Hire a Part-Time CSD',
  description: 'Hire a Fractional Client Services Director (CSD) or Head of Customer Success. Expert leadership for account management, retention, and client growth. Flexible and high-impact.',
  keywords: 'fractional client services director, fractional csd, hire fractional client services, part time customer success director, fractional head of cs, account management leadership',
  alternates: {
    canonical: 'https://fractional.quest/fractional-client-services-services',
  },
  openGraph: {
    title: 'Fractional Client Services Director Services UK | Hire a Part-Time CSD',
    description: 'Hire a Fractional CSD. Expert leadership for client retention and growth.',
    images: ['/images/fractional-client-services-services.jpg'],
    url: 'https://fractional.quest/fractional-client-services-services',
  },
}

const CS_FAQS = [
  {
    question: 'What is a Fractional Client Services Director?',
    answer: 'A Fractional CSD is a senior account management leader who works with your agency or B2B business part-time. They implement processes to retain clients, grow accounts, and manage the client services team.',
  },
  {
    question: 'How do they reduce churn?',
    answer: 'By implementing health checks, regular business reviews (QBRs), and proactive relationship management strategies. They spot at-risk clients early and intervene.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Rates are typically £600-£1,000 per day. For a business with recurring revenue, saving just one key account often pays for the fractional CSD for the entire year.',
  },
  {
    question: 'Do they manage the team?',
    answer: 'Yes, a key part of the role is mentoring Account Managers and Customer Success Managers (CSMs), setting targets, and improving their commercial skills.',
  },
]

export default function FractionalClientServicesServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-800/90 via-indigo-700/80 to-blue-800/60" />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-white text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Client Services
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Fractional CSD<br />
                <span className="text-white/70">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire a <strong className="text-white">Fractional Client Services Director</strong> to grow your accounts.
                Retention strategy, team leadership, and upsell growth—at a flexible cost.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Reduce</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Churn</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">1-2</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Days/Week</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Grow</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">LTV</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
                  Hire a Fractional CSD
                </Link>
                <Link href="#calculator" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Calculate Costs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Fractional CSD */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is a Fractional Client Services Director?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              A <strong className="font-semibold text-gray-900">Fractional Client Services Director</strong> is a retention expert. They take charge of your existing customer base, ensuring they are happy, renewed, and growing.
            </p>
            <p>
              Often, businesses focus 90% of their effort on new sales and neglect existing clients. A fractional CSD corrects this balance, turning your client list into a sustainable growth engine through better account management and customer success.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Impact</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Client Growth Strategy</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Retention Strategy',
                description: 'Mapping the customer journey and identifying key touchpoints to reduce churn and improve loyalty.',
                icon: '⚓',
              },
              {
                title: 'Account Growth',
                description: 'Creating plans for upselling and cross-selling to increase Average Revenue Per Account (ARPA).',
                icon: '📈',
              },
              {
                title: 'Process Implementation',
                description: 'Standardising onboarding, QBRs, and renewal processes to ensure consistent quality.',
                icon: '⚙️',
              },
              {
                title: 'Team Coaching',
                description: 'Training Account Managers on commercial negotiation, relationship building, and handling conflict.',
                icon: '👥',
              },
              {
                title: 'Client Satisfaction',
                description: 'Implementing NPS (Net Promoter Score) or CSAT tracking and acting on the feedback.',
                icon: '❤️',
              },
              {
                title: 'Commercial negotiation',
                description: 'Handling high-stakes renewal negotiations or disputes to protect revenue.',
                icon: '🤝',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 hover:border-gray-400 transition-colors">
                <div className="text-3xl mb-4 text-indigo-700">{item.icon}</div>
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Estimated CSD Costs</h2>
          </div>
          <RoleCalculator role="cmo" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ skipSchema={true} items={CS_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-indigo-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-300 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Turn Clients into<br /><span className="text-indigo-400">Advocates</span>
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Find the right fractional leader to grow your client base.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Find a Fractional CSD
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
