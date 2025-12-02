import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.circularshipping.nl' // Update this to your actual domain
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/login', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}


