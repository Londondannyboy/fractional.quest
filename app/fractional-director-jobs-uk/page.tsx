import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { ServerJobGrid } from '@/components/ServerJobGrid'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { WebPageSchema, LastUpdatedBadge } from '@/components/WebPageSchema'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Director Jobs UK',
  description: 'Fractional director jobs UK. HR, Finance, Sales, Ops director roles. £800-£1,500/day.',
  keywords: 'fractional director jobs, fractional director, fractional director jobs uk, part time director, fractional hr director, fractional finance director, fractional sales director, fractional managing director, fractional operations director, interim director, director jobs uk, part time director jobs',
  alternates: {
    canonical: 'https://fractional.quest/fractional-director-jobs-uk',
  },
  openGraph: {
    title: 'Fractional Director Jobs UK | Part-Time Director Roles 2025',
    description: 'Fractional director jobs UK. Find part-time director positions across HR, Finance, Sales & Operations. £800-£1,500/day.',
    url: 'https://fractional.quest/fractional-director-jobs-uk',
  },
}

async function getDirectorStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (title ILIKE '%director%' OR role_category IN ('HR', 'Finance', 'Sales', 'Marketing', 'Operations'))`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (title ILIKE '%director%' OR role_category IN ('HR', 'Finance', 'Sales', 'Marketing', 'Operations')) AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 85, remoteCount: 32 }
  }
}

async function getDirectorJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week,
        description_snippet
      FROM jobs
      WHERE is_active = true AND (title ILIKE '%director%' OR role_category IN ('HR', 'Finance', 'Sales', 'Marketing', 'Operations'))
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 12
    `
    return jobs as any[]
  } catch {
    return []
  }
}

const DIRECTOR_FAQS = [
  {
    question: 'What is a fractional director?',
    answer: 'A fractional director is an experienced executive who provides part-time leadership to companies, typically working 1-3 days per week. Unlike full-time directors, fractional directors work with multiple clients simultaneously, bringing diverse experience and senior expertise at a fraction of the full-time cost. Common roles include fractional HR director, fractional finance director, fractional sales director, and fractional operations director.'
  },
  {
    question: 'How much do fractional directors earn in the UK?',
    answer: 'Fractional directors in the UK typically charge £800-£1,500 per day depending on their specialisation and experience. HR directors average £900-£1,100/day, finance directors £1,000-£1,300/day, sales directors £950-£1,200/day, and managing directors £1,100-£1,500/day. Working 2-3 days per week across multiple clients, fractional directors can earn £150,000-£300,000+ annually.'
  },
  {
    question: 'What types of fractional director roles are available?',
    answer: 'The most common fractional director roles include: Fractional HR Director (people strategy, employment law, talent), Fractional Finance Director (FP&A, fundraising, reporting), Fractional Sales Director (revenue growth, sales teams, CRM), Fractional Marketing Director/CMO (brand, demand gen, digital), Fractional Operations Director (processes, efficiency, scaling), and Fractional Managing Director (overall business leadership).'
  },
  {
    question: 'Who hires fractional directors?',
    answer: 'Fractional directors are typically hired by: startups and scale-ups (Series A-C) needing senior leadership without full-time cost, SMEs (£2-50m revenue) requiring specialist expertise, PE/VC portfolio companies needing to strengthen leadership teams, companies in transition (M&A, turnaround, rapid growth), and businesses with interim leadership gaps.'
  },
  {
    question: 'What is the difference between fractional and interim directors?',
    answer: 'Fractional directors work part-time (1-3 days/week) on an ongoing basis, often with multiple clients simultaneously. Interim directors typically work full-time for a single company on a temporary basis (3-12 months), usually covering a leadership gap or transformation project. Fractional is about flexible ongoing support; interim is about temporary full-time coverage.'
  },
]

export default async function FractionalDirectorJobsPage() {
  const [stats, jobs] = await Promise.all([getDirectorStats(), getDirectorJobs()])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional Director Jobs UK | Part-Time Director Roles"
        description="Find part-time director positions across HR, Finance, Sales & Operations. £800-£1,500/day."
        url="https://fractional.quest/fractional-director-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Director jobs"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/" className="inline-flex items-center text-gray-200 hover:text-white mb-8 transition-colors text-sm font-medium">
            <span className="mr-2">←</span> Back to Home
          </Link>
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-block bg-indigo-500/20 text-indigo-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                Executive Leadership
              </span>
              <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
            </div>
            <h1 className="font-editorial text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Fractional Director Jobs UK
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mb-8">
              <strong>Fractional director</strong> opportunities across HR, Finance, Sales, Marketing & Operations.
              Part-time director roles paying £800-£1,500/day. Work 2-3 days a week with growing UK businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#jobs" className="px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                Browse Director Jobs
              </Link>
              <Link href="#types" className="px-8 py-4 border border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                Director Types
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-50 py-10 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-editorial text-3xl font-bold text-gray-900">{stats.total}+</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-1">Live Director Roles</div>
            </div>
            <div>
              <div className="font-editorial text-3xl font-bold text-gray-900">£1,050</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-1">Avg Day Rate</div>
            </div>
            <div>
              <div className="font-editorial text-3xl font-bold text-gray-900">{stats.remoteCount}</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-1">Remote Roles</div>
            </div>
            <div>
              <div className="font-editorial text-3xl font-bold text-gray-900">6</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-1">Director Types</div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Fractional Directors */}
      <section id="types" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">Browse by Type</span>
            <h2 className="font-editorial text-3xl md:text-4xl font-bold text-gray-900">Types of Fractional Director Jobs</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/fractional-hr-director" className="p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-indigo-500 hover:shadow-lg transition-all group">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600">Fractional HR Director</h3>
              <p className="text-gray-600 text-sm mb-3">People strategy, employment law, talent acquisition, culture development</p>
              <div className="text-indigo-600 font-semibold text-sm">£900-£1,100/day →</div>
            </Link>

            <Link href="/fractional-finance-director-jobs-uk" className="p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-indigo-500 hover:shadow-lg transition-all group">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600">Fractional Finance Director</h3>
              <p className="text-gray-600 text-sm mb-3">FP&A, fundraising, investor relations, financial reporting</p>
              <div className="text-indigo-600 font-semibold text-sm">£1,000-£1,300/day →</div>
            </Link>

            <Link href="/fractional-sales-director-jobs-uk" className="p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-indigo-500 hover:shadow-lg transition-all group">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600">Fractional Sales Director</h3>
              <p className="text-gray-600 text-sm mb-3">Revenue growth, sales team leadership, CRM, go-to-market</p>
              <div className="text-indigo-600 font-semibold text-sm">£950-£1,200/day →</div>
            </Link>

            <Link href="/fractional-cmo-jobs-uk" className="p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-indigo-500 hover:shadow-lg transition-all group">
              <div className="text-3xl mb-4">📣</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600">Fractional Marketing Director</h3>
              <p className="text-gray-600 text-sm mb-3">Brand strategy, demand generation, digital marketing, growth</p>
              <div className="text-indigo-600 font-semibold text-sm">£900-£1,200/day →</div>
            </Link>

            <Link href="/fractional-coo" className="p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-indigo-500 hover:shadow-lg transition-all group">
              <div className="text-3xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600">Fractional Operations Director</h3>
              <p className="text-gray-600 text-sm mb-3">Process optimisation, scaling operations, efficiency</p>
              <div className="text-indigo-600 font-semibold text-sm">£900-£1,200/day →</div>
            </Link>

            <Link href="/fractional-managing-director-jobs-uk" className="p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-indigo-500 hover:shadow-lg transition-all group">
              <div className="text-3xl mb-4">👔</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600">Fractional Managing Director</h3>
              <p className="text-gray-600 text-sm mb-3">Overall business leadership, strategy, P&L ownership</p>
              <div className="text-indigo-600 font-semibold text-sm">£1,100-£1,500/day →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Jobs Board */}
      <section id="jobs" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ServerJobGrid
            jobs={jobs}
            roleCategory="Executive"
            ctaLink="/fractional-jobs-uk"
            ctaText={`View All ${stats.total}+ Director Jobs`}
            maxJobs={12}
            showViewAll={true}
          />
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">Earnings</span>
            <h2 className="font-editorial text-3xl md:text-4xl font-bold text-gray-900">How Much Can You Earn as a Fractional Director?</h2>
          </div>
          <RoleCalculator role="cfo" />
        </div>
      </section>

      {/* Editorial Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">The Guide</span>
            <h2 className="font-editorial text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Everything About<br /><span className="text-indigo-600">Fractional Director Jobs UK</span>
            </h2>
            <div className="w-24 h-1 bg-gray-900"></div>
          </div>

          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional director jobs</strong> represent the future of executive leadership. Experienced directors providing strategic guidance to multiple companies on a part-time basis—delivering senior expertise without the full-time cost or commitment.
            </p>

            <h3 className="font-editorial text-2xl font-bold text-gray-900 mt-12 mb-4">What is a Fractional Director?</h3>
            <p>
              A <strong>fractional director</strong> is a senior executive who works with companies on a part-time, flexible basis—typically 1-3 days per week. Unlike traditional full-time directors, <strong>fractional directors</strong> bring experience from multiple industries and companies, often working with 2-4 clients simultaneously.
            </p>
            <p>
              The <strong>fractional director</strong> model has grown rapidly in the UK, particularly among startups, scale-ups, and SMEs that need director-level expertise but cannot justify or afford a full-time hire. Whether you need a <strong>fractional HR director</strong>, <strong>fractional finance director</strong>, or <strong>fractional sales director</strong>, the model provides access to senior talent at 50-70% of the full-time cost.
            </p>

            <h3 className="font-editorial text-2xl font-bold text-gray-900 mt-12 mb-4">Why Fractional Director Jobs Are Growing</h3>
            <p>
              The demand for <strong>fractional director jobs UK</strong> has surged for several reasons:
            </p>
            <ul className="space-y-3">
              <li><strong>Cost efficiency:</strong> Access £150k+ director expertise for £50-80k annually (2 days/week)</li>
              <li><strong>Flexibility:</strong> Scale leadership up or down based on business needs</li>
              <li><strong>Experience breadth:</strong> Fractional directors bring insights from multiple companies and industries</li>
              <li><strong>Speed:</strong> Start working with a fractional director in weeks, not months</li>
              <li><strong>PE/VC influence:</strong> Investors increasingly mandate fractional directors across portfolio companies</li>
            </ul>

            <h3 className="font-editorial text-2xl font-bold text-gray-900 mt-12 mb-4">Fractional Director vs Interim Director</h3>
            <p>
              While both provide temporary leadership, the models differ significantly:
            </p>
            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
              <div className="bg-gray-50 p-6 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">Fractional Director</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 1-3 days per week</li>
                  <li>• Multiple clients simultaneously</li>
                  <li>• Ongoing, flexible engagement</li>
                  <li>• Strategic, part-time focus</li>
                  <li>• Day rate: £800-£1,500</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">Interim Director</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 5 days per week (full-time)</li>
                  <li>• Single client focus</li>
                  <li>• Fixed term (3-12 months)</li>
                  <li>• Gap-filling or transformation</li>
                  <li>• Day rate: £800-£1,200</li>
                </ul>
              </div>
            </div>

            <h3 className="font-editorial text-2xl font-bold text-gray-900 mt-12 mb-4">Fractional Director Day Rates UK</h3>
            <p>
              <strong>Fractional director</strong> day rates in the UK vary by function and seniority:
            </p>
            <div className="overflow-x-auto my-8 not-prose">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 text-left font-bold text-gray-900 border-b">Director Type</th>
                    <th className="p-4 text-left font-bold text-gray-900 border-b">Day Rate</th>
                    <th className="p-4 text-left font-bold text-gray-900 border-b">2 Days/Week Annual</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b"><td className="p-4">Fractional HR Director</td><td className="p-4">£900-£1,100</td><td className="p-4">£94k-£114k</td></tr>
                  <tr className="border-b bg-gray-50"><td className="p-4">Fractional Finance Director</td><td className="p-4">£1,000-£1,300</td><td className="p-4">£104k-£135k</td></tr>
                  <tr className="border-b"><td className="p-4">Fractional Sales Director</td><td className="p-4">£950-£1,200</td><td className="p-4">£99k-£125k</td></tr>
                  <tr className="border-b bg-gray-50"><td className="p-4">Fractional Marketing Director</td><td className="p-4">£900-£1,200</td><td className="p-4">£94k-£125k</td></tr>
                  <tr className="border-b"><td className="p-4">Fractional Operations Director</td><td className="p-4">£900-£1,200</td><td className="p-4">£94k-£125k</td></tr>
                  <tr className="border-b bg-gray-50"><td className="p-4">Fractional Managing Director</td><td className="p-4">£1,100-£1,500</td><td className="p-4">£114k-£156k</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-editorial text-2xl font-bold text-gray-900 mt-12 mb-4">How to Become a Fractional Director</h3>
            <p>
              Transitioning to <strong>fractional director</strong> work typically requires 15+ years of experience, including significant time at director level. Most successful fractional directors:
            </p>
            <ul className="space-y-2">
              <li>• Have held full-time director or senior management roles</li>
              <li>• Possess deep functional expertise (HR, Finance, Sales, etc.)</li>
              <li>• Can demonstrate measurable impact and outcomes</li>
              <li>• Have strong professional networks for client acquisition</li>
              <li>• Are comfortable with portfolio working and multiple stakeholders</li>
            </ul>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">FAQ</span>
            <h2 className="font-editorial text-3xl md:text-4xl font-bold text-gray-900">Fractional Director Jobs FAQ</h2>
          </div>
          <FAQ skipSchema={true} items={DIRECTOR_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">Ready?</span>
          <h2 className="font-editorial text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Find Your Next<br /><span className="text-indigo-400">Fractional Director Role</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Create your profile and get matched with companies seeking fractional director leadership.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
              Create Profile
            </Link>
            <Link href="#jobs" className="px-10 py-5 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
              Browse Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Director Cluster</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-hr-director" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Fractional HR Director</Link>
              <Link href="/fractional-finance-director-jobs-uk" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Finance Director Jobs</Link>
              <Link href="/fractional-sales-director-jobs-uk" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Sales Director Jobs</Link>
              <Link href="/fractional-managing-director-jobs-uk" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Managing Director Jobs</Link>
              <Link href="/interim-hr-director" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Interim HR Director</Link>
              <Link href="/fractional-cmo-jobs-uk" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Fractional CMO Jobs</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
