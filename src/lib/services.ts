export interface Service {
  slug: string
  name: string
  title: string
  summary: string
  description: string
  features: Array<{ name: string; description: string }>
  metaTitle: string
  metaDescription: string
}

export const services: Array<Service> = [
  {
    slug: 'website',
    name: 'Websites',
    title: 'Laat jouw bedrijf online uitblinken met een professionele website.',
    summary:
      'Jouw online visitekaartje op maat, perfect afgestemd op jouw bedrijf. Geef je klanten een fantastische ervaring met een op maat gemaakte website.',
    description:
      'Of je nu een eenvoudige bedrijfswebsite nodig hebt of een uitgebreide site met geavanceerde functies, wij zorgen ervoor dat jouw website jouw merk versterkt en je bedrijfsdoelen ondersteunt.',
    features: [
      {
        name: 'Uniek en responsief ontwerp',
        description: 'Websites die er geweldig uitzien op alle apparaten.',
      },
      {
        name: 'SEO-optimalisatie',
        description:
          'Zorg ervoor dat jouw website beter gevonden wordt in zoekmachines.',
      },
      {
        name: 'Gebruiksvriendelijk CMS',
        description: 'Eenvoudig zelf content beheren en bijwerken.',
      },
      {
        name: 'Snelle laadtijden',
        description: 'Optimalisatie voor snelle en efficiënte laadtijden.',
      },
      {
        name: 'Regelmatig onderhoud',
        description: 'Wij zorgen ervoor dat je website altijd up-to-date is.',
      },
      {
        name: 'Beveiliging',
        description: 'Jouw data is beschermd met de laatste technologieën.',
      },
    ],
    metaTitle: 'Professionele websites',
    metaDescription:
      'Laat jouw bedrijf online uitblinken met een op maat gemaakte, snelle en vindbare website van Webvorming.',
  },
  {
    slug: 'webshop',
    name: 'Webshops',
    title: 'Verhoog je online verkoop met een converterende webshop.',
    summary:
      'Een webshop volledig afgestemd op jouw bedrijf. Geef je klanten een fantastische winkelervaring die jouw bedrijf online laat uitblinken.',
    description:
      'Een webshop moet niet alleen mooi zijn, maar ook converteren. Wij nemen de digitale lasten uit handen, zodat klanten jouw winkel en producten gemakkelijk vinden en online verkopen eenvoudig en effectief wordt.',
    features: [
      {
        name: 'Op maat gemaakte ontwerpen',
        description: 'Unieke webshops die hetzelfde uitstralen als je bedrijf.',
      },
      {
        name: 'Gebruiksvriendelijke navigatie',
        description: 'Eenvoudig voor klanten om producten te vinden.',
      },
      {
        name: 'Veilige betalingssystemen',
        description: 'Integratie van betrouwbare betalingsmogelijkheden.',
      },
      {
        name: 'SEO-optimalisatie',
        description: 'Zorg ervoor dat je webshop hoog in zoekresultaten komt.',
      },
      {
        name: 'Koppelingen met je boekhouding',
        description:
          'Houd alles eenvoudig bij in je eigen boekhoudpakket, inclusief voorraadbeheer.',
      },
      {
        name: 'Ondersteuning en onderhoud',
        description:
          'Regelmatige updates en ondersteuning voor optimale prestaties.',
      },
    ],
    metaTitle: 'Converterende webshops',
    metaDescription:
      'Verhoog je online verkoop met een op maat gemaakte webshop met veilige betalingen, SEO en koppelingen met je boekhouding.',
  },
  {
    slug: 'webapp',
    name: 'Webapplicaties',
    title: 'Optimaliseer je bedrijfsprocessen met maatwerk webapplicaties.',
    summary:
      'Krachtige webapplicaties, gebouwd in Laravel en Vue.js, die perfect aansluiten bij jouw bedrijfsdoelen.',
    description:
      'Webapplicaties kunnen de efficiëntie van je bedrijf drastisch verbeteren. Wij bouwen op maat gemaakte webapplicaties in Laravel en Vue.js die perfect aansluiten bij jouw bedrijfsdoelen, of het nu gaat om interne tools voor je team of klantgerichte toepassingen.',
    features: [
      {
        name: 'Maatwerk oplossingen',
        description:
          'Applicaties die specifiek zijn ontworpen voor jouw behoeften.',
      },
      {
        name: 'Gebruiksvriendelijke interfaces',
        description:
          'Gemakkelijk te gebruiken voor zowel personeel als klanten.',
      },
      {
        name: 'Naadloze integratie',
        description:
          'Verbinding met bestaande systemen voor een coherente workflow.',
      },
      {
        name: 'Veiligheid en betrouwbaarheid',
        description:
          'Bescherming van je gegevens tegen ongeautoriseerde toegang.',
      },
      {
        name: 'Schaalbaarheid',
        description: 'Oplossingen die meegroeien met je bedrijf.',
      },
      {
        name: 'Ondersteuning en onderhoud',
        description:
          'Doorlopende ondersteuning om problemen snel op te lossen.',
      },
    ],
    metaTitle: 'Maatwerk webapplicaties',
    metaDescription:
      'Optimaliseer je bedrijfsprocessen met op maat gemaakte webapplicaties in Laravel en Vue.js.',
  },
  {
    slug: 'app',
    name: 'Mobiele apps',
    title: 'Bereik klanten overal met innovatieve mobiele apps.',
    summary:
      'Native apps met Flutter voor iOS en Android die jouw bedrijf altijd en overal toegankelijk maken.',
    description:
      'Maak je bedrijf mobiel en bereik klanten altijd en overal met een op maat gemaakte mobiele app. Wij ontwikkelen apps met Flutter voor iOS en Android, volledig afgestemd op jouw bedrijfsdoelen en gebruikersbehoeften.',
    features: [
      {
        name: 'Native ontwikkeling',
        description: 'Geoptimaliseerd voor zowel iOS als Android.',
      },
      {
        name: 'Intuïtieve gebruikerservaring',
        description: 'Eenvoudig te navigeren en te gebruiken apps.',
      },
      {
        name: 'Performance optimalisatie',
        description: 'Snelle en efficiënte apps die soepel draaien.',
      },
      {
        name: 'Integratie met backend systemen',
        description:
          'Een naadloze ervaring tussen app en bestaande infrastructuur.',
      },
      {
        name: 'Ondersteuning en onderhoud',
        description:
          'Regelmatige updates en ondersteuning voor optimale prestaties.',
      },
      {
        name: 'Beveiliging',
        description: 'Jouw data is beschermd met de laatste technologieën.',
      },
    ],
    metaTitle: 'Mobiele apps voor iOS en Android',
    metaDescription:
      'Bereik klanten overal met op maat gemaakte mobiele apps voor iOS en Android.',
  },
  {
    slug: 'software-op-maat',
    name: 'Software op maat',
    title: 'Software die precies aansluit op jouw behoeften.',
    summary:
      'Maatwerk software die jouw bedrijfsprocessen optimaliseert en je productiviteit verhoogt.',
    description:
      'Standaard software voldoet niet altijd aan de unieke eisen van jouw bedrijf. Wij ontwikkelen software op maat, zodat jouw bedrijfsprocessen geoptimaliseerd worden en je productiviteit verhoogt. Laten we samen jouw bedrijf efficiënter maken met software die precies werkt zoals jij dat wilt.',
    features: [
      {
        name: 'Volledig maatwerk',
        description: 'Software die precies doet wat jij nodig hebt.',
      },
      {
        name: 'Schaalbare oplossingen',
        description: 'Groei mee met je bedrijf zonder beperkingen.',
      },
      {
        name: 'Naadloze integratie',
        description: 'Werkt perfect samen met je bestaande systemen.',
      },
      {
        name: 'Hoogste kwaliteitsstandaarden',
        description: 'Betrouwbare en stabiele software.',
      },
      {
        name: 'Gebruiksvriendelijkheid',
        description: 'Ontworpen met de eindgebruiker in gedachten.',
      },
      {
        name: 'Ondersteuning en onderhoud',
        description:
          'Continue service om de software actueel en functioneel te houden.',
      },
    ],
    metaTitle: 'Software op maat',
    metaDescription:
      'Efficiënte en betrouwbare maatwerk software die precies aansluit op de processen van jouw bedrijf.',
  },
  {
    slug: 'api-ontwikkeling',
    name: 'API-ontwikkeling',
    title: 'Verbind jouw systemen naadloos met op maat gemaakte API’s.',
    summary:
      'Naadloze integratie tussen jouw softwareoplossingen, zodat data-uitwisseling gestroomlijnd verloopt.',
    description:
      'Onze op maat gemaakte API’s zorgen voor naadloze integratie tussen jouw softwareoplossingen, waardoor je bedrijfsprocessen geoptimaliseerd worden en de data-uitwisseling gestroomlijnd verloopt. Laten we samen jouw digitale infrastructuur versterken.',
    features: [
      {
        name: 'Maatwerk API’s',
        description:
          'Ontworpen om te voldoen aan de specifieke eisen van jouw bedrijfsprocessen.',
      },
      {
        name: 'Naadloze integratie',
        description:
          'Een soepele verbinding tussen verschillende softwareoplossingen.',
      },
      {
        name: 'Veiligheid en betrouwbaarheid',
        description: 'Bescherming van gegevens en veilige toegang tot API’s.',
      },
      {
        name: 'Documentatie en ondersteuning',
        description:
          'Uitgebreide documentatie voor eenvoudige implementatie en gebruik.',
      },
      {
        name: 'Schaalbaarheid',
        description: 'Oplossingen die meegroeien met jouw bedrijf.',
      },
      {
        name: 'Optimalisatie van prestaties',
        description: 'Efficiënte en snelle API’s voor een optimale werking.',
      },
    ],
    metaTitle: 'API-ontwikkeling',
    metaDescription:
      'Verbind jouw systemen naadloos met veilige, schaalbare en goed gedocumenteerde API’s op maat.',
  },
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}
