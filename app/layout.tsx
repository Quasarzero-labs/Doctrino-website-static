import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Doctrino — Le droit OHADA à portée de tous',
  description:
    'Doctrino est la plateforme de référence pour accéder au droit OHADA et aux droits nationaux africains. Recherchez articles, jurisprudence et doctrine en quelques secondes.',
  keywords: ['OHADA', 'droit africain', 'jurisprudence', 'Sénégal', 'LegalTech', 'Doctrino'],
  authors: [{ name: 'Quasarzero Labs' }],
  openGraph: {
    title: 'Doctrino — Le droit OHADA à portée de tous',
    description:
      'La plateforme de référence pour le droit OHADA et les droits nationaux africains.',
    type: 'website',
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
