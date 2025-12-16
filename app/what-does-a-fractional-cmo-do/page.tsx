import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'What Does a Fractional CMO Do? Day-to-Day Responsibilities & Deliverables | 2025',
  description: 'Complete breakdown of what fractional CMOs actually do. Day-to-day activities, deliverables, first 90 days timeline, and real examples from marketing leaders. See job descriptions from live roles.',
  keywords: 'what does a fractional cmo do, fractional cmo responsibilities, fractional cmo deliverables, fractional cmo day in the life, fractional cmo job description',
  alternates: {
    canonical: 'https://fractional.quest/what-does-a-fractional-cmo-do',
  },
  openGraph: {
    title: 'What Does a Fractional CMO Do? Complete Breakdown',
    description: 'Day-to-day responsibilities, deliverables, and real examples of what fractional CMOs do for companies.',
    url: 'https://fractional.quest/what-does-a-fractional-cmo-do',
  },
}

const faqItems = [
  {
    question: 'What does a fractional CMO do on a typical day?',
    answer: 'A typical day includes: strategic planning sessions (1-2 hours), team 1-on-1s and standups (1 hour), reviewing campaign performance and dashboards (30 mins), stakeholder meetings with CEO/sales/product (1 hour), and async work on strategy docs, hiring, or agency management. Most work is focused on high-leverage activities, not execution.',
  },
  {
    question: 'Do fractional CMOs do hands-on marketing execution?',
    answer: 'Rarely. Fractional CMOs focus on strategy, leadership, and systems—not execution. They don\'t write blog posts, build landing pages, or run ads themselves. Instead, they hire, manage, and coach the people who do. Some may do hands-on work during the first 30 days to demonstrate quick wins.',
  },
  {
    question: 'What deliverables should I expect from a fractional CMO?',
    answer: 'Key deliverables: Marketing strategy document (30-60 days), quarterly OKRs and roadmaps, monthly performance reports, hiring plans and job descriptions, marketing tech stack recommendations, budget allocation models, and weekly async updates. Deliverables vary by engagement scope.',
  },
  {
    question: 'How much time does a fractional CMO spend on my company?',
    answer: 'Typically 1-3 days per week (8-24 hours). 1 day/week = strategic oversight only. 2 days/week = strategy + team management (most common). 3 days/week = hands-on leadership including hiring and building. Time is focused on high-impact activities with async communication between days.',
  },
  {
    question: 'What\'s the difference between what a fractional CMO does vs a full-time CMO?',
    answer: 'Fractional CMOs focus on strategic leverage points: setting direction, building systems, making key hires, and coaching teams. Full-time CMOs do this PLUS attend every meeting, manage day-to-day crises, represent marketing in all company activities, and provide 5-day availability. The strategy is the same, the time commitment differs.',
  },
  {
    question: 'Can a fractional CMO manage my marketing team?',
    answer: 'Yes, absolutely. Managing and developing your marketing team is a core responsibility. They run 1-on-1s, set OKRs, provide coaching, make hiring/firing decisions, and build team structure. They just do it 2 days/week instead of 5, using async communication and strong frameworks.',
  },
]

export default function WhatDoesAFractionalCMODoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-500 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/fractional-cmo" className="text-indigo-100 hover:text-white mb-8 inline-flex items-center text-sm">
            <span className="mr-2">←</span> Back to Fractional CMO Guide
          </Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-white text-indigo-600 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Responsibilities
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              What Does a<br />
              <span className="text-indigo-200">Fractional CMO Do?</span>
            </h1>
            <p className="text-2xl md:text-3xl text-indigo-50 leading-relaxed font-light mb-10">
              Complete breakdown of day-to-day responsibilities, deliverables, and what you can expect from a fractional Chief Marketing Officer.
            </p>
            <div className="flex flex-wrap gap-10 mb-12">
              <div>
                <div className="text-5xl font-black text-white">8-10</div>
                <div className="text-indigo-100 text-sm uppercase tracking-wider mt-1">Core Responsibilities</div>
              </div>
              <div>
                <div className="text-5xl font-black text-white">1-3</div>
                <div className="text-indigo-100 text-sm uppercase tracking-wider mt-1">Days Per Week</div>
              </div>
              <div>
                <div className="text-5xl font-black text-white">Strategy</div>
                <div className="text-indigo-100 text-sm uppercase tracking-wider mt-1">Not Execution</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-16 bg-indigo-50 border-b-4 border-indigo-500">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-indigo-200">
            <div className="text-sm font-bold uppercase tracking-wider text-indigo-600 mb-4">TL;DR</div>
            <h2 className="text-3xl font-black text-gray-900 mb-6">What Fractional CMOs Actually Do</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Fractional CMOs are <strong>strategic marketing leaders</strong>, not hands-on executors. They build marketing strategy, lead and develop teams, manage budgets, set up measurement systems, and drive customer acquisition—working 1-3 days per week instead of full-time.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">✅ What They Do:</h3>
                <ul className="text-sm space-y-1">
                  <li>• Set marketing strategy & positioning</li>
                  <li>• Build and lead marketing teams</li>
                  <li>• Manage budgets & agencies</li>
                  <li>• Design growth systems</li>
                  <li>• Report on performance</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">❌ What They Don't Do:</h3>
                <ul className="text-sm space-y-1">
                  <li>• Write blog posts or copy</li>
                  <li>• Design graphics or ads</li>
                  <li>• Run campaigns themselves</li>
                  <li>• Attend every meeting</li>
                  <li>• Work 5 days a week</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Responsibilities */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 block">Core Responsibilities</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">8 Things Fractional CMOs Own</h2>
            <p className="text-xl text-gray-600">
              These are the high-leverage activities fractional CMOs focus on to drive maximum impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: '1. Marketing Strategy & Planning',
                description: 'Build the overall marketing strategy from scratch or refine existing approaches. Define positioning, messaging, ICP, TAM, channel mix, and go-to-market approach. Create quarterly OKRs and annual roadmaps.',
                dayToDay: 'Review market research, competitor analysis, customer interviews. Draft strategy docs. Present to leadership team.',
                deliverable: 'Marketing strategy document, quarterly OKRs, channel prioritization framework',
                icon: '🎯',
              },
              {
                title: '2. Team Leadership & Development',
                description: 'Hire, manage, and develop the marketing team. Run 1-on-1s, set goals, provide coaching, make performance decisions. Build team structure and define roles as the company scales.',
                dayToDay: 'Weekly 1-on-1s with direct reports, review hiring pipelines, coach on campaigns, facilitate team standups',
                deliverable: 'Org charts, job descriptions, hiring scorecards, performance reviews, 1-on-1 notes',
                icon: '👥',
              },
              {
                title: '3. Demand Generation & Growth',
                description: 'Own customer acquisition across all channels. Build repeatable systems for lead generation, pipeline creation, and revenue growth. Optimize the full funnel from awareness to conversion.',
                dayToDay: 'Review campaign performance, optimize channel spend, identify growth experiments, prioritize initiatives',
                deliverable: 'Demand gen strategy, channel playbooks, growth experiment tracker, conversion optimization roadmap',
                icon: '📈',
              },
              {
                title: '4. Brand & Product Marketing',
                description: 'Shape brand identity, positioning, and messaging. Lead product launches, create GTM plans, and ensure consistent brand across all touchpoints. Build sales enablement materials.',
                dayToDay: 'Refine messaging frameworks, review creative work, plan product launches, approve brand assets',
                deliverable: 'Brand guidelines, messaging hierarchy, positioning docs, launch plans, sales decks',
                icon: '✨',
              },
              {
                title: '5. Marketing Operations & Tech Stack',
                description: 'Build marketing infrastructure: CRM, automation, analytics, attribution. Set up dashboards, reporting, and data governance. Ensure marketing team has the tools to execute.',
                dayToDay: 'Review analytics dashboards, audit tech stack, troubleshoot integrations, evaluate new tools',
                deliverable: 'Tech stack recommendations, attribution models, reporting dashboards, process documentation',
                icon: '⚙️',
              },
              {
                title: '6. Budget & Resource Allocation',
                description: 'Manage marketing budget (typically 10-30% of revenue). Allocate spend across channels, negotiate with vendors, forecast future needs. Prove ROI on marketing investments.',
                dayToDay: 'Review spend vs plan, reallocate budget to high-performing channels, approve expenses, forecast needs',
                deliverable: 'Budget models, channel spend allocation, ROI reports, vendor contracts',
                icon: '💰',
              },
              {
                title: '7. Agency & Vendor Management',
                description: 'Select, brief, and manage external partners—agencies, freelancers, contractors. Ensure they deliver on strategy and budget. Act as client-side quarterback.',
                dayToDay: 'Agency check-ins, review deliverables, provide feedback, negotiate scopes, source new partners',
                deliverable: 'Agency briefs, SOWs, performance scorecards, vendor recommendations',
                icon: '🤝',
              },
              {
                title: '8. Performance Tracking & Reporting',
                description: 'Define KPIs, track performance, report to CEO/board. Make data-driven decisions, identify problems early, course-correct quickly. Own the marketing narrative.',
                dayToDay: 'Review dashboards, analyze trends, prepare reports, present to leadership, iterate on metrics',
                deliverable: 'Monthly reports, board decks, KPI dashboards, performance insights, recommendations',
                icon: '📊',
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 border-l-4 border-indigo-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded border border-indigo-100">
                    <div className="text-xs font-bold uppercase text-indigo-600 mb-1">Day-to-Day:</div>
                    <p className="text-sm text-gray-700">{item.dayToDay}</p>
                  </div>
                  <div className="bg-white p-4 rounded border border-indigo-100">
                    <div className="text-xs font-bold uppercase text-indigo-600 mb-1">Deliverables:</div>
                    <p className="text-sm text-gray-700">{item.deliverable}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First 90 Days */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 block">Timeline</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">The First 90 Days</h2>
            <p className="text-xl text-gray-600">
              What a fractional CMO does in the critical first three months to build the foundation for growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Days 1-30 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-indigo-200">
              <div className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 inline-block">
                DAYS 1-30: Audit & Learn
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Discovery Phase</h3>
              <p className="text-gray-600 mb-6">
                Deep dive into your business, market, customers, and current marketing. Identify quick wins and strategic priorities.
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold mt-0.5">•</span>
                  <span><strong>Week 1:</strong> Stakeholder interviews (CEO, sales, product, customers)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold mt-0.5">•</span>
                  <span><strong>Week 2:</strong> Marketing audit (channels, spend, performance, team)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold mt-0.5">•</span>
                  <span><strong>Week 3:</strong> Competitive analysis, ICP research, buyer journey mapping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold mt-0.5">•</span>
                  <span><strong>Week 4:</strong> Draft strategy document, identify quick wins, present findings</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t">
                <div className="font-bold text-gray-900 mb-2">Key Deliverables:</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Marketing audit report</li>
                  <li>✓ ICP & buyer persona docs</li>
                  <li>✓ Initial strategy framework</li>
                  <li>✓ Quick wins roadmap</li>
                </ul>
              </div>
            </div>

            {/* Days 31-60 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-indigo-200">
              <div className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 inline-block">
                DAYS 31-60: Build & Optimize
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Foundation Phase</h3>
              <p className="text-gray-600 mb-6">
                Implement quick wins, build systems, hire key roles, and start optimizing high-priority channels.
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold mt-0.5">•</span>
                  <span><strong>Week 5-6:</strong> Launch quick-win campaigns, optimize top channels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold mt-0.5">•</span>
                  <span><strong>Week 7:</strong> Set up analytics, attribution, dashboards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold mt-0.5">•</span>
                  <span><strong>Week 8:</strong> Begin hiring (write JDs, source candidates, interviews)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold mt-0.5">•</span>
                  <span><strong>Throughout:</strong> Onboard/optimize agencies, create content calendar</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t">
                <div className="font-bold text-gray-900 mb-2">Key Deliverables:</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Campaign launches (2-3 quick wins)</li>
                  <li>✓ Analytics & dashboards</li>
                  <li>✓ Hiring pipeline started</li>
                  <li>✓ Agency SOWs signed</li>
                </ul>
              </div>
            </div>

            {/* Days 61-90 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-indigo-200">
              <div className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 inline-block">
                DAYS 61-90: Scale & Measure
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth Phase</h3>
              <p className="text-gray-600 mb-6">
                Scale what's working, hire critical roles, build repeatable processes, and report on early results.
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold mt-0.5">•</span>
                  <span><strong>Week 9-10:</strong> Scale top-performing channels, increase budgets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold mt-0.5">•</span>
                  <span><strong>Week 11:</strong> Onboard new hires, build team processes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold mt-0.5">•</span>
                  <span><strong>Week 12:</strong> Present 90-day results, plan next quarter</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold mt-0.5">•</span>
                  <span><strong>Throughout:</strong> Refine based on data, iterate messaging</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t">
                <div className="font-bold text-gray-900 mb-2">Key Deliverables:</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ 90-day results report</li>
                  <li>✓ 1-2 new team members hired</li>
                  <li>✓ Scaled campaign results</li>
                  <li>✓ Q2 roadmap & OKRs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-indigo-50 border-2 border-indigo-200 p-8 rounded-lg">
            <p className="text-lg text-gray-900">
              <strong>Expected Impact by Day 90:</strong> Clear marketing strategy, 1-3 optimized channels showing growth,
              measurement systems in place, 1-2 new team members hired, repeatable processes documented. Not massive revenue
              yet—but the foundation for 12-24 months of scalable growth.
            </p>
          </div>
        </div>
      </section>

      {/* A Week in the Life */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 block">Day in the Life</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">A Typical Week for a Fractional CMO</h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Here's how a fractional CMO working 2 days/week might structure their time across a typical week.
            </p>
          </div>

          <div className="bg-gray-50 p-10 rounded-lg border-2 border-gray-200">
            <div className="space-y-8">
              {/* Monday */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                    M
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Monday (On)</h3>
                    <p className="text-gray-600 text-sm">Strategic Planning & Team Leadership</p>
                  </div>
                </div>
                <div className="ml-16 space-y-3">
                  <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                    <div className="font-bold text-gray-900 text-sm mb-1">9:00 - 10:30 AM</div>
                    <p className="text-gray-700">Review weekend updates, check dashboards, prioritize week. Async responses to team questions.</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                    <div className="font-bold text-gray-900 text-sm mb-1">10:30 AM - 12:00 PM</div>
                    <p className="text-gray-700">1-on-1s with 2-3 direct reports (performance marketer, content lead, designer)</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                    <div className="font-bold text-gray-900 text-sm mb-1">12:00 - 1:00 PM</div>
                    <p className="text-gray-700">Leadership meeting with CEO, sales, product to align on Q4 priorities</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                    <div className="font-bold text-gray-900 text-sm mb-1">1:00 - 3:00 PM</div>
                    <p className="text-gray-700">Deep work: Draft Q4 marketing strategy, review budget reallocation, analyze channel performance</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                    <div className="font-bold text-gray-900 text-sm mb-1">3:00 - 5:00 PM</div>
                    <p className="text-gray-700">Agency check-ins (SEO agency, creative freelancer), review deliverables, provide feedback</p>
                  </div>
                </div>
              </div>

              {/* Tuesday-Wednesday */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gray-300 text-gray-600 w-12 h-12 rounded-full flex items-center justify-center font-bold">
                    T/W
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Tuesday-Wednesday (Async)</h3>
                    <p className="text-gray-600 text-sm">Team executes, CMO available for questions</p>
                  </div>
                </div>
                <div className="ml-16">
                  <div className="bg-gray-100 p-4 rounded border-l-4 border-gray-400">
                    <p className="text-gray-700">
                      <strong>Not on site.</strong> Team executes campaigns, creates content, runs ads. CMO available async via Slack for urgent questions,
                      approvals, or course corrections. Spends 30-60 mins reviewing progress, leaving feedback asynchronously.
                    </p>
                  </div>
                </div>
              </div>

              {/* Thursday */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                    Th
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Thursday (On)</h3>
                    <p className="text-gray-600 text-sm">Execution Review & Hiring</p>
                  </div>
                </div>
                <div className="ml-16 space-y-3">
                  <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                    <div className="font-bold text-gray-900 text-sm mb-1">9:00 - 10:00 AM</div>
                    <p className="text-gray-700">Team standup: Review campaign performance, unblock issues, realign priorities</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                    <div className="font-bold text-gray-900 text-sm mb-1">10:00 AM - 12:00 PM</div>
                    <p className="text-gray-700">Candidate interviews for demand gen manager role (2 calls)</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                    <div className="font-bold text-gray-900 text-sm mb-1">12:00 - 2:00 PM</div>
                    <p className="text-gray-700">Review creative assets, approve campaigns going live, finalize messaging for product launch</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                    <div className="font-bold text-gray-900 text-sm mb-1">2:00 - 4:00 PM</div>
                    <p className="text-gray-700">Prepare monthly board deck, analyze CAC trends, draft recommendations for budget reallocation</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                    <div className="font-bold text-gray-900 text-sm mb-1">4:00 - 5:00 PM</div>
                    <p className="text-gray-700">Weekly async update to team: progress, priorities for next week, shoutouts</p>
                  </div>
                </div>
              </div>

              {/* Friday */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gray-300 text-gray-600 w-12 h-12 rounded-full flex items-center justify-center font-bold">
                    F
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Friday (Async)</h3>
                    <p className="text-gray-600 text-sm">Wrap-up and planning</p>
                  </div>
                </div>
                <div className="ml-16">
                  <div className="bg-gray-100 p-4 rounded border-l-4 border-gray-400">
                    <p className="text-gray-700">
                      Team wraps campaigns, posts content, finalizes reports. CMO reviews week's progress (30 mins),
                      plans Monday priorities, leaves feedback on Slack/docs. Available for urgent questions only.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-indigo-50 border-l-4 border-indigo-500 p-6">
            <p className="text-gray-700">
              <strong>Key Insight:</strong> Fractional CMOs maximize leverage by focusing on strategic decisions, team leadership,
              and removing blockers during "on" days. Team executes independently during "off" days using frameworks and systems
              the CMO has built.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Frequently Asked Questions</h2>
          <FAQ items={faqItems} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            See What Fractional CMOs Do
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Browse live fractional CMO job descriptions to see real responsibilities and deliverables from actual roles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-cmo-jobs-uk" className="px-10 py-5 bg-white text-indigo-600 font-bold uppercase tracking-wider hover:bg-indigo-50 transition-colors">
              View CMO Job Descriptions
            </Link>
            <Link href="/fractional-cmo" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-indigo-600 transition-colors">
              Complete CMO Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Related Resources</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-cmo" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
                Fractional CMO Guide
              </Link>
              <Link href="/hire-fractional-cmo" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
                How to Hire
              </Link>
              <Link href="/fractional-cmo-cost" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
                CMO Cost
              </Link>
              <Link href="/how-to-become-a-fractional-cmo" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
                Become a CMO
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
