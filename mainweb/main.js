/* ============================================================
   TymiY — Main script
   Routing · scroll-spy · carousel · reveals · modal · i18n · form
   ============================================================ */

(function(){
  const $  = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];

  /* ============================================================
     i18n — EN / ID dictionaries
     ============================================================ */
  const i18n = {
    EN: {
      'nav.home':'Home','nav.services':'Project & Services','nav.price':'Price',
      'nav.about':'About Us','nav.contact':'Contact Us','nav.faq':'FAQ',

      'hero.eyebrow':"For Indonesia's F&B UMKM",
      'hero.h1a':'Digitalize your','hero.h1b':'warung','hero.h1c':',','hero.h1d':'the simple way.',
      'hero.sub':"From street stalls to small restaurants — we set up QR ordering, digital menus, and the tooling to run your day-to-day. No tech headache. No hidden fees. Just a working system, on day one.",
      'hero.cta1':'See our services','hero.cta2':'Talk to us',
      'hero.meta1':'Free setup & trial','hero.meta2':'Built for Indonesian UMKM','hero.meta3':'Bahasa & English support',
      'hero.chip1':'Scan to order','hero.chip2':'Live in 7 days','hero.chip3':'WhatsApp support',
      'hero.trust':'Trusted by Indonesian warungs, cafés & cloud kitchens',

      'why.eyebrow':'Why TymiY?',
      'why.h2':'Reasons for you to choose TymiY.',
      'why.sub':"We're built around how small Indonesian F&B businesses actually work — not enterprise software in a tiny package.",
      'why.t1':'Local-first','why.d1':'Built in Indonesia for Indonesian F&B — Bahasa-native, QRIS-ready, and tuned for how your warung actually runs.',
      'why.t2':'Up & running fast','why.d2':'Most of our customers are taking digital orders in under a week. We handle the setup, you keep cooking.',
      'why.t3':'UMKM-friendly pricing','why.d3':'Free setup, free trial, simple monthly fee. No surprise charges and no setup invoices to ruin your week.',
      'why.t4':'Real human support','why.d4':"We pick up on WhatsApp. When something breaks at 9pm dinner rush, you reach a person — not a chatbot.",
      'why.t5':'Grows with you','why.d5':"Start with QR ordering. Add loyalty, multi-outlet, ops dashboards — whenever you're ready. Never overbought.",

      'best.eyebrow':'Best Service','best.h2':'Our flagship: QR Ordering.',
      'best.tag':'QR Ordering','best.title':'The way ordering should work.',
      'best.p':"Customers scan, browse your menu in their own language, and pay — all without flagging down a server. Orders land straight in your kitchen.",
      'best.li1':'Bahasa Indonesia & English menus out of the box',
      'best.li2':'QRIS, e-wallet, and cash-at-table all supported',
      'best.li3':'Per-table or per-outlet QR codes, printed and shipped to you',
      'best.li4':'Real-time kitchen tickets via tablet or printer',
      'best.cta1':'Learn more','best.cta2':'See pricing',

      'how.eyebrow':'How it works','how.h2':"Three steps. That's it.",
      'how.sub':'No long contracts. No vendor lock-in. Just a simple path from "let\'s try" to "we\'re live."',
      'how.t1':'Consult','how.d1':'We sit down (in person or on a call), understand your menu, your space, and your team. No jargon.',
      'how.t2':'Deploy','how.d2':"We set everything up, train your staff, and ship your printed QR codes. You're live within the week.",
      'how.t3':'Maintain','how.d3':"Updates, support, and check-ins on us. Tweak your menu over WhatsApp and we'll handle the rest.",

      'cta.eyebrow':'Ready when you are',
      'cta.h2':"Let's get your F&B online — this week.",
      'cta.sub':"Tell us a bit about your business and we'll set up a 20-minute call to figure out if we're a fit. Free, no pressure.",
      'cta.cta1':'Contact us now','cta.cta2':'WhatsApp now',

      'about.eyebrow':'About Us','about.h2':'The people behind TymiY.',
      'about.sub':"Two builders who've been on both sides of the counter — building product and running F&B operations.",
      'about.f1.role':'Co-founder · Product & Tech','about.f1.name':'Founder Name 1',
      'about.f1.bio':"Ex-fintech engineer turned F&B operator. Believes the best tooling looks invisible — your customers shouldn't have to read instructions to order a coffee.",
      'about.f2.role':'Co-founder · Ops & Growth','about.f2.name':'Founder Name 2',
      'about.f2.bio':'Grew up in a family-run warung in Bandung. Spent five years in F&B ops at a national chain before joining forces to build TymiY.',

      'belief.quote':'Indonesian F&B UMKM deserve software as good as the food they serve.',
      'belief.p1':'There are millions of F&B businesses in Indonesia. Most of them still take orders on a notepad, lose tickets in the kitchen rush, and never know which item is actually their best seller.',
      'belief.p2':"We built TymiY because the existing tools were either too expensive, too complicated, or didn't speak Bahasa. We thought we could do better — so we did.",

      'contact.eyebrow':'Contact Us','contact.h2':'Tell us about your business.',
      'contact.sub':"Fill in a few details and we'll get back within one business day. Or message us directly — details below.",
      'contact.directLabel':'Prefer to reach our team directly?',
      'contact.waLbl':'WhatsApp','contact.emailLbl':'Email','contact.igLbl':'Instagram',
      'contact.fName':'Name','contact.fBusiness':'Business name','contact.fEmail':'Email',
      'contact.fPhone':'WhatsApp / Phone','contact.fInterest':"I'm interested in...",
      'contact.optQR':'QR Ordering','contact.optMulti':'Multi-outlet ops','contact.optLoyalty':'Loyalty & rewards','contact.optOther':'Just want to chat',
      'contact.fMessage':'Message','contact.fMessagePh':"Tell us about your business — how many outlets, what you'd like to solve...",
      'contact.send':'Send message','contact.success':"Thanks! We'll be in touch within one business day.",

      'faq.eyebrow':'FAQ','faq.h2':'Things people ask us first.',
      'faq.sub':"Can't find what you're looking for? Send us a WhatsApp message — we usually reply within the hour.",
      'faq.q1':'How long until my warung is live with QR ordering?',
      'faq.a1':"Most of our customers go live within 7 days of signing on. The actual setup work — building your digital menu, configuring QR codes, training staff — takes about 3–4 business days. We schedule a launch day with you so it lands on a quiet weekday.",
      'faq.q1a':'What do I need to prepare?',
      'faq.a1a':"Your current menu (a photo of it is fine), your business name & logo if you have one, and 30 minutes for the kickoff call. That's it.",
      'faq.q1b':'Can you do it faster than 7 days?',
      'faq.a1b':"For most cafés and warungs with under 30 menu items, yes — we've done it in 3 days. Tell us when you need to be live and we'll work back from there.",
      'faq.q2':'What does the monthly fee actually cover?',
      'faq.a2':'Your subscription includes: the QR ordering platform, your digital menu, kitchen tickets, real-time sales dashboard, free menu updates, and WhatsApp support during business hours. Setup is free. Printed QR codes are included on first deploy.',
      'faq.q3':'Do I need new hardware?',
      'faq.a3':"In most cases, no. A tablet or smartphone in the kitchen is enough to start. If you want a thermal receipt printer, we'll recommend models we've tested and help you set it up.",
      'faq.q3a':'Does it work offline?',
      'faq.a3a':"Orders queue locally if the internet drops and sync when it's back. The customer ordering screen needs to be online, but kitchen-side has full offline fallback.",
      'faq.q4':'Can customers pay through the app?',
      'faq.a4':'Yes. We support QRIS, GoPay, OVO, DANA, ShopeePay, and bank transfer out of the box. You can also keep cash-at-table — many of our customers use a mix.',
      'faq.q5':'Is there a contract or commitment?',
      'faq.a5':'No long contracts. Pay month to month, cancel anytime. We earn your business by being useful, not by locking you in.',

      'projects.eyebrow':'Our Projects','projects.h2':'Real Indonesian F&B, running on TymiY.',
      'projects.sub':"A few of the businesses we've helped go digital. Tap a card to see the live demo and read why teams trust us.",

      'offer.eyebrow':'Our current services include…','offer.h2':'QR Ordering, end-to-end.',
      'offer.sub':"We're starting with the one thing F&B owners ask for most. More services rolling out soon.",
      'offer.tag':'Available now','offer.title':'QR Ordering',
      'offer.p':"Our flagship product — and what most of our customers start with. Everything you need to take orders, send tickets to the kitchen, and get paid.",
      'offer.li1':'Branded digital menu with photos & categories',
      'offer.li2':'Table QR codes — printed, laminated, shipped',
      'offer.li3':'Real-time sales dashboard on any device',
      'offer.li4':'QRIS & e-wallet payments built-in',
      'offer.li5':'Free menu updates over WhatsApp',
      'offer.cta1':'See pricing','offer.cta2':'Talk to us',

      'pricing.eyebrow':'Pricing','pricing.h2':'Simple monthly pricing. Free to start.',
      'pricing.sub':'All plans include free setup, free trial, and WhatsApp support. No hidden fees, no annual lock-in.',

      'testi.eyebrow':'Loved by F&B owners',
      'testi.h2':'Real words from real warungs.',

      'modal.demo':'Try the live demo',
      'modal.demoCaption':'Live, interactive demo. This is the actual customer ordering flow your guests would see.',
      'modal.trust':'Why should you trust us?',
      'modal.trust1':'Built & deployed by Indonesian F&B veterans',
      'modal.trust2':'Live with real warungs & cafés today',
      'modal.trust3':'Free trial — see results before you commit',
      'modal.trust4':'Real human WhatsApp support during dinner rush',
      'modal.cta':'Talk to us about your business',

      'footer.tagline':"Digital solutions built for Indonesia's F&B UMKM. From warungs to small chains, we make going digital simple.",
      'footer.product':'Product','footer.qr':'QR Ordering','footer.pricing':'Pricing','footer.projects':'Projects',
      'footer.company':'Company','footer.about':'About us','footer.contact':'Contact','footer.faq':'FAQ',
      'footer.touch':'Get in touch',
      'footer.copy':'© 2026 TymiY. Made in Indonesia.',
      'footer.privacy':'Privacy','footer.terms':'Terms','footer.sitemap':'Sitemap',
    },

    ID: {
      'nav.home':'Beranda','nav.services':'Proyek & Layanan','nav.price':'Harga',
      'nav.about':'Tentang Kami','nav.contact':'Hubungi Kami','nav.faq':'FAQ',

      'hero.eyebrow':'Untuk UMKM F&B Indonesia',
      'hero.h1a':'Digitalisasi','hero.h1b':'warung','hero.h1c':' Anda,','hero.h1d':'cara yang sederhana.',
      'hero.sub':'Dari kaki lima sampai restoran kecil — kami siapkan pemesanan QR, menu digital, dan alat untuk operasional harian. Tanpa ribet teknis. Tanpa biaya tersembunyi. Sistem yang langsung berjalan di hari pertama.',
      'hero.cta1':'Lihat layanan kami','hero.cta2':'Hubungi kami',
      'hero.meta1':'Setup & trial gratis','hero.meta2':'Dibuat untuk UMKM Indonesia','hero.meta3':'Dukungan Bahasa & Inggris',
      'hero.chip1':'Scan untuk pesan','hero.chip2':'Online dalam 7 hari','hero.chip3':'Dukungan WhatsApp',
      'hero.trust':'Dipercaya warung, kafé & cloud kitchen di Indonesia',

      'why.eyebrow':'Kenapa TymiY?',
      'why.h2':'Alasan Anda memilih TymiY.',
      'why.sub':'Kami dibangun sesuai cara kerja UMKM F&B Indonesia — bukan software perusahaan besar yang dikecilkan.',
      'why.t1':'Lokal sejak awal','why.d1':'Dibuat di Indonesia untuk F&B Indonesia — bahasa Indonesia, siap QRIS, dan disesuaikan dengan cara kerja warung Anda.',
      'why.t2':'Cepat siap pakai','why.d2':'Mayoritas pelanggan kami menerima pesanan digital dalam kurang dari seminggu. Kami yang siapkan, Anda fokus masak.',
      'why.t3':'Harga ramah UMKM','why.d3':'Setup gratis, trial gratis, biaya bulanan sederhana. Tanpa tagihan kejutan.',
      'why.t4':'Dukungan manusia asli','why.d4':'Kami angkat WhatsApp. Kalau ada masalah saat jam makan malam, Anda menghubungi orang — bukan chatbot.',
      'why.t5':'Tumbuh bersama Anda','why.d5':'Mulai dari pemesanan QR. Tambahkan loyalitas, multi-outlet, dashboard ops — saat Anda siap. Tidak pernah berlebihan.',

      'best.eyebrow':'Layanan Unggulan','best.h2':'Produk andalan kami: QR Ordering.',
      'best.tag':'QR Ordering','best.title':'Cara memesan yang seharusnya.',
      'best.p':'Pelanggan scan, lihat menu dalam bahasa mereka, dan bayar — tanpa perlu memanggil pelayan. Pesanan langsung masuk ke dapur Anda.',
      'best.li1':'Menu Bahasa Indonesia & Inggris langsung tersedia',
      'best.li2':'QRIS, e-wallet, dan cash-at-table semuanya didukung',
      'best.li3':'Kode QR per-meja atau per-outlet, dicetak dan dikirim',
      'best.li4':'Tiket dapur real-time via tablet atau printer',
      'best.cta1':'Pelajari lebih lanjut','best.cta2':'Lihat harga',

      'how.eyebrow':'Cara kerjanya','how.h2':'Tiga langkah. Sesederhana itu.',
      'how.sub':'Tanpa kontrak panjang. Tanpa vendor lock-in. Jalur sederhana dari "ayo coba" sampai "kami sudah online."',
      'how.t1':'Konsultasi','how.d1':'Kami duduk bersama (langsung atau via call), memahami menu, ruang, dan tim Anda. Tanpa istilah teknis.',
      'how.t2':'Deploy','how.d2':'Kami siapkan semuanya, latih staf, dan kirim QR yang sudah dicetak. Anda online dalam seminggu.',
      'how.t3':'Maintenance','how.d3':'Update, dukungan, dan check-in dari kami. Ubah menu lewat WhatsApp, kami yang urus sisanya.',

      'cta.eyebrow':'Kapan Anda siap',
      'cta.h2':'Ayo bawa F&B Anda online — minggu ini.',
      'cta.sub':'Ceritakan sedikit tentang bisnis Anda dan kami akan jadwalkan call 20 menit untuk lihat apakah kita cocok. Gratis, tanpa tekanan.',
      'cta.cta1':'Hubungi kami sekarang','cta.cta2':'WhatsApp sekarang',

      'about.eyebrow':'Tentang Kami','about.h2':'Orang-orang di balik TymiY.',
      'about.sub':'Dua builder yang sudah ada di dua sisi konter — membangun produk dan menjalankan operasional F&B.',
      'about.f1.role':'Co-founder · Produk & Tech','about.f1.name':'Nama Founder 1',
      'about.f1.bio':'Eks engineer fintech yang beralih jadi operator F&B. Percaya bahwa alat terbaik itu tidak terasa — pelanggan tidak perlu baca petunjuk untuk pesan kopi.',
      'about.f2.role':'Co-founder · Ops & Growth','about.f2.name':'Nama Founder 2',
      'about.f2.bio':'Tumbuh di warung keluarga di Bandung. Lima tahun di ops F&B chain nasional sebelum bergabung membangun TymiY.',

      'belief.quote':'UMKM F&B Indonesia layak punya software sebagus makanan yang mereka sajikan.',
      'belief.p1':'Ada jutaan bisnis F&B di Indonesia. Kebanyakan masih menerima pesanan pakai notes, kehilangan tiket saat jam ramai, dan tidak tahu menu mana yang sebenarnya paling laris.',
      'belief.p2':'Kami membangun TymiY karena alat yang ada terlalu mahal, terlalu rumit, atau tidak berbahasa Indonesia. Kami yakin kami bisa lebih baik — jadi kami buat.',

      'contact.eyebrow':'Hubungi Kami','contact.h2':'Ceritakan tentang bisnis Anda.',
      'contact.sub':'Isi beberapa detail dan kami akan kembali dalam satu hari kerja. Atau hubungi langsung — detailnya di bawah.',
      'contact.directLabel':'Lebih suka hubungi tim kami langsung?',
      'contact.waLbl':'WhatsApp','contact.emailLbl':'Email','contact.igLbl':'Instagram',
      'contact.fName':'Nama','contact.fBusiness':'Nama bisnis','contact.fEmail':'Email',
      'contact.fPhone':'WhatsApp / Telepon','contact.fInterest':'Saya tertarik dengan...',
      'contact.optQR':'QR Ordering','contact.optMulti':'Ops multi-outlet','contact.optLoyalty':'Loyalitas & rewards','contact.optOther':'Mau ngobrol saja',
      'contact.fMessage':'Pesan','contact.fMessagePh':'Ceritakan tentang bisnis Anda — berapa outlet, masalah apa yang ingin diselesaikan...',
      'contact.send':'Kirim pesan','contact.success':'Terima kasih! Kami akan menghubungi dalam satu hari kerja.',

      'faq.eyebrow':'FAQ','faq.h2':'Yang sering ditanyakan orang.',
      'faq.sub':'Tidak menemukan jawabannya? Kirim WhatsApp ke kami — biasanya balas dalam satu jam.',
      'faq.q1':'Berapa lama sampai warung saya online dengan QR ordering?',
      'faq.a1':'Mayoritas pelanggan kami online dalam 7 hari sejak daftar. Setup sebenarnya — bikin menu digital, konfigurasi QR, training staf — sekitar 3–4 hari kerja. Kami jadwalkan hari peluncuran di hari kerja yang sepi.',
      'faq.q1a':'Apa yang perlu saya siapkan?','faq.a1a':'Menu yang sekarang (foto pun cukup), nama bisnis & logo kalau ada, dan 30 menit untuk kickoff call. Itu saja.',
      'faq.q1b':'Bisa lebih cepat dari 7 hari?','faq.a1b':'Untuk kafé dan warung dengan kurang dari 30 menu, bisa — pernah 3 hari. Bilang saja kapan harus online, kami atur dari situ.',
      'faq.q2':'Biaya bulanan ini meng-cover apa saja?','faq.a2':'Langganan Anda mencakup: platform QR ordering, menu digital, tiket dapur, dashboard sales real-time, update menu gratis, dan dukungan WhatsApp jam kerja. Setup gratis. QR cetakan termasuk saat deploy pertama.',
      'faq.q3':'Saya butuh hardware baru?','faq.a3':'Umumnya tidak. Tablet atau smartphone di dapur sudah cukup untuk mulai. Kalau mau printer thermal, kami rekomendasikan model yang sudah teruji dan bantu setup.',
      'faq.q3a':'Bisa jalan offline?','faq.a3a':'Pesanan tersimpan lokal jika internet putus dan sinkron saat tersambung lagi. Layar pelanggan butuh online, tapi sisi dapur ada fallback offline penuh.',
      'faq.q4':'Pelanggan bisa bayar via app?','faq.a4':'Bisa. Kami dukung QRIS, GoPay, OVO, DANA, ShopeePay, dan transfer bank langsung. Tunai di meja juga tetap bisa — banyak pelanggan kami pakai kombinasi.',
      'faq.q5':'Ada kontrak atau komitmen?','faq.a5':'Tidak ada kontrak panjang. Bayar bulanan, batalkan kapan saja. Kami buktikan dengan layanan yang berguna, bukan dengan mengikat Anda.',

      'projects.eyebrow':'Proyek Kami','projects.h2':'F&B Indonesia yang nyata, jalan di atas TymiY.',
      'projects.sub':'Beberapa bisnis yang sudah kami bantu go-digital. Klik kartu untuk lihat demo langsung dan baca alasan mereka mempercayai kami.',

      'offer.eyebrow':'Layanan kami saat ini meliputi…','offer.h2':'QR Ordering, end-to-end.',
      'offer.sub':'Kami mulai dari satu hal yang paling sering diminta pemilik F&B. Layanan lain segera menyusul.',
      'offer.tag':'Tersedia sekarang','offer.title':'QR Ordering',
      'offer.p':'Produk andalan kami — yang biasanya jadi titik mulai pelanggan. Semua yang Anda butuhkan untuk menerima pesanan, kirim tiket ke dapur, dan terima bayaran.',
      'offer.li1':'Menu digital ber-brand dengan foto & kategori',
      'offer.li2':'QR meja — dicetak, dilaminasi, dikirim',
      'offer.li3':'Dashboard sales real-time di perangkat apapun',
      'offer.li4':'QRIS & e-wallet bawaan',
      'offer.li5':'Update menu gratis via WhatsApp',
      'offer.cta1':'Lihat harga','offer.cta2':'Hubungi kami',

      'pricing.eyebrow':'Harga','pricing.h2':'Harga bulanan sederhana. Mulai gratis.',
      'pricing.sub':'Semua paket termasuk setup gratis, trial gratis, dan dukungan WhatsApp. Tanpa biaya tersembunyi, tanpa lock-in tahunan.',

      'testi.eyebrow':'Disukai pemilik F&B',
      'testi.h2':'Kata-kata jujur dari warung nyata.',

      'modal.demo':'Coba demo langsung',
      'modal.demoCaption':'Demo interaktif. Inilah alur pemesanan persis seperti yang akan dilihat pelanggan Anda.',
      'modal.trust':'Kenapa Anda harus percaya kami?',
      'modal.trust1':'Dibangun & di-deploy oleh veteran F&B Indonesia',
      'modal.trust2':'Sudah jalan di warung & kafé nyata hari ini',
      'modal.trust3':'Trial gratis — lihat hasilnya sebelum berkomitmen',
      'modal.trust4':'Dukungan WhatsApp manusia asli saat jam makan malam',
      'modal.cta':'Hubungi kami tentang bisnis Anda',

      'footer.tagline':'Solusi digital untuk UMKM F&B Indonesia. Dari warung sampai chain kecil, kami buat digitalisasi jadi sederhana.',
      'footer.product':'Produk','footer.qr':'QR Ordering','footer.pricing':'Harga','footer.projects':'Proyek',
      'footer.company':'Perusahaan','footer.about':'Tentang kami','footer.contact':'Kontak','footer.faq':'FAQ',
      'footer.touch':'Hubungi',
      'footer.copy':'© 2026 TymiY. Dibuat di Indonesia.',
      'footer.privacy':'Privasi','footer.terms':'Syarat','footer.sitemap':'Sitemap',
    },
  };

  let currentLang = localStorage.getItem('tymiy.lang') || 'EN';

  function applyLang(lang){
    currentLang = lang;
    localStorage.setItem('tymiy.lang', lang);
    document.documentElement.lang = (lang === 'ID') ? 'id' : 'en';

    const dict = i18n[lang] || i18n.EN;
    $$('[data-i18n]').forEach(el=>{
      const k = el.dataset.i18n;
      if(dict[k] !== undefined) el.textContent = dict[k];
    });
    $$('[data-i18n-ph]').forEach(el=>{
      const k = el.dataset.i18nPh;
      if(dict[k] !== undefined) el.setAttribute('placeholder', dict[k]);
    });

    // toggle button state
    $$('.nav .lang button').forEach(b=>{
      b.classList.toggle('on', b.dataset.lang === lang);
    });
  }

  /* ============================================================
     Inject SVG icons & illustrations
     ============================================================ */
  function inject(root=document){
    $$('[data-ico]', root).forEach(el=>{
      const key = el.dataset.ico;
      if(ill[key]) el.innerHTML = ill[key];
      else if(ill.social && ill.social[key]) el.innerHTML = ill.social[key];
    });
    $$('[data-svg]', root).forEach(el=>{
      const key = el.dataset.svg;
      if(ill[key]) el.innerHTML = ill[key];
    });
    $$('[data-svg-key]', root).forEach(el=>{
      const path = el.dataset.svgKey.split('.');
      let v = ill;
      for(const k of path){ v = v && v[k]; }
      if(typeof v === 'string') el.innerHTML = v;
    });
  }
  inject();

  /* ============================================================
     Projects — build cards
     ============================================================ */
  const projects = [
    { id:'aroma',   t:'Warung Aroma',     d:'Family café in Bandung. Went from paper tickets to 80% QR orders in 3 weeks.', tag:'Café · QR Ordering', img:'coffee',  label:'Bandung · 2025',  loc:'Bandung', year:'2025', size:'1 outlet · ~40 menu items' },
    { id:'roti',    t:'Roti Sentral',     d:'Neighborhood bakery in Jakarta Selatan. Digital pre-orders cut morning queues by half.', tag:'Bakery · Pre-order', img:'bakery', label:'Jakarta · 2025', loc:'Jakarta', year:'2025', size:'1 outlet · pre-order' },
    { id:'sambal',  t:'Sambal Nusantara', d:'5-outlet local restaurant chain. Unified menu & reporting across every location.', tag:'Multi-outlet', img:'resto',  label:'Surabaya · 2025', loc:'Surabaya', year:'2025', size:'5 outlets' },
    { id:'dapur',   t:'Dapur Kilat',      d:'Cloud kitchen running 4 brands from one space. Ops dashboard built in two weeks.', tag:'Cloud kitchen', img:'cloud',  label:'Tangerang · 2024', loc:'Tangerang', year:'2024', size:'4 brands · 1 kitchen' },
    { id:'bakso',   t:'Bakso Pak Joko',   d:'Street stall in Yogya. Stick-on QR codes turned regulars into repeat WhatsApp orders.', tag:'Street vendor', img:'street', label:'Yogyakarta · 2024', loc:'Yogyakarta', year:'2024', size:'Street stall' },
    { id:'loyal',   t:'Kopi Loyal',       d:'Mid-size coffee chain. Loyalty stamps + birthday rewards drove +18% repeat visits.', tag:'Loyalty · Rewards', img:'loyalty', label:'Jakarta · 2024', loc:'Jakarta', year:'2024', size:'3 outlets' },
  ];

  const projectScroll = $('#projectScroll');
  if(projectScroll){
    projects.forEach(p=>{
      const c = document.createElement('div');
      c.className = 'pcard';
      c.innerHTML = `
        <div class="img">
          <span class="tag">${p.tag}</span>
          <span class="label">${p.label}</span>
          ${ill.proj[p.img] || ''}
        </div>
        <div class="body">
          <div class="t">${p.t}</div>
          <div class="d">${p.d}</div>
          <div class="meta">
            <span class="chip">QR Ordering</span>
            <span class="chip cyan">Live</span>
          </div>
        </div>
      `;
      c.addEventListener('click', ()=> openModal(p));
      projectScroll.appendChild(c);
    });

    $$('[data-hscroll]').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const dir = +btn.dataset.hscroll;
        const card = projectScroll.querySelector('.pcard');
        if(!card) return;
        const w = card.getBoundingClientRect().width + 22;
        projectScroll.scrollBy({left: dir*w, behavior:'smooth'});
      });
    });
  }

  /* ============================================================
     Project modal — demo + trust
     ============================================================ */
  const modal = $('#projectModal');
  function openModal(p){
    $('#modalTag').textContent = p.tag;
    $('#modalTitle').textContent = p.t;
    $('#modalDesc').textContent = p.d;
    $('#modalImg').innerHTML = ill.proj[p.img] || '';
    $('#modalMeta').innerHTML = `
      <span class="chip">📍 ${p.loc}</span>
      <span class="chip cyan">📅 ${p.year}</span>
      <span class="chip">${p.size}</span>
    `;
    // hide demo frame initially each time
    const frame = $('#modalDemoFrame');
    if(frame){ frame.hidden = true; }
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(){
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
  if(modal){
    modal.addEventListener('click', e=>{ if(e.target===modal) closeModal(); });
    $('#modalClose')?.addEventListener('click', closeModal);
    document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeModal(); });
    $('#modalDemo')?.addEventListener('click', ()=>{
      const frame = $('#modalDemoFrame');
      const btn = $('#modalDemo');
      if(!frame) return;
      frame.hidden = !frame.hidden;
      // re-render its svg if needed
      inject(frame);
      btn.querySelector('span:first-child').textContent =
        frame.hidden ? (i18n[currentLang]['modal.demo']||'Try the live demo')
                     : ((currentLang==='ID') ? 'Sembunyikan demo' : 'Hide demo');
    });
  }

  /* ============================================================
     Page detection — from URL pathname
     ============================================================ */
  // Maps URL pathname → logical page key. Adjust if your hosting uses
  // different paths. Anything unrecognized falls back to 'landing'.
  const PATH_MAP = {
    '/':              'landing',
    '/index.html':    'landing',
    '/about':         'about',
    '/about.html':    'about',
    '/about/':        'about',
    '/services':      'services',
    '/services.html': 'services',
    '/services/':     'services',
  };
  function currentPage(){
    const p = (location.pathname || '/').toLowerCase();
    return PATH_MAP[p] || 'landing';
  }

  /* ============================================================
     Anchor scroll on load
     ============================================================ */
  // If the URL arrives with a #fragment, scroll to that section with a
  // nav-aware offset. Runs once, after layout. Plain browser behavior
  // would land the anchor under the fixed nav — this fixes that.
  function scrollToInitialAnchor(){
    const id = (location.hash || '').replace(/^#/,'').trim();
    if(!id) return;
    requestAnimationFrame(()=>{
      const el = document.getElementById(id);
      if(!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({top:y, behavior:'smooth'});
    });
  }

  /* ============================================================
     Mobile drawer
     ============================================================ */
  $('#burgerBtn')?.addEventListener('click', ()=> $('#mobDrawer').classList.add('open'));
  $('#drawerClose')?.addEventListener('click', ()=> $('#mobDrawer').classList.remove('open'));
  $('#mobDrawer')?.addEventListener('click', e=>{
    if(e.target.id === 'mobDrawer') $('#mobDrawer').classList.remove('open');
  });

  /* ============================================================
     Language toggle — functional
     ============================================================ */
  $$('.nav .lang button').forEach(b=>{
    b.addEventListener('click', ()=> applyLang(b.dataset.lang));
  });

  /* ============================================================
     Scroll spy
     ============================================================ */
  const SPY = {
    services: {
      pricing: '.navlink[data-go="services"][data-anchor="pricing"]',
      _default:'.navlink[data-go="services"]:not([data-anchor])',
    },
    about: {
      contact: '.navlink[data-go="about"][data-anchor="contact"]',
      faq:     '.navlink[data-go="about"][data-anchor="faq"]',
      _default:'.navlink[data-go="about"]:not([data-anchor])',
    },
    landing: { _default: null },
  };

  function setActiveNavlink(page, sectionId){
    $$('.navlink').forEach(b=>b.classList.remove('active'));
    $$('.mob-drawer .item').forEach(b=>b.classList.remove('active'));
    const map = SPY[page] || {};
    let sel = (sectionId && map[sectionId]) ? map[sectionId] : map._default;
    if(sel){
      document.querySelector(sel)?.classList.add('active');
      const drawerSel = sel.replace('.navlink', '.mob-drawer .item');
      $(drawerSel)?.classList.add('active');
    }
  }

  function currentSectionOnActivePage(){
    const page = $('.page.active');
    if(!page) return null;
    const secs = $$('section[id]', page);
    const navOffset = 130;
    let current = null;
    secs.forEach(s=>{
      const r = s.getBoundingClientRect();
      if(r.top <= navOffset) current = s;
    });
    return current;
  }

  let spyTick = false;
  function onScrollSpy(){
    if(spyTick) return;
    spyTick = true;
    requestAnimationFrame(()=>{
      spyTick = false;
      const page = currentPage();
      const sec = currentSectionOnActivePage();
      setActiveNavlink(page, sec ? sec.id : null);
      $('#nav')?.classList.toggle('scrolled', window.scrollY > 30);
    });
  }
  window.addEventListener('scroll', onScrollSpy, {passive:true});

  /* ============================================================
     Reveal on scroll
     ============================================================ */
  function runReveals(reset){
    const els = $$('[data-reveal]').filter(el=>{
      const page = el.closest('.page');
      return !page || page.classList.contains('active');
    });
    if(reset){ els.forEach(el=>el.classList.remove('in')); }

    // Arm the entrance only after a layout pass; if the page is hidden/paused
    // (eg iframe preview), we'll still force visibility below.
    document.body.classList.add('reveal-armed');

    const apply = ()=>{
      els.forEach(el=>{
        const r = el.getBoundingClientRect();
        if(r.top < window.innerHeight - 60) el.classList.add('in');
      });
    };
    apply();
    setTimeout(apply, 50);
    setTimeout(apply, 250);

    // Safety net: if transitions never progress (paused iframe / reduced motion),
    // force everything visible after 1s.
    setTimeout(()=>{
      const stuck = els.find(el=>{
        const op = parseFloat(getComputedStyle(el).opacity);
        return el.classList.contains('in') && op < 0.5;
      });
      if(stuck){
        document.body.classList.remove('reveal-armed');
        document.body.classList.add('reveal-skip');
      }
    }, 1000);
  }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
  $$('[data-reveal]').forEach(el => io.observe(el));

  /* ============================================================
     Why TymiY carousel
     ============================================================ */
  (function initCarousel(){
    const track = $('[data-car-track]');
    if(!track) return;
    const realCards = $$('.why-card', track);
    const prev = $('.car-nav.prev');
    const next = $('.car-nav.next');
    const dotsWrap = $('[data-car-dots]');
    const N = realCards.length;
    if(!N) return;

    const firstClone = realCards[0].cloneNode(true);
    const lastClone  = realCards[N-1].cloneNode(true);
    firstClone.dataset.clone = 'first';
    lastClone.dataset.clone  = 'last';
    track.insertBefore(lastClone, realCards[0]);
    track.appendChild(firstClone);
    const allCards = $$('.why-card', track);

    dotsWrap.innerHTML = '';
    realCards.forEach((_,i)=>{
      const d = document.createElement('button');
      d.type='button';
      d.setAttribute('aria-label','Slide '+(i+1));
      d.addEventListener('click', ()=> scrollToRealIndex(i, true));
      dotsWrap.appendChild(d);
    });
    const dots = [...dotsWrap.children];

    function realToTrack(idx){ return idx+1; }
    function scrollToTrackIndex(idx, smooth=true){
      const c = allCards[idx]; if(!c) return;
      const target = c.offsetLeft + c.offsetWidth/2 - track.clientWidth/2;
      track.scrollTo({left: target, behavior: smooth ? 'smooth' : 'auto'});
    }
    function scrollToRealIndex(idx, smooth=true){ scrollToTrackIndex(realToTrack(idx), smooth); }
    function currentTrackIndex(){
      const center = track.scrollLeft + track.clientWidth/2;
      let best = 0, bestDist = Infinity;
      allCards.forEach((c, i)=>{
        const cc = c.offsetLeft + c.offsetWidth/2;
        const d = Math.abs(cc - center);
        if(d < bestDist){ bestDist = d; best = i; }
      });
      return best;
    }
    function trackToReal(idx){
      if(idx === 0) return N-1;
      if(idx === N+1) return 0;
      return idx-1;
    }

    let ticking = false;
    function update(){
      if(ticking) return;
      ticking = true;
      requestAnimationFrame(()=>{
        ticking = false;
        const tIdx = currentTrackIndex();
        const rIdx = trackToReal(tIdx);
        allCards.forEach((c, i)=>{
          c.classList.toggle('is-center', i === tIdx);
          c.classList.toggle('is-near',   Math.abs(i - tIdx) === 1);
        });
        dots.forEach((d, i)=> d.classList.toggle('on', i === rIdx));
      });
    }

    let settleTimer = null;
    function onScroll(){
      update();
      clearTimeout(settleTimer);
      settleTimer = setTimeout(()=>{
        const tIdx = currentTrackIndex();
        if(tIdx === 0) scrollToTrackIndex(N, false);
        else if(tIdx === N+1) scrollToTrackIndex(1, false);
      }, 180);
    }

    prev?.addEventListener('click', ()=> scrollToTrackIndex(currentTrackIndex()-1, true));
    next?.addEventListener('click', ()=> scrollToTrackIndex(currentTrackIndex()+1, true));
    track.addEventListener('scroll', onScroll, {passive:true});
    window.addEventListener('resize', ()=>{
      const rIdx = trackToReal(currentTrackIndex());
      scrollToRealIndex(rIdx, false);
      update();
    });

    let isDown=false, startX=0, startScroll=0, moved=0;
    track.addEventListener('mousedown', e=>{
      isDown=true; moved=0;
      startX = e.pageX - track.offsetLeft;
      startScroll = track.scrollLeft;
      track.style.scrollBehavior='auto';
    });
    window.addEventListener('mouseup', ()=>{
      if(!isDown) return;
      isDown=false;
      track.style.scrollBehavior='';
      if(moved > 4) scrollToTrackIndex(currentTrackIndex(), true);
    });
    track.addEventListener('mousemove', e=>{
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const dx = x - startX;
      moved = Math.max(moved, Math.abs(dx));
      track.scrollLeft = startScroll - dx;
    });

    requestAnimationFrame(()=>{
      scrollToRealIndex(Math.floor(N/2), false);
      setTimeout(update, 80);
      setTimeout(update, 400);
    });

    let autoTimer = null, paused = false;
    function startAuto(){
      stopAuto();
      autoTimer = setInterval(()=>{
        if(paused) return;
        const r = track.getBoundingClientRect();
        if(r.bottom < 0 || r.top > window.innerHeight) return;
        scrollToTrackIndex(currentTrackIndex()+1, true);
      }, 4500);
    }
    function stopAuto(){ if(autoTimer){ clearInterval(autoTimer); autoTimer=null; } }
    track.addEventListener('mouseenter', ()=> paused = true);
    track.addEventListener('mouseleave', ()=> paused = false);
    track.addEventListener('touchstart', ()=> paused = true, {passive:true});
    document.addEventListener('visibilitychange', ()=> paused = document.hidden);
    startAuto();
  })();

  /* ============================================================
     Hero parallax (only when hero-visual exists)
     ============================================================ */
  const heroVisual = $('.hero-visual');
  const heroPhone  = $('.hero-phone');
  if(heroVisual && heroPhone){
    heroVisual.addEventListener('mousemove', e=>{
      const r = heroVisual.getBoundingClientRect();
      const cx = (e.clientX - r.left)/r.width - 0.5;
      const cy = (e.clientY - r.top)/r.height - 0.5;
      heroPhone.style.transition = 'transform .25s ease-out';
      heroPhone.style.transform = `translate(calc(-50% + ${cx*14}px), calc(-50% + ${cy*14}px)) rotateX(${-cy*6}deg) rotateY(${cx*6}deg)`;
    });
    heroVisual.addEventListener('mouseleave', ()=>{
      heroPhone.style.transition = 'transform .6s cubic-bezier(.2,.7,.2,1)';
      heroPhone.style.transform = '';
    });
  }

  /* ============================================================
     Contact form
     ============================================================ */
  const form = $('#contactForm');
  if(form){
    form.addEventListener('submit', e=>{
      e.preventDefault();
      // visual validation
      let ok = true;
      ['name','email'].forEach(n=>{
        const f = form.querySelector(`[name="${n}"]`);
        if(!f) return;
        if(!f.value.trim()){
          f.style.borderColor = '#DC2626';
          ok = false;
        } else {
          f.style.borderColor = '';
        }
      });
      if(!ok) return;
      const success = $('#formSuccess');
      success.hidden = false;
      form.querySelectorAll('input,textarea,select').forEach(f=>f.value='');
      setTimeout(()=>{ success.hidden = true; }, 6000);
    });
  }

  /* ============================================================
     Init
     ============================================================ */
  applyLang(currentLang);
  onScrollSpy();
  runReveals();
  scrollToInitialAnchor();

  /* ============================================================
     ✨ Interactivity layer — wow effects
     ============================================================ */

  // 1) Scroll progress bar
  const progress = $('#scrollProgress');
  if(progress){
    let pTick = false;
    window.addEventListener('scroll', ()=>{
      if(pTick) return;
      pTick = true;
      requestAnimationFrame(()=>{
        pTick = false;
        const h = document.documentElement.scrollHeight - window.innerHeight;
        const p = h > 0 ? (window.scrollY / h) * 100 : 0;
        progress.style.width = p + '%';
      });
    }, {passive:true});
  }

  // 2) Cursor glow (hero only, hover-capable only)
  const glow = $('#cursorGlow');
  const hero = $('.hero');
  if(glow && hero && matchMedia('(hover:hover)').matches){
    let gx = 0, gy = 0, tx = 0, ty = 0, raf = null, inside = false;
    function loop(){
      gx += (tx - gx) * 0.18;
      gy += (ty - gy) * 0.18;
      glow.style.left = gx + 'px';
      glow.style.top  = gy + 'px';
      if(inside || Math.abs(gx-tx)+Math.abs(gy-ty) > 1) raf = requestAnimationFrame(loop);
      else raf = null;
    }
    hero.addEventListener('mousemove', e=>{
      tx = e.clientX; ty = e.clientY;
      inside = true;
      glow.classList.add('on');
      if(!raf) raf = requestAnimationFrame(loop);
    });
    hero.addEventListener('mouseleave', ()=>{
      inside = false;
      glow.classList.remove('on');
    });
  }

  // 3) Word rotator in hero (display swap — animation handles entrance)
  (function wordRotator(){
    const track = $('#wordRotator');
    if(!track) return;
    const words = $$('.word', track);
    if(words.length < 2) return;
    let i = 0;
    setInterval(()=>{
      words[i].classList.remove('active');
      i = (i + 1) % words.length;
      words[i].classList.add('active');
    }, 2400);
  })();

  // 4) Testimonial marquee — build cards
  (function marquee(){
    const wrap = $('#testiMarquee .marquee-track');
    if(!wrap) return;
    const testis = [
      { q:'Setup-nya cepat, dalam seminggu kami sudah terima order via QR. Pelanggan happy, kasir nggak ribet lagi.', n:'Pak Bambang', biz:'Owner · Warung Aroma, Bandung', init:'B' },
      { q:'Real-time dashboard ngebantu banget buat tahu menu mana yang laris. Game changer untuk planning stock.', n:'Sari Wibowo', biz:'Manager · Roti Sentral, Jakarta', init:'S' },
      { q:'Akhirnya ada software F&B yang ngerti UMKM. Bahasa Indonesia full, harga masuk akal, support cepat.', n:'Daniel Kurnia', biz:'Co-owner · Sambal Nusantara', init:'D' },
      { q:'Tim TymiY treat us like partners, bukan customer. Mereka pickup WhatsApp jam 9 malam pas dinner rush.', n:'Andini Pratiwi', biz:'Operations · Dapur Kilat', init:'A' },
      { q:'Dari notepad ke digital dalam 4 hari. Awalnya skeptis, sekarang nggak bisa balik lagi ke cara lama.', n:'Pak Joko', biz:'Owner · Bakso Pak Joko, Yogya', init:'J' },
      { q:'Loyalty program-nya bikin pelanggan repeat. +18% repeat visit dalam 2 bulan, beneran.', n:'Maya Tanudjaja', biz:'Founder · Kopi Loyal', init:'M' },
      { q:'Pelanggan saya kebanyakan ibu-ibu, takut bingung pakai QR. Ternyata gampang banget. Bahkan nenek-nenek bisa.', n:'Rina Susanto', biz:'Owner · Warung Bu Rina', init:'R' },
      { q:'Multi-outlet ops-nya life saver. Bisa monitor 5 cabang dari HP sambil minum kopi pagi.', n:'Hendra Wijaya', biz:'Director · Kedai Kita Group', init:'H' },
    ];
    const make = (t) => `
      <div class="testi-card">
        <div class="stars">★★★★★</div>
        <div class="quote">${t.q.replace(/"/g,'&quot;')}</div>
        <div class="who">
          <div class="avatar">${t.init}</div>
          <div class="meta">
            <div class="nm">${t.n}</div>
            <div class="biz">${t.biz}</div>
          </div>
        </div>
      </div>
    `;
    // build double for seamless loop
    wrap.innerHTML = testis.map(make).join('') + testis.map(make).join('');
  })();

  // 5) Magnetic buttons
  (function magnetic(){
    if(!matchMedia('(hover:hover)').matches) return;
    const buttons = $$('.btn-blue, .btn-primary');
    buttons.forEach(btn=>{
      let raf = null, tx=0, ty=0, cx=0, cy=0;
      function loop(){
        cx += (tx - cx) * 0.25;
        cy += (ty - cy) * 0.25;
        btn.style.transform = `translate(${cx}px, ${cy}px)`;
        if(Math.abs(tx-cx)+Math.abs(ty-cy) > 0.2) raf = requestAnimationFrame(loop);
        else raf = null;
      }
      btn.addEventListener('mousemove', e=>{
        const r = btn.getBoundingClientRect();
        const mx = e.clientX - (r.left + r.width/2);
        const my = e.clientY - (r.top + r.height/2);
        tx = mx * 0.25; ty = my * 0.35;
        if(!raf) raf = requestAnimationFrame(loop);
      });
      btn.addEventListener('mouseleave', ()=>{
        tx = 0; ty = 0;
        if(!raf) raf = requestAnimationFrame(loop);
      });
    });
  })();

  // 6) Why-card 3D tilt (subtle, only when hovered)
  (function tiltWhyCards(){
    if(!matchMedia('(hover:hover)').matches) return;
    $$('.why-card').forEach(card=>{
      let raf = null;
      card.addEventListener('mousemove', e=>{
        if(!card.classList.contains('is-center')){
          card.style.transform = '';
          return;
        }
        const r = card.getBoundingClientRect();
        const cx = (e.clientX - r.left)/r.width - 0.5;
        const cy = (e.clientY - r.top)/r.height - 0.5;
        if(raf) return;
        raf = requestAnimationFrame(()=>{
          raf = null;
          card.style.transform = `scale(1.05) perspective(800px) rotateY(${cx*8}deg) rotateX(${-cy*8}deg)`;
        });
      });
      card.addEventListener('mouseleave', ()=>{
        card.style.transform = '';
      });
    });
  })();

  // 7) Pricing tier mouse-tracked spotlight
  (function tierSpotlight(){
    $$('.tier').forEach(t=>{
      t.addEventListener('mousemove', e=>{
        const r = t.getBoundingClientRect();
        t.style.setProperty('--mx', ((e.clientX - r.left)/r.width*100)+'%');
        t.style.setProperty('--my', ((e.clientY - r.top)/r.height*100)+'%');
      });
    });
  })();

  // 8) Floating decoration bubbles between sections - DISABLED (too playful)
  // (function floatBubbles(){ })();

})();
