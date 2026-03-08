import type { Metadata } from 'next'
import ElYazisiClient from './ElYazisiClient'

export const metadata: Metadata = {
    title: 'El Yazısı Fontları Oluşturucu — Anında Kopyala & Yapıştır',
    description: 'El yazısı fontlarını saniyeler içinde oluşturun. 500\'den fazla stil, tam Türkçe karakter desteği. Yaz, kopyala, Instagram\'a yapıştır. Ücretsiz ve indirmesiz.',
    keywords: 'el yazısı fontları, handwriting fonts, el yazısı fontu, handwriting font, el yazısı stilleri, cursive font, el yazısı generator, türkçe el yazısı',
    authors: [{ name: 'Stilleri Pro' }],
    openGraph: {
        title: 'El Yazısı Fontları Oluşturucu — Anında Kopyala & Yapıştır',
        description: 'El yazısı fontlarını saniyeler içinde oluşturun. 500\'den fazla stil, tam Türkçe karakter desteği. Yaz, kopyala, Instagram\'a yapıştır. Ücretsiz ve indirmesiz.',
        type: 'website',
        locale: 'tr_TR',
        url: 'https://xn--yaz-stilleripro-9kc.com.tr/el-yazisi',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'El Yazısı Fontları Oluşturucu — Anında Kopyala & Yapıştır',
        description: 'El yazısı fontlarını saniyeler içinde oluşturun. 500\'den fazla stil, tam Türkçe karakter desteği.',
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: 'https://xn--yaz-stilleripro-9kc.com.tr/el-yazisi',
    },
}

export default function ElYazisiPage() {
    return <ElYazisiClient />
}
