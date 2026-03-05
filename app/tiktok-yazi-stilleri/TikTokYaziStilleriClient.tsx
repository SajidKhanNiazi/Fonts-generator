"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import NextImage from 'next/image'
import { translations, Language } from '@/lib/translations'
import './tiktok-content.css'

// ============ FONT TRANSFORMATIONS ============

function transformText(text: string, mapping: Record<string, string>): string {
    if (!text) return ''
    return text.split('').map(char => mapping[char] || char).join('')
}

// Bold
const boldMap: Record<string, string> = {
    'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡', 'i': '𝐢', 'j': '𝐣', 'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨', 'p': '𝐩', 'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭', 'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳',
    'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓', 'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙',
    'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü', 'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}
// Italic
const italicMap: Record<string, string> = {
    'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒', 'f': '𝑓', 'g': '𝑔', 'h': 'ℎ', 'i': '𝑖', 'j': '𝑗', 'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 'n': '𝑛', 'o': '𝑜', 'p': '𝑝', 'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡', 'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥', 'y': '𝑦', 'z': '𝑧',
    'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸', 'F': '𝐹', 'G': '𝐺', 'H': '𝐻', 'I': '𝐼', 'J': '𝐽', 'K': '𝐾', 'L': '𝐿', 'M': '𝑀', 'N': '𝑁', 'O': '𝑂', 'P': '𝑃', 'Q': '𝑄', 'R': '𝑅', 'S': '𝑆', 'T': '𝑇', 'U': '𝑈', 'V': '𝑉', 'W': '𝑊', 'X': '𝑋', 'Y': '𝑌', 'Z': '𝑍',
    'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü', 'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}
// Script (El Yazısı)
const scriptMap: Record<string, string> = {
    'a': '𝓪', 'b': '𝓫', 'c': '𝓬', 'd': '𝓭', 'e': '𝓮', 'f': '𝓯', 'g': '𝓰', 'h': '𝓱', 'i': '𝓲', 'j': '𝓳', 'k': '𝓴', 'l': '𝓵', 'm': '𝓶', 'n': '𝓷', 'o': '𝓸', 'p': '𝓹', 'q': '𝓺', 'r': '𝓻', 's': '𝓼', 't': '𝓽', 'u': '𝓾', 'v': '𝓿', 'w': '𝔀', 'x': '𝔁', 'y': '𝔂', 'z': '𝔃',
    'A': '𝓐', 'B': '𝓑', 'C': '𝓒', 'D': '𝓓', 'E': '𝓔', 'F': '𝓕', 'G': '𝓖', 'H': '𝓗', 'I': '𝓘', 'J': '𝓙', 'K': '𝓚', 'L': '𝓛', 'M': '𝓜', 'N': '𝓝', 'O': '𝓞', 'P': '𝓟', 'Q': '𝓠', 'R': '𝓡', 'S': '𝓢', 'T': '𝓣', 'U': '𝓤', 'V': '𝓥', 'W': '𝓦', 'X': '𝓧', 'Y': '𝓨', 'Z': '𝓩',
    'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü', 'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}
// Light Script
const lightScriptMap: Record<string, string> = {
    'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': '𝑒', 'f': '𝒻', 'g': '𝑔', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿', 'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': '𝑜', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉', 'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏',
    'A': '𝒜', 'B': 'ℬ', 'C': '𝒞', 'D': '𝒟', 'E': 'ℰ', 'F': 'ℱ', 'G': '𝒢', 'H': 'ℋ', 'I': 'ℐ', 'J': '𝒥', 'K': '𝒦', 'L': 'ℒ', 'M': 'ℳ', 'N': '𝒩', 'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': 'ℛ', 'S': '𝒮', 'T': '𝒯', 'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵',
    'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü', 'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}
// Aesthetic / Small Caps
const aestheticMap: Record<string, string> = {
    'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ғ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'ǫ', 'r': 'ʀ', 's': 's', 't': 'ᴛ', 'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ',
    'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ғ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ', 'J': 'ᴊ', 'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'ǫ', 'R': 'ʀ', 'S': 's', 'T': 'ᴛ', 'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ',
    'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü', 'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}
// Gothic / Fraktur
const gothicMap: Record<string, string> = {
    'a': '𝔞', 'b': '𝔟', 'c': '𝔠', 'd': '𝔡', 'e': '𝔢', 'f': '𝔣', 'g': '𝔤', 'h': '𝔥', 'i': '𝔦', 'j': '𝔧', 'k': '𝔨', 'l': '𝔩', 'm': '𝔪', 'n': '𝔫', 'o': '𝔬', 'p': '𝔭', 'q': '𝔮', 'r': '𝔯', 's': '𝔰', 't': '𝔱', 'u': '𝔲', 'v': '𝔳', 'w': '𝔴', 'x': '𝔵', 'y': '𝔶', 'z': '𝔷',
    'A': '𝔄', 'B': '𝔅', 'C': 'ℭ', 'D': '𝔇', 'E': '𝔈', 'F': '𝔉', 'G': '𝔊', 'H': 'ℌ', 'I': 'ℑ', 'J': '𝔍', 'K': '𝔎', 'L': '𝔏', 'M': '𝔐', 'N': '𝔑', 'O': '𝔒', 'P': '𝔓', 'Q': '𝔔', 'R': 'ℜ', 'S': '𝔖', 'T': '𝔗', 'U': '𝔘', 'V': '𝔙', 'W': '𝔚', 'X': '𝔛', 'Y': '𝔜', 'Z': 'ℨ',
    'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü', 'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}
// Double-Struck
const doubleStruckMap: Record<string, string> = {
    'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘', 'h': '𝕙', 'i': '𝕚', 'j': '𝕛', 'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠', 'p': '𝕡', 'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥', 'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪', 'z': '𝕫',
    'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼', 'F': '𝔽', 'G': '𝔾', 'H': 'ℍ', 'I': '𝕀', 'J': '𝕁', 'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ', 'O': '𝕆', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋', 'U': '𝕌', 'V': '𝕍', 'W': '𝕎', 'X': '𝕏', 'Y': '𝕐', 'Z': 'ℤ',
    'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü', 'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}
// Circled
const circledMap: Record<string, string> = {
    'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ', 'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ', 'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ',
    'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ', 'H': 'Ⓗ', 'I': 'Ⓘ', 'J': 'Ⓙ', 'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ', 'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ', 'U': 'Ⓤ', 'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ',
    'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü', 'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}
// Sans-Serif Bold
const sansBoldMap: Record<string, string> = {
    'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵', 'i': '𝗶', 'j': '𝗷', 'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝗼', 'p': '𝗽', 'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁', 'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆', 'z': '𝘇',
    'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚', 'H': '𝗛', 'I': '𝗜', 'J': '𝗝', 'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡', 'O': '𝗢', 'P': '𝗣', 'Q': '𝗤', 'R': '𝗥', 'S': '𝗦', 'T': '𝗧', 'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫', 'Y': '𝗬', 'Z': '𝗭',
    'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü', 'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}
// Bold Italic
const boldItalicMap: Record<string, string> = {
    'a': '𝒂', 'b': '𝒃', 'c': '𝒄', 'd': '𝒅', 'e': '𝒆', 'f': '𝒇', 'g': '𝒈', 'h': '𝒉', 'i': '𝒊', 'j': '𝒋', 'k': '𝒌', 'l': '𝒍', 'm': '𝒎', 'n': '𝒏', 'o': '𝒐', 'p': '𝒑', 'q': '𝒒', 'r': '𝒓', 's': '𝒔', 't': '𝒕', 'u': '𝒖', 'v': '𝒗', 'w': '𝒘', 'x': '𝒙', 'y': '𝒚', 'z': '𝒛',
    'A': '𝑨', 'B': '𝑩', 'C': '𝑪', 'D': '𝑫', 'E': '𝑬', 'F': '𝑭', 'G': '𝑮', 'H': '𝑯', 'I': '𝑰', 'J': '𝑱', 'K': '𝑲', 'L': '𝑳', 'M': '𝑴', 'N': '𝑵', 'O': '𝑶', 'P': '𝑷', 'Q': '𝑸', 'R': '𝑹', 'S': '𝑺', 'T': '𝑻', 'U': '𝑼', 'V': '𝑽', 'W': '𝑾', 'X': '𝑿', 'Y': '𝒀', 'Z': '𝒁',
    'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü', 'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}
// Monospace
const monospaceMap: Record<string, string> = {
    'a': '𝚊', 'b': '𝚋', 'c': '𝚌', 'd': '𝚍', 'e': '𝚎', 'f': '𝚏', 'g': '𝚐', 'h': '𝚑', 'i': '𝚒', 'j': '𝚓', 'k': '𝚔', 'l': '𝚕', 'm': '𝚖', 'n': '𝚗', 'o': '𝚘', 'p': '𝚙', 'q': '𝚚', 'r': '𝚛', 's': '𝚜', 't': '𝚝', 'u': '𝚞', 'v': '𝚟', 'w': '𝚠', 'x': '𝚡', 'y': '𝚢', 'z': '𝚣',
    'A': '𝙰', 'B': '𝙱', 'C': '𝙲', 'D': '𝙳', 'E': '𝙴', 'F': '𝙵', 'G': '𝙶', 'H': '𝙷', 'I': '𝙸', 'J': '𝙹', 'K': '𝙺', 'L': '𝙻', 'M': '𝙼', 'N': '𝙽', 'O': '𝙾', 'P': '𝙿', 'Q': '𝚀', 'R': '𝚁', 'S': '𝚂', 'T': '𝚃', 'U': '𝚄', 'V': '𝚅', 'W': '𝚆', 'X': '𝚇', 'Y': '𝚈', 'Z': '𝚉',
    'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü', 'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}
// Negative Squared
const negSquaredMap: Record<string, string> = {
    'a': '🅰', 'b': '🅱', 'c': '🅲', 'd': '🅳', 'e': '🅴', 'f': '🅵', 'g': '🅶', 'h': '🅷', 'i': '🅸', 'j': '🅹', 'k': '🅺', 'l': '🅻', 'm': '🅼', 'n': '🅽', 'o': '🅾', 'p': '🅿', 'q': '🆀', 'r': '🆁', 's': '🆂', 't': '🆃', 'u': '🆄', 'v': '🆅', 'w': '🆆', 'x': '🆇', 'y': '🆈', 'z': '🆉',
    'A': '🅰', 'B': '🅱', 'C': '🅲', 'D': '🅳', 'E': '🅴', 'F': '🅵', 'G': '🅶', 'H': '🅷', 'I': '🅸', 'J': '🅹', 'K': '🅺', 'L': '🅻', 'M': '🅼', 'N': '🅽', 'O': '🅾', 'P': '🅿', 'Q': '🆀', 'R': '🆁', 'S': '🆂', 'T': '🆃', 'U': '🆄', 'V': '🆅', 'W': '🆆', 'X': '🆇', 'Y': '🆈', 'Z': '🆉',
}
// Fullwidth
const fullwidthMap: Record<string, string> = {
    'a': 'ａ', 'b': 'ｂ', 'c': 'ｃ', 'd': 'ｄ', 'e': 'ｅ', 'f': 'ｆ', 'g': 'ｇ', 'h': 'ｈ', 'i': 'ｉ', 'j': 'ｊ', 'k': 'ｋ', 'l': 'ｌ', 'm': 'ｍ', 'n': 'ｎ', 'o': 'ｏ', 'p': 'ｐ', 'q': 'ｑ', 'r': 'ｒ', 's': 'ｓ', 't': 'ｔ', 'u': 'ｕ', 'v': 'ｖ', 'w': 'ｗ', 'x': 'ｘ', 'y': 'ｙ', 'z': 'ｚ',
    'A': 'Ａ', 'B': 'Ｂ', 'C': 'Ｃ', 'D': 'Ｄ', 'E': 'Ｅ', 'F': 'Ｆ', 'G': 'Ｇ', 'H': 'Ｈ', 'I': 'Ｉ', 'J': 'Ｊ', 'K': 'Ｋ', 'L': 'Ｌ', 'M': 'Ｍ', 'N': 'Ｎ', 'O': 'Ｏ', 'P': 'Ｐ', 'Q': 'Ｑ', 'R': 'Ｒ', 'S': 'Ｓ', 'T': 'Ｔ', 'U': 'Ｕ', 'V': 'Ｖ', 'W': 'Ｗ', 'X': 'Ｘ', 'Y': 'Ｙ', 'Z': 'Ｚ',
    'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü', 'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}
// Sans-Serif Italic
const sansItalicMap: Record<string, string> = {
    'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦', 'f': '𝘧', 'g': '𝘨', 'h': '𝘩', 'i': '𝘪', 'j': '𝘫', 'k': '𝘬', 'l': '𝘭', 'm': '𝘮', 'n': '𝘯', 'o': '𝘰', 'p': '𝘱', 'q': '𝘲', 'r': '𝘳', 's': '𝘴', 't': '𝘵', 'u': '𝘶', 'v': '𝘷', 'w': '𝘸', 'x': '𝘹', 'y': '𝘺', 'z': '𝘻',
    'A': '𝘈', 'B': '𝘉', 'C': '𝘊', 'D': '𝘋', 'E': '𝘌', 'F': '𝘍', 'G': '𝘎', 'H': '𝘏', 'I': '𝘐', 'J': '𝘑', 'K': '𝘒', 'L': '𝘓', 'M': '𝘔', 'N': '𝘕', 'O': '𝘖', 'P': '𝘗', 'Q': '𝘘', 'R': '𝘙', 'S': '𝘚', 'T': '𝘛', 'U': '𝘜', 'V': '𝘝', 'W': '𝘞', 'X': '𝘟', 'Y': '𝘠', 'Z': '𝘡',
    'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü', 'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}
// Sans-Serif Bold Italic
const sansBoldItalicMap: Record<string, string> = {
    'a': '𝙖', 'b': '𝙗', 'c': '𝙘', 'd': '𝙙', 'e': '𝙚', 'f': '𝙛', 'g': '𝙜', 'h': '𝙝', 'i': '𝙞', 'j': '𝙟', 'k': '𝙠', 'l': '𝙡', 'm': '𝙢', 'n': '𝙣', 'o': '𝙤', 'p': '𝙥', 'q': '𝙦', 'r': '𝙧', 's': '𝙨', 't': '𝙩', 'u': '𝙪', 'v': '𝙫', 'w': '𝙬', 'x': '𝙭', 'y': '𝙮', 'z': '𝙯',
    'A': '𝘼', 'B': '𝘽', 'C': '𝘾', 'D': '𝘿', 'E': '𝙀', 'F': '𝙁', 'G': '𝙂', 'H': '𝙃', 'I': '𝙄', 'J': '𝙅', 'K': '𝙆', 'L': '𝙇', 'M': '𝙈', 'N': '𝙉', 'O': '𝙊', 'P': '𝙋', 'Q': '𝙌', 'R': '𝙍', 'S': '𝙎', 'T': '𝙏', 'U': '𝙐', 'V': '𝙑', 'W': '𝙒', 'X': '𝙓', 'Y': '𝙔', 'Z': '𝙕',
    'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü', 'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}
// Gothic Bold
const gothicBoldMap: Record<string, string> = {
    'a': '𝖆', 'b': '𝖇', 'c': '𝖈', 'd': '𝖉', 'e': '𝖊', 'f': '𝖋', 'g': '𝖌', 'h': '𝖍', 'i': '𝖎', 'j': '𝖏', 'k': '𝖐', 'l': '𝖑', 'm': '𝖒', 'n': '𝖓', 'o': '𝖔', 'p': '𝖕', 'q': '𝖖', 'r': '𝖗', 's': '𝖘', 't': '𝖙', 'u': '𝖚', 'v': '𝖛', 'w': '𝖜', 'x': '𝖝', 'y': '𝖞', 'z': '𝖟',
    'A': '𝕬', 'B': '𝕭', 'C': '𝕮', 'D': '𝕯', 'E': '𝕰', 'F': '𝕱', 'G': '𝕲', 'H': '𝕳', 'I': '𝕴', 'J': '𝕵', 'K': '𝕶', 'L': '𝕷', 'M': '𝕸', 'N': '𝕹', 'O': '𝕺', 'P': '𝕻', 'Q': '𝕼', 'R': '𝕽', 'S': '𝕾', 'T': '𝕿', 'U': '𝖀', 'V': '𝖁', 'W': '𝖂', 'X': '𝖃', 'Y': '𝖄', 'Z': '𝖅',
    'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü', 'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}
// Squared (White)
const squaredMap: Record<string, string> = {
    'a': '🄰', 'b': '🄱', 'c': '🄲', 'd': '🄳', 'e': '🄴', 'f': '🄵', 'g': '🄶', 'h': '🄷', 'i': '🄸', 'j': '🄹', 'k': '🄺', 'l': '🄻', 'm': '🄼', 'n': '🄽', 'o': '🄾', 'p': '🄿', 'q': '🅀', 'r': '🅁', 's': '🅂', 't': '🅃', 'u': '🅄', 'v': '🅅', 'w': '🅆', 'x': '🅇', 'y': '🅈', 'z': '🅉',
    'A': '🄰', 'B': '🄱', 'C': '🄲', 'D': '🄳', 'E': '🄴', 'F': '🄵', 'G': '🄶', 'H': '🄷', 'I': '🄸', 'J': '🄹', 'K': '🄺', 'L': '🄻', 'M': '🄼', 'N': '🄽', 'O': '🄾', 'P': '🄿', 'Q': '🅀', 'R': '🅁', 'S': '🅂', 'T': '🅃', 'U': '🅄', 'V': '🅅', 'W': '🅆', 'X': '🅇', 'Y': '🅈', 'Z': '🅉',
}
// Parenthesized
const parenthesizedMap: Record<string, string> = {
    'a': '⒜', 'b': '⒝', 'c': '⒞', 'd': '⒟', 'e': '⒠', 'f': '⒡', 'g': '⒢', 'h': '⒣', 'i': '⒤', 'j': '⒥', 'k': '⒦', 'l': '⒧', 'm': '⒨', 'n': '⒩', 'o': '⒪', 'p': '⒫', 'q': '⒬', 'r': '⒭', 's': '⒮', 't': '⒯', 'u': '⒰', 'v': '⒱', 'w': '⒲', 'x': '⒳', 'y': '⒴', 'z': '⒵',
    'A': '⒜', 'B': '⒝', 'C': '⒞', 'D': '⒟', 'E': '⒠', 'F': '⒡', 'G': '⒢', 'H': '⒣', 'I': '⒤', 'J': '⒥', 'K': '⒦', 'L': '⒧', 'M': '⒨', 'N': '⒩', 'O': '⒪', 'P': '⒫', 'Q': '⒬', 'R': '⒭', 'S': '⒮', 'T': '⒯', 'U': '⒰', 'V': '⒱', 'W': '⒲', 'X': '⒳', 'Y': '⒴', 'Z': '⒵',
}
// Upside Down
const upsideDownMap: Record<string, string> = {
    'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z',
    'A': '∀', 'B': 'ꓭ', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': '⅁', 'H': 'H', 'I': 'I', 'J': 'ſ', 'K': 'ꓘ', 'L': '˥', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'Ԁ', 'Q': 'Q', 'R': 'ꓤ', 'S': 'S', 'T': '⊥', 'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z',
    'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü', 'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}
// Superscript
const superscriptMap: Record<string, string> = {
    'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ', 'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ʰ', 'i': 'ⁱ', 'j': 'ʲ', 'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ', 'o': 'ᵒ', 'p': 'ᵖ', 'q': 'q', 'r': 'ʳ', 's': 'ˢ', 't': 'ᵗ', 'u': 'ᵘ', 'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ',
    'A': 'ᴬ', 'B': 'ᴮ', 'C': 'ᶜ', 'D': 'ᴰ', 'E': 'ᴱ', 'F': 'ᶠ', 'G': 'ᴳ', 'H': 'ᴴ', 'I': 'ᴵ', 'J': 'ᴶ', 'K': 'ᴷ', 'L': 'ᴸ', 'M': 'ᴹ', 'N': 'ᴺ', 'O': 'ᴼ', 'P': 'ᴾ', 'Q': 'Q', 'R': 'ᴿ', 'S': 'ˢ', 'T': 'ᵀ', 'U': 'ᵁ', 'V': 'ⱽ', 'W': 'ᵂ', 'X': 'ˣ', 'Y': 'ʸ', 'Z': 'ᶻ',
    'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü', 'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}
// Sans-Serif Regular
const sansRegularMap: Record<string, string> = {
    'a': '𝖺', 'b': '𝖻', 'c': '𝖼', 'd': '𝖽', 'e': '𝖾', 'f': '𝖿', 'g': '𝗀', 'h': '𝗁', 'i': '𝗂', 'j': '𝗃', 'k': '𝗄', 'l': '𝗅', 'm': '𝗆', 'n': '𝗇', 'o': '𝗈', 'p': '𝗉', 'q': '𝗊', 'r': '𝗋', 's': '𝗌', 't': '𝗍', 'u': '𝗎', 'v': '𝗏', 'w': '𝗐', 'x': '𝗑', 'y': '𝗒', 'z': '𝗓',
    'A': '𝖠', 'B': '𝖡', 'C': '𝖢', 'D': '𝖣', 'E': '𝖤', 'F': '𝖥', 'G': '𝖦', 'H': '𝖧', 'I': '𝖨', 'J': '𝖩', 'K': '𝖪', 'L': '𝖫', 'M': '𝖬', 'N': '𝖭', 'O': '𝖮', 'P': '𝖯', 'Q': '𝖰', 'R': '𝖱', 'S': '𝖲', 'T': '𝖳', 'U': '𝖴', 'V': '𝖵', 'W': '𝖶', 'X': '𝖷', 'Y': '𝖸', 'Z': '𝖹',
    'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü', 'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}
// Thick Block (Regional)
const thickBlockMap: Record<string, string> = {
    'a': '🇦', 'b': '🇧', 'c': '🇨', 'd': '🇩', 'e': '🇪', 'f': '🇫', 'g': '🇬', 'h': '🇭', 'i': '🇮', 'j': '🇯', 'k': '🇰', 'l': '🇱', 'm': '🇲', 'n': '🇳', 'o': '🇴', 'p': '🇵', 'q': '🇶', 'r': '🇷', 's': '🇸', 't': '🇹', 'u': '🇺', 'v': '🇻', 'w': '🇼', 'x': '🇽', 'y': '🇾', 'z': '🇿',
    'A': '🇦', 'B': '🇧', 'C': '🇨', 'D': '🇩', 'E': '🇪', 'F': '🇫', 'G': '🇬', 'H': '🇭', 'I': '🇮', 'J': '🇯', 'K': '🇰', 'L': '🇱', 'M': '🇲', 'N': '🇳', 'O': '🇴', 'P': '🇵', 'Q': '🇶', 'R': '🇷', 'S': '🇸', 'T': '🇹', 'U': '🇺', 'V': '🇻', 'W': '🇼', 'X': '🇽', 'Y': '🇾', 'Z': '🇿',
    'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü', 'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
}

// Strikethrough helper
function addStrikethrough(text: string): string { return text ? text.split('').map(c => c + '\u0336').join('') : '' }
// Underline helper
function addUnderline(text: string): string { return text ? text.split('').map(c => c + '\u0332').join('') : '' }
// Wavy text helper (combining tilde above)
function addWavy(text: string): string { return text ? text.split('').map(c => c + '\u0303').join('') : '' }
// Dotted helper (combining dot above)
function addDotted(text: string): string { return text ? text.split('').map(c => c + '\u0307').join('') : '' }
// Cross Hatch helper
function addCrossHatch(text: string): string { return text ? text.split('').map(c => c + '\u0338').join('') : '' }
// Double Underline helper
function addDoubleUnderline(text: string): string { return text ? text.split('').map(c => c + '\u0333').join('') : '' }
// Overline helper
function addOverline(text: string): string { return text ? text.split('').map(c => c + '\u0305').join('') : '' }
// Slash Through helper
function addSlashThrough(text: string): string { return text ? text.split('').map(c => c + '\u0337').join('') : '' }
// Creepy / Zalgo helper
function addCreepy(text: string): string { return text ? text.split('').map(c => c + '\u031C\u0324\u0300\u0311').join('') : '' }

// ============ TIKTOK FONT STYLES ARRAY ============
interface FontStyle { id: string; name: string; description: string; transform: (t: string) => string; popular?: boolean }

const tiktokFonts: FontStyle[] = [
    // === Unicode Text Styles ===
    { id: 'bold', name: 'Kalın Yazı (Bold)', description: 'TikTok bio için güçlü ve dikkat çekici', transform: t => transformText(t, boldMap), popular: true },
    { id: 'italic', name: 'Eğik Yazı (Italic)', description: 'Zarif ve şık eğik stil', transform: t => transformText(t, italicMap), popular: true },
    { id: 'bold-italic', name: 'Kalın İtalik', description: 'Kalın ve eğik birleşimi', transform: t => transformText(t, boldItalicMap), popular: true },
    { id: 'script', name: 'El Yazısı (Script)', description: 'Akıcı ve zarif el yazısı', transform: t => transformText(t, scriptMap), popular: true },
    { id: 'light-script', name: 'Hafif El Yazısı', description: 'Yumuşak ve minimal stil', transform: t => transformText(t, lightScriptMap) },
    { id: 'aesthetic', name: 'Estetik Yazı', description: 'TikTok trendi küçük harf stili', transform: t => transformText(t, aestheticMap), popular: true },
    { id: 'gothic', name: 'Gotik Yazı', description: 'Klasik gotik tarzı', transform: t => transformText(t, gothicMap), popular: true },
    { id: 'gothic-bold', name: 'Gotik Kalın', description: 'Kalın gotik / Fraktur Bold', transform: t => transformText(t, gothicBoldMap), popular: true },
    { id: 'double-struck', name: 'Fancy Yazı', description: 'Çift çizgili şık stil', transform: t => transformText(t, doubleStruckMap), popular: true },
    { id: 'sans-regular', name: 'Sans-Serif', description: 'Temiz ve modern sans-serif', transform: t => transformText(t, sansRegularMap) },
    { id: 'sans-bold', name: 'Modern Kalın', description: 'Modern sans-serif kalın', transform: t => transformText(t, sansBoldMap), popular: true },
    { id: 'sans-italic', name: 'Sans-Serif Eğik', description: 'Modern eğik sans-serif', transform: t => transformText(t, sansItalicMap) },
    { id: 'sans-bold-italic', name: 'Sans Kalın Eğik', description: 'Sans-serif kalın eğik birleşimi', transform: t => transformText(t, sansBoldItalicMap) },
    { id: 'monospace', name: 'Kod Yazısı (Monospace)', description: 'Eşit genişlikte karakterler', transform: t => transformText(t, monospaceMap) },
    { id: 'circled', name: 'Yuvarlak Çerçeveli', description: 'Daire içinde harfler', transform: t => transformText(t, circledMap) },
    { id: 'neg-squared', name: 'Siyah Kare', description: 'Siyah kare içinde harfler', transform: t => transformText(t, negSquaredMap), popular: true },
    { id: 'squared', name: 'Beyaz Kare', description: 'Beyaz kare içinde harfler', transform: t => transformText(t, squaredMap) },
    { id: 'parenthesized', name: 'Parantezli Yazı', description: 'Parantez içinde harfler', transform: t => transformText(t, parenthesizedMap) },
    { id: 'fullwidth', name: 'Geniş Yazı', description: 'Geniş aralıklı harfler', transform: t => transformText(t, fullwidthMap) },
    { id: 'superscript', name: 'Üst Simge (Küçük)', description: 'Küçültülmüş üst simge stili', transform: t => transformText(t, superscriptMap) },
    { id: 'thick-block', name: 'Kalın Bayrak (Thick)', description: 'Büyük mavi blok harfler', transform: t => transformText(t, thickBlockMap), popular: true },
    { id: 'upside-down', name: 'Baş Aşağı Yazı', description: 'Metni ters çevirir', transform: t => t ? transformText(t, upsideDownMap).split('').reverse().join('') : '', popular: true },
    // === Text Effects ===
    { id: 'strikethrough', name: 'Üstü Çizili', description: 'Üzeri çizgili metin stili', transform: t => addStrikethrough(t), popular: true },
    { id: 'slash-through', name: 'Eğik Çizgili', description: 'Üzeri eğik çizgili', transform: t => addSlashThrough(t) },
    { id: 'underline', name: 'Altı Çizili', description: 'Altı çizgili metin stili', transform: t => addUnderline(t) },
    { id: 'double-underline', name: 'Çift Altı Çizili', description: 'Çift altı çizgili metin', transform: t => addDoubleUnderline(t) },
    { id: 'overline', name: 'Üstü Çizili (Overline)', description: 'Metnin üstünde çizgi', transform: t => addOverline(t) },
    { id: 'wavy', name: 'Dalgalı Tilde', description: 'Üzerinde tilde işareti', transform: t => addWavy(t) },
    { id: 'dotted', name: 'Noktalı Yazı', description: 'Harflerin üstünde nokta', transform: t => addDotted(t) },
    { id: 'cross-hatch', name: 'Çarpraz Çizgili', description: 'Çarpraz çizgili metin', transform: t => addCrossHatch(t) },
    { id: 'creepy-zalgo', name: 'Korkutucu (Zalgo)', description: 'Karmakarışık ve gizemli yazılar', transform: t => addCreepy(t), popular: true },
    { id: 'reverse', name: 'Ters Yazı', description: 'Metni tersten yazar', transform: t => t ? t.split('').reverse().join('') : '' },
    { id: 'spaced', name: 'Aralıklı Yazı', description: 'Harfler arası boşluk', transform: t => t ? t.split('').join(' ') : '' },
    { id: 'double-spaced', name: 'Çift Aralıklı', description: 'Daha geniş harf aralığı', transform: t => t ? t.split('').join('  ') : '' },
    // === Emoji / Decorator Styles ===
    { id: 'tiktok-music', name: '🎵 Müzikli', description: 'TikTok müzik emojileri', transform: t => `🎵 ${t} 🎶`, popular: true },
    { id: 'sparkle', name: '✨ Parıltılı', description: 'Yıldızlarla süslenmiş', transform: t => `✨ ${t} ✨`, popular: true },
    { id: 'fire', name: '🔥 Ateşli', description: 'Trend ateş stili', transform: t => `🔥 ${t} 🔥`, popular: true },
    { id: 'crown', name: '👑 Taçlı', description: 'Kraliyet tarzı', transform: t => `👑 ${t} 👑` },
    { id: 'hearts', name: '💖 Kalpli', description: 'Kalplerle süslenmiş', transform: t => `💖 ${t} 💖` },
    { id: 'black-heart', name: '🖤 Siyah Kalp', description: 'Estetik siyah kalp', transform: t => `🖤 ${t} 🖤`, popular: true },
    { id: 'butterfly', name: '🦋 Kelebekli', description: 'Zarif kelebek süsü', transform: t => `🦋 ${t} 🦋` },
    { id: 'lightning', name: '⚡ Şimşekli', description: 'Enerji dolu stil', transform: t => `⚡ ${t} ⚡` },
    { id: 'star-frame', name: '☆ Yıldız Çerçeve', description: 'Yıldız deseni', transform: t => `☆.。.:* ${t} *:.。.☆`, popular: true },
    { id: 'ornate-frame', name: '꧁꧂ Süslü Çerçeve', description: 'Dekoratif çerçeve', transform: t => `꧁༺ ${t} ༻꧂`, popular: true },
    { id: 'ornate-frame2', name: '꧁꧂ Süslü Çerçeve 2', description: 'Alternatif dekoratif çerçeve', transform: t => `꧁★ ${t} ★꧂` },
    { id: 'arrow', name: '»» Oklu', description: 'Ok işaretleri ile', transform: t => `»»— ${t} —««` },
    { id: 'wave', name: '～ Dalgalı', description: 'Dalga deseni', transform: t => `～${t}～` },
    { id: 'flower', name: '✿ Çiçekli', description: 'Çiçek süsü', transform: t => `✿ ${t} ✿` },
    { id: 'sakura', name: '🌸 Sakura', description: 'Japon kiraz çiçeği', transform: t => `🌸 ${t} 🌸` },
    { id: 'diamond', name: '💎 Elmaslı', description: 'Elmas ile süslenmiş', transform: t => `💎 ${t} 💎` },
    { id: 'moon', name: '🌙 Ay Yıldız', description: 'Ay ve yıldız süsü', transform: t => `🌙 ${t} ⭐` },
    { id: 'rainbow', name: '🌈 Gökkuşağı', description: 'Renkli gökkuşağı stili', transform: t => `🌈 ${t} 🌈` },
    { id: 'rose', name: '🌹 Güllü', description: 'Gül süsü', transform: t => `🌹 ${t} 🌹` },
    { id: 'snowflake', name: '❄️ Kar Tanesi', description: 'Kış teması ile', transform: t => `❄️ ${t} ❄️` },
    { id: 'angel', name: '👼 Melek', description: 'Melek süsü', transform: t => `☁️ ${t} 👼` },
    { id: 'skull', name: '💀 Kuru Kafa', description: 'Edgy kuru kafa stili', transform: t => `💀 ${t} 💀` },
    { id: 'gaming', name: '🎮 Oyuncu', description: 'Gamer stili', transform: t => `🎮 ${t} 🕹️` },
    { id: 'magic', name: '🔮 Büyülü', description: 'Mistik kristal küre', transform: t => `🔮 ${t} 🔮` },
    { id: 'leaf', name: '🍃 Doğal', description: 'Doğa temalı yaprak süsü', transform: t => `🍃 ${t} 🍃` },
    { id: 'candy', name: '🍬 Tatlı', description: 'Şeker ve tatlı teması', transform: t => `🍬 ${t} 🍭` },
    { id: 'cute-stars', name: '⋆ Sevimli Yıldız', description: 'Sevimli yıldız deseni', transform: t => `⋆˚✿˖° ${t} °˖✿˚⋆` },
    { id: 'cloud', name: '☁️ Bulutlu', description: 'Bulut deseni', transform: t => `☁️ ${t} ☁️` },
    { id: 'sword', name: '⚔️ Kılıçlı', description: 'Savaşçı tarzı', transform: t => `⚔️ ${t} ⚔️` },
    { id: 'wings', name: 'ʚ Kanatlı ɞ', description: 'Melek kanadı süsü', transform: t => `ʚ ${t} ɞ`, popular: true },
    { id: 'brackets-thick', name: '【 Köşeli Parantez 】', description: 'Kalın köşeli parantez', transform: t => `【 ${t} 】` },
    { id: 'japanese-brackets', name: '『 Japon Parantezi 』', description: 'Japon tarzı parantez', transform: t => `『 ${t} 』` },
    { id: 'sparkles-aesthetic', name: '✧ Estetik Yıldız', description: 'Minimal estetik yıldızlar', transform: t => `✧･ﾟ: *✧･ﾟ:* ${t} *:･ﾟ✧*:･ﾟ✧`, popular: true },
]

// ============ FAQ DATA ============
const faqData: { q: string; a: string }[] = [
    { q: 'TikTok\'ta şekilli yazı ekleyebilir miyim?', a: 'Evet, bu sayfayı kullanarak TikTok için şekilli yazılar oluşturabilirsiniz.' },
    { q: 'TikTok\'a nasıl şekilli yazı eklenir?', a: 'Bio\'nuzda veya isminizde varsayılan yazı stilleri yerine şekilli bir takma ad oluşturmak için kutuya metni veya ismi yazarak yapabilirsiniz.' },
    { q: 'TikTok\'ta şekilli yazının faydaları nelerdir?', a: 'Şekilli yazılar, TikTok profilinizi daha ilgi çekici ve benzersiz kılar.' },
    { q: 'TikTok Şekilli Yazı Aracı nasıl kullanılır?', a: 'TikTok şekilli yazı aracını kullanmak için, <a href="https://yazı-stilleripro.com.tr/" className="content-link">şekilli bir takma ad oluşturmak</a> üzere kutuya metni veya ismi yazmanız yeterlidir.' },
    { q: 'TikTok bio\'sunda kaç karaktere izin verilir?', a: 'TikTok bio sınırı, Unicode yazı tipleri ve emojiler dahil 80 karakterdir.' },
    { q: 'TikTok yazı tiplerinde Türkçe karakterler çalışıyor mu?', a: 'Evet, TikTok Unicode yazı tiplerinde ğ, ü, ş, ı, ö, ç gibi Türkçe karakterleri destekler.' },
    { q: 'TikTok\'ta kalın yazı kullanabilir miyim?', a: 'Evet, Unicode kullanarak kalın yazılar oluşturabilirsiniz (örneğin 𝗞𝗮𝗹𝗶𝗻), ancak bunu doğrudan varsayılan bio düzenleyicisinde yapamazsınız.' },
    { q: 'Şekilli yazılar TikTok\'ta viral olmayı sağlar mı?', a: 'Sadece yazı tipleri içeriği viral yapmaz, ancak Kalın yazılar, estetik yazı tipleri ve Emoji kombinasyonları profil estetiğini geliştirebilir ve izleyicilerin dikkatini çekebilir.' },
    { q: 'TikTok yazı tiplerini diğer platformlarda kullanabilir miyim?', a: 'Evet, TikTok için oluşturulan Unicode yazı tipleri Instagram, WhatsApp, Discord ve diğer evrensel platformlarda da çalışır.' },
    { q: 'TikTok\'ta şekilli yazı ücretsiz mi?', a: 'Evet, şekilli yazılar ücretsizdir, uluslararası standartları takip eder ve herhangi bir indirme veya kurulum gerektirmez.' },
    { q: 'Şekilli yazılar TikTok\'ta spam olarak kabul edilir mi?', a: 'Hayır, Unicode veya şekilli yazıları aşırıya kaçmadan kullanmak spam değildir.' },
    { q: 'TikTok bio\'sunda kaç emoji kullanılabilir?', a: '3-5 emojiye kadar kullanımı idealdir, ancak bio\'nuzun kısa ve öz kaldığından emin olun.' },
    { q: 'TikTok video açıklamasında kaç karaktere izin verilir?', a: 'TikTok video açıklamaları, hashtag\'ler ve şekilli metinler dahil 2200 karaktere kadar izin verir.' }
]

// ============ MAIN COMPONENT ============
export default function TikTokYaziStilleriClient() {
    const [lang, setLang] = useState<Language>('tr')
    const [inputText, setInputText] = useState('TikTok Bio')
    const [copiedId, setCopiedId] = useState<string | null>(null)
    const [showToast, setShowToast] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const t = translations[lang]

    useEffect(() => {
        setMounted(true)
        const savedDarkMode = localStorage.getItem('darkMode') === 'true'
        setDarkMode(savedDarkMode)
        const handleRipple = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const rippleTarget = target.closest('.nav-link, .mobile-nav-link, .btn-primary, .dark-mode-toggle, .hamburger-btn, .close-menu-btn, .font-card, .symbol-card');
            if (rippleTarget) {
                const rect = rippleTarget.getBoundingClientRect();
                const ripple = document.createElement('span');
                ripple.className = 'ripple-effect';
                ripple.style.left = `${e.clientX - rect.left}px`;
                ripple.style.top = `${e.clientY - rect.top}px`;
                rippleTarget.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            }
        };
        document.addEventListener('mousedown', handleRipple);
        return () => document.removeEventListener('mousedown', handleRipple);
    }, [])

    useEffect(() => {
        if (mounted) {
            localStorage.setItem('darkMode', JSON.stringify(darkMode))
            if (darkMode) document.documentElement.classList.add('dark')
            else document.documentElement.classList.remove('dark')
        }
    }, [darkMode, mounted])

    useEffect(() => {
        if (!mounted) return
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('active') })
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [mounted])

    const handleCopy = async (text: string, id: string) => {
        try {
            await navigator.clipboard.writeText(text)
            setCopiedId(id)
            setShowToast(true)
            setTimeout(() => setCopiedId(null), 2000)
            setTimeout(() => setShowToast(false), 3000)
        } catch (err) { console.error('Kopyalama hatası:', err) }
    }

    // Structured data for SEO
    useEffect(() => {
        if (!mounted) return
        const sd = {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "TikTok Yazı Stilleri",
            "description": "TikTok bio, kullanıcı adı ve videolar için şık yazı stilleri oluşturun.",
            "url": "https://yazı-stilleripro.com.tr/tiktok-yazi-stilleri",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "TRY" }
        }
        const faqSd = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(f => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a }
            }))
        }
        const s1 = document.createElement('script'); s1.type = 'application/ld+json'; s1.text = JSON.stringify(sd); s1.id = 'tiktok-sd'; document.head.appendChild(s1)
        const s2 = document.createElement('script'); s2.type = 'application/ld+json'; s2.text = JSON.stringify(faqSd); s2.id = 'tiktok-faq-sd'; document.head.appendChild(s2)
        return () => { document.getElementById('tiktok-sd')?.remove(); document.getElementById('tiktok-faq-sd')?.remove() }
    }, [mounted])

    return (
        <div className={`page-tiktok ${mounted && darkMode ? 'dark' : ''}`}>
            {/* Header */}
            <header className="header">
                <div className="container">
                    <div className="header-content">
                        <Link href="/" className="logo-container">
                            <div className="logo-wrapper">
                                <NextImage src="/logo.svg" alt="Yazı Stilleri Logo" width={180} height={40} className="logo-image" style={{ height: 'auto' }} priority />
                            </div>
                        </Link>
                        <nav className="nav desktop-nav">
                            <Link href="/insta-yazi-tipi" className="nav-link">{t.common.nav.insta}</Link>
                            <Link href="/tiktok-yazi-stilleri" className="nav-link active">TikTok Yazı Stilleri</Link>
                            <Link href="/discord-yazi-stilleri" className="nav-link">Discord Yazı Stilleri</Link>
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
                    <div className="mobile-menu-header"><span className="mobile-menu-title">Menu</span><button className="close-menu-btn" onClick={() => setIsMobileMenuOpen(false)}>✕</button></div>
                    <nav className="mobile-nav">
                        <Link href="/insta-yazi-tipi" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}><span className="nav-icon">📸</span> {t.common.nav.insta}</Link>
                        <Link href="/tiktok-yazi-stilleri" className="mobile-nav-link active" onClick={() => setIsMobileMenuOpen(false)}><span className="nav-icon">🎵</span> TikTok Yazı Stilleri</Link>
                        <Link href="/discord-yazi-stilleri" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}><span className="nav-icon">🎮</span> Discord Yazı Stilleri</Link>
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
                {/* Full-Screen Hero */}
                <div className="hero-section-fullscreen">
                    <div className="hero-bg-fullscreen">
                        <div className="hero-gradient-animated"></div>
                        <div className="hero-particles-animated">
                            <div className="particle particle-1">🎵</div>
                            <div className="particle particle-2">🎶</div>
                            <div className="particle particle-3">♪</div>
                            <div className="particle particle-4">✨</div>
                            <div className="particle particle-5">🌟</div>
                            <div className="particle particle-6">♫</div>
                            <div className="particle particle-7">💫</div>
                            <div className="particle particle-8">🎵</div>
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
                            <span className="badge-icon">🎵</span>
                            <span className="badge-text">500+ Viral Yazı Tipi</span>
                        </div>

                        <h1 className="hero-title-fullscreen">
                            <span className="title-line-animated">
                                <span className="title-word-animated">TikTok</span>
                                <span className="title-word-animated highlight-gradient">Yazı Stilleri</span>
                            </span>
                        </h1>

                        <p className="hero-description-fullscreen">
                            TikTok&apos;ta Keşfet&apos;e çıkmak veya FYP&apos;ye düşmek istiyorsanız, profiliniz sadece standart metin kullanan sıradan bir fenomen hesabından farklı görünmelidir. Basit açıklamaların artık işe yaramadığını erken öğrendim; bionuzu ve videolarınızı 500&apos;den fazla estetik ve viral yazı tipiyle süslemeniz gerekiyor.
                        </p>

                        <div className="hero-input-fullscreen">
                            <div className="input-glow-effect"></div>
                            <div className="input-container-glass">
                                <div className="input-header-premium">
                                    <div className="input-icon-premium">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#tgradient1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M2 17L12 22L22 17" stroke="url(#tgradient1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M2 12L12 17L22 12" stroke="url(#tgradient1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <defs><linearGradient id="tgradient1" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#25F4EE" /><stop offset="100%" stopColor="#FE2C55" /></linearGradient></defs>
                                        </svg>
                                    </div>
                                    <div className="input-header-text-premium">
                                        <div className="input-title-premium">Metninizi Yazın</div>
                                        <p>Anında 55+ TikTok stile dönüştürün 🎵</p>
                                    </div>
                                </div>

                                <div className="input-field-premium">
                                    <textarea
                                        id="tiktok-input"
                                        className="text-input-premium"
                                        value={inputText}
                                        onChange={(e) => setInputText(e.target.value)}
                                        placeholder="TikTok bio veya isim yazın..."
                                        rows={2}
                                        maxLength={500}
                                    />
                                    <button className="clear-btn-premium" onClick={() => setInputText('')} style={{ opacity: inputText ? 1 : 0, pointerEvents: inputText ? 'auto' : 'none' }} aria-label="Temizle">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                                    </button>
                                </div>

                                <div className="input-footer-premium">
                                    <div className="turkish-chars-premium">
                                        <div className="chars-group">
                                            <span className="char-badge-premium">ç</span><span className="char-badge-premium">ğ</span><span className="char-badge-premium">ı</span><span className="char-badge-premium">İ</span><span className="char-badge-premium">ö</span><span className="char-badge-premium">ş</span><span className="char-badge-premium">ü</span>
                                        </div>
                                        <span className="char-label-premium">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            Türkçe desteklenir
                                        </span>
                                    </div>
                                    <div className={`char-counter-premium ${inputText.length > 400 ? 'warning' : ''} ${inputText.length > 480 ? 'danger' : ''}`}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                                        <span className="counter-text">{inputText.length} / 500</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hero-stats-fullscreen">
                            <div className="stat-item-premium">
                                <div className="stat-icon">🎵</div>
                                <div className="stat-content"><span className="stat-number-premium">55+</span><span className="stat-label-premium">Font Stili</span></div>
                            </div>
                            <div className="stat-divider-premium"></div>
                            <div className="stat-item-premium">
                                <div className="stat-icon">📱</div>
                                <div className="stat-content"><span className="stat-number-premium">6</span><span className="stat-label-premium">Platform</span></div>
                            </div>
                            <div className="stat-divider-premium"></div>
                            <div className="stat-item-premium">
                                <div className="stat-icon">🇹🇷</div>
                                <div className="stat-content"><span className="stat-number-premium">%100</span><span className="stat-label-premium">Türkçe</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    {/* Font Grid */}
                    <div className="category-section">
                        <div className="category-header">
                            <span className="category-count">{tiktokFonts.length}</span>
                        </div>
                        <div className="font-grid">
                            {tiktokFonts.map((font) => {
                                const transformed = font.transform(inputText)
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
                                        <div className="font-preview">{transformed || 'Örnek metin'}</div>
                                        <button className={`copy-button ${isCopied ? 'copied' : ''}`} onClick={() => handleCopy(transformed, font.id)}>
                                            {isCopied ? '✓ Kopyalandı!' : '📋 Kopyala'}
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Article Sections */}
                    <div className="tiktok-article-container">
                        <section className="tiktok-seo-section reveal">
                            <p>
                                Stile odaklandığınızda viral olma şansınız artar çünkü TikTok şekilli yazı sadece bir tasarım değildir; metin içeriğini akıllı süslemeler, farklı yazı tipleri, renkler ve görsel çekiciliği artıran, izleyicilerin dikkatini çeken efektler aracılığıyla daha göz alıcı hale getirme sanatıdır.
                            </p>
                            <p>
                                Birçok içerik üreticisi için güçlü TikTok tarzı metinler oluşturmak, adım adım yapıldığında eğlenceli ve yaratıcı bir süreçtir. İlk adım metninizi girmek ve doğru görünümü seçmek, ardından boyutu ve konumu ayarlamaktır. Arka plana renk eklemeyi deneyin, öne çıkmasına yardımcı olmak için zıt renkler kullanın ve mesajınızı zıplayan, kayan veya dönen öğelerle gerçekten canlandırmak için animasyonlu efektlerle hareket katın. İşte basit şekilli yazılar bu şekilde güçlü hale gelir.
                            </p>
                        </section>

                        <section className="tiktok-seo-section reveal">
                            <h2>TikTok Yazı Stilleri Aracımızı Nasıl Kullanırsınız?</h2>
                            <p>
                                TikTok yazı stilleri aracımızı kullanırken başlangıç oldukça basittir. Sadece <Link href="https://yazı-stilleripro.com.tr/" className="content-link">şekilli bir isim yazmak</Link> için net adımları izleyin. Geriye kalan tek adım, ne tür bir şekilli yazı istediğinize karar vermektir. Steam&apos;de oyun oynamaktan hoşlanan birçok oyuncu kullanıcı adlarının daha görünür olmasını ister ve aynı fikir burada da geçerlidir. Web sitemiz faydalı hizmetler sunar ve bu yöntem <Link href="https://yazı-stilleripro.com.tr/" className="content-link">şekilli isim yazmayı</Link> kolaylaştırır. Daha yaratıcı bir görünüm için her harfi <Link href="https://yazı-stilleripro.com.tr/sekilli-semboller/" className="content-link">farklı bir şekle</Link> dönüştürebilir veya tüm metni aynı şekilli formatta yazabilirsiniz.
                            </p>

                            <p><strong>Adım 1: İsim Stilinizi Seçin</strong></p>
                            <p>İlk olarak güzel bir kullanıcı adı seçin ve süsleme sürecine şık bir şekilde başlayın. Şekilli harfler ve şekilli semboller arasında seçim yaparken dengeyi düşünün. Gösterişli bir kullanıcı adı oluşturmak için takma adınızın başına veya sonuna semboller yerleştirebilirsiniz.</p>

                            <p><strong>Adım 2: Temiz ve Okunabilir Tutun</strong></p>
                            <p>Sonucun karmaşık görünmemesi veya kullanıcılar tarafından okunmasının zor olmaması için genellikle hafif <Link href="https://yazı-stilleripro.com.tr/sekilli-semboller/" className="content-link">süslü sembolleri</Link> klasik bir formla karıştırmanızı öneririm. Hedef, çok karmaşık hale getirmeden veya uygunsuz öğeler eklemeden havalı bir kullanıcı adı oluşturmaktır.</p>

                            <p><strong>Adım 3: Keşfedin ve Özelleştirin</strong></p>
                            <p>İsminizi girdikten sonra çevrimiçi hızlı bir arama yaparak şekilli sembolleri keşfetmek için zaman ayırın. İnce ayarlanmış bir sembol seçin ve en iyi eşleşmeyi bulana kadar farklı ters stil ve yazı tipi kombinasyonlarını test edin.</p>

                            <p><strong>Adım 4: Her Yerde Kullanın</strong></p>
                            <p>Bu şık isim yazma teknikleri <Link href="https://yazı-stilleripro.com.tr/tiktok-yazi-stilleri/" className="content-link">Instagram</Link>, Twitter, Facebook, YouTube ve Gmail gibi birçok platformda çalışır. İster bir videoya yorum yapıyor olun ister bir yoruma yanıt veriyor olun, isminiz öne çıkacak, dikkat çekecek, daha fazla yanıt alacak ve size gerçek avantajlar sağlayacaktır. Yaratıcı isim metin stilleri, güzel metin stilleri, akıllı metin stili seçimleri, çekici metin şekilleri, doğru yazı tipi ve temiz bir metin türü ile profiliniz daha benzersiz ve profesyonel görünecektir.</p>
                        </section>

                        <section className="tiktok-seo-section reveal">
                            <h2>TikTok&apos;ta Yazı Stilleri Nerelerde Kullanılır?</h2>
                            <p>TikTok&apos;ta yazı stilleri sadece videolarda değil, birçok alanda kullanılır. Profilinizin ve içeriğinizin farklı bölümlerinde özel yazı tipleri ve benzersiz yazı tipleri kullanarak varlığınızı geliştirebilirsiniz.</p>
                            <ul>
                                <li><strong>TikTok Biyografisi (Bio)</strong> – Güçlü ilk izlenimler oluşturmak için 150 karakterlik bionuzu kişiselleştirin. Bu uygulama alanlarında hesap açıklamanızı şekillendirebilir, ilgi alanlarınızı vurgulayabilir, iletişim bilgileri ekleyebilir, bir slogan veya motto yazabilir ve bağlantı açıklamanızı geliştirebilirsiniz. Estetik Biyografiler ve Estetik Videolar&apos;dan birçok örnek; içerik üreticilerinin İstanbul&apos;dan bahsettiğini, kendilerine Yaratıcı İçerik Üreticisi dediklerini, Dans ve Müzik Sever sevgilerini paylaştıklarını ve &apos;sadece pozitif enerji&apos; gibi ifadeler eklediklerini gösteriyor.</li>
                                <li><strong>TikTok Video Açıklamaları</strong> – YENİ VİDEO, Seni özledim gibi yaratıcı kullanım örnekleriyle ve fyp, keşfet (explore) ve viral gibi hashtag&apos;lerle video başlığınızı ve açıklamanızı vurgulayın. Yararlı bir ipucu, daha fazla dikkat çekmek için metni emojilerle birleştirmektir.</li>
                                <li><strong>TikTok Yorumları</strong> – Şekilli metinler kullanarak diğer kişilerin videolarındaki yorumlarda öne çıkın. Vay, çok iyi olmuş, Bu ne yaa ve ellerine sağlık gibi örnek yorumlar ilgi çekici görünüyor. Uyarı: Süslü yorumlar yazmayı abartmayın çünkü spam gibi görünebilir. Bunları sadece önemli yorumlar için kullanın.</li>
                                <li><strong>Videolarda Uygulama İçi Metin ve Video Dışı Kullanım</strong> – Yerleşik metin düzenleyici sınırlı sayıda yazı tipi sunar, bu nedenle birçok içerik üreticisi küçük resimler ve kapak görselleri için videoların dışında özel yazı tipleri kullanır. Video Dışı Kullanım kapsamında bu; CapCut&apos;ta video düzenleme, küçük resim tasarımı, önizleme görselleri oluşturma ve harici düzenleyicilerle final hazırlığını içerir.</li>
                            </ul>
                        </section>

                        <section className="tiktok-seo-section reveal">
                            <h2>Trend TikTok Yazı Stilleri (2026)</h2>
                            <h3>✨ Popüler ve Estetik Seçenekler</h3>
                            <p>TikTok&apos;ta Estetik Yazı Tipleri, özellikle estetik topluluğu içinde en popüler olanlar arasında kalmaya devam ediyor. Estetik El Yazısı, Soft Sans ve Minimal gibi zarif, minimalist yazı tipleri; Estetik Titreşimler, &apos;Soft Girl&apos; enerjisi ve sakin, minimal bir yaşamla eşleşir. Bunlar en çok Estetik TikTok hesapları, Moda, Güzellik içeriği ve özellikle aesthetic, aesthetictiktok, softgirl ve vsco gibi hashtag&apos;lerle desteklenen Minimal yaşam tarzı videoları için uygundur.</p>

                            <h3>💥 Kalın ve Duygusal Etki</h3>
                            <p>Dikkat çekmek için Bold Serif, Bold Sans ve Extra Bold gibi Kalın Yazı Tipleri; VİRAL OLDU, TREND VİDEO veya TAKİP EDİN gibi viral videolar için, özellikle de viral, fyp, trending ve keşfet kullanarak yapılan Viral meydan okuma videoları, önemli duyurular ve <a href="https://www.ontheregimen.com/2016/10/20/50-favorite-pieces-motivational-content/" className="content-link" target="_blank" rel="noopener noreferrer">Motivasyonel içerikler</a> için mükemmeldir.</p>
                            <p>Duygusal paylaşımlar için Seni seviyorum, Günaydın motivasyonu veya Hayaller peşinde koş gibi satırlarda El Yazısı, Script veya Handwriting Style yazı tiplerini seçin; bunlar Aşk, ilişki içeriği, Kişisel hikayeler ve love, motivation ve storytime içeren Vlog tarzı içerikler için idealdir.</p>

                            <h3>🎭 Yaratıcı, Sevimli ve Lüks Stiller</h3>
                            <div className="content-image-wrapper reveal">
                                <NextImage
                                    src="/luxury-styles.png"
                                    alt="Yaratıcı, Sevimli ve Lüks TikTok Yazı Stilleri"
                                    width={1200}
                                    height={630}
                                    className="content-image-premium"
                                />
                            </div>
                            <p>Karanlık temalar için Glitch ve Zalgo; horror, creepy ve scary hashtag&apos;lerini kullanan korku içeriği, gizem videoları ve Cadılar Bayramı temalı paylaşımlar için Tuhaf, Gizemli, Bozulmuş bir görünüm verir. Balon Yazı Tipleri (Bubble Fonts); genç bir kitle için Komedi, meme içeriği ve sağlıklı, pozitif etkileşimli aile dostu videolarda Sevimli, Yuvarlak ve eğlenceli hissettirir.</p>
                            <p>Yumuşak markalama için Küçük, Minik Metinler, üst simge stili ve bio detaylarında veya dipnotlarda estetik minik metinler kullanılabilir. Premium titreşimler için Luxury, moda içeriği, <Link href="https://yazı-stilleripro.com.tr/pubg-sekilli-nick/" className="content-link">Oyun takma adları</Link> ve Özel etkinlikler için harika olan Lüks, Kraliçe ve Süslü gibi Süslü, Dekoratif, Abartılı ve lüks yazı tiplerini deneyin. TikTok yazı tipi stilleri listesindeki popüler seçenekler arasında Geniş Yazı Tipleri, Ayna Yazı Tipleri, Neon Yazı Tipleri, Vaporwave Yazı Tipleri, Wingdings Yazı Tipleri, Eski İngilizce Yazı Tipleri, Ortaçağ Yazı Tipleri ve Çift vuruşlu yazı tipleri yer alır ve her biri içerik üreticilerine benzersiz bir avantaj sağlar.</p>
                        </section>

                        <section className="tiktok-faq-section reveal">
                            <h2>Sıkça Sorulan Sorular</h2>
                            {faqData.map((faq, idx) => (
                                <div key={idx} className={`tiktok-faq-item ${expandedFaq === idx ? 'expanded' : ''}`}>
                                    <button className="tiktok-faq-q" onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}>
                                        <span>{faq.q}</span>
                                        <span className="tiktok-faq-icon">+</span>
                                    </button>
                                    <div className="tiktok-faq-a"><p dangerouslySetInnerHTML={{ __html: faq.a }} /></div>
                                </div>
                            ))}
                        </section>
                    </div>

                </div>
            </main>

            {/* Toast */}
            {showToast && (
                <div className="toast"><span className="toast-icon">✓</span><span>Kopyalandı!</span></div>
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
                        <div className="footer-text">© 2026 {t.common.logo}. {t.common.nav.rights}</div>
                    </div>
                </div>
            </footer>

            <style jsx>{`
        .nav-link.active { color: var(--primary-color); font-weight: 600; }
      `}</style>
        </div>
    )
}
