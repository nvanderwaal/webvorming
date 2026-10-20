import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import { site } from '@/lib/site'

const stats = [
  { value: '20+', label: 'Klanten' },
  { value: '10k+', label: 'Gebruikers' },
  { value: '500+', label: 'Uur bespaard' },
  { value: '200%', label: 'Efficiënter' },
  { value: '8k+', label: 'Kilometers' },
  { value: '1.2k+', label: 'Kopjes koffie' },
]

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export const metadata: Metadata = {
  title: 'Over ons',
  description:
    'Bij Webvorming omarmen we digitale uitdagingen als kansen voor groei en innovatie.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Digitale avonturiers, met de focus op jouw groei.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Bij Webvorming omarmen we digitale uitdagingen als kansen voor
              groei en innovatie. Onze missie is om op maat gemaakte oplossingen
              te bieden die niet alleen voldoen aan de behoeften van onze
              klanten, maar hen ook helpen om hun online doelen te overtreffen.
            </p>
            <p>
              We streven ernaar om creatieve en effectieve strategieën te
              ontwikkelen die de grenzen van de digitale wereld verleggen. Van
              een duidelijke website tot een webapp die processen stroomlijnt:
              jouw bedrijf is uniek, dus moet je dat online ook zijn.
            </p>
            <p>
              We geloven in voortdurende verbetering en het leveren van
              hoogwaardige diensten die onze klanten kunnen vertrouwen. Onze
              samenwerking is gebaseerd op open communicatie, wederzijds respect
              en een gedeelde visie voor succes.
            </p>
            <p>
              We werken vanuit {site.location}. Een bezoekadres hebben we niet,
              maar we komen altijd even langs, 100% elektrisch.
            </p>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-zinc-100 pt-10 sm:grid-cols-3 dark:border-zinc-700/40">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-1">
                <dt className="text-sm text-zinc-600 dark:text-zinc-400">
                  {stat.label}
                </dt>
                <dd className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
          <Button href="/diensten" variant="secondary" className="mt-12">
            Bekijk onze diensten
          </Button>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href={site.socials.linkedin} icon={LinkedInIcon}>
              Volg ons op LinkedIn
            </SocialLink>
            <SocialLink
              href={site.socials.instagram}
              icon={InstagramIcon}
              className="mt-4"
            >
              Volg ons op Instagram
            </SocialLink>
            <SocialLink
              href={site.socials.facebook}
              icon={FacebookIcon}
              className="mt-4"
            >
              Volg ons op Facebook
            </SocialLink>
            <SocialLink
              href={`mailto:${site.email}`}
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              {site.email}
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
