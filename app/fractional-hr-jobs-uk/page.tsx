import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { createDbQuery } from '@/lib/db'
import { ServerJobGrid } from '@/components/ServerJobGrid'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { JobsGraph3D } from '@/components/JobsGraph3D'
import { DesktopOnly } from '@/components/DesktopOnly'
import { IR35Calculator } from '@/components/IR35Calculator'
import { RoleNews } from '@/components/RoleNews'
import { FracSection } from '@/components/FracSection'
import { BreadcrumbsLight } from '@/components/Breadcrumbs'
import { JobListingSchema } from '@/components/JobPostingSchema'
import { getRoleBreadcrumbs } from '@/lib/seo-config'
import { WebPageSchema, LastUpdatedBadge } from '@/components/WebPageSchema'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional HR Jobs UK 2025',
  description: 'Fractional HR jobs UK. Part-time CHRO, HR Director roles. £700-£1,300/day.',
  keywords: 'fractional hr jobs, fractional hr jobs uk, part time hr, part-time chro, fractional hr director, fractional people leader, part time human resources jobs, fractional hr remote',
  alternates: {
    canonical: 'https://fractional.quest/fractional-hr-jobs-uk',
  },
  openGraph: {
    title: 'Fractional HR Jobs UK | Part-Time CHRO Roles 2025',
    description: 'Fractional HR jobs UK - Find part-time HR & People leadership positions paying £700-£1,300/day. Remote & hybrid available.',
    images: ['/images/fractional-hr-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-hr-jobs-uk',
  },
}

async function getHRStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'HR'`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'HR' AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 32, remoteCount: 14 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND role_category = 'HR' AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 8
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO
async function getHRJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week,
        description_snippet
      FROM jobs
      WHERE is_active = true AND role_category = 'HR'
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 12
    `
    return jobs as any[]
  } catch {
    return []
  }
}

const HR_FAQS = [
  {
    question: 'What is a fractional HR job?',
    answer: 'A fractional HR job is a part-time Chief Human Resources Officer (CHRO) or HR Director role where you provide strategic people leadership to companies on a non-full-time basis. Typical engagements are 1-3 days per week, allowing experienced HR leaders to work with multiple clients simultaneously.'
  },
  {
    question: 'How much do fractional HR jobs pay in the UK?',
    answer: 'Fractional HR roles in the UK typically pay £700-£1,300 per day, depending on experience level and specialisation. Entry-level fractional HR Directors earn £700-£900/day, mid-level £900-£1,100/day, and senior fractional CHROs £1,100-£1,300/day. Annual earnings range from £100k to £200k+ working 2-3 days per week.'
  },
  {
    question: 'What qualifications do I need for fractional HR jobs?',
    answer: 'Most fractional HR jobs require 12+ years HR experience with at least 3-5 years in CHRO, HR Director, or People Director roles. CIPD Level 7 qualification is highly valued. Experience should cover talent acquisition, employee relations, organisational design, culture transformation, and HR technology implementation.'
  },
  {
    question: 'Can fractional HR roles be done remotely?',
    answer: 'Yes, many fractional HR roles offer remote or hybrid working. Since the role is strategic rather than operational, much of the work can be done remotely through video calls, HRIS platforms, and collaboration tools. However, some client meetings and team workshops may require occasional on-site presence.'
  },
  {
    question: 'What is the difference between fractional HR and interim HR?',
    answer: 'Fractional HR roles are ongoing part-time engagements (typically 6-24 months+) working 1-3 days per week. Interim HR roles are full-time temporary positions filling a gap while a permanent hire is made, usually 3-12 months. Fractional HR leaders often work with multiple clients; interim HR professionals typically work with one organisation full-time.'
  },
  {
    question: 'How do I transition from full-time HR to fractional HR work?',
    answer: 'Transitioning to fractional HR typically requires establishing yourself as a subject matter expert, building a strong network, and setting up as a limited company or sole trader. Many HR leaders start by taking one fractional client while still employed, then transition to multiple clients. Professional indemnity insurance and understanding IR35 legislation are essential.'
  }
]

export default async function FractionalHrJobsUkPage() {
  const [stats, companies, jobs] = await Promise.all([getHRStats(), getFeaturedCompanies(), getHRJobs()])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional HR Jobs UK | Part-Time CHRO Roles 2025"
        description="Find part-time HR & People leadership positions paying £700-£1,300/day"
        url="https://fractional.quest/fractional-hr-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />
      <JobListingSchema jobs={jobs} pageUrl="https://fractional.quest/fractional-hr-jobs-uk" />
      {/* Editorial Hero with 3D Knowledge Graph & Frac */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="HR Jobs UK" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('hr', 'jobs')} className="mb-8" />
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-block bg-pink-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em]">
                    People Leadership
                  </span>
                  <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                  Fractional HR<br />
                  <span className="text-pink-400">Jobs UK</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                  <strong className="text-white">Fractional HR jobs UK</strong> for experienced people leaders.
                  Part-time CHRO & HR Director roles paying £700-£1,300/day.
                </p>
                <div className="flex flex-wrap gap-8 mb-10">
                  <div>
                    <div className="text-4xl md:text-5xl font-black text-pink-400">{stats.total}+</div>
                    <div className="text-white/60 text-sm uppercase tracking-wider">Live Roles</div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-black text-white">£950</div>
                    <div className="text-white/60 text-sm uppercase tracking-wider">Avg Day Rate</div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-black text-white">{stats.remoteCount}</div>
                    <div className="text-white/60 text-sm uppercase tracking-wider">Remote</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href="#jobs" className="px-8 py-4 bg-pink-500 text-white font-bold uppercase tracking-wider hover:bg-pink-400 transition-colors">
                    Browse Jobs Now
                  </Link>
                  <Link href="/fractional-hr-salary" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                    Salary Guide
                  </Link>
                </div>
              </div>

              {/* Frac Section Integration */}
              <div className="hidden lg:block lg:w-80">
                <FracSection title="Talk with Frac about HR roles" />
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
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">How Much Can You Earn as a Fractional HR Leader?</h2>
          </div>
          <RoleCalculator role="hr" />
        </div>
      </section>

      {/* Jobs */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">HR & People Jobs</h2>
            </div>
            <p className="text-gray-500">Pre-filtered to HR. Change filters to explore.</p>
          </div>
          <ServerJobGrid
            jobs={jobs}
            roleCategory="HR"
            ctaLink="/fractional-jobs-uk?department=HR"
            ctaText={`View All ${stats.total}+ HR Jobs`}
            maxJobs={9}
            showViewAll={true}
          />
        </div>
      </section>

      {/* 3D Skills Graph - Desktop Only */}
      <DesktopOnly>
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Interactive Network</span>
              <h2 className="text-3xl md:text-4xl font-black text-white">HR Jobs Knowledge Graph</h2>
              <p className="text-gray-400 mt-2">Explore HR roles, skills, and companies in 3D</p>
            </div>
            <JobsGraph3D roleFilter="HR" limit={25} height="500px" />
          </div>
        </section>
      </DesktopOnly>

      {/* Companies Hiring */}
      {companies.length > 0 && (
        <section className="py-16 bg-gray-50 text-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">Who's Hiring</span>
              <h2 className="text-3xl md:text-4xl font-black">Companies Seeking HR Leaders</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {companies.map((company: string, index: number) => (
                <span key={index} className="text-xl md:text-2xl font-light text-gray-400 hover:text-pink-400 transition-colors cursor-default">{company}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Editorial Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-4 block">The Guide</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Everything You Need to Know About<br /><span className="text-pink-600">Fractional HR Jobs UK</span>
            </h2>
            <div className="w-24 h-1 bg-pink-500"></div>
          </div>
          <figure className="mb-16 -mx-6 lg:-mx-16">
            <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Fractional HR jobs UK - HR executive in strategy meeting with leadership team" className="w-full h-80 md:h-96 object-cover" />
            <figcaption className="text-sm text-gray-500 mt-3 px-6 lg:px-16">People leaders across the UK are embracing fractional HR work</figcaption>
          </figure>
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional HR jobs</strong> represent a paradigm shift in how companies access senior people leadership. According to <a href="https://www.cipd.org/uk/knowledge/reports/flexible-working-trends/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">CIPD flexible working research</a>, senior HR roles are increasingly adopting part-time and portfolio models. Part-time Chief Human Resources Officer and HR Director positions where experienced leaders provide strategic HR guidance to multiple organisations—delivering expert capability without the £120k-£250k full-time salary commitment. The <a href="https://www.ons.gov.uk/employmentandlabourmarket" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">ONS employment data</a> confirms this shift toward flexible executive work.
            </p>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">The Rise of Fractional HR Jobs UK</h3>
            <p>The UK market for <strong>fractional HR jobs UK</strong> has experienced 150% growth since 2021. This expansion reflects fundamental changes in how <a href="https://www.cipd.org" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">organisations approach people strategy</a>, particularly among high-growth startups, scale-ups, and PE-backed portfolio companies that require senior HR expertise but lack the scale to justify a full-time CHRO.</p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-pink-500">
              <p className="text-xl font-semibold text-gray-900 mb-0">"Companies access CHRO-level expertise for £2,000-£4,000/week instead of £10,000+ monthly for full-time."</p>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Why Fractional HR Jobs Are Booming</h3>
            <ul className="space-y-3">
              <li><strong>Post-pandemic flexibility:</strong> <a href="https://www.acas.org.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">ACAS flexible working guidance</a> and <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">UK flexible working legislation</a> have normalised part-time executive roles</li>
              <li><strong>PE/VC influence:</strong> <a href="https://www.bvca.co.uk/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">BVCA research</a> shows private equity firms increasingly mandate fractional HR across portfolio companies</li>
              <li><strong>Skills shortage:</strong> <a href="https://www.cipd.org" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">CIPD research</a> shows acute shortage of senior HR talent in UK</li>
              <li><strong>Cost efficiency:</strong> Strategic HR leadership at 20-40% of full-time cost, per <a href="https://www.britishbusinessbank.co.uk/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">British Business Bank</a> SME guidance</li>
              <li><strong>Rapid deployment:</strong> Start driving culture and talent strategy within days, supported by <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">IoD governance frameworks</a></li>
            </ul>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Types of Fractional HR Jobs</h3>
            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
              {[
                { title: 'Startup People Leader', desc: 'Building HR from scratch in Series A-C companies', rate: '£850-£1,200/day' },
                { title: 'PE Portfolio CHRO', desc: 'HR transformation across portfolio companies', rate: '£1,000-£1,300/day' },
                { title: 'Scale-up HR Director', desc: 'Professionalising people function 50-500 employees', rate: '£800-£1,100/day' },
                { title: 'Culture Transformation Lead', desc: 'M&A integration and culture change programmes', rate: '£900-£1,200/day' },
              ].map((type, i) => (
                <div key={i} className="bg-gray-50 p-6 border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1">{type.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{type.desc}</p>
                  <span className="text-pink-600 font-semibold text-sm">{type.rate}</span>
                </div>
              ))}
            </div>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Requirements for Fractional HR Jobs</h3>
            <ul className="space-y-2">
              <li>12+ years HR experience, including 3-5+ years at CHRO/HR Director level</li>
              <li><a href="https://www.cipd.org" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">CIPD Level 7 qualification</a> (Advanced Diploma in Strategic People Management)</li>
              <li>Proven experience building HR functions from 0-200+ employees</li>
              <li>Expertise in <a href="https://www.gov.uk/employment-tribunal-decisions" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">UK employment law</a>, ER case management, and tribunal experience</li>
              <li>Change management and organisational design capabilities</li>
              <li>HR technology implementation (HRIS, ATS, performance management systems)</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Part-Time HR Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Alternative Term</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Part-Time HR Jobs UK</h2>
            <p className="text-xl text-gray-600 mt-4">The terms "part-time HR" and "fractional HR" are often used interchangeably</p>
          </div>

          <div className="prose prose-lg prose-gray max-w-none">
            <p>
              <strong>Part-time HR</strong> roles are functionally identical to <strong>fractional HR jobs</strong>—both describe HR Directors or CHROs who work with companies on a non-full-time basis. Whether you search for "part time HR", "part-time CHRO", or "fractional HR Director", you're looking for the same opportunity: senior people leadership without the full-time commitment.
            </p>

            <h3 className="text-xl font-black text-gray-900 mt-8 mb-4">Part-Time HR vs Fractional HR</h3>
            <div className="grid md:grid-cols-2 gap-6 not-prose my-6">
              <div className="bg-white p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">Part-Time HR</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Often implies working with one company</li>
                  <li>• Fixed days per week (e.g., Mon & Wed)</li>
                  <li>• May suggest employment relationship</li>
                  <li>• Common search term in UK market</li>
                </ul>
              </div>
              <div className="bg-white p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">Fractional HR</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Typically multiple clients simultaneously</li>
                  <li>• Flexible hours based on client needs</li>
                  <li>• Usually contractor/limited company</li>
                  <li>• Industry-preferred terminology</li>
                </ul>
              </div>
            </div>

            <p>
              In practice, most <strong>part-time HR jobs</strong> and fractional HR jobs are the same roles. Companies may use either term in job postings. The key differentiator is providing senior strategic HR leadership on a part-time, ongoing basis—typically 1-3 days per week per client.
            </p>

            <div className="bg-pink-50 p-6 border border-pink-200 rounded-lg my-8 not-prose">
              <p className="text-pink-800 font-medium mb-3">Looking specifically for part-time HR opportunities?</p>
              <Link href="/fractional-hr" className="inline-flex items-center text-pink-700 font-bold hover:text-pink-900">
                Read our Fractional HR Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fractional HR Job Description Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Role Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional HR Job Description</h2>
          </div>

          <div className="prose prose-lg prose-gray max-w-none">
            <p>
              A typical <strong>fractional HR job description</strong> outlines the responsibilities of a part-time Chief Human Resources Officer or HR Director. While specific duties vary by company stage, industry, and growth trajectory, most fractional HR opportunities include these core responsibilities:
            </p>

            <h3 className="text-xl font-black text-gray-900 mt-8 mb-4">Core Responsibilities</h3>
            <ul className="space-y-2">
              <li><strong>People Strategy:</strong> Develop and execute people strategy aligned with business objectives and growth plans</li>
              <li><strong>Talent Acquisition:</strong> Build recruitment processes, employer brand, and hiring infrastructure for scaling teams</li>
              <li><strong>Culture & Engagement:</strong> Shape company culture, values, engagement programmes, and employee experience</li>
              <li><strong>Performance Management:</strong> Design performance review frameworks, feedback mechanisms, and career progression paths</li>
              <li><strong>Employee Relations:</strong> Manage complex ER cases, restructuring, redundancies, and <a href="https://www.gov.uk/employment-tribunals" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">tribunal matters</a></li>
              <li><strong>Compliance & Policy:</strong> Ensure <a href="https://www.gov.uk/browse/employing-people" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">UK employment law compliance</a>, develop policies and employee handbooks</li>
              <li><strong>HR Operations:</strong> Implement HRIS systems, payroll processes, and HR operational infrastructure</li>
            </ul>

            <h3 className="text-xl font-black text-gray-900 mt-8 mb-4">Typical Engagement Structure</h3>
            <div className="grid md:grid-cols-3 gap-4 not-prose my-6">
              <div className="bg-gray-50 p-5 text-center">
                <div className="text-2xl font-black text-pink-600">1-3 days</div>
                <div className="text-sm text-gray-600">Per week</div>
              </div>
              <div className="bg-gray-50 p-5 text-center">
                <div className="text-2xl font-black text-pink-600">6-18 months</div>
                <div className="text-sm text-gray-600">Initial commitment</div>
              </div>
              <div className="bg-gray-50 p-5 text-center">
                <div className="text-2xl font-black text-pink-600">£700-£1,300</div>
                <div className="text-sm text-gray-600">Day rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remote Fractional HR Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Remote Work</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Remote Fractional HR Opportunities</h2>
          </div>

          <div className="prose prose-lg prose-gray max-w-none">
            <p>
              <strong>Remote fractional HR</strong> roles have grown exponentially since 2020. Research from <a href="https://www.cipd.org" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">CIPD's Future of Work report</a> shows that 67% of HR professionals now work remotely at least part of the time. Many companies now offer fully remote or hybrid fractional HR positions, enabling experienced people leaders to work with businesses across the UK without geographical constraints.
            </p>

            <h3 className="text-xl font-black text-gray-900 mt-8 mb-4">Benefits of Remote Fractional HR Work</h3>
            <ul className="space-y-2">
              <li><strong>National reach:</strong> Work with companies anywhere in the UK, unrestricted by commute</li>
              <li><strong>Portfolio flexibility:</strong> Remote work makes managing 2-4 clients simultaneously more practical</li>
              <li><strong>Work-life balance:</strong> Structure your week around client needs and personal commitments</li>
              <li><strong>Reduced overheads:</strong> No commuting costs; potential for premium remote rates</li>
              <li><strong>Digital-first HR:</strong> Cloud HRIS platforms enable effective remote HR leadership</li>
            </ul>

            <p>
              Currently, approximately <strong>{stats.remoteCount} of our {stats.total} HR roles</strong> offer remote or hybrid working arrangements. Most fractional HR positions require occasional on-site presence for team workshops, leadership offsites, or sensitive ER matters, but day-to-day work is conducted remotely.
            </p>

            <div className="bg-gray-50 text-white p-6 rounded-lg my-8 not-prose">
              <p className="text-gray-600 mb-3">Browse remote HR positions:</p>
              <Link href="/remote" className="inline-flex items-center text-pink-400 font-bold hover:text-pink-300">
                View Remote Jobs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IR35 Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">UK Tax</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">IR35: Inside vs Outside</h2>
            <p className="text-gray-600 mt-4">As a fractional HR leader, your IR35 status significantly impacts your take-home pay</p>
          </div>
          <IR35Calculator defaultDayRate={950} />
        </div>
      </section>

      {/* People News */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="HR" title="Latest HR & People News" limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional HR Jobs UK</h2>
          </div>
          <FAQ skipSchema={true} items={HR_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Find Your Next<br /><span className="text-pink-400">Fractional HR Role</span></h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking fractional people leadership.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-pink-500 text-white font-bold uppercase tracking-wider hover:bg-pink-400 transition-colors">Create Profile</Link>
            <Link href="/fractional-hr-salary" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Salary Guide</Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">HR Cluster</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-hr" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Fractional HR Guide</Link>
              <Link href="/fractional-hr-salary" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Salary Guide</Link>
              <Link href="/fractional-hr-director" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Director</Link>
              <Link href="/fractional-chro" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Fractional CHRO</Link>
              <Link href="/fractional-hr-jobs-remote" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Remote HR Jobs</Link>
              <Link href="/part-time-hr-jobs-uk" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Part-Time HR</Link>
              <Link href="/fractional-hr-director-jobs" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Director Jobs</Link>
              <Link href="/fractional-hr-vs-full-time" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Fractional vs Full-Time</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
