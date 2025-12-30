import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'
import { createDbQuery } from '@/lib/db'
import { HotJobsLines } from '@/components/HotJobsLines'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Part-Time CHRO UK 2025: Fractional HR Leadership',
  description: 'Part-time CHRO services for UK businesses. Expert HR leadership 1-3 days per week. Build people strategy without full-time executive costs.',
  keywords: 'part-time CHRO, fractional CHRO, part-time chief human resources officer, fractional HR, HR leadership, part-time HR director',
  alternates: {
    canonical: 'https://fractional.quest/part-time-chro',
  },
  openGraph: {
    title: 'Part-Time CHRO UK 2025: Fractional HR Leadership',
    description: 'Part-time Chief Human Resources Officer for growing businesses.',
    url: 'https://fractional.quest/part-time-chro',
  },
}

async function getPartTimeChroJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT id, slug, title, company_name, location, is_remote, compensation, role_category, posted_date
      FROM jobs
      WHERE is_active = true
        AND (title ILIKE '%part-time%chro%' OR title ILIKE '%part time%chro%' OR title ILIKE '%fractional%chro%'
             OR title ILIKE '%part-time%hr%' OR title ILIKE '%part time%hr%' OR title ILIKE '%fractional%hr%'
             OR title ILIKE '%part-time%people%' OR title ILIKE '%part time%people%' OR title ILIKE '%fractional%people%')
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
    question: 'What is a part-time CHRO?',
    answer: 'A part-time CHRO (Chief Human Resources Officer) is a senior HR executive who works with your company 1-3 days per week rather than full-time. They provide strategic people leadership, build HR infrastructure, and develop your organization at a fraction of full-time cost.',
  },
  {
    question: 'How much does a part-time CHRO cost in the UK?',
    answer: 'Part-time CHROs in the UK typically charge £700-£1,200 per day or £3,000-£7,000 per month for 1-2 days weekly engagement. This compares to £120,000-£200,000+ for a full-time CHRO salary plus benefits.',
  },
  {
    question: 'When should a company hire a part-time CHRO?',
    answer: 'Hire a part-time CHRO when you\'re scaling and need to professionalize HR beyond basic operations, when people issues are limiting growth, when you\'re preparing for investment or exit, or when employment law complexity requires senior expertise.',
  },
  {
    question: 'What does a part-time CHRO do?',
    answer: 'A part-time CHRO develops people strategy, designs organizational structure, builds HR processes, manages employee relations, develops leadership, creates compensation frameworks, and ensures employment law compliance—all the strategic HR work that drives business performance.',
  },
]

export default async function PartTimeCHROPage() {
  const partTimeJobs = await getPartTimeChroJobs()
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Part-Time CHRO UK 2025: Fractional HR Leadership',
    description: 'Part-time CHRO services for UK businesses. Expert HR leadership 1-3 days per week.',
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    publisher: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest', logo: { '@type': 'ImageObject', url: 'https://fractional.quest/logo.svg' } },
    datePublished: '2025-01-01',
    dateModified: '2025-01-01',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://fractional.quest/part-time-chro' },
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
      { '@type': 'ListItem', position: 2, name: 'CHRO', item: 'https://fractional.quest/fractional-chro' },
      { '@type': 'ListItem', position: 3, name: 'Part-Time CHRO', item: 'https://fractional.quest/part-time-chro' },
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-800 to-purple-700 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              People Leadership
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Part-Time<br />CHRO
            </h1>
            <p className="text-2xl md:text-3xl text-purple-100 leading-relaxed font-light">
              Strategic people leadership without full-time costs. Build your organization the right way.
            </p>
          </div>
        </div>
      </section>

      {/* Live Part-Time CHRO Jobs */}
      {(partTimeJobs as any[]).length > 0 && (
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <HotJobsLines
              jobs={(partTimeJobs as any[]).map(job => ({
                id: job.id, slug: job.slug, title: job.title, company_name: job.company_name,
                location: job.location, compensation: job.compensation, role_category: job.role_category,
                posted_date: job.posted_date, is_remote: job.is_remote,
              }))}
              title="Live Part-Time CHRO Jobs"
              maxJobs={10}
              viewAllHref="/fractional-chro-jobs-uk"
              viewAllText="View all jobs"
            />
          </div>
        </section>
      )}

      {/* Quick Stats */}
      <section className="py-16 bg-purple-50 border-b-4 border-purple-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-purple-700 mb-2">£700-£1,200</div>
              <div className="text-gray-600">Daily rate range</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-purple-700 mb-2">65-75%</div>
              <div className="text-gray-600">Cost savings vs full-time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-purple-700 mb-2">1-3 Days</div>
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
              src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="HR leadership team discussion"
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
            <h2 className="text-3xl font-black text-gray-900">What is a Part-Time CHRO?</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              A <strong>part-time CHRO</strong> (also called a fractional CHRO or fractional Chief People Officer) is a senior HR executive who works with your business on a flexible basis—typically 1-3 days per week. They bring strategic people leadership and organizational expertise at a fraction of full-time cost.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              According to the <a href="https://www.cipd.org" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:text-purple-800">CIPD</a>, the demand for senior HR expertise continues to grow as organizations recognize that people strategy directly impacts business performance. Part-time CHRO arrangements make this expertise accessible to growing businesses.
            </p>

            <h2 className="text-3xl font-black text-gray-900 mt-16">The CHRO Role Explained</h2>

            <div className="bg-purple-50 border-2 border-purple-200 p-8 rounded-lg my-10">
              <h3 className="font-bold text-gray-900 mb-4">What Does a CHRO Do?</h3>
              <p className="text-gray-700 mb-4">
                The Chief Human Resources Officer (or Chief People Officer) is responsible for all aspects of people strategy and employee experience. They ensure the organization has the talent, culture, and structure to achieve its goals.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Strategy:</strong> Align people strategy with business objectives</li>
                <li><strong>Organization:</strong> Design structure and roles for effectiveness</li>
                <li><strong>Talent:</strong> Develop hiring, retention, and succession strategies</li>
                <li><strong>Culture:</strong> Build and maintain organizational culture</li>
                <li><strong>Compliance:</strong> Ensure employment law and regulatory compliance</li>
              </ul>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Part-Time CHRO Responsibilities</h2>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">People Strategy</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Workforce planning and modeling</li>
                  <li>Talent acquisition strategy</li>
                  <li>Retention and engagement programs</li>
                  <li>Succession planning</li>
                  <li>Employer brand development</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Organization Design</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Organizational structure</li>
                  <li>Role design and job architecture</li>
                  <li>Reporting relationships</li>
                  <li>Team effectiveness</li>
                  <li>Change management</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Leadership Development</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Executive team development</li>
                  <li>Management training programs</li>
                  <li>Performance management systems</li>
                  <li>Career development frameworks</li>
                  <li>Coaching and mentoring</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">HR Operations</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Compensation and benefits strategy</li>
                  <li>HR technology and systems</li>
                  <li>Employment law compliance</li>
                  <li>Employee relations</li>
                  <li>HR team development</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">When Do You Need a Part-Time CHRO?</h2>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-purple-600">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Scaling Beyond HR Manager</h4>
                  <p className="text-sm text-gray-600 m-0">You've outgrown HR administration and need strategic people leadership, but can't justify a £150,000+ full-time CHRO salary.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-purple-600">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">People Problems Limiting Growth</h4>
                  <p className="text-sm text-gray-600 m-0">High turnover, difficulty hiring, culture issues, or engagement problems are holding back your business. You need senior expertise to fix the root causes.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-purple-600">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Investment or Exit Preparation</h4>
                  <p className="text-sm text-gray-600 m-0">Investors and acquirers scrutinize people practices. A CHRO can professionalize HR, document policies, and demonstrate organizational maturity.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-purple-600">4</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Complex Employment Situations</h4>
                  <p className="text-sm text-gray-600 m-0">Restructuring, redundancies, TUPE transfers, international expansion—situations where employment law expertise is essential.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Part-Time CHRO Costs</h2>

            <div className="overflow-x-auto my-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 font-bold text-gray-900">Engagement Level</th>
                    <th className="text-left py-3 font-bold text-gray-900">Time</th>
                    <th className="text-left py-3 font-bold text-purple-700">Monthly Cost</th>
                    <th className="text-left py-3 font-bold text-gray-900">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 font-medium">Light Touch</td>
                    <td className="py-3 text-gray-600">1 day/week</td>
                    <td className="py-3 text-purple-700 font-bold">£3,000-£4,500</td>
                    <td className="py-3 text-gray-600">Strategy and oversight</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Standard</td>
                    <td className="py-3 text-gray-600">2 days/week</td>
                    <td className="py-3 text-purple-700 font-bold">£5,000-£7,000</td>
                    <td className="py-3 text-gray-600">Most scaling companies</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Intensive</td>
                    <td className="py-3 text-gray-600">3 days/week</td>
                    <td className="py-3 text-purple-700 font-bold">£7,500-£10,000</td>
                    <td className="py-3 text-gray-600">Major transformation</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Full-Time Comparison</td>
                    <td className="py-3 text-gray-600">5 days/week</td>
                    <td className="py-3 text-gray-500">£12,000-£20,000</td>
                    <td className="py-3 text-gray-600">Large organizations</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Part-Time CHRO vs Other Options</h2>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-purple-50 border-2 border-purple-200 p-6 rounded-lg">
                <h3 className="font-bold text-purple-700 mb-3">Part-Time CHRO</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Strategic people leadership</li>
                  <li>Part of executive team</li>
                  <li>Builds organizational capability</li>
                  <li>Develops HR team</li>
                  <li>Accountable for people outcomes</li>
                </ul>
              </div>

              <div className="bg-gray-50 border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-500 mb-3">HR Consultant</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Project-based engagement</li>
                  <li>External advisor</li>
                  <li>Delivers specific outcomes</li>
                  <li>No ongoing accountability</li>
                  <li>Policy/process focus</li>
                </ul>
              </div>

              <div className="bg-gray-50 border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-500 mb-3">HR Manager</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Full-time employee</li>
                  <li>Operational HR focus</li>
                  <li>Less strategic scope</li>
                  <li>Lower seniority/cost</li>
                  <li>Reports to CEO/CHRO</li>
                </ul>
              </div>

              <div className="bg-gray-50 border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-500 mb-3">HR Outsourcing</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Administrative focus</li>
                  <li>Payroll, compliance, basics</li>
                  <li>No strategic input</li>
                  <li>Transactional relationship</li>
                  <li>Cost-focused model</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">What to Look For in a Part-Time CHRO</h2>

            <ul className="text-lg space-y-3 my-8">
              <li><strong>Strategic experience:</strong> Track record of developing and executing people strategies</li>
              <li><strong>Scaling expertise:</strong> Experience growing organizations from current size to target size</li>
              <li><strong>Commercial mindset:</strong> Understands business, not just HR</li>
              <li><strong>Employment law knowledge:</strong> UK employment law expertise for compliance</li>
              <li><strong>Coaching ability:</strong> Can develop leadership team and HR staff</li>
              <li><strong>Cultural fit:</strong> Values and style align with your organization</li>
            </ul>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-purple-400">Summary:</strong> A part-time CHRO provides strategic people leadership for 1-3 days per week at £3,000-£10,000/month. Ideal for scaling businesses that need to professionalize HR without full-time executive costs.
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
      <section className="py-20 bg-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find a Part-Time CHRO</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-chro" className="px-10 py-5 bg-white text-purple-800 font-bold uppercase tracking-wider hover:bg-purple-50 transition-colors">
              Fractional CHRO Guide
            </Link>
            <Link href="/fractional-chro-jobs-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-purple-800 transition-colors">
              CHRO Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-chro" className="text-gray-600 hover:text-purple-700 font-medium">Fractional CHRO</Link>
            <Link href="/fractional-hr-director" className="text-gray-600 hover:text-purple-700 font-medium">Fractional HR Director</Link>
            <Link href="/fractional-executive" className="text-gray-600 hover:text-purple-700 font-medium">Fractional Executive</Link>
            <Link href="/part-time-executive-jobs" className="text-gray-600 hover:text-purple-700 font-medium">Part-Time Executive Jobs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
