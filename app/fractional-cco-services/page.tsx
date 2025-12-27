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
  title: 'Fractional CCO Services UK',
  description: 'Hire a Fractional CCO. Senior regulatory leadership for FCA, GDPR, ISO compliance.',
  keywords: 'fractional cco, fractional compliance officer, hire fractional cco, part time cco, fractional chief compliance officer, fractional compliance services',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cco-services',
  },
  openGraph: {
    title: 'Fractional CCO Services UK | Hire a Part-Time CCO',
    description: 'Hire a Fractional CCO for your business. Expert compliance leadership without the full-time cost.',
    images: ['/images/fractional-cco-services.jpg'],
    url: 'https://fractional.quest/fractional-cco-services',
  },
}

const CCO_FAQS = [
  {
    question: 'What is a Fractional CCO?',
    answer: 'A Fractional CCO is an experienced Chief Compliance Officer who manages an organisation\'s compliance function part-time. They ensure the business meets its regulatory obligations (FCA, GDPR, etc.) efficiently.',
  },
  {
    question: 'Who needs a Fractional CCO?',
    answer: 'Regulated businesses (FinTech, Insurance, Healthcare) often need a CCO to obtain or maintain licences. Startups and scale-ups use fractional CCOs to build their compliance frameworks before they can afford a full-time hire.',
  },
  {
    question: 'How much does a Fractional CCO cost?',
    answer: 'Fractional CCOs typically charge £800-£1,300 per day. This provides senior \"Approved Person\" capability for a fraction of the £150k+ salary of a full-time equivalent.',
  },
  {
    question: 'Can they hold the SMF16/17 function?',
    answer: 'Yes, in many cases, a fractional CCO can hold Senior Management Functions (SMF) for FCA-regulated firms, provided they can demonstrate sufficient oversight and time commitment.',
  },
]

export default function FractionalCCOServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-gray-900/60" />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('cco', 'services')} className="mb-8" />
            <div className="max-w-4xl">
              <span className="inline-block bg-white text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Compliance Services
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Fractional CCO<br />
                <span className="text-white/70">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire a <strong className="text-white">Fractional CCO</strong> to secure your licence to operate.
                Expert regulatory leadership and risk management—at a flexible cost.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Risk</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Managed</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">1-3</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Days/Week</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">FCA</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Ready</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
                  Hire a Fractional CCO
                </Link>
                <Link href="#calculator" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Calculate Costs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Fractional CCO */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is a Fractional CCO?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              A <strong className="font-semibold text-gray-900">Fractional CCO</strong> is a senior compliance professional who leads your risk and regulatory function part-time. They bring the expertise needed to navigate complex regulations like FCA, GDPR, and AML, ensuring your business is compliant by design.
            </p>
            <p>
              For FinTechs and regulated entities, compliance is not optional—it's a survival requirement. A fractional CCO provides the necessary oversight and "approved person" status without the overhead of a full-time executive.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Coverage</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Compliance & Risk Coverage</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'FCA Authorisation',
                description: 'Leading the application process for FCA or PRA authorisation. Preparing the Regulatory Business Plan and policies.',
                icon: '⚖️',
              },
              {
                title: 'Framework Design',
                description: 'Building the Compliance Monitoring Programme (CMP) and risk frameworks tailored to your business model.',
                icon: '🏗️',
              },
              {
                title: 'AML & KYC',
                description: 'Implementing robust Anti-Money Laundering and Know Your Customer processes to prevent financial crime.',
                icon: '🔍',
              },
              {
                title: 'Regulatory Liaison',
                description: 'Acting as the primary point of contact for regulators. Handling inquiries, audits, and reporting requirements.',
                icon: '📞',
              },
              {
                title: 'Training & Culture',
                description: 'Embedding a culture of compliance. Training staff on their obligations and the importance of good conduct.',
                icon: '🎓',
              },
              {
                title: 'Horizon Scanning',
                description: 'Monitoring upcoming regulatory changes (e.g., Consumer Duty) and preparing the business to adapt.',
                icon: '🔭',
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Estimated CCO Costs</h2>
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
          <FAQ items={CCO_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Secure Your<br /><span className="text-gray-400">Compliance Leadership</span>
          </h2>
          <p className="text-xl text-slate-100 mb-10 max-w-2xl mx-auto">
            Connect with experienced fractional CCOs who can safeguard your business and enable growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Find a Fractional CCO
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
