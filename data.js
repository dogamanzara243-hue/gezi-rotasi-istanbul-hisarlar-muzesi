const SPOT_DATA = {
    theme: "history",
    breadcrumb: { prev: "İstanbul", home: "Müzeler & Kaleler", current: "Hisarlar Müzesi" },
    hero: {
        coverImage: "https://images.unsplash.com/photo-1541432901042-2d8bd64b3a9b?auto=format&fit=crop&w=1600&q=80",
        category: "Açık Hava Müzesi",
        badge: "Tarihi Askeri Mimari",
        title: "Hisarlar Müzesi",
        subtitle: "Rumeli ve Anadolu Hisarları'nı kapsayan, Fatih Sultan Mehmet'in fethin ön hazırlığı olarak inşa ettirdiği görkemli açık hava müzesi kompleksi.",
        stats: [
            { label: "Yapım Yılı", value: "1452" },
            { label: "İnşa Süresi", value: "4 Ay" },
            { label: "Konum", value: "Sarıyer / İstanbul" },
            { label: "Müze Türü", value: "Açık Hava" }
        ]
    },
    summary: {
        typeTitle: "Osmanlı Askeri Mimarisi",
        description: "Hisarlar Müzesi (Rumeli Hisarı), Fatih Sultan Mehmet tarafından İstanbul'un fethinden hemen önce Boğaz'ın kuzeyinden gelebilecek yardımları kesmek amacıyla 139 gün gibi rekor bir sürede inşa ettirilmiştir.",
        badges: [
            { icon: "fa-solid fa-clock", text: "Ziyaret Saatleri: 09:00 - 17:30" },
            { icon: "fa-solid fa-ticket", text: "Müzekart Geçerlidir" },
            { icon: "fa-solid fa-calendar-xmark", text: "Pazartesi Günleri Kapalı" }
        ]
    },
    overview: {
        paragraphs: [
            "Hisarlar Müzesi, Boğaz'ın en dar noktasında (600 metre) karşılıklı yer alan Rumeli Hisarı ve Anadolu Hisarı yapılarını kapsayan idari açık hava müzesidir. Müzenin ana ziyaret alanı Sarıyer tarafında yer alan Rumeli Hisarı'dır. Halil Paşa, Zağanos Paşa ve Saruca Paşa adlarını taşıyan üç büyük burcuyla askeri mimarlık tarihinin dünya çapındaki en önemli eserleri arasındadır.",
            "Müze bahçesinde Osmanlı dönemine ait toplar, gülleler ve Boğaz'ı kapatmakta kullanılan Haliç zincirinin bir parçası sergilenmektedir. Amfitiyatro alanı ve sur patikaları, ziyaretçilere hem tarih dolu bir atmosfer hem de büyüleyici İstanbul Boğazı manzaraları sunar."
        ],
        visitorNotes: [
            { title: "Müzekart", description: "Müze girişinde T.C. Kültür ve Turizm Bakanlığı Müzekart geçerlidir." },
            { title: "Tatil Günü", description: "Müze haftanın Pazartesi günleri ziyarete kapalıdır." },
            { title: "Arazi Şartları", description: "Dik merdivenler ve tarihi taş zeminler nedeniyle spor ve rahat ayakkabı kullanımı önerilir." },
            { title: "Fotoğrafçılık", description: "Geniş Boğaz açısı ve tarihi burçlar nedeniyle harika fotoğraf imkanları barındırır." }
        ]
    },
    whyVisit: [
        { icon: "fa-solid fa-shield-halved", title: "Fetih Tarihine Tanıklık", description: "1453 İstanbul fethinin en kritik askeri hamlesi olan hisarların büyüleyici atmosferini hissedin." },
        { icon: "fa-solid fa-mountain-sun", title: "Panoramik Boğaz Manzarası", description: "Fatih Sultan Mehmet Köprüsü ve Boğaz'ın mavi sularını en dik açıdan gören eşsiz seyir noktası." },
        { icon: "fa-solid fa-cannons", title: "Açık Hava Eserleri", description: "Tarihi Osmanlı topları, gülleler ve dönemin askeri savunma objelerini açık havada inceleme fırsatı." }
    ],
    mustSee: [
        { image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b3a9b?auto=format&fit=crop&w=600&q=80", title: "Zağanos Paşa Burcu", description: "Hisarın deniz kenarındaki en görkemli kulelerinden biri." },
        { image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80", title: "Halil Paşa Burcu", description: "12 köşeli mimarisi ve kalın duvarlarıyla göze çarpan büyük kule." },
        { image: "https://images.unsplash.com/photo-1527838832766-51d7f37c9fd9?auto=format&fit=crop&w=600&q=80", title: "Açık Hava Tiyatrosu", description: "Eski minare kalıntısı yanında yer alan ve kültürel etkinliklere ev sahipliği yapmış amfitiyatro." },
        { image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80", title: "Top Sergileme Alanı", description: "Tarihi sur yollarında sıralanmış Osmanlı döküm topları ve taş gülleler." }
    ],
    transportation: {
        methods: [
            { icon: "fa-solid fa-bus", title: "İETT Otobüsleri", detail: "Kabataş veya Taksim'den kalkan 22, 22RE, 25E, 40T, 42T hatları ile 'Rumeli Hisarı' durağında inebilirsiniz." },
            { icon: "fa-solid fa-train-subway", title: "Metro", detail: "M6 Levent - Boğaziçi Ü. / Hisarüstü metrosu ile Hisarüstü istasyonunda inip aşağıya doğru 10 dk yürüyebilirsiniz." },
            { icon: "fa-solid fa-ship", title: "Deniz Ulaşımı", detail: "Aşiyan iskelesine giden şehir hatları vapurları ile sahilden yürüyerek ulaşabilirsiniz." }
        ],
        tip: "Hafta sonları sahil yolunda trafik yoğun olabileceğinden metro + yürüyüş veya deniz hattı tercih edilebilir.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Hisarlar+Muzesi+Rumelihisari+Sariyer+Istanbul"
    },
    whereToStay: [
        { name: "Bebek Hotel by The Stay", type: "Lüks LIFESTYLE", rating: "4.8", link: "https://www.google.com/travel/hotels?q=Bebek+Hotel+by+The+Stay+Istanbul" },
        { name: "Le Meridien Istanbul Etiler", type: "5 Yıldızlı Otel", rating: "4.7", link: "https://www.google.com/travel/hotels?q=Le+Meridien+Istanbul+Etiler" },
        { name: "Fuat Paşa Yalısı", type: "Tarihi Boğaz Oteli", rating: "4.6", link: "https://www.google.com/travel/hotels?q=Fuat+Pasa+Yalisi+Istanbul" }
    ],
    whereToEat: [
        { name: "Rumelihisarı İskele Restaurant", cuisine: "Deniz Ürünleri", rating: "4.7", link: "https://www.google.com/maps/search/?api=1&query=Rumelihisari+Iskele+Restaurant" },
        { name: "Nar Cafe Rumelihisarı", cuisine: "Kahvaltı & Kafe", rating: "4.5", link: "https://www.google.com/maps/search/?api=1&query=Nar+Cafe+Rumelihisari" },
        { name: "Lokma Rumelihisarı", cuisine: "Geleneksel Kahvaltı & Türk Mutfağı", rating: "4.6", link: "https://www.google.com/maps/search/?api=1&query=Lokma+Rumelihisari" }
    ]
};