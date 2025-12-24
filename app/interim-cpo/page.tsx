import { Metadata } from 'next'
import Link from 'next/link'
import { JobsGraph3D } from '@/components/JobsGraph3D'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Interim CPO Services UK | Hire a Temporary CPO',
  description: 'Hire an Interim CPO for your business. Full-time temporary product leadership for launches, pivots, and product transformations. Expert CPOs available immediately.',
  keywords: 'interim cpo, interim cpo services, hire interim cpo, temporary cpo, interim chief product officer, interim cpo uk',
  alternates: { canonical: 'https://fractional.quest/interim-cpo' },
}

export default function InterimCPOPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0">
          <JobsGraph3D roleFilter="CPO" limit={25} height="100%" isHero={true} showOverlay={true} />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-purple-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Interim Leadership</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Interim CPO<br /><span className="text-purple-400">Services UK</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Full-time temporary product leadership for major launches, strategic pivots, and product transformations. Expert product executives available immediately, supporting UK businesses with <a href="https://www.gov.uk/business-support-helpline" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-200 underline">flexible leadership solutions</a>.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-purple-500 text-white font-bold uppercase tracking-wider hover:bg-purple-400 transition-colors">Hire an Interim CPO</Link>
                <Link href="/fractional-cpo-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Consider Fractional Instead?</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">What is an Interim CPO?</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">An <strong>Interim CPO</strong> is a temporary Chief Product Officer who works full-time for a defined period—typically 3-12 months. Unlike fractional CPOs who work part-time, interim CPOs focus exclusively on one organisation during critical product periods. This <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexible working arrangement</a> allows businesses to access senior product leadership without long-term commitment.</p>
          <p className="text-gray-600">Interim CPOs are typically hired to lead major product launches, manage strategic pivots, or transform product organisations during periods of intensive change. According to the <a href="https://www.pmi.org/learning/library/product-management-leadership-best-practices-11908" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Project Management Institute</a>, effective product leadership during transition periods is critical for maintaining product momentum and team morale.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">When to Hire an Interim CPO</h2>
          <p className="text-gray-600 mb-8">According to <a href="https://scaleupinstitute.org.uk/scaleup-leadership/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute research</a>, leadership gaps during critical growth phases can significantly impact business performance. Interim CPOs provide immediate expertise when you need it most:</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { scenario: 'CPO Departure', description: 'Your CPO has left and you need immediate product leadership while recruiting.' },
              { scenario: 'Major Product Launch', description: 'Flagship product launch requiring dedicated full-time executive focus.' },
              { scenario: 'Strategic Pivot', description: 'Significant business model or product strategy pivot needing intensive leadership.' },
              { scenario: 'Product Turnaround', description: 'Product underperforming and needs full-time attention to diagnose and fix.' },
              { scenario: 'M&A Integration', description: 'Integrating product portfolios and teams post-acquisition.' },
              { scenario: 'Product Org Build', description: 'Building product function from scratch with intensive hiring and process setup.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.scenario}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">Benefits of Interim CPO Leadership</h2>
          <p className="text-gray-600 mb-6">The <a href="https://www.iod.com/news/leadership/interim-management-a-strategic-solution/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors</a> highlights interim executives as a strategic solution for businesses facing rapid change. Interim CPOs bring several distinct advantages:</p>
          <ul className="space-y-4 mb-8">
            <li className="text-gray-600"><strong>Immediate Impact:</strong> Experienced product leaders who can hit the ground running without lengthy onboarding. <a href="https://www.apm.org.uk/resources/find-a-resource/product-management/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">APM research</a> shows that senior product professionals bring established frameworks and best practices.</li>
            <li className="text-gray-600"><strong>Objective Perspective:</strong> Fresh eyes to identify product challenges and opportunities without organizational bias or legacy thinking.</li>
            <li className="text-gray-600"><strong>Focused Delivery:</strong> Dedicated to specific outcomes rather than long-term political navigation, ensuring rapid progress on critical initiatives.</li>
            <li className="text-gray-600"><strong>Cost-Effective:</strong> Access executive-level product expertise without the full cost of permanent recruitment, equity packages, or long-term benefits commitments that <a href="https://www.cipd.org/uk/knowledge/factsheets/reward-packages-factsheet/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD data</a> shows can be substantial.</li>
            <li className="text-gray-600"><strong>Knowledge Transfer:</strong> Interim CPOs often mentor internal teams, building product management capabilities that outlast their tenure, aligned with <a href="https://www.bcs.org/membership-and-registrations/member-communities/digital-transformation-specialist-group/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">BCS professional development standards</a>.</li>
          </ul>
          <p className="text-gray-600">For UK tech businesses, <a href="https://technation.io/news/uk-tech-sector-employment/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Tech Nation employment insights</a> indicate that flexible leadership models are increasingly common as companies scale. The <a href="https://www.british-business-bank.co.uk/research/smaller-businesses-and-the-uk-economy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Business Bank</a> notes that agile leadership structures help smaller businesses compete effectively. Recent <a href="https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/employmentandemployeetypes" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS employment data</a> shows growing demand for senior leadership expertise across the UK business landscape.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ServiceComparisonTable role="CPO" accentColor="purple" />
        </div>
      </section>

      <section id="contact" className="py-20 bg-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6 text-white">Need an Interim CPO?</h2>
          <p className="text-xl text-purple-100 mb-10">Tell us about your product challenges and we'll help you find the right interim or fractional CPO. With support from organisations like the <a href="https://www.bvca.co.uk/research/industry-activity/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-200 underline">BVCA</a>, UK businesses are increasingly adopting flexible leadership models to navigate growth and transformation.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-white text-purple-900 font-bold uppercase tracking-wider hover:bg-purple-50 transition-colors rounded-lg">Find an Interim CPO</Link>
            <Link href="/fractional-cpo-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white/10 transition-colors rounded-lg">Explore Fractional CPO</Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Related</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-cpo-jobs-uk" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Fractional CPO Jobs UK</Link>
              <Link href="/cpo" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">CPO Hub</Link>
              <Link href="/fractional-cpo-services" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Fractional CPO Services</Link>
              <Link href="/fractional-product-manager-jobs-uk" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">PM Jobs</Link>
              <Link href="/interim-cto" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Interim CTO</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
