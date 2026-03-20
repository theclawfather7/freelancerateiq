import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Remote & Digital Nomad Freelance Rates 2025 | FreelanceRateIQ',
  description: 'Everything you need to set rates as a remote freelancer or digital nomad. From work-from-home pricing to charging US clients from abroad, geo-arbitrage, and timezone premiums.',
  keywords: 'remote freelance rates, digital nomad freelance rates, work from home freelancer rates, location independent freelancing, how to charge as a digital nomad, remote freelancer pricing',
  openGraph: {
    title: 'Remote & Digital Nomad Freelance Rates 2025 | FreelanceRateIQ',
    description: 'Set your rates as a remote freelancer or digital nomad. Guides on WFH pricing, US clients from abroad, timezone premiums, and more.',
    url: 'https://freelancerateiq.com/remote',
    siteName: 'FreelanceRateIQ',
    type: 'website',
  },
}

const topics = [
  {
    slug: 'work-from-home-rates',
    name: 'Work From Home Rates',
    emoji: '🏠',
    badge: 'Most Popular',
    badgeColor: 'bg-indigo-950/50 border-indigo-700/50 text-indigo-300',
    description: 'What to charge as a remote freelancer working from home. Covers how to price for US market rates regardless of your location.',
    keywords: ['work from home freelance rates', 'remote freelancer how much to charge'],
  },
  {
    slug: 'digital-nomad-rates',
    name: 'Digital Nomad Rates',
    emoji: '🌍',
    badge: 'Trending',
    badgeColor: 'bg-emerald-950/50 border-emerald-700/50 text-emerald-300',
    description: 'Setting your freelance rates while traveling the world. How digital nomads price their work and charge US or European clients from anywhere.',
    keywords: ['digital nomad freelance rates', 'freelancing while traveling rates'],
  },
  {
    slug: 'us-clients-from-abroad',
    name: 'Charging US Clients From Abroad',
    emoji: '🇺🇸',
    badge: 'High Value',
    badgeColor: 'bg-amber-950/50 border-amber-700/50 text-amber-300',
    description: 'How international freelancers charge US clients, structure payments, and position for US market rates without living in the US.',
    keywords: ['how to charge US clients as international freelancer', 'working for US clients abroad'],
  },
  {
    slug: 'time-zone-pricing',
    name: 'Timezone Overlap Pricing',
    emoji: '⏰',
    badge: 'Rate Booster',
    badgeColor: 'bg-purple-950/50 border-purple-700/50 text-purple-300',
    description: 'Why timezone alignment commands a premium and how to charge for US-hours availability as a remote or international freelancer.',
    keywords: ['remote freelance rates different time zones', 'charging premium for timezone overlap'],
  },
  {
    slug: 'async-work-tips',
    name: 'Async Freelance Rates & Tips',
    emoji: '📬',
    badge: 'Workflow',
    badgeColor: 'bg-slate-800 border-slate-600 text-slate-300',
    description: 'How to price async-first freelance engagements and use asynchronous communication to justify higher rates and land better clients.',
    keywords: ['async freelance work', 'working asynchronously freelance rates'],
  },
  {
    slug: 'location-independent-rates',
    name: 'Location-Independent Rates',
    emoji: '🌐',
    badge: 'Geo-Arbitrage',
    badgeColor: 'bg-cyan-950/50 border-cyan-700/50 text-cyan-300',
    description: 'How to set rates as a location-independent freelancer. Covers geo-arbitrage strategy, global rate benchmarks, and charging for your value not your location.',
    keywords: ['location independent freelance rates', 'geo-arbitrage freelancing'],
  },
]

export default function RemotePage() {
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
      <section className="pt-20 pb-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-5xl mb-4">🌍</div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5">
            Remote & Digital Nomad Rates
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Your location doesn&apos;t determine your rate — your clients&apos; budgets do. Learn how to price remote freelance work, charge US clients from abroad, and unlock geo-arbitrage advantages.
          </p>
        </div>
      </section>

      {/* Topic grid */}
      <section className="pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/remote/${topic.slug}`}
                className="group bg-slate-900 border border-slate-800 hover:border-indigo-700/60 rounded-xl p-6 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{topic.emoji}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full border ${topic.badgeColor}`}>
                    {topic.badge}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {topic.name}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{topic.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {topic.keywords.map((kw) => (
                    <span key={kw} className="text-xs bg-slate-800/80 text-slate-400 px-2 py-0.5 rounded">{kw}</span>
                  ))}
                </div>
                <div className="text-sm text-indigo-400 font-medium group-hover:text-indigo-300 transition-colors">
                  Read the guide →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why section */}
      <section className="border-t border-slate-800 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Why Location-Independent Rates Are Different</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'Client market > your market', body: 'Remote freelancers should price based on their clients\' markets, not where they live. Working for a San Francisco startup? Charge San Francisco rates.' },
              { icon: '💡', title: 'Geo-arbitrage is real', body: 'Earning US market rates while living in a lower cost-of-living country is one of the most powerful wealth-building strategies available to modern freelancers.' },
              { icon: '⏰', title: 'Timezone premium exists', body: 'US clients pay 30–60% more for freelancers who work overlapping US business hours vs. fully async offshore. Availability has dollar value.' },
            ].map((item) => (
              <div key={item.title} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-xl mx-auto text-center">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-3">Calculate Your Remote Rate Free</h2>
            <p className="text-slate-400 mb-6 text-sm">
              Our calculator factors in your niche, experience, and target market — giving you a data-backed rate in 30 seconds.
            </p>
            <Link
              href="/"
              className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-semibold text-sm transition-colors"
            >
              Use the Free Calculator →
            </Link>
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
