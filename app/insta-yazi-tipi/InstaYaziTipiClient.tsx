"use client"
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { translations, Language } from '@/lib/translations'
import './insta-content.css'

// ============ INSTAGRAM FONT TRANSFORMATIONS ============

// Helper function to transform text using a mapping
function transformText(text: string, mapping: Record<string, string>): string {
  if (!text) return ''
  return text.split('').map(char => mapping[char] || char).join('')
}

// Bold mappings - Kalın Yazı
const boldMappings: Record<string, string> = {
  'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠',
  'h': '𝐡', 'i': '𝐢', 'j': '𝐣', 'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧',
  'o': '𝐨', 'p': '𝐩', 'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭', 'u': '𝐮',
  'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳',
  'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆',
  'H': '𝐇', 'I': '𝐈', 'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍',
  'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓', 'U': '𝐔',
  'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙',
  'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü',
  'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}

// Italic mappings
const italicMappings: Record<string, string> = {
  'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒', 'f': '𝑓', 'g': '𝑔',
  'h': 'ℎ', 'i': '𝑖', 'j': '𝑗', 'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 'n': '𝑛',
  'o': '𝑜', 'p': '𝑝', 'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡', 'u': '𝑢',
  'v': '𝑣', 'w': '𝑤', 'x': '𝑥', 'y': '𝑦', 'z': '𝑧',
  'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸', 'F': '𝐹', 'G': '𝐺',
  'H': '𝐻', 'I': '𝐼', 'J': '𝐽', 'K': '𝐾', 'L': '𝐿', 'M': '𝑀', 'N': '𝑁',
  'O': '𝑂', 'P': '𝑃', 'Q': '𝑄', 'R': '𝑅', 'S': '𝑆', 'T': '𝑇', 'U': '𝑈',
  'V': '𝑉', 'W': '𝑊', 'X': '𝑋', 'Y': '𝑌', 'Z': '𝑍',
  'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü',
  'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}

// Script (El Yazısı) mappings
const scriptMappings: Record<string, string> = {
  'a': '𝓪', 'b': '𝓫', 'c': '𝓬', 'd': '𝓭', 'e': '𝓮', 'f': '𝓯', 'g': '𝓰',
  'h': '𝓱', 'i': '𝓲', 'j': '𝓳', 'k': '𝓴', 'l': '𝓵', 'm': '𝓶', 'n': '𝓷',
  'o': '𝓸', 'p': '𝓹', 'q': '𝓺', 'r': '𝓻', 's': '𝓼', 't': '𝓽', 'u': '𝓾',
  'v': '𝓿', 'w': '𝔀', 'x': '𝔁', 'y': '𝔂', 'z': '𝔃',
  'A': '𝓐', 'B': '𝓑', 'C': '𝓒', 'D': '𝓓', 'E': '𝓔', 'F': '𝓕', 'G': '𝓖',
  'H': '𝓗', 'I': '𝓘', 'J': '𝓙', 'K': '𝓚', 'L': '𝓛', 'M': '𝓜', 'N': '𝓝',
  'O': '𝓞', 'P': '𝓟', 'Q': '𝓠', 'R': '𝓡', 'S': '𝓢', 'T': '𝓣', 'U': '𝓤',
  'V': '𝓥', 'W': '𝓦', 'X': '𝓧', 'Y': '𝓨', 'Z': '𝓩',
  'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü',
  'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}

// Light Script
const lightScriptMappings: Record<string, string> = {
  'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': '𝑒', 'f': '𝒻', 'g': '𝑔',
  'h': '𝒽', 'i': '𝒾', 'j': '𝒿', 'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃',
  'o': '𝑜', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉', 'u': '𝓊',
  'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏',
  'A': '𝒜', 'B': 'ℬ', 'C': '𝒞', 'D': '𝒟', 'E': 'ℰ', 'F': 'ℱ', 'G': '𝒢',
  'H': 'ℋ', 'I': 'ℐ', 'J': '𝒥', 'K': '𝒦', 'L': 'ℒ', 'M': 'ℳ', 'N': '𝒩',
  'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': 'ℛ', 'S': '𝒮', 'T': '𝒯', 'U': '𝒰',
  'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵',
  'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü',
  'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}

// Aesthetic/Small Caps
const aestheticMappings: Record<string, string> = {
  'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ғ', 'g': 'ɢ',
  'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ',
  'o': 'ᴏ', 'p': 'ᴘ', 'q': 'ǫ', 'r': 'ʀ', 's': 's', 't': 'ᴛ', 'u': 'ᴜ',
  'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ',
  'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ғ', 'G': 'ɢ',
  'H': 'ʜ', 'I': 'ɪ', 'J': 'ᴊ', 'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ',
  'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'ǫ', 'R': 'ʀ', 'S': 's', 'T': 'ᴛ', 'U': 'ᴜ',
  'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ',
  'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü',
  'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}

// Circled
const circledMappings: Record<string, string> = {
  'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ',
  'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ', 'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ',
  'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ', 'u': 'ⓤ',
  'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ',
  'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ',
  'H': 'Ⓗ', 'I': 'Ⓘ', 'J': 'Ⓙ', 'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ',
  'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ', 'U': 'Ⓤ',
  'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ',
  'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü',
  'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}

// Double-Struck
const doubleStruckMappings: Record<string, string> = {
  'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘',
  'h': '𝕙', 'i': '𝕚', 'j': '𝕛', 'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟',
  'o': '𝕠', 'p': '𝕡', 'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥', 'u': '𝕦',
  'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪', 'z': '𝕫',
  'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼', 'F': '𝔽', 'G': '𝔾',
  'H': 'ℍ', 'I': '𝕀', 'J': '𝕁', 'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ',
  'O': '𝕆', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋', 'U': '𝕌',
  'V': '𝕍', 'W': '𝕎', 'X': '𝕏', 'Y': '𝕐', 'Z': 'ℤ',
  'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü',
  'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}

// Gothic/Fraktur
const gothicMappings: Record<string, string> = {
  'a': '𝔞', 'b': '𝔟', 'c': '𝔠', 'd': '𝔡', 'e': '𝔢', 'f': '𝔣', 'g': '𝔤',
  'h': '𝔥', 'i': '𝔦', 'j': '𝔧', 'k': '𝔨', 'l': '𝔩', 'm': '𝔪', 'n': '𝔫',
  'o': '𝔬', 'p': '𝔭', 'q': '𝔮', 'r': '𝔯', 's': '𝔰', 't': '𝔱', 'u': '𝔲',
  'v': '𝔳', 'w': '𝔴', 'x': '𝔵', 'y': '𝔶', 'z': '𝔷',
  'A': '𝔄', 'B': '𝔅', 'C': 'ℭ', 'D': '𝔇', 'E': '𝔈', 'F': '𝔉', 'G': '𝔊',
  'H': 'ℌ', 'I': 'ℑ', 'J': '𝔍', 'K': '𝔎', 'L': '𝔏', 'M': '𝔐', 'N': '𝔑',
  'O': '𝔒', 'P': '𝔓', 'Q': '𝔔', 'R': 'ℜ', 'S': '𝔖', 'T': '𝔗', 'U': '𝔘',
  'V': '𝔙', 'W': '𝔚', 'X': '𝔛', 'Y': '𝔜', 'Z': 'ℨ',
  'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü',
  'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}

// Sans-Serif Bold
const sansSerifBoldMappings: Record<string, string> = {
  'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴',
  'h': '𝗵', 'i': '𝗶', 'j': '𝗷', 'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻',
  'o': '𝗼', 'p': '𝗽', 'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁', 'u': '𝘂',
  'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆', 'z': '𝘇',
  'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚',
  'H': '𝗛', 'I': '𝗜', 'J': '𝗝', 'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡',
  'O': '𝗢', 'P': '𝗣', 'Q': '𝗤', 'R': '𝗥', 'S': '𝗦', 'T': '𝗧', 'U': '𝗨',
  'V': '𝗩', 'W': '𝗪', 'X': '𝗫', 'Y': '𝗬', 'Z': '𝗭',
  'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü',
  'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}

// Bold Italic
const boldItalicMappings: Record<string, string> = {
  'a': '𝒂', 'b': '𝒃', 'c': '𝒄', 'd': '𝒅', 'e': '𝒆', 'f': '𝒇', 'g': '𝒈',
  'h': '𝒉', 'i': '𝒊', 'j': '𝒋', 'k': '𝒌', 'l': '𝒍', 'm': '𝒎', 'n': '𝒏',
  'o': '𝒐', 'p': '𝒑', 'q': '𝒒', 'r': '𝒓', 's': '𝒔', 't': '𝒕', 'u': '𝒖',
  'v': '𝒗', 'w': '𝒘', 'x': '𝒙', 'y': '𝒚', 'z': '𝒛',
  'A': '𝑨', 'B': '𝑩', 'C': '𝑪', 'D': '𝑫', 'E': '𝑬', 'F': '𝑭', 'G': '𝑮',
  'H': '𝑯', 'I': '𝑰', 'J': '𝑱', 'K': '𝑲', 'L': '𝑳', 'M': '𝑴', 'N': '𝑵',
  'O': '𝑶', 'P': '𝑷', 'Q': '𝑸', 'R': '𝑹', 'S': '𝑺', 'T': '𝑻', 'U': '𝑼',
  'V': '𝑽', 'W': '𝑾', 'X': '𝑿', 'Y': '𝒀', 'Z': '𝒁',
  'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü',
  'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}

// Negative Squared
const negativeSquaredMappings: Record<string, string> = {
  'a': '🅰', 'b': '🅱', 'c': '🅲', 'd': '🅳', 'e': '🅴', 'f': '🅵', 'g': '🅶',
  'h': '🅷', 'i': '🅸', 'j': '🅹', 'k': '🅺', 'l': '🅻', 'm': '🅼', 'n': '🅽',
  'o': '🅾', 'p': '🅿', 'q': '🆀', 'r': '🆁', 's': '🆂', 't': '🆃', 'u': '🆄',
  'v': '🆅', 'w': '🆆', 'x': '🆇', 'y': '🆈', 'z': '🆉',
  'A': '🅰', 'B': '🅱', 'C': '🅲', 'D': '🅳', 'E': '🅴', 'F': '🅵', 'G': '🅶',
  'H': '🅷', 'I': '🅸', 'J': '🅹', 'K': '🅺', 'L': '🅻', 'M': '🅼', 'N': '🅽',
  'O': '🅾', 'P': '🅿', 'Q': '🆀', 'R': '🆁', 'S': '🆂', 'T': '🆃', 'U': '🆄',
  'V': '🆅', 'W': '🆆', 'X': '🆇', 'Y': '🆈', 'Z': '🆉',
}

// Monospace
const monospaceMappings: Record<string, string> = {
  'a': '𝚊', 'b': '𝚋', 'c': '𝚌', 'd': '𝚍', 'e': '𝚎', 'f': '𝚏', 'g': '𝚐',
  'h': '𝚑', 'i': '𝚒', 'j': '𝚓', 'k': '𝚔', 'l': '𝚕', 'm': '𝚖', 'n': '𝚗',
  'o': '𝚘', 'p': '𝚙', 'q': '𝚚', 'r': '𝚛', 's': '𝚜', 't': '𝚝', 'u': '𝚞',
  'v': '𝚟', 'w': '𝚠', 'x': '𝚡', 'y': '𝚢', 'z': '𝚣',
  'A': '𝙰', 'B': '𝙱', 'C': '𝙲', 'D': '𝙳', 'E': '𝙴', 'F': '𝙵', 'G': '𝙶',
  'H': '𝙷', 'I': '𝙸', 'J': '𝙹', 'K': '𝙺', 'L': '𝙻', 'M': '𝙼', 'N': '𝙽',
  'O': '𝙾', 'P': '𝙿', 'Q': '𝚀', 'R': '𝚁', 'S': '𝚂', 'T': '𝚃', 'U': '𝚄',
  'V': '𝚅', 'W': '𝚆', 'X': '𝚇', 'Y': '𝚈', 'Z': '𝚉',
  'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü',
  'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}

// Fullwidth
const fullwidthMappings: Record<string, string> = {
  'a': 'ａ', 'b': 'ｂ', 'c': 'ｃ', 'd': 'ｄ', 'e': 'ｅ', 'f': 'ｆ', 'g': 'ｇ',
  'h': 'ｈ', 'i': 'ｉ', 'j': 'ｊ', 'k': 'ｋ', 'l': 'ｌ', 'm': 'ｍ', 'n': 'ｎ',
  'o': 'ｏ', 'p': 'ｐ', 'q': 'ｑ', 'r': 'ｒ', 's': 'ｓ', 't': 'ｔ', 'u': 'ｕ',
  'v': 'ｖ', 'w': 'ｗ', 'x': 'ｘ', 'y': 'ｙ', 'z': 'ｚ',
  'A': 'Ａ', 'B': 'Ｂ', 'C': 'Ｃ', 'D': 'Ｄ', 'E': 'Ｅ', 'F': 'Ｆ', 'G': 'Ｇ',
  'H': 'Ｈ', 'I': 'Ｉ', 'J': 'Ｊ', 'K': 'Ｋ', 'L': 'Ｌ', 'M': 'Ｍ', 'N': 'Ｎ',
  'O': 'Ｏ', 'P': 'Ｐ', 'Q': 'Ｑ', 'R': 'Ｒ', 'S': 'Ｓ', 'T': 'Ｔ', 'U': 'Ｕ',
  'V': 'Ｖ', 'W': 'Ｗ', 'X': 'Ｘ', 'Y': 'Ｙ', 'Z': 'Ｚ',
  'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü',
  'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}

// Squared
const squaredMappings: Record<string, string> = {
  'a': '🄰', 'b': '🄱', 'c': '🄲', 'd': '🄳', 'e': '🄴', 'f': '🄵', 'g': '🄶',
  'h': '🄷', 'i': '🄸', 'j': '🄹', 'k': '🄺', 'l': '🄻', 'm': '🄼', 'n': '🄽',
  'o': '🄾', 'p': '🄿', 'q': '🅀', 'r': '🅁', 's': '🅂', 't': '🅃', 'u': '🅄',
  'v': '🅅', 'w': '🅆', 'x': '🅇', 'y': '🅈', 'z': '🅉',
  'A': '🄰', 'B': '🄱', 'C': '🄲', 'D': '🄳', 'E': '🄴', 'F': '🄵', 'G': '🄶',
  'H': '🄷', 'I': '🄸', 'J': '🄹', 'K': '🄺', 'L': '🄻', 'M': '🄼', 'N': '🄽',
  'O': '🄾', 'P': '🄿', 'Q': '🅀', 'R': '🅁', 'S': '🅂', 'T': '🅃', 'U': '🅄',
  'V': '🅅', 'W': '🅆', 'X': '🅇', 'Y': '🅈', 'Z': '🅉',
}

// Instagram Font Styles Array
interface FontStyle {
  id: string
  name: string
  description: string
  transform: (text: string) => string
  popular?: boolean
}

const instagramFonts: FontStyle[] = [
  {
    id: 'bold',
    name: 'Kalın (Bold)',
    description: 'Bio ve caption için güçlü görünüm',
    transform: (text) => transformText(text, boldMappings),
    popular: true,
  },
  {
    id: 'italic',
    name: 'İtalik (Italic)',
    description: 'Eğik ve zarif yazı stili',
    transform: (text) => transformText(text, italicMappings),
    popular: true,
  },
  {
    id: 'script',
    name: 'El Yazısı (Script)',
    description: 'Zarif ve akıcı el yazısı stili',
    transform: (text) => transformText(text, scriptMappings),
    popular: true,
  },
  {
    id: 'light-script',
    name: 'Hafif El Yazısı',
    description: 'Yumuşak ve minimal el yazısı',
    transform: (text) => transformText(text, lightScriptMappings),
    popular: true,
  },
  {
    id: 'aesthetic',
    name: 'Estetik Yazı',
    description: 'Şık ve dikkat çekici görünüm',
    transform: (text) => transformText(text, aestheticMappings),
    popular: true,
  },
  {
    id: 'double-struck',
    name: 'Fancy Yazı',
    description: 'Çift çizgili şık stil',
    transform: (text) => transformText(text, doubleStruckMappings),
    popular: true,
  },
  {
    id: 'circled',
    name: 'Yuvarlak Yazı',
    description: 'Daire içinde harfler',
    transform: (text) => transformText(text, circledMappings),
  },
  {
    id: 'gothic',
    name: 'Gotik Yazı',
    description: 'Klasik gotik tarzı',
    transform: (text) => transformText(text, gothicMappings),
  },
  {
    id: 'sans-bold',
    name: 'Modern Kalın',
    description: 'Modern sans-serif kalın',
    transform: (text) => transformText(text, sansSerifBoldMappings),
    popular: true,
  },
  {
    id: 'bold-italic',
    name: 'Kalın İtalik',
    description: 'Kalın ve eğik stil',
    transform: (text) => transformText(text, boldItalicMappings),
  },
  {
    id: 'negative-squared',
    name: 'Siyah Kare',
    description: 'Siyah kare içinde harfler',
    transform: (text) => transformText(text, negativeSquaredMappings),
    popular: true,
  },
  {
    id: 'squared',
    name: 'Beyaz Kare',
    description: 'Beyaz kare içinde harfler',
    transform: (text) => transformText(text, squaredMappings),
  },
  {
    id: 'monospace',
    name: 'Kod Yazısı',
    description: 'Eşit genişlikte harfler',
    transform: (text) => transformText(text, monospaceMappings),
  },
  {
    id: 'fullwidth',
    name: 'Geniş Yazı',
    description: 'Geniş aralıklı harfler',
    transform: (text) => transformText(text, fullwidthMappings),
  },
  {
    id: 'sparkle',
    name: 'Parlamalı',
    description: 'Yıldızlarla süslenmiş',
    transform: (text) => `✨ ${text} ✨`,
    popular: true,
  },
  {
    id: 'hearts',
    name: 'Kalpli',
    description: 'Kalplerle süslenmiş',
    transform: (text) => `💖 ${text} 💖`,
    popular: true,
  },
  {
    id: 'stars',
    name: 'Yıldızlı',
    description: 'Yıldızlarla çevrelenmiş',
    transform: (text) => `⭐ ${text} ⭐`,
  },
  {
    id: 'fire',
    name: 'Ateşli',
    description: 'Trend ateş emojileri',
    transform: (text) => `🔥 ${text} 🔥`,
    popular: true,
  },
  {
    id: 'crown',
    name: 'Taçlı',
    description: 'Kraliyet tarzı',
    transform: (text) => `👑 ${text} 👑`,
    popular: true,
  },
  {
    id: 'butterfly',
    name: 'Kelebekli',
    description: 'Zarif kelebek süsü',
    transform: (text) => `🦋 ${text} 🦋`,
  },
  {
    id: 'flower',
    name: 'Çiçekli',
    description: 'Çiçeklerle süslenmiş',
    transform: (text) => `🌸 ${text} 🌸`,
  },
  {
    id: 'diamond',
    name: 'Elmaslı',
    description: 'Elmas ile süslenmiş',
    transform: (text) => `💎 ${text} 💎`,
  },
  {
    id: 'lightning',
    name: 'Şimşekli',
    description: 'Enerji dolu stil',
    transform: (text) => `⚡ ${text} ⚡`,
  },
  {
    id: 'rainbow',
    name: 'Gökkuşağı',
    description: 'Renkli gökkuşağı stili',
    transform: (text) => `🌈 ${text} 🌈`,
  },
  {
    id: 'moon',
    name: 'Ay Yıldız',
    description: 'Ay ve yıldız süsü',
    transform: (text) => `🌙 ${text} ⭐`,
  },
  {
    id: 'black-heart',
    name: 'Siyah Kalp',
    description: 'Siyah kalp stili',
    transform: (text) => `🖤 ${text} 🖤`,
    popular: true,
  },
  {
    id: 'spaced',
    name: 'Aralıklı',
    description: 'Harfler arası boşluk',
    transform: (text) => text ? text.split('').join(' ') : '',
  },
  {
    id: 'arrow',
    name: 'Oklu',
    description: 'Ok işaretleri ile',
    transform: (text) => `»»— ${text} —««`,
  },
  {
    id: 'wave',
    name: 'Dalgalı',
    description: 'Dalga deseni ile',
    transform: (text) => `～${text}～`,
  },
  {
    id: 'star-sparkle',
    name: 'Yıldız Parıltı',
    description: 'Parıldayan yıldız deseni',
    transform: (text) => `☆.。.:* ${text} *:.。.☆`,
    popular: true,
  },
]

// ============ MAIN COMPONENT ============
export default function InstaYaziTipiClient() {
  const [lang, setLang] = useState<Language>('tr')
  const [inputText, setInputText] = useState('Instagram Bio')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [showToast, setShowToast] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const t = translations[lang]

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
  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      setShowToast(true)
      setTimeout(() => setCopiedId(null), 2000)
      setTimeout(() => setShowToast(false), 3000)
    } catch (err) {
      console.error('Kopyalama hatası:', err)
    }
  }

  // Add structured data for SEO
  useEffect(() => {
    if (!mounted) return

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": t.insta.hero.title + " " + t.insta.hero.titleHighlight,
      "description": t.insta.hero.description,
      "url": "https://yazı-stilleripro.com.tr/insta-yazi-tipi",
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
    script.id = 'insta-structured-data'
    document.head.appendChild(script)

    return () => {
      const existingScript = document.getElementById('insta-structured-data')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [mounted])

  return (
    <div className={`page-insta ${mounted && darkMode ? 'dark' : ''}`}>
      {/* Header - Same as Homepage */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link href="/" className="logo">
              {t.common.logo}
            </Link>

            {/* Desktop Navigation */}
            <nav className="nav desktop-nav">
              <Link href="/insta-yazi-tipi" className="nav-link active">
                {t.common.nav.insta}
              </Link>
            </nav>

            {/* Right Actions: Theme Toggle, Lang Toggle & Hamburger */}
            <div className="header-actions">
              <button
                className="lang-toggle-btn"
                onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
                aria-label={lang === 'tr' ? 'Switch to English' : 'Türkçeye Geç'}
                title={lang === 'tr' ? 'Switch to English' : 'Türkçeye Geç'}
              >
                <span className="lang-icon">🌐</span>
                <span className="lang-text">{lang === 'tr' ? 'EN' : 'TR'}</span>
              </button>

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
            <Link href="/insta-yazi-tipi" className="mobile-nav-link active" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="nav-icon">📸</span> {t.common.nav.insta}
            </Link>
            <div className="mobile-lang-switch">
              <button
                className={`mobile-lang-btn ${lang === 'tr' ? 'active' : ''}`}
                onClick={() => { setLang('tr'); setIsMobileMenuOpen(false); }}
              >TR</button>
              <button
                className={`mobile-lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => { setLang('en'); setIsMobileMenuOpen(false); }}
              >EN</button>
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
                <span className="badge-icon">📸</span>
                <span>{t.insta.hero.badge}</span>
              </div>

              <h1 className="hero-title">
                <span className="title-line">
                  <span className="title-word">{t.insta.hero.title}</span>
                  <span className="title-word highlight">{t.insta.hero.titleHighlight}</span>
                </span>
              </h1>

              <p className="hero-description">
                {t.insta.hero.description}
              </p>

              {/* Modern Input Section */}
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
                      <h2>{t.insta.hero.inputTitle}</h2>
                      <p>{t.insta.hero.inputSub}</p>
                    </div>
                  </div>

                  <div className="input-field-wrapper">
                    <textarea
                      id="text-input"
                      className="modern-text-input"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder={t.insta.hero.inputPlaceholder}
                      rows={2}
                      maxLength={150}
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
                    <div className={`char-counter ${inputText.length > 120 ? 'warning' : ''} ${inputText.length > 140 ? 'danger' : ''}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      <span>{inputText.length}</span>
                      <span className="counter-max">/ 150</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">{instagramFonts.length}+</span>
                  <span className="stat-label">Font Stili</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">📸</span>
                  <span className="stat-label">Instagram</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">🇹🇷</span>
                  <span className="stat-label">Türkçe</span>
                </div>
              </div>
            </div>
          </div>

          {/* Font Cards Section */}
          <div className="category-section">
            <h2 className="category-header">
              Instagram İçin En Popüler Yazı Tipleri
              <span className="category-count">{instagramFonts.length}</span>
            </h2>

            <div className="font-grid">
              {instagramFonts.map((font) => {
                const transformedText = font.transform(inputText)
                const isCopied = copiedId === font.id

                return (
                  <div key={font.id} className={`font-card glass-card ${font.popular ? 'popular' : ''}`}>
                    <div className="font-card-header">
                      <div className="font-card-title">
                        <div className="font-name">
                          {font.name}
                          {font.popular && <span className="popular-badge">🔥 Popüler</span>}
                        </div>
                      </div>
                    </div>

                    <div className="font-preview">{transformedText || 'Örnek metin'}</div>
                    <button
                      className={`copy-button ${isCopied ? 'copied' : ''}`}
                      onClick={() => handleCopy(transformedText, font.id)}
                    >
                      {isCopied ? '✓ Kopyalandı!' : '📋 Kopyala'}
                    </button>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Content section – modern SaaS design, tight spacing, mobile-first */}
          <article className="insta-content" aria-label="Instagram font guide">
            <div className="insta-grid-2">
              {t.insta.sections.slice(0, 2).map((section: any) => (
                <section key={section.id} className={`insta-section-${section.id === 'how-it-works' ? 'intro' : 'steps'} reveal`} aria-labelledby={section.id}>
                  <h2 id={section.id} className="insta-heading">{section.title}</h2>
                  <div className="insta-body">
                    {section.type === 'text' && <p>{section.content}</p>}
                    {section.type === 'textSteps' && (
                      <ol className="insta-steps-list" aria-label="Steps">
                        {section.steps.map((step: string, idx: number) => (
                          <li key={idx} className="insta-step"><span className="insta-step-num" aria-hidden>{idx + 1}</span> {step}</li>
                        ))}
                      </ol>
                    )}
                  </div>
                </section>
              ))}
            </div>

            <section className="insta-section-highlight reveal insta-section-variant-c" aria-labelledby="stand-out-title">
              {(() => {
                const section = t.insta.sections.find((s: any) => s.id === 'stand-out') || t.insta.sections[2]
                return (
                  <>
                    <h3 id="stand-out-title" className="insta-subheading">{section.title}</h3>
                    <div className="insta-body">
                      <p>{section.content}</p>
                      <div className="insta-pill">
                        <p>{lang === 'tr' ?
                          'Aracımız, kullanıcıların favori bir yazı tipini seçip instagram ve diğer sosyal medya uygulamalarına kopyalayıp yapıştırması için kullanımı kolaydır. Instagram yazı tipi oluşturucuları, sosyal medya profilimizi benzersiz ve dengeli hale getirmek için bize göz alıcı ve etkileşimli yazı tipleri sunar.' :
                          'Our tool is easy to use where users simply select a favorite font and copy paste it on instagram and Other Social media App. Instagram font generators give us eye-catching and interactive fonts to make our social media profile unique and balanced.'
                        }</p>
                      </div>
                    </div>
                  </>
                )
              })()}
            </section>

            <div className="insta-grid-2 insta-cards-split">
              {['advantages', 'examples'].map(id => t.insta.sections.find((s: any) => s.id === id)).filter(Boolean).map((section: any) => (
                <section key={section.id} className={`insta-card reveal insta-card-${section.id === 'stand-out' ? 'left' : 'right'}`} aria-labelledby={section.id}>
                  <h2 id={section.id} className="insta-heading">{section.title}</h2>
                  <div className="insta-body">
                    {section.content && <p>{section.content}</p>}
                    {section.features && (
                      <ul className="insta-dot-list">
                        {section.features.map((f: any, i: number) => <li key={i}>{f.text || f}</li>)}
                      </ul>
                    )}
                    {section.examples && (
                      <div className="insta-examples-grid-mini">
                        {section.examples.map((ex: any, i: number) => <div key={i}>{ex.label}: {ex.text}</div>)}
                      </div>
                    )}
                  </div>
                </section>
              ))}
            </div>

            <section className="insta-section-advantages reveal insta-section-variant-d" aria-labelledby="advantages-title">
              {(() => {
                const section = t.insta.sections.find((s: any) => s.id === 'advantages')
                if (!section) return null
                return (
                  <>
                    <h3 id="advantages-title" className="insta-subheading">{section.title}</h3>
                    <div className="insta-adv-grid">
                      {section.features.map((feat: any, idx: number) => (
                        <div key={idx} className="insta-adv-item"><span>{feat.icon}</span> {feat.text}</div>
                      ))}
                    </div>
                  </>
                )
              })()}
            </section>

            <section className="insta-section-examples reveal insta-section-variant-e" aria-labelledby="stylized-text">
              {(() => {
                const section = t.insta.sections.find((s: any) => s.id === 'examples')
                if (!section) return null
                return (
                  <>
                    <h2 id="stylized-text" className="insta-heading">{section.title}</h2>
                    <div className="insta-body">
                      <p>{section.content}</p>
                      <div className="insta-examples-grid">
                        {section.examples.map((ex: any, idx: number) => (
                          <div key={idx} className="insta-example-item"><strong>{ex.label}:</strong> {ex.text}</div>
                        ))}
                      </div>
                    </div>
                  </>
                )
              })()}
            </section>

            <div className="insta-grid-3 insta-usage-trio">
              {['stories', 'bio', 'posts'].map(id => t.insta.sections.find((s: any) => s.id === id)).filter(Boolean).map((section: any, idx: number) => (
                <section key={section.id} className={`insta-usage-card reveal insta-usage-${idx + 1}`} aria-labelledby={section.id}>
                  <h3 id={section.id} className="insta-usage-title">{section.title}</h3>
                  <p>{section.content}</p>
                </section>
              ))}
            </div>

            <div className="insta-grid-2 insta-cards-split">
              {['hashtags', 'best-fonts'].map(id => t.insta.sections.find((s: any) => s.id === id)).filter(Boolean).map((section: any) => (
                <section key={section.id} className={`insta-card reveal insta-card-${section.id === 'hashtags' ? 'left' : 'right'}`} aria-labelledby={section.id}>
                  <h2 id={section.id} className="insta-heading">{section.title}</h2>
                  <div className="insta-body">
                    {section.type === 'text' && <p>{section.content}</p>}
                    {section.type === 'list' && (
                      <ul className="insta-dot-list">
                        {section.items.map((item: string, idx: number) => <li key={idx}>{item}</li>)}
                      </ul>
                    )}
                  </div>
                </section>
              ))}
            </div>

            <section className="insta-section-faq reveal insta-section-variant-f" aria-labelledby="errors-solutions">
              {(() => {
                const section = t.insta.sections.find((s: any) => s.id === 'faq')
                return (
                  <>
                    <h2 id="errors-solutions" className="insta-heading">{section?.title}</h2>
                    <div className="insta-faq-grid">
                      {section?.faqs?.map((item: any, idx: number) => (
                        <div key={idx} className="insta-faq-item">
                          <h4>{item.p}</h4>
                          <p>{item.s}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )
              })()}
            </section>

            <section className="insta-section-features reveal insta-section-variant-g" aria-labelledby="key-features">
              {(() => {
                const section = t.insta.sections.find((s: any) => s.id === 'features')
                return (
                  <>
                    <h2 id="key-features" className="insta-features-title">
                      <span className="insta-accent-line" aria-hidden></span>
                      {section?.title}
                    </h2>
                    <div className="insta-features-grid">
                      {section?.features?.map((feat: any, idx: number) => (
                        <div key={idx} className="insta-feature-card">
                          <div className="insta-f-icon">{feat.icon}</div>
                          <div className="insta-f-info">
                            <h3>{feat.title}</h3>
                            <p>{feat.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )
              })()}
            </section>
          </article>

          <div className="insta-back-link reveal">
            <p>
              {lang === 'tr' ? 'Daha fazla font stili ve ' : 'Looking for more font styles and '}
              <strong>Insta Yazı Tipi</strong>
              {lang === 'tr' ? ' seçenekleri mi arıyorsunuz?' : ' options?'}
              <Link href="/" className="insta-homepage-link">{t.common.nav.home}</Link>
            </p>
          </div>

        </div>
      </main>

      {/* Toast Notification */}
      {showToast && (
        <div className="toast">
          <span className="toast-icon">✓</span>
          <span>{lang === 'tr' ? 'Kopyalandı!' : 'Copied!'}</span>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-links">
              <Link href="/" className="footer-link">{t.common.nav.home}</Link>
              <Link href="/insta-yazi-tipi" className="footer-link">{t.common.nav.insta}</Link>
              <Link href="/gizlilik-politikasi" className="footer-link">Gizlilik Politikası</Link>
              <Link href="/kullanim-kosullari" className="footer-link">Kullanım Koşulları</Link>
              <Link href="/hakkimizda" className="footer-link">Hakkımızda</Link>
            </div>
            <div className="footer-text">
              © 2026 {t.common.logo}. {t.common.nav.rights}
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
      `}</style>
    </div>
  )
}
