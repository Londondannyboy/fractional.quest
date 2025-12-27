import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { FAQPageSchema } from '@/components/FAQPageSchema'
import { WebPageSchema } from '@/components/WebPageSchema'

export const revalidate = 3600

const OPS_CONSULTANT_FAQS = [
  {
    question: 'What is an operations consultant?',
    answer: 'An operations consultant is an experienced professional who helps businesses run more efficiently, scale sustainably, and build systems that work. They bring COO-level expertise on a flexible basis, helping companies optimise processes without the commitment of a full-time hire.',
  },
  {
    question: 'How much do operations consultants charge in the UK?',
    answer: 'Operations consultants in the UK typically charge £500-£1,300 per day depending on experience and specialisation. Senior consultants with COO-level experience command £900-£1,300/day, while specialists charge £500-£800/day.',
  },
  {
    question: 'When should I hire an operations consultant?',
    answer: 'Hire an operations consultant when scaling rapidly and operations are struggling, need to reduce costs, implementing new systems, building operational infrastructure, preparing for growth, or when you need senior operational guidance without a full-time COO.',
  },
  {
    question: 'What is the difference between an operations consultant and a fractional COO?',
    answer: 'An operations consultant typically works on specific projects or provides advice, while a fractional COO takes ongoing ownership of your operations function. Fractional COOs are embedded leaders who manage teams and drive operational strategy.',
  },
  {
    question: 'Can an operations consultant help with scaling?',
    answer: 'Yes, scaling is one of the most common reasons to hire an operations consultant. They help design scalable processes, implement systems, build team structures, and create the operational infrastructure needed to support rapid growth.',
  },
  {
    question: 'What industries do operations consultants work in?',
    answer: 'Operations consultants work across all industries, though many specialise. Common sectors include technology startups, e-commerce, manufacturing, professional services, healthcare, and financial services. Look for consultants with relevant industry experience.',
  },
]

export const metadata: Metadata = {
  title: 'Operations Consultants UK',
  description: 'Hire operations consultants UK. Scaling, process improvement, efficiency experts.',
  keywords: 'operations consultants, hire operations consultant, fractional operations expert, operations consultant uk, business operations consultant, process improvement consultant',
  alternates: { canonical: 'https://fractional.quest/operations-consultants' },
  openGraph: {
    title: 'Operations Consultants UK | Hire Expert Operations Advisors',
    description: 'Find experienced operations consultants for scaling, process improvement, and efficiency.',
    url: 'https://fractional.quest/operations-consultants',
  },
}

export default function OperationsConsultantsPage() {
  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Operations Consultants UK"
        description="Hire operations consultants for scaling, process improvement, and efficiency"
        url="https://fractional.quest/operations-consultants"
        dateModified={new Date()}
      />
      <FAQPageSchema faqs={OPS_CONSULTANT_FAQS} />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1920&q=80"
            alt="Operations consultant improving business processes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 via-orange-800/85 to-red-800/80"></div>
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-orange-500 text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Expert Advisory</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Operations<br /><span className="text-orange-400">Consultants UK</span></h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Hire experienced operations consultants on a fractional basis. Get expert operational strategy, process improvement, and scaling expertise without the cost of a full operations team.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-orange-400">£500-1.3k</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Per Day</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">48hrs</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">To Match</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-orange-500 text-black font-bold uppercase tracking-wider hover:bg-orange-400 transition-colors">Find a Consultant</Link>
                <Link href="/fractional-coo-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Fractional COO</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Operations Consultants Do */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What Operations Consultants Do</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Operations consultants</strong> help businesses run more efficiently, scale sustainably, and build systems that work. On a fractional basis, they bring COO-level expertise without the full-time commitment—following best practices from the <a href="https://www.theoperationsmanager.co.uk/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">Institute of Operations Management</a>.
            </p>
            <p>
              Unlike permanent hires, operations consultants work with multiple clients, bringing diverse experience across industries and growth stages. According to <a href="https://www.makeuk.org/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">Make UK</a>, operational excellence is increasingly critical as businesses navigate supply chain challenges and scaling demands.
            </p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-orange-500">
              <p className="text-xl font-semibold text-gray-900 mb-0">
                "Great operations consultants don't just fix problems—they build systems that prevent problems from occurring."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {[
              { title: 'Process Design & Optimisation', description: 'Create efficient, scalable operational processes and workflows that reduce waste and improve quality.' },
              { title: 'Systems Implementation', description: 'Select and implement ERP, CRM, and operational tools that support business growth.' },
              { title: 'Organisational Design', description: 'Design team structures, roles, and reporting lines that enable effective scaling.' },
              { title: 'Performance Management', description: 'Build KPIs, dashboards, OKRs, and accountability frameworks that drive results.' },
              { title: 'Vendor & Supply Chain', description: 'Optimise supplier relationships, negotiate contracts, and build resilient supply chains.' },
              { title: 'Cost Optimisation', description: 'Identify inefficiencies, reduce operational costs, and improve unit economics.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gray-50 border-l-4 border-orange-500">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Hire */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Timing</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">When to Hire an Operations Consultant</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { scenario: 'Scaling Rapidly', description: 'Operations are struggling to keep up with growth. Processes breaking, team overwhelmed.', timing: 'Before crisis hits' },
              { scenario: 'Cost Reduction', description: 'Need to improve efficiency and reduce operational costs without sacrificing quality.', timing: 'Before profitability pressure' },
              { scenario: 'Systems Implementation', description: 'Implementing new ERP, CRM, or operational software across the organisation.', timing: '3-6 month engagement' },
              { scenario: 'Building Infrastructure', description: 'First-time build of operational processes, team structures, and systems.', timing: 'Series A/B stage' },
              { scenario: 'Market Expansion', description: 'Preparing operations for new markets, geographies, or product lines.', timing: 'Before expansion' },
              { scenario: 'COO Gap Coverage', description: 'Need senior operational leadership while searching for permanent COO.', timing: 'Interim period' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.scenario}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <span className="inline-block text-xs font-bold text-orange-600 uppercase tracking-wider">{item.timing}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Operations Consultant Rates UK</h2>
            <p className="text-gray-600 mt-4">Typical daily rates for operations consultants in the UK market</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Specialist</div>
              <div className="text-3xl font-black text-gray-900">£500-700</div>
              <div className="text-xs text-gray-500">per day</div>
              <p className="text-sm text-gray-600 mt-4">5-8 years, process expertise</p>
            </div>
            <div className="p-6 bg-orange-50 border border-orange-200 rounded-xl text-center">
              <div className="text-sm font-bold text-orange-600 uppercase tracking-wider mb-2">Senior</div>
              <div className="text-3xl font-black text-gray-900">£700-1,000</div>
              <div className="text-xs text-gray-500">per day</div>
              <p className="text-sm text-gray-600 mt-4">10-15 years, strategic ops</p>
            </div>
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">COO-Level</div>
              <div className="text-3xl font-black text-gray-900">£1,000-1,300</div>
              <div className="text-xs text-gray-500">per day</div>
              <p className="text-sm text-gray-600 mt-4">15+ years, C-suite experience</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-6 text-center">
            Rates based on <a href="https://www.michaelpage.co.uk/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">Michael Page</a> salary surveys and our network experience.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ items={OPS_CONSULTANT_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-orange-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Find an Operations<br /><span className="text-orange-400">Consultant</span>
          </h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            Tell us about your operational challenges and we'll match you with experienced operations consultants who have solved them before.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-white text-orange-900 font-bold uppercase tracking-wider hover:bg-orange-50 transition-colors">Get Started</Link>
            <Link href="/fractional-coo-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-orange-900 transition-colors">Explore Fractional COO</Link>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-2">Related Operations Resources</h2>
            <p className="text-gray-600">Explore more operations leadership options</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">Operations Leadership</h3>
              <div className="space-y-2">
                <Link href="/fractional-coo" className="block text-gray-700 hover:text-orange-600 font-medium transition-colors">What is a Fractional COO?</Link>
                <Link href="/fractional-coo-services" className="block text-gray-700 hover:text-orange-600 font-medium transition-colors">Fractional COO Services</Link>
                <Link href="/fractional-operations" className="block text-gray-700 hover:text-orange-600 font-medium transition-colors">Operations Hub</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">Find Jobs</h3>
              <div className="space-y-2">
                <Link href="/fractional-coo-jobs-uk" className="block text-gray-700 hover:text-orange-600 font-medium transition-colors">Fractional COO Jobs</Link>
                <Link href="/fractional-managing-director-jobs-uk" className="block text-gray-700 hover:text-orange-600 font-medium transition-colors">Managing Director Jobs</Link>
                <Link href="/fractional-project-manager-jobs-uk" className="block text-gray-700 hover:text-orange-600 font-medium transition-colors">Project Manager Jobs</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">Other Consultants</h3>
              <div className="space-y-2">
                <Link href="/technology-consultants" className="block text-gray-700 hover:text-orange-600 font-medium transition-colors">Technology Consultants</Link>
                <Link href="/finance-consultants" className="block text-gray-700 hover:text-orange-600 font-medium transition-colors">Finance Consultants</Link>
                <Link href="/marketing-consultants" className="block text-gray-700 hover:text-orange-600 font-medium transition-colors">Marketing Consultants</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
