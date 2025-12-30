import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'
import { createDbQuery } from '@/lib/db'
import { HotJobsLines } from '@/components/HotJobsLines'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Part-Time CTO UK 2025',
  description: 'Part-time CTO for startups and scale-ups. Fractional technology leadership without full-time cost.',
  keywords: 'part-time cto, fractional cto, part-time chief technology officer, startup cto, tech leadership',
  alternates: {
    canonical: 'https://fractional.quest/part-time-cto',
  },
  openGraph: {
    title: 'Part-Time CTO UK 2025',
    description: 'Fractional technology leadership for growing tech companies.',
    url: 'https://fractional.quest/part-time-cto',
  },
}

async function getPartTimeCtoJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT id, slug, title, company_name, location, is_remote, compensation, role_category, posted_date
      FROM jobs
      WHERE is_active = true
        AND (title ILIKE '%part-time%cto%' OR title ILIKE '%part time%cto%' OR title ILIKE '%fractional%cto%'
             OR title ILIKE '%part-time%tech%' OR title ILIKE '%part time%tech%' OR title ILIKE '%fractional%tech%')
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 10
    `
    return jobs
  } catch (error) {
    return []
  }
}

const faqItems = [
  {
    question: 'What is a part-time CTO?',
    answer: 'A part-time CTO is an experienced technology leader who works with companies 1-3 days per week, providing technical strategy, architecture guidance, and engineering leadership without the full-time commitment or cost.',
  },
  {
    question: 'How much does a part-time CTO cost?',
    answer: 'Part-time CTOs in the UK typically charge £900-£1,500 per day. At 2 days per week, this equals £90,000-£150,000 annually—compared to £150,000-£250,000+ for a full-time CTO with equity.',
  },
  {
    question: 'When should a startup hire a part-time CTO?',
    answer: 'Hire a part-time CTO when: you have a technical product but non-technical founders; scaling engineering and need senior oversight; facing major architectural decisions; or when VCs expect technology leadership.',
  },
  {
    question: 'Can a part-time CTO manage developers?',
    answer: 'Yes, part-time CTOs manage engineering teams, set direction, conduct 1:1s, and oversee delivery. They work with tech leads for day-to-day management while providing strategic leadership and senior decision-making.',
  },
]

export default async function PartTimeCTOPage() {
  const partTimeJobs = await getPartTimeCtoJobs()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-700 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Tech Leadership
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Part-Time<br />CTO
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 leading-relaxed font-light">
              Fractional technology leadership for startups and scale-ups building great products.
            </p>
          </div>
        </div>
      </section>

      {/* Live Part-Time CTO Jobs */}
      {(partTimeJobs as any[]).length > 0 && (
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <HotJobsLines
              jobs={(partTimeJobs as any[]).map(job => ({
                id: job.id, slug: job.slug, title: job.title, company_name: job.company_name,
                location: job.location, compensation: job.compensation, role_category: job.role_category,
                posted_date: job.posted_date, is_remote: job.is_remote,
              }))}
              title="Live Part-Time CTO Jobs"
              maxJobs={10}
              viewAllHref="/fractional-cto-jobs-uk"
              viewAllText="View all jobs"
            />
          </div>
        </section>
      )}

      {/* Quick Stats */}
      <section className="py-12 bg-blue-50 border-b-4 border-blue-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center border border-blue-200">
              <div className="text-3xl font-black text-blue-800">£900-1,500</div>
              <div className="text-sm text-gray-600">Day Rate</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-blue-200">
              <div className="text-3xl font-black text-blue-800">1-3</div>
              <div className="text-sm text-gray-600">Days/Week</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-blue-200">
              <div className="text-3xl font-black text-blue-800">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-blue-200">
              <div className="text-3xl font-black text-blue-800">50%+</div>
              <div className="text-sm text-gray-600">Cost Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="CTO working with development team"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-xl prose-gray max-w-none">
            <h2 className="text-3xl font-black text-gray-900">What Does a Part-Time CTO Do?</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              A part-time CTO provides the same strategic technology leadership as a full-time CTO, condensed into 1-3 days per week. They're particularly valuable for startups and scale-ups that need senior technical guidance but can't justify the cost of a full-time hire.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Technical Strategy</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Technology roadmap and vision</li>
                  <li>Architecture decisions</li>
                  <li>Build vs buy evaluation</li>
                  <li>Tech stack selection</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Engineering Leadership</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Team structure and hiring</li>
                  <li>Process and methodology</li>
                  <li>Code quality and standards</li>
                  <li>Performance management</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Product Technology</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Scalability planning</li>
                  <li>Security and compliance</li>
                  <li>Technical debt management</li>
                  <li>Infrastructure strategy</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Stakeholder Interface</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Board and investor reporting</li>
                  <li>Due diligence support</li>
                  <li>Vendor management</li>
                  <li>Cross-functional alignment</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">When to Hire a Part-Time CTO</h2>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Non-Technical Founders</h4>
                  <p className="text-sm text-gray-600 m-0">You're building a tech product but founders don't have deep technical background.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Scaling Engineering</h4>
                  <p className="text-sm text-gray-600 m-0">Team is growing from 3-5 developers to 10-20+ and needs senior leadership structure.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Major Technical Decisions</h4>
                  <p className="text-sm text-gray-600 m-0">Facing architecture redesign, platform migration, or significant tech investment.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Investor Expectations</h4>
                  <p className="text-sm text-gray-600 m-0">VCs or board want senior tech leadership on the team for credibility and oversight.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Pre-Full-Time Hire</h4>
                  <p className="text-sm text-gray-600 m-0">Want to validate the need for a CTO and define the role before permanent hire.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Part-Time CTO Costs</h2>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Day Rate</div>
                <div className="text-2xl font-black text-gray-900">£900-£1,500</div>
                <div className="text-xs text-gray-500">per day</div>
              </div>
              <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl text-center">
                <div className="text-sm font-bold text-blue-700 uppercase mb-2">Annual (2 days/wk)</div>
                <div className="text-2xl font-black text-gray-900">£90,000-£150,000</div>
                <div className="text-xs text-gray-500">vs £180,000+ full-time</div>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Savings</div>
                <div className="text-2xl font-black text-gray-900">50%+</div>
                <div className="text-xs text-gray-500">vs permanent hire</div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Part-Time vs Full-Time CTO</h2>

            <div className="overflow-x-auto my-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 font-bold text-gray-900">Aspect</th>
                    <th className="text-left py-3 font-bold text-blue-700">Part-Time CTO</th>
                    <th className="text-left py-3 font-bold text-gray-500">Full-Time CTO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 font-medium">Annual Cost</td>
                    <td className="py-3 text-blue-700">£90,000-£150,000</td>
                    <td className="py-3 text-gray-600">£150,000-£250,000+</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Equity</td>
                    <td className="py-3 text-blue-700">Usually none</td>
                    <td className="py-3 text-gray-600">1-5% typical</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Availability</td>
                    <td className="py-3 text-blue-700">1-3 days/week</td>
                    <td className="py-3 text-gray-600">Full-time</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Experience</td>
                    <td className="py-3 text-blue-700">Often more senior</td>
                    <td className="py-3 text-gray-600">Varies</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Best For</td>
                    <td className="py-3 text-blue-700">Seed to Series A</td>
                    <td className="py-3 text-gray-600">Series B+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">What to Look for in a Part-Time CTO</h2>

            <ul className="text-lg space-y-3 my-8">
              <li><strong>Relevant stack experience:</strong> Deep expertise in your technology choices</li>
              <li><strong>Scale experience:</strong> Has built and scaled teams at your target stage</li>
              <li><strong>Product sense:</strong> Understands business context, not just technology</li>
              <li><strong>Communication:</strong> Can translate tech to non-technical stakeholders</li>
              <li><strong>Startup experience:</strong> Comfortable with ambiguity and limited resources</li>
            </ul>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-blue-400">Summary:</strong> A part-time CTO provides 1-3 days/week of senior technology leadership at £900-£1,500/day—ideal for startups needing strategic tech guidance without full-time cost.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">FAQs</h2>
          <FAQ items={faqItems} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find a Part-Time CTO</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-cto-jobs-uk" className="px-10 py-5 bg-white text-blue-800 font-bold uppercase tracking-wider hover:bg-blue-50 transition-colors">
              CTO Jobs
            </Link>
            <Link href="/fractional-executive-jobs" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-blue-800 transition-colors">
              All Executive Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-cto-jobs-uk" className="text-gray-600 hover:text-blue-700 font-medium">CTO Jobs</Link>
            <Link href="/fractional-cto-services" className="text-gray-600 hover:text-blue-700 font-medium">CTO Services</Link>
            <Link href="/fractional-product-director" className="text-gray-600 hover:text-blue-700 font-medium">Product Director</Link>
            <Link href="/fractional-executive-jobs" className="text-gray-600 hover:text-blue-700 font-medium">Executive Jobs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
