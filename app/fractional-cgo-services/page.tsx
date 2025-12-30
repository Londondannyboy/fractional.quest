import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'
import { BreadcrumbsLight } from '@/components/Breadcrumbs'
import { getRoleBreadcrumbs } from '@/lib/seo-config'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CGO Services UK',
  description: 'Hire a Fractional CGO. ESG leadership for Net Zero strategy and sustainability compliance.',
  keywords: 'fractional cgo, fractional chief green officer, hire fractional cgo, part time sustainability officer, fractional cso, fractional esg services',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cgo-services',
  },
  openGraph: {
    title: 'Fractional CGO Services UK | Hire a Part-Time Chief Green Officer',
    description: 'Hire a Fractional CGO. Expert ESG leadership for Net Zero strategy and compliance.',
    images: ['/images/fractional-cgo-services.jpg'],
    url: 'https://fractional.quest/fractional-cgo-services',
  },
}

const CGO_FAQS = [
  {
    question: 'What is a Fractional CGO?',
    answer: 'A Fractional Chief Green Officer (CGO) or Chief Sustainability Officer (CSO) is an experienced ESG leader who helps organisations develop and implement sustainability strategies on a part-time basis. They ensure environmental compliance and drive sustainable business practices.',
  },
  {
    question: 'Why do I need a CGO?',
    answer: 'Investors, customers, and employees increasingly demand sustainability. A CGO ensures your business meets these expectations, complies with regulations (like TCFD), and avoids "greenwashing" accusations.',
  },
  {
    question: 'How much does a Fractional CGO cost?',
    answer: 'Day rates for Fractional CGOs typically range from £700 to £1,200. This provides high-level strategic guidance without the cost of a full-time executive salary.',
  },
  {
    question: 'What outcomes can I expect?',
    answer: 'A credible Net Zero roadmap, robust ESG reporting, reduced carbon footprint, improved supply chain sustainability, and enhanced brand reputation.',
  },
]

export default function FractionalCGOServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&q=80"
            alt="Fractional CGO Services - Professional sustainability leadership"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-800/80 to-green-900/60" />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('cgo', 'services')} className="mb-8" />
            <div className="max-w-4xl">
              <span className="inline-block bg-white text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Sustainability Services
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Fractional CGO<br />
                <span className="text-white/70">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire a <strong className="text-white">Fractional Chief Green Officer</strong> to lead your ESG strategy.
                Authentic sustainability, compliance, and impact—at a flexible cost.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Net</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Zero</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">1-3</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Days/Week</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">ESG</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Ready</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
                  Hire a Fractional CGO
                </Link>
                <Link href="#calculator" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Calculate Costs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Fractional CGO */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is a Fractional CGO?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              A <strong className="font-semibold text-gray-900">Fractional Chief Green Officer</strong> (or Chief Sustainability Officer) is an expert who embeds sustainability into the heart of your business strategy. Working part-time, they ensure that environmental responsibility drives innovation, efficiency, and long-term value, rather than just being a box-ticking exercise.
            </p>
            <p>
              This role is critical for businesses looking to attract green investment, win government contracts, or simply future-proof themselves against climate risk and regulation.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Impact</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Strategic Sustainability</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'ESG Strategy',
                description: 'Developing a comprehensive Environmental, Social, and Governance strategy aligned with business goals.',
                icon: '🌱',
              },
              {
                title: 'Carbon Management',
                description: 'Measuring carbon footprint (Scope 1, 2, & 3) and implementing reduction plans towards Net Zero.',
                icon: '📉',
              },
              {
                title: 'Reporting & Compliance',
                description: 'Managing disclosures for frameworks like TCFD, SASB, and B Corp certification.',
                icon: '📝',
              },
              {
                title: 'Supply Chain',
                description: 'Auditing and engaging suppliers to ensure sustainability standards are met throughout the value chain.',
                icon: '🔗',
              },
              {
                title: 'Green Finance',
                description: 'Identifying opportunities for green grants, loans, and investment. Unlocking capital for sustainable projects.',
                icon: '💷',
              },
              {
                title: 'Stakeholder Engagement',
                description: 'Communicating sustainability progress to investors, employees, and customers to build brand trust.',
                icon: '📢',
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Estimated CGO Costs</h2>
          </div>
          <RoleCalculator role="coo" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ items={CGO_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Build a<br /><span className="text-emerald-400">Sustainable Future</span>
          </h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Find the right fractional leader to drive your ESG strategy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Find a Fractional CGO
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
