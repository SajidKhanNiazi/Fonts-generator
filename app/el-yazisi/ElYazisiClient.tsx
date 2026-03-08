'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Language } from '@/lib/translations'
import './el-yazisi.css'

const FONTS = [
  { family: 'Dancing Script', category: 'Klasik El Yazısı' },
  { family: 'Great Vibes', category: 'Klasik El Yazısı' },
  { family: 'Pacifico', category: 'Klasik El Yazısı' },
  { family: 'Sacramento', category: 'Klasik El Yazısı' },
  { family: 'Allura', category: 'Klasik El Yazısı' },
  { family: 'Pinyon Script', category: 'Klasik El Yazısı' },
  { family: 'Alex Brush', category: 'Klasik El Yazısı' },
  { family: 'Italianno', category: 'Klasik El Yazısı' },
  { family: 'Clicker Script', category: 'Klasik El Yazısı' },
  { family: 'Lovers Quarrel', category: 'Klasik El Yazısı' },
  { family: 'Caveat', category: 'Eğlenceli' },
  { family: 'Patrick Hand', category: 'Eğlenceli' },
  { family: 'Indie Flower', category: 'Eğlenceli' },
  { family: 'Just Me Again Down Here', category: 'Eğlenceli' },
  { family: 'Shadows Into Light', category: 'Eğlenceli' },
  { family: 'Architects Daughter', category: 'Eğlenceli' },
  { family: 'Parisienne', category: 'Zarif' },
  { family: 'Monsieur La Doulaise', category: 'Zarif' },
  { family: 'Ruthie', category: 'Zarif' },
  { family: 'Euphoria Script', category: 'Zarif' },
  { family: 'Mrs Saint Delafield', category: 'Zarif' },
  { family: 'Petit Formal Script', category: 'Zarif' },
  { family: 'Kalam', category: 'Modern' },
  { family: 'Handlee', category: 'Modern' },
  { family: 'Nanum Pen Script', category: 'Modern' },
  { family: 'Gochi Hand', category: 'Modern' },
  { family: 'Leckerli One', category: 'Modern' },
  { family: 'Permanent Marker', category: 'Dolmakalem' },
  { family: 'Rock Salt', category: 'Dolmakalem' },
  { family: 'Reenie Beanie', category: 'Dolmakalem' },
  { family: 'Covered By Your Grace', category: 'Dolmakalem' },
  { family: 'Give You Glory', category: 'Dolmakalem' },
  { family: 'Short Stack', category: 'Baskı El Yazısı' },
  { family: 'Zeyada', category: 'Baskı El Yazısı' },
  { family: 'Neucha', category: 'Baskı El Yazısı' },
  { family: 'Fuzzy Bubbles', category: 'Baskı El Yazısı' },
  { family: 'Delius', category: 'Baskı El Yazısı' },
  { family: 'Mr De Haviland', category: 'Dekoratif İmza' },
  { family: 'Meie Script', category: 'Dekoratif İmza' },
  { family: 'Herr Von Muellerhoff', category: 'Dekoratif İmza' },
  { family: 'Niconne', category: 'Dekoratif İmza' },
  { family: 'Tangerine', category: 'Dekoratif İmza' },
  { family: 'Almendra', category: 'Vintage' },
  { family: 'MedievalSharp', category: 'Vintage' },
  { family: 'Stalemate', category: 'Zarif' },
  { family: 'Satisfy', category: 'Klasik El Yazısı' },
  { family: 'Yellowtail', category: 'Klasik El Yazısı' },
  { family: 'Marck Script', category: 'Modern' },
  { family: 'Bad Script', category: 'Eğlenceli' },
  { family: 'Cookie', category: 'Klasik El Yazısı' },
  { family: 'Amatic SC', category: 'Eğlenceli' },
  { family: 'Homemade Apple', category: 'Dolmakalem' },
  { family: 'Nothing You Could Do', category: 'Baskı El Yazısı' },
  { family: 'La Belle Aurore', category: 'Dekoratif İmza' },
  { family: 'Over the Rainbow', category: 'Eğlenceli' },
  { family: 'Cedarville Cursive', category: 'Klasik El Yazısı' },
  { family: 'Sue Ellen Francisco', category: 'Baskı El Yazısı' },
  { family: 'Dawning of a New Day', category: 'Modern' },
  { family: 'Waiting for the Sunrise', category: 'Eğlenceli' },
]

function FontCard({ font, text, index }: { font: typeof FONTS[0]; text: string; index: number }) {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const handleCopy = useCallback(() => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(font.family).then(() => {
        setCopied(true)
      }).catch(() => {
        fallbackCopy(font.family)
      })
    } else {
      fallbackCopy(font.family)
    }
  }, [font.family])

  const fallbackCopy = (str: string) => {
    const ta = document.createElement('textarea')
    ta.value = str
    ta.style.position = 'fixed'
    ta.style.left = '-9999px'
    document.body.appendChild(ta)
    ta.select()
    try { document.execCommand('copy'); setCopied(true) } catch { }
    document.body.removeChild(ta)
  }

  useEffect(() => {
    if (copied) {
      timerRef.current = setTimeout(() => setCopied(false), 1500)
      return () => { if (timerRef.current) clearTimeout(timerRef.current) }
    }
  }, [copied])

  return (
    <div
      className="ey-card"
      style={{ animationDelay: `${index * 10}ms` }}
    >
      <div
        className="ey-preview"
        style={{ fontFamily: `'${font.family}', cursive` }}
      >
        {text}
      </div>
      <div className="ey-card-footer">
        <span className="ey-font-name">{font.family}</span>
        <button
          className={`ey-copy-btn${copied ? ' ey-copied' : ''}`}
          onClick={handleCopy}
          aria-label={`${font.family} fontunu kopyala`}
        >
          {copied ? 'Kopyalandı ✓' : 'Kopyala'}
        </button>
      </div>
    </div>
  )
}

export default function ElYazisiClient() {
  const [text, setText] = useState('El Yazısı')
  const [lang, setLang] = useState<Language>('tr')
  const [darkMode, setDarkMode] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

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

      // Intersection Observer for reveal animations
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

      return () => observer.disconnect()
    }
  }, [darkMode, mounted])

  const displayText = text || 'El Yazısı'

  return (
    <div className={`ey-wrapper ${mounted && darkMode ? 'dark' : ''}`}>
      <Header
        lang={lang}
        setLang={setLang}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <div className="ey-page">
        {/* Full-Screen Hero Section */}
        <div className="hero-section-fullscreen">
          <div className="hero-bg-fullscreen">
            <div className="hero-gradient-animated"></div>
            <div className="hero-particles-animated">
              <div className="particle particle-1">✨</div>
              <div className="particle particle-2">🎨</div>
              <div className="particle particle-3">⭐</div>
              <div className="particle particle-4">💫</div>
              <div className="particle particle-5">🌟</div>
            </div>
          </div>

          <div className="hero-content-fullscreen" style={{ paddingBottom: '4rem' }}>
            <div className="hero-badge-modern">
              <span className="badge-pulse"></span>
              <span className="badge-icon">✍️</span>
              <span className="badge-text">58 Font Stili</span>
            </div>

            <h1 className="hero-title-fullscreen">
              <span className="title-line-animated">
                <span className="title-word-animated">{lang === 'tr' ? 'El Yazısı' : 'Handwriting'}</span>
                <span className="title-word-animated highlight-gradient">{lang === 'tr' ? 'Fontları' : 'Fonts'}</span>
              </span>
            </h1>

            <p className="hero-description-fullscreen">
              {lang === 'tr'
                ? 'Metninizi yazın, 58 farklı el yazısı stilinde anında görün.'
                : 'Type your text and see it instantly in 58 different handwriting styles.'}
            </p>

            {/* Premium Input Section */}
            <div className="hero-input-fullscreen">
              <div className="input-glow-effect"></div>
              <div className="input-container-glass">
                <div className="input-header-premium">
                  <div className="input-icon-premium">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#eyGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <defs>
                        <linearGradient id="eyGrad" x1="2" y1="2" x2="22" y2="22">
                          <stop offset="0%" stopColor="#4f46e5" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="input-header-text-premium">
                    <div className="input-title-simple">{lang === 'tr' ? 'Önizleme Metniniz' : 'Your Preview Text'}</div>
                    <p>{lang === 'tr' ? 'Yazınızı buraya girin...' : 'Type your text here...'}</p>
                  </div>
                </div>

                <div className="input-field-premium">
                  <textarea
                    ref={inputRef as any}
                    className="text-input-premium"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder={lang === 'tr' ? 'Yazınızı buraya girin...' : 'Type your text here...'}
                    rows={2}
                    maxLength={500}
                    spellCheck={false}
                  />
                  {text && (
                    <button
                      className="clear-btn-premium"
                      onClick={() => setText('')}
                      aria-label="Temizle"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="ey-grid-container">
          <div className="ey-grid">
            {FONTS.map((font, i) => (
              <FontCard key={font.family} font={font} text={displayText} index={i} />
            ))}
          </div>

          {/* Article Content Section */}
          <article className="ey-article reveal">
            <section className="ey-section">
              <p>
                Saatlerce aradınız. Sonunda mükemmel el yazısı fontunu buldunuz. İndirdiniz, Canva&apos;ya yüklediniz, düğün davetiyesi metninizi yazdınız ve sonra o şeyi gördünüz. &quot;ü&quot; harfi kırık bir kutuya dönüştü. İstanbul&apos;daki &quot;İ&quot; tamamen kayboldu. Tasarımınız mahvoldu.
              </p>
              <p>
                Bu sadece sizin sorununuz değil. Her gün yüzlerce Türk kullanıcının başına geliyor. Font indirme sayfasında çok güzel görünüyor. Hiçbir uyarı yok. Ancak en popüler el yazısı fontlarının çoğu Türkçe karakterleri — ğ, ş, ı, ö, ü, ç — hiç desteklemiyor.
              </p>
              <p>
                Daha da kötüsü, bir çözüm bulmak da kolay değil. Farklı siteleri deniyorsunuz. Bazı fontlar ücretli. Bazıları sadece İngilizce çalışıyor. Bazılarının &quot;yalnızca kişisel kullanım&quot; lisansları var — yani bunları bir müşteri projesi veya basılı bir ürün için kullanamazsınız. Her deneme size daha fazla zamana mal oluyor.
              </p>
            </section>

            <section className="ey-section">
              <h2>El Yazısı Fontu Nedir?</h2>
              <p>
                El yazısı fontu, elle yazılmış gibi görünen dijital bir yazı tipidir. İngilizcede buna &quot;cursive font&quot; veya &quot;script font&quot; denir. Bu fontlar, kalemin kağıt üzerindeki doğal akışını taklit eder.
              </p>
              <p>
                İki türü vardır. Birincisi, indirilebilir font dosyaları (.TTF veya .OTF). Bunlar Canva, Photoshop, Word ve Illustrator&apos;da çalışır. İkincisi, <a href="/" className="ey-link">Unicode tabanlı metin</a> araçlarıdır. Bunlar metninizi kopyalayıp yapıştırabileceğiniz özel karakterlere dönüştürür — Instagram biyografileri ve WhatsApp profilleri için harikadır.
              </p>
            </section>

            <section className="ey-section">
              <h2>El Yazısı Font Türleri</h2>
              <p>Tüm el yazısı fontları aynı görünmez. Her stilin farklı bir kişiliği ve en iyi kullanım alanı vardır.</p>

              <h3>Script Fontlar</h3>
              <p>Harfler birbirine pürüzsüzce bağlanır ve akar. Zarif ve klasik görünürler. <a href="https://www.aleynadavetiye.com/" target="_blank" rel="noopener noreferrer" className="ey-link">Düğün davetiyeleri</a> ve resmi tasarımlar için en iyisidir.</p>

              <h3>Cursive Fontlar</h3>
              <p>Sağa doğru hafifçe eğiktir. Dinamik ve modern bir his verir. İmzalar, alıntılar ve markalaşma için en iyisidir.</p>

              <h3>Fırça (Brush) Fontlar</h3>
              <p>Bir boya fırçasının görünümünü taklit eder. Organik ve doğaldır. Yaratıcı projeler ve sosyal medya grafikleri için en iyisidir.</p>

              <h3>Kaligrafi Fontları</h3>
              <p>Kalın ve ince çizgiler arasında güçlü bir kontrast vardır. Geleneksel kaligrafi sanatından ilham alır. Lüks markalaşma ve dekoratif tasarımlar için en iyisidir.</p>
            </section>

            <section className="ey-section">
              <h2>En İyi 10 Ücretsiz El Yazısı Fontu (Türkçe Karakter Destekli)</h2>
              <div className="table-responsive">
                <table className="ey-table">
                  <thead>
                    <tr>
                      <th>Font Adı</th>
                      <th>Stil</th>
                      <th>Türkçe Desteği</th>
                      <th>Lisans</th>
                      <th>Kaynak</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Dancing Script</td><td>Cursive</td><td>✅ Evet</td><td>Ücretsiz Ticari</td><td>Google Fonts</td></tr>
                    <tr><td>Great Vibes</td><td>Script</td><td>✅ Evet</td><td>Ücretsiz Ticari</td><td>Google Fonts</td></tr>
                    <tr><td>Pacifico</td><td>Fırça</td><td>✅ Evet</td><td>Ücretsiz Ticari</td><td>Google Fonts</td></tr>
                    <tr><td>Sacramento</td><td>Cursive</td><td>✅ Evet</td><td>Ücretsiz Ticari</td><td>Google Fonts</td></tr>
                    <tr><td>Caveat</td><td>Fırça</td><td>✅ Evet</td><td>Ücretsiz Ticari</td><td>Google Fonts</td></tr>
                    <tr><td>Allura</td><td>Script</td><td>✅ Evet</td><td>Ücretsiz Ticari</td><td>Google Fonts</td></tr>
                    <tr><td>Parisienne</td><td>Script</td><td>✅ Evet</td><td>Ücretsiz Ticari</td><td>Google Fonts</td></tr>
                    <tr><td>Permanent Marker</td><td>Fırça</td><td>✅ Evet</td><td>Ücretsiz Ticari</td><td>Google Fonts</td></tr>
                    <tr><td>El Yazması</td><td>El Yazısı</td><td>✅ Evet</td><td>Kişisel Kullanım</td><td>FontTr</td></tr>
                    <tr><td>Angilla Tattoo</td><td>Script</td><td>❌ Hayır</td><td>Kişisel Kullanım</td><td>DaFont / FontTr</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="ey-tip">
                💡 Tüm Google Fonts el yazısı fontları Türkçe karakterleri destekler ve ticari kullanım için ücretsizdir. Bunları müşteri işlerinde güvenle kullanın.
              </p>
            </section>

            <section className="ey-section">
              <h2>Aracımızı Nasıl Kullanırsınız?</h2>
              <p>yazi-stilleripro.com.tr adresindeki aracımız, normal metninizi anında düzinelerce farklı el yazısı stiline dönüştürür.</p>

              <h3>Adım 1: Metninizi Yazın</h3>
              <p>yazi-stilleripro.com.tr adresine gidin. Sayfanın üst kısmındaki metin giriş kutusunu bulun. İstediğiniz her şeyi yazın — bir isim, bir cümle, bir alıntı veya bir mesaj.</p>

              <h3>Adım 2: Stiller Arasında Gezinin</h3>
              <p>Siz yazdıkça, araç metninizi aynı anda düzinelerce farklı el yazısı stilinde oluşturur. Her stil, tam metninizin canlı bir önizlemesini gösterir.</p>

              <h3>Adım 3: En Sevdiğiniz Stili Kopyalayın</h3>
              <p>Sevdiğiniz bir stil mi buldunuz? Yanındaki &quot;Kopyala&quot; düğmesine tıklayın. Metniniz anında panonuza kopyalanır. Yapmanız gereken tek şey bu.</p>

              <h3>Adım 4: İstediğiniz Yere Yapıştırın</h3>
              <p>Şimdi dönüştürülmüş metninizi ihtiyacınız olan her yere yapıştırın. Instagram biyografilerinde, TikTok kullanıcı adlarında, WhatsApp profillerinde, Discord isimlerinde, Twitter biyografilerinde ve hatta Canva veya Word belgelerinde çalışır.</p>

              <div className="ey-highlight-box">
                <h3>Aracımızı Farklı Kılan Nedir?</h3>
                <ul>
                  <li>Tek bir girişten anında oluşturulan 500+ el yazısı stili</li>
                  <li>Tam Türkçe karakter desteği — her harf doğru şekilde görüntülenir</li>
                  <li>Herhangi bir uygulama indirmeden mobil ve masaüstünde çalışır</li>
                  <li>Tamamen ücretsiz — kayıt yok, limit yok, gizli adım yok</li>
                  <li>Tek tıkla kopyalayın — saniyeler içinde istediğiniz yere yapıştırın</li>
                </ul>
              </div>
            </section>

            <section className="ey-section">
              <h2>Kullanım Alanına Göre En İyi Fontlar</h2>
              <div className="table-responsive">
                <table className="ey-table">
                  <thead>
                    <tr>
                      <th>Kullanım Alanı</th>
                      <th>Önerilen Fontlar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Düğün Davetiyesi</td><td>Great Vibes, Allura, Parisienne</td></tr>
                    <tr><td>Dövme Tasarımı</td><td>Angilla Tattoo, Sacramento, Alex Brush</td></tr>
                    <tr><td>Instagram Biyografisi</td><td>Unicode cursive araçları, Dancing Script</td></tr>
                    <tr><td>Logo ve Markalaşma</td><td>Pacifico, Satisfy, Nickainley</td></tr>
                    <tr><td>Kartvizit</td><td>Nickainley, Hemmet, Dancing Script</td></tr>
                    <tr><td>Web Sitesi (Web Font)</td><td>Dancing Script, Caveat, Pacifico</td></tr>
                    <tr><td>T-Shirt Baskısı</td><td>Angilla Tattoo, Permanent Marker</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ey-section">
              <h2>Font Lisans Rehberi</h2>
              <div className="table-responsive">
                <table className="ey-table">
                  <thead>
                    <tr>
                      <th>Lisans Türü</th>
                      <th>Kişisel Kullanım</th>
                      <th>Ticari Kullanım</th>
                      <th>Örnekler</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Ücretsiz Ticari</td><td>✅ Evet</td><td>✅ Evet</td><td>Tüm Google Fontları</td></tr>
                    <tr><td>Sadece Kişisel Kullanım</td><td>✅ Evet</td><td>❌ Lisans Gerektirir</td><td>Angilla Tattoo, Nickainley</td></tr>
                    <tr><td>Ücretli Lisans</td><td>✅ Ücretli</td><td>✅ Ücretli</td><td>Premium DaFont fontları</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ey-faq-section">
              <h2>Sıkça Sorulan Sorular</h2>
              <div className="ey-faq-grid">
                <div className="ey-faq-item">
                  <h3>El yazısı fontları ücretsiz mi?</h3>
                  <p>Pek çoğu ücretsizdir. Google Fonts&apos;taki tüm fontlar kişisel ve ticari kullanım için ücretsizdir. DaFont&apos;taki fontlar yalnızca kişisel kullanım için ücretsiz olabilir — indirmeden önce her zaman lisans sayfasını kontrol edin.</p>
                </div>
                <div className="ey-faq-item">
                  <h3>Hangi el yazısı fontları Türkçe karakterleri destekler?</h3>
                  <p>Tüm Google Fonts el yazısı seçenekleri Türkçe karakterleri destekler. Dancing Script, Great Vibes, Pacifico, Caveat, Allura ve Parisienne Türkçe metinler için en güvenli seçimlerdir.</p>
                </div>
                <div className="ey-faq-item">
                  <h3>Word&apos;de el yazısı fontunu nasıl kullanırım?</h3>
                  <p>Önce fontu bilgisayarınıza kurun. Word&apos;ü yeniden başlatın. Üstteki font kutusuna font adını yazın. Metninizi seçin ve fontu uygulayın. Hemen çalışır.</p>
                </div>
                <div className="ey-faq-item">
                  <h3>Instagram&apos;da el yazısı stilinde nasıl yazarım?</h3>
                  <p>Bir Unicode font oluşturucu aracı kullanın. Metninizi yazın, bir cursive stili seçin, sonucu kopyalayın ve Instagram biyografinize veya gönderinize yapıştırın. Font kurulumuna gerek yoktur.</p>
                </div>
                <div className="ey-faq-item">
                  <h3>Dövmeler için en iyi el yazısı fontu hangisidir?</h3>
                  <p>Angilla Tattoo ve Sacramento en popüler seçeneklerdir. Orta ağırlıktaki çizgileri cilt üzerinde net görünür ve zamanla iyi korunur.</p>
                </div>
              </div>
            </section>

          </article>
        </main>
      </div>

      <Footer lang={lang} />
    </div>
  )
}
