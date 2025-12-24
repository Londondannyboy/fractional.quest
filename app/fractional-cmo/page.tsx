import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ, CMO_FAQS } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'
import { RoleHubHeader } from '@/components/RoleHubHeader'
import { RoleNews } from '@/components/RoleNews'
import { RoleSidebar } from '@/components/RoleSidebar'
import { RoleContentHub } from '@/components/RoleContentHub'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CMO: Complete Guide to Part-Time Chief Marketing Officers | Fractional.Quest',
  description: 'Ultimate guide to fractional CMOs. Learn what they do, when to hire, costs (£700-£1,400/day), ROI, and how to find the perfect marketing leader for your business. Browse 100+ fractional CMO jobs.',
  keywords: 'fractional cmo, part time cmo, fractional chief marketing officer, fractional cmo uk, fractional cmo cost, hire fractional cmo, what is a fractional cmo',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cmo',
  },
  openGraph: {
    title: 'Fractional CMO: Complete Guide to Part-Time Chief Marketing Officers',
    description: 'Everything you need to know about fractional CMOs. Costs, benefits, when to hire, and 100+ live job opportunities.',
    images: ['/images/fractional-cmo-og.jpg'],
    url: 'https://fractional.quest/fractional-cmo',
  },
}

export default function FractionalCMOPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Role Hub Header */}
      <RoleHubHeader role="cmo" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <main className="lg:col-span-3 space-y-12">

            {/* Quick Navigation */}
            <section className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <nav className="flex flex-wrap gap-6 text-sm">
                <a href="#guide" className="text-gray-500 hover:text-amber-500 transition-colors font-medium">What is a Fractional CMO?</a>
                <a href="#when-to-hire" className="text-gray-500 hover:text-amber-500 transition-colors font-medium">When to Hire</a>
                <a href="#what-they-do" className="text-gray-500 hover:text-amber-500 transition-colors font-medium">Responsibilities</a>
                <a href="#cost-calculator" className="text-gray-500 hover:text-amber-500 transition-colors font-medium">Cost & Pricing</a>
                <a href="#how-to-hire" className="text-gray-500 hover:text-amber-500 transition-colors font-medium">How to Hire</a>
                <a href="#roi" className="text-gray-500 hover:text-amber-500 transition-colors font-medium">ROI</a>
                <a href="#faq" className="text-gray-500 hover:text-amber-500 transition-colors font-medium">FAQ</a>
                <a href="#jobs" className="text-gray-500 hover:text-amber-500 transition-colors font-medium">Jobs</a>
              </nav>
            </section>

            {/* Latest News Section */}
            <RoleNews category="Marketing" title="Latest CMO News & Insights" limit={3} />

            {/* What is a Fractional CMO */}
            <section id="guide" className="scroll-mt-24">
              <div className="mb-8 pb-4 border-b border-gray-100">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600 mb-2 block">Definition</span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is a Fractional CMO?</h2>
              </div>

              <div className="prose prose-lg prose-gray max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  A <strong className="font-semibold text-gray-900">Fractional CMO</strong> (Chief Marketing Officer) is a seasoned marketing executive who works with your company on a part-time or project basis—typically 1-3 days per week. You get senior-level marketing leadership, strategic expertise, and proven execution frameworks without the £150,000-£250,000 annual commitment of a full-time CMO. This <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexible working model</a> has become increasingly popular across the UK.
                </p>

                <p className="leading-relaxed">
                  Think of it as "marketing leadership as a service." Fractional CMOs bring 15+ years of experience scaling companies like yours. They've built marketing engines, hired teams, launched products, and driven millions in revenue. According to the <a href="https://www.cim.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Chartered Institute of Marketing</a>, senior marketing leadership is critical for sustainable growth. Now they work with 2-4 companies simultaneously, sharing that expertise at a fraction of the cost.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-8 my-8 not-prose rounded-r-lg">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">💡</div>
                    <div>
                      <p className="text-lg font-bold text-gray-900 mb-2">
                        The fractional model works because most companies don't need a CMO five days a week.
                      </p>
                      <p className="text-gray-700">
                        Strategic decisions happen weekly, not daily. A fractional CMO spends 2 days per week setting direction, building systems, and coaching your team—then your team executes during the other 3 days. You get the expertise when it matters, without paying for downtime.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Fractional vs Full-Time vs Agency</h3>

                <div className="grid md:grid-cols-3 gap-6 my-8 not-prose">
                  <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-gray-900 text-lg mb-3 flex items-center gap-2">
                      <span className="w-3 h-3 bg-amber-500 rounded-full"></span> Fractional CMO
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>✅ Strategic leadership</li>
                      <li>✅ Team building & management</li>
                      <li>✅ Embedded in your company</li>
                      <li>✅ Accountable for results</li>
                      <li>✅ 1-3 days/week commitment</li>
                      <li>✅ £70k-£140k annual cost</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                    <h4 className="font-bold text-gray-900 text-lg mb-3">Full-Time CMO</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>✅ Strategic leadership</li>
                      <li>✅ Full-time availability</li>
                      <li>✅ Deep company integration</li>
                      <li>✅ Equity alignment</li>
                      <li>❌ £150k-£250k+ annual cost</li>
                      <li>❌ 3-6 month hiring process</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                    <h4 className="font-bold text-gray-900 text-lg mb-3">Marketing Agency</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>✅ Tactical execution</li>
                      <li>✅ Specialized capabilities</li>
                      <li>❌ Not strategic leadership</li>
                      <li>❌ Vendor relationship</li>
                      <li>❌ Doesn't manage your team</li>
                      <li>❌ Not accountable for strategy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 7 Signs You Need a Fractional CMO */}
            <section id="when-to-hire" className="scroll-mt-24">
              <div className="mb-8 pb-4 border-b border-gray-100">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600 mb-2 block">When to Hire</span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">7 Signs Your Business Needs a Fractional CMO</h2>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    number: '1',
                    title: 'Marketing Spend with No Clear ROI',
                    description: 'You\'re spending £10k-£50k/month on marketing—ads, agencies, tools—but can\'t articulate what\'s working or tie it to revenue. The <a href="https://www.ipa.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IPA</a> emphasizes the importance of marketing effectiveness and accountability. You need strategic oversight to optimize spend and prove ROI.',
                    icon: '💸',
                  },
                  {
                    number: '2',
                    title: 'Founder-Led Marketing Has Hit a Wall',
                    description: 'The CEO or founder has been "doing marketing" between product and fundraising calls. It worked for early traction, but now growth has plateaued and the founder needs to focus on their actual job. The <a href="https://www.scaleupinstitute.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute</a> reports that this is a common challenge for growing businesses.',
                    icon: '🚧',
                  },
                  {
                    number: '3',
                    title: 'You Have a Marketing Team But No Strategy',
                    description: 'You\'ve hired 2-4 marketers—maybe a content person, performance marketer, designer—but they lack direction. They\'re executing tactics without a cohesive strategy or someone making the hard prioritization calls. According to <a href="https://www.cipd.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD</a>, effective team leadership is essential for performance.',
                    icon: '🎯',
                  },
                  {
                    number: '4',
                    title: 'Post-Product-Market Fit Growth',
                    description: 'You\'ve validated PMF and raised Series A or B. Now you need to scale customer acquisition systematically. The <a href="https://www.british-business-bank.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Business Bank</a> highlights that strategic marketing is crucial at this growth stage. This is the classic fractional CMO moment: build the marketing engine that takes you from £1M to £10M ARR.',
                    icon: '📈',
                  },
                  {
                    number: '5',
                    title: 'Launching in a New Market or Vertical',
                    description: 'Expanding to a new geography (e.g., UK to US), audience segment, or product line. <a href="https://technation.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Tech Nation</a> research shows that international expansion requires experienced marketing leadership. You need someone who\'s done it before to lead GTM strategy, positioning, and messaging.',
                    icon: '🌍',
                  },
                  {
                    number: '6',
                    title: 'Marketing Agencies Aren\'t Delivering',
                    description: 'You\'ve hired agencies for SEO, paid ads, PR—but they operate in silos without strategic alignment. The <a href="https://www.dma.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">DMA</a> recommends strong client-side leadership for agency relationships. A fractional CMO acts as the "client-side quarterback" to coordinate agency work and drive accountability.',
                    icon: '🤝',
                  },
                  {
                    number: '7',
                    title: 'You Can\'t Justify a £200k+ Full-Time CMO',
                    description: 'You need senior marketing leadership but don\'t have the budget, headcount, or workload to justify a full-time executive hire. <a href="https://www.ons.gov.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS data</a> shows executive salaries continue to rise, making fractional alternatives increasingly attractive. Fractional gives you 80% of the value at 40% of the cost.',
                    icon: '💰',
                  },
                ].map((sign, index) => (
                  <div key={index} className="bg-white p-6 border-l-4 border-amber-500 shadow-sm hover:shadow-md transition-shadow rounded-r-lg">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-amber-500 text-white flex items-center justify-center rounded-full text-xl font-black">
                          {sign.number}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{sign.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{sign.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* What Does a Fractional CMO Do */}
            <section id="what-they-do" className="scroll-mt-24">
              <div className="mb-8 pb-4 border-b border-gray-100">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600 mb-2 block">Roles & Responsibilities</span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">What Does a Fractional CMO Actually Do?</h2>
              </div>

              {/* First 90 Days */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6">The First 90 Days: Building the Foundation</h3>
                <p className="text-gray-600 mb-6">A structured onboarding process is essential. The <a href="https://www.iod.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors</a> recommends clear milestones for executive appointments to ensure rapid value creation.</p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <div className="text-amber-600 font-bold text-xs mb-3 uppercase tracking-wide">Days 1-30: Audit & Strategy</div>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Marketing audit</li>
                      <li>• Customer research</li>
                      <li>• Competitive analysis</li>
                      <li>• Define ICP</li>
                      <li>• 12-month strategy</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <div className="text-amber-600 font-bold text-xs mb-3 uppercase tracking-wide">Days 31-60: Build & Optimize</div>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Implement tech stack</li>
                      <li>• Set up analytics</li>
                      <li>• Quick-win campaigns</li>
                      <li>• Team hiring plan</li>
                      <li>• Optimize agencies</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <div className="text-amber-600 font-bold text-xs mb-3 uppercase tracking-wide">Days 61-90: Scale & Measure</div>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Scale channels</li>
                      <li>• Build processes</li>
                      <li>• Report on wins</li>
                      <li>• Plan next quarter</li>
                      <li>• Team expansion</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Ongoing Responsibilities */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Ongoing Responsibilities</h3>
                <p className="text-gray-600 mb-6">Marketing leadership encompasses strategic and operational duties. The <a href="https://www.cim.co.uk/professional-marketing-standards" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIM Professional Marketing Standards</a> outline key competencies for senior marketers.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: 'Marketing Strategy & Planning', icon: '🎯' },
                    { title: 'Team Leadership & Development', icon: '👥' },
                    { title: 'Demand Generation & Growth', icon: '📈' },
                    { title: 'Brand & Product Marketing', icon: '✨' },
                    { title: 'Marketing Operations & Analytics', icon: '⚙️' },
                    { title: 'Agency & Vendor Management', icon: '🤝' },
                    { title: 'Budget & Resource Allocation', icon: '💰' },
                    { title: 'Performance Tracking & Reporting', icon: '📊' },
                  ].map((responsibility, index) => (
                    <div key={index} className="bg-white border border-gray-200 p-4 rounded-lg flex items-center gap-3">
                      <div className="text-2xl">{responsibility.icon}</div>
                      <h4 className="font-semibold text-gray-900 text-sm">{responsibility.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Cost & Pricing Calculator */}
            <section id="cost-calculator" className="scroll-mt-24">
              <div className="mb-8 pb-4 border-b border-gray-100">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600 mb-2 block">Cost & Pricing</span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">How Much Does a Fractional CMO Cost?</h2>
              </div>

              <RoleCalculator role="cmo" />

              <div className="mt-12 prose prose-lg prose-gray max-w-none">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Pricing Models</h3>

                <div className="grid md:grid-cols-3 gap-6 my-8 not-prose">
                  <div className="bg-white p-6 border-2 border-gray-200 rounded-xl text-center">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Day Rate</div>
                    <div className="text-2xl font-black text-gray-900 mb-1">£700-1.4k</div>
                    <p className="text-xs text-gray-500">per day</p>
                  </div>

                  <div className="bg-white p-6 border-2 border-amber-400 rounded-xl text-center relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-2 py-0.5 text-[10px] font-bold uppercase rounded">Popular</div>
                    <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">Monthly Retainer</div>
                    <div className="text-2xl font-black text-gray-900 mb-1">£3k-5.5k</div>
                    <p className="text-xs text-gray-500">per month</p>
                  </div>

                  <div className="bg-white p-6 border-2 border-gray-200 rounded-xl text-center">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Project</div>
                    <div className="text-2xl font-black text-gray-900 mb-1">£10k-50k</div>
                    <p className="text-xs text-gray-500">per project</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Comparison Table */}
            <section className="scroll-mt-24">
              <div className="mb-8 pb-4 border-b border-gray-100">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600 mb-2 block">Comparison</span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional vs Interim vs Full-Time</h2>
              </div>
              <ServiceComparisonTable role="CMO" accentColor="amber" />
            </section>

            {/* How to Hire */}
            <section id="how-to-hire" className="scroll-mt-24">
              <div className="mb-8 pb-4 border-b border-gray-100">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600 mb-2 block">Hiring Process</span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">How to Hire a Fractional CMO</h2>
              </div>

              <HireProcessStepper accentColor="amber" />

              <div className="mt-12 bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Interview Questions to Ask</h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li>• "Walk me through how you scaled marketing at [previous company]. What worked? What didn't?"</li>
                  <li>• "What's your approach to developing marketing strategy from scratch?"</li>
                  <li>• "How do you prioritize channels when you have limited budget?"</li>
                  <li>• "What marketing KPIs do you track religiously? How do you define success?"</li>
                  <li>• "How would you structure our marketing team? What roles would you hire first?"</li>
                </ul>
              </div>
            </section>

            {/* ROI & Benefits */}
            <section id="roi" className="scroll-mt-24">
              <div className="mb-8 pb-4 border-b border-gray-100">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600 mb-2 block">ROI & Benefits</span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">The Business Case</h2>
              </div>

              <p className="text-gray-600 mb-8">Research from the <a href="https://www.bvca.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Private Equity & Venture Capital Association</a> shows that portfolio companies increasingly leverage fractional executives to drive growth while managing costs.</p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Cost Efficiency', desc: 'Save 40-60% vs full-time executive costs.', stat: '50% Savings' },
                  { title: 'Speed to Impact', desc: 'Start in weeks, not months. Immediate value.', stat: '2-4 Weeks' },
                  { title: 'Expertise', desc: '15-20 years experience across multiple companies.', stat: 'Senior Level' },
                  { title: 'Flexibility', desc: 'Scale up/down as needed. No long-term lock-in.', stat: 'Flexible' },
                ].map((item) => (
                  <div key={item.title} className="bg-white p-6 border rounded-xl hover:shadow-md transition-shadow">
                    <div className="text-amber-500 font-black text-xl mb-1">{item.stat}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-24">
              <div className="mb-8 pb-4 border-b border-gray-100">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600 mb-2 block">FAQ</span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions</h2>
              </div>
              <FAQ items={CMO_FAQS} title="" />
            </section>

            {/* Jobs Section */}
            <section id="jobs" className="scroll-mt-24">
              <div className="bg-amber-50 p-8 rounded-xl border border-amber-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Looking for a Fractional CMO?</h3>
                <p className="text-gray-700 mb-6">Browse our curated list of opportunities or post a job to reach qualified experts.</p>
                <div className="flex gap-4">
                  <Link href="/fractional-cmo-jobs-uk" className="px-6 py-3 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-colors">
                    Browse Jobs
                  </Link>
                  <Link href="/handler/sign-up" className="px-6 py-3 bg-white text-gray-900 font-bold rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    Post a Job
                  </Link>
                </div>
              </div>
            </section>

          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <RoleSidebar role="cmo" relatedRoles={['Growth', 'Product', 'Sales']} />
              
              {/* Mini CTA */}
              <div className="bg-gray-900 rounded-xl p-6 text-white text-center">
                <div className="text-3xl mb-2">🚀</div>
                <h4 className="font-bold mb-2">Scale Faster?</h4>
                <p className="text-sm text-gray-400 mb-4">Find a Fractional CMO to lead your growth.</p>
                <Link href="/contact" className="block w-full py-2 bg-amber-500 text-black font-bold rounded hover:bg-amber-400 text-sm transition-colors">
                  Get Matched
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <RoleContentHub currentRole="cmo" />
    </div>
  )
}
