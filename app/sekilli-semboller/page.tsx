import type { Metadata } from 'next'
import SekilliSembollerClient from './SekilliSembollerClient'

export const metadata: Metadata = {
  title: 'Şekilli Semboller – Süslü ve Özel Semboller Kopyala',
  description: 'Şekilli semboller ile süslü, özel ve estetik sembolleri tek tıkla kopyala ve kullan.',
  keywords: 'şekilli semboller, şekilli semboller kopyala, süslü semboller, özel semboller, sembol işaretleri, şekilli işaretler, instagram semboller, whatsapp semboller, oyun sembolleri, kalp sembolleri, yıldız sembolleri',
  authors: [{ name: 'Stilleri Pro' }],
  openGraph: {
    title: 'Şekilli Semboller – Süslü ve Özel Semboller Kopyala',
    description: 'Şekilli semboller ile süslü, özel ve estetik sembolleri tek tıkla kopyala ve kullan.',
    type: 'website',
    locale: 'tr_TR',
    url: 'https://yazı-stilleripro.com.tr/sekilli-semboller',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Şekilli Semboller – Süslü ve Özel Semboller Kopyala',
    description: 'Şekilli semboller ile süslü, özel ve estetik sembolleri tek tıkla kopyala ve kullan.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://yazı-stilleripro.com.tr/sekilli-semboller',
  },
}

export default function SekilliSembollerPage() {
  return <SekilliSembollerClient />
}
