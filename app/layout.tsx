import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yazi Stilleri -Değişik yazı stilleri - Şık Nick Yazma',
  description: 'Metni Instagram ve PUBG için şık yazı tiplerine ve takma adlara dönüştürün. Biyografinizi ve mesajlarınızı özelleştirmek için ücretsiz yazı stilleri aracımızla dikkat çekici stiller oluşturun.',
  keywords: 'yazı stilleri, font stilleri, metin dönüştürücü, instagram yazı stili, whatsapp font, türkçe font, yazı tipi, metin stili',
  authors: [{ name: 'Stilleri Pro' }],
  openGraph: {
    title: 'Stilleri Pro - Türkçe Metin Stil Dönüştürücü',
    description: 'Metni Instagram ve PUBG için şık yazı tiplerine ve takma adlara dönüştürün. Biyografinizi ve mesajlarınızı özelleştirmek için ücretsiz yazı stilleri aracımızla dikkat çekici stiller oluşturun.',
    type: 'website',
    locale: 'tr_TR',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/site.webmanifest',

  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://yazı-stilleripro.com.tr',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="language" content="Turkish" />
        <meta name="geo.region" content="TR" />
      </head>
      <body>{children}</body>
    </html>
  )
}
