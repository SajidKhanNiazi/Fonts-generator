import type { Metadata } from 'next'
import PubgSekilliNickClient from './PubgSekilliNickClient'

// SEO Metadata for the PUBG Şekilli Nick page
export const metadata: Metadata = {
  title: 'PUBG Şekilli Nick – Havalı ve Estetik PUBG Nickleri',
  description: 'PUBG şekilli nick oluştur, havalı ve estetik PUBG nicklerini tek tıkla kopyala ve oyunda kullan.',
  keywords: 'pubg şekilli nick, pubg nick, pubg havalı nick, pubg şekilli isimler, pubg mobile nick, pubg clan nickleri, pubg estetik nick',
  authors: [{ name: 'Stilleri Pro' }],
  openGraph: {
    title: 'PUBG Şekilli Nick – Havalı ve Estetik PUBG Nickleri',
    description: 'PUBG şekilli nick oluştur, havalı ve estetik PUBG nicklerini tek tıkla kopyala ve oyunda kullan.',
    type: 'website',
    locale: 'tr_TR',
    url: 'https://stilleripro.com.tr/pubg-sekilli-nick',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PUBG Şekilli Nick – Havalı ve Estetik PUBG Nickleri',
    description: 'PUBG şekilli nick oluştur, havalı ve estetik PUBG nicklerini tek tıkla kopyala ve oyunda kullan.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://stilleripro.com.tr/pubg-sekilli-nick',
  },
}

export default function PubgSekilliNickPage() {
  return <PubgSekilliNickClient />
}
