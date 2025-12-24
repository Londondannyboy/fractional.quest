import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { JobsGraph3D } from '@/components/JobsGraph3D'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Part-Time HR Jobs UK 2025 - Flexible HR Director & CHRO Roles',
  description: 'Find part-time HR jobs in the UK. Flexible HR Director and CHRO positions paying £700-£1,300/day. Work 1-3 days per week with growing companies.',
  keywords: 'part time hr, part-time hr, part time hr director, part time chro, part time hr jobs, flexible hr roles',
  alternates: {
    canonical: 'https://fractional.quest/part-time-hr',
  },
  openGraph: {
    title: 'Part-Time HR Jobs UK - Flexible HR Director & CHRO Roles',
    description: 'Find part-time HR jobs in the UK. Flexible HR positions paying £700-£1,300/day.',
    images: ['/images/part-time-hr.jpg'],
    url: 'https://fractional.quest/part-time-hr',
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

async function getHRJobs() {
  try {
    const sql = createDbQuery()
    return await sql`
      SELECT id, slug, title, company_name, location, compensation, posted_date
      FROM jobs
      WHERE is_active = true AND role_category = 'HR'
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 4
    `
  } catch {
    return []
  }
}

export default async function PartTimeHRPage() {
  const [jobCount, jobs] = await Promise.all([getHRStats(), getHRJobs()])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with 3D Background */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Part-Time HR" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="bg-gray-50/40 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10">
            <Link href="/fractional-hr" className="text-white/70 hover:text-gray-900 mb-6 inline-block text-sm">← Back to HR Hub</Link>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Part-Time HR Jobs UK</h1>
            <p className="text-xl text-white/80 mb-8">
              Flexible HR Director and CHRO roles for experienced people professionals. Work 1-3 days per week earning £700-£1,300 per day.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/fractional-hr-jobs-uk" className="px-8 py-4 bg-pink-500 text-white font-semibold hover:bg-pink-400 transition-colors">
                Browse {jobCount}+ HR Jobs
              </Link>
              <Link href="/part-time-hr-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors">
                Part-Time HR Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg prose-pink max-w-none">
          <h2>What is a Part-Time HR Role?</h2>
          <p>
            A <strong>part-time HR</strong> role (also known as a fractional HR role) is a senior HR position where an experienced HR Director, CHRO, or People Partner provides strategic people leadership to companies on a <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexible, part-time basis</a>. Rather than committing to a single full-time role, part-time HR professionals typically work with multiple clients, dedicating 1-3 days per week to each engagement.
          </p>
          <p>
            The demand for <strong>part-time HR jobs</strong> in the UK has grown significantly, driven by <a href="https://www.scaleupinstitute.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">scale-ups</a>, SMEs, and PE-backed companies that need senior HR expertise but cannot justify or afford a full-time hire. According to <a href="https://www.cipd.org" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">CIPD research</a>, part-time senior roles have grown 43% since 2020.
          </p>

          <h2>Part-Time HR vs Full-Time HR</h2>
          <p>
            The key difference between a part-time HR professional and a traditional full-time HR Director lies in the engagement model. A full-time HR Director works exclusively for one company, typically earning £120,000-£150,000 annually plus benefits. A <strong>part-time HR Director</strong>, by contrast, works with 2-4 clients simultaneously, charging day rates of £900-£1,100.
          </p>
          <p>
            For many experienced HR leaders, the part-time model offers significant advantages: higher effective hourly earnings, greater variety in work, portfolio diversification, and improved <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">work-life balance</a>. For companies, hiring a part-time HR professional provides access to senior talent at a fraction of the cost of a full-time hire.
          </p>

          <h2>Who Hires Part-Time HR?</h2>
          <p>
            <strong>Part-time HR roles</strong> are most common in the following company types:
          </p>
          <ul>
            <li><strong>Scale-ups (30-150 employees)</strong> - Companies that have outgrown founder-led HR but aren't ready for a full-time CHRO</li>
            <li><strong>VC/PE-backed companies</strong> - <a href="https://www.british-business-bank.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Portfolio companies</a> that need professional HR leadership for growth</li>
            <li><strong>SMEs building HR infrastructure</strong> - Businesses that need to establish proper <a href="https://www.gov.uk/browse/employing-people" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">contracts, policies, and processes</a></li>
            <li><strong>Companies facing complex ER</strong> - Organisations dealing with <a href="https://www.acas.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">tribunals, restructuring, or difficult situations</a></li>
            <li><strong>Startups preparing for fundraising</strong> - Companies needing professional HR for investor due diligence</li>
          </ul>

          <h2>Part-Time HR Salary and Day Rates</h2>
          <p>
            <strong>Part-time HR</strong> compensation in the UK typically ranges from £700 to £1,300 per day, depending on seniority, specialisation, and location. According to <a href="https://www.ons.gov.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS data</a>, London-based roles command premium rates, often paying £950-£1,300 per day for senior HR Directors.
          </p>
          <p>
            A part-time HR Director working 2-3 days per week across multiple clients can realistically earn £120,000-£180,000 annually. The most experienced fractional CHROs with strong networks and <a href="https://www.ipse.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">self-employed expertise</a> can earn significantly more.
          </p>

          <h2>Key Responsibilities</h2>
          <p>Part-time HR responsibilities typically include:</p>
          <ul>
            <li>People strategy development and execution</li>
            <li>Complex <a href="https://www.acas.org.uk/working-with-employees" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">employee relations</a> management</li>
            <li>HR infrastructure building (policies, contracts, HRIS)</li>
            <li>Talent acquisition strategy and senior hiring</li>
            <li>Performance management frameworks</li>
            <li>Culture development and <a href="https://www.cipd.org/uk/knowledge/factsheets/employee-engagement-factsheet" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">engagement</a></li>
            <li><a href="https://www.gov.uk/employment-law" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">UK employment law</a> compliance</li>
            <li>Board reporting and investor relations</li>
          </ul>

          <h2>How to Find Part-Time HR Roles</h2>
          <p>
            Finding <strong>part-time HR opportunities</strong> requires a different approach than traditional job search. Key sources include:
          </p>
          <ul>
            <li><strong>Specialist platforms:</strong> <Link href="/fractional-hr-jobs-uk" className="text-pink-600 hover:text-pink-700">Fractional Quest</Link>, interim HR networks</li>
            <li><strong>VC/PE networks:</strong> Portfolio company HR referrals</li>
            <li><strong>Professional networks:</strong> <a href="https://www.cipd.org" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">CIPD</a>, <a href="https://www.shrm.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">SHRM</a>, <a href="https://www.iod.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IoD</a>, HR Directors forums, LinkedIn</li>
            <li><strong>Referrals:</strong> Other founders, CEOs, and fractional executives</li>
          </ul>
        </div>
      </article>

      {/* Latest Jobs */}
      {jobs.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Part-Time HR Jobs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {jobs.map((job: any) => (
                <Link key={job.id} href={`/job/${job.slug}`} className="bg-white rounded-xl p-6 border hover:border-pink-500 hover:shadow-lg transition-all">
                  <h3 className="font-bold text-gray-900 mb-2">{job.title}</h3>
                  <p className="text-gray-600 mb-2">{job.company_name}</p>
                  <p className="text-gray-600 text-sm">{job.location}</p>
                  {job.compensation && <p className="text-pink-600 font-semibold mt-2">{job.compensation}</p>}
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/fractional-hr-jobs-uk" className="px-8 py-4 bg-pink-500 text-white font-semibold hover:bg-pink-400 transition-colors inline-block">
                View All HR Jobs →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Related Pages */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Pages</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/fractional-hr" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="font-semibold text-gray-900">Complete HR Guide →</span>
            </Link>
            <Link href="/fractional-hr-jobs-uk" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="font-semibold text-gray-900">All HR Jobs UK →</span>
            </Link>
            <Link href="/fractional-hr-salary" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="font-semibold text-gray-900">HR Salary Guide →</span>
            </Link>
            <Link href="/part-time-hr-jobs-uk" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="font-semibold text-gray-900">Part-Time Jobs →</span>
            </Link>
            <Link href="/fractional-hr-vs-full-time" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="font-semibold text-gray-900">vs Full-Time →</span>
            </Link>
            <Link href="/what-is-fractional-hr" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="font-semibold text-gray-900">What is Fractional HR? →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
