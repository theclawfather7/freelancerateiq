import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Freelance Rate Blog — FreelanceRateIQ',
  description: 'Guides, data, and advice on setting your freelance rates. Real numbers, no fluff.',
}

const posts = [
  {
    slug: 'how-much-to-charge-freelancing',
    title: 'How Much Should You Charge for Freelance Work? (2026 Data)',
    date: 'March 17, 2026',
    excerpt: 'The honest answer is: more than you think. Here\'s what real market data says about freelance rates across 40+ niches.',
    readTime: '8 min read',
  },
  {
    slug: 'raise-your-freelance-rates',
    title: 'How to Raise Your Freelance Rates Without Losing Clients',
    date: 'March 17, 2026',
    excerpt: 'Word-for-word scripts and timing strategies to raise rates with existing clients — and what to do when they push back.',
    readTime: '6 min read',
  },
]

export default function Blog() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-2">
          <Link href="/" className="text-emerald-400 text-sm hover:underline">← Back to Calculator</Link>
        </div>
        <h1 className="text-4xl font-bold mb-4">Freelance Rate Blog</h1>
        <p className="text-slate-400 mb-12">Data-backed guides on pricing, negotiation, and making more money as a freelancer.</p>
        
        <div className="space-y-8">
          {posts.map(post => (
            <article key={post.slug} className="border-b border-slate-800 pb-8">
              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="text-xl font-semibold group-hover:text-emerald-400 transition-colors mb-2">{post.title}</h2>
              </Link>
              <div className="text-slate-500 text-sm mb-3">{post.date} · {post.readTime}</div>
              <p className="text-slate-400">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-emerald-400 text-sm mt-3 inline-block hover:underline">Read more →</Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
