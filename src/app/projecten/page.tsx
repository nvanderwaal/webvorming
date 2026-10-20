import { type Metadata } from 'next'
import Image from 'next/image'

import { ClientLogos } from '@/components/Clients'
import { D0dgeFeature } from '@/components/D0dgeFeature'
import { SimpleLayout } from '@/components/SimpleLayout'
import flierImage from '@/images/projects/autorijschool-flier.png'
import showcaseImage from '@/images/projects/showcase.png'

export const metadata: Metadata = {
  title: 'Projecten',
  description:
    'Websites, webapps en mobiele apps voor onze klanten, en d0dge: onze eigen game.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Waar we aan bouwen."
      intro="Van websites en webapps voor onze klanten tot onze eigen mobiele game. Een greep uit het werk waar we trots op zijn."
    >
      <D0dgeFeature />

      <section aria-labelledby="klantwerk" className="mt-24 sm:mt-32">
        <h2
          id="klantwerk"
          className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100"
        >
          Voor onze klanten
        </h2>
        <p className="mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
          Websites, webapps en mobiele apps die werken op elk scherm, van de
          eerste schets tot onderhoud na de lancering.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-white/10">
            <Image
              src={showcaseImage}
              alt="Mobiele weergaven van websites en apps die Webvorming bouwde"
              sizes="(min-width: 1024px) 36rem, 100vw"
              className="aspect-16/10 w-full object-cover"
            />
          </figure>
          <figure className="overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-white/10">
            <Image
              src={flierImage}
              alt="De website van Autorijschool Flier op desktop en mobiel"
              sizes="(min-width: 1024px) 36rem, 100vw"
              className="aspect-16/10 w-full object-cover"
            />
          </figure>
        </div>
      </section>

      <section aria-labelledby="klanten" className="mt-24 sm:mt-32">
        <h2
          id="klanten"
          className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
        >
          Deze bedrijven werkten al met ons samen
        </h2>
        <ClientLogos className="mt-10 max-w-3xl lg:grid-cols-5" />
      </section>
    </SimpleLayout>
  )
}
