import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Freelance Rates by Experience Level | FreelanceRateIQ',
  description: 'See freelance rates at every career stage — entry level, junior, mid-level, senior, and expert. Know what to charge based on your experience and how to level up your rates.',
  keywords: 'freelance rates by experience, entry level freelance rates, senior freelance developer rates, freelance rate by experience level',
  openGraph: {
    title: 'Freelance Rates by Experience Level | FreelanceRateIQ',
    description: 'Know what to charge at every stage of your freelance career. Entry level to expert.',
    url: 'https://freelancerateiq.com/experience',
    siteName: 'FreelanceRateIQ',
    type: 'website',
  },
}

const levels = [
  {
    slug: 'entry-level',
    label: 'Entry Level',
    yearsRange: '0–2 years',
    emoji: '🌱',
    avgRate: '$35–$60/hr',
    badge: 'Getting Started',
    tagline: 'Building your foundation, portfolio, and first clients',
    description: 'New freelancers and recent career-changers finding their footing, building a portfolio, and landing first clients.',
  },
  {
    slug: 'junior',
    label: 'Junior',
    yearsRange: '2–4 years',
    emoji: '📈',
    avgRate: '$55–$90/hr',
    badge: 'Growing',
    tagline: 'Proven skills, growing client base, raising rates',
    description: 'Freelancers with proven deliverables, repeat clients, and the confidence to raise rates beyond their starter prices.',
  },
  {
    slug: 'mid-level',
    label: 'Mid-Level',
    yearsRange: '4–7 years',
    emoji: '⚡',
    avgRate: '$85–$130/hr',
    badge: 'Established',
    tagline: 'Trusted specialist with a full pipeline and selective clients',
    description: 'Established freelancers working with quality clients, specializing in a niche, and consistently in demand.',
  },
  {
    slug: 'senior',
    label: 'Senior',
    yearsRange: '7–12 years',
    emoji: '🏆',
    avgRate: '$125–$200/hr',
    badge: 'Expert',
    tagline: 'High-value specialist commanding premium market rates',
    description: 'High-value specialists who clients seek out by name, command premium rates, and turn down more work than they take.',
  },
  {
    slug: 'expert',
    label: 'Expert / Principal',
    yearsRange: '12+ years',
    emoji: '💎',
    avgRate: '$175–$400+/hr',
    badge: 'Top 5%',
    tagline: 'Industry authority setting rates above the market',
    description: 'Industry authorities, thought leaders, and niche specialists who charge what the market will bear — often $200–$400+/hr.',
  },
]

export default function ExperiencePage() {
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
            <Link href="/cities" className="hover:text-white transition-colors">Cities</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/#guide" className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-1.5 rounded-lg transition-colors font-medium">
              Get the $27 Guide
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20 pb-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-5xl mb-4">🎯</div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5">
            Freelance Rates by Experience Level
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            What should you charge at your stage? Every experience level has different benchmarks, strategies, and next-step advice. Find yours below.
          </p>
        </div>
      </section>

      {/* Level cards */}
      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {levels.map((level) => (
            <Link
              key={level.slug}
              href={`/experience/${level.slug}`}
              className="group flex items-center gap-6 bg-slate-900 border border-slate-800 hover:border-indigo-700/60 rounded-xl p-6 transition-all"
            >
              <span className="text-4xl flex-shrink-0">{level.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1 flex-wrap">
                  <h2 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {level.label}
                  </h2>
                  <span className="text-xs bg-indigo-950/50 border border-indigo-800/50 text-indigo-300 px-2 py-0.5 rounded-full">
                    {level.badge}
                  </span>
                  <span className="text-xs text-slate-500">{level.yearsRange}</span>
                </div>
                <p className="text-slate-400 text-sm">{level.tagline}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-lg font-bold text-green-400">{level.avgRate}</div>
                <div className="text-xs text-slate-500 mt-0.5">avg range</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Rate progression overview */}
      <section className="border-t border-slate-800 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">The Freelance Rate Progression</h2>
          <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700 text-slate-500 text-xs uppercase">
                    <th className="px-5 py-3 text-left">Level</th>
                    <th className="px-5 py-3 text-left">Years</th>
                    <th className="px-5 py-3 text-left">Web Dev</th>
                    <th className="px-5 py-3 text-left">Designer</th>
                    <th className="px-5 py-3 text-left">Copywriter</th>
                    <th className="px-5 py-3 text-left">Consultant</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr className="hover:bg-slate-800/50"><td className="px-5 py-3 text-slate-300">🌱 Entry</td><td className="px-5 py-3 text-slate-500">0–2 yrs</td><td className="px-5 py-3 text-slate-400">$40–$65</td><td className="px-5 py-3 text-slate-400">$35–$55</td><td className="px-5 py-3 text-slate-400">$35–$55</td><td className="px-5 py-3 text-slate-400">$50–$75</td></tr>
                  <tr className="hover:bg-slate-800/50"><td className="px-5 py-3 text-slate-300">📈 Junior</td><td className="px-5 py-3 text-slate-500">2–4 yrs</td><td className="px-5 py-3 text-slate-400">$60–$90</td><td className="px-5 py-3 text-slate-400">$55–$80</td><td className="px-5 py-3 text-slate-400">$55–$80</td><td className="px-5 py-3 text-slate-400">$75–$110</td></tr>
                  <tr className="hover:bg-slate-800/50"><td className="px-5 py-3 text-indigo-300 font-medium">⚡ Mid-Level</td><td className="px-5 py-3 text-slate-500">4–7 yrs</td><td className="px-5 py-3 text-indigo-300">$85–$130</td><td className="px-5 py-3 text-indigo-300">$80–$120</td><td className="px-5 py-3 text-indigo-300">$75–$115</td><td className="px-5 py-3 text-indigo-300">$110–$160</td></tr>
                  <tr className="hover:bg-slate-800/50"><td className="px-5 py-3 text-green-400 font-medium">🏆 Senior</td><td className="px-5 py-3 text-slate-500">7–12 yrs</td><td className="px-5 py-3 text-green-400">$130–$200</td><td className="px-5 py-3 text-green-400">$115–$175</td><td className="px-5 py-3 text-green-400">$110–$165</td><td className="px-5 py-3 text-green-400">$160–$260</td></tr>
                  <tr className="hover:bg-slate-800/50"><td className="px-5 py-3 text-yellow-400 font-medium">💎 Expert</td><td className="px-5 py-3 text-slate-500">12+ yrs</td><td className="px-5 py-3 text-yellow-400">$190–$320+</td><td className="px-5 py-3 text-yellow-400">$165–$280+</td><td className="px-5 py-3 text-yellow-400">$155–$260+</td><td className="px-5 py-3 text-yellow-400">$250–$500+</td></tr>
                </tbody>
              </table>
            </div>
            <div className="px-5 py-3 border-t border-slate-800 text-slate-500 text-xs">US market rates · 2025 · Hourly · USD</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-xl mx-auto text-center">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-3">Find Your Exact Rate</h2>
            <p className="text-slate-400 mb-6 text-sm">Use our calculator — niche + experience + market = your number in 30 seconds.</p>
            <Link href="/" className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-semibold text-sm transition-colors">
              Use the Free Calculator →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="font-bold text-sm"><span className="text-white">FreelanceRate</span><span className="text-indigo-400">IQ</span></Link>
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
