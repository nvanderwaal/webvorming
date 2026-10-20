import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { services } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Diensten',
  description:
    'Van websites tot software op maat: ontwikkel je digitale wereld met Webvorming.',
}

export default function Services() {
  return (
    <SimpleLayout
      title="Van websites tot software op maat."
      intro="Word digitaal goed zichtbaar zodat klanten je kunnen vinden, en automatiseer processen binnen je bedrijf om efficiënter te werken. Of je nu een mkb-bedrijf bent dat online wil groeien of een webwinkel die meer wil verkopen: we bieden betaalbare en schaalbare oplossingen die met je meegroeien."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service) => (
          <Card as="li" key={service.slug}>
            <Card.Title href={`/diensten/${service.slug}`}>
              {service.name}
            </Card.Title>
            <Card.Description>{service.summary}</Card.Description>
            <Card.Cta>Meer info</Card.Cta>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
