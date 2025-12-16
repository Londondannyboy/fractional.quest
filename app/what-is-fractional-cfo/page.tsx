import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { JobsGraph3D } from '@/components/JobsGraph3D'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'What is a Fractional CFO? Definition, Role & When to Hire (2025)',
  description: 'A Fractional CFO is an experienced Chief Financial Officer who works part-time (1-3 days/week) providing strategic financial leadership at 50-70% less cost than full-time. Learn when to hire one.',
  keywords: 'what is a fractional cfo, fractional cfo definition, what does a fractional cfo do, fractional vs full time cfo, fractional vs interim cfo',
  alternates: {
    canonical: 'https://fractional.quest/what-is-fractional-cfo',
  },
  openGraph: {
    title: 'What is a Fractional CFO? Complete Definition & Guide',
    description: 'Everything you need to know about Fractional CFOs - definition, responsibilities, when to hire, and how they compare to full-time and interim CFOs.',
    images: ['/images/what-is-fractional-cfo.jpg'],
    url: 'https://fractional.quest/what-is-fractional-cfo',
  },
}

const WHAT_IS_CFO_FAQS = [
  {
    question: "What does a Fractional CFO do?",
    answer: "A Fractional CFO handles strategic financial leadership: fundraising, investor relations, board reporting, financial planning & analysis, cash flow management, financial modeling, M&A due diligence, and building finance teams. They work 1-3 days per week but take full ownership of financial outcomes."
  },
  {
    question: "How much does a Fractional CFO make?",
    answer: "Fractional CFOs in the UK typically earn £100,000-£300,000+ annually. With 2-4 clients at £700-£1,500/day each working 2-3 days per week, many fractional CFOs earn more than they would in a full-time role."
  },
  {
    question: "Is a Fractional CFO worth it?",
    answer: "Yes, if you're a £1M-£20M revenue company needing CFO expertise but can't justify full-time cost. You get 50-70% cost savings, senior expertise (15+ years), flexibility to scale, and can start within days vs months for full-time hires."
  },
  {
    question: "How many hours does a Fractional CFO work?",
    answer: "Typical engagements are 1-3 days per week (8-24 hours weekly) or 40-80 hours monthly. The exact hours depend on company size, complexity, and current needs (e.g., fundraising requires more hours)."
  },
  {
    question: "What's the difference between Fractional and Interim CFO?",
    answer: "Fractional CFOs work part-time ongoing (1-3 days/week, 6-18+ months), focusing on strategic leadership. Interim CFOs work full-time temporarily (3-12 months) to fill a gap during transitions. Fractional is more cost-effective for ongoing needs."
  },
  {
    question: "Can a Fractional CFO work remotely?",
    answer: "Yes, most fractional CFO work is now hybrid or fully remote. Typical model: 1 day/week onsite for key meetings (board, team, stakeholder), 1-2 days remote. Fully remote is increasingly common post-COVID, especially for SaaS and tech companies."
  },
]

export default function WhatIsFractionalCFOPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with 3D Background */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <JobsGraph3D roleFilter="CFO" limit={25} height="100%" isHero={true} showOverlay={true} />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/fractional-cfo" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to CFO Hub
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-white text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Definition Guide
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                What is a<br />
                <span className="text-gray-400">Fractional CFO?</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                The complete answer to the most searched question about fractional finance leadership. 1,900+ monthly searches, +85% year-over-year.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">1,900</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Monthly Searches</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">+85%</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">YoY Growth</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">1-3 Days</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Per Week</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Snippet Optimized Definition */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Quick Answer</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional CFO Definition</h2>
          </div>

          {/* Featured Snippet Target */}
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-8 mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-2xl md:text-3xl font-light text-gray-900 leading-relaxed mb-0">
                A <strong className="font-bold">Fractional CFO</strong> is an experienced Chief Financial Officer who provides strategic financial leadership to companies on a <strong>part-time basis</strong>—typically working 1-3 days per week. Unlike consultants, fractional CFOs become embedded members of your leadership team, managing your finance function, building investor relationships, and driving financial outcomes at <strong>50-70% less cost</strong> than a full-time CFO hire.
              </p>
            </div>
          </div>

          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed">
              Think of a fractional CFO as your company's senior financial leader—attending board meetings, managing your finance team, overseeing fundraising, and taking ownership of strategic decisions—just not five days a week.
            </p>

            <p>
              The "fractional" model allows companies to access <strong>CFO-level expertise and experience</strong> (typically 15+ years in senior finance roles) without the commitment, cost, and overhead of a full-time executive hire. You pay only for the days you need, scale up or down as requirements change, and can start within days instead of the 3-6 month search process for full-time CFOs.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">Key Characteristics</h3>

            <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
              <div className="bg-gray-50 p-6">
                <div className="text-4xl mb-3">⏱️</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Part-Time Commitment</h4>
                <p className="text-gray-700">Works 1-3 days per week (8-24 hours), not full-time. You get CFO thinking when you need it without paying for 40 hours weekly.</p>
              </div>

              <div className="bg-gray-50 p-6">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Strategic Focus</h4>
                <p className="text-gray-700">Handles high-value work: fundraising, investor relations, board reporting, M&A, financial strategy. Delegates day-to-day tasks to your team.</p>
              </div>

              <div className="bg-gray-50 p-6">
                <div className="text-4xl mb-3">👔</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Senior Experience</h4>
                <p className="text-gray-700">Typically 15+ years in finance with prior CFO roles. More experienced than most full-time candidates you could afford.</p>
              </div>

              <div className="bg-gray-50 p-6">
                <div className="text-4xl mb-3">💰</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Cost-Effective</h4>
                <p className="text-gray-700">£36k-£120k annually vs £150k-£250k+ for full-time. Save 50-70% while getting better expertise.</p>
              </div>

              <div className="bg-gray-50 p-6">
                <div className="text-4xl mb-3">📈</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Flexible & Scalable</h4>
                <p className="text-gray-700">Scale from 1 to 3 days per week as needs change. 30-day notice periods. No long-term lock-in.</p>
              </div>

              <div className="bg-gray-50 p-6">
                <div className="text-4xl mb-3">🚀</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Fast to Start</h4>
                <p className="text-gray-700">Begin within 1-2 weeks vs 3-6 months to hire full-time. Critical when you need help NOW.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Does a Fractional CFO Do */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Responsibilities</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What Does a Fractional CFO Do?</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              A fractional CFO handles the <strong>strategic financial leadership</strong> that drives company growth, while delegating operational work (bookkeeping, payroll, AP/AR) to your finance team or accountant.
            </p>

            <div className="bg-white p-8 border-2 border-gray-900 mb-10">
              <h3 className="text-2xl font-black text-gray-900 mt-0 mb-6">Core Responsibilities (80% of Time)</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                    <span className="text-2xl mr-3">📊</span> Financial Strategy & Planning
                  </h4>
                  <p className="text-gray-700 ml-11 mb-0">Develop 3-5 year strategic plans, annual budgets, scenario planning, and unit economics analysis. Define KPIs and financial targets aligned with business goals.</p>
                </div>

                <div className="border-t pt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                    <span className="text-2xl mr-3">💼</span> Fundraising & Investor Relations
                  </h4>
                  <p className="text-gray-700 ml-11 mb-0">Lead fundraising rounds (seed to Series B), build financial models for investors, prepare pitch decks, manage due diligence, and maintain ongoing investor relationships and reporting.</p>
                </div>

                <div className="border-t pt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                    <span className="text-2xl mr-3">📈</span> Board Reporting & Governance
                  </h4>
                  <p className="text-gray-700 ml-11 mb-0">Prepare monthly/quarterly board packs, present financial performance, provide strategic recommendations, and ensure governance and compliance.</p>
                </div>

                <div className="border-t pt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                    <span className="text-2xl mr-3">💰</span> Cash Flow & Forecasting
                  </h4>
                  <p className="text-gray-700 ml-11 mb-0">Manage cash runway, build 13-week cash flow forecasts, optimize working capital, and ensure the company never runs out of money.</p>
                </div>

                <div className="border-t pt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                    <span className="text-2xl mr-3">🔄</span> M&A & Strategic Transactions
                  </h4>
                  <p className="text-gray-700 ml-11 mb-0">Lead buy-side or sell-side M&A, manage due diligence, valuation analysis, deal structuring, and post-acquisition integration.</p>
                </div>

                <div className="border-t pt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                    <span className="text-2xl mr-3">👥</span> Finance Team Leadership
                  </h4>
                  <p className="text-gray-700 ml-11 mb-0">Hire and manage controllers, FP&A analysts, and accounting staff. Build processes, implement systems (NetSuite, Xero), and establish financial controls.</p>
                </div>

                <div className="border-t pt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                    <span className="text-2xl mr-3">📉</span> Financial Modeling & Analysis
                  </h4>
                  <p className="text-gray-700 ml-11 mb-0">Build SaaS metrics dashboards, cohort analysis, pricing models, scenario planning ("what if" analysis), and ROI calculations for major initiatives.</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">What a Fractional CFO Does NOT Do</h3>

            <div className="bg-white p-8 border-l-4 border-gray-300">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400">✗</span>
                  <span><strong>Bookkeeping:</strong> Recording transactions, reconciliations (hire a bookkeeper)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400">✗</span>
                  <span><strong>Payroll processing:</strong> Running payroll, benefits admin (use Gusto, ADP, or accountant)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400">✗</span>
                  <span><strong>AP/AR processing:</strong> Paying bills, chasing invoices (delegate to admin/controller)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400">✗</span>
                  <span><strong>Tax preparation:</strong> Filing tax returns (hire a tax accountant/CPA firm)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400">✗</span>
                  <span><strong>Day-to-day operations:</strong> Full-time management of finance team</span>
                </li>
              </ul>
              <p className="text-gray-600 mt-6 mb-0">
                <strong>Key principle:</strong> Fractional CFOs focus on <em>strategic thinking and leadership</em> that only a CFO can do. They delegate or outsource operational tasks.
              </p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">A Day in the Life</h3>

            <div className="bg-gray-900 text-white p-8">
              <h4 className="text-xl font-bold mb-4 text-white">Tuesday (Typical CFO Day at Client Company)</h4>
              <div className="space-y-4 text-gray-300">
                <div>
                  <span className="font-bold text-white">9:00-10:30:</span> Review monthly financials, analyze variance to budget, prepare commentary for board pack
                </div>
                <div>
                  <span className="font-bold text-white">10:30-12:00:</span> Leadership team meeting - present cash runway update (8 months), discuss hiring freeze implications
                </div>
                <div>
                  <span className="font-bold text-white">12:00-13:00:</span> Lunch with potential Series A lead investor, answer financial due diligence questions
                </div>
                <div>
                  <span className="font-bold text-white">13:00-15:00:</span> Update financial model: new SaaS cohort data, revise ARR forecast, model 3 growth scenarios
                </div>
                <div>
                  <span className="font-bold text-white">15:00-16:00:</span> 1-on-1 with Financial Controller - review hire plans for FP&A analyst, discuss NetSuite implementation
                </div>
                <div>
                  <span className="font-bold text-white">16:00-17:30:</span> Work on board deck: finalize slides on unit economics, fundraising timeline, hiring plan
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When Companies Need Fractional CFOs */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Use Cases</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">When Do Companies Hire Fractional CFOs?</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Most companies engage a fractional CFO during critical growth phases or when they need CFO expertise but can't justify the cost of a full-time hire.
            </p>

            <div className="grid gap-6 my-10">
              <div className="bg-gray-50 p-6 border-l-4 border-emerald-600">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">💰 Preparing for Fundraising</h3>
                <p className="text-gray-700 mb-0">"We're raising a Series A in 6 months and need investor-ready financials, a compelling model, and someone who speaks VC language."</p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-gray-900">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">📈 Rapid Growth (3x+ YoY)</h3>
                <p className="text-gray-700 mb-0">"We've gone from £2M to £8M ARR in 18 months. Our founder-led finance is breaking. We need real FP&A and systems."</p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-emerald-600">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">⚠️ Cash Flow Crisis</h3>
                <p className="text-gray-700 mb-0">"We have 7 months of runway and our board wants a credible plan to extend it to 18 months or we need to fundraise immediately."</p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-gray-900">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">🎯 Board Demands Better Reporting</h3>
                <p className="text-gray-700 mb-0">"Our investors want monthly board packs with unit economics, cohort analysis, and scenario planning. We can't deliver that today."</p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-emerald-600">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">🔄 M&A Activity</h3>
                <p className="text-gray-700 mb-0">"We're acquiring two competitors and need someone to lead due diligence, valuation, and integration."</p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-gray-900">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">🌍 International Expansion</h3>
                <p className="text-gray-700 mb-0">"We're opening US and EU entities. We need multi-currency forecasting, transfer pricing, and someone who's done this before."</p>
              </div>
            </div>

            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 my-10">
              <p className="text-lg font-semibold text-gray-900 mb-2">Sweet Spot for Fractional CFOs</p>
              <p className="text-gray-700 mb-0">Companies with <strong>£1M-£20M revenue</strong> who need strategic CFO expertise but don't require 40 hours weekly of CFO time. Below £1M, a good accountant often suffices. Above £20M, you typically need full-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Typical Engagement Models</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Fractional CFOs work on flexible engagement models. Here are the four most common structures:
            </p>

            <div className="space-y-6">
              <div className="bg-white p-8 border-2 border-gray-900">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">1. Day Rate (Most Common)</h3>
                <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Structure:</p>
                    <p>Book 1-3 specific days per week (e.g., every Tuesday + Thursday). Pay only for days worked.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Typical Cost:</p>
                    <p>£700-£1,500/day<br />2 days/week = £8,400-£12,000/month</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Best For:</p>
                    <p>Ongoing strategic support, embedded team member feel</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Flexibility:</p>
                    <p>Scale up/down monthly, 30-day notice</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">2. Monthly Retainer</h3>
                <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Structure:</p>
                    <p>Fixed monthly fee for defined scope (e.g., 40 hours, board reporting, fundraising support)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Typical Cost:</p>
                    <p>£3,000-£10,000/month<br />Depending on scope and seniority</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Best For:</p>
                    <p>Predictable budgeting, defined deliverables</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Duration:</p>
                    <p>Typically 6-12 month agreements</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">3. Project-Based</h3>
                <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Structure:</p>
                    <p>Fixed fee for specific project with clear deliverables and timeline</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Typical Cost:</p>
                    <p>Series A raise: £25-£50k<br />M&A due diligence: £15-£30k<br />IPO readiness: £50-£75k</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Best For:</p>
                    <p>One-time initiatives, clear scope</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Duration:</p>
                    <p>3-6 months typically</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">4. Hourly (Less Common)</h3>
                <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Structure:</p>
                    <p>Track hours worked, invoice monthly. More admin overhead.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Typical Cost:</p>
                    <p>£150-£500/hour<br />10-30 hours/month</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Best For:</p>
                    <p>Very small engagements, advisory only, board meeting attendance</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Drawback:</p>
                    <p>Harder to budget, incentive misalignment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Comparisons</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional vs Interim vs Consultant vs Full-Time</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="p-4">Factor</th>
                  <th className="p-4">Fractional CFO</th>
                  <th className="p-4">Interim CFO</th>
                  <th className="p-4">Consultant</th>
                  <th className="p-4">Full-Time CFO</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b">
                  <td className="p-4 font-semibold">Time Commitment</td>
                  <td className="p-4 bg-emerald-50">1-3 days/week</td>
                  <td className="p-4">5 days/week</td>
                  <td className="p-4">Varies, often hourly</td>
                  <td className="p-4">5 days/week</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold">Duration</td>
                  <td className="p-4 bg-emerald-50">6-18+ months (ongoing)</td>
                  <td className="p-4">3-12 months (temporary)</td>
                  <td className="p-4">Project-based</td>
                  <td className="p-4">Permanent</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Annual Cost (UK)</td>
                  <td className="p-4 bg-emerald-50">£36k-£120k</td>
                  <td className="p-4">£100k-£180k</td>
                  <td className="p-4">£50k-£200k</td>
                  <td className="p-4">£150k-£250k+</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold">Role Type</td>
                  <td className="p-4 bg-emerald-50">Leadership team member</td>
                  <td className="p-4">Gap-fill leadership</td>
                  <td className="p-4">External advisor</td>
                  <td className="p-4">Executive leadership</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Ownership</td>
                  <td className="p-4 bg-emerald-50">Full accountability</td>
                  <td className="p-4">Full accountability</td>
                  <td className="p-4">Advisory only</td>
                  <td className="p-4">Full accountability</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold">Team Management</td>
                  <td className="p-4 bg-emerald-50">Yes, but delegates ops</td>
                  <td className="p-4">Yes, full-time</td>
                  <td className="p-4">No</td>
                  <td className="p-4">Yes, full-time</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Board Interaction</td>
                  <td className="p-4 bg-emerald-50">Attends & presents</td>
                  <td className="p-4">Attends & presents</td>
                  <td className="p-4">Rarely</td>
                  <td className="p-4">Attends & presents</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold">Notice Period</td>
                  <td className="p-4 bg-emerald-50">30 days</td>
                  <td className="p-4">Defined end date</td>
                  <td className="p-4">Per project</td>
                  <td className="p-4">3-6 months</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Experience Level</td>
                  <td className="p-4 bg-emerald-50">Very senior (15+ yrs)</td>
                  <td className="p-4">Senior (12+ years)</td>
                  <td className="p-4">Varies widely</td>
                  <td className="p-4">Varies (8+ years)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-semibold">Best For</td>
                  <td className="p-4 bg-emerald-50">£1M-£20M revenue, strategic needs</td>
                  <td className="p-4">Transition periods, emergencies</td>
                  <td className="p-4">Specific expertise, one-off projects</td>
                  <td className="p-4">£20M+ revenue, complex ops</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Link href="/fractional-cfo-vs-full-time" className="p-6 bg-gray-50 hover:bg-gray-900 hover:text-white transition-all group">
              <h3 className="text-lg font-bold mb-2">Fractional vs Full-Time CFO</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-300 mb-4">Detailed comparison with cost analysis</p>
              <div className="text-sm font-bold uppercase tracking-wider">Read More →</div>
            </Link>

            <Link href="/interim-cfo" className="p-6 bg-gray-50 hover:bg-gray-900 hover:text-white transition-all group">
              <h3 className="text-lg font-bold mb-2">What is an Interim CFO?</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-300 mb-4">When to use interim vs fractional</p>
              <div className="text-sm font-bold uppercase tracking-wider">Learn More →</div>
            </Link>

            <Link href="/fractional-cfo-services" className="p-6 bg-gray-50 hover:bg-gray-900 hover:text-white transition-all group">
              <h3 className="text-lg font-bold mb-2">Hire a Fractional CFO</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-300 mb-4">Find and engage fractional CFO services</p>
              <div className="text-sm font-bold uppercase tracking-wider">Get Started →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Real Examples Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Examples</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Real-World Examples</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Here's how companies at different stages use fractional CFOs:
            </p>

            <div className="space-y-8">
              <div className="bg-white p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">🚀</div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mt-0 mb-1">SaaS Startup - Series A Prep</h3>
                    <p className="text-sm text-gray-600 mb-0">£3.5M ARR, 25 employees, London</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>Challenge:</strong> Planning Series A raise in 6 months. Founders running finance in spreadsheets. No financial model. Board unhappy with reporting quality.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Solution:</strong> Hired fractional CFO 2 days/week (Tue + Thu) at £1,100/day = £8,800/month for 9 months.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Results:</strong> Built investor-ready financial model, implemented Xero + Adaptive Planning, hired Financial Controller, prepared board pack template, supported Series A pitch process. Successfully raised £8M Series A. CFO scaled down to 1 day/week post-fundraise.
                </p>
                <p className="text-gray-700 mb-0">
                  <strong>Cost vs Full-Time:</strong> £79,200 total vs £150k+ salary for full-time CFO they didn't need post-fundraise.
                </p>
              </div>

              <div className="bg-white p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">🏭</div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mt-0 mb-1">Manufacturing Scale-Up - M&A</h3>
                    <p className="text-sm text-gray-600 mb-0">£12M revenue, 75 employees, Manchester</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>Challenge:</strong> Acquiring two competitors in 6 months. Needed due diligence expertise and integration planning. Existing Finance Director had never done M&A.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Solution:</strong> Engaged fractional CFO on project basis: £45,000 fixed fee for both acquisitions over 6 months.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Results:</strong> Led buy-side due diligence, identified £800k working capital issues in target #1 (saved deal), structured earn-outs for both deals, led post-acquisition integration. Integrated finance teams within 90 days.
                </p>
                <p className="text-gray-700 mb-0">
                  <strong>Outcome:</strong> After M&A complete, company kept fractional CFO at 1 day/month for strategic advisory.
                </p>
              </div>

              <div className="bg-white p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">💡</div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mt-0 mb-1">E-Commerce Business - Cash Crisis</h3>
                    <p className="text-sm text-gray-600 mb-0">£6M revenue, 18 employees, Brighton</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>Challenge:</strong> Burning £80k/month, 7 months runway. Grew too fast, inventory out of control, no cash flow visibility.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Solution:</strong> Emergency fractional CFO engagement: 3 days/week at £1,200/day = £14,400/month for 4 months, then 2 days/week ongoing.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Results:</strong> Built 13-week cash flow forecast, implemented weekly cash meetings, renegotiated payment terms with suppliers (+30 days), optimized inventory (freed £200k cash), cut burn to £35k/month. Extended runway from 7 to 16 months.
                </p>
                <p className="text-gray-700 mb-0">
                  <strong>Company saved:</strong> Would have gone insolvent without intervention. Now profitable and growing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ faqs={WHAT_IS_CFO_FAQS} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Hire or Become a Fractional CFO?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Explore our complete Fractional CFO hub with pricing guides, job opportunities, and resources.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-cfo-services" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Hire a Fractional CFO
            </Link>
            <Link href="/fractional-cfo-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              Browse CFO Jobs
            </Link>
            <Link href="/fractional-cfo" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              Complete CFO Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
