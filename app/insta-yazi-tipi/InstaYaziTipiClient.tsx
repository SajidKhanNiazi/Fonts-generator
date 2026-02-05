'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// ============ INSTAGRAM FONT TRANSFORMATIONS ============

// Helper function to transform text using a mapping
function transformText(text: string, mapping: Record<string, string>): string {
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
    transform: (text) => text.split('').join(' '),
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
  const [inputText, setInputText] = useState('Instagram Bio')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [showToast, setShowToast] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

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
      "name": "Insta Yazı Tipi",
      "description": "Instagram bio, gönderi ve hikayeler için havalı yazı fontları oluşturucu",
      "url": "https://yazistilleri.com/insta-yazi-tipi",
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
    <div className={mounted && darkMode ? 'dark' : ''}>
      {/* Header - Same as Homepage */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link href="/" className="logo">
              ✨ Yazı Stilleri
            </Link>
            <nav className="nav">
              <Link href="/insta-yazi-tipi" className="nav-link active">
                Insta Yazı Tipi
              </Link>
              <Link href="/sekilli-semboller" className="nav-link">
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
                <span>Instagram İçin Özel</span>
              </div>

              <h1 className="hero-title">
                <span className="title-line">
                  <span className="title-word">Instagram</span>
                  <span className="title-word highlight">Yazı Tipi</span>
                </span>
              </h1>

              <p className="hero-description">
                Instagram <span className="text-gradient">bio</span>, <span className="text-gradient">gönderi</span> ve <span className="text-gradient">hikayeler</span> için
                <strong> havalı insta yazı tipi</strong> fontlarını anında oluştur.
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
                      <h2>Metninizi Yazın</h2>
                      <p>Anında {instagramFonts.length}+ stile dönüştürün ✨</p>
                    </div>
                  </div>

                  <div className="input-field-wrapper">
                    <textarea
                      id="text-input"
                      className="modern-text-input"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="Instagram bio veya caption yazın..."
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

          {/* ============ COMPREHENSIVE SEO CONTENT FOR INSTAGRAM ============ */}

          {/* SECTION 1: Profilinizi daha etkileyici yapın */}
          <div className="info-box reveal">
            <h2 className="section-main-title">Profilinizi daha etkileyici yapın</h2>
            <div className="content-intro">
              <p className="intro-text">
                Profiliniz insanların ilk gördüğü şeydir. <strong>Instagram fontları</strong> kullanarak bio'nuzu çekici ve okunabilir hale getirebilirsiniz.
                İster iş ister kişisel bir hesap olsun, iyi bir font seçimi kişiliğinizi ve tarzınızı gösterir.
                Becerilerinizi ve ilgi alanlarınızı veya herhangi bir harekete geçirici mesajı vurgulamaya yardımcı olur. Profilinize yaratıcı bir görünüm ekleyin ve herkesten öne çıkın.
              </p>
            </div>
          </div>

          {/* SECTION 2: Instagram Bio Yazı Tipleri */}
          <div className="info-box reveal">
            <h2 className="section-main-title">Instagram Bio Yazı Tipleri</h2>
            <div className="content-intro">
              <p className="intro-text">
                Instagram profiliniz için doğru fontu seçmek önemlidir. Aracımız, Instagram'da mükemmel şekilde çalışan ve desteklenen
                bio'nuz için birçok şık font sağlar. Takipçileriniz ve profil ziyaretçileriniz için etkileyici bir ilk izlenim oluşturmak için
                bu stilleri kullanın.
              </p>
            </div>
          </div>

          {/* SECTION 3: Instagram yazı tipleri nasıl kullanılır? */}
          <div className="info-box reveal">
            <h2 className="section-main-title">Instagram yazı tipleri nasıl kullanılır?</h2>
            <div className="detailed-steps">
              <div className="detailed-step">
                <div className="step-visual">
                  <div className="step-number-large">1</div>
                  <div className="step-icon-circle">✏️</div>
                </div>
                <div className="step-details">
                  <h3>Type your text</h3>
                  <p>
                    Write your Instagram bio or caption in the input box above.
                  </p>
                </div>
              </div>

              <div className="detailed-step">
                <div className="step-visual">
                  <div className="step-number-large">2</div>
                  <div className="step-icon-circle">👀</div>
                </div>
                <div className="step-details">
                  <h3>Select a style</h3>
                  <p>
                    Browse through the generated <strong>insta font</strong> styles and pick the one you like.
                  </p>
                </div>
              </div>

              <div className="detailed-step">
                <div className="step-visual">
                  <div className="step-number-large">3</div>
                  <div className="step-icon-circle">📋</div>
                </div>
                <div className="step-details">
                  <h3>Copy and Paste</h3>
                  <p>
                    Click the copy button and paste it directly into your Instagram profile or post.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 4: Where to use Instagram fonts? */}
          <div className="info-box reveal">
            <h2 className="section-main-title">Where to use Instagram fonts?</h2>
            <div className="platforms-detailed">
              <div className="platform-detailed-card">
                <div className="platform-icon-large">👤</div>
                <div className="platform-info">
                  <h3>Profile Bio</h3>
                  <p>Make your bio standout with stylish text and attractive fonts.</p>
                </div>
              </div>
              <div className="platform-detailed-card">
                <div className="platform-icon-large">📝</div>
                <div className="platform-info">
                  <h3>Captions</h3>
                  <p>Use clear and bold fonts to highlight your message in posts.</p>
                </div>
              </div>
              <div className="platform-detailed-card">
                <div className="platform-icon-large">📖</div>
                <div className="platform-info">
                  <h3>Stories</h3>
                  <p>Add creative text to your stories to keep your followers engaged.</p>
                </div>
              </div>
              <div className="platform-detailed-card">
                <div className="platform-icon-large">⭐</div>
                <div className="platform-info">
                  <h3>Highlights</h3>
                  <p>Use unique fonts for your highlight covers to make them look professional.</p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 5: Instagram usage tips */}
          <div className="info-box reveal">
            <h2 className="section-main-title">Instagram usage tips</h2>
            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-number">01</div>
                <h3>Check Readability</h3>
                <p>Always make sure the font you choose is easy to read for your followers.</p>
              </div>
              <div className="tip-card">
                <div className="tip-number">02</div>
                <h3>Avoid Overusing Icons</h3>
                <p>Use symbols and emojis, but don't overdo it, as it can make text messy.</p>
              </div>
              <div className="tip-card">
                <div className="tip-number">03</div>
                <h3>Be Consistent</h3>
                <p>Try to use similar font styles across your profile for a more aesthetic look.</p>
              </div>
            </div>
          </div>

          {/* SECTION 6: FAQ */}
          <div className="info-box reveal">
            <h2 className="section-main-title">Frequently Asked Questions</h2>
            <div className="faq-accordion">
              <div className={`faq-item ${expandedFaq === 0 ? 'expanded' : ''}`} onClick={() => toggleFaq(0)}>
                <div className="faq-question">
                  <span className="faq-icon">❓</span>
                  <h3>Are these fonts safe to use on Instagram?</h3>
                  <span className="faq-toggle">{expandedFaq === 0 ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>Yes, all our <strong>instagram fonts</strong> are based on Unicode and are completely safe for your account.</p>
                </div>
              </div>

              <div className={`faq-item ${expandedFaq === 1 ? 'expanded' : ''}`} onClick={() => toggleFaq(1)}>
                <div className="faq-question">
                  <span className="faq-icon">❓</span>
                  <h3>Can I use these fonts on mobile?</h3>
                  <span className="faq-toggle">{expandedFaq === 1 ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>Definitely! Our tool is fully optimized for mobile devices, so you can copy-paste fonts directly from your phone.</p>
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
                  <h3>Ücretsiz ve Anında</h3>
                  <p>Kayıt gerektirmez, metninizi yazın ve hemen kullanın!</p>
                </div>
              </div>

              <div className="feature-banner gradient-security">
                <div className="feature-banner-icon">🔒</div>
                <div className="feature-banner-content">
                  <h3>%100 Güvenli</h3>
                  <p>Metinleriniz sunucuya gönderilmez, tarayıcınızda işlenir.</p>
                </div>
              </div>

              <div className="feature-banner gradient-mobile">
                <div className="feature-banner-icon">📱</div>
                <div className="feature-banner-content">
                  <h3>Mobil Uyumlu</h3>
                  <p>Telefonunuzdan kolayca kullanın, Instagram'a anında yapıştırın.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Link back to homepage */}
          <div className="back-link-section">
            <p>
              Daha fazla font stili mi arıyorsunuz?
              <Link href="/" className="homepage-link">
                Yazı Stilleri Ana Sayfa
              </Link>
              sayfamızda 100+ farklı font bulabilirsiniz.
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

`}</style>
    </div>
  )
}
