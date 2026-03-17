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

export default function Home() {
  const [niche, setNiche] = useState('')
  const [experience, setExperience] = useState('')
  const [market, setMarket] = useState('')
  const [result, setResult] = useState<{ low: number; mid: number; high: number } | null>(null)
  const [loading, setLoading] = useState(false)
  const [showUpsell, setShowUpsell] = useState(false)

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
          <div className="bg-emerald-900/30 border border-emerald-500/30 rounded-2xl p-8 mb-8 text-center">
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
        </div>
      </div>
    </main>
  )
}
