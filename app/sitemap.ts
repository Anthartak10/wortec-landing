import type { MetadataRoute } from "next"
import { services } from "@/lib/services"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.wortecsolutionscr.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const urls: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ]

  // Páginas por servicio (si tienes slugs en lib/services)
  for (const s of services) {
    urls.push({
      url: `${SITE_URL}/servicios/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  }

  return urls
}

