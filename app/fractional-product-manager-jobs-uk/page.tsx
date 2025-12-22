import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { RoleNews } from '@/components/RoleNews'
import { RoleContentHub } from '@/components/RoleContentHub'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Product Manager Jobs UK | Part-Time PM Roles',
  description: 'Fractional Product Manager jobs UK - Find part-time Product Manager positions paying £400-£700/day. Browse live PM roles for experienced product professionals. Remote & hybrid available.',
  keywords: 'fractional product manager jobs, fractional pm jobs uk, part time product manager, fractional product roles, part time pm jobs, freelance product manager',
  alternates: {
    canonical: 'https://fractional.quest/fractional-product-manager-jobs-uk',
  },
  openGraph: {
    title: 'Fractional Product Manager Jobs UK | Part-Time PM Roles',
    description: 'Fractional Product Manager jobs UK - Find part-time PM positions paying £400-£700/day. Remote & hybrid available.',
    images: ['/images/fractional-product-manager-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-product-manager-jobs-uk',
  },
}

async function getPMStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Product' OR title ILIKE '%Product Manager%' OR title ILIKE '%PM%')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Product' OR title ILIKE '%Product Manager%' OR title ILIKE '%PM%') AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 35, remoteCount: 18 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND (role_category = 'Product' OR title ILIKE '%Product Manager%') AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 8
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO
async function getPMJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week,
        description_snippet
      FROM jobs
      WHERE is_active = true AND (role_category = 'Product' OR title ILIKE '%Product Manager%' OR title ILIKE '%PM%')
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

const PM_FAQS = [
  {
    question: 'What is a Fractional Product Manager?',
    answer: 'A Fractional Product Manager (PM) is an experienced product professional who manages a product or feature set on a part-time basis. They conduct user research, define requirements, and work with engineering to deliver value, typically for early-stage startups or specific projects.',
  },
  {
    question: 'How much do Fractional PM jobs pay?',
    answer: 'Fractional Product Manager day rates in the UK typically range from £400 to £750 per day. Senior PMs or "Head of Product" roles command higher rates.',
  },
  {
    question: 'What is the difference between a Fractional PM and a CPO?',
    answer: 'A Fractional CPO focuses on high-level strategy, team structure, and vision. A Fractional PM is more hands-on, focusing on execution, backlog management, and delivery of specific product initiatives.',
  },
  {
    question: 'Are these roles remote?',
    answer: 'Yes, product management is highly suited to remote work, with tools like Linear, Jira, and Figma enabling asynchronous collaboration. Most roles are remote-first or hybrid.',
  },
]

export default async function FractionalProductManagerJobsUkPage() {
  const [stats, companies, jobs] = await Promise.all([
    getPMStats(),
    getFeaturedCompanies(),
    getPMJobs()
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
          <div className="absolute inset-0 bg-gradient-to-r from-purple-800/90 via-purple-700/80 to-indigo-800/70" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Product Management
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional Product Manager Jobs UK
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Part-time Product Manager roles for experienced PMs.
                Manage roadmaps and delivery for 1-3 days a week.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.total}+</div>
                  <div className="text-white/80 text-sm">Live Roles</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">£550</div>
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
                <Link href="/fractional-cpo-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  CPO Jobs
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
          <RoleCalculator role="cmo" /> 
        </div>
      </section>

      {/* JOBS SECTION */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional PM Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional PM jobs in the UK</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.slice(0, 9).map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/fractional-job/${job.slug}`} className="block">
                  <div className="relative h-40 bg-gradient-to-br from-purple-600 to-indigo-600">
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-black">PM</div>
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
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-700 hover:text-purple-800">
                      View fractional PM job →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/fractional-jobs-uk?department=Product"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-700 text-white font-bold rounded-lg hover:bg-purple-800 transition-colors"
            >
              View All {stats.total}+ Fractional PM Jobs UK
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
              A Guide to <span className="text-purple-700">Fractional PM Jobs UK</span>
            </h2>
            <div className="w-24 h-1 bg-purple-700"></div>
          </div>
          
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional Product Manager jobs</strong> are perfect for experienced PMs who want to work on diverse projects. Startups often need the rigour of professional product management to launch their MVP or iterate on feedback, but don't need a full-time hire yet.
            </p>
            
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Hands-On Delivery</h3>
            <p>
              Unlike C-suite roles, a <strong className="font-semibold">Fractional PM</strong> is deeply operational. You're writing user stories, managing the backlog, running stand-ups, and conducting user interviews. It's about getting stuff shipped. This is a high-value role for companies that have engineering resources but lack product direction.
            </p>

             <div className="bg-gray-50 p-8 my-10 border-l-4 border-purple-700">
              <p className="text-xl font-semibold text-gray-900 mb-0">"Fractional PMs bring order to chaos, turning vague founder ideas into shipping code."</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Why It Works</h3>
            <p>
              For many early-stage companies, the product workload isn't consistent. There are bursts of intense activity (discovery, launch) followed by maintenance. A <Link href="/fractional-product-manager-jobs-uk" className="text-purple-700 hover:text-purple-800 underline">fractional PM</Link> allows companies to pay for the intensity only when they need it, scaling their product function efficiently.
            </p>
          </article>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="Product" title="Latest Product News" limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional PM Jobs</h2>
          </div>
          <FAQ items={PM_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-300 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Find Your Next<br /><span className="text-purple-100">Fractional PM Role</span></h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking product talent.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-purple-800 font-bold uppercase tracking-wider hover:bg-purple-50 transition-colors">Create Profile</Link>
          </div>
        </div>
      </section>

      <RoleContentHub currentRole="product" /> 
      {/* Mapped to Product */}
    </div>
  )
}
