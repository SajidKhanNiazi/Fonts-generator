# 🚀 Hostinger Shared Hosting Deployment Guide

## Hızlı Başlangıç

### 1. Local Build

```bash
# Bağımlılıkları yükle
npm install

# Production build al
npm run build
```

Build tamamlandıktan sonra `out` klasörü oluşacak.

### 2. Hostinger File Manager'a Yükleme

1. **Hostinger kontrol panelinize giriş yapın**
2. **File Manager'ı açın**
3. **`public_html` klasörüne gidin** (veya domain root klasörüne)
4. **`out` klasöründeki TÜM dosyaları seçin ve yükleyin:**
   - `index.html`
   - `_next/` klasörü (tüm içeriği ile)
   - `hakkimizda/` klasörü
   - `gizlilik-politikasi/` klasörü
   - `robots.txt`
   - `sitemap.xml`
   - `.htaccess` (önemli!)

### 3. .htaccess Kontrolü

`.htaccess` dosyası `public_html` klasöründe olmalı. Eğer yoksa:

1. File Manager'da "New File" tıklayın
2. Dosya adı: `.htaccess`
3. İçeriği `public/.htaccess` dosyasından kopyalayın

### 4. Domain Ayarları

**ÖNEMLİ:** `public/sitemap.xml` ve `public/robots.txt` dosyalarındaki domain adresini kendi domain'inizle değiştirin:

- `https://yazı-stilleripro.com.tr` → `https://yourdomain.com`

### 5. Test

1. Tarayıcınızda domain'inizi açın
2. Ana sayfanın yüklendiğini kontrol edin
3. Bir metin yazıp font stillerinin çalıştığını test edin
4. "Kopyala" butonunun çalıştığını test edin
5. Diğer sayfaları (Hakkımızda, Gizlilik Politikası) test edin

## ⚠️ Yaygın Sorunlar

### Sayfalar 404 veriyor

**Çözüm:**
- `.htaccess` dosyasının yüklendiğinden emin olun
- Hostinger'da mod_rewrite aktif olmalı (genellikle varsayılan olarak aktiftir)
- `.htaccess` dosyasının doğru konumda olduğunu kontrol edin (`public_html` root)

### Türkçe karakterler bozuk görünüyor

**Çözüm:**
- Tarayıcı encoding'inin UTF-8 olduğundan emin olun
- `.htaccess` dosyasında encoding ayarları olabilir (opsiyonel)

### Reklamlar görünmüyor

**Çözüm:**
- Reklam placeholder'ları (`ad-placeholder` class'ı) görünüyor olmalı
- AdSense veya diğer reklam kodlarınızı bu placeholder'ların yerine ekleyin
- HTML'de `<div className="ad-placeholder">` kısımlarını bulun ve reklam kodunuzla değiştirin

### Build hatası

**Çözüm:**
```bash
# node_modules'ı temizle
rm -rf node_modules
rm package-lock.json

# Tekrar yükle
npm install

# Tekrar build al
npm run build
```

## 📝 Post-Deployment Checklist

- [ ] Ana sayfa yükleniyor
- [ ] Font stilleri çalışıyor
- [ ] Kopyalama butonu çalışıyor
- [ ] Türkçe karakterler doğru görünüyor (ç, ğ, ı, İ, ö, ş, ü)
- [ ] Hakkımızda sayfası açılıyor
- [ ] Gizlilik Politikası sayfası açılıyor
- [ ] Mobil görünüm çalışıyor
- [ ] robots.txt erişilebilir (`yourdomain.com/robots.txt`)
- [ ] sitemap.xml erişilebilir (`yourdomain.com/sitemap.xml`)
- [ ] SEO meta tags doğru (tarayıcıda "View Source" ile kontrol)
- [ ] Reklam alanları hazır (placeholder'lar görünüyor)

## 🔄 Güncelleme

Siteyi güncellemek için:

1. Local'de değişiklikleri yapın
2. `npm run build` çalıştırın
3. `out` klasöründeki değişen dosyaları File Manager ile güncelleyin
4. Veya tüm `out` klasörünü tekrar yükleyin (eski dosyaların üzerine yazın)

## 📞 Destek

Sorun yaşarsanız:
- Hostinger mod_rewrite desteğini kontrol edin
- `.htaccess` dosyasının doğru yüklendiğinden emin olun
- Browser console'da hata var mı kontrol edin (F12)

---

**Not:** İlk deployment'dan sonra Google Search Console'a site eklemeyi unutmayın!
