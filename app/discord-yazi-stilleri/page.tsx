import type { Metadata } from 'next'
import DiscordYaziStilleriClient from './DiscordYaziStilleriClient'

export const metadata: Metadata = {
    title: 'Discord Yazı Stilleri – Kopyala & Yapıştır Font Generator',
    description: 'Discord yazı stilleri oluşturucu. Discord sohbetleri, sunucu isimleri ve biyografileri için 40+ şık Unicode yazı tipini anında oluşturun, kopyalayın ve yapıştırın. Ücretsiz ve hızlı!',
    keywords: 'discord yazı stilleri, discord font generator, discord şekilli yazı, discord yazı tipi, discord unicode font, discord metin stili',
    authors: [{ name: 'Stilleri Pro' }],
    openGraph: {
        title: 'Discord Yazı Stilleri – Kopyala & Yapıştır Font Generator',
        description: 'Discord sohbetleri ve sunucu isimleri için 40+ şık Unicode yazı tipini anında oluşturun. Kopyala & yapıştır, ücretsiz!',
        type: 'website',
        locale: 'tr_TR',
        url: 'https://yazı-stilleripro.com.tr/discord-yazi-stilleri',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Discord Yazı Stilleri – Kopyala & Yapıştır Font Generator',
        description: 'Discord sohbetleri ve sunucu isimleri için 40+ şık Unicode yazı tipini anında oluşturun. Kopyala & yapıştır, ücretsiz!',
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: 'https://yazı-stilleripro.com.tr/discord-yazi-stilleri',
    },
}

export default function DiscordYaziStilleriPage() {
    return <DiscordYaziStilleriClient />
}
