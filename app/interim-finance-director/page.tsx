import { Metadata } from 'next'
import Link from 'next/link'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Interim Finance Director Services UK | Hire a Temporary FD',
  description: 'Hire an Interim Finance Director for your business. Full-time temporary financial leadership for transitions, transformations, and gap-filling. Expert FDs available immediately.',
  keywords: 'interim finance director, interim fd, hire interim finance director, temporary finance director, interim fd uk',
  alternates: { canonical: 'https://fractional.quest/interim-finance-director' },
  openGraph: {
    title: 'Interim Finance Director Services UK | Hire a Temporary FD',
    description: 'Hire an Interim Finance Director for your business. Full-time temporary financial leadership.',
    url: 'https://fractional.quest/interim-finance-director',
  },
}

export default function InterimFinanceDirectorPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&q=80')`,
          }}
        >
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
                Interim Finance Director<br /><span className="text-blue-300">Services UK</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Full-time temporary Finance Director leadership for transitions, transformations, and critical periods. Expert financial executives available to start immediately. As <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white underline">UK flexible working legislation</a> evolves, interim executive appointments have become a mainstream solution for businesses requiring senior leadership.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-white text-blue-900 font-bold uppercase tracking-wider hover:bg-blue-50 transition-colors">
                  Hire an Interim FD
                </Link>
                <Link href="/fractional-finance-director-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-blue-900 transition-colors">
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
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">What is an Interim Finance Director?</h2>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              An <strong>Interim Finance Director</strong> is a temporary senior finance professional who works full-time for a defined period—typically 3-12 months. According to <a href="https://www.cipd.org/uk/knowledge/reports/flexible-working-trends/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD research on flexible working trends</a>, interim executive appointments have grown significantly as organisations seek agile leadership solutions. Unlike fractional Finance Directors who work part-time across multiple companies, interim FDs focus exclusively on one organisation during their engagement.
            </p>
            <p>
              Interim Finance Directors are typically hired to fill leadership gaps, lead specific transformations, or navigate critical periods like M&A, restructuring, or FD transitions. The <a href="https://www.icaew.com/membership/regulate-and-ethics/professional-standards" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ICAEW provides professional standards guidance</a> on interim finance leadership roles. Many interim FDs hold qualifications from <a href="https://www.accaglobal.com/uk/en.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ACCA</a> or <a href="https://www.cimaglobal.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIMA</a>, ensuring they meet rigorous professional standards.
            </p>
          </div>
        </div>
      </section>

      {/* When to Hire */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">When to Hire an Interim Finance Director</h2>
          <p className="text-gray-600 mb-8">According to <a href="https://www.scaleupinstitute.org.uk/insights/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute research</a>, growing businesses often need interim executive support during critical transitions. The <a href="https://www.british-business-bank.co.uk/finance-hub/business-guidance/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Business Bank</a> notes that access to experienced financial leadership is a key factor in SME growth success. Additionally, <a href="https://www.gov.uk/business-finance-support" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">government business finance support schemes</a> often require robust financial governance.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { scenario: 'FD Departure', description: 'Your Finance Director has left and you need immediate leadership while recruiting a permanent replacement.' },
              { scenario: 'M&A Transaction', description: 'Buying or selling a company and need dedicated FD leadership through the transaction.' },
              { scenario: 'Restructuring', description: 'Major restructuring or turnaround requiring full-time financial leadership focus.' },
              { scenario: 'Growth Funding', description: 'Preparing for funding rounds and need experienced FD leadership through the process.' },
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
          <h2 className="text-3xl font-black text-gray-900 mb-8">Interim FD vs Fractional Finance Director</h2>
          <p className="text-gray-600 mb-6">Both interim and fractional Finance Director engagements fall under <a href="https://www.gov.uk/topic/business-tax/ir35" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IR35 regulations</a> which govern off-payroll working arrangements. The <a href="https://www.iod.com/news/employment/flexible-working-rights-what-directors-need-to-know/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors</a> provides guidance on engaging interim executives effectively. <a href="https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS employment data</a> shows the continued growth of flexible senior roles across the UK.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 text-left font-bold">Aspect</th>
                  <th className="p-4 text-left font-bold text-blue-700">Interim FD</th>
                  <th className="p-4 text-left font-bold">Fractional FD</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-4 font-medium">Time Commitment</td><td className="p-4">Full-time (5 days/week)</td><td className="p-4">Part-time (1-3 days/week)</td></tr>
                <tr className="border-b bg-gray-50"><td className="p-4 font-medium">Duration</td><td className="p-4">3-12 months (fixed term)</td><td className="p-4">Ongoing (indefinite)</td></tr>
                <tr className="border-b"><td className="p-4 font-medium">Focus</td><td className="p-4">Single company, deep immersion</td><td className="p-4">Multiple clients, broader perspective</td></tr>
                <tr className="border-b bg-gray-50"><td className="p-4 font-medium">Cost</td><td className="p-4">£6,000-£10,000/week</td><td className="p-4">£2,500-£5,000/week</td></tr>
                <tr className="border-b"><td className="p-4 font-medium">Best For</td><td className="p-4">Transitions, transformations, crises</td><td className="p-4">Ongoing strategic leadership</td></tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 p-6 bg-blue-950/20 border border-blue-800/40 rounded-lg">
            <p className="text-blue-800 font-medium mb-2">Not sure which is right for you?</p>
            <p className="text-blue-700 text-sm mb-4">If you need full-time focus for a specific project or transition, choose interim. If you need ongoing strategic FD leadership at lower cost, choose fractional.</p>
            <Link href="/fractional-finance-director-services" className="text-blue-700 font-bold hover:text-blue-900">Learn about Fractional Finance Director Services →</Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Full Comparison</h2>
          <ServiceComparisonTable role="Finance Director" accentColor="emerald" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Need an Interim Finance Director?</h2>
          <p className="text-xl text-gray-600 mb-10">Tell us about your situation and we'll help you find the right interim or fractional Finance Director. Businesses requiring financial transformation should ensure compliance with <a href="https://www.frc.org.uk/financial-reporting" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Financial Reporting Council standards</a> and consider <a href="https://www.bvca.co.uk/research/portfolio-company-management" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">BVCA guidance on portfolio company management</a> for PE-backed firms. Understanding <a href="https://www.gov.uk/running-a-limited-company/company-changes-you-must-report" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Companies House reporting requirements</a> is essential for all interim FD appointments.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-blue-950/200 text-black font-bold uppercase tracking-wider hover:bg-blue-400 transition-colors">
              Find an Interim Finance Director
            </Link>
            <Link href="/fractional-finance-director-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              Explore Fractional FD
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-finance-director-services" className="text-gray-600 hover:text-blue-600 font-medium">Fractional Finance Director</Link>
            <Link href="/interim-cfo" className="text-gray-600 hover:text-blue-600 font-medium">Interim CFO</Link>
            <Link href="/interim-cmo" className="text-gray-600 hover:text-blue-600 font-medium">Interim CMO</Link>
            <Link href="/interim-cto" className="text-gray-600 hover:text-blue-700 font-medium">Interim CTO</Link>
            <Link href="/interim-coo" className="text-gray-600 hover:text-blue-600 font-medium">Interim COO</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
