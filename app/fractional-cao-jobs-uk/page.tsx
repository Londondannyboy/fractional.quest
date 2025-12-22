import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { RoleNews } from '@/components/RoleNews'
import { RoleContentHub } from '@/components/RoleContentHub'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CAO Jobs UK | Part-Time Chief Analytics Officer Roles',
  description: 'Fractional CAO jobs UK - Find part-time Chief Analytics Officer positions paying £900-£1,400/day. Browse live CAO roles for experienced analytics leaders. Remote & hybrid available.',
  keywords: 'fractional cao jobs, fractional cao jobs uk, part time cao, part-time chief analytics officer, cao part time, fractional analytics opportunities, fractional data science jobs',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cao-jobs-uk',
  },
  openGraph: {
    title: 'Fractional CAO Jobs UK | Part-Time Chief Analytics Officer Roles',
    description: 'Fractional CAO jobs UK - Find part-time CAO positions paying £900-£1,400/day. Remote & hybrid available.',
    images: ['/images/fractional-cao-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-cao-jobs-uk',
  },
}

async function getCAOStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Data' OR title ILIKE '%Analytics%' OR title ILIKE '%CAO%')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Data' OR title ILIKE '%Analytics%' OR title ILIKE '%CAO%') AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 14, remoteCount: 7 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND (role_category = 'Data' OR title ILIKE '%Analytics%') AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 8
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO
async function getCAOJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week,
        description_snippet
      FROM jobs
      WHERE is_active = true AND (role_category = 'Data' OR title ILIKE '%Analytics%' OR title ILIKE '%CAO%')
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 12
    `
    return jobs as any[]
  } catch {
    return []
  }
}

function getDaysAgo(postedDate: string | null): number | undefined {
  if (!postedDate) return undefined
  const posted = new Date(postedDate)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - posted.getTime())
  return Math.floor(diffTime / (1000 * 60 * 60 * 24))
}

const CAO_FAQS = [
  {
    question: 'What is a Fractional CAO?',
    answer: 'A Fractional CAO (Chief Analytics Officer) is an experienced analytics leader who helps companies extract value from their data. They build analytics capabilities, data science teams, and predictive models on a part-time basis.',
  },
  {
    question: 'How does a CAO differ from a CDO?',
    answer: 'A CDO (Chief Data Officer) typically focuses on data governance, management, and infrastructure (the "defence"). A CAO focuses on insights, modelling, and business value generation (the "offence"). However, in fractional roles, these responsibilities often overlap.',
  },
  {
    question: 'How much do Fractional CAO jobs pay?',
    answer: 'Fractional CAO roles in the UK typically pay £900-£1,400 per day. The high rate reflects the scarcity of senior leaders who can bridge the gap between complex data science and business strategy.',
  },
  {
    question: 'What skills are required?',
    answer: 'Deep expertise in data science, machine learning, and BI is essential, coupled with strong business acumen. Fractional CAOs must be able to translate technical insights into actionable business strategies for the C-suite.',
  },
]

export default async function FractionalCaoJobsUkPage() {
  const [stats, companies, jobs] = await Promise.all([
    getCAOStats(),
    getFeaturedCompanies(),
    getCAOJobs()
  ])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/90 via-cyan-800/80 to-blue-900/70" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Analytics Leadership
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional CAO Jobs UK
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Part-time Chief Analytics Officer roles for experienced data leaders.
                Drive business insights and predictive strategy for 1-3 days a week.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.total}+</div>
                  <div className="text-white/80 text-sm">Live Roles</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">£1,150</div>
                  <div className="text-white/80 text-sm">Avg Day Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.remoteCount}</div>
                  <div className="text-white/80 text-sm">Remote</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#jobs" className="px-8 py-4 bg-white text-cyan-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Browse Jobs
                </Link>
                <Link href="/fractional-cdo-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  CDO Jobs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8 text-center">
             <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Calculator</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">Earnings Calculator</h2>
          </div>
          <RoleCalculator role="cto" /> 
        </div>
      </section>

      {/* JOBS SECTION */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional CAO Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional CAO jobs in the UK</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.slice(0, 9).map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/fractional-job/${job.slug}`} className="block">
                  <div className="relative h-40 bg-gradient-to-br from-cyan-600 to-blue-700">
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-black">CAO</div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-lg line-clamp-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                        {job.title}
                      </h3>
                    </div>
                     <div className="absolute top-3 left-3 flex gap-2">
                      {getDaysAgo(job.posted_date) !== undefined && getDaysAgo(job.posted_date)! <= 3 && (
                        <span className="bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          New
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 font-medium mb-2">{job.company_name}</p>
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        UK
                      </span>
                      {job.compensation && (
                        <span className="font-semibold text-gray-900">{job.compensation}</span>
                      )}
                    </div>
                     {job.description_snippet && (
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">{job.description_snippet}</p>
                    )}
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-600 hover:text-cyan-700">
                      View fractional CAO job →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/fractional-jobs-uk?department=Data"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-700 transition-colors"
            >
              View All {stats.total}+ Fractional CAO Jobs UK
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-4 block">The Guide</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              A Guide to <span className="text-cyan-600">Fractional CAO Jobs UK</span>
            </h2>
            <div className="w-24 h-1 bg-cyan-900"></div>
          </div>
          
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional CAO jobs</strong> are for leaders who speak the language of both data and business. A part-time Chief Analytics Officer unlocks the latent value in an organisation's data, building the predictive models and BI capabilities that drive competitive advantage.
            </p>
            
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">From Data to Insights</h3>
            <p>
              While a CDO might focus on keeping the data clean and safe, a <strong className="font-semibold">Fractional CAO</strong> focuses on putting that data to work. They lead data science teams, implement advanced analytics, and help the C-suite make evidence-based decisions. For mid-market companies, hiring a fractional CAO is a cost-effective way to access high-end data science leadership.
            </p>

             <div className="bg-gray-50 p-8 my-10 border-l-4 border-cyan-900">
              <p className="text-xl font-semibold text-gray-900 mb-0">"A Fractional CAO transforms raw data into a strategic roadmap, identifying new revenue streams and operational efficiencies."</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Key Responsibilities</h3>
            <ul className="space-y-3">
              <li><strong>Advanced Analytics Strategy:</strong> Identifying high-impact use cases for data science (e.g., churn prediction, demand forecasting).</li>
              <li><strong>Team Building:</strong> Recruiting and mentoring data scientists and analysts.</li>
              <li><strong>BI Implementation:</strong> Deploying dashboards and reporting tools (Tableau, Looker, PowerBI) that democratise data access.</li>
              <li><strong>AI & ML Deployment:</strong> Overseeing the practical application of machine learning models to solve business problems.</li>
            </ul>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">The Future of the Role</h3>
            <p>
              With the democratisation of AI, the role of the CAO is evolving. <Link href="/fractional-cao-jobs-uk" className="text-cyan-600 hover:text-cyan-800 underline">Fractional Analytics Officers</Link> are increasingly expected to guide companies on GenAI adoption, ethics, and value creation, making them pivotal players in the modern C-suite.
            </p>
          </article>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="Engineering" title="Latest Analytics News" limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional CAO Jobs</h2>
          </div>
          <FAQ items={CAO_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-cyan-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Find Your Next<br /><span className="text-cyan-400">Fractional CAO Role</span></h2>
          <p className="text-xl text-cyan-100 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking analytics leadership.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-cyan-900 font-bold uppercase tracking-wider hover:bg-cyan-50 transition-colors">Create Profile</Link>
          </div>
        </div>
      </section>
      
       <RoleContentHub currentRole="cto" /> 
       {/* Mapped to CTO for now or could be CDO/Data if available */}
    </div>
  )
}
