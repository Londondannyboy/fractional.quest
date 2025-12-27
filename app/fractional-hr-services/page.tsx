import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { createDbQuery } from '@/lib/db'
import { JobsGraph3D } from '@/components/JobsGraph3D'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { BreadcrumbsLight } from '@/components/Breadcrumbs'
import { getRoleBreadcrumbs } from '@/lib/seo-config'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional HR Services UK 2025',
  description: 'Fractional HR services UK. HR Directors and CHROs at £700-£1,300/day.',
  keywords: 'fractional hr services, fractional hr services uk, outsourced hr services, part time hr services, fractional hr support',
  alternates: {
    canonical: 'https://fractional.quest/fractional-hr-services',
  },
  openGraph: {
    title: 'Fractional HR Services UK | Expert People Leadership',
    description: 'Fractional HR services - access experienced HR Directors and CHROs on-demand.',
    images: ['/images/fractional-hr-services.jpg'],
    url: 'https://fractional.quest/fractional-hr-services',
  },
}

async function getHRStats() {
  try {
    const sql = createDbQuery()
    const result = await sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'HR'`
    return parseInt((result[0] as any)?.count || '0')
  } catch {
    return 32
  }
}

const SERVICES_FAQS = [
  {
    question: 'What fractional HR services are available?',
    answer: 'Fractional HR services include: strategic people planning, HR infrastructure building (contracts, policies, HRIS), complex employee relations, talent acquisition leadership, performance management, culture development, compliance and <a href="https://www.gov.uk/browse/employing-people" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">UK employment law</a>, and board/investor reporting. Services can be ongoing or project-based.'
  },
  {
    question: 'How much do fractional HR services cost?',
    answer: 'Fractional HR services in the UK cost £700-£1,300 per day depending on seniority. For ongoing support (1-2 days/week), expect £2,800-£10,400 monthly. Project-based work (handbook, HRIS, restructure) typically costs £5,000-£40,000 depending on scope.'
  },
  {
    question: 'How quickly can fractional HR services start?',
    answer: 'Fractional HR professionals can typically start within 1-2 weeks of initial contact. This is significantly faster than hiring full-time (3-6 months). For urgent matters (<a href="https://www.acas.org.uk/employment-tribunals" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">tribunal</a>, crisis), same-week starts are sometimes possible.'
  },
  {
    question: 'What is the difference between fractional HR and HR outsourcing?',
    answer: 'Fractional HR provides senior strategic leadership (CHRO/HR Director level) on a part-time basis. HR outsourcing typically handles transactional tasks (payroll, admin, basic queries). Fractional HR leaders often work alongside outsourced HR admin providers.'
  },
]

const services = [
  {
    title: 'Strategic HR Leadership',
    description: 'Senior-level people strategy aligned with your business objectives. Board-level thinking and leadership team integration for <a href="https://www.scaleupdirectory.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">scaling businesses</a>.',
    items: ['People strategy development', 'Organisational design', 'Leadership team advisory', 'Board & investor reporting'],
    price: 'From £4,000/month'
  },
  {
    title: 'HR Infrastructure Building',
    description: 'Establish proper HR foundations—essential for scaling companies and <a href="https://www.british-business-bank.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">investor readiness</a>.',
    items: ['<a href="https://www.gov.uk/employment-contracts-and-conditions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Employment contracts</a>', 'Employee handbook & policies', 'HRIS implementation', 'Onboarding processes'],
    price: '£5,000-£25,000 project'
  },
  {
    title: 'Employee Relations',
    description: 'Expert handling of complex people situations. <a href="https://www.acas.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Tribunal-experienced</a> professionals.',
    items: ['Complex ER case management', '<a href="https://www.gov.uk/staff-redundant" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Restructuring & redundancy</a>', 'Performance management', '<a href="https://www.acas.org.uk/grievance-procedure-step-by-step" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Grievance handling</a>'],
    price: 'From £3,000/month'
  },
  {
    title: 'Talent & Culture',
    description: 'Build the people practices that attract and retain great talent. <a href="https://www.cipd.org/uk/knowledge/guides/talent-management/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Evidence-based approaches</a>.',
    items: ['Talent acquisition strategy', 'Employer branding', 'Culture development', 'Engagement & retention'],
    price: 'From £3,500/month'
  },
]

export default async function FractionalHRServicesPage() {
  const jobCount = await getHRStats()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="HR Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('hr', 'services')} className="mb-8" />
            <div className="max-w-4xl">
              <span className="inline-block bg-pink-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Services
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Fractional HR<br />
                <span className="text-pink-400">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Access <strong className="text-white">expert HR leadership</strong> on-demand. Strategic people services from experienced HR Directors and CHROs.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-pink-400">{jobCount}+</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">HR Professionals</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">£700-£1,300</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Day Rate</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">1-2 Weeks</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Time to Start</div>
                </div>
              </div>
              <Link href="#services" className="px-8 py-4 bg-pink-500 text-white font-bold uppercase tracking-wider hover:bg-pink-400 transition-colors inline-block">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional HR Services</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-gray-50 p-8 border-l-4 border-pink-500 hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-black text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-center text-gray-700">
                      <span className="text-pink-500 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-pink-600 font-bold">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How Fractional HR Services Work</h2>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-pink-500 text-white font-black text-xl flex items-center justify-center flex-shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Define Your Needs</h3>
                <p className="text-gray-600">Tell us about your HR challenges, company stage, and what success looks like. Whether you need support with <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexible working policies</a> or strategic people planning, we'll help scope the right level of support.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-pink-500 text-white font-black text-xl flex items-center justify-center flex-shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Match With HR Leaders</h3>
                <p className="text-gray-600">We connect you with experienced fractional HR professionals, often <a href="https://www.cipd.org/uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD-qualified</a> and members of professional bodies like the <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors</a>, who match your industry, stage, and specific requirements.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-pink-500 text-white font-black text-xl flex items-center justify-center flex-shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Start Quickly</h3>
                <p className="text-gray-600">Begin working together within 1-2 weeks. Your fractional HR leader becomes part of your team from day one.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-pink-500 text-white font-black text-xl flex items-center justify-center flex-shrink-0">4</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Scale as Needed</h3>
                <p className="text-gray-600">Increase or decrease days as your needs evolve—particularly important in the current <a href="https://www.ons.gov.uk/employmentandlabourmarket" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">UK employment market</a>. No long-term lock-in—typical notice periods are 30-60 days.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Calculate Your Investment</h2>
          </div>
          <RoleCalculator role="hr" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions</h2>
          </div>
          <FAQ items={SERVICES_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 text-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Find the right fractional HR leader for your business or list your services. Get expert support with <a href="https://www.shrm.org/topics-tools/tools/toolkits" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">HR best practices</a> and strategic people leadership.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-hr-jobs-uk" className="px-8 py-4 bg-pink-500 text-white font-bold uppercase tracking-wider hover:bg-pink-400 transition-colors">
              Find HR Leaders
            </Link>
            <Link href="/contact/companies" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              List Your Services
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">HR Cluster</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-hr" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Complete HR Guide</Link>
              <Link href="/fractional-hr-jobs-uk" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Jobs UK</Link>
              <Link href="/fractional-hr-director" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Director</Link>
              <Link href="/fractional-chro" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Fractional CHRO</Link>
              <Link href="/fractional-hr-cost" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Cost Guide</Link>
              <Link href="/fractional-hr-for-startups" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR for Startups</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
