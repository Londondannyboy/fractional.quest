import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'
import { createDbQuery } from '@/lib/db'
import { HotJobsLines } from '@/components/HotJobsLines'

export const revalidate = 3600

async function getInterimCTOJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT id, slug, title, company_name, location, is_remote, compensation, role_category, posted_date
      FROM jobs
      WHERE is_active = true
        AND (title ILIKE '%interim%cto%' OR title ILIKE '%interim%tech%')
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 10
    `
    return jobs
  } catch (error) {
    return []
  }
}

async function getRelatedCTOJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT id, slug, title, company_name, location, is_remote, compensation, role_category, posted_date
      FROM jobs
      WHERE is_active = true
        AND (title ILIKE '%fractional%cto%' OR title ILIKE '%fractional%tech%' OR role_category ILIKE '%tech%' OR role_category ILIKE '%cto%')
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
  title: 'Interim CTO Services UK',
  description: 'Hire an Interim CTO. Temporary technical leadership for transformations and migrations.',
  keywords: 'interim cto, interim cto services, hire interim cto, temporary cto, interim chief technology officer, interim cto uk',
  alternates: { canonical: 'https://fractional.quest/interim-cto' },
  openGraph: {
    title: 'Interim CTO Services UK',
    description: 'Hire an Interim CTO. Temporary technical leadership.',
    url: 'https://fractional.quest/interim-cto',
  },
}

export default async function InterimCTOPage() {
  const [interimJobs, relatedJobs] = await Promise.all([getInterimCTOJobs(), getRelatedCTOJobs()])

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80"
            alt="Interim CTO Services UK - Technical leadership"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-800/80 to-purple-700/60" />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-white/20 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Interim Leadership</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">
                Interim CTO<br /><span className="text-purple-300">Services UK</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Full-time temporary CTO leadership for technical transformations, platform migrations, and critical periods. Expert technology executives available to start immediately, supporting UK businesses through <a href="https://www.gov.uk/business-finance-support" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-200 underline">business growth challenges</a>.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-white text-purple-900 font-bold uppercase tracking-wider hover:bg-purple-50 transition-colors">Hire an Interim CTO</Link>
                <Link href="/fractional-cto-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-purple-900 transition-colors">Consider Fractional Instead?</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Interim CTO Jobs */}
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
              title="Live Interim CTO Jobs"
              maxJobs={10}
              viewAllHref="/interim-jobs-uk"
              viewAllText="View all interim jobs"
            />
          </div>
        </section>
      )}

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">What is an Interim CTO?</h2>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              An <strong>Interim CTO</strong> is a temporary Chief Technology Officer who works full-time for a defined period—typically 3-12 months. Unlike fractional CTOs who work part-time, interim CTOs focus exclusively on one organisation during their engagement. This type of <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexible working arrangement</a> has become increasingly common in the UK technology sector.
            </p>
            <p>Interim CTOs are typically hired to lead technical transformations, manage critical migrations, or fill leadership gaps during CTO transitions. According to <a href="https://technation.io/jobs/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Tech Nation</a>, the demand for experienced technology leaders continues to grow as companies navigate digital transformation challenges.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">When to Hire an Interim CTO</h2>
          <p className="text-gray-600 mb-8">
            Understanding when to bring in interim leadership is crucial for business continuity. The <a href="https://www.bcs.org/articles-opinion-and-research/the-evolving-role-of-the-cto/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">BCS (Chartered Institute for IT)</a> highlights the critical importance of maintaining strong technical leadership during periods of change and transformation.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { scenario: 'CTO Departure', description: 'Your CTO has left and you need immediate technical leadership while recruiting a permanent replacement.' },
              { scenario: 'Platform Migration', description: 'Major platform rewrite or cloud migration requiring dedicated technical leadership.' },
              { scenario: 'Technical Due Diligence', description: 'Preparing for acquisition or investment with intensive technical preparation needs.' },
              { scenario: 'Team Restructuring', description: 'Rebuilding or significantly restructuring the engineering organisation.' },
              { scenario: 'Security Incident', description: 'Major security breach requiring full-time technical crisis management.' },
              { scenario: 'Technical Turnaround', description: 'Technical debt or quality crisis requiring focused leadership to resolve.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.scenario}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-white border border-gray-200 rounded-lg">
            <p className="text-gray-700 text-sm">
              For growing technology companies, the <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute</a> emphasises the importance of securing experienced leadership during critical growth phases. Many scale-ups also benefit from understanding <a href="https://www.british-business-bank.co.uk/finance-hub/business-guidance/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">business finance options</a> when planning for major technical investments.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Interim CTO vs Fractional CTO</h2>
          <p className="text-gray-600 mb-8">
            Both interim and fractional CTOs offer flexible executive solutions, but serve different business needs. Research from <a href="https://www.techuk.org/insights/reports/item/23542-techuk-leadership-digital-skills-and-talent" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">techUK</a> shows that companies are increasingly adopting flexible leadership models to address the <a href="https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/employmentandemployeetypes" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">evolving employment landscape</a> in the technology sector.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 text-left font-bold">Aspect</th>
                  <th className="p-4 text-left font-bold text-blue-700">Interim CTO</th>
                  <th className="p-4 text-left font-bold">Fractional CTO</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-4 font-medium">Time Commitment</td><td className="p-4">Full-time (5 days/week)</td><td className="p-4">Part-time (1-3 days/week)</td></tr>
                <tr className="border-b bg-gray-50"><td className="p-4 font-medium">Duration</td><td className="p-4">3-12 months (fixed term)</td><td className="p-4">Ongoing (indefinite)</td></tr>
                <tr className="border-b"><td className="p-4 font-medium">Cost</td><td className="p-4">£8,000-£14,000/week</td><td className="p-4">£3,500-£6,500/week</td></tr>
                <tr className="border-b bg-gray-50"><td className="p-4 font-medium">Best For</td><td className="p-4">Migrations, transformations, crises</td><td className="p-4">Ongoing technical leadership</td></tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-800 font-medium mb-2">Not sure which is right for you?</p>
            <p className="text-blue-700 text-sm mb-4">If you need full-time focus for a specific technical project, choose interim. If you need ongoing technical leadership at lower cost, choose fractional. The <a href="https://www.cipd.org/uk/knowledge/factsheets/flexible-working-factsheet/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD</a> provides guidance on evaluating different flexible working arrangements for senior roles.</p>
            <Link href="/fractional-cto-services" className="text-blue-700 font-bold hover:text-blue-900">Learn about Fractional CTO Services →</Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ServiceComparisonTable role="CTO" accentColor="blue" />
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Need an Interim CTO?</h2>
          <p className="text-xl text-gray-600 mb-4">Tell us about your situation and we'll help you find the right interim or fractional CTO.</p>
          <p className="text-base text-gray-600 mb-10">
            Whether you're navigating a <a href="https://www.iod.com/insights/business-strategy/leadership-succession-planning/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">leadership transition</a> or planning a major technical initiative, the right CTO engagement model can make all the difference to your business outcomes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-blue-500 text-white font-bold uppercase tracking-wider hover:bg-blue-400 transition-colors">Find an Interim CTO</Link>
            <Link href="/fractional-cto-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Explore Fractional CTO</Link>
          </div>
        </div>
      </section>

      {/* Related Fractional Jobs */}
      {(relatedJobs as any[]).length > 0 && (
        <section className="py-8 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-900">Prefer Part-Time? Fractional CTO Roles</h2>
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
              title="Fractional CTO Jobs"
              maxJobs={10}
              viewAllHref="/fractional-cto-jobs-uk"
              viewAllText="View all fractional CTO jobs"
            />
          </div>
        </section>
      )}

      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-cto-services" className="text-gray-600 hover:text-blue-600 font-medium">Fractional CTO</Link>
            <Link href="/interim-cfo" className="text-gray-600 hover:text-blue-600 font-medium">Interim CFO</Link>
            <Link href="/interim-cmo" className="text-gray-600 hover:text-blue-600 font-medium">Interim CMO</Link>
            <Link href="/interim-coo" className="text-gray-600 hover:text-blue-600 font-medium">Interim COO</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
