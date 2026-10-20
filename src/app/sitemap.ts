import { type MetadataRoute } from 'next'

import { services } from '@/lib/services'
import { site } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  let paths = [
    '/',
    '/over/',
    '/diensten/',
    ...services.map((service) => `/diensten/${service.slug}/`),
    '/projecten/',
    '/contact/',
  ]

  return paths.map((path) => ({ url: new URL(path, site.url).href }))
}
