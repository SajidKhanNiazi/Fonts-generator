import type { Metadata } from 'next'
import InstaYaziTipiClient from './InstaYaziTipiClient'

// SEO Metadata for the Instagram Font Generator page
export const metadata: Metadata = {
  title: 'Insta Yazı Tipi – Instagram İçin Havalı Yazı Fontları',
  description: 'Instagram bio, gönderi ve hikayeler için en güzel insta yazı tipi fontlarını hemen oluştur.',
  keywords: 'insta yazı tipi, instagram yazı tipi, instagram fontları, insta bio yazı tipi, instagram şekilli yazı, havalı instagram yazıları, instagram font, instagram bio font',
  authors: [{ name: 'Stilleri Pro' }],
  openGraph: {
    title: 'Insta Yazı Tipi – Instagram İçin Havalı Yazı Fontları',
    description: 'Instagram bio, gönderi ve hikayeler için en güzel insta yazı tipi fontlarını hemen oluştur.',
    type: 'website',
    locale: 'tr_TR',
    url: 'https://yazı-stilleripro.com.tr/insta-yazi-tipi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insta Yazı Tipi – Instagram İçin Havalı Yazı Fontları',
    description: 'Instagram bio, gönderi ve hikayeler için en güzel insta yazı tipi fontlarını hemen oluştur.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://yazı-stilleripro.com.tr/insta-yazi-tipi',
  },
}

export default function InstaYaziTipiPage() {
  return <InstaYaziTipiClient />
}
