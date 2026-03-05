"use client"
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import NextImage from 'next/image'
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
            <Link href="/" className="logo-container">
              <div className="logo-wrapper">
                <NextImage
                  src="/logo.svg"
                  alt={t.common.logoAlt || 'Yazı Stilleri Logo'}
                  width={180}
                  height={40}
                  className="logo-image"
                  style={{ height: 'auto' }}
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="nav desktop-nav">
              <Link href="/" className="nav-link">
                {t.common.nav.home}
              </Link>
              <Link href="/insta-yazi-tipi" className="nav-link active">
                {t.common.nav.insta}
              </Link>
              <Link href="/tiktok-yazi-stilleri" className="nav-link">
                {t.common.nav.tiktok}
              </Link>
              <Link href="/discord-yazi-stilleri" className="nav-link">
                {t.common.nav.discord}
              </Link>
              <Link href="/sekilli-semboller" className="nav-link">
                {t.common.nav.symbols}
              </Link>
              <Link href="/pubg-sekilli-nick" className="nav-link">
                {t.common.nav.pubg}
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
            <span className="mobile-menu-title">{t.common.nav.menu}</span>
            <button className="close-menu-btn" onClick={() => setIsMobileMenuOpen(false)}>✕</button>
          </div>
          <nav className="mobile-nav">
            <Link href="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="nav-icon">🏠</span> {t.common.nav.home}
            </Link>
            <Link href="/insta-yazi-tipi" className="mobile-nav-link active" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="nav-icon">📸</span> {t.common.nav.insta}
            </Link>
            <Link href="/tiktok-yazi-stilleri" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="nav-icon">🎵</span> {t.common.nav.tiktok}
            </Link>
            <Link href="/discord-yazi-stilleri" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="nav-icon">🎮</span> {t.common.nav.discord}
            </Link>
            <Link href="/sekilli-semboller" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="nav-icon">🎨</span> {t.common.nav.symbols}
            </Link>
            <Link href="/pubg-sekilli-nick" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="nav-icon">🎯</span> {t.common.nav.pubg}
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
        {/* Full-Screen Hero Section (Home Design Logic) */}
        <div className="hero-section-fullscreen">
          {/* Animated Background */}
          <div className="hero-bg-fullscreen">
            <div className="hero-gradient-animated"></div>
            <div className="hero-particles-animated">
              <div className="particle particle-1">✨</div>
              <div className="particle particle-2">📸</div>
              <div className="particle particle-3">⭐</div>
              <div className="particle particle-4">💫</div>
              <div className="particle particle-5">🌟</div>
              <div className="particle particle-6">✦</div>
              <div className="particle particle-7">💎</div>
              <div className="particle particle-8">🔮</div>
            </div>
            <div className="hero-shapes-animated">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
              <div className="shape shape-4"></div>
            </div>
          </div>

          <div className="hero-content-fullscreen">
            {/* Badge */}
            <div className="hero-badge-modern">
              <span className="badge-pulse"></span>
              <span className="badge-icon">📸</span>
              <span className="badge-text">{t.insta.hero.badge}</span>
            </div>

            {/* Main Title */}
            <h1 className="hero-title-fullscreen">
              <span className="title-line-animated">
                <span className="title-word-animated">{t.insta.hero.title}</span>
                <span className="title-word-animated highlight-gradient">{t.insta.hero.titleHighlight}</span>
              </span>
            </h1>

            {/* Description */}
            <p className="hero-description-fullscreen">
              {t.insta.hero.description}
            </p>

            {/* Premium Input Section */}
            <div className="hero-input-fullscreen">
              <div className="input-glow-effect"></div>
              <div className="input-container-glass">
                {/* Input Header */}
                <div className="input-header-premium">
                  <div className="input-icon-premium">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 17L12 22L22 17" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 12L12 17L22 12" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <defs>
                        <linearGradient id="gradient1" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="input-header-text-premium">
                    <h2>{t.insta.hero.inputTitle}</h2>
                    <p>{t.insta.hero.inputSub}</p>
                  </div>
                </div>

                {/* Input Field */}
                <div className="input-field-premium">
                  <textarea
                    id="insta-input"
                    className="text-input-premium"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder={t.insta.hero.inputPlaceholder}
                    rows={2}
                    maxLength={500}
                  />
                  <button
                    className="clear-btn-premium"
                    onClick={() => setInputText('')}
                    style={{ opacity: inputText ? 1 : 0, pointerEvents: inputText ? 'auto' : 'none' }}
                    aria-label={t.common.clear}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                {/* Input Footer */}
                <div className="input-footer-premium">
                  <div className="turkish-chars-premium">
                    <div className="chars-group">
                      <span className="char-badge-premium">ç</span>
                      <span className="char-badge-premium">ğ</span>
                      <span className="char-badge-premium">ı</span>
                      <span className="char-badge-premium">İ</span>
                      <span className="char-badge-premium">ö</span>
                      <span className="char-badge-premium">ş</span>
                      <span className="char-badge-premium">ü</span>
                    </div>
                    <span className="char-label-premium">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {t.common.charsSupported}
                    </span>
                  </div>
                  <div className={`char-counter-premium ${inputText.length > 400 ? 'warning' : ''} ${inputText.length > 480 ? 'danger' : ''}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span className="counter-text">{inputText.length} / 500</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats - Centered Container */}
            <div className="hero-stats-fullscreen">
              <div className="stat-item-premium">
                <div className="stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="url(#statGradient1)" />
                    <defs>
                      <linearGradient id="statGradient1" x1="2" y1="2" x2="22" y2="22">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#6366f1" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="stat-content">
                  <span className="stat-number-premium">40+</span>
                  <span className="stat-label-premium">{t.home.hero.stat1}</span>
                </div>
              </div>
              <div className="stat-divider-premium"></div>
              <div className="stat-item-premium">
                <div className="stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" fill="url(#statGradient2)" />
                    <defs>
                      <linearGradient id="statGradient2" x1="3" y1="3" x2="21" y2="21">
                        <stop offset="0%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#f472b6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="stat-content">
                  <span className="stat-number-premium">3</span>
                  <span className="stat-label-premium">{t.home.hero.stat2}</span>
                </div>
              </div>
              <div className="stat-divider-premium"></div>
              <div className="stat-item-premium">
                <div className="stat-icon">🇹🇷</div>
                <div className="stat-content">
                  <span className="stat-number-premium">%100</span>
                  <span className="stat-label-premium">{t.home.hero.stat3}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="container">

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

          {/* Content section – modern SaaS design */}
          <article className="insta-content" aria-label="Instagram font guide">

            {/* Intro Section - Text Block */}
            {(() => {
              const section = t.insta.sections.find((s: any) => s.id === 'how-it-works');
              return section ? (
                <section key={section.id} className="saas-section reveal" aria-labelledby={section.id}>
                  <div className="saas-section-header">
                    <h2 id={section.id} className="saas-heading">{section.title}</h2>
                  </div>
                  <div className="saas-text-block">
                    <div className="saas-text-content">
                      <p>{section.content}</p>
                    </div>
                  </div>
                </section>
              ) : null;
            })()}

            {/* Steps Section - Timeline Cards */}
            {(() => {
              const section = t.insta.sections.find((s: any) => s.id === 'how-to-create-insta');
              return section ? (
                <section key={section.id} className="saas-section reveal" aria-labelledby={section.id}>
                  <div className="saas-section-header">
                    <h2 id={section.id} className="saas-heading">{section.title}</h2>
                  </div>
                  <div className="saas-steps-container">
                    {(section.steps || []).map((step: string, idx: number) => (
                      <div key={idx} className="saas-step-card">
                        <span className="saas-step-number">{idx + 1}</span>
                        <h3 className="saas-step-title">{['Metni Girin', 'Stili Seçin', 'Kopyalayın'][idx] || `Adım ${idx + 1}`}</h3>
                        <p className="saas-step-desc">{step}</p>
                      </div>
                    ))}
                  </div>
                </section>
              ) : null;
            })()}

            {/* Stand Out - Highlight Section */}
            {(() => {
              const section = t.insta.sections.find((s: any) => s.id === 'stand-out');
              return section ? (
                <section key={section.id} className="saas-section reveal" aria-labelledby={section.id}>
                  <div className="saas-section-header">
                    <h2 id={section.id} className="saas-heading">{section.title}</h2>
                  </div>
                  <div className="saas-text-block">
                    <div className="saas-text-content">
                      {(() => {
                        const parts = section.content.split(/(\{\{[^}]+\}\})/g);
                        return (
                          <p>
                            {parts.map((part: string, pIdx: number) => {
                              const match = part.match(/^\{\{(.+)\}\}$/);
                              if (match) {
                                const [text, url] = match[1].split('|');
                                const href = url || '/';
                                const isExternal = href.startsWith('http');
                                return (
                                  <Link
                                    key={pIdx}
                                    href={href}
                                    className="saas-text-link"
                                    style={{ color: 'var(--primary-color)', fontWeight: 600, textDecoration: 'underline' }}
                                    {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                  >
                                    {text}
                                  </Link>
                                );
                              }
                              return <span key={pIdx}>{part}</span>;
                            })}
                          </p>
                        );
                      })()}
                      <div className="saas-note saas-list-container" style={{ marginTop: '1.5rem', padding: '1.5rem' }}>
                        <p style={{ margin: 0, fontWeight: 500, color: 'var(--text-main)' }}>
                          {lang === 'tr' ?
                            '💡 İpucu: Aracımız, kullanıcıların favori bir yazı tipini seçip instagram ve diğer sosyal medya uygulamalarına kopyalayıp yapıştırması için kullanımı kolaydır.' :
                            '💡 Tip: Our tool is easy to use where users simply select a favorite font and copy paste it on instagram and other apps.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              ) : null;
            })()}

            {/* Usage Trio (Stories, Bio, Posts) - Feature Grid */}
            <section className="saas-section reveal">
              <div className="saas-feature-stack">
                {['stories', 'bio', 'posts'].map(id => t.insta.sections.find((s: any) => s.id === id)).filter(Boolean).map((section: any, idx: number) => (
                  <div key={section.id} className="saas-feature-card">
                    <div className="saas-feature-icon">
                      {idx === 0 ? '📝' : idx === 1 ? '👤' : '🖼️'}
                    </div>
                    <div className="saas-feature-content">
                      <h3 className="saas-feature-title">{section.title}</h3>
                      {(() => {
                        const parts = section.content.split(/(\{\{[^}]+\}\})/g);
                        return (
                          <p className="saas-feature-desc">
                            {parts.map((part: string, pIdx: number) => {
                              const match = part.match(/^\{\{(.+)\}\}$/);
                              if (match) {
                                const [text, url] = match[1].split('|');
                                const href = url || '/';
                                const isExternal = href.startsWith('http');
                                return (
                                  <Link
                                    key={pIdx}
                                    href={href}
                                    className="saas-text-link"
                                    style={{ color: 'var(--primary-color)', fontWeight: 600, textDecoration: 'underline' }}
                                    {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                  >
                                    {text}
                                  </Link>
                                );
                              }
                              return <span key={pIdx}>{part}</span>;
                            })}
                          </p>
                        );
                      })()}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Advantages - Feature Grid */}
            {(() => {
              const section = t.insta.sections.find((s: any) => s.id === 'advantages');
              return section ? (
                <section key={section.id} className="saas-section reveal" aria-labelledby={section.id}>
                  <div className="saas-section-header">
                    <h2 id={section.id} className="saas-heading">{section.title}</h2>
                  </div>
                  <div className="saas-feature-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
                    {(section.features || []).map((feat: any, idx: number) => (
                      <div key={idx} className="saas-feature-card">
                        <div className="saas-feature-icon">{feat.icon}</div>
                        <p className="saas-feature-desc" style={{ fontWeight: 500, color: 'var(--text-main)' }}>{feat.text}</p>
                      </div>
                    ))}
                  </div>
                </section>
              ) : null;
            })()}

            {/* Examples - Example Grid */}
            {(() => {
              const section = t.insta.sections.find((s: any) => s.id === 'examples');
              return section ? (
                <section key={section.id} className="saas-section reveal" aria-labelledby={section.id}>
                  <div className="saas-section-header">
                    <h2 id={section.id} className="saas-heading">{section.title}</h2>
                  </div>
                  <div className="saas-text-content">
                    {(() => {
                      const parts = section.content.split(/(\{\{[^}]+\}\})/g);
                      return (
                        <p>
                          {parts.map((part: string, pIdx: number) => {
                            const match = part.match(/^\{\{(.+)\}\}$/);
                            if (match) {
                              const [text, url] = match[1].split('|');
                              const href = url || '/';
                              const isExternal = href.startsWith('http');
                              return (
                                <Link
                                  key={pIdx}
                                  href={href}
                                  className="saas-text-link"
                                  style={{ color: 'var(--primary-color)', fontWeight: 600, textDecoration: 'underline' }}
                                  {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                >
                                  {text}
                                </Link>
                              );
                            }
                            return <span key={pIdx}>{part}</span>;
                          })}
                        </p>
                      );
                    })()}
                    {section.image && (
                      <div className="section-image-container reveal">
                        <NextImage
                          src={section.image}
                          alt={section.title}
                          width={1000}
                          height={600}
                          sizes="(max-width: 768px) 100vw, 800px"
                          style={{ width: '100%', height: 'auto' }}
                          className="section-image"
                        />
                      </div>
                    )}
                  </div>
                  <div className="saas-example-grid">
                    {(section.examples || []).map((ex: any, idx: number) => (
                      <div key={idx} className="saas-example-card">
                        <span className="saas-example-label">{ex.label}</span>
                        <span className="saas-example-text">{ex.text}</span>
                      </div>
                    ))}
                  </div>
                </section>
              ) : null;
            })()}

            {/* Hashtags & Best Fonts - Split Layout using Grid */}
            <div className="saas-feature-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {/* Hashtags */}
              {(() => {
                const section = t.insta.sections.find((s: any) => s.id === 'hashtags');
                return section ? (
                  <div className="saas-feature-card reveal saas-text-content">
                    <h3 className="saas-heading" style={{ fontSize: '1.25rem' }}>{section.title}</h3>
                    {(() => {
                      const parts = section.content.split(/(\{\{[^}]+\}\})/g);
                      return (
                        <p>
                          {parts.map((part: string, pIdx: number) => {
                            const match = part.match(/^\{\{(.+)\}\}$/);
                            if (match) {
                              const [text, url] = match[1].split('|');
                              const href = url || '/';
                              const isExternal = href.startsWith('http');
                              return (
                                <Link
                                  key={pIdx}
                                  href={href}
                                  className="saas-text-link"
                                  style={{ color: 'var(--primary-color)', fontWeight: 600, textDecoration: 'underline' }}
                                  {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                >
                                  {text}
                                </Link>
                              );
                            }
                            return <span key={pIdx}>{part}</span>;
                          })}
                        </p>
                      );
                    })()}
                  </div>
                ) : null;
              })()}

              {/* Best Fonts List */}
              {(() => {
                const section = t.insta.sections.find((s: any) => s.id === 'best-fonts');
                return section ? (
                  <div className="saas-list-container reveal" style={{ padding: '1.5rem' }}>
                    <h3 className="saas-heading" style={{ fontSize: '1.25rem' }}>{section.title}</h3>
                    <div className="saas-check-list" style={{ gridTemplateColumns: '1fr' }}>
                      {(section.items || []).map((item: string, idx: number) => (
                        <div key={idx} className="saas-check-item">
                          <span className="saas-check-icon">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null;
              })()}
            </div>



            {/* Key Features - Feature Grid */}
            {(() => {
              const section = t.insta.sections.find((s: any) => s.id === 'features');
              return section ? (
                <section key={section.id} className="saas-section reveal" aria-labelledby={section.id}>
                  <div className="saas-section-header">
                    <h2 id={section.id} className="saas-heading">{section.title}</h2>
                  </div>
                  <div className="saas-feature-grid">
                    {(section.features || []).map((feat: any, idx: number) => (
                      <div key={idx} className="saas-feature-card">
                        <div className="saas-feature-icon">{feat.icon}</div>
                        <h3 className="saas-feature-title">{feat.title}</h3>
                        <p className="saas-feature-desc">{feat.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>
              ) : null;
            })()}

            {/* FAQ - Accordion */}
            {(() => {
              const section = t.insta.sections.find((s: any) => s.id === 'faq');
              return section ? (
                <section key={section.id} className="saas-section reveal" aria-labelledby={section.id}>
                  <div className="saas-section-header">
                    <h2 id={section.id} className="saas-heading">{section.title}</h2>
                  </div>
                  <div className="faq-accordion" style={{ marginTop: '2rem' }}>
                    {(section.faqs || []).map((item: any, idx: number) => (
                      <div key={idx} className={`faq-item-modern ${expandedFaq === idx ? 'expanded' : ''}`}>
                        <button
                          className="faq-question-btn"
                          onClick={() => toggleFaq(idx)}
                          aria-expanded={expandedFaq === idx}
                        >
                          <span className="faq-q-text">{item.q}</span>
                          <span className="faq-q-icon">{expandedFaq === idx ? '−' : '+'}</span>
                        </button>
                        <div className="faq-answer-modern">
                          <p>{item.a}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ) : null;
            })()}

          </article>

          <div className="insta-back-link reveal" style={{ marginTop: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
            <p>
              {lang === 'tr' ? 'Daha fazla font stili ve ' : 'Looking for more font styles and '}
              <strong>Insta Yazı Tipi</strong>
              {lang === 'tr' ? ' seçenekleri mi arıyorsunuz?' : ' options?'} <br />
              <Link href="/" className="insta-homepage-link" style={{ color: 'var(--primary-color)', fontWeight: 600, textDecoration: 'underline' }}>{t.common.nav.home}</Link>
              {' '} | {' '}
              <Link href="/sekilli-semboller" className="insta-homepage-link" style={{ color: 'var(--primary-color)', fontWeight: 600, textDecoration: 'underline' }}>{t.common.nav.symbols}</Link>
              {' '} | {' '}
              <Link href="/pubg-sekilli-nick" className="insta-homepage-link" style={{ color: 'var(--primary-color)', fontWeight: 600, textDecoration: 'underline' }}>{t.common.nav.pubg}</Link>
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
              <Link href="/tiktok-yazi-stilleri" className="footer-link">TikTok Yazı Stilleri</Link>
              <Link href="/discord-yazi-stilleri" className="footer-link">Discord Yazı Stilleri</Link>
              <Link href="/sekilli-semboller" className="footer-link">{t.common.nav.symbols}</Link>
              <Link href="/pubg-sekilli-nick" className="footer-link">{t.common.nav.pubg}</Link>
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
