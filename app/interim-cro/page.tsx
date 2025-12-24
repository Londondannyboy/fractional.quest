import { Metadata } from 'next'
import Link from 'next/link'
import { JobsGraph3D } from '@/components/JobsGraph3D'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Interim CRO Services UK | Hire a Temporary CRO',
  description: 'Hire an Interim CRO for your business. Full-time temporary revenue leadership for sales transformations and go-to-market pivots. Expert CROs available immediately.',
  keywords: 'interim cro, interim cro services, hire interim cro, temporary cro, interim chief revenue officer, interim cro uk',
  alternates: { canonical: 'https://fractional.quest/interim-cro' },
}

export default function InterimCROPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-blue-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Interim Leadership</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Interim CRO<br /><span className="text-blue-400">Services UK</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Full-time temporary revenue leadership for sales transformations, go-to-market pivots, and revenue crises. Expert revenue executives available immediately to support your <a href="https://www.gov.uk/business-support-helpline" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">business growth</a>.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-blue-500 text-white font-bold uppercase tracking-wider hover:bg-blue-400 transition-colors">Hire an Interim CRO</Link>
                <Link href="/fractional-cro-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Consider Fractional Instead?</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">What is an Interim CRO?</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">An <strong>Interim CRO</strong> is a temporary Chief Revenue Officer who works full-time for a defined period—typically 3-12 months. Unlike fractional CROs who work part-time, interim CROs focus exclusively on one organisation during critical revenue periods. This form of <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexible working arrangement</a> provides businesses with senior revenue leadership without the long-term commitment of a permanent hire.</p>
          <p className="text-gray-600">Interim CROs are typically hired to lead sales transformations, rebuild underperforming revenue teams, or manage go-to-market pivots requiring intensive daily leadership. The <a href="https://www.cim.co.uk/membership/professional-development/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Chartered Institute of Marketing</a> recognises interim leadership as a strategic approach to managing critical business transitions.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">When to Hire an Interim CRO</h2>
          <p className="text-gray-600 mb-6">According to <a href="https://www.scaleupinstitute.org.uk/leadership/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute research</a>, bringing in specialist interim leadership during critical growth phases significantly increases the likelihood of successful scale. Common scenarios include:</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">CRO Departure</h3>
              <p className="text-gray-600 text-sm">Your CRO or Sales VP has left and you need immediate revenue leadership while recruiting. <a href="https://www.cipd.org/uk/knowledge/factsheets/recruitment-factsheet/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Executive recruitment</a> can take 3-6 months, making interim cover essential.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Revenue Crisis</h3>
              <p className="text-gray-600 text-sm">Sales significantly underperforming and needs intensive turnaround leadership. According to <a href="https://www.ons.gov.uk/businessindustryandtrade/business/businessservices" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS business data</a>, swift leadership intervention is critical during revenue downturns.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Go-to-Market Pivot</h3>
              <p className="text-gray-600 text-sm">Major GTM strategy change requiring dedicated full-time focus to execute. The <a href="https://www.british-business-bank.co.uk/business-guidance/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Business Bank</a> highlights strategic pivots as key growth moments requiring specialist expertise.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Sales Team Rebuild</h3>
              <p className="text-gray-600 text-sm">Restructuring or rebuilding the entire sales organisation. Professional <a href="https://www.cim.co.uk/qualifications/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">sales leadership expertise</a> ensures successful team transformation.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Market Expansion</h3>
              <p className="text-gray-600 text-sm">Entering new markets or geographies with intensive sales buildout. <a href="https://www.bvca.co.uk/membership/member-insights" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">BVCA research</a> shows interim executives accelerate market entry success rates.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Pre-Funding Sprint</h3>
              <p className="text-gray-600 text-sm">Need to demonstrate revenue growth for upcoming funding round. Investors increasingly expect <a href="https://www.iod.com/news/business-economy/companies-using-interim-executives/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">proven revenue metrics</a> before committing capital.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ServiceComparisonTable role="CRO" accentColor="green" />
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Need an Interim CRO?</h2>
          <p className="text-xl text-gray-600 mb-10">Tell us about your revenue challenges and we'll help you find the right interim or fractional CRO. Our network includes <a href="https://www.iod.com/services/director-talent/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">experienced directors</a> and <a href="https://www.ismprofessional.org/thought-leadership/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">strategic sales leaders</a> ready to drive your revenue growth.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-blue-500 text-white font-bold uppercase tracking-wider hover:bg-blue-400 transition-colors">Find an Interim CRO</Link>
            <Link href="/fractional-cro-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Explore Fractional CRO</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
