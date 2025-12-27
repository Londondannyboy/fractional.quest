import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { FAQPageSchema } from '@/components/FAQPageSchema'
import { WebPageSchema } from '@/components/WebPageSchema'

export const revalidate = 3600

const MARKETING_CONSULTANT_FAQS = [
  {
    question: 'What is a marketing consultant?',
    answer: 'A marketing consultant is an experienced marketing professional who advises businesses on marketing strategy, brand development, and growth initiatives. They bring CMO-level expertise on a flexible basis, helping companies attract customers and build brands without the commitment of a full-time hire.',
  },
  {
    question: 'How much do marketing consultants charge in the UK?',
    answer: 'Marketing consultants in the UK typically charge £400-£1,200 per day depending on experience and specialisation. Senior consultants with CMO-level experience command £800-£1,200/day, while specialists charge £400-£700/day.',
  },
  {
    question: 'When should I hire a marketing consultant?',
    answer: 'Hire a marketing consultant when launching new products, entering new markets, rebranding, scaling marketing operations, auditing marketing performance, or when you need senior marketing perspective without a full-time CMO.',
  },
  {
    question: 'What is the difference between a marketing consultant and a fractional CMO?',
    answer: 'A marketing consultant typically works on specific projects or provides advice, while a fractional CMO takes ongoing ownership of your marketing function. Fractional CMOs are embedded leaders who manage teams and drive strategy.',
  },
  {
    question: 'Should I hire a marketing consultant or an agency?',
    answer: 'Consultants provide strategic guidance and help you build internal capabilities. Agencies execute campaigns and provide ongoing services. Many businesses use both—consultants for strategy and agency selection, agencies for execution.',
  },
  {
    question: 'What should I look for in a marketing consultant?',
    answer: 'Look for relevant industry experience, proven track record of results, strategic thinking ability, and good cultural fit. Check case studies, references, and ensure they understand your target market and business model.',
  },
]

export const metadata: Metadata = {
  title: 'Marketing Consultants UK',
  description: 'Hire marketing consultants UK. Fractional experts for strategy, brand, digital, growth.',
  keywords: 'marketing consultants, hire marketing consultant, fractional marketing expert, marketing consultant uk, marketing strategy consultant, brand consultant',
  alternates: { canonical: 'https://fractional.quest/marketing-consultants' },
  openGraph: {
    title: 'Marketing Consultants UK | Hire Expert Marketing Advisors',
    description: 'Find experienced marketing consultants for strategy, brand, and growth.',
    url: 'https://fractional.quest/marketing-consultants',
  },
}

export default function MarketingConsultantsPage() {
  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Marketing Consultants UK"
        description="Hire marketing consultants for strategy, brand development, and growth"
        url="https://fractional.quest/marketing-consultants"
        dateModified={new Date()}
      />
      <FAQPageSchema faqs={MARKETING_CONSULTANT_FAQS} />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=1920&q=80"
            alt="Marketing consultant developing brand strategy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 via-amber-800/85 to-orange-800/80"></div>
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-amber-500 text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Expert Advisory</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Marketing<br /><span className="text-amber-400">Consultants UK</span></h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Hire experienced marketing consultants on a fractional basis. Get expert marketing strategy, brand development, and growth expertise without the cost of a full marketing team.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-amber-400">£400-1.2k</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Per Day</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">48hrs</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">To Match</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-amber-500 text-black font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors">Find a Consultant</Link>
                <Link href="/fractional-cmo-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Fractional CMO</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Marketing Consultants Do */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What Marketing Consultants Do</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Marketing consultants</strong> help businesses attract customers, build brands, and drive sustainable growth. On a fractional basis, they bring CMO-level expertise without the full-time commitment—following best practices from the <a href="https://www.cim.co.uk/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">Chartered Institute of Marketing (CIM)</a>.
            </p>
            <p>
              Unlike agencies that focus on execution, marketing consultants provide strategic guidance and help build internal capabilities. According to the <a href="https://www.marketingweek.com/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">Marketing Week</a> research, businesses increasingly seek flexible marketing expertise to navigate rapidly changing channels and customer expectations.
            </p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-amber-500">
              <p className="text-xl font-semibold text-gray-900 mb-0">
                "Great marketing consultants don't just run campaigns—they build marketing engines that generate sustainable growth."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {[
              { title: 'Marketing Strategy', description: 'Develop comprehensive marketing plans aligned with business objectives, target audiences, and competitive positioning.' },
              { title: 'Brand Development', description: 'Create and refine brand positioning, messaging, visual identity, and brand guidelines that resonate with customers.' },
              { title: 'Digital Marketing', description: 'Manage SEO, PPC, social media, email, and content marketing programmes that drive measurable results.' },
              { title: 'Demand Generation', description: 'Build lead generation funnels, customer acquisition campaigns, and conversion optimisation strategies.' },
              { title: 'Marketing Operations', description: 'Implement marketing technology, automation workflows, analytics, and reporting dashboards.' },
              { title: 'Agency Management', description: 'Select, brief, and manage marketing agencies, freelancers, and technology vendors effectively.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gray-50 border-l-4 border-amber-500">
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">When to Hire a Marketing Consultant</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { scenario: 'Product Launch', description: 'Launching a new product or service and need go-to-market strategy and execution support.', timing: '3-6 months before launch' },
              { scenario: 'Market Expansion', description: 'Entering new markets, segments, or geographies and need localised marketing strategy.', timing: 'Before market entry' },
              { scenario: 'Rebrand Initiative', description: 'Repositioning your brand, updating identity, or merging brands post-acquisition.', timing: '4-6 month engagement' },
              { scenario: 'Marketing Audit', description: 'Want independent assessment of marketing effectiveness and recommendations for improvement.', timing: '2-4 week project' },
              { scenario: 'Scale Marketing', description: 'Growing rapidly and need to professionalise marketing operations and build team.', timing: 'When revenue scales' },
              { scenario: 'CMO Gap Coverage', description: 'Need senior marketing leadership while searching for permanent CMO.', timing: 'Interim period' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.scenario}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <span className="inline-block text-xs font-bold text-amber-600 uppercase tracking-wider">{item.timing}</span>
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Marketing Consultant Rates UK</h2>
            <p className="text-gray-600 mt-4">Typical daily rates for marketing consultants in the UK market</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Specialist</div>
              <div className="text-3xl font-black text-gray-900">£400-600</div>
              <div className="text-xs text-gray-500">per day</div>
              <p className="text-sm text-gray-600 mt-4">5-8 years, channel expertise</p>
            </div>
            <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl text-center">
              <div className="text-sm font-bold text-amber-600 uppercase tracking-wider mb-2">Senior</div>
              <div className="text-3xl font-black text-gray-900">£600-900</div>
              <div className="text-xs text-gray-500">per day</div>
              <p className="text-sm text-gray-600 mt-4">10-15 years, strategic marketing</p>
            </div>
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">CMO-Level</div>
              <div className="text-3xl font-black text-gray-900">£900-1,200</div>
              <div className="text-xs text-gray-500">per day</div>
              <p className="text-sm text-gray-600 mt-4">15+ years, C-suite experience</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-6 text-center">
            Rates based on <a href="https://www.hays.co.uk/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">Hays</a> salary surveys and our network experience.
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
          <FAQ items={MARKETING_CONSULTANT_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Find a Marketing<br /><span className="text-amber-400">Consultant</span>
          </h2>
          <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto">
            Tell us about your marketing challenges and we'll match you with experienced marketing consultants who have solved them before.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-white text-amber-900 font-bold uppercase tracking-wider hover:bg-amber-50 transition-colors">Get Started</Link>
            <Link href="/fractional-cmo-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-amber-900 transition-colors">Explore Fractional CMO</Link>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-2">Related Marketing Resources</h2>
            <p className="text-gray-600">Explore more marketing leadership options</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">Marketing Leadership</h3>
              <div className="space-y-2">
                <Link href="/fractional-cmo" className="block text-gray-700 hover:text-amber-600 font-medium transition-colors">What is a Fractional CMO?</Link>
                <Link href="/fractional-cmo-services" className="block text-gray-700 hover:text-amber-600 font-medium transition-colors">Fractional CMO Services</Link>
                <Link href="/fractional-marketing" className="block text-gray-700 hover:text-amber-600 font-medium transition-colors">Marketing Leadership Hub</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">Find Jobs</h3>
              <div className="space-y-2">
                <Link href="/fractional-cmo-jobs-uk" className="block text-gray-700 hover:text-amber-600 font-medium transition-colors">Fractional CMO Jobs</Link>
                <Link href="/fractional-head-of-growth-jobs-uk" className="block text-gray-700 hover:text-amber-600 font-medium transition-colors">Head of Growth Jobs</Link>
                <Link href="/fractional-marketing-agency" className="block text-gray-700 hover:text-amber-600 font-medium transition-colors">Marketing Agency Guide</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">Other Consultants</h3>
              <div className="space-y-2">
                <Link href="/technology-consultants" className="block text-gray-700 hover:text-amber-600 font-medium transition-colors">Technology Consultants</Link>
                <Link href="/finance-consultants" className="block text-gray-700 hover:text-amber-600 font-medium transition-colors">Finance Consultants</Link>
                <Link href="/operations-consultants" className="block text-gray-700 hover:text-amber-600 font-medium transition-colors">Operations Consultants</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
