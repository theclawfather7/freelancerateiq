import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Freelance Tax Guide 2025 | FreelanceRateIQ',
  description: 'Complete freelance tax guides covering self-employment tax, quarterly taxes, deductions, home office, retirement accounts, and more. Everything freelancers need to know about taxes.',
  keywords: ['freelance taxes', 'self employment tax', 'quarterly taxes freelancer', 'freelance tax deductions', 'freelance tax guide 2025'],
  openGraph: {
    title: 'Freelance Tax Guide 2025 | FreelanceRateIQ',
    description: 'Complete freelance tax guides covering self-employment tax, quarterly taxes, deductions, home office, retirement accounts, and more.',
    url: 'https://freelancerateiq.com/taxes',
    siteName: 'FreelanceRateIQ',
    type: 'website',
  },
}

const guides = [
  {
    slug: 'freelance-tax-guide',
    emoji: '📋',
    title: 'Freelance Tax Guide',
    description: 'Everything you need to know about filing taxes as a freelancer — from what forms to use to how to avoid the most costly mistakes.',
    searches: '~80K/mo',
    keywords: ['freelance taxes explained', 'how to file taxes as a freelancer'],
  },
  {
    slug: 'self-employment-tax',
    emoji: '💼',
    title: 'Self-Employment Tax',
    description: 'How self-employment tax works, the current SE tax rate, and exactly how much a $100K freelancer owes the IRS.',
    searches: '~60K/mo',
    keywords: ['self employment tax rate', 'self employment tax calculator freelance'],
  },
  {
    slug: 'quarterly-taxes',
    emoji: '📅',
    title: 'Quarterly Estimated Taxes',
    description: 'How to calculate and pay quarterly estimated taxes, key deadlines, and how to avoid underpayment penalties.',
    searches: '~50K/mo',
    keywords: ['quarterly estimated taxes freelancer', 'how to pay quarterly taxes'],
  },
  {
    slug: 'freelance-tax-deductions',
    emoji: '✂️',
    title: 'Freelance Tax Deductions',
    description: 'The complete list of freelance tax deductions — what you can write off, how to document expenses, and how to maximize your deductions legally.',
    searches: '~45K/mo',
    keywords: ['freelance tax deductions', 'what can a freelancer write off'],
  },
  {
    slug: 'freelance-tax-rate',
    emoji: '📊',
    title: 'Freelance Tax Rate',
    description: 'What percent of your income do you actually owe? A clear breakdown of the effective tax rate freelancers pay at every income level.',
    searches: '~35K/mo',
    keywords: ['freelance tax rate', 'what percent of income do freelancers pay in taxes'],
  },
  {
    slug: 'home-office-deduction',
    emoji: '🏠',
    title: 'Home Office Deduction',
    description: 'How to claim the home office deduction as a freelancer — simplified vs. regular method, what qualifies, and how much you can save.',
    searches: '~30K/mo',
    keywords: ['home office deduction freelancer', 'home office tax write off'],
  },
  {
    slug: 'freelance-retirement-accounts',
    emoji: '🏦',
    title: 'Freelance Retirement Accounts',
    description: 'SEP-IRA vs Solo 401(k) vs SIMPLE IRA — which retirement account is best for freelancers and how to use them to cut your tax bill.',
    searches: '~20K/mo',
    keywords: ['freelance retirement accounts', 'sep ira vs solo 401k freelancer'],
  },
  {
    slug: 'llc-vs-sole-proprietor',
    emoji: '🏢',
    title: 'LLC vs Sole Proprietor',
    description: 'Should you form an LLC as a freelancer? A clear breakdown of the tax differences, liability protection, and cost of each structure.',
    searches: '~25K/mo',
    keywords: ['llc vs sole proprietor freelancer', 'should freelancer form llc'],
  },
]

export default function TaxesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Nav */}
      <nav className="border-b border-slate-800 bg-slate-950/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg tracking-tight">
            <span className="text-white">FreelanceRate</span>
            <span className="text-indigo-400">IQ</span>
          </Link>
          <div className="flex items-center gap-5 text-sm text-slate-400">
            <Link href="/calculators" className="hover:text-white transition-colors">Calculators</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link
              href="/#guide"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-1.5 rounded-lg transition-colors font-medium"
            >
              Get the $27 Guide
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20 pb-14 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-indigo-600/8 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto">
          <div className="text-6xl mb-4">🧾</div>
          <div className="inline-flex items-center gap-2 bg-indigo-950/50 border border-indigo-800/50 rounded-full px-4 py-1.5 text-sm text-indigo-300 mb-5">
            <Link href="/" className="hover:text-white transition-colors">FreelanceRateIQ</Link>
            <span>›</span>
            <span>Tax Guides</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight">
            Freelance Tax Guide 2025
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Taxes are the biggest hidden cost in freelancing. These guides break down everything you need to know — self-employment tax, quarterly payments, deductions, retirement accounts, and business structure — so you stop overpaying and start keeping more of what you earn.
          </p>
        </div>
      </section>

      {/* Guide Cards */}
      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-5">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/taxes/${guide.slug}`}
                className="group bg-slate-900 border border-slate-800 hover:border-indigo-700/60 rounded-xl p-6 transition-all hover:bg-slate-900/80"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-3xl">{guide.emoji}</div>
                  <span className="text-xs text-indigo-400 bg-indigo-950/60 border border-indigo-800/50 rounded-full px-2.5 py-1">
                    {guide.searches} searches
                  </span>
                </div>
                <h2 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {guide.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">{guide.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {guide.keywords.map((kw) => (
                    <span key={kw} className="text-xs text-slate-500 bg-slate-800 rounded px-2 py-0.5">{kw}</span>
                  ))}
                </div>
                <div className="mt-4 text-indigo-400 text-sm font-medium group-hover:text-indigo-300 transition-colors">
                  Read guide →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-b from-indigo-950/60 to-slate-900 border border-indigo-800/50 rounded-2xl p-10">
            <div className="text-4xl mb-4">💰</div>
            <h2 className="text-3xl font-bold text-white mb-3">
              Know Your Taxes. Now Know Your Rates.
            </h2>
            <p className="text-slate-400 mb-6">
              Once you understand what taxes take out of your income, the next step is making sure your rates actually account for them. Our $27 rate guide shows you exactly what to charge — at every level, in every niche.
            </p>
            <ul className="text-slate-400 text-sm text-left max-w-xs mx-auto mb-8 space-y-1.5">
              <li className="flex items-center gap-2"><span className="text-indigo-400">✓</span> Rates for 40+ freelance niches</li>
              <li className="flex items-center gap-2"><span className="text-indigo-400">✓</span> Tax-adjusted rate calculations</li>
              <li className="flex items-center gap-2"><span className="text-indigo-400">✓</span> Client negotiation scripts</li>
              <li className="flex items-center gap-2"><span className="text-indigo-400">✓</span> Rate increase letter templates</li>
            </ul>
            <Link
              href="/#guide"
              className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-semibold text-sm transition-colors"
            >
              Get the Freelance Rate Guide — $27 →
            </Link>
            <p className="text-slate-500 text-xs mt-3">One-time · Instant PDF download · 30-day guarantee</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="font-bold text-sm">
            <span className="text-white">FreelanceRate</span><span className="text-indigo-400">IQ</span>
          </Link>
          <p className="text-slate-500 text-sm">© 2025 FreelanceRateIQ. Know your worth.</p>
          <div className="flex gap-5 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
