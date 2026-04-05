import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
    ],
    sitemap: 'https://futuratt.com/sitemap.xml',
  }
}
