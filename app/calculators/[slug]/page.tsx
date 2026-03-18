import type { Metadata } from 'next'
import { niches, getNiche } from '../data'
import { notFound } from 'next/navigation'
import NicheCalculatorClient from './client'

export async function generateStaticParams() {
  return niches.map((n) => ({ slug: n.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const niche = getNiche(slug)
  if (!niche) return {}
  return {
    title: niche.title,
    description: niche.description,
    keywords: niche.keywords,
    openGraph: {
      title: niche.title,
      description: niche.description,
      url: `https://freelancerateiq.com/calculators/${slug}`,
      siteName: 'FreelanceRateIQ',
      type: 'website',
    },
  }
}

export default async function NicheCalculatorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const niche = getNiche(slug)
  if (!niche) notFound()
  return <NicheCalculatorClient niche={niche} />
}
