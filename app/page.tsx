'use client'

import { useState, useEffect, useMemo } from 'react'
import { fontStyles } from '@/lib/fontStyles'
import Link from 'next/link'

export default function Home() {
  const [inputText, setInputText] = useState('Merhaba Dünya')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [showToast, setShowToast] = useState(false)
  const [visibleFonts, setVisibleFonts] = useState<Record<string, number>>({})
  const [isMobile, setIsMobile] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Mark component as mounted (client-side only)
  useEffect(() => {
    setMounted(true)
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode))
    }
  }, [])

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

  // Detect mobile and set initial visible fonts limit
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      if (mobile) {
        const categories = Array.from(new Set(fontStyles.map(s => s.category)))
        const initial: Record<string, number> = {}
        categories.forEach(cat => {
          initial[cat] = 6 // Show 6 fonts per category on mobile
        })
        setVisibleFonts(initial)
      } else {
        setVisibleFonts({})
      }
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
              ✨ Yazı Stilleri
            </Link>
            <nav className="nav">
              <Link href="/" className="nav-link">
                Ana Sayfa
              </Link>
              <Link href="/hakkimizda" className="nav-link">
                Hakkımızda
              </Link>
              <Link href="/gizlilik-politikasi" className="nav-link">
                Gizlilik
              </Link>
              <button 
                className="dark-mode-toggle"
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Karanlık mod"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="container">
          {/* Modern Animated Hero Section */}
          <div className="hero-section">
            {/* Animated Background */}
            <div className="hero-bg">
              <div className="hero-gradient"></div>
              <div className="hero-particles">
                <div className="particle particle-1">✨</div>
                <div className="particle particle-2">🎨</div>
                <div className="particle particle-3">⭐</div>
                <div className="particle particle-4">💫</div>
                <div className="particle particle-5">🌟</div>
                <div className="particle particle-6">✦</div>
              </div>
              <div className="hero-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
              </div>
            </div>

            <div className="hero-content">
              {/* Animated Title */}
              <div className="hero-badge">
                <span className="badge-icon">🚀</span>
                <span>Ücretsiz & Hızlı</span>
              </div>
              
              <h1 className="hero-title">
                <span className="title-line">
                  <span className="title-word">Yazı</span>
                  <span className="title-word highlight">Stilleri</span>
                </span>
              </h1>
              
              <p className="hero-description">
                Metninizi <span className="text-gradient">Instagram</span>, <span className="text-gradient">WhatsApp</span>, <span className="text-gradient">TikTok</span> ve 
                diğer platformlar için <strong>özel font stillerine</strong> dönüştürün.
              </p>


              {/* Modern Input Section */}
              <div className="hero-input-wrapper">
                <div className="input-glow"></div>
                <div className="modern-input-container">
                  <div className="input-header-modern">
                    <div className="input-icon-modern">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="input-header-text">
                      <h2>Metninizi Yazın</h2>
                      <p>Anında 100+ stile dönüştürün ✨</p>
                    </div>
                  </div>
                  
                  <div className="input-field-wrapper">
                    <textarea
                      id="text-input"
                      className="modern-text-input"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="Merhaba Dünya yazarak başlayın..."
                      rows={3}
                      maxLength={500}
                    />
                    <div className="input-actions">
                      <button 
                        className="clear-input-btn"
                        onClick={() => setInputText('')}
                        style={{ opacity: inputText ? 1 : 0 }}
                      >
                        ✕ Temizle
                      </button>
                    </div>
                  </div>

                  <div className="input-footer-modern">
                    <div className="turkish-chars">
                      <span className="char-badge">ç</span>
                      <span className="char-badge">ğ</span>
                      <span className="char-badge">ı</span>
                      <span className="char-badge">İ</span>
                      <span className="char-badge">ö</span>
                      <span className="char-badge">ş</span>
                      <span className="char-badge">ü</span>
                      <span className="char-label">desteklenir</span>
                    </div>
                    <div className={`char-counter ${inputText.length > 400 ? 'warning' : ''} ${inputText.length > 480 ? 'danger' : ''}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <span>{inputText.length}</span>
                      <span className="counter-max">/ 500</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="input-decoration-left">
                  <div className="deco-circle"></div>
                  <div className="deco-line"></div>
                </div>
                <div className="input-decoration-right">
                  <div className="deco-dots">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Font Stili</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">6</span>
                  <span className="stat-label">Platform</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">🇹🇷</span>
                  <span className="stat-label">Türkçe</span>
                </div>
              </div>
            </div>
          </div>


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
              
              const maxVisible = isMobile ? (visibleFonts[category] || 6) : categoryFonts.length
              const visibleFontsList = categoryFonts.slice(0, maxVisible)
              const hasMore = categoryFonts.length > maxVisible

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
                  {hasMore && isMobile && (
                    <button
                      className="show-more-button"
                      onClick={() => setVisibleFonts(prev => ({
                        ...prev,
                        [category]: (prev[category] || 6) + 6
                      }))}
                    >
                      Daha Fazla Göster ({categoryFonts.length - maxVisible} tane daha)
                    </button>
                  )}
                </div>
              )
            })
          })()}

          {/* SEO Content Section */}
          <div className="seo-content glass-effect">
            <h2>Yazı Stilleri Nedir?</h2>
            <p>
              Yazı stilleri, metninizi farklı görsel formatlara dönüştürmenize olanak tanıyan özel karakter setleridir.
              Bu araç sayesinde normal metninizi kalın, italik, süslü, gotik ve daha birçok farklı stile dönüştürebilirsiniz.
            </p>

            <h3>🆕 Yeni Türk Kültürü Stilleri</h3>
            <p>
              Artık metinlerinizi Türk kültürüne özgü sembollerle süsleyebilirsiniz:
            </p>
            <ul>
              <li><strong>🧿 Nazar Boncuğu:</strong> Türk kültürünün simgesi ile metinlerinizi koruyun</li>
              <li><strong>🇹🇷 Türk Bayrağı:</strong> Ay yıldızlı bayrak ile milli duygularınızı ifade edin</li>
              <li><strong>🌷 Lale:</strong> Osmanlı'nın simgesi lale ile zarif metinler oluşturun</li>
              <li><strong>☕ Türk Kahvesi:</strong> Geleneksel kahve kültürümüzü yansıtın</li>
            </ul>

            <h3>🎨 Metin Efektleri</h3>
            <ul>
              <li><strong>Üstü Çizili:</strong> S̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶ efekti</li>
              <li><strong>Altı Çizili:</strong> U̲n̲d̲e̲r̲l̲i̲n̲e̲ efekti</li>
              <li><strong>Ters Yazı:</strong> ɐpunʎ ɐqɐɥɹǝW - Baş aşağı çevrilmiş metin</li>
              <li><strong>Glitch/Zalgo:</strong> K̷o̸r̶k̵u̷ efektli bozuk metin</li>
            </ul>

            <h3>Nasıl Kullanılır?</h3>
            <p>
              Yazı stilleri aracını kullanmak çok basit:
            </p>
            <ul>
              <li>Üstteki metin kutusuna dönüştürmek istediğiniz metni yazın</li>
              <li>Anında tüm font stillerinde dönüştürülmüş halini görün</li>
              <li>❤️ ile favori fontlarınızı kaydedin</li>
              <li>Platform filtresi ile Instagram, WhatsApp, TikTok uyumlu fontları bulun</li>
              <li>Beğendiğiniz stilin yanındaki "Kopyala" butonuna tıklayın</li>
            </ul>

            <h3>Hangi Platformlarda Kullanılabilir?</h3>
            <ul>
              <li><strong>📷 Instagram:</strong> Bio, gönderi açıklamaları, hikayeler</li>
              <li><strong>💬 WhatsApp:</strong> Durum mesajları, grup isimleri, kişisel mesajlar</li>
              <li><strong>🎵 TikTok:</strong> Bio, video açıklamaları, yorumlar</li>
              <li><strong>👤 Facebook:</strong> Gönderiler, yorumlar, profil bilgileri</li>
              <li><strong>🐦 Twitter/X:</strong> Tweet'ler, bio, isim</li>
              <li><strong>🎮 Discord:</strong> Sunucu isimleri, kullanıcı adları, mesajlar</li>
            </ul>

            <h3>Ücretsiz ve Hızlı</h3>
            <p>
              Yazı stilleri aracı tamamen ücretsizdir ve anında çalışır. Herhangi bir kayıt veya üyelik gerektirmez.
              Metninizi yazın, stilinizi seçin ve kopyalayın - bu kadar basit!
            </p>
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
              <Link href="/hakkimizda" className="footer-link">
                Hakkımızda
              </Link>
              <Link href="/gizlilik-politikasi" className="footer-link">
                Gizlilik Politikası
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
