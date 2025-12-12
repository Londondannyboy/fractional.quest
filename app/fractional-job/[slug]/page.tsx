import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { Badge } from '@/components/Badge'
import { JobHeader } from '@/components/JobHeader'
import { JobBody } from '@/components/JobBody'
import { SingleJobGraph } from '@/components/SingleJobGraph'

// Revalidate every hour for job details
export const revalidate = 3600

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT title, company_name, location
      FROM jobs
      WHERE slug = ${slug}
        AND is_active = true
      LIMIT 1
    `

    if (jobs.length === 0) {
      return { title: 'Job Not Found | Fractional.Quest' }
    }

    const job = jobs[0] as any
    return {
      title: `${job.title} at ${job.company_name} | Fractional.Quest`,
      description: `Fractional ${job.title} position at ${job.company_name} in ${job.location}. Browse and apply on Fractional.Quest - the UK's leading fractional executive job board.`,
    }
  } catch {
    return { title: 'Job | Fractional.Quest' }
  }
}

export default async function JobDetailPage({ params }: PageProps) {
  const { slug } = await params
  try {
    const sql = createDbQuery()

    const jobs = await sql`
      SELECT
        id,
        title,
        company_name,
        location,
        is_remote,
        compensation,
        employment_type,
        seniority_level,
        role_category,
        description_snippet,
        full_description,
        skills_required,
        responsibilities,
        requirements,
        benefits,
        about_company,
        posted_date,
        url
      FROM jobs
      WHERE slug = ${slug}
        AND is_active = true
      LIMIT 1
    `

    if (jobs.length === 0) {
      return (
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center px-4">
            <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Job Not Found</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
              This position may have been filled or is no longer available.
            </p>
            <Link href="/fractional-jobs">
              <button className="px-8 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 font-semibold transition-colors">
                Browse All Jobs
              </button>
            </Link>
          </div>
        </div>
      )
    }

    const job = jobs[0] as any

    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <JobHeader
          title={job.title}
          company={job.company_name}
          location={job.location}
          isRemote={job.is_remote}
          compensation={job.compensation}
          seniority={job.seniority_level}
          employmentType={job.employment_type}
          roleCategory={job.role_category}
          postedDate={job.posted_date}
        />

        {/* Sticky Apply Bar */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="hidden sm:block">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">{job.title}</span>
                  {' at '}
                  <span className="text-purple-700">{job.company_name}</span>
                </p>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-8 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 font-semibold transition-all hover:shadow-lg"
                >
                  Apply Now
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors" title="Save Job">
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Two Column Layout on Large Screens */}
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              {/* Description */}
              {job.full_description && (
                <section className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">About This Role</h2>
                  </div>
                  <JobBody content={job.full_description} />
                </section>
              )}

              {/* Responsibilities */}
              {job.responsibilities && Array.isArray(job.responsibilities) && job.responsibilities.length > 0 && (
                <section className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Key Responsibilities</h2>
                  </div>
                  <ul className="space-y-4">
                    {job.responsibilities.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-4 group">
                        <span className="flex-shrink-0 w-8 h-8 bg-amber-50 text-amber-700 rounded-full flex items-center justify-center font-bold text-sm group-hover:bg-amber-100 transition-colors">
                          {idx + 1}
                        </span>
                        <span className="text-lg text-gray-700 leading-7 pt-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Requirements */}
              {job.requirements && Array.isArray(job.requirements) && job.requirements.length > 0 && (
                <section className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Requirements</h2>
                  </div>
                  <ul className="space-y-3">
                    {job.requirements.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-emerald-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-lg text-gray-700 leading-7">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Benefits */}
              {job.benefits && Array.isArray(job.benefits) && job.benefits.length > 0 && (
                <section className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Benefits & Perks</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {job.benefits.map((item: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl">
                        <span className="text-xl">🎁</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* About Company */}
              {job.about_company && (
                <section className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">About {job.company_name}</h2>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-gray-700 leading-8">{job.about_company}</p>
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 mt-12 lg:mt-0">
              {/* Skills Card */}
              {job.skills_required && Array.isArray(job.skills_required) && job.skills_required.length > 0 && (
                <div className="sticky top-24 space-y-6">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      Skills Required
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {job.skills_required.map((skill: string) => (
                        <Badge key={skill} variant="gray" size="sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Quick Apply Card */}
                  <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-6 text-white">
                    <h3 className="text-lg font-bold mb-2">Interested?</h3>
                    <p className="text-purple-100 text-sm mb-4">
                      Apply now and take the next step in your fractional career.
                    </p>
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-3 bg-white text-purple-700 rounded-lg font-semibold text-center hover:bg-purple-50 transition-colors"
                    >
                      Apply Now →
                    </a>
                  </div>

                  {/* Share Card */}
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Share this job</h3>
                    <div className="flex gap-3">
                      <button className="flex-1 p-3 bg-[#0077B5] text-white rounded-lg hover:opacity-90 transition-opacity" title="Share on LinkedIn">
                        <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </button>
                      <button className="flex-1 p-3 bg-[#1DA1F2] text-white rounded-lg hover:opacity-90 transition-opacity" title="Share on Twitter">
                        <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </button>
                      <button className="flex-1 p-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors" title="Copy Link">
                        <svg className="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Job Knowledge Graph */}
          {job.skills_required && Array.isArray(job.skills_required) && job.skills_required.length > 0 && (
            <section className="mt-16 pt-12 border-t border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Skills Graph</h2>
              </div>
              <SingleJobGraph
                jobId={job.id}
                jobTitle={job.title}
                company={job.company_name}
                skills={job.skills_required}
                location={job.location}
              />
            </section>
          )}

          {/* Bottom CTA */}
          <div className="mt-16 pt-8 border-t border-gray-100">
            <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to apply?</h3>
              <p className="text-gray-600 mb-6">
                Take the next step in your fractional executive career.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 font-semibold transition-colors"
                >
                  Apply Now
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <Link href="/fractional-jobs">
                  <button className="px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-lg hover:bg-white hover:border-gray-300 font-semibold transition-colors">
                    ← Browse All Jobs
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error fetching job:', error)
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Error Loading Job</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            There was an error loading this job. Please try again later.
          </p>
          <Link href="/fractional-jobs">
            <button className="px-8 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 font-semibold transition-colors">
              Browse All Jobs
            </button>
          </Link>
        </div>
      </div>
    )
  }
}
