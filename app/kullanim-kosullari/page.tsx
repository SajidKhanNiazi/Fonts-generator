import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Kullanım Koşulları - Stilleri Pro',
    description: 'Stilleri Pro web sitesi kullanım koşulları ve yasal uyarılar. Hizmetlerimizi kullanırken uymanız gereken kurallar hakkında bilgi edinin.',
    robots: {
        index: true,
        follow: true,
    },
}

export default function KullanimKosullari() {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="header">
                <div className="container">
                    <div className="header-content">
                        <Link href="/" className="logo">
                            ✨ Stilleri Pro
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

            <main className="main flex-grow">
                <div className="page-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 1.5rem' }}>
                    <h1 className="page-title" style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '2rem', textAlign: 'center', background: 'linear-gradient(135deg, #8b5cf6, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Kullanım Koşulları</h1>

                    <div className="page-content" style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                        <section style={{ marginBottom: '2.5rem' }}>
                            <p>
                                Stilleri Pro ("biz", "bize" veya "bizim") tarafından işletilen web sitemizi ziyaret ettiğiniz için teşekkür ederiz.
                                Bu web sitesini kullanarak, aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız.
                                Lütfen hizmetlerimizi kullanmadan önce bu koşulları dikkatlice okuyunuz.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem' }}>1. Hizmet Kullanımı</h2>
                            <p>
                                Stilleri Pro, kullanıcıların metinlerini farklı yazı tiplerine dönüştürmelerine olanak tanıyan ücretsiz bir çevrimiçi araçtır.
                                Hizmetimiz yalnızca yasal amaçlar için kullanılabilir.
                                Web sitemizi kullanarak, üçüncü şahısların haklarını ihlal etmeyeceğinizi ve yasalara aykırı içerik üretmeyeceğinizi taahhüt edersiniz.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem' }}>2. Fikri Mülkiyet</h2>
                            <p>
                                Web sitemizde kullanılan yazılım, tasarım, metinler ve logolar Stilleri Pro'ya aittir veya lisanslıdır.
                                Bu içeriklerin izinsiz kopyalanması, çoğaltılması veya dağıtılması yasaktır.
                                Oluşturduğunuz şık metinleri kişisel veya ticari amaçlarla sosyal medya platformlarında özgürce kullanabilirsiniz.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem' }}>3. Sorumluluk Reddi</h2>
                            <p>
                                Hizmetimiz "olduğu gibi" sunulmaktadır. Stilleri Pro, hizmetin kesintisiz veya hatasız olacağını garanti etmez.
                                Metin dönüşümleri sırasında oluşabilecek veri kayıplarından veya yanlış gösterimlerden sorumlu tutulamaz.
                                Farklı platformların (Instagram, WhatsApp vb.) belirli Unicode karakterlerini desteklememesi bizim kontrolümüz dışındadır.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem' }}>4. Gizlilik</h2>
                            <p>
                                Gizliliğiniz bizim için önemlidir. Dönüştürdüğünüz metinler sunucularımızda saklanmaz; tüm işlemler tarayıcınızda gerçekleşir.
                                Daha fazla bilgi için lütfen <Link href="/gizlilik-politikasi" style={{ color: '#8b5cf6', textDecoration: 'underline' }}>Gizlilik Politikamızı</Link> inceleyin.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem' }}>5. Değişiklikler</h2>
                            <p>
                                Stilleri Pro, bu kullanım koşullarını dilediği zaman güncelleme hakkını saklı tutar.
                                Değişiklikler web sitesinde yayınlandığı andan itibaren geçerli olur.
                                Hizmetimizi kullanmaya devam ederek güncel koşulları kabul etmiş sayılırsınız.
                            </p>
                        </section>

                        <section style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', textAlign: 'center' }}>
                            <p>
                                Sorularınız için bizimle iletişime geçmekten çekinmeyin.
                            </p>
                            <div style={{ marginTop: '1rem' }}>
                                <Link href="/" style={{ display: 'inline-block', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', background: '#8b5cf6', color: 'white', fontWeight: '600', textDecoration: 'none' }}>Ana Sayfaya Dön</Link>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-links">
                            <Link href="/" className="footer-link">Ana Sayfa</Link>
                            <Link href="/insta-yazi-tipi" className="footer-link">İnstagram Yazı Tipi</Link>
                            <Link href="/hakkimizda" className="footer-link">Hakkımızda</Link>
                            <Link href="/gizlilik-politikasi" className="footer-link">Gizlilik Politikası</Link>
                            <Link href="/kullanim-kosullari" className="footer-link">Kullanım Koşulları</Link>
                        </div>
                        <div className="footer-text">
                            © 2026 Stilleri Pro. Tüm hakları saklıdır.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
