import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Interim CFO Services UK',
  description: 'Hire an Interim CFO. Temporary financial leadership for transitions and transformations.',
  keywords: 'interim cfo, interim cfo services, hire interim cfo, temporary cfo, interim chief financial officer, interim cfo uk',
  alternates: { canonical: 'https://fractional.quest/interim-cfo' },
  openGraph: {
    title: 'Interim CFO Services UK',
    description: 'Hire an Interim CFO. Temporary financial leadership.',
    url: 'https://fractional.quest/interim-cfo',
  },
}

export default function InterimCFOPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&q=80"
            alt="Interim CFO Services UK - Financial leadership"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-700/60" />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-white/20 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Interim Leadership
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">
                Interim CFO<br /><span className="text-blue-300">Services UK</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Full-time temporary CFO leadership for transitions, transformations, and critical periods. Expert financial executives available to start immediately. As <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white underline">UK flexible working legislation</a> evolves, interim executive appointments have become a mainstream solution for businesses requiring senior leadership.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-white text-blue-900 font-bold uppercase tracking-wider hover:bg-blue-50 transition-colors">
                  Hire an Interim CFO
                </Link>
                <Link href="/fractional-cfo-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-blue-900 transition-colors">
                  Consider Fractional Instead?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Interim */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">What is an Interim CFO?</h2>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              An <strong>Interim CFO</strong> is a temporary Chief Financial Officer who works full-time for a defined period—typically 3-12 months. According to <a href="https://www.cipd.org/uk/knowledge/reports/flexible-working-trends/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD research</a>, interim executive appointments have grown significantly. Unlike fractional CFOs who work part-time across multiple companies, interim CFOs focus exclusively on one organisation during their engagement.
            </p>
            <p>
              Interim CFOs are typically hired to fill leadership gaps, lead specific transformations, or navigate critical periods like M&A, restructuring, or CFO transitions. The <a href="https://www.icaew.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ICAEW</a> and <a href="https://www.accaglobal.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ACCA</a> provide guidance on interim finance leadership standards. <a href="https://www.bvca.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">BVCA research</a> shows PE firms frequently deploy interim CFOs during portfolio company transitions.
            </p>
          </div>
        </div>
      </section>

      {/* When to Hire */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">When to Hire an Interim CFO</h2>
          <p className="text-gray-600 mb-8">According to <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute</a> research, growing businesses often need interim executive support during critical transitions. The <a href="https://www.britishbusinessbank.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Business Bank</a> notes that access to experienced financial leadership is a key factor in SME growth success.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { scenario: 'CFO Departure', description: 'Your CFO has left and you need immediate leadership while recruiting a permanent replacement.' },
              { scenario: 'M&A Transaction', description: 'Buying or selling a company and need dedicated CFO leadership through the transaction.' },
              { scenario: 'Restructuring', description: 'Major restructuring or turnaround requiring full-time financial leadership focus.' },
              { scenario: 'IPO Preparation', description: 'Preparing for public markets and need experienced CFO leadership through the process.' },
              { scenario: 'Crisis Management', description: 'Financial crisis requiring immediate, full-time executive attention.' },
              { scenario: 'System Implementation', description: 'Major ERP or financial system implementation requiring dedicated leadership.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.scenario}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interim vs Fractional */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Interim CFO vs Fractional CFO</h2>
          <p className="text-gray-600 mb-6">Both interim and fractional CFO engagements fall under <a href="https://www.gov.uk/topic/business-tax/ir35" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IR35 regulations</a> which govern off-payroll working arrangements. The <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors</a> provides guidance on engaging interim executives effectively. <a href="https://www.ons.gov.uk/employmentandlabourmarket" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS employment data</a> shows the continued growth of flexible senior roles.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 text-left font-bold">Aspect</th>
                  <th className="p-4 text-left font-bold text-blue-700">Interim CFO</th>
                  <th className="p-4 text-left font-bold">Fractional CFO</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-4 font-medium">Time Commitment</td><td className="p-4">Full-time (5 days/week)</td><td className="p-4">Part-time (1-3 days/week)</td></tr>
                <tr className="border-b bg-gray-50"><td className="p-4 font-medium">Duration</td><td className="p-4">3-12 months (fixed term)</td><td className="p-4">Ongoing (indefinite)</td></tr>
                <tr className="border-b"><td className="p-4 font-medium">Focus</td><td className="p-4">Single company, deep immersion</td><td className="p-4">Multiple clients, broader perspective</td></tr>
                <tr className="border-b bg-gray-50"><td className="p-4 font-medium">Cost</td><td className="p-4">£8,000-£12,000/week</td><td className="p-4">£3,000-£6,000/week</td></tr>
                <tr className="border-b"><td className="p-4 font-medium">Best For</td><td className="p-4">Transitions, transformations, crises</td><td className="p-4">Ongoing strategic leadership</td></tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 p-6 bg-blue-950/20 border border-blue-800/40 rounded-lg">
            <p className="text-blue-800 font-medium mb-2">Not sure which is right for you?</p>
            <p className="text-blue-700 text-sm mb-4">If you need full-time focus for a specific project or transition, choose interim. If you need ongoing strategic CFO leadership at lower cost, choose fractional.</p>
            <Link href="/fractional-cfo-services" className="text-blue-700 font-bold hover:text-blue-900">Learn about Fractional CFO Services →</Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Full Comparison</h2>
          <ServiceComparisonTable role="CFO" accentColor="emerald" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Need an Interim CFO?</h2>
          <p className="text-xl text-gray-600 mb-10">Tell us about your situation and we'll help you find the right interim or fractional CFO. Businesses requiring financial transformation should consider the <a href="https://www.cimaglobal.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">CIMA</a> and <a href="https://www.frc.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Financial Reporting Council</a> standards for financial leadership.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-blue-950/200 text-black font-bold uppercase tracking-wider hover:bg-blue-400 transition-colors">
              Find an Interim CFO
            </Link>
            <Link href="/fractional-cfo-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              Explore Fractional CFO
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-cfo-services" className="text-gray-600 hover:text-blue-600 font-medium">Fractional CFO</Link>
            <Link href="/interim-cmo" className="text-gray-600 hover:text-blue-600 font-medium">Interim CMO</Link>
            <Link href="/interim-cto" className="text-gray-600 hover:text-blue-600 font-medium">Interim CTO</Link>
            <Link href="/interim-coo" className="text-gray-600 hover:text-blue-600 font-medium">Interim COO</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
