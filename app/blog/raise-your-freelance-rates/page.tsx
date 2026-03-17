import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Raise Your Freelance Rates Without Losing Clients — FreelanceRateIQ',
  description: 'Word-for-word scripts and timing strategies to raise your freelance rates with existing clients. Real advice that works without burning relationships.',
  keywords: 'raise freelance rates, how to raise rates without losing clients, freelance rate increase script, freelance pricing advice',
  openGraph: {
    title: 'How to Raise Your Freelance Rates Without Losing Clients',
    description: 'Word-for-word scripts and timing strategies that work.',
    url: 'https://freelancerateiq.com/blog/raise-your-freelance-rates',
    type: 'article',
  },
}

export default function RaiseRates() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-6">
          <Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Blog</Link>
        </div>

        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-4 leading-tight">How to Raise Your Freelance Rates Without Losing Clients</h1>
          <div className="text-slate-500 text-sm">March 17, 2026 · 6 min read</div>
        </header>

        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p className="text-xl text-slate-200">Most freelancers know they should raise their rates. Almost none of them actually do it.</p>

          <p>The fear is real: what if the client says no? What if they find someone cheaper? What if they&apos;re insulted?</p>

          <p>Here&apos;s the reality: clients expect rates to go up over time. Vendors raise prices. Employees get raises. The only person who doesn&apos;t get a raise is the freelancer who never asks.</p>

          <h2 className="text-2xl font-bold text-white mt-10">When to Raise Your Rates</h2>

          <p>The best time to raise rates is at a natural transition point:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">Contract renewal</strong> — The least friction. You&apos;re already renegotiating terms.</li>
            <li><strong className="text-white">New project kickoff</strong> — New project = new agreement.</li>
            <li><strong className="text-white">After a clear win</strong> — You just delivered something great. Strike while the value is fresh.</li>
            <li><strong className="text-white">Annually</strong> — Build it into your business cadence. January or your freelance anniversary.</li>
          </ul>

          <p>What you should NOT do: raise rates mid-project or immediately after a complaint. Timing matters.</p>

          <h2 className="text-2xl font-bold text-white mt-10">The Email Script</h2>

          <p>Here&apos;s a word-for-word email you can adapt:</p>

          <div className="bg-slate-800 rounded-xl p-6 text-sm text-slate-300 font-mono leading-relaxed">
            <p>Subject: Rate update for [upcoming project / next quarter]</p>
            <br />
            <p>Hi [Name],</p>
            <br />
            <p>I wanted to give you a heads-up that I&apos;ll be updating my rates starting [date]. My new rate for [work type] will be $[X]/hour (up from $[Y]).</p>
            <br />
            <p>I&apos;ve really enjoyed working together on [project], and I hope we can continue. This reflects the value I&apos;ve been delivering and brings me in line with current market rates for [your specialty].</p>
            <br />
            <p>Happy to talk through this if you have questions. Looking forward to [next project / continuing our work].</p>
            <br />
            <p>[Your name]</p>
          </div>

          <p>Notice what this email does:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>States the new rate matter-of-factly (not apologetically)</li>
            <li>Gives a specific date (makes it real)</li>
            <li>References past value delivered (justifies the increase)</li>
            <li>Positions as a market adjustment (not arbitrary)</li>
            <li>Leaves the door open to discuss (not a take-it-or-leave-it ultimatum)</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10">How Much to Raise</h2>

          <p>Two frameworks:</p>

          <p><strong className="text-white">Inflation + skill premium:</strong> 5–10% annually is standard. 15–25% for a skill upgrade or niche repositioning. More than 30% in one jump usually needs serious justification.</p>

          <p><strong className="text-white">The market gap method:</strong> Check what your market rate should be (use our calculator). If you&apos;re more than 20% below it, you have room to close the gap in 1–2 increases over 12 months.</p>

          <h2 className="text-2xl font-bold text-white mt-10">When They Push Back</h2>

          <p>Three common pushbacks and how to handle them:</p>

          <p><strong className="text-white">&ldquo;Can we stay at the current rate?&rdquo;</strong><br />
          &ldquo;I understand — I want to keep working together too. The new rate is where I need to be for new work going forward. If budget is a constraint, let&apos;s talk about scope — maybe we prioritize [X] and revisit [Y].&rdquo;</p>

          <p><strong className="text-white">&ldquo;I can find someone cheaper.&rdquo;</strong><br />
          Let them try. Seriously. If they go cheaper, one of two things happens: they come back (happens often), or they don&apos;t (then you have time for a better client). Don&apos;t negotiate against this.</p>

          <p><strong className="text-white">&ldquo;What changed?&rdquo;</strong><br />
          &ldquo;My rates are updated annually based on market rates and the value I&apos;m delivering. I&apos;ve been underpriced compared to peers with my experience and specialization.&rdquo;</p>

          <h2 className="text-2xl font-bold text-white mt-10">The Mindset Shift</h2>

          <p>Clients don&apos;t leave over a 10% rate increase if you&apos;re delivering real value. They leave when they feel like they&apos;re not getting value — regardless of price.</p>

          <p>The best client retention strategy isn&apos;t keeping your rates low. It&apos;s being indispensable.</p>

          <div className="text-center mt-10">
            <Link 
              href="/" 
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
            >
              Calculate Your Target Rate →
            </Link>
          </div>

          <hr className="border-slate-800 my-10" />

          <div className="bg-slate-800/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Get the full script library</h3>
            <p className="text-slate-400 text-sm mb-4">The FreelanceRateIQ Pricing Guide includes 5 full email scripts for rate increases, negotiation tactics, and rate tables for 40+ niches. $27 one-time.</p>
            <Link href="/#guide" className="text-emerald-400 hover:underline text-sm">Get the Guide →</Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <Link href="/blog" className="text-emerald-400 hover:underline text-sm">← More articles</Link>
        </div>
      </div>
    </div>
  )
}
