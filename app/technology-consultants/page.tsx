import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { FAQPageSchema } from '@/components/FAQPageSchema'
import { WebPageSchema } from '@/components/WebPageSchema'

export const revalidate = 3600

const TECH_CONSULTANT_FAQS = [
  {
    question: 'What is a technology consultant?',
    answer: 'A technology consultant is an experienced technical expert who advises businesses on technology strategy, architecture, and implementation. They bring CTO-level expertise on a flexible basis, helping companies make better technical decisions without the commitment of a full-time hire.',
  },
  {
    question: 'How much do technology consultants charge in the UK?',
    answer: 'Technology consultants in the UK typically charge £600-£1,500 per day depending on experience and specialisation. Senior consultants with CTO-level experience command £1,000-£1,500/day, while mid-level experts charge £600-£900/day.',
  },
  {
    question: 'When should I hire a technology consultant?',
    answer: 'Hire a technology consultant when: building a new product and need architectural guidance, scaling your engineering team, evaluating build vs buy decisions, preparing for technical due diligence, migrating to cloud, or when you need senior technical perspective without a full-time CTO.',
  },
  {
    question: 'What is the difference between a technology consultant and a fractional CTO?',
    answer: 'A technology consultant typically works on specific projects or provides advice, while a fractional CTO takes ongoing ownership of your technology strategy and team. Fractional CTOs are embedded leaders; consultants are external advisors.',
  },
  {
    question: 'How do I find a good technology consultant?',
    answer: 'Look for consultants with relevant industry experience, strong technical backgrounds, and proven track records. Check references, review past projects, and ensure they understand your specific technology stack and business challenges.',
  },
  {
    question: 'Can a technology consultant help with digital transformation?',
    answer: 'Yes, technology consultants are often brought in to lead digital transformation initiatives. They assess current systems, define target architecture, create migration roadmaps, and guide implementation of modern cloud-native solutions.',
  },
]

export const metadata: Metadata = {
  title: 'Technology Consultants UK',
  description: 'Hire technology consultants UK. Fractional tech experts for architecture, digital transformation.',
  keywords: 'technology consultants, hire tech consultant, fractional technology expert, it consultant uk, technical strategy consultant, technology consulting services',
  alternates: { canonical: 'https://fractional.quest/technology-consultants' },
  openGraph: {
    title: 'Technology Consultants UK | Hire Expert Tech Advisors',
    description: 'Find experienced technology consultants for architecture, strategy, and digital transformation.',
    url: 'https://fractional.quest/technology-consultants',
  },
}

export default function TechnologyConsultantsPage() {
  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Technology Consultants UK"
        description="Hire technology consultants for architecture, strategy, and digital transformation"
        url="https://fractional.quest/technology-consultants"
        dateModified={new Date()}
      />
      <FAQPageSchema faqs={TECH_CONSULTANT_FAQS} />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80"
            alt="Technology consultant advising on digital strategy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-900/85 to-blue-800/80"></div>
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-blue-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Expert Advisory</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Technology<br /><span className="text-blue-400">Consultants UK</span></h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Hire experienced technology consultants on a fractional basis. Get expert technical strategy, architecture guidance, and digital transformation leadership without the cost of a full technology team.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-blue-400">£600-1.5k</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Per Day</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">48hrs</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">To Match</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-blue-500 text-white font-bold uppercase tracking-wider hover:bg-blue-400 transition-colors">Find a Consultant</Link>
                <Link href="/fractional-cto-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Fractional CTO</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Technology Consultants Do */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What Technology Consultants Do</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Technology consultants</strong> help businesses make the right technical decisions, build great products, and scale their engineering capabilities. On a fractional basis, they bring CTO-level expertise without the full-time commitment—following best practices from the <a href="https://www.bcs.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Computer Society (BCS)</a>.
            </p>
            <p>
              Unlike permanent hires, technology consultants work with multiple clients, bringing diverse experience across industries and technology stacks. According to <a href="https://www.techuk.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">techUK</a>, the demand for flexible technology expertise has grown significantly as businesses navigate digital transformation.
            </p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-blue-500">
              <p className="text-xl font-semibold text-gray-900 mb-0">
                "The best technology consultants don't just advise—they transfer knowledge and build capabilities that last beyond their engagement."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {[
              { title: 'Technical Strategy', description: 'Define technology roadmaps, architecture decisions, and build vs buy strategies aligned with business goals.' },
              { title: 'Architecture Review', description: 'Evaluate and improve system design, scalability, security, and performance following industry standards.' },
              { title: 'Team Building', description: 'Recruit, structure, and develop high-performing engineering teams with the right skills and culture.' },
              { title: 'Vendor Selection', description: 'Evaluate technology partners, platforms, SaaS tools, and infrastructure providers objectively.' },
              { title: 'Technical Due Diligence', description: 'Assess technology for M&A transactions, investment decisions, or strategic partnerships.' },
              { title: 'Digital Transformation', description: 'Modernise legacy systems, adopt cloud-native approaches, and implement DevOps practices.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gray-50 border-l-4 border-blue-500">
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">When to Hire a Technology Consultant</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { scenario: 'Building a New Product', description: 'Need architectural guidance and technology stack decisions before committing to development.', timing: 'Before development starts' },
              { scenario: 'Scaling Engineering', description: 'Growing team needs structure, processes, and senior leadership to maintain velocity and quality.', timing: 'When team reaches 5-10 engineers' },
              { scenario: 'Build vs Buy Decisions', description: 'Evaluating whether to build custom solutions or adopt existing platforms and tools.', timing: 'Before major investment' },
              { scenario: 'Technical Due Diligence', description: 'Investors or acquirers need independent assessment of technology, team, and technical debt.', timing: '2-4 weeks before close' },
              { scenario: 'Cloud Migration', description: 'Moving from on-premise to cloud or between cloud providers requires careful planning.', timing: '3-6 months before migration' },
              { scenario: 'Need CTO Perspective', description: 'Strategic decisions require senior technical input but full-time CTO is not justified.', timing: 'Ongoing advisory' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.scenario}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-wider">{item.timing}</span>
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Technology Consultant Rates UK</h2>
            <p className="text-gray-600 mt-4">Typical daily rates for technology consultants in the UK market</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Mid-Level</div>
              <div className="text-3xl font-black text-gray-900">£600-900</div>
              <div className="text-xs text-gray-500">per day</div>
              <p className="text-sm text-gray-600 mt-4">5-10 years experience, strong technical skills</p>
            </div>
            <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl text-center">
              <div className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Senior</div>
              <div className="text-3xl font-black text-gray-900">£900-1,200</div>
              <div className="text-xs text-gray-500">per day</div>
              <p className="text-sm text-gray-600 mt-4">10-15 years, architecture expertise</p>
            </div>
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">CTO-Level</div>
              <div className="text-3xl font-black text-gray-900">£1,200-1,500+</div>
              <div className="text-xs text-gray-500">per day</div>
              <p className="text-sm text-gray-600 mt-4">15+ years, strategic leadership</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-6 text-center">
            Rates based on <a href="https://www.itjobswatch.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IT Jobs Watch</a> market data and our network experience.
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
          <FAQ items={TECH_CONSULTANT_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Find a Technology<br /><span className="text-blue-400">Consultant</span>
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Tell us about your technical challenges and we'll match you with experienced technology consultants who have solved them before.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-white text-blue-900 font-bold uppercase tracking-wider hover:bg-blue-50 transition-colors">Get Started</Link>
            <Link href="/fractional-cto-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-blue-900 transition-colors">Explore Fractional CTO</Link>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-2">Related Technology Resources</h2>
            <p className="text-gray-600">Explore more technology leadership options</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">Technology Leadership</h3>
              <div className="space-y-2">
                <Link href="/fractional-cto" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">What is a Fractional CTO?</Link>
                <Link href="/fractional-cto-services" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Fractional CTO Services</Link>
                <Link href="/fractional-cio-services" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Fractional CIO Services</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">Find Jobs</h3>
              <div className="space-y-2">
                <Link href="/fractional-cto-jobs-uk" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Fractional CTO Jobs</Link>
                <Link href="/fractional-cio-jobs-uk" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Fractional CIO Jobs</Link>
                <Link href="/fractional-technology" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Technology Roles Hub</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">Other Consultants</h3>
              <div className="space-y-2">
                <Link href="/finance-consultants" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Finance Consultants</Link>
                <Link href="/marketing-consultants" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Marketing Consultants</Link>
                <Link href="/operations-consultants" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Operations Consultants</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
