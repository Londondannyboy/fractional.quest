import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'
import { createDbQuery } from '@/lib/db'
import { HotJobsLines } from '@/components/HotJobsLines'

export const revalidate = 3600

async function getInterimCOOJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT id, slug, title, company_name, location, is_remote, compensation, role_category, posted_date
      FROM jobs
      WHERE is_active = true
        AND (title ILIKE '%interim%coo%' OR title ILIKE '%interim%operations%')
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 10
    `
    return jobs
  } catch (error) {
    return []
  }
}

async function getRelatedCOOJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT id, slug, title, company_name, location, is_remote, compensation, role_category, posted_date
      FROM jobs
      WHERE is_active = true
        AND (title ILIKE '%fractional%coo%' OR title ILIKE '%fractional%operations%' OR role_category ILIKE '%operations%')
        AND title NOT ILIKE '%interim%'
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 10
    `
    return jobs
  } catch (error) {
    return []
  }
}

export const metadata: Metadata = {
  title: 'Interim COO Services UK',
  description: 'Hire an Interim COO. Temporary operations leadership for transformations and restructuring.',
  keywords: 'interim coo, interim coo services, hire interim coo, temporary coo, interim chief operating officer, interim coo uk',
  alternates: { canonical: 'https://fractional.quest/interim-coo' },
}

export default async function InterimCOOPage() {
  const [interimJobs, relatedJobs] = await Promise.all([getInterimCOOJobs(), getRelatedCOOJobs()])

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1920&q=80"
            alt="Interim COO Services UK - Operations leadership"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 via-orange-800/80 to-orange-700/60" />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-white/20 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Interim Leadership</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Interim COO<br /><span className="text-orange-300">Services UK</span></h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">Full-time temporary COO leadership for operational transformations, restructuring, and scaling challenges. Expert operations executives available immediately to support <a href="https://www.gov.uk/business-support-helpline" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-200 underline">UK businesses</a>.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-white text-orange-900 font-bold uppercase tracking-wider hover:bg-orange-50 transition-colors">Hire an Interim COO</Link>
                <Link href="/fractional-coo-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-orange-900 transition-colors">Consider Fractional Instead?</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Interim COO Jobs */}
      {(interimJobs as any[]).length > 0 && (
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <HotJobsLines
              jobs={(interimJobs as any[]).map(job => ({
                id: job.id,
                slug: job.slug,
                title: job.title,
                company_name: job.company_name,
                location: job.location,
                compensation: job.compensation,
                role_category: job.role_category,
                posted_date: job.posted_date,
                is_remote: job.is_remote,
              }))}
              title="Live Interim COO Jobs"
              maxJobs={10}
              viewAllHref="/interim-jobs-uk"
              viewAllText="View all interim jobs"
            />
          </div>
        </section>
      )}

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">What is an Interim COO?</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">An <strong>Interim COO</strong> is a temporary Chief Operating Officer who works full-time for a defined period—typically 3-12 months. Unlike fractional COOs who work part-time, interim COOs focus exclusively on one organisation during their engagement. This model offers organisations the <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexibility</a> to bring in senior operations expertise without permanent commitment.</p>
          <p className="text-gray-600">Interim COOs are typically hired to lead operational transformations, manage <a href="https://www.cmi.org.uk/management-development/restructuring/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">restructuring initiatives</a>, or fill leadership gaps during critical growth periods. According to the <a href="https://www.cipd.org.uk/knowledge/strategy/resourcing/interim-managers-factsheet/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD</a>, interim management has become an established solution for organisations facing change.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">When to Hire an Interim COO</h2>
          <p className="text-gray-600 mb-8">The <a href="https://www.iod.com/news/news/articles/how-to-hire-interim-executives/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors</a> notes that interim executives are particularly valuable during periods of transformation. <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute</a> research shows that scaling businesses often require experienced operational leadership to navigate growth challenges effectively.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { scenario: 'COO Departure', description: 'Your COO has left and you need immediate operational leadership while recruiting.' },
              { scenario: 'Restructuring', description: 'Major organisational restructuring requiring dedicated operational focus, as outlined in APM guidance on organisational change.' },
              { scenario: 'Rapid Scaling', description: 'Scaling operations rapidly and need full-time leadership to build infrastructure.' },
              { scenario: 'Turnaround', description: 'Operations in crisis requiring intensive, full-time attention to stabilise.' },
              { scenario: 'M&A Integration', description: 'Merging operations post-acquisition with full-time integration leadership, critical for private equity-backed firms.' },
              { scenario: 'Process Overhaul', description: 'Complete operational process redesign requiring dedicated leadership.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.scenario}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-white border border-gray-200">
            <p className="text-gray-600"><a href="https://www.apm.org.uk/resources/find-a-resource/project-management-for-change/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">APM research</a> demonstrates that organisations undergoing significant operational change benefit from dedicated leadership. For manufacturing businesses, <a href="https://www.makeuk.org/insights/reports/operational-excellence" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Make UK</a> highlights the importance of operational excellence during scaling. The <a href="https://www.british-business-bank.co.uk/finance-hub/business-guidance/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Business Bank</a> also notes that access to experienced leadership is crucial for growth-stage companies.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ServiceComparisonTable role="COO" accentColor="orange" />
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Need an Interim COO?</h2>
          <p className="text-xl text-gray-600 mb-10">Tell us about your situation and we'll help you find the right interim or fractional COO. Research from <a href="https://www.bethebusiness.com/research/building-scale-up-britain/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Be the Business</a> shows that access to experienced leadership significantly improves business performance. <a href="https://www.bvca.co.uk/research/industry-activity/reports" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">BVCA</a> data indicates that portfolio companies often benefit from interim operational leadership during transition periods.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-orange-500 text-black font-bold uppercase tracking-wider hover:bg-orange-400 transition-colors">Find an Interim COO</Link>
            <Link href="/fractional-coo-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Explore Fractional COO</Link>
          </div>
        </div>
      </section>

      {/* Related Fractional Jobs */}
      {(relatedJobs as any[]).length > 0 && (
        <section className="py-8 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-900">Prefer Part-Time? Fractional COO Roles</h2>
              <p className="text-sm text-gray-600">Ongoing part-time positions (1-3 days/week)</p>
            </div>
            <HotJobsLines
              jobs={(relatedJobs as any[]).map(job => ({
                id: job.id,
                slug: job.slug,
                title: job.title,
                company_name: job.company_name,
                location: job.location,
                compensation: job.compensation,
                role_category: job.role_category,
                posted_date: job.posted_date,
                is_remote: job.is_remote,
              }))}
              title="Fractional COO Jobs"
              maxJobs={10}
              viewAllHref="/fractional-coo-jobs-uk"
              viewAllText="View all fractional COO jobs"
            />
          </div>
        </section>
      )}
    </div>
  )
}
