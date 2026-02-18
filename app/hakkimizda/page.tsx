import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hakkımızda - Yazı Stilleri',
  description: 'Yazı Stilleri hakkında bilgi edinin. Türkçe kullanıcılar için özel olarak tasarlanmış metin stil dönüştürücü aracımız hakkında daha fazla bilgi.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function Hakkimizda() {
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
          <h1 className="page-title">Hakkımızda</h1>

          <div className="page-content">
            <h2>Yazı Stilleri Nedir?</h2>
            <p>
              Yazı Stilleri, Türkçe kullanıcılar için özel olarak tasarlanmış, ücretsiz bir metin stil dönüştürücü aracıdır.
              Amacımız, kullanıcıların metinlerini Instagram, WhatsApp, Facebook ve diğer sosyal medya platformlarında
              daha dikkat çekici ve özel hale getirmelerine yardımcı olmaktır.
            </p>

            <h2>Misyonumuz</h2>
            <p>
              Türkçe dilinin zenginliğini ve özel karakterlerini (ç, ğ, ı, İ, ö, ş, ü) koruyarak, kullanıcılarımıza
              en iyi yazı stil dönüştürme deneyimini sunmak. Herkesin metinlerini kolayca özelleştirebilmesi ve
              sosyal medyada kendini daha iyi ifade edebilmesi için çalışıyoruz.
            </p>

            <h2>Özelliklerimiz</h2>
            <ul>
              <li><strong>Tam Türkçe Desteği:</strong> Tüm Türkçe karakterler mükemmel çalışır</li>
              <li><strong>Çok Çeşitli Stiller:</strong> 20+ farklı yazı stili seçeneği</li>
              <li><strong>Anında Dönüşüm:</strong> Metninizi yazdığınız anda tüm stillerde görün</li>
              <li><strong>Tek Tıkla Kopyalama:</strong> Kolay kopyalama özelliği</li>
              <li><strong>Tamamen Ücretsiz:</strong> Hiçbir ücret veya kayıt gerektirmez</li>
              <li><strong>Mobil Uyumlu:</strong> Tüm cihazlarda mükemmel çalışır</li>
            </ul>

            <h2>Neden Yazı Stilleri?</h2>
            <p>
              Sosyal medya platformlarında metinlerinizi öne çıkarmak için özel font stilleri kullanmak artık çok popüler.
              Ancak çoğu araç Türkçe karakterleri düzgün desteklemiyor. Biz, Türkçe kullanıcıların ihtiyaçlarını anlayarak
              bu aracı geliştirdik ve sürekli olarak iyileştirmeye devam ediyoruz.
            </p>

            <h2>İletişim</h2>
            <p>
              Sorularınız, önerileriniz veya geri bildirimleriniz için bizimle iletişime geçebilirsiniz.
              Kullanıcı deneyimini iyileştirmek için sürekli çalışıyoruz ve görüşleriniz bizim için çok değerli.
            </p>

            <h2>Gizlilik ve Güvenlik</h2>
            <p>
              Yazı Stilleri tamamen güvenlidir. Metinleriniz hiçbir şekilde sunucularımıza gönderilmez veya saklanmaz.
              Tüm dönüşümler tarayıcınızda, cihazınızda gerçekleşir. Gizliliğiniz bizim için önemlidir.
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
