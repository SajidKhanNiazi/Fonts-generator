"use client"
import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import NextImage from 'next/image'
import { Language, translations } from '@/lib/translations'
import Header from '../components/Header'
import Footer from '../components/Footer'

// ============ TEXT TRANSFORMATION HELPERS ============

const smallCapsMap: Record<string, string> = {
  'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ꜰ', 'g': 'ɢ', 'h': 'ʜ',
  'i': 'ɪ', 'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ',
  'q': 'ǫ', 'r': 'ʀ', 's': 'ꜱ', 't': 'ᴛ', 'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x',
  'y': 'ʏ', 'z': 'ᴢ',
  'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ꜰ', 'G': 'ɢ', 'H': 'ʜ',
  'I': 'ɪ', 'J': 'ᴊ', 'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ',
  'Q': 'ǫ', 'R': 'ʀ', 'S': 'ꜱ', 'T': 'ᴛ', 'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x',
  'Y': 'ʏ', 'Z': 'ᴢ',
}

const superscriptMap: Record<string, string> = {
  'A': 'ᴬ', 'B': 'ᴮ', 'C': 'ᶜ', 'D': 'ᴰ', 'E': 'ᴱ', 'F': 'ᶠ', 'G': 'ᴳ', 'H': 'ᴴ',
  'I': 'ᴵ', 'J': 'ᴶ', 'K': 'ᴷ', 'L': 'ᴸ', 'M': 'ᴹ', 'N': 'ᴺ', 'O': 'ᴼ', 'P': 'ᴾ',
  'Q': 'Q', 'R': 'ᴿ', 'S': 'ˢ', 'T': 'ᵀ', 'U': 'ᵁ', 'V': 'ⱽ', 'W': 'ᵂ', 'X': 'ˣ',
  'Y': 'ʸ', 'Z': 'ᶻ',
}

const mirrorMap: Record<string, string> = {
  'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ',
  'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd',
  'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x',
  'y': 'ʎ', 'z': 'z',
  'A': '∀', 'B': 'ᗺ', 'C': 'Ↄ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': '⅁', 'H': 'H',
  'I': 'I', 'J': 'ſ', 'K': 'ꓘ', 'L': '˥', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'Ԁ',
  'Q': 'Ό', 'R': 'ᴚ', 'S': 'S', 'T': '⊥', 'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X',
  'Y': '⅄', 'Z': 'Z',
}

const glitchMap: Record<string, string> = {
  'A': '∆', 'a': '∆', 'E': '3', 'e': '3', 'O': 'Ø', 'o': 'Ø',
  'S': '$', 's': '$', 'I': '!', 'i': '!', 'T': '†', 't': '†',
  'B': 'ß', 'b': 'ß', 'G': '9', 'g': '9', 'R': 'Я', 'r': 'Я',
  'N': 'И', 'n': 'И', 'U': 'Ü', 'u': 'Ü', 'L': '£', 'l': '£',
}

const leetMap: Record<string, string> = {
  'A': '4', 'a': '4', 'E': '3', 'e': '3', 'I': '1', 'i': '1',
  'O': '0', 'o': '0', 'S': '5', 's': '5', 'T': '7', 't': '7',
  'B': '8', 'b': '8', 'G': '6', 'g': '6', 'L': '1', 'l': '1',
}

function toSmallCaps(text: string): string {
  return [...text].map(c => smallCapsMap[c] || c).join('')
}

function toSuperscript(text: string): string {
  return [...text.toUpperCase()].map(c => superscriptMap[c] || c).join('')
}

function toSplitDot(text: string): string {
  return [...text.toUpperCase()].join('•')
}

function toSplitLine(text: string): string {
  return [...text.toUpperCase()].join('丨')
}

function toSplitSymbol(text: string): string {
  return [...text.toUpperCase()].join('么')
}

function toGlitch(text: string): string {
  return [...text].map(c => glitchMap[c] || c).join('')
}

function toLeetSpeak(text: string): string {
  return [...text].map(c => leetMap[c] || c).join('')
}

function toFullwidth(text: string): string {
  return [...text].map(c => {
    const code = c.charCodeAt(0)
    if (code >= 33 && code <= 126) {
      return String.fromCharCode(code + 0xFEE0)
    }
    return c
  }).join('')
}

function toCursedText(text: string): string {
  return [...text].map(c => c + '\u0355\u033d').join('')
}

function toCircledText(text: string): string {
  return [...text].map(c => c + '\u20e0').join('')
}

function toMirror(text: string): string {
  return [...text].reverse().map(c => mirrorMap[c] || c).join('')
}

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
  const [activeMode, setActiveMode] = useState<'initial' | 'converter' | 'aliases'>('initial')

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
    },
    {
      id: 'girl',
      name: lang === 'tr' ? 'Kız Şekilli Nick' : 'Girl Stylish Names',
      icon: '🌸',
      nicknames: [
        '♡Shadow♡', '✿ᴋɪʟʟᴇʀ✿', '🌸Ｓｈａｄｏｗ🌸', '♡亗Queen亗♡', '✿꧁Angel꧂✿',
        '🦋ᴘʀɪɴᴄᴇꜱꜱ🦋', '♡Luna♡', '✿ᴠᴇɴᴜꜱ✿', '🌸Ａｎｇｅｌ🌸', '♡亗Rose亗♡',
        '✿꧁Luna꧂✿', '🦋ᴀᴜʀᴏʀᴀ🦋', '♡Stella♡', '✿ᴅʀᴇᴀᴍ✿', '🌸Ｓｔａｒ🌸',
        '♡亗Fairy亗♡', '✿꧁Cherry꧂✿', '🦋ᴅᴀɪꜱʏ🦋', '♡Crystal♡', '✿ᴍᴏᴏɴ✿',
        '🌸Ｐｉｘｉｅ🌸', '♡亗Lily亗♡', '✿꧁Ruby꧂✿', '🦋ꜱᴋʏ🦋', '♡Pearl♡',
        '✿ᴅᴏʟʟ✿', '🌸Ｂｌｏｓｓｏｍ🌸', '♡亗Iris亗♡', '✿꧁Sakura꧂✿', '🦋ᴀɴɢᴇʟ🦋',
        '♡Violet♡', '✿ᴊᴀꜱᴍɪɴᴇ✿', '🌸Ｈｏｎｅｙ🌸', '♡亗Kitten亗♡', '✿꧁Candy꧂✿',
        '🦋ᴘᴇᴀᴄʜ🦋', '♡Sugar♡', '✿ᴄᴜᴘɪᴅ✿', '🌸Ｃｕｔｉｅ🌸', '♡亗Blossom亗♡'
      ]
    },
    {
      id: 'japanese',
      name: lang === 'tr' ? 'Japon Stili' : 'Japanese Style',
      icon: '🎌',
      nicknames: [
        'シKillerシ', '乂Shadow乂', '亗Death亗', '影•Storm', '龍Phoenix龍',
        '忍ᴀꜱꜱᴀꜱꜱɪɴ忍', 'シDestroyerシ', '乂Thunder乂', '亗Reaper亗', '影•Ghost',
        '龍Dragon龍', '忍ʜᴜɴᴛᴇʀ忍', 'シViperシ', '乂Blade乂', '亗Nightmare亗',
        '影•Titan', '龍Cobra龍', '忍ᴡᴀʀʟᴏʀᴅ忍', 'シFuryシ', '乂Rage乂',
        '亗Venom亗', '影•Inferno', '龍Legend龍', '忍ᴇʟɪᴛᴇ忍', 'シMasterシ',
        '乂Pro乂', '亗Champion亗', '影•King', '龍Ace龍', '忍ɢᴏᴀᴛ忍',
        '꧁シKillerシ꧂', '꧁乂Shadow乂꧂', '꧁亗Death亗꧂', '꧁龍Dragon龍꧂',
        '꧁忍ᴀꜱꜱᴀꜱꜱɪɴ忍꧂', '꧁シPhoenixシ꧂', '꧁乂Storm乂꧂', '꧁亗Reaper亗꧂',
        '꧁龍Legend龍꧂', '꧁忍ᴇʟɪᴛᴇ忍꧂'
      ]
    }
  ], [t, lang])

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
    const defaultName = lang === 'tr' ? 'Oyuncu' : 'Player'
    const baseName = inputText.trim() || defaultName
    const baseNameUpper = baseName.toUpperCase()
    const dynamicNicks: Array<{ nick: string; label: string; category: string }> = []

    // ─── 1. Classic Frame Patterns ───
    pubgPatterns.forEach(({ pattern, label }) => {
      const nick = pattern
        .replace(/{name}/g, baseName)
        .replace(/{name_upper}/g, baseNameUpper)
      dynamicNicks.push({ nick, label, category: lang === 'tr' ? '🎮 Klasik Stiller' : '🎮 Classic Styles' })
    })

    // ─── 2. Split Letter Styles ───
    const splitCategory = lang === 'tr' ? '✂️ Bölünmüş Harf' : '✂️ Split Letter'
    const splitDot = toSplitDot(baseName)
    const splitLine = toSplitLine(baseName)
    const splitSym = toSplitSymbol(baseName)
    dynamicNicks.push(
      { nick: splitDot, label: lang === 'tr' ? 'Nokta Bölme' : 'Dot Split', category: splitCategory },
      { nick: `꧁${splitDot}꧂`, label: lang === 'tr' ? 'Çerçeveli Nokta' : 'Framed Dot', category: splitCategory },
      { nick: `亗${splitDot}亗`, label: lang === 'tr' ? 'Sembol Nokta' : 'Symbol Dot', category: splitCategory },
      { nick: splitLine, label: lang === 'tr' ? 'Çizgi Bölme' : 'Line Split', category: splitCategory },
      { nick: `【${splitLine}】`, label: lang === 'tr' ? 'Çerçeveli Çizgi' : 'Framed Line', category: splitCategory },
      { nick: splitSym, label: lang === 'tr' ? 'Sembol Bölme' : 'Symbol Split', category: splitCategory },
      { nick: `꧁${splitSym}꧂`, label: lang === 'tr' ? 'Çerçeveli Sembol' : 'Framed Symbol', category: splitCategory },
    )

    // ─── 3. Small Caps & Superscript ───
    const capsCategory = lang === 'tr' ? '👑 Küçük Büyük Harf' : '👑 Small Caps'
    const sc = toSmallCaps(baseName)
    const sup = toSuperscript(baseName)
    dynamicNicks.push(
      { nick: sc, label: lang === 'tr' ? 'Küçük Büyük' : 'Small Caps', category: capsCategory },
      { nick: `${sc}⚔️`, label: lang === 'tr' ? 'Kılıçlı Küçük' : 'Small Caps + Sword', category: capsCategory },
      { nick: `亗${sc}亗`, label: lang === 'tr' ? 'Sembol Küçük' : 'Symbol Small Caps', category: capsCategory },
      { nick: `꧁${sc}꧂`, label: lang === 'tr' ? 'Çerçeveli Küçük' : 'Framed Small Caps', category: capsCategory },
      { nick: sup, label: lang === 'tr' ? 'Üst Simge' : 'Superscript', category: capsCategory },
      { nick: `${sup}⚔️`, label: lang === 'tr' ? 'Kılıçlı Üst' : 'Superscript + Sword', category: capsCategory },
      { nick: `${sup}🔥`, label: lang === 'tr' ? 'Ateşli Üst' : 'Superscript + Fire', category: capsCategory },
      { nick: `${sup}☠︎`, label: lang === 'tr' ? 'Korsanlı Üst' : 'Superscript + Skull', category: capsCategory },
    )

    // ─── 4. Weapon-Themed ───
    const weaponCategory = lang === 'tr' ? '⚔️ Silah Temalı' : '⚔️ Weapon Style'
    dynamicNicks.push(
      { nick: `▄︻̷̿┻̿═━一${baseName}`, label: lang === 'tr' ? 'Sniper Tüfek' : 'Sniper Rifle', category: weaponCategory },
      { nick: `︻デ═一${baseName}`, label: lang === 'tr' ? 'Tüfek Stili' : 'Rifle Style', category: weaponCategory },
      { nick: `▄︻̷̿┻̿═━一${baseNameUpper}`, label: lang === 'tr' ? 'Büyük Sniper' : 'Upper Sniper', category: weaponCategory },
      { nick: `▄︻̷̿┻̿═━一${toFullwidth(baseName)}`, label: lang === 'tr' ? 'Geniş Sniper' : 'Fullwidth Sniper', category: weaponCategory },
      { nick: `︻デ═一${sc}`, label: lang === 'tr' ? 'Küçük Tüfek' : 'Small Caps Rifle', category: weaponCategory },
    )

    // ─── 5. Glitch / Hacker ───
    const glitchCategory = lang === 'tr' ? '💀 Glitch / Hacker' : '💀 Glitch / Hacker'
    const glitched = toGlitch(baseName)
    const leeted = toLeetSpeak(baseName)
    dynamicNicks.push(
      { nick: glitched, label: lang === 'tr' ? 'Glitch Stili' : 'Glitch Style', category: glitchCategory },
      { nick: `【${glitched}】`, label: lang === 'tr' ? 'Çerçeveli Glitch' : 'Framed Glitch', category: glitchCategory },
      { nick: `亗${glitched}亗`, label: lang === 'tr' ? 'Sembol Glitch' : 'Symbol Glitch', category: glitchCategory },
      { nick: leeted, label: lang === 'tr' ? 'Leet Speak' : 'Leet Speak', category: glitchCategory },
      { nick: `꧁${leeted}꧂`, label: lang === 'tr' ? 'Çerçeveli Leet' : 'Framed Leet', category: glitchCategory },
      { nick: `§${toGlitch(baseName).toUpperCase()}§`, label: lang === 'tr' ? 'Paragraf Glitch' : 'Section Glitch', category: glitchCategory },
    )

    // ─── 6. Cute + Deadly (Girl Stylish) ───
    const cuteCategory = lang === 'tr' ? '🌸 Tatlı & Ölümcül' : '🌸 Cute & Deadly'
    dynamicNicks.push(
      { nick: `♡${baseName}♡`, label: lang === 'tr' ? 'Kalp Stili' : 'Heart Style', category: cuteCategory },
      { nick: `✿${sc}✿`, label: lang === 'tr' ? 'Çiçek Küçük' : 'Flower Small Caps', category: cuteCategory },
      { nick: `🌸${toFullwidth(baseName)}🌸`, label: lang === 'tr' ? 'Kiraz Çiçeği' : 'Cherry Blossom', category: cuteCategory },
      { nick: `♡亗${baseName}亗♡`, label: lang === 'tr' ? 'Kalp Sembol' : 'Heart Symbol', category: cuteCategory },
      { nick: `꧁♡${baseName}♡꧂`, label: lang === 'tr' ? 'Çerçeveli Kalp' : 'Framed Heart', category: cuteCategory },
      { nick: `✿꧁${baseName}꧂✿`, label: lang === 'tr' ? 'Çiçek Çerçeve' : 'Flower Frame', category: cuteCategory },
      { nick: `🦋${sc}🦋`, label: lang === 'tr' ? 'Kelebek Stili' : 'Butterfly Style', category: cuteCategory },
    )

    // ─── 7. Japanese + Katakana Mix ───
    const japanCategory = lang === 'tr' ? '🎌 Japon Stili' : '🎌 Japanese Mix'
    dynamicNicks.push(
      { nick: `シ${baseName}シ`, label: lang === 'tr' ? 'Katakana Çerçeve' : 'Katakana Frame', category: japanCategory },
      { nick: `乂${baseName}乂`, label: lang === 'tr' ? 'Japon Çarpı' : 'Japanese Cross', category: japanCategory },
      { nick: `亗${baseName}亗`, label: lang === 'tr' ? 'Özel Sembol' : 'Special Symbol', category: japanCategory },
      { nick: `影•${baseName}`, label: lang === 'tr' ? 'Gölge Japon' : 'Shadow Japanese', category: japanCategory },
      { nick: `龍${baseName}龍`, label: lang === 'tr' ? 'Ejderha Stili' : 'Dragon Style', category: japanCategory },
      { nick: `忍${sc}忍`, label: lang === 'tr' ? 'Ninja Stili' : 'Ninja Style', category: japanCategory },
      { nick: `꧁シ${baseName}シ꧂`, label: lang === 'tr' ? 'Çerçeveli Katakana' : 'Framed Katakana', category: japanCategory },
    )

    // ─── 8. Fire / Toxic Unicode ───
    const fireCategory = lang === 'tr' ? '🔥 Ateş / Toksik' : '🔥 Fire / Toxic'
    const cursed = toCursedText(baseName)
    const circled = toCircledText(baseName)
    dynamicNicks.push(
      { nick: cursed, label: lang === 'tr' ? 'Lanetli Metin' : 'Cursed Text', category: fireCategory },
      { nick: `🔥${cursed}🔥`, label: lang === 'tr' ? 'Ateşli Lanetli' : 'Fire Cursed', category: fireCategory },
      { nick: `꧁${cursed}꧂`, label: lang === 'tr' ? 'Çerçeveli Lanetli' : 'Framed Cursed', category: fireCategory },
      { nick: circled, label: lang === 'tr' ? 'Yasaklı Metin' : 'Circled Text', category: fireCategory },
      { nick: `☢️${circled}☢️`, label: lang === 'tr' ? 'Radyoaktif' : 'Radioactive', category: fireCategory },
    )

    // ─── 9. Mirror / Upside Down ───
    const mirrorCategory = lang === 'tr' ? '🪞 Ayna / Ters' : '🪞 Mirror / Flip'
    const mirrored = toMirror(baseName)
    dynamicNicks.push(
      { nick: mirrored, label: lang === 'tr' ? 'Ters Çevrilmiş' : 'Flipped', category: mirrorCategory },
      { nick: `꧁${mirrored}꧂`, label: lang === 'tr' ? 'Çerçeveli Ters' : 'Framed Flip', category: mirrorCategory },
      { nick: `【${mirrored}】`, label: lang === 'tr' ? 'Köşeli Ters' : 'Angular Flip', category: mirrorCategory },
      { nick: `亗${mirrored}亗`, label: lang === 'tr' ? 'Sembol Ters' : 'Symbol Flip', category: mirrorCategory },
    )

    // ─── 10. Rank-Based ───
    const rankCategory = lang === 'tr' ? '🏆 Rank Temalı' : '🏆 Rank Based'
    dynamicNicks.push(
      { nick: `🏆Conqueror亗${baseName}`, label: lang === 'tr' ? 'Conqueror' : 'Conqueror', category: rankCategory },
      { nick: `👑Ace亗${baseName}`, label: lang === 'tr' ? 'Ace Rank' : 'Ace Rank', category: rankCategory },
      { nick: `💎Diamond•${baseName}`, label: lang === 'tr' ? 'Elmas Rank' : 'Diamond Rank', category: rankCategory },
      { nick: `🔥Crown•${baseName}`, label: lang === 'tr' ? 'Kral Rank' : 'Crown Rank', category: rankCategory },
      { nick: `⭐Platinum•${baseName}`, label: lang === 'tr' ? 'Platin Rank' : 'Platinum Rank', category: rankCategory },
      { nick: `🏆${sc}`, label: lang === 'tr' ? 'Küçük Conqueror' : 'Small Conqueror', category: rankCategory },
      { nick: `👑${sup}`, label: lang === 'tr' ? 'Üst Ace' : 'Super Ace', category: rankCategory },
    )

    // ─── 11. Fullwidth (Wide Text) ───
    const wideCategory = lang === 'tr' ? '📐 Geniş Yazı' : '📐 Fullwidth'
    const fw = toFullwidth(baseName)
    dynamicNicks.push(
      { nick: fw, label: lang === 'tr' ? 'Geniş Metin' : 'Fullwidth', category: wideCategory },
      { nick: `꧁${fw}꧂`, label: lang === 'tr' ? 'Çerçeveli Geniş' : 'Framed Wide', category: wideCategory },
      { nick: `【${fw}】`, label: lang === 'tr' ? 'Köşeli Geniş' : 'Angular Wide', category: wideCategory },
      { nick: `🔥${fw}🔥`, label: lang === 'tr' ? 'Ateşli Geniş' : 'Fire Wide', category: wideCategory },
    )

    return dynamicNicks
  }, [inputText, pubgPatterns, lang])


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
  // Effect to handle scroll when mode changes
  useEffect(() => {
    if (activeMode === 'aliases') {
      scrollToSection('ready-made-categories');
    } else if (activeMode === 'converter') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeMode])

  // Filter categories if selected
  const filteredCategories = selectedCategory
    ? nicknameCategories.filter(c => c.id === selectedCategory)
    : nicknameCategories;

  // Add structured data for SEO
  useEffect(() => {
    if (!mounted) return

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": lang === 'tr' ? "PUBG Şekilli Nick" : "PUBG Stylish Nickname",
      "description": lang === 'tr' ? "PUBG şekilli nick oluştur, havalı ve estetik PUBG nicklerini tek tıkla kopyala ve oyunda kullan." : "Create PUBG stylish nicknames, copy cool and aesthetic PUBG nicks with one click and use in game.",
      "url": `https://yazı-stilleripro.com.tr/pubg-sekilli-nick`,
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

  return (
    <div className={mounted && darkMode ? "dark" : ""}>
      {/* Header - Same as Homepage */}
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
        <div className="container">

          {/* Premium Hero Section */}
          <div className="hero-section-fullscreen">
            {/* Animated Background */}
            <div className="hero-bg-fullscreen">
              <div className="hero-gradient-animated"></div>
              <div className="hero-particles-animated">
                <div className="particle">🎮</div>
                <div className="particle">⚔️</div>
                <div className="particle">🔥</div>
                <div className="particle">💀</div>
                <div className="particle">⚡</div>
                <div className="particle">👑</div>
              </div>
              <div className="hero-shapes-animated">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="shape shape-4"></div>
              </div>
            </div>

            <div className="hero-content-fullscreen">
              {/* Premium Badge */}
              <div className="hero-badge-modern">
                <div className="badge-pulse"></div>
                <span className="badge-icon">🎮</span>
                <span className="badge-text">{t.pubg.hero.badge}</span>
              </div>

              <h1 className="hero-title-fullscreen" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
                <div className="title-line-animated">
                  <span className="title-word-animated">{t.pubg.hero.title}</span>
                  <span className="highlight-gradient">{t.pubg.hero.titleHighlight}</span>
                </div>
              </h1>

              <p className="hero-description-fullscreen">
                {t.pubg.hero.description}
              </p>

              {activeMode !== 'initial' && (
                <button
                  onClick={() => setActiveMode('initial')}
                  className="back-btn-premium animate-fade-in-up"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                  {lang === 'tr' ? 'Seçeneklere Dön' : 'Back to Options'}
                </button>
              )}

              {/* Stats */}
              <div className="hero-stats-fullscreen">
                <div className="stat-item-premium">
                  <div className="stat-icon">🎮</div>
                  <div className="stat-content">
                    <span className="stat-number-premium">{nicknameCategories.reduce((sum, cat) => sum + cat.nicknames.length, 0)}+</span>
                    <span className="stat-label-premium">{lang === 'tr' ? 'Hazır Nick' : 'Ready Nicks'}</span>
                  </div>
                </div>
                <div className="stat-divider-premium"></div>
                <div className="stat-item-premium">
                  <div className="stat-icon">✨</div>
                  <div className="stat-content">
                    <span className="stat-number-premium">40+</span>
                    <span className="stat-label-premium">{lang === 'tr' ? 'Şekil Stili' : 'Style Patterns'}</span>
                  </div>
                </div>
                <div className="stat-divider-premium"></div>
                <div className="stat-item-premium">
                  <div className="stat-icon">🇹🇷</div>
                  <div className="stat-content">
                    <span className="stat-number-premium">TR</span>
                    <span className="stat-label-premium">{lang === 'tr' ? 'Türkçe' : 'Turkish'}</span>
                  </div>
                </div>
              </div>

              {/* Generator Input - Premium Fullscreen Layout */}
              {/* Selection Mode or Generator Input */}
              <div className="hero-input-fullscreen">
                {activeMode === 'initial' ? (
                  <div className="font-grid animate-scale-in" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
                    {/* Name Converter Card */}
                    <button
                      onClick={() => setActiveMode('converter')}
                      className="mode-card-premium mode-card-converter"
                    >
                      <div className="mode-card-icon">✨</div>
                      <div className="mode-card-title" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#fff', marginBottom: '0.5rem' }}>
                        {t.pubg.hero.inputTitle}
                      </div>
                      <p className="mode-card-desc">
                        {lang === 'tr' ? 'İsmini yaz, havalı sembollerle süslenmiş onlarca seçenek gör.' : 'Type your name and get dozens of stylish options with symbols.'}
                      </p>
                    </button>

                    {/* Ready-made Aliases Card */}
                    <button
                      onClick={() => setActiveMode('aliases')}
                      className="mode-card-premium mode-card-aliases"
                    >
                      <div className="mode-card-icon">📋</div>
                      <div className="mode-card-title" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#fff', marginBottom: '0.5rem' }}>
                        {t.pubg.hero.readyNicks}
                      </div>
                      <p className="mode-card-desc">
                        {lang === 'tr' ? 'En popüler, havalı ve profesyonel hazır nick listelerini incele.' : 'Browse the most popular, cool, and professional ready-made nick lists.'}
                      </p>
                    </button>
                  </div>
                ) : activeMode === 'converter' ? (
                  <div className="input-container-glass animate-scale-in">
                    <div className="input-header-premium">
                      <div className="input-header-text-premium">
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>{t.pubg.hero.inputTitle}</div>
                        <p>{lang === 'tr' ? 'PUBG uyumlu şekilli nickler otomatik oluşturulur' : 'Styled PUBG nicknames generated automatically'}</p>
                      </div>
                    </div>

                    <div className="input-field-premium">
                      <input
                        type="text"
                        className="text-input-premium"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder={lang === 'tr' ? 'İsminizi yazın (örnek: Ahmet)...' : 'Type your name (e.g. Ahmet)...'}
                        maxLength={14}
                      />
                      {inputText && (
                        <button
                          className="clear-btn-premium"
                          onClick={() => setInputText('')}
                          aria-label="Clear input"
                        >
                          ✕
                        </button>
                      )}
                    </div>

                    <div className="input-footer-premium">
                      <div className="turkish-chars-premium">
                        <div className="chars-group">
                          <span className="char-badge-premium">ç</span>
                          <span className="char-badge-premium">ğ</span>
                          <span className="char-badge-premium">ı</span>
                          <span className="char-badge-premium">ö</span>
                          <span className="char-badge-premium">ş</span>
                          <span className="char-badge-premium">ü</span>
                        </div>
                        <span className="char-label-premium">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          {lang === 'tr' ? 'desteklenir' : 'supported'}
                        </span>
                      </div>

                      <div className={`char-counter-premium ${inputText.length > 12 ? 'warning' : ''} ${inputText.length > 13 ? 'danger' : ''}`}>
                        <span className="counter-text">{inputText.length}</span>
                        <span className="counter-sep">/</span>
                        <span className="counter-max">14</span>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>


          {/* Dynamic Results Section - Only shows when in converter mode */}
          {activeMode === 'converter' && (() => {
            // Group nicks by category
            const grouped = generateDynamicNicks.reduce((acc, item) => {
              if (!acc[item.category]) acc[item.category] = []
              acc[item.category].push(item)
              return acc
            }, {} as Record<string, typeof generateDynamicNicks>)

            return (
              <div id="custom-results" className="reveal active animate-fade-in-up" style={{ margin: '4rem 0' }}>
                <div className="results-section-header">
                  <div className="results-title" style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem' }}>
                    {t.pubg.hero.readyNicks}
                  </div>
                  <p className="results-subtitle">
                    {lang === 'tr'
                      ? `${generateDynamicNicks.length} benzersiz stil oluşturuldu ✨`
                      : `${generateDynamicNicks.length} unique styles generated ✨`}
                  </p>
                </div>

                {/* Invisible Space Generator */}
                <div style={{
                  display: 'flex', justifyContent: 'center', marginBottom: '2rem'
                }}>
                  <button
                    onClick={() => handleCopy('ㅤ')}
                    className="back-btn-premium"
                    style={{
                      background: copiedNick === 'ㅤ' ? 'var(--success-color)' : 'rgba(255,255,255,0.08)',
                      borderColor: copiedNick === 'ㅤ' ? 'var(--success-color)' : 'rgba(255,255,255,0.15)',
                      color: '#fff',
                      borderRadius: '12px',
                      padding: '0.75rem 1.5rem',
                      fontSize: '0.9rem',
                    }}
                  >
                    {copiedNick === 'ㅤ' ? '✓ ' : '🫥 '}
                    {lang === 'tr' ? 'Görünmez Boşluk Kopyala' : 'Copy Invisible Space'}
                  </button>
                </div>

                {Object.entries(grouped).map(([category, nicks]) => (
                  <div key={category} style={{ marginBottom: '2.5rem' }}>
                    <div style={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '1rem',
                      paddingBottom: '0.5rem',
                      borderBottom: '1px solid rgba(255,255,255,0.08)',
                    }}>
                      {category}
                    </div>
                    <div className="nicknames-grid">
                      {nicks.map(({ nick, label }, index) => {
                        const isCopied = copiedNick === nick
                        return (
                          <div
                            key={`${category}-${index}`}
                            className={`ready-nick-card ${isCopied ? 'copied-success' : ''}`}
                            onClick={() => handleCopy(nick)}
                          >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                              <span style={{ fontSize: '0.75rem', color: isCopied ? 'rgba(255,255,255,0.8)' : 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{label}</span>
                              <span className="ready-nick-text">{nick}</span>
                            </div>
                            <div className="ready-nick-action">
                              {isCopied ? (
                                <span className="copied-badge">✓</span>
                              ) : (
                                <span className="copy-hint" style={{ fontSize: '1.2rem' }}>📋</span>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )
          })()}


          {/* Ready-Made PUBG Nicknames Section */}
          <div id="ready-made-categories" style={{ scrollMarginTop: '140px' }} className={activeMode === 'aliases' ? 'animate-fade-in-up' : ''}>
            <div className="results-section-header">
              <div className="results-title" style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem' }}>
                Ready-made PUBG nickname ideas
              </div>
              <p className="results-subtitle">
                {lang === 'tr' ? 'Beğendiğin nicki tek tıkla kopyala ve PUBG\'de kullan' : 'Copy your favorite nick with one click and use in PUBG'}
              </p>
            </div>

            {/* Ready-made Navigation Pills */}
            <div className="category-nav-premium reveal">
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

            {/* Ready-Made Categories List */}
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
                      <div className="category-title" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{category.name}</div>
                    </div>
                    <div className="category-count">{category.nicknames.length} {lang === 'tr' ? 'Nick' : 'Nicks'}</div>
                  </div>

                  <div className="nicknames-grid">
                    {category.nicknames.map((nick, index) => {
                      const isCopied = copiedNick === nick
                      return (
                        <div
                          key={index}
                          className={`ready-nick-card ${isCopied ? 'copied-success' : ''}`}
                          onClick={() => handleCopy(nick)}
                        >
                          <span className="ready-nick-text">{nick}</span>
                          <div className="ready-nick-action">
                            {isCopied ? (
                              <span className="copied-badge">✓</span>
                            ) : (
                              <span className="copy-hint" style={{ fontSize: '1.2rem' }}>📋</span>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </section>
              ))}
            </div>


            {/* Information Sections */}
            <article className="pubg-info-sections reveal active" style={{ marginTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '3rem' }}>
              {(t.pubg.sections || []).map((section: any, idx: number) => {
                const HeadingTag = section.level === 3 ? 'h3' : (section.level === 2 ? 'h2' : 'div');

                return (
                  <section key={section.id || idx} id={section.id} style={{ marginBottom: '3rem' }}>
                    {section.title && (
                      <HeadingTag style={{
                        fontWeight: 700,
                        fontSize: section.level === 3 ? '1.3rem' : '1.5rem',
                        color: 'var(--text-primary)',
                        marginBottom: '1.25rem',
                        lineHeight: 1.3
                      }}>
                        {section.title}
                      </HeadingTag>
                    )}

                    {section.type === 'faq' ? (
                      <div className="faq-grid" style={{ display: 'grid', gap: '1rem' }}>
                        {(section.faqs || []).map((faq: any, fIdx: number) => {
                          const isExpanded = expandedFaq === fIdx;
                          return (
                            <div
                              key={fIdx}
                              className={`faq-item-glass ${isExpanded ? 'active' : ''}`}
                              onClick={() => toggleFaq(fIdx)}
                              style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '16px',
                                padding: '1.25rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                              }}
                            >
                              <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: '1rem'
                              }}>
                                <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '1.05rem' }}>{faq.q}</div>
                                <span style={{
                                  transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)',
                                  transition: 'transform 0.3s ease',
                                  color: 'var(--primary-color)',
                                  fontSize: '0.8rem'
                                }}>▼</span>
                              </div>
                              {isExpanded && (
                                <div style={{
                                  marginTop: '1rem',
                                  color: 'var(--text-secondary)',
                                  lineHeight: 1.6,
                                  paddingTop: '1rem',
                                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                                  animation: 'fadeInUp 0.3s ease'
                                }}>
                                  {faq.a}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="section-content" style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1rem' }}>
                        {(section.content || '').split('\n\n').map((paragraph: string, pIdx: number) => (
                          <p key={pIdx} style={{ marginBottom: '1rem' }}>
                            {(paragraph || '').split(/(\{\{[^}]+\}\}|\*\*[^*]+\*\*)/g).map((part, pIdx2) => {
                              const linkMatch = part.match(/^\{\{(.+)\}\}$/)
                              const boldMatch = part.match(/^\*\*(.+)\*\*$/)

                              if (linkMatch) {
                                const [text, url] = linkMatch[1].split('|')
                                const href = url || '/'
                                const isExternal = href.startsWith('http')
                                return (
                                  <Link
                                    key={pIdx2}
                                    href={href}
                                    style={{ color: 'var(--primary-color)', fontWeight: 600, textDecoration: 'underline' }}
                                    {... (isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                  >
                                    {text}
                                  </Link>
                                )
                              } else if (boldMatch) {
                                return <strong key={pIdx2} style={{ color: 'var(--text-primary)' }}>{boldMatch[1]}</strong>
                              }
                              return <span key={pIdx2}>{part}</span>
                            })}
                          </p>
                        ))}
                      </div>
                    )}
                  </section>
                );
              })}
            </article>
          </div>
        </div>
      </main>

      {
        showToast && (
          <div className="toast">
            <span className="toast-icon">✓</span>
            <span>{copiedNick ? t.common.copied : ''}</span>
          </div>
        )
      }

      {/* Footer */}
      <Footer lang={lang} />

      {/* Additional Styles */}
      <style jsx>{`
        .nav-link.active {
          color: var(--primary-color);
          font-weight: 600;
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Premium Components */
        .back-btn-premium {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.6rem 1.2rem;
          borderRadius: 50px;
          color: #fff;
          font-size: 0.9rem;
          font-weight: 600;
          margin: 0 auto 2rem auto;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .back-btn-premium:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .mode-card-premium {
          cursor: pointer;
          border-radius: 24px;
          padding: 2.5rem 2rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: left;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          border: 2px solid transparent;
        }

        .mode-card-converter {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.6) 0%, rgba(139, 92, 246, 0.6) 100%);
          border-color: rgba(99, 102, 241, 0.8);
        }

        .mode-card-aliases {
          background: linear-gradient(135deg, rgba(251, 191, 36, 0.6) 0%, rgba(245, 158, 11, 0.6) 100%);
          border-color: rgba(251, 191, 36, 0.8);
        }

        .mode-card-premium:hover {
          transform: translateY(-8px) scale(1.02);
        }

        .mode-card-converter:hover {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.8) 0%, rgba(139, 92, 246, 0.8) 100%);
          border-color: rgba(99, 102, 241, 1);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.4);
        }

        .mode-card-aliases:hover {
          background: linear-gradient(135deg, rgba(251, 191, 36, 0.8) 0%, rgba(245, 158, 11, 0.8) 100%);
          border-color: rgba(251, 191, 36, 1);
          box-shadow: 0 20px 40px rgba(251, 191, 36, 0.4);
        }

        .mode-card-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          transition: transform 0.3s ease;
        }

        .mode-card-premium:hover .mode-card-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .mode-card-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 0.75rem;
        }

        .mode-card-desc {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Glassmorphism Results */
        .results-section-header {
          text-align: center;
          margin-bottom: 3rem;
          animation: fadeInUp 0.8s ease out;
        }

        .results-title {
          font-size: 2.25rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--text-primary) 0%, var(--primary-color) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }

        .results-subtitle {
          color: var(--text-secondary);
          font-size: 1.1rem;
        }

        .ready-nick-card {
          backdrop-filter: blur(8px);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .dark .ready-nick-card {
          background: rgba(0, 0, 0, 0.2);
          border-color: rgba(255, 255, 255, 0.05);
        }

        .ready-nick-card:hover {
          background: rgba(var(--primary-rgb), 0.1);
          border-color: var(--primary-color);
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .copied-success {
          background: var(--success-color) !important;
          color: white !important;
          border-color: var(--success-color) !important;
        }

        .category-nav-premium {
          padding: 2rem 0;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          position: sticky;
          top: 80px;
          z-index: 40;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          margin-bottom: 2rem;
        }
      `}</style>
    </div >
  )
}
