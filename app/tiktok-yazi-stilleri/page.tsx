import type { Metadata } from 'next'
import TikTokYaziStilleriClient from './TikTokYaziStilleriClient'

// SEO Metadata for the TikTok Font Styles page
export const metadata: Metadata = {
    title: 'TikTok Yazı Stilleri – 500+ Estetik ve Viral Yazı Tipi (2026)',
    description: 'TikTok yazı stilleri. TikTok\'ta Keşfet\'e çıkmak veya FYP\'ye düşmek istiyorsanız profiliniz farklı görünmelidir. Bionuzu ve videolarınızı 500\'den fazla estetik ve viral yazı tipiyle süsleyin.',
    keywords: 'tiktok yazı stilleri, tiktok estetik fontlar, tiktok viral fontlar, tiktok bio yazıları, tiktok şekilli yazı',
    authors: [{ name: 'Stilleri Pro' }],
    openGraph: {
        title: 'TikTok Yazı Stilleri – 500+ Estetik ve Viral Yazı Tipi (2026)',
        description: 'TikTok yazı stilleri. TikTok\'ta Keşfet\'e çıkmak veya FYP\'ye düşmek istiyorsanız profiliniz farklı görünmelidir. Bionuzu ve videolarınızı 500\'den fazla estetik ve viral yazı tipiyle süsleyin.',
        type: 'website',
        locale: 'tr_TR',
        url: 'https://yazı-stilleripro.com.tr/tiktok-yazi-stilleri',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'TikTok Yazı Stilleri – 500+ Estetik ve Viral Yazı Tipi (2026)',
        description: 'TikTok yazı stilleri. TikTok\'ta Keşfet\'e çıkmak veya FYP\'ye düşmek istiyorsanız profiliniz farklı görünmelidir. Bionuzu ve videolarınızı 500\'den fazla estetik ve viral yazı tipiyle süsleyin.',
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: 'https://yazı-stilleripro.com.tr/tiktok-yazi-stilleri',
    },
}

export default function TikTokYaziStilleriPage() {
    return <TikTokYaziStilleriClient />
}
