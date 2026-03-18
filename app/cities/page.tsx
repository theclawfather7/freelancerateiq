import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Freelance Rates by City | FreelanceRateIQ',
  description: 'Compare freelance rates by city. See what web developers, designers, copywriters, and other freelancers charge in New York, San Francisco, Austin, Chicago, and more.',
  keywords: 'freelance rates by city, web developer rates new york, designer rates san francisco, freelancer hourly rate by location, local freelance market rates',
  openGraph: {
    title: 'Freelance Rates by City | FreelanceRateIQ',
    description: 'Compare what freelancers charge in major US cities. See local market rates for web developers, designers, copywriters, and more.',
    url: 'https://freelancerateiq.com/cities',
    siteName: 'FreelanceRateIQ',
    type: 'website',
  },
}

const cities = [
  { slug: 'new-york', name: 'New York City', state: 'NY', emoji: '🗽', multiplier: 1.35, tier: 'Tier 1', tagline: 'Highest-paying freelance market in the US' },
  { slug: 'san-francisco', name: 'San Francisco', state: 'CA', emoji: '🌉', multiplier: 1.45, tier: 'Tier 1', tagline: 'Tech hub with premium rates for technical freelancers' },
  { slug: 'los-angeles', name: 'Los Angeles', state: 'CA', emoji: '🌴', multiplier: 1.25, tier: 'Tier 1', tagline: 'Creative capital with strong design and media rates' },
  { slug: 'chicago', name: 'Chicago', state: 'IL', emoji: '🏙️', multiplier: 1.15, tier: 'Tier 2', tagline: 'Midwest hub with strong B2B and agency demand' },
  { slug: 'austin', name: 'Austin', state: 'TX', emoji: '🤠', multiplier: 1.10, tier: 'Tier 2', tagline: 'Fast-growing tech scene with increasing freelance demand' },
  { slug: 'seattle', name: 'Seattle', state: 'WA', emoji: '☕', multiplier: 1.30, tier: 'Tier 1', tagline: 'Amazon and Microsoft drive high technical freelance rates' },
  { slug: 'boston', name: 'Boston', state: 'MA', emoji: '🦞', multiplier: 1.25, tier: 'Tier 1', tagline: 'Education and biotech create specialized freelance demand' },
  { slug: 'denver', name: 'Denver', state: 'CO', emoji: '🏔️', multiplier: 1.05, tier: 'Tier 2', tagline: 'Growing tech corridor with competitive but lower rates' },
  { slug: 'miami', name: 'Miami', state: 'FL', emoji: '🌊', multiplier: 1.00, tier: 'Tier 2', tagline: 'Booming startup scene and Latin American market access' },
  { slug: 'dallas', name: 'Dallas', state: 'TX', emoji: '⭐', multiplier: 1.05, tier: 'Tier 2', tagline: 'Corporate hub with growing tech sector' },
  { slug: 'atlanta', name: 'Atlanta', state: 'GA', emoji: '🍑', multiplier: 1.00, tier: 'Tier 2', tagline: 'Southeast business hub with growing creative market' },
  { slug: 'portland', name: 'Portland', state: 'OR', emoji: '🌲', multiplier: 1.10, tier: 'Tier 2', tagline: 'Creative-leaning market with strong design culture' },
  { slug: 'nashville', name: 'Nashville', state: 'TN', emoji: '🎸', multiplier: 0.95, tier: 'Tier 3', tagline: 'Fast-growing city with increasing freelance opportunities' },
  { slug: 'phoenix', name: 'Phoenix', state: 'AZ', emoji: '🌵', multiplier: 0.95, tier: 'Tier 3', tagline: 'Lower cost of living with growing remote-work community' },
  { slug: 'remote', name: 'Remote / Anywhere', state: 'US', emoji: '🌐', multiplier: 1.15, tier: 'Remote', tagline: 'Remote freelancers can access US market rates from anywhere' },
]

export default function CitiesPage() {
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
          <div className="text-5xl mb-4">🗺️</div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5">
            Freelance Rates by City
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Location still matters — even for remote freelancers. See what web developers, designers, copywriters, and other freelancers charge in major US cities.
          </p>
        </div>
      </section>

      {/* City grid */}
      <section className="pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/cities/${city.slug}`}
                className="group bg-slate-900 border border-slate-800 hover:border-indigo-700/60 rounded-xl p-6 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{city.emoji}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full border ${
                    city.tier === 'Tier 1' ? 'bg-indigo-950/50 border-indigo-700/50 text-indigo-300' :
                    city.tier === 'Remote' ? 'bg-green-950/50 border-green-700/50 text-green-300' :
                    city.tier === 'Tier 2' ? 'bg-slate-800 border-slate-600 text-slate-300' :
                    'bg-slate-800/50 border-slate-700 text-slate-400'
                  }`}>
                    {city.tier}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-white mb-0.5 group-hover:text-indigo-300 transition-colors">
                  {city.name}
                </h2>
                <p className="text-slate-500 text-xs mb-2">{city.state}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{city.tagline}</p>
                <div className="mt-3 text-sm text-indigo-400 font-medium group-hover:text-indigo-300 transition-colors">
                  See {city.name} rates →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why location matters */}
      <section className="border-t border-slate-800 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Why Location Still Matters for Freelance Rates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: '💼', title: 'Client budgets vary by city', body: 'A startup in San Francisco has a very different budget than one in Nashville. Rates calibrated to local market expectations get accepted faster.' },
              { icon: '🏙️', title: 'Cost of living affects minimums', body: 'Your minimum viable rate depends on your cost of living. NYC and SF freelancers must charge more just to cover basic expenses.' },
              { icon: '🌐', title: 'Remote work raised the ceiling', body: 'Remote freelancers can charge closer to big-city rates regardless of where they live — if they\'re targeting clients in high-budget markets.' },
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
            <h2 className="text-2xl font-bold text-white mb-3">Calculate Your Rate Free</h2>
            <p className="text-slate-400 mb-6 text-sm">
              Our calculator factors in your niche, experience, and location — giving you a precise hourly rate in seconds.
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
