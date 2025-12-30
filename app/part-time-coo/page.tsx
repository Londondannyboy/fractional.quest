import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'
import { createDbQuery } from '@/lib/db'
import { HotJobsLines } from '@/components/HotJobsLines'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Part-Time COO UK 2025: Fractional Operations Leadership',
  description: 'Part-time COO services for UK businesses. Expert operations leadership 1-3 days per week. Scale operations without full-time executive costs.',
  keywords: 'part-time COO, fractional COO, part-time chief operating officer, fractional operations, operations leadership, part-time operations director',
  alternates: {
    canonical: 'https://fractional.quest/part-time-coo',
  },
  openGraph: {
    title: 'Part-Time COO UK 2025: Fractional Operations Leadership',
    description: 'Part-time Chief Operating Officer for scaling businesses.',
    url: 'https://fractional.quest/part-time-coo',
  },
}

async function getPartTimeCooJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT id, slug, title, company_name, location, is_remote, compensation, role_category, posted_date
      FROM jobs
      WHERE is_active = true
        AND (title ILIKE '%part-time%coo%' OR title ILIKE '%part time%coo%' OR title ILIKE '%fractional%coo%'
             OR title ILIKE '%part-time%operations%' OR title ILIKE '%part time%operations%' OR title ILIKE '%fractional%operations%')
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
    question: 'What is a part-time COO?',
    answer: 'A part-time COO is an experienced Chief Operating Officer who works with your company 1-3 days per week rather than full-time. They provide strategic operations leadership, optimize processes, and scale your business infrastructure at a fraction of full-time executive cost.',
  },
  {
    question: 'How much does a part-time COO cost in the UK?',
    answer: 'Part-time COOs in the UK typically charge £800-£1,500 per day or £3,000-£8,000 per month for 1-2 days weekly engagement. This compares to £150,000-£250,000+ for a full-time COO salary plus benefits.',
  },
  {
    question: 'When should a company hire a part-time COO?',
    answer: 'Hire a part-time COO when you\'re scaling rapidly and operations are becoming chaotic, when the CEO is overwhelmed with day-to-day management, when you need to professionalize operations before funding or exit, or when you can\'t afford or don\'t need a full-time COO.',
  },
  {
    question: 'What does a part-time COO do?',
    answer: 'A part-time COO manages daily operations, implements systems and processes, oversees team performance, coordinates between departments, manages key projects, develops operational strategy, and ensures the business runs efficiently while the CEO focuses on growth and vision.',
  },
]

export default async function PartTimeCOOPage() {
  const partTimeJobs = await getPartTimeCooJobs()
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Part-Time COO UK 2025: Fractional Operations Leadership',
    description: 'Part-time COO services for UK businesses. Expert operations leadership 1-3 days per week.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    publisher: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest', logo: { '@type': 'ImageObject', url: 'https://fractional.quest/logo.svg' } },
    datePublished: '2025-01-01',
    dateModified: '2025-01-01',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://fractional.quest/part-time-coo' },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fractional.quest' },
      { '@type': 'ListItem', position: 2, name: 'COO', item: 'https://fractional.quest/fractional-coo' },
      { '@type': 'ListItem', position: 3, name: 'Part-Time COO', item: 'https://fractional.quest/part-time-coo' },
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-700 to-rose-600 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Operations Leadership
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Part-Time<br />COO
            </h1>
            <p className="text-2xl md:text-3xl text-rose-100 leading-relaxed font-light">
              Expert operations leadership without the full-time commitment. Scale smarter.
            </p>
          </div>
        </div>
      </section>

      {/* Live Part-Time COO Jobs */}
      {(partTimeJobs as any[]).length > 0 && (
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <HotJobsLines
              jobs={(partTimeJobs as any[]).map(job => ({
                id: job.id, slug: job.slug, title: job.title, company_name: job.company_name,
                location: job.location, compensation: job.compensation, role_category: job.role_category,
                posted_date: job.posted_date, is_remote: job.is_remote,
              }))}
              title="Live Part-Time COO Jobs"
              maxJobs={10}
              viewAllHref="/fractional-coo-jobs-uk"
              viewAllText="View all jobs"
            />
          </div>
        </section>
      )}

      {/* Quick Stats */}
      <section className="py-16 bg-rose-50 border-b-4 border-rose-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-rose-700 mb-2">£800-£1,500</div>
              <div className="text-gray-600">Daily rate range</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-rose-700 mb-2">60-70%</div>
              <div className="text-gray-600">Cost savings vs full-time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-rose-700 mb-2">1-3 Days</div>
              <div className="text-gray-600">Typical weekly commitment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Operations team in planning session"
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
            <h2 className="text-3xl font-black text-gray-900">What is a Part-Time COO?</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              A <strong>part-time COO</strong> (also called a fractional COO) is a senior operations executive who works with your business on a flexible basis—typically 1-3 days per week. They bring the expertise and strategic capability of a full-time Chief Operating Officer at a fraction of the cost.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              According to the <a href="https://www.iod.com" target="_blank" rel="noopener noreferrer" className="text-rose-700 hover:text-rose-800">Institute of Directors</a>, operations leadership is increasingly being accessed through flexible arrangements, particularly by scaling businesses that need professionalization without premature fixed costs.
            </p>

            <h2 className="text-3xl font-black text-gray-900 mt-16">The COO Role Explained</h2>

            <div className="bg-rose-50 border-2 border-rose-200 p-8 rounded-lg my-10">
              <h3 className="font-bold text-gray-900 mb-4">What Does a COO Do?</h3>
              <p className="text-gray-700 mb-4">
                The Chief Operating Officer is the CEO's right hand, responsible for turning strategy into execution. While the CEO focuses on vision, growth, and external relationships, the COO ensures the business runs efficiently day-to-day.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Operations:</strong> Manage daily business operations and processes</li>
                <li><strong>Execution:</strong> Turn strategic plans into operational reality</li>
                <li><strong>People:</strong> Oversee team performance and organizational structure</li>
                <li><strong>Systems:</strong> Implement scalable processes and technology</li>
                <li><strong>Coordination:</strong> Align departments and manage cross-functional projects</li>
              </ul>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Part-Time COO Responsibilities</h2>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Strategic Operations</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Operational strategy development</li>
                  <li>Resource allocation and planning</li>
                  <li>KPI frameworks and dashboards</li>
                  <li>Capacity planning for growth</li>
                  <li>Operational due diligence</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Process Excellence</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Process optimization and automation</li>
                  <li>Quality management systems</li>
                  <li>Workflow standardization</li>
                  <li>Continuous improvement programs</li>
                  <li>Technology implementation</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Team Leadership</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Leadership team development</li>
                  <li>Performance management</li>
                  <li>Organizational design</li>
                  <li>Hiring and team building</li>
                  <li>Culture and engagement</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Project Delivery</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Major initiative management</li>
                  <li>Change management</li>
                  <li>Vendor and partner management</li>
                  <li>Budget oversight</li>
                  <li>Risk management</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">When Do You Need a Part-Time COO?</h2>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-rose-600">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">CEO is Overwhelmed</h4>
                  <p className="text-sm text-gray-600 m-0">The founder/CEO is spending too much time on operations instead of growth, strategy, and external relationships. A part-time COO takes operational burden off their plate.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-rose-600">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Rapid Scaling</h4>
                  <p className="text-sm text-gray-600 m-0">You're growing fast and operations are becoming chaotic. Processes that worked at 10 people break at 50. A COO brings structure and scalability.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-rose-600">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Pre-Investment Professionalization</h4>
                  <p className="text-sm text-gray-600 m-0">Preparing for Series A, B, or PE investment? Investors expect professional operations. A COO builds investment-ready infrastructure.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-rose-600">4</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Exit Preparation</h4>
                  <p className="text-sm text-gray-600 m-0">Planning to sell the business? Buyers pay premiums for well-run companies with documented processes and systems that don't depend on the founder.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Part-Time COO Costs</h2>

            <div className="overflow-x-auto my-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 font-bold text-gray-900">Engagement Level</th>
                    <th className="text-left py-3 font-bold text-gray-900">Time</th>
                    <th className="text-left py-3 font-bold text-rose-700">Monthly Cost</th>
                    <th className="text-left py-3 font-bold text-gray-900">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 font-medium">Light Touch</td>
                    <td className="py-3 text-gray-600">1 day/week</td>
                    <td className="py-3 text-rose-700 font-bold">£3,000-£5,000</td>
                    <td className="py-3 text-gray-600">Strategy and oversight</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Standard</td>
                    <td className="py-3 text-gray-600">2 days/week</td>
                    <td className="py-3 text-rose-700 font-bold">£5,000-£8,000</td>
                    <td className="py-3 text-gray-600">Most scaling companies</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Intensive</td>
                    <td className="py-3 text-gray-600">3 days/week</td>
                    <td className="py-3 text-rose-700 font-bold">£8,000-£12,000</td>
                    <td className="py-3 text-gray-600">Major transformation</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Full-Time Comparison</td>
                    <td className="py-3 text-gray-600">5 days/week</td>
                    <td className="py-3 text-gray-500">£15,000-£25,000</td>
                    <td className="py-3 text-gray-600">Large organizations</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Part-Time COO vs Other Options</h2>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-rose-50 border-2 border-rose-200 p-6 rounded-lg">
                <h3 className="font-bold text-rose-700 mb-3">Part-Time COO</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Ongoing strategic leadership</li>
                  <li>Part of leadership team</li>
                  <li>Builds scalable operations</li>
                  <li>Manages and develops team</li>
                  <li>Accountable for outcomes</li>
                </ul>
              </div>

              <div className="bg-gray-50 border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-500 mb-3">Operations Consultant</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Project-based engagement</li>
                  <li>External advisor</li>
                  <li>Delivers recommendations</li>
                  <li>No team management</li>
                  <li>Advises, doesn't own</li>
                </ul>
              </div>

              <div className="bg-gray-50 border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-500 mb-3">Operations Manager</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Full-time employee</li>
                  <li>Tactical execution</li>
                  <li>Less strategic scope</li>
                  <li>Lower seniority/cost</li>
                  <li>Reports to CEO/COO</li>
                </ul>
              </div>

              <div className="bg-gray-50 border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-500 mb-3">Interim COO</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Full-time, temporary</li>
                  <li>Specific mandate/crisis</li>
                  <li>Higher intensity</li>
                  <li>3-12 month typical</li>
                  <li>Transition-focused</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">What to Look For in a Part-Time COO</h2>

            <ul className="text-lg space-y-3 my-8">
              <li><strong>Operational track record:</strong> Proven experience scaling operations in similar-stage companies</li>
              <li><strong>Industry relevance:</strong> Understanding of your sector's operational challenges</li>
              <li><strong>Systems expertise:</strong> Knowledge of modern operational tools and technology</li>
              <li><strong>Leadership skills:</strong> Ability to build and develop high-performing teams</li>
              <li><strong>Founder compatibility:</strong> Chemistry with CEO and ability to challenge constructively</li>
              <li><strong>Flexibility:</strong> Willingness to adapt engagement as needs evolve</li>
            </ul>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-rose-400">Summary:</strong> A part-time COO provides experienced operations leadership for 1-3 days per week at £3,000-£12,000/month. Ideal for scaling businesses that need professional operations without full-time executive costs.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">FAQs</h2>
          <FAQ skipSchema={true} items={faqItems} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-rose-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find a Part-Time COO</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-coo" className="px-10 py-5 bg-white text-rose-700 font-bold uppercase tracking-wider hover:bg-rose-50 transition-colors">
              Fractional COO Guide
            </Link>
            <Link href="/fractional-coo-jobs-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-rose-700 transition-colors">
              COO Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-coo" className="text-gray-600 hover:text-rose-700 font-medium">Fractional COO</Link>
            <Link href="/fractional-operations-director" className="text-gray-600 hover:text-rose-700 font-medium">Fractional Operations Director</Link>
            <Link href="/fractional-executive" className="text-gray-600 hover:text-rose-700 font-medium">Fractional Executive</Link>
            <Link href="/part-time-executive-jobs" className="text-gray-600 hover:text-rose-700 font-medium">Part-Time Executive Jobs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
