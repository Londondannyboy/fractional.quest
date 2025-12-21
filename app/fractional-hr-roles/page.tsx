import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { JobsGraph3D } from '@/components/JobsGraph3D'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional HR Roles UK 2025 | All HR Leadership Positions Explained',
  description: 'Guide to all fractional HR roles: People Partner, HR Director, CHRO, HR Consultant. Day rates £600-£1,300. Find the right role for your experience level.',
  keywords: 'fractional hr roles, fractional hr positions, types of fractional hr, fractional hr jobs types, fractional hr career',
  alternates: {
    canonical: 'https://fractional.quest/fractional-hr-roles',
  },
  openGraph: {
    title: 'Fractional HR Roles UK 2025 | Complete Guide',
    description: 'All fractional HR roles explained - People Partner, HR Director, CHRO, and Consultant.',
    images: ['/images/fractional-hr-roles.jpg'],
    url: 'https://fractional.quest/fractional-hr-roles',
  },
}

async function getHRStats() {
  try {
    const sql = createDbQuery()
    const result = await sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'HR'`
    return parseInt((result[0] as any)?.count || '0')
  } catch {
    return 32
  }
}

const roles = [
  {
    title: 'Fractional People Partner',
    altTitles: 'HR Business Partner, People Operations Lead',
    dayRate: '£600-£850',
    experience: '8-12 years',
    focus: 'Hands-on HR support, manager coaching, day-to-day people operations',
    bestFor: '10-50 employees, startups needing practical HR guidance',
    responsibilities: ['First-line manager support', 'Recruitment coordination', 'Policy implementation', 'Employee queries', 'Basic ER support'],
    link: '/fractional-hr'
  },
  {
    title: 'Fractional HR Consultant',
    altTitles: 'HR Specialist, Project HR',
    dayRate: '£700-£950',
    experience: '10-15 years',
    focus: 'Specialist expertise on specific projects or problems',
    bestFor: 'Project work (HRIS, handbook, compensation), companies with existing HR needing expert support',
    responsibilities: ['HRIS implementation', 'Policy development', 'Compensation reviews', 'DE&I strategy', 'HR audits'],
    link: '/fractional-hr-consultant'
  },
  {
    title: 'Fractional HR Director',
    altTitles: 'Head of HR, People Director',
    dayRate: '£900-£1,100',
    experience: '12-18 years',
    focus: 'Senior HR leadership, building HR function, strategic people work',
    bestFor: '30-150 employees, scale-ups building professional HR, companies with complex ER',
    responsibilities: ['People strategy', 'HR infrastructure', 'Complex ER', 'Senior hiring', 'Performance management', 'Leadership team advisory'],
    link: '/fractional-hr-director',
    featured: true
  },
  {
    title: 'Fractional CHRO',
    altTitles: 'Chief People Officer, VP People',
    dayRate: '£1,100-£1,300',
    experience: '18+ years',
    focus: 'Board-level strategy, culture transformation, organisational design',
    bestFor: '100-500 employees, PE-backed companies, M&A situations, exit preparation',
    responsibilities: ['Board reporting', 'Culture transformation', 'Org design', 'Executive team', 'M&A integration', 'Strategic planning'],
    link: '/fractional-chro'
  },
]

export default async function FractionalHRRolesPage() {
  const jobCount = await getHRStats()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <JobsGraph3D categoryFilter="HR" limit={25} height="100%" isHero={true} showOverlay={true} />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/fractional-hr" className="inline-flex items-center text-white/60 hover:text-white mb-6 transition-colors text-sm">
              <span className="mr-2">←</span> Back to HR Hub
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-pink-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Role Guide
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Fractional<br />
                <span className="text-pink-400">HR Roles</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
                All <strong className="text-white">fractional HR positions</strong> explained. Find the right role for your experience or hiring needs.
              </p>
              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-pink-400">4</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Role Types</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">£600-£1,300</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Day Rate Range</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">{jobCount}+</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Live Roles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">All Roles</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional HR Role Types</h2>
          </div>

          <div className="space-y-8">
            {roles.map((role, i) => (
              <div key={i} className={`p-8 ${role.featured ? 'bg-pink-50 border-2 border-pink-500' : 'bg-gray-50 border-l-4 border-gray-300'}`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-black text-gray-900">{role.title}</h3>
                      {role.featured && <span className="bg-pink-500 text-white text-xs font-bold px-2 py-1 uppercase">Most Common</span>}
                    </div>
                    <p className="text-gray-500 text-sm mb-4">Also known as: {role.altTitles}</p>
                    <p className="text-gray-700 mb-4">{role.focus}</p>
                    <p className="text-sm text-gray-600 mb-4"><strong>Best for:</strong> {role.bestFor}</p>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Key Responsibilities:</p>
                      <div className="flex flex-wrap gap-2">
                        {role.responsibilities.map((resp, j) => (
                          <span key={j} className="bg-white px-3 py-1 text-sm text-gray-700 border border-gray-200">{resp}</span>
                        ))}
                      </div>
                    </div>
                    <Link href={role.link} className="text-pink-600 hover:text-pink-700 font-semibold text-sm">
                      Learn more about {role.title} →
                    </Link>
                  </div>
                  <div className="md:text-right md:min-w-[200px]">
                    <div className={`text-3xl font-black mb-1 ${role.featured ? 'text-pink-600' : 'text-gray-900'}`}>{role.dayRate}</div>
                    <div className="text-gray-500 text-sm mb-3">per day</div>
                    <div className="text-gray-700 text-sm">{role.experience} experience</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Progression */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Career Path</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional HR Career Progression</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-pink-200 hidden md:block"></div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gray-200 text-gray-600 font-black text-lg flex items-center justify-center flex-shrink-0">8-12</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">People Partner</h3>
                  <p className="text-gray-600">Build operational HR experience. Handle day-to-day HR across recruitment, ER basics, and policy implementation. Develop commercial awareness.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gray-300 text-gray-700 font-black text-lg flex items-center justify-center flex-shrink-0">10-15</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">HR Consultant</h3>
                  <p className="text-gray-600">Develop specialisation. Lead projects independently. Build client management skills. Often a stepping stone to fractional work.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-pink-500 text-white font-black text-lg flex items-center justify-center flex-shrink-0">12-18</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">HR Director</h3>
                  <p className="text-gray-600">Lead HR functions. Strategic thinking with operational execution. The sweet spot for fractional work—high demand, good rates, meaningful impact.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gray-50 text-white font-black text-lg flex items-center justify-center flex-shrink-0">18+</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">CHRO</h3>
                  <p className="text-gray-600">Board-level leadership. Org-wide transformation. Multiple CHRO roles under your belt. Premium rates but narrower market.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Find Your Fractional HR Role</h2>
          <p className="text-gray-300 mb-8">Browse opportunities across all HR role types.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/fractional-hr-jobs-uk" className="px-8 py-4 bg-pink-500 text-white font-semibold hover:bg-pink-400 transition-colors">
              Browse HR Jobs
            </Link>
            <Link href="/fractional-hr" className="px-8 py-4 border-2 border-white font-semibold hover:bg-white/10 transition-colors">
              Complete HR Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">HR Cluster</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-hr" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Complete HR Guide</Link>
              <Link href="/fractional-hr-jobs-uk" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Jobs UK</Link>
              <Link href="/fractional-hr-director" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Director</Link>
              <Link href="/fractional-chro" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Fractional CHRO</Link>
              <Link href="/fractional-hr-salary" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Salary Guide</Link>
              <Link href="/interim-hr-director" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Interim HR</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
