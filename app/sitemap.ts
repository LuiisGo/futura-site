import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://futuratt.com'
  const today = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sectores`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sobre-futura`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/seguridad`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/termometro`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/wallet`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/casos`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/futura-vs-erp`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Sector pages
    {
      url: `${baseUrl}/sectores/agroindustria`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sectores/retail`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sectores/distribucion-logistica`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sectores/combustibles-flotas`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sectores/servicios-tecnicos`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sectores/industrial-b2b`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sectores/educacion`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/sectores/restaurantes`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Case study pages
    {
      url: `${baseUrl}/casos/lecheria-san-antonio`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/casos/fueldepot-gt`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/casos/agricola-san-antonio`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    // Blog
    {
      url: `${baseUrl}/blog`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: post.isStub ? 0.4 : 0.7,
  }))

  return [...staticPages, ...blogPages]
}
