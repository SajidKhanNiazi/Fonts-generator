"use client"

import Link from 'next/link'
import { translations, Language } from '@/lib/translations'

interface FooterProps {
    lang: Language;
}

export default function Footer({ lang }: FooterProps) {
    const t = translations[lang];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-links">
                        <Link href="/" className="footer-link">
                            {t.common.nav.home}
                        </Link>
                        <Link href="/insta-yazi-tipi" className="footer-link">
                            {t.common.nav.insta}
                        </Link>
                        <Link href="/tiktok-yazi-stilleri" className="footer-link">
                            {t.common.nav.tiktok}
                        </Link>
                        <Link href="/discord-yazi-stilleri" className="footer-link">
                            {t.common.nav.discord}
                        </Link>
                        <Link href="/sekilli-semboller" className="footer-link">
                            {t.common.nav.symbols}
                        </Link>
                        <Link href="/pubg-sekilli-nick" className="footer-link">
                            {t.common.nav.pubg}
                        </Link>
                        <Link href="/el-yazisi" className="footer-link">
                            {t.common.nav.elYazisi}
                        </Link>
                        <Link href="/gizlilik-politikasi" className="footer-link">
                            {lang === 'tr' ? 'Gizlilik Politikası' : 'Privacy Policy'}
                        </Link>
                        <Link href="/kullanim-kosullari" className="footer-link">
                            {lang === 'tr' ? 'Kullanım Koşulları' : 'Terms of Use'}
                        </Link>
                        <Link href="/hakkimizda" className="footer-link">
                            {lang === 'tr' ? 'Hakkımızda' : 'About Us'}
                        </Link>
                    </div>
                    <div className="footer-text">
                        {t.common.footer.rights}
                    </div>
                </div>
            </div>
        </footer>
    );
}
