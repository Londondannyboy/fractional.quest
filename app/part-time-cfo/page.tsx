import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { JobsGraph3D } from '@/components/JobsGraph3D'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Part-Time CFO | UK Part Time CFO Services & Jobs 2025',
  description: 'Part-time CFO services UK - Hire a part time CFO or find CFO part time jobs paying £800-£1,500/day. Remote CFO jobs available. Part time CFO wanted? We connect companies with experienced CFOs.',
  keywords: 'part time cfo, part-time cfo, part time cfo services, cfo part time, part time cfo jobs, remote cfo jobs, part time cfo wanted, part time cfo needed, part time cfos, flexible cfo roles',
  alternates: {
    canonical: 'https://fractional.quest/part-time-cfo',
  },
  openGraph: {
    title: 'Part-Time CFO Services & Jobs UK | Hire a CFO Part Time',
    description: 'Part-time CFO services UK. Find part time CFO jobs or hire a CFO part time. Remote options available. £800-£1,500/day.',
    url: 'https://fractional.quest/part-time-cfo',
  },
}

async function getCfoStats() {
  try {
    const sql = createDbQuery()
    const result = await sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category ILIKE '%cfo%' OR title ILIKE '%cfo%' OR title ILIKE '%chief financial%')`
    return parseInt((result[0] as any)?.count || '0')
  } catch {
    return 45
  }
}

async function getCfoJobs() {
  try {
    const sql = createDbQuery()
    return await sql`
      SELECT id, slug, title, company_name, location, compensation, posted_date
      FROM jobs
      WHERE is_active = true AND (role_category ILIKE '%cfo%' OR title ILIKE '%cfo%' OR title ILIKE '%chief financial%')
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 4
    `
  } catch {
    return []
  }
}

export default async function PartTimeCfoPage() {
  const [jobCount, jobs] = await Promise.all([getCfoStats(), getCfoJobs()])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with 3D Knowledge Graph Background */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1920)' }} />
          <JobsGraph3D roleFilter="CFO" limit={30} height="100%" isHero={true} showOverlay={true} />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="bg-gray-50/40 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10">
            <Link href="/" className="text-white/70 hover:text-gray-900 mb-6 inline-block">← Back to Home</Link>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Part-Time CFO Services & Jobs UK</h1>
            <p className="text-xl text-white/80 mb-8">
              <strong>Part time CFO</strong> services for growing UK businesses. Whether you need a <strong>CFO part time</strong> or you're seeking <strong>part time CFO jobs</strong>, we connect experienced finance leaders with companies. Remote CFO jobs available.
            </p>
            <div className="flex gap-4">
              <Link href="/fractional-jobs?role=CFO" className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-950/20">
                Browse {jobCount}+ CFO Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - 750+ words */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-emerald">
          <h2>What is a Part-Time CFO?</h2>
          <p>
            A <strong>part-time CFO</strong> (also known as a fractional CFO or outsourced CFO) is an experienced Chief Financial Officer who provides strategic financial leadership to companies on a <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexible, part-time basis</a>. <strong>Part time CFO services</strong> allow businesses to access senior finance expertise without the cost of a full-time hire. Rather than committing to a single full-time role, <strong>part time CFOs</strong> typically work with multiple clients, dedicating 1-3 days per week to each engagement.
          </p>
          <p>
            The demand for <strong>part time CFO jobs</strong> in the UK has grown significantly. Whether you're a business with a <strong>part time CFO wanted</strong> requirement, or a finance professional seeking <strong>CFO part time</strong> opportunities, the market is thriving. <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Startups, scale-ups</a>, and SMEs increasingly need senior financial expertise but cannot justify a full-time hire. Companies typically engage a part-time CFO when they reach Series A funding, need to prepare financial models for investors, or require board-level financial reporting.
          </p>

          <h2>Part-Time CFO vs Full-Time CFO</h2>
          <p>
            The key difference between a part-time CFO and a traditional full-time CFO lies in the engagement model. A full-time CFO works exclusively for one company, typically earning £150,000-£300,000 annually plus benefits. A <strong>part-time Chief Financial Officer</strong>, by contrast, works with 2-4 clients simultaneously, charging day rates of £800-£1,500.
          </p>
          <p>
            For many experienced CFOs, the part-time model offers significant advantages: higher effective hourly earnings, greater variety in work, portfolio diversification, and improved work-life balance. For companies, hiring a part-time CFO provides access to senior talent at a fraction of the cost of a full-time hire.
          </p>

          <h2>Who Hires Part-Time CFOs?</h2>
          <p>
            Which companies have <strong>part time CFO wanted</strong> or <strong>part time CFO needed</strong> requirements? <strong>Part-time CFO jobs</strong> are most common in the following company types:
          </p>
          <ul>
            <li><strong>Venture-backed startups</strong> - Companies at Series A or B stage that need fundraising support, financial modelling, and investor relations expertise</li>
            <li><strong>Private equity portfolio companies</strong> - <a href="https://www.bvca.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">PE firms</a> often require part-time CFOs to strengthen finance functions across their investments</li>
            <li><strong>Scale-ups</strong> - Fast-growing companies (£5-50m revenue) that have outgrown their bookkeeper but aren't ready for a full-time CFO</li>
            <li><strong>SMEs preparing for exit</strong> - Business owners planning a sale who need to professionalise their finances with support from the <a href="https://www.british-business-bank.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Business Bank</a></li>
            <li><strong>Turnaround situations</strong> - Companies in financial distress that need experienced leadership</li>
          </ul>

          <h2>Part-Time CFO Salary and Day Rates</h2>
          <p>
            <strong>Part-time CFO</strong> compensation in the UK typically ranges from £800 to £1,500 per day, depending on experience, industry specialisation, and location. London-based roles command premium rates, with City and Canary Wharf engagements often paying £1,200-£1,500 per day. <a href="https://www.ons.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS data</a> shows senior finance professionals increasingly choosing flexible working arrangements.
          </p>
          <p>
            A part-time CFO working 2-3 days per week across multiple clients can realistically earn £150,000-£250,000 annually. The most experienced fractional CFOs with strong networks and repeat clients can earn significantly more.
          </p>

          <h2>Key Responsibilities</h2>
          <p>Part-time CFO responsibilities typically include:</p>
          <ul>
            <li>Financial strategy development and execution</li>
            <li>Cash flow forecasting and management</li>
            <li>Fundraising support and investor relations</li>
            <li>Board reporting and financial governance aligned with <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors</a> best practices</li>
            <li>Budget creation and monitoring</li>
            <li>Financial systems and process improvement</li>
            <li>Team leadership and finance function development, including <a href="https://www.cipd.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">people management</a> of finance teams</li>
            <li>M&A support and due diligence</li>
          </ul>

          <h2>How to Become a Part-Time CFO</h2>
          <p>
            Transitioning to a <strong>part-time CFO career</strong> typically requires 15+ years of finance experience, including at least 5 years in senior leadership roles. Most successful part-time CFOs hold professional qualifications (<a href="https://www.icaew.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ACA</a>, <a href="https://www.accaglobal.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ACCA</a>, <a href="https://www.cimaglobal.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIMA</a>) and have experience across multiple industries.
          </p>
          <p>
            Building a portfolio of clients takes time. Many part-time CFOs start by taking on one or two fractional engagements alongside consulting work, gradually building their client base through referrals and networking. <a href="https://www.ipse.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Self-employed professionals</a> benefit from understanding freelance finance leadership models. Platforms like <Link href="/fractional-jobs-uk">Fractional Quest</Link> can help connect experienced CFOs with companies seeking part-time finance leadership.
          </p>

          <h2>Part-Time CFO Services</h2>
          <p>
            <strong>Part time CFO services</strong> encompass a wide range of financial leadership offerings tailored to your business needs. Whether you have a <strong>part time CFO needed</strong> for a specific project or require ongoing strategic support, services typically include:
          </p>
          <ul>
            <li><strong>Financial strategy and planning</strong> - Developing growth roadmaps and financial forecasts</li>
            <li><strong>Fundraising support</strong> - Preparing for Series A, B, or debt financing rounds</li>
            <li><strong>Board reporting</strong> - Monthly management accounts and investor updates</li>
            <li><strong>Cash flow management</strong> - Ensuring runway visibility and working capital optimisation</li>
            <li><strong>Finance team development</strong> - Building and mentoring your internal finance function</li>
          </ul>
          <p>
            Companies searching for <strong>part time CFO wanted</strong> typically find that <strong>CFO part time</strong> arrangements deliver 80% of the value at 30% of the cost of a full-time hire.
          </p>

          <h2>Remote CFO Jobs</h2>
          <p>
            <strong>Remote CFO jobs</strong> have become increasingly common since 2020, aligned with <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">UK flexible working rights</a>. Many <strong>part time CFOs</strong> now work entirely remotely or in hybrid arrangements, using modern finance software and video conferencing to deliver their services. This has opened up the market significantly—a company in Manchester can now engage a London-based <strong>part-time CFO</strong> without the need for regular in-person meetings.
          </p>
          <p>
            For CFOs seeking <strong>remote CFO jobs</strong>, the flexibility is a major attraction. You can work with clients across the UK (and internationally) from your home office, making <strong>CFO part time</strong> work even more appealing.
          </p>

          <h2>Part-Time CFO Jobs in London</h2>
          <p>
            London remains the UK's largest market for <strong>part-time CFO jobs</strong>, accounting for approximately 60% of all fractional finance roles. The City, Shoreditch, and Canary Wharf are particularly active markets, with strong demand from fintech, SaaS, and PE-backed companies.
          </p>
          <p>
            Outside London, Manchester, Birmingham, Edinburgh, and Bristol all have growing fractional CFO markets, though day rates are typically 15-25% lower than London equivalents. Many of these roles are available as <strong>remote CFO jobs</strong>, giving you flexibility regardless of location.
          </p>
        </div>
      </article>

      {/* Latest Jobs */}
      {jobs.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Part-Time CFO Jobs</h2>
            <p className="text-gray-600 mb-8">Browse the latest <strong>part time CFO jobs</strong> and <strong>remote CFO jobs</strong> in the UK. New <strong>CFO part time</strong> opportunities added daily.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {jobs.map((job: any) => (
                <Link
                  key={job.id}
                  href={`/job/${job.slug}`}
                  className="bg-white rounded-xl p-6 border hover:border-blue-700 hover:shadow-lg transition-all"
                >
                  <h3 className="font-bold text-gray-900 mb-2">{job.title}</h3>
                  <p className="text-gray-600 mb-2">{job.company_name}</p>
                  <p className="text-gray-600 text-sm">{job.location}</p>
                  {job.compensation && <p className="text-blue-700 font-semibold mt-2">{job.compensation}</p>}
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/fractional-jobs?role=CFO" className="px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800">
                View All CFO Jobs →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Internal Links */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Pages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/fractional-cfo-jobs-uk" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 border border-blue-200">
              <span className="font-bold text-blue-900">Fractional CFO Jobs UK →</span>
              <p className="text-sm text-blue-700 mt-1">Browse all CFO opportunities</p>
            </Link>
            <Link href="/fractional-cfo-salary" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
              <span className="font-semibold text-gray-900">CFO Salary Guide →</span>
            </Link>
            <Link href="/fractional-cfo-services" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
              <span className="font-semibold text-gray-900">Hire a CFO →</span>
            </Link>
            <Link href="/fractional-cfo-jobs-remote" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
              <span className="font-semibold text-gray-900">Remote CFO Jobs →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
