import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { RoleNews } from '@/components/RoleNews'
import { RoleContentHub } from '@/components/RoleContentHub'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CPO Jobs UK | Part-Time Chief Product Officer Roles',
  description: 'Fractional CPO jobs UK - Find part-time Chief Product Officer positions paying £800-£1,300/day. Browse live CPO roles for experienced product leaders. Remote & hybrid available.',
  keywords: 'fractional cpo jobs, fractional cpo jobs uk, part time cpo, part-time chief product officer, cpo part time, fractional cpo opportunities, fractional product jobs, head of product part time',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cpo-jobs-uk',
  },
  openGraph: {
    title: 'Fractional CPO Jobs UK | Part-Time Chief Product Officer Roles',
    description: 'Fractional CPO jobs UK - Find part-time CPO positions paying £800-£1,300/day. Remote & hybrid available.',
    images: ['/images/fractional-cpo-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-cpo-jobs-uk',
  },
}

async function getCPOStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Product' OR title ILIKE '%CPO%' OR title ILIKE '%Chief Product%')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Product' OR title ILIKE '%CPO%' OR title ILIKE '%Chief Product%') AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 24, remoteCount: 12 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND role_category = 'Product' AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 8
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO
async function getCPOJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week,
        description_snippet
      FROM jobs
      WHERE is_active = true AND role_category = 'Product'
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

const CPO_FAQS = [
  {
    question: 'What is a Fractional CPO?',
    answer: 'A Fractional CPO (Chief Product Officer) is an experienced product leader who works with companies on a part-time basis. They define product vision, strategy, and roadmaps, mentor product teams, and ensure product-market fit without the cost of a full-time executive.',
  },
  {
    question: 'How much do Fractional CPO jobs pay in the UK?',
    answer: 'Fractional CPO day rates in the UK generally range from £800 to £1,300 per day. Rates depend on the stage of the company (Seed vs Series B) and the complexity of the product challenges.',
  },
  {
    question: 'What types of companies hire Fractional CPOs?',
    answer: 'Early-stage startups often hire Fractional CPOs to set the initial product direction before a full-time hire is affordable. Scale-ups use them to professionalise their product function, implement processes, and mentor junior PMs.',
  },
  {
    question: 'Do Fractional CPOs work remotely?',
    answer: 'Yes, product leadership is well-suited to remote work. Many Fractional CPOs work remotely or in a hybrid model, using tools like Jira, Linear, and Figma to manage strategy and teams effectively.',
  },
]

export default async function FractionalCpoJobsUkPage() {
  const [stats, companies, jobs] = await Promise.all([
    getCPOStats(),
    getFeaturedCompanies(),
    getCPOJobs()
  ])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-800/80 to-indigo-900/70" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Product Leadership
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional CPO Jobs UK
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Part-time Chief Product Officer roles for experienced product leaders.
                Shape product vision and strategy for 1-3 days a week.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.total}+</div>
                  <div className="text-white/80 text-sm">Live Roles</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">£1,050</div>
                  <div className="text-white/80 text-sm">Avg Day Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.remoteCount}</div>
                  <div className="text-white/80 text-sm">Remote</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#jobs" className="px-8 py-4 bg-white text-purple-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Browse Jobs
                </Link>
                <Link href="/fractional-product-manager-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  PM Jobs
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
          <RoleCalculator role="cpo" /> 
        </div>
      </section>

      {/* JOBS SECTION */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional CPO Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional CPO jobs in the UK</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.slice(0, 9).map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/fractional-job/${job.slug}`} className="block">
                  <div className="relative h-40 bg-gradient-to-br from-purple-600 to-indigo-700">
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-black">CPO</div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-lg line-clamp-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                        {job.title}
                      </h3>
                    </div>
                     <div className="absolute top-3 left-3 flex gap-2">
                      {getDaysAgo(job.posted_date) !== undefined && getDaysAgo(job.posted_date)! <= 3 && (
                        <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
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
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 hover:text-purple-700">
                      View fractional CPO job →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/fractional-jobs-uk?department=Product"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors"
            >
              View All {stats.total}+ Fractional CPO Jobs UK
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
              A Guide to <span className="text-purple-600">Fractional CPO Jobs UK</span>
            </h2>
            <div className="w-24 h-1 bg-purple-900"></div>
          </div>
          
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional CPO jobs</strong> are transforming how UK companies build and scale products. A part-time Chief Product Officer brings the strategic clarity of a seasoned executive—defining roadmaps, mentoring teams, and driving product-market fit—without the overhead of a full-time leader.
            </p>
            
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">The Role of a Fractional CPO</h3>
            <p>
              Many startups and SMEs have talented individual contributors but lack strategic product leadership. A <strong className="font-semibold">Fractional CPO</strong> fills this void by translating business goals into actionable product strategies. They are particularly valuable for companies at the Seed to Series B stage, where the "product" is evolving rapidly but a £160k+ full-time CPO isn't yet justifiable.
            </p>

             <div className="bg-gray-50 p-8 my-10 border-l-4 border-purple-900">
              <p className="text-xl font-semibold text-gray-900 mb-0">"Fractional CPOs help founders move from 'founder-led product' to professional product management, establishing the processes that allow scaling."</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">What You'll Do</h3>
            <ul className="space-y-3">
              <li><strong>Product Vision & Strategy:</strong> Defining the 'North Star' and ensuring alignment across stakeholders.</li>
              <li><strong>Team Building & Mentoring:</strong> Hiring key product roles and coaching existing PMs to level up their skills.</li>
              <li><strong>Process Implementation:</strong> Introducing agile workflows, discovery frameworks, and prioritisation methods (e.g., RICE, ICE).</li>
              <li><strong>Market Analysis:</strong> Conducting deep competitor research and customer discovery to inform the roadmap.</li>
            </ul>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Demand in the UK Market</h3>
            <p>
              The UK's vibrant tech ecosystem, particularly in London, Manchester, and Cambridge, has created a robust market for <Link href="/fractional-cpo-jobs-uk" className="text-purple-600 hover:text-purple-800 underline">fractional product leaders</Link>. B2B SaaS, FinTech, and HealthTech are leading sectors. As companies scrutinise headcount costs, the fractional model offers a high-impact, flexible alternative to permanent hiring.
            </p>
          </article>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="Product" title="Latest Product Leadership News" limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional CPO Jobs</h2>
          </div>
          <FAQ items={CPO_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-300 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Find Your Next<br /><span className="text-purple-400">Fractional CPO Role</span></h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking product leadership.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-purple-900 font-bold uppercase tracking-wider hover:bg-purple-50 transition-colors">Create Profile</Link>
          </div>
        </div>
      </section>

      <RoleContentHub currentRole="product" />
    </div>
  )
}
