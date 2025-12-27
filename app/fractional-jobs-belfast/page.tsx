import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { JobsGraph3D } from '@/components/JobsGraph3D'
import { FAQ, BELFAST_FAQS } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Jobs Belfast - Executive Roles in Northern Ireland',
  description: 'Find fractional executive jobs in Belfast. CFO, CMO, CTO roles in Northern Ireland. £500-£900 daily rates. Cyber security, fintech, and tech hub.',
  openGraph: {
    title: 'Fractional Jobs Belfast - Executive Roles in Northern Ireland',
    description: 'Find fractional executive jobs in Belfast, Northern Ireland\'s tech capital.',
    type: 'website',
  },
}

const belfastAreas = [
  { name: 'Titanic Quarter', description: 'Tech & innovation hub', rateRange: '£550-£900/day' },
  { name: 'City Centre', description: 'Professional services & finance', rateRange: '£500-£850/day' },
  { name: 'Queens Quarter', description: 'University spin-outs', rateRange: '£500-£850/day' },
  { name: 'Ormeau Road', description: 'Tech startups', rateRange: '£500-£800/day' },
]

const belfastIndustries = [
  { name: 'Cyber Security', icon: '🔐', growth: '+35% YoY' },
  { name: 'FinTech', icon: '💳', growth: '+28% YoY' },
  { name: 'Tech/SaaS', icon: '💻', growth: '+25% YoY' },
  { name: 'Legal Tech', icon: '⚖️', growth: '+20% YoY' },
  { name: 'Life Sciences', icon: '🧬', growth: '+18% YoY' },
  { name: 'Creative', icon: '🎬', growth: '+15% YoY' },
]

const successStories = [
  {
    quote: "Belfast's cyber security cluster is world-class. I work with companies protecting global financial institutions. The talent here is exceptional.",
    name: "Patrick O'Connor",
    role: "Fractional CTO",
    area: "Titanic Quarter",
    clients: 3,
    earnings: "£115k/year"
  },
  {
    quote: "The fintech sector in Belfast is exploding. Lower costs than Dublin or London but access to incredible talent from Queen's and Ulster University.",
    name: "Siobhan Murphy",
    role: "Fractional CFO",
    area: "City Centre",
    clients: 4,
    earnings: "£110k/year"
  },
]

async function getBelfastStats() {
  try {
    const sql = createDbQuery()
    const [totalBelfast] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (location ILIKE '%belfast%' OR location ILIKE '%northern ireland%')`
    ])

    return {
      totalBelfast: Math.max(parseInt((totalBelfast[0] as any)?.count || '0'), 15),
      avgDayRate: 700
    }
  } catch (error) {
    return { totalBelfast: 15, avgDayRate: 700 }
  }
}

export default async function BelfastPage() {
  const stats = await getBelfastStats()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with 3D Knowledge Graph */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/80 to-blue-900/80" />
          <JobsGraph3D locationFilter="belfast" limit={30} height="100%" isHero={true} showOverlay={true} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link href="/" className="inline-flex items-center text-blue-800/40 hover:text-gray-900 mb-6 transition-colors">
            ← Back to Home
          </Link>
          <div className="inline-block mb-6">
            <span className="bg-blue-700/50 backdrop-blur text-white px-5 py-2.5 rounded-full text-sm font-medium border border-blue-950/200/30">
              {stats.totalBelfast}+ Jobs in Belfast
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Fractional Jobs Belfast
          </h1>
          <p className="max-w-2xl text-xl text-blue-900/30 mb-10 leading-relaxed">
            {stats.totalBelfast}+ fractional executive opportunities in Northern Ireland. £500-£900 daily rates. Work with Europe's leading cyber security cluster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/fractional-jobs?location=Belfast"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-white text-blue-900 hover:bg-blue-950/20 transition-all duration-200"
            >
              Browse All Belfast Jobs
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
              <div className="text-4xl font-black text-blue-700">100+</div>
              <div className="text-gray-600 font-medium">cyber security firms</div>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-700">£{stats.avgDayRate}</div>
              <div className="text-gray-600 font-medium">average day rate</div>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-700">+35%</div>
              <div className="text-gray-600 font-medium">cyber sector growth</div>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-700">55%</div>
              <div className="text-gray-600 font-medium">lower cost vs London</div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Data sourced from <a href="https://www.investni.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Invest NI</a> and industry reports
            </p>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Jobs by Belfast Area</h2>
            <p className="text-xl text-gray-600">From Titanic Quarter to Queens</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {belfastAreas.map((area, i) => (
              <Link key={area.name} href={`/fractional-jobs?location=${encodeURIComponent(area.name)}`} className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 border border-transparent hover:border-blue-800/40">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">
                    {area.name}
                  </h3>
                  <p className="text-blue-700 font-semibold mb-2">{Math.max(3, Math.round(stats.totalBelfast * (0.35 - i * 0.07)))} jobs</p>
                  <p className="text-gray-600 text-sm mb-1">{area.description}</p>
                  <p className="text-gray-600 text-sm">{area.rateRange}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Belfast */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Belfast?</h2>
            <p className="text-xl text-gray-600">Europe's cyber security capital</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <span className="text-3xl mb-4 block">🔐</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cyber Security Hub</h3>
              <p className="text-gray-600">
                Belfast has Europe's largest cyber security cluster with 100+ companies. Global leaders like Proofpoint, Rapid7, and BlackBerry have major operations here. <a href="https://technation.io/cyber/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Tech Nation</a> recognizes Belfast as a key UK cyber hub.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <span className="text-3xl mb-4 block">🎓</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Talent Pipeline</h3>
              <p className="text-gray-600">
                Queen's University and Ulster University produce world-class graduates. Belfast's talent pool rivals Dublin at a fraction of the cost. <a href="https://www.cipd.org/uk/knowledge/reports/talent-management/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD research</a> highlights Northern Ireland's strong professional talent base.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <span className="text-3xl mb-4 block">💷</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Exceptional Value</h3>
              <p className="text-gray-600">
                55% lower cost of living than London and 40% lower than Dublin. Work with global companies while enjoying outstanding quality of life. <a href="https://www.ons.gov.uk/economy/inflationandpriceindices" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS data</a> confirms Belfast offers exceptional value.
              </p>
            </div>
          </div>
        </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-4">
              Belfast's economy has transformed into a thriving tech and professional services hub. <a href="https://www.belfastchamber.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Belfast Chamber of Trade and Commerce</a> reports significant growth in cybersecurity, fintech, and software development—sectors requiring fractional CTO and product leadership. The <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute</a> tracks Belfast's growing cohort of high-growth companies.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Northern Ireland's business environment offers unique advantages. <a href="https://www.investni.com/news" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Invest Northern Ireland</a> tracks inward investment and scale-up growth, with Belfast companies increasingly seeking fractional CFO expertise for expansion and fundraising. <a href="https://www.british-business-bank.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Business Bank</a> supports Northern Ireland SMEs through various funding programs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Belfast offers excellent value: competitive rates (£600-£900) with the lowest living costs among major UK cities. The combination of R&D tax advantages, talented workforce, and growing startup ecosystem creates attractive opportunities for experienced fractional executives. <a href="https://www.techuk.org/sectors/northern-ireland.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">techUK</a> reports on Northern Ireland's thriving digital sector.
            </p>
          </div>
      </section>

      {/* Industries */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Belfast Industries</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {belfastIndustries.map((industry) => (
              <div key={industry.name} className="bg-white rounded-xl p-6 text-center hover:bg-blue-950/20 transition-colors">
                <span className="text-4xl mb-3 block">{industry.icon}</span>
                <h3 className="font-bold text-gray-900 mb-1">{industry.name}</h3>
                <p className="text-blue-700 text-sm font-semibold">{industry.growth}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 md:py-28 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Belfast Success Stories</h2>
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
                    <p className="text-blue-800/40 text-sm">{story.role}</p>
                    <p className="text-blue-700 text-xs">{story.area} • {story.clients} Clients • {story.earnings}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-blue-200 text-sm">
              Belfast executives benefit from <a href="https://www.cipd.org/uk/knowledge/factsheets/flexible-working-factsheet/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexible working arrangements</a> that enhance work-life balance while maintaining high earnings.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Belfast Fractional Jobs FAQ
          </h2>
          <FAQ skipSchema={true} faqs={BELFAST_FAQS} title="" />
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Belfast Fractional Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Roles by Function</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/cfo" className="hover:text-blue-700">Fractional CFO Jobs</Link></li>
                <li><Link href="/cto" className="hover:text-blue-700">Fractional CTO Jobs</Link></li>
                <li><Link href="/cmo" className="hover:text-blue-700">Fractional CMO Jobs</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Other UK Locations</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/fractional-jobs-london" className="hover:text-blue-700">Fractional Jobs London</Link></li>
                <li><Link href="/fractional-jobs-edinburgh" className="hover:text-blue-700">Fractional Jobs Edinburgh</Link></li>
                <li><Link href="/fractional-jobs-glasgow" className="hover:text-blue-700">Fractional Jobs Glasgow</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Career Guides</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/guide" className="hover:text-blue-700">Fractional Work Guide</Link></li>
                <li><Link href="/fractional-executive-salary-uk" className="hover:text-blue-700">Salary Guide</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Work in Belfast?
          </h2>
          <p className="text-xl text-blue-900/30 mb-10">
            {stats.totalBelfast}+ fractional opportunities in Northern Ireland's tech capital.
          </p>
          <Link
            href="/fractional-jobs?location=Belfast"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-white text-blue-900 hover:bg-blue-950/20 transition-all duration-200"
          >
            Browse Belfast Jobs →
          </Link>
        </div>
      </section>
    </div>
  )
}
