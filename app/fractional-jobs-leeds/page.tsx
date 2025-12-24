import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { JobCard } from '@/components/JobCard'
import { JobsGraph3D } from '@/components/JobsGraph3D'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Jobs Leeds - Executive Roles in Yorkshire',
  description: 'Find fractional executive jobs in Leeds and Yorkshire. CFO, CMO, CTO roles. £600-£1,000 daily rates. Growing digital and financial services hub.',
  openGraph: {
    title: 'Fractional Jobs Leeds - Executive Roles in Yorkshire',
    description: 'Find fractional executive jobs in Leeds and across Yorkshire.',
    type: 'website',
  },
}

const leedsAreas = [
  { name: 'Leeds City Centre', description: 'Legal & financial services', rateRange: '£700-£1,000/day' },
  { name: 'Leeds Digital Hub', description: 'Tech & digital', rateRange: '£650-£950/day' },
  { name: 'South Bank', description: 'Media & creative', rateRange: '£600-£900/day' },
  { name: 'Sheffield', description: 'Manufacturing & steel', rateRange: '£600-£950/day' },
  { name: 'York', description: 'Tourism & heritage', rateRange: '£650-£1,000/day' },
  { name: 'Bradford', description: 'Textiles & SMEs', rateRange: '£550-£850/day' },
]

const yorkshireIndustries = [
  { name: 'Financial Services', icon: '🏦', growth: '+11% YoY' },
  { name: 'Legal', icon: '⚖️', growth: '+9% YoY' },
  { name: 'Digital/Tech', icon: '💻', growth: '+20% YoY' },
  { name: 'Healthcare', icon: '🏥', growth: '+14% YoY' },
  { name: 'Manufacturing', icon: '🏭', growth: '+7% YoY' },
  { name: 'Retail/E-commerce', icon: '🛒', growth: '+16% YoY' },
]

const relatedSearches = [
  'Fractional CFO Jobs Leeds', 'Fractional CTO Jobs Yorkshire', 'Fractional CMO Jobs Leeds',
  'Part-Time CFO Leeds', 'Interim Executive Yorkshire', 'Portfolio Career Leeds',
  'Fractional Jobs Sheffield', 'Fractional Jobs York', 'Fractional Executive Salary Leeds'
]

async function getLeedsStats() {
  try {
    const sql = createDbQuery()
    const [total, avgRateResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (location ILIKE '%leeds%' OR location ILIKE '%yorkshire%' OR location ILIKE '%sheffield%')`,
      sql`SELECT AVG(CAST(REGEXP_REPLACE(compensation, '[^0-9]', '', 'g') AS INTEGER)) as avg FROM jobs WHERE is_active = true AND (location ILIKE '%leeds%' OR location ILIKE '%yorkshire%') AND compensation IS NOT NULL AND compensation ~ '^[£$]?[0-9]+'`
    ])
    return {
      total: parseInt((total[0] as any)?.count || '0'),
      avgDayRate: Math.round(parseFloat((avgRateResult[0] as any)?.avg || '800'))
    }
  } catch (error) {
    return { total: 18, avgDayRate: 800 }
  }
}

async function getLeedsJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT id, slug, title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date
      FROM jobs
      WHERE is_active = true AND (location ILIKE '%leeds%' OR location ILIKE '%yorkshire%' OR location ILIKE '%sheffield%')
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 6
    `
    return jobs
  } catch (error) {
    return []
  }
}

export default async function LeedsPage() {
  const [stats, jobs] = await Promise.all([getLeedsStats(), getLeedsJobs()])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 3D Knowledge Graph */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Leeds cityscape" className="w-full h-full object-cover opacity-30" />
          <JobsGraph3D locationFilter="leeds" limit={30} height="100%" isHero={true} showOverlay={true} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link href="/" className="inline-flex items-center text-purple-200 hover:text-gray-900 mb-6 transition-colors">
            ← Back to Home
          </Link>
          <div className="inline-block mb-6">
            <span className="bg-purple-700/50 backdrop-blur text-white px-5 py-2.5 rounded-full text-sm font-medium border border-purple-500/30">
              {stats.total}+ Jobs in Yorkshire
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Fractional Jobs Leeds</h1>
          <img src="/logo.svg" alt="Fractional Jobs Leeds - Executive roles in Yorkshire" className="hidden" width={1} height={1} />
          
          <p className="max-w-2xl text-xl text-purple-100 mb-10 leading-relaxed">
            {stats.total}+ fractional executive opportunities across Leeds and Yorkshire. £600-£1,000 daily rates. The North's fastest-growing fractional market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/fractional-jobs?location=Leeds"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-white text-purple-900 hover:bg-purple-50 transition-all duration-200"
            >
              Browse Leeds Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-purple-700">6%</div>
              <div className="text-gray-600 font-medium">of UK fractional roles</div>
            </div>
            <div>
              <div className="text-4xl font-black text-purple-700">£{stats.avgDayRate}</div>
              <div className="text-gray-600 font-medium">average day rate</div>
            </div>
            <div>
              <div className="text-4xl font-black text-purple-700">5th</div>
              <div className="text-gray-600 font-medium">largest UK market</div>
            </div>
            <div>
              <div className="text-4xl font-black text-purple-700">+20%</div>
              <div className="text-gray-600 font-medium">YoY market growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Jobs Across Yorkshire</h2>
            <p className="text-xl text-gray-600">Find fractional roles from Leeds to Sheffield</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leedsAreas.map((area) => (
              <div key={area.name} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{area.name}</h3>
                <p className="text-gray-600 text-sm mb-1">{area.description}</p>
                <p className="text-purple-700 font-semibold">{area.rateRange}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Yorkshire Industries</h2>
            <p className="text-xl text-gray-600">Key sectors hiring fractional executives. The <a href="https://www.cbi.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CBI</a> reports strong economic performance across these Yorkshire sectors.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {yorkshireIndustries.map((industry) => (
              <div key={industry.name} className="bg-gray-50 rounded-xl p-6 text-center">
                <span className="text-4xl mb-3 block">{industry.icon}</span>
                <h3 className="font-bold text-gray-900 mb-1">{industry.name}</h3>
                <p className="text-purple-700 text-sm font-semibold">{industry.growth}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Leeds */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Leeds?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Legal & Financial Hub</h3>
              <p className="text-gray-600">
                Leeds has the UK's largest legal sector outside London and a thriving financial services community. The <a href="https://www.westyorks-ca.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">West Yorkshire Combined Authority</a> supports growth across professional services.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Growth</h3>
              <p className="text-gray-600">
                Leeds Digital Hub is one of the UK's fastest-growing tech clusters, with 20% YoY growth in fractional tech roles. <a href="https://technation.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Tech Nation</a> recognizes Yorkshire as a key UK tech hub.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🏡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Work-Life Balance</h3>
              <p className="text-gray-600">
                Competitive rates with excellent quality of life. Easy access to Yorkshire Dales, Peak District, and historic cities.
              </p>
            </div>
          </div>
        </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-4">
              Leeds has emerged as the UK's fastest-growing regional economy. <a href="https://www.the-lep.com/about/research-and-data/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Leeds City Region Enterprise Partnership</a> data shows GVA growth of 22% over five years, outpacing most UK cities. The concentration of legal, financial services, and digital firms creates exceptional demand for fractional CFO, COO, and compliance expertise. The <a href="https://www.britishchambers.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Chambers of Commerce</a> reports strong business confidence across the region.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The city's tech sector particularly drives fractional opportunities. <a href="https://leedsdigitalfestival.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Leeds Digital Festival</a> represents one of the UK's largest tech communities, with over 3,000 digital businesses requiring technical leadership. The rise of cyber security and fintech companies adds demand for fractional CTO and CISO roles. <a href="https://www.techuk.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">techUK</a> actively supports the region's growing tech ecosystem.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Leeds offers strong value for fractional executives: competitive day rates (£700-£1,100) combined with Yorkshire's quality of life. <a href="https://www.yorkshirepost.co.uk/business" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Yorkshire Post business coverage</a> highlights continued investment in professional services and advanced manufacturing—sectors that value experienced fractional leadership. According to <a href="https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/employmentandemployeetypes" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS regional employment data</a>, Yorkshire shows robust job growth in professional and technical occupations.
            </p>
          </div>
      </section>

      {/* Jobs */}
      {(jobs as any[]).length > 0 && (
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Yorkshire Jobs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {(jobs as any[]).map((job: any) => (
                <Link key={job.id} href={`/fractional-job/${job.slug}`}>
                  <JobCard
                    title={job.title}
                    company={job.company_name}
                    location={job.location || 'Leeds'}
                    isRemote={job.is_remote}
                    compensation={job.compensation}
                    roleCategory={job.role_category}
                    skills={job.skills_required || []}
                  />
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/fractional-jobs?location=Leeds"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-purple-700 text-white hover:bg-purple-800 transition-all"
              >
                View All Yorkshire Jobs →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Leeds FAQs</h2>
          <div className="space-y-6">
            <details className="group bg-white rounded-xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-gray-900 list-none">
                How much do fractional executives earn in Leeds?
                <span className="text-purple-700 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Leeds fractional executives typically earn £600-£1,000 per day. Legal and financial services roles command premium rates, often comparable to Birmingham levels. The <a href="https://www.cipd.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD</a> provides insights on executive compensation trends across the UK.
              </p>
            </details>
            <details className="group bg-white rounded-xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-gray-900 list-none">
                Is Leeds good for fractional tech roles?
                <span className="text-purple-700 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Yes - Leeds Digital Hub is thriving with 20% YoY growth in fractional tech positions. Companies like Sky Betting, NHS Digital, and numerous scale-ups hire fractional CTOs and tech leaders. The <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute</a> highlights Yorkshire's strong scale-up community requiring flexible leadership.
              </p>
            </details>
            <details className="group bg-white rounded-xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-gray-900 list-none">
                Can I work with London clients from Leeds?
                <span className="text-purple-700 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Absolutely. Leeds is just 2hr 15min from London by train. Many fractional executives maintain a mixed client base, leveraging Leeds' lower costs while accessing London opportunities. The <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors</a> supports directors across Yorkshire with networking and professional development.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Related Searches */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Searches</h2>
          <div className="flex flex-wrap gap-3">
            {relatedSearches.map((search) => (
              <Link
                key={search}
                href={`/fractional-jobs?q=${encodeURIComponent(search)}`}
                className="px-4 py-2 bg-gray-50 rounded-full text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors text-sm"
              >
                {search}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Work in Yorkshire?
          </h2>
          <p className="text-xl text-purple-100 mb-10">
            {stats.total}+ fractional opportunities across Leeds, Sheffield, and York. The <a href="https://www.british-business-bank.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Business Bank</a> continues investing in Yorkshire SMEs creating demand for fractional expertise.
          </p>
          <Link
            href="/fractional-jobs?location=Leeds"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-white text-purple-900 hover:bg-purple-50 transition-all"
          >
            Browse Yorkshire Jobs →
          </Link>
        </div>
      </section>
    </div>
  )
}
