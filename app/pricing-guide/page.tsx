import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Freelance Pricing Guide | How to Price Your Services | FreelanceRateIQ',
  description: 'Complete freelance pricing strategy guide. How to set rates, when to raise them, how to price projects vs. hourly, how to handle price objections, and how to stop undercharging.',
  keywords: 'freelance pricing guide, how to price freelance work, how to set freelance rates, freelance pricing strategy, how to stop undercharging freelance',
  openGraph: {
    title: 'Freelance Pricing Guide | FreelanceRateIQ',
    description: 'Everything you need to know about pricing your freelance services correctly.',
    url: 'https://freelancerateiq.com/pricing-guide',
    siteName: 'FreelanceRateIQ',
    type: 'website',
  },
}

const topics = [
  {
    slug: 'how-to-set-freelance-rates',
    emoji: '🎯',
    name: 'How to Set Your Freelance Rates',
    badge: 'Start Here',
    badgeColor: 'bg-emerald-500/20 text-emerald-400',
    description: 'The complete framework for calculating your freelance rate from scratch — covering your costs, market rates, experience level, and target income.',
    keyPoints: ['Cost-based vs. value-based pricing', 'The minimum viable rate formula', 'How to research market rates in your niche'],
  },
  {
    slug: 'hourly-vs-project-pricing',
    emoji: '⚖️',
    name: 'Hourly vs. Project Pricing',
    badge: 'Critical Decision',
    badgeColor: 'bg-blue-500/20 text-blue-400',
    description: 'When to charge by the hour vs. by the project — and how each model affects your income ceiling, client relationships, and daily stress.',
    keyPoints: ['Why hourly pricing caps your income', 'How to quote project prices confidently', 'Hybrid models that work'],
  },
  {
    slug: 'how-to-raise-freelance-rates',
    emoji: '📈',
    name: 'How to Raise Your Rates',
    badge: 'Most Avoided',
    badgeColor: 'bg-orange-500/20 text-orange-400',
    description: 'The complete guide to raising your freelance rates — when, by how much, how to tell existing clients, and what to do when they push back.',
    keyPoints: ['How often to raise rates (the answer is: more)', 'Scripts for telling clients about increases', 'How to handle "that\'s too expensive"'],
  },
  {
    slug: 'freelance-pricing-mistakes',
    emoji: '🚫',
    name: 'Freelance Pricing Mistakes',
    badge: 'Avoid These',
    badgeColor: 'bg-red-500/20 text-red-400',
    description: 'The 8 most common freelance pricing mistakes that keep talented people chronically underpaid — and exactly how to fix each one.',
    keyPoints: ['The "impostor syndrome discount"', 'Competing on price (and why it destroys your career)', 'Why transparency about rates backfires'],
  },
  {
    slug: 'value-based-pricing',
    emoji: '💎',
    name: 'Value-Based Pricing for Freelancers',
    badge: 'Advanced',
    badgeColor: 'bg-purple-500/20 text-purple-400',
    description: 'How to move beyond hourly rates and price based on the value you deliver — the pricing model used by the highest-earning freelancers in every niche.',
    keyPoints: ['What value-based pricing actually means', 'How to quantify your value to a client', 'Discovery questions that unlock higher prices'],
  },
  {
    slug: 'handling-price-objections',
    emoji: '💬',
    name: 'Handling Price Objections',
    badge: 'Close More',
    badgeColor: 'bg-emerald-500/20 text-emerald-400',
    description: 'Word-for-word scripts for every price objection you\'ll face — "that\'s out of my budget," "can you do it cheaper," "I found someone cheaper," and more.',
    keyPoints: ['The 4 types of price objections', 'Scripts that keep your rate intact', 'When to negotiate and when to walk'],
  },
]

export default function PricingGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">

        <div className="mb-6">
          <Link href="/" className="text-emerald-400 text-sm hover:underline">← Back to Calculator</Link>
        </div>

        <div className="mb-12 text-center">
          <div className="inline-block bg-emerald-500/20 text-emerald-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Pricing Strategy
          </div>
          <h1 className="text-4xl font-bold mb-4">The Freelance Pricing Guide</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about pricing your freelance services correctly. Stop undercharging, start closing at your real rate.
          </p>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { stat: '76%', label: 'of freelancers undercharge in their first year' },
            { stat: '$47K', label: 'average annual income lost to underpricing' },
            { stat: '2.4x', label: 'income increase from switching to value pricing' },
          ].map(item => (
            <div key={item.stat} className="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-700/40">
              <div className="text-2xl font-bold text-emerald-400 mb-1">{item.stat}</div>
              <div className="text-slate-400 text-xs leading-snug">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Topic grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {topics.map((t) => (
            <Link
              key={t.slug}
              href={`/pricing-guide/${t.slug}`}
              className="block p-6 rounded-2xl border border-slate-700/50 bg-slate-800/40 hover:border-emerald-500/50 hover:bg-slate-800/70 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{t.emoji}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${t.badgeColor}`}>{t.badge}</span>
              </div>
              <h2 className="font-bold text-lg mb-2 group-hover:text-emerald-300 transition-colors">{t.name}</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{t.description}</p>
              <ul className="space-y-1 mb-4">
                {t.keyPoints.map(p => (
                  <li key={p} className="flex items-start gap-2 text-xs text-slate-500">
                    <span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="text-emerald-400 text-sm font-medium">Read the full guide →</div>
            </Link>
          ))}
        </div>

        {/* Upsell */}
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center">
          <div className="text-3xl mb-3">📊</div>
          <h2 className="text-2xl font-bold mb-2">Know Your Exact Market Rate</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Strategy is important. But you also need the numbers. Our rate guide shows you exactly what freelancers in your niche and city are charging — so you know when you\'re above, below, or at market.
          </p>
          <Link
            href="/#guide"
            className="inline-block px-8 py-3 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 transition-colors"
          >
            Get the Freelance Rate Guide — $27 →
          </Link>
          <p className="mt-3 text-slate-500 text-xs">One-time · Instant PDF download · Rate tables for 12 niches</p>
        </div>
      </div>
    </div>
  )
}
