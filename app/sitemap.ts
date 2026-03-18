import { MetadataRoute } from "next";
import { niches } from "./calculators/data";

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
  ];
}
