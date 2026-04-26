
import { MetadataRoute } from 'next'
import { tours } from '@/data/tours'

export default function sitemap(): MetadataRoute.Sitemap {
  const tourUrls = tours.map(t => ({
    url: `https://keralatravels.in/tours/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    { url: 'https://keralatravels.in', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://keralatravels.in/tours', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://keralatravels.in/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://keralatravels.in/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    ...tourUrls,
  ]
}
