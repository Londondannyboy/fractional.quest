import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { FAQPageSchema } from '@/components/FAQPageSchema'
import { WebPageSchema } from '@/components/WebPageSchema'

export const revalidate = 3600

const FINANCE_CONSULTANT_FAQS = [
  {
    question: 'What is a finance consultant?',
    answer: 'A finance consultant is an experienced financial professional who advises businesses on financial strategy, planning, and operations. They bring CFO-level expertise on a flexible basis, helping companies make better financial decisions without the commitment of a full-time hire.',
  },
  {
    question: 'How much do finance consultants charge in the UK?',
    answer: 'Finance consultants in the UK typically charge £500-£1,400 per day depending on experience and specialisation. Senior consultants with CFO-level experience command £900-£1,400/day, while FP&A specialists charge £500-£800/day.',
  },
  {
    question: 'When should I hire a finance consultant?',
    answer: 'Hire a finance consultant when preparing for fundraising, need financial modelling expertise, implementing new systems, preparing for audit, navigating M&A, or when you need senior finance perspective without a full-time CFO.',
  },
  {
    question: 'What is the difference between a finance consultant and a fractional CFO?',
    answer: 'A finance consultant typically works on specific projects or provides advice, while a fractional CFO takes ongoing ownership of your finance function. Fractional CFOs are embedded leaders who attend board meetings and manage the finance team.',
  },
  {
    question: 'Can a finance consultant help with fundraising?',
    answer: 'Yes, finance consultants commonly help with fundraising by building financial models, creating investor materials, preparing data rooms, and supporting due diligence. They bring experience from multiple funding rounds across different companies.',
  },
  {
    question: 'Do I need a finance consultant or an accountant?',
    answer: 'Accountants focus on compliance, bookkeeping, and historical reporting. Finance consultants focus on strategic financial planning, forecasting, and decision support. Many businesses need both—accountants for compliance and consultants for strategy.',
  },
]

export const metadata: Metadata = {
  title: 'Finance Consultants UK',
  description: 'Hire finance consultants UK. FP&A, fundraising, financial strategy experts.',
  keywords: 'finance consultants, hire finance consultant, fractional finance expert, finance consultant uk, financial strategy consultant, fpa consultant',
  alternates: { canonical: 'https://fractional.quest/finance-consultants' },
  openGraph: {
    title: 'Finance Consultants UK | Hire Expert Financial Advisors',
    description: 'Find experienced finance consultants for FP&A, fundraising, and financial strategy.',
    url: 'https://fractional.quest/finance-consultants',
  },
}

export default function FinanceConsultantsPage() {
  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Finance Consultants UK"
        description="Hire finance consultants for FP&A, fundraising, and financial strategy"
        url="https://fractional.quest/finance-consultants"
        dateModified={new Date()}
      />
      <FAQPageSchema faqs={FINANCE_CONSULTANT_FAQS} />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&q=80"
            alt="Finance consultant analysing financial data"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/85 to-blue-800/80"></div>
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-blue-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Expert Advisory</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Finance<br /><span className="text-blue-400">Consultants UK</span></h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Hire experienced finance consultants on a fractional basis. Get expert financial strategy, FP&A, and fundraising support without the cost of a full finance team.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-blue-400">£500-1.4k</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Per Day</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">48hrs</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">To Match</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-blue-500 text-white font-bold uppercase tracking-wider hover:bg-blue-400 transition-colors">Find a Consultant</Link>
                <Link href="/fractional-cfo-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Fractional CFO</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Finance Consultants Do */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What Finance Consultants Do</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Finance consultants</strong> help businesses make better financial decisions, raise capital, and build robust financial operations. On a fractional basis, they bring CFO-level expertise without the full-time commitment—following standards set by the <a href="https://www.icaew.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ICAEW</a> and <a href="https://www.cimaglobal.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIMA</a>.
            </p>
            <p>
              Unlike permanent hires, finance consultants work with multiple clients, bringing diverse experience across industries and funding stages. According to the <a href="https://www.frc.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Financial Reporting Council</a>, flexible finance expertise is increasingly important as businesses navigate complex regulatory environments.
            </p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-blue-500">
              <p className="text-xl font-semibold text-gray-900 mb-0">
                "Great finance consultants don't just report numbers—they translate data into actionable insights that drive business decisions."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {[
              { title: 'Financial Planning & Analysis', description: 'Build budgets, forecasts, and financial models that inform strategic decisions and investor communications.' },
              { title: 'Fundraising Support', description: 'Prepare for and execute funding rounds with investor-ready materials, financial models, and due diligence support.' },
              { title: 'Cash Flow Management', description: 'Optimise cash flow, working capital, and treasury operations to extend runway and improve efficiency.' },
              { title: 'Financial Reporting', description: 'Create board packs, management accounts, and investor reports that tell your financial story clearly.' },
              { title: 'Systems Implementation', description: 'Select and implement accounting software, ERP systems, and financial planning tools.' },
              { title: 'M&A Support', description: 'Financial due diligence, valuation analysis, and deal support for acquisitions or exit planning.' },
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">When to Hire a Finance Consultant</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { scenario: 'Fundraising Preparation', description: 'Need investor-ready financials, models, and materials for your next funding round.', timing: '3-6 months before raise' },
              { scenario: 'Financial Modelling', description: 'Building complex models for strategic decisions, valuations, or board presentations.', timing: 'Project-based' },
              { scenario: 'Systems Implementation', description: 'Selecting and implementing new accounting or planning software.', timing: '2-4 month engagement' },
              { scenario: 'Audit Preparation', description: 'Getting financial records and controls ready for external audit.', timing: '2-3 months before audit' },
              { scenario: 'M&A Due Diligence', description: 'Financial analysis for acquisitions, investments, or exit preparation.', timing: 'Deal-specific' },
              { scenario: 'CFO Gap Coverage', description: 'Need senior finance leadership while searching for permanent CFO.', timing: 'Interim period' },
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Finance Consultant Rates UK</h2>
            <p className="text-gray-600 mt-4">Typical daily rates for finance consultants in the UK market</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">FP&A Analyst</div>
              <div className="text-3xl font-black text-gray-900">£500-700</div>
              <div className="text-xs text-gray-500">per day</div>
              <p className="text-sm text-gray-600 mt-4">5-8 years experience, modelling focus</p>
            </div>
            <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl text-center">
              <div className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Senior Finance</div>
              <div className="text-3xl font-black text-gray-900">£700-1,000</div>
              <div className="text-xs text-gray-500">per day</div>
              <p className="text-sm text-gray-600 mt-4">10-15 years, strategic finance</p>
            </div>
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">CFO-Level</div>
              <div className="text-3xl font-black text-gray-900">£1,000-1,400</div>
              <div className="text-xs text-gray-500">per day</div>
              <p className="text-sm text-gray-600 mt-4">15+ years, C-suite experience</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-6 text-center">
            Rates based on <a href="https://www.robertwalters.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Robert Walters</a> salary surveys and our network experience.
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
          <FAQ items={FINANCE_CONSULTANT_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Find a Finance<br /><span className="text-blue-400">Consultant</span>
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Tell us about your financial challenges and we'll match you with experienced finance consultants who have solved them before.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-white text-blue-900 font-bold uppercase tracking-wider hover:bg-blue-50 transition-colors">Get Started</Link>
            <Link href="/fractional-cfo-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-blue-900 transition-colors">Explore Fractional CFO</Link>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-2">Related Finance Resources</h2>
            <p className="text-gray-600">Explore more finance leadership options</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">Finance Leadership</h3>
              <div className="space-y-2">
                <Link href="/fractional-cfo" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">What is a Fractional CFO?</Link>
                <Link href="/fractional-cfo-services" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Fractional CFO Services</Link>
                <Link href="/fractional-finance" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Finance Leadership Hub</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">Find Jobs</h3>
              <div className="space-y-2">
                <Link href="/fractional-cfo-jobs-uk" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Fractional CFO Jobs</Link>
                <Link href="/fractional-finance-director-jobs-uk" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Finance Director Jobs</Link>
                <Link href="/fractional-financial-controller-jobs-uk" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Financial Controller Jobs</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">Other Consultants</h3>
              <div className="space-y-2">
                <Link href="/technology-consultants" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Technology Consultants</Link>
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
