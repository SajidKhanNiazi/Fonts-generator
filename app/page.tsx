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
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  // Toggle FAQ accordion
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

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
              <Link href="/insta-yazi-tipi" className="nav-link">
                Insta Yazı Tipi
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

          {/* ============ COMPREHENSIVE SEO CONTENT SECTIONS ============ */}
          
          {/* SECTION 1: What is Yazı Stilleri - Hero Info */}
          <div className="info-section">
            <h2 className="section-main-title">Yazı Stilleri Nedir?</h2>
            
            <div className="content-intro">
              <p className="intro-text">
                <strong>Yazı stilleri</strong>, normal metinlerinizi özel Unicode karakterlere dönüştürerek 
                sosyal medya platformlarında dikkat çekici ve benzersiz görünmesini sağlayan araçlardır. 
                Türkçe karakterleri tam destekleyen bu ücretsiz araç sayesinde, Instagram bio'nuzdan 
                WhatsApp durumunuza kadar her yerde özel fontlar kullanabilirsiniz.
              </p>
            </div>

            <div className="feature-cards-grid">
              <div className="feature-card gradient-purple">
                <div className="feature-card-icon">✨</div>
                <h3>Unicode Teknolojisi</h3>
                <p>
                  Yazı stillerimiz Unicode karakter setlerini kullanır. Bu sayede herhangi bir uygulama 
                  yüklemenize gerek kalmadan, kopyala-yapıştır ile tüm platformlarda çalışır. Özel font 
                  dosyası veya yazı tipi indirme gerektirmez.
                </p>
              </div>

              <div className="feature-card gradient-pink">
                <div className="feature-card-icon">🇹🇷</div>
                <h3>Tam Türkçe Desteği</h3>
                <p>
                  Türkçe'ye özgü karakterler (ç, ğ, ı, İ, ö, ş, ü) tüm yazı stillerinde mükemmel çalışır. 
                  Diğer araçların aksine, Türkçe metinleriniz bozulmadan dönüştürülür ve doğru görüntülenir.
                </p>
              </div>

              <div className="feature-card gradient-blue">
                <div className="feature-card-icon">🎨</div>
                <h3>50+ Farklı Stil</h3>
                <p>
                  Kalın, italik, el yazısı, gotik, estetik, glitch ve daha birçok stil seçeneği. 
                  Her zevke ve ihtiyaca uygun yazı tipleri ile metinlerinizi özelleştirin.
                </p>
              </div>

              <div className="feature-card gradient-green">
                <div className="feature-card-icon">🧿</div>
                <h3>Türk Kültürü Stilleri</h3>
                <p>
                  Nazar boncuğu, Türk bayrağı, lale, Türk kahvesi ve daha fazla kültürel sembol ile 
                  metinlerinizi süsleyin. Türk kullanıcılar için özel olarak tasarlandı.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 2: Font Categories */}
          <div className="info-section">
            <h2 className="section-main-title">Yazı Tipi Kategorileri</h2>
            
            <div className="categories-showcase">
              <div className="category-card">
                <div className="category-header-card">
                  <span className="category-emoji">⭐</span>
                  <h3>Popüler Stiller</h3>
                </div>
                <p>En çok kullanılan ve beğenilen yazı stilleri. Kalın, italik, çift çizgili ve daire içi fontlar bu kategoride.</p>
                <div className="category-examples">
                  <span className="example-text">𝐊𝐚𝐥ı𝐧</span>
                  <span className="example-text">𝘐𝘵𝘢𝘭𝘪𝘬</span>
                  <span className="example-text">𝕆̈𝕫𝕖𝕝</span>
                </div>
              </div>

              <div className="category-card">
                <div className="category-header-card">
                  <span className="category-emoji">💫</span>
                  <h3>Süslü Yazılar</h3>
                </div>
                <p>Dekoratif semboller ve çerçevelerle süslenmiş yazı stilleri. Dikkat çekici ve estetik görünüm.</p>
                <div className="category-examples">
                  <span className="example-text">★彡Yıldız彡★</span>
                  <span className="example-text">♥Kalp♥</span>
                </div>
              </div>

              <div className="category-card">
                <div className="category-header-card">
                  <span className="category-emoji">📱</span>
                  <h3>Sosyal Medya</h3>
                </div>
                <p>Instagram, TikTok ve WhatsApp için özel olarak optimize edilmiş yazı stilleri.</p>
                <div className="category-examples">
                  <span className="example-text">ᴀᴇsᴛʜᴇᴛɪᴄ</span>
                  <span className="example-text">𝓔𝓵 𝓨𝓪𝔃ı𝓼ı</span>
                </div>
              </div>

              <div className="category-card">
                <div className="category-header-card">
                  <span className="category-emoji">🎮</span>
                  <h3>Oyuncu Stilleri</h3>
                </div>
                <p>Gamer etiketleri, klan isimleri ve oyun profilleri için havalı yazı stilleri.</p>
                <div className="category-examples">
                  <span className="example-text">【PRO】</span>
                  <span className="example-text">꧁༺GAMER༻꧂</span>
                </div>
              </div>

              <div className="category-card">
                <div className="category-header-card">
                  <span className="category-emoji">🎭</span>
                  <h3>Efekt Yazılar</h3>
                </div>
                <p>Üstü çizili, altı çizili, ters yazı ve glitch efektli metinler.</p>
                <div className="category-examples">
                  <span className="example-text">S̶t̶r̶i̶k̶e̶</span>
                  <span className="example-text">U̲n̲d̲e̲r̲</span>
                </div>
              </div>

              <div className="category-card">
                <div className="category-header-card">
                  <span className="category-emoji">🇹🇷</span>
                  <h3>Türk Kültürü</h3>
                </div>
                <p>Nazar boncuğu, bayrak, lale ve kahve sembolleri ile Türk kültürünü yansıtın.</p>
                <div className="category-examples">
                  <span className="example-text">🧿Nazar🧿</span>
                  <span className="example-text">🌷Lale🌷</span>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3: How to Use - Detailed Steps */}
          <div className="info-section">
            <h2 className="section-main-title">Yazı Stilleri Nasıl Kullanılır?</h2>
            
            <div className="detailed-steps">
              <div className="detailed-step">
                <div className="step-visual">
                  <div className="step-number-large">1</div>
                  <div className="step-icon-circle">✏️</div>
                </div>
                <div className="step-details">
                  <h3>Metninizi Yazın</h3>
                  <p>
                    Sayfanın üst kısmındaki metin kutusuna dönüştürmek istediğiniz metni yazın. 
                    Türkçe karakterler dahil her türlü metin yazabilirsiniz. Örneğin: "Merhaba Dünya" 
                    veya Instagram bio'nuz için hazırladığınız açıklama.
                  </p>
                  <ul className="step-tips">
                    <li>Türkçe karakterler tam desteklenir (ç, ğ, ı, İ, ö, ş, ü)</li>
                    <li>Emoji ve özel karakterler de kullanabilirsiniz</li>
                    <li>Maksimum 500 karakter yazabilirsiniz</li>
                  </ul>
                </div>
              </div>

              <div className="detailed-step">
                <div className="step-visual">
                  <div className="step-number-large">2</div>
                  <div className="step-icon-circle">👀</div>
                </div>
                <div className="step-details">
                  <h3>Stilleri İnceleyin</h3>
                  <p>
                    Yazdığınız metin anında tüm yazı stillerinde görüntülenir. Kartlar halinde 
                    sunulan her stil, metninizin nasıl görüneceğini gösterir. Beğendiğiniz 
                    stilleri ❤️ butonu ile favorilerinize ekleyebilirsiniz.
                  </p>
                  <ul className="step-tips">
                    <li>Platform filtreleri ile Instagram, WhatsApp uyumlu fontları bulun</li>
                    <li>Kategori navigasyonu ile hızlıca gezinin</li>
                    <li>Arama özelliği ile istediğiniz stili bulun</li>
                  </ul>
                </div>
              </div>

              <div className="detailed-step">
                <div className="step-visual">
                  <div className="step-number-large">3</div>
                  <div className="step-icon-circle">📋</div>
                </div>
                <div className="step-details">
                  <h3>Kopyalayın ve Kullanın</h3>
                  <p>
                    Beğendiğiniz stilin kartındaki "Kopyala" butonuna tıklayın. Metin otomatik 
                    olarak panonuza kopyalanır. Artık Instagram, WhatsApp, TikTok veya istediğiniz 
                    herhangi bir platforma yapıştırabilirsiniz.
                  </p>
                  <ul className="step-tips">
                    <li>"Kopyalandı!" bildirimi ile işlemi onaylayın</li>
                    <li>Tek tıkla kolay kopyalama</li>
                    <li>Tüm cihazlarda çalışır (mobil ve masaüstü)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 4: Platforms - Detailed */}
          <div className="info-section">
            <h2 className="section-main-title">Desteklenen Platformlar</h2>
            <p className="section-subtitle">
              Unicode tabanlı yazı stilleri, metin girişi kabul eden tüm platformlarda çalışır
            </p>
            
            <div className="platforms-detailed">
              <div className="platform-detailed-card">
                <div className="platform-icon-large">📷</div>
                <div className="platform-info">
                  <h3>Instagram</h3>
                  <p>
                    Instagram bio, gönderi açıklamaları, hikaye metinleri ve yorumlarda kullanabilirsiniz. 
                    Profilinizi öne çıkarmak için harika bir yöntem.
                  </p>
                  <div className="platform-uses">
                    <span>Bio</span>
                    <span>Caption</span>
                    <span>Hikayeler</span>
                    <span>Yorumlar</span>
                    <span>DM</span>
                  </div>
                </div>
              </div>

              <div className="platform-detailed-card">
                <div className="platform-icon-large">💬</div>
                <div className="platform-info">
                  <h3>WhatsApp</h3>
                  <p>
                    WhatsApp durum mesajları, grup isimleri, profil açıklaması ve mesajlarınızda 
                    özel yazı stilleri kullanın.
                  </p>
                  <div className="platform-uses">
                    <span>Durum</span>
                    <span>Grup Adı</span>
                    <span>Mesajlar</span>
                    <span>Profil</span>
                  </div>
                </div>
              </div>

              <div className="platform-detailed-card">
                <div className="platform-icon-large">🎵</div>
                <div className="platform-info">
                  <h3>TikTok</h3>
                  <p>
                    TikTok bio, video açıklamaları ve yorumlarda dikkat çekici fontlar kullanarak 
                    daha fazla etkileşim alın.
                  </p>
                  <div className="platform-uses">
                    <span>Bio</span>
                    <span>Video Açıklama</span>
                    <span>Yorumlar</span>
                    <span>Kullanıcı Adı</span>
                  </div>
                </div>
              </div>

              <div className="platform-detailed-card">
                <div className="platform-icon-large">🐦</div>
                <div className="platform-info">
                  <h3>Twitter / X</h3>
                  <p>
                    Tweet'lerinizi, bio'nuzu ve kullanıcı adınızı özel fontlarla özelleştirerek 
                    takipçilerinizin dikkatini çekin.
                  </p>
                  <div className="platform-uses">
                    <span>Tweet</span>
                    <span>Bio</span>
                    <span>İsim</span>
                    <span>DM</span>
                  </div>
                </div>
              </div>

              <div className="platform-detailed-card">
                <div className="platform-icon-large">👤</div>
                <div className="platform-info">
                  <h3>Facebook</h3>
                  <p>
                    Facebook gönderileri, yorumlar, sayfa isimleri ve profil bilgilerinizde 
                    benzersiz yazı stilleri kullanın.
                  </p>
                  <div className="platform-uses">
                    <span>Gönderiler</span>
                    <span>Yorumlar</span>
                    <span>Sayfa Adı</span>
                    <span>Hakkında</span>
                  </div>
                </div>
              </div>

              <div className="platform-detailed-card">
                <div className="platform-icon-large">🎮</div>
                <div className="platform-info">
                  <h3>Discord & Oyunlar</h3>
                  <p>
                    Discord sunucu ve kanal isimleri, oyun içi isimler, Steam profili ve 
                    daha fazlasında kullanın.
                  </p>
                  <div className="platform-uses">
                    <span>Sunucu Adı</span>
                    <span>Kullanıcı Adı</span>
                    <span>Mesajlar</span>
                    <span>Oyun İsimleri</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 5: Tips and Tricks */}
          <div className="info-section">
            <h2 className="section-main-title">İpuçları ve Öneriler</h2>
            
            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-number">01</div>
                <h3>Bio İçin Kısa Tutun</h3>
                <p>
                  Instagram ve TikTok bio'larında karakter sınırı vardır. Özel fontlar 
                  bazen daha fazla karakter sayabilir, bu yüzden kısa ve öz tutun.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-number">02</div>
                <h3>Okunabilirliği Koruyun</h3>
                <p>
                  Çok karmaşık fontlar okunması zor olabilir. Önemli metinler için 
                  daha sade stilleri tercih edin.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-number">03</div>
                <h3>Platform Uyumluluğunu Test Edin</h3>
                <p>
                  Bazı platformlar belirli Unicode karakterleri desteklemeyebilir. 
                  Paylaşmadan önce önizleme yapın.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-number">04</div>
                <h3>Aşırıya Kaçmayın</h3>
                <p>
                  Tüm metni özel font yapmak yerine, vurgulamak istediğiniz 
                  kelimelerde kullanın.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-number">05</div>
                <h3>Favorileri Kullanın</h3>
                <p>
                  Beğendiğiniz stilleri ❤️ ile favorilerinize ekleyin, böylece 
                  her seferinde aramak zorunda kalmazsınız.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-number">06</div>
                <h3>Mobilde Rahatça Kullanın</h3>
                <p>
                  Aracımız mobil uyumludur. Telefonunuzdan doğrudan yazı 
                  stillerini oluşturup kopyalayabilirsiniz.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 6: FAQ */}
          <div className="info-section">
            <h2 className="section-main-title">Sık Sorulan Sorular</h2>
            
            <div className="faq-accordion">
              <div className={`faq-item ${expandedFaq === 0 ? 'expanded' : ''}`} onClick={() => toggleFaq(0)}>
                <div className="faq-question">
                  <span className="faq-icon">💬</span>
                  <h3>Yazı stilleri gerçekten tüm platformlarda çalışıyor mu?</h3>
                  <span className="faq-toggle">{expandedFaq === 0 ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>
                    Evet! Yazı stillerimiz Unicode karakterleri kullandığı için, metin girişi kabul eden 
                    tüm platformlarda çalışır. Instagram, WhatsApp, TikTok, Facebook, Twitter, Discord 
                    ve daha birçok platformda sorunsuz kullanabilirsiniz. Unicode standart bir karakter 
                    seti olduğu için ekstra uygulama veya font yüklemenize gerek yoktur.
                  </p>
                </div>
              </div>

              <div className={`faq-item ${expandedFaq === 1 ? 'expanded' : ''}`} onClick={() => toggleFaq(1)}>
                <div className="faq-question">
                  <span className="faq-icon">🇹🇷</span>
                  <h3>Türkçe karakterler (ç, ğ, ı, ö, ş, ü) destekleniyor mu?</h3>
                  <span className="faq-toggle">{expandedFaq === 1 ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>
                    Kesinlikle! Yazı Stilleri aracı, Türkçe kullanıcılar için özel olarak geliştirilmiştir. 
                    Tüm Türkçe karakterler (ç, ğ, ı, İ, ö, ş, ü) tam olarak desteklenir ve doğru şekilde 
                    dönüştürülür. Türkçe metinleriniz bozulmadan, okunabilir şekilde görüntülenir.
                  </p>
                </div>
              </div>

              <div className={`faq-item ${expandedFaq === 2 ? 'expanded' : ''}`} onClick={() => toggleFaq(2)}>
                <div className="faq-question">
                  <span className="faq-icon">💰</span>
                  <h3>Bu araç ücretsiz mi?</h3>
                  <span className="faq-toggle">{expandedFaq === 2 ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>
                    Evet, Yazı Stilleri tamamen ücretsizdir. Kayıt olmanıza, giriş yapmanıza veya 
                    herhangi bir ödeme yapmanıza gerek yoktur. Tüm özellikler sınırsız ve ücretsiz 
                    olarak kullanımınıza sunulmuştur. Reklam destekli bir hizmet olarak çalışıyoruz.
                  </p>
                </div>
              </div>

              <div className={`faq-item ${expandedFaq === 3 ? 'expanded' : ''}`} onClick={() => toggleFaq(3)}>
                <div className="faq-question">
                  <span className="faq-icon">🔒</span>
                  <h3>Metinlerim kaydediliyor mu? Güvenli mi?</h3>
                  <span className="faq-toggle">{expandedFaq === 3 ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>
                    Hayır, metinleriniz hiçbir şekilde sunucularımıza gönderilmez veya kaydedilmez. 
                    Tüm dönüşüm işlemleri tamamen tarayıcınızda (cihazınızda) gerçekleşir. Bu sayede 
                    %100 gizlilik ve güvenlik sağlanır. Verileriniz sadece sizin cihazınızda kalır.
                  </p>
                </div>
              </div>

              <div className={`faq-item ${expandedFaq === 4 ? 'expanded' : ''}`} onClick={() => toggleFaq(4)}>
                <div className="faq-question">
                  <span className="faq-icon">📷</span>
                  <h3>Hangi yazı stili Instagram için en iyi?</h3>
                  <span className="faq-toggle">{expandedFaq === 4 ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>
                    Instagram bio için El Yazısı, Estetik ve Minimal stiller en popüler seçeneklerdir. 
                    Bu stiller hem okunabilir hem de estetik görünür. Gönderi açıklamaları için 
                    Kalın veya İtalik stilleri dikkat çekici olabilir. Platform filtresini kullanarak 
                    Instagram uyumlu tüm stilleri görebilirsiniz.
                  </p>
                </div>
              </div>

              <div className={`faq-item ${expandedFaq === 5 ? 'expanded' : ''}`} onClick={() => toggleFaq(5)}>
                <div className="faq-question">
                  <span className="faq-icon">📱</span>
                  <h3>Mobil cihazlarda kullanabilir miyim?</h3>
                  <span className="faq-toggle">{expandedFaq === 5 ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>
                    Evet! Yazı Stilleri tamamen mobil uyumludur. iPhone, Android veya tablet 
                    fark etmeksizin tüm cihazlarda sorunsuz çalışır. Dokunmatik ekranlar için 
                    optimize edilmiş arayüzümüz sayesinde kolayca metin yazabilir, stil seçebilir 
                    ve kopyalayabilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 7: Feature Banners */}
          <div className="info-section">
            <div className="feature-banners-grid">
              <div className="feature-banner gradient-success">
                <div className="feature-banner-icon">🚀</div>
                <div className="feature-banner-content">
                  <h3>Ücretsiz ve Hızlı</h3>
                  <p>Kayıt gerektirmez, anında çalışır. Tüm özellikler sınırsız ve ücretsiz!</p>
                </div>
              </div>

              <div className="feature-banner gradient-security">
                <div className="feature-banner-icon">🔒</div>
                <div className="feature-banner-content">
                  <h3>%100 Güvenli</h3>
                  <p>Metinleriniz sunucuya gönderilmez. Tüm işlemler tarayıcınızda gerçekleşir.</p>
                </div>
              </div>

              <div className="feature-banner gradient-mobile">
                <div className="feature-banner-icon">📱</div>
                <div className="feature-banner-content">
                  <h3>Mobil Uyumlu</h3>
                  <p>Her cihazda mükemmel çalışır. Telefonunuzdan kolayca kullanın.</p>
                </div>
              </div>
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
