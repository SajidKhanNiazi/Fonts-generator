'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import NextImage from 'next/image'
import { Language, translations } from '@/lib/translations'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
      <Header
        lang={lang}
        setLang={setLang}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Main Content */}
      <main className="main">
        {/* Full-Screen Hero Section */}
        <div className="hero-section-fullscreen">
          <div className="hero-bg-fullscreen">
            <div className="hero-gradient-animated"></div>
            <div className="hero-particles-animated">
              <div className="particle particle-1">✨</div>
              <div className="particle particle-2">❤️</div>
              <div className="particle particle-3">⭐</div>
              <div className="particle particle-4">💫</div>
              <div className="particle particle-5">🌟</div>
              <div className="particle particle-6">✦</div>
              <div className="particle particle-7">🎈</div>
              <div className="particle particle-8">🎨</div>
            </div>
            <div className="hero-shapes-animated">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
              <div className="shape shape-4"></div>
            </div>
          </div>

          <div className="hero-content-fullscreen">
            <div className="hero-badge-modern">
              <span className="badge-pulse"></span>
              <span className="badge-icon">🎨</span>
              <span className="badge-text">{t.symbols.hero.badge}</span>
            </div>

            <h1 className="hero-title-fullscreen">
              <span className="title-line-animated">
                <span className="title-word-animated">{t.symbols.hero.title}</span>
                <span className="title-word-animated highlight-gradient">{t.symbols.hero.titleHighlight}</span>
              </span>
            </h1>

            <p className="hero-description-fullscreen">
              {t.symbols.hero.description}
            </p>

            {/* Stats */}
            <div className="hero-stats-fullscreen">
              <div className="stat-item-premium">
                <span className="stat-icon">✨</span>
                <div className="stat-content">
                  <span className="stat-number-premium">{totalSymbols}+</span>
                  <span className="stat-label-premium">{t.symbols.hero.stat1}</span>
                </div>
              </div>
              <div className="stat-divider-premium"></div>
              <div className="stat-item-premium">
                <span className="stat-icon">📊</span>
                <div className="stat-content">
                  <span className="stat-number-premium">{symbolCategories.length}</span>
                  <span className="stat-label-premium">{t.symbols.hero.stat2}</span>
                </div>
              </div>
              <div className="stat-divider-premium"></div>
              <div className="stat-item-premium">
                <span className="stat-icon">🇹🇷</span>
                <div className="stat-content">
                  <span className="stat-number-premium">100%</span>
                  <span className="stat-label-premium">{t.symbols.hero.stat3}</span>
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
            {t.symbols.sections.map((section: any, sectionIdx: number) => (
              <section key={section.id} id={section.id} className={`content-card reveal ${section.type === 'faq' ? 'content-card--faq' : ''}`}>

                {/* Section header */}
                <div className="content-card__header">
                  {section.level === 3 ? (
                    <h3 className="content-card__title content-card__title--h3">{section.title}</h3>
                  ) : (
                    <h2 className="content-card__title">{section.title}</h2>
                  )}
                </div>

                {section.type === 'article' && (
                  <div className="article-body">
                    {section.content.map((item: any, idx: number) => {
                      if (item.type === 'p') {
                        // Support {{text|url}} or {{keyword}} (defaults to /)
                        const parts = item.text.split(/(\{\{[^}]+\}\})/g)
                        return (
                          <p key={idx} className="article-body__p">
                            {parts.map((part: string, pIdx: number) => {
                              const match = part.match(/^\{\{(.+)\}\}$/)
                              if (match) {
                                const content = match[1]
                                const [text, url] = content.split('|')
                                const href = url || '/'
                                const isExternal = href.startsWith('http')

                                return (
                                  <Link
                                    key={pIdx}
                                    href={href}
                                    className="article-body__link"
                                    {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                  >
                                    {text}
                                  </Link>
                                )
                              }
                              return <span key={pIdx}>{part}</span>
                            })}
                          </p>
                        )
                      }
                      if (item.type === 'list') {
                        return (
                          <ul key={idx} className="article-body__list">
                            {item.items.map((li: string, liIdx: number) => (
                              <li key={liIdx} className="article-body__li">
                                <span className="article-body__bullet">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="url(#bulletGrad)" /><path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><defs><linearGradient id="bulletGrad" x1="0" y1="0" x2="16" y2="16"><stop stopColor="#6366f1" /><stop offset="1" stopColor="#a855f7" /></linearGradient></defs></svg>
                                </span>
                                <span className="article-body__li-text">{li}</span>
                              </li>
                            ))}
                          </ul>
                        )
                      }
                      if (item.type === 'image') {
                        return (
                          <div key={idx} className="article-body__image-wrap">
                            <NextImage
                              src={item.src}
                              alt={item.alt || ''}
                              width={800}
                              height={450}
                              className="article-body__image"
                            />
                          </div>
                        )
                      }
                      return null
                    })}
                  </div>
                )}

                {section.type === 'faq' && (
                  <div className="faq-section">
                    <div className="faq-list">
                      {section.faqs.map((faq: any, idx: number) => (
                        <div
                          key={idx}
                          className={`faq-item ${expandedFaq === idx ? 'faq-item--open' : ''}`}
                          onClick={() => toggleFaq(idx)}
                        >
                          <div className="faq-item__bar" />
                          <div className="faq-item__head">
                            <div className="faq-item__toggle">
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <line className="faq-toggle__h" x1="3" y1="9" x2="15" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <line className="faq-toggle__v" x1="9" y1="3" x2="9" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                              </svg>
                            </div>
                            <h3 className="faq-item__q">{faq.q}</h3>
                          </div>
                          <div className="faq-item__body">
                            <div className="faq-item__answer">
                              <p className="faq-item__a">{faq.a}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer lang={lang} />

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

        /* ==========================================
           CONTENT SECTIONS — Clean Editorial Design
           ========================================== */

        .content-sections {
          margin-top: 5rem;
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 860px;
          margin-left: auto;
          margin-right: auto;
        }

        /* ---- Card shell ---- */
        .content-card {
          position: relative;
          background: var(--background);
          border: 1px solid var(--border);
          border-left: 4px solid transparent;
          border-image: linear-gradient(180deg, #6366f1 0%, #a855f7 100%) 1;
          border-image-slice: 0 0 0 1;
          border-radius: 0 1rem 1rem 0;
          padding: 2.25rem 2.5rem;
          transition: transform 0.3s cubic-bezier(.4,0,.2,1),
                      box-shadow 0.3s cubic-bezier(.4,0,.2,1);
        }
        .content-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px -8px rgba(99,102,241,.1),
                      0 4px 12px -4px rgba(0,0,0,.04);
        }

        /* ---- Section header ---- */
        .content-card__header {
          margin-bottom: 1.5rem;
        }
        .content-card__title {
          font-size: 1.625rem;
          font-weight: 800;
          color: var(--text-primary);
          margin: 0;
          letter-spacing: -0.025em;
          line-height: 1.3;
        }
        .content-card__title--h3 {
          font-size: 1.25rem;
          font-weight: 700;
        }

        /* ---- Article body ---- */
        .article-body {
          display: flex;
          flex-direction: column;
          gap: 1.125rem;
          padding-left: 0;
        }
        .article-body__p {
          font-size: 1.0625rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin: 0;
        }

        /* List */
        .article-body__list {
          list-style: none;
          padding: 0.75rem 1.25rem;
          margin: 0.25rem 0;
          background: linear-gradient(135deg, rgba(99,102,241,.04) 0%, rgba(168,85,247,.04) 100%);
          border-radius: 0.875rem;
          border-left: 3px solid rgba(99,102,241,.35);
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }
        .article-body__li {
          display: flex;
          align-items: flex-start;
          gap: 0.875rem;
          line-height: 1.6;
        }
        .article-body__bullet {
          flex-shrink: 0;
          margin-top: 0.25rem;
          display: flex;
          align-items: center;
        }
        .article-body__li-text {
          font-size: 1.0625rem;
          color: var(--text-secondary);
        }

        /* Internal keyword link */
        .article-body__link {
          color: #6366f1;
          font-weight: 600;
          text-decoration: none;
          background: linear-gradient(90deg, #6366f1, #a855f7);
          background-size: 0% 2px;
          background-position: 0 100%;
          background-repeat: no-repeat;
          transition: background-size 0.3s ease;
        }
        .article-body__link:hover {
          background-size: 100% 2px;
        }

        .article-body__image-wrap {
          margin: 1.5rem 0;
          border-radius: 1rem;
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: 0 4px 20px -5px rgba(0,0,0,0.1);
        }
        .article-body__image {
          display: block;
          max-width: 100%;
          height: auto;
          transition: transform 0.5s ease;
        }
        .article-body__image:hover {
          transform: scale(1.02);
        }

        /* ==========================================
           FAQ — Interactive Accordion
           ========================================== */

        .content-card--faq {
          padding-bottom: 1.5rem;
          border-image: none;
          border-left: 4px solid transparent;
          background: linear-gradient(135deg, rgba(99,102,241,.02) 0%, rgba(168,85,247,.02) 100%);
        }
        .faq-section {
          margin-top: 0.25rem;
        }
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* Individual FAQ item */
        .faq-item {
          position: relative;
          cursor: pointer;
          border-bottom: 1px solid var(--border);
          transition: background 0.3s ease;
        }
        .faq-item:last-child {
          border-bottom: none;
        }
        .faq-item:hover {
          background: rgba(99,102,241,.03);
        }

        /* Left accent bar (hidden by default, slides in on open) */
        .faq-item__bar {
          position: absolute;
          left: -2.5rem;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, #6366f1, #a855f7);
          border-radius: 2px;
          transform: scaleY(0);
          transition: transform 0.35s cubic-bezier(.4,0,.2,1);
        }
        .faq-item--open .faq-item__bar {
          transform: scaleY(1);
        }

        /* Head row */
        .faq-item__head {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 0.5rem;
        }

        /* Plus/minus toggle */
        .faq-item__toggle {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(99,102,241,.08), rgba(168,85,247,.08));
          color: #6366f1;
          transition: background 0.3s ease, transform 0.3s ease, color 0.3s ease;
        }
        .faq-item:hover .faq-item__toggle {
          background: linear-gradient(135deg, rgba(99,102,241,.15), rgba(168,85,247,.15));
          transform: scale(1.1);
        }
        .faq-item--open .faq-item__toggle {
          background: linear-gradient(135deg, #6366f1, #a855f7);
          color: #fff;
          transform: scale(1.05);
        }

        /* Animate the vertical line of + icon to 0 → becomes minus */
        .faq-toggle__v {
          transition: transform 0.3s cubic-bezier(.4,0,.2,1), opacity 0.2s ease;
          transform-origin: center;
        }
        .faq-item--open .faq-toggle__v {
          transform: rotate(90deg);
          opacity: 0;
        }

        /* Question text */
        .faq-item__q {
          flex: 1;
          font-size: 1.0625rem;
          font-weight: 600;
          margin: 0;
          color: var(--text-primary);
          line-height: 1.45;
          transition: color 0.25s ease;
        }
        .faq-item--open .faq-item__q {
          color: #6366f1;
        }

        /* Answer panel — CSS Grid animation */
        .faq-item__body {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.4s cubic-bezier(.4,0,.2,1);
        }
        .faq-item--open .faq-item__body {
          grid-template-rows: 1fr;
        }
        .faq-item__answer {
          overflow: hidden;
        }
        .faq-item__a {
          margin: 0;
          padding: 0 0.5rem 1.25rem 3.75rem;
          font-size: 1rem;
          line-height: 1.75;
          color: var(--text-secondary);
          opacity: 0;
          transform: translateY(-6px);
          transition: opacity 0.35s ease 0.1s, transform 0.35s ease 0.1s;
        }
        .faq-item--open .faq-item__a {
          opacity: 1;
          transform: translateY(0);
        }

        /* ---- Responsive ---- */
        @media (max-width: 768px) {
          .content-sections {
            margin-top: 3rem;
            gap: 1.5rem;
          }
          .content-card {
            padding: 1.5rem 1.25rem;
            border-radius: 0 0.75rem 0.75rem 0;
          }
          .content-card__header {
            margin-bottom: 1rem;
          }
          .content-card__title {
            font-size: 1.25rem;
          }
          .content-card__title--h3 {
            font-size: 1.0625rem;
          }
          .article-body__p, .article-body__li-text {
            font-size: 0.9375rem;
          }
          .article-body__list {
            padding: 0.625rem 1rem;
          }
          .faq-item__head {
            padding: 1rem 0.25rem;
            gap: 0.75rem;
          }
          .faq-item__toggle {
            width: 2rem;
            height: 2rem;
          }
          .faq-item__q {
            font-size: 0.9375rem;
          }
          .faq-item__a {
            padding: 0 0.25rem 1rem 3rem;
            font-size: 0.9375rem;
          }
          .faq-item__bar {
            left: -1.25rem;
          }
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
