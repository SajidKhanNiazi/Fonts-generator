'use client'

import { useState, useEffect, useMemo } from 'react'
import dynamic from 'next/dynamic'
import { fontStyles } from '@/lib/fontStyles'
import { translations, Language } from '@/lib/translations'
import Link from 'next/link'
import NextImage from 'next/image'

const SeoSections = dynamic(() => import('./components/SeoSections'), { ssr: true })
const FaqAccordion = dynamic(() => import('./components/FaqAccordion'), { ssr: true })

export default function Home() {
  const [lang, setLang] = useState<Language>('tr')
  const [inputText, setInputText] = useState('Merhaba Dünya')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [showToast, setShowToast] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Mark component as mounted (client-side only)
  useEffect(() => {
    setMounted(true)
    const savedDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(savedDarkMode)

    // Ripple effect handler
    const handleRipple = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const rippleTarget = target.closest('.nav-link, .mobile-nav-link, .btn-primary, .dark-mode-toggle, .hamburger-btn, .close-menu-btn, .font-card, .symbol-card');

      if (rippleTarget) {
        const rect = rippleTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.className = 'ripple-effect';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        rippleTarget.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 600);
      }
    };

    document.addEventListener('mousedown', handleRipple);
    return () => {
      document.removeEventListener('mousedown', handleRipple);
    }
  }, [])

  // Scroll reveal animation
  useEffect(() => {
    if (!mounted) return

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    // Re-run whenever the DOM might change
    const updateObservers = () => {
      const revealElements = document.querySelectorAll('.reveal')
      revealElements.forEach((el) => observer.observe(el))
    }

    updateObservers()

    // Mutation observer to handle dynamically added elements
    const mutationObserver = new MutationObserver(updateObservers)
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [mounted])

  // Save dark mode to localStorage and apply to document
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('darkMode', JSON.stringify(darkMode))
      if (darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [darkMode, mounted])

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      setShowToast(true)
      setTimeout(() => setCopiedId(null), 2000)
      setTimeout(() => setShowToast(false), 3000)
    } catch (err) {
      console.error('Copy error:', err)
    }
  }

  // Get all font styles
  const filteredFontStyles = useMemo(() => {
    return fontStyles
  }, [])

  // Get all unique categories from filtered fonts
  const categories = useMemo(() => {
    return Array.from(new Set(filteredFontStyles.map(s => s.category)))
  }, [filteredFontStyles])

  // Function to handle category click
  const showFontsByCategory = (category: string) => {
    setSelectedCategory(category)
    // Scroll to the category section
    setTimeout(() => {
      const categoryElement = document.querySelector(`[data-category="${category}"]`)
      if (categoryElement) {
        const headerOffset = 140
        const elementPosition = categoryElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      }
    }, 100)
  }

  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Stilleri Pro",
      "description": "Türkçe metin stil dönüştürücü aracı. Instagram, WhatsApp, Facebook için özel font stilleri.",
      "url": "https://yazı-stilleripro.com.tr",
      "applicationCategory": "UtilityApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "TRY"
      }
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    script.id = 'structured-data'
    document.head.appendChild(script)

    return () => {
      const existingScript = document.getElementById('structured-data')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  const t = translations[lang]

  return (
    <div className={mounted && darkMode ? 'dark' : ''}>
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
                  style={{ height: 'auto' }}
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

      <main className="main">
        {/* Full-Screen Hero Section (Moved outside container) */}
        <div className="hero-section-fullscreen">
          {/* Animated Background */}
          <div className="hero-bg-fullscreen">
            <div className="hero-gradient-animated"></div>
            <div className="hero-particles-animated">
              <div className="particle particle-1">✨</div>
              <div className="particle particle-2">🎨</div>
              <div className="particle particle-3">⭐</div>
              <div className="particle particle-4">💫</div>
              <div className="particle particle-5">🌟</div>
              <div className="particle particle-6">✦</div>
              <div className="particle particle-7">💎</div>
              <div className="particle particle-8">🔮</div>
            </div>
            <div className="hero-shapes-animated">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
              <div className="shape shape-4"></div>
            </div>
          </div>

          <div className="hero-content-fullscreen">
            {/* Badge */}
            <div className="hero-badge-modern">
              <span className="badge-pulse"></span>
              <span className="badge-icon">🚀</span>
              <span className="badge-text">{t.home.hero.badge}</span>
            </div>

            {/* Main Title */}
            <h1 className="hero-title-fullscreen">
              <span className="title-line-animated">
                <span className="title-word-animated">{t.home.hero.title}</span>
                <span className="title-word-animated highlight-gradient">{t.home.hero.titleHighlight}</span>
              </span>
            </h1>

            {/* Description */}
            <p className="hero-description-fullscreen">
              {t.home.hero.description}
            </p>

            {/* Premium Input Section */}
            <div className="hero-input-fullscreen">
              <div className="input-glow-effect"></div>
              <div className="input-container-glass">
                {/* Input Header */}
                <div className="input-header-premium">
                  <div className="input-icon-premium">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 17L12 22L22 17" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 12L12 17L22 12" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <defs>
                        <linearGradient id="gradient1" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="input-header-text-premium">
                    <div className="input-title-simple">{t.home.hero.inputTitle}</div>
                    <p>{t.home.hero.inputSub}</p>
                  </div>
                </div>

                {/* Input Field */}
                <div className="input-field-premium">
                  <textarea
                    id="text-input"
                    className="text-input-premium"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder={t.home.hero.inputPlaceholder}
                    rows={2}
                    maxLength={500}
                  />
                  <button
                    className="clear-btn-premium"
                    onClick={() => setInputText('')}
                    style={{ opacity: inputText ? 1 : 0, pointerEvents: inputText ? 'auto' : 'none' }}
                    aria-label={t.common.clear}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                {/* Input Footer */}
                <div className="input-footer-premium">
                  <div className="turkish-chars-premium">
                    <div className="chars-group">
                      <span className="char-badge-premium">ç</span>
                      <span className="char-badge-premium">ğ</span>
                      <span className="char-badge-premium">ı</span>
                      <span className="char-badge-premium">İ</span>
                      <span className="char-badge-premium">ö</span>
                      <span className="char-badge-premium">ş</span>
                      <span className="char-badge-premium">ü</span>
                    </div>
                    <span className="char-label-premium">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {t.common.charsSupported}
                    </span>
                  </div>
                  <div className={`char-counter-premium ${inputText.length > 400 ? 'warning' : ''} ${inputText.length > 480 ? 'danger' : ''}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span className="counter-text">{inputText.length} / 500</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats - Centered Container */}
            <div className="hero-stats-fullscreen">
              <div className="stat-item-premium">
                <div className="stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="url(#statGradient1)" />
                    <defs>
                      <linearGradient id="statGradient1" x1="2" y1="2" x2="22" y2="22">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#6366f1" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="stat-content">
                  <span className="stat-number-premium">100+</span>
                  <span className="stat-label-premium">{t.home.hero.stat1}</span>
                </div>
              </div>
              <div className="stat-divider-premium"></div>
              <div className="stat-item-premium">
                <div className="stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" fill="url(#statGradient2)" />
                    <defs>
                      <linearGradient id="statGradient2" x1="3" y1="3" x2="21" y2="21">
                        <stop offset="0%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#f472b6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="stat-content">
                  <span className="stat-number-premium">6</span>
                  <span className="stat-label-premium">{t.home.hero.stat2}</span>
                </div>
              </div>
              <div className="stat-divider-premium"></div>
              <div className="stat-item-premium">
                <div className="stat-icon">🇹🇷</div>
                <div className="stat-content">
                  <span className="stat-number-premium">%100</span>
                  <span className="stat-label-premium">{t.home.hero.stat3}</span>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className="container">
          {/* Sticky Category Navigation */}
          <div className="sticky-category-nav">
            <div className="category-nav-scroll">
              <button
                className={`category-nav-button ${selectedCategory === null ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(null)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                {t.common.all}
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-nav-button ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => showFontsByCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>


          {(() => {
            // Filter categories if a category is selected
            const filteredCategories = selectedCategory
              ? categories.filter(c => c === selectedCategory)
              : categories

            return filteredCategories.map(category => {
              const categoryFonts = filteredFontStyles.filter(style => style.category === category)
              if (categoryFonts.length === 0) return null

              const visibleFontsList = categoryFonts

              return (
                <div key={category} className="category-section" data-category={category}>
                  <div className="category-header" data-category={category}>
                    {category === 'Instagram Yazı Stilleri' ? (
                      <Link
                        href="/insta-yazi-tipi"
                        className="category-link-heading"
                        style={{
                          color: 'inherit',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          transition: 'color 0.2s ease'
                        }}
                      >
                        {category}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="heading-link-icon">
                          <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    ) : (
                      category
                    )}
                    <span className="category-count">{categoryFonts.length}</span>
                  </div>
                  <div className="font-grid">
                    {visibleFontsList.map((style) => {
                      const transformedText = style.transform(inputText)
                      const isCopied = copiedId === style.id

                      return (
                        <div key={style.id} className={`font-card glass-card ${style.popular ? 'popular' : ''}`}>
                          <div className="font-card-header">
                            <div className="font-card-title">
                              <div className="font-name">
                                {style.name}
                                {style.popular && <span className="popular-badge">🔥 {t.common.popular}</span>}
                              </div>
                            </div>
                          </div>

                          <div className="font-preview">{transformedText || t.common.exampleText}</div>
                          <button
                            className={`copy-button ${isCopied ? 'copied' : ''}`}
                            onClick={() => handleCopy(transformedText, style.id)}
                          >
                            {isCopied ? t.common.copied : t.common.copy}
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })
          })()}

          {/* ============ COMPREHENSIVE SEO CONTENT SECTIONS ============ */}
          <SeoSections sections={t.home.sections.filter((s: any) => s.type !== 'faq')} />

          {/* ============ FAQ SECTION ============ */}
          {t.home.sections.find((s: any) => s.type === 'faq') && (
            <FaqAccordion
              title={t.home.sections.find((s: any) => s.type === 'faq').title}
              faqs={t.home.sections.find((s: any) => s.type === 'faq').faqs}
            />
          )}

        </div>
      </main>

      {showToast && (
        <div className="toast">
          <span className="toast-icon">✓</span>
          <span>Kopyalandı!</span>
        </div>
      )}

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
              <Link href="/gizlilik-politikasi" className="footer-link">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim-kosullari" className="footer-link">
                Kullanım Koşulları
              </Link>
              <Link href="/hakkimizda" className="footer-link">
                Hakkımızda
              </Link>
            </div>
            <div className="footer-text">
              © 2026 Yazı Stilleri. Tüm hakları saklıdır.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
