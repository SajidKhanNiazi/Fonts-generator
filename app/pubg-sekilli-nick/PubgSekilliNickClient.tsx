import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { Language, translations } from '@/lib/translations'

// ============ MAIN COMPONENT ============
export default function PubgSekilliNickClient() {
  const [lang, setLang] = useState<Language>('tr')
  const [inputText, setInputText] = useState('')
  const [copiedNick, setCopiedNick] = useState<string | null>(null)
  const [showToast, setShowToast] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const t = translations[lang]

  // Localized Categories
  const nicknameCategories = useMemo(() => [
    {
      id: 'havali',
      name: (t.pubg.categories as any).havali,
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
      name: (t.pubg.categories as any).sekilli,
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
      name: (t.pubg.categories as any).pro,
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
      name: (t.pubg.categories as any).clan,
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
      name: (t.pubg.categories as any).agresif,
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
  ], [t])

  // Localized Patterns
  const pubgPatterns = useMemo(() => [
    { pattern: `꧁༒{name}༒꧂`, label: lang === 'tr' ? 'Klasik Çerçeve' : 'Classic Frame' },
    { pattern: `꧁༺{name}༻꧂`, label: lang === 'tr' ? 'Süslü Çerçeve' : 'Fancy Frame' },
    { pattern: `【★{name}★】`, label: lang === 'tr' ? 'Yıldızlı Çerçeve' : 'Starred Frame' },
    { pattern: `『{name}』`, label: lang === 'tr' ? 'Japon Çerçeve' : 'Japanese Frame' },
    { pattern: `【{name}】`, label: lang === 'tr' ? 'Köşeli Çerçeve' : 'Angular Frame' },
    { pattern: `《{name}》`, label: lang === 'tr' ? 'Çift Çerçeve' : 'Double Frame' },
    { pattern: `「{name}」`, label: lang === 'tr' ? 'Minimal Çerçeve' : 'Minimal Frame' },
    { pattern: `〔{name}〕`, label: lang === 'tr' ? 'Yuvarlak Çerçeve' : 'Round Frame' },
    { pattern: `亗{name}亗`, label: lang === 'tr' ? 'Özel Sembol' : 'Special Symbol' },
    { pattern: `☠︎{name}☠︎`, label: lang === 'tr' ? 'Korsan Stili' : 'Pirate Style' },
    { pattern: `𓆩{name}𓆪`, label: lang === 'tr' ? 'Mısır Stili' : 'Egyptian Style' },
    { pattern: `★彡{name}彡★`, label: lang === 'tr' ? 'Yıldız Parıltı' : 'Star Sparkle' },
    { pattern: `✦{name}✦`, label: lang === 'tr' ? 'Parlak Yıldız' : 'Bright Star' },
    { pattern: `✧{name}✧`, label: lang === 'tr' ? 'Işıltılı Yıldız' : 'Shiny Star' },
    { pattern: `❖{name}❖`, label: lang === 'tr' ? 'Elmas Stil' : 'Diamond Style' },
    { pattern: `🔥{name}🔥`, label: lang === 'tr' ? 'Ateşli Stil' : 'Fire Style' },
    { pattern: `⚡{name}⚡`, label: lang === 'tr' ? 'Şimşek Stil' : 'Lightning Style' },
    { pattern: `💀{name}💀`, label: lang === 'tr' ? 'Kafatası Stil' : 'Skull Style' },
    { pattern: `⚔️{name}⚔️`, label: lang === 'tr' ? 'Kılıç Stil' : 'Sword Style' },
    { pattern: `💥{name}💥`, label: lang === 'tr' ? 'Patlama Stil' : 'Blast Style' },
    { pattern: `☠️{name}☠️`, label: lang === 'tr' ? 'Ölüm İşareti' : 'Death Mark' },
    { pattern: `👑{name}👑`, label: lang === 'tr' ? 'Kraliyet Stil' : 'Royal Style' },
    { pattern: `【CLAN】{name}`, label: lang === 'tr' ? 'Clan Etiketi' : 'Clan Tag' },
    { pattern: `【TEAM】{name}`, label: lang === 'tr' ? 'Takım Etiketi' : 'Team Tag' },
    { pattern: `【SQUAD】{name}`, label: lang === 'tr' ? 'Squad Etiketi' : 'Squad Tag' },
    { pattern: `【ARMY】{name}`, label: lang === 'tr' ? 'Ordu Etiketi' : 'Army Tag' },
    { pattern: `【FORCE】{name}`, label: lang === 'tr' ? 'Güç Etiketi' : 'Force Tag' },
    { pattern: `【PRO】{name}`, label: lang === 'tr' ? 'Pro Etiketi' : 'Pro Tag' },
    { pattern: `{name}×͜×`, label: lang === 'tr' ? 'Çarpı Sonek' : 'Cross Suffix' },
    { pattern: `{name}★`, label: lang === 'tr' ? 'Yıldız Sonek' : 'Star Suffix' },
    { pattern: `{name}🔥`, label: lang === 'tr' ? 'Ateş Sonek' : 'Fire Suffix' },
    { pattern: `{name}⚡`, label: lang === 'tr' ? 'Şimşek Sonek' : 'Lightning Suffix' },
    { pattern: `{name}💀`, label: lang === 'tr' ? 'Kafatası Sonek' : 'Skull Suffix' },
    { pattern: `{name}☠️`, label: lang === 'tr' ? 'Ölüm Sonek' : 'Death Suffix' },
    { pattern: `🔥{name_upper}🔥`, label: lang === 'tr' ? 'Büyük Ateş' : 'Large Fire' },
    { pattern: `⚡{name_upper}⚡`, label: lang === 'tr' ? 'Büyük Şimşek' : 'Large Lightning' },
    { pattern: `💀{name_upper}💀`, label: lang === 'tr' ? 'Büyük Kafatası' : 'Large Skull' },
    { pattern: `꧁༺{name_upper}༻꧂`, label: lang === 'tr' ? 'Büyük Süslü' : 'Large Fancy' },
    { pattern: `【★{name_upper}★】`, label: lang === 'tr' ? 'Büyük Yıldızlı' : 'Large Starred' },
  ], [lang])

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
  }, [inputText, pubgPatterns])

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
      "name": lang === 'tr' ? "PUBG Şekilli Nick" : "PUBG Stylish Nickname",
      "description": lang === 'tr' ? "PUBG şekilli nick oluştur, havalı ve estetik PUBG nicklerini tek tıkla kopyala ve oyunda kullan." : "Create PUBG stylish nicknames, copy cool and aesthetic PUBG nicks with one click and use in game.",
      "url": `https://yazistilleri.com/pubg-sekilli-nick`,
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
  }, [mounted, lang])

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
              <Link href="/sekilli-semboller" className="nav-link">
                {t.common.nav.symbols}
              </Link>
              <Link href="/pubg-sekilli-nick" className="nav-link active">
                {t.common.nav.pubg}
              </Link>
            </nav>

            {/* Right Actions: Theme Toggle & Language Switcher & Hamburger */}
            <div className="header-actions">
              {/* Language Switcher */}
              <div className="language-switcher">
                <button
                  className={`lang-btn ${lang === 'tr' ? 'active' : ''}`}
                  onClick={() => setLang('tr')}
                  title="Türkçe"
                >
                  TR
                </button>
                <button
                  className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                  onClick={() => setLang('en')}
                  title="English"
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
            <Link href="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="nav-icon">🏠</span> {t.common.nav.home}
            </Link>
            <Link href="/insta-yazi-tipi" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="nav-icon">📸</span> {t.common.nav.insta}
            </Link>
            <Link href="/sekilli-semboller" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="nav-icon">✨</span> {t.common.nav.symbols}
            </Link>
            <Link href="/pubg-sekilli-nick" className="mobile-nav-link active" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="nav-icon">🎮</span> {t.common.nav.pubg}
            </Link>

            {/* Mobile Language Switcher */}
            <div className="mobile-lang-switcher">
              <button
                className={`mobile-lang-btn ${lang === 'tr' ? 'active' : ''}`}
                onClick={() => { setLang('tr'); setIsMobileMenuOpen(false); }}
              >
                Türkçe (TR)
              </button>
              <button
                className={`mobile-lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => { setLang('en'); setIsMobileMenuOpen(false); }}
              >
                English (EN)
              </button>
            </div>
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
                <span>{t.pubg.hero.badge}</span>
              </div>

              <h1 className="hero-title">
                <span className="title-line">
                  <span className="title-word">{t.pubg.hero.title}</span>
                  <span className="title-word highlight">{t.pubg.hero.titleHighlight}</span>
                </span>
              </h1>

              <p className="hero-description">
                {t.pubg.hero.description}
              </p>

              {/* Stats */}
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">{nicknameCategories.reduce((sum, cat) => sum + cat.nicknames.length, 0)}+</span>
                  <span className="stat-label">{lang === 'tr' ? 'Hazır Nick' : 'Ready Nicks'}</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">40+</span>
                  <span className="stat-label">{lang === 'tr' ? 'Şekil Stili' : 'Style Patterns'}</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">🇹🇷</span>
                  <span className="stat-label">{lang === 'tr' ? 'Türkçe' : 'Turkish'}</span>
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

            {/* Generator Tabs */}
            <div className="generator-tabs reveal">
              <button
                className={`tab-btn ${!selectedCategory ? 'active' : ''}`}
                onClick={() => setSelectedCategory(null)}
              >
                <span className="tab-icon">✨</span>
                <span className="tab-text">{t.pubg.hero.readyNicks}</span>
              </button>
              <button
                className={`tab-btn ${selectedCategory === 'custom' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('custom')}
              >
                <span className="tab-icon">✏️</span>
                <span className="tab-text">{t.pubg.hero.generatorTitle}</span>
              </button>
            </div>

            <div className="section-divider"></div>

            {/* Quick Category Navigation (If not in custom mode) */}
            {selectedCategory !== 'custom' && (
              <div className="category-nav reveal">
                <div className="category-scroll">
                  {nicknameCategories.map((category) => (
                    <button
                      key={category.id}
                      className={`nav-pill ${selectedCategory === category.id ? 'active' : ''}`}
                      onClick={() => scrollToCategory(category.id)}
                    >
                      <span className="pill-icon">{category.icon}</span>
                      <span className="pill-text">{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Custom Generator Section */}
            <div className={`generator-container reveal ${selectedCategory === 'custom' ? 'active' : ''}`}>
              <div className="glass-card main-input-card">
                <div className="input-header">
                  <div className="input-title-group">
                    <h2 className="input-title">{t.pubg.hero.inputTitle}</h2>
                    <p className="input-subtitle">{t.pubg.hero.inputSub}</p>
                  </div>
                  {inputText && (
                    <button
                      className="clear-btn"
                      onClick={() => setInputText('')}
                      title={t.common.clear}
                    >
                      {t.common.clear} ✕
                    </button>
                  )}
                </div>

                <div className="input-wrapper">
                  <div className="input-icon">🎮</div>
                  <input
                    type="text"
                    className="main-input"
                    placeholder={t.pubg.hero.inputPlaceholder}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    maxLength={14}
                  />
                  <div className="input-progress" style={{ width: `${(inputText.length / 14) * 100}%` }}></div>
                </div>

                <div className="input-footer">
                  <div className="char-count">
                    <span className={inputText.length > 12 ? 'text-warning' : ''}>{inputText.length}</span>/14 {lang === 'tr' ? 'karakter' : 'characters'}
                  </div>
                  <div className="support-badge">
                    <span className="support-icon">✅</span>
                    <span>{t.common.charsSupported}</span>
                  </div>
                </div>
              </div>

              {/* Generated Results */}
              {inputText && (
                <div className="results-grid reveal active">
                  {generateDynamicNicks.map((item, index) => (
                    <div key={index} className="nick-card-wrapper">
                      <div className="nick-card" onClick={() => handleCopy(item.nick)}>
                        <div className="nick-label">{item.label}</div>
                        <div className="nick-content">{item.nick}</div>
                        <div className="nick-action">
                          {copiedNick === item.nick ? (
                            <span className="copied-text">{t.common.copied}</span>
                          ) : (
                            <span className="copy-icon">📋</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Ready-Made Categories Section */}
            {(selectedCategory === null || nicknameCategories.some(c => c.id === selectedCategory)) && (
              <div className="nick-categories-section">
                {filteredCategories.map((category) => (
                  <section
                    key={category.id}
                    className="nick-category reveal"
                    data-category={category.id}
                  >
                    <div className="category-header">
                      <div className="category-title-group">
                        <span className="category-icon-large">{category.icon}</span>
                        <h2 className="category-title">{category.name}</h2>
                      </div>
                      <div className="category-count">{category.nicknames.length} {lang === 'tr' ? 'Nick' : 'Nicks'}</div>
                    </div>

                    <div className="nicknames-grid">
                      {category.nicknames.map((nick, index) => (
                        <div
                          key={index}
                          className="ready-nick-card"
                          onClick={() => handleCopy(nick)}
                        >
                          <span className="ready-nick-text">{nick}</span>
                          <div className="ready-nick-action">
                            {copiedNick === nick ? (
                              <span className="copied-badge">✓</span>
                            ) : (
                              <span className="copy-hint">📋</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            )}

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

                          <button
                            className={`copy-button ${isCopied ? 'copied' : ''}`}
                            onClick={() => handleCopy(nick)}
                          >
                            {isCopied ? t.common.copied : t.common.copy}
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Dynamic Content Sections from Translations */}
            <div className="content-sections">
              {t.pubg.sections.map((section: any) => (
                <section key={section.id} id={section.id} className="info-box reveal">
                  <h2 className="section-main-title">{section.title}</h2>

                  {section.type === 'text' && (
                    <div className="content-intro">
                      <p className="intro-text">{section.content}</p>
                    </div>
                  )}

                  {section.type === 'steps' && (
                    <div className="detailed-steps">
                      {section.steps.map((step: any, idx: number) => (
                        <div key={idx} className="detailed-step">
                          <div className="step-visual">
                            <div className="step-number-large">{step.number}</div>
                            <div className="step-icon-circle">{step.icon}</div>
                          </div>
                          <div className="step-details">
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.type === 'features' && (
                    <div className="tips-grid">
                      {section.features.map((feature: any, idx: number) => (
                        <div key={idx} className="tip-card">
                          <div className="tip-number">{idx < 9 ? `0${idx + 1}` : idx + 1}</div>
                          <h3>{feature.title}</h3>
                          <p>{feature.desc}</p>
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

                  {section.type === 'featuresGrid' && (
                    <div className="info-section">
                      <div className="feature-banners-grid">
                        {section.features.map((feature: any, idx: number) => (
                          <div key={idx} className={`feature-banner ${idx === 0 ? 'gradient-success' : idx === 1 ? 'gradient-security' : 'gradient-mobile'}`}>
                            <div className="feature-banner-icon">{feature.icon}</div>
                            <div className="feature-banner-content">
                              <h3>{feature.title}</h3>
                              <p>{feature.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
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
                ,
                <Link href="/insta-yazi-tipi" className="homepage-link">
                  {t.common.nav.insta}
                </Link>
                {' '}{lang === 'tr' ? 've' : 'and'}{' '}
                <Link href="/sekilli-semboller" className="homepage-link">
                  {t.common.nav.symbols}
                </Link>
                {' '}{lang === 'tr' ? 'sayfalarımıza göz atın.' : 'pages.'}
              </p>
            </div>
          </div>
        </div>
      </main >

      {showToast && (
        <div className="toast">
          <span className="toast-icon">✓</span>
          <span>{copiedNick ? t.common.copied : ''}</span>
        </div>
      )
      }

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-links">
              <Link href="/" className="footer-link">
                {t.common.footer.home}
              </Link>
              <Link href="/insta-yazi-tipi" className="footer-link">
                {t.common.footer.insta}
              </Link>
              <Link href="/sekilli-semboller" className="footer-link">
                {t.common.footer.symbols}
              </Link>
              <Link href="/pubg-sekilli-nick" className="footer-link">
                {t.common.footer.pubg}
              </Link>
            </div>
            <div className="footer-text">
              {t.common.footer.rights}
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
          margin-top: 4rem;
          padding: 2.5rem;
          background: var(--card-bg);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-color);
        }
        .back-link-section p {
          color: var(--text-secondary);
          margin: 0;
          font-size: 1.1rem;
        }
        .homepage-link {
          color: var(--primary-color);
          font-weight: 600;
          text-decoration: none;
          margin-left: 0.5rem;
          margin-right: 0.5rem;
          transition: all 0.2s;
        }
        .homepage-link:hover {
          text-decoration: underline;
          opacity: 0.8;
        }
      `}</style>
    </div >
  )
}
