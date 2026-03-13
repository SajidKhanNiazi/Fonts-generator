"use client"
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { translations, Language } from '@/lib/translations'
import Header from '../components/Header'
import Footer from '../components/Footer'

const SeoSections = dynamic(() => import('../components/SeoSections'), { ssr: true })
const FaqAccordion = dynamic(() => import('../components/FaqAccordion'), { ssr: true })

// ============ UNICODE OFFSET TRANSFORMS ============
function offsetTransform(text: string, lowerStart: number, upperStart: number): string {
    if (!text) return ''
    return text.split('').map(c => {
        const code = c.charCodeAt(0)
        // Check for common Turkish characters and handle them (they don't have direct offsets in these blocks)
        if (code >= 97 && code <= 122) return String.fromCodePoint(lowerStart + (code - 97))
        if (code >= 65 && code <= 90) return String.fromCodePoint(upperStart + (code - 65))
        return c
    }).join('')
}

const italic = (t: string) => offsetTransform(t, 0x1D44E, 0x1D434)
const boldItalic = (t: string) => offsetTransform(t, 0x1D482, 0x1D468)
const script = (t: string) => offsetTransform(t, 0x1D4EA, 0x1D4D0)
const boldScript = (t: string) => offsetTransform(t, 0x1D4B6, 0x1D49C) // This might need verification of offset
const sansItalic = (t: string) => offsetTransform(t, 0x1D622, 0x1D608)
const sansBoldItalic = (t: string) => offsetTransform(t, 0x1D656, 0x1D63C)

// Map-based transforms
const mapTransform = (text: string, map: Record<string, string>): string =>
    text ? text.split('').map(c => map[c] || c).join('') : ''

const aestheticMap: Record<string, string> = {
    'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ғ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'ǫ', 'r': 'ʀ', 's': 's', 't': 'ᴛ', 'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ',
}

const cursiveMap: Record<string, string> = {
    'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': '𝑒', 'f': '𝒻', 'g': '𝑔', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿', 'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': '𝑜', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉', 'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏',
    'A': '𝒜', 'B': 'ℬ', 'C': '𝒞', 'D': '𝒟', 'E': 'ℰ', 'F': 'ℱ', 'G': '𝒢', 'H': 'ℋ', 'I': 'ℐ', 'J': '𝒥', 'K': '𝒦', 'L': 'ℒ', 'M': 'ℳ', 'N': '𝒩', 'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': 'ℛ', 'S': '𝒮', 'T': '𝒯', 'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵'
}

// Decoration transforms
const slantedBars = (t: string) => t ? `╱ ${t} ╱` : ''
const doubleSlanted = (t: string) => t ? `// ${t} //` : ''
const elegantSlanted = (t: string) => t ? `✧ ${t} ✧` : ''

// ============ FONT STYLES ARRAY ============
interface FontStyle { id: string; name: string; transform: (t: string) => string; popular?: boolean }

const italicFonts: FontStyle[] = [
    { id: 'math-italic', name: 'Matematiksel İtalik', transform: italic, popular: true },
    { id: 'math-bold-italic', name: 'Kalın İtalik (Serif)', transform: boldItalic, popular: true },
    { id: 'sans-italic', name: 'Sans-Serif İtalik', transform: sansItalic, popular: true },
    { id: 'sans-bold-italic', name: 'Sans-Serif Kalın İtalik', transform: sansBoldItalic },
    { id: 'script', name: 'Zarif El Yazısı', transform: t => mapTransform(t, cursiveMap), popular: true },
    { id: 'bold-script', name: 'Kalın El Yazısı', transform: script },
    { id: 'aesthetic', name: 'Estetik Küçük Harf (Small Caps)', transform: t => mapTransform(t, aestheticMap), popular: true },
    { id: 'slanted-bars', name: 'Eğik Çizgili Stil', transform: slantedBars },
    { id: 'double-slanted', name: 'Çift Eğik Çizgi', transform: doubleSlanted },
    { id: 'elegant-slanted', name: 'Yıldızlı Eğik', transform: elegantSlanted, popular: true },
    { id: 'reverse-italic', name: 'Ters İtalik Etkisi', transform: t => t.split('').reverse().join('') }, // Just a placeholder for "slanted" feel
    { id: 'spaced-italic', name: 'Aralıklı İtalik', transform: t => italic(t).split('').join(' ') },
]

const randomTexts = ['İtalik Yazı Stili', 'Harika Tasarım', 'Sosyal Medya', 'Instagram Biyografi', 'Selam Arkadaşlar', 'Yeni Gönderi']

export default function ItalikEgikYaziClient() {
    const [lang, setLang] = useState<Language>('tr')
    const [inputText, setInputText] = useState('İtalik Yazı Oluşturucu')
    const [copiedId, setCopiedId] = useState<string | null>(null)
    const [showToast, setShowToast] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        setMounted(true)
        const savedDarkMode = localStorage.getItem('darkMode') === 'true'
        setDarkMode(savedDarkMode)
        const savedLang = localStorage.getItem('lang') as Language
        if (savedLang) setLang(savedLang)
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

    useEffect(() => {
        if (mounted) {
            localStorage.setItem('lang', lang)
        }
    }, [lang, mounted])

    const t = translations[lang]
    const content = t.italik

    const handleCopy = async (text: string, id: string) => {
        try {
            await navigator.clipboard.writeText(text)
            setCopiedId(id); setShowToast(true)
            setTimeout(() => setCopiedId(null), 2000)
            setTimeout(() => setShowToast(false), 3000)
        } catch (err) { console.error('Copy error:', err) }
    }

    if (!mounted) return null

    return (
        <div className={`page-italik ${darkMode ? 'dark' : ''}`}>
            <Header
                lang={lang}
                setLang={setLang}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
            />

            <main className="main">
                <div className="hero-section-fullscreen">
                    <div className="hero-bg-fullscreen">
                        <div className="hero-gradient-animated"></div>
                    </div>

                    <div className="hero-content-fullscreen">
                        <div className="hero-badge-modern">
                            <span className="badge-pulse"></span>
                            <span className="badge-text">{content.hero.badge}</span>
                        </div>

                        <h1 className="hero-title-fullscreen">
                            <span className="title-line-animated">
                                <span className="title-word-animated">{content.hero.title}</span>
                                <span className="title-word-animated highlight-gradient">{content.hero.titleHighlight}</span>
                            </span>
                        </h1>

                        <p className="hero-description-fullscreen">
                            {content.hero.description}
                        </p>

                        <div className="hero-input-fullscreen">
                            <div className="input-glow-effect"></div>
                            <div className="input-container-glass">
                                <div className="input-header-premium">
                                    <div className="input-header-text-premium">
                                        <div className="input-title-premium">{content.hero.inputTitle}</div>
                                        <p>{content.hero.inputSub}</p>
                                    </div>
                                </div>

                                <div className="input-field-premium">
                                    <textarea
                                        className="text-input-premium"
                                        value={inputText}
                                        onChange={(e) => setInputText(e.target.value)}
                                        placeholder={content.hero.inputPlaceholder}
                                        rows={2}
                                    />
                                    <button className="clear-btn-premium" onClick={() => setInputText('')} style={{ opacity: inputText ? 1 : 0 }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                                    </button>
                                </div>

                                <div className="discord-extra-buttons">
                                    <button className="discord-extra-btn" onClick={() => setInputText(randomTexts[Math.floor(Math.random() * randomTexts.length)])}>🎲 {t.home.hero.random || 'Rastgele'}</button>
                                    <button className="discord-extra-btn" onClick={() => setInputText(inputText.toUpperCase())}>⬆️ {t.home.hero.uppercase || 'BÜYÜK'}</button>
                                    <button className="discord-extra-btn" onClick={() => setInputText(inputText.toLowerCase())}>⬇️ {t.home.hero.lowercase || 'küçük'}</button>
                                </div>

                                <div className="input-footer-premium">
                                    <div className="turkish-chars-premium">
                                        <span className="char-label-premium">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                            {t.common.charsSupported}
                                        </span>
                                    </div>
                                    <div className="char-counter-premium">
                                        <span className="counter-text">{inputText.length} / 500</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hero-stats-fullscreen">
                            <div className="stat-item-premium">
                                <div className="stat-content"><span className="stat-number-premium">20+</span><span className="stat-label-premium">{content.hero.stat1}</span></div>
                            </div>
                            <div className="stat-divider-premium"></div>
                            <div className="stat-item-premium">
                                <div className="stat-content"><span className="stat-number-premium">Global</span><span className="stat-label-premium">{content.hero.stat2}</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container" style={{ marginTop: '3rem' }}>
                    <div className="font-grid">
                        {italicFonts.map((font) => {
                            const transformed = font.transform(inputText)
                            const isCopied = copiedId === font.id
                            return (
                                <div key={font.id} className={`font-card glass-card ${font.popular ? 'popular' : ''}`}>
                                    <div className="font-card-header">
                                        <div className="font-card-title">
                                            <div className="font-name">
                                                {font.name}
                                                {font.popular && <span className="popular-badge">⚡ {t.common.popular}</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="font-preview">{transformed || t.common.exampleText}</div>
                                    <button className={`copy-button ${isCopied ? 'copied' : ''}`} onClick={() => handleCopy(transformed, font.id)}>
                                        {isCopied ? t.common.copied : t.common.copy}
                                    </button>
                                </div>
                            )
                        })}
                    </div>

                    {/* Article Content Section */}
                    <div className="content-section-premium">
                        <SeoSections sections={content.sections.filter((s: any) => s.type !== 'faq')} />
                    </div>

                    {/* FAQ Section */}
                    {content.sections.find((s: any) => s.type === 'faq') && (
                        <div className="faq-section-premium">
                            <FaqAccordion 
                                title={content.sections.find((s: any) => s.type === 'faq').title}
                                faqs={content.sections.find((s: any) => s.type === 'faq').faqs} 
                            />
                        </div>
                    )}
                </div>
            </main>

            {showToast && (
                <div className="toast"><span className="toast-icon">✓</span><span>{t.common.copied}</span></div>
            )}

            <Footer lang={lang} />
        </div>
    )
}
