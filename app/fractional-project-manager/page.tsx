import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { createDbQuery } from '@/lib/db'
import { EmbeddedJobBoard } from '@/components/EmbeddedJobBoard'
import { FAQ } from '@/components/FAQ'
import { JobsGraph3D } from '@/components/JobsGraph3D'
import { DesktopOnly } from '@/components/DesktopOnly'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Project Manager UK | Part-Time PM Jobs 2025',
  description: 'Fractional project manager jobs UK - Find part-time PM positions paying £500-£1,200/day. Browse live project management roles. Remote & hybrid available.',
  keywords: 'fractional project manager, fractional pm, part time project manager, interim project manager, fractional project management, project manager jobs uk',
  alternates: {
    canonical: 'https://fractional.quest/fractional-project-manager',
  },
  openGraph: {
    title: 'Fractional Project Manager UK | Part-Time PM Jobs 2025',
    description: 'Fractional project manager jobs UK - Find part-time PM positions paying £500-£1,200/day. Remote & hybrid available.',
    url: 'https://fractional.quest/fractional-project-manager',
  },
}

async function getPMStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Operations' OR title ILIKE '%project%manager%' OR title ILIKE '%programme%manager%')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Operations' OR title ILIKE '%project%manager%' OR title ILIKE '%programme%manager%') AND (is_remote = true OR workplace_type = 'Remote')`
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
      WHERE is_active = true AND (role_category = 'Operations' OR title ILIKE '%project%manager%' OR title ILIKE '%programme%manager%') AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 8
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

const PM_FAQS = [
  {
    question: 'What is a fractional project manager?',
    answer: 'A fractional project manager is a senior PM who works part-time (typically 2-3 days per week) with one or multiple clients, providing strategic project leadership without the cost of a full-time hire. They deliver expertise in project governance, stakeholder management, and delivery oversight on a flexible basis.'
  },
  {
    question: 'How much do fractional project managers earn in the UK?',
    answer: 'Fractional project managers in the UK typically earn £500-£1,200 per day depending on experience, location, and specialization. London rates range from £800-£1,200/day, while regional rates are £500-£900/day. Working 2-3 days per week across multiple clients can generate £100,000-£150,000+ annually.'
  },
  {
    question: 'Do I need PRINCE2 certification for fractional PM work?',
    answer: 'PRINCE2 Practitioner is highly valuable for UK fractional PM roles, particularly in public sector and corporate environments where it is often mandatory. Approximately 40% of UK fractional PM opportunities explicitly require PRINCE2. Agile certifications (CSM, SAFe) are essential for technology sector roles.'
  },
  {
    question: 'How many clients do fractional project managers typically work with?',
    answer: 'Most fractional project managers work with 2-3 clients simultaneously, allocating 1-3 days per week to each. This provides diversity, reduces risk from losing a single client, and allows cross-pollination of best practices while maintaining focused, high-value time with each client.'
  },
  {
    question: 'Can fractional project managers work remotely?',
    answer: 'Yes, approximately 65% of fractional PM roles now offer remote or hybrid working arrangements. Technology, SaaS, and digital companies commonly offer fully remote positions. Construction, healthcare, and manufacturing sectors may require more on-site presence.'
  },
  {
    question: 'What\'s the difference between fractional and interim project managers?',
    answer: 'Fractional PMs work part-time (2-3 days/week) on an ongoing basis across multiple clients. Interim PMs typically work full-time for 3-12 months addressing specific challenges or covering permanent role gaps. Fractional arrangements provide sustained strategic guidance; interim roles focus on crisis resolution or transition periods.'
  }
]

export default async function FractionalProjectManagerPage() {
  const [stats, companies] = await Promise.all([getPMStats(), getFeaturedCompanies()])

  // Schema markup for the hub page
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Fractional Project Manager UK - Complete Resource Hub",
    "description": "Comprehensive guide to fractional project management in the UK: jobs, responsibilities, certifications, salaries, and career advice.",
    "url": "https://fractional.quest/fractional-project-manager",
    "inLanguage": "en-GB",
    "about": {
      "@type": "Occupation",
      "name": "Fractional Project Manager",
      "occupationLocation": {
        "@type": "Country",
        "name": "United Kingdom"
      },
      "estimatedSalary": {
        "@type": "MonetaryAmountDistribution",
        "name": "Day Rate",
        "currency": "GBP",
        "duration": "P1D",
        "median": 750,
        "percentile10": 500,
        "percentile90": 1200
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Article",
            "name": "Part-Time Project Manager Jobs UK",
            "url": "https://fractional.quest/part-time-project-manager-jobs-uk"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Article",
            "name": "What is a Fractional Project Manager?",
            "url": "https://fractional.quest/what-is-fractional-project-manager"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Article",
            "name": "Interim vs Fractional Project Manager",
            "url": "https://fractional.quest/interim-vs-fractional-project-manager"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Article",
            "name": "Fractional PM Salary UK",
            "url": "https://fractional.quest/fractional-project-manager-salary-uk"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Article",
            "name": "How to Become a Fractional Project Manager",
            "url": "https://fractional.quest/how-to-become-fractional-project-manager"
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "Article",
            "name": "Fractional Project Manager Jobs UK",
            "url": "https://fractional.quest/fractional-project-manager-jobs-uk"
          }
        },
        {
          "@type": "ListItem",
          "position": 7,
          "item": {
            "@type": "Article",
            "name": "Fractional Project Manager Responsibilities",
            "url": "https://fractional.quest/fractional-project-manager-responsibilities"
          }
        },
        {
          "@type": "ListItem",
          "position": 8,
          "item": {
            "@type": "Article",
            "name": "Fractional Project Manager Certification UK",
            "url": "https://fractional.quest/fractional-project-manager-certification-uk"
          }
        }
      ]
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* Hero with 3D Knowledge Graph */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <JobsGraph3D roleFilter="Project" limit={25} height="100%" isHero={true} showOverlay={true} />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-green-500/20 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Project Management
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 leading-[0.9] tracking-tight">
                Fractional Project<br />
                <span className="text-green-400">Manager UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                <strong className="text-white">Fractional project manager jobs</strong> for experienced PMs.
                Part-time project management roles paying £500-£1,200/day.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-green-400">{stats.total}+</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Live Roles</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">£750</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Avg Day Rate</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">{stats.remoteCount}</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Remote</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#jobs" className="px-8 py-4 bg-green-500 text-black font-bold uppercase tracking-wider hover:bg-green-400 transition-colors">
                  Browse Jobs Now
                </Link>
                <Link href="/fractional-project-manager-salary-uk" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Salary Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Knowledge Hub</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional Project Manager Guides</h2>
            <p className="text-xl text-gray-600 mt-4">Everything you need to know about fractional PM careers in the UK</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Part-Time Project Manager Jobs UK',
                excerpt: 'Complete guide to finding part-time PM jobs: where to search, day rates by region, how to apply effectively.',
                slug: '/part-time-project-manager-jobs-uk',
                keyword: 'Part-time PM Jobs'
              },
              {
                title: 'What is a Fractional Project Manager?',
                excerpt: 'Definition, role overview, and how fractional PMs differ from full-time and interim project managers.',
                slug: '/what-is-fractional-project-manager',
                keyword: 'Definition & Overview'
              },
              {
                title: 'Interim vs Fractional Project Manager',
                excerpt: 'Key differences, when to hire each type, pros and cons of interim vs fractional arrangements.',
                slug: '/interim-vs-fractional-project-manager',
                keyword: 'Comparison Guide'
              },
              {
                title: 'Fractional PM Salary UK',
                excerpt: 'Day rates by experience, location, and sector. ROI analysis and earning potential breakdown.',
                slug: '/fractional-project-manager-salary-uk',
                keyword: 'Salary Guide'
              },
              {
                title: 'How to Become Fractional PM',
                excerpt: 'Step-by-step career transition guide: building skills, finding first clients, setting up your practice.',
                slug: '/how-to-become-fractional-project-manager',
                keyword: 'Career Guide'
              },
              {
                title: 'Fractional PM Jobs UK',
                excerpt: 'Where to find fractional project manager jobs, recruitment platforms, agencies, and networking strategies.',
                slug: '/fractional-project-manager-jobs-uk',
                keyword: 'Job Search'
              },
              {
                title: 'Fractional PM Responsibilities',
                excerpt: 'Day-in-the-life, strategic vs operational split, tools, methodologies, and success metrics.',
                slug: '/fractional-project-manager-responsibilities',
                keyword: 'Role Breakdown'
              },
              {
                title: 'Fractional PM Certification UK',
                excerpt: 'PRINCE2, PMP, Agile credentials: costs, ROI, which certifications matter most for fractional work.',
                slug: '/fractional-project-manager-certification-uk',
                keyword: 'Certifications'
              },
            ].map((article, i) => (
              <Link key={i} href={article.slug} className="group bg-white p-6 border border-gray-200 hover:border-green-500 transition-all hover:shadow-lg">
                <span className="text-xs font-bold uppercase tracking-wider text-green-600 mb-2 block">{article.keyword}</span>
                <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-green-600 transition-colors">{article.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                <span className="inline-flex items-center text-green-600 font-bold text-sm group-hover:gap-2 transition-all">
                  Read Guide <span className="ml-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Project Manager Jobs</h2>
            </div>
            <p className="text-gray-500">Pre-filtered to Operations & PM roles. Change filters to explore.</p>
          </div>
          <Suspense fallback={<div className="bg-white rounded-2xl border border-gray-200 p-8"><div className="animate-pulse space-y-4"><div className="h-10 bg-gray-200 rounded w-1/3"></div><div className="grid grid-cols-2 gap-4"><div className="h-48 bg-gray-200 rounded"></div><div className="h-48 bg-gray-200 rounded"></div></div></div></div>}>
            <EmbeddedJobBoard defaultDepartment="Operations" pageSlug="fractional-project-manager" jobsPerPage={10} title="Latest Project Manager Jobs" allJobsLinkText="View All PM Jobs" />
          </Suspense>
        </div>
      </section>

      {/* 3D Skills Graph - Desktop Only */}
      <DesktopOnly>
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Interactive Network</span>
              <h2 className="text-3xl md:text-4xl font-black text-white">PM Jobs Knowledge Graph</h2>
              <p className="text-gray-400 mt-2">Explore project manager roles, skills, and companies in 3D</p>
            </div>
            <JobsGraph3D roleFilter="Project" limit={25} height="500px" />
          </div>
        </section>
      </DesktopOnly>

      {/* Companies Hiring */}
      {companies.length > 0 && (
        <section className="py-16 bg-gray-50 text-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">Who's Hiring</span>
              <h2 className="text-3xl md:text-4xl font-black">Companies Seeking Project Managers</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {companies.map((company: string, index: number) => (
                <span key={index} className="text-xl md:text-2xl font-light text-gray-400 hover:text-green-400 transition-colors cursor-default">{company}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Editorial Overview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-4 block">The Guide</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Everything You Need to Know About<br /><span className="text-green-600">Fractional Project Managers</span>
            </h2>
            <div className="w-24 h-1 bg-green-500"></div>
          </div>
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional project managers</strong> represent a new model of project leadership—senior PMs who work part-time (typically 2-3 days per week) with one or multiple clients, delivering strategic project oversight without the cost and commitment of full-time hires. This model has grown 56% year-over-year in the UK, supported by research from the <a href="https://www.apm.org.uk" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 underline">Association for Project Management</a>.
            </p>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Why Fractional Project Management is Booming</h3>
            <p>UK businesses are increasingly adopting fractional project management arrangements for several compelling reasons. Scale-ups and SMEs gain access to senior PM expertise they cannot afford full-time. Established companies secure specialist capabilities for specific initiatives without permanent headcount. The shift to remote work has eliminated geographical constraints, enabling project managers anywhere in the UK to serve London clients.</p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-green-500">
              <p className="text-xl font-semibold text-gray-900 mb-0">"Access senior project management expertise at £1,500-£3,000/week instead of £60,000-£90,000 annually for full-time."</p>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Types of Fractional PM Engagements</h3>
            <ul className="space-y-3">
              <li><strong>Strategic oversight:</strong> Establishing project governance, risk management, and stakeholder alignment (typically 1-2 days/week)</li>
              <li><strong>Delivery leadership:</strong> Active project execution management across one or more initiatives (2-3 days/week)</li>
              <li><strong>Transformation programmes:</strong> Leading organisational change, digital transformation, or process improvement initiatives</li>
              <li><strong>Project recovery:</strong> Rescuing troubled projects, re-establishing control, and getting deliveries back on track</li>
              <li><strong>PMO setup:</strong> Establishing project management offices, processes, and capability building</li>
            </ul>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Who Hires Fractional Project Managers?</h3>
            <p>
              Technology and SaaS companies represent 42% of fractional PM demand, requiring expertise in Agile delivery, product launches, and technical infrastructure projects. Financial services and fintech account for 28%, seeking project managers who understand regulatory requirements and can navigate compliance-heavy environments. Healthcare organisations increasingly hire fractional PMs for digital transformation and clinical system implementations. Professional services firms engage fractional project managers to deliver client projects or establish internal delivery capabilities.
            </p>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional Project Managers</h2>
          </div>
          <FAQ items={PM_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Find Your Next<br /><span className="text-green-400">Fractional PM Role</span></h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking fractional project management leadership.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-green-500 text-black font-bold uppercase tracking-wider hover:bg-green-400 transition-colors">Create Profile</Link>
            <Link href="/fractional-project-manager-salary-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Salary Guide</Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Related</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/uk-fractional-jobs-uk-london-fractional-jobs-london" className="text-gray-600 hover:text-green-600 font-medium transition-colors">Fractional Jobs</Link>
              <Link href="/fractional-cfo-jobs-uk" className="text-gray-600 hover:text-green-600 font-medium transition-colors">CFO Jobs UK</Link>
              <Link href="/fractional-cmo-jobs-uk" className="text-gray-600 hover:text-green-600 font-medium transition-colors">CMO Jobs UK</Link>
              <Link href="/fractional-cto-jobs-uk" className="text-gray-600 hover:text-green-600 font-medium transition-colors">CTO Jobs UK</Link>
              <Link href="/fractional-coo-jobs-uk" className="text-gray-600 hover:text-green-600 font-medium transition-colors">COO Jobs UK</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
