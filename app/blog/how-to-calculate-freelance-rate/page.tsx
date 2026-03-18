import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Calculate Your Freelance Rate: The Complete Formula — FreelanceRateIQ',
  description: 'Step-by-step formula for calculating your freelance hourly rate. Factor in taxes, expenses, unpaid time, and profit — and never leave money on the table again.',
  keywords: 'how to calculate freelance rate, freelance rate formula, calculate hourly rate freelancer, freelance rate calculator guide, minimum freelance rate',
  openGraph: {
    title: 'How to Calculate Your Freelance Rate: The Complete Formula',
    description: 'Step-by-step formula for calculating your freelance hourly rate — covering taxes, expenses, unpaid time, and profit.',
    url: 'https://freelancerateiq.com/blog/how-to-calculate-freelance-rate',
    type: 'article',
  },
}

export default function HowToCalculateFreelanceRate() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-6">
          <Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Blog</Link>
        </div>

        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-4 leading-tight">How to Calculate Your Freelance Rate: The Complete Formula</h1>
          <div className="text-slate-500 text-sm">March 18, 2026 · 9 min read</div>
        </header>

        <div className="prose prose-invert prose-slate max-w-none space-y-6 text-slate-300 leading-relaxed">
          <p className="text-xl text-slate-200">Most freelancers pick a rate by looking at what others charge and then going slightly lower. That&apos;s a race to the bottom. Here&apos;s how to calculate a rate that actually sustains your business — and what to add on top of that floor.</p>

          <p>Your freelance rate isn&apos;t a guess or a negotiation starting point. It&apos;s a math problem. There are a specific set of inputs that determine the minimum you need to charge to make your business viable — and most freelancers skip at least two of them, which is why they end up perpetually underpaid.</p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Core Formula</h2>

          <div className="bg-slate-800 border border-emerald-500/30 rounded-lg p-6 my-6">
            <p className="text-emerald-400 font-mono text-sm mb-3">THE FORMULA</p>
            <p className="text-white font-semibold text-lg">Hourly Rate = (Annual Target Income + Business Expenses) ÷ Billable Hours ÷ (1 − Tax Rate)</p>
          </div>

          <p>Let&apos;s break each component down with real numbers.</p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Step 1: Set Your Target Annual Income</h2>
          <p>This is the take-home pay you want — after taxes, after expenses, what actually hits your bank account. Don&apos;t start with what you think you can get. Start with what you need to live the life you want.</p>

          <p>Be honest. Include:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Rent/mortgage</li>
            <li>Food, transportation, utilities</li>
            <li>Health insurance (this is a big one — you&apos;re paying full cost)</li>
            <li>Retirement savings (freelancers have no employer match)</li>
            <li>Emergency fund contributions</li>
            <li>Discretionary spending, travel, fun</li>
          </ul>

          <p>For this example, let&apos;s say you want <strong className="text-white">$80,000/year take-home</strong>.</p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Step 2: Add Business Expenses</h2>
          <p>These are costs you incur just to operate your freelance business. They&apos;re deductible, but they still need to be funded. Most freelancers underestimate this number.</p>

          <p>Common freelance business expenses:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Software subscriptions (Adobe, Figma, project management, etc.)</li>
            <li>Hardware depreciation (your laptop, monitors, peripherals)</li>
            <li>Home office costs</li>
            <li>Professional development, courses, conferences</li>
            <li>Accounting / bookkeeping</li>
            <li>Business insurance (errors &amp; omissions, general liability)</li>
            <li>Marketing and website hosting</li>
            <li>Contract work you outsource</li>
          </ul>

          <p>A conservative estimate for a solo freelancer: <strong className="text-white">$8,000–$15,000/year</strong>. Let&apos;s use <strong className="text-white">$10,000</strong>.</p>

          <div className="bg-slate-800 rounded-lg p-4 my-4 font-mono text-sm">
            <p className="text-slate-400">Target income + expenses</p>
            <p className="text-white">$80,000 + $10,000 = $90,000</p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Step 3: Calculate Your Actual Billable Hours</h2>
          <p>This is where most freelancers make their biggest mistake. You don&apos;t work 40 billable hours per week. Nobody does.</p>

          <p>Start with 52 weeks. Now subtract:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>2 weeks vacation</li>
            <li>1 week sick days / personal time</li>
            <li>~10 paid holidays (you set your own, but you will take them)</li>
          </ul>

          <p>That leaves roughly <strong className="text-white">48.5 working weeks</strong>, or about <strong className="text-white">242 working days</strong>.</p>

          <p>Now: what percentage of those days are actually billable? For an established freelancer with steady clients, 70-80% is ambitious. For someone newer or in a feast/famine cycle, 50-60% is more realistic.</p>

          <p>Let&apos;s use 60% utilization on an 8-hour day:</p>

          <div className="bg-slate-800 rounded-lg p-4 my-4 font-mono text-sm">
            <p className="text-slate-400">Billable hours calculation</p>
            <p className="text-white">242 days × 8 hours × 60% = 1,162 billable hours/year</p>
            <p className="text-slate-400 mt-2">What are you doing the other 40%?</p>
            <p className="text-slate-300 text-xs mt-1">Sales calls, proposals, invoicing, admin, marketing, networking, professional development — all real work, none of it billed to clients.</p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Step 4: Account for Taxes</h2>
          <p>Self-employment tax in the US is 15.3% on top of your income tax rate. Combined, expect to pay 25-35% of your gross freelance income in taxes, depending on your deductions and bracket.</p>

          <p>The formula accounts for this by dividing by (1 − tax rate). At a 30% effective rate:</p>

          <div className="bg-slate-800 rounded-lg p-4 my-4 font-mono text-sm">
            <p className="text-slate-400">Tax gross-up factor</p>
            <p className="text-white">1 − 0.30 = 0.70</p>
            <p className="text-slate-400 mt-2">Dividing by 0.70 grosses up for taxes</p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Step 5: Calculate Your Minimum Rate</h2>

          <div className="bg-slate-800 border border-emerald-500/30 rounded-lg p-6 my-6">
            <p className="text-emerald-400 font-mono text-sm mb-3">EXAMPLE CALCULATION</p>
            <div className="space-y-2 font-mono text-sm">
              <p className="text-slate-400">Target income: $80,000</p>
              <p className="text-slate-400">Business expenses: $10,000</p>
              <p className="text-slate-400">Billable hours: 1,162</p>
              <p className="text-slate-400">Tax rate: 30%</p>
              <div className="border-t border-slate-700 mt-4 pt-4">
                <p className="text-white font-semibold">Rate = $90,000 ÷ 1,162 ÷ 0.70</p>
                <p className="text-white font-semibold">Rate = $77.44 ÷ 0.70</p>
                <p className="text-emerald-400 font-bold text-lg mt-2">Minimum Rate = $110.63/hour</p>
              </div>
            </div>
          </div>

          <p>If you want $80K take-home in this scenario, you cannot charge less than $110/hour. Anything below that and your math doesn&apos;t work — even before adding profit margin.</p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Step 6: Add Your Profit &amp; Market Premium</h2>
          <p>Your minimum rate is just that — the minimum. A healthy freelance business needs margin above the floor to handle:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Lean months (clients churn, projects get delayed)</li>
            <li>Investment in growth (better tools, team, marketing)</li>
            <li>Actual profit — building real wealth, not just covering expenses</li>
          </ul>

          <p>Add 20-30% to your minimum rate as a baseline profit margin. Then check it against market rates for your niche (the <Link href="/blog/freelance-rates-by-industry" className="text-emerald-400 hover:underline">industry benchmarks guide</Link> covers this). If your math says $110/hr but the market pays $75/hr for your level, you have a positioning problem to solve — not a math problem.</p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Common Calculation Mistakes</h2>

          <p><strong className="text-white">Using 40 billable hours per week.</strong> Nobody bills 2,080 hours per year as a freelancer. You will have gaps, admin time, and sick days. Overestimating billable hours is how you end up working 60-hour weeks for $50K/year.</p>

          <p><strong className="text-white">Forgetting self-employment tax.</strong> As an employee, your employer covers half of your Social Security and Medicare taxes (7.65%). As a freelancer, you pay both halves — a 15.3% hit before income tax. Model this in your rate calculation or you&apos;ll be blindsided every April.</p>

          <p><strong className="text-white">Not accounting for slow months.</strong> Even experienced freelancers have 1-3 slower months per year. Your rate needs to be high enough that your busy months generate enough buffer to carry you through.</p>

          <p><strong className="text-white">Calculating expenses too low.</strong> Freelancers routinely underestimate what it costs to run their business. Track your actual expenses for 3 months, then annualize. You&apos;ll probably find it&apos;s higher than your initial estimate.</p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Skip the Math — Use the Calculator</h2>
          <p>The formula above is worth understanding once so you know what you&apos;re building. After that, use the FreelanceRateIQ calculator — plug in your income target, expenses, hours, and location, and it outputs your minimum viable rate in seconds.</p>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Calculate My Rate →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
