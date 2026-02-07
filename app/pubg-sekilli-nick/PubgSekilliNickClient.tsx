'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'

// ============ PUBG NICKNAME CATEGORIES ============

interface NicknameCategory {
  id: string
  name: string
  icon: string
  nicknames: string[]
}

const nicknameCategories: NicknameCategory[] = [
  {
    id: 'havali',
    name: 'Havalı PUBG Nickleri',
    icon: '🔥',
    nicknames: [
      '🔥Killer🔥', '⚡Death⚡', '💀Shadow💀', '🔥Demon🔥', '⚔️Warrior⚔️', '💥Destroyer💥',
      '🔥Phoenix🔥', '⚡Thunder⚡', '💀Reaper💀', '🔥Ghost🔥', '⚔️Assassin⚔️', '💥Storm💥',
      '🔥Viper🔥', '⚡Blade⚡', '💀Nightmare💀', '🔥Dragon🔥', '⚔️Hunter⚔️', '💥Rage💥',
      '🔥Titan🔥', '⚡Fury⚡', '💀Venom💀', '🔥Cobra🔥', '⚔️Savage⚔️', '💥Chaos💥',
      '🔥Warlord🔥', '⚡Storm⚡', '💀Darkness💀', '🔥Inferno🔥', '⚔️Vengeance⚔️', '💥Crusher💥',
      '🔥Nemesis🔥', '⚡Zeus⚡', '💀Hades💀', '🔥Ares🔥', '⚔️Mars⚔️', '💥Titan💥',
      '🔥Legend🔥', '⚡Elite⚡', '💀Master💀', '🔥Pro🔥', '⚔️Champion⚔️', '💥King💥'
    ]
  },
  {
    id: 'sekilli',
    name: 'Şekilli & Sembollü Nickler',
    icon: '✨',
    nicknames: [
      '꧁༺Killer༻꧂', '【★Death★】', '『⚡Storm⚡』', '༺💀Shadow💀༻', '【🔥Demon🔥】',
      '꧁⚔️Warrior⚔️꧂', '『💥Destroyer💥』', '【⚡Thunder⚡】', '༺🔥Phoenix🔥༻', '꧁💀Reaper💀꧂',
      '【⚔️Assassin⚔️】', '『💥Storm💥』', '༺🔥Viper🔥༻', '꧁⚡Blade⚡꧂', '【💀Nightmare💀】',
      '『🔥Dragon🔥』', '༺⚔️Hunter⚔️༻', '꧁💥Rage💥꧂', '【🔥Titan🔥】', '『⚡Fury⚡』',
      '༺💀Venom💀༻', '꧁🔥Cobra🔥꧂', '【⚔️Savage⚔️】', '『💥Chaos💥』', '༺🔥Warlord🔥༻',
      '꧁⚡Storm⚡꧂', '【💀Darkness💀】', '『🔥Inferno🔥』', '༺⚔️Vengeance⚔️༻', '꧁💥Crusher💥꧂',
      '【🔥Nemesis🔥】', '『⚡Zeus⚡』', '༺💀Hades💀༻', '꧁🔥Ares🔥꧂', '【⚔️Mars⚔️】',
      '『💥Titan💥』', '༺🔥Legend🔥༻', '꧁⚡Elite⚡꧂', '【💀Master💀】', '『🔥Pro🔥』'
    ]
  },
  {
    id: 'pro',
    name: 'Pro & Kısa Nickler',
    icon: '👑',
    nicknames: [
      'PRO', 'ELITE', 'KING', 'ACE', 'TOP', 'BEST', 'WIN', 'GOAT', 'MVP', 'LEG',
      'PRO1', 'ELITE1', 'KING1', 'ACE1', 'TOP1', 'BEST1', 'WIN1', 'GOAT1', 'MVP1', 'LEG1',
      'PRO★', 'ELITE★', 'KING★', 'ACE★', 'TOP★', 'BEST★', 'WIN★', 'GOAT★', 'MVP★', 'LEG★',
      'PRO🔥', 'ELITE🔥', 'KING🔥', 'ACE🔥', 'TOP🔥', 'BEST🔥', 'WIN🔥', 'GOAT🔥', 'MVP🔥', 'LEG🔥',
      'PRO⚡', 'ELITE⚡', 'KING⚡', 'ACE⚡', 'TOP⚡', 'BEST⚡', 'WIN⚡', 'GOAT⚡', 'MVP⚡', 'LEG⚡',
      'PRO💀', 'ELITE💀', 'KING💀', 'ACE💀', 'TOP💀', 'BEST💀', 'WIN💀', 'GOAT💀', 'MVP💀', 'LEG💀'
    ]
  },
  {
    id: 'clan',
    name: 'Clan / Team Nickleri',
    icon: '⚔️',
    nicknames: [
      '【CLAN】Killer', '【TEAM】Death', '【SQUAD】Shadow', '【ARMY】Demon', '【FORCE】Warrior',
      '【CLAN】Destroyer', '【TEAM】Phoenix', '【SQUAD】Thunder', '【ARMY】Reaper', '【FORCE】Ghost',
      '【CLAN】Assassin', '【TEAM】Storm', '【SQUAD】Viper', '【ARMY】Blade', '【FORCE】Nightmare',
      '【CLAN】Dragon', '【TEAM】Hunter', '【SQUAD】Rage', '【ARMY】Titan', '【FORCE】Fury',
      '【CLAN】Venom', '【TEAM】Cobra', '【SQUAD】Savage', '【ARMY】Chaos', '【FORCE】Warlord',
      '【CLAN】Storm', '【TEAM】Darkness', '【SQUAD】Inferno', '【ARMY】Vengeance', '【FORCE】Crusher',
      '【CLAN】Nemesis', '【TEAM】Zeus', '【SQUAD】Hades', '【ARMY】Ares', '【FORCE】Mars',
      '【CLAN】Titan', '【TEAM】Legend', '【SQUAD】Elite', '【ARMY】Master', '【FORCE】Pro'
    ]
  },
  {
    id: 'agresif',
    name: 'Agresif / Savaşçı Nickler',
    icon: '💀',
    nicknames: [
      '💀Killer💀', '☠️Death☠️', '⚔️Warrior⚔️', '🔥Destroyer🔥', '💥Crusher💥',
      '💀Reaper💀', '☠️Shadow☠️', '⚔️Assassin⚔️', '🔥Hunter🔥', '💥Savage💥',
      '💀Vengeance💀', '☠️Nemesis☠️', '⚔️Warlord⚔️', '🔥Titan🔥', '💥Chaos💥',
      '💀Darkness💀', '☠️Nightmare☠️', '⚔️Demon⚔️', '🔥Phoenix🔥', '💥Storm💥',
      '💀Venom💀', '☠️Blade☠️', '⚔️Fury⚔️', '🔥Rage🔥', '💥Thunder💥',
      '💀Inferno💀', '☠️Cobra☠️', '⚔️Viper⚔️', '🔥Dragon🔥', '💥Zeus💥',
      '💀Hades💀', '☠️Ares☠️', '⚔️Mars⚔️', '🔥Legend🔥', '💥Elite💥',
      '💀Master💀', '☠️Pro☠️', '⚔️Champion⚔️', '🔥King🔥', '💥Ace💥'
    ]
  }
]

// ============ PUBG NICKNAME PATTERNS WITH UNIQUE LABELS ============
interface NicknamePattern {
  pattern: string
  label: string
}

const pubgPatterns: NicknamePattern[] = [
  // Classic frames
  { pattern: `꧁༒{name}༒꧂`, label: 'Klasik Çerçeve' },
  { pattern: `꧁༺{name}༻꧂`, label: 'Süslü Çerçeve' },
  { pattern: `【★{name}★】`, label: 'Yıldızlı Çerçeve' },
  { pattern: `『{name}』`, label: 'Japon Çerçeve' },
  { pattern: `【{name}】`, label: 'Köşeli Çerçeve' },
  { pattern: `《{name}》`, label: 'Çift Çerçeve' },
  { pattern: `「{name}」`, label: 'Minimal Çerçeve' },
  { pattern: `〔{name}〕`, label: 'Yuvarlak Çerçeve' },
  // Special symbols
  { pattern: `亗{name}亗`, label: 'Özel Sembol' },
  { pattern: `☠︎{name}☠︎`, label: 'Korsan Stili' },
  { pattern: `𓆩{name}𓆪`, label: 'Mısır Stili' },
  { pattern: `★彡{name}彡★`, label: 'Yıldız Parıltı' },
  { pattern: `✦{name}✦`, label: 'Parlak Yıldız' },
  { pattern: `✧{name}✧`, label: 'Işıltılı Yıldız' },
  { pattern: `❖{name}❖`, label: 'Elmas Stil' },
  // Emoji styles
  { pattern: `🔥{name}🔥`, label: 'Ateşli Stil' },
  { pattern: `⚡{name}⚡`, label: 'Şimşek Stil' },
  { pattern: `💀{name}💀`, label: 'Kafatası Stil' },
  { pattern: `⚔️{name}⚔️`, label: 'Kılıç Stil' },
  { pattern: `💥{name}💥`, label: 'Patlama Stil' },
  { pattern: `☠️{name}☠️`, label: 'Ölüm İşareti' },
  { pattern: `👑{name}👑`, label: 'Kraliyet Stil' },
  // Clan/Team styles
  { pattern: `【CLAN】{name}`, label: 'Clan Etiketi' },
  { pattern: `【TEAM】{name}`, label: 'Takım Etiketi' },
  { pattern: `【SQUAD】{name}`, label: 'Squad Etiketi' },
  { pattern: `【ARMY】{name}`, label: 'Ordu Etiketi' },
  { pattern: `【FORCE】{name}`, label: 'Güç Etiketi' },
  { pattern: `【PRO】{name}`, label: 'Pro Etiketi' },
  // Suffix styles
  { pattern: `{name}×͜×`, label: 'Çarpı Sonek' },
  { pattern: `{name}★`, label: 'Yıldız Sonek' },
  { pattern: `{name}🔥`, label: 'Ateş Sonek' },
  { pattern: `{name}⚡`, label: 'Şimşek Sonek' },
  { pattern: `{name}💀`, label: 'Kafatası Sonek' },
  { pattern: `{name}☠️`, label: 'Ölüm Sonek' },
  // Uppercase variations
  { pattern: `🔥{name_upper}🔥`, label: 'Büyük Ateş' },
  { pattern: `⚡{name_upper}⚡`, label: 'Büyük Şimşek' },
  { pattern: `💀{name_upper}💀`, label: 'Büyük Kafatası' },
  { pattern: `꧁༺{name_upper}༻꧂`, label: 'Büyük Süslü' },
  { pattern: `【★{name_upper}★】`, label: 'Büyük Yıldızlı' },
  // Mixed styles
  { pattern: `꧁{name}🔥꧂`, label: 'Çerçeve Ateş' },
  { pattern: `【{name}⚡】`, label: 'Çerçeve Şimşek' },
  { pattern: `『{name}💀』`, label: 'Çerçeve Kafatası' },
  { pattern: `★{name}★`, label: 'Yıldız Vurgu' },
  { pattern: `✦{name}✦`, label: 'Parlak Vurgu' },
  { pattern: `✧{name}✧`, label: 'Işıltı Vurgu' },
  { pattern: `❖{name}❖`, label: 'Elmas Vurgu' },
  { pattern: `☠︎{name}☠︎`, label: 'Korsan Vurgu' },
  { pattern: `亗{name}亗`, label: 'Özel Vurgu' },
  { pattern: `𓆩{name}𓆪`, label: 'Mısır Vurgu' },
]

// ============ MAIN COMPONENT ============
export default function PubgSekilliNickClient() {
  const [inputText, setInputText] = useState('')
  const [copiedNick, setCopiedNick] = useState<string | null>(null)
  const [showToast, setShowToast] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

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
  const handleCopy = async (nick: string) => {
    try {
      await navigator.clipboard.writeText(nick)
      setCopiedNick(nick)
      setShowToast(true)
      setTimeout(() => setCopiedNick(null), 2000)
      setTimeout(() => setShowToast(false), 3000)
    } catch (err) {
      console.error('Kopyalama hatası:', err)
    }
  }

  // Generate dynamic nicknames based on input
  const generateDynamicNicks = useMemo(() => {
    if (!inputText.trim()) return []

    const baseName = inputText.trim()
    const baseNameUpper = baseName.toUpperCase()
    const dynamicNicks: Array<{ nick: string; label: string }> = []

    // Generate nicknames using all patterns
    pubgPatterns.forEach(({ pattern, label }) => {
      const nick = pattern
        .replace(/{name}/g, baseName)
        .replace(/{name_upper}/g, baseNameUpper)
      dynamicNicks.push({ nick, label })
    })

    return dynamicNicks
  }, [inputText])

  // Scroll to category
  const scrollToCategory = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setTimeout(() => {
      const categoryElement = document.querySelector(`[data-category="${categoryId}"]`) as HTMLElement | null
      if (categoryElement) {
        const headerOffset = 140
        const elementPosition = categoryElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      }
    }, 100)
  }

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    setTimeout(() => {
      const sectionElement = document.getElementById(sectionId) as HTMLElement | null
      if (sectionElement) {
        const headerOffset = 140
        const elementPosition = sectionElement.getBoundingClientRect().top
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
      "name": "PUBG Şekilli Nick",
      "description": "PUBG şekilli nick oluştur, havalı ve estetik PUBG nicklerini tek tıkla kopyala ve oyunda kullan.",
      "url": "https://yazistilleri.com/pubg-sekilli-nick",
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
    script.id = 'pubg-structured-data'
    document.head.appendChild(script)

    return () => {
      const existingScript = document.getElementById('pubg-structured-data')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [mounted])

  // Filter categories if selected
  const filteredCategories = selectedCategory
    ? nicknameCategories.filter(c => c.id === selectedCategory)
    : nicknameCategories

  return (
    <div className={mounted && darkMode ? 'dark' : ''}>
      {/* Header - Same as Homepage */}
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
              <Link href="/pubg-sekilli-nick" className="nav-link active">
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
            <Link href="/pubg-sekilli-nick" className="mobile-nav-link active" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="nav-icon">🎮</span> PUBG Stylish Nickname
            </Link>
          </nav>
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
                <div className="particle particle-1">🎮</div>
                <div className="particle particle-2">⚔️</div>
                <div className="particle particle-3">🔥</div>
                <div className="particle particle-4">💀</div>
                <div className="particle particle-5">⚡</div>
                <div className="particle particle-6">👑</div>
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
                <span className="badge-icon">🎮</span>
                <span>PUBG İçin Özel</span>
              </div>

              <h1 className="hero-title">
                <span className="title-line">
                  <span className="title-word">PUBG</span>
                  <span className="title-word highlight">Şekilli Nick</span>
                </span>
              </h1>

              <p className="hero-description">
                İstersen <span className="text-gradient">kendi adınla</span> PUBG nick oluştur, istersen <span className="text-gradient">hazır PUBG nicklerini</span>
                <strong> tek tıkla kopyala</strong> ve oyunda kullan.
              </p>

              {/* Stats */}
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">{nicknameCategories.reduce((sum, cat) => sum + cat.nicknames.length, 0)}+</span>
                  <span className="stat-label">Hazır Nick</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">40+</span>
                  <span className="stat-label">Şekil Stili</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">🇹🇷</span>
                  <span className="stat-label">Türkçe</span>
                </div>
              </div>
            </div>
          </div>

          {/* Option Selection Cards - Top of Page */}
          <div style={{ margin: '3rem 0' }}>
            <div className="font-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {/* Ready-made Option Card */}
              <button
                onClick={() => scrollToSection('ready-made-nicks')}
                style={{
                  cursor: 'pointer',
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                  border: '2px solid rgba(99, 102, 241, 0.3)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  textAlign: 'left',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)'
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                  const target = e.currentTarget as HTMLButtonElement
                  target.style.borderColor = 'rgba(99, 102, 241, 0.6)'
                  target.style.transform = 'translateY(-8px) scale(1.02)'
                  target.style.boxShadow = '0 20px 25px rgba(99, 102, 241, 0.2), 0 10px 10px rgba(0, 0, 0, 0.1)'
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                  const target = e.currentTarget as HTMLButtonElement
                  target.style.borderColor = 'rgba(99, 102, 241, 0.3)'
                  target.style.transform = 'translateY(0) scale(1)'
                  target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)'
                }}
              >
                {/* Decorative background element */}
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '150px',
                  height: '150px',
                  background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
                  borderRadius: '50%',
                  pointerEvents: 'none'
                }} />

                {/* Icon */}
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  borderRadius: 'var(--radius)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.75rem',
                  marginBottom: '1.25rem',
                  boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
                }}>
                  📋
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  margin: '0 0 0.75rem 0',
                  lineHeight: 1.3
                }}>
                  Hazır PUBG Nickleri
                </h3>

                {/* Description */}
                <div style={{
                  background: 'rgba(99, 102, 241, 0.08)',
                  borderRadius: 'var(--radius)',
                  padding: '1rem 1.25rem',
                  marginBottom: '1.5rem',
                  border: '1px solid rgba(99, 102, 241, 0.15)'
                }}>
                  <p style={{
                    margin: 0,
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    fontWeight: 500
                  }}>
                    {nicknameCategories.reduce((sum, cat) => sum + cat.nicknames.length, 0)}+ hazır PUBG nick fikri
                  </p>
                </div>

                {/* CTA */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#6366f1',
                  fontWeight: 700,
                  fontSize: '1rem',
                  transition: 'gap 0.3s ease'
                }}>
                  <span>Hemen Kullan</span>
                  <span style={{ fontSize: '1.25rem', transition: 'transform 0.3s ease' }}>→</span>
                </div>
              </button>

              {/* Generator Option Card */}
              <button
                onClick={() => scrollToSection('nick-generator')}
                style={{
                  cursor: 'pointer',
                  background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%)',
                  border: '2px solid rgba(251, 191, 36, 0.3)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  textAlign: 'left',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)'
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                  const target = e.currentTarget as HTMLButtonElement
                  target.style.borderColor = 'rgba(251, 191, 36, 0.6)'
                  target.style.transform = 'translateY(-8px) scale(1.02)'
                  target.style.boxShadow = '0 20px 25px rgba(251, 191, 36, 0.2), 0 10px 10px rgba(0, 0, 0, 0.1)'
                  const arrow = target.querySelector('.arrow-icon') as HTMLElement | null
                  if (arrow) {
                    arrow.style.transform = 'translateX(4px)'
                  }
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                  const target = e.currentTarget as HTMLButtonElement
                  target.style.borderColor = 'rgba(251, 191, 36, 0.3)'
                  target.style.transform = 'translateY(0) scale(1)'
                  target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)'
                  const arrow = target.querySelector('.arrow-icon') as HTMLElement | null
                  if (arrow) {
                    arrow.style.transform = 'translateX(0)'
                  }
                }}
              >
                {/* Decorative background element */}
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '150px',
                  height: '150px',
                  background: 'radial-gradient(circle, rgba(251, 191, 36, 0.15) 0%, transparent 70%)',
                  borderRadius: '50%',
                  pointerEvents: 'none'
                }} />

                {/* Icon */}
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                  borderRadius: 'var(--radius)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.75rem',
                  marginBottom: '1.25rem',
                  boxShadow: '0 4px 12px rgba(251, 191, 36, 0.3)'
                }}>
                  ✨
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  margin: '0 0 0.75rem 0',
                  lineHeight: 1.3
                }}>
                  Kendi Nickini Oluştur
                </h3>

                {/* Description */}
                <div style={{
                  background: 'rgba(251, 191, 36, 0.08)',
                  borderRadius: 'var(--radius)',
                  padding: '1rem 1.25rem',
                  marginBottom: '1.5rem',
                  border: '1px solid rgba(251, 191, 36, 0.15)'
                }}>
                  <p style={{
                    margin: 0,
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    fontWeight: 500
                  }}>
                    İsminle 40+ şekilli PUBG nicki oluştur
                  </p>
                </div>

                {/* CTA */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#f59e0b',
                  fontWeight: 700,
                  fontSize: '1rem',
                  transition: 'gap 0.3s ease'
                }}>
                  <span>Hemen Oluştur</span>
                  <span className="arrow-icon" style={{ fontSize: '1.25rem', transition: 'transform 0.3s ease' }}>→</span>
                </div>
              </button>
            </div>

            {/* Helper Text */}
            <div style={{
              textAlign: 'center',
              marginTop: '2rem',
              color: 'var(--text-secondary)',
              fontSize: '0.9375rem',
              fontWeight: 500
            }}>
              İstediğin seçeneğe dokun, hemen kullan
            </div>
          </div>

          {/* Ready-Made PUBG Nicknames Section */}
          <div id="ready-made-nicks" style={{ scrollMarginTop: '140px' }}>
            {/* Ready-Made PUBG Nicknames Section Title */}
            <div style={{
              textAlign: 'center',
              marginBottom: '2rem',
              padding: '1.5rem 0'
            }}>
              <h2 style={{
                margin: 0,
                fontSize: '1.75rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.2
              }}>
                Hazır PUBG Nick Fikirleri
              </h2>
              <p style={{
                margin: '0.75rem 0 0 0',
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                fontWeight: 400
              }}>
                Beğendiğin nicki tek tıkla kopyala ve PUBG'de kullan
              </p>
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
                {nicknameCategories.map((category) => (
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

            {/* Nickname Categories */}
            {filteredCategories.map((category) => (
              <div key={category.id} className="category-section" data-category={category.id}>
                <h2 className="category-header">
                  {category.icon} {category.name}
                  <span className="category-count">{category.nicknames.length}</span>
                </h2>

                <div className="font-grid">
                  {category.nicknames.map((nick, index) => {
                    const isCopied = copiedNick === nick
                    const uniqueId = `${category.id}-${index}`

                    return (
                      <div key={uniqueId} className="font-card glass-card">
                        <div className="font-card-header">
                          <div className="font-card-title">
                            <div className="font-name">
                              {category.name} {index + 1}
                            </div>
                          </div>
                        </div>

                        <div className="font-preview">{nick}</div>
                        <button
                          className={`copy-button ${isCopied ? 'copied' : ''}`}
                          onClick={() => handleCopy(nick)}
                        >
                          {isCopied ? '✓ Kopyalandı!' : '📋 Kopyala'}
                        </button>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Input-Based Generator Section */}
          <div id="nick-generator" style={{ scrollMarginTop: '140px', marginTop: '4rem' }}>
            {/* Generator Section Title */}
            <div style={{
              textAlign: 'center',
              marginBottom: '2rem',
              padding: '1.5rem 0'
            }}>
              <h2 style={{
                margin: 0,
                fontSize: '1.75rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.2
              }}>
                Kendi Adınla PUBG Nick Oluştur
              </h2>
              <p style={{
                margin: '0.75rem 0 0 0',
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                fontWeight: 400
              }}>
                İsminizi yazın, 40+ şekilli PUBG nicki otomatik oluşturulur
              </p>
            </div>

            {/* Input Section */}
            <div className="hero-input-wrapper">
              <div className="input-glow"></div>
              <div className="modern-input-container">
                <div className="input-header-modern">
                  <div className="input-icon-modern">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="input-header-text">
                    <h2>İsminizi Yazın</h2>
                    <p>PUBG uyumlu şekilli nickler otomatik oluşturulur ✨</p>
                  </div>
                </div>

                <div className="input-field-wrapper">
                  <textarea
                    id="text-input"
                    className="modern-text-input"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="İsminizi yazın (örnek: Ahmet)..."
                    rows={2}
                    maxLength={20}
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
                  <div className={`char-counter ${inputText.length > 15 ? 'warning' : ''} ${inputText.length > 18 ? 'danger' : ''}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span>{inputText.length}</span>
                    <span className="counter-max">/ 20</span>
                  </div>
                </div>
              </div>

              {/* Helper text below input */}
              <div style={{
                textAlign: 'center',
                marginTop: '1.5rem',
                padding: '1rem',
                color: 'var(--text-primary)',
                fontSize: '0.9375rem',
                fontWeight: 500,
                background: 'var(--surface)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)'
              }}>
                İstersen kendi adınla nick oluştur, istersen yukarıdan hazır PUBG nickleri kopyala
              </div>
            </div>

            {/* Dynamic Nicknames Section (if input provided) */}
            {inputText.trim() && generateDynamicNicks.length > 0 && (
              <div className="category-section" data-category="dynamic" style={{ marginTop: '2rem' }}>
                <h2 className="category-header">
                  {inputText} İçin PUBG Şekilli Nickler
                  <span className="category-count">{generateDynamicNicks.length}</span>
                </h2>

                <div className="font-grid">
                  {generateDynamicNicks.map(({ nick, label }, index) => {
                    const isCopied = copiedNick === nick
                    const uniqueId = `dynamic-${index}`

                    return (
                      <div key={uniqueId} className="font-card glass-card">
                        <div className="font-card-header">
                          <div className="font-card-title">
                            <div className="font-name">
                              {label}
                            </div>
                          </div>
                        </div>

                        <div className="font-preview">{nick}</div>
                        <button
                          className={`copy-button ${isCopied ? 'copied' : ''}`}
                          onClick={() => handleCopy(nick)}
                        >
                          {isCopied ? '✓ Kopyalandı!' : '📋 Kopyala'}
                        </button>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          {/* ============ COMPREHENSIVE SEO CONTENT ============ */}

          {/* SECTION 1: What is PUBG Şekilli Nick */}
          <div className="info-box reveal">
            <h2 className="section-main-title">PUBG Şekilli Nick Nedir?</h2>

            <div className="content-intro">
              <p className="intro-text">
                <strong>PUBG şekilli nick</strong>, PUBG ve PUBG Mobile oyunlarında kullanabileceğiniz
                özel semboller, emojiler ve Unicode karakterlerle süslenmiş oyuncu isimleridir.
                Bu <strong>havalı PUBG nickleri</strong> sayesinde oyunda dikkat çekici ve benzersiz
                bir kimlik oluşturabilirsiniz. Şekilli nickler, normal karakterlerin yanı sıra
                yıldız, kalp, ok, çerçeve ve daha birçok özel sembol içerir.
              </p>
            </div>

            <div className="feature-cards-grid">
              <div className="feature-card gradient-purple">
                <div className="feature-card-icon">🎮</div>
                <h3>PUBG & PUBG Mobile Uyumlu</h3>
                <p>
                  Tüm <strong>PUBG şekilli nickler</strong> PUBG ve PUBG Mobile oyunlarında
                  sorunsuz çalışır. Kopyala-yapıştır ile saniyeler içinde oyunda kullanabilirsiniz.
                  Unicode karakterler sayesinde ekstra uygulama yüklemenize gerek yoktur.
                </p>
              </div>

              <div className="feature-card gradient-pink">
                <div className="feature-card-icon">🔥</div>
                <h3>Havalı ve Agresif Nickler</h3>
                <p>
                  Oyunda güçlü bir izlenim bırakmak için <strong>havalı PUBG nickleri</strong>
                  kullanın. Agresif, savaşçı ve korkutucu temalı nickler ile rakiplerinizi
                  etkileyin ve oyun deneyiminizi zenginleştirin.
                </p>
              </div>

              <div className="feature-card gradient-blue">
                <div className="feature-card-icon">⚔️</div>
                <h3>Clan ve Team Nickleri</h3>
                <p>
                  Takım oyunu için <strong>PUBG clan nickleri</strong> oluşturun. Aynı takımda
                  oynayan arkadaşlarınızla uyumlu nickler seçerek takım kimliğinizi güçlendirin.
                  Prefix ve suffix'li hazır nickler mevcuttur.
                </p>
              </div>

              <div className="feature-card gradient-green">
                <div className="feature-card-icon">🇹🇷</div>
                <h3>Tam Türkçe Desteği</h3>
                <p>
                  Türkçe karakterler (ç, ğ, ı, İ, ö, ş, ü) tüm PUBG nicklerinde mükemmel çalışır.
                  Türkçe isimleriniz bozulmadan, okunabilir şekilde şekilli nicklere dönüştürülür.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 2: Popular PUBG Nicknames */}
          <div className="info-box reveal">
            <h2 className="section-main-title">En Popüler PUBG Şekilli Nickler</h2>

            <div className="categories-showcase">
              <div className="category-card">
                <div className="category-header-card">
                  <span className="category-emoji">🔥</span>
                  <h3>Havalı Nickler</h3>
                </div>
                <p>Agresif, korkutucu ve dikkat çekici PUBG nickleri. Oyunda güçlü bir izlenim bırakmak için idealdir.</p>
                <div className="category-examples">
                  <span className="example-text">🔥Killer🔥</span>
                  <span className="example-text">⚡Death⚡</span>
                  <span className="example-text">💀Shadow💀</span>
                </div>
              </div>

              <div className="category-card">
                <div className="category-header-card">
                  <span className="category-emoji">✨</span>
                  <h3>Şekilli & Sembollü</h3>
                </div>
                <p>Özel çerçeveler, yıldızlar ve sembollerle süslenmiş estetik PUBG nickleri.</p>
                <div className="category-examples">
                  <span className="example-text">꧁༺Killer༻꧂</span>
                  <span className="example-text">【★Death★】</span>
                </div>
              </div>

              <div className="category-card">
                <div className="category-header-card">
                  <span className="category-emoji">👑</span>
                  <h3>Pro & Kısa</h3>
                </div>
                <p>Kısa, profesyonel ve esports tarzı PUBG nickleri. Temiz ve etkili görünüm.</p>
                <div className="category-examples">
                  <span className="example-text">PRO★</span>
                  <span className="example-text">ELITE🔥</span>
                </div>
              </div>

              <div className="category-card">
                <div className="category-header-card">
                  <span className="category-emoji">⚔️</span>
                  <h3>Clan / Team</h3>
                </div>
                <p>Takım oyunu için hazırlanmış prefix'li PUBG nickleri. Squad kimliği için mükemmel.</p>
                <div className="category-examples">
                  <span className="example-text">【CLAN】Killer</span>
                  <span className="example-text">【TEAM】Death</span>
                </div>
              </div>

              <div className="category-card">
                <div className="category-header-card">
                  <span className="category-emoji">💀</span>
                  <h3>Agresif / Savaşçı</h3>
                </div>
                <p>Karanlık, savaşçı and ölüm temalı agresif PUBG nickleri. Korkutucu görünüm.</p>
                <div className="category-examples">
                  <span className="example-text">💀Killer💀</span>
                  <span className="example-text">☠️Death☠️</span>
                </div>
              </div>

              <div className="category-card">
                <div className="category-header-card">
                  <span className="category-emoji">🎮</span>
                  <h3>Özel İsimler</h3>
                </div>
                <p>Kendi isminize özel şekilli PUBG nickleri oluşturun. Yukarıdaki input alanını kullanın.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ============ COMPREHENSIVE SEO CONTENT FOR PUBG ============ */}

        {/* SECTION 1: How to change name in PUBG? */}
        <div className="info-box reveal">
          <h2 className="section-main-title">How to change name in PUBG?</h2>
          <div className="detailed-steps">
            <div className="detailed-step">
              <div className="step-visual">
                <div className="step-number-large">1</div>
                <div className="step-icon-circle">📋</div>
              </div>
              <div className="step-details">
                <h3>Copy Nickname</h3>
                <p>Choose your favorite stylish nickname from our list or generate one with your name and click the copy button.</p>
              </div>
            </div>

            <div className="detailed-step">
              <div className="step-visual">
                <div className="step-number-large">2</div>
                <div className="step-icon-circle">🎮</div>
              </div>
              <div className="step-details">
                <h3>Open PUBG</h3>
                <p>Launch PUBG or PUBG Mobile, go to your profile or inventory, and find the "Rename Card" to change your nickname.</p>
              </div>
            </div>

            <div className="detailed-step">
              <div className="step-visual">
                <div className="step-number-large">3</div>
                <div className="step-icon-circle">✨</div>
              </div>
              <div className="step-details">
                <h3>Paste and Save</h3>
                <p>Paste your new stylish nickname in the change name box and click save to apply your new look.</p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: Popular PUBG Nickname Categories */}
        <div className="info-box reveal">
          <h2 className="section-main-title">Popular PUBG Nickname Categories</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-number">01</div>
              <h3>Cool and stylish nicknames for PUBG</h3>
              <p>Standing out in PUBG is not just about your gameplay, it’s also about your name. A cool nickname helps you build a unique identity and gain confidence. Our generator provides different unique and eye-catching names that make you more famous among players. Whether you like aggressive, aesthetic, or funny names, you can find them all here.</p>
            </div>
            <div className="tip-card">
              <div className="tip-number">02</div>
              <h3>Professional and SHORT Nicknames</h3>
              <p>Many professional players and streamers use short and impactful names. Our tool offers hundreds of pro-level names that are short, clear, and easy to remember for your fans and rivals. Short nicknames are perfect for quick recognition on the leaderboard.</p>
            </div>
            <div className="tip-card">
              <div className="tip-number">03</div>
              <h3>PUBG Clan Nicknames</h3>
              <p>If you are playing with a team or running a clan, having a consistent nickname style is great for team spirit and recognition. You can create names with special tags and prefixes that show your squad’s power and unity.</p>
            </div>
          </div>
        </div>

        {/* SECTION 3: FAQ */}
        <div className="info-box reveal">
          <h2 className="section-main-title">Frequently Asked Questions</h2>
          <div className="faq-accordion">
            <div className={`faq-item ${expandedFaq === 0 ? 'expanded' : ''}`} onClick={() => toggleFaq(0)}>
              <div className="faq-question">
                <span className="faq-icon">❓</span>
                <h3>Can I use symbols in my PUBG nickname?</h3>
                <span className="faq-toggle">{expandedFaq === 0 ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>Yes, PUBG supports many Unicode symbols. Our generator uses symbols that are known to work on most mobile and PC versions.</p>
              </div>
            </div>

            <div className={`faq-item ${expandedFaq === 1 ? 'expanded' : ''}`} onClick={() => toggleFaq(1)}>
              <div className="faq-question">
                <span className="faq-icon">❓</span>
                <h3>How many characters can a PUBG name have?</h3>
                <span className="faq-toggle">{expandedFaq === 1 ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>Typically, PUBG Mobile names have a limit of 14 characters. Make sure your chosen style fits within this limit.</p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 6: Feature Banners */}
        <div className="info-section">
          <div className="feature-banners-grid">
            <div className="feature-banner gradient-success">
              <div className="feature-banner-icon">🚀</div>
              <div className="feature-banner-content">
                <h3>Free and Instant</h3>
                <p>No registration required, copy ready-made PUBG nicknames instantly!</p>
              </div>
            </div>

            <div className="feature-banner gradient-security">
              <div className="feature-banner-icon">🔒</div>
              <div className="feature-banner-content">
                <h3>100% Safe</h3>
                <p>Your names are not sent to any server; they are processed in your browser.</p>
              </div>
            </div>

            <div className="feature-banner gradient-mobile">
              <div className="feature-banner-icon">📱</div>
              <div className="feature-banner-content">
                <h3>Mobile Friendly</h3>
                <p>Use it easily from your phone and paste instantly into PUBG.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Link back to other pages */}
        <div className="back-link-section">
          <p>
            Looking for more font styles? Visit our
            <Link href="/" className="homepage-link">
              Homepage
            </Link>
            ,
            <Link href="/insta-yazi-tipi" className="homepage-link">
              Instagram Font
            </Link>
            {' '}and{' '}
            <Link href="/sekilli-semboller" className="homepage-link">
              Fancy Symbols
            </Link>
            {' '}pages.
          </p>
        </div>
      </main>
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
          margin-right: 0.25rem;
          transition: color 0.2s;
        }
        .homepage-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  )
}
