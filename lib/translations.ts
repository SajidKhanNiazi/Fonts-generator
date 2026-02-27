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
                    content: 'Yazı tipi stilleri özel takma adlar, havalı fontlar, emojili şık metinler ve logolar oluşturmamıza yardımcı olur. Özellikle el yazısı stilleri en popüler kategorilerden biridir. Metninizi ihtiyaçlarınıza ve platformun gereksinimlerine göre tamamen özelleştirebilirsiniz.',
                    image: '/fonts-showcase.png'
                },
                {
                    id: 'how-changer-works',
                    title: 'Yazı Dönüştürücü Nasıl Çalışır?',
                    type: 'text',
                    content: 'Yazı dönüştürücü, sosyal medya gönderileri, markalar ve takipçiler için stilize edilmiş takma adlar ve havalı metinler oluşturmaya yarayan çevrimiçi bir araçtır. Farklı platformlarda benzersiz görünmenizi sağlar ve profil etkileşiminizi artırır.',
                    image: '/text-showcase.png'
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
                    content: 'Sosyal medya platformları, yeni kullanıcıları takipçiye ve müşteriye dönüştürmek için son derece etkileşimlidir. Gönderilerde, takma adlarda ve biyografilerde güzel, küçük, kalp logolu ve kalın yazı tipleri kullanarak herkes için daha okunabilir ve çekici bir profil oluşturabilirsiniz.',
                    image: '/social-media-showcase.png'
                },
                {
                    id: 'to-consider',
                    title: 'Yazı Stili Seçerken Dikkat Edilmesi Gerekenler',
                    type: 'text',
                    content: 'Bir yazı stili seçerken tüm platformlarda iyi çalıştığından ve Türkçe karakterleri desteklediğinden emin olun. Yazı tipi çekici görünmeli ancak küçük ekranlarda bile okunması kolay olmalıdır. Metin her zaman açık ve net olmalıdır.',
                    image: '/showcase-v2.png'
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
                },
                {
                    id: 'home-faq',
                    title: 'Sıkça Sorulan Sorular',
                    type: 'faq',
                    faqs: [
                        {
                            q: 'Yazı Stilleri Aracı nasıl şık takma adlar oluşturur?',
                            a: 'PUBG ve Instagram için şık takma adlar oluşturmak için metninizi giriş bölümüne girmeniz yeterlidir; bu, metninizi takma ad olarak kullanılabilecek benzersiz ve havalı metinlere dönüştürür. PUBG için hazır takma adlar istiyorsanız, takma ad fikirlerini keşfetmek için PUBG tarzı takma ad sayfamızı kullanabilirsiniz.'
                        },
                        {
                            q: 'Türkçe karakterler tam olarak destekleniyor mu?',
                            a: 'Evet, Yazı stilleri aracımız tüm Türkçe Ğ, ü, ş, ı, ö ve ç karakterlerini destekler. Bu araç, Türk kullanıcıların yazı tiplerini değiştirmeleri için özel olarak tasarlanmıştır.'
                        },
                        {
                            q: 'Tüm dillerde çalışıyor mu?',
                            a: 'Evet, kullanıcılar dillerini bozmadan tüm dillerde yazı stilleri oluşturabilir ve kullanabilir. Unicode tüm dilleri kapsar, karakterlerini tüm dillerde kolayca değiştirirler.'
                        },
                        {
                            q: 'Yazı tiplerini bilgisayarımda kullanabilir miyim?',
                            a: 'Evet, bu yazı tipleri tüm cihazlarda çalışır. İndirmeden kopyalayıp yapıştırmak kolaydır.'
                        },
                        {
                            q: 'Gizlilik konusunda endişelenmeli miyim?',
                            a: 'Hayır, yazı tipi oluşturucumuzu güvenle kullanabilirsiniz. Web sitemizi kullanan kullanıcıların hiçbir metnini kaydetmiyoruz. Aracımızı kullanmakta ve her yerde paylaşmakta özgürsünüz.'
                        }
                    ]
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
                    content: 'Instagram gibi tüm çevrimiçi platformlar, kullanıcılara metinlerini Şık Biyografi, Gönderi Taslağı ve Yorum olarak özelleştirme seçeneği sunar. Instagram metin dönüştürücü, {{yazı stilleri}} ile yazı tipini Kalın, 3D, Estetik, El Yazısı ve süslü metin gibi farklı bir stile dönüştürmemize yardımcı olur.'
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
                    image: '/insta-font-showcase.png',
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
                    title: 'Sıkça Sorulan Sorular',
                    type: 'faq',
                    faqs: [
                        { q: 'Instagram\'da hangi yazı tipleri çalışır?', a: 'Çoğunlukla tüm Unicode karakter tabanlı yazı tipleri Instagram\'da çalışır. İşte Instagram\'da yaygın olarak kullanılan birkaç önemli yazı tipi stili: Kalın, El Yazısı, Estetik Yazı ve Küçük.' },
                        { q: 'Instagram\'da Metin Stilleri Nasıl Değiştirilir?', a: 'Instagram uygulamasının sınırlı yazı tipi stilleri varken, stilize edilmiş bir metin oluşturmak ve Instagram\'daki biyografinizi ve açıklamalarınızı değiştirmek için Instagram yazı tipi aracımızı kullanabilirsiniz.' },
                        { q: 'Instagram Stilize Metin Aracı Nasıl Çalışır?', a: 'Instagram profilinizi etkileşimli ve profesyonel hale getiren bir yazı tipi stili ararken; Mükemmel yazı tipi stilini bulmak için metninizi aracımıza girebilir ve tarayıcıda arama yapabilirsiniz.' },
                        { q: 'Instagram Hikayesinde farklı bir yazı tipi kullanabilir miyim?', a: 'Evet, Instagram hikayesinde farklı yazı tipleri kullanabilirsiniz. Instagram\'ın varsayılan sınırlı bir stili vardır, ardından hikayenize eklemek için daha fazla yazı tipine göz atabilirsiniz.' },
                        { q: 'Instagram yazı tiplerini kullanmak güvenli mi?', a: 'Evet, kullanımı tamamen güvenli olan ve Instagram profilinizi etkilemeyen Unicode karakterleri vardır.' },
                        { q: 'Instagram\'da en popüler yazı tipi hangisidir?', a: 'Süslü metin, Gotik, Siyah Kare ve Estetik yazı tipi, daha anlaşılır oldukları için çoğunlukla Instagram\'da kullanılır. Ayrıca Taçlı, Kod Metni ve Modern Kalın seçeneklerini de kullanabilirsiniz.' }
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
                title: 'Pubg',
                titleHighlight: 'Şekilli Nick',
                description: '',
                inputTitle: 'Create your own nickname',
                inputSub: '',
                inputPlaceholder: 'Type here...',
                readyNicks: 'Ready-made PUBG nicknames',
                readyNicksDesc: 'Beğendiğin nicki tek tıkla kopyala ve PUBG\'de kullan',
                generatorTitle: 'Kendi Adınla PUBG Nick Oluştur',
                howToUse: 'Hemen Oluştur',
                readyUse: 'Hemen Kullan',
                clickToUse: 'İstediğin seçeneğe dokun, hemen kullan',
            },
            categories: {
                havali: 'Cool & Stylish',
                sekilli: 'Symbolic & Framed',
                pro: 'Professional Actor',
                clan: 'Clan & Team',
                agresif: 'Aggressive & Combative',
                girl: 'Girl Shaped Nick',
                japanese: 'Japanese Style',
            },
            sections: [
                {
                    id: 'pubg-intro',
                    type: 'text',
                    title: '',
                    content: 'PUBG: Battlegrounds\'da, hızlı tempolu çok oyunculu, takım tabanlı ve aksiyon dolu bir nişancı oyununda kimliğiniz en az yetenekleriniz kadar önemlidir. Mobil ve PC\'de yüz binlerce oyuncunun şık, kısa, uzun veya estetik takma adlar seçtiğini gördüm; çünkü güçlü bir isim varlık oluşturur. PUBG ile Valorant ve Mobile Legends: Bang Bang gibi diğer oyunlarda, hesap isimleri üzerinde daha az kısıtlama olması bir avantaj sağlar. Birçok kullanıcı, en güzel PUBG isimleri ve net anlamlarla öne çıkmak için PUBG erkek isimleri, PUBG kadın isimleri, PUBG klan nickleri, Türkçe PUBG isimleri ve hatta 2025 trendlerini araştırıyor.\n\nDeneyimlerime göre, PUBG tarzı bir nick, standart alfabenin ötesindeki harflerle sembollerin karıştırılmasıyla, oyun geliştiricilerinin takma adları özelleştirmek için izin verdiği özel özellikler kullanıldığında en iyi sonucu verir. Platformdaki kullanıcı adınız herkes tarafından görülebildiği için, sıradan kullanıcı adları yerine yüksek kaliteli bir kullanıcı adı seçmek, onu daha akılda kalıcı ve avantajlı kılar.\n\nBenzersiz nick yöntemi, eşsiz bir kullanıcı adı oluşturmanıza yardımcı olur ve fikrinizi değiştirirseniz, hesabınızı güncellemek için envanterinizdeki isim değiştirme kartlarını veya bir değişim kartını kullanabilirsiniz. Sadece gözleri yoran veya daha az işlevsel hale gelen aşırı karmaşık bir stilden kaçının; günümüzde insanlar daha basit şeyleri tercih ediyor, bu nedenle "Basit PUBG kullanıcı adları" veya temiz {{şık yazı tipi|/}} PUBG nickleri gibi farklı ama basit bir kullanıcı adı, takım isimleri ve yaratıcı kullanıcı adları arasında her zaman güçlü kalacaktır.'
                },
                {
                    id: 'how-to-write',
                    type: 'text',
                    level: 2,
                    title: 'PUBG\'de Şık Nickler Nasıl Yazılır',
                    content: 'PUBG\'de şık bir takma ad oluşturmak için genellikle bir PUBG tarzı nick oluşturucu aracı veya PUBG Şık İsim Yazma Aracı ile başlamanızı öneririm. "Stilize edilmiş metin yazmak için buraya yazın" yazan kutuya adınızı girin; PUBG Mobile ve hatta stilize metin kullanan diğer oyunlar veya sosyal medyalar için {{çeşitli sembollerle|/sekilli-semboller}} otomatik olarak oluşturulan harika stilize isimler göreceksiniz.\n\nÇevrimiçi siteler aracılığıyla şık PUBG nickleri oluşturmak son derece basit olsa da, mevcut kullanıcı adlarını aynen kopyalamaya güvenmemelisiniz. İlham kaynağı olarak çok güzel örnekler sunulsa da, seçtiğiniz kullanıcı adı benzersiz olmalı, tam bir kopya olmamalıdır; özellikle PUBG nickleri maksimum 14 karakterle sınırlı olduğu için "Karanlığın Koruyucusu", "Güçlü ve Zengin" veya "Cehennemin Gücü" gibi isimler uygun değildir.'
                },
                {
                    id: 'simple-unique',
                    type: 'text',
                    level: 3,
                    title: 'Basit Ama Benzersiz Tutun',
                    content: 'PUBG oyunundaki deneyimlerime göre, {{şık yazı tipi|/}} veya şık bir PUBG nicki, çok karmaşık, çok uzun ve gereğinden fazla uzun olmadığında en iyi sonucu verir; çünkü aşırı karmaşık veya kafa karıştırıcı isimler kötü bir izlenim bırakır ve genellikle ağır düz metin veya aşırı karmaşık kullanıcı adları yerine daha basit bir görünümü tercih eden kullanıcılar tarafından sevilmez. PUBG kullanıcı adlarındaki özelleştirme sınırlı olduğundan, ister yeni bir hesap oluşturuyor olun ister zamanla envanterinize eklenen kullanıcı adı değiştirme kartlarını kullanıyor olun, bazen ödeme yapmanız bile gerekebilir.\n\nGerçekten güzel bir kullanıcı adı seçmek ve onu benzersiz bir şekilde düzenlemek akıllıcadır. Tüm karakterleri süslü yapmak yerine başına veya sonuna şık semboller ekleyin; bu etkili yöntem bir avantaj sağlar, daha fazla arkadaş edinmenize yardımcı olur ve akılda kalıcı kullanıcı adınızın öne çıkmasını sağlar, böylece arkadaşlarınız ve rakipleriniz oyuna girdiklerinde, sizi skor listesinde gördüklerinde ve hatta sizi takip ettiklerinde şaşırırlar.'
                },
                {
                    id: 'tips-memorable',
                    type: 'text',
                    level: 3,
                    title: 'Unutulmaz PUBG Tarzı Nickler Oluşturmak İçin İpuçları',
                    content: 'Çevrimiçi araştırma yapın, kendi fikirlerinizi kullanın, dezavantaj getiren küçük değişikliklerden kaçının ve YouTube\'daki içerik üreticileri gibi izleyicileri tatmin edebilecek yaratıcı bir kullanıcı adına odaklanın; çünkü güçlü stilize edilmiş kullanıcı adları, PUBG tarzı nickler ve hatta PUBG temalı bir takma ad akılda kalıcılığın bir göstergesidir. İnsanlar görsel zekaya sözel zekadan daha fazla tepki verir, bu nedenle şekillerin, desenlerin ve temiz stilize edilmiş sembollerle yapılan hafif yaratıcılık süslemelerinin akıllıca kullanımı, şık nickler veya Şık PUBG Takma Adları\'ndan ilham alan yeni bir kullanıcı adı oluşturduğunuzda gerçek fayda ve yeni olasılıklar getirir.'
                },
                {
                    id: 'pubg-guide',
                    type: 'text',
                    level: 2,
                    title: 'PUBG İsimleri: Yaratıcı ve Etkili Oyuncu İsimleri Oluşturma Rehberi',
                    content: '**1. Oyuncu İsimlerinin Önemi:** Milyonlarca oyuncu tarafından oynanan popüler battle royale oyunu PUBG\'de, oyuncu isminiz hem oyun içindeki hem de oyun dışındaki iletişimde sizi tanımlayan önemli faktörlerden biridir. Deneyimlerime göre, güçlü PUBG isimlerinin arkasındaki gerçek başarı, kişiliklerinizi nasıl yansıttıkları, oyun deneyiminizi nasıl şekillendirdikleri, takım arkadaşlarınızın sizi tanımasına nasıl yardımcı oldukları ve bazen rakiplerde korku veya saygı uyandırmalarıdır. İyi bir oyuncu ismi seçmek sosyal etkileşimi gerçekten artırabilir ve maçları daha keyiflü hale getirebilir; bu nedenle bu makale daha iyi isimler oluşturmak için pratik ipuçları ve öneriler paylaşıyor.\n\n**2. Yaratıcı ve Etkili Bir Oyuncu İsmi Seçin:** Farklı yaratıcı oyuncu isimleri arasından seçim yaparken, önce hedef kitlenizi ve yaratmak istediğiniz izlenimi düşünün. Eğlence amaçlı maçlar için mizahi isimler harikadır, ancak ciddi oyuncular daha profesyonel bir yaklaşımı tercih edebilir. Her zaman basit, yazması kolay ve hızlı yazarken zaman kazandıran Kısa, Akılda Kalıcı İsimler öneririm; çünkü uzun veya karmaşık isimler hatırlama güçlüğüne neden olur ve takım arkadaşlarınız sizi çağırmaya çalışırken yazma zamanı kaybettirebilir.\n\n**3. Size Uygun Bir Stil Seçin:** "Keskin Nişancı" veya "Ghillie Takımı" gibi askeri terimlerle bağlantılı veya "Çorba Parası" gibi oyun temasına bağlı {{Oyun Temalı İsimleri|https://www.thebump.com/b/video-game-baby-names}} keşfedebilirsiniz. Birçok oyuncu Kişisel İlgi Alanlarını da kullanır; bir futbol taraftarı bir takımın adını veya favori oyuncusunun adını ekleyebilirken, bir müzik hayranı favori şarkıcısının adını veya şarkı adını tercih edebilir. Önemli olan, ister çevrimiçi araştırma yaparak, ister arkadaşlarınızla fikir alışverişinde bulunarak, farklı diller kullanarak, yaratıcı imla veya farklı harfler kullanarak olsun, yanlış bir oyuncu isminden kaçınırken benzersiz ve orijinal hissettiren Benzersiz, Orijinal İsimler seçmektir.\n\n**4. Oyuncu İsmi Seçerken Dikkat Edilmesi Gerekenler:** Dikkat Edilmesi Gerekenler altında, olumsuz bir izlenim yarattıkları ve itibarınızı olumsuz etkileyebilecekleri için küfür veya aşağılayıcı içerik barındıran Ofansif İsimlerden her zaman kaçının. Ayrıca kullanımı zor hissettiren Uzun, Karmaşık İsimlerden de kaçının. Popüler Oyuncu İsimlerinden veya popüler aktör isimlerinden uzak durun; çünkü bunlar sıradan bir izlenim yaratır ve benzersizliğini kaybeder, bu da PUBG\'de öne çıkma amacına aykırıdır.'
                },
                {
                    id: 'why-not-stylish',
                    type: 'text',
                    level: 2,
                    title: 'PUBG nicklerim neden şık görünmüyor?',
                    content: 'Birçok harika PUBG nicki başka sitelerde oluşturulur, ancak oyunda kullanılamazlar çünkü PUBG Mobile birçok Unicode karakterini tam olarak desteklemez. Gerçekten şık PUBG nickleri oluşturmak istiyorsanız, genellikle gerçekte kullanabileceğiniz iyi PUBG nickleri üretmenize yardımcı olan bir PUBG stilize nick oluşturucu aracılığıyla Çin veya Japon alfabeleri gibi farklı alfabelerden desteklenen stilize sembollere güvenmelisiniz.\n\n彡 ᴅᴇᴀᴅ ᴋɪʟʟᴇ r 彡 gibi bazı stilize nickler {{Instagram|/insta-yazi-tipi}}\'da veya diğer sosyal medya platformlarında havalı ve şık görünebilir ve başka bir oyunda çalışabilirler, ancak PUBG nick kuralları nedeniyle PUBG\'nin içinde farklı bir isme ihtiyacınız olabilir.'
                },
                {
                    id: 'turkish-style',
                    type: 'text',
                    level: 2,
                    title: 'Türkçe PUBG İsim Stilleri',
                    content: '2025 yılında, Türkçe PUBG başlıkları öne çıkmak isteyen oyuncular için sert ve yaratıcı isimlerin bir karışımını sunuyor.\n\nAçılı Darbe, Ağır Darbe, Çaylak, Aşılmaz Engel ve Büyük Savaşçı gibi isimler güç gösterirken; Büyük Spoiler, Büyülü Okçu, Büyük Dolandırıcı ve Cehennemin Gücü stil ve kişilik katar.\n\nAyrıca cesur, stratejik veya saygın olmak isteyip istemediğinize bağlı olarak Cehennem Savaşçısı, Cesur Yürek, Çaylak, Doğan Şahin, Dünyayı Yöneten veya Efsanevi Ok\'u seçebilirsiniz. Fırtına Meleği, Gece Arzusu, Yıldız Grubu, Güçlü ve Zengin ve Baskın gibi diğer seçenekler güçlü bir varlık oluşturmaya yardımcı olurken; İzle ve Öğren, Karşı Konulmaz, Karanlığın Koruyucusu, Karanlık Günler, Seri Katil ve Kemik Kıran gibi isimler güçlü ve unutulmaz bir izremin bırakır.\n\nOyuncular ayrıca PUBG\'deki stillerine uyması için Korkusuz Oyun Yöneticisi, Oyunların Kralı, Ölümcül Direniş, Ölümcül Darbeci, Özgürlük İçin Savaş, Parasız Güçlü, Profesyonel Forvet, Son Tehlike, Son Saldırgan, Tehlikenin Kendisi, Uzman Katil, Yalnız Melek, Sadece Karanlık, Yaratık, Yenilmez Asker ve Zengin Savaşçı gibi rolleri de benimseyebilirler.'
                },
                {
                    id: 'creative-stylish',
                    type: 'text',
                    level: 3,
                    title: 'Yaratıcı ve Şık PUBG Takma Adları',
                    content: 'Stil Sahibi PUBG İsimleri için; Adrenalin Sevgisi, Yalnız Melek, Ölüm Meleği, Böcek Kralı, Kara Ölüm, Kör Koruyucu, Kemik Kırıcı, Cesur Yürek, Şeker Kasabı veya Ölü Katil gibi yaratıcı ve benzersiz nicklerle geleneksel fikirlerin ötesine geçebilirsiniz.\n\nBazıları シ Elendil シ, Elf Dostu, Ölümsüz Türk, Ｊａｎｉｓｓａｒｙ, Yeniçeri, Şövalye Kral, ๛ Mr Crowley ๛, Mr Crowley, Veba Doktoru, Çürük Zombi, 〔Samurai〕, Samuray, ๏ Spartan ๏, Spartalı, T͜͡c Warrior, Savaşçı, 彡 Venom 彡, Zehir, ロ Viking ロ, Viking, × Warlord ×, Savaş Lordu gibi şıklık için özel karakterler kullanır. Deneyimlerime göre, bu şık nickler sadece profilinizi unutulmaz kılmakla kalmaz, aynı zamanda ister güçlü, ister gizemli, ister eğlenceli görünmek isteyin, PUBG\'de benzersiz bir kimlik oluşturmanıza yardımcı olur.'
                },
                {
                    id: 'pubg-faq',
                    type: 'faq',
                    level: 2,
                    title: 'Sıkça Sorulan Sorular',
                    faqs: [
                        { q: 'PUBG\'de oyuncu adımı nasıl değiştirebilirim?', a: 'Oyuna giriş yapabilir, Ayarlar\'a gidebilir, Profil\'e tıklayabilir ve Oyuncu Adı bölümünde yeni bir ad seçebilirsiniz.' },
                        { q: 'Oyuncu adımı sık sık değiştirirsem ne olur?', a: 'Oyuncu adınızı sık sık değiştirmek, takım arkadaşlarınızın veya rakiplerinizin sizi tanımasını zorlaştırabilir ve oyun içi iletişimi olumsuz etkileyebilir.' },
                        { q: 'İngilizce olmayan bir isim seçmek bir dezavantaj mıdır?', a: 'Hayır, İngilizce olmayan bir isim bir dezavantaj değildir. Anlam veya dil farklılıkları isminizi takım arkadaşlarınız veya rakipleriniz için daha çekici hale getirebilir.' },
                        { q: 'İsmimi değiştirirsem önceki ismim hala görünür mü?', a: 'Hayır, önceki adınız artık görünmez, ancak takım arkadaşlarınız veya rakipleriniz yeni adınızı öğrenene kadar sizi eski adınızla çağırmaya devam edebilirler.' },
                        { q: 'Oyuncu ismimi değiştirmek için ödeme yapmam gerekiyor mu?', a: 'Hayır, oyuncu adınızı değiştirmek ücretsizdir; sadece belirli aralıklarla sağlanan isim kartlarına ihtiyacınız vardır.' },
                        { q: 'İsim kartlarını ne sıklıkla kullanabilirim?', a: 'Oyuncu adınızı güvenli bir şekilde değiştirmek için belirli aralıklarla isim kartlarını kullanabilirsiniz.' },
                        { q: 'Sık sık yapılan değişiklikler takım arkadaşlarımın kafasını karıştırabilir mi?', a: 'Evet, oyuncu adınızı sık sık değiştirmek takım arkadaşlarınızın kafasını karıştırabilir ve sizi tanımalarını zorlaştırabilir.' },
                        { q: 'İngilizce olmayan isimler üzerinde herhangi bir kısıtlama var mı?', a: 'İngilizce olmayan oyuncu isimlerine izin verilir. İsimlerin oyun içi iletişim için çekici kalması için anlam ve dil farklılıklarını göz önünde bulundurmanız yeterlidir.' }
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
                    id: 'shaped-symbols-intro',
                    title: 'Şekilli Semboller',
                    type: 'article',
                    content: [
                        { type: 'p', text: 'Bir Şekilli Semboller web sitesini ziyaret ettiğinizde, bu semboller ve {{yazı stilleri}} ile profilinizi veya blog metninizi nasıl havalı, benzersiz, estetik ve çekici gösterebileceğinizi hemen fark edersiniz. Bir Sembol aşığı olarak, Facebook, Twitter, Instagram ve WhatsApp gibi birçok web sitesinden ve sosyal medya platformundan yararlandım ve size en iyi sitenin Stilist Sembolleri kolayca kopyalayıp yapıştırmanıza ve kullanmanıza izin veren site olduğunu söyleyebilirim.' },
                        { type: 'p', text: 'Bazı web sitelerinin arayüzleri karmaşık olabilir, ancak benim sevdiklerim basit, minimalist ve kullanımı kolaydır; bu da içerik oluştururken çok fazla zaman kazandırır. Herhangi bir sembolü tek bir tıklamayla seçebilme özelliği sayesinde, yeni başlayanlar bile web sitelerini veya oyun platformlarını etkileyici gösterebilir.' }
                    ]
                },
                {
                    id: 'usage-in-games',
                    title: 'Sosyal Medya ve Oyunlarda Şekilli Semboller Kullanımı',
                    type: 'article',
                    content: [
                        { type: 'p', text: 'Şekilli semboller sadece sosyal medya platformları için değildir. Bunları aşağıdakiler dahil birçok alanda kullanabilirsiniz:' },
                        { type: 'list', items: ['Instagram biyografileri', 'Steam kullanıcı adları', 'PUBG ve Mobile Legends gibi oyunlardaki oyun içi takma adlar'] },
                        { type: 'p', text: 'Şık semboller kullanıcı adınıza ekstra bir etki katar ve diğer oyuncuların sizi daha hızlı hatırlamasına yardımcı olur. Doğru harfler, sayılar veya sembollerle oluşturulmuş benzersiz bir kullanıcı adı daha büyük bir etki yaratır, tamamen farklı biri olduğunuzun sinyalini verir ve hatta insanların görsel zekasını harekete geçirir. Karmaşık semboller yerine basit şekilli sembolleri tercih ederek, insanların gözlerini yormaktan kaçınır ve şık sembollerinizi daha etkili hale getirirsiniz.' },
                        { type: 'p', text: 'Tüm Şekilli Sembollerden "Harfler" bölümüne kadar, her platformda keşfedilecek geniş bir takma ad, akılda kalıcı, etkileyici takma adlar ve izlenim yelpazesi vardır.' }
                    ]
                },
                {
                    id: 'not-on-keyboard',
                    title: 'Klavyenizde Olmayan Semboller Oluşturma',
                    level: 3,
                    type: 'article',
                    content: [
                        { type: 'p', text: 'Klavyede bulunmayan stilize semboller oluşturmak istiyorsanız, en kolay yol stilize sembolleri, emojileri ve Unicode sembol tablolarını listeleyen bir sayfayı ziyaret etmektir.' },
                        {
                            type: 'list', items: [
                                'Bu sembollere klavyenizden her zaman doğrudan erişilemez',
                                'Her karaktere benzersiz bir numara atayan bir standart olan Unicode çok kullanışlıdır',
                                'Farklı semboller oluşturmak için bir karakterın ALT kodunu kullanabilirsiniz (Örnek: ALT + 1 = ☺)',
                                'Bu yaklaşım, stilize sembollerle yazılan metninizin tutarlı ve görsel olarak çekici görünmesini sağlar'
                            ]
                        },
                        { type: 'p', text: 'Bu sembolleri kullanırken, uygunsuz içerikten veya çirkin bir görünümden kaçınmak için önlemlere uymak önemlidir. Sembolün işlevselliğinin tüm kullanıcılar için doğru çalışması için kaleminizin veya cihazınızın platformla uyumlu olduğundan emin olun.' },
                        { type: 'p', text: 'Güvenilir web sitelerinden gelen yönergeler ve öneriler, uygun sembolleri seçmenize, hata yapmadan tıklamanıza, kopyalanıza ve yapıştırmanıza yardımcı olur. İç Bağlantıları, Şekilli Sembolleri ve PUBG veya diğer oyunlar için Şık Takma Adların nasıl oluşturulacağını anlayarak, metninizi veya kullanıcı adınızı renginiz ve şeklinizle uyumlu ve başkaları tarafından kolayca fark edilebilir hale getirmede avantaj elde edersiniz.' }
                    ]
                },
                {
                    id: 'beautify-text',
                    title: 'Metninizi Güzelleştirmek İçin Sembolleri Kullanma',
                    type: 'article',
                    content: [
                        { type: 'p', text: 'Kullanıcı adınızın veya sosyal medya gönderinizin öne çıkmasını istiyorsanız:' },
                        {
                            type: 'list', items: [
                                'Harf sembolleri ve havalı semboller metninizi güzelleştirmenin basit bir yoludur',
                                'Bu stilize semboller, farklı dillerdeki insanlarla iletişim kurmanıza yardımcı olabilir',
                                'Şekilli semboller sayfasındaki sağ tıklama ve kopyalama seçeneklerini kullanmak, bunları herhangi bir yere eklemeyi kolaylaştırır'
                            ]
                        },
                        { type: 'p', text: 'Popüler özel semboller şunları içerir:' },
                        {
                            type: 'list', items: [
                                'Kalp ❤️',
                                'Gülen yüz ☺️',
                                'Yıldız ✨',
                                'Müzik notası ♫'
                            ]
                        },
                        { type: 'p', text: 'Bu özel semboller kişiliğinizi ve tarzınızı vurgular ve çevrimiçi varlığınızı daha göz alıcı ve unutulmaz kılmak için bunları kullanıcı adlarına, takma adlara, gönderilere, durumlara, hikayelere, Instagram biyografilerine, Twitter (X) profillerine ve Facebook duvarlarına ekleyebilirsiniz.' },
                        { type: 'image', src: '/symbols-enhance-text-tr.png', alt: 'Şekilli sembollerle metin güzelleştirme' }
                    ]
                },
                {
                    id: 'advanced-customization',
                    title: 'Oyunlarda Semboller ve Gelişmiş Özelleştirme',
                    type: 'article',
                    content: [
                        { type: 'p', text: 'Sosyal medyanın ötesinde, semboller PUBG, Fortnite ve League of Legends gibi çevrimiçi oyunlarda kullanıcı adlarını çarpıcı kılmak için sayıların, harflerin ve sıra dışı takma adların kullanıldığı oyunlarda önemli bir rol oynar.' },
                        { type: 'p', text: 'Klavye kısayollarını, alt kodlarını veya Unicode sembol tablolarını kullanarak, klavyenizden doğrudan erişilemeyen özel sembollere ve emojilere erişebilirsiniz. Bu, yazı tiplerini özelleştirmenize ve aşağıdakiler gibi estetik semboller eklemenize olanak tanır:' },
                        {
                            type: 'list', items: [
                                '▂▃▅▆█▆▅▃▂',
                                'Üçgen ▲',
                                'Yıldız ❃ ✾ ✽ ✼ ❈',
                                'Kalp 💔 (◍•ᴗ•◍)❤',
                                'Müzik notası ♬ 🎧 🎶 🎻',
                                'Teknik ⌛ ⌧ ⍋',
                                'Korece ㄽㄸ',
                                'Latince ą Ř ⒮ ⒴',
                                'Yunanca β ψ ξ Π',
                                'Japonca るザ',
                                'Satranç ♖ ♠ ♥ ♢',
                                'Daire ◒ ◐ 㶶 ☢',
                                'Kare ❏ ▉',
                                'Çince ㊎ ㊧',
                                'Kesir ½ ⅕'
                            ]
                        },
                        { type: 'p', text: 'Bu semboller başlıklarda, biyografilerde veya eğitim, eğlence veya günlük işler için kullanılabilir, içeriğinizi görsel olarak yaratıcı ve benzersiz kılar.' }
                    ]
                },
                {
                    id: 'faq',
                    title: 'SSS',
                    type: 'faq',
                    faqs: [
                        { q: 'Klavyemde olmayan Şekilli Sembolleri nasıl oluşturabilirim?', a: 'Unicode sembol tablolarını veya klavyenizden doğrudan erişilemeyen bir sembolü eklemek için ALT + 1 = ☺ gibi bir karakterin ALT kodunu kullanabilirsiniz. Kişisel olarak güvenilir bir Şekilli Semboller web sitesinden kopyalamayı tercih ediyorum çünkü zaman kazandırıyor ve yazılan metni temiz ve tutarlı tutuyor.' },
                        { q: 'Şekilli sembolleri nerede kullanabilirim?', a: 'Şekilli sembolleri Instagram, Facebook, Twitter (X) ve WhatsApp gibi sosyal medya platformlarında veya PUBG, Fortnite ve League of Legends gibi oyunlarda kullanabilirsiniz. Instagram biyografilerinde, Steam kullanıcı adlarında, oyun içi takma adlarda ve hatta kendi web sitenizde iyi çalışırlar.' },
                        { q: 'Şık semboller kullanıcı adlarını neden daha güçlü kılar?', a: 'Şık semboller, harfler ve sayılar içeren benzersiz bir kullanıcı adı, diğer oyuncular ve kullanıcılar üzerinde ekstra bir etki yaratır ve güçlü bir izlenim bırakır. Görsel zeka sayesinde insanlar çarpıcı isimleri daha hızlı hatırlayabilir.' },
                        { q: 'Şekilli sembollerin her yerde kullanımı güvenli midir?', a: 'Evet, ancak önlemlere uymalısınız. Kaleminizin veya cihazınızın platformla uyumlu olduğundan emin olun ve çirkin bir görünüme neden olabilecek uygunsuz içeriklerden kaçının.' },
                        { q: 'Deneyebileceğim bazı popüler özel semboller nelerdir?', a: 'Kişiliğinizi ve tarzınızı vurgulamak için kalp ❤️, gülen yüz ☺️, yıldız ✨ veya müzik notası ♫ kullanabilirsiniz. Bu özel semboller genellikle gönderileri, durumları, hikayeleri ve kullanıcı adlarını güzelleştirmek için kullanılır.' },
                        { q: 'Şekilli sembolleri nasıl doğru kopyalayıp yapıştırırım?', a: '"Harfler" bölümünden veya Tüm Şekilli Semboller sayfasından sembole tıklamanız, kopyalanız ve yapıştırmanız yeterlidir. İyi yönergeler ve öneriler, renginiz ve şeklinizle uyumlu kalan uygun sembolleri seçmenize yardımcı olur.' },
                        { q: 'Şekilli semboller çevrimiçi varlığımı iyileştirebilir mi?', a: 'Evet, ▂▃▅▆█▆▅▃▂, ▲, ❃ ✾ ✽ ✼ ❈, 💔 (◍•ᴗ•◍)❤, ♬ 🎧 🎶 🎻, ⌛ ⌧ ⍋, ㄽㄸ, ą Ř ⒮ ⒴, β ψ ξ Π, るザ, ♖ ♠ ♥ ♢, ◒ ◐ 㶶 ☢, ❏ ▉, ㊎ ㊧ ve ½ ⅕ gibi estetik semboller kullanmak, içeriğinizi görsel olarak yaratıcı ve her platformda daha göz alıcı hale getirebilir.' }
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
                    content: 'Fonts are text and styles that we customize on our own choice to change our text more eye-catching and better Visual Appearance in any social media Platform. These Fonts make text more clear and readable by changing text font, size and color.',
                    image: '/fonts-showcase.png'
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
                    content: 'Font changer is an online Tool which works for creating a stylized nickname, cool text and engagement message for Social Media posts for brand and followers. We can use symbols styles text which make a unique in different game which look attractive.',
                    image: '/text-showcase.png'
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
                    content: 'Social Media platforms are highly interactive for new user to Convert into your follower and Client for any Service. By Using Beautiful, small, heart bold and colors Fonts in posts, nickname and bio which make a more readable and attractive for everyone.',
                    image: '/social-media-showcase.png'
                },
                {
                    id: 'to-consider',
                    title: 'Things to Consider When Choosing a Font Style',
                    type: 'text',
                    content: 'When choosing a font style, make sure it works well on all platforms and supports special characters like Turkish letters. The font should look attractive but also be easy to read, even on small screens.',
                    image: '/showcase-v2.png'
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
                },
                {
                    id: 'home-faq',
                    title: 'Frequently Asked Questions (FAQs)',
                    type: 'faq',
                    faqs: [
                        {
                            q: 'How does the Font Styles Tool generate stylish nicknames?',
                            a: 'Generate stylish nicknames for PUBG and instagram simply enter your text in the input section which converts your text into unique and cool text which can be used as nicknames. If you want a ready to build nicknames for PUBG, simple you our PUBG-style nickname page to explore nicknames ideas.'
                        },
                        {
                            q: 'Are Turkish characters fully supported?',
                            a: 'Yes, Our font styles tool support all turkish Ğ, ü, ş, ı, ö, and ç characters. This tool is specially designed for Turkish users to change their font.'
                        },
                        {
                            q: 'Does it work in all languages?',
                            a: 'Yes, Users can create and use font styles in all languages without breaking their style. Unicode covers all languages, they simply change their characters in all languages.'
                        },
                        {
                            q: 'Can I use the fonts on my computer?',
                            a: 'Yes, These fonts work on all devices. This is easy to copy and paste without downloading.'
                        },
                        {
                            q: 'Should I be concerned about privacy?',
                            a: 'No, You can safely use our font generator. We did not save any text of users which use our website. You are free to use our tool and share anywhere.'
                        }
                    ]
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
                    image: '/insta-font-showcase.png',
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
                    title: 'FAQs',
                    type: 'faq',
                    faqs: [
                        { q: 'Which fonts work on Instagram?', a: 'Mostly all unicode characters base font work on instagram. Here are few important font styles which are commonly used on instagram: Bold, Handwriting, Aesthetic Writing and small.' },
                        { q: 'How to Change Text Styles on Instagram?', a: 'Instagram app has limited font styles while you can use our instagram font tool to create a stylized text and change your bio and captions on instagram.' },
                        { q: 'How does the Instagram Stylized Text Tool work?', a: 'While you are searching for a font style which makes your instagram profile interactive and professional, you can simply enter your text in our tool and browser to find the perfect font style.' },
                        { q: 'Can I use a different font in Instagram Story?', a: 'Yes, you can use different fonts in insta story. Instagram has a default limited style, then you can browse more fonts to add in your story.' },
                        { q: 'Are Instagram fonts safe to use?', a: 'Yes, there are unicode characters which are completely safe to use and don\'t affect your instagram profile.' },
                        { q: 'Which font is the most popular on Instagram?', a: 'Fancy text, Gothic, Black Square and Aesthetic font are mostly used on Instagram because they are more understandable. You can also use Crowned, Code Text and Modern Thick.' }
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
                title: 'Pubg',
                titleHighlight: 'Şekilli Nick',
                description: 'Create PUBG nicknames with your own name or copy ready-to-use PUBG nicknames with one click.',
                inputTitle: 'Create Your Own Nickname',
                inputSub: 'Generate 100+ unique PUBG nicknames with your name ✨',
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
                    id: 'pubg-intro',
                    type: 'text',
                    title: '',
                    content: 'In PUBG: Battlegrounds, a fast-paced multiplayer, team-based, action, shooter, game, your identity matters just as much as your skills. I’ve seen hundreds of thousands of players on mobile and PC choose Nicknames that are stylish, short, long, or even beautiful, because a strong name builds presence. In PUBG and other games like Valorant and Mobile Legends: Bang Bang, there are fewer restrictions on account names, which gives an advantage. Many users explore PUBG male names, PUBG female names, PUBG clan nicknames, Turkish PUBG names, and even trends for 2025 to stand out with the most beautiful PUBG names and clear meanings.\n\nFrom my experience, a PUBG-style nickname works best when it mixes symbols with letters beyond the standard alphabet, using the special feature allowed by game developers to customize nicknames. Your username on the platform is visible to everyone, so picking a high-quality username instead of ordinary usernames makes it more memorable and advantageous.\n\nThe unique nickname method helps you create a unique username, and if you change your mind, you can use change cards or a change card from your inventory to update your account. Just avoid an overly complex style that feels tiring to the eyes or becomes a less functional username; today, people prefer simpler things, so a different but simple username like Simple PUBG usernames or clean {{stylish font|/}} PUBG nicknames will always stay strong among team names and creative usernames.'
                },
                {
                    id: 'how-to-write',
                    type: 'text',
                    level: 2,
                    title: 'How to Write Stylish Nicknames in PUBG',
                    content: 'To create a stylish nickname in PUBG, I generally recommend starting with a PUBG-style nickname generator tool or the PUBG Stylish Name Writer Tool. Enter your name in the box that says "Type here to write stylized text"; you\'ll see cool stylized names automatically generated with {{various symbols|/sekilli-semboller}} for PUBG Mobile and even other games or social media that use stylized text.\n\nWhile creating stylish PUBG nicknames is extremely simple through websites found online or on the internet, you should not rely on copying an exact copy from existing usernames. Many very nice ones are offered as inspiration, but your chosen username must be unique, not an exact duplicate, especially because PUBG nicknames are limited to a maximum of 14 characters, so names like Guardian of Darkness, Powerful and Rich, or Power of Hell are not suitable.'
                },
                {
                    id: 'simple-unique',
                    type: 'text',
                    level: 3,
                    title: 'Keep It Simple but Unique',
                    content: 'Based on my experience in PUBG, a {{stylish font|/}} or PUBG nickname works best when it\'s not too complex, too long, or unnecessarily lengthy; overly complicated or confusing names leave a bad impression and are generally disliked by users who prefer a simpler look over heavy plain text or overly complex usernames. Because customization of PUBG usernames is limited, you may even need to pay sometimes, whether you\'re creating a new account or using username change cards added to your inventory over time.\n\nIt is smart to choose a really nice username and edit it in a unique way. Add stylish symbols at the beginning or end, instead of making all characters fancy; this effective method gives an advantage, helps in making more friends, and makes your memorable username stand out so friends and opponents feel surprised when they enter the game, see it on the kill list, and even follow you.'
                },
                {
                    id: 'tips-memorable',
                    type: 'text',
                    level: 3,
                    title: 'Tips for Creating Memorable PUBG-style Nicknames',
                    content: 'Do some research online, use your own ideas, avoid small slight modifications that bring disadvantage, and focus on a creative username that can satisfy viewers like content creators on YouTube, because strong stylized usernames, PUBG-style nicknames, or even a PUBG-themed nickname act as an indicator of memorability. People respond more to visual intelligence than verbal intelligence, so smart use of shapes, patterns, and light embellishments of creativity with clean stylized symbols brings real benefit and new possibilities when you create stylish nicknames or a fresh new username inspired by Stylish Nicknames in PUBG.'
                },
                {
                    id: 'pubg-guide',
                    type: 'text',
                    level: 2,
                    title: 'PUBG Names: A Guide to Creating Creative and Effective Player Names',
                    content: '**1. The Importance of Player Names:** In PlayerUnknown\'s Battlegrounds, known as PUBG, a popular battle royale game played by millions of players worldwide, your player name is one of the important factors for identifying you in both in-game and out-of-game communication. From my experience, the real success behind strong PUBG names is how they reflect your personalities, shape your gaming experience, help teammates recognize you, and sometimes even inspire fear or respect in opponents. Choosing a good player name can truly enhance social interaction and make matches more enjoyable, which is why this article shares practical tips and suggestions for creating better names.\n\n**2. Choose a Creative and Effective Player Name:** When you choose from different creative player names, first think about your target audience and the impression you want to create. For casual matches, humorous names are great for fun, but serious players may prefer a more professional approach. I always suggest Short, Memorable Names that are simple, easy to type, and help save time while typing quickly, because long names or complex ones cause difficulty remembering and can waste typing time when teammates try to call you.\n\n**3. Choose a Style That Suits You:** You can explore {{Game-themed Names|https://www.thebump.com/b/video-game-baby-names}} connected to the game theme, such as military terms like Sniper or Ghillie Suit, or gaming terms like Chicken Dinner. Many players also use Personal Interests—a football fan might add a team\'s name or favorite player\'s name, while a music fan may prefer a favorite singer\'s name or song title. The key is selecting Unique, Original Names that feel unique and original, whether by researching online, exchanging ideas with friends, using different languages, creative spelling, or different letters, while still avoiding a wrong player name.\n\n**4. Things to Consider When Choosing a Player Name:** Under Things to Consider, always avoid Offensive Names containing profanity or derogatory content, as they create a negative impression and can negatively impact your reputation. Also avoid Long, Complex Names that feel difficult to use. Stay away from Popular Player Names or popular actor names, as they create a commonplace impression and lose uniqueness, which defeats the purpose of standing out in PUBG.'
                },
                {
                    id: 'why-not-stylish',
                    type: 'text',
                    level: 2,
                    title: 'Why aren\'t my PUBG nicknames stylish?',
                    content: 'Many cool PUBG nicknames are generated on other sites, but they cannot be used in the game because PUBG Mobile does not fully support many Unicode characters. If you want to create truly stylish PUBG nicknames, you must rely on supported stylized symbols from different alphabets, such as Chinese or Japanese alphabets, often through a PUBG stylized nickname generator that helps produce good PUBG nicknames you can actually use.\n\nSome stylized nicknames like 彡 ᴅᴇᴀᴅ ᴋɪʟʟᴇ r 彡 may look cool and stylish on {{Instagram|/insta-yazi-tipi}} or other social media platforms and they may work in another game, but due to PUBG nickname rules, you might need a different name inside PUBG itself.'
                },
                {
                    id: 'turkish-style',
                    type: 'text',
                    level: 2,
                    title: 'PUBG Names Style in Turkish',
                    content: 'In 2025, Turkish PUBG titles offer a mix of fierce and creative names for players who want to stand out.\n\nNames like Painful Blow, Heavy Blow, Foolish Rookie, Insurmountable Obstacle, and Great Warrior show strength, while The Great Spoiler, Magical Archer, The Great Swindler, and The Power of Hell add flair and personality.\n\nYou can also pick Hell Warrior, Brave heart, Rookie, Dogan Sahin, Dominating the World, or Legendary Arrow depending on whether you want to be bold, strategic, or respected. Other options like Storm Angel, Night Desire, Star Group, Powerful and Rich, and Dominant help convey a powerful presence, while names such as Watch and learn, Irresistible, Guardian of Darkness, Dark Days, mass murderer, and Bonebreaker make a strong, memorable impression.\n\nPlayers can also adopt roles like Fearless Game Manager, King of Games, Deadly resistance, Deadly Coup Plotter, Fight for freedom, Powerful Without Money, Professional Striker, The Final Danger, The Last Striker, Danger Itself, Expert Killer, Lonely Angel, Only Darkness, Creature, Invincible Soldier, and Rich Warrior to fit their style in PUBG.'
                },
                {
                    id: 'creative-stylish',
                    type: 'text',
                    level: 3,
                    title: 'Creative and Stylish PUBG Nicknames',
                    content: 'For PUBG Names in Style, you can go beyond traditional ideas with creative and unique nicknames such as Adrenaline Love, Alone Angel, Angel of Death, Beetle King, Black Death, Blind Guardian, Bone Crusher, Brave Heart, Candy Butcher, or Dead Killer.\n\nSome use special characters for flair, like シ Elendil シ, Elf-Friendly, Immortal Turk, Ｊａｎｉｓｓａｒｙ, Janissary, Knight King, ๛ Mr Crowley ๛, Mr Crowley, Plague Doctor, Rotten Zombie, 〔Samurai〕, Samurai, ๏ Spartan ๏, Spartan, T͜͡c Warrior, Warrior, 彡 Venom 彡, Poison, ロ Viking ロ, Viking, × Warlord ×, Warlord. From my experience, these stylish nicknames not only make your profile memorable but also help you create a unique identity in PUBG, whether you want to appear powerful, mysterious, or fun.'
                },
                {
                    id: 'pubg-faq',
                    type: 'faq',
                    level: 2,
                    title: 'Frequently Asked Questions',
                    faqs: [
                        { q: 'How do I change my player name in PUBG?', a: 'You can log into the game, go to Settings, click Profile, and choose a new name in the Player Name section.' },
                        { q: 'What happens if I change my player name frequently?', a: 'Changing your player name frequently can make it difficult for teammates or opponents to recognize you and may negatively impact in-game communication.' },
                        { q: 'Is choosing a non-English name a disadvantage?', a: 'No, a non-English name is not a disadvantage. The meaning or language differences may make your name more appealing to teammates or opponents.' },
                        { q: 'Will my previous name still be visible if I change it?', a: 'No, your previous name is no longer visible, but teammates or opponents can still call you by your old name until they learn your new one.' },
                        { q: 'Do I need to pay to change my player name?', a: 'No, changing your player name is free; you just need name cards provided at specific intervals.' },
                        { q: 'How often can I use name cards?', a: 'You can use name cards at specific intervals to change your player name safely.' },
                        { q: 'Can frequent changes confuse my teammates?', a: 'Yes, frequently changing your player name can confuse teammates and make it harder for them to recognize you.' },
                        { q: 'Are there any restrictions on non-English names?', a: 'Non-English player names are allowed. Just consider meaning and language differences to keep names appealing for in-game communication.' }
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
                    id: 'shaped-symbols-intro',
                    title: 'Shaped Symbols',
                    type: 'article',
                    content: [
                        { type: 'p', text: 'When you visit a Shaped Symbols website, you immediately notice how these shaped symbols can make your profile or blog text look cool, unique, aesthetic, and attractive. As a Symbol lover, I’ve tried many websites and social media platforms like Facebook, Twitter, Instagram, and WhatsApp, and I can tell you that the best site is one that lets you copy, paste, and use Stylist Symbols easily.' },
                        { type: 'p', text: 'The interfaces of some websites can be complicated, but the ones I like are simple, minimalist, and easy to operate, which saves a lot of time when you’re creating content. With the ability to select any symbol with a single click, even beginners can make their website or gaming platforms look impressive.' }
                    ]
                },
                {
                    id: 'usage-in-games',
                    title: 'Using Shaped Symbols in Social Media and Games',
                    type: 'article',
                    content: [
                        { type: 'p', text: 'Shaped symbols aren’t just for social media platforms. You can use them in many areas, including:' },
                        { type: 'list', items: ['Instagram bios', 'Steam usernames', 'In-game nicknames in games like PUBG and Mobile Legends'] },
                        { type: 'p', text: 'Stylish symbols add an extra impact to your username, helping other players remember you faster. A unique username with the right letters, numbers, or symbols creates a greater impact, signals that you are a completely different person, and even engages people’s visual intelligence. By choosing simple shaped symbols over complex ones, you avoid tiring people’s eyes, making your stylish symbols more effective.' },
                        { type: 'p', text: 'From All Shaped Symbols to the "Letters" section, there’s a wide range of nicknames, memorable, impactful nicknames, and impressions to explore across every platform.' }
                    ]
                },
                {
                    id: 'not-on-keyboard',
                    title: 'Creating Symbols Not on Your Keyboard',
                    level: 3,
                    type: 'article',
                    content: [
                        { type: 'p', text: 'You can access special symbols and emojis that aren\'t directly accessible from your keyboard by using keyboard shortcuts, alt codes, or {{Unicode symbol tables|https://symbl.cc/en/unicode-table/}}. This allows you to customize fonts and add aesthetically pleasing symbols such as:' },
                        {
                            type: 'list', items: [
                                'These symbols aren’t always accessible directly from your keyboard',
                                'Unicode, a standard assigning a unique number to each character, is very useful',
                                'You can use a character\'s ALT code to make different symbols (Example: ALT + 1 = ☺)',
                                'This approach ensures your text written with stylized symbols looks consistent and visually appealing'
                            ]
                        },
                        { type: 'p', text: 'When using these symbols, it’s important to follow precautions to avoid inappropriate content or unsightly appearance. Make sure your stylus or device is compatible with the platform, so the symbol\'s functionality works correctly for all users.' },
                        { type: 'p', text: 'Guidelines and recommendations from trusted websites help you select suitable symbols, click, copy, and paste them without errors. By understanding Internal Connections, Shaped Symbols, and how to Create Stylish Nicknames for PUBG or other games, you gain an advantage in making your text or username unique, in harmony with your color and shape, and easy for others to recognize.' }
                    ]
                },
                {
                    id: 'beautify-text',
                    title: 'Using Symbols to Enhance Your Text',
                    type: 'article',
                    content: [
                        { type: 'p', text: 'If you want to make your username or social media post stand out:' },
                        {
                            type: 'list', items: [
                                'Letter symbols and cool symbols are a simple way to beautify your text',
                                'These stylized symbols can help you communicate with people across different languages',
                                'Using the right click and copy options from a shaped symbols page makes it easy to add them anywhere'
                            ]
                        },
                        { type: 'p', text: 'Popular custom symbols include:' },
                        {
                            type: 'list', items: [
                                'Heart ❤️',
                                'Smiley face ☺️',
                                'Star ✨',
                                'Musical note ♫'
                            ]
                        },
                        { type: 'p', text: 'These special symbols highlight your personality and style, and you can add them to usernames, nicknames, posts, statuses, stories, Instagram bios, Twitter (X) profiles, and Facebook walls to make your online presence more eye-catching and memorable.' },
                        { type: 'image', src: '/symbols-enhance-text-tr.png', alt: 'Enhancing text with shaped symbols' }
                    ]
                },
                {
                    id: 'advanced-customization',
                    title: 'Symbols in Games and Advanced Customization',
                    type: 'article',
                    content: [
                        { type: 'p', text: 'Beyond social media, symbols play an important role in games like PUBG, Fortnite, and League of Legends, where online games use numbers, letters, and unusual nicknames to make usernames striking.' },
                        { type: 'p', text: 'By using keyboard shortcuts, alt codes, or Unicode symbol tables, you can access special symbols and emojis that are not accessible directly from your keyboard. This allows you to customize fonts and add aesthetic symbols like:' },
                        {
                            type: 'list', items: [
                                '▂▃▅▆█▆▅▃▂',
                                'Triangle ▲',
                                'Star ❃ ✾ ✽ ✼ ❈',
                                'Heart 💔 (◍•ᴗ•◍)❤',
                                'Musical note ♬ 🎧 🎶 🎻',
                                'Technical ⌛ ⌧ ⍋',
                                'Korean ㄽㄸ',
                                'Latin ą Ř ⒮ ⒴',
                                'Greek β ψ ξ Π',
                                'Japanese るザ',
                                'Chess ♖ ♠ ♥ ♢',
                                'Circle ◒ ◐ 㶶 ☢',
                                'Square ❏ ▉',
                                'Chinese ㊎ ㊧',
                                'Fraction ½ ⅕'
                            ]
                        },
                        { type: 'p', text: 'These symbols can be used in headlines, biographies, or for educational, entertainment, or everyday tasks, making your content visually creative and unique.' }
                    ]
                },
                {
                    id: 'faq',
                    title: 'FAQs',
                    type: 'faq',
                    faqs: [
                        { q: 'How can I create Shaped Symbols that are not on my keyboard?', a: 'You can use Unicode symbol tables or a character\'s ALT code like ALT + 1 = ☺ to insert a symbol that is not directly accessible from your keyboard. I personally prefer copying from a trusted Shaped Symbols website because it saves time and keeps the text written clean and consistent.' },
                        { q: 'Where can I use shaped symbols?', a: 'You can use shaped symbols on social media platforms such as Instagram, Facebook, Twitter (X), and WhatsApp, or in games like PUBG, Fortnite, and League of Legends. They work well in Instagram bios, Steam usernames, in-game nicknames, and even on your website.' },
                        { q: 'Why do stylish symbols make usernames more powerful?', a: 'A unique username with stylish symbols, letters, and numbers creates an extra impact and leaves a strong impression on other players and users. Because of visual intelligence, people can remember striking names faster.' },
                        { q: 'Are shaped symbols safe to use everywhere?', a: 'Yes, but you should follow precautions. Make sure your stylus or device is compatible with the platform, and avoid inappropriate content that may cause an unsightly appearance.' },
                        { q: 'What are some popular custom symbols I can try?', a: 'You can use a heart ❤️, smiley face ☺️, star ✨, or musical note ♫ to highlight your personality and style. These special symbols are often used to beautify posts, statuses, stories, and usernames.' },
                        { q: 'How do I copy and paste shaped symbols correctly?', a: 'Simply click, copy, and paste the symbol from the "Letters" section or All Shaped Symbols page. Good guidelines and recommendations help you select suitable symbols that stay in harmony with your color and shape.' },
                        { q: 'Can shaped symbols improve my online presence?', a: 'Yes, using aesthetic symbols like ▂▃▅▆█▆▅▃▂, ▲, ❃ ✾ ✽ ✼ ❈, 💔 (◍•ᴗ•◍)❤, ♬ 🎧 🎶 🎻, ⌛ ⌧ ⍋, ㄽㄸ, ą Ř ⒮ ⒴, β ψ ξ Π, るザ, ♖ ♠ ♥ ♢, ◒ ◐ 㶶 ☢, ❏ ▉, ㊎ ㊧, and ½ ⅕ can make your content visually creative and more eye-catching across every platform.' }
                    ]
                }
            ]
        }
    }
};
