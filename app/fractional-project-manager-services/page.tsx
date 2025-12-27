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
  title: 'Fractional Project Manager Services UK | Hire a Part-Time PM',
  description: 'Hire a Fractional Project Manager (PM). Expert delivery management for key initiatives, software projects, and change programmes. Flexible project leadership.',
  keywords: 'fractional project manager, fractional pm, hire fractional project manager, part time project manager, freelance project manager, delivery manager services',
  alternates: {
    canonical: 'https://fractional.quest/fractional-project-manager-services',
  },
  openGraph: {
    title: 'Fractional Project Manager Services UK | Hire a Part-Time PM',
    description: 'Hire a Fractional Project Manager. Expert delivery for key initiatives.',
    images: ['/images/fractional-project-manager-services.jpg'],
    url: 'https://fractional.quest/fractional-project-manager-services',
  },
}

const PROJECT_FAQS = [
  {
    question: 'What is a Fractional Project Manager?',
    answer: 'A Fractional Project Manager is a delivery expert who manages a specific project or portfolio of projects for you on a contract basis. They bring structure, planning, and accountability to ensure delivery on time and budget.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Rates range from £400 to £700 per day. This is often more cost-effective than a large consultancy day rate, and more flexible than a permanent hire.',
  },
  {
    question: 'What methodologies do they use?',
    answer: 'Most experienced fractional PMs are versed in both Agile (Scrum/Kanban) and traditional Waterfall (PRINCE2) methodologies, adapting their approach to your needs.',
  },
  {
    question: 'Why not just use an internal manager?',
    answer: 'Project management is a specific skillset. Asking an internal functional manager to run a complex project "off the side of their desk" often leads to delays and burnout. A dedicated PM focuses solely on delivery.',
  },
]

export default function FractionalProjectManagerServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-800/90 via-teal-700/80 to-cyan-800/60" />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('project', 'services')} className="mb-8" />
            <div className="max-w-4xl">
              <span className="inline-block bg-white text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Project Services
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Fractional PM<br />
                <span className="text-white/70">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire a <strong className="text-white">Fractional Project Manager</strong> to deliver results.
                Professional delivery, risk management, and stakeholder control—at a flexible cost.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">On</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Time</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">On</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Budget</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Risk</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Managed</div>
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is a Fractional Project Manager?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              A <strong className="font-semibold text-gray-900">Fractional Project Manager</strong> is a delivery expert you hire to manage a specific initiative. They don't just update spreadsheets; they drive the project forward, remove blockers, manage budgets, and keep stakeholders aligned.
            </p>
            <p>
              They provide the discipline of a professional Project Management Office (PMO) without the need to build one permanently.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Delivery</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Project Governance</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Project Planning',
                description: 'Creating detailed project plans, timelines, and Gantt charts. Identifying critical paths.',
                icon: '📅',
              },
              {
                title: 'Budget Control',
                description: 'Tracking spend against budget, highlighting variances, and managing resource allocation.',
                icon: '💷',
              },
              {
                title: 'Risk Management',
                description: 'Identifying risks and issues (RAID logs) early and implementing mitigation strategies.',
                icon: '🛡️',
              },
              {
                title: 'Stakeholder Comms',
                description: 'Managing expectations with regular, clear reporting to the project board and sponsors.',
                icon: '📢',
              },
              {
                title: 'Supplier Management',
                description: 'Coordinating third-party vendors and agencies to ensure they deliver on their promises.',
                icon: '🤝',
              },
              {
                title: 'Change Control',
                description: 'Managing scope creep through a formal change request process to keep projects on track.',
                icon: '🔄',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 hover:border-gray-400 transition-colors">
                <div className="text-3xl mb-4 text-teal-700">{item.icon}</div>
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Estimated Project Costs</h2>
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
          <FAQ skipSchema={true} items={PROJECT_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Deliver with<br /><span className="text-teal-400">Confidence</span>
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Find the right fractional PM to manage your critical projects.
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
