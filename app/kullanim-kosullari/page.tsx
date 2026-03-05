'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import NextImage from 'next/image'
import { Language, translations } from '@/lib/translations'

export default function KullanimKosullari() {
    const [lang, setLang] = useState<Language>('tr')
    const [darkMode, setDarkMode] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        setMounted(true)
        const savedDarkMode = localStorage.getItem('darkMode') === 'true'
        setDarkMode(savedDarkMode)
    }, [])

    useEffect(() => {
        if (mounted) {
            localStorage.setItem('darkMode', JSON.stringify(darkMode))
            if (darkMode) document.documentElement.classList.add('dark')
            else document.documentElement.classList.remove('dark')
        }
    }, [darkMode, mounted])

    const t = translations[lang]

    return (
        <div className={mounted && darkMode ? 'dark' : ''}>
            <header className="header">
                <div className="container">
                    <div className="header-content">
                        <Link href="/" className="logo-container">
                            <div className="logo-wrapper">
                                <NextImage src="/logo.svg" alt={t.common.logoAlt || 'Stilleri Pro Logo'} width={180} height={40} className="logo-image" style={{ height: 'auto' }} priority />
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="nav desktop-nav">
                            <Link href="/" className="nav-link">{t.common.nav.home}</Link>
                            <Link href="/insta-yazi-tipi" className="nav-link">{t.common.nav.insta}</Link>
                            <Link href="/tiktok-yazi-stilleri" className="nav-link">{t.common.nav.tiktok}</Link>
                            <Link href="/discord-yazi-stilleri" className="nav-link">{t.common.nav.discord}</Link>
                            <Link href="/sekilli-semboller" className="nav-link">{t.common.nav.symbols}</Link>
                            <Link href="/pubg-sekilli-nick" className="nav-link">{t.common.nav.pubg}</Link>
                        </nav>

                        {/* Right Actions */}
                        <div className="header-actions">
                            <button className="lang-toggle-btn" onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')} aria-label={lang === 'tr' ? 'Switch to English' : 'Türkçeye Geç'} title={lang === 'tr' ? 'Switch to English' : 'Türkçeye Geç'}>
                                <span className="lang-icon">🌐</span><span className="lang-text">{lang === 'tr' ? 'EN' : 'TR'}</span>
                            </button>
                            <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle Dark Mode">{darkMode ? '☀️' : '🌙'}</button>
                            <button className={`hamburger-btn ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu"><span></span><span></span><span></span></button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}></div>
                <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <div className="mobile-menu-header"><span className="mobile-menu-title">{t.common.nav.menu}</span><button className="close-menu-btn" onClick={() => setIsMobileMenuOpen(false)}>✕</button></div>
                    <nav className="mobile-nav">
                        <Link href="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                            <span className="nav-icon">🏠</span> {t.common.nav.home}
                        </Link>
                        <Link href="/insta-yazi-tipi" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                            <span className="nav-icon">📸</span> {t.common.nav.insta}
                        </Link>
                        <Link href="/tiktok-yazi-stilleri" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                            <span className="nav-icon">🎵</span> {t.common.nav.tiktok}
                        </Link>
                        <Link href="/discord-yazi-stilleri" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                            <span className="nav-icon">🎮</span> {t.common.nav.discord}
                        </Link>
                        <Link href="/sekilli-semboller" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                            <span className="nav-icon">🎨</span> {t.common.nav.symbols}
                        </Link>
                        <Link href="/pubg-sekilli-nick" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                            <span className="nav-icon">🎯</span> {t.common.nav.pubg}
                        </Link>
                    </nav>
                </div>
            </header>

            <main className="main flex-grow">
                <div className="page-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 1.5rem' }}>
                    <h1 className="page-title" style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '2rem', textAlign: 'center', background: 'linear-gradient(135deg, #8b5cf6, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Kullanım Koşulları</h1>

                    <div className="page-content" style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                        <section style={{ marginBottom: '2.5rem' }}>
                            <p>
                                Stilleri Pro ("biz", "bize" veya "bizim") tarafından işletilen web sitemizi ziyaret ettiğiniz için teşekkür ederiz.
                                Bu web sitesini kullanarak, aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız.
                                Lütfen hizmetlerimizi kullanmadan önce bu koşulları dikkatlice okuyunuz.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem' }}>1. Hizmet Kullanımı</h2>
                            <p>
                                Stilleri Pro, kullanıcıların metinlerini farklı yazı tiplerine dönüştürmelerine olanak tanıyan ücretsiz bir çevrimiçi araçtır.
                                Hizmetimiz yalnızca yasal amaçlar için kullanılabilir.
                                Web sitemizi kullanarak, üçüncü şahısların haklarını ihlal etmeyeceğinizi ve yasalara aykırı içerik üretmeyeceğinizi taahhüt edersiniz.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem' }}>2. Fikri Mülkiyet</h2>
                            <p>
                                Web sitemizde kullanılan yazılım, tasarım, metinler ve logolar Stilleri Pro'ya aittir veya lisanslıdır.
                                Bu içeriklerin izinsiz kopyalanması, çoğaltılması veya dağıtılması yasaktır.
                                Oluşturduğunuz şık metinleri kişisel veya ticari amaçlarla sosyal medya platformlarında özgürce kullanabilirsiniz.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem' }}>3. Sorumluluk Reddi</h2>
                            <p>
                                Hizmetimiz "olduğu gibi" sunulmaktadır. Stilleri Pro, hizmetin kesintisiz veya hatasız olacağını garanti etmez.
                                Metin dönüşümleri sırasında oluşabilecek veri kayıplarından veya yanlış gösterimlerden sorumlu tutulamaz.
                                Farklı platformların (Instagram, WhatsApp vb.) belirli Unicode karakterlerini desteklememesi bizim kontrolümüz dışındadır.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem' }}>4. Gizlilik</h2>
                            <p>
                                Gizliliğiniz bizim için önemlidir. Dönüştürdüğünüz metinler sunucularımızda saklanmaz; tüm işlemler tarayıcınızda gerçekleşir.
                                Daha fazla bilgi için lütfen <Link href="/gizlilik-politikasi" style={{ color: '#8b5cf6', textDecoration: 'underline' }}>Gizlilik Politikamızı</Link> inceleyin.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem' }}>5. Değişiklikler</h2>
                            <p>
                                Stilleri Pro, bu kullanım koşullarını dilediği zaman güncelleme hakkını saklı tutar.
                                Değişiklikler web sitesinde yayınlandığı andan itibaren geçerli olur.
                                Hizmetimizi kullanmaya devam ederek güncel koşulları kabul etmiş sayılırsınız.
                            </p>
                        </section>

                        <section style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', textAlign: 'center' }}>
                            <p>
                                Sorularınız için bizimle iletişime geçmekten çekinmeyin.
                            </p>
                            <div style={{ marginTop: '1rem' }}>
                                <Link href="/" style={{ display: 'inline-block', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', background: '#8b5cf6', color: 'white', fontWeight: '600', textDecoration: 'none' }}>Ana Sayfaya Dön</Link>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-links">
                            <Link href="/" className="footer-link">Ana Sayfa</Link>
                            <Link href="/insta-yazi-tipi" className="footer-link">İnstagram Yazı Tipi</Link>
                            <Link href="/tiktok-yazi-stilleri" className="footer-link">TikTok Yazı Stilleri</Link>
                            <Link href="/discord-yazi-stilleri" className="footer-link">Discord Yazı Stilleri</Link>
                            <Link href="/sekilli-semboller" className="footer-link">Şekilli Semboller</Link>
                            <Link href="/pubg-sekilli-nick" className="footer-link">PUBG Şekilli Nick</Link>
                            <Link href="/hakkimizda" className="footer-link">Hakkımızda</Link>
                            <Link href="/gizlilik-politikasi" className="footer-link">Gizlilik Politikası</Link>
                            <Link href="/kullanim-kosullari" className="footer-link">Kullanım Koşulları</Link>
                        </div>
                        <div className="footer-text">
                            © 2026 Stilleri Pro. Tüm hakları saklıdır.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
