import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fractional COO for Startups | Operational Leadership for $5k-12k/mo',
  description: 'Fractional COOs help startups scale from $2M to $20M+ without full-time exec cost. Get systems, team structure, and operational excellence for 60% less.',
  keywords: 'fractional coo for startups, startup coo, operations for startups, startup operations executive',
}

export default function FractionalCOOForStartupsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gray-50 text-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/fractional-coo" className="text-gray-400 hover:text-gray-900 mb-6 inline-block">← Back to COO Hub</Link>
          <h1 className="text-5xl font-black mb-6">Fractional COO for Startups</h1>
          <p className="text-xl text-gray-300">
            Get senior operational leadership that scales your startup from product-market fit to $20M+ revenue—without the $250k+ full-time cost.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-gray-50">
              <div className="text-3xl font-black text-blue-700">$5k-12k</div>
              <div className="text-gray-600">Monthly Cost</div>
            </div>
            <div className="text-center p-6 bg-gray-50">
              <div className="text-3xl font-black text-blue-700">12-24 mo</div>
              <div className="text-gray-600">Typical Engagement</div>
            </div>
            <div className="text-center p-6 bg-gray-50">
              <div className="text-3xl font-black text-blue-700">2 days</div>
              <div className="text-gray-600">Per Week Average</div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>Why Startups Choose Fractional COOs</h2>

            <p className="text-xl text-gray-700">
              Most <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">startups scaling beyond product-market fit</a> and approaching Series B need operational expertise but can't justify (or afford) a $250k+ full-time COO. Fractional COOs solve this perfectly.
            </p>

            <h3>The Startup Challenge</h3>
            <p>
              You've found product-market fit. Customers want what you're building. But your operations are chaos:
            </p>
            <ul>
              <li>Founder/CEO drowning in operational details instead of vision and fundraising</li>
              <li>No systems or processes—everything is ad hoc and breaks with growth</li>
              <li>Team growing fast but no <a href="https://www.managers.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">organizational structure or management layers</a></li>
              <li>Customer delivery issues, quality problems, missed commitments</li>
              <li>Can't scale efficiently—need to add headcount for every revenue dollar</li>
            </ul>

            <p>
              You know you need a COO. But you're <a href="https://www.bvca.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">pre-Series B with limited cash</a>, can't offer market-rate comp + equity, and hiring takes 4-6 months you don't have.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <p className="text-xl font-bold mb-2">The Fractional Solution:</p>
              <p className="mb-0">Get a senior COO (15-20+ years experience) who's scaled 5+ startups through your exact phase, starting in 1-2 weeks, for $60k-$144k/year instead of $250k+. They work 1-3 days/week focusing on high-leverage strategic work.</p>
            </div>

            <h2>What Fractional COOs Do for Startups</h2>

            <h3>Pre-Series A ($1M-$5M ARR)</h3>
            <ul>
              <li><strong>Build operational foundation:</strong> Core processes, SOPs, initial tech stack</li>
              <li><strong>Team structure:</strong> Define roles, reporting lines, <a href="https://www.cipd.org/uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">hiring plan</a></li>
              <li><strong>Founder support:</strong> Take ops weight off CEO to focus on <a href="https://www.british-business-bank.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">fundraising</a></li>
              <li><strong>Investor readiness:</strong> Clean operations = better fundraising story</li>
            </ul>

            <h3>Series A/B ($5M-$20M ARR)</h3>
            <ul>
              <li><strong>Scale infrastructure:</strong> Systems that handle 3-5x growth</li>
              <li><strong>Team leadership:</strong> Manage department heads, build <a href="https://www.apm.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">management layer</a></li>
              <li><strong>Process optimization:</strong> Efficiency gains to improve unit economics</li>
              <li><strong>Customer success:</strong> Scale delivery and support operations</li>
              <li><strong>Execution discipline:</strong> Transform from scrappy to <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">professional operations</a></li>
            </ul>

            <h3>Post-Series B ($20M+ ARR)</h3>
            <ul>
              <li><strong>Operational excellence:</strong> Build world-class operations for next phase</li>
              <li><strong>Cross-functional leadership:</strong> Align product, eng, sales, support</li>
              <li><strong>Scaling playbooks:</strong> Document processes for <a href="https://www.enterprisenation.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">rapid team growth</a></li>
              <li><strong>M&A readiness:</strong> Prepare operations for acquisition or IPO</li>
              <li><strong>Transition planning:</strong> May convert to full-time or hire permanent COO</li>
            </ul>

            <h2>Startup Success Stories</h2>

            <div className="space-y-6 not-prose my-8">
              <div className="bg-gray-50 p-6">
                <div className="font-bold text-lg mb-2">SaaS Startup: $3M → $15M ARR</div>
                <p className="text-gray-700">16-month engagement, 2 days/week. Fractional COO built customer success ops, implemented Salesforce, established <a href="https://startups.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">hiring processes</a>. Team grew 25 → 75 people. CEO freed up 25 hours/week for fundraising and strategy. Raised $12M Series A.</p>
              </div>

              <div className="bg-gray-50 p-6">
                <div className="font-bold text-lg mb-2">E-commerce Startup: $5M → $25M</div>
                <p className="text-gray-700">12-month engagement, 3 days/week. Fractional COO optimized fulfillment (reduced costs 30%), built ops team, implemented WMS. Gross margins improved from 42% to 54%. <a href="https://technation.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Profitable at scale</a>. Converted to full-time COO post-Series B.</p>
              </div>

              <div className="bg-gray-50 p-6">
                <div className="font-bold text-lg mb-2">HealthTech Startup: Pre-Revenue → $8M ARR</div>
                <p className="text-gray-700">24-month engagement, 1-2 days/week (scaled up). Fractional COO built operations from scratch: <a href="https://www.managers.org.uk/knowledge-and-insights/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">compliance framework</a>, clinical ops, patient onboarding. Passed SOC2 audit. Scaled to 50 customers without operational crisis.</p>
              </div>
            </div>

            <h2>Cost Comparison for Startups</h2>

            <div className="overflow-x-auto not-prose my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-900">
                    <th className="py-3 px-4 text-left">Scenario</th>
                    <th className="py-3 px-4 text-left">Fractional COO</th>
                    <th className="py-3 px-4 text-left">Full-Time COO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-bold">Pre-Series A</td>
                    <td className="py-3 px-4 text-blue-700">$72k/year (1 day/week)</td>
                    <td className="py-3 px-4">Can't afford / Can't attract talent</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="py-3 px-4 font-bold">Series A</td>
                    <td className="py-3 px-4 text-blue-700">$120k/year (2 days/week)</td>
                    <td className="py-3 px-4">$280k+ (salary + equity + benefits)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-bold">Series B</td>
                    <td className="py-3 px-4 text-blue-700">$144k/year (2-3 days/week)</td>
                    <td className="py-3 px-4">$320k+ (senior COO)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xl font-bold">
              Savings = <a href="https://www.scaleupinstitute.org.uk/scaleup-insights/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Extended runway</a>. Every $100k saved = 6-12 months more runway to hit milestones.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-6">Ready to Scale Your Startup?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get <a href="https://www.iod.com/membership/leadership-development/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">senior operational leadership</a> that helps you scale efficiently without burning runway.
          </p>
          <Link
            href="/fractional-coo-services"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 transition-colors"
          >
            Find Startup-Experienced COOs →
          </Link>
        </div>
      </section>
    </div>
  )
}
