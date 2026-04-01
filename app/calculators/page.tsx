import type { Metadata } from 'next'
import Link from 'next/link'
import { niches } from './data'

export const metadata: Metadata = {
  title: 'Freelance Rate Calculators by Niche — FreelanceRateIQ',
  description:
    'Free freelance rate calculators for every niche. Web developers, copywriters, designers, consultants, and more — find your 2026 market rate in 30 seconds.',
  keywords:
    'freelance rate calculator by niche, web developer rate calculator, copywriter hourly rate, graphic designer freelance rate, UX designer rate',
}

const nicheEmojis: Record<string, string> = {
  'web-developer': '💻',
  'copywriter': '✍️',
  'graphic-designer': '🎨',
  'ux-designer': '🖥️',
  'data-analyst': '📊',
  'devops-engineer': '⚙️',
  'content-writer': '📝',
  'seo-consultant': '🔍',
  'video-editor': '🎬',
  'virtual-assistant': '📋',
  'social-media-manager': '📱',
  'consultant': '💼',
  'ai-ml-engineer': '🤖',
}

export default function CalculatorsIndex() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-2">
          <Link href="/" className="text-emerald-400 text-sm hover:underline">← Back to Calculator</Link>
        </div>

        <div className="mt-6 mb-12">
          <div className="inline-block bg-emerald-500/20 text-emerald-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Free Tools
          </div>
          <h1 className="text-4xl font-bold mb-4">Freelance Rate Calculators by Niche</h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Stop guessing what to charge. Pick your niche below and get a personalized, data-backed rate range in 30 seconds — including a rate benchmark table and FAQ for your specific field.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {niches.map((niche) => (
            <Link
              key={niche.slug}
              href={`/calculators/${niche.slug}`}
              className="group bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-emerald-500/50 hover:bg-slate-800 transition-all"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{nicheEmojis[niche.slug] ?? '🧮'}</span>
                <div>
                  <h2 className="font-semibold text-white group-hover:text-emerald-400 transition-colors leading-tight mb-1">
                    {niche.nicheLabel}
                  </h2>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                    {niche.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-2xl p-8 text-center">
          <p className="text-white font-bold text-xl mb-2">Need to compare multiple niches?</p>
          <p className="text-slate-400 text-sm mb-5">
            The main calculator lets you select any niche and see your rate across all experience levels at once.
          </p>
          <Link
            href="/"
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors"
          >
            Open the Full Calculator →
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
    </div>
  )
}
