# Webvorming

De website van [Webvorming](https://webvorming.nl), gebouwd met [Next.js](https://nextjs.org) en [Tailwind CSS](https://tailwindcss.com) op basis van het Tailwind Plus-template _Spotlight_.

## Lokaal ontwikkelen

```bash
npm install
npm run dev
```

Open daarna [http://localhost:3000](http://localhost:3000).

## Inhoud aanpassen

- Contactgegevens, socials en de d0dge-link: `src/lib/site.ts`
- Diensten (inclusief de pagina's onder `/diensten/...`): `src/lib/services.ts`
- Klantlogo's: `src/components/Clients.tsx` en `src/images/logos`
- Pagina's: `src/app`

## Publiceren

De site wordt als statische export (`out/`) gebouwd en via GitHub Actions naar GitHub Pages gepubliceerd bij elke push naar `main` (zie `.github/workflows/deploy.yml`). Zet in de repository-instellingen onder **Pages** de bron op **GitHub Actions**.

Voor het eigen domein: vul `webvorming.nl` in bij **Pages → Custom domain** en laat de DNS naar GitHub Pages wijzen. De workflow pakt het juiste pad dan automatisch op.

Oude URL's van de vorige site (`/mkb`, `/ecommerce`, `/apps`, `/apps/dodge`) sturen door naar hun nieuwe plek; `/apps/dodge` verwijst naar het privacybeleid van d0dge.

## Licentie

Het template valt onder de [Tailwind Plus-licentie](https://tailwindcss.com/plus/license).
