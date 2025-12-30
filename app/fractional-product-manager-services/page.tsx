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
  title: 'Fractional PM Services UK',
  description: 'Hire a Fractional PM. Expert product leadership for roadmap, user research, delivery.',
  keywords: 'fractional product manager, fractional pm, hire fractional pm, part time product manager, product management services, freelance product manager',
  alternates: {
    canonical: 'https://fractional.quest/fractional-product-manager-services',
  },
  openGraph: {
    title: 'Fractional PM Services UK',
    description: 'Hire a Fractional PM. Expert product leadership for roadmap and delivery.',
    images: ['/images/fractional-product-manager-services.jpg'],
    url: 'https://fractional.quest/fractional-product-manager-services',
  },
}

const PM_FAQS = [
  {
    question: 'What is a Fractional Product Manager?',
    answer: 'A Fractional PM is an experienced product professional who manages a product or feature set part-time. They do the discovery, user stories, and stakeholder management needed to get engineering teams building the right thing.',
  },
  {
    question: 'How much does a Fractional PM cost?',
    answer: 'Rates are typically £400-£700 per day. This is a cost-effective way to add product rigour to a specific project or early-stage startup without a full-time salary.',
  },
  {
    question: 'Can they work with my dev team?',
    answer: 'Yes, Fractional PMs are experts at slotting into existing agile/scrum processes. They use tools like Jira, Linear, and Slack to keep the dev team unblocked and focused.',
  },
  {
    question: 'Is this different from a CPO?',
    answer: 'Yes. A CPO sets the vision and strategy. A PM focuses on execution—writing tickets, testing features, and talking to users.',
  },
]

export default function FractionalProductManagerServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1920&q=80"
            alt="Fractional Product Manager Services UK hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-800/90 via-purple-700/80 to-indigo-800/60" />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('product', 'services')} className="mb-8" />
            <div className="max-w-4xl">
              <span className="inline-block bg-white text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Product Services
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Fractional PM<br />
                <span className="text-white/70">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire a <strong className="text-white">Fractional Product Manager</strong> to ship value.
                User-centric discovery, roadmap execution, and delivery—at a flexible cost.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Faster</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Delivery</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">2-3</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Days/Week</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Ship</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">More</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
                  Hire a Fractional PM
                </Link>
                <Link href="#calculator" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Calculate Costs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Fractional PM */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is a Fractional PM?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              A <strong className="font-semibold text-gray-900">Fractional Product Manager</strong> bridges the gap between your business goals and your engineering team. They translate vision into user stories, prioritise the backlog, and ensure that what gets built actually solves customer problems.
            </p>
            <p>
              Hiring a fractional PM is ideal for startups who have technical talent but lack product direction, or for established companies launching a new spin-off product.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Impact</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Product Execution</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'User Research',
                description: 'Talking to customers to validate problems and test solutions before writing a line of code.',
                icon: '🗣️',
              },
              {
                title: 'Backlog Management',
                description: 'Writing clear, actionable user stories and acceptance criteria. Prioritising what matters most.',
                icon: '📝',
              },
              {
                title: 'Sprint Planning',
                description: 'Working with engineers to plan sprints, unblock issues, and ensure steady delivery velocity.',
                icon: '🏃',
              },
              {
                title: 'Roadmapping',
                description: 'Creating a visual roadmap that aligns stakeholders on what is being built and when.',
                icon: '🗺️',
              },
              {
                title: 'Launch Management',
                description: 'Coordinating with marketing and sales to ensure successful feature launches.',
                icon: '🚀',
              },
              {
                title: 'Metrics & Analytics',
                description: 'Tracking product KPIs (usage, retention, conversion) to inform future iterations.',
                icon: '📊',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 hover:border-gray-400 transition-colors">
                <div className="text-3xl mb-4 text-purple-700">{item.icon}</div>
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Estimated PM Costs</h2>
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
          <FAQ items={PM_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-300 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Build the<br /><span className="text-purple-400">Right Thing</span>
          </h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
            Find the right fractional PM to lead your product delivery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Find a Fractional PM
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
