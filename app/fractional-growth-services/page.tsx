import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Growth Services UK | Hire a Part-Time Head of Growth',
  description: 'Hire a Fractional Head of Growth or Growth Director. Expert leadership for user acquisition, retention, and scaling. Data-driven growth strategy at a flexible cost.',
  keywords: 'fractional head of growth, fractional growth director, hire fractional growth expert, part time growth marketing, fractional growth strategy, growth hacking services',
  alternates: {
    canonical: 'https://fractional.quest/fractional-growth-services',
  },
  openGraph: {
    title: 'Fractional Growth Services UK | Hire a Part-Time Head of Growth',
    description: 'Hire a Fractional Head of Growth. Expert leadership for scaling user acquisition and retention.',
    images: ['/images/fractional-growth-services.jpg'],
    url: 'https://fractional.quest/fractional-growth-services',
  },
}

const GROWTH_FAQS = [
  {
    question: 'What is a Fractional Head of Growth?',
    answer: 'A Fractional Head of Growth is a senior marketer who focuses on rapid scaling. They use data, experimentation, and product engineering to unlock new channels for customer acquisition and retention, working part-time for high-potential companies.',
  },
  {
    question: 'How is this different from a Marketing Manager?',
    answer: 'Traditional marketing often focuses on brand and awareness. Growth focuses on the funnel: CAC (Cost of Acquisition), LTV (Lifetime Value), and Retention. It is a more technical, data-driven role.',
  },
  {
    question: 'How much does a Fractional Growth Director cost?',
    answer: 'Rates typically range from £700 to £1,200 per day. The role is often ROI-positive very quickly if they can unlock a scalable acquisition channel.',
  },
  {
    question: 'What industries use Fractional Growth leads?',
    answer: 'SaaS, E-commerce, FinTech, and Mobile Apps are the primary users. Any business with a digital product and a need to scale user numbers rapidly fits the profile.',
  },
]

export default function FractionalGrowthServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-orange-500/80 to-red-600/60" />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-white text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Growth Services
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Fractional Growth<br />
                <span className="text-white/70">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire a <strong className="text-white">Fractional Head of Growth</strong> to scale your user base.
                Scientific experimentation, channel optimisation, and rapid scaling—at a flexible cost.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Scale</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Fast</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">1-3</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Days/Week</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">High</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Impact</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
                  Hire a Fractional Head of Growth
                </Link>
                <Link href="#calculator" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Calculate Costs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Fractional Head of Growth */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is a Fractional Head of Growth?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              A <strong className="font-semibold text-gray-900">Fractional Head of Growth</strong> is a performance-obsessed marketer who leads your user acquisition strategy part-time. Unlike a CMO who manages the brand, a Growth lead manages the <em>metrics</em>. They run high-velocity experiments to find scalable channels and optimise every step of the funnel.
            </p>
            <p>
              This role is ideal for post-product-market-fit startups that need to prove they can scale user acquisition to investors.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Value</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Growth Engineering</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Experimentation',
                description: 'Designing and running A/B tests across landing pages, ads, and emails to improve conversion rates.',
                icon: '🧪',
              },
              {
                title: 'Paid Acquisition',
                description: 'Managing performance marketing spend (Google, Meta, LinkedIn) to maximise ROAS and lower CAC.',
                icon: '💸',
              },
              {
                title: 'SEO & Content',
                description: 'Building organic growth engines through programmatic SEO and viral content loops.',
                icon: '🕸️',
              },
              {
                title: 'Product Growth',
                description: 'Implementing Product-Led Growth (PLG) mechanics like referral programmes and freemium models.',
                icon: '🚀',
              },
              {
                title: 'Retention',
                description: 'Analysing cohort data to reduce churn and increase Lifetime Value (LTV).',
                icon: '🔄',
              },
              {
                title: 'Analytics',
                description: 'Setting up the data stack (Mixpanel, Amplitude) to track the entire user journey.',
                icon: '📊',
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Estimated Growth Costs</h2>
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
          <FAQ items={GROWTH_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-200 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Scale Your<br /><span className="text-orange-100">User Growth</span>
          </h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            Find the right fractional growth leader to unlock your scaling potential.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Find a Fractional Head of Growth
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
