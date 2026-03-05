"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import NextImage from 'next/image'
import dynamic from 'next/dynamic'
import { translations, Language } from '@/lib/translations'
import './discord-content.css'

const SeoSections = dynamic(() => import('../components/SeoSections'), { ssr: true })
const FaqAccordion = dynamic(() => import('../components/FaqAccordion'), { ssr: true })

// ============ UNICODE OFFSET TRANSFORMS ============
function offsetTransform(text: string, lowerStart: number, upperStart: number): string {
    if (!text) return ''
    return text.split('').map(c => {
        const code = c.charCodeAt(0)
        if (code >= 97 && code <= 122) return String.fromCodePoint(lowerStart + (code - 97))
        if (code >= 65 && code <= 90) return String.fromCodePoint(upperStart + (code - 65))
        return c
    }).join('')
}

const bold = (t: string) => offsetTransform(t, 0x1D41A, 0x1D400)
const italic = (t: string) => offsetTransform(t, 0x1D44E, 0x1D434)
const boldItalic = (t: string) => offsetTransform(t, 0x1D482, 0x1D468)
const script = (t: string) => offsetTransform(t, 0x1D4EA, 0x1D4D0)
const lightScript = (t: string) => offsetTransform(t, 0x1D4B6, 0x1D49C)
const gothic = (t: string) => offsetTransform(t, 0x1D51E, 0x1D504)
const gothicBold = (t: string) => offsetTransform(t, 0x1D586, 0x1D56C)
const doubleStruck = (t: string) => offsetTransform(t, 0x1D552, 0x1D538)
const sansBold = (t: string) => offsetTransform(t, 0x1D5EE, 0x1D5D4)
const sansItalic = (t: string) => offsetTransform(t, 0x1D622, 0x1D608)
const sansBoldItalic = (t: string) => offsetTransform(t, 0x1D656, 0x1D63C)
const monospace = (t: string) => offsetTransform(t, 0x1D68A, 0x1D670)
const sansRegular = (t: string) => offsetTransform(t, 0x1D5BA, 0x1D5A0)

// Map-based transforms
const mapTransform = (text: string, map: Record<string, string>): string =>
    text ? text.split('').map(c => map[c] || c).join('') : ''

const aestheticMap: Record<string, string> = {
    'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ғ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'ǫ', 'r': 'ʀ', 's': 's', 't': 'ᴛ', 'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ',
    'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ғ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ', 'J': 'ᴊ', 'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'ǫ', 'R': 'ʀ', 'S': 's', 'T': 'ᴛ', 'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ',
}
const circledMap: Record<string, string> = {
    'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ', 'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ', 'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ',
    'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ', 'H': 'Ⓗ', 'I': 'Ⓘ', 'J': 'Ⓙ', 'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ', 'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ', 'U': 'Ⓤ', 'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ',
}
const negSquaredMap: Record<string, string> = {
    'a': '🅰', 'b': '🅱', 'c': '🅲', 'd': '🅳', 'e': '🅴', 'f': '🅵', 'g': '🅶', 'h': '🅷', 'i': '🅸', 'j': '🅹', 'k': '🅺', 'l': '🅻', 'm': '🅼', 'n': '🅽', 'o': '🅾', 'p': '🅿', 'q': '🆀', 'r': '🆁', 's': '🆂', 't': '🆃', 'u': '🆄', 'v': '🆅', 'w': '🆆', 'x': '🆇', 'y': '🆈', 'z': '🆉',
    'A': '🅰', 'B': '🅱', 'C': '🅲', 'D': '🅳', 'E': '🅴', 'F': '🅵', 'G': '🅶', 'H': '🅷', 'I': '🅸', 'J': '🅹', 'K': '🅺', 'L': '🅻', 'M': '🅼', 'N': '🅽', 'O': '🅾', 'P': '🅿', 'Q': '🆀', 'R': '🆁', 'S': '🆂', 'T': '🆃', 'U': '🆄', 'V': '🆅', 'W': '🆆', 'X': '🆇', 'Y': '🆈', 'Z': '🆉',
}
const fullwidthMap: Record<string, string> = {
    'a': 'ａ', 'b': 'ｂ', 'c': 'ｃ', 'd': 'ｄ', 'e': 'ｅ', 'f': 'ｆ', 'g': 'ｇ', 'h': 'ｈ', 'i': 'ｉ', 'j': 'ｊ', 'k': 'ｋ', 'l': 'ｌ', 'm': 'ｍ', 'n': 'ｎ', 'o': 'ｏ', 'p': 'ｐ', 'q': 'ｑ', 'r': 'ｒ', 's': 'ｓ', 't': 'ｔ', 'u': 'ｕ', 'v': 'ｖ', 'w': 'ｗ', 'x': 'ｘ', 'y': 'ｙ', 'z': 'ｚ',
    'A': 'Ａ', 'B': 'Ｂ', 'C': 'Ｃ', 'D': 'Ｄ', 'E': 'Ｅ', 'F': 'Ｆ', 'G': 'Ｇ', 'H': 'Ｈ', 'I': 'Ｉ', 'J': 'Ｊ', 'K': 'Ｋ', 'L': 'Ｌ', 'M': 'Ｍ', 'N': 'Ｎ', 'O': 'Ｏ', 'P': 'Ｐ', 'Q': 'Ｑ', 'R': 'Ｒ', 'S': 'Ｓ', 'T': 'Ｔ', 'U': 'Ｕ', 'V': 'Ｖ', 'W': 'Ｗ', 'X': 'Ｘ', 'Y': 'Ｙ', 'Z': 'Ｚ',
}
const superscriptMap: Record<string, string> = {
    'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ', 'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ʰ', 'i': 'ⁱ', 'j': 'ʲ', 'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ', 'o': 'ᵒ', 'p': 'ᵖ', 'q': 'q', 'r': 'ʳ', 's': 'ˢ', 't': 'ᵗ', 'u': 'ᵘ', 'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ',
    'A': 'ᴬ', 'B': 'ᴮ', 'C': 'ᶜ', 'D': 'ᴰ', 'E': 'ᴱ', 'F': 'ᶠ', 'G': 'ᴳ', 'H': 'ᴴ', 'I': 'ᴵ', 'J': 'ᴶ', 'K': 'ᴷ', 'L': 'ᴸ', 'M': 'ᴹ', 'N': 'ᴺ', 'O': 'ᴼ', 'P': 'ᴾ', 'Q': 'Q', 'R': 'ᴿ', 'S': 'ˢ', 'T': 'ᵀ', 'U': 'ᵁ', 'V': 'ⱽ', 'W': 'ᵂ', 'X': 'ˣ', 'Y': 'ʸ', 'Z': 'ᶻ',
}
const upsideDownMap: Record<string, string> = {
    'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z',
    'A': '∀', 'B': 'ꓭ', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': '⅁', 'H': 'H', 'I': 'I', 'J': 'ſ', 'K': 'ꓘ', 'L': '˥', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'Ԁ', 'Q': 'Q', 'R': 'ꓤ', 'S': 'S', 'T': '⊥', 'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z',
}
const squaredMap: Record<string, string> = {
    'a': '🄰', 'b': '🄱', 'c': '🄲', 'd': '🄳', 'e': '🄴', 'f': '🄵', 'g': '🄶', 'h': '🄷', 'i': '🄸', 'j': '🄹', 'k': '🄺', 'l': '🄻', 'm': '🄼', 'n': '🄽', 'o': '🄾', 'p': '🄿', 'q': '🅀', 'r': '🅁', 's': '🅂', 't': '🅃', 'u': '🅄', 'v': '🅅', 'w': '🅆', 'x': '🅇', 'y': '🅈', 'z': '🅉',
    'A': '🄰', 'B': '🄱', 'C': '🄲', 'D': '🄳', 'E': '🄴', 'F': '🄵', 'G': '🄶', 'H': '🄷', 'I': '🄸', 'J': '🄹', 'K': '🄺', 'L': '🄻', 'M': '🄼', 'N': '🄽', 'O': '🄾', 'P': '🄿', 'Q': '🅀', 'R': '🅁', 'S': '🅂', 'T': '🅃', 'U': '🅄', 'V': '🅅', 'W': '🅆', 'X': '🅇', 'Y': '🅈', 'Z': '🅉',
}
const parenthesizedMap: Record<string, string> = {
    'a': '⒜', 'b': '⒝', 'c': '⒞', 'd': '⒟', 'e': '⒠', 'f': '⒡', 'g': '⒢', 'h': '⒣', 'i': '⒤', 'j': '⒥', 'k': '⒦', 'l': '⒧', 'm': '⒨', 'n': '⒩', 'o': '⒪', 'p': '⒫', 'q': '⒬', 'r': '⒭', 's': '⒮', 't': '⒯', 'u': '⒰', 'v': '⒱', 'w': '⒲', 'x': '⒳', 'y': '⒴', 'z': '⒵',
    'A': '⒜', 'B': '⒝', 'C': '⒞', 'D': '⒟', 'E': '⒠', 'F': '⒡', 'G': '⒢', 'H': '⒣', 'I': '⒤', 'J': '⒥', 'K': '⒦', 'L': '⒧', 'M': '⒨', 'N': '⒩', 'O': '⒪', 'P': '⒫', 'Q': '⒬', 'R': '⒭', 'S': '⒮', 'T': '⒯', 'U': '⒰', 'V': '⒱', 'W': '⒲', 'X': '⒳', 'Y': '⒴', 'Z': '⒵',
}

// Text effects
const combiner = (text: string, combChar: string): string => text ? text.split('').map(c => c + combChar).join('') : ''
const addStrikethrough = (t: string) => combiner(t, '\u0336')
const addUnderline = (t: string) => combiner(t, '\u0332')
const addWavy = (t: string) => combiner(t, '\u0303')
const addDotted = (t: string) => combiner(t, '\u0307')
const addCrossHatch = (t: string) => combiner(t, '\u0338')
const addDoubleUnderline = (t: string) => combiner(t, '\u0333')
const addOverline = (t: string) => combiner(t, '\u0305')
const addSlashThrough = (t: string) => combiner(t, '\u0337')
const addCreepy = (t: string) => t ? t.split('').map(c => c + '\u031C\u0324\u0300\u0311').join('') : ''

// ============ FONT STYLES ARRAY ============
interface FontStyle { id: string; name: string; transform: (t: string) => string; popular?: boolean }

const discordFonts: FontStyle[] = [
    { id: 'bold', name: 'Kalın (Bold)', transform: bold, popular: true },
    { id: 'italic', name: 'Eğik (Italic)', transform: italic, popular: true },
    { id: 'bold-italic', name: 'Kalın İtalik', transform: boldItalic, popular: true },
    { id: 'script', name: 'El Yazısı (Script)', transform: script, popular: true },
    { id: 'light-script', name: 'Hafif El Yazısı', transform: lightScript },
    { id: 'aesthetic', name: 'Küçük Harfler (Small Caps)', transform: t => mapTransform(t, aestheticMap), popular: true },
    { id: 'gothic', name: 'Gotik Yazı', transform: gothic, popular: true },
    { id: 'gothic-bold', name: 'Gotik Kalın', transform: gothicBold },
    { id: 'double-struck', name: 'Çift Çizgili (Double Struck)', transform: doubleStruck, popular: true },
    { id: 'monospace', name: 'Kod Yazısı (Monospace)', transform: monospace, popular: true },
    { id: 'sans-regular', name: 'Sans-Serif', transform: sansRegular },
    { id: 'sans-bold', name: 'Modern Kalın', transform: sansBold, popular: true },
    { id: 'sans-italic', name: 'Sans-Serif Eğik', transform: sansItalic },
    { id: 'sans-bold-italic', name: 'Sans Kalın Eğik', transform: sansBoldItalic },
    { id: 'circled', name: 'Yuvarlak Çerçeveli', transform: t => mapTransform(t, circledMap) },
    { id: 'neg-squared', name: 'Siyah Kare', transform: t => mapTransform(t, negSquaredMap), popular: true },
    { id: 'squared', name: 'Beyaz Kare', transform: t => mapTransform(t, squaredMap) },
    { id: 'parenthesized', name: 'Parantezli Yazı', transform: t => mapTransform(t, parenthesizedMap) },
    { id: 'fullwidth', name: 'Geniş Yazı (Vaporwave)', transform: t => mapTransform(t, fullwidthMap), popular: true },
    { id: 'superscript', name: 'Üst Simge (Superscript)', transform: t => mapTransform(t, superscriptMap) },
    { id: 'upside-down', name: 'Baş Aşağı', transform: t => t ? mapTransform(t, upsideDownMap).split('').reverse().join('') : '', popular: true },
    { id: 'strikethrough', name: 'Üstü Çizili', transform: addStrikethrough, popular: true },
    { id: 'underline', name: 'Altı Çizili', transform: addUnderline },
    { id: 'double-underline', name: 'Çift Altı Çizili', transform: addDoubleUnderline },
    { id: 'overline', name: 'Üstü Çizgi (Overline)', transform: addOverline },
    { id: 'wavy', name: 'Dalgalı Tilde', transform: addWavy },
    { id: 'dotted', name: 'Noktalı Yazı', transform: addDotted },
    { id: 'cross-hatch', name: 'Çarpraz Çizgili', transform: addCrossHatch },
    { id: 'slash-through', name: 'Eğik Çizgili', transform: addSlashThrough },
    { id: 'creepy-zalgo', name: 'Korkutucu (Zalgo)', transform: addCreepy, popular: true },
    { id: 'reverse', name: 'Ters Yazı', transform: t => t ? t.split('').reverse().join('') : '' },
    { id: 'spaced', name: 'Aralıklı Yazı', transform: t => t ? t.split('').join(' ') : '' },
    { id: 'double-spaced', name: 'Çift Aralıklı', transform: t => t ? t.split('').join('  ') : '' },
    { id: 'dot-separated', name: 'Nokta Ayrımlı', transform: t => t ? t.split('').join('•') : '', popular: true },
    { id: 'arrow-style', name: 'Oklu Stil', transform: t => `»»— ${t} —««` },
    { id: 'bracket-style', name: '【 Köşeli Parantez 】', transform: t => `【 ${t} 】` },
    { id: 'jp-bracket', name: '『 Japon Parantezi 』', transform: t => `『 ${t} 』` },
    { id: 'ornate', name: '꧁꧂ Süslü Çerçeve', transform: t => `꧁༺ ${t} ༻꧂`, popular: true },
    { id: 'sparkle', name: '✨ Parıltılı', transform: t => `✨ ${t} ✨`, popular: true },
    { id: 'star-frame', name: '☆ Yıldız Çerçeve', transform: t => `☆.。.:* ${t} *:.。.☆` },
    { id: 'wings', name: 'ʚ Kanatlı ɞ', transform: t => `ʚ ${t} ɞ` },
    { id: 'sword', name: '⚔️ Kılıçlı', transform: t => `⚔️ ${t} ⚔️` },
    { id: 'gaming', name: '🎮 Oyuncu', transform: t => `🎮 ${t} 🕹️`, popular: true },
    { id: 'skull', name: '💀 Kuru Kafa', transform: t => `💀 ${t} 💀` },
    { id: 'lightning', name: '⚡ Şimşekli', transform: t => `⚡ ${t} ⚡` },
    { id: 'fire', name: '🔥 Ateşli', transform: t => `🔥 ${t} 🔥` },
    { id: 'crown', name: '👑 Taçlı', transform: t => `👑 ${t} 👑` },
    { id: 'diamond', name: '💎 Elmaslı', transform: t => `💎 ${t} 💎` },
    { id: 'magic', name: '🔮 Büyülü', transform: t => `🔮 ${t} 🔮` },
    { id: 'aesthetic-stars', name: '✧ Estetik Yıldız', transform: t => `✧･ﾟ: *✧･ﾟ:* ${t} *:･ﾟ✧*:･ﾟ✧`, popular: true },
]

// ============ DISCORD FORMATTING ============
const discordFormats = [
    { id: 'bold', name: 'Bold', syntax: '**metin**', wrap: (t: string) => `**${t}**` },
    { id: 'italic', name: 'Italic', syntax: '*metin*', wrap: (t: string) => `*${t}*` },
    { id: 'underline', name: 'Underline', syntax: '__metin__', wrap: (t: string) => `__${t}__` },
    { id: 'strikethrough', name: 'Strikethrough', syntax: '~~metin~~', wrap: (t: string) => `~~${t}~~` },
    { id: 'code', name: 'Code', syntax: '`metin`', wrap: (t: string) => `\`${t}\`` },
    { id: 'codeblock', name: 'Code Block', syntax: '```metin```', wrap: (t: string) => `\`\`\`\n${t}\n\`\`\`` },
    { id: 'quote', name: 'Quote', syntax: '> metin', wrap: (t: string) => `> ${t}` },
    { id: 'spoiler', name: 'Spoiler', syntax: '||metin||', wrap: (t: string) => `||${t}||` },
]

const randomTexts = ['Merhaba Dünya', 'Discord Sohbet', 'Oyun Başlıyor', 'Selam Dostum', 'Gel Oynayalım', 'Takım Kuralım', 'Sunucu Açtım', 'GG WP', 'Efsane Oyun', 'Kanal Açıklaması']
const kaomojis = ['(◕‿◕)', '(ᵔᴥᵔ)', '(╯°□°)╯', '(⌐■_■)', '(◠‿◠)', '(ᗒᗣᗕ)՞', '(≧◡≦)', '(。♥‿♥。)', '(╥﹏╥)', 'ᕕ( ᐛ )ᕗ', '(ง •_•)ง', '(⊙_☉)', '┬┴┬┴┤(･_├┬┴┬┴']
const decorSymbols = ['★', '☆', '♡', '♠', '♣', '♦', '✦', '✧', '⚡', '☽', '☀', '✿', '❀', '⚔', '♛', '♕', '✝', '☯', '⚜', '◈']

// ============ MAIN COMPONENT ============
export default function DiscordYaziStilleriClient() {
    const [lang, setLang] = useState<Language>('tr')
    const [inputText, setInputText] = useState('Discord Text Styler')
    const [copiedId, setCopiedId] = useState<string | null>(null)
    const [showToast, setShowToast] = useState(false)
    const [formatOutput, setFormatOutput] = useState('')
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
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

    useEffect(() => {
        if (!mounted) return
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('active') })
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [mounted])

    const t = translations[lang]

    useEffect(() => {
        if (!mounted) return
        const faqSection = t.discord.sections.find((s: any) => s.type === 'faq')
        const sd = {
            "@context": "https://schema.org", "@type": "SoftwareApplication",
            "name": t.discord.seo.name, "description": t.discord.seo.description,
            "url": "https://yazı-stilleripro.com.tr/discord-yazi-stilleri",
            "applicationCategory": "UtilityApplication", "operatingSystem": "Web",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "TRY" }
        }
        const faqSd = {
            "@context": "https://schema.org", "@type": "FAQPage",
            "mainEntity": faqSection ? faqSection.faqs.map((f: any) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) : []
        }
        const s1 = document.createElement('script'); s1.type = 'application/ld+json'; s1.text = JSON.stringify(sd); s1.id = 'discord-sd'; document.head.appendChild(s1)
        const s2 = document.createElement('script'); s2.type = 'application/ld+json'; s2.text = JSON.stringify(faqSd); s2.id = 'discord-faq-sd'; document.head.appendChild(s2)
        return () => { document.getElementById('discord-sd')?.remove(); document.getElementById('discord-faq-sd')?.remove() }
    }, [mounted, t])

    const handleCopy = async (text: string, id: string) => {
        try {
            await navigator.clipboard.writeText(text)
            setCopiedId(id); setShowToast(true)
            setTimeout(() => setCopiedId(null), 2000)
            setTimeout(() => setShowToast(false), 3000)
        } catch (err) { console.error('Copy error:', err) }
    }

    const handleFormatCopy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text)
            setShowToast(true)
            setTimeout(() => setShowToast(false), 3000)
        } catch (err) { console.error('Copy error:', err) }
    }

    const handleFormatClick = (fmt: typeof discordFormats[0]) => {
        const result = fmt.wrap(inputText || 'metin');
        setFormatOutput(result);
    }

    return (
        <div className={`page-discord ${mounted && darkMode ? 'dark' : ''}`}>
            {/* Header */}
            <header className="header">
                <div className="container">
                    <div className="header-content">
                        <Link href="/" className="logo-container">
                            <div className="logo-wrapper">
                                <NextImage src="/logo.svg" alt={t.common.logo} width={180} height={40} className="logo-image" style={{ height: 'auto' }} priority />
                            </div>
                        </Link>
                        <nav className="nav desktop-nav">
                            <Link href="/insta-yazi-tipi" className="nav-link">{t.common.nav.insta}</Link>
                            <Link href="/tiktok-yazi-stilleri" className="nav-link">{t.common.nav.tiktok}</Link>
                            <Link href="/discord-yazi-stilleri" className="nav-link active">
                                <span>{t.common.nav.discord}</span>
                                <span className="active-pill"></span>
                            </Link>
                            <Link href="/sekilli-semboller" className="nav-link">{t.common.nav.symbols}</Link>
                            <Link href="/pubg-sekilli-nick" className="nav-link">{t.common.nav.pubg}</Link>
                        </nav>
                        <div className="header-actions">
                            <button className="lang-toggle-btn" onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')} aria-label={lang === 'tr' ? 'Switch to English' : 'Türkçeye Geç'} title={lang === 'tr' ? 'Switch to English' : 'Türkçeye Geç'}>
                                <span className="lang-icon">🌐</span><span className="lang-text">{lang === 'tr' ? 'EN' : 'TR'}</span>
                            </button>
                            <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle Dark Mode">{darkMode ? '☀️' : '🌙'}</button>
                            <button className={`hamburger-btn ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu"><span></span><span></span><span></span></button>
                        </div>
                    </div>
                </div>
                <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}></div>
                <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <div className="mobile-menu-header"><span className="mobile-menu-title">{t.common.nav.menu}</span><button className="close-menu-btn" onClick={() => setIsMobileMenuOpen(false)}>✕</button></div>
                    <nav className="mobile-nav">
                        <Link href="/insta-yazi-tipi" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}><span className="nav-icon">📸</span> {t.common.nav.insta}</Link>
                        <Link href="/tiktok-yazi-stilleri" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}><span className="nav-icon">🎵</span> {t.common.nav.tiktok}</Link>
                        <Link href="/discord-yazi-stilleri" className="mobile-nav-link active" onClick={() => setIsMobileMenuOpen(false)}><span className="nav-icon">🎮</span> {t.common.nav.discord}</Link>
                        <Link href="/sekilli-semboller" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}><span className="nav-icon">🎨</span> {t.common.nav.symbols}</Link>
                        <Link href="/pubg-sekilli-nick" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}><span className="nav-icon">🎯</span> {t.common.nav.pubg}</Link>
                        <div className="mobile-lang-switch">
                            <button className={`mobile-lang-btn ${lang === 'tr' ? 'active' : ''}`} onClick={() => { setLang('tr'); setIsMobileMenuOpen(false); }}>TR</button>
                            <button className={`mobile-lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => { setLang('en'); setIsMobileMenuOpen(false); }}>EN</button>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="main">
                {/* Hero */}
                <div className="hero-section-fullscreen">
                    <div className="hero-bg-fullscreen">
                        <div className="hero-gradient-animated"></div>
                        <div className="hero-particles-animated">
                            <div className="particle particle-1">🎮</div>
                            <div className="particle particle-2">⚔️</div>
                            <div className="particle particle-3">🛡️</div>
                            <div className="particle particle-4">✨</div>
                            <div className="particle particle-5">👾</div>
                            <div className="particle particle-6">⚔️</div>
                            <div className="particle particle-7">🔥</div>
                            <div className="particle particle-8">👾</div>
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
                            <span className="badge-icon">🎮</span>
                            <span className="badge-text">{t.discord.hero.badge}</span>
                        </div>

                        <h1 className="hero-title-fullscreen">
                            <span className="title-line-animated">
                                <span className="title-word-animated">{t.discord.hero.title}</span>
                                <span className="title-word-animated highlight-gradient">{t.discord.hero.titleHighlight}</span>
                            </span>
                        </h1>

                        <p className="hero-description-fullscreen">
                            {t.discord.hero.description}
                        </p>

                        <div className="hero-input-fullscreen">
                            <div className="input-glow-effect"></div>
                            <div className="input-container-glass">
                                <div className="input-header-premium">
                                    <div className="input-icon-premium">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#dgradient1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M2 17L12 22L22 17" stroke="url(#dgradient1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M2 12L12 17L22 12" stroke="url(#dgradient1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <defs><linearGradient id="dgradient1" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#5865F2" /><stop offset="100%" stopColor="#EB459E" /></linearGradient></defs>
                                        </svg>
                                    </div>
                                    <div className="input-header-text-premium">
                                        <div className="input-title-premium">{t.discord.hero.inputTitle}</div>
                                        <p>{t.discord.hero.inputSub}</p>
                                    </div>
                                </div>

                                <div className="input-field-premium">
                                    <textarea
                                        id="discord-input"
                                        className="text-input-premium"
                                        value={inputText}
                                        onChange={(e) => setInputText(e.target.value)}
                                        placeholder={t.discord.hero.inputPlaceholder}
                                        rows={2}
                                        maxLength={500}
                                    />
                                    <button className="clear-btn-premium" onClick={() => setInputText('')} style={{ opacity: inputText ? 1 : 0, pointerEvents: inputText ? 'auto' : 'none' }} aria-label="Temizle">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                                    </button>
                                </div>

                                {/* Extra Buttons */}
                                <div className="discord-extra-buttons">
                                    <button className="discord-extra-btn" onClick={() => setInputText('')}>🗑️ {t.discord.hero.clear}</button>
                                    <button className="discord-extra-btn" onClick={() => setInputText(randomTexts[Math.floor(Math.random() * randomTexts.length)])}>🎲 {t.discord.hero.random}</button>
                                    <button className="discord-extra-btn" onClick={() => setInputText(inputText.toUpperCase())}>⬆️ {t.discord.hero.uppercase}</button>
                                    <button className="discord-extra-btn" onClick={() => setInputText(inputText.toLowerCase())}>⬇️ {t.discord.hero.lowercase}</button>
                                    <button className="discord-extra-btn" onClick={() => { const s = decorSymbols; setInputText(s[Math.floor(Math.random() * s.length)] + ' ' + inputText + ' ' + s[Math.floor(Math.random() * s.length)]) }}>✦ {t.discord.hero.addSymbol}</button>
                                    <button className="discord-extra-btn" onClick={() => setInputText(inputText + ' ' + kaomojis[Math.floor(Math.random() * kaomojis.length)])}>😊 {t.discord.hero.addKaomoji}</button>
                                </div>

                                <div className="input-footer-premium">
                                    <div className="turkish-chars-premium">
                                        <div className="chars-group">
                                            <span className="char-badge-premium">ç</span><span className="char-badge-premium">ğ</span><span className="char-badge-premium">ı</span><span className="char-badge-premium">İ</span><span className="char-badge-premium">ö</span><span className="char-badge-premium">ş</span><span className="char-badge-premium">ü</span>
                                        </div>
                                        <span className="char-label-premium">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            {t.discord.hero.turkishCharsSupported}
                                        </span>
                                    </div>
                                    <div className={`char-counter-premium ${inputText.length > 400 ? 'warning' : ''} ${inputText.length > 480 ? 'danger' : ''}`}>
                                        <span className="counter-text">{inputText.length} / 500</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hero-stats-fullscreen">
                            <div className="stat-item-premium">
                                <div className="stat-icon">🎮</div>
                                <div className="stat-content"><span className="stat-number-premium">50+</span><span className="stat-label-premium">{t.discord.hero.stat1}</span></div>
                            </div>
                            <div className="stat-divider-premium"></div>
                            <div className="stat-item-premium">
                                <div className="stat-icon">💬</div>
                                <div className="stat-content"><span className="stat-number-premium">Discord</span><span className="stat-label-premium">{t.discord.hero.stat2}</span></div>
                            </div>
                            <div className="stat-divider-premium"></div>
                            <div className="stat-item-premium">
                                <div className="stat-icon">🇹🇷</div>
                                <div className="stat-content"><span className="stat-number-premium">%100</span><span className="stat-label-premium">{t.discord.hero.stat3}</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    {/* Discord Formatting Helper */}
                    <div className="discord-format-section reveal" style={{ marginTop: '2rem' }}>
                        <div className="discord-format-title">🎯 {t.discord.formatting.title}</div>
                        <div className="discord-format-subtitle">{t.discord.formatting.subtitle}</div>
                        <div className="discord-format-grid">
                            {discordFormats.map((fmt) => (
                                <button key={fmt.id} className="discord-format-btn" onClick={() => handleFormatClick(fmt)}>
                                    <span className="format-label">{t.discord.formatting[fmt.id as keyof typeof t.discord.formatting] || fmt.name}</span>
                                    <span className="format-syntax">{fmt.syntax}</span>
                                </button>
                            ))}
                        </div>
                        {formatOutput && (
                            <div className="discord-format-output visible">
                                <div className="discord-format-output-label">{t.discord.formatting.formattedText}</div>
                                <div className="discord-format-output-text">
                                    <span>{formatOutput}</span>
                                    <button className="discord-format-copy" onClick={() => handleFormatCopy(formatOutput)}>📋 {t.common.copy}</button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Font Grid */}
                    <div className="category-section">
                        <div className="category-header">
                            <span className="category-count">{discordFonts.length}</span>
                        </div>
                        <div className="font-grid">
                            {discordFonts.map((font) => {
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
                    </div>

                    {/* Article Sections */}
                    <SeoSections sections={t.discord.sections.filter((s: any) => s.type !== 'faq')} />

                    {/* FAQ Area */}
                    {t.discord.sections.find((s: any) => s.type === 'faq') && (
                        <FaqAccordion
                            title={t.discord.sections.find((s: any) => s.type === 'faq').title}
                            faqs={t.discord.sections.find((s: any) => s.type === 'faq').faqs}
                        />
                    )}
                </div>
            </main>

            {/* Toast */}
            {showToast && (
                <div className="toast"><span className="toast-icon">✓</span><span>{t.common.copied}</span></div>
            )}

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-links">
                            <Link href="/" className="footer-link">{t.common.nav.home}</Link>
                            <Link href="/insta-yazi-tipi" className="footer-link">{t.common.nav.insta}</Link>
                            <Link href="/tiktok-yazi-stilleri" className="footer-link">{t.common.nav.tiktok}</Link>
                            <Link href="/discord-yazi-stilleri" className="footer-link">{t.common.nav.discord}</Link>
                            <Link href="/sekilli-semboller" className="footer-link">{t.common.nav.symbols}</Link>
                            <Link href="/pubg-sekilli-nick" className="footer-link">{t.common.nav.pubg}</Link>
                            <Link href="/gizlilik-politikasi" className="footer-link">{t.common.nav.privacy}</Link>
                            <Link href="/kullanim-kosullari" className="footer-link">{t.common.nav.terms}</Link>
                            <Link href="/hakkimizda" className="footer-link">{t.common.nav.about}</Link>
                        </div>
                        <div className="footer-text">© 2026 ✨ {t.common.logo}. {t.common.nav.rights}</div>
                    </div>
                </div>
            </footer>

            <style jsx>{`
                .nav-link.active { color: var(--primary-color); font-weight: 600; }
                .lang-toggle-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.3rem;
                    padding: 0.5rem 0.75rem;
                    border-radius: 9999px;
                    background-color: var(--button-bg);
                    color: var(--button-text);
                    font-weight: 600;
                    font-size: 0.875rem;
                    border: none;
                    cursor: pointer;
                    transition: background-color 0.2s ease, color 0.2s ease;
                }
                .lang-toggle-btn:hover {
                    background-color: var(--button-bg-hover);
                }
                .lang-icon {
                    font-size: 1.1rem;
                }
                .mobile-lang-switch {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    margin-top: 1.5rem;
                    padding-top: 1rem;
                    border-top: 1px solid var(--border-color);
                }
                .mobile-lang-btn {
                    padding: 0.5rem 1rem;
                    border-radius: 9999px;
                    background-color: var(--button-bg);
                    color: var(--button-text);
                    font-weight: 600;
                    font-size: 1rem;
                    border: none;
                    cursor: pointer;
                    transition: background-color 0.2s ease, color 0.2s ease;
                }
                .mobile-lang-btn.active {
                    background-color: var(--primary-color);
                    color: white;
                }
            `}</style>
        </div>
    )
}
