# Yazı Stilleri - Türkçe Metin Stil Dönüştürücü

Modern, SEO-optimized Next.js tabanlı yazı stil dönüştürücü aracı. Türkçe kullanıcılar için özel olarak tasarlanmıştır.

## 🎯 Özellikler

- ✅ 20+ farklı yazı stili (Kalın, İtalik, Süslü, Gotik, vb.)
- ✅ Tam Türkçe karakter desteği (ç, ğ, ı, İ, ö, ş, ü)
- ✅ Anında dönüşüm ve tek tıkla kopyalama
- ✅ SEO optimize edilmiş (Yazı Stilleri anahtar kelimesi)
- ✅ Mobil uyumlu ve responsive tasarım
- ✅ Reklam yerleşimi için hazır alanlar
- ✅ Statik export (shared hosting için uygun)

## 🚀 Kurulum

### Gereksinimler

- Node.js 18+ 
- npm veya yarn

### Adımlar

1. **Bağımlılıkları yükleyin:**
```bash
npm install
```

2. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

3. **Production build:**
```bash
npm run build
```

Build işlemi tamamlandıktan sonra, `out` klasörü oluşturulacaktır.

## 📦 Hostinger Shared Hosting'e Deployment

### Yöntem 1: File Manager ile (Önerilen)

1. **Local'de build alın:**
```bash
npm run build
```

2. **`out` klasörünün içeriğini hazırlayın:**
   - `out` klasöründeki tüm dosyaları seçin
   - Bu dosyalar production için hazır statik dosyalardır

3. **Hostinger File Manager'a yükleyin:**
   - Hostinger kontrol panelinize giriş yapın
   - File Manager'ı açın
   - `public_html` klasörüne gidin (veya domain'inizin root klasörüne)
   - `out` klasöründeki **tüm dosyaları** buraya yükleyin
   - `.htaccess` dosyasının yüklendiğinden emin olun

4. **`.htaccess` dosyası oluşturun** (eğer yoksa):
   - `public_html` klasöründe `.htaccess` dosyası oluşturun
   - Aşağıdaki içeriği ekleyin:

```apache
RewriteEngine On
RewriteBase /

# Handle Next.js routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### Yöntem 2: FTP ile

1. Local'de build alın (yukarıdaki adımlar)
2. FTP client kullanarak (FileZilla, WinSCP, vb.)
3. `out` klasöründeki tüm dosyaları `public_html` klasörüne yükleyin
4. `.htaccess` dosyasını oluşturun/yükleyin

## 📁 Proje Yapısı

```
fonts/
├── app/
│   ├── layout.tsx          # Ana layout ve meta tags
│   ├── page.tsx            # Ana sayfa (font generator)
│   ├── globals.css         # Global stiller
│   ├── hakkimizda/
│   │   └── page.tsx        # Hakkımızda sayfası
│   └── gizlilik-politikasi/
│       └── page.tsx        # Gizlilik politikası
├── lib/
│   └── fontStyles.ts       # Font dönüşüm fonksiyonları
├── public/
│   ├── robots.txt          # SEO robots.txt
│   └── sitemap.xml         # SEO sitemap
├── next.config.js          # Next.js yapılandırması
├── package.json            # Bağımlılıklar
└── tsconfig.json           # TypeScript yapılandırması
```

## 🎨 Özelleştirme

### Font Stilleri Ekleme

`lib/fontStyles.ts` dosyasına yeni stil ekleyebilirsiniz:

```typescript
{
  id: 'yeni-stil',
  name: 'Yeni Stil',
  description: 'Stil açıklaması',
  transform: (text) => {
    // Dönüşüm mantığı
    return transformedText;
  },
}
```

### Renkleri Değiştirme

`app/globals.css` dosyasındaki CSS değişkenlerini düzenleyin:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #64748b;
  /* ... */
}
```

## 📊 SEO Optimizasyonu

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags
- ✅ Structured data hazır
- ✅ robots.txt ve sitemap.xml
- ✅ Semantic HTML yapısı
- ✅ H1, H2, H3 hiyerarşisi
- ✅ Türkçe içerik optimizasyonu

## 💰 Reklam Yerleşimi

Reklam alanları için hazır placeholder'lar:

1. **Top Banner:** Ana sayfa hero bölümünden sonra
2. **Between Content:** Font kartlarından sonra
3. **Bottom:** SEO içeriğinden sonra

Reklam kodlarınızı bu placeholder'ların yerine ekleyebilirsiniz.

## 🔧 Sorun Giderme

### Build hatası alıyorum
- Node.js versiyonunuzu kontrol edin (18+ olmalı)
- `node_modules` klasörünü silip `npm install` tekrar çalıştırın

### Sayfalar 404 veriyor
- `.htaccess` dosyasının doğru yüklendiğinden emin olun
- Hostinger'da mod_rewrite aktif olmalı

### Türkçe karakterler çalışmıyor
- Tarayıcınızın UTF-8 encoding kullandığından emin olun
- `layout.tsx` içinde `<meta charSet="utf-8" />` olduğunu kontrol edin

## 📝 Lisans

Bu proje özel kullanım içindir.

## 🤝 Destek

Sorularınız için issue açabilir veya iletişime geçebilirsiniz.

---

**Not:** Domain adınızı `sitemap.xml` ve `robots.txt` dosyalarında güncellemeyi unutmayın!
