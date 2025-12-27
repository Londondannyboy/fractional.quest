import { Metadata } from 'next'
import Link from 'next/link'
import { HireProcessStepper } from '@/components/HireProcessStepper'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Finance UK 2025',
  description: 'Hire fractional finance leaders. Part-time CFOs, Finance Directors, Controllers.',
  keywords: 'fractional finance, fractional finance director, part-time finance executive, fractional controller, hire finance leader',
  alternates: { canonical: 'https://fractional.quest/fractional-finance' },
}

export default function FractionalFinancePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Unsplash Image Background with Blue Gradient */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80"
            alt="Finance background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-600/60 to-blue-900/80"></div>
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-white/20 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Functional Leadership</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Fractional<br /><span className="text-blue-200">Finance</span></h1>
              <p className="text-xl text-white leading-relaxed max-w-2xl mb-8">Access senior financial leadership without the full-time commitment. From CFOs to Finance Directors, find the right level of expertise for your growth stage.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-white/20 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-blue-900 transition-colors">Find Finance Leadership</Link>
                <Link href="/fractional-cfo-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-blue-900 transition-colors">Fractional CFO Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">Fractional Finance Leadership</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">Every business needs strong financial leadership, but not every business needs (or can afford) a full-time finance executive. Research from the <a href="https://www.scaleupinstitute.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Scaleup Institute</a> shows that flexible finance leadership models enable faster growth with better capital efficiency. Fractional finance leaders work part-time providing the financial strategy, controls, and reporting your business needs to scale, following <a href="https://www.frc.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">FRC governance standards</a>.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              { title: 'Fractional CFO', description: 'C-level financial leadership for strategy, fundraising, and M&A.', link: '/fractional-cfo-services' },
              { title: 'Finance Director', description: 'Senior finance leadership for FP&A, reporting, and team management.', link: '#contact' },
              { title: 'Controller', description: 'Hands-on financial operations, accounting, and compliance.', link: '#contact' },
            ].map((item, i) => (
              <Link key={i} href={item.link} className="block p-6 bg-gray-50 border border-gray-200 hover:border-blue-950/200 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">What Fractional Finance Leaders Do</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Financial Strategy', description: 'Develop financial strategies that support business growth and sustainability.' },
              { title: 'Fundraising Support', description: 'Lead investor relations, pitch preparation, and funding round execution.' },
              { title: 'Financial Planning', description: 'Build budgets, forecasts, and financial models for informed decision-making.' },
              { title: 'Cash Management', description: 'Optimise cash flow, working capital, and treasury operations.' },
              { title: 'Financial Controls', description: 'Implement robust financial controls, processes, and governance.' },
              { title: 'Board Reporting', description: 'Create board packs, management accounts, and investor reporting.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white border-l-4 border-blue-950/200">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <HireProcessStepper accentColor="emerald" />
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Finance Leadership</h2>
          <p className="text-xl text-gray-600 mb-10">Tell us about your financial needs and we'll match you with the right fractional finance executive.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-blue-950/200 text-white font-bold uppercase tracking-wider hover:bg-blue-400 transition-colors">Get Started</Link>
            <Link href="/fractional-cfo-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Learn About Fractional CFOs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
