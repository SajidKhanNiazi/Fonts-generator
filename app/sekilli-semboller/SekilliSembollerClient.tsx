'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// ============ SYMBOL CATEGORIES DATA ============

interface SymbolCategory {
  id: string
  name: string
  icon: string
  symbols: string[]
}

const symbolCategories: SymbolCategory[] = [
  {
    id: 'kalp',
    name: 'Kalp Sembolleri',
    icon: '❤️',
    symbols: ['❤', '♥', '♡', '💖', '💕', '💗', '💓', '💘', '💝', '💞', '💟', '❥', '❣', 'ღ', '❤️‍🔥', '❤️‍🩹', '🖤', '🤍', '💙', '💚', '💛', '🧡', '💜', '🤎', '❣️', '💔', '🩷', '🩵', '🩶', '♥️', '🫀', '💌', '💋', '😍', '🥰', '😘', '😻', '💑', '💏', '👩‍❤️‍👨', '❦', '❧', '☙', '🫶', '💓', '𖣔', '𓆩', '𓆪', '𓇢', '𓂃']
  },
  {
    id: 'yildiz',
    name: 'Yıldız & Parlama',
    icon: '⭐',
    symbols: ['★', '☆', '✦', '✧', '✨', '🌟', '⭐', '🌠', '💫', '✩', '✪', '✫', '✬', '✭', '✮', '✯', '✰', '⁂', '⁎', '⁑', '✴', '✵', '✶', '✷', '✸', '✹', '✺', '❂', '❃', '❊', '✳️', '✴️', '🔯', '💥', '🎇', '🎆', '✡', '⭒', '⭑', '🌃', '🌌', '🔅', '🔆', '☀️', '🌞', '🌄', '🌅', '༄', '࿐', '⋆']
  },
  {
    id: 'ok',
    name: 'Ok & İşaretler',
    icon: '➤',
    symbols: ['➤', '➜', '➝', '➞', '➠', '➳', '➵', '→', '←', '↑', '↓', '↔', '↕', '↖', '↗', '↘', '↙', '⇒', '⇐', '⇑', '⇓', '⇔', '⇕', '➔', '➙', '➚', '➛', '➟', '➡', '⬅', '⬆', '⬇', '↩', '↪', '⤴', '⤵', '🔙', '🔚', '🔛', '🔜', '🔝', '▶️', '◀️', '⏩', '⏪', '⏫', '⏬', '➲', '➢', '➣']
  },
  {
    id: 'cerceve',
    name: 'Çerçeveli Semboller',
    icon: '【】',
    symbols: ['【', '】', '『', '』', '《', '》', '⟦', '⟧', '〖', '〗', '〘', '〙', '〚', '〛', '「', '」', '〔', '〕', '〈', '〉', '﹁', '﹂', '﹃', '﹄', '︵', '︶', '︷', '︸', '꧁', '꧂', '『', '』', '༺', '༻', '〔', '〕', '⦅', '⦆', '⦃', '⦄', '❮', '❯', '❰', '❱', '❲', '❳', '❴', '❵', '⟨', '⟩']
  },
  {
    id: 'cicek',
    name: 'Çiçek & Doğa',
    icon: '🌸',
    symbols: ['🌸', '🌷', '🌹', '🌺', '🌻', '🌼', '💐', '🏵', '❀', '✿', '❁', '❃', '❋', '🌵', '🌴', '🌲', '🌳', '🌿', '☘', '🍀', '🍃', '🍂', '🍁', '🌾', '🪻', '🪷', '🪹', '🪺', '🌱', '🪴', '🌏', '🌍', '🌎', '🦋', '🐝', '🌈', '🍄', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🦚', '🦢', '🕊️', '🐦']
  },
  {
    id: 'dekoratif',
    name: 'Dekoratif & Fancy',
    icon: '✪',
    symbols: ['✪', '✯', '✰', '☾', '☽', '⚝', '❖', '❦', '❧', '☙', '❡', '❢', '❣', '✾', '✽', '✼', '✻', '❆', '❅', '❄', '❈', '❉', '❊', '❋', '✣', '✤', '✥', '✱', '✲', '✳', '༄', '࿐', '࿔', '᯽', '꧂', '꧁', '۞', '۩', '࿊', '࿋', '࿌', '᪥', '⌘', '⚜', '☬', '☫', '☤', '⚕', '⚚', '☸']
  },
  {
    id: 'emoji',
    name: 'Popüler Emojiler',
    icon: '😊',
    symbols: ['😊', '😍', '🥰', '😘', '🤩', '😎', '🥳', '😇', '🤗', '😏', '😌', '🙃', '😉', '😋', '🤪', '🔥', '💯', '👑', '🎯', '💪', '🙏', '👀', '🎉', '🎊', '✨', '💫', '⚡', '🌈', '🦄', '🍀', '🌙', '☀️', '❄️', '🌊', '🔮', '🎭', '🎪', '🎨', '🎬', '📸', '💎', '👻', '🤖', '👽', '🦋', '🌺', '🍒', '🍓', '🌴']
  },
  {
    id: 'oyun',
    name: 'Oyun & E-Spor',
    icon: '🎮',
    symbols: ['🎮', '🕹', '🎲', '🎯', '🏆', '🥇', '🥈', '🥉', '🎖', '🏅', '⚔️', '🗡️', '🛡️', '🏹', '💣', '💥', '🔫', '☠️', '💀', '👾', '🤖', '🎳', '🎰', '🎴', '🃏', '🀄', '♠', '♣', '♥', '♦', '♤', '♧', '♡', '♢', '🎁', '🎀', '🎈', '🎉', '🎊', '🎄', '🎃', '⭐', '🌟', '✨', '💫', '🔥', '❌', '⭕', '✅', '🚀']
  },
  {
    id: 'muzik',
    name: 'Müzik & Ses',
    icon: '🎵',
    symbols: ['♪', '♫', '♬', '♩', '🎵', '🎶', '🎼', '🎤', '🎧', '🎸', '🎹', '🎺', '🎻', '🥁', '🎷', '🪘', '🪗', '🪕', '🎙', '📻', '🔔', '🔕', '🔊', '🔉', '🔈', '🔇', '📢', '📣', '🔌', '🎚', '🎛', '📯', '🪈', '🎶', '🎵', '🎤', '🎧', '🎼', '♭', '♮', '♯', '𝄞', '𝄢', '𝄫', '𝄪', '🎹', '🪇', '🪘', '📀']
  },
  {
    id: 'hava',
    name: 'Hava & Gökyüzü',
    icon: '☀️',
    symbols: ['☀', '☁', '☂', '☃', '☄', '🌤', '⛅', '🌥', '🌦', '🌧', '⛈', '🌩', '🌨', '❄', '🌬', '💨', '🌪', '🌈', '☔', '⚡', '🌊', '💧', '💦', '🌙', '🌛', '🌜', '🌝', '🌚', '⭐', '🌟', '☀️', '🌞', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌍', '🌎', '🌏', '🌐', '🛸', '🚀', '🌌', '✨', '☁️', '⛄']
  },
  {
    id: 'isaretler',
    name: 'Özel İşaretler',
    icon: '✓',
    symbols: ['✓', '✔', '✗', '✘', '✕', '✖', '☑', '☒', '☐', '✅', '❌', '❎', '⭕', '🔴', '🟠', '🟡', '🟢', '🔵', '🟣', '🟤', '⚫', '⚪', '🔘', '🔲', '🔳', '▪', '▫', '◼', '◻', '◾', '◽', '▶', '◀', '🔺', '🔻', '🔷', '🔶', '🔸', '🔹', '💠', '🔵', '🟥', '🟧', '🟨', '🟩', '🟦', '🟪', '⬛', '⬜', '🔈']
  },
  {
    id: 'semboller',
    name: 'Burçlar & Semboller',
    icon: '♈',
    symbols: ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '⛎', '☮', '☯', '☪', '✝', '☦', '✡', '🕉', '☸', '⚛', '🔯', '🆔', '⚠', '☢', '☣', '📛', '🚫', '⭕', '♀', '♂', '⚧', '⚥', '⚢', '⚣', '⚤', '🔱', '⚜', '🧿', '👁️‍🗨️', '🧠', '👁', '💀', '☠️', '👻', '🎭', '🔮', '🪬']
  },
  {
    id: 'el',
    name: 'El & Jest',
    icon: '👋',
    symbols: ['👋', '🤚', '🖐', '✋', '🖖', '👌', '🤌', '🤏', '✌', '🤞', '🫰', '🤟', '🤘', '🤙', '👈', '👉', '👆', '🖕', '👇', '☝', '🫵', '👍', '👎', '✊', '👊', '🤛', '🤜', '👏', '🙌', '🤲', '🙏', '🤝', '💪', '🦾', '🦿', '🦵', '🦶', '👂', '🦻', '👃', '🧠', '👀', '👁', '👅', '👄', '💋', '🫦', '🦷', '🦴']
  },
  {
    id: 'minimal',
    name: 'Minimal & Geometrik',
    icon: '●',
    symbols: ['•', '◦', '○', '●', '◉', '◎', '◐', '◑', '◒', '◓', '◔', '◕', '◖', '◗', '◘', '◙', '◚', '◛', '◜', '◝', '◞', '◟', '◠', '◡', '⦿', '⊙', '⊚', '⊛', '⊜', '⊝', '▪', '▫', '▬', '▭', '▮', '▯', '▰', '▱', '▲', '△', '▴', '▵', '▶', '▷', '▸', '▹', '►', '▻', '◆', '◇']
  },
  {
    id: 'para',
    name: 'Para & Finans',
    icon: '💰',
    symbols: ['💰', '💵', '💴', '💶', '💷', '💸', '💳', '🪙', '💲', '₺', '$', '€', '£', '¥', '₩', '₽', '฿', '₿', '💎', '📈', '📉', '📊', '🏦', '🏧', '💹', '🛒', '🛍', '💼', '📦', '🎁', '🏪', '🏬', '🏭', '🏢', '💵', '💴', '💶', '💷', '🤑', '💲', '💱', '💹', '📈', '📉', '💳', '🧾', '💸', '🪙', '💎']
  },
  {
    id: 'turk',
    name: 'Türk Kültürü',
    icon: '🇹🇷',
    symbols: ['🇹🇷', '🧿', '☪', '🌙', '⭐', '🌷', '☕', '🫖', '🥯', '🍢', '🥙', '🍯', '🕌', '۩', '༺', '༻', '꧁', '꧂', '۞', '࿊', '◆', '◇', '❖', '✦', '✧', '★', '☆', '⁂', '❃', '❋', '🏛️', '🎭', '🧕', '🕋', '📿', '🪬', '🔮', '🎪', '🎡', '🎢', '🌍', '🗺️', '🏔️', '⛰️', '🌊', '🏖️', '⛵', '🚢', '✈️', '🛫']
  }
]

// ============ MAIN COMPONENT ============
export default function SekilliSembollerClient() {
  const [copiedSymbol, setCopiedSymbol] = useState<string | null>(null)
  const [showToast, setShowToast] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Toggle FAQ accordion
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  useEffect(() => {
    setMounted(true)
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode))
    }
  }, [])

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

  // Handle copy to clipboard
  const handleCopy = async (symbol: string) => {
    try {
      await navigator.clipboard.writeText(symbol)
      setCopiedSymbol(symbol)
      setShowToast(true)
      setTimeout(() => setCopiedSymbol(null), 2000)
      setTimeout(() => setShowToast(false), 3000)
    } catch (err) {
      console.error('Kopyalama hatası:', err)
    }
  }

  // Scroll to category
  const scrollToCategory = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setTimeout(() => {
      const categoryElement = document.querySelector(`[data-category="${categoryId}"]`)
      if (categoryElement) {
        const headerOffset = 140
        const elementPosition = categoryElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      }
    }, 100)
  }

  // Add structured data for SEO
  useEffect(() => {
    if (!mounted) return

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Şekilli Semboller",
      "description": "Şekilli semboller ile süslü, özel ve estetik sembolleri tek tıkla kopyala ve kullan.",
      "url": "https://yazistilleri.com/sekilli-semboller",
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
    script.id = 'semboller-structured-data'
    document.head.appendChild(script)

    return () => {
      const existingScript = document.getElementById('semboller-structured-data')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [mounted])

  // Get total symbol count
  const totalSymbols = symbolCategories.reduce((acc, cat) => acc + cat.symbols.length, 0)

  return (
    <div className={mounted && darkMode ? 'dark' : ''}>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link href="/" className="logo">
              ✨ Yazı Stilleri
            </Link>
            <nav className="nav">
              <Link href="/insta-yazi-tipi" className="nav-link">
                Insta Yazı Tipi
              </Link>
              <Link href="/sekilli-semboller" className="nav-link active">
                Şekilli Semboller
              </Link>
              <Link href="/pubg-sekilli-nick" className="nav-link">
                PUBG Şekilli Nick
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

      {/* Main Content */}
      <main className="main">
        <div className="container">

          {/* Hero Section */}
          <div className="hero-section">
            {/* Animated Background */}
            <div className="hero-bg">
              <div className="hero-gradient"></div>
              <div className="hero-particles">
                <div className="particle particle-1">✨</div>
                <div className="particle particle-2">❤️</div>
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
                <span className="badge-icon">🎨</span>
                <span>Tek Tıkla Kopyala</span>
              </div>

              <h1 className="hero-title">
                <span className="title-line">
                  <span className="title-word">Cool</span>
                  <span className="title-word highlight">Symbols</span>
                </span>
              </h1>

              <p className="hero-description">
                <span className="text-gradient">Fancy</span>, <span className="text-gradient">special</span>, and <span className="text-gradient">aesthetic</span> symbols to
                copy with one click. Perfect for Instagram bio, WhatsApp status, and game names!
              </p>

              {/* Stats */}
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">{totalSymbols}+</span>
                  <span className="stat-label">Sembol</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">{symbolCategories.length}</span>
                  <span className="stat-label">Kategori</span>
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
              {symbolCategories.map((category) => (
                <button
                  key={category.id}
                  className={`category-nav-button ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => scrollToCategory(category.id)}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Symbol Categories */}
          {symbolCategories.map((category) => (
            <div key={category.id} className="category-section" data-category={category.id}>
              <h2 className="category-header">
                {category.icon} {category.name}
                <span className="category-count">{category.symbols.length}</span>
              </h2>

              <div className="symbol-grid">
                {category.symbols.map((symbol, index) => {
                  const isCopied = copiedSymbol === symbol

                  return (
                    <button
                      key={`${category.id}-${index}`}
                      className={`symbol-card ${isCopied ? 'copied' : ''}`}
                      onClick={() => handleCopy(symbol)}
                      title={`${symbol} kopyala`}
                    >
                      <span className="symbol-char">{symbol}</span>
                      <span className="symbol-action">
                        {isCopied ? '✓' : 'Kopyala'}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          ))}

          {/* ============ COMPREHENSIVE SEO CONTENT ============ */}

          {/* SECTION 1: Havalı ve Şık Semboller Nedir */}
          <div className="info-box reveal">
            <h2 className="section-main-title">Havalı ve Şık Semboller Nedir?</h2>

            <div className="content-intro">
              <p className="intro-text">
                <strong>Havalı semboller</strong>, sosyal medya platformlarında, oyun isimlerinde ve mesajlaşma uygulamalarında
                kullanabileceğiniz özel karakterler ve işaretlerdir. Bu <strong>şık semboller</strong>, metninizi göz alıcı hale
                getirmenize, profilinizi özelleştirmenize ve mesajlarınıza estetik bir dokunuş eklemenize yardımcı olur.
                Kalpler, yıldızlar, oklar ve çiçekler gibi <strong>özel semboller</strong> tek tıkla kopyalanıp yapıştırılabilir.
              </p>
            </div>

            <div className="feature-cards-grid">
              <div className="feature-card gradient-purple">
                <div className="feature-card-icon">❤️</div>
                <h3>Zengin Sembol Koleksiyonu</h3>
                <p>
                  Kalpler, yıldızlar, oklar, çerçeveler, çiçekler ve daha fazlası! {totalSymbols}+ farklı <strong>şık sembol</strong> ile
                  metninizi süsleyin ve profilinizi öne çıkarın.
                </p>
              </div>

              <div className="feature-card gradient-pink">
                <div className="feature-card-icon">📋</div>
                <h3>Tek Tıkla Kopyala</h3>
                <p>
                  İstediğiniz sembole tıklayın ve anında kopyalansın! <strong>Sembol kopyalama</strong> özelliğimizle
                  saniyeler içinde istediğiniz yere yapıştırın.
                </p>
              </div>

              <div className="feature-card gradient-blue">
                <div className="feature-card-icon">📱</div>
                <h3>Tüm Platformlarda Çalışır</h3>
                <p>
                  Instagram, WhatsApp, TikTok, Discord ve daha fazlası! <strong>Sembol işaretleri</strong> Unicode tabanlıdır,
                  bu yüzden tüm cihazlarda doğru şekilde görünür.
                </p>
              </div>

              <div className="feature-card gradient-green">
                <div className="feature-card-icon">🎮</div>
                <h3>Oyun İsimleri İçin</h3>
                <p>
                  Oyunlarınız için havalı kullanıcı adları oluşturun! <strong>Özel işaretler</strong> ile
                  klan etiketleri ve oyuncu isimleri için şık bir görünüm.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 2: En Popüler Semboller */}
          <div className="info-box reveal">
            <h2 className="section-main-title">En Popüler Havalı Semboller</h2>

            <div className="categories-showcase">
              <div className="category-card">
                <div className="category-header-card">
                  <span className="category-emoji">❤️</span>
                  <h3>Kalp Sembolleri</h3>
                </div>
                <p>Sevgi ve şefkat ifade etmek için en çok kullanılan semboller. Instagram bio ve mesajlar için ideal.</p>
                <div className="category-examples">
                  <span className="example-text">♥</span>
                  <span className="example-text">❤</span>
                  <span className="example-text">💖</span>
                  <span className="example-text">💕</span>
                </div>
              </div>

              <div className="category-card">
                <div className="category-header-card">
                  <span className="category-emoji">⭐</span>
                  <h3>Yıldız Sembolleri</h3>
                </div>
                <p>Parlaklık ve önem ifade etmek için kullanılır. Göz alıcı profiller için mükemmel.</p>
                <div className="category-examples">
                  <span className="example-text">★</span>
                  <span className="example-text">☆</span>
                  <span className="example-text">✨</span>
                  <span className="example-text">🌟</span>
                </div>
              </div>

              <div className="category-card">
                <div className="category-header-card">
                  <span className="category-emoji">🌸</span>
                  <h3>Çiçek Sembolleri</h3>
                </div>
                <p>Doğa ve güzellik temalı süslemeler. Estetik bir görünüm için popüler bir seçim.</p>
                <div className="category-examples">
                  <span className="example-text">❀</span>
                  <span className="example-text">✿</span>
                  <span className="example-text">🌸</span>
                  <span className="example-text">🌷</span>
                </div>
              </div>

              <div className="category-card">
                <div className="category-header-card">
                  <span className="category-emoji">🎮</span>
                  <h3>Oyun Sembolleri</h3>
                </div>
                <p>Oyun isimleri ve klan etiketleri için havalı semboller. Profesyonel oyuncu görünümü.</p>
                <div className="category-examples">
                  <span className="example-text">『</span>
                  <span className="example-text">』</span>
                  <span className="example-text">【</span>
                  <span className="example-text">】</span>
                </div>
              </div>

              <div className="category-card">
                <div className="category-header-card">
                  <span className="category-emoji">🇹🇷</span>
                  <h3>Türk Kültürü</h3>
                </div>
                <p>Nazar boncuğu, ay-yıldız ve lale gibi Türk kültürüne özgü semboller.</p>
                <div className="category-examples">
                  <span className="example-text">🧿</span>
                  <span className="example-text">☪</span>
                  <span className="example-text">🌷</span>
                  <span className="example-text">☕</span>
                </div>
              </div>

              <div className="category-card">
                <div className="category-header-card">
                  <span className="category-emoji">✨</span>
                  <h3>Dekoratif</h3>
                </div>
                <p>Metin süslemesi için özel dekoratif semboller. Göz alıcı tasarımlar için.</p>
                <div className="category-examples">
                  <span className="example-text">✦</span>
                  <span className="example-text">❖</span>
                  <span className="example-text">✪</span>
                  <span className="example-text">❋</span>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3: Kategorilere Göre Semboller */}
          <div className="info-box reveal">
            <h2 className="section-main-title">Kategorilere Göre Şık Semboller</h2>
            <p className="section-subtitle">
              Her kategori farklı kullanım alanları için optimize edilmiştir. İhtiyacınıza uygun sembolleri seçin.
            </p>

            <div className="platforms-detailed">
              <div className="platform-detailed-card">
                <div className="platform-icon-large">❤️</div>
                <div className="platform-info">
                  <h3>Kalp & Aşk</h3>
                  <p>
                    Sevgi ifade etmek için en popüler <strong>şık semboller</strong>. Instagram bio, WhatsApp durumu
                    ve romantik mesajlar için mükemmel kalp sembolleri.
                  </p>
                  <div className="platform-uses">
                    <span>Bio</span>
                    <span>Mesajlar</span>
                    <span>Durum</span>
                  </div>
                </div>
              </div>

              <div className="platform-detailed-card">
                <div className="platform-icon-large">⭐</div>
                <div className="platform-info">
                  <h3>Yıldız & Parıltı</h3>
                  <p>
                    Göz alıcı profiller için yıldız sembolleri. Başlıkları ve önemli metinleri
                    vurgulamak için ideal.
                  </p>
                  <div className="platform-uses">
                    <span>Vurgu</span>
                    <span>Başlık</span>
                    <span>Öne Çıkarma</span>
                  </div>
                </div>
              </div>

              <div className="platform-detailed-card">
                <div className="platform-icon-large">🎮</div>
                <div className="platform-info">
                  <h3>Oyun & E-Spor</h3>
                  <p>
                    Oyun isimleri, klan etiketleri ve Discord sunucuları için <strong>özel karakterler</strong>.
                    Profesyonel oyuncu görünümü sağlayan benzersiz işaretler.
                  </p>
                  <div className="platform-uses">
                    <span>Oyun İsmi</span>
                    <span>Klan</span>
                    <span>Discord</span>
                  </div>
                </div>
              </div>

              <div className="platform-detailed-card">
                <div className="platform-icon-large">📱</div>
                <div className="platform-info">
                  <h3>Sosyal Medya</h3>
                  <p>
                    Instagram, TikTok ve Twitter için trend <strong>özel semboller</strong>.
                    Bio, altyazılar ve story metinlerinde kullanın.
                  </p>
                  <div className="platform-uses">
                    <span>Instagram</span>
                    <span>TikTok</span>
                    <span>Twitter</span>
                  </div>
                </div>
              </div>

              <div className="platform-detailed-card">
                <div className="platform-icon-large">💬</div>
                <div className="platform-info">
                  <h3>Mesajlaşma</h3>
                  <p>
                    WhatsApp, Telegram ve diğer mesajlaşma uygulamaları için semboller.
                    Mesajlarınızı eğlenceli ve renkli hale getirin.
                  </p>
                  <div className="platform-uses">
                    <span>WhatsApp</span>
                    <span>Telegram</span>
                    <span>SMS</span>
                  </div>
                </div>
              </div>

              <div className="platform-detailed-card">
                <div className="platform-icon-large">🌷</div>
                <div className="platform-info">
                  <h3>Dekorasyon</h3>
                  <p>
                    Çiçek, doğa ve dekoratif <strong>sembol işaretleri</strong>. Estetik profiller ve
                    güzel görünümlü metinler için.
                  </p>
                  <div className="platform-uses">
                    <span>Estetik</span>
                    <span>Süsleme</span>
                    <span>Dekor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 4: Semboller Nerede Kullanılır */}
          <div className="info-box reveal">
            <h2 className="section-main-title">Havalı Semboller Nerede Kullanılır?</h2>

            <div className="detailed-steps">
              <div className="detailed-step">
                <div className="step-visual">
                  <div className="step-number-large">1</div>
                  <div className="step-icon-circle">📷</div>
                </div>
                <div className="step-details">
                  <h3>Instagram</h3>
                  <p>
                    Instagram bio, gönderi altyazıları, hikayeler ve yorumlarda <strong>havalı semboller</strong> ile öne çıkın.
                    Kalp, yıldız ve çiçek sembolleri en popüler seçimlerdir.
                  </p>
                  <ul className="step-tips">
                    <li>Bio'da 150 karakter sınırını unutmayın</li>
                    <li>Öne çıkan kapak başlıklarında kullanın</li>
                    <li>Altyazılarda göz alıcı bir görünüm sağlar</li>
                  </ul>
                </div>
              </div>

              <div className="detailed-step">
                <div className="step-visual">
                  <div className="step-number-large">2</div>
                  <div className="step-icon-circle">💬</div>
                </div>
                <div className="step-details">
                  <h3>WhatsApp & Mesajlaşma</h3>
                  <p>
                    WhatsApp durum güncellemelerinde, grup isimlerinde ve kişisel mesajlarda <strong>şık semboller</strong> ile
                    iletişiminizi canlandırın.
                  </p>
                  <ul className="step-tips">
                    <li>Durum mesajlarını süsleyin</li>
                    <li>Grup isimlerini özelleştirin</li>
                    <li>Mesajlarınıza eğlenceli bir dokunuu015f ekleyin</li>
                  </ul>
                </div>
              </div>

              <div className="detailed-step">
                <div className="step-visual">
                  <div className="step-number-large">3</div>
                  <div className="step-icon-circle">🎮</div>
                </div>
                <div className="step-details">
                  <h3>Oyun & Discord</h3>
                  <p>
                    Oyun karakter isimlerinde, klan etiketlerinde ve Discord sunucu/kanal isimlerinde <strong>özel işaretler</strong>
                    kullanarak profesyonel ve göz alıcı bir görünüm elde edin.
                  </p>
                  <ul className="step-tips">
                    <li>Çerçeve sembolleri klan isimleri için mükemmel</li>
                    <li>Yıldız ve ok sembolleriyle oyuncu isimleri oluşturun</li>
                    <li>Discord rollerinde ve kanal isimlerinde kullanın</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 5: Kullanım İpuçları */}
          <div className="info-box reveal">
            <h2 className="section-main-title">Kullanım İpuçları</h2>

            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-number">01</div>
                <h3>Aşırıya Kaçmayın</h3>
                <p>
                  Çok fazla sembol kullanmak okunabilirliği azaltır. Vurgulamak istediğiniz
                  yerlerde kullanın.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-number">02</div>
                <h3>Uyumlu Semboller Seçin</h3>
                <p>
                  Aynı tema veya stildeki sembolleri birlikte kullanın. Kalpler kalple, yıldızlar
                  yıldızla.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-number">03</div>
                <h3>Platform Uyumluluğu</h3>
                <p>
                  Bazı semboller bazı platformlarda farklı görünebilir. Paylaşmadan önce
                  test edin.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-number">04</div>
                <h3>Simetrik Kullanım</h3>
                <p>
                  Metnin başına ve sonuna aynı sembolleri koyarak simetrik ve estetik bir
                  görünüm elde edin.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-number">05</div>
                <h3>Favorilerinizi Kaydedin</h3>
                <p>
                  Sık kullandığınız sembolleri bir not defterine kaydedin, her seferinde
                  aramak zorunda kalmayın.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-number">06</div>
                <h3>Kombinasyonlar Deneyin</h3>
                <p>
                  Farklı sembolleri birleştirerek benzersiz dekoratif çerçeveler oluşturun.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 6: FAQ */}
          <div className="info-box reveal">
            <h2 className="section-main-title">Sıkça Sorulan Sorular</h2>

            <div className="faq-accordion">
              <div className={`faq-item ${expandedFaq === 0 ? 'expanded' : ''}`} onClick={() => toggleFaq(0)}>
                <div className="faq-question">
                  <span className="faq-icon">❓</span>
                  <h3>Şık semboller tüm cihazlarda çalışır mı?</h3>
                  <span className="faq-toggle">{expandedFaq === 0 ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>
                    Evet! <strong>Şık semboller</strong> Unicode karakter setini kullanır, bu yüzden iPhone, Android,
                    Windows ve Mac dahil tüm modern cihazlarda görüntülenir. Ancak bazı emojiler eski
                    cihazlarda farklı görünebilir.
                  </p>
                </div>
              </div>

              <div className={`faq-item ${expandedFaq === 1 ? 'expanded' : ''}`} onClick={() => toggleFaq(1)}>
                <div className="faq-question">
                  <span className="faq-icon">📋</span>
                  <h3>Sembolleri nasıl kopyalarım?</h3>
                  <span className="faq-toggle">{expandedFaq === 1 ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>
                    Çok basit! İstediğiniz sembole tıklayın ve otomatik olarak panonuza kopyalanacaktır.
                    "Kopyalandı" bildirimini gördüğünüzde, istediğiniz yere yapıştırabilirsiniz.
                    Mobil ve masaüstünde aynı şekilde çalışır.
                  </p>
                </div>
              </div>

              <div className={`faq-item ${expandedFaq === 2 ? 'expanded' : ''}`} onClick={() => toggleFaq(2)}>
                <div className="faq-question">
                  <span className="faq-icon">📷</span>
                  <h3>Sembolleri Instagram'da kullanabilir miyim?</h3>
                  <span className="faq-toggle">{expandedFaq === 2 ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>
                    Kesinlikle! <strong>Şık semboller</strong> Instagram bio, gönderi altyazıları,
                    hikaye metinleri ve yorumlarda mükemmel çalışır. Kalp, yıldız ve çiçek sembolleri
                    profilinizi öne çıkarmak için harika seçimlerdir.
                  </p>
                </div>
              </div>

              <div className={`faq-item ${expandedFaq === 3 ? 'expanded' : ''}`} onClick={() => toggleFaq(3)}>
                <div className="faq-question">
                  <span className="faq-icon">🎮</span>
                  <h3>Oyun isimlerinde kullanabilir miyim?</h3>
                  <span className="faq-toggle">{expandedFaq === 3 ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>
                    Evet, ancak oyuna bağlıdır. Çoğu oyun Unicode karakterleri destekler ve
                    <strong>özel işaretler</strong> kullanmanıza izin verir. 【】『』 gibi çerçeve sembolleri
                    klan isimleri için özellikle popülerdir. Oyununuzun karakter sınırlamalarını kontrol edin.
                  </p>
                </div>
              </div>

              <div className={`faq-item ${expandedFaq === 4 ? 'expanded' : ''}`} onClick={() => toggleFaq(4)}>
                <div className="faq-question">
                  <span className="faq-icon">💰</span>
                  <h3>Bu araç ücretsiz mi?</h3>
                  <span className="faq-toggle">{expandedFaq === 4 ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>
                    Evet, <strong>sembol kopyalama</strong> aracımız tamamen ücretsizdir. Kayıt veya
                    giriş gerekmez. Tüm {totalSymbols}+ sembol sınırsız ve ücretsiz kullanıma açıktır.
                  </p>
                </div>
              </div>

              <div className={`faq-item ${expandedFaq === 5 ? 'expanded' : ''}`} onClick={() => toggleFaq(5)}>
                <div className="faq-question">
                  <span className="faq-icon">🔒</span>
                  <h3>Güvenli mi?</h3>
                  <span className="faq-toggle">{expandedFaq === 5 ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>
                    Evet, %100 güvenlidir. Tüm işlemler tarayıcınızda gerçekleşir; sunucularımıza hiçbir veri
                    gönderilmez. <strong>Özel semboller</strong> yalnızca kopyala-yapıştır işlemi yapar ve
                    cihazınıza veya hesaplarınıza erişmez.
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
                  <p>Kayıt gerekmez, tek tıkla sembolleri kopyalayın ve kullanın!</p>
                </div>
              </div>

              <div className="feature-banner gradient-security">
                <div className="feature-banner-icon">🔒</div>
                <div className="feature-banner-content">
                  <h3>%100 Güvenli</h3>
                  <p>Tüm işlemler tarayıcınızda gerçekleşir; verileriniz sizde kalır.</p>
                </div>
              </div>

              <div className="feature-banner gradient-mobile">
                <div className="feature-banner-icon">📱</div>
                <div className="feature-banner-content">
                  <h3>Mobil Uyumlu</h3>
                  <p>Telefonunuzdan kolayca sembolleri kopyalayın.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Internal Links Section */}
          <div className="back-link-section">
            <p>
              Yazı stilleri mi arıyorsunuz?
              <Link href="/" className="homepage-link">
                Ana Sayfa
              </Link>
              {' '}veya{' '}
              <Link href="/insta-yazi-tipi" className="homepage-link">
                Instagram Yazı Tipi
              </Link>
              {' '}sayfalarını ziyaret edin.
            </p>
          </div>

        </div>
      </main>

      {/* Toast Notification */}
      {showToast && (
        <div className="toast">
          <span className="toast-icon">✓</span>
          <span>Kopyalandı!</span>
        </div>
      )}

      {/* Footer */}
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

      {/* Additional Styles */}
      <style jsx>{`
        .nav-link.active {
          color: var(--primary-color);
          font-weight: 600;
        }
        .back-link-section {
          text-align: center;
          margin-top: 2rem;
          padding: 1.5rem;
          background: var(--background);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow);
        }
        .back-link-section p {
          color: var(--text-secondary);
          margin: 0;
        }
        .homepage-link {
          color: var(--primary-color);
          font-weight: 600;
          text-decoration: none;
          margin-left: 0.25rem;
          transition: color 0.2s;
        }
        .homepage-link:hover {
          text-decoration: underline;
        }

        /* Symbol Grid Styles */
        .symbol-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
          gap: 0.75rem;
          margin-bottom: var(--spacing-lg);
        }

        .symbol-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.375rem;
          padding: 1rem 0.5rem;
          background: var(--background);
          border: 2px solid var(--border);
          border-radius: var(--radius);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          min-height: 80px;
        }

        .symbol-card:hover {
          border-color: var(--primary-color);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(99, 102, 241, 0.15);
        }

        .symbol-card:active {
          transform: translateY(-1px);
        }

        .symbol-card.copied {
          background: linear-gradient(135deg, var(--success), #059669);
          border-color: var(--success);
          color: white;
        }

        .symbol-card.copied .symbol-char {
          color: white;
        }

        .symbol-card.copied .symbol-action {
          color: rgba(255, 255, 255, 0.9);
        }

        .symbol-char {
          font-size: 1.75rem;
          line-height: 1;
          color: var(--text-primary);
        }

        .symbol-action {
          font-size: 0.625rem;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.025em;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .symbol-card:hover .symbol-action {
          opacity: 1;
        }

        .symbol-card.copied .symbol-action {
          opacity: 1;
        }

        /* Responsive Symbol Grid */
        @media (max-width: 768px) {
          .symbol-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 0.5rem;
          }

          .symbol-card {
            padding: 0.75rem 0.25rem;
            min-height: 70px;
          }

          .symbol-char {
            font-size: 1.5rem;
          }

          .symbol-action {
            font-size: 0.5rem;
            opacity: 1;
          }
        }

        @media (max-width: 480px) {
          .symbol-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.375rem;
          }

          .symbol-card {
            padding: 0.625rem 0.25rem;
            min-height: 60px;
            border-radius: var(--radius-sm);
          }

          .symbol-char {
            font-size: 1.25rem;
          }

          .symbol-action {
            font-size: 0.4375rem;
          }
        }
      `}</style>
    </div>
  )
}
