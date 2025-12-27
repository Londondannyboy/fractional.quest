import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Remote Fractional Jobs UK 2025',
  description: 'Remote fractional jobs UK. Work-from-home fractional executive opportunities across CFO, CMO, CTO, and more.',
  keywords: 'fractional jobs remote, remote fractional executive, work from home fractional, remote cfo jobs, remote cmo jobs',
  alternates: {
    canonical: 'https://fractional.quest/fractional-jobs-remote',
  },
  openGraph: {
    title: 'Remote Fractional Jobs UK 2025',
    description: 'Work-from-home fractional executive opportunities.',
    url: 'https://fractional.quest/fractional-jobs-remote',
  },
}

const faqItems = [
  {
    question: 'Can fractional executives work remotely?',
    answer: 'Yes, many fractional executive roles are fully remote or hybrid. The part-time nature of fractional work suits remote delivery—most executives work 1-3 days per week and can effectively operate from home with regular video calls and occasional in-person meetings.',
  },
  {
    question: 'Which fractional roles work best remotely?',
    answer: 'Fractional CFOs, CMOs, and CTOs commonly work remotely, as their work is largely strategic and digital. Roles requiring heavy team management or operational oversight (like fractional COOs) may need more in-person presence.',
  },
  {
    question: 'What tools do remote fractional executives use?',
    answer: 'Remote fractional executives typically use video conferencing (Zoom, Teams), project management (Asana, Monday), communication (Slack), and function-specific tools—finance platforms, marketing analytics, or development environments.',
  },
  {
    question: 'Do remote fractional jobs pay the same as on-site?',
    answer: 'Remote fractional roles typically command similar rates to hybrid positions. Some companies offer slightly lower rates for fully remote work, but experienced executives often maintain their standard day rates regardless of location.',
  },
]

export default function FractionalJobsRemotePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cyan-600 to-cyan-500 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Remote Work
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Remote<br />Fractional Jobs
            </h1>
            <p className="text-2xl md:text-3xl text-cyan-100 leading-relaxed font-light">
              Work-from-home fractional executive opportunities. Location-independent senior leadership roles.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-cyan-50 border-b-4 border-cyan-500">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center border border-cyan-200">
              <div className="text-3xl font-black text-cyan-600">65%</div>
              <div className="text-sm text-gray-600">Remote/Hybrid</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-cyan-200">
              <div className="text-3xl font-black text-cyan-600">£700-1,400</div>
              <div className="text-sm text-gray-600">Day Rate</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-cyan-200">
              <div className="text-3xl font-black text-cyan-600">1-3</div>
              <div className="text-sm text-gray-600">Days/Week</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-cyan-200">
              <div className="text-3xl font-black text-cyan-600">UK-Wide</div>
              <div className="text-sm text-gray-600">Location</div>
            </div>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Professional working remotely from home office"
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
            <h2 className="text-3xl font-black text-gray-900">Remote Fractional Work: The New Normal</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              The fractional executive model naturally suits remote work. With engagements typically spanning 1-3 days per week, these senior leaders can deliver strategic value from anywhere—connecting via video calls, collaborating through digital tools, and visiting client sites only when truly necessary.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Post-pandemic, remote and hybrid arrangements have become standard in fractional work. According to research from <a href="https://www.cipd.org" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-700">CIPD</a>, flexible working is now expected at senior levels, and fractional roles are leading this shift.
            </p>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Remote Fractional Jobs by Function</h2>

            <div className="grid gap-6 my-10">
              <Link href="/fractional-cfo-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-cyan-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-cyan-600">Remote Fractional CFO</h3>
                  <p className="text-gray-600 text-sm mb-0">Financial strategy, reporting, and fundraising—highly suited to remote delivery</p>
                </div>
                <div className="text-right">
                  <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded">85% Remote</span>
                </div>
              </Link>

              <Link href="/fractional-cmo-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-cyan-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-cyan-600">Remote Fractional CMO</h3>
                  <p className="text-gray-600 text-sm mb-0">Marketing strategy, digital campaigns, and team leadership</p>
                </div>
                <div className="text-right">
                  <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded">80% Remote</span>
                </div>
              </Link>

              <Link href="/fractional-cto-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-cyan-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-cyan-600">Remote Fractional CTO</h3>
                  <p className="text-gray-600 text-sm mb-0">Tech strategy, architecture, and engineering leadership</p>
                </div>
                <div className="text-right">
                  <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded">90% Remote</span>
                </div>
              </Link>

              <Link href="/fractional-coo-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-cyan-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-cyan-600">Remote Fractional COO</h3>
                  <p className="text-gray-600 text-sm mb-0">Operations strategy—may require more on-site presence</p>
                </div>
                <div className="text-right">
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">50% Remote</span>
                </div>
              </Link>

              <Link href="/fractional-chro-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-cyan-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-cyan-600">Remote Fractional CHRO</h3>
                  <p className="text-gray-600 text-sm mb-0">People strategy, culture, and HR leadership</p>
                </div>
                <div className="text-right">
                  <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded">70% Remote</span>
                </div>
              </Link>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Making Remote Fractional Work Successful</h2>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">For Executives</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Establish clear communication rhythms</li>
                  <li>Use async tools for non-urgent matters</li>
                  <li>Schedule regular video check-ins</li>
                  <li>Document decisions and actions</li>
                  <li>Visit on-site for key meetings</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">For Companies</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Provide access to necessary systems</li>
                  <li>Include fractional exec in key meetings</li>
                  <li>Set clear expectations upfront</li>
                  <li>Enable direct team communication</li>
                  <li>Budget for occasional travel</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Remote Work Arrangements</h2>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="p-6 bg-cyan-50 border border-cyan-200 rounded-xl text-center">
                <div className="text-sm font-bold text-cyan-700 uppercase mb-2">Fully Remote</div>
                <div className="text-2xl font-black text-gray-900 mb-2">100% WFH</div>
                <p className="text-xs text-gray-600 mb-0">All work delivered remotely with video meetings</p>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Hybrid</div>
                <div className="text-2xl font-black text-gray-900 mb-2">1 Day/Month</div>
                <p className="text-xs text-gray-600 mb-0">Mostly remote with monthly on-site visits</p>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Flexible</div>
                <div className="text-2xl font-black text-gray-900 mb-2">As Needed</div>
                <p className="text-xs text-gray-600 mb-0">Remote default with on-site for key events</p>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Tools for Remote Fractional Success</h2>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-cyan-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Communication</h4>
                  <p className="text-sm text-gray-600 m-0">Zoom, Microsoft Teams, Google Meet for video; Slack, Teams for messaging; Loom for async video updates.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-cyan-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Project Management</h4>
                  <p className="text-sm text-gray-600 m-0">Asana, Monday.com, ClickUp, Notion for tracking projects, OKRs, and initiatives.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-cyan-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Documentation</h4>
                  <p className="text-sm text-gray-600 m-0">Google Workspace, Microsoft 365, Notion for collaborative documents and knowledge bases.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-cyan-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Function-Specific</h4>
                  <p className="text-sm text-gray-600 m-0">Xero/QuickBooks for finance; HubSpot/Salesforce for marketing/sales; GitHub/Jira for tech.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Finding Remote Fractional Roles</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Remote fractional opportunities are listed on specialized platforms like <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-700">LinkedIn</a>, executive networks, and fractional-focused marketplaces. Many roles don't specify "remote" explicitly—the nature of part-time work often implies flexibility.
            </p>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-cyan-400">Key Takeaway:</strong> Remote fractional work is now mainstream. 65%+ of fractional executive roles offer remote or hybrid arrangements, with rates of £700-£1,400/day regardless of location.
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
      <section className="py-20 bg-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Remote Roles</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-executive-jobs" className="px-10 py-5 bg-white text-cyan-600 font-bold uppercase tracking-wider hover:bg-cyan-50 transition-colors">
              All Executive Jobs
            </Link>
            <Link href="/fractional-work" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-cyan-600 transition-colors">
              Fractional Work Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-executive-jobs" className="text-gray-600 hover:text-cyan-600 font-medium">Executive Jobs</Link>
            <Link href="/fractional-cfo-jobs-uk" className="text-gray-600 hover:text-cyan-600 font-medium">CFO Jobs</Link>
            <Link href="/fractional-cmo-jobs-uk" className="text-gray-600 hover:text-cyan-600 font-medium">CMO Jobs</Link>
            <Link href="/fractional-work" className="text-gray-600 hover:text-cyan-600 font-medium">Fractional Work</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
