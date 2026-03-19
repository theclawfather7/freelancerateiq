import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Freelance Templates | Contract, Invoice, Proposal | FreelanceRateIQ',
  description: 'Free freelance contract template, invoice template, and project proposal template. Copy-paste ready for web developers, designers, writers, and consultants.',
  keywords: 'freelance contract template, freelance invoice template, freelance proposal template free, freelancer contract template word, free freelance contract download',
  openGraph: {
    title: 'Free Freelance Templates | FreelanceRateIQ',
    description: 'Free freelance contract, invoice, and proposal templates. Copy-paste ready.',
    url: 'https://freelancerateiq.com/templates',
    siteName: 'FreelanceRateIQ',
    type: 'website',
  },
}

const templates = [
  {
    slug: 'freelance-contract',
    name: 'Freelance Contract Template',
    emoji: '📄',
    badge: 'Most Downloaded',
    badgeColor: 'bg-emerald-500/20 text-emerald-400',
    description: 'A complete freelance services agreement covering scope, payment terms, revisions, IP ownership, and kill fees. Used by 10,000+ freelancers.',
    includes: ['Scope of work clause', 'Payment terms & late fees', 'Revision policy', 'IP ownership transfer', 'Kill fee clause', 'Dispute resolution'],
    searchVolume: '50K+ monthly searches',
  },
  {
    slug: 'freelance-invoice',
    name: 'Freelance Invoice Template',
    emoji: '🧾',
    badge: 'Quick Download',
    badgeColor: 'bg-blue-500/20 text-blue-400',
    description: 'Professional freelance invoice template with net-30 payment terms, late fee language, and itemized line items. Ready to customize and send.',
    includes: ['Itemized line items', 'Net-15/30/45 options', 'Late fee language', 'Payment method section', 'Tax fields', 'Professional formatting'],
    searchVolume: '40K+ monthly searches',
  },
  {
    slug: 'freelance-proposal',
    name: 'Freelance Project Proposal',
    emoji: '📋',
    badge: 'Win More Clients',
    badgeColor: 'bg-purple-500/20 text-purple-400',
    description: 'A structured freelance project proposal that presents your approach, timeline, and pricing professionally. Increases close rates by showing process.',
    includes: ['Project overview section', 'Deliverables breakdown', 'Timeline with milestones', 'Pricing presentation', 'About you section', 'Next steps CTA'],
    searchVolume: '30K+ monthly searches',
  },
  {
    slug: 'freelance-scope-of-work',
    name: 'Scope of Work Template',
    emoji: '📐',
    badge: 'Scope Creep Protection',
    badgeColor: 'bg-orange-500/20 text-orange-400',
    description: 'A detailed scope of work document that protects you from scope creep by defining exactly what is and isn\'t included in a project.',
    includes: ['Deliverables checklist', 'What\'s excluded', 'Revision count', 'Approval process', 'Change order clause', 'Timeline expectations'],
    searchVolume: '20K+ monthly searches',
  },
  {
    slug: 'freelance-nda',
    name: 'Freelance NDA Template',
    emoji: '🔒',
    badge: 'Confidentiality',
    badgeColor: 'bg-red-500/20 text-red-400',
    description: 'A mutual non-disclosure agreement for freelancers working with clients who share confidential information, trade secrets, or unreleased products.',
    includes: ['Mutual confidentiality clause', 'Definition of confidential info', 'Permitted disclosures', '1-year standard term', 'Return of materials', 'Governing law'],
    searchVolume: '15K+ monthly searches',
  },
  {
    slug: 'freelance-rate-increase-letter',
    name: 'Rate Increase Letter Template',
    emoji: '📈',
    badge: 'Charge More',
    badgeColor: 'bg-emerald-500/20 text-emerald-400',
    description: 'A professional email template for notifying existing clients of a rate increase. Scripts for 20%, 30%, and 50%+ increases with objection-handling guidance.',
    includes: ['3 rate increase scripts', '20% / 30% / 50% versions', 'Objection responses', 'Transition timeline', 'Grandfathering option', 'Keep vs. lose calculation'],
    searchVolume: '12K+ monthly searches',
  },
]

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">

        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/" className="text-emerald-400 text-sm hover:underline">← Back to Calculator</Link>
        </div>

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block bg-emerald-500/20 text-emerald-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Free Templates
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Free Freelance Templates
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Copy-paste ready contracts, invoices, proposals, and more. No email required, no watermarks, no catch.
          </p>
        </div>

        {/* Template grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {templates.map((t) => (
            <Link
              key={t.slug}
              href={`/templates/${t.slug}`}
              className="block p-6 rounded-2xl border border-slate-700/50 bg-slate-800/40 hover:border-emerald-500/50 hover:bg-slate-800/70 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{t.emoji}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${t.badgeColor}`}>{t.badge}</span>
              </div>
              <h2 className="font-bold text-lg mb-1 group-hover:text-emerald-300 transition-colors">{t.name}</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{t.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {t.includes.slice(0, 3).map(item => (
                  <span key={item} className="text-xs bg-slate-700/50 text-slate-300 px-2 py-0.5 rounded">{item}</span>
                ))}
                {t.includes.length > 3 && (
                  <span className="text-xs text-slate-500">+{t.includes.length - 3} more</span>
                )}
              </div>
              <div className="text-emerald-400 text-sm font-medium">Get free template →</div>
            </Link>
          ))}
        </div>

        {/* Upsell */}
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center">
          <div className="text-3xl mb-3">💰</div>
          <h2 className="text-2xl font-bold mb-2">Know Your Worth Before You Send Anything</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Templates protect you from bad deals. But only if you know what a good deal looks like first. Our $27 rate guide shows you exactly what to charge — by niche, experience, and city.
          </p>
          <Link
            href="/#guide"
            className="inline-block px-8 py-3 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 transition-colors"
          >
            Get the Freelance Rate Guide — $27 →
          </Link>
          <p className="mt-3 text-slate-500 text-xs">One-time · Instant PDF download</p>
        </div>
      </div>
    </div>
  )
}
