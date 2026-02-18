'use client'

import { useState, useEffect, useMemo } from 'react'
import { fontStyles } from '@/lib/fontStyles'
import { translations, Language } from '@/lib/translations'
import Link from 'next/link'
import NextImage from 'next/image'

export default function Home() {
  const [lang, setLang] = useState<Language>('tr')
  const [inputText, setInputText] = useState('Merhaba Dünya')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [showToast, setShowToast] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Toggle FAQ accordion
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

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

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
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
      "url": "https://stilleripro.com.tr",
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
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="nav desktop-nav">
              <Link href="/insta-yazi-tipi" className="nav-link">
                {t.common.nav.insta}
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
                    <h2>{t.home.hero.inputTitle}</h2>
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
                  <h2 className="category-header">
                    {category}
                    <span className="category-count">{categoryFonts.length}</span>
                  </h2>
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
          {t.home.sections.map((section: any) => (
            <div key={section.id} className="info-box reveal">
              <h2 className="section-main-title">{section.title}</h2>
              <div className="content-intro">
                {section.type === 'text' && (
                  <p className="intro-text" dangerouslySetInnerHTML={{ __html: section.content }} />
                )}

                {section.type === 'features' && (
                  <div className="feature-cards-grid" style={{ marginTop: '1.5rem' }}>
                    {section.features.map((feature: any, idx: number) => (
                      <div key={idx} className="feature-card gradient-purple">
                        <div className="feature-card-icon">{feature.icon}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.type === 'fontFeatures' && (
                  <div className="feature-cards-grid" style={{ marginTop: '1rem' }}>
                    {section.features.map((feature: any, idx: number) => (
                      <div key={idx} className={`feature-card ${feature.gradient}`}>
                        <span className="example-text" style={{ fontSize: '1.25rem' }}>{feature.text}</span>
                        <p>{feature.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.type === 'steps' && (
                  <div className="detailed-steps" style={{ gap: '2rem', marginTop: '1.5rem' }}>
                    {section.steps.map((step: any, idx: number) => (
                      <div key={idx} className="detailed-step" style={{
                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(139, 92, 246, 0.02))',
                        borderLeft: '4px solid #8b5cf6',
                        padding: '2rem',
                        borderRadius: '1rem',
                        transition: 'all 0.3s ease'
                      }}>
                        <div className="step-visual">
                          <div className="step-number-large" style={{
                            background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
                            boxShadow: '0 8px 20px rgba(139, 92, 246, 0.3)',
                            fontSize: '2rem',
                            fontWeight: '800'
                          }}>{step.number}</div>
                          <div className="step-icon-circle" style={{
                            fontSize: '2.5rem',
                            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05))',
                            padding: '1rem',
                            borderRadius: '50%'
                          }}>{step.icon}</div>
                        </div>
                        <div className="step-details">
                          <h3 style={{
                            color: '#8b5cf6',
                            fontSize: '1.5rem',
                            marginBottom: '0.75rem',
                            fontWeight: '700'
                          }}>{step.title}</h3>
                          <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {section.type === 'fontTypes' && (
                  <div className="font-types-grid">
                    {section.types.map((type: any, idx: number) => (
                      <div key={idx} className="font-type-card glass-card-hover">
                        <span className="font-type-icon">{type.icon}</span>
                        <h3 className="font-type-title">{type.title}</h3>
                        <p className="font-type-desc">{type.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.type === 'categoriesList' && (
                  <div className="detailed-steps" style={{ gridTemplateColumns: '1fr' }}>
                    {section.categories.map((cat: any, idx: number) => (
                      <div key={idx} className="detailed-step" style={{ padding: '1rem' }}>
                        <p><strong>{cat.title}</strong> {cat.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

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
