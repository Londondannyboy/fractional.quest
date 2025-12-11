import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { Card } from '@/components/Card'
import { Badge } from '@/components/Badge'

// Revalidate every 15 minutes for jobs
export const revalidate = 900

export const metadata: Metadata = {
  title: 'Fractional Jobs UK - Executive & Specialist Roles',
  description: 'Browse fractional executive positions in the UK. Find CFO, CMO, CTO, and specialist roles.',
  openGraph: {
    title: 'Fractional Jobs UK - Executive & Specialist Roles',
    description: 'Browse fractional executive positions in the UK. Find CFO, CMO, CTO, and specialist roles.',
    type: 'website',
  },
}

interface JobsPageProps {
  searchParams: {
    page?: string
  }
}

interface Job {
  id: number
  slug: string
  title: string
  company_name: string
  location: string
  is_remote: boolean
  compensation: string
  day_rate?: number
  skills_required: string[]
  posted_date: string
}

export default async function JobsPage({ searchParams }: JobsPageProps) {
  const limit = 20
  const page = parseInt(searchParams.page || '1')
  const offset = (page - 1) * limit

  try {
    const sql = createDbQuery()

    // Fetch jobs from database with proper parameterization
    const jobs = await sql`
      SELECT
        id,
        slug,
        external_id,
        title,
        company_name,
        location,
        is_remote,
        compensation,
        skills_required,
        posted_date
      FROM jobs
      WHERE is_active = true
      ORDER BY posted_date DESC
      LIMIT ${limit} OFFSET ${offset}
      `

    // Get total count for pagination
    const countResult = await sql`
      SELECT COUNT(*) as count
      FROM jobs
      WHERE is_active = true
    `

    const total = (countResult[0] as any)?.count || 0
    const totalPages = Math.ceil(total / limit)

    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-50 to-purple-100 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-black text-gray-900 mb-4">Fractional Jobs UK</h1>
            <p className="text-xl text-gray-600 mb-4">
              Browse {total}+ executive and specialist fractional roles
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Updated every 15 minutes • {jobs.length} jobs on this page
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 font-semibold">
                Browse All Jobs
              </button>
              <button className="px-6 py-3 border border-purple-700 text-purple-700 rounded-lg hover:bg-purple-50 font-semibold">
                Post a Job
              </button>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="border-b bg-gray-50 py-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-600">
              🔄 Dynamic filtering coming in Phase 2 (location, role, remote status)
            </p>
          </div>
        </section>

        {/* Jobs List */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {jobs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">No jobs found for this page.</p>
                <Link href="/fractional-jobs">
                  <button className="mt-4 px-6 py-2.5 bg-purple-700 text-white rounded-lg hover:bg-purple-800">
                    Back to First Page
                  </button>
                </Link>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-12">
                  {jobs.map((job: any) => (
                    <Link key={job.id} href={`/fractional-job/${job.slug}`}>
                      <Card hoverable>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                            <p className="text-gray-600 mb-2">{job.company_name}</p>
                            <p className="text-sm text-gray-500 mb-3">
                              {job.location} {job.is_remote ? '• Remote' : ''} • {job.compensation || (job.day_rate ? `£${job.day_rate}/day` : 'TBD')}
                            </p>
                            {job.skills_required && job.skills_required.length > 0 && (
                              <div className="flex flex-wrap gap-2">
                                {job.skills_required.slice(0, 5).map((skill: string) => (
                                  <Badge key={skill} variant="gray">
                                    {skill}
                                  </Badge>
                                ))}
                                {job.skills_required.length > 5 && (
                                  <Badge variant="gray">+{job.skills_required.length - 5}</Badge>
                                )}
                              </div>
                            )}
                          </div>
                          <button className="ml-4 px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 font-semibold whitespace-nowrap">
                            View
                          </button>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2">
                    {page > 1 && (
                      <Link href={`/fractional-jobs?page=${page - 1}`}>
                        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                          ← Previous
                        </button>
                      </Link>
                    )}

                    <div className="flex gap-1">
                      {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                        const pageNum = Math.max(1, page - 2) + i
                        if (pageNum > totalPages) return null

                        return (
                          <Link key={pageNum} href={`/fractional-jobs?page=${pageNum}`}>
                            <button
                              className={`px-3 py-2 rounded-lg ${
                                pageNum === page
                                  ? 'bg-purple-700 text-white'
                                  : 'border border-gray-200 hover:bg-gray-50'
                              }`}
                            >
                              {pageNum}
                            </button>
                          </Link>
                        )
                      })}
                    </div>

                    {page < totalPages && (
                      <Link href={`/fractional-jobs?page=${page + 1}`}>
                        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                          Next →
                        </button>
                      </Link>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    )
  } catch (error) {
    console.error('Error fetching jobs:', error)
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Unable to Load Jobs</h1>
          <p className="text-gray-600 mb-6">There was an error loading jobs. Please try again later.</p>
          <Link href="/">
            <button className="px-6 py-2.5 bg-purple-700 text-white rounded-lg hover:bg-purple-800">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    )
  }
}
