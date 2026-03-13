"use client"

import Link from 'next/link'
import NextImage from 'next/image'
import { translations, Language } from '@/lib/translations'

interface HeaderProps {
    lang: Language;
    setLang: (lang: Language) => void;
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export default function Header({
    lang,
    setLang,
    darkMode,
    setDarkMode,
    isMobileMenuOpen,
    setIsMobileMenuOpen
}: HeaderProps) {
    const t = translations[lang];

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <Link href="/" className="logo-container">
                        <div className="logo-wrapper">
                            <NextImage
                                src="/logo.svg"
                                alt={t.common.logoAlt || 'Stilleri Pro Logo'}
                                width={180}
                                height={40}
                                className="logo-image"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="nav desktop-nav">
                        <Link href="/insta-yazi-tipi" className="nav-link">
                            {t.common.nav.insta}
                        </Link>
                        <Link href="/tiktok-yazi-stilleri" className="nav-link">
                            {t.common.nav.tiktok}
                        </Link>
                        <Link href="/discord-yazi-stilleri" className="nav-link">
                            {t.common.nav.discord}
                        </Link>
                        <Link href="/sekilli-semboller" className="nav-link">
                            {t.common.nav.symbols}
                        </Link>
                        <Link href="/pubg-sekilli-nick" className="nav-link">
                            {t.common.nav.pubg}
                        </Link>
                    </nav>

                    {/* Right Actions: Theme Toggle, Lang Toggle & Hamburger */}
                    <div className="header-actions">
                        <button
                            className="lang-toggle-btn"
                            onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
                            aria-label="Toggle Language"
                            title={lang === 'tr' ? 'Switch to English' : 'Türkçeye Geç'}
                        >
                            <span className="lang-icon">🌐</span>
                            <span className="lang-text">{lang === 'tr' ? 'EN' : 'TR'}</span>
                        </button>

                        <button
                            className="dark-mode-toggle"
                            onClick={() => setDarkMode(!darkMode)}
                            aria-label="Toggle Dark Mode"
                        >
                            {darkMode ? '☀️' : '🌙'}
                        </button>

                        <button
                            className={`hamburger-btn ${isMobileMenuOpen ? 'active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}></div>
            <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <div className="mobile-menu-header">
                    <span className="mobile-menu-title">Menu</span>
                    <button className="close-menu-btn" onClick={() => setIsMobileMenuOpen(false)}>✕</button>
                </div>
                <nav className="mobile-nav">
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
                    <div className="mobile-lang-switch">
                        <button
                            className={`mobile-lang-btn ${lang === 'tr' ? 'active' : ''}`}
                            onClick={() => { setLang('tr'); setIsMobileMenuOpen(false); }}
                        >TR</button>
                        <button
                            className={`mobile-lang-btn ${lang === 'en' ? 'active' : ''}`}
                            onClick={() => { setLang('en'); setIsMobileMenuOpen(false); }}
                        >EN</button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
