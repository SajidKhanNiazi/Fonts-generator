'use client'

import { useState, useEffect, useMemo } from 'react'
import { fontStyles } from '@/lib/fontStyles'
import Link from 'next/link'

export default function Home() {
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
      "name": "Yazı Stilleri",
      "description": "Türkçe metin stil dönüştürücü aracı. Instagram, WhatsApp, Facebook için özel font stilleri.",
      "url": "https://yazistilleri.com",
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

  return (
    <div className={mounted && darkMode ? 'dark' : ''}>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link href="/" className="logo">
              ✨ Font Styles
            </Link>

            {/* Desktop Navigation */}
            <nav className="nav desktop-nav">
              <Link href="/insta-yazi-tipi" className="nav-link">
                Insta Font
              </Link>
              <Link href="/sekilli-semboller" className="nav-link">
                Shaped Symbols
              </Link>
              <Link href="/pubg-sekilli-nick" className="nav-link">
                PUBG Stylish Nickname
              </Link>
            </nav>

            {/* Right Actions: Theme Toggle & Hamburger */}
            <div className="header-actions">
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
              <span className="nav-icon">📸</span> Insta Font
            </Link>
            <Link href="/sekilli-semboller" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="nav-icon">✨</span> Shaped Symbols
            </Link>
            <Link href="/pubg-sekilli-nick" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="nav-icon">🎮</span> PUBG Stylish Nickname
            </Link>
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
              <span className="badge-text">Ücretsiz & Hızlı</span>
            </div>

            {/* Main Title */}
            <h1 className="hero-title-fullscreen">
              <span className="title-line-animated">
                <span className="title-word-animated">Yazı</span>
                <span className="title-word-animated highlight-gradient">Stilleri</span>
              </span>
            </h1>

            {/* Description */}
            <p className="hero-description-fullscreen">
              Metninizi <span className="text-gradient-purple">Instagram</span>, <span className="text-gradient-pink">WhatsApp</span>, <span className="text-gradient-blue">TikTok</span> ve
              diğer platformlar için <strong>özel font stillerine</strong> dönüştürün.
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
                    <h2>Metninizi Yazın</h2>
                    <p>Anında 100+ stile dönüştürün ✨</p>
                  </div>
                </div>

                {/* Input Field */}
                <div className="input-field-premium">
                  <textarea
                    id="text-input"
                    className="text-input-premium"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Merhaba Dünya yazarak başlayın..."
                    rows={2}
                    maxLength={500}
                  />
                  <button
                    className="clear-btn-premium"
                    onClick={() => setInputText('')}
                    style={{ opacity: inputText ? 1 : 0, pointerEvents: inputText ? 'auto' : 'none' }}
                    aria-label="Temizle"
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
                      Türkçe desteklenir
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
                  <span className="stat-label-premium">Font Stili</span>
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
                  <span className="stat-label-premium">Platform</span>
                </div>
              </div>
              <div className="stat-divider-premium"></div>
              <div className="stat-item-premium">
                <div className="stat-icon">🇹🇷</div>
                <div className="stat-content">
                  <span className="stat-number-premium">%100</span>
                  <span className="stat-label-premium">Türkçe</span>
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
                Tümü
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
                                {style.popular && <span className="popular-badge">🔥 Popüler</span>}
                              </div>
                            </div>
                          </div>

                          <div className="font-preview">{transformedText || 'Örnek metin'}</div>
                          <button
                            className={`copy-button ${isCopied ? 'copied' : ''}`}
                            onClick={() => handleCopy(transformedText, style.id)}
                          >
                            {isCopied ? '✓ Kopyalandı!' : '📋 Kopyala'}
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

          {/* SECTION 1: What are fonts? */}
          <div className="info-box reveal">
            <h2 className="section-main-title">What are fonts?</h2>
            <div className="content-intro">
              <p className="intro-text">
                Fonts are Text and styles that we customize on our own choice to change our text more eye-catching and better Visual Appearance in any social media Platform.
                These Fonts make text more clear and readable by changing text font, size and color.
              </p>
            </div>
          </div>

          {/* SECTION 2: What are font styles? */}
          <div className="info-box reveal">
            <h2 className="section-main-title">What are font styles?</h2>
            <div className="content-intro">
              <p className="intro-text">
                Font styles help us to create special nicknames, Cool font, emoji stylish text and logo. Mostly use like Handwriting font are famous where user can generate different style in this category.
                We can fully customize our text for our requirement and Interaction for platform. Font styles convey our message better with different effects, design and element that we use in Text.
              </p>
            </div>
          </div>

          {/* SECTION 3: How does the Font Changer work? */}
          <div className="info-box reveal">
            <h2 className="section-main-title">How does the Font Changer work?</h2>
            <div className="content-intro">
              <p className="intro-text">
                Font changer is an online Tool which works for creating a stylized nickname, cool text and engagement message for Social Media posts for brand and followers.
                We can use symbols styles text which make a unique in different game which look attractive and make more confidence over the platform.
              </p>
            </div>
          </div>

          {/* SECTION 4: What are different font styles used for? */}
          <div className="info-box reveal">
            <h2 className="section-main-title">What are different font styles used for?</h2>
            <div className="content-intro">
              <div className="feature-cards-grid" style={{ marginTop: '1.5rem' }}>
                <div className="feature-card gradient-purple">
                  <div className="feature-card-icon">📱</div>
                  <h3>Social Media Posts</h3>
                  <p>Create Fancy Posts and Aesthetic Bio for platforms like Instagram, Facebook and TikTok for a better visual and interactive profile.</p>
                </div>
                <div className="feature-card gradient-blue">
                  <div className="feature-card-icon">🎮</div>
                  <h3>Gaming Nicknames</h3>
                  <p>Generate Cool and Stylish nicknames for Online games that stand out from the crowd.</p>
                </div>
                <div className="feature-card gradient-pink">
                  <div className="feature-card-icon">💬</div>
                  <h3>Creative Messaging</h3>
                  <p>Send unique messages using these font styles on WhatsApp and Instagram to impress your friends.</p>
                </div>
              </div>
            </div>

            <h3 className="section-sub-title" style={{ marginTop: '2rem' }}>Examples of Using Different Fonts</h3>
            <div className="feature-cards-grid" style={{ marginTop: '1rem' }}>
              <div className="feature-card gradient-purple">
                <span className="example-text" style={{ fontSize: '1.25rem' }}>𝑌𝑎𝑧𝑖 𝑆𝑡𝑖𝑙𝑙𝑒𝑟𝑖</span>
                <p>Italic Style</p>
              </div>
              <div className="feature-card gradient-pink">
                <span className="example-text" style={{ fontSize: '1.25rem' }}>𝒴𝒶𝓏𝒾 𝒮𝓉𝒾𝓁𝓁𝑒𝓇𝒾</span>
                <p>Handwriting Style</p>
              </div>
              <div className="feature-card gradient-blue">
                <span className="example-text" style={{ fontSize: '1.25rem' }}>𝕐𝕒𝕫𝕚 𝕊𝕥𝕚𝕝𝕝𝕖𝕣𝕚</span>
                <p>Double-Struck Style</p>
              </div>
              <div className="feature-card gradient-green">
                <span className="example-text" style={{ fontSize: '1.25rem' }}>🅈🄰🅉Ｉ 🅂🅃Ｉ🄻🄻🄴🄻Ｉ</span>
                <p>Boxed Text Style</p>
              </div>
            </div>
          </div>

          {/* SECTION 5: How to Create Font Styles and Use Them */}
          <div className="info-box reveal">
            <h2 className="section-main-title">How to Create Font Styles and Use Them (Copy & Paste)</h2>

            <div className="content-intro" style={{ marginBottom: '2rem' }}>
              <p className="intro-text" style={{ textAlign: 'center', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                Follow these simple steps to transform your text into stunning font styles
              </p>
            </div>

            <div className="detailed-steps" style={{ gap: '2rem' }}>
              <div className="detailed-step" style={{
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
                  }}>1</div>
                  <div className="step-icon-circle" style={{
                    fontSize: '2.5rem',
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05))',
                    padding: '1rem',
                    borderRadius: '50%'
                  }}>✏️</div>
                </div>
                <div className="step-details">
                  <h3 style={{
                    color: '#8b5cf6',
                    fontSize: '1.5rem',
                    marginBottom: '0.75rem',
                    fontWeight: '700'
                  }}>Step 1: Enter Your Text</h3>
                  <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                    Type your text in the input field. Our tool will automatically generate a list of different font styles for your text.
                  </p>
                </div>
              </div>

              <div className="detailed-step" style={{
                background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.05), rgba(236, 72, 153, 0.02))',
                borderLeft: '4px solid #ec4899',
                padding: '2rem',
                borderRadius: '1rem',
                transition: 'all 0.3s ease'
              }}>
                <div className="step-visual">
                  <div className="step-number-large" style={{
                    background: 'linear-gradient(135deg, #ec4899, #f472b6)',
                    boxShadow: '0 8px 20px rgba(236, 72, 153, 0.3)',
                    fontSize: '2rem',
                    fontWeight: '800'
                  }}>2</div>
                  <div className="step-icon-circle" style={{
                    fontSize: '2.5rem',
                    background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(236, 72, 153, 0.05))',
                    padding: '1rem',
                    borderRadius: '50%'
                  }}>👀</div>
                </div>
                <div className="step-details">
                  <h3 style={{
                    color: '#ec4899',
                    fontSize: '1.5rem',
                    marginBottom: '0.75rem',
                    fontWeight: '700'
                  }}>Step 2: Choose Your Favorite Font</h3>
                  <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                    After entering your text, many font styles will appear below the input box. Each font style is shown with its name so you can easily choose the one you like.
                  </p>
                </div>
              </div>

              <div className="detailed-step" style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(59, 130, 246, 0.02))',
                borderLeft: '4px solid #3b82f6',
                padding: '2rem',
                borderRadius: '1rem',
                transition: 'all 0.3s ease'
              }}>
                <div className="step-visual">
                  <div className="step-number-large" style={{
                    background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
                    boxShadow: '0 8px 20px rgba(59, 130, 246, 0.3)',
                    fontSize: '2rem',
                    fontWeight: '800'
                  }}>3</div>
                  <div className="step-icon-circle" style={{
                    fontSize: '2.5rem',
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05))',
                    padding: '1rem',
                    borderRadius: '50%'
                  }}>📋</div>
                </div>
                <div className="step-details">
                  <h3 style={{
                    color: '#3b82f6',
                    fontSize: '1.5rem',
                    marginBottom: '0.75rem',
                    fontWeight: '700'
                  }}>Step 3: Copy and Paste the Text</h3>
                  <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                    You will see almost 300+ stylish fonts in different designs. Click the Copy button on your favorite font and paste it anywhere you need.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 6: Using Stylish Fonts on Social Media */}
          <div className="info-box reveal">
            <h2 className="section-main-title">Using Stylish Fonts on Social Media</h2>
            <div className="content-intro">
              <p className="intro-text">
                Social Media platforms are highly interactive for new user to Convert into your follower and Client for any Service.
                By Using Beautiful, small, heart bold and colors Fonts in posts, nickname and bio which make a more readable and attractive for everyone.
              </p>
            </div>
          </div>

          {/* SECTION 7: Things to Consider & Unique Styles */}
          <div className="info-box reveal">
            <h2 className="section-main-title">Things to Consider When Choosing a Font Style</h2>
            <div className="content-intro">
              <p className="intro-text">
                When choosing a font style, make sure it works well on all platforms and supports special characters like Turkish letters.
                The font should look attractive but also be easy to read, even on small screens. Always consider the age of your audience, because different age groups prefer different font styles.
                Most importantly, the text should be clear and legible so users can read it without effort.
              </p>
            </div>

            <h3 className="section-sub-title" style={{ marginTop: '2rem' }}>Cool and unique font styles</h3>
            <div className="content-intro">
              <p className="intro-text">
                Make a difference with cool and unique font styles that help your text stand out. Our Font Changer lets you easily create stylish text for social media, usernames, and brand messages.
                Just type your text, choose a style, and copy-paste it anywhere you want. Simple, fast, and made for everyone.
              </p>
            </div>
          </div>

          {/* SECTION 8: Turkish Character Support */}
          <div className="info-box reveal">
            <h2 className="section-main-title">Turkish Character Support and Styled Text</h2>
            <div className="content-intro">
              <p className="intro-text">
                Our Font converter fully supports Turkish characters such as Ğ, ü, ş, ı, ö, and ç.
                You can convert text with these characters into stylish fonts without losing their original form.
                This ensures your text remains readable and correct on all platforms. It is perfect for social media posts, usernames, and messages in Turkish.
              </p>
            </div>
          </div>

          {/* SECTION 9: Types of Fonts & Popular Categories */}
          <div className="info-box reveal">
            <h2 className="section-main-title">Types of Fonts Used by This Website</h2>
            <div className="font-types-grid">
              <div className="font-type-card glass-card-hover">
                <span className="font-type-icon">🌟</span>
                <h3 className="font-type-title">Popular Fonts</h3>
                <p className="font-type-desc">Most loved styles by our users</p>
              </div>
              <div className="font-type-card glass-card-hover">
                <span className="font-type-icon">🔠</span>
                <h3 className="font-type-title">Text Variations</h3>
                <p className="font-type-desc">Bold, Italic, and more</p>
              </div>
              <div className="font-type-card glass-card-hover">
                <span className="font-type-icon">✨</span>
                <h3 className="font-type-title">Fancy Unicode</h3>
                <p className="font-type-desc">Unique character sets</p>
              </div>
              <div className="font-type-card glass-card-hover">
                <span className="font-type-icon">📱</span>
                <h3 className="font-type-title">Social Media</h3>
                <p className="font-type-desc">Perfect for bios & posts</p>
              </div>
              <div className="font-type-card glass-card-hover">
                <span className="font-type-icon">💬</span>
                <h3 className="font-type-title">Chat Apps</h3>
                <p className="font-type-desc">WhatsApp & Facebook safe</p>
              </div>
              <div className="font-type-card glass-card-hover">
                <span className="font-type-icon">📸</span>
                <h3 className="font-type-title">Instagram Fonts</h3>
                <p className="font-type-desc">Stand out on your feed</p>
              </div>
              <div className="font-type-card glass-card-hover">
                <span className="font-type-icon">😊</span>
                <h3 className="font-type-title">Emoji Fonts</h3>
                <p className="font-type-desc">Text mixed with emojis</p>
              </div>
              <div className="font-type-card glass-card-hover">
                <span className="font-type-icon">🇹🇷</span>
                <h3 className="font-type-title">Turkish Styles</h3>
                <p className="font-type-desc">Cultural & local fonts</p>
              </div>
              <div className="font-type-card glass-card-hover">
                <span className="font-type-icon">🎨</span>
                <h3 className="font-type-title">Text Effects</h3>
                <p className="font-type-desc">Cool character effects</p>
              </div>
              <div className="font-type-card glass-card-hover">
                <span className="font-type-icon">🎮</span>
                <h3 className="font-type-title">Gamer & Aesthetic</h3>
                <p className="font-type-desc">For nicknames & profiles</p>
              </div>
              <div className="font-type-card glass-card-hover">
                <span className="font-type-icon">🖼️</span>
                <h3 className="font-type-title">Decorative</h3>
                <p className="font-type-desc">Borders & decorations</p>
              </div>
              <div className="font-type-card glass-card-hover">
                <span className="font-type-icon">🔄</span>
                <h3 className="font-type-title">Transformations</h3>
                <p className="font-type-desc">Upside down & mirrored</p>
              </div>
            </div>

            <h3 className="section-sub-title" style={{ marginTop: '2rem' }}>Popular fonts categories and their uses</h3>
            <div className="detailed-steps" style={{ gridTemplateColumns: '1fr' }}>
              <div className="detailed-step" style={{ padding: '1rem' }}>
                <p><strong>Bold (Kalın):</strong> Makes text strong and noticeable, perfect for headings or important words.</p>
              </div>
              <div className="detailed-step" style={{ padding: '1rem' }}>
                <p><strong>Italic (İtalik):</strong> Adds emphasis or style, often used for quotes or names.</p>
              </div>
              <div className="detailed-step" style={{ padding: '1rem' }}>
                <p><strong>Bold Italic (Kalın İtalik):</strong> Combines strength and style for standout text.</p>
              </div>
              <div className="detailed-step" style={{ padding: '1rem' }}>
                <p><strong>Instagram Bio Fonts & Aesthetic Text:</strong> Make your social media profile unique and visually appealing.</p>
              </div>
              <div className="detailed-step" style={{ padding: '1rem' }}>
                <p><strong>Script & Cursive:</strong> Adds a handwritten or elegant look, great for messages, invites, or creative posts.</p>
              </div>
              <div className="detailed-step" style={{ padding: '1rem' }}>
                <p><strong>Special Frames:</strong> Make text fun, eye-catching, and perfect for social media or gaming nicknames.</p>
              </div>
              <div className="detailed-step" style={{ padding: '1rem' }}>
                <p><strong>WhatsApp & Facebook:</strong> Stylish fonts that work on these platforms without breaking or losing characters.</p>
              </div>
            </div>
          </div>

          {/* SECTION 10: Why should you choose us? */}
          <div className="info-box reveal">
            <h2 className="section-main-title">Why should you choose us?</h2>
            <div className="content-intro">
              <p className="intro-text">
                Many online users struggle to find the perfect font style that looks great and feels unique on social media, messaging apps, and games.
                Our tool makes it easy to create stylish and attractive text, helping you stand out and express yourself.
                We provide a wide variety of fonts to meet all your creative needs, so you can always find the style you’re looking for.
              </p>
            </div>
          </div>

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
                Insta Yazı Tipi
              </Link>
              <Link href="/sekilli-semboller" className="footer-link">
                Şekilli Semboller
              </Link>
              <Link href="/pubg-sekilli-nick" className="footer-link">
                PUBG Şekilli Nick
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
