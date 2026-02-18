import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gizlilik Politikası - Yazı Stilleri',
  description: 'Yazı Stilleri gizlilik politikası. Kişisel verilerinizin nasıl korunduğu ve kullanıldığı hakkında bilgi.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function GizlilikPolitikasi() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link href="/" className="logo">
              Yazı Stilleri
            </Link>
            <nav className="nav">
              <Link href="/" className="nav-link">
                Ana Sayfa
              </Link>
              <Link href="/insta-yazi-tipi" className="nav-link">
                İnstagram Yazı Tipi
              </Link>
              <Link href="/hakkimizda" className="nav-link">
                Hakkımızda
              </Link>
              <Link href="/gizlilik-politikasi" className="nav-link">
                Gizlilik Politikası
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="page-container">
          <h1 className="page-title">Gizlilik Politikası</h1>

          <div className="page-content">
            <p>
              <strong>Son Güncelleme:</strong> 2024
            </p>

            <h2>1. Giriş</h2>
            <p>
              Yazı Stilleri olarak, kullanıcılarımızın gizliliğine büyük önem veriyoruz. Bu gizlilik politikası,
              web sitemizi kullanırken toplanan bilgilerin nasıl kullanıldığını ve korunduğunu açıklamaktadır.
            </p>

            <h2>2. Toplanan Bilgiler</h2>
            <h3>2.1. Kişisel Olmayan Bilgiler</h3>
            <p>
              Web sitemiz, ziyaretçilerimizden herhangi bir kişisel bilgi toplamaz. Metin dönüştürme işlemleri
              tamamen tarayıcınızda, cihazınızda gerçekleşir. Yazdığınız metinler hiçbir şekilde sunucularımıza
              gönderilmez veya saklanmaz.
            </p>

            <h3>2.2. Otomatik Toplanan Bilgiler</h3>
            <p>
              Web sitemiz, standart web sunucu log dosyaları aracılığıyla şu bilgileri otomatik olarak toplayabilir:
            </p>
            <ul>
              <li>IP adresi</li>
              <li>Tarayıcı türü ve versiyonu</li>
              <li>İşletim sistemi</li>
              <li>Ziyaret edilen sayfalar</li>
              <li>Ziyaret tarihi ve saati</li>
              <li>Referans URL</li>
            </ul>
            <p>
              Bu bilgiler, web sitesinin işleyişini analiz etmek ve iyileştirmek için kullanılır.
            </p>

            <h2>3. Çerezler (Cookies)</h2>
            <p>
              Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanabilir. Çerezler, web sitesini
              ziyaret ettiğinizde tarayıcınıza kaydedilen küçük metin dosyalarıdır. Çerezleri tarayıcı ayarlarınızdan
              devre dışı bırakabilirsiniz, ancak bu durumda bazı özellikler düzgün çalışmayabilir.
            </p>

            <h2>4. Üçüncü Taraf Hizmetler</h2>
            <h3>4.1. Reklam Ağları</h3>
            <p>
              Web sitemiz, Google AdSense veya diğer reklam ağları aracılığıyla reklamlar gösterebilir. Bu reklam
              ağları, ilgi alanlarınıza göre reklamlar göstermek için çerezler kullanabilir. Bu reklam ağlarının
              gizlilik politikaları, kendi web sitelerinde mevcuttur.
            </p>

            <h3>4.2. Analitik Hizmetler</h3>
            <p>
              Web sitemiz, ziyaretçi trafiğini analiz etmek için Google Analytics veya benzeri analitik hizmetler
              kullanabilir. Bu hizmetler, anonim istatistiksel veriler toplar.
            </p>

            <h2>5. Veri Güvenliği</h2>
            <p>
              Yazı Stilleri olarak, kullanıcı verilerinin güvenliğini sağlamak için endüstri standardı güvenlik
              önlemleri alıyoruz. Ancak, internet üzerinden veri iletiminin %100 güvenli olduğu garanti edilemez.
            </p>

            <h2>6. Çocukların Gizliliği</h2>
            <p>
              Web sitemiz, 13 yaşın altındaki çocuklardan bilerek kişisel bilgi toplamaz. Eğer 13 yaşın altındaysanız,
              lütfen web sitemizi kullanmayın.
            </p>

            <h2>7. Dış Bağlantılar</h2>
            <p>
              Web sitemiz, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu web sitelerinin gizlilik uygulamaları
              bizim kontrolümüz dışındadır. Bu nedenle, başka web sitelerini ziyaret ettiğinizde gizlilik politikalarını
              okumanızı öneririz.
            </p>

            <h2>8. Gizlilik Politikası Değişiklikleri</h2>
            <p>
              Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Değişiklikler, bu sayfada yayınlandığı anda
              yürürlüğe girer. Önemli değişiklikler durumunda, web sitemizde bir bildirim yayınlayabiliriz.
            </p>

            <h2>9. İletişim</h2>
            <p>
              Gizlilik politikamız hakkında sorularınız varsa, lütfen bizimle iletişime geçin.
            </p>

            <h2>10. KVKK (Kişisel Verilerin Korunması Kanunu) Uyumluluğu</h2>
            <p>
              Yazı Stilleri, 6698 sayılı Kişisel Verilerin Korunması Kanunu'na uygun olarak hareket eder.
              Kişisel verileriniz, yalnızca yasal zorunluluklar ve web sitesinin işleyişi için gerekli olduğu
              ölçüde işlenir.
            </p>

            <h2>11. Onay</h2>
            <p>
              Bu web sitesini kullanarak, bu gizlilik politikasının şartlarını kabul etmiş olursunuz.
              Eğer bu şartları kabul etmiyorsanız, lütfen web sitemizi kullanmayın.
            </p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-links">
              <Link href="/" className="footer-link">
                Ana Sayfa
              </Link>
              <Link href="/insta-yazi-tipi" className="footer-link">
                İnstagram Yazı Tipi
              </Link>
              <Link href="/hakkimizda" className="footer-link">
                Hakkımızda
              </Link>
              <Link href="/gizlilik-politikasi" className="footer-link">
                Gizlilik Politikası
              </Link>
            </div>
            <div className="footer-text">
              © 2024 Yazı Stilleri. Tüm hakları saklıdır.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
