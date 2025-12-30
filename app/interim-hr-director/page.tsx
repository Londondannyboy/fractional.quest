import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { JobsGraph3D } from '@/components/JobsGraph3D'
import { FAQ } from '@/components/FAQ'
import { HotJobsLines } from '@/components/HotJobsLines'

export const revalidate = 3600

async function getInterimHRDirectorJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT id, slug, title, company_name, location, is_remote, compensation, role_category, posted_date
      FROM jobs
      WHERE is_active = true
        AND (title ILIKE '%interim%hr%director%' OR title ILIKE '%interim%people%director%')
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 10
    `
    return jobs
  } catch (error) {
    return []
  }
}

async function getRelatedHRDirectorJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT id, slug, title, company_name, location, is_remote, compensation, role_category, posted_date
      FROM jobs
      WHERE is_active = true
        AND (title ILIKE '%fractional%hr%' OR title ILIKE '%fractional%people%' OR role_category ILIKE '%hr%')
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
  title: 'Interim HR Director UK 2025',
  description: 'Interim HR Director UK. Full-time temporary HR leadership 3-12 months. £850-£1,200/day.',
  keywords: 'interim hr director, interim hr director uk, temporary hr director, interim head of hr, interim vs fractional hr',
  alternates: {
    canonical: 'https://fractional.quest/interim-hr-director',
  },
  openGraph: {
    title: 'Interim HR Director UK 2025 | Temporary HR Leadership',
    description: 'Interim HR Director guide - full-time temporary HR leadership for gap-fill and transformation.',
    images: ['/images/interim-hr-director.jpg'],
    url: 'https://fractional.quest/interim-hr-director',
  },
}

async function getHRStats() {
  try {
    const sql = createDbQuery()
    const result = await sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'HR'`
    return parseInt((result[0] as any)?.count || '0')
  } catch {
    return 32
  }
}

const INTERIM_FAQS = [
  {
    question: 'What is an Interim HR Director?',
    answer: 'An Interim HR Director is an experienced HR leader who takes on a full-time temporary role (typically 3-12 months) to cover gaps, lead transformation, or bridge to a permanent hire. Unlike fractional HR (part-time ongoing), interim is full-time for a defined period. These professionals typically have <a href="https://www.cipd.org/uk/knowledge/factsheets/hr-profession-map-factsheet/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">senior CIPD qualifications</a> and extensive strategic experience.'
  },
  {
    question: 'How much does an Interim HR Director cost?',
    answer: 'Interim HR Directors in the UK typically cost £850-£1,200 per day, working 5 days/week. That\'s £18,400-£26,000/month or £220,000-£312,000 annualized. This is more expensive than fractional (£94k-£114k/year for 2 days/week) but provides full-time presence.'
  },
  {
    question: 'When should I hire Interim vs Fractional HR?',
    answer: 'Hire Interim for: gap-fill (CHRO left suddenly), crisis management, full-time project (restructure, M&A integration), or bridge to permanent hire. Hire Fractional for: ongoing strategic support, building HR function, when you don\'t need 5 days/week. Consider current <a href="https://www.ons.gov.uk/employmentandlabourmarket" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">employment market conditions</a> when making this decision.'
  },
  {
    question: 'How long do Interim HR Director engagements last?',
    answer: 'Typical interim HR engagements last 3-12 months. Gap-fill roles (covering departures) are usually 4-8 months. Transformation projects are 6-12 months. Some interims convert to permanent or transition to fractional after the intensive phase.'
  },
  {
    question: 'What is the difference between Interim and Permanent HR Director?',
    answer: 'Interim HR Directors work full-time temporarily as contractors (outside IR35 usually), with defined end dates. Permanent HR Directors are <a href="https://www.gov.uk/employment-contracts-and-conditions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">employees</a> with ongoing contracts, benefits, equity, and employment rights. Interims cost more daily but less overall for short-term needs, offering <a href="https://www.cbi.org.uk/articles/how-to-build-a-flexible-workforce/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">workforce flexibility</a> for businesses.'
  },
]

export default async function InterimHRDirectorPage() {
  const [jobCount, interimJobs, relatedJobs] = await Promise.all([getHRStats(), getInterimHRDirectorJobs(), getRelatedHRDirectorJobs()])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="HR Director"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/fractional-hr" className="inline-flex items-center text-white/60 hover:text-gray-900 mb-6 transition-colors text-sm">
              <span className="mr-2">←</span> Back to HR Hub
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-gray-700 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Interim Guide
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Interim<br />
                <span className="text-pink-400">HR Director</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
                <strong className="text-white">Full-time temporary</strong> HR leadership for 3-12 months. Gap-fill, transformation, or bridge to permanent.
              </p>
              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">£850-£1,200</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Day Rate</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">5 Days</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Per Week</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-pink-400">3-12 Mo</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Duration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Interim HR Director Jobs */}
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
              title="Live Interim HR Director Jobs"
              maxJobs={10}
              viewAllHref="/interim-jobs-uk"
              viewAllText="View all interim jobs"
            />
          </div>
        </section>
      )}

      {/* Definition */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gray-50 border-l-4 border-gray-900 p-8 mb-12">
            <h2 className="text-2xl font-black text-gray-900 mb-4">What is an Interim HR Director?</h2>
            <p className="text-xl text-gray-700 mb-0">
              An <strong>Interim HR Director</strong> is a senior HR professional who takes on a <strong>full-time temporary role</strong> for a defined period—typically 3-12 months. Unlike fractional HR (part-time, ongoing), interim HR provides 5-day-per-week presence for specific situations: gap-fill when a CHRO departs, leading <a href="https://www.cipd.org/uk/knowledge/guides/organisational-development/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">major transformation</a>, or bridging to a permanent hire. These roles often involve navigating complex <a href="https://www.gov.uk/browse/employing-people" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">employment law requirements</a> while driving strategic HR initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Interim vs Fractional HR Director</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-900">
                  <th className="p-4 text-left">Factor</th>
                  <th className="p-4 text-left">Interim HR Director</th>
                  <th className="p-4 text-left bg-pink-600">Fractional HR Director</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="p-4 font-semibold">Time Commitment</td>
                  <td className="p-4">5 days/week (full-time)</td>
                  <td className="p-4 bg-pink-50">1-3 days/week (<a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexible working</a>)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Duration</td>
                  <td className="p-4">3-12 months (temporary)</td>
                  <td className="p-4 bg-pink-50">6-18+ months (ongoing)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Day Rate</td>
                  <td className="p-4">£850-£1,200/day</td>
                  <td className="p-4 bg-pink-50 font-bold text-pink-600">£900-£1,100/day</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Monthly Cost</td>
                  <td className="p-4">£18,400-£26,000</td>
                  <td className="p-4 bg-pink-50">£7,800-£9,500 (2 days/week)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Annual Cost</td>
                  <td className="p-4">£220k-£312k (annualized)</td>
                  <td className="p-4 bg-pink-50 font-bold text-pink-600">£94k-£114k</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Client Focus</td>
                  <td className="p-4">Single client (exclusive)</td>
                  <td className="p-4 bg-pink-50">2-4 clients simultaneously</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Best For</td>
                  <td className="p-4">Gap-fill, crisis, transformation</td>
                  <td className="p-4 bg-pink-50">Ongoing strategic support</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Company Size</td>
                  <td className="p-4">100+ employees typically</td>
                  <td className="p-4 bg-pink-50">30-150 employees</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When to Hire */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-gray-900 mb-8">When to Hire an Interim HR Director</h2>

          <div className="grid gap-6">
            <div className="bg-gray-50 p-6 border-l-4 border-gray-900">
              <h3 className="text-xl font-black text-gray-900 mb-3">Gap-Fill / Sudden Departure</h3>
              <p className="text-gray-700 mb-0">"Our CHRO just resigned with 4 weeks notice. We need someone to step in immediately and maintain momentum while we recruit a permanent replacement." This ensures continuity in critical HR functions including <a href="https://www.acas.org.uk/checking-an-employees-right-to-work" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">right to work compliance</a> and employee relations. Typical duration: 4-8 months.</p>
            </div>

            <div className="bg-gray-50 p-6 border-l-4 border-pink-500">
              <h3 className="text-xl font-black text-gray-900 mb-3">Major Transformation</h3>
              <p className="text-gray-700 mb-0">"We're undertaking a significant <a href="https://www.shrm.org/topics-tools/tools/toolkits/managing-organizational-change" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">restructure</a>, cultural change programme, or M&A integration that requires full-time senior HR leadership." These initiatives often involve <a href="https://www.scaleupinstitute.org.uk/scaleup-programmes/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">scaling organizational capabilities</a> to support rapid growth. Typical duration: 6-12 months.</p>
            </div>

            <div className="bg-gray-50 p-6 border-l-4 border-gray-900">
              <h3 className="text-xl font-black text-gray-900 mb-3">Crisis Management</h3>
              <p className="text-gray-700 mb-0">"We're facing serious ER issues, multiple <a href="https://www.acas.org.uk/employment-tribunals" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">tribunals</a>, or a culture crisis that needs immediate full-time attention to resolve." Senior HR directors navigate these challenges while ensuring <a href="https://www.iod.com/news/news/articles/employment-law-what-directors-need-to-know/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">director compliance with employment law</a>. Typical duration: 3-6 months.</p>
            </div>

            <div className="bg-gray-50 p-6 border-l-4 border-pink-500">
              <h3 className="text-xl font-black text-gray-900 mb-3">Bridge to Permanent</h3>
              <p className="text-gray-700 mb-0">"We know we need a full-time CHRO but the recruitment will take 4-6 months. We need senior cover in the meantime." Typical duration: 3-6 months.</p>
            </div>
          </div>

          <div className="mt-12 bg-pink-50 p-8 border border-pink-200">
            <h3 className="text-xl font-black text-gray-900 mb-4">Don't Need Full-Time?</h3>
            <p className="text-gray-700 mb-4">
              If you don't need 5-days-per-week presence, a <strong>fractional HR Director</strong> is likely more cost-effective. At £94k-£114k/year vs £220k-£312k for interim, you save significantly while still getting senior expertise. Many <a href="https://www.british-business-bank.co.uk/finance-hub/business-guidance/growing-your-business/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">growing businesses</a> find this model provides the strategic oversight they need without full-time overhead.
            </p>
            <Link href="/fractional-hr-director" className="text-pink-600 hover:text-pink-700 font-semibold">
              Learn about Fractional HR Directors →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions</h2>
          </div>
          <FAQ items={INTERIM_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 text-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Explore HR Leadership Options</h2>
          <p className="text-gray-600 mb-8">Whether you need interim or fractional, find the right HR leader for your situation.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/fractional-hr-jobs-uk" className="px-8 py-4 bg-pink-500 text-white font-semibold hover:bg-pink-400 transition-colors">
              Browse HR Leaders
            </Link>
            <Link href="/fractional-hr-director" className="px-8 py-4 border-2 border-white font-semibold hover:bg-white/10 transition-colors">
              Fractional HR Director
            </Link>
            <Link href="/interim-chro" className="px-8 py-4 border-2 border-white font-semibold hover:bg-white/10 transition-colors">
              Interim CHRO
            </Link>
          </div>
        </div>
      </section>

      {/* Related Fractional Jobs */}
      {(relatedJobs as any[]).length > 0 && (
        <section className="py-8 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-900">Prefer Part-Time? Fractional HR Director Roles</h2>
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
              title="Fractional HR Director Jobs"
              maxJobs={10}
              viewAllHref="/fractional-hr-jobs-uk"
              viewAllText="View all fractional HR jobs"
            />
          </div>
        </section>
      )}

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">HR Cluster</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-hr" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Complete HR Guide</Link>
              <Link href="/fractional-hr-jobs-uk" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Jobs UK</Link>
              <Link href="/fractional-hr-director" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Fractional HR Director</Link>
              <Link href="/interim-chro" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Interim CHRO</Link>
              <Link href="/fractional-hr-vs-full-time" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Fractional vs Full-Time</Link>
              <Link href="/fractional-hr-roles" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">All HR Roles</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
