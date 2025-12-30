import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { createDbQuery } from '@/lib/db'
import { ServerJobGrid } from '@/components/ServerJobGrid'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { WebPageSchema, LastUpdatedBadge } from '@/components/WebPageSchema'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Remote Fractional Jobs UK 2025',
  description: 'Remote fractional jobs UK. Work from home CFO, CMO, CTO roles. £800-£1,500/day.',
  keywords: 'remote fractional jobs, remote fractional, fractional remote jobs, work from home fractional, remote fractional cfo, remote fractional cmo, remote fractional cto, remote executive jobs, remote director jobs, work from home executive, remote fractional jobs uk, hybrid fractional jobs',
  alternates: {
    canonical: 'https://fractional.quest/remote-fractional-jobs',
  },
  openGraph: {
    title: 'Remote Fractional Jobs UK | Work From Home Executive Roles 2025',
    description: 'Remote fractional jobs UK. Find work from home fractional executive positions. £800-£1,500/day. Fully remote & hybrid.',
    url: 'https://fractional.quest/remote-fractional-jobs',
  },
}

async function getRemoteStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, cfoResult, ctoResult, hrResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (is_remote = true OR workplace_type = 'Remote' OR workplace_type = 'Hybrid')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'Finance' AND (is_remote = true OR workplace_type = 'Remote')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'Technology' AND (is_remote = true OR workplace_type = 'Remote')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'HR' AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      cfo: parseInt((cfoResult[0] as any)?.count || '0'),
      cto: parseInt((ctoResult[0] as any)?.count || '0'),
      hr: parseInt((hrResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 120, cfo: 25, cto: 35, hr: 18 }
  }
}

async function getRemoteJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT id, slug, title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, description_snippet
      FROM jobs
      WHERE is_active = true AND (is_remote = true OR workplace_type = 'Remote' OR workplace_type = 'Hybrid')
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 6
    `
    return jobs as any[]
  } catch (error) {
    return []
  }
}

const REMOTE_FAQS = [
  {
    question: 'Can fractional executives work remotely?',
    answer: 'Yes, many fractional executive roles are now fully remote or hybrid. Strategic work like financial modelling, board reporting, marketing strategy, and technology planning can be done remotely. Some activities (board meetings, team workshops, sensitive conversations) may require occasional on-site presence. A typical model is 1-2 days remote with monthly on-site visits.'
  },
  {
    question: 'What types of remote fractional jobs are available?',
    answer: 'The most common remote fractional roles include: Remote Fractional CFO (financial strategy, reporting, fundraising), Remote Fractional CTO (technology strategy, architecture, team leadership), Remote Fractional CMO (marketing strategy, digital, brand), Remote Fractional HR Director (people strategy, policies, remote culture). Technology and finance roles have the highest remote availability.'
  },
  {
    question: 'Do remote fractional executives earn less than on-site?',
    answer: 'Generally no. Remote fractional executives command similar day rates (£800-£1,500/day) to their on-site counterparts. Some London-based companies may pay slightly higher rates, but the difference is typically offset by the lack of commute time and increased flexibility. Remote work often allows fractional executives to work with more clients.'
  },
  {
    question: 'What tools do remote fractional executives use?',
    answer: 'Remote fractional executives typically use: video conferencing (Zoom, Teams, Google Meet), project management (Asana, Monday, Notion), communication (Slack, Teams), finance tools (Xero, QuickBooks, Excel), and industry-specific platforms. Strong digital proficiency is essential for remote fractional work.'
  },
  {
    question: 'How do I find remote fractional jobs?',
    answer: 'Remote fractional jobs can be found through: specialist fractional platforms like Fractional Quest, LinkedIn (filter for remote), executive networks, VC/PE portfolio connections, and referrals. When applying, emphasise your remote work experience and the tools you use to collaborate effectively at a distance.'
  },
]

export default async function RemoteFractionalJobsPage() {
  const [stats, jobs] = await Promise.all([getRemoteStats(), getRemoteJobs()])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Remote Fractional Jobs UK | Work From Home Executive Roles"
        description="Remote fractional jobs UK - Find work from home fractional executive positions paying £800-£1,500/day"
        url="https://fractional.quest/remote-fractional-jobs"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-emerald-50 to-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Remote fractional jobs background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/" className="inline-flex items-center text-gray-500 hover:text-gray-900 mb-8 transition-colors text-sm font-medium">
            <span className="mr-2">←</span> Back to Home
          </Link>
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                Work From Anywhere
              </span>
              <LastUpdatedBadge date={lastUpdatedDate} className="text-gray-500" />
            </div>
            <h1 className="font-editorial text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Remote Fractional Jobs UK
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mb-8">
              <strong>Remote fractional</strong> executive opportunities across CFO, CTO, CMO, HR & more.
              Work from home fractional roles paying £800-£1,500/day. Fully remote and hybrid options available.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#jobs" className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors shadow-lg">
                Browse Remote Jobs
              </Link>
              <Link href="#roles" className="px-8 py-4 border border-gray-200 text-gray-900 font-bold rounded-lg hover:bg-gray-50 transition-colors">
                Remote Role Types
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-10 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-editorial text-3xl font-bold text-gray-900">{stats.total}+</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-1">Remote Roles</div>
            </div>
            <div>
              <div className="font-editorial text-3xl font-bold text-gray-900">{stats.cfo}</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-1">Remote CFO</div>
            </div>
            <div>
              <div className="font-editorial text-3xl font-bold text-gray-900">{stats.cto}</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-1">Remote CTO</div>
            </div>
            <div>
              <div className="font-editorial text-3xl font-bold text-gray-900">{stats.hr}</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-1">Remote HR</div>
            </div>
          </div>
        </div>
      </section>

      {/* Remote Role Types */}
      <section id="roles" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">Browse by Role</span>
            <h2 className="font-editorial text-3xl md:text-4xl font-bold text-gray-900">Remote Fractional Roles by Function</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/fractional-cfo-jobs-remote" className="p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-emerald-500 hover:shadow-lg transition-all group">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600">Remote Fractional CFO</h3>
              <p className="text-gray-600 text-sm mb-3">Financial strategy, reporting, fundraising support—all remote</p>
              <div className="text-emerald-600 font-semibold text-sm">{stats.cfo}+ roles available →</div>
            </Link>

            <Link href="/fractional-cto-jobs-uk" className="p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-emerald-500 hover:shadow-lg transition-all group">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600">Remote Fractional CTO</h3>
              <p className="text-gray-600 text-sm mb-3">Technology leadership, architecture, engineering teams</p>
              <div className="text-emerald-600 font-semibold text-sm">{stats.cto}+ roles available →</div>
            </Link>

            <Link href="/fractional-cmo-jobs-uk" className="p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-emerald-500 hover:shadow-lg transition-all group">
              <div className="text-3xl mb-4">📣</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600">Remote Fractional CMO</h3>
              <p className="text-gray-600 text-sm mb-3">Marketing strategy, digital, brand—highly remote-friendly</p>
              <div className="text-emerald-600 font-semibold text-sm">Browse CMO roles →</div>
            </Link>

            <Link href="/fractional-hr-jobs-remote" className="p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-emerald-500 hover:shadow-lg transition-all group">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600">Remote Fractional HR Director</h3>
              <p className="text-gray-600 text-sm mb-3">People strategy, policies, remote culture building</p>
              <div className="text-emerald-600 font-semibold text-sm">{stats.hr}+ roles available →</div>
            </Link>

            <Link href="/fractional-coo" className="p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-emerald-500 hover:shadow-lg transition-all group">
              <div className="text-3xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600">Remote Fractional COO</h3>
              <p className="text-gray-600 text-sm mb-3">Operations leadership, process design, scaling</p>
              <div className="text-emerald-600 font-semibold text-sm">Browse COO roles →</div>
            </Link>

            <Link href="/fractional-product" className="p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-emerald-500 hover:shadow-lg transition-all group">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600">Remote Fractional CPO</h3>
              <p className="text-gray-600 text-sm mb-3">Product strategy, roadmaps, product team leadership</p>
              <div className="text-emerald-600 font-semibold text-sm">Browse Product roles →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Jobs Board */}
      <section id="jobs" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ServerJobGrid
            jobs={jobs}
            roleCategory="Executive"
            ctaLink="/fractional-jobs-uk?remote=true"
            ctaText={`View All ${stats.total}+ Remote Jobs`}
            maxJobs={12}
            showViewAll={true}
          />
        </div>
      </section>

      {/* Editorial Content */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">The Guide</span>
            <h2 className="font-editorial text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              The Rise of<br /><span className="text-emerald-600">Remote Fractional Work</span>
            </h2>
            <div className="w-24 h-1 bg-gray-900"></div>
          </div>

          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Remote fractional jobs</strong> have transformed how companies access executive talent. Since 2020, fully remote and hybrid fractional arrangements have become the norm—allowing executives to work with companies across the UK and internationally without geographical constraints.
            </p>

            <h3 className="font-editorial text-2xl font-bold text-gray-900 mt-12 mb-4">What Are Remote Fractional Jobs?</h3>
            <p>
              <strong>Remote fractional jobs</strong> are part-time executive roles (CFO, CTO, CMO, HR Director, etc.) that can be performed primarily or entirely from home. The fractional model—working 1-3 days per week with each client—is naturally suited to remote work, as strategic leadership doesn't require daily on-site presence.
            </p>
            <p>
              <strong>Remote fractional</strong> executives use video conferencing, cloud-based tools, and asynchronous communication to deliver the same value as on-site counterparts. Many clients prefer the model: they get senior expertise without the overhead of office space, and can access talent from anywhere in the UK.
            </p>

            <h3 className="font-editorial text-2xl font-bold text-gray-900 mt-12 mb-4">Which Fractional Roles Work Best Remotely?</h3>
            <p>
              Some fractional functions are more suited to <strong>remote fractional jobs</strong> than others:
            </p>
            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
              <div className="bg-white p-6 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-emerald-600 mb-3">Highly Remote-Friendly</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li><strong>Fractional CTO:</strong> Tech leadership is inherently digital</li>
                  <li><strong>Fractional CMO:</strong> Digital marketing, strategy, analytics</li>
                  <li><strong>Fractional CFO:</strong> Financial modelling, reporting, fundraising</li>
                  <li><strong>Fractional CPO:</strong> Product strategy, roadmaps, analytics</li>
                </ul>
              </div>
              <div className="bg-white p-6 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-gray-700 mb-3">Hybrid Preferred</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li><strong>Fractional HR Director:</strong> Some on-site for culture/ER</li>
                  <li><strong>Fractional COO:</strong> Operations may need presence</li>
                  <li><strong>Fractional Sales Director:</strong> Team coaching benefits from F2F</li>
                  <li><strong>Fractional MD:</strong> Leadership presence matters</li>
                </ul>
              </div>
            </div>

            <h3 className="font-editorial text-2xl font-bold text-gray-900 mt-12 mb-4">Benefits of Remote Fractional Work</h3>
            <ul className="space-y-3">
              <li><strong>Geographic freedom:</strong> Work with clients anywhere in the UK (or globally)</li>
              <li><strong>No commute:</strong> More productive time, better work-life balance</li>
              <li><strong>Portfolio flexibility:</strong> Easier to manage multiple clients when remote</li>
              <li><strong>Cost savings:</strong> No travel expenses, home office deductions</li>
              <li><strong>Wider talent pool:</strong> Companies can access the best talent, not just local</li>
            </ul>

            <h3 className="font-editorial text-2xl font-bold text-gray-900 mt-12 mb-4">Remote Fractional Day Rates</h3>
            <p>
              <strong>Remote fractional</strong> executives typically earn the same day rates as their on-site counterparts:
            </p>
            <ul className="space-y-2">
              <li><strong>Remote Fractional CFO:</strong> £1,000-£1,400/day</li>
              <li><strong>Remote Fractional CTO:</strong> £1,000-£1,500/day</li>
              <li><strong>Remote Fractional CMO:</strong> £900-£1,300/day</li>
              <li><strong>Remote Fractional HR Director:</strong> £900-£1,100/day</li>
            </ul>
            <p>
              Some London-focused roles may offer a slight premium, but remote work often enables fractional executives to take on more clients, increasing overall earnings.
            </p>

            <h3 className="font-editorial text-2xl font-bold text-gray-900 mt-12 mb-4">Tools for Remote Fractional Success</h3>
            <p>
              Successful <strong>remote fractional</strong> executives master these tool categories:
            </p>
            <ul className="space-y-2">
              <li><strong>Video:</strong> Zoom, Google Meet, Microsoft Teams, Loom</li>
              <li><strong>Communication:</strong> Slack, Teams, email, WhatsApp</li>
              <li><strong>Documents:</strong> Google Workspace, Microsoft 365, Notion</li>
              <li><strong>Project management:</strong> Asana, Monday, Linear, Jira</li>
              <li><strong>Finance:</strong> Xero, QuickBooks, Excel, Google Sheets</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">Earnings</span>
            <h2 className="font-editorial text-3xl md:text-4xl font-bold text-gray-900">Remote Fractional Earnings Calculator</h2>
          </div>
          <RoleCalculator role="cfo" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">FAQ</span>
            <h2 className="font-editorial text-3xl md:text-4xl font-bold text-gray-900">Remote Fractional Jobs FAQ</h2>
          </div>
          <FAQ items={REMOTE_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 mb-4 block">Ready?</span>
          <h2 className="font-editorial text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Find Your Next<br /><span className="text-emerald-300">Remote Fractional Role</span>
          </h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Create your profile and get matched with companies seeking remote fractional executives.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-emerald-900 font-bold rounded-lg hover:bg-emerald-50 transition-colors">
              Create Profile
            </Link>
            <Link href="#jobs" className="px-10 py-5 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-emerald-900 transition-colors">
              Browse Remote Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Remote Cluster</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-cfo-jobs-remote" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">Remote CFO Jobs</Link>
              <Link href="/fractional-hr-jobs-remote" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">Remote HR Jobs</Link>
              <Link href="/fractional-cto-jobs-uk" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">Fractional CTO</Link>
              <Link href="/fractional-cmo-jobs-uk" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">Fractional CMO</Link>
              <Link href="/fractional-jobs-uk" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">All Fractional Jobs UK</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
