import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { FAQ } from '@/components/FAQ'
import { ServerJobGrid } from '@/components/ServerJobGrid'
import { BreadcrumbsLight } from '@/components/Breadcrumbs'
import { WebPageSchema } from '@/components/WebPageSchema'
import { FAQPageSchema } from '@/components/FAQPageSchema'
import { JobListingSchema } from '@/components/JobPostingSchema'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional COO London | Chief Operating Officer Jobs 2025',
  description: 'Fractional COO jobs in London. Part-time Chief Operating Officer roles in the City, Canary Wharf & Tech City paying £950-£1,400/day. Browse live London COO opportunities.',
  keywords: 'fractional coo london, fractional coo jobs london, part time coo london, fractional chief operating officer london, coo jobs london, interim coo london, fractional operations director london',
  alternates: {
    canonical: 'https://fractional.quest/fractional-coo-london',
  },
  openGraph: {
    title: 'Fractional COO London | Chief Operating Officer Roles 2025',
    description: 'Fractional COO jobs in London - Part-time COO positions paying £950-£1,400/day. City, Canary Wharf & Tech City opportunities.',
    images: ['/images/fractional-coo-london.jpg'],
    url: 'https://fractional.quest/fractional-coo-london',
  },
}

const londonCooFaqs = [
  {
    question: 'How much do fractional COOs earn in London?',
    answer: 'London-based fractional COOs command premium rates of £950-£1,400 per day, approximately 20-30% higher than other UK regions. Working 2-3 days per week with 2-3 clients, experienced fractional COOs in London can earn £180,000-£300,000+ annually. According to <a href="https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earningsandworkinghours" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">ONS data</a>, London executives earn significantly above national averages.',
  },
  {
    question: 'Where are London fractional COO jobs based?',
    answer: 'London fractional COO roles cluster around Tech City (Shoreditch/Old Street), the City of London, and increasingly Canary Wharf. However, 65%+ of London COO roles now offer hybrid arrangements. Many fractional COOs split time between client offices, home working, and co-working spaces. The <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">ScaleUp Institute</a> reports strong growth in flexible executive roles across the capital.',
  },
  {
    question: 'What types of companies hire fractional COOs in London?',
    answer: 'London\'s fractional COO market is dominated by PE/VC-backed scale-ups (Series A-C), fintech companies, and tech startups transitioning from founder-led to operationally mature. The City and Canary Wharf provide demand for financial services COOs, while Tech City drives operations leadership for high-growth startups. <a href="https://technation.io/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">Tech Nation</a> highlights London\'s continued leadership in the UK tech ecosystem.',
  },
  {
    question: 'Is London or remote better for fractional COO work?',
    answer: 'London offers 25-40% higher day rates and access to the UK\'s largest pool of high-growth companies. However, competition is fiercer than regional markets. Many successful fractional COOs maintain London clients while living elsewhere, visiting 1-2 days per week. Remote-first companies are increasingly open to fully remote arrangements, especially post-2020.',
  },
]

async function getLondonCooStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'Operations' AND (location ILIKE '%London%' OR city ILIKE '%London%')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'Operations' AND (location ILIKE '%London%' OR city ILIKE '%London%') AND (is_remote = true OR workplace_type = 'Remote' OR workplace_type = 'Hybrid')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      hybridCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 15, hybridCount: 10 }
  }
}

async function getLondonCooJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, country, city, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week, salary_min, salary_max, salary_currency,
        description_snippet
      FROM jobs
      WHERE is_active = true
        AND role_category = 'Operations'
        AND (location ILIKE '%London%' OR city ILIKE '%London%')
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 50
    `
    return jobs as any[]
  } catch {
    return []
  }
}

export default async function FractionalCooLondonPage() {
  const [stats, jobs] = await Promise.all([
    getLondonCooStats(),
    getLondonCooJobs()
  ])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional COO London | Chief Operating Officer Jobs 2025"
        description="Find fractional COO jobs in London paying £950-£1,400/day"
        url="https://fractional.quest/fractional-coo-london"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />
      <FAQPageSchema faqs={londonCooFaqs} />
      <JobListingSchema jobs={jobs} pageUrl="https://fractional.quest/fractional-coo-london" />

      {/* Hero */}
      <section className="bg-white py-12 md:py-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <BreadcrumbsLight items={[
            { label: 'Home', href: '/' },
            { label: 'Fractional Jobs UK', href: '/fractional-jobs-uk' },
            { label: 'COO Jobs UK', href: '/fractional-coo-jobs-uk' },
            { label: 'COO London' }
          ]} className="mb-8" />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                London Operations
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                <span className="text-orange-600">Fractional COO</span>
                <br />London
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl mb-8">
                Part-time <strong className="text-gray-900">Chief Operating Officer</strong> roles in London's City, Canary Wharf, and Tech City.
                Earn <strong className="text-orange-600">£950-£1,400/day</strong> with hybrid flexibility.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="#jobs" className="px-8 py-4 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/25">
                  Browse {stats.total}+ London Jobs
                </Link>
                <Link href="/fractional-coo-jobs-uk" className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors">
                  All UK COO Jobs
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                <span><strong className="text-gray-900">{stats.hybridCount}</strong> hybrid/remote</span>
                <span><strong className="text-gray-900">£1,100</strong> avg day rate</span>
                <span><strong className="text-gray-900">20-30%</strong> London premium</span>
              </div>
            </div>

            {/* London skyline image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80"
                alt="Fractional COO London - City skyline operations leadership"
                className="w-full h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-medium text-lg">London's Financial District</p>
                <p className="text-white/70 text-sm">60% of UK fractional COO roles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-900 py-6">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white">{stats.total}+</div>
              <div className="text-sm text-gray-400">London COO Roles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">£1,100</div>
              <div className="text-sm text-gray-400">Avg London Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">{stats.hybridCount}</div>
              <div className="text-sm text-gray-400">Hybrid/Remote</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">+25%</div>
              <div className="text-sm text-gray-400">vs UK Average</div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section id="jobs" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional COO Jobs London</h2>
          </div>

          <ServerJobGrid
            jobs={jobs}
            roleCategory="Operations"
            ctaLink="/fractional-coo-jobs-uk"
            ctaText="View All UK COO Jobs"
            maxJobs={9}
            showViewAll={true}
          />
        </div>
      </section>

      {/* London areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Locations</span>
            <h2 className="text-3xl font-black text-gray-900">London COO Hotspots</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Tech City</h3>
              <p className="text-sm text-gray-600 mb-3">Shoreditch, Old Street, Hoxton</p>
              <p className="text-sm text-gray-500">High-growth startups, Series A-C scale-ups, fintech. Premium for operational scaling expertise.</p>
              <p className="text-orange-600 font-semibold text-sm mt-3">£950-£1,300/day</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">City of London</h3>
              <p className="text-sm text-gray-600 mb-3">Bank, Liverpool Street, Moorgate</p>
              <p className="text-sm text-gray-500">Financial services, PE portfolio companies, professional services. Strong demand for regulated operations experience.</p>
              <p className="text-orange-600 font-semibold text-sm mt-3">£1,000-£1,400/day</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Canary Wharf</h3>
              <p className="text-sm text-gray-600 mb-3">Isle of Dogs, Docklands</p>
              <p className="text-sm text-gray-500">Large corporates, fintech headquarters, financial institutions. Often more structured, longer engagements.</p>
              <p className="text-orange-600 font-semibold text-sm mt-3">£1,050-£1,350/day</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl font-black text-gray-900">Fractional COO London Questions</h2>
          </div>
          <FAQ items={londonCooFaqs} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-6">Find Your London COO Role</h2>
          <p className="text-xl text-gray-400 mb-10">Join London's top fractional COOs earning £950-£1,400/day</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-400 transition-colors">Create Profile</Link>
            <Link href="/fractional-coo-salary" className="px-10 py-5 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-colors">COO Salary Guide</Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-coo-jobs-uk" className="text-gray-600 hover:text-orange-600 font-medium">COO Jobs UK</Link>
            <Link href="/fractional-jobs-london" className="text-gray-600 hover:text-orange-600 font-medium">All London Jobs</Link>
            <Link href="/fractional-cfo-jobs-uk" className="text-gray-600 hover:text-orange-600 font-medium">CFO Jobs UK</Link>
            <Link href="/fractional-cto-jobs-uk" className="text-gray-600 hover:text-orange-600 font-medium">CTO Jobs UK</Link>
            <Link href="/fractional-coo-salary" className="text-gray-600 hover:text-orange-600 font-medium">COO Salary Guide</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
