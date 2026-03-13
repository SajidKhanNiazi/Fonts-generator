'use client'

import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Language, translations } from '@/lib/translations'
import dynamic from 'next/dynamic'

const SeoSections = dynamic(() => import('../components/SeoSections'), { ssr: true })
const FaqAccordion = dynamic(() => import('../components/FaqAccordion'), { ssr: true })

// ============ UNICODE BOLD MAPPINGS ============

const serifBold: Record<string, string> = {
  'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡', 'i': '𝐢', 'j': '𝐣', 'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨', 'p': '𝐩', 'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭', 'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳',
  'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓', 'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙',
  '0': '𝟎', '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒', '5': '𝟓', '6': '𝟔', '7': '𝟕', '8': '𝟖', '9': '𝟗'
}

const sansBold: Record<string, string> = {
  'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵', 'i': '𝗶', 'j': '𝗷', 'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝗼', 'p': '𝗽', 'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁', 'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆', 'z': '𝘇',
  'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚', 'H': '𝗛', 'I': '𝗜', 'J': '𝗝', 'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡', 'O': '𝗢', 'P': '𝗣', 'Q': '𝗤', 'R': '𝗥', 'S': '𝗦', 'T': '𝗧', 'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫', 'Y': '𝗬', 'Z': '𝗭',
  '0': '𝟬', '1': '𝟭', '2': '𝟮', '3': '𝟯', '4': '𝟰', '5': '𝟱', '6': '𝟲', '7': '𝟳', '8': '𝟴', '9': '𝟵'
}

const serifBoldItalic: Record<string, string> = {
  'a': '𝒂', 'b': '𝒃', 'c': '𝒄', 'd': '𝒅', 'e': '𝒆', 'f': '𝒇', 'g': '𝒈', 'h': '𝒉', 'i': '𝒊', 'j': '𝒋', 'k': '𝒌', 'l': '𝒍', 'm': '𝒎', 'n': '𝒏', 'o': '𝒐', 'p': '𝒑', 'q': '𝒒', 'r': '𝒓', 's': '𝒔', 't': '𝒕', 'u': '𝒖', 'v': '𝒗', 'w': '𝒘', 'x': '𝒙', 'y': '𝒚', 'z': '𝒛',
  'A': '𝑨', 'B': '𝑩', 'C': '𝑪', 'D': '𝑫', 'E': '𝑬', 'F': '𝑭', 'G': '𝑮', 'H': '𝑯', 'I': '𝑰', 'J': '𝑱', 'K': '𝑲', 'L': '𝑳', 'M': '𝑴', 'N': '𝑵', 'O': '𝑶', 'P': '𝑷', 'Q': '𝑸', 'R': '𝑹', 'S': '𝑺', 'T': '𝑻', 'U': '𝑼', 'V': '𝑽', 'W': '𝑾', 'X': '𝑿', 'Y': '𝒀', 'Z': '𝒁'
}

const sansBoldItalic: Record<string, string> = {
  'a': '𝙖', 'b': '𝙗', 'c': '𝙘', 'd': '𝙙', 'e': '𝙚', 'f': '𝙛', 'g': '𝙜', 'h': '𝙝', 'i': '𝙞', 'j': '𝙟', 'k': '𝙠', 'l': '𝙡', 'm': '𝙢', 'n': '𝙣', 'o': '𝙤', 'p': '𝙥', 'q': '𝙦', 'r': '𝙧', 's': '𝙨', 't': '𝙩', 'u': '𝙪', 'v': '𝙫', 'w': '𝙬', 'x': '𝙭', 'y': '𝙮', 'z': '𝙯',
  'A': '𝘼', 'B': '𝘽', 'C': '𝘾', 'D': '𝘿', 'E': '𝙀', 'F': '𝙁', 'G': '𝙂', 'H': '𝙃', 'I': '𝙄', 'J': '𝙅', 'K': '𝙆', 'L': '𝙇', 'M': '𝙈', 'N': '𝙉', 'O': '𝙊', 'P': '𝙋', 'Q': '𝙌', 'R': '𝙍', 'S': '𝙎', 'T': '𝙏', 'U': '𝙐', 'V': '𝙑', 'W': '𝙒', 'X': '𝙓', 'Y': '𝙔', 'Z': '𝙕'
}

const scriptBold: Record<string, string> = {
  'a': '𝓬', 'b': '𝓫', 'c': '𝓬', 'd': '𝓭', 'e': '𝓮', 'f': '𝓯', 'g': '𝓰', 'h': '𝓱', 'i': '𝓲', 'j': '𝓳', 'k': '𝓴', 'l': '𝓵', 'm': '𝓶', 'n': '𝓷', 'o': '𝓸', 'p': '𝓹', 'q': '𝓺', 'r': '𝓻', 's': '𝓼', 't': '𝓽', 'u': '𝓾', 'v': '𝓿', 'w': '𝔀', 'x': '𝔁', 'y': '𝔂', 'z': '𝔃',
  'A': '𝓐', 'B': '𝓑', 'C': '𝓒', 'D': '𝓓', 'E': '𝓔', 'F': '𝓕', 'G': '𝓖', 'H': '𝓗', 'I': '𝓘', 'J': '𝓙', 'K': '𝓚', 'L': '𝓛', 'M': '𝓜', 'N': '𝓝', 'O': '𝓞', 'P': '𝓟', 'Q': '𝓠', 'R': '𝓡', 'S': '𝓢', 'T': '𝓣', 'U': '𝓤', 'V': '𝓥', 'W': '𝓦', 'X': '𝓧', 'Y': '𝓨', 'Z': '𝓩'
}

const frakturBold: Record<string, string> = {
  'a': '𝔟', 'b': '𝔟', 'c': '𝔠', 'd': '𝔡', 'e': '𝔢', 'f': '𝔣', 'g': '𝔤', 'h': '𝔥', 'i': '𝔦', 'j': '𝔧', 'k': '𝔨', 'l': '𝔩', 'm': '𝔪', 'n': '𝔫', 'o': '𝔬', 'p': '𝔭', 'q': '𝔮', 'r': '𝔯', 's': '𝔰', 't': '𝔱', 'u': '𝔲', 'v': '𝔳', 'w': '𝔴', 'x': '𝔵', 'y': '𝔶', 'z': '𝔷',
  'A': '𝔄', 'B': '𝔅', 'C': 'ℭ', 'D': '𝔇', 'E': '𝔈', 'F': '𝔉', 'G': '𝔊', 'H': 'ℌ', 'I': 'ℑ', 'J': '𝔍', 'K': '𝔎', 'L': '𝔏', 'M': '𝔐', 'N': '𝔑', 'O': '𝔒', 'P': '𝔓', 'Q': '𝔔', 'R': 'ℜ', 'S': '𝔖', 'T': '𝔗', 'U': '𝔘', 'V': '𝔙', 'W': '𝔚', 'X': '𝔛', 'Y': '𝔜', 'Z': 'ℨ'
}

const doubleStruck: Record<string, string> = {
  'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘', 'h': '𝕙', 'i': '𝕚', 'j': '𝕛', 'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠', 'p': '𝕡', 'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥', 'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪', 'z': '𝕫',
  'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼', 'F': '𝔽', 'G': '𝔾', 'H': 'ℍ', 'I': '𝕀', 'J': '𝕁', 'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ', 'O': '𝕆', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋', 'U': '𝕌', 'V': '𝕍', 'W': '𝕎', 'X': '𝕏', 'Y': '𝕐', 'Z': 'ℤ',
  '0': '𝟘', '1': '𝟙', '2': '𝟚', '3': '𝟛', '4': '𝟜', '5': '𝟝', '6': '𝟞', '7': '𝟟', '8': '𝟠', '9': '𝟡'
}

const negativeSquared: Record<string, string> = {
  'a': '🅰', 'b': '🅱', 'c': '🅲', 'd': '🅳', 'e': '🅴', 'f': '🅵', 'g': '🅶', 'h': '🅷', 'i': '🅸', 'j': '🅹', 'k': '🅺', 'l': '🅻', 'm': '🅼', 'n': '🅽', 'o': '🅾', 'p': '🅿', 'q': '🆀', 'r': '🆁', 's': '🆂', 't': '🆃', 'u': '🆄', 'v': '🆅', 'w': '🆆', 'x': '🆇', 'y': '🆈', 'z': '🆉',
  'A': '🅰', 'B': '🅱', 'C': '🅲', 'D': '🅳', 'E': '🅴', 'F': '🅵', 'G': '🅶', 'H': '🅷', 'I': '🅸', 'J': '🅹', 'K': '🅺', 'L': '🅻', 'M': '🅼', 'N': '🅽', 'O': '🅾', 'P': '🅿', 'Q': '🆀', 'R': '🆁', 'S': '🆂', 'T': '🆃', 'U': '🆄', 'V': '🆅', 'W': '🆆', 'X': '🆇', 'Y': '🆈', 'Z': '🆉'
}

// ============ UTILS ============

function transform(text: string, mapping: Record<string, string>): string {
  return text.split('').map(c => mapping[c] || c).join('')
}

const decorations = [
  (t: string) => `🔥 ${t} 🔥`,
  (t: string) => `⚡ ${t} ⚡`,
  (t: string) => `⭐ ${t} ⭐`,
  (t: string) => `👑 ${t} 👑`,
  (t: string) => `💎 ${t} 💎`,
  (t: string) => `꧁ ${t} ꧂`,
  (t: string) => `【 ${t} 】`,
  (t: string) => `『 ${t} 』`,
  (t: string) => `亗 ${t} 亗`,
  (t: string) => `彡 ${t} 彡`,
  (t: string) => `»»— ${t} —««`,
  (t: string) => `﹟ ${t} ﹟`,
  (t: string) => `✿ ${t} ✿`,
  (t: string) => `🦋 ${t} 🦋`,
  (t: string) => `💖 ${t} 💖`,
  (t: string) => `✨ ${t} ✨`,
  (t: string) => `✦ ${t} ✦`,
  (t: string) => `❂ ${t} ❂`,
  (t: string) => `╰┈➤ ${t}`,
  (t: string) => `• ${t} •`,
  (t: string) => `║ ${t} ║`,
  (t: string) => `﹝ ${t} ﹞`,
  (t: string) => `« ${t} »`,
  (t: string) => `〔 ${t} 〕`,
  (t: string) => `⫷ ${t} ⫸`,
  (t: string) => `— ${t} —`,
]

interface BoldStyle {
  id: string
  name: string
  text: string
  popular?: boolean
}

// ============ ARTICLE CONTENT ============

const getArticleSections = (lang: string) => [
  {
    id: 'styles',
    title: lang === 'tr' ? 'Kalın Yazı Stilleri' : 'Bold Text Styles',
    type: 'text',
    level: 2,
    content: lang === 'tr' 
      ? 'Aşağıda kopyalayıp kullanabileceğiniz bazı popüler kalın yazı stilleri bulunmaktadır.<br/><br/>𝗕𝗼𝗹𝗱 𝗧𝗲𝘅𝘁<br/>𝘉𝘰𝘭𝘥 𝘛𝘦𝘹𝘵<br/>𝘽𝙤𝙡𝙙 𝙏𝙚𝙭𝙩<br/>𝓑𝓸𝓵𝓭 𝓣𝓮𝔁𝓽<br/>𝔅𝔬𝔩𝔡 𝔗𝔢𝔵𝔱<br/>𝐁𝐨𝐥𝐝 𝐓𝐞𝐱𝐭<br/>𝔹𝕠𝕝𝕕 𝕋𝕖𝕩𝕥<br/><br/>Birçok kullanıcı bu stilleri şunlar için kopyalar: Instagram biyografileri, oyun kullanıcı adları, TikTok profilleri, Discord takma adları, WhatsApp mesajları.<br/><br/>Şık metin, kelimelerinizin farklı ve daha dikkat çekici görünmesine yardımcı olur.'
      : 'Below are some popular bold text styles you can copy and use.<br/><br/>𝗕𝗼𝗹𝗱 𝗧𝗲𝘅𝘁<br/>𝘉𝘰𝘭𝘥 𝘛𝘦𝘹𝘵<br/>𝘽𝙤𝙡𝙙 𝙏𝙚𝙭𝙩<br/>𝓑𝓸𝓵𝓭 𝓣𝓮𝔁𝓽<br/>𝔅𝔬𝔩𝔡 𝔗𝔢𝔵𝔱<br/>𝐁𝐨𝐥𝐝 𝐓𝐞𝐱𝐭<br/>𝔹𝕠𝕝𝕕 𝕋𝕖𝕩𝕥<br/><br/>Many users copy these styles for: Instagram bios, gaming usernames, TikTok profiles, Discord nicknames, WhatsApp messages.<br/><br/>Stylish text helps your words look different and more noticeable.'
  },
  {
    id: 'what-is',
    title: lang === 'tr' ? 'Kalın Yazı Stili Nedir?' : 'What Is Bold Text Style?',
    type: 'text',
    level: 2,
    content: lang === 'tr'
      ? 'Kalın yazı, harflerin normal metinden daha kalın ve güçlü göründüğü bir yazı stilidir. Tipografide kalın yazı, önemli kelimeleri vurgulamak veya bir cümlenin belirli bölümlerini öne çıkarmak için kullanılır.<br/><br/>Sosyal medyada, kalın yazı genellikle kullanıcı adlarında, açıklamalarda veya biyografilerde profillerin daha benzersiz ve çekici görünmesini sağlamak için kullanılır.'
      : 'Bold text is a writing style where letters appear thicker and stronger than normal text. In typography, bold text is used to highlight important words or make certain parts of a sentence stand out.<br/><br/>On social media, bold text is often used in usernames, captions, or bios to make profiles look more unique and attractive.'
  },
  {
    id: 'how-to',
    title: lang === 'tr' ? 'Kalın Yazı Nasıl Yazılır?' : 'How to Write Bold Text',
    type: 'text',
    level: 2,
    content: lang === 'tr'
      ? 'Kalın yazı oluşturmanın iki ana yolu vardır.<br/><br/>İlk yöntem normal formatlamadır. Metin editörlerinde veya belgelerde, kelimeleri seçebilir ve formatlama araçlarını kullanarak kalın formatı uygulayabilirsiniz.<br/><br/>İkinci yöntem bir kalın yazı oluşturucu kullanmaktır. Bu yöntem, normal metninizi her yere kopyalanabilen ve kalın görünen Unicode karakterlerine dönüştürür.'
      : 'There are two main ways to create bold text.<br/><br/>The first method is normal formatting. In text editors or documents, you can select words and apply bold formatting using formatting tools.<br/><br/>The second method is using a bold text generator. This method converts your normal text into Unicode characters that look bold and can be copied anywhere.'
  },
  {
    id: 'generator',
    title: lang === 'tr' ? 'Kalın Yazı Oluşturucu Nedir?' : 'What Is a Bold Text Generator?',
    type: 'text',
    level: 2,
    content: lang === 'tr'
      ? 'Kalın yazı oluşturucu, normal harfleri kalın stilli karakterlere dönüştüren çevrimiçi bir araçtır.<br/><br/>Cihazınıza font yüklemek yerine, oluşturucu standart harfleri <a href="https://home.unicode.org/" target="_blank" rel="noopener noreferrer" style="color: var(--primary-color); font-weight: 600; text-decoration: none; border-bottom: 1px dashed var(--primary-light);">Unicode karakterleriyle</a> değiştirir.<br/><br/>Örnek:<br/>Normal metin: Hello<br/>Kalın stil: 𝗛𝗲𝗹𝗹𝗼<br/><br/>Bu, kullanıcıların sosyal medya veya mesajlar için hızlı bir şekilde şık metinler oluşturmasını sağlar.'
      : 'A bold text generator is an online tool that converts normal letters into bold-style characters.<br/><br/>Instead of installing fonts on your device, the generator replaces standard letters with <a href="https://home.unicode.org/" target="_blank" rel="noopener noreferrer" style="color: var(--primary-color); font-weight: 600; text-decoration: none; border-bottom: 1px dashed var(--primary-light);">Unicode characters</a> that look bold.<br/><br/>Example:<br/>Normal text: Hello<br/>Bold style: 𝗛𝗲𝗹𝗹𝗼<br/><br/>This allows users to quickly create stylish text for social media or messages.'
  },
  {
    id: 'how-works',
    title: lang === 'tr' ? 'Kalın Yazı Oluşturucu Nasıl Çalışır?' : 'How Does a Bold Text Generator Work?',
    type: 'text',
    level: 2,
    content: lang === 'tr'
      ? 'Kalın yazı oluşturucular Unicode adlı bir sistem kullanır.<br/><br/>Unicode, farklı cihazlarda ve dillerde kullanılan binlerce sembol ve karakter içerir. Oluşturucu, her normal harfi kalın Unicode karşılığına dönüştürür.<br/><br/>Süreç şu şekilde işler:<br/>1. Metninizi oluşturucuya yazın.<br/>2. Araç, her harfi kalın bir Unicode karakterine dönüştürür.<br/>3. Birden fazla stil anında belirir.<br/>4. Beğendiğiniz stili kopyalarsınız.'
      : 'Bold text generators use a system called Unicode.<br/><br/>Unicode contains thousands of symbols and characters used across different devices and languages. The generator converts each normal letter into its Unicode bold equivalent.<br/><br/>The process works like this:<br/>1. Type your text into the generator.<br/>2. The tool converts each letter into a bold Unicode character.<br/>3. Multiple styles appear instantly.<br/>4. You copy the style you like.'
  },
  {
    id: 'how-to-use-gen',
    title: lang === 'tr' ? 'Kalın Yazı Oluşturucu Nasıl Kullanılır?' : 'How to Use a Bold Text Generator',
    type: 'text',
    level: 2,
    content: lang === 'tr'
      ? 'Oluşturucuyu kullanmak oldukça basittir.<br/><br/>1. Metninizi giriş kutusuna girin.<br/>2. Araç anında farklı kalın stiller oluşturur.<br/>3. Beğendiğiniz stili seçin.<br/>4. Tek tıkla metni kopyalayın.<br/>5. Sosyal medya profilinize veya mesajınıza yapıştırın.<br/><br/>Tüm bu süreç sadece birkaç saniye sürer.'
      : 'Using the generator is very simple.<br/><br/>1. Enter your text into the input box.<br/>2. The tool instantly creates different bold styles.<br/>3. Choose the style you like.<br/>4. Copy the text with one click.<br/>5. Paste it into your social media profile or message.<br/><br/>This entire process takes only a few seconds.'
  },
  {
    id: 'bold-italic-use',
    title: lang === 'tr' ? 'Kalın ve İtalik Metin Ne Zaman Kullanılır?' : 'When to Use Bold and Italic Text',
    type: 'text',
    level: 2,
    content: lang === 'tr'
      ? 'Kalın metin, önemli kelimeleri vurgulamak istediğinizde kullanılır.<br/><br/>İtalik metin stil katar ve metni daha yaratıcı gösterebilir. Birçok kişi benzersiz kullanıcı adları veya açıklamalar tasarlamak için kalın ve italik metni birleştirir.<br/><br/>Örnek:<br/>Normal metin: This is important<br/>Kalın metin: 𝗧𝗵𝗶𝘀 𝗶𝘀 𝗶𝗺𝗽𝗼𝗿𝘁𝗮𝗻𝘁<br/>İtalik metin: 𝘛𝘩𝘪𝘴 𝘪𝘴 𝘪𝘮𝘱𝘰𝘳𝘵𝘢𝘯𝘵'
      : 'Bold text is used when you want to emphasize important words.<br/><br/>Italic text adds style and can make text look more creative. Many people combine bold and italic text to design unique usernames or captions.<br/><br/>Example:<br/>Normal text: This is important<br/>Bold text: 𝗧𝗵𝗶𝘀 𝗶𝘀 𝗶𝗺𝗽𝗼𝗿𝘁𝗮𝗻𝘁<br/>Italic text: 𝘛𝘩𝘪𝘴 𝘪𝘴 𝘪𝘮𝘱𝘰𝘳𝘵𝘢𝘯𝘵'
  },
  {
    id: 'alternatives-gen',
    title: lang === 'tr' ? 'Kalın Yazı Oluşturucu Alternatifleri' : 'Alternatives to Bold Text Generators',
    type: 'text',
    level: 2,
    content: lang === 'tr'
      ? 'Çevrimiçi kalın yazı oluşturmanın birkaç yolu vardır.<br/><br/>Bazı web siteleri şık metin oluşturucular sunarken, diğerleri kopyala-yapıştır font kütüphaneleri sağlar. Ancak, oluşturucular genellikle daha kolaydır çünkü anında birçok stil üretirler.<br/><br/>Kullanıcılar farklı fontları test edebilir ve profillerine veya mesajlarına en uygun stili kopyalayabilirler.'
      : 'There are several ways to create bold text online.<br/><br/>Some websites offer stylish text generators, while others provide copy-paste font libraries. However, generators are usually easier because they instantly produce many styles.<br/><br/>Users can test different fonts and copy the style that fits their profile or message best.'
  },
  {
    id: 'where-best',
    title: lang === 'tr' ? 'Kalın Yazı En İyi Nerede Çalışır?' : 'Where Bold Text Works Best',
    type: 'text',
    level: 2,
    content: lang === 'tr'
      ? 'Unicode kalın karakterler Instagram, Facebook, X (Twitter), Discord ve mesajlaşma uygulamaları dahil birçok modern platformda çalışır.<br/><br/>Ancak, bazı platformlar her font stilini desteklemeyebilir. Eğer bir stil doğru görünmüyorsa, başkasını deneyebilirsiniz.'
      : 'Unicode bold characters work on many modern platforms, including:<br/><br/>Instagram<br/>Facebook<br/>X (Twitter)<br/>Discord<br/>messaging apps<br/><br/>However, some platforms may not support every font style. If a style does not appear correctly, you can try another one.'
  }
]

const getFaqs = (lang: string) => [
  {
    q: lang === 'tr' ? 'Kalın yazı stili nedir?' : 'What is bold text style?',
    a: lang === 'tr' ? 'Kalın yazı stili, harfleri normal metinden daha kalın ve dikkat çekici hale getirir.' : 'Bold text style makes letters thicker and more noticeable than normal text.'
  },
  {
    q: lang === 'tr' ? 'Çevrimiçi kalın yazı nasıl oluşturabilirim?' : 'How can I create bold text online?',
    a: lang === 'tr' ? 'Bir kalın yazı oluşturucu kullanabilirsiniz. Metninizi yazın ve beğenilen stili kopyalayın.' : 'You can use a bold text generator. Type your text and copy the bold style you like.'
  },
  {
    q: lang === 'tr' ? 'Kalın yazı Instagram\'da çalışır mı?' : 'Does bold text work on Instagram?',
    a: lang === 'tr' ? 'Çoğu Unicode kalın stili Instagram biyografilerine ve profillerine yapıştırılabilir.' : 'Most Unicode bold styles can be pasted into Instagram bios and profiles.'
  },
  {
    q: lang === 'tr' ? 'Kalın yazı gerçek bir font mu?' : 'Is bold text a real font?',
    a: lang === 'tr' ? 'Oluşturucular tarafından oluşturulan stiller genellikle font gibi görünen Unicode karakterleridir.' : 'Bold styles created by generators are usually Unicode characters that look like fonts.'
  },
  {
    q: lang === 'tr' ? 'Kalın yazıyı her yere kopyalayıp yapıştırabilir miyim?' : 'Can I copy and paste bold text anywhere?',
    a: lang === 'tr' ? 'Çoğu durumda evet, ancak bazı platformlar belirli karakterleri desteklemeyebilir.' : 'In most cases yes, but some platforms may not support certain characters.'
  }
]

// ============ COMPONENT ============

export default function BoldYaziStilleriClient() {
  const [lang, setLang] = useState<Language>('tr')
  const [inputText, setInputText] = useState('Kalın Yazı')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [showToast, setShowToast] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const t = translations[lang]

  const articleSections = useMemo(() => getArticleSections(lang), [lang])
  const faqs = useMemo(() => getFaqs(lang), [lang])

  useEffect(() => {
    setMounted(true)
    const savedDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(savedDarkMode)
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

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [mounted])

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      setShowToast(true)
      setTimeout(() => setCopiedId(null), 2000)
      setTimeout(() => setShowToast(false), 3000)
    } catch (err) {
      console.error('Copy failed:', err)
    }
  }

  const boldStyles = useMemo(() => {
    const baseText = inputText || 'Kalın Yazı'
    const styles: BoldStyle[] = []

    // 1. Basic Bold Transformations
    styles.push({ id: 'serif-bold', name: lang === 'tr' ? 'Serif Kalın' : 'Serif Bold', text: transform(baseText, serifBold), popular: true })
    styles.push({ id: 'sans-bold', name: lang === 'tr' ? 'Sans-Serif Kalın' : 'Sans Bold', text: transform(baseText, sansBold), popular: true })
    styles.push({ id: 'serif-bold-italic', name: lang === 'tr' ? 'Kalın İtalik' : 'Bold Italic', text: transform(baseText, serifBoldItalic) })
    styles.push({ id: 'sans-bold-italic', name: lang === 'tr' ? 'Sans Kalın İtalik' : 'Sans Bold Italic', text: transform(baseText, sansBoldItalic) })
    styles.push({ id: 'script-bold', name: lang === 'tr' ? 'El Yazısı Kalın' : 'Script Bold', text: transform(baseText, scriptBold), popular: true })
    styles.push({ id: 'fraktur-bold', name: lang === 'tr' ? 'Gotik Kalın' : 'Fraktur Bold', text: transform(baseText, frakturBold) })
    styles.push({ id: 'double-struck', name: lang === 'tr' ? 'Çift Çizgili' : 'Double Struck', text: transform(baseText, doubleStruck) })
    styles.push({ id: 'neg-squared', name: lang === 'tr' ? 'Negatif Kare' : 'Negative Squared', text: transform(baseText, negativeSquared), popular: true })

    // 2. Generate decorated versions (to reach 50+)
    const coreTransforms = [
      { name: 'Bold', map: serifBold },
      { name: 'Sans', map: sansBold },
      { name: 'Italic', map: serifBoldItalic },
      { name: 'Script', map: scriptBold },
      { name: 'Double', map: doubleStruck }
    ]

    coreTransforms.forEach((ct, i) => {
      const transformedCore = transform(baseText, ct.map)
      decorations.slice(i * 9, (i + 1) * 9).forEach((dec, j) => {
        styles.push({
          id: `dec-${i}-${j}`,
          name: `${ct.name} Style ${j + 1}`,
          text: dec(transformedCore)
        })
      })
    })

    return styles.filter((style, index, self) => 
      index === self.findIndex((s) => s.text === style.text)
    ).slice(0, 58) 
  }, [inputText, lang])

  if (!mounted) return null

  return (
    <div className={`page-bold ${darkMode ? 'dark' : ''}`}>
      <Header
        lang={lang}
        setLang={setLang}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main className="main">
        {/* Full-Screen Hero Section */}
        <div className="hero-section-fullscreen">
          <div className="hero-bg-fullscreen">
            <div className="hero-gradient-animated"></div>
            <div className="hero-particles-animated">
              <div className="particle">𝐁</div>
              <div className="particle">𝗕</div>
              <div className="particle">✨</div>
              <div className="particle">🔥</div>
              <div className="particle">⚡</div>
              <div className="particle">💎</div>
            </div>
            <div className="hero-shapes-animated">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>

          <div className="hero-content-fullscreen">
            <div className="hero-badge-modern reveal">
              <span className="badge-pulse"></span>
              <span className="badge-icon">🔥</span>
              <span className="badge-text">{t.bold.hero.badge}</span>
            </div>

            <h1 className="hero-title-fullscreen reveal">
              <span className="title-line-animated">
                <span className="title-word-animated">{t.bold.hero.title}</span>
                <span className="title-word-animated highlight-gradient">{t.bold.hero.titleHighlight}</span>
              </span>
            </h1>

            <p className="hero-description-fullscreen reveal">
              {t.bold.hero.description}
            </p>

            {/* Premium Input Section */}
            <div className="hero-input-fullscreen reveal">
              <div className="input-glow-effect"></div>
              <div className="input-container-glass">
                <div className="input-header-premium">
                  <div className="input-icon-premium">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#boldGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <defs>
                        <linearGradient id="boldGrad" x1="2" y1="2" x2="22" y2="22">
                          <stop offset="0%" stopColor="#4f46e5" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="input-header-text-premium">
                    <h2>{t.bold.hero.inputTitle}</h2>
                    <p>{t.bold.hero.inputSub}</p>
                  </div>
                </div>

                <div className="input-field-premium">
                  <textarea
                    ref={inputRef}
                    className="text-input-premium"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder={t.bold.hero.inputPlaceholder}
                    rows={2}
                    maxLength={500}
                    spellCheck={false}
                  />
                  {inputText && (
                    <button
                      className="clear-btn-premium"
                      onClick={() => setInputText('')}
                      aria-label={t.common.clear}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </button>
                  )}
                </div>

                <div className="input-footer-premium">
                   <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button
                      onClick={() => handleCopy('ㅤ', 'invis')}
                      className="char-badge-premium"
                      style={{ cursor: 'pointer', background: copiedId === 'invis' ? 'rgba(34, 197, 94, 0.2)' : '', borderColor: copiedId === 'invis' ? '#22c55e' : '' }}
                    >
                      {lang === 'tr' ? 'Görünmez Boşluk' : 'Invisible Space'}
                    </button>
                   </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="hero-stats-fullscreen reveal">
               <div className="stat-item-premium">
                <div className="stat-icon">✨</div>
                <div className="stat-content">
                  <span className="stat-number-premium">50+</span>
                  <span className="stat-label-premium">{t.bold.hero.stat1}</span>
                </div>
              </div>
              <div className="stat-divider-premium"></div>
              <div className="stat-item-premium">
                <div className="stat-icon">📱</div>
                <div className="stat-content">
                  <span className="stat-number-premium">10+</span>
                  <span className="stat-label-premium">{t.bold.hero.stat2}</span>
                </div>
              </div>
              <div className="stat-divider-premium"></div>
              <div className="stat-item-premium">
                <div className="stat-icon">🇹🇷</div>
                <div className="stat-content">
                  <span className="stat-number-premium">TR</span>
                  <span className="stat-label-premium">{t.bold.hero.stat3}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="container" style={{ marginTop: '2rem', paddingBottom: '4rem' }}>
          <div className="font-grid">
            {boldStyles.map((style) => (
              <div key={style.id} className={`font-card-v3 reveal ${style.popular ? 'popular' : ''}`}>
                <div className="font-card-header-v3">
                  <span className="font-name-v3">
                    {style.name}
                    {style.popular && <span className="popular-badge-v3">🔥</span>}
                  </span>
                </div>
                <div className="font-preview-v3">{style.text}</div>
                <button
                  className={`copy-btn-v3 ${copiedId === style.id ? 'copied' : ''}`}
                  onClick={() => handleCopy(style.text, style.id)}
                >
                  <span className="copy-btn-text">
                    {copiedId === style.id ? t.common.copied : t.common.copy}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Copy Toast */}
      <div className={`toast-premium ${showToast ? 'show' : ''}`}>
        <div className="toast-content">
          <span className="toast-icon">✓</span>
          <span className="toast-text">{t.common.copied}</span>
        </div>
      </div>

      {/* Article Content Section */}
      <div className="container" style={{ marginTop: '2rem' }}>
        <h2 className="section-main-title reveal" style={{ marginBottom: '2rem' }}>{lang === 'tr' ? 'Kalın Yazı Stili (Kalın Metni Kopyalayıp Yapıştırın)' : 'Bold Text Style (Copy and Paste Bold Text)'}</h2>
        
        <div className="info-box reveal" style={{ marginBottom: '2rem' }}>
          <div className="content-intro">
            <p className="intro-text">
              {lang === 'tr' 
                ? 'Birçok kişi kullanıcı adlarının, biyografilerinin veya mesajlarının sosyal medyada öne çıkmasını ister. Ancak telefonlarında veya bilgisayarlarında kalın yazı yazmaya çalıştıklarında, klavye sadece normal harfleri gösterir. Bu durum, özellikle Instagram veya diğer platformlarda şık kalın yazılar gördüğünüzde ve insanların bunu nasıl oluşturduğunu bilmediğinizde sinir bozucu olabilir.'
                : 'Many people want their usernames, bios, or messages to stand out on social media. But when they try to type bold text on their phone or computer, the keyboard only shows normal letters. This can feel frustrating, especially when you see stylish bold text on Instagram or other platforms and don’t know how people create it.'}
            </p>
            <p className="intro-text">
              {lang === 'tr'
                ? 'Çevrimiçi profiller için farklı metin stillerini test ederken aynı sorunu ben de yaşadım. Bu yüzden yazi stilleri pro üzerinde basit bir çözüm oluşturduk. Aracımız, normal metni saniyeler içinde her yere kopyalayıp yapıştırabileceğiniz kalın yazı stillerine dönüştürür.'
                : 'I experienced the same issue when testing different text styles for online profiles. That is why we created a simple solution on yazi stilleri pro. Our tool converts normal text into bold text styles that you can copy and paste anywhere in seconds.'}
            </p>
          </div>
        </div>

        <SeoSections sections={articleSections} />
        
        <FaqAccordion 
          title={lang === 'tr' ? 'Sıkça Sorulan Sorular' : 'Frequently Asked Questions'} 
          faqs={faqs} 
        />

        <div className="info-box reveal" style={{ marginTop: '3rem', marginBottom: '4rem' }}>
          <h2 className="section-main-title">{lang === 'tr' ? 'Sonuç' : 'Conclusion'}</h2>
          <div className="content-intro">
            <p className="intro-text">
              {lang === 'tr' 
                ? 'Birçok font oluşturucuyu test ettikten ve insanların çevrimiçi olarak şık metinleri nasıl kullandığını inceledikten sonra, bir şey netleşiyor. Kullanıcılar kullanıcı adları, biyografileri ve mesajları için kalın yazı oluşturmanın hızlı ve basit bir yolunu istiyor. İyi bir oluşturucu, teknik işleri ortadan kaldırır ve herkesin anında şık metinler oluşturmasını sağlar.' 
                : 'After testing many font generators and studying how people use stylish text online, one thing becomes clear. Users want a quick and simple way to create bold text for their usernames, bios, and messages. A good generator removes the technical work and lets anyone create stylish text instantly.'}
            </p>
            <p className="intro-text" dangerouslySetInnerHTML={{ 
              __html: lang === 'tr'
                ? '<a href="/" style="color: var(--primary-color); font-weight: 700; text-decoration: none; border-bottom: 2px solid var(--primary-light);">Yazi stilleri pro</a> olarak hedefimiz, metin özelleştirmeyi herkes için kolaylaştırmaktır. Doğru kalın yazı stiliyle, sözleriniz sosyal platformlarda daha dikkat çekici ve unutulmaz hale gelebilir. Farklı kalın stilleri deneyin, beğendiğinizi kopyalayın ve metninizi öne çıkarın.'
                : 'Our goal at <a href="/" style="color: var(--primary-color); font-weight: 700; text-decoration: none; border-bottom: 2px solid var(--primary-light);">yazi stilleri pro</a> is to make text styling easy for everyone. With the right bold text style, your words can become more noticeable and memorable across social platforms. Try different bold styles, copy the one you like, and make your text stand out.'
            }} />
          </div>
        </div>
      </div>

      <Footer lang={lang} />

      <style jsx global>{`
        .page-bold {
          min-height: 100vh;
          background: #f8fafc; /* Light slate background to match homepage */
        }
        
        .dark .page-bold {
          background: #0f172a;
        }

        .font-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 1.5rem;
          padding: 2rem 0;
        }

        @media (max-width: 768px) {
          .font-grid {
            grid-template-columns: 1fr;
            padding: 1rem;
          }
        }

        /* Homepage Consistency Styles (Light Mode) */
        .font-card-v3 {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          padding: 12px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          transition: all 0.2s ease;
        }

        .font-card-v3.popular {
          background: #fffbeb;
          border-color: #fbbf24;
        }

        .dark .font-card-v3 {
          background: #1e293b;
          border-color: #334155;
        }
        
        .dark .font-card-v3.popular {
          background: #78350f20;
          border-color: #d97706;
        }

        .font-card-header-v3 {
          color: #0f172a;
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .dark .font-card-header-v3 {
          color: #f8fafc;
        }

        .font-preview-v3 {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          padding: 16px;
          text-align: center;
          color: #0f172a;
          font-size: 1.5rem;
          margin-bottom: 10px;
          min-height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          word-break: break-all;
          transition: all 0.2s ease;
        }

        .dark .font-preview-v3 {
          background: #0f172a;
          border-color: #334155;
          color: #f8fafc;
        }

        .copy-btn-v3 {
          background: #ffffff;
          border: 1px solid #4f46e5;
          border-radius: 6px;
          color: #4f46e5;
          font-size: 14px;
          font-weight: 600;
          padding: 10px 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.2s ease;
          width: 100%; /* Wide button like homepage */
        }

        .dark .copy-btn-v3 {
          background: #0f172a;
          border-color: #6366f1;
          color: #818cf8;
        }

        .copy-btn-v3:hover {
          background: #eef2ff;
          transform: translateY(-1px);
        }

        .dark .copy-btn-v3:hover {
          background: #4f46e520;
        }

        .copy-btn-v3.copied {
          background: #f0fdf4;
          border-color: #22c55e;
          color: #16a34a;
        }

        .dark .copy-btn-v3.copied {
          background: #14532d40;
          border-color: #4ade80;
          color: #4ade80;
        }

        @media (max-width: 480px) {
          .font-grid {
            padding: 0.5rem;
            gap: 1rem;
          }
          .copy-btn-v3 {
            padding: 12px 16px;
          }
          .font-preview-v3 {
            font-size: 1.25rem;
            padding: 16px 12px;
          }
        }
      `}</style>
    </div>
  )
}
