import { Metadata } from 'next'
import BoldYaziStilleriClient from './BoldYaziStilleriClient'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Kalın Yazı Stili – Kopyala ve Yapıştır Bold Yazı Oluşturucu',
    description: 'Kalın yazı stili oluşturucu ile normal metninizi saniyeler içinde bold yazıya dönüştürün. Instagram, Discord ve sosyal medya için kopyala yapıştır kalın yazı stillerini hemen kullanın.',
    keywords: 'kalın yazı, bold yazma, şekilli kalın yazı, kalın fontlar, bold font generator, instagram kalın yazı',
    openGraph: {
      title: 'Kalın Yazı Stili – Kopyala ve Yapıştır Bold Yazı Oluşturucu',
      description: 'Kalın yazı stili oluşturucu ile normal metninizi saniyeler içinde bold yazıya dönüştürün.',
      type: 'website',
    }
  }
}

export default function BoldYaziStilleriPage() {
  return <BoldYaziStilleriClient />
}
