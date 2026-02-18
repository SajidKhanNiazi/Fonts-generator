'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { Language, translations } from '@/lib/translations'

// ============ SYMBOL CATEGORIES DATA ============

interface SymbolCategory {
  id: string
  name: string
  icon: string
  symbols: string[]
}


// ============ MAIN COMPONENT ============
export default function SekilliSembollerClient() {
  const [lang, setLang] = useState<Language>('tr')
  const [copiedSymbol, setCopiedSymbol] = useState<string | null>(null)
  const [showToast, setShowToast] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const t = translations[lang]

  // Localized Symbols Data
  const symbolCategories = useMemo(() => [
    {
      id: 'kalp',
      name: (t.symbols.categories as any).kalp,
      icon: '❤️',
      symbols: ['❤', '♥', '♡', '💖', '💕', '💗', '💓', '💘', '💝', '💞', '💟', '❥', '❣', 'ღ', '❤️‍🔥', '❤️‍🩹', '🖤', '🤍', '💙', '💚', '💛', '🧡', '💜', '🤎', '❣️', '💔', '🩷', '🩵', '🩶', '♥️', '🫀', '💌', '💋', '😍', '🥰', '😘', '😻', '💑', '💏', '👩‍❤️‍👨', '❦', '❧', '☙', '🫶', '💓', '𖣔', '𓆩', '𓆪', '𓇢', '𓂃']
    },
    {
      id: 'yildiz',
      name: (t.symbols.categories as any).yildiz,
      icon: '⭐',
      symbols: ['★', '☆', '✦', '✧', '✨', '🌟', '⭐', '🌠', '💫', '✩', '✪', '✫', '✬', '✭', '✮', '✯', '✰', '⁂', '⁎', '⁑', '✴', '✵', '✶', '✷', '✸', '✹', '✺', '❂', '❃', '❊', '✳️', '✴️', '🔯', '💥', '🎇', '🎆', '✡', '⭒', '⭑', '🌃', '🌌', '🔅', '🔆', '☀️', '🌞', '🌄', '🌅', '༄', '࿐', '⋆']
    },
    {
      id: 'ok',
      name: (t.symbols.categories as any).ok,
      icon: '➤',
      symbols: ['➤', '➜', '➝', '➞', '➠', '➳', '➵', '→', '←', '↑', '↓', '↔', '↕', '↖', '↗', '↘', '↙', '⇒', '⇐', '⇑', '⇓', '⇔', '⇕', '➔', '➙', '➚', '➛', '➟', '➡', '⬅', '⬆', '⬇', '↩', '↪', '⤴', '⤵', '🔙', '🔚', '🔛', '🔜', '🔝', '▶️', '◀️', '⏩', '⏪', '⏫', '⏬', '➲', '➢', '➣']
    },
    {
      id: 'cerceve',
      name: (t.symbols.categories as any).cerceve,
      icon: '【】',
      symbols: ['【', '】', '『', '』', '《', '》', '⟦', '⟧', '〖', '〗', '〘', '〙', '〚', '〛', '「', '」', '〔', '〕', '〈', '〉', '﹁', '﹂', '﹃', '﹄', '︵', '︶', '︷', '︸', '꧁', '꧂', '『', '』', '༺', '༻', '〔', '〕', '⦅', '⦆', '⦃', '⦄', '❮', '❯', '❰', '❱', '❲', '❳', '❴', '❵', '⟨', '⟩']
    },
    {
      id: 'cicek',
      name: (t.symbols.categories as any).cicek,
      icon: '🌸',
      symbols: ['🌸', '🌷', '🌹', '🌺', '🌻', '🌼', '💐', '🏵', '❀', '✿', '❁', '❃', '❋', '🌵', '🌴', '🌲', '🌳', '🌿', '☘', '🍀', '🍃', '🍂', '🍁', '🌾', '🪻', '🪷', '🪹', '🪺', '🌱', '🪴', '🌏', '🌍', '🌎', '🦋', '🐝', '🌈', '🍄', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🦚', '🦢', '🕊️', '🐦']
    },
    {
      id: 'dekoratif',
      name: (t.symbols.categories as any).dekoratif,
      icon: '✪',
      symbols: ['✪', '✯', '✰', '☾', '☽', '⚝', '❖', '❦', '❧', '☙', '❡', '❢', '❣', '✾', '✽', '✼', '✻', '❆', '❅', '❄', '❈', '❉', '❊', '❋', '✣', '✤', '✥', '✱', '✲', '✳', '༄', '࿐', '࿔', '᯽', '꧂', '꧁', '۞', '۩', '࿊', '࿋', '࿌', '᪥', '⌘', '⚜', '☬', '☫', '☤', '⚕', '⚚', '☸']
    },
    {
      id: 'emoji',
      name: (t.symbols.categories as any).emoji,
      icon: '😊',
      symbols: ['😊', '😍', '🥰', '😘', '🤩', '😎', '🥳', '😇', '🤗', '😏', '😌', '🙃', '😉', '😋', '🤪', '🔥', '💯', '👑', '🎯', '💪', '🙏', '👀', '🎉', '🎊', '✨', '💫', '⚡', '🌈', '🦄', '🍀', '🌙', '☀️', '❄️', '🌊', '🔮', '🎭', '🎪', '🎨', '🎬', '📸', '💎', '👻', '🤖', '👽', '🦋', '🌺', '🍒', '🍓', '🌴']
    },
    {
      id: 'oyun',
      name: (t.symbols.categories as any).oyun,
      icon: '🎮',
      symbols: ['🎮', '🕹', '🎲', '🎯', '🏆', '🥇', '🥈', '🥉', '🎖', '🏅', '⚔️', '🗡️', '🛡️', '🏹', '💣', '💥', '🔫', '☠️', '💀', '👾', '🤖', '🎳', '🎰', '🎴', '🃏', '🀄', '♠', '♣', '♥', '♦', '♤', '♧', '♡', '♢', '🎁', '🎀', '🎈', '🎉', '🎊', '🎄', '🎃', '⭐', '🌟', '✨', '💫', '🔥', '❌', '⭕', '✅', '🚀']
    },
    {
      id: 'muzik',
      name: (t.symbols.categories as any).muzik,
      icon: '🎵',
      symbols: ['♪', '♫', '♬', '♩', '🎵', '🎶', '🎼', '🎤', '🎧', '🎸', '🎹', '🎺', '🎻', '🥁', '🎷', '🪘', '🪗', '🪕', '🎙', '📻', '🔔', '🔕', '🔊', '🔉', '🔈', '🔇', '📢', '📣', '🔌', '🎚', '🎛', '📯', '🪈', '🎶', '🎵', '🎤', '🎧', '🎼', '♭', '♮', '♯', '𝄞', '𝄢', '𝄫', '𝄪', '🎹', '🪇', '🪘', '📀']
    },
    {
      id: 'hava',
      name: (t.symbols.categories as any).hava,
      icon: '☀️',
      symbols: ['☀', '☁', '☂', '☃', '☄', '🌤', '⛅', '🌥', '🌦', '🌧', '⛈', '🌩', '🌨', '❄', '🌬', '💨', '🌪', '🌈', '☔', '⚡', '🌊', '💧', '💦', '🌙', '🌛', '🌜', '🌝', '🌚', '⭐', '🌟', '☀️', '🌞', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌍', '🌎', '🌏', '🌐', '🛸', '🚀', '🌌', '✨', '☁️', '⛄']
    },
    {
      id: 'isaretler',
      name: (t.symbols.categories as any).isaretler,
      icon: '✓',
      symbols: ['✓', '✔', '✗', '✘', '✕', '✖', '☑', '☒', '☐', '✅', '❌', '❎', '⭕', '🔴', '🟠', '🟡', '🟢', '🔵', '🟣', '🟤', '⚫', '⚪', '🔘', '🔲', '🔳', '▪', '▫', '◼', '◻', '◾', '◽', '▶', '◀', '🔺', '🔻', '🔷', '🔶', '🔸', '🔹', '💠', '🔵', '🟥', '🟧', '🟨', '🟩', '🟦', '🟪', '⬛', '⬜', '🔈']
    },
    {
      id: 'semboller',
      name: (t.symbols.categories as any).semboller,
      icon: '♈',
      symbols: ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '⛎', '☮', '☯', '☪', '✝', '☦', '✡', '🕉', '☸', '⚛', '🔯', '🆔', '⚠', '☢', '☣', '📛', '🚫', '⭕', '♀', '♂', '⚧', '⚥', '⚢', '⚣', '⚤', '🔱', '⚜', '🧿', '👁️‍🗨️', '🧠', '👁', '💀', '☠️', '👻', '🎭', '🔮', '🪬']
    },
    {
      id: 'el',
      name: (t.symbols.categories as any).el,
      icon: '👋',
      symbols: ['👋', '🤚', '🖐', '✋', '🖖', '👌', '🤌', '🤏', '✌', '🤞', '🫰', '🤟', '🤘', '🤙', '👈', '👉', '👆', '🖕', '👇', '☝', '🫵', '👍', '👎', '✊', '👊', '🤛', '🤜', '👏', '🙌', '🤲', '🙏', '🤝', '💪', '🦾', '🦿', '🦵', '🦶', '👂', '🦻', '👃', '🧠', '👀', '👁', '👅', '👄', '💋', '🫦', '🦷', '🦴']
    },
    {
      id: 'minimal',
      name: (t.symbols.categories as any).minimal,
      icon: '●',
      symbols: ['•', '◦', '○', '●', '◉', '◎', '◐', '◑', '◒', '◓', '◔', '◕', '◖', '◗', '◘', '◙', '◚', '◛', '◜', '◝', '◞', '◟', '◠', '◡', '⦿', '⊙', '⊚', '⊛', '⊜', '⊝', '▪', '▫', '▬', '▭', '▮', '▯', '▰', '▱', '▲', '△', '▴', '▵', '▶', '▷', '▸', '▹', '►', '▻', '◆', '◇']
    },
    {
      id: 'para',
      name: (t.symbols.categories as any).para,
      icon: '💰',
      symbols: ['💰', '💵', '💴', '💶', '💷', '💸', '💳', '🪙', '💲', '₺', '$', '€', '£', '¥', '₩', '₽', '฿', '₿', '💎', '📈', '📉', '📊', '🏦', '🏧', '💹', '🛒', '🛍', '💼', '📦', '🎁', '🏪', '🏬', '🏭', '🏢', '💵', '💴', '💶', '💷', '🤑', '💲', '💱', '💹', '📈', '📉', '💳', '🧾', '💸', '🪙', '💎']
    },
    {
      id: 'turk',
      name: (t.symbols.categories as any).turk,
      icon: '🇹🇷',
      symbols: ['🇹🇷', '🧿', '☪', '🌙', '⭐', '🌷', '☕', '🫖', '🥯', '🍢', '🥙', '🍯', '🕌', '۩', '༺', '༻', '꧁', '꧂', '۞', '࿊', '◆', '◇', '❖', '✦', '✧', '★', '☆', '⁂', '❃', '❋', '🏛️', '🎭', '🧕', '🕋', '📿', '🪬', '🔮', '🎪', '🎡', '🎢', '🌍', '�', '🪵', '🪵', '�', '🐚', '🪸', '🪼', '🪵']
    }
  ], [t])

  // Toggle FAQ accordion
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

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
      "name": t.symbols.hero.title + " " + t.symbols.hero.titleHighlight,
      "description": t.symbols.hero.description,
      "url": "https://yazı-stilleripro.com.tr/sekilli-semboller",
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
              {t.common.logo}
            </Link>

            {/* Desktop Navigation */}
            <nav className="nav desktop-nav">
              <Link href="/" className="nav-link">
                {t.common.nav.home}
              </Link>
              <Link href="/insta-yazi-tipi" className="nav-link">
                {t.common.nav.insta}
              </Link>
            </nav>

            {/* Right Actions: Language, Theme & Hamburger */}
            <div className="header-actions">
              {/* Language Switcher */}
              <div className="lang-switcher">
                <button
                  className={`lang-btn ${lang === 'tr' ? 'active' : ''}`}
                  onClick={() => setLang('tr')}
                >
                  TR
                </button>
                <button
                  className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                  onClick={() => setLang('en')}
                >
                  EN
                </button>
              </div>

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
            {/* Language Switcher Mobile */}
            <div className="mobile-lang-switcher">
              <button
                className={`mobile-lang-btn ${lang === 'tr' ? 'active' : ''}`}
                onClick={() => { setLang('tr'); setIsMobileMenuOpen(false); }}
              >
                Türkçe
              </button>
              <button
                className={`mobile-lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => { setLang('en'); setIsMobileMenuOpen(false); }}
              >
                English
              </button>
            </div>

            <Link href="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="nav-icon">🏠</span> {t.common.nav.home}
            </Link>
            <Link href="/insta-yazi-tipi" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="nav-icon">📸</span> {t.common.nav.insta}
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <div className="container">

          {/* Hero Section */}
          <div className="hero-section">
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
              <div className="hero-badge">
                <span className="badge-icon">🎨</span>
                <span>{t.symbols.hero.badge}</span>
              </div>

              <h1 className="hero-title">
                <span className="title-line">
                  <span className="title-word">{t.symbols.hero.title}</span>
                  <span className="title-word highlight">{t.symbols.hero.titleHighlight}</span>
                </span>
              </h1>

              <p className="hero-description">
                {t.symbols.hero.description}
              </p>

              {/* Stats */}
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">{totalSymbols}+</span>
                  <span className="stat-label">{t.symbols.hero.stat1}</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">{symbolCategories.length}</span>
                  <span className="stat-label">{t.symbols.hero.stat2}</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">🇹🇷</span>
                  <span className="stat-label">{t.symbols.hero.stat3}</span>
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
                {t.common.all}
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
                      title={`${symbol} ${t.common.copy}`}
                    >
                      <span className="symbol-char">{symbol}</span>
                      <span className="symbol-action">
                        {isCopied ? '✓' : t.common.copy.replace('📋 ', '')}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          ))}


          {/* ============ DYNAMIC LOCALIZED CONTENT ============ */}
          <div className="content-sections">
            {t.symbols.sections.map((section: any) => (
              <section key={section.id} id={section.id} className="info-box reveal">
                <h2 className="section-main-title">{section.title}</h2>

                {section.type === 'text' && (
                  <div className="content-intro">
                    <p className="intro-text">{section.content}</p>
                  </div>
                )}

                {section.type === 'features' && (
                  <div className="feature-cards-grid">
                    {section.features.map((feature: any, idx: number) => (
                      <div key={idx} className={`feature-card gradient-${idx % 4 === 0 ? 'purple' : idx % 4 === 1 ? 'pink' : idx % 4 === 2 ? 'blue' : 'green'}`}>
                        <div className="feature-card-icon">{idx === 0 ? '❤️' : idx === 1 ? '📋' : idx === 2 ? '📱' : '🎮'}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.type === 'categoriesGrid' && (
                  <div className="categories-showcase">
                    {section.categories.map((cat: any, idx: number) => (
                      <div key={idx} className="category-card">
                        <div className="category-header-card">
                          <span className="category-emoji">{cat.icon}</span>
                          <h3>{cat.title}</h3>
                        </div>
                        <p>{cat.desc}</p>
                        <div className="category-examples">
                          {cat.examples.map((ex: string, eIdx: number) => (
                            <span key={eIdx} className="example-text">{ex}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {section.type === 'tips' && (
                  <div className="tips-grid">
                    {section.tips.map((tip: any, idx: number) => (
                      <div key={idx} className="tip-card">
                        <div className="tip-number">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</div>
                        <h3>{tip.title}</h3>
                        <p>{tip.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.type === 'faq' && (
                  <div className="faq-accordion">
                    {section.faqs.map((faq: any, idx: number) => (
                      <div
                        key={idx}
                        className={`faq-item ${expandedFaq === idx ? 'expanded' : ''}`}
                        onClick={() => toggleFaq(idx)}
                      >
                        <div className="faq-question">
                          <span className="faq-icon">❓</span>
                          <h3>{faq.q}</h3>
                          <span className="faq-toggle">{expandedFaq === idx ? '−' : '+'}</span>
                        </div>
                        <div className="faq-answer">
                          <p>{faq.a}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Link back to other pages */}
          <div className="back-link-section reveal">
            <p>
              {lang === 'tr' ? 'Daha fazla yazı stili mi arıyorsunuz?' : 'Looking for more font styles?'}
              <Link href="/" className="homepage-link">
                {t.common.nav.home}
              </Link>
              <Link href="/insta-yazi-tipi" className="homepage-link">
                {t.common.nav.insta}
              </Link>
              {' '}{lang === 'tr' ? 'sayfamıza göz atın.' : 'page.'}
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <Link href="/" className="logo">
                {t.common.logo}
              </Link>
              <p className="footer-tagline">
                {lang === 'tr'
                  ? 'Sosyal medya ve oyunlar için en havalı yazı tipleri ve semboller.'
                  : 'Coolest fonts and symbols for social media and games.'}
              </p>
            </div>
            <div className="footer-links-grid">
              <div className="footer-links-col">
                <h4>{lang === 'tr' ? 'Hızlı Bağlantılar' : 'Quick Links'}</h4>
                <ul>
                  <li><Link href="/">{t.common.footer.home}</Link></li>
                  <li><Link href="/insta-yazi-tipi">{t.common.footer.insta}</Link></li>
                  <li><Link href="/gizlilik-politikasi">Gizlilik Politikası</Link></li>
                  <li><Link href="/kullanim-kosullari">Kullanım Koşulları</Link></li>
                  <li><Link href="/hakkimizda">Hakkımızda</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{t.common.footer.rights}</p>
          </div>
        </div>
      </footer>

      {/* Copy Toast */}
      {showToast && (
        <div className="toast-container">
          <div className="toast">
            <span className="toast-icon">✨</span>
            <span className="toast-text">
              {copiedSymbol}: {lang === 'tr' ? 'Panoya kopyalandı!' : 'Copied to clipboard!'}
            </span>
          </div>
        </div>
      )}

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
    </div >
  )
}
