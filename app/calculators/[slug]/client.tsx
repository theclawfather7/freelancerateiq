'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { NicheData } from '../data'

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

const nicheBaseRates: Record<string, number> = {
  'Web Development': 85,
  'Mobile Development': 100,
  'UI/UX Design': 75,
  'Graphic Design': 55,
  'Copywriting': 65,
  'Content Writing': 45,
  'SEO / Digital Marketing': 70,
  'Video Editing': 60,
  'Data Analysis': 90,
  'DevOps / Cloud': 110,
  'AI / Machine Learning': 130,
  'Consulting / Strategy': 150,
  'Virtual Assistant': 25,
  'Bookkeeping / Accounting': 55,
  'Social Media Management': 40,
}

export default function NicheCalculatorClient({ niche }: { niche: NicheData }) {
  const [experience, setExperience] = useState('')
  const [market, setMarket] = useState('')
  const [result, setResult] = useState<{ low: number; mid: number; high: number } | null>(null)
  const [loading, setLoading] = useState(false)
  const [showUpsell, setShowUpsell] = useState(false)

  const calculate = () => {
    const e = experiences.find((x) => x.label === experience)
    const m = markets.find((x) => x.label === market)
    if (!e || !m) return
    const base = nicheBaseRates[niche.nicheLabel] ?? 70
    const mid = Math.round(base * e.multiplier * m.multiplier)
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
    } catch {
      alert('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-slate-500 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-emerald-400 transition-colors">FreelanceRateIQ</Link>
          <span>→</span>
          <Link href="/calculators" className="hover:text-emerald-400 transition-colors">Calculators</Link>
          <span>→</span>
          <span className="text-slate-400">{niche.nicheLabel}</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="inline-block bg-emerald-500/20 text-emerald-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Free Calculator
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{niche.h1}</h1>
          <p className="text-slate-400 text-lg">{niche.intro}</p>
        </div>

        {/* Calculator */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 mb-8">
          <div className="mb-4">
            <div className="inline-block bg-emerald-600/30 text-emerald-300 text-sm px-3 py-1 rounded-full font-medium">
              Niche: {niche.nicheLabel}
            </div>
          </div>

          <div className="grid gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Experience Level</label>
              <select
                value={experience}
                onChange={(e) => { setExperience(e.target.value); setResult(null) }}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Select experience...</option>
                {experiences.map((e) => (
                  <option key={e.label} value={e.label}>{e.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Client Market</label>
              <select
                value={market}
                onChange={(e) => { setMarket(e.target.value); setResult(null) }}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Select market...</option>
                {markets.map((m) => (
                  <option key={m.label} value={m.label}>{m.label}</option>
                ))}
              </select>
            </div>

            <button
              onClick={calculate}
              disabled={!experience || !market}
              className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-colors text-lg"
            >
              Calculate My {niche.nicheLabel} Rate →
            </button>
          </div>
        </div>

        {/* Result */}
        {result && (
          <div className="bg-emerald-900/30 border border-emerald-500/30 rounded-2xl p-8 mb-8 text-center">
            <p className="text-slate-400 mb-4">Your market rate range for <strong className="text-white">{niche.nicheLabel}</strong></p>
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
              At ${result.mid}/hr, that&apos;s{' '}
              <span className="text-white font-semibold">${(result.mid * 40 * 4).toLocaleString()}/month</span> at 40hrs/week
            </p>
          </div>
        )}

        {/* Upsell */}
        {showUpsell && (
          <div className="bg-slate-800 border border-slate-600 rounded-2xl p-8 mb-10">
            <div className="flex items-start gap-4">
              <div className="text-3xl">📖</div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">Want to actually charge those rates?</h2>
                <p className="text-slate-400 mb-4">
                  Knowing your rate is step one. Getting clients to pay it is another. The{' '}
                  <strong className="text-white">FreelanceRateIQ Guide</strong> includes:
                </p>
                <ul className="text-slate-300 space-y-2 mb-6 text-sm">
                  <li>✓ Word-for-word scripts to raise rates with existing clients</li>
                  <li>✓ Rate tables for 40+ niches including {niche.nicheLabel}</li>
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

        {/* Rate Benchmarks Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{niche.nicheLabel} Rate Benchmarks — 2026</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800 text-slate-400">
                  <th className="text-left px-5 py-3 font-semibold">Experience</th>
                  <th className="text-left px-5 py-3 font-semibold">Rate Range</th>
                  <th className="text-left px-5 py-3 font-semibold">Typical Profile</th>
                </tr>
              </thead>
              <tbody>
                {niche.rateTable.map((row, i) => (
                  <tr
                    key={row.level}
                    className={i % 2 === 0 ? 'bg-slate-900/50' : 'bg-slate-800/30'}
                  >
                    <td className="px-5 py-4 font-medium text-white">{row.level}</td>
                    <td className="px-5 py-4 text-emerald-400 font-semibold">{row.range}</td>
                    <td className="px-5 py-4 text-slate-400">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Top Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">High-Value Skills for {niche.nicheLabel}</h2>
          <p className="text-slate-400 mb-4">
            These skills consistently command rate premiums in the {niche.nicheLabel.toLowerCase()} market:
          </p>
          <div className="flex flex-wrap gap-2">
            {niche.topSkills.map((skill) => (
              <span
                key={skill}
                className="bg-slate-800 border border-slate-600 text-slate-300 text-sm px-3 py-1.5 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {niche.faqs.map((faq) => (
              <div key={faq.q} className="border-b border-slate-800 pb-6">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Posts */}
        {niche.relatedBlogs.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Related Rate Guides</h2>
            <div className="space-y-3">
              {niche.relatedBlogs.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-4 hover:border-emerald-500/50 transition-colors"
                >
                  <span className="text-emerald-400 font-medium">{post.title} →</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Footer CTA */}
        <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-2xl p-8 text-center">
          <p className="text-white font-bold text-xl mb-2">Try the Full Calculator</p>
          <p className="text-slate-400 text-sm mb-5">
            The main calculator lets you compare rates across all 15 freelance niches at once.
          </p>
          <Link
            href="/"
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors"
          >
            Open the Full Calculator →
          </Link>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-800">
          <Link href="/calculators" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors">
            ← All Niche Calculators
          </Link>
        </div>
      </div>

      <footer className="mt-16 py-8 border-t border-slate-800 text-center text-slate-500 text-xs">
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
