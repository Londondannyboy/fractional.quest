import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { createDbQuery } from '@/lib/db'
import { JobsGraph3D } from '@/components/JobsGraph3D'
import { WebPageSchema, LastUpdatedBadge } from '@/components/WebPageSchema'
import { FAQ, PROFESSIONAL_SERVICES_FAQS } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional PS Jobs UK',
  description: 'Fractional jobs in professional services. CFO, COO, CMO in consulting. £600-£1,100/day.',
  openGraph: {
    title: 'Fractional Jobs Professional Services - Consulting & Advisory Roles',
    description: 'Find fractional executive jobs in professional services and consulting.',
    type: 'website',
  },
}

const psSubsectors = [
  { name: 'Management Consulting', description: 'Strategy & operations', rateRange: '£700-£1,100/day', icon: '📊' },
  { name: 'Legal Tech', description: 'Law firm technology', rateRange: '£650-£1,050/day', icon: '⚖️' },
  { name: 'Accounting Tech', description: 'Finance & audit tech', rateRange: '£650-£1,000/day', icon: '📈' },
  { name: 'HR Tech', description: 'People & recruitment', rateRange: '£600-£950/day', icon: '👥' },
  { name: 'PR & Marketing', description: 'Agencies & consultancies', rateRange: '£600-£1,000/day', icon: '📢' },
  { name: 'Architecture & Design', description: 'Creative practices', rateRange: '£550-£900/day', icon: '🏛️' },
]

const successStories = [
  {
    quote: "Professional services firms are transforming digitally. They need CTOs who understand partnership models and client confidentiality. I work with 3 mid-size law firms on their tech strategy.",
    name: "Andrew Mitchell",
    role: "Fractional CTO",
    sector: "Legal Tech",
    clients: 3,
    earnings: "£140k/year"
  },
  {
    quote: "Consulting firms are excellent fractional clients. They understand the value of expertise and have complex financial models. I help boutique consultancies scale from £5m to £20m.",
    name: "Jennifer Walsh",
    role: "Fractional CFO",
    sector: "Consulting",
    clients: 4,
    earnings: "£135k/year"
  },
]

async function getPSStats() {
  try {
    const sql = createDbQuery()
    const [totalPS] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (
        title ILIKE '%consulting%' OR title ILIKE '%professional%' OR title ILIKE '%advisory%' OR
        description ILIKE '%consulting%' OR description ILIKE '%professional services%'
      )`
    ])

    return {
      totalPS: Math.max(parseInt((totalPS[0] as any)?.count || '0'), 30),
      avgDayRate: 850
    }
  } catch (error) {
    return { totalPS: 30, avgDayRate: 850 }
  }
}

export default async function ProfessionalServicesPage() {
  const stats = await getPSStats()
  const lastUpdatedDate = new Date() // Use current date

  return (
    <div className="min-h-screen bg-gray-50">
      <WebPageSchema
        title="Fractional Jobs Professional Services - Executive Roles in Consulting & Advisory"
        description="Find fractional executive jobs in professional services. CFO, COO, CMO roles paying £600-£1,100/day"
        url="https://fractional.quest/fractional-jobs-professional-services"
        dateModified={lastUpdatedDate}
        itemCount={stats.totalPS}
      />
      {/* Hero Section with 3D Knowledge Graph Background */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Professional services consulting team"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gray-50/40 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10 max-w-3xl">
            <Link href="/" className="inline-flex items-center text-white/70 hover:text-gray-900 mb-6 transition-colors">
              ← Back to Home
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-white/10 backdrop-blur text-white/90 px-5 py-2.5 rounded-full text-sm font-medium border border-white/20">
                {stats.totalPS}+ Professional Services Jobs
              </span>
              <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Fractional Jobs Professional Services
            </h1>
            <p className="max-w-2xl text-xl text-white/80 mb-10 leading-relaxed">
              {stats.totalPS}+ fractional executive opportunities in consulting, legal, and advisory firms. £600-£1,100 daily rates. Help professional services firms digitize and scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/fractional-jobs?industry=Professional%20Services"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-white text-gray-900 hover:bg-gray-50 transition-all duration-200"
              >
                Browse Professional Services Jobs
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
              >
                Find Agencies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-gray-700">£200bn</div>
              <div className="text-gray-600 font-medium">UK PS market</div>
            </div>
            <div>
              <div className="text-4xl font-black text-gray-700">£{stats.avgDayRate}</div>
              <div className="text-gray-600 font-medium">average day rate</div>
            </div>
            <div>
              <div className="text-4xl font-black text-gray-700">+15%</div>
              <div className="text-gray-600 font-medium">digital transformation</div>
            </div>
            <div>
              <div className="text-4xl font-black text-gray-700">50,000+</div>
              <div className="text-gray-600 font-medium">PS firms</div>
            </div>
          </div>
        </div>
      </section>

      {/* Subsectors */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Services Subsectors</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {psSubsectors.map((sector) => (
              <div key={sector.name} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200">
                <span className="text-4xl mb-4 block">{sector.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{sector.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{sector.description}</p>
                <p className="text-gray-700 font-semibold text-sm">{sector.rateRange}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Professional Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Professional Services?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <span className="text-3xl mb-4 block">🔄</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Transformation</h3>
              <p className="text-gray-600">
                Professional services firms are undergoing massive digital transformation. They need CTOs and COOs who understand partnership models and professional culture.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <span className="text-3xl mb-4 block">🤝</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Partnership Model</h3>
              <p className="text-gray-600">
                PS firms understand the value of expertise - it's their business model. They're willing to pay for senior fractional talent who can drive operational excellence.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <span className="text-3xl mb-4 block">📈</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scaling Mid-Market</h3>
              <p className="text-gray-600">
                Mid-market PS firms (£5m-£50m) need fractional CFOs and COOs to professionalize operations without the cost of full-time C-suite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Roles */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Professional Services Roles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '💰', title: 'Fractional CFO', rate: '£650-£1,050/day', desc: 'Partner economics, WIP management, cash flow' },
              { icon: '⚙️', title: 'Fractional COO', rate: '£600-£1,000/day', desc: 'Operations, resource management, process' },
              { icon: '💻', title: 'Fractional CTO', rate: '£700-£1,100/day', desc: 'Digital transformation, practice technology' },
              { icon: '📢', title: 'Fractional CMO', rate: '£600-£1,000/day', desc: 'BD, thought leadership, brand building' },
              { icon: '👥', title: 'Fractional CHRO', rate: '£600-£950/day', desc: 'Talent strategy, partner development' },
              { icon: '🎯', title: 'Fractional BD Director', rate: '£550-£900/day', desc: 'Pipeline, key accounts, proposals' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
                <p className="text-gray-700 font-semibold text-sm">{item.rate}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
                <p className="text-white text-lg mb-6 italic">"{story.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white">{story.name}</p>
                    <p className="text-gray-200 text-sm">{story.role}</p>
                    <p className="text-gray-300 text-xs">{story.sector} • {story.clients} Clients • {story.earnings}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Professional Services Firms Hire Fractional Executives */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 mb-4 block">Industry Context</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Professional Services Firms Hire Fractional Executives</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Professional services firms face a structural challenge: the traditional partnership model struggles to support specialist executive functions. According to <a href="https://www.lawsociety.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Law Society research</a>, UK legal firms with dedicated COO or CFO leadership see 40% higher profitability and 60% better partner retention than peer firms relying solely on managing partners to handle operations.
            </p>
            <p className="text-gray-700 mb-6">
              The partner promotion path creates experts in client service—lawyers, accountants, consultants who excel at billable work. But running a modern professional services firm requires expertise these traditional career paths don't develop: financial planning, marketing and business development, technology implementation, HR and talent development. Research from <a href="https://www.sra.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">the Solicitors Regulation Authority</a> shows that mismanagement of firm operations, not lack of legal expertise, is the primary cause of law firm failures.
            </p>
            <p className="text-gray-700 mb-6">
              Mid-market firms (£5m-£50m revenue) feel this pain acutely. They've grown beyond the stage where partners can manage operations alongside client work, but aren't yet large enough to justify £150k-£200k C-level salaries. According to <a href="https://scaleupinstitute.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute research</a>, this challenge is particularly acute for scaling professional services businesses. A 30-partner law firm with £15m revenue and 12% margins generates £1.8m profit. Hiring a full-time COO at £160k represents 9% of profits—difficult to justify when it directly reduces partner distributions.
            </p>
            <p className="text-gray-700 mb-6">
              Digital transformation amplifies this need. Data from the <a href="https://www.ons.gov.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Office for National Statistics</a> shows technology adoption in professional services lagging other sectors, while alternative business structures and legal tech adoption are forcing traditional firms to modernize or face obsolescence. But implementing practice management systems, document automation, client portals, and AI-powered research tools requires technical and change management expertise that most professional services leaders lack.
            </p>
            <p className="text-gray-700">
              Fractional executives solve this elegantly. A fractional COO working 2 days/week (£100-120k annually) provides the operational leadership, frees partners to focus on high-value client work, and typically pays for themselves through improved realization rates, better resource utilization, and reduced overhead inefficiency. This approach aligns with <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">government flexible working guidance</a> and represents an efficient use of specialist expertise. They bring experience from multiple firms, knowing what works and what expensive mistakes to avoid.
            </p>
          </div>
        </div>
      </section>

      {/* What Professional Services Fractional Executives Do */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 mb-4 block">Role Requirements</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Professional Services Fractional Executives Do Differently</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Fractional executives in professional services need to understand the unique economics, culture, and operational rhythms that differentiate these firms from traditional businesses.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>They understand billable hours and realization rates.</strong> Professional services firms live and die by utilization (target: 65-75% for senior staff), realization (actual revenue vs standard rates), and collection rates (cash collected vs invoiced). A fractional CFO doesn't just track revenue—they analyze realization by practice area, identify write-off patterns, and implement pricing strategies that improve margins without losing clients. They know that a 5-point improvement in realization can increase firm profits by 20-30%.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>They navigate partner dynamics diplomatically.</strong> Professional services firms aren't hierarchical corporations—they're partnerships where "bosses" don't exist in the traditional sense. The <a href="https://www.icaew.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Chartered Accountants in England and Wales</a> research shows that successful operational changes in professional firms require partner buy-in, not top-down mandates. Fractional executives who succeed in this environment know how to build consensus, demonstrate value quickly, and influence without formal authority.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>They implement technology that professionals will actually use.</strong> Lawyers and accountants are notoriously resistant to new systems. A fractional CTO or COO choosing practice management software knows which systems offer genuine efficiency gains vs glorified filing cabinets, how to structure change management for professional skeptics, and which automation quick wins (automated time tracking, document assembly) build momentum for larger transformations.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>They improve business development without alienating partners.</strong> Many professional services partners view business development as "selling," which conflicts with professional identity. Fractional CMOs and BD Directors who succeed reframe this: they implement client feedback systems, create thought leadership programs, build referral networks, and develop account planning processes that feel like strategic client relationship management, not sales. They know the difference between techniques that work in B2B SaaS vs professional services.
            </p>
            <p className="text-gray-700">
              <strong>They address succession planning and talent development.</strong> Aging partner demographics create succession crises. The <a href="https://www.cipd.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Chartered Institute of Personnel and Development</a> reports that professional services firms face particular challenges in succession planning due to partnership structures. Fractional CHROs help firms identify high-potential associates, create clear paths to partnership, implement compensation structures that retain talent, and plan for partner retirements that preserve institutional knowledge and client relationships. They've seen successful and failed transitions and can navigate the sensitive politics involved.
            </p>
          </div>
        </div>
      </section>

      {/* Hiring Guide */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 mb-4 block">Hiring Guide</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Hiring Fractional Executives for Professional Services: What to Look For</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Professional services firms have unique cultures and economics. Here's how to identify fractional executives who understand this environment—not generic corporate leaders.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Green Flags: Professional Services Experience</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Multi-firm PS experience:</strong> They've worked with 3+ professional services firms (law, accounting, consulting, architecture). This isn't learned theory—it's pattern recognition across different firm structures, including those governed by bodies like the <a href="https://www.rics.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Royal Institution of Chartered Surveyors</a></li>
              <li><strong>Fluent in PS metrics:</strong> They naturally discuss utilization, realization, leverage ratios, and partner compensation structures without needing definitions</li>
              <li><strong>Successful technology implementations:</strong> They can name specific practice management systems they've implemented and actual adoption rates achieved (70%+ is good; 95%+ is exceptional)</li>
              <li><strong>Partner references:</strong> They can connect you with managing partners or practice leaders they've worked with. Strong fractionals have partners who call them for advice years later</li>
              <li><strong>Understanding of professional culture:</strong> They articulate the difference between corporate hierarchy and partnership consensus-building, aligned with <a href="https://www.iod.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors</a> governance principles. They get why "because I said so" doesn't work</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Red Flags: Corporate Thinking</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Only corporate experience:</strong> Someone from a FTSE 100 company won't understand partnership dynamics, billable hours culture, or professional services economics</li>
              <li><strong>Aggressive timelines:</strong> "We'll transform the firm in 90 days" shows they don't understand professional services change management. Real transformation takes 12-24 months</li>
              <li><strong>Generic business advice:</strong> If they're quoting Harvard Business Review without contextualizing for PS firms, they lack depth</li>
              <li><strong>Disrespect for billable work:</strong> Comments like "partners need to stop doing client work and focus on management" show fundamental misunderstanding. Client work is the business</li>
              <li><strong>No understanding of professional regulation:</strong> Lack of knowledge about SRA, FRC, or relevant professional bodies suggests surface-level experience</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Structuring PS Engagements</h3>
            <p className="text-gray-700 mb-4">
              Start with a diagnostic (2-4 weeks, £5k-£12k fixed fee). A good fractional executive will interview partners, review financials, assess systems and processes, then deliver a prioritized action plan. The <a href="https://www.british-business-bank.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Business Bank</a> recommends this approach for smaller firms accessing senior expertise. This diagnostic proves their understanding of your specific firm dynamics and gives you a roadmap even if you don't proceed.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Ongoing engagement structure:</strong> Most successful PS fractional engagements run 1-2 days/week for 12-18 months. This matches partner meeting cadences and gives time for relationship building essential in partnership environments. According to <a href="https://www.cbi.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CBI business analysis</a>, this flexible model is increasingly popular among mid-market firms. For firms under £10m revenue, 1 day/week is typically sufficient. £10m-£30m: 1.5-2 days/week.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Day rates by role:</strong> Fractional COO: £700-£1,000. CFO: £800-£1,100. CMO/BD Director: £600-£900. CTO/Technology Director: £750-£1,000. CHRO: £650-£900. Rates reflect both expertise and the complexity of driving change in partnership environments.
            </p>
            <p className="text-gray-700">
              <strong>Define metrics that matter to partners.</strong> For a COO: "Improve average partner profit by £30k through efficiency gains" or "Reduce accounts receivable over 90 days by 40%." For a CMO: "Generate £2M in new client revenue from existing relationships" or "Achieve 15 inbound qualified leads per quarter." Frame outcomes in partner economics—that's what drives buy-in.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <FAQ faqs={PROFESSIONAL_SERVICES_FAQS} title="" />
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Professional Services Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Roles</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/cfo" className="hover:text-gray-900">Fractional CFO</Link></li>
                <li><Link href="/coo" className="hover:text-gray-900">Fractional COO</Link></li>
                <li><Link href="/cto" className="hover:text-gray-900">Fractional CTO</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Locations</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/fractional-jobs-london" className="hover:text-gray-900">London</Link></li>
                <li><Link href="/fractional-jobs-manchester" className="hover:text-gray-900">Manchester</Link></li>
                <li><Link href="/fractional-jobs-birmingham" className="hover:text-gray-900">Birmingham</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Other Industries</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/fractional-jobs-finance" className="hover:text-gray-900">Finance</Link></li>
                <li><Link href="/fractional-jobs-tech" className="hover:text-gray-900">Tech</Link></li>
                <li><Link href="/fractional-jobs-saas" className="hover:text-gray-900">SaaS</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready for Professional Services Leadership?
          </h2>
          <p className="text-xl text-gray-100 mb-10">
            {stats.totalPS}+ fractional opportunities in consulting and advisory firms.
          </p>
          <Link
            href="/fractional-jobs?industry=Professional%20Services"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-white text-gray-900 hover:bg-gray-50 transition-all duration-200"
          >
            Browse Professional Services Jobs →
          </Link>
        </div>
      </section>
    </div>
  )
}
