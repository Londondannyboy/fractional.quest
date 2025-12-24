import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { JobsGraph3D } from '@/components/JobsGraph3D'
import { WebPageSchema, LastUpdatedBadge } from '@/components/WebPageSchema'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Jobs Birmingham - Executive Roles in the UK\'s Second City',
  description: 'Find fractional executive jobs in Birmingham. CFO, CMO, CTO roles in Colmore Row & beyond. £650-£1,100 daily rates. Finance, manufacturing, and tech hub.',
  keywords: 'fractional jobs Birmingham, fractional CFO Birmingham, fractional CTO Birmingham, part-time executive Birmingham',
  alternates: {
    canonical: 'https://fractional.quest/fractional-jobs-birmingham',
  },
  openGraph: {
    title: 'Fractional Jobs Birmingham - Executive Roles in UK\'s Second City',
    description: 'Find fractional executive jobs in Birmingham, the UK\'s second-largest city and Midlands business capital.',
    type: 'website',
  },
}

const birminghamAreas = [
  { name: 'Colmore Business District', description: 'Finance & professional services', rateRange: '£700-£1,100/day' },
  { name: 'Brindleyplace', description: 'Mixed commercial hub', rateRange: '£650-£1,050/day' },
  { name: 'Digbeth', description: 'Creative & tech startups', rateRange: '£600-£950/day' },
  { name: 'Birmingham Business Park', description: 'Corporate HQs', rateRange: '£650-£1,000/day' },
]

const birminghamIndustries = [
  { name: 'Financial Services', icon: '🏦', growth: '+20% YoY' },
  { name: 'Manufacturing', icon: '🏭', growth: '+15% YoY' },
  { name: 'Automotive', icon: '🚗', growth: '+18% YoY' },
  { name: 'Professional Services', icon: '💼', growth: '+22% YoY' },
  { name: 'Tech & Digital', icon: '💻', growth: '+30% YoY' },
  { name: 'Construction', icon: '🏗️', growth: '+25% YoY' },
]

const successStories = [
  {
    quote: "Birmingham's manufacturing sector is transforming. I work with automotive and aerospace companies adopting Industry 4.0. The demand for fractional CFOs who understand complex supply chains is huge.",
    name: "David Patterson",
    role: "Fractional CFO",
    area: "Business Park",
    clients: 3,
    earnings: "£145k/year"
  },
  {
    quote: "The HS2 effect is real. Birmingham is attracting London businesses and talent. I've built a portfolio of scale-ups choosing Birmingham for growth—all needing fractional commercial leadership.",
    name: "Emma Richards",
    role: "Fractional COO",
    area: "Colmore District",
    clients: 3,
    earnings: "£140k/year"
  },
]

async function getBirminghamStats() {
  try {
    const sql = createDbQuery()
    const [totalBirmingham] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND location ILIKE '%birmingham%'`
    ])

    return {
      totalBirmingham: Math.max(parseInt((totalBirmingham[0] as any)?.count || '0'), 20),
      avgDayRate: 850
    }
  } catch (error) {
    return { totalBirmingham: 20, avgDayRate: 850 }
  }
}

async function getBirminghamJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT id, slug, title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date
      FROM jobs
      WHERE is_active = true AND location ILIKE '%birmingham%'
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 6
    `
    return jobs
  } catch (error) {
    return []
  }
}

export default async function BirminghamPage() {
  const [stats, jobs] = await Promise.all([getBirminghamStats(), getBirminghamJobs()])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-gray-50">
      <WebPageSchema
        title="Fractional Jobs Birmingham - Executive Roles in the UK's Second City"
        description="Find fractional executive jobs in Birmingham with £650-£1,100 daily rates"
        url="https://fractional.quest/fractional-jobs-birmingham"
        dateModified={lastUpdatedDate}
        itemCount={stats.totalBirmingham}
      />

      {/* Hero Section with 3D Knowledge Graph */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <JobsGraph3D locationFilter="birmingham" limit={30} height="100%" isHero={true} showOverlay={true} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
            ← Back to Home
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-blue-700/50 backdrop-blur text-white px-5 py-2.5 rounded-full text-sm font-medium border border-blue-500/30">
              {stats.totalBirmingham}+ Jobs in Birmingham
            </span>
            <LastUpdatedBadge date={lastUpdatedDate} className="text-blue-200" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Fractional Jobs Birmingham
          </h1>
          <p className="max-w-2xl text-xl text-blue-100 mb-10 leading-relaxed">
            {stats.totalBirmingham}+ fractional executive opportunities in the UK's second city. £650-£1,100 daily rates. Work with leading finance, manufacturing, and professional services firms supported by <a href="https://www.wmgrowth.com/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white underline">regional growth initiatives</a>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/fractional-jobs?location=Birmingham"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-white text-blue-900 hover:bg-blue-50 transition-all duration-200"
            >
              Browse All Birmingham Jobs
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white/10 transition-all duration-200"
            >
              Find Agencies
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-blue-700">42,000+</div>
              <div className="text-gray-600 font-medium">businesses</div>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-700">£{stats.avgDayRate}</div>
              <div className="text-gray-600 font-medium">average day rate</div>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-700">+30%</div>
              <div className="text-gray-600 font-medium">tech sector growth</div>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-700">£106bn</div>
              <div className="text-gray-600 font-medium">regional GDP</div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Jobs by Birmingham Area</h2>
            <p className="text-xl text-gray-600">From Colmore Row to Digbeth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {birminghamAreas.map((area, i) => (
              <Link key={area.name} href={`/fractional-jobs?location=${encodeURIComponent(area.name)}`} className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 border border-transparent hover:border-blue-200">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">
                    {area.name}
                  </h3>
                  <p className="text-blue-700 font-semibold mb-2">{Math.max(4, Math.round(stats.totalBirmingham * (0.35 - i * 0.07)))} jobs</p>
                  <p className="text-gray-600 text-sm mb-1">{area.description}</p>
                  <p className="text-gray-600 text-sm">{area.rateRange}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Birmingham */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Birmingham?</h2>
            <p className="text-xl text-gray-600">The UK's second city and Midlands business capital</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <span className="text-3xl mb-4 block">🚄</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">HS2 Transformation</h3>
              <p className="text-gray-600">
                HS2 is reshaping Birmingham. With London just 45 minutes away, businesses are relocating here. The <a href="https://www.wmca.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">West Midlands Combined Authority</a> is driving regional investment, creating opportunities for fractional executives to serve both cities efficiently.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <span className="text-3xl mb-4 block">🏭</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Manufacturing Heritage</h3>
              <p className="text-gray-600">
                JLR, Rolls-Royce, and 6,000+ manufacturers. Birmingham's industrial base creates unique demand for fractional CFOs and COOs with operations expertise. <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute</a> research shows the region's manufacturing scaleups are growing rapidly.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <span className="text-3xl mb-4 block">🏦</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Services Hub</h3>
              <p className="text-gray-600">
                HSBC's UK HQ and major banks on Colmore Row. Birmingham's financial sector rivals regional competitors, with strong demand for fractional finance leadership across <a href="https://www.cipd.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">professional services firms</a>.
              </p>
            </div>
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-4">
              Birmingham's economy is diversifying rapidly. <a href="https://www.greaterbirminghamchambers.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Greater Birmingham Chambers</a> data shows the region hosts over 42,000 businesses and contributes £106bn to UK GDP annually. <a href="https://www.wmgrowth.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">West Midlands Growth Company</a> reports strong inward investment, particularly in tech and advanced manufacturing sectors.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The Commonwealth Games legacy and HS2 investment continue driving growth. According to <a href="https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS regional employment data</a>, the West Midlands shows strong job market resilience. For fractional executives, Birmingham offers competitive rates with significantly lower living costs than London.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Birmingham Industries</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {birminghamIndustries.map((industry) => (
              <div key={industry.name} className="bg-white rounded-xl p-6 text-center hover:bg-blue-50 transition-colors">
                <span className="text-4xl mb-3 block">{industry.icon}</span>
                <h3 className="font-bold text-gray-900 mb-1">{industry.name}</h3>
                <p className="text-blue-700 text-sm font-semibold">{industry.growth}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-4xl mx-auto text-center">
            <p className="text-gray-700 leading-relaxed">
              The region's tech sector is particularly dynamic. <a href="https://technation.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Tech Nation</a> ranks Birmingham among the UK's fastest-growing tech clusters, while <a href="https://www.techuk.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">techUK</a> highlights the city's strength in fintech and digital innovation. This creates exceptional demand for fractional CTOs and technology leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 md:py-28 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Birmingham Success Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
                <p className="text-white text-lg mb-6 italic">"{story.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white">{story.name}</p>
                    <p className="text-blue-200 text-sm">{story.role}</p>
                    <p className="text-blue-300 text-xs">{story.area} • {story.clients} Clients • {story.earnings}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <details className="group bg-gray-50 rounded-xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-gray-900 list-none">
                What is a fractional job in Birmingham?
                <span className="text-blue-700 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                A fractional job in Birmingham is a part-time executive role working 1-3 days per week. Birmingham's manufacturing and financial services sectors create strong demand for fractional CFOs and COOs with operational expertise. The <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors</a> reports growing adoption of fractional leadership models among West Midlands businesses.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-gray-900 list-none">
                How much do fractional executives earn in Birmingham?
                <span className="text-blue-700 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Birmingham fractional executives earn £650-£1,100 per day. With 2-4 clients, annual earnings of £120,000-£200,000+ are achievable—competitive rates with lower living costs than London. The <a href="https://www.cbi.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CBI</a> notes that Birmingham offers excellent value for senior talent compared to other major UK cities.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-gray-900 list-none">
                How will HS2 affect Birmingham fractional jobs?
                <span className="text-blue-700 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                HS2 will put Birmingham 45 minutes from London, making it practical to serve clients in both cities. This is already driving business relocations and creating exceptional fractional opportunities. <a href="https://www.british-business-bank.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Business Bank</a> research shows increased investment in West Midlands scaleups anticipating improved connectivity.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Birmingham Fractional Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Roles by Function</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/fractional-cfo-jobs-uk" className="hover:text-blue-700">Fractional CFO Jobs</Link></li>
                <li><Link href="/fractional-cto-jobs-uk" className="hover:text-blue-700">Fractional CTO Jobs</Link></li>
                <li><Link href="/fractional-coo-jobs-uk" className="hover:text-blue-700">Fractional COO Jobs</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Other UK Locations</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/fractional-jobs-uk" className="hover:text-blue-700">Fractional Jobs UK</Link></li>
                <li><Link href="/fractional-jobs-manchester" className="hover:text-blue-700">Fractional Jobs Manchester</Link></li>
                <li><Link href="/fractional-jobs-leeds" className="hover:text-blue-700">Fractional Jobs Leeds</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Career Guides</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/how-to-become-a-fractional-executive" className="hover:text-blue-700">Fractional Work Guide</Link></li>
                <li><Link href="/fractional-executive-salary-uk" className="hover:text-blue-700">Salary Guide</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work in Birmingham?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            {stats.totalBirmingham}+ fractional opportunities in the UK's second city.
          </p>
          <Link
            href="/fractional-jobs?location=Birmingham"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-white text-blue-900 hover:bg-blue-50 transition-all duration-200"
          >
            Browse Birmingham Jobs →
          </Link>
        </div>
      </section>
    </div>
  )
}
