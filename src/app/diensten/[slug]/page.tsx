import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Card } from '@/components/Card'
import { ContactCta } from '@/components/ContactCta'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getService, services } from '@/lib/services'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let service = getService((await params).slug)

  return {
    title: service?.metaTitle,
    description: service?.metaDescription,
  }
}

export default async function ServicePage({ params }: Props) {
  let service = getService((await params).slug)

  if (!service) {
    notFound()
  }

  let otherServices = services.filter((other) => other.slug !== service.slug)

  return (
    <SimpleLayout title={service.title} intro={service.description}>
      <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-x-16">
        <dl className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:col-span-2">
          {service.features.map((feature) => (
            <div
              key={feature.name}
              className="border-l border-zinc-100 pl-6 dark:border-zinc-700/40"
            >
              <dt className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                {feature.name}
              </dt>
              <dd className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
        <div>
          <ContactCta />
        </div>
      </div>
      <h2 className="mt-24 text-sm font-semibold text-zinc-800 dark:text-zinc-100">
        Andere diensten
      </h2>
      <ul
        role="list"
        className="mt-10 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {otherServices.map((other) => (
          <Card as="li" key={other.slug}>
            <Card.Title href={`/diensten/${other.slug}`}>
              {other.name}
            </Card.Title>
            <Card.Description>{other.summary}</Card.Description>
            <Card.Cta>Meer info</Card.Cta>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
