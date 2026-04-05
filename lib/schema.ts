export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FUTURA',
    url: 'https://futuratt.com',
    logo: 'https://futuratt.com/Futurawhite.png',
    description:
      'Consultora de digitalización, automatización e inteligencia artificial aplicada para PYMEs en Guatemala y Centroamérica.',
    foundingDate: '2024',
    founder: {
      '@type': 'Person',
      name: 'Luis Marroquín',
      url: 'https://futuratt.com/sobre-futura',
    },
    areaServed: [
      { '@type': 'Country', name: 'Guatemala' },
      { '@type': 'Place', name: 'Centroamérica' },
    ],
    sameAs: [
      'https://www.instagram.com/futura.tt',
      'https://www.facebook.com/share/1Ej8WkoULm/',
      'https://wa.me/50233813895',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+502-3381-3895',
      contactType: 'sales',
      availableLanguage: ['Spanish', 'English'],
    },
  }
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function articleSchema(options: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: options.title,
    description: options.description,
    url: options.url,
    datePublished: options.datePublished,
    dateModified: options.dateModified ?? options.datePublished,
    image: options.image ?? 'https://futuratt.com/og-image.png',
    author: {
      '@type': 'Organization',
      name: 'FUTURA',
      url: 'https://futuratt.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'FUTURA',
      logo: {
        '@type': 'ImageObject',
        url: 'https://futuratt.com/Futurawhite.png',
      },
    },
  }
}
