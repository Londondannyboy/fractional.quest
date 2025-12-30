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
  title: 'Fractional CSO Services UK',
  description: 'Hire a Fractional CSO. Build sales teams, drive revenue, scale growth.',
  keywords: 'fractional cso, fractional chief sales officer, hire fractional cso, part time sales director, fractional sales leadership, fractional sales services',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cso-services',
  },
  openGraph: {
    title: 'Fractional CSO Services UK | Hire a Part-Time CSO',
    description: 'Hire a Fractional CSO. Expert sales leadership to drive revenue and scale growth.',
    images: ['/images/fractional-cso-services.jpg'],
    url: 'https://fractional.quest/fractional-cso-services',
  },
}

const CSO_FAQS = [
  {
    question: 'What is a Fractional CSO?',
    answer: 'A Fractional CSO is a senior sales executive who leads your sales function on a part-time basis. They build the sales strategy, manage the team, implement processes, and drive revenue growth without the cost of a full-time hire.',
  },
  {
    question: 'When should I hire a Fractional CSO?',
    answer: 'Hire a Fractional CSO when the founder can no longer manage sales alone, when your sales team is underperforming, or when you need to professionalise your sales operation to scale.',
  },
  {
    question: 'How much does a Fractional CSO cost?',
    answer: 'Fractional CSO rates typically range from £1,000 to £1,600 per day. The cost is often offset by the immediate increase in sales performance and revenue.',
  },
  {
    question: 'What is the difference between a CSO and a Sales Director?',
    answer: 'A Sales Director focuses on managing the team and hitting targets. A CSO operates at a strategic board level, defining the go-to-market strategy, pricing, and long-term revenue architecture.',
  },
]

export default function FractionalCSOServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80"
            alt="Fractional CSO Services"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 via-green-700/80 to-lime-900/60" />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('cso', 'services')} className="mb-8" />
            <div className="max-w-4xl">
              <span className="inline-block bg-white text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Sales Services
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Fractional CSO<br />
                <span className="text-white/70">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire a <strong className="text-white">Fractional CSO</strong> to supercharge your sales.
                Proven sales leadership, pipeline rigour, and revenue growth—at a flexible cost.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Sales</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Growth</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">1-3</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Days/Week</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Fast</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Impact</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
                  Hire a Fractional CSO
                </Link>
                <Link href="#calculator" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Calculate Costs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Fractional CSO */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is a Fractional CSO?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              A <strong className="font-semibold text-gray-900">Fractional Chief Sales Officer</strong> is a battle-hardened sales leader who joins your executive team part-time. They bring the playbooks, training, and discipline needed to turn a group of individuals into a high-performance sales engine.
            </p>
            <p>
              For founders, hiring a fractional CSO is the first step in "sacking themselves" from the sales role. It brings professional management to the revenue function, ensuring predictable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Value</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Building the Sales Engine</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Sales Strategy',
                description: 'Defining the Ideal Customer Profile (ICP), value proposition, and go-to-market strategy.',
                icon: '🎯',
              },
              {
                title: 'Process & Playbooks',
                description: 'Creating repeatable sales processes and playbooks to ensure consistency and scalability.',
                icon: '📖',
              },
              {
                title: 'Team Management',
                description: 'Hiring, onboarding, coaching, and managing sales representatives to hit their targets.',
                icon: '👥',
              },
              {
                title: 'Pipeline Management',
                description: 'Implementing rigour in pipeline reviews and forecasting to provide accurate revenue visibility.',
                icon: '📊',
              },
              {
                title: 'Compensation',
                description: 'Designing commission plans and incentive structures that drive the right behaviours.',
                icon: '💷',
              },
              {
                title: 'Tech Stack',
                description: 'Optimising the CRM (Salesforce, HubSpot) and sales tools for maximum efficiency.',
                icon: '⚙️',
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Estimated CSO Costs</h2>
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
          <FAQ items={CSO_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-300 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Accelerate Your<br /><span className="text-green-400">Revenue Growth</span>
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Find the right fractional sales leader to build your revenue engine.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Find a Fractional CSO
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
