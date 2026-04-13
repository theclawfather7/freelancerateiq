import { MetadataRoute } from "next";
import { niches } from "./calculators/data";

const experienceLevels = ['entry-level', 'junior', 'mid-level', 'senior', 'expert']

const citySlugsList = [
  'new-york','san-francisco','los-angeles','chicago','austin',
  'seattle','boston','denver','miami','dallas','atlanta','portland',
  'nashville','phoenix','remote',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const calculatorPages = niches.map((n) => ({
    url: `https://freelancerateiq.com/calculators/${n.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: "https://freelancerateiq.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://freelancerateiq.com/calculators",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...calculatorPages,
    {
      url: "https://freelancerateiq.com/experience",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    ...experienceLevels.map((slug) => ({
      url: `https://freelancerateiq.com/experience/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    {
      url: "https://freelancerateiq.com/cities",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    ...citySlugsList.map((slug) => ({
      url: `https://freelancerateiq.com/cities/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    {
      url: "https://freelancerateiq.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://freelancerateiq.com/blog/how-to-calculate-freelance-rate",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://freelancerateiq.com/blog/freelance-rates-by-industry",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://freelancerateiq.com/blog/web-developer-freelance-rates",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://freelancerateiq.com/blog/how-much-to-charge-freelancing",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://freelancerateiq.com/blog/raise-your-freelance-rates",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://freelancerateiq.com/blog/ai-ml-freelance-rates-2026",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://freelancerateiq.com/blog/freelance-graphic-design-rates",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://freelancerateiq.com/blog/how-to-find-freelance-clients",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://freelancerateiq.com/privacy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: "https://freelancerateiq.com/terms",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: "https://freelancerateiq.com/success",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: "https://freelancerateiq.com/templates",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://freelancerateiq.com/templates/freelance-contract",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://freelancerateiq.com/templates/freelance-invoice",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://freelancerateiq.com/templates/freelance-proposal",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://freelancerateiq.com/templates/freelance-scope-of-work",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://freelancerateiq.com/templates/freelance-nda",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://freelancerateiq.com/templates/freelance-rate-increase-letter",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: "https://freelancerateiq.com/remote",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    ...['work-from-home-rates','digital-nomad-rates','us-clients-from-abroad','time-zone-pricing','async-work-tips','location-independent-rates'].map((slug) => ({
      url: `https://freelancerateiq.com/remote/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    {
      url: "https://freelancerateiq.com/pricing-guide",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://freelancerateiq.com/pricing-guide/how-to-set-freelance-rates",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://freelancerateiq.com/pricing-guide/hourly-vs-project-pricing",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://freelancerateiq.com/pricing-guide/how-to-raise-freelance-rates",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://freelancerateiq.com/pricing-guide/freelance-pricing-mistakes",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://freelancerateiq.com/pricing-guide/value-based-pricing",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://freelancerateiq.com/pricing-guide/handling-price-objections",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://freelancerateiq.com/taxes",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    ...['freelance-tax-guide','self-employment-tax','quarterly-taxes','freelance-tax-deductions','freelance-tax-rate','home-office-deduction','freelance-retirement-accounts','llc-vs-sole-proprietor'].map((slug) => ({
      url: `https://freelancerateiq.com/taxes/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];
}
