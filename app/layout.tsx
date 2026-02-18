import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stilleri Pro - Türkçe Metin Stil Dönüştürücü | Ücretsiz Font Aracı',
  description: 'Yazı stilleri aracı ile metninizi Instagram, WhatsApp, Facebook için özel font stillerine dönüştürün. Kalın, italik, süslü ve daha fazla yazı stili. Türkçe karakter desteği ile ç, ğ, ı, ö, ş, ü karakterleri mükemmel çalışır.',
  keywords: 'yazı stilleri, font stilleri, metin dönüştürücü, instagram yazı stili, whatsapp font, türkçe font, yazı tipi, metin stili',
  authors: [{ name: 'Stilleri Pro' }],
  openGraph: {
    title: 'Stilleri Pro - Türkçe Metin Stil Dönüştürücü',
    description: 'Metninizi özel font stillerine dönüştürün. Instagram, WhatsApp ve Facebook için mükemmel.',
    type: 'website',
    locale: 'tr_TR',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
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
