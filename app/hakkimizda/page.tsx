'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import NextImage from 'next/image'
import { Language, translations } from '@/lib/translations'

export default function Hakkimizda() {
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

      <main className="main">
        <div className="page-container">
          <h1 className="page-title">Hakkımızda</h1>

          <div className="page-content">
            <h2>Yazı Stilleri Nedir?</h2>
            <p>
              Stilleri Pro, Türkçe kullanıcılar için özel olarak tasarlanmış, ücretsiz bir metin stil dönüştürücü aracıdır.
              Amacımız, kullanıcıların metinlerini Instagram, WhatsApp, Facebook ve diğer sosyal medya platformlarında
              daha dikkat çekici ve özel hale getirmelerine yardımcı olmaktır.
            </p>

            <h2>Misyonumuz</h2>
            <p>
              Türkçe dilinin zenginliğini ve özel karakterlerini (ç, ğ, ı, İ, ö, ş, ü) koruyarak, kullanıcılarımıza
              en iyi yazı stil dönüştürme deneyimini sunmak. Herkesin metinlerini kolayca özelleştirebilmesi ve
              sosyal medyada kendini daha iyi ifade edebilmesi için çalışıyoruz.
            </p>

            <h2>Özelliklerimiz</h2>
            <ul>
              <li><strong>Tam Türkçe Desteği:</strong> Tüm Türkçe karakterler mükemmel çalışır</li>
              <li><strong>Çok Çeşitli Stiller:</strong> 20+ farklı yazı stili seçeneği</li>
              <li><strong>Anında Dönüşüm:</strong> Metninizi yazdığınız anda tüm stillerde görün</li>
              <li><strong>Tek Tıkla Kopyalama:</strong> Kolay kopyalama özelliği</li>
              <li><strong>Tamamen Ücretsiz:</strong> Hiçbir ücret veya kayıt gerektirmez</li>
              <li><strong>Mobil Uyumlu:</strong> Tüm cihazlarda mükemmel çalışır</li>
            </ul>

            <h2>Neden Stilleri Pro?</h2>
            <p>
              Sosyal medya platformlarında metinlerinizi öne çıkarmak için özel font stilleri kullanmak artık çok popüler.
              Ancak çoğu araç Türkçe karakterleri düzgün desteklemiyor. Biz, Türkçe kullanıcıların ihtiyaçlarını anlayarak
              bu aracı geliştirdik ve sürekli olarak iyileştirmeye devam ediyoruz.
            </p>

            <h2>İletişim</h2>
            <p>
              Sorularınız, önerileriniz veya geri bildirimleriniz için bizimle iletişime geçebilirsiniz.
              Kullanıcı deneyimini iyileştirmek için sürekli çalışıyoruz ve görüşleriniz bizim için çok değerli.
            </p>

            <h2>Gizlilik ve Güvenlik</h2>
            <p>
              Stilleri Pro tamamen güvenlidir. Metinleriniz hiçbir şekilde sunucularımıza gönderilmez veya saklanmaz.
              Tüm dönüşümler tarayıcınızda, cihazınızda gerçekleşir. Gizliliğiniz bizim için önemlidir.
            </p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-links">
              <Link href="/" className="footer-link">
                Ana Sayfa
              </Link>
              <Link href="/insta-yazi-tipi" className="footer-link">
                İnstagram Yazı Tipi
              </Link>
              <Link href="/tiktok-yazi-stilleri" className="footer-link">
                TikTok Yazı Stilleri
              </Link>
              <Link href="/discord-yazi-stilleri" className="footer-link">
                Discord Yazı Stilleri
              </Link>
              <Link href="/sekilli-semboller" className="footer-link">
                Şekilli Semboller
              </Link>
              <Link href="/pubg-sekilli-nick" className="footer-link">
                PUBG Şekilli Nick
              </Link>
              <Link href="/hakkimizda" className="footer-link">
                Hakkımızda
              </Link>
              <Link href="/gizlilik-politikasi" className="footer-link">
                Gizlilik Politikası
              </Link>
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
