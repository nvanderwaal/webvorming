import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Card } from '@/components/Card'
import { ClientLogos } from '@/components/Clients'
import { ContactCta } from '@/components/ContactCta'
import { Container } from '@/components/Container'
import { D0dgeFeature } from '@/components/D0dgeFeature'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { type Service, services } from '@/lib/services'
import { site } from '@/lib/site'

function UsersIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 19.25v-.5a4 4 0 0 1 4-4h4.5a4 4 0 0 1 4 4v.5M9 11.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M17.25 14.75a4 4 0 0 1 4 4v.5M15.25 4.84a3.25 3.25 0 0 1 0 6.32"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <Card as="article">
      <Card.Title href={`/diensten/${service.slug}`}>{service.name}</Card.Title>
      <Card.Description>{service.summary}</Card.Description>
      <Card.Cta>Meer info</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Clients() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <UsersIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Deze bedrijven werkten al met ons samen</span>
      </h2>
      <ClientLogos className="mt-6" />
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <div className="aspect-9/10">
              <Image
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Laten we samen online groeien.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Webvorming bouwt websites, webshops, webapps, mobiele apps en
            software op maat. Vanuit {site.location} helpen we mkb-bedrijven en
            webwinkels hun digitale wereld te laten groeien, zodat hun klanten
            een fantastische ervaring hebben en zij tijd overhouden voor
            belangrijke zaken.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href={site.socials.linkedin}
              aria-label="Volg ons op LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href={site.socials.instagram}
              aria-label="Volg ons op Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href={site.socials.facebook}
              aria-label="Volg ons op Facebook"
              icon={FacebookIcon}
            />
            <SocialLink
              href={`mailto:${site.email}`}
              aria-label="Stuur ons een e-mail"
              icon={MailIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <D0dgeFeature />
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <ContactCta />
            <Clients />
          </div>
        </div>
      </Container>
    </>
  )
}
