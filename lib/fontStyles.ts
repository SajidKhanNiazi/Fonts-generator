// Font style transformations with Turkish character support
// All transformations preserve Turkish characters: ç, ğ, ı, İ, ö, ş, ü

export interface FontStyle {
  id: string;
  name: string;
  description: string;
  category: string;
  transform: (text: string) => string;
  popular?: boolean;
  platforms?: string[];
}

// Helper function to transform text using a mapping
function transformText(text: string, mapping: Record<string, string>): string {
  return text
    .split('')
    .map(char => mapping[char] || char)
    .join('');
}

// Helper function to preserve Turkish characters
const turkishChars = ['ç', 'ğ', 'ı', 'İ', 'ö', 'ş', 'ü', 'Ç', 'Ğ', 'Ö', 'Ş', 'Ü'];

// ========== TEXT VARIATIONS ==========

// Bold mappings
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
};

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
};

// Bold Italic mappings
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
};

// Small Caps mappings
const smallCapsMappings: Record<string, string> = {
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
};

// ========== FANCY UNICODE STYLES ==========

// Script (Cursive) mappings
const scriptMappings: Record<string, string> = {
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
};

// Gothic (Fraktur) mappings
const frakturMappings: Record<string, string> = {
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
};

// Double-Struck mappings
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
};

// Monospace mappings
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
};

// Boxed Text (Squared) mappings
const boxedMappings: Record<string, string> = {
  'a': '🄰', 'b': '🄱', 'c': '🄲', 'd': '🄳', 'e': '🄴', 'f': '🄵', 'g': '🄶',
  'h': '🄷', 'i': '🄸', 'j': '🄹', 'k': '🄺', 'l': '🄻', 'm': '🄼', 'n': '🄽',
  'o': '🄾', 'p': '🄿', 'q': '🅀', 'r': '🅁', 's': '🅂', 't': '🅃', 'u': '🅄',
  'v': '🅅', 'w': '🅆', 'x': '🅇', 'y': '🅈', 'z': '🅉',
  'A': '🄰', 'B': '🄱', 'C': '🄲', 'D': '🄳', 'E': '🄴', 'F': '🄵', 'G': '🄶',
  'H': '🄷', 'I': '🄸', 'J': '🄹', 'K': '🄺', 'L': '🄻', 'M': '🄼', 'N': '🄽',
  'O': '🄾', 'P': '🄿', 'Q': '🅀', 'R': '🅁', 'S': '🅂', 'T': '🅃', 'U': '🅄',
  'V': '🅅', 'W': '🅆', 'X': '🅇', 'Y': '🅈', 'Z': '🅉',
  'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü',
  'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
};

// Circled Text mappings
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
};

// Bubble Text (Fullwidth) mappings
const bubbleMappings: Record<string, string> = {
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
};

// ========== SOCIAL MEDIA STYLES ==========

// Aesthetic (Fancy Small Caps)
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
};

// Cute (Wide Spacing)
function cuteTransform(text: string): string {
  return text.split('').join(' ');
}

// Stylish Nickname (Squared + Bold)
function stylishNicknameTransform(text: string): string {
  const bold = transformText(text, boldMappings);
  return bold.split('').map(char => {
    if (turkishChars.includes(char)) return char;
    const boxed = boxedMappings[char.toLowerCase()] || char;
    return boxed;
  }).join('');
}

// ========== WHATSAPP & FACEBOOK SAFE STYLES ==========

// Clean Unicode (Simple Bold - most compatible)
const cleanBoldMappings: Record<string, string> = {
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
};

// Tier 1 - Stylish Script (Mathematical Bold Script)
const stylishScriptMappings: Record<string, string> = {
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
};

// Tier 1 - Smooth Script (Mathematical Script)
const smoothScriptMappings: Record<string, string> = {
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
};

// Tier 1 - Elegant Text (Mathematical Bold Script - same as Stylish Script)
const elegantTextMappings: Record<string, string> = stylishScriptMappings;

// Tier 1 - Classy Script (Mathematical Bold Script)
const classyScriptMappings: Record<string, string> = stylishScriptMappings;

// Tier 1 - Fancy Serif (Mathematical Bold Fraktur)
const fancySerifMappings: Record<string, string> = {
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
};

// Tier 1 - Cursive Light (Mathematical Script - same as Smooth Script)
const cursiveLightMappings: Record<string, string> = smoothScriptMappings;

// Tier 1 - Modern Script (Mathematical Bold Script)
const modernScriptMappings: Record<string, string> = stylishScriptMappings;

// Tier 2 - Modern Sans (Mathematical Sans-Serif Bold)
const modernSansMappings: Record<string, string> = {
  'a': '𝖺', 'b': '𝖻', 'c': '𝖼', 'd': '𝖽', 'e': '𝖾', 'f': '𝖿', 'g': '𝗀',
  'h': '𝗁', 'i': '𝗂', 'j': '𝗃', 'k': '𝗄', 'l': '𝗅', 'm': '𝗆', 'n': '𝗇',
  'o': '𝗈', 'p': '𝗉', 'q': '𝗊', 'r': '𝗋', 's': '𝗌', 't': '𝗍', 'u': '𝗎',
  'v': '𝗏', 'w': '𝗐', 'x': '𝗑', 'y': '𝗒', 'z': '𝗓',
  'A': '𝖠', 'B': '𝖡', 'C': '𝖢', 'D': '𝖣', 'E': '𝖤', 'F': '𝖥', 'G': '𝖦',
  'H': '𝖧', 'I': '𝖨', 'J': '𝖩', 'K': '𝖪', 'L': '𝖫', 'M': '𝖬', 'N': '𝖭',
  'O': '𝖮', 'P': '𝖯', 'Q': '𝖰', 'R': '𝖱', 'S': '𝖲', 'T': '𝖳', 'U': '𝖴',
  'V': '𝖵', 'W': '𝖶', 'X': '𝖷', 'Y': '𝖸', 'Z': '𝖹',
  'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü',
  'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
};

// Tier 2 - Stylish Sans (Mathematical Sans-Serif Bold Italic)
const stylishSansMappings: Record<string, string> = {
  'a': '𝙖', 'b': '𝙗', 'c': '𝙘', 'd': '𝙙', 'e': '𝙚', 'f': '𝙛', 'g': '𝙜',
  'h': '𝙝', 'i': '𝙞', 'j': '𝙟', 'k': '𝙠', 'l': '𝙡', 'm': '𝙢', 'n': '𝙣',
  'o': '𝙤', 'p': '𝙥', 'q': '𝙦', 'r': '𝙧', 's': '𝙨', 't': '𝙩', 'u': '𝙪',
  'v': '𝙫', 'w': '𝙬', 'x': '𝙭', 'y': '𝙮', 'z': '𝙯',
  'A': '𝘼', 'B': '𝘽', 'C': '𝘾', 'D': '𝘿', 'E': '𝙀', 'F': '𝙁', 'G': '𝙂',
  'H': '𝙃', 'I': '𝙄', 'J': '𝙅', 'K': '𝙆', 'L': '𝙇', 'M': '𝙈', 'N': '𝙉',
  'O': '𝙊', 'P': '𝙋', 'Q': '𝙌', 'R': '𝙍', 'S': '𝙎', 'T': '𝙏', 'U': '𝙐',
  'V': '𝙑', 'W': '𝙒', 'X': '𝙓', 'Y': '𝙔', 'Z': '𝙕',
  'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü',
  'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
};

// Tier 2 - Clean Fancy (Mathematical Sans-Serif)
const cleanFancyMappings: Record<string, string> = {
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
};

// Tier 2 - Elegant Sans (Mathematical Sans-Serif Italic)
const elegantSansMappings: Record<string, string> = {
  'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦', 'f': '𝘧', 'g': '𝘨',
  'h': '𝘩', 'i': '𝘪', 'j': '𝘫', 'k': '𝘬', 'l': '𝘭', 'm': '𝘮', 'n': '𝘯',
  'o': '𝘰', 'p': '𝘱', 'q': '𝘲', 'r': '𝘳', 's': '𝘴', 't': '𝘵', 'u': '𝘶',
  'v': '𝘷', 'w': '𝘸', 'x': '𝘹', 'y': '𝘺', 'z': '𝘻',
  'A': '𝘈', 'B': '𝘉', 'C': '𝘊', 'D': '𝘋', 'E': '𝘌', 'F': '𝘍', 'G': '𝘎',
  'H': '𝘏', 'I': '𝘐', 'J': '𝘑', 'K': '𝘒', 'L': '𝘓', 'M': '𝘔', 'N': '𝘕',
  'O': '𝘖', 'P': '𝘗', 'Q': '𝘘', 'R': '𝘙', 'S': '𝘚', 'T': '𝘛', 'U': '𝘜',
  'V': '𝘝', 'W': '𝘞', 'X': '𝘟', 'Y': '𝘠', 'Z': '𝘡',
  'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü',
  'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
};

// Tier 2 - Soft Serif (Mathematical Bold Fraktur - same as Fancy Serif)
const softSerifMappings: Record<string, string> = fancySerifMappings;

// Tier 3 - Aesthetic Light (Mathematical Bold Script)
const aestheticLightMappings: Record<string, string> = stylishScriptMappings;

// Tier 3 - Sleek Text (Mathematical Script)
const sleekTextMappings: Record<string, string> = smoothScriptMappings;

// Tier 3 - Styled Clean (Mathematical Bold Script)
const styledCleanMappings: Record<string, string> = stylishScriptMappings;

// ========== SOCIAL MEDIA STYLES (Trendy & Attractive) ==========

// Stylish Script for Social Media (Mathematical Bold Script)
const socialStylishScriptMappings: Record<string, string> = {
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
};

// Fancy Script for Social Media (Mathematical Bold Script - same as Stylish)
const socialFancyScriptMappings: Record<string, string> = socialStylishScriptMappings;

// Cursive Style for Social Media (Mathematical Script)
const socialCursiveStyleMappings: Record<string, string> = {
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
};

// Classy Text for Social Media (Double-Struck)
const socialClassyTextMappings: Record<string, string> = {
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
};

// Aesthetic Script for Social Media (Mathematical Script - lighter)
const socialAestheticScriptMappings: Record<string, string> = socialCursiveStyleMappings;

// Sleek Script for Social Media (Mathematical Bold Script)
const socialSleekScriptMappings: Record<string, string> = socialStylishScriptMappings;

// Elegant Style for Social Media (Mathematical Bold Italic)
const socialElegantStyleMappings: Record<string, string> = {
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
};

// Modern Fancy for Social Media (Mathematical Sans-Serif Bold)
const socialModernFancyMappings: Record<string, string> = {
  'a': '𝖺', 'b': '𝖻', 'c': '𝖼', 'd': '𝖽', 'e': '𝖾', 'f': '𝖿', 'g': '𝗀',
  'h': '𝗁', 'i': '𝗂', 'j': '𝗃', 'k': '𝗄', 'l': '𝗅', 'm': '𝗆', 'n': '𝗇',
  'o': '𝗈', 'p': '𝗉', 'q': '𝗊', 'r': '𝗋', 's': '𝗌', 't': '𝗍', 'u': '𝗎',
  'v': '𝗏', 'w': '𝗐', 'x': '𝗑', 'y': '𝗒', 'z': '𝗓',
  'A': '𝖠', 'B': '𝖡', 'C': '𝖢', 'D': '𝖣', 'E': '𝖤', 'F': '𝖥', 'G': '𝖦',
  'H': '𝖧', 'I': '𝖨', 'J': '𝖩', 'K': '𝖪', 'L': '𝖫', 'M': '𝖬', 'N': '𝖭',
  'O': '𝖮', 'P': '𝖯', 'Q': '𝖰', 'R': '𝖱', 'S': '𝖲', 'T': '𝖳', 'U': '𝖴',
  'V': '𝖵', 'W': '𝖶', 'X': '𝖷', 'Y': '𝖸', 'Z': '𝖹',
  'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü',
  'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
};

// Stylish Sans for Social Media (Mathematical Sans-Serif Bold Italic)
const socialStylishSansMappings: Record<string, string> = {
  'a': '𝙖', 'b': '𝙗', 'c': '𝙘', 'd': '𝙙', 'e': '𝙚', 'f': '𝙛', 'g': '𝙜',
  'h': '𝙝', 'i': '𝙞', 'j': '𝙟', 'k': '𝙠', 'l': '𝙡', 'm': '𝙢', 'n': '𝙣',
  'o': '𝙤', 'p': '𝙥', 'q': '𝙦', 'r': '𝙧', 's': '𝙨', 't': '𝙩', 'u': '𝙪',
  'v': '𝙫', 'w': '𝙬', 'x': '𝙭', 'y': '𝙮', 'z': '𝙯',
  'A': '𝘼', 'B': '𝘽', 'C': '𝘾', 'D': '𝘿', 'E': '𝙀', 'F': '𝙁', 'G': '𝙂',
  'H': '𝙃', 'I': '𝙄', 'J': '𝙅', 'K': '𝙆', 'L': '𝙇', 'M': '𝙈', 'N': '𝙉',
  'O': '𝙊', 'P': '𝙋', 'Q': '𝙌', 'R': '𝙍', 'S': '𝙎', 'T': '𝙏', 'U': '𝙐',
  'V': '𝙑', 'W': '𝙒', 'X': '𝙓', 'Y': '𝙔', 'Z': '𝙕',
  'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü',
  'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
};

// Cute Text for Social Media (Wide spacing)
function socialCuteTextTransform(text: string): string {
  return text.split('').join(' ');
}

// ========== INSTAGRAM FONTS (Decorative & Viral) ==========

// Fancy Script (Mathematical Bold Script - decorative)
const instagramFancyScriptMappings: Record<string, string> = {
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
};

// Stylish Script (Mathematical Bold Script - same as Fancy)
const instagramStylishScriptMappings: Record<string, string> = instagramFancyScriptMappings;

// Aesthetic Script (Mathematical Script - lighter)
const instagramAestheticScriptMappings: Record<string, string> = {
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
};

// Classy Text (Double-Struck - elegant)
const instagramClassyTextMappings: Record<string, string> = {
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
};

// Gothic Fancy (Fraktur - decorative)
const instagramGothicFancyMappings: Record<string, string> = {
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
};

// Boxed Fancy (Squared - decorative)
const instagramBoxedFancyMappings: Record<string, string> = {
  'a': '🄰', 'b': '🄱', 'c': '🄲', 'd': '🄳', 'e': '🄴', 'f': '🄵', 'g': '🄶',
  'h': '🄷', 'i': '🄸', 'j': '🄹', 'k': '🄺', 'l': '🄻', 'm': '🄼', 'n': '🄽',
  'o': '🄾', 'p': '🄿', 'q': '🅀', 'r': '🅁', 's': '🅂', 't': '🅃', 'u': '🅄',
  'v': '🅅', 'w': '🅆', 'x': '🅇', 'y': '🅈', 'z': '🅉',
  'A': '🄰', 'B': '🄱', 'C': '🄲', 'D': '🄳', 'E': '🄴', 'F': '🄵', 'G': '🄶',
  'H': '🄷', 'I': '🄸', 'J': '🄹', 'K': '🄺', 'L': '🄻', 'M': '🄼', 'N': '🄽',
  'O': '🄾', 'P': '🄿', 'Q': '🅀', 'R': '🅁', 'S': '🅂', 'T': '🅃', 'U': '🅄',
  'V': '🅅', 'W': '🅆', 'X': '🅇', 'Y': '🅈', 'Z': '🅉',
  'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü',
  'Ç': 'Ç', 'Ğ': 'Ğ', 'Ö': 'Ö', 'Ş': 'Ş', 'Ü': 'Ü',
};

// Circled Fancy (Circled - decorative)
const instagramCircledFancyMappings: Record<string, string> = {
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
};

// Cute Text (Wide spacing with decorative elements)
function instagramCuteTextTransform(text: string): string {
  return text.split('').join(' ');
}

// Sparkle Text (With sparkle emojis)
function instagramSparkleTextTransform(text: string): string {
  return `✨ ${text.split('').join(' ✨ ')} ✨`;
}

// ========== EMOJI-BASED FONTS ==========

// Emoji with star borders
function starBorderTransform(text: string): string {
  return `⭐ ${text} ⭐`;
}

// Emoji with heart borders
function heartBorderTransform(text: string): string {
  return `💖 ${text} 💖`;
}

// Emoji with sparkles
function sparkleTransform(text: string): string {
  return `✨ ${text} ✨`;
}

// Emoji with fire (trending style)
function fireTransform(text: string): string {
  return `🔥 ${text} 🔥`;
}

// Emoji with star separators between words
function starSeparatorTransform(text: string): string {
  return text.split(' ').join(' ⭐ ');
}

// Emoji with heart separators
function heartSeparatorTransform(text: string): string {
  return text.split(' ').join(' ❤️ ');
}

// Emoji with sparkle separators
function sparkleSeparatorTransform(text: string): string {
  return text.split(' ').join(' ✨ ');
}

// Emoji with arrow decorations
function arrowTransform(text: string): string {
  return `➜ ${text} ➜`;
}

// Emoji with checkmark style
function checkmarkTransform(text: string): string {
  return `✅ ${text} ✅`;
}

// Emoji with crown (premium style)
function crownTransform(text: string): string {
  return `👑 ${text} 👑`;
}

// Emoji with rainbow (colorful style)
function rainbowTransform(text: string): string {
  return `🌈 ${text} 🌈`;
}

// Emoji with lightning (energy style)
function lightningTransform(text: string): string {
  return `⚡ ${text} ⚡`;
}

// Emoji with flower borders
function flowerTransform(text: string): string {
  return `🌸 ${text} 🌸`;
}

// Emoji with moon and stars
function moonStarTransform(text: string): string {
  return `🌙 ${text} ⭐`;
}

// Emoji with party style
function partyTransform(text: string): string {
  return `🎉 ${text} 🎉`;
}

// Emoji with music notes
function musicTransform(text: string): string {
  return `🎵 ${text} 🎵`;
}

// Emoji with trophy (winner style)
function trophyTransform(text: string): string {
  return `🏆 ${text} 🏆`;
}

// Emoji with diamond (luxury style)
function diamondTransform(text: string): string {
  return `💎 ${text} 💎`;
}

// Emoji with rocket (success style)
function rocketTransform(text: string): string {
  return `🚀 ${text} 🚀`;
}

// Emoji with butterfly (aesthetic style)
function butterflyTransform(text: string): string {
  return `🦋 ${text} 🦋`;
}

// Emoji with sun (bright style)
function sunTransform(text: string): string {
  return `☀️ ${text} ☀️`;
}

// Emoji with rainbow heart
function rainbowHeartTransform(text: string): string {
  return `💝 ${text} 💝`;
}

// Emoji with starry background (repeating stars)
function starryBackgroundTransform(text: string): string {
  return `⭐ ${text.split('').join(' ⭐ ')} ⭐`;
}

// Emoji with heart background
function heartBackgroundTransform(text: string): string {
  return `❤️ ${text.split('').join(' ❤️ ')} ❤️`;
}

// Emoji with sparkle background
function sparkleBackgroundTransform(text: string): string {
  return `✨ ${text.split('').join(' ✨ ')} ✨`;
}

// ========== TURKISH CULTURAL STYLES ==========

// Nazar Boncuğu (Evil Eye) - Turkish protection symbol
function nazarBoncuguTransform(text: string): string {
  return `🧿 ${text} 🧿`;
}

// Nazar Boncuğu with separators
function nazarSeparatorTransform(text: string): string {
  return text.split(' ').join(' 🧿 ');
}

// Nazar Boncuğu background
function nazarBackgroundTransform(text: string): string {
  return `🧿 ${text.split('').join(' 🧿 ')} 🧿`;
}

// Turkish Flag style
function turkishFlagTransform(text: string): string {
  return `🇹🇷 ${text} 🇹🇷`;
}

// Turkish Flag with moon and star
function turkishMoonStarTransform(text: string): string {
  return `☪️ ${text} ⭐`;
}

// Turkish Flag separators
function turkishFlagSeparatorTransform(text: string): string {
  return text.split(' ').join(' 🇹🇷 ');
}

// Tulip (Lale) - Turkish national flower
function tulipTransform(text: string): string {
  return `🌷 ${text} 🌷`;
}

// Tulip separator
function tulipSeparatorTransform(text: string): string {
  return text.split(' ').join(' 🌷 ');
}

// Tulip background
function tulipBackgroundTransform(text: string): string {
  return `🌷 ${text.split('').join(' 🌷 ')} 🌷`;
}

// Turkish Coffee style
function turkishCoffeeTransform(text: string): string {
  return `☕ ${text} ☕`;
}

// Turkish Coffee with fincan
function coffeeCupTransform(text: string): string {
  return `☕ ${text} 🫖`;
}

// Turkish Delight style
function turkishDelightTransform(text: string): string {
  return `🍬 ${text} 🍬`;
}

// ========== TEXT EFFECT STYLES ==========

// Strikethrough text using combining character
function strikethroughTransform(text: string): string {
  return text.split('').map(char => char + '\u0336').join('');
}

// Underline text using combining character
function underlineTransform(text: string): string {
  return text.split('').map(char => char + '\u0332').join('');
}

// Double underline
function doubleUnderlineTransform(text: string): string {
  return text.split('').map(char => char + '\u0333').join('');
}

// Inverted/Upside Down text mappings
const invertedMappings: Record<string, string> = {
  'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ',
  'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u',
  'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n',
  'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z',
  'A': '∀', 'B': 'ꓭ', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': '⅁',
  'H': 'H', 'I': 'I', 'J': 'ſ', 'K': 'ꓘ', 'L': '˥', 'M': 'W', 'N': 'N',
  'O': 'O', 'P': 'Ԁ', 'Q': 'Q', 'R': 'ꓤ', 'S': 'S', 'T': '⊥', 'U': '∩',
  'V': 'Λ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z',
  '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ', '5': 'ϛ', '6': '9', '7': 'ㄥ',
  '8': '8', '9': '6', '0': '0',
  '?': '¿', '!': '¡', '.': '˙', ',': '\'', '\'': ',', '"': '„',
  '(': ')', ')': '(', '[': ']', ']': '[', '{': '}', '}': '{',
  '<': '>', '>': '<', '&': '⅋', '_': '‾',
  'ç': 'ɔ̧', 'ğ': 'ƃ̆', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 's̨', 'ü': 'ü',
  'Ç': 'Ɔ̧', 'Ğ': '⅁̆', 'Ö': 'Ö', 'Ş': 'S̨', 'Ü': 'Ü',
};

function invertedTransform(text: string): string {
  return text.split('').reverse().map(char => invertedMappings[char] || char).join('');
}

// Subscript mappings
const subscriptMappings: Record<string, string> = {
  'a': 'ₐ', 'e': 'ₑ', 'h': 'ₕ', 'i': 'ᵢ', 'j': 'ⱼ', 'k': 'ₖ', 'l': 'ₗ',
  'm': 'ₘ', 'n': 'ₙ', 'o': 'ₒ', 'p': 'ₚ', 'r': 'ᵣ', 's': 'ₛ', 't': 'ₜ',
  'u': 'ᵤ', 'v': 'ᵥ', 'x': 'ₓ',
  '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
  '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
  '+': '₊', '-': '₋', '=': '₌', '(': '₍', ')': '₎',
};

function subscriptTransform(text: string): string {
  return text.toLowerCase().split('').map(char => subscriptMappings[char] || char).join('');
}

// Superscript mappings
const superscriptMappings: Record<string, string> = {
  'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ', 'f': 'ᶠ', 'g': 'ᵍ',
  'h': 'ʰ', 'i': 'ⁱ', 'j': 'ʲ', 'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ',
  'o': 'ᵒ', 'p': 'ᵖ', 'r': 'ʳ', 's': 'ˢ', 't': 'ᵗ', 'u': 'ᵘ', 'v': 'ᵛ',
  'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ',
  'A': 'ᴬ', 'B': 'ᴮ', 'D': 'ᴰ', 'E': 'ᴱ', 'G': 'ᴳ', 'H': 'ᴴ', 'I': 'ᴵ',
  'J': 'ᴶ', 'K': 'ᴷ', 'L': 'ᴸ', 'M': 'ᴹ', 'N': 'ᴺ', 'O': 'ᴼ', 'P': 'ᴾ',
  'R': 'ᴿ', 'T': 'ᵀ', 'U': 'ᵁ', 'V': 'ⱽ', 'W': 'ᵂ',
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
  '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
  '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾',
};

function superscriptTransform(text: string): string {
  return text.split('').map(char => superscriptMappings[char] || char).join('');
}

// Negative Squared (Black boxes) mappings
const negativeSquaredMappings: Record<string, string> = {
  'a': '🅰', 'b': '🅱', 'c': '🅲', 'd': '🅳', 'e': '🅴', 'f': '🅵', 'g': '🅶',
  'h': '🅷', 'i': '🅸', 'j': '🅹', 'k': '🅺', 'l': '🅻', 'm': '🅼', 'n': '🅽',
  'o': '🅾', 'p': '🅿', 'q': '🆀', 'r': '🆁', 's': '🆂', 't': '🆃', 'u': '🆄',
  'v': '🆅', 'w': '🆆', 'x': '🆇', 'y': '🆈', 'z': '🆉',
  'A': '🅰', 'B': '🅱', 'C': '🅲', 'D': '🅳', 'E': '🅴', 'F': '🅵', 'G': '🅶',
  'H': '🅷', 'I': '🅸', 'J': '🅹', 'K': '🅺', 'L': '🅻', 'M': '🅼', 'N': '🅽',
  'O': '🅾', 'P': '🅿', 'Q': '🆀', 'R': '🆁', 'S': '🆂', 'T': '🆃', 'U': '🆄',
  'V': '🆅', 'W': '🆆', 'X': '🆇', 'Y': '🆈', 'Z': '🆉',
};

function negativeSquaredTransform(text: string): string {
  return text.split('').map(char => negativeSquaredMappings[char] || char).join('');
}

// Glitch/Zalgo text - adds combining diacritical marks
const zalgoUp = ['\u030d', '\u030e', '\u0304', '\u0305', '\u033f', '\u0311', '\u0306', '\u0310', '\u0352', '\u0357', '\u0351', '\u0307', '\u0308', '\u030a', '\u0342', '\u0343', '\u0344', '\u034a', '\u034b', '\u034c', '\u0303', '\u0302', '\u030c', '\u0350', '\u0300', '\u0301', '\u030b', '\u030f', '\u0312', '\u0313', '\u0314', '\u033d', '\u0309', '\u0363', '\u0364', '\u0365', '\u0366', '\u0367', '\u0368', '\u0369', '\u036a', '\u036b', '\u036c', '\u036d', '\u036e', '\u036f', '\u033e', '\u035b'];
const zalgoMiddle = ['\u0315', '\u031b', '\u0340', '\u0341', '\u0358', '\u0321', '\u0322', '\u0327', '\u0328', '\u0334', '\u0335', '\u0336', '\u034f', '\u035c', '\u035d', '\u035e', '\u035f', '\u0360', '\u0362', '\u0338', '\u0337'];
const zalgoDown = ['\u0316', '\u0317', '\u0318', '\u0319', '\u031c', '\u031d', '\u031e', '\u031f', '\u0320', '\u0324', '\u0325', '\u0326', '\u0329', '\u032a', '\u032b', '\u032c', '\u032d', '\u032e', '\u032f', '\u0330', '\u0331', '\u0332', '\u0333', '\u0339', '\u033a', '\u033b', '\u033c', '\u0345', '\u0347', '\u0348', '\u0349', '\u034d', '\u034e', '\u0353', '\u0354', '\u0355', '\u0356', '\u0359', '\u035a', '\u0323'];

// Deterministic pseudo-random based on character code and position
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

function glitchTransform(text: string): string {
  return text.split('').map((char, index) => {
    if (char === ' ') return char;
    const charCode = char.charCodeAt(0);
    const baseSeed = charCode * 100 + index;
    let result = char;
    
    // Add 1-3 marks above (deterministic)
    const upCount = Math.floor(seededRandom(baseSeed) * 3) + 1;
    for (let i = 0; i < upCount; i++) {
      const upIndex = Math.floor(seededRandom(baseSeed + i * 10) * zalgoUp.length);
      result += zalgoUp[upIndex];
    }
    
    // Add 0-2 marks in middle (deterministic)
    const midCount = Math.floor(seededRandom(baseSeed + 50) * 2);
    for (let i = 0; i < midCount; i++) {
      const midIndex = Math.floor(seededRandom(baseSeed + 50 + i * 10) * zalgoMiddle.length);
      result += zalgoMiddle[midIndex];
    }
    
    // Add 1-3 marks below (deterministic)
    const downCount = Math.floor(seededRandom(baseSeed + 100) * 3) + 1;
    for (let i = 0; i < downCount; i++) {
      const downIndex = Math.floor(seededRandom(baseSeed + 100 + i * 10) * zalgoDown.length);
      result += zalgoDown[downIndex];
    }
    
    return result;
  }).join('');
}

// Light Glitch (less intense) - deterministic version
function lightGlitchTransform(text: string): string {
  return text.split('').map((char, index) => {
    if (char === ' ') return char;
    const charCode = char.charCodeAt(0);
    const baseSeed = charCode * 50 + index;
    let result = char;
    
    // Add 0-1 marks above (deterministic)
    if (seededRandom(baseSeed) > 0.5) {
      const upIndex = Math.floor(seededRandom(baseSeed + 10) * zalgoUp.length);
      result += zalgoUp[upIndex];
    }
    
    // Add 0-1 marks below (deterministic)
    if (seededRandom(baseSeed + 20) > 0.5) {
      const downIndex = Math.floor(seededRandom(baseSeed + 30) * zalgoDown.length);
      result += zalgoDown[downIndex];
    }
    
    return result;
  }).join('');
}

// Wavy text using combining tilde
function wavyTransform(text: string): string {
  return text.split('').map(char => char + '\u0303').join('');
}

// Dotted text
function dottedTransform(text: string): string {
  return text.split('').map(char => char + '\u0307').join('');
}

// ========== NEW UNICODE MAPPINGS ==========

// Parenthesized Letters mappings
const parenthesizedMappings: Record<string, string> = {
  'a': '⒜', 'b': '⒝', 'c': '⒞', 'd': '⒟', 'e': '⒠', 'f': '⒡', 'g': '⒢',
  'h': '⒣', 'i': '⒤', 'j': '⒥', 'k': '⒦', 'l': '⒧', 'm': '⒨', 'n': '⒩',
  'o': '⒪', 'p': '⒫', 'q': '⒬', 'r': '⒭', 's': '⒮', 't': '⒯', 'u': '⒰',
  'v': '⒱', 'w': '⒲', 'x': '⒳', 'y': '⒴', 'z': '⒵',
  'A': '⒜', 'B': '⒝', 'C': '⒞', 'D': '⒟', 'E': '⒠', 'F': '⒡', 'G': '⒢',
  'H': '⒣', 'I': '⒤', 'J': '⒥', 'K': '⒦', 'L': '⒧', 'M': '⒨', 'N': '⒩',
  'O': '⒪', 'P': '⒫', 'Q': '⒬', 'R': '⒭', 'S': '⒮', 'T': '⒯', 'U': '⒰',
  'V': '⒱', 'W': '⒲', 'X': '⒳', 'Y': '⒴', 'Z': '⒵',
  'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü',
};

// Bold Fraktur mappings
const boldFrakturMappings: Record<string, string> = {
  'a': '𝖆', 'b': '𝖇', 'c': '𝖈', 'd': '𝖉', 'e': '𝖊', 'f': '𝖋', 'g': '𝖌',
  'h': '𝖍', 'i': '𝖎', 'j': '𝖏', 'k': '𝖐', 'l': '𝖑', 'm': '𝖒', 'n': '𝖓',
  'o': '𝖔', 'p': '𝖕', 'q': '𝖖', 'r': '𝖗', 's': '𝖘', 't': '𝖙', 'u': '𝖚',
  'v': '𝖛', 'w': '𝖜', 'x': '𝖝', 'y': '𝖞', 'z': '𝖟',
  'A': '𝕬', 'B': '𝕭', 'C': '𝕮', 'D': '𝕯', 'E': '𝕰', 'F': '𝕱', 'G': '𝕲',
  'H': '𝕳', 'I': '𝕴', 'J': '𝕵', 'K': '𝕶', 'L': '𝕷', 'M': '𝕸', 'N': '𝕹',
  'O': '𝕺', 'P': '𝕻', 'Q': '𝕼', 'R': '𝕽', 'S': '𝕾', 'T': '𝕿', 'U': '𝖀',
  'V': '𝖁', 'W': '𝖂', 'X': '𝖃', 'Y': '𝖄', 'Z': '𝖅',
  'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü',
};

// Negative Circled (filled circles) mappings
const negativeCircledMappings: Record<string, string> = {
  'a': '🅐', 'b': '🅑', 'c': '🅒', 'd': '🅓', 'e': '🅔', 'f': '🅕', 'g': '🅖',
  'h': '🅗', 'i': '🅘', 'j': '🅙', 'k': '🅚', 'l': '🅛', 'm': '🅜', 'n': '🅝',
  'o': '🅞', 'p': '🅟', 'q': '🅠', 'r': '🅡', 's': '🅢', 't': '🅣', 'u': '🅤',
  'v': '🅥', 'w': '🅦', 'x': '🅧', 'y': '🅨', 'z': '🅩',
  'A': '🅐', 'B': '🅑', 'C': '🅒', 'D': '🅓', 'E': '🅔', 'F': '🅕', 'G': '🅖',
  'H': '🅗', 'I': '🅘', 'J': '🅙', 'K': '🅚', 'L': '🅛', 'M': '🅜', 'N': '🅝',
  'O': '🅞', 'P': '🅟', 'Q': '🅠', 'R': '🅡', 'S': '🅢', 'T': '🅣', 'U': '🅤',
  'V': '🅥', 'W': '🅦', 'X': '🅧', 'Y': '🅨', 'Z': '🅩',
  'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü',
};

// Sans-Serif Bold mappings
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
};

// Sans-Serif Italic mappings
const sansSerifItalicMappings: Record<string, string> = {
  'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦', 'f': '𝘧', 'g': '𝘨',
  'h': '𝘩', 'i': '𝘪', 'j': '𝘫', 'k': '𝘬', 'l': '𝘭', 'm': '𝘮', 'n': '𝘯',
  'o': '𝘰', 'p': '𝘱', 'q': '𝘲', 'r': '𝘳', 's': '𝘴', 't': '𝘵', 'u': '𝘶',
  'v': '𝘷', 'w': '𝘸', 'x': '𝘹', 'y': '𝘺', 'z': '𝘻',
  'A': '𝘈', 'B': '𝘉', 'C': '𝘊', 'D': '𝘋', 'E': '𝘌', 'F': '𝘍', 'G': '𝘎',
  'H': '𝘏', 'I': '𝘐', 'J': '𝘑', 'K': '𝘒', 'L': '𝘓', 'M': '𝘔', 'N': '𝘕',
  'O': '𝘖', 'P': '𝘗', 'Q': '𝘘', 'R': '𝘙', 'S': '𝘚', 'T': '𝘛', 'U': '𝘜',
  'V': '𝘝', 'W': '𝘞', 'X': '𝘟', 'Y': '𝘠', 'Z': '𝘡',
  'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü',
};

// Sans-Serif Bold Italic mappings
const sansSerifBoldItalicMappings: Record<string, string> = {
  'a': '𝙖', 'b': '𝙗', 'c': '𝙘', 'd': '𝙙', 'e': '𝙚', 'f': '𝙛', 'g': '𝙜',
  'h': '𝙝', 'i': '𝙞', 'j': '𝙟', 'k': '𝙠', 'l': '𝙡', 'm': '𝙢', 'n': '𝙣',
  'o': '𝙤', 'p': '𝙥', 'q': '𝙦', 'r': '𝙧', 's': '𝙨', 't': '𝙩', 'u': '𝙪',
  'v': '𝙫', 'w': '𝙬', 'x': '𝙭', 'y': '𝙮', 'z': '𝙯',
  'A': '𝘼', 'B': '𝘽', 'C': '𝘾', 'D': '𝘿', 'E': '𝙀', 'F': '𝙁', 'G': '𝙂',
  'H': '𝙃', 'I': '𝙄', 'J': '𝙅', 'K': '𝙆', 'L': '𝙇', 'M': '𝙈', 'N': '𝙉',
  'O': '𝙊', 'P': '𝙋', 'Q': '𝙌', 'R': '𝙍', 'S': '𝙎', 'T': '𝙏', 'U': '𝙐',
  'V': '𝙑', 'W': '𝙒', 'X': '𝙓', 'Y': '𝙔', 'Z': '𝙕',
  'ç': 'ç', 'ğ': 'ğ', 'ı': 'ı', 'İ': 'İ', 'ö': 'ö', 'ş': 'ş', 'ü': 'ü',
};

// Rune/Elder Futhark mappings
const runeMappings: Record<string, string> = {
  'a': 'ᚨ', 'b': 'ᛒ', 'c': 'ᚲ', 'd': 'ᛞ', 'e': 'ᛖ', 'f': 'ᚠ', 'g': 'ᚷ',
  'h': 'ᚺ', 'i': 'ᛁ', 'j': 'ᛃ', 'k': 'ᚲ', 'l': 'ᛚ', 'm': 'ᛗ', 'n': 'ᚾ',
  'o': 'ᛟ', 'p': 'ᛈ', 'q': 'ᚲ', 'r': 'ᚱ', 's': 'ᛊ', 't': 'ᛏ', 'u': 'ᚢ',
  'v': 'ᚹ', 'w': 'ᚹ', 'x': 'ᛪ', 'y': 'ᛃ', 'z': 'ᛉ',
  'A': 'ᚨ', 'B': 'ᛒ', 'C': 'ᚲ', 'D': 'ᛞ', 'E': 'ᛖ', 'F': 'ᚠ', 'G': 'ᚷ',
  'H': 'ᚺ', 'I': 'ᛁ', 'J': 'ᛃ', 'K': 'ᚲ', 'L': 'ᛚ', 'M': 'ᛗ', 'N': 'ᚾ',
  'O': 'ᛟ', 'P': 'ᛈ', 'Q': 'ᚲ', 'R': 'ᚱ', 'S': 'ᛊ', 'T': 'ᛏ', 'U': 'ᚢ',
  'V': 'ᚹ', 'W': 'ᚹ', 'X': 'ᛪ', 'Y': 'ᛃ', 'Z': 'ᛉ',
  'ç': 'ç', 'ğ': 'ğ', 'ı': 'ᛁ', 'İ': 'ᛁ', 'ö': 'ᛟ', 'ş': 'ᛊ', 'ü': 'ᚢ',
};

// Leetspeak mappings
const leetspeakMappings: Record<string, string> = {
  'a': '4', 'b': '8', 'c': '(', 'd': 'D', 'e': '3', 'f': 'F', 'g': '6',
  'h': '#', 'i': '1', 'j': 'J', 'k': 'K', 'l': '1', 'm': 'M', 'n': 'N',
  'o': '0', 'p': 'P', 'q': 'Q', 'r': 'R', 's': '5', 't': '7', 'u': 'U',
  'v': 'V', 'w': 'W', 'x': 'X', 'y': 'Y', 'z': '2',
  'A': '4', 'B': '8', 'C': '(', 'D': 'D', 'E': '3', 'F': 'F', 'G': '6',
  'H': '#', 'I': '1', 'J': 'J', 'K': 'K', 'L': '1', 'M': 'M', 'N': 'N',
  'O': '0', 'P': 'P', 'Q': 'Q', 'R': 'R', 'S': '5', 'T': '7', 'U': 'U',
  'V': 'V', 'W': 'W', 'X': 'X', 'Y': 'Y', 'Z': '2',
  'ç': 'ç', 'ğ': 'ğ', 'ı': '1', 'İ': '1', 'ö': '0', 'ş': '5', 'ü': 'U',
};

// ========== GAMING/E-SPORTS TRANSFORMS ==========

// Pro Gamer Tag
function proGamerTagTransform(text: string): string {
  return `꧁༒${text}༒꧂`;
}

// Clan Tag Style
function clanTagTransform(text: string): string {
  return `『${text}』`;
}

// E-Sports Style
function eSportsTransform(text: string): string {
  return `【${text}】`;
}

// Gamer Wings
function gamerWingsTransform(text: string): string {
  return `★彡${text}彡★`;
}

// Battle Tag
function battleTagTransform(text: string): string {
  return `◤${text}◢`;
}

// Matrix Style (cyber glitch)
function matrixTransform(text: string): string {
  return text.split('').map((char, index) => {
    if (char === ' ') return char;
    const charCode = char.charCodeAt(0);
    const seed = charCode * 30 + index;
    let result = char;
    if (seededRandom(seed) > 0.6) {
      result += zalgoMiddle[Math.floor(seededRandom(seed + 5) * zalgoMiddle.length)];
    }
    return result;
  }).join('');
}

// ========== TURKISH/OTTOMAN CULTURAL TRANSFORMS ==========

// Ottoman Style
function ottomanTransform(text: string): string {
  return `۩ ${text} ۩`;
}

// Mosque/Minaret Style
function mosqueTransform(text: string): string {
  return `🕌 ${text} 🕌`;
}

// Crescent Moon Style
function crescentTransform(text: string): string {
  return `☪ ${text} ☪`;
}

// Turkish Tea Style
function turkishTeaTransform(text: string): string {
  return `🍵 ${text} 🫖`;
}

// Simit Style
function simitTransform(text: string): string {
  return `🥯 ${text} 🥯`;
}

// Kebab Style
function kebabTransform(text: string): string {
  return `🍢 ${text} 🍢`;
}

// Kilim Pattern Style
function kilimTransform(text: string): string {
  return `◆◇◆ ${text} ◆◇◆`;
}

// Iznik Tile Style
function iznikTransform(text: string): string {
  return `❖ ${text} ❖`;
}

// Semazen/Whirling Style
function semazenTransform(text: string): string {
  return `࿊ ${text} ࿊`;
}

// Tughra Style
function tughraTransform(text: string): string {
  return `༺ ${text} ༻`;
}

// Anatolian Motif Style
function anatolianTransform(text: string): string {
  return `۞ ${text} ۞`;
}

// Baklava Style
function baklavaTransform(text: string): string {
  return `🍯 ${text} 🍯`;
}

// Doner Style
function donerTransform(text: string): string {
  return `🥙 ${text} 🥙`;
}

// ========== COMBINING CHARACTER EFFECTS ==========

// Double Acute Accent
function doubleAcuteTransform(text: string): string {
  return text.split('').map(char => char + '\u030B').join('');
}

// Ring Above
function ringAboveTransform(text: string): string {
  return text.split('').map(char => char + '\u030A').join('');
}

// X Above Mark
function xAboveTransform(text: string): string {
  return text.split('').map(char => char + '\u033D').join('');
}

// Hook Above
function hookAboveTransform(text: string): string {
  return text.split('').map(char => char + '\u0309').join('');
}

// Macron (Line Above)
function macronTransform(text: string): string {
  return text.split('').map(char => char + '\u0304').join('');
}

// Breve (Curved)
function breveTransform(text: string): string {
  return text.split('').map(char => char + '\u0306').join('');
}

// Cedilla Below
function cedillaTransform(text: string): string {
  return text.split('').map(char => char + '\u0327').join('');
}

// Ogonek
function ogonekTransform(text: string): string {
  return text.split('').map(char => char + '\u0328').join('');
}

// Circumflex (Hat)
function circumflexTransform(text: string): string {
  return text.split('').map(char => char + '\u0302').join('');
}

// Long Slash Through
function longSlashTransform(text: string): string {
  return text.split('').map(char => char + '\u0338').join('');
}

// ========== VAPORWAVE/AESTHETIC TRANSFORMS ==========

// Spaced Aesthetic
function spacedAestheticTransform(text: string): string {
  return text.toUpperCase().split('').join(' ');
}

// Retro Wave
function retroWaveTransform(text: string): string {
  return `▓▒░ ${text} ░▒▓`;
}

// Neon Block Style
function neonBlockTransform(text: string): string {
  return `░▒▓█ ${text} █▓▒░`;
}

// Wave Pattern
function wavePatternTransform(text: string): string {
  return `∿∿ ${text} ∿∿`;
}

// 80s Retro Line
function retroLineTransform(text: string): string {
  return `═══ ${text} ═══`;
}

// Pixel Blocks
function pixelBlockTransform(text: string): string {
  return `▀▄▀▄ ${text} ▄▀▄▀`;
}

// ========== DECORATIVE BORDER TRANSFORMS ==========

// Japanese Quotes
function japaneseQuotesTransform(text: string): string {
  return `「${text}」`;
}

// White Corner Brackets
function whiteCornerTransform(text: string): string {
  return `『${text}』`;
}

// Double Line
function doubleLineTransform(text: string): string {
  return `══ ${text} ══`;
}

// Arrow Pattern
function arrowPatternTransform(text: string): string {
  return `»»— ${text} —««`;
}

// Star Sparkle Pattern
function starSparklePatternTransform(text: string): string {
  return `☆.。.:* ${text} *:.。.☆`;
}

// Flower Border
function flowerBorderTransform(text: string): string {
  return `✿ ${text} ✿`;
}

// Wings Style
function wingsStyleTransform(text: string): string {
  return `═══════ ∘◦ ${text} ◦∘ ═══════`;
}

// Box Frame
function boxFrameTransform(text: string): string {
  return `╔═══╗ ${text} ╚═══╝`;
}

// Fancy Arrows
function fancyArrowsTransform(text: string): string {
  return `➤➤ ${text} ➤➤`;
}

// Diamond Border
function diamondBorderTransform(text: string): string {
  return `◈◈◈ ${text} ◈◈◈`;
}

// ========== NEW EMOJI COMBINATIONS ==========

// Angel Wings
function angelWingsTransform(text: string): string {
  return `👼 ${text} 👼`;
}

// Eye Style
function eyeStyleTransform(text: string): string {
  return `👁️ ${text} 👁️`;
}

// Yin Yang
function yinYangTransform(text: string): string {
  return `☯ ${text} ☯`;
}

// Shield Style
function shieldStyleTransform(text: string): string {
  return `🛡️ ${text} 🛡️`;
}

// Sword Style
function swordStyleTransform(text: string): string {
  return `⚔️ ${text} ⚔️`;
}

// Crown Heart
function crownHeartTransform(text: string): string {
  return `👑❤️ ${text} ❤️👑`;
}

// Lightning Fire
function lightningFireTransform(text: string): string {
  return `⚡🔥 ${text} 🔥⚡`;
}

// Crystal Ball
function crystalBallTransform(text: string): string {
  return `🔮 ${text} 🔮`;
}

// Green Heart
function greenHeartTransform(text: string): string {
  return `💚 ${text} 💚`;
}

// Black Heart
function blackHeartTransform(text: string): string {
  return `🖤 ${text} 🖤`;
}

// Blue Heart
function blueHeartTransform(text: string): string {
  return `💙 ${text} 💙`;
}

// Purple Heart
function purpleHeartTransform(text: string): string {
  return `💜 ${text} 💜`;
}

// Snowflake
function snowflakeTransform(text: string): string {
  return `❄️ ${text} ❄️`;
}

// Leaf Style
function leafStyleTransform(text: string): string {
  return `🍃 ${text} 🍃`;
}

// Cherry Blossom
function cherryBlossomTransform(text: string): string {
  return `🌸 ${text} 🌸`;
}

// ========== TEXT TRANSFORMATION EFFECTS ==========

// Mirror/Backward text
function mirrorTransform(text: string): string {
  return text.split('').reverse().join('');
}

// Alternating Caps (Spongebob)
function alternatingCapsTransform(text: string): string {
  return text.split('').map((char, i) => i % 2 === 0 ? char.toLowerCase() : char.toUpperCase()).join('');
}

// Title Case
function titleCaseTransform(text: string): string {
  return text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

// Morse Code Style (simplified visual)
function morseStyleTransform(text: string): string {
  const morseMap: Record<string, string> = {
    'a': '•−', 'b': '−•••', 'c': '−•−•', 'd': '−••', 'e': '•', 'f': '••−•',
    'g': '−−•', 'h': '••••', 'i': '••', 'j': '•−−−', 'k': '−•−', 'l': '•−••',
    'm': '−−', 'n': '−•', 'o': '−−−', 'p': '•−−•', 'q': '−−•−', 'r': '•−•',
    's': '•••', 't': '−', 'u': '••−', 'v': '•••−', 'w': '•−−', 'x': '−••−',
    'y': '−•−−', 'z': '−−••', ' ': '/',
  };
  return text.toLowerCase().split('').map(char => morseMap[char] || char).join(' ');
}

// Binary Style (shows binary codes)
function binaryStyleTransform(text: string): string {
  return text.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
}

// Enclosed Alphanumerics
function enclosedTransform(text: string): string {
  const enclosedMap: Record<string, string> = {
    '1': '①', '2': '②', '3': '③', '4': '④', '5': '⑤',
    '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨', '0': '⓪',
  };
  return text.split('').map(char => enclosedMap[char] || char).join('');
}

// Export font styles array - Popular fonts first
export const fontStyles: FontStyle[] = [
  // POPULAR & FAMOUS FONTS (Shown First)
  {
    id: 'bold',
    name: 'Kalın (Bold)',
    description: 'Kalın yazı stili',
    category: 'Popüler Fontlar',
    transform: (text) => transformText(text, boldMappings),
    popular: true,
    platforms: ['instagram', 'whatsapp', 'tiktok', 'twitter', 'discord'],
  },
  {
    id: 'italic',
    name: 'İtalik (Italic)',
    description: 'İtalik yazı stili',
    category: 'Popüler Fontlar',
    transform: (text) => transformText(text, italicMappings),
    popular: true,
    platforms: ['instagram', 'whatsapp', 'twitter', 'discord'],
  },
  {
    id: 'bold-italic',
    name: 'Kalın İtalik',
    description: 'Kalın ve italik yazı stili',
    category: 'Popüler Fontlar',
    transform: (text) => transformText(text, boldItalicMappings),
    popular: true,
    platforms: ['instagram', 'whatsapp', 'twitter'],
  },
  {
    id: 'instagram-bio',
    name: 'Instagram Bio Font',
    description: 'Instagram bio için özel stil',
    category: 'Popüler Fontlar',
    transform: (text) => transformText(text, aestheticMappings),
    popular: true,
    platforms: ['instagram'],
  },
  {
    id: 'aesthetic',
    name: 'Aesthetic Text',
    description: 'Estetik ve şık yazı stili',
    category: 'Popüler Fontlar',
    transform: (text) => transformText(text, aestheticMappings),
    popular: true,
    platforms: ['instagram', 'tiktok'],
  },
  {
    id: 'script',
    name: 'Script (El Yazısı)',
    description: 'El yazısı tarzı stil',
    category: 'Popüler Fontlar',
    transform: (text) => transformText(text, scriptMappings),
    popular: true,
    platforms: ['instagram', 'whatsapp', 'tiktok'],
  },
  {
    id: 'cursive',
    name: 'Cursive (Akıcı)',
    description: 'Akıcı el yazısı stili',
    category: 'Popüler Fontlar',
    transform: (text) => transformText(text, scriptMappings),
    popular: true,
    platforms: ['instagram', 'whatsapp'],
  },
  {
    id: 'star-border',
    name: 'Yıldız Çerçeve',
    description: 'Yıldız emojileri ile çerçevelenmiş metin',
    category: 'Popüler Fontlar',
    transform: (text) => starBorderTransform(text),
    popular: true,
    platforms: ['instagram', 'whatsapp', 'tiktok'],
  },
  {
    id: 'heart-border',
    name: 'Kalp Çerçeve',
    description: 'Kalp emojileri ile çerçevelenmiş metin',
    category: 'Popüler Fontlar',
    transform: (text) => heartBorderTransform(text),
    popular: true,
    platforms: ['instagram', 'whatsapp', 'tiktok'],
  },
  {
    id: 'sparkle',
    name: 'Parlama',
    description: 'Parlama emojileri ile süslenmiş metin',
    category: 'Popüler Fontlar',
    transform: (text) => sparkleTransform(text),
    popular: true,
    platforms: ['instagram', 'tiktok'],
  },
  {
    id: 'fire',
    name: 'Ateş',
    description: 'Ateş emojileri ile trend stili',
    category: 'Popüler Fontlar',
    transform: (text) => fireTransform(text),
    popular: true,
    platforms: ['instagram', 'tiktok', 'twitter'],
  },
  {
    id: 'whatsapp-safe',
    name: 'WhatsApp Safe',
    description: 'WhatsApp için güvenli Unicode stili',
    category: 'Popüler Fontlar',
    transform: (text) => transformText(text, cleanBoldMappings),
    popular: true,
    platforms: ['whatsapp'],
  },
  {
    id: 'facebook-safe',
    name: 'Facebook Safe',
    description: 'Facebook için güvenli Unicode stili',
    category: 'Popüler Fontlar',
    transform: (text) => transformText(text, cleanBoldMappings),
    popular: true,
    platforms: ['facebook'],
  },

  // TEXT VARIATIONS
  {
    id: 'normal',
    name: 'Normal',
    description: 'Standart metin stili',
    category: 'Metin Varyasyonları',
    transform: (text) => text,
  },
  {
    id: 'uppercase',
    name: 'Büyük Harf',
    description: 'Tüm harfler büyük',
    category: 'Metin Varyasyonları',
    transform: (text) => text.toUpperCase(),
  },
  {
    id: 'lowercase',
    name: 'Küçük Harf',
    description: 'Tüm harfler küçük',
    category: 'Metin Varyasyonları',
    transform: (text) => text.toLowerCase(),
  },
  {
    id: 'small-caps',
    name: 'Küçük Büyük Harf',
    description: 'Küçük büyük harf stili',
    category: 'Metin Varyasyonları',
    transform: (text) => transformText(text.toLowerCase(), smallCapsMappings),
  },

  // FANCY UNICODE STYLES
  {
    id: 'gothic',
    name: 'Gothic (Gotik)',
    description: 'Gotik yazı stili',
    category: 'Süslü Unicode Stilleri',
    transform: (text) => transformText(text, frakturMappings),
  },
  {
    id: 'fraktur',
    name: 'Fraktur',
    description: 'Klasik gotik yazı stili',
    category: 'Süslü Unicode Stilleri',
    transform: (text) => transformText(text, frakturMappings),
  },
  {
    id: 'double-struck',
    name: 'Double-Struck',
    description: 'Çift çizgili matematiksel stil',
    category: 'Süslü Unicode Stilleri',
    transform: (text) => transformText(text, doubleStruckMappings),
  },
  {
    id: 'monospace',
    name: 'Monospace',
    description: 'Eşit genişlikte harfler',
    category: 'Süslü Unicode Stilleri',
    transform: (text) => transformText(text, monospaceMappings),
  },
  {
    id: 'boxed',
    name: 'Boxed Text (Kare İçinde)',
    description: 'Kare içinde harfler',
    category: 'Süslü Unicode Stilleri',
    transform: (text) => transformText(text, boxedMappings),
  },
  {
    id: 'circled',
    name: 'Circled Text (Daire İçinde)',
    description: 'Daire içinde harfler',
    category: 'Süslü Unicode Stilleri',
    transform: (text) => transformText(text, circledMappings),
  },
  {
    id: 'bubble',
    name: 'Bubble Text (Balon)',
    description: 'Geniş balon yazı stili',
    category: 'Süslü Unicode Stilleri',
    transform: (text) => transformText(text, bubbleMappings),
  },

  // SOCIAL MEDIA STYLES
  {
    id: 'social-stylish-script',
    name: 'Şık Script',
    description: 'Sosyal medya için şık ve modern script stili',
    category: 'Sosyal Medya Stilleri',
    transform: (text) => transformText(text, socialStylishScriptMappings),
  },
  {
    id: 'social-fancy-script',
    name: 'Süslü Script',
    description: 'Gösterişli ve dikkat çekici script stili',
    category: 'Sosyal Medya Stilleri',
    transform: (text) => transformText(text, socialFancyScriptMappings),
  },
  {
    id: 'social-cursive-style',
    name: 'Akıcı Stil',
    description: 'Akıcı ve yumuşak el yazısı stili',
    category: 'Sosyal Medya Stilleri',
    transform: (text) => transformText(text, socialCursiveStyleMappings),
  },
  {
    id: 'social-classy-text',
    name: 'Klasik Metin',
    description: 'Klasik ve zarif metin stili',
    category: 'Sosyal Medya Stilleri',
    transform: (text) => transformText(text, socialClassyTextMappings),
  },
  {
    id: 'social-aesthetic-script',
    name: 'Estetik Script',
    description: 'Estetik ve şık script stili',
    category: 'Sosyal Medya Stilleri',
    transform: (text) => transformText(text, socialAestheticScriptMappings),
  },
  {
    id: 'social-sleek-script',
    name: 'Şık Script',
    description: 'Şık ve zarif script stili',
    category: 'Sosyal Medya Stilleri',
    transform: (text) => transformText(text, socialSleekScriptMappings),
  },
  {
    id: 'social-elegant-style',
    name: 'Zarif Stil',
    description: 'Zarif ve sofistike yazı stili',
    category: 'Sosyal Medya Stilleri',
    transform: (text) => transformText(text, socialElegantStyleMappings),
  },
  {
    id: 'social-modern-fancy',
    name: 'Modern Süslü',
    description: 'Modern ve süslü yazı stili',
    category: 'Sosyal Medya Stilleri',
    transform: (text) => transformText(text, socialModernFancyMappings),
  },
  {
    id: 'social-stylish-sans',
    name: 'Şık Sans',
    description: 'Şık ve modern sans-serif stili',
    category: 'Sosyal Medya Stilleri',
    transform: (text) => transformText(text, socialStylishSansMappings),
  },
  {
    id: 'social-cute-text',
    name: 'Sevimli Metin',
    description: 'Sevimli ve şirin geniş aralıklı metin',
    category: 'Sosyal Medya Stilleri',
    transform: (text) => socialCuteTextTransform(text),
  },
  {
    id: 'stylish-nickname',
    name: 'Şık Takma Ad',
    description: 'Şık takma ad stili',
    category: 'Sosyal Medya Stilleri',
    transform: (text) => stylishNicknameTransform(text),
  },
  {
    id: 'cute',
    name: 'Sevimli Font',
    description: 'Sevimli ve şirin yazı stili',
    category: 'Sosyal Medya Stilleri',
    transform: (text) => cuteTransform(text),
  },

  // WHATSAPP & FACEBOOK SAFE
  // Tier 1 - MOST ATTRACTIVE
  {
    id: 'stylish-script',
    name: 'Şık Yazı',
    description: 'Premium görünümlü şık yazı stili',
    category: 'WhatsApp & Facebook Güvenli',
    transform: (text) => transformText(text, stylishScriptMappings),
  },
  {
    id: 'smooth-script',
    name: 'Yumuşak Stil',
    description: 'Akıcı ve yumuşak yazı stili',
    category: 'WhatsApp & Facebook Güvenli',
    transform: (text) => transformText(text, smoothScriptMappings),
  },
  {
    id: 'elegant-text',
    name: 'Zarif Yazı',
    description: 'Zarif ve şık metin stili',
    category: 'WhatsApp & Facebook Güvenli',
    transform: (text) => transformText(text, elegantTextMappings),
  },
  {
    id: 'classy-script',
    name: 'Klasik Şık',
    description: 'Klasik ve zarif yazı stili',
    category: 'WhatsApp & Facebook Güvenli',
    transform: (text) => transformText(text, classyScriptMappings),
  },
  {
    id: 'fancy-serif',
    name: 'Süslü Yazı',
    description: 'Süslü ve gösterişli yazı stili',
    category: 'WhatsApp & Facebook Güvenli',
    transform: (text) => transformText(text, fancySerifMappings),
  },
  {
    id: 'cursive-light',
    name: 'Akıcı Yazı',
    description: 'Hafif ve akıcı el yazısı stili',
    category: 'WhatsApp & Facebook Güvenli',
    transform: (text) => transformText(text, cursiveLightMappings),
  },
  {
    id: 'modern-script',
    name: 'Modern Stil',
    description: 'Modern ve şık yazı stili',
    category: 'WhatsApp & Facebook Güvenli',
    transform: (text) => transformText(text, modernScriptMappings),
  },
  // Tier 2 - MODERN & COOL
  {
    id: 'modern-sans',
    name: 'Modern Temiz',
    description: 'Modern ve temiz yazı stili',
    category: 'WhatsApp & Facebook Güvenli',
    transform: (text) => transformText(text, modernSansMappings),
  },
  {
    id: 'stylish-sans',
    name: 'Şık Temiz',
    description: 'Şık ve temiz yazı stili',
    category: 'WhatsApp & Facebook Güvenli',
    transform: (text) => transformText(text, stylishSansMappings),
  },
  {
    id: 'clean-fancy',
    name: 'Temiz Süslü',
    description: 'Temiz ve süslü yazı stili',
    category: 'WhatsApp & Facebook Güvenli',
    transform: (text) => transformText(text, cleanFancyMappings),
  },
  {
    id: 'elegant-sans',
    name: 'Zarif Temiz',
    description: 'Zarif ve temiz yazı stili',
    category: 'WhatsApp & Facebook Güvenli',
    transform: (text) => transformText(text, elegantSansMappings),
  },
  {
    id: 'soft-serif',
    name: 'Yumuşak Süslü',
    description: 'Yumuşak ve süslü yazı stili',
    category: 'WhatsApp & Facebook Güvenli',
    transform: (text) => transformText(text, softSerifMappings),
  },
  // Tier 3 - AESTHETIC BUT SAFE
  {
    id: 'aesthetic-light',
    name: 'Estetik Hafif',
    description: 'Estetik ve hafif yazı stili',
    category: 'WhatsApp & Facebook Güvenli',
    transform: (text) => transformText(text, aestheticLightMappings),
  },
  {
    id: 'sleek-text',
    name: 'Şık Zarif',
    description: 'Şık ve zarif metin stili',
    category: 'WhatsApp & Facebook Güvenli',
    transform: (text) => transformText(text, sleekTextMappings),
  },
  {
    id: 'styled-clean',
    name: 'Stilize Temiz',
    description: 'Stilize ve temiz yazı stili',
    category: 'WhatsApp & Facebook Güvenli',
    transform: (text) => transformText(text, styledCleanMappings),
  },
  {
    id: 'copy-paste-safe',
    name: 'Copy-Paste Safe',
    description: 'Kopyala-yapıştır için güvenli stil',
    category: 'WhatsApp & Facebook Güvenli',
    transform: (text) => transformText(text, boldMappings),
  },

  // INSTAGRAM YAZI STİLLERİ (Decorative & Viral)
  {
    id: 'instagram-fancy-script',
    name: 'Fancy Script',
    description: 'Süslü ve gösterişli script stili - Instagram için mükemmel',
    category: 'Instagram Yazı Stilleri',
    transform: (text) => transformText(text, instagramFancyScriptMappings),
  },
  {
    id: 'instagram-stylish-script',
    name: 'Stylish Script',
    description: 'Şık ve modern script stili - Bio ve caption için ideal',
    category: 'Instagram Yazı Stilleri',
    transform: (text) => transformText(text, instagramStylishScriptMappings),
  },
  {
    id: 'instagram-aesthetic-script',
    name: 'Aesthetic Script',
    description: 'Estetik ve zarif script stili - Viral görünüm',
    category: 'Instagram Yazı Stilleri',
    transform: (text) => transformText(text, instagramAestheticScriptMappings),
  },
  {
    id: 'instagram-classy-text',
    name: 'Classy Text',
    description: 'Klasik ve zarif metin stili - Premium görünüm',
    category: 'Instagram Yazı Stilleri',
    transform: (text) => transformText(text, instagramClassyTextMappings),
  },
  {
    id: 'instagram-gothic-fancy',
    name: 'Gothic Fancy',
    description: 'Gotik ve süslü yazı stili - Dikkat çekici',
    category: 'Instagram Yazı Stilleri',
    transform: (text) => transformText(text, instagramGothicFancyMappings),
  },
  {
    id: 'instagram-boxed-fancy',
    name: 'Boxed Fancy',
    description: 'Kare içinde süslü yazı stili - Göz alıcı',
    category: 'Instagram Yazı Stilleri',
    transform: (text) => transformText(text, instagramBoxedFancyMappings),
  },
  {
    id: 'instagram-circled-fancy',
    name: 'Circled Fancy',
    description: 'Daire içinde süslü yazı stili - Şık ve modern',
    category: 'Instagram Yazı Stilleri',
    transform: (text) => transformText(text, instagramCircledFancyMappings),
  },
  {
    id: 'instagram-cute-text',
    name: 'Cute Text',
    description: 'Sevimli ve şirin yazı stili - Geniş aralıklı',
    category: 'Instagram Yazı Stilleri',
    transform: (text) => instagramCuteTextTransform(text),
  },
  {
    id: 'instagram-sparkle-text',
    name: 'Sparkle Text',
    description: 'Parlamalı ve dikkat çekici yazı stili - Viral',
    category: 'Instagram Yazı Stilleri',
    transform: (text) => instagramSparkleTextTransform(text),
  },

  // EMOJI-BASED FONTS
  {
    id: 'star-separator',
    name: 'Yıldız Ayırıcı',
    description: 'Kelime aralarında yıldız emojileri',
    category: 'Emoji Tabanlı Fontlar',
    transform: (text) => starSeparatorTransform(text),
  },
  {
    id: 'heart-separator',
    name: 'Kalp Ayırıcı',
    description: 'Kelime aralarında kalp emojileri',
    category: 'Emoji Tabanlı Fontlar',
    transform: (text) => heartSeparatorTransform(text),
  },
  {
    id: 'sparkle-separator',
    name: 'Parlama Ayırıcı',
    description: 'Kelime aralarında parılama emojileri',
    category: 'Emoji Tabanlı Fontlar',
    transform: (text) => sparkleSeparatorTransform(text),
  },
  {
    id: 'arrow',
    name: 'Ok',
    description: 'Ok emojileri ile süslenmiş metin',
    category: 'Emoji Tabanlı Fontlar',
    transform: (text) => arrowTransform(text),
  },
  {
    id: 'checkmark',
    name: 'Onay İşareti',
    description: 'Onay işareti emojileri ile metin',
    category: 'Emoji Tabanlı Fontlar',
    transform: (text) => checkmarkTransform(text),
  },
  {
    id: 'crown',
    name: 'Taç',
    description: 'Taç emojileri ile premium stil',
    category: 'Emoji Tabanlı Fontlar',
    transform: (text) => crownTransform(text),
  },
  {
    id: 'rainbow',
    name: 'Gökkuşağı',
    description: 'Gökkuşağı emojileri ile renkli stil',
    category: 'Emoji Tabanlı Fontlar',
    transform: (text) => rainbowTransform(text),
  },
  {
    id: 'lightning',
    name: 'Şimşek',
    description: 'Şimşek emojileri ile enerji stili',
    category: 'Emoji Tabanlı Fontlar',
    transform: (text) => lightningTransform(text),
  },
  {
    id: 'flower',
    name: 'Çiçek',
    description: 'Çiçek emojileri ile süslenmiş metin',
    category: 'Emoji Tabanlı Fontlar',
    transform: (text) => flowerTransform(text),
  },
  {
    id: 'moon-star',
    name: 'Ay ve Yıldız',
    description: 'Ay ve yıldız emojileri ile metin',
    category: 'Emoji Tabanlı Fontlar',
    transform: (text) => moonStarTransform(text),
  },
  {
    id: 'party',
    name: 'Parti',
    description: 'Parti emojileri ile eğlenceli stil',
    category: 'Emoji Tabanlı Fontlar',
    transform: (text) => partyTransform(text),
  },
  {
    id: 'music',
    name: 'Müzik',
    description: 'Müzik notaları emojileri ile metin',
    category: 'Emoji Tabanlı Fontlar',
    transform: (text) => musicTransform(text),
  },
  {
    id: 'trophy',
    name: 'Kupa',
    description: 'Kupa emojileri ile kazanan stili',
    category: 'Emoji Tabanlı Fontlar',
    transform: (text) => trophyTransform(text),
  },
  {
    id: 'diamond',
    name: 'Elmas',
    description: 'Elmas emojileri ile lüks stil',
    category: 'Emoji Tabanlı Fontlar',
    transform: (text) => diamondTransform(text),
  },
  {
    id: 'rocket',
    name: 'Roket',
    description: 'Roket emojileri ile başarı stili',
    category: 'Emoji Tabanlı Fontlar',
    transform: (text) => rocketTransform(text),
  },
  {
    id: 'butterfly',
    name: 'Kelebek',
    description: 'Kelebek emojileri ile estetik stil',
    category: 'Emoji Tabanlı Fontlar',
    transform: (text) => butterflyTransform(text),
  },
  {
    id: 'sun',
    name: 'Güneş',
    description: 'Güneş emojileri ile parlak stil',
    category: 'Emoji Tabanlı Fontlar',
    transform: (text) => sunTransform(text),
  },
  {
    id: 'rainbow-heart',
    name: 'Gökkuşağı Kalp',
    description: 'Gökkuşağı kalp emojileri ile metin',
    category: 'Emoji Tabanlı Fontlar',
    transform: (text) => rainbowHeartTransform(text),
  },
  {
    id: 'starry-background',
    name: 'Yıldızlı Arka Plan',
    description: 'Her harf arasında yıldız emojileri',
    category: 'Emoji Tabanlı Fontlar',
    transform: (text) => starryBackgroundTransform(text),
  },
  {
    id: 'heart-background',
    name: 'Kalpli Arka Plan',
    description: 'Her harf arasında kalp emojileri',
    category: 'Emoji Tabanlı Fontlar',
    transform: (text) => heartBackgroundTransform(text),
  },
  {
    id: 'sparkle-background',
    name: 'Parlamalı Arka Plan',
    description: 'Her harf arasında parılama emojileri',
    category: 'Emoji Tabanlı Fontlar',
    transform: (text) => sparkleBackgroundTransform(text),
  },

  // TURKISH CULTURAL STYLES
  {
    id: 'nazar-boncugu',
    name: '🧿 Nazar Boncuğu',
    description: 'Türk kültürünün simgesi nazar boncuğu ile süslenmiş',
    category: 'Türk Kültürü Stilleri',
    transform: (text) => nazarBoncuguTransform(text),
    popular: true,
    platforms: ['instagram', 'whatsapp', 'tiktok'],
  },
  {
    id: 'nazar-separator',
    name: '🧿 Nazar Ayırıcı',
    description: 'Kelime aralarında nazar boncuğu',
    category: 'Türk Kültürü Stilleri',
    transform: (text) => nazarSeparatorTransform(text),
    platforms: ['instagram', 'whatsapp'],
  },
  {
    id: 'nazar-background',
    name: '🧿 Nazar Arka Plan',
    description: 'Her harf arasında nazar boncuğu',
    category: 'Türk Kültürü Stilleri',
    transform: (text) => nazarBackgroundTransform(text),
    platforms: ['instagram'],
  },
  {
    id: 'turkish-flag',
    name: '🇹🇷 Türk Bayrağı',
    description: 'Türk bayrağı ile süslenmiş metin',
    category: 'Türk Kültürü Stilleri',
    transform: (text) => turkishFlagTransform(text),
    popular: true,
    platforms: ['instagram', 'whatsapp', 'tiktok', 'twitter'],
  },
  {
    id: 'turkish-moon-star',
    name: '☪️ Ay Yıldız',
    description: 'Ay ve yıldız sembolleri ile süslenmiş',
    category: 'Türk Kültürü Stilleri',
    transform: (text) => turkishMoonStarTransform(text),
    popular: true,
    platforms: ['instagram', 'whatsapp', 'tiktok'],
  },
  {
    id: 'turkish-flag-separator',
    name: '🇹🇷 Bayrak Ayırıcı',
    description: 'Kelime aralarında Türk bayrağı',
    category: 'Türk Kültürü Stilleri',
    transform: (text) => turkishFlagSeparatorTransform(text),
    platforms: ['instagram', 'whatsapp'],
  },
  {
    id: 'tulip',
    name: '🌷 Lale (Tulip)',
    description: 'Türk lalesi ile süslenmiş metin',
    category: 'Türk Kültürü Stilleri',
    transform: (text) => tulipTransform(text),
    popular: true,
    platforms: ['instagram', 'whatsapp', 'tiktok'],
  },
  {
    id: 'tulip-separator',
    name: '🌷 Lale Ayırıcı',
    description: 'Kelime aralarında lale',
    category: 'Türk Kültürü Stilleri',
    transform: (text) => tulipSeparatorTransform(text),
    platforms: ['instagram'],
  },
  {
    id: 'tulip-background',
    name: '🌷 Lale Arka Plan',
    description: 'Her harf arasında lale',
    category: 'Türk Kültürü Stilleri',
    transform: (text) => tulipBackgroundTransform(text),
    platforms: ['instagram'],
  },
  {
    id: 'turkish-coffee',
    name: '☕ Türk Kahvesi',
    description: 'Türk kahvesi ile süslenmiş metin',
    category: 'Türk Kültürü Stilleri',
    transform: (text) => turkishCoffeeTransform(text),
    popular: true,
    platforms: ['instagram', 'whatsapp', 'tiktok'],
  },
  {
    id: 'coffee-cup',
    name: '☕ Kahve Fincanı',
    description: 'Kahve fincanı ve çaydanlık ile süslenmiş',
    category: 'Türk Kültürü Stilleri',
    transform: (text) => coffeeCupTransform(text),
    platforms: ['instagram', 'whatsapp'],
  },
  {
    id: 'turkish-delight',
    name: '🍬 Lokum',
    description: 'Türk lokumu ile süslenmiş metin',
    category: 'Türk Kültürü Stilleri',
    transform: (text) => turkishDelightTransform(text),
    platforms: ['instagram', 'whatsapp'],
  },

  // TEXT EFFECT STYLES
  {
    id: 'strikethrough',
    name: 'Üstü Çizili (Strikethrough)',
    description: 'Üstü çizili metin efekti',
    category: 'Metin Efektleri',
    transform: (text) => strikethroughTransform(text),
    popular: true,
    platforms: ['instagram', 'whatsapp', 'twitter', 'discord'],
  },
  {
    id: 'underline',
    name: 'Altı Çizili (Underline)',
    description: 'Altı çizili metin efekti',
    category: 'Metin Efektleri',
    transform: (text) => underlineTransform(text),
    popular: true,
    platforms: ['instagram', 'whatsapp', 'twitter', 'discord'],
  },
  {
    id: 'double-underline',
    name: 'Çift Alt Çizgi',
    description: 'Çift altı çizili metin efekti',
    category: 'Metin Efektleri',
    transform: (text) => doubleUnderlineTransform(text),
    platforms: ['instagram', 'discord'],
  },
  {
    id: 'inverted',
    name: 'Ters Yazı (Upside Down)',
    description: 'Baş aşağı çevrilmiş metin',
    category: 'Metin Efektleri',
    transform: (text) => invertedTransform(text),
    popular: true,
    platforms: ['instagram', 'whatsapp', 'tiktok', 'discord'],
  },
  {
    id: 'subscript',
    name: 'Alt Simge (Subscript)',
    description: 'Küçük alt simge yazısı',
    category: 'Metin Efektleri',
    transform: (text) => subscriptTransform(text),
    platforms: ['instagram', 'twitter', 'discord'],
  },
  {
    id: 'superscript',
    name: 'Üst Simge (Superscript)',
    description: 'Küçük üst simge yazısı',
    category: 'Metin Efektleri',
    transform: (text) => superscriptTransform(text),
    platforms: ['instagram', 'twitter', 'discord'],
  },
  {
    id: 'negative-squared',
    name: 'Siyah Kare (Negative Squared)',
    description: 'Siyah kare içinde harfler',
    category: 'Metin Efektleri',
    transform: (text) => negativeSquaredTransform(text),
    popular: true,
    platforms: ['instagram', 'whatsapp', 'tiktok'],
  },
  {
    id: 'glitch',
    name: 'Glitch/Zalgo',
    description: 'Bozuk/korku efektli metin',
    category: 'Metin Efektleri',
    transform: (text) => glitchTransform(text),
    popular: true,
    platforms: ['instagram', 'discord', 'tiktok'],
  },
  {
    id: 'light-glitch',
    name: 'Hafif Glitch',
    description: 'Hafif bozuk efektli metin',
    category: 'Metin Efektleri',
    transform: (text) => lightGlitchTransform(text),
    platforms: ['instagram', 'discord'],
  },
  {
    id: 'wavy',
    name: 'Dalgalı Yazı',
    description: 'Dalgalı tilde efektli metin',
    category: 'Metin Efektleri',
    transform: (text) => wavyTransform(text),
    platforms: ['instagram', 'whatsapp', 'discord'],
  },
  {
    id: 'dotted',
    name: 'Noktalı Yazı',
    description: 'Üstü noktalı metin efekti',
    category: 'Metin Efektleri',
    transform: (text) => dottedTransform(text),
    platforms: ['instagram', 'discord'],
  },

  // ========== NEW UNICODE STYLES ==========
  {
    id: 'parenthesized',
    name: 'Parantezli Harfler',
    description: 'Parantez içinde harfler',
    category: 'Yeni Unicode Stilleri',
    transform: (text) => transformText(text, parenthesizedMappings),
    platforms: ['instagram', 'twitter'],
  },
  {
    id: 'bold-fraktur',
    name: 'Kalın Fraktur',
    description: 'Kalın gotik yazı stili',
    category: 'Yeni Unicode Stilleri',
    transform: (text) => transformText(text, boldFrakturMappings),
    platforms: ['instagram', 'discord'],
  },
  {
    id: 'negative-circled',
    name: 'Dolu Daire (Negatif)',
    description: 'Dolu daire içinde harfler',
    category: 'Yeni Unicode Stilleri',
    transform: (text) => transformText(text, negativeCircledMappings),
    popular: true,
    platforms: ['instagram', 'tiktok'],
  },
  {
    id: 'sans-serif-bold',
    name: 'Sans-Serif Kalın',
    description: 'Sans-serif kalın yazı stili',
    category: 'Yeni Unicode Stilleri',
    transform: (text) => transformText(text, sansSerifBoldMappings),
    platforms: ['instagram', 'whatsapp', 'twitter'],
  },
  {
    id: 'sans-serif-italic',
    name: 'Sans-Serif İtalik',
    description: 'Sans-serif italik yazı stili',
    category: 'Yeni Unicode Stilleri',
    transform: (text) => transformText(text, sansSerifItalicMappings),
    platforms: ['instagram', 'whatsapp', 'twitter'],
  },
  {
    id: 'sans-serif-bold-italic',
    name: 'Sans Kalın İtalik',
    description: 'Sans-serif kalın italik yazı stili',
    category: 'Yeni Unicode Stilleri',
    transform: (text) => transformText(text, sansSerifBoldItalicMappings),
    platforms: ['instagram', 'whatsapp', 'twitter'],
  },
  {
    id: 'rune-text',
    name: 'Runik Yazı',
    description: 'Antik runik alfabe stili',
    category: 'Yeni Unicode Stilleri',
    transform: (text) => transformText(text, runeMappings),
    popular: true,
    platforms: ['instagram', 'discord', 'tiktok'],
  },
  {
    id: 'leetspeak',
    name: 'Leetspeak (1337)',
    description: 'Hacker tarzı sayılı yazı',
    category: 'Yeni Unicode Stilleri',
    transform: (text) => transformText(text, leetspeakMappings),
    popular: true,
    platforms: ['instagram', 'discord', 'tiktok'],
  },

  // ========== GAMING/E-SPORTS STYLES ==========
  {
    id: 'pro-gamer-tag',
    name: 'Pro Gamer Tag',
    description: 'Profesyonel oyuncu etiketi stili',
    category: 'Oyuncu Stilleri',
    transform: (text) => proGamerTagTransform(text),
    popular: true,
    platforms: ['instagram', 'discord', 'tiktok'],
  },
  {
    id: 'clan-tag',
    name: 'Klan Etiketi',
    description: 'Oyun klanı etiketi stili',
    category: 'Oyuncu Stilleri',
    transform: (text) => clanTagTransform(text),
    popular: true,
    platforms: ['instagram', 'discord', 'tiktok'],
  },
  {
    id: 'esports-style',
    name: 'E-Spor Stili',
    description: 'E-spor takımı stili',
    category: 'Oyuncu Stilleri',
    transform: (text) => eSportsTransform(text),
    platforms: ['instagram', 'discord', 'twitter'],
  },
  {
    id: 'gamer-wings',
    name: 'Oyuncu Kanatları',
    description: 'Yıldızlı kanat dekorasyonu',
    category: 'Oyuncu Stilleri',
    transform: (text) => gamerWingsTransform(text),
    popular: true,
    platforms: ['instagram', 'discord', 'tiktok'],
  },
  {
    id: 'battle-tag',
    name: 'Savaş Etiketi',
    description: 'Savaşçı tarzı geometrik stil',
    category: 'Oyuncu Stilleri',
    transform: (text) => battleTagTransform(text),
    platforms: ['instagram', 'discord'],
  },
  {
    id: 'matrix-style',
    name: 'Matrix Stili',
    description: 'Siber/Matrix glitch efekti',
    category: 'Oyuncu Stilleri',
    transform: (text) => matrixTransform(text),
    platforms: ['instagram', 'discord', 'tiktok'],
  },

  // ========== NEW TURKISH/OTTOMAN CULTURAL STYLES ==========
  {
    id: 'ottoman-style',
    name: '۩ Osmanlı Stili',
    description: 'Osmanlı süslemesi ile metin',
    category: 'Yeni Türk Kültürü',
    transform: (text) => ottomanTransform(text),
    popular: true,
    platforms: ['instagram', 'whatsapp', 'tiktok'],
  },
  {
    id: 'mosque-style',
    name: '🕌 Cami/Minare',
    description: 'Cami emojisi ile süslenmiş',
    category: 'Yeni Türk Kültürü',
    transform: (text) => mosqueTransform(text),
    popular: true,
    platforms: ['instagram', 'whatsapp', 'tiktok'],
  },
  {
    id: 'crescent-style',
    name: '☪ Hilal',
    description: 'Hilal sembolü ile süslenmiş',
    category: 'Yeni Türk Kültürü',
    transform: (text) => crescentTransform(text),
    popular: true,
    platforms: ['instagram', 'whatsapp', 'tiktok'],
  },
  {
    id: 'turkish-tea',
    name: '🍵 Türk Çayı',
    description: 'Çay bardağı ve demlik ile süslenmiş',
    category: 'Yeni Türk Kültürü',
    transform: (text) => turkishTeaTransform(text),
    popular: true,
    platforms: ['instagram', 'whatsapp', 'tiktok'],
  },
  {
    id: 'simit-style',
    name: '🥯 Simit',
    description: 'Türk simidi ile süslenmiş',
    category: 'Yeni Türk Kültürü',
    transform: (text) => simitTransform(text),
    popular: true,
    platforms: ['instagram', 'whatsapp', 'tiktok'],
  },
  {
    id: 'kebab-style',
    name: '🍢 Kebap',
    description: 'Kebap emojisi ile süslenmiş',
    category: 'Yeni Türk Kültürü',
    transform: (text) => kebabTransform(text),
    platforms: ['instagram', 'whatsapp', 'tiktok'],
  },
  {
    id: 'kilim-pattern',
    name: '◆ Kilim Deseni',
    description: 'Türk kilimi deseni ile süslenmiş',
    category: 'Yeni Türk Kültürü',
    transform: (text) => kilimTransform(text),
    popular: true,
    platforms: ['instagram', 'whatsapp'],
  },
  {
    id: 'iznik-tile',
    name: '❖ İznik Çini',
    description: 'İznik çini deseni stili',
    category: 'Yeni Türk Kültürü',
    transform: (text) => iznikTransform(text),
    platforms: ['instagram', 'whatsapp'],
  },
  {
    id: 'semazen-style',
    name: '࿊ Semazen',
    description: 'Semazen/Mevlevi stili',
    category: 'Yeni Türk Kültürü',
    transform: (text) => semazenTransform(text),
    platforms: ['instagram', 'whatsapp'],
  },
  {
    id: 'tughra-style',
    name: '༺ Tuğra Stili',
    description: 'Osmanlı tuğrası ilhamlı',
    category: 'Yeni Türk Kültürü',
    transform: (text) => tughraTransform(text),
    popular: true,
    platforms: ['instagram', 'whatsapp'],
  },
  {
    id: 'anatolian-motif',
    name: '۞ Anadolu Motifi',
    description: 'Anadolu motifi ile süslenmiş',
    category: 'Yeni Türk Kültürü',
    transform: (text) => anatolianTransform(text),
    platforms: ['instagram', 'whatsapp'],
  },
  {
    id: 'baklava-style',
    name: '🍯 Baklava',
    description: 'Baklava emojisi ile süslenmiş',
    category: 'Yeni Türk Kültürü',
    transform: (text) => baklavaTransform(text),
    platforms: ['instagram', 'whatsapp', 'tiktok'],
  },
  {
    id: 'doner-style',
    name: '🥙 Döner',
    description: 'Döner emojisi ile süslenmiş',
    category: 'Yeni Türk Kültürü',
    transform: (text) => donerTransform(text),
    platforms: ['instagram', 'whatsapp', 'tiktok'],
  },

  // ========== COMBINING CHARACTER EFFECTS ==========
  {
    id: 'double-acute',
    name: 'Çift Tırnak Üstü',
    description: 'Çift aksan işareti efekti',
    category: 'Karakter Efektleri',
    transform: (text) => doubleAcuteTransform(text),
    platforms: ['instagram', 'discord'],
  },
  {
    id: 'ring-above',
    name: 'Halka Üstü',
    description: 'Halka işareti efekti',
    category: 'Karakter Efektleri',
    transform: (text) => ringAboveTransform(text),
    platforms: ['instagram', 'discord'],
  },
  {
    id: 'x-above',
    name: 'X İşareti Üstü',
    description: 'X işareti efekti',
    category: 'Karakter Efektleri',
    transform: (text) => xAboveTransform(text),
    platforms: ['instagram', 'discord'],
  },
  {
    id: 'hook-above',
    name: 'Kanca Üstü',
    description: 'Kanca işareti efekti',
    category: 'Karakter Efektleri',
    transform: (text) => hookAboveTransform(text),
    platforms: ['instagram', 'discord'],
  },
  {
    id: 'macron-above',
    name: 'Düz Çizgi Üstü',
    description: 'Düz çizgi (macron) efekti',
    category: 'Karakter Efektleri',
    transform: (text) => macronTransform(text),
    platforms: ['instagram', 'discord'],
  },
  {
    id: 'breve-above',
    name: 'Kıvrımlı Üstü',
    description: 'Kıvrımlı işaret (breve) efekti',
    category: 'Karakter Efektleri',
    transform: (text) => breveTransform(text),
    platforms: ['instagram', 'discord'],
  },
  {
    id: 'cedilla-below',
    name: 'Cedilla Altı',
    description: 'Cedilla işareti efekti',
    category: 'Karakter Efektleri',
    transform: (text) => cedillaTransform(text),
    platforms: ['instagram', 'discord'],
  },
  {
    id: 'ogonek-below',
    name: 'Kuyruklu (Ogonek)',
    description: 'Kuyruk işareti efekti',
    category: 'Karakter Efektleri',
    transform: (text) => ogonekTransform(text),
    platforms: ['instagram', 'discord'],
  },
  {
    id: 'circumflex-above',
    name: 'Şapka Üstü',
    description: 'Şapka (circumflex) efekti',
    category: 'Karakter Efektleri',
    transform: (text) => circumflexTransform(text),
    platforms: ['instagram', 'discord'],
  },
  {
    id: 'long-slash',
    name: 'Kesik Çizgi',
    description: 'Uzun kesik çizgi efekti',
    category: 'Karakter Efektleri',
    transform: (text) => longSlashTransform(text),
    platforms: ['instagram', 'discord'],
  },

  // ========== VAPORWAVE/AESTHETIC STYLES ==========
  {
    id: 'spaced-aesthetic',
    name: 'Boşluklu Estetik',
    description: 'Boşluklu büyük harfli estetik',
    category: 'Estetik Stiller',
    transform: (text) => spacedAestheticTransform(text),
    popular: true,
    platforms: ['instagram', 'tiktok'],
  },
  {
    id: 'retro-wave',
    name: 'Retro Dalga',
    description: 'Retro dalga gradyan stili',
    category: 'Estetik Stiller',
    transform: (text) => retroWaveTransform(text),
    popular: true,
    platforms: ['instagram', 'tiktok'],
  },
  {
    id: 'neon-block',
    name: 'Neon Blok',
    description: 'Neon blok stili',
    category: 'Estetik Stiller',
    transform: (text) => neonBlockTransform(text),
    platforms: ['instagram', 'tiktok'],
  },
  {
    id: 'wave-pattern',
    name: 'Dalga Deseni',
    description: 'Dalga deseni stili',
    category: 'Estetik Stiller',
    transform: (text) => wavePatternTransform(text),
    platforms: ['instagram', 'tiktok'],
  },
  {
    id: 'retro-line',
    name: '80ler Retro',
    description: '80ler retro çizgi stili',
    category: 'Estetik Stiller',
    transform: (text) => retroLineTransform(text),
    platforms: ['instagram', 'tiktok'],
  },
  {
    id: 'pixel-block',
    name: 'Piksel Blok',
    description: 'Piksel blok stili',
    category: 'Estetik Stiller',
    transform: (text) => pixelBlockTransform(text),
    platforms: ['instagram', 'tiktok'],
  },

  // ========== DECORATIVE BORDER STYLES ==========
  {
    id: 'japanese-quotes',
    name: 'Japon Tırnakları',
    description: 'Japon tırnak işaretleri',
    category: 'Dekoratif Çerçeveler',
    transform: (text) => japaneseQuotesTransform(text),
    platforms: ['instagram', 'twitter'],
  },
  {
    id: 'white-corner',
    name: 'Beyaz Köşeli',
    description: 'Beyaz köşeli parantezler',
    category: 'Dekoratif Çerçeveler',
    transform: (text) => whiteCornerTransform(text),
    platforms: ['instagram', 'twitter'],
  },
  {
    id: 'double-line-border',
    name: 'Çift Çizgi',
    description: 'Çift çizgi çerçeve',
    category: 'Dekoratif Çerçeveler',
    transform: (text) => doubleLineTransform(text),
    platforms: ['instagram', 'twitter'],
  },
  {
    id: 'arrow-pattern',
    name: 'Ok Deseni',
    description: 'Ok deseni çerçeve',
    category: 'Dekoratif Çerçeveler',
    transform: (text) => arrowPatternTransform(text),
    popular: true,
    platforms: ['instagram', 'twitter'],
  },
  {
    id: 'star-sparkle-pattern',
    name: 'Yıldız Parıltı',
    description: 'Yıldız parıltı deseni',
    category: 'Dekoratif Çerçeveler',
    transform: (text) => starSparklePatternTransform(text),
    popular: true,
    platforms: ['instagram', 'tiktok'],
  },
  {
    id: 'flower-border',
    name: 'Çiçek Çerçeve',
    description: 'Çiçek çerçeve stili',
    category: 'Dekoratif Çerçeveler',
    transform: (text) => flowerBorderTransform(text),
    platforms: ['instagram', 'whatsapp'],
  },
  {
    id: 'wings-style',
    name: 'Kanat Stili',
    description: 'Kanat dekorasyon stili',
    category: 'Dekoratif Çerçeveler',
    transform: (text) => wingsStyleTransform(text),
    popular: true,
    platforms: ['instagram', 'tiktok'],
  },
  {
    id: 'box-frame',
    name: 'Kutu Çerçeve',
    description: 'Kutu çerçeve stili',
    category: 'Dekoratif Çerçeveler',
    transform: (text) => boxFrameTransform(text),
    platforms: ['instagram', 'discord'],
  },
  {
    id: 'fancy-arrows',
    name: 'Süslü Oklar',
    description: 'Süslü ok çerçeve',
    category: 'Dekoratif Çerçeveler',
    transform: (text) => fancyArrowsTransform(text),
    platforms: ['instagram', 'twitter'],
  },
  {
    id: 'diamond-border',
    name: 'Elmas Çerçeve',
    description: 'Elmas deseni çerçeve',
    category: 'Dekoratif Çerçeveler',
    transform: (text) => diamondBorderTransform(text),
    platforms: ['instagram', 'tiktok'],
  },

  // ========== NEW EMOJI COMBINATIONS ==========
  {
    id: 'angel-wings',
    name: '👼 Melek Kanatları',
    description: 'Melek emojisi ile süslenmiş',
    category: 'Yeni Emoji Stilleri',
    transform: (text) => angelWingsTransform(text),
    platforms: ['instagram', 'whatsapp', 'tiktok'],
  },
  {
    id: 'eye-style',
    name: '👁️ Göz Stili',
    description: 'Göz emojisi ile süslenmiş',
    category: 'Yeni Emoji Stilleri',
    transform: (text) => eyeStyleTransform(text),
    platforms: ['instagram', 'tiktok'],
  },
  {
    id: 'yin-yang',
    name: '☯ Yin Yang',
    description: 'Yin Yang sembolü ile süslenmiş',
    category: 'Yeni Emoji Stilleri',
    transform: (text) => yinYangTransform(text),
    platforms: ['instagram', 'tiktok'],
  },
  {
    id: 'shield-style',
    name: '🛡️ Kalkan Stili',
    description: 'Kalkan emojisi ile süslenmiş',
    category: 'Yeni Emoji Stilleri',
    transform: (text) => shieldStyleTransform(text),
    platforms: ['instagram', 'discord'],
  },
  {
    id: 'sword-style',
    name: '⚔️ Kılıç Stili',
    description: 'Kılıç emojisi ile süslenmiş',
    category: 'Yeni Emoji Stilleri',
    transform: (text) => swordStyleTransform(text),
    popular: true,
    platforms: ['instagram', 'discord', 'tiktok'],
  },
  {
    id: 'crown-heart',
    name: '👑❤️ Taç Kalp',
    description: 'Taç ve kalp kombinasyonu',
    category: 'Yeni Emoji Stilleri',
    transform: (text) => crownHeartTransform(text),
    popular: true,
    platforms: ['instagram', 'whatsapp', 'tiktok'],
  },
  {
    id: 'lightning-fire',
    name: '⚡🔥 Yıldırım Ateş',
    description: 'Yıldırım ve ateş kombinasyonu',
    category: 'Yeni Emoji Stilleri',
    transform: (text) => lightningFireTransform(text),
    popular: true,
    platforms: ['instagram', 'tiktok'],
  },
  {
    id: 'crystal-ball',
    name: '🔮 Kristal Küre',
    description: 'Kristal küre emojisi ile süslenmiş',
    category: 'Yeni Emoji Stilleri',
    transform: (text) => crystalBallTransform(text),
    platforms: ['instagram', 'tiktok'],
  },
  {
    id: 'green-heart',
    name: '💚 Yeşil Kalp',
    description: 'Yeşil kalp emojisi ile süslenmiş',
    category: 'Yeni Emoji Stilleri',
    transform: (text) => greenHeartTransform(text),
    platforms: ['instagram', 'whatsapp'],
  },
  {
    id: 'black-heart',
    name: '🖤 Siyah Kalp',
    description: 'Siyah kalp emojisi ile süslenmiş',
    category: 'Yeni Emoji Stilleri',
    transform: (text) => blackHeartTransform(text),
    popular: true,
    platforms: ['instagram', 'whatsapp', 'tiktok'],
  },
  {
    id: 'blue-heart',
    name: '💙 Mavi Kalp',
    description: 'Mavi kalp emojisi ile süslenmiş',
    category: 'Yeni Emoji Stilleri',
    transform: (text) => blueHeartTransform(text),
    platforms: ['instagram', 'whatsapp'],
  },
  {
    id: 'purple-heart',
    name: '💜 Mor Kalp',
    description: 'Mor kalp emojisi ile süslenmiş',
    category: 'Yeni Emoji Stilleri',
    transform: (text) => purpleHeartTransform(text),
    platforms: ['instagram', 'whatsapp'],
  },
  {
    id: 'snowflake-style',
    name: '❄️ Kar Tanesi',
    description: 'Kar tanesi emojisi ile süslenmiş',
    category: 'Yeni Emoji Stilleri',
    transform: (text) => snowflakeTransform(text),
    platforms: ['instagram', 'whatsapp'],
  },
  {
    id: 'leaf-style',
    name: '🍃 Yaprak Stili',
    description: 'Yaprak emojisi ile süslenmiş',
    category: 'Yeni Emoji Stilleri',
    transform: (text) => leafStyleTransform(text),
    platforms: ['instagram', 'whatsapp'],
  },
  {
    id: 'cherry-blossom',
    name: '🌸 Kiraz Çiçeği',
    description: 'Kiraz çiçeği emojisi ile süslenmiş',
    category: 'Yeni Emoji Stilleri',
    transform: (text) => cherryBlossomTransform(text),
    popular: true,
    platforms: ['instagram', 'whatsapp', 'tiktok'],
  },

  // ========== TEXT TRANSFORMATION STYLES ==========
  {
    id: 'mirror-text',
    name: 'Ayna Yazı',
    description: 'Tersten/ayna yazı stili',
    category: 'Metin Dönüşümleri',
    transform: (text) => mirrorTransform(text),
    platforms: ['instagram', 'whatsapp', 'tiktok'],
  },
  {
    id: 'alternating-caps',
    name: 'Karışık Büyük/Küçük',
    description: 'Spongebob meme stili',
    category: 'Metin Dönüşümleri',
    transform: (text) => alternatingCapsTransform(text),
    popular: true,
    platforms: ['instagram', 'twitter', 'tiktok'],
  },
  {
    id: 'title-case',
    name: 'Başlık Formatı',
    description: 'Her kelimenin ilk harfi büyük',
    category: 'Metin Dönüşümleri',
    transform: (text) => titleCaseTransform(text),
    platforms: ['instagram', 'twitter'],
  },
  {
    id: 'morse-code',
    name: 'Mors Kodu',
    description: 'Mors kodu stili',
    category: 'Metin Dönüşümleri',
    transform: (text) => morseStyleTransform(text),
    platforms: ['instagram', 'discord'],
  },
  {
    id: 'binary-style',
    name: 'Binary (İkili)',
    description: 'İkili kod stili',
    category: 'Metin Dönüşümleri',
    transform: (text) => binaryStyleTransform(text),
    platforms: ['instagram', 'discord'],
  },
  {
    id: 'enclosed-numbers',
    name: 'Daire İçinde Sayılar',
    description: 'Daire içinde sayılar stili',
    category: 'Metin Dönüşümleri',
    transform: (text) => enclosedTransform(text),
    platforms: ['instagram', 'twitter'],
  },
];
