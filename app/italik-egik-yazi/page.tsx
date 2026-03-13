import type { Metadata } from 'next'
import ItalikEgikYaziClient from './ItalikEgikYaziClient'

export const metadata: Metadata = {
    title: 'İtalik Yazı Oluşturucu Rehberi – Şık Eğik Metin Kopyala Yapıştır',
    description: 'İtalik yazının ne olduğunu, nasıl şık eğik metinler oluşturulacağını ve Instagram, WhatsApp, Discord ve oyun kullanıcı adlarında nerede kullanılacağını öğrenin.',
    keywords: 'italik yazı, eğik yazı, italik font generator, eğik yazı stilleri, italik yazı tipi, şık italik yazı, el yazısı fontları',
    authors: [{ name: 'Stilleri Pro' }],
    openGraph: {
        title: 'İtalik Yazı Oluşturucu Rehberi – Şık Eğik Metin Kopyala Yapıştır',
        description: 'İtalik yazının ne olduğunu, nasıl şık eğik metinler oluşturulacağını ve Instagram, WhatsApp, Discord ve oyun kullanıcı adlarında nerede kullanılacağını öğrenin.',
        type: 'website',
        locale: 'tr_TR',
        url: 'https://yazı-stilleripro.com.tr/italik-egik-yazi',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'İtalik Yazı Oluşturucu Rehberi – Şık Eğik Metin Kopyala Yapıştır',
        description: 'İtalik yazının ne olduğunu, nasıl şık eğik metinler oluşturulacağını ve Instagram, WhatsApp, Discord ve oyun kullanıcı adlarında nerede kullanılacağını öğrenin.',
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: 'https://yazı-stilleripro.com.tr/italik-egik-yazi',
    },
}

export default function ItalikEgikYaziPage() {
    return <ItalikEgikYaziClient />
}
