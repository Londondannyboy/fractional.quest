import { Metadata } from 'next'
import Link from 'next/link'
import { JobsGraph3D } from '@/components/JobsGraph3D'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Interim CIO Services UK | Hire a Temporary CIO',
  description: 'Hire an Interim CIO for your business. Full-time temporary IT leadership for digital transformation, system migrations, and critical IT periods. Expert CIOs available immediately.',
  keywords: 'interim cio, interim cio services, hire interim cio, temporary cio, interim chief information officer, interim cio uk',
  alternates: { canonical: 'https://fractional.quest/interim-cio' },
}

export default function InterimCIOPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="absolute inset-0">
          <JobsGraph3D roleFilter="CIO" limit={25} height="100%" isHero={true} showOverlay={true} />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-indigo-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Interim Leadership</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Interim CIO<br /><span className="text-indigo-400">Services UK</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Full-time temporary IT leadership for <a href="https://www.bcs.org/articles-opinion-and-research/digital-transformation-what-does-it-really-mean/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white underline">digital transformations</a>, system migrations, and critical technology periods. Expert IT executives available immediately.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-indigo-500 text-white font-bold uppercase tracking-wider hover:bg-indigo-400 transition-colors">Hire an Interim CIO</Link>
                <Link href="/fractional-cio-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Consider Fractional Instead?</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">What is an Interim CIO?</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">An <strong>Interim CIO</strong> is a temporary Chief Information Officer who works full-time for a defined period—typically 3-12 months. This <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexible working arrangement</a> differs from permanent appointments and provides organisations with immediate IT leadership during critical periods. Unlike fractional CIOs who work part-time across multiple clients, interim CIOs focus exclusively on one organisation during major IT transformations or transitions, providing the <a href="https://www.techuk.org/resource/the-evolving-role-of-the-cio.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">strategic IT leadership</a> needed for complex initiatives. According to <a href="https://www.cipd.org/uk/knowledge/guides/interim-managers/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD research on interim managers</a>, these professionals bring specialist expertise and can deliver rapid results during periods of organisational change.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">When to Hire an Interim CIO</h2>
          <p className="text-lg text-gray-600 mb-8">Interim CIOs are particularly valuable for <a href="https://www.scaleupinstitute.org.uk/scaleup-insights/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">scaling businesses</a> and organisations facing significant IT challenges. According to <a href="https://www.isaca.org/resources/news-and-trends/isaca-now-blog/2024/the-evolving-role-of-the-cio" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ISACA research</a>, modern CIOs must balance technology leadership with business strategy, making experienced interim leaders invaluable during transitional periods.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { scenario: 'CIO Departure', description: 'Your CIO has left and you need immediate IT leadership while recruiting. Interim CIOs provide continuity during executive transitions, as outlined in CIPD guidance on succession planning.' },
              { scenario: 'Digital Transformation', description: 'Major digital transformation requiring full-time dedicated leadership to modernise systems and processes across the organisation.' },
              { scenario: 'ERP Implementation', description: 'Large-scale ERP or system implementation needing intensive oversight and stakeholder management throughout the project lifecycle.' },
              { scenario: 'IT Turnaround', description: 'IT function underperforming and needs dedicated leadership to fix operational issues, improve IT governance frameworks, and rebuild team capability.' },
              { scenario: 'M&A IT Integration', description: 'Integrating IT systems and teams post-acquisition, managing technical due diligence and system consolidation.' },
              { scenario: 'Cloud Migration', description: 'Major cloud migration requiring full-time executive focus on security, compliance, and change management, following NCSC cloud security guidance.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.scenario}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded">
            <p className="text-gray-700"><strong>Key Consideration:</strong> The <a href="https://www.iod.com/news/employment/the-role-of-interim-executives/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors</a> notes that interim executives bring immediate expertise and objectivity, making them ideal for organisations navigating <a href="https://technation.io/insights/uk-tech-sector-trends/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">rapid technology change</a>. For cybersecurity-critical projects, ensure your interim CIO has relevant <a href="https://www.ncsc.gov.uk/collection/board-toolkit" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">NCSC-aligned experience</a>.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ServiceComparisonTable role="CIO" accentColor="purple" />
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Need an Interim CIO?</h2>
          <p className="text-xl text-gray-600 mb-10">Tell us about your IT challenges and we'll help you find the right interim or fractional CIO. Whether you're a <a href="https://www.british-business-bank.co.uk/business-guidance/scaling-up/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">growth-stage company</a> or established enterprise, we match you with experienced IT leaders who understand your sector and challenges.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-indigo-500 text-white font-bold uppercase tracking-wider hover:bg-indigo-400 transition-colors">Find an Interim CIO</Link>
            <Link href="/fractional-cio-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Explore Fractional CIO</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
