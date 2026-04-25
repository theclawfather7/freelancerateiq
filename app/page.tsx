'use client'

import { useState } from 'react'

const niches = [
  { label: 'Web Development', base: 85 },
  { label: 'Mobile Development', base: 100 },
  { label: 'UI/UX Design', base: 75 },
  { label: 'Graphic Design', base: 55 },
  { label: 'Copywriting', base: 65 },
  { label: 'Content Writing', base: 45 },
  { label: 'SEO / Digital Marketing', base: 70 },
  { label: 'Video Editing', base: 60 },
  { label: 'Data Analysis', base: 90 },
  { label: 'DevOps / Cloud', base: 110 },
  { label: 'AI / Machine Learning', base: 130 },
  { label: 'Consulting / Strategy', base: 150 },
  { label: 'Virtual Assistant', base: 25 },
  { label: 'Bookkeeping / Accounting', base: 55 },
  { label: 'Social Media Management', base: 40 },
]

const experiences = [
  { label: '0-1 years (Entry)', multiplier: 0.6 },
  { label: '2-3 years (Junior)', multiplier: 0.8 },
  { label: '4-6 years (Mid)', multiplier: 1.0 },
  { label: '7-10 years (Senior)', multiplier: 1.3 },
  { label: '10+ years (Expert)', multiplier: 1.6 },
]

const markets = [
  { label: 'US / Canada / Australia', multiplier: 1.0 },
  { label: 'UK / Western Europe', multiplier: 0.9 },
  { label: 'Eastern Europe', multiplier: 0.6 },
  { label: 'Latin America', multiplier: 0.5 },
  { label: 'Asia', multiplier: 0.4 },
  { label: 'Remote (global clients)', multiplier: 1.0 },
]

const schemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      '@id': 'https://freelancerateiq.com/#app',
      'name': 'FreelanceRateIQ — Freelance Rate Calculator',
      'url': 'https://freelancerateiq.com',
      'description': 'Free freelance rate calculator. Get a data-backed hourly rate for your niche, experience level, and market in 30 seconds.',
      'applicationCategory': 'BusinessApplication',
      'operatingSystem': 'Web',
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD',
      },
      'featureList': [
        'Freelance rate calculation by niche',
        'Experience level adjustment',
        'Market-based rate localization',
        'Rate range with conservative, market, and premium tiers',
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://freelancerateiq.com/#faq',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How do I calculate my freelance rate?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Your freelance rate is calculated based on three factors: your niche (type of work), experience level, and client market. Start with the base market rate for your niche, adjust for experience (entry-level is typically 60% of the market rate; expert is 160%), and factor in your geographic market. A mid-level web developer working with US clients, for example, earns around $85/hr at market rate.',
          },
        },
        {
          '@type': 'Question',
          'name': 'What is a good hourly rate for a freelancer?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'A good freelance hourly rate depends on your niche, experience, and client market. For US/Canada clients: entry-level freelancers typically earn $25–$60/hr, mid-level $60–$120/hr, and senior/expert freelancers $120–$200+/hr. High-demand niches like AI/ML, DevOps, and Consulting often command $130–$200/hr for experienced practitioners.',
          },
        },
        {
          '@type': 'Question',
          'name': 'How does the FreelanceRateIQ calculator work?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'FreelanceRateIQ uses real market data across 15+ freelance niches to calculate your rate range. Select your niche, experience level, and client market. The calculator returns three numbers: a conservative rate (75% of market), a market rate (the median for your profile), and a premium rate (140% of market — achievable with strong positioning). Updated quarterly with current market data.',
          },
        },
        {
          '@type': 'Question',
          'name': 'How much should I charge as a freelance web developer?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Freelance web developer rates vary widely by experience. Entry-level web developers with 0–2 years of experience typically charge $45–$65/hr. Mid-level developers (4–6 years) charge $75–$100/hr. Senior web developers with 7+ years of experience command $100–$140/hr or more. Full-stack and specialized developers (React, Node, TypeScript) often earn 15–25% above general web development rates.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Should I charge hourly or per project as a freelancer?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Project-based pricing is generally better for experienced freelancers because it decouples your income from hours worked. As you get faster and more efficient, hourly pricing penalizes you. Project pricing lets you earn $150–$200/hr equivalent for expertise that took years to build, without the client seeing the "hourly" number. Hourly pricing works best for ongoing retainers and support work where scope is unpredictable.',
          },
        },
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://freelancerateiq.com/#org',
      'name': 'FreelanceRateIQ',
      'url': 'https://freelancerateiq.com',
      'description': 'Free freelance rate calculator and pricing guides for independent professionals.',
    },
  ],
}

export default function Home() {
  const [niche, setNiche] = useState('')
  const [experience, setExperience] = useState('')
  const [market, setMarket] = useState('')
  const [result, setResult] = useState<{ low: number; mid: number; high: number } | null>(null)
  const [loading, setLoading] = useState(false)
  const [showUpsell, setShowUpsell] = useState(false)

  // Email capture state
  const [email, setEmail] = useState('')
  const [emailStatus, setEmailStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const calculate = () => {
    const n = niches.find(x => x.label === niche)
    const e = experiences.find(x => x.label === experience)
    const m = markets.find(x => x.label === market)
    if (!n || !e || !m) return

    const mid = Math.round(n.base * e.multiplier * m.multiplier)
    const low = Math.round(mid * 0.75)
    const high = Math.round(mid * 1.4)
    setResult({ low, mid, high })
    setShowUpsell(true)
    setEmailStatus('idle')
    setEmail('')
  }

  const handleSubscribe = async () => {
    if (!email || !email.includes('@')) return
    setEmailStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, niche, rate: result?.mid }),
      })
      if (res.ok) {
        setEmailStatus('success')
      } else {
        setEmailStatus('error')
      }
    } catch {
      setEmailStatus('error')
    }
  }

  const handleBuyGuide = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', { method: 'POST' })
      const data = await res.json()
      if (data.url) window.location.href = data.url
    } catch (e) {
      alert('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-block bg-emerald-500/20 text-emerald-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Free Rate Calculator
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            What Should You Actually <span className="text-emerald-400">Charge?</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Stop guessing. Get a data-backed hourly rate for your freelance niche, experience level, and market in 30 seconds.
          </p>
        </div>

        {/* Calculator */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 mb-8">
          <div className="grid gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Your Niche</label>
              <select
                value={niche}
                onChange={e => { setNiche(e.target.value); setResult(null) }}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Select your niche...</option>
                {niches.map(n => <option key={n.label} value={n.label}>{n.label}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Experience Level</label>
              <select
                value={experience}
                onChange={e => { setExperience(e.target.value); setResult(null) }}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Select experience...</option>
                {experiences.map(e => <option key={e.label} value={e.label}>{e.label}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Client Market</label>
              <select
                value={market}
                onChange={e => { setMarket(e.target.value); setResult(null) }}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Select market...</option>
                {markets.map(m => <option key={m.label} value={m.label}>{m.label}</option>)}
              </select>
            </div>

            <button
              onClick={calculate}
              disabled={!niche || !experience || !market}
              className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-colors text-lg"
            >
              Calculate My Rate →
            </button>
          </div>
        </div>

        {/* Result */}
        {result && (
          <div className="bg-emerald-900/30 border border-emerald-500/30 rounded-2xl p-8 mb-6 text-center">
            <p className="text-slate-400 mb-4">Your market rate range for <strong className="text-white">{niche}</strong></p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <div className="text-2xl font-bold text-slate-300">${result.low}/hr</div>
                <div className="text-xs text-slate-500 mt-1">Conservative</div>
              </div>
              <div className="bg-emerald-500/20 rounded-xl p-4">
                <div className="text-4xl font-bold text-emerald-400">${result.mid}/hr</div>
                <div className="text-xs text-emerald-300 mt-1">Market rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-300">${result.high}/hr</div>
                <div className="text-xs text-slate-500 mt-1">Premium</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              At ${result.mid}/hr, that's <span className="text-white font-semibold">${(result.mid * 40 * 4).toLocaleString()}/month</span> at 40hrs/week
            </p>
          </div>
        )}

        {/* Email capture — appears with result */}
        {result && emailStatus !== 'success' && (
          <div className="bg-slate-800/70 border border-slate-600 rounded-2xl p-6 mb-6">
            <div className="flex items-start gap-3">
              <div className="text-2xl mt-0.5">📬</div>
              <div className="flex-1">
                <h3 className="font-semibold text-white mb-1">Get the full {niche} rate breakdown by email</h3>
                <p className="text-slate-400 text-sm mb-4">
                  The 5 pricing mistakes that cost freelancers $10k–$40k/year — sent free. No spam.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
                    placeholder="your@email.com"
                    className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <button
                    onClick={handleSubscribe}
                    disabled={emailStatus === 'loading' || !email}
                    className="bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-medium px-4 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap"
                  >
                    {emailStatus === 'loading' ? '...' : 'Send It'}
                  </button>
                </div>
                {emailStatus === 'error' && (
                  <p className="text-red-400 text-xs mt-2">Something went wrong — please try again.</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Email success message */}
        {emailStatus === 'success' && (
          <div className="bg-emerald-900/30 border border-emerald-500/30 rounded-2xl p-5 mb-6 flex items-center gap-3">
            <div className="text-emerald-400 text-xl">✓</div>
            <div>
              <p className="text-emerald-400 font-medium text-sm">On its way!</p>
              <p className="text-slate-400 text-xs mt-0.5">Check your inbox for the rate breakdown + pricing guide.</p>
            </div>
          </div>
        )}

        {/* Upsell */}
        {showUpsell && (
          <div className="bg-slate-800 border border-slate-600 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl">📖</div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">Want to actually charge those rates?</h2>
                <p className="text-slate-400 mb-4">
                  Knowing your rate is step one. Getting clients to pay it is another. The <strong className="text-white">FreelanceRateIQ Guide</strong> covers:
                </p>
                <ul className="text-slate-300 space-y-2 mb-6 text-sm">
                  <li>✓ Word-for-word scripts to raise rates with existing clients</li>
                  <li>✓ Rate tables for 40+ niches with percentile breakdowns</li>
                  <li>✓ How to position yourself as premium (not expensive)</li>
                  <li>✓ When and how to turn down low-paying clients</li>
                  <li>✓ Negotiation tactics that work without feeling pushy</li>
                </ul>
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleBuyGuide}
                    disabled={loading}
                    className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                  >
                    {loading ? 'Loading...' : 'Get the Guide — $27'}
                  </button>
                  <span className="text-slate-500 text-sm">Instant PDF download</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Social proof / trust */}
        <div className="mt-12 text-center text-slate-500 text-sm">
          <p>Used by freelancers in 50+ countries · Updated quarterly with real market data</p>
          <div className="mt-4 flex flex-wrap justify-center gap-5 text-xs">
            <a href="/calculators" className="text-slate-400 hover:text-white transition-colors">Rates by Niche →</a>
            <a href="/cities" className="text-slate-400 hover:text-white transition-colors">Rates by City →</a>
            <a href="/experience" className="text-slate-400 hover:text-white transition-colors">Rates by Level →</a>
            <a href="/remote" className="text-slate-400 hover:text-white transition-colors">Remote & Nomad Rates →</a>
            <a href="/blog" className="text-slate-400 hover:text-white transition-colors">Rate Guides →</a>
          </div>
        </div>
      </div>

      {/* FAQ Section — helps with SEO and reinforces schema */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Freelance Rate FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How do I calculate my freelance rate?',
              a: 'Start with the market rate for your niche, then adjust for experience and geography. Use our calculator above — select your niche, experience level, and client market for a personalized range in 30 seconds. For a deeper formula, see our <a href="/blog/how-to-calculate-freelance-rate" class="text-emerald-400 hover:underline">complete rate calculation guide</a>.',
            },
            {
              q: 'What is a good hourly rate for a freelancer?',
              a: 'For US/Canada clients: entry-level freelancers typically earn $25–$60/hr, mid-level $60–$120/hr, and senior/expert freelancers $120–$200+/hr. Rates vary significantly by niche — AI/ML and DevOps specialists command the highest rates ($130–$200+), while content writers and social media managers typically earn $35–$65/hr.',
            },
            {
              q: 'Should I charge hourly or per project?',
              a: 'Project-based pricing is generally better for experienced freelancers because it decouples your income from hours worked. As you get faster and more efficient, hourly pricing penalizes you for expertise. Hourly works best for ongoing retainers and unpredictable-scope support work. See our <a href="/pricing-guide/hourly-vs-project-pricing" class="text-emerald-400 hover:underline">hourly vs. project pricing guide</a> for the full breakdown.',
            },
            {
              q: 'How often should I raise my freelance rates?',
              a: 'At minimum, once per year — and by at least 10–15% to account for inflation and skills growth. Most freelancers wait too long or skip annual increases entirely, resulting in a real pay cut every year. The best time to raise rates is with new clients (always start at your current rate) and at the start of a new contract term with existing clients.',
            },
          ].map((item, i) => (
            <details
              key={i}
              className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden group"
            >
              <summary className="px-6 py-4 cursor-pointer text-slate-200 font-medium hover:text-white list-none flex items-center justify-between">
                {item.q}
                <span className="text-emerald-400 ml-4 text-sm group-open:hidden">+</span>
                <span className="text-emerald-400 ml-4 text-sm hidden group-open:inline">−</span>
              </summary>
              <div
                className="px-6 pb-5 text-slate-400 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.a }}
              />
            </details>
          ))}
        </div>
      </section>

      <footer className="mt-4 py-8 border-t border-slate-800 text-center text-slate-500 text-xs">
        <p className="mb-2">© 2026 FreelanceRateIQ · All rights reserved</p>
        <div className="flex justify-center gap-6">
          <a href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          <a href="mailto:hello@freelancerateiq.com" className="hover:text-slate-300 transition-colors">Contact</a>
        </div>
      </footer>
    </main>
  )
}
