import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/guide", "/success"],
    },
    sitemap: "https://freelancerateiq.com/sitemap.xml",
  };
}
