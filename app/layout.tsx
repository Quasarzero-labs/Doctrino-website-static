import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'doctrinoo — Le droit OHADA à portée de tous',
  description:
    'doctrinoo est la plateforme de référence pour accéder au droit OHADA et aux droits nationaux africains. Recherchez articles, jurisprudence et doctrine en quelques secondes.',
  keywords: ['OHADA', 'droit africain', 'jurisprudence', 'Sénégal', 'LegalTech', 'doctrinoo'],
  authors: [{ name: 'Quasarzero Labs' }],
  metadataBase: new URL('https://doctrinoo.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'doctrinoo — Le droit OHADA à portée de tous',
    description:
      'La plateforme de référence pour le droit OHADA et les droits nationaux africains.',
    type: 'website',
    url: 'https://doctrinoo.com',
    siteName: 'doctrinoo',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'doctrinoo — Le droit OHADA à portée de tous',
    description:
      'La plateforme de référence pour le droit OHADA et les droits nationaux africains.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
