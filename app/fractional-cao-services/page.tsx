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
  title: 'Fractional CAO Services UK',
  description: 'Hire a Fractional CAO. Expert analytics leadership in AI, BI, and predictive modelling.',
  keywords: 'fractional cao, fractional analytics officer, hire fractional cao, part time cao, fractional chief analytics officer, fractional data services',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cao-services',
  },
  openGraph: {
    title: 'Fractional CAO Services UK | Hire a Part-Time CAO',
    description: 'Hire a Fractional CAO. Transform your data into actionable insights with senior analytics leadership.',
    images: ['/images/fractional-cao-services.jpg'],
    url: 'https://fractional.quest/fractional-cao-services',
  },
}

const CAO_FAQS = [
  {
    question: 'What is a Fractional CAO?',
    answer: 'A Fractional CAO is a senior analytics leader who helps companies derive value from their data on a part-time basis. They build analytics strategies, data science teams, and BI capabilities to drive evidence-based decision making.',
  },
  {
    question: 'What is the difference between a CAO and a CDO?',
    answer: 'A Chief Data Officer (CDO) often focuses on data governance, management, and infrastructure (defence). A Chief Analytics Officer (CAO) focuses on insights, modelling, and generating business value (offence). In many fractional roles, one person covers both.',
  },
  {
    question: 'How much does a Fractional CAO cost?',
    answer: 'Fractional CAO rates typically range from £900 to £1,400 per day. This allows companies to access high-end data science leadership for a fraction of the cost of a full-time executive.',
  },
  {
    question: 'What ROI can I expect?',
    answer: 'A Fractional CAO drives ROI by identifying revenue opportunities (e.g., churn prediction, cross-sell models), optimising operations, and enabling data-driven culture, often delivering value far exceeding their cost.',
  },
]

export default function FractionalCAOServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/90 via-cyan-800/80 to-blue-900/60" />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('cao', 'services')} className="mb-8" />
            <div className="max-w-4xl">
              <span className="inline-block bg-white text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Analytics Services
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Fractional CAO<br />
                <span className="text-white/70">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire a <strong className="text-white">Fractional CAO</strong> to unlock your data's potential.
                Advanced analytics, AI strategy, and actionable insights—at a flexible cost.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Data</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Driven</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">1-3</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Days/Week</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">AI</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Ready</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
                  Hire a Fractional CAO
                </Link>
                <Link href="#calculator" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Calculate Costs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Fractional CAO */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is a Fractional CAO?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              A <strong className="font-semibold text-gray-900">Fractional CAO</strong> brings C-suite analytics leadership to your business on a flexible basis. They don't just produce reports; they build the strategy, infrastructure, and culture required to turn raw data into a competitive advantage.
            </p>
            <p>
              Whether you need to deploy your first machine learning model, professionalise your BI, or prepare your data for an exit, a fractional CAO delivers the expertise of a veteran data leader without the full-time commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Value</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How a CAO Drives Growth</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Analytics Strategy',
                description: 'Developing a roadmap that aligns data initiatives with business goals. Prioritising high-value use cases.',
                icon: '🗺️',
              },
              {
                title: 'Business Intelligence',
                description: 'Implementing modern BI tools (Looker, Tableau, PowerBI) to democratise data access and kill spreadsheets.',
                icon: '📊',
              },
              {
                title: 'Data Science & AI',
                description: 'Leading the development of predictive models and AI applications to solve complex business problems.',
                icon: '🤖',
              },
              {
                title: 'Team Building',
                description: 'Recruiting and mentoring data scientists, analysts, and engineers. Creating a high-performance data culture.',
                icon: '👥',
              },
              {
                title: 'Data Monetisation',
                description: 'Identifying opportunities to create new revenue streams from existing data assets.',
                icon: '💰',
              },
              {
                title: 'Tech Stack',
                description: 'Selecting and implementing the right data infrastructure (Snowflake, dbt, Fivetran) for your scale.',
                icon: '💻',
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Estimated CAO Costs</h2>
          </div>
          <RoleCalculator role="cto" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ skipSchema={true} items={CAO_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-cyan-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Unlock Your<br /><span className="text-cyan-400">Data Potential</span>
          </h2>
          <p className="text-xl text-cyan-100 mb-10 max-w-2xl mx-auto">
            Find the right fractional analytics leader to transform your business with data.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Find a Fractional CAO
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
