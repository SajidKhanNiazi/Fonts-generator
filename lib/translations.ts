export type Language = 'tr' | 'en';

export const translations: Record<Language, any> = {
    tr: {
        common: {
            logo: '✨ Stilleri Pro',
            nav: {
                home: 'Ana Sayfa',
                insta: 'Insta Yazı Tipi',
                symbols: 'Şekilli Semboller',
                pubg: 'PUBG Şekilli Nick',
                rights: 'Tüm hakları saklıdır.',
            },
            footer: {
                home: 'Ana Sayfa',
                insta: 'Insta Yazı Tipi',
                symbols: 'Şekilli Semboller',
                pubg: 'PUBG Şekilli Nick',
                rights: '© 2026 Stilleri Pro. Tüm hakları saklıdır.',
            },
            copy: '📋 Kopyala',
            copied: '✓ Kopyalandı!',
            clear: 'Temizle',
            charsSupported: 'Türkçe desteklenir',
            popular: 'Popüler',
            all: 'Tümü',
            exampleText: 'Örnek metin',
        },
        home: {
            hero: {
                badge: 'Ücretsiz & Hızlı',
                title: 'Yazı',
                titleHighlight: 'Stilleri',
                description: 'Metninizi Instagram, WhatsApp, TikTok ve diğer platformlar için özel font stillerine dönüştürün.',
                inputTitle: 'Metninizi Yazın',
                inputSub: 'Anında 100+ stile dönüştürün ✨',
                inputPlaceholder: 'Merhaba Dünya yazarak başlayın...',
                stat1: 'Font Stili',
                stat2: 'Platform',
                stat3: 'Türkçe',
            },
            sections: [
                {
                    id: 'what-are-fonts',
                    title: 'Yazı Stilleri Nedir?',
                    type: 'text',
                    content: 'Yazı stilleri, sosyal medya platformlarında metninizi daha göz alıcı hale getirmek ve görsel görünümü iyileştirmek için özelleştirdiğimiz metin ve stil çeşitleridir. Bu stiller, yazı tipini, boyutunu ve stilini değiştirerek metnin daha net ve okunabilir olmasını sağlar.'
                },
                {
                    id: 'what-are-font-styles',
                    title: 'Yazı Tipi Stilleri Ne İçin Kullanılır?',
                    type: 'text',
                    content: 'Yazı tipi stilleri özel takma adlar, havalı fontlar, emojili şık metinler ve logolar oluşturmamıza yardımcı olur. Özellikle el yazısı stilleri en popüler kategorilerden biridir. Metninizi ihtiyaçlarınıza ve platformun gereksinimlerine göre tamamen özelleştirebilirsiniz.'
                },
                {
                    id: 'how-changer-works',
                    title: 'Yazı Dönüştürücü Nasıl Çalışır?',
                    type: 'text',
                    content: 'Yazı dönüştürücü, sosyal medya gönderileri, markalar ve takipçiler için stilize edilmiş takma adlar ve havalı metinler oluşturmaya yarayan çevrimiçi bir araçtır. Farklı platformlarda benzersiz görünmenizi sağlar ve profil etkileşiminizi artırır.'
                },
                {
                    id: 'use-cases',
                    title: 'Farklı Yazı Stilleri Ne İçin Kullanılır?',
                    type: 'features',
                    features: [
                        { icon: '📱', title: 'Sosyal Medya Gönderileri', desc: 'Instagram, Facebook ve TikTok gibi platformlar için şık gönderiler ve estetik biyografiler oluşturun.' },
                        { icon: '🎮', title: 'Oyun Takma Adları', desc: 'Online oyunlar için kalabalığın arasından sıyrılan havalı ve şık takma adlar oluşturun.' },
                        { icon: '💬', title: 'Yaratıcı Mesajlaşma', desc: 'WhatsApp ve Instagram üzerinden arkadaşlarınızı etkilemek için bu yazı stillerini kullanarak benzersiz mesajlar gönderin.' }
                    ]
                },
                {
                    id: 'features-grid',
                    title: 'Farklı Yazı Tiplerini Kullanma Örnekleri',
                    type: 'fontFeatures',
                    features: [
                        { text: '𝑌𝑎𝑧𝑖 𝑆𝑡𝑖𝑙𝑙𝑒𝑟𝑖', label: 'İtalik Stil', gradient: 'gradient-purple' },
                        { text: '𝒴𝒶𝓏𝒾 𝒮𝓉🇮𝓁𝓁𝑒𝓇𝒾', label: 'El Yazısı Stili', gradient: 'gradient-pink' },
                        { text: '𝕐𝕒𝕫𝕚 𝕊𝕥𝕚𝕝𝕝𝕖𝕣𝕚', label: 'Double-Struck Stil', gradient: 'gradient-blue' },
                        { text: '🅈🄰🅉Ｉ 🅂🅃Ｉ🄻🄻🄴🄻Ｉ', label: 'Kutulu Stil', gradient: 'gradient-green' }
                    ]
                },
                {
                    id: 'how-to-create',
                    title: 'Yazı Stilleri Nasıl Oluşturulur ve Kullanılır? (Kopyala & Yapıştır)',
                    type: 'steps',
                    steps: [
                        { number: 1, icon: '✏️', title: 'Adım 1: Metninizi Girin', desc: 'Metninizi giriş alanına yazın. Aracımız metniniz için otomatik olarak farklı yazı stilleri listesi oluşturacaktır.' },
                        { number: 2, icon: '👀', title: 'Adım 2: Favori Yazı Tipinizi Seçin', desc: 'Metninizi girdikten sonra giriş kutusunun altında birçok yazı stili görünecektir. İstediğinizi kolayca seçebilirsiniz.' },
                        { number: 3, icon: '📋', title: 'Adım 3: Metni Kopyalayın ve Yapıştırın', desc: 'Farklı tasarımlarda neredeyse 300+ şık yazı tipi göreceksiniz. Favori yazı tipinizdeki Kopyala düğmesine tıklayın ve istediğiniz yere yapıştırın.' }
                    ]
                },
                {
                    id: 'social-media-use',
                    title: 'Sosyal Medyada Şık Yazı Tiplerini Kullanma',
                    type: 'text',
                    content: 'Sosyal medya platformları, yeni kullanıcıları takipçiye ve müşteriye dönüştürmek için son derece etkileşimlidir. Gönderilerde, takma adlarda ve biyografilerde güzel, küçük, kalp logolu ve kalın yazı tipleri kullanarak herkes için daha okunabilir ve çekici bir profil oluşturabilirsiniz.'
                },
                {
                    id: 'to-consider',
                    title: 'Yazı Stili Seçerken Dikkat Edilmesi Gerekenler',
                    type: 'text',
                    content: 'Bir yazı stili seçerken tüm platformlarda iyi çalıştığından ve Türkçe karakterleri desteklediğinden emin olun. Yazı tipi çekici görünmeli ancak küçük ekranlarda bile okunması kolay olmalıdır. Metin her zaman açık ve net olmalıdır.'
                },
                {
                    id: 'turkish-support',
                    title: 'Türkçe Karakter Desteği ve Şekilli Metinler',
                    type: 'text',
                    content: 'Yazı dönüştürücümüz Ğ, ü, ş, ı, ö ve ç gibi Türkçe karakterleri tam olarak destekler. Bu karakterleri içeren metinleri orijinal formlarını kaybetmeden şık yazı tiplerine dönüştürebilirsiniz. Bu, metninizin tüm platformlarda okunabilir ve doğru kalmasını sağlar.'
                },
                {
                    id: 'font-types',
                    title: 'Bu Web Sitesi Tarafından Kullanılan Yazı Tipleri',
                    type: 'fontTypes',
                    types: [
                        { icon: '🌟', title: 'Popüler Yazı Tipleri', desc: 'Kullanıcılarımız tarafından en çok sevilen stiller' },
                        { icon: '🔠', title: 'Metin Varyasyonları', desc: 'Kalın, İtalik ve daha fazlası' },
                        { icon: '✨', title: 'Şık Unicode', desc: 'Benzersiz karakter setleri' },
                        { icon: '📱', title: 'Sosyal Medya', desc: 'Bio ve gönderiler için mükemmel' },
                        { icon: '💬', title: 'Sohbet Uygulamaları', desc: 'WhatsApp ve Facebook uyumlu' },
                        { icon: '📸', title: 'Instagram Fontları', desc: 'Feed\'inizde öne çıkın' },
                        { icon: '😊', title: 'Emoji Fontları', desc: 'Emojilerle karıştırılmış metinler' },
                        { icon: '🇹🇷', title: 'Türkçe Stiller', desc: 'Kültürel ve yerel yazı tipleri' },
                        { icon: '🎨', title: 'Metin Efektleri', desc: 'Havalı karakter efektleri' },
                        { icon: '🎮', title: 'Oyuncu & Estetik', desc: 'Nickname ve profiller için' },
                        { icon: '🖼️', title: 'Dekoratif', desc: 'Kenarlıklar ve süslemeler' },
                        { icon: '🔄', title: 'Dönüşümler', desc: 'Ters ve aynalı yazılar' }
                    ]
                },
                {
                    id: 'popular-categories',
                    title: 'Popüler Yazı Tipi Kategorileri ve Kullanımları',
                    type: 'categoriesList',
                    categories: [
                        { title: 'Bold (Kalın):', desc: 'Metni güçlü ve fark edilir kılar, başlıklar veya önemli kelimeler için mükemmeldir.' },
                        { title: 'Italic (İtalik):', desc: 'Burgu veya stil katar, genellikle alıntılar veya isimler için kullanılır.' },
                        { title: 'Bold Italic (Kalın İtalik):', desc: 'Güç ve stili birleştirerek öne çıkan metinler oluşturur.' },
                        { title: 'Instagram Bio & Estetik Metin:', desc: 'Sosyal medya profilinizi benzersiz ve görsel olarak çekici hale getirir.' },
                        { title: 'El Yazısı & Cursive:', desc: 'El yazısı veya zarif bir görünüm katar, mesajlar veya yaratıcı gönderiler için harikadır.' },
                        { title: 'Özel Çerçeveler:', desc: 'Metni eğlenceli ve göz alıcı kılar, oyun takma adları için idealdir.' },
                        { title: 'WhatsApp & Facebook:', desc: 'Bu platformlarda karakter kaybı olmadan çalışan şık yazı tipleri.' }
                    ]
                },
                {
                    id: 'why-choose-us',
                    title: 'Neden Bizi Seçmelisiniz?',
                    type: 'text',
                    content: 'Many online users struggle to find the perfect font style that looks great on social media and games. Our tool makes it easy to create stylish and attractive text, helping you stand out. We provide a wide variety of fonts to meet all your creative needs.'
                }
            ]
        },
        insta: {
            hero: {
                badge: 'Instagram İçin Özel',
                title: 'Instagram',
                titleHighlight: 'Yazı Tipi',
                description: 'Instagram bio, gönderi ve hikayeler için havalı insta yazı tipi fontlarını anında oluştur.',
                inputTitle: 'Metninizi Yazın',
                inputSub: 'Anında stile dönüştürün ✨',
                inputPlaceholder: 'Instagram bio veya caption yazın...',
            },
            sections: [
                {
                    id: 'how-it-works',
                    title: 'Instagram Yazı Tipi Oluşturucu Nasıl Çalışır?',
                    type: 'text',
                    content: 'Instagram yazı tipi oluşturucu, Instagram kullanıcıları için Bio, hikayeler ve gönderilerde daha iyi etkileşim ve havalı bir görünüm sağlayacak farklı yazı tipi stilleri oluşturabilen ücretsiz bir çevrimiçi araçtır.'
                },
                {
                    id: 'how-to-create-insta',
                    title: 'Kopyala-Yapıştır Instagram Yazı Tipleri Nasıl Oluşturulur?',
                    type: 'textSteps',
                    steps: [
                        'Metninizi giriş bölümüne yazın.',
                        'Araç kopyalamak için farklı instagram yazı tipleri oluşturur. Listeden favorinizi bulun.',
                        'Favori yazı stilinizi seçin, kopyalayın ve ihtiyacınız olan yere yapıştırın.'
                    ]
                },
                {
                    id: 'stand-out',
                    title: 'Instagram\'da Nasıl Öne Çıkılır: Farklı Yazı Tiplerini Kullanma',
                    type: 'text',
                    content: 'Instagram gibi tüm çevrimiçi platformlar, kullanıcılara metinlerini Şık Biyografi, Gönderi Taslağı ve Yorum olarak özelleştirme seçeneği sunar. Instagram metin dönüştürücü, yazı tipini Kalın, 3D, Estetik, El Yazısı ve süslü metin gibi farklı bir stile dönüştürmemize yardımcı olur.'
                },
                {
                    id: 'advantages',
                    title: 'Instagram\'da Yazı Tipi Değiştirmenin Avantajları Nelerdir?',
                    type: 'features',
                    features: [
                        { icon: '🎯', text: 'Dikkat çeker ve profilinizin öne çıkmasına yardımcı olur' },
                        { icon: '💼', text: 'Daha profesyonel ve iyi tasarlanmış görünür' },
                        { icon: '🎭', text: 'Kişiliğinizi ve kişisel tarzınızı yansıtır' },
                        { icon: '👁️', text: 'Profilinizi anında daha göz alıcı hale getirir' },
                        { icon: '📈', text: 'Daha fazla takipçi çekmeye ve kazanmaya yardımcı olur' }
                    ]
                },
                {
                    id: 'examples',
                    title: 'Instagram\'da Stilize Metin Nasıl Yazılır?',
                    type: 'examples',
                    content: 'Stilize metin tarzı arkadaşlarımız arasında kendimizi gururlu hissetmemizi sağlar. Takma adımızı, biyografimizi ve gönderi açıklaması metnimizi Stilize ve Havalı metinlere dönüştürebiliriz. Insta yazı tipleri, metnimizi girdiğimiz ve aracın bize dönüştürülmüş yazı tipi stillerinin bir listesini sunduğu çevrimiçi bir yazı tipi dönüştürücü tarafından oluşturulur.',
                    examples: [
                        { label: 'Bold (Kalın)', text: '𝐈𝐧𝐬𝐭𝐚 𝐘𝐚𝐳𝐢 𝐭𝐢𝐩𝐢' },
                        { label: 'Script (El Yazısı)', text: '𝓘𝓷𝓼𝓽𝓪 𝓨𝓪𝔃𝓲 𝓽𝓲p𝓲' },
                        { label: 'Cursive (Eğik)', text: 'ℐ𝓃𝓈𝓉𝒶 𝒴𝒶𝓏𝒾 𝓉𝒾𝓅𝒾' },
                        { label: 'Aesthetic (Estetik)', text: 'ɪɴsᴛᴀ ʏᴀᴢɪ ᴛɪᴘɪ' }
                    ]
                },
                {
                    id: 'stories',
                    title: 'Instagram Hikayeleri?',
                    content: 'Mesajınızı veya hikayenizi daha fazla kullanıcıya ulaştırmak istiyorsanız, hem metin hem de video klip erişim için optimize edilmiştir. Hikayenizi daha ilgi çekici ve çekici hale getirmek için özel bir yazı tipi stili seçmelisiniz. Instagram hikaye bölümünü açın, bir video veya fotoğraf ekleyin, ardından Aa düzenleme seçeneğine tıklayın. Favori yazı tipi stilinizi kopyalayıp video veya fotoğrafın üzerine yapıştırın.'
                },
                {
                    id: 'bio',
                    title: 'Instagram Bio?',
                    content: 'Instagram kullanıcıları için profillerine bio eklerken yaygın yazı stiliyle sıkıcı görünmesi gerçek bir sorundur. Bu bio optimizasyonu için farklı yazı tipleri kullanılır. Profilinizi arkadaşlar ve takipçiler arasında etkileşimli hale getiren çevrimiçi yazı tipi dönüştürücümüzü seçebilirsiniz. Sadece kopyalayıp Instagram Bio\'nuza yapıştırın.'
                },
                {
                    id: 'posts',
                    title: 'Instagram Gönderileri',
                    content: 'Hala gönderiniz veya tasarımınızla buluşan ve gönderinize tam bir anlam katan bir yazı tipi mi arıyorsunuz? Her zaman gönderi temanızla yüksek düzeyde eşleşen bir yazı tipi kullanın. Yazı tipi stilinizin kullanıcı için tamamen net ve akılda kalıcı olduğundan emin olun. Tipografi, Instagram erişiminiz için bir silahtır.'
                },
                {
                    id: 'hashtags',
                    title: 'Yazı tipleri hashtag\'lerle çalışır mı?',
                    type: 'text',
                    content: 'Hayır, bu yazı tipi stilleri Instagram gönderilerinde hashtag\'lerle kullanılmaz çünkü Instagram algoritmaları bunları tanımaz ve tıklanabilir kılmaz. Bu, gönderinizin erişimini tamamen düşürür ve iyi bir uygulama değildir.'
                },
                {
                    id: 'best-fonts',
                    title: 'Instagram İçin En İyi Yazı Tipleri',
                    type: 'list',
                    items: [
                        'Popüler Yazı Tipleri – Kalın, İtalik, El Yazısı, Estetik',
                        'Stiller – Süslü, Şık, Havalı yazı tipleri',
                        'Unicode – Gotik, Monospace, Kutulu',
                        'Görseller – Emoji, Kalpler, yıldızlar, parıltılar',
                        'Güvenlik – WhatsApp ve Facebook Güvenli Yazı Tipleri'
                    ]
                },
                {
                    id: 'faq',
                    title: 'Instagram Yazı Tipi Hataları ve Çözümleri',
                    faqs: [
                        { p: "Sorun 1: Yazı Tipi Düzgün Görünmüyor", s: "Tüm cihazlarda çalışan Instagram güvenli Unicode yazı tiplerini kullanın." },
                        { p: "Sorun 2: Metin Kutucuk Olarak Görünüyor", s: "Ağır dekoratif yazı tiplerinden kaçının ve basit stilleri seçin." },
                        { p: "Sorun 3: Kopyala/Yapıştır Doğru Çalışmıyor", s: "Metnin tamamını kopyalayın ve düzenleme yapmadan doğrudan yapıştırın." },
                        { p: "Sorun 4: Metnin Okunması Zor", s: "Biyografiler ve açıklamalar için temiz ve okunabilir yazı tipleri kullanın." }
                    ]
                },
                {
                    id: 'features',
                    title: 'Instagram Yazı Tipi Oluşturucunun Temel Özellikleri',
                    features: [
                        { icon: '⚡', title: 'Basit ve Hızlı', desc: 'Anında sonuçlarla kullanımı kolay.' },
                        { icon: '💸', title: 'Ücretsiz Kullanım', desc: 'Ücret yok, tamamen ücretsiz.' },
                        { icon: '📋', title: 'Kopyala ve Yapıştır', desc: 'Her yerde kopyalamak ve kullanmak için tek tık.' },
                        { icon: '🔒', title: 'Giriş Gerektirmez', desc: 'Kayıt olmadan aracı kullanın.' },
                        { icon: '🌐', title: '%100 Çevrimiçi', desc: 'Doğrudan tarayıcınızda çalışır.' }
                    ]
                }
            ]
        },
        pubg: {
            hero: {
                badge: 'PUBG İçin Özel',
                title: 'PUBG',
                titleHighlight: 'Şekilli Nick',
                description: 'İstersen kendi adınla PUBG nick oluştur, istersen hazır PUBG nicklerini tek tıkla kopyala ve oyunda kullan.',
                inputTitle: 'Kendi Nickini Oluştur',
                inputSub: 'İsminle 40+ şekilli PUBG nicki oluştur ✨',
                inputPlaceholder: 'İstediğin nicki buraya yaz...',
                readyNicks: 'Hazır PUBG Nickleri',
                readyNicksDesc: 'Beğendiğin nicki tek tıkla kopyala ve PUBG\'de kullan',
                generatorTitle: 'Kendi Adınla PUBG Nick Oluştur',
                howToUse: 'Hemen Oluştur',
                readyUse: 'Hemen Kullan',
                clickToUse: 'İstediğin seçeneğe dokun, hemen kullan',
            },
            categories: {
                havali: 'Havalı & Şekilli',
                sekilli: 'Sembollü & Çerçeveli',
                pro: 'Profesyonel Oyuncu',
                clan: 'Klan & Takım',
                agresif: 'Agresif & Savaşçı',
            },
            sections: [
                {
                    id: 'what-is-pubg-nick',
                    title: 'PUBG Şekilli Nick Nedir?',
                    type: 'text',
                    content: 'PUBG şekilli nick, oyuncuların oyun içinde kullandıkları isimleri semboller, emojiler ve farklı karakterlerle süsleyerek daha dikkat çekici hale getirmesidir. Bu nickler sizi oyunda diğerlerinden ayırır ve profesyonel bir görünüm kazandırır.'
                },
                {
                    id: 'how-to-change',
                    title: 'PUBG\'de İsim Nasıl Değiştirilir?',
                    type: 'steps',
                    steps: [
                        { number: 1, icon: '📋', title: 'Nickinizi Kopyalayın', desc: 'Hazır listemizden veya kendi isminizle oluşturduğunuz nicklerden birini seçip kopyala butonuna basın.' },
                        { number: 2, icon: '🎮', title: 'PUBG\'yi Açın', desc: 'PUBG veya PUBG Mobile oyununu açın, envanterinize gidin ve İsim Yenileme Kartını (Rename Card) bulun.' },
                        { number: 3, icon: '✨', title: 'Yapıştır ve Kaydet', desc: 'Yeni şekilli nickinizi isim değiştirme kutusuna yapıştırın ve kaydederek yeni görünümünüzü kullanmaya başlayın.' }
                    ]
                },
                {
                    id: 'tips',
                    title: 'Popüler PUBG Nick Kategorileri ve Tavsiyeler',
                    type: 'features',
                    features: [
                        { title: 'Havalı ve Şık Nickler', desc: 'PUBG\'de öne çıkmak sadece oynanışla değil, isminizle de ilgilidir. Şık bir nick, benzersiz bir kimlik oluşturmanıza ve özgüven kazanmanıza yardımcı olur.' },
                        { title: 'Profesyonel ve KISA Nickler', desc: 'Birçok profesyonel oyuncu ve yayıncı kısa ve etkileyici isimler kullanır. Aracımız, hayranlarınız tarafından kolayca hatırlanacak yüzlerce pro seviyesinde isim sunar.' },
                        { title: 'PUBG Klan Nickleri', desc: 'Bir takımla oynuyorsanız veya bir klan yönetiyorsanız, tutarlı bir nick stiline sahip olmak ekip ruhu ve tanınırlık için harikadır.' }
                    ]
                },
                {
                    id: 'faq',
                    title: 'Sıkça Sorulan Sorular',
                    type: 'faq',
                    faqs: [
                        { q: 'PUBG nickinde sembol kullanabilir miyim?', a: 'Evet, PUBG birçok Unicode sembolünü destekler. Aracımız, çoğu mobil ve PC sürümünde çalıştığı bilinen sembolleri kullanır.' },
                        { q: 'PUBG ismi kaç karakter olabilir?', a: 'Genellikle PUBG Mobile isimleri 14 karakter sınırı ile sınırlıdır. Seçtiğiniz stilin bu sınıra uygun olduğundan emin olun.' }
                    ]
                },
                {
                    id: 'features',
                    title: 'PUBG Nick Oluşturucunun Özellikleri',
                    type: 'featuresGrid',
                    features: [
                        { icon: '🚀', title: 'Ücretsiz ve Hızlı', desc: 'Kayıt gerekmez, hazır PUBG nicklerini anında kopyalayın!' },
                        { icon: '🔒', title: '%100 Güvenli', desc: 'Nickleriniz sunucuya gönderilmez, tarayıcınızda işlenir.' },
                        { icon: '📱', title: 'Mobil Uyumlu', desc: 'Telefonunuzdan kolayca kullanın ve PUBG\'ye anında yapıştırın.' }
                    ]
                }
            ]
        },
        symbols: {
            hero: {
                badge: 'Tek Tıkla Kopyala',
                title: 'Şekilli',
                titleHighlight: 'Semboller',
                description: 'Instagram bio, WhatsApp durumu ve oyun isimleri için havalı, özel ve estetik sembolleri tek tıkla kopyalayın.',
                stat1: 'Sembol',
                stat2: 'Kategori',
                stat3: 'Türkçe',
            },
            categories: {
                kalp: 'Kalp Sembolleri',
                yildiz: 'Yıldız & Parlama',
                ok: 'Ok & İşaretler',
                cerceve: 'Çerçeveli Semboller',
                cicek: 'Çiçek & Doğa',
                dekoratif: 'Dekoratif & Fancy',
                emoji: 'Popüler Emojiler',
                oyun: 'Oyun & E-Spor',
                muzik: 'Müzik & Ses',
                hava: 'Hava & Gökyüzü',
                isaretler: 'Özel İşaretler',
                semboller: 'Burçlar & Semboller',
                el: 'El & Jest',
                minimal: 'Minimal & Geometrik',
                para: 'Para & Finans',
                turk: 'Türk Kültürü',
            },
            sections: [
                {
                    id: 'what-are-symbols',
                    title: 'Havalı ve Şık Semboller Nedir?',
                    type: 'text',
                    content: 'Havalı semboller, sosyal medya platformlarında, oyun isimlerinde ve mesajlaşma uygulamalarında kullanabileceğiniz özel karakterler ve işaretlerdir. Bu şık semboller, metninizi göz alıcı hale getirmenize, profilinizi özelleştirmenize ve mesajlarınıza estetik bir dokunuş eklemenize yardımcı olur.'
                },
                {
                    id: 'features',
                    title: 'Sembol Oluşturucunun Özellikleri',
                    type: 'features',
                    features: [
                        { title: 'Zengin Sembol Koleksiyonu', desc: 'Kalpler, yıldızlar, oklar, çerçeveler ve daha fazlası! 1000+ farklı şık sembol ile profilinizi öne çıkarın.' },
                        { title: 'Tek Tıkla Kopyala', desc: 'İstediğiniz sembole tıklayın ve anında kopyalansın! Saniyeler içinde istediğiniz yere yapıştırın.' },
                        { title: 'Tüm Platformlarda Çalışır', desc: 'Instagram, WhatsApp, TikTok ve Discord! Semboller Unicode tabanlıdır ve tüm cihazlarda doğru görünür.' },
                        { title: 'Oyun İsimleri İçin', desc: 'Oyunlarınız için havalı kullanıcı adları ve klan etiketleri oluşturun!' }
                    ]
                },
                {
                    id: 'popular-categories',
                    title: 'En Popüler Havalı Semboller',
                    type: 'categoriesGrid',
                    categories: [
                        { icon: '❤️', title: 'Kalp Sembolleri', desc: 'Sevgi ve şefkat ifade etmek için en çok kullanılan semboller.', examples: ['♥', '❤', '💖', '💕'] },
                        { icon: '⭐', title: 'Yıldız Sembolleri', desc: 'Parlaklık ve önem ifade etmek için kullanılır.', examples: ['★', '☆', '✨', '🌟'] },
                        { icon: '🌸', title: 'Çiçek Sembolleri', desc: 'Doğa ve güzellik temalı süslemeler.', examples: ['❀', '✿', '🌸', '🌷'] },
                        { icon: '🎮', title: 'Oyun Sembolleri', desc: 'Oyun isimleri ve klan etiketleri için havalı semboller.', examples: ['『', '』', '【', '】'] },
                        { icon: '🇹🇷', title: 'Türk Kültürü', desc: 'Nazar boncuğu, ay-yıldız ve lale gibi kültürel semboller.', examples: ['🧿', '☪', '🌷', '☕'] },
                        { icon: '✨', title: 'Dekoratif', desc: 'Metin süslemesi için özel dekoratif semboller.', examples: ['✦', '❖', '✪', '❋'] }
                    ]
                },
                {
                    id: 'usage-tips',
                    title: 'Şekilli Sembol Kullanım İpuçları',
                    type: 'tips',
                    tips: [
                        { title: 'Aşırıya Kaçmayın', desc: 'Çok fazla sembol kullanmak okunabilirliği azaltır. Sadece vurgulamak istediğiniz yerlerde kullanın.' },
                        { title: 'Simetrik Kullanım', desc: 'Metnin başına ve sonuna aynı sembolleri koyarak simetrik ve estetik bir görünüm elde edin.' },
                        { title: 'Platform Uyumluluğu', desc: 'Bazı semboller bazı platformlarda farklı görünebilir, paylaşmadan önce test edin.' }
                    ]
                },
                {
                    id: 'faq',
                    title: 'Sıkça Sorulan Sorular',
                    type: 'faq',
                    faqs: [
                        { q: 'Şık semboller tüm cihazlarda çalışır mı?', a: 'Evet! Şık semboller Unicode karakter setini kullanır, bu yüzden iPhone, Android, Windows ve Mac dahil tüm modern cihazlarda görüntülenir.' },
                        { q: 'Sembolleri kopyalamak için ücret ödemem gerekiyor mu?', a: 'Hayır, web sitemizdeki tüm semboller tamamen ücretsizdir ve tek tıkla kopyalanabilir.' }
                    ]
                }
            ]
        }
    },
    en: {
        common: {
            logo: '✨ Stilleri Pro',
            nav: {
                home: 'Home',
                insta: 'Insta Font',
                symbols: 'Shaped Symbols',
                pubg: 'PUBG Stylish Nickname',
                rights: 'All rights reserved.',
            },
            footer: {
                home: 'Home',
                insta: 'Insta Font',
                symbols: 'Shaped Symbols',
                pubg: 'PUBG Stylish Nickname',
                rights: '© 2026 Stilleri Pro. All rights reserved.',
            },
            copy: '📋 Copy',
            copied: '✓ Copied!',
            clear: 'Clear',
            charsSupported: 'Turkish supported',
            popular: 'Popular',
            all: 'All',
            exampleText: 'Example text',
        },
        home: {
            hero: {
                badge: 'Free & Fast',
                title: 'Font',
                titleHighlight: 'Styles',
                description: 'Transform your text into special font styles for Instagram, WhatsApp, TikTok and other platforms.',
                inputTitle: 'Enter Your Text',
                inputSub: 'Instantly convert to 100+ styles ✨',
                inputPlaceholder: 'Start typing Hello World...',
                stat1: 'Font Style',
                stat2: 'Platform',
                stat3: 'Turkish',
            },
            sections: [
                {
                    id: 'what-are-fonts',
                    title: 'What are fonts?',
                    type: 'text',
                    content: 'Fonts are text and styles that we customize on our own choice to change our text more eye-catching and better Visual Appearance in any social media Platform. These Fonts make text more clear and readable by changing text font, size and color.'
                },
                {
                    id: 'what-are-font-styles',
                    title: 'What are font styles?',
                    type: 'text',
                    content: 'Font styles help us to create special nicknames, Cool font, emoji stylish text and logo. Mostly use like Handwriting font are famous where user can generate different style in this category. We can fully customize our text for our requirement and Interaction for platform.'
                },
                {
                    id: 'how-changer-works',
                    title: 'How does the Font Changer work?',
                    type: 'text',
                    content: 'Font changer is an online Tool which works for creating a stylized nickname, cool text and engagement message for Social Media posts for brand and followers. We can use symbols styles text which make a unique in different game which look attractive.'
                },
                {
                    id: 'use-cases',
                    title: 'What are different font styles used for?',
                    type: 'features',
                    features: [
                        { icon: '📱', title: 'Social Media Posts', desc: 'Create Fancy Posts and Aesthetic Bio for platforms like Instagram, Facebook and TikTok for a better visual and interactive profile.' },
                        { icon: '🎮', title: 'Gaming Nicknames', desc: 'Generate Cool and Stylish nicknames for Online games that stand out from the crowd.' },
                        { icon: '💬', title: 'Creative Messaging', desc: 'Send unique messages using these font styles on WhatsApp and Instagram to impress your friends.' }
                    ]
                },
                {
                    id: 'features-grid',
                    title: 'Examples of Using Different Fonts',
                    type: 'fontFeatures',
                    features: [
                        { text: '𝑌𝑎𝑧𝑖 𝑆𝑡𝑖𝑙𝑙𝑒 r𝕚', label: 'Italic Style', gradient: 'gradient-purple' },
                        { text: '𝒴𝒶𝓏𝒾 𝒮𝓉𝒾𝓁𝓁𝑒𝓇𝒾', label: 'Handwriting Style', gradient: 'gradient-pink' },
                        { text: '𝕐𝕒𝕫𝕚 𝕊𝕥𝕚𝓁𝓁𝕖𝕣𝕚', label: 'Double-Struck Style', gradient: 'gradient-blue' },
                        { text: '🅈🄰🅉Ｉ 🅂🅃Ｉ🄻🄻🄴🄻Ｉ', label: 'Boxed Text Style', gradient: 'gradient-green' }
                    ]
                },
                {
                    id: 'how-to-create',
                    title: 'How to Create Font Styles and Use Them (Copy & Paste)',
                    type: 'steps',
                    steps: [
                        { number: 1, icon: '✏️', title: 'Step 1: Enter Your Text', desc: 'Type your text in the input field. Our tool will automatically generate a list of different font styles for your text.' },
                        { number: 2, icon: '👀', title: 'Step 2: Choose Your Favorite Font', desc: 'After entering your text, many font styles will appear below the input box. Each font style is shown with its name so you can easily choose the one you like.' },
                        { number: 3, icon: '📋', title: 'Step 3: Copy and Paste the Text', desc: 'You will see almost 300+ stylish fonts in different designs. Click the Copy button on your favorite font and paste it anywhere you need.' }
                    ]
                },
                {
                    id: 'social-media-use',
                    title: 'Using Stylish Fonts on Social Media',
                    type: 'text',
                    content: 'Social Media platforms are highly interactive for new user to Convert into your follower and Client for any Service. By Using Beautiful, small, heart bold and colors Fonts in posts, nickname and bio which make a more readable and attractive for everyone.'
                },
                {
                    id: 'to-consider',
                    title: 'Things to Consider When Choosing a Font Style',
                    type: 'text',
                    content: 'When choosing a font style, make sure it works well on all platforms and supports special characters like Turkish letters. The font should look attractive but also be easy to read, even on small screens.'
                },
                {
                    id: 'turkish-support',
                    title: 'Turkish Character Support and Styled Text',
                    type: 'text',
                    content: 'Our Font converter fully supports Turkish characters such as Ğ, ü, ş, ı, ö, and ç. You can convert text with these characters into stylish fonts without losing their original form.'
                },
                {
                    id: 'font-types',
                    title: 'Types of Fonts Used by This Website',
                    type: 'fontTypes',
                    types: [
                        { icon: '🌟', title: 'Popular Fonts', desc: 'Most loved styles by our users' },
                        { icon: '🔠', title: 'Text Variations', desc: 'Bold, Italic, and more' },
                        { icon: '✨', title: 'Fancy Unicode', desc: 'Unique character sets' },
                        { icon: '📱', title: 'Social Media', desc: 'Perfect for bios & posts' },
                        { icon: '💬', title: 'Chat Apps', desc: 'WhatsApp & Facebook safe' },
                        { icon: '📸', title: 'Instagram Fonts', desc: 'Stand out on your feed' },
                        { icon: '😊', title: 'Emoji Fonts', desc: 'Text mixed with emojis' },
                        { icon: '🇹🇷', title: 'Turkish Styles', desc: 'Cultural & local fonts' },
                        { icon: '🎨', title: 'Text Effects', desc: 'Cool character effects' },
                        { icon: '🎮', title: 'Gamer & Aesthetic', desc: 'For nicknames & profiles' },
                        { icon: '🖼️', title: 'Decorative', desc: 'Borders & decorations' },
                        { icon: '🔄', title: 'Transformations', desc: 'Upside down & mirrored' }
                    ]
                },
                {
                    id: 'popular-categories',
                    title: 'Popular fonts categories and their uses',
                    type: 'categoriesList',
                    categories: [
                        { title: 'Bold (Kalın):', desc: 'Makes text strong and noticeable, perfect for headings or important words.' },
                        { title: 'Italic (İtalik):', desc: 'Adds emphasis or style, often used for quotes or names.' },
                        { title: 'Bold Italic (Kalın İtalik):', desc: 'Combines strength and style for standout text.' },
                        { title: 'Instagram Bio Fonts & Aesthetic Text:', desc: 'Make your social media profile unique and visually appealing.' },
                        { title: 'Script & Cursive:', desc: 'Adds a handwritten or elegant look, great for messages or creative posts.' },
                        { title: 'Special Frames:', desc: 'Make text fun and eye-catching, perfect for gaming nicknames.' },
                        { title: 'WhatsApp & Facebook:', desc: 'Stylish fonts that work on these platforms without breaking characters.' }
                    ]
                },
                {
                    id: 'why-choose-us',
                    title: 'Why should you choose us?',
                    type: 'text',
                    content: 'Many online users struggle to find the perfect font style that looks great on social media and games. Our tool makes it easy to create stylish and attractive text, helping you stand out. We provide a wide variety of fonts to meet all your creative needs.'
                }
            ]
        },
        insta: {
            hero: {
                badge: 'Special for Instagram',
                title: 'Instagram',
                titleHighlight: 'Fonts',
                description: 'Instantly create cool insta font styles for Instagram bio, posts and stories.',
                inputTitle: 'Enter Your Text',
                inputSub: 'Instantly convert to styles ✨',
                inputPlaceholder: 'Enter your Instagram bio or caption...',
            },
            sections: [
                {
                    id: 'how-it-works',
                    title: 'How does the Instagram Fonts Generator work?',
                    type: 'text',
                    content: 'Instagram font generator is a free online tool which can generate different types of font styles for Instagram users which can use these fonts in Bio, stories and posts for better engagement and feel Cool.'
                },
                {
                    id: 'how-to-create-insta',
                    title: 'How to create Instagram fonts for copy-pasting',
                    type: 'textSteps',
                    steps: [
                        'Enter your Text in the input section.',
                        'Tool generates different instagram fonts to copy it. Search the Favourite font from the list.',
                        'Choose your favourite font style, copy it and paste it where you need.'
                    ]
                },
                {
                    id: 'stand-out',
                    title: 'How to Stand Out on Instagram: Using Different Fonts',
                    type: 'text',
                    content: 'All online platforms like Instagram give an option to user Paste customize their text into Stylish Bio, Post Outline and Comment. Instagram Text converter helps us to change font into a different style like Bold, 3D, Aesthetic, Handwritten and fancy text.'
                },
                {
                    id: 'advantages',
                    title: 'What are the advantages of changing the font on Instagram?',
                    type: 'features',
                    features: [
                        { icon: '🎯', text: 'Grabs attention and helps your profile stand out' },
                        { icon: '💼', text: 'Looks more professional and well-designed' },
                        { icon: '🎭', text: 'Reflects your personality and personal style' },
                        { icon: '👁️', text: 'Makes your profile instantly more eye-catching' },
                        { icon: '📈', text: 'Helps attract and gain more followers' }
                    ]
                },
                {
                    id: 'examples',
                    title: 'How to Write Stylized Text on Instagram',
                    type: 'examples',
                    content: 'Stylized text style makes us feel proud among friends. We can simply change our nickname, Bio and post caption text into Stylized and Cool texts. Insta fonts are generated by an online font converter where we enter our text and the tool give us a list of converted fonts styles.',
                    examples: [
                        { label: 'Bold', text: '𝐈𝐧𝐬𝐭𝐚 𝐘𝐚𝐳𝐢 𝐭𝐢𝐩𝐢' },
                        { label: 'Script', text: '𝓘𝓷𝓼𝓽𝓪 𝓨𝓪𝔃𝓲 𝓽𝓲p𝓲' },
                        { label: 'Cursive', text: 'ℐ𝓃𝓈𝓉𝒶 𝒴𝒶𝓏𝒾 𝓉𝒾𝓅𝒾' },
                        { label: 'Aesthetic', text: 'ɪɴsᴛᴀ ʏᴀᴢɪ ᴛɪᴘɪ' }
                    ]
                },
                {
                    id: 'stories',
                    title: 'Instagram Stories?',
                    content: 'If you want to convey your message or story more user then Both text and video clip are highly optimized for reach then You should select a special fonts styles to make story more engaging and attractive. Open instagram story section add a video or photo then click editing option Aa. Simply copy your favourite fonts style and paste on video or photo.'
                },
                {
                    id: 'bio',
                    title: 'Instagram Bio?',
                    content: 'There is real problem for any instagram users while adding a Bio in profile which makes it boring and lazy with common font style. So different fonts are used for this Bio optimization. You can choose our online font converter which makes your bio interactive among friends and followers. Simply copy paste into instagram Bio.'
                },
                {
                    id: 'posts',
                    title: 'Instagram Posts',
                    content: 'Still you are looking a font that meet with your post or design which make a complete a sense of your post. Always use a font which are highly match your post theme to engage interaction of audience. Make sure a that your font style completely clear and memorably for user. Typing Typography is a weapon for you instagram reach.'
                },
                {
                    id: 'hashtags',
                    title: 'Do fonts work with hashtags?',
                    type: 'text',
                    content: 'No, These fonts styles are not use in instagram post with hashtags because Instagram algorithms did not recognize it and did not clickable. This will complete down to reach of your post and not good practice.'
                },
                {
                    id: 'best-fonts',
                    title: 'Best Fonts for Instagram',
                    type: 'list',
                    items: [
                        'Popular Fonts – Bold, Italic, Script, Aesthetic',
                        'Styles – Fancy, Stylish, Classy fonts',
                        'Unicode – Gothic, Monospace, Boxed',
                        'Visuals – Emoji, Hearts, stars, sparkles',
                        'Safety – WhatsApp & Facebook Safe Fonts'
                    ]
                },
                {
                    id: 'faq',
                    title: 'Instagram Font Errors and Solutions',
                    faqs: [
                        { p: "Problem 1: Font Not Showing Properly", s: "Use Instagram-safe Unicode fonts that work on all devices." },
                        { p: "Problem 2: Text Appears as Boxes", s: "Avoid heavy decorative fonts and choose simple styles." },
                        { p: "Problem 3: Does Not Copy/Paste Correctly", s: "Copy the full text and paste it directly without editing." },
                        { p: "Problem 4: Text Is Hard to Read", s: "Use clean and readable fonts for bios and captions." }
                    ]
                },
                {
                    id: 'features',
                    title: 'Key Features of Instagram Font Generator',
                    features: [
                        { icon: '⚡', title: 'Simple and Fast', desc: 'Easy to use with instant results.' },
                        { icon: '💸', title: 'Free to Use', desc: 'No charges, completely free.' },
                        { icon: '📋', title: 'Copy and Paste', desc: 'Easy One click to copy and use anywhere.' },
                        { icon: '🔒', title: 'No Login Required', desc: 'Use the tool without signing up.' },
                        { icon: '🌐', title: '100% Online', desc: 'Works directly in your browser.' }
                    ]
                }
            ]
        },
        pubg: {
            hero: {
                badge: 'Special for PUBG',
                title: 'PUBG',
                titleHighlight: 'Stylish Nickname',
                description: 'Create PUBG nicknames with your own name or copy ready-to-use PUBG nicknames with one click.',
                inputTitle: 'Create Your Own Nickname',
                inputSub: 'Generate 40+ stylish PUBG nicknames with your name ✨',
                inputPlaceholder: 'Enter your nickname here...',
                readyNicks: 'Ready-Made PUBG Nicknames',
                readyNicksDesc: 'Copy your favorite nickname with one click and use it in PUBG',
                generatorTitle: 'Create PUBG Nick with Your Own Name',
                howToUse: 'Create Now',
                readyUse: 'Use Now',
                clickToUse: 'Tap your desired option to use immediately',
            },
            categories: {
                havali: 'Cool & Stylish',
                sekilli: 'Symbol & Framed',
                pro: 'Pro Gamer',
                clan: 'Clan & Team',
                agresif: 'Aggressive & Fighter',
            },
            sections: [
                {
                    id: 'what-is-pubg-nick',
                    title: 'What is a PUBG Stylish Nickname?',
                    type: 'text',
                    content: 'A PUBG stylish nickname is an in-game name decorated with symbols, emojis, and unique characters to make it stand out. These nicknames distinguish you from other players and provide a professional look.'
                },
                {
                    id: 'how-to-change',
                    title: 'How to Change Name in PUBG?',
                    type: 'steps',
                    steps: [
                        { number: 1, icon: '📋', title: 'Copy Your Nickname', desc: 'Choose a nickname from our ready list or one you created with your name and click the copy button.' },
                        { number: 2, icon: '🎮', title: 'Open PUBG', desc: 'Launch PUBG or PUBG Mobile, go to your inventory and find the Rename Card.' },
                        { number: 3, icon: '✨', title: 'Paste and Save', desc: 'Paste your new stylish nickname into the name change box and save to use your new look.' }
                    ]
                },
                {
                    id: 'tips',
                    title: 'Popular PUBG Nickname Categories and Advice',
                    type: 'features',
                    features: [
                        { title: 'Cool and Stylish Nicknames', desc: 'Standing out in PUBG is not just about your gameplay, it’s also about your name. A stylish nick helps you build a unique identity and gain confidence.' },
                        { title: 'Professional and SHORT Nicknames', desc: 'Many professional players and streamers use short and impactful names. Our tool offers hundreds of pro-level names that will be easily remembered by your fans.' },
                        { title: 'PUBG Clan Nicknames', desc: 'If you are playing with a team or running a clan, having a consistent nickname style is great for team spirit and recognition.' }
                    ]
                },
                {
                    id: 'faq',
                    title: 'Frequently Asked Questions',
                    type: 'faq',
                    faqs: [
                        { q: 'Can I use symbols in my PUBG nickname?', a: 'Yes, PUBG supports many Unicode symbols. Our generator uses symbols that are known to work on most mobile and PC versions.' },
                        { q: 'How many characters can a PUBG name have?', a: 'Typically, PUBG Mobile names have a limit of 14 characters. Make sure your chosen style fits within this limit.' }
                    ]
                },
                {
                    id: 'features',
                    title: 'Features of PUBG Nickname Generator',
                    type: 'featuresGrid',
                    features: [
                        { icon: '🚀', title: 'Free and Fast', desc: 'No registration required, copy ready-made PUBG nicknames instantly!' },
                        { icon: '🔒', title: '100% Safe', desc: 'Your nicknames are not sent to any server; they are processed in your browser.' },
                        { icon: '📱', title: 'Mobile Friendly', desc: 'Use it easily from your phone and paste instantly into PUBG.' }
                    ]
                }
            ]
        },
        symbols: {
            hero: {
                badge: 'Click to Copy',
                title: 'Shaped',
                titleHighlight: 'Symbols',
                description: 'Copy cool, special and aesthetic symbols for Instagram bio, WhatsApp status and game names with one click.',
                stat1: 'Symbol',
                stat2: 'Category',
                stat3: 'Turkish',
            },
            categories: {
                kalp: 'Heart Symbols',
                yildiz: 'Star & Sparkle',
                ok: 'Arrow & Signs',
                cerceve: 'Framed Symbols',
                cicek: 'Flower & Nature',
                dekoratif: 'Decorative & Fancy',
                emoji: 'Popular Emojis',
                oyun: 'Game & E-Sports',
                muzik: 'Music & Sound',
                hava: 'Weather & Sky',
                isaretler: 'Special Signs',
                semboller: 'Zodiac & Symbols',
                el: 'Hand & Gesture',
                minimal: 'Minimal & Geometric',
                para: 'Money & Finance',
                turk: 'Turkish Culture',
            },
            sections: [
                {
                    id: 'what-are-symbols',
                    title: 'What are Cool and Stylish Symbols?',
                    type: 'text',
                    content: 'Cool symbols are special characters and signs that you can use on social media platforms, game names and messaging applications. These stylish symbols help you make your text eye-catching, customize your profile and add an aesthetic touch to your messages.'
                },
                {
                    id: 'features',
                    title: 'Symbol Generator Features',
                    type: 'features',
                    features: [
                        { title: 'Rich Symbol Collection', desc: 'Hearts, stars, arrows, frames and more! Stand out with 1000+ different stylish symbols.' },
                        { title: 'Click to Copy', desc: 'Click on any symbol and it will be copied instantly! Paste it anywhere in seconds.' },
                        { title: 'Works on All Platforms', desc: 'Instagram, WhatsApp, TikTok and Discord! Symbols are Unicode-based and look correct on all devices.' },
                        { title: 'For Game Names', desc: 'Create cool usernames and clan tags for your games!' }
                    ]
                },
                {
                    id: 'popular-categories',
                    title: 'Most Popular Cool Symbols',
                    type: 'categoriesGrid',
                    categories: [
                        { icon: '❤️', title: 'Heart Symbols', desc: 'The most used symbols to express love and affection.', examples: ['♥', '❤', '💖', '💕'] },
                        { icon: '⭐', title: 'Star Symbols', desc: 'Used to express brightness and importance.', examples: ['★', '☆', '✨', '🌟'] },
                        { icon: '🌸', title: 'Flower Symbols', desc: 'Nature and beauty themed decorations.', examples: ['❀', '✿', '🌸', '🌷'] },
                        { icon: '🎮', title: 'Game Symbols', desc: 'Cool symbols for game names and clan tags.', examples: ['『', '』', '【', '】'] },
                        { icon: '🇹🇷', title: 'Turkish Culture', desc: 'Cultural symbols like evil eye bead, crescent and star.', examples: ['🧿', '☪', '🌷', '☕'] },
                        { icon: '✨', title: 'Decorative', desc: 'Special decorative symbols for text decoration.', examples: ['✦', '❖', '✪', '❋'] }
                    ]
                },
                {
                    id: 'usage-tips',
                    title: 'Shaped Symbol Usage Tips',
                    type: 'tips',
                    tips: [
                        { title: 'Don\'t Overdo It', desc: 'Using too many symbols reduces readability. Use them only where you want to emphasize.' },
                        { title: 'Symmetrical Use', desc: 'Place the same symbols at the beginning and end of the text for a symmetrical and aesthetic look.' },
                        { title: 'Platform Compatibility', desc: 'Some symbols may look different on some platforms, test before sharing.' }
                    ]
                },
                {
                    id: 'faq',
                    title: 'Frequently Asked Questions',
                    type: 'faq',
                    faqs: [
                        { q: 'Do stylish symbols work on all devices?', a: 'Yes! Stylish symbols use the Unicode character set, so they appear on all modern devices including iPhone, Android, Windows, and Mac.' },
                        { q: 'Do I need to pay to copy symbols?', a: 'No, all symbols on our website are completely free and can be copied with one click.' }
                    ]
                }
            ]
        }
    }
};
