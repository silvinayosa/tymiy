/* ============================================================
   TymiY — illustrations.js
   Static content: i18n dictionaries, SVG icons, phone mock data.
   No DOM listeners here. Exposes window.TymiY namespace.
   ============================================================ */
(function (root) {
  'use strict';

  /* ---------- i18n ---------- */
  const i18n = {
    ID: {
      "nav.how": "Cara Kerja",
      "nav.why": "Kenapa TymiY",
      "nav.price": "Harga",
      "nav.faq": "FAQ",

      "hero.eyebrow": "Untuk Kafé & Resto Kecil",
      "hero.h1": "Solusi terjangkau,<br><span class=\"grad\">Sistem order lewat QR.</span>",
      "hero.sub": "Order dari HP pelanggan ke kasirmu.<br>Cocok untuk kafé &amp; resto di Indonesia.",
      "hero.cta1": "Coba Gratis",
      "hero.cta2": "Lihat Cara Kerjanya",
      "hero.m1": "Setup gratis",
      "hero.m2": "Batal kapan saja",
      "hero.m3": "Bahasa Indonesia",
      "hero.tag": "Preview",
      "phone.s1tag": "Tampilan Pelanggan",
      "phone.s2tag": "Tampilan Kasir",
      "phone.s3tag": "Dashboard Pemilik",

      "phone.s1t": "Menu Kafé Sederhana",
      "phone.s2t": "Pesanan Masuk — Meja 04",
      "phone.s3t": "Ringkasan Penjualan",

      "how.eyebrow": "Untuk Pelanggan",
      "how.h2": "Cara Pelanggan Order",
      "how.sub": "Pelanggan duduk, scan QR di meja, pilih menu, bayar. Selesai.",
      "how.t1": "Pelanggan duduk", "how.d1": "Di meja mana saja, kapan saja.",
      "how.t2": "Scan QR di meja", "how.d2": "QR sudah tertempel — pakai HP sendiri.",
      "how.t3": "Pilih menu & pesan", "how.d3": "Langsung dari HP, tanpa antri kasir.",
      "how.t4": "Bayar", "how.d4": "QRIS, e-wallet, atau cash di kasir.",
      "how.videoBtn": "Lihat Video Demo (<30 detik)",
      "how.videoWarn": "Demo placeholder",
      "how.videoCopy": "Video demo singkat akan tampil di sini.<br>Mute & caption Bahasa Indonesia — opt-in, tidak autoplay.",

      "why.eyebrow": "Keunggulan",
      "why.h2": "Kenapa Pakai TymiY?",
      "why.sub": "Dibuat khusus untuk UMKM Indonesia.",
      "why.t1": "Harga Terjangkau",
      "why.d1": "Salah satu yang termurah di kelasnya. Tidak ada biaya tersembunyi, tidak ada kontrak panjang.",
      "why.t1p": "Mulai Rp 200/transaksi",
      "why.t1cta": "Cek Harga Sekarang →",
      "why.t2": "Super Gampang", "why.d2": "Setup sederhana, tidak ribet.", "why.t2cta": "Cara Mulai →",
      "why.t3": "Kami Pasang & Dampingi", "why.d3": "Tim TymiY datang, setup, bantu sampai resto Anda lancar. Tidak perlu pusing soal teknis.",
      "why.t4": "Bahasa Indonesia, untuk UMKM", "why.d4": "Bukan POS rumit untuk chain restaurant. Dibuat khusus warung kecil Indonesia.",
      "why.t5": "Order Lebih Cepat, Tanpa Salah Catat",
      "why.d5": "Pesanan langsung masuk ke layar kasir / dapur — meja berputar lebih cepat.",
      "why.chk1": "Langsung ke dapur",
      "why.chk2": "Tanpa salah catat",
      "why.chk3": "Tanpa tambah staff saat ramai",

      "owner.eyebrow": "Untuk Pemilik",
      "owner.h2": "Cara Anda Mulai Pakai TymiY",
      "owner.sub": "Tiga langkah pendek. Bukan urutan berbasis waktu — cukup checklist.",
      "owner.t1": "Set Up", "owner.t1free": "GRATIS", "owner.d1": "Kami yang pasang. Anda tinggal terima.",
      "owner.t2": "Print & tempel QR di tiap meja", "owner.d2": "QR sudah dicetak rapi. Tinggal tempel.",
      "owner.t3": "Langsung jalan", "owner.d3": "Pelanggan tinggal scan & pesan. Selesai.",
      "owner.ph": "[[TODO: foto owner/suasana restoran — ganti sebelum launch]]",

      "price.eyebrow": "Harga",
      "price.h2": "Setup gratis. Batal kapan saja.",
      "price.sub": "Pilih sesuai pemakaian. Geser slider di bawah untuk lihat plan mana yang lebih hemat.",
      "price.p1n": "Pay-as-you-go", "price.p1sub": "Cocok untuk yang baru mulai.",
      "price.p1f1": "Setup gratis (sekali)", "price.p1f2": "Bayar sesuai pemakaian", "price.p1f3": "Tanpa biaya bulanan",
      "price.p1fine": "Jika berhenti lalu gabung lagi, biaya pemasangan ulang Rp 100.000.",
      "price.p1cta": "Coba Gratis",
      "price.rec": "Direkomendasikan",
      "price.p2n": "Unlimited", "price.p2sub": "Cocok untuk yang sudah ramai.",
      "price.p2f1": "Setup gratis selamanya", "price.p2f2": "Transaksi tanpa batas", "price.p2f3": "Berhenti & gabung lagi kapan saja",
      "price.p2fine": "Setup tetap gratis meski berhenti & gabung lagi.",
      "price.p2cta": "Coba Gratis",

      "calc.title": "Plan mana yang lebih hemat untuk Anda?",
      "calc.sub": "Geser slider sesuai perkiraan jumlah order per bulan.",
      "calc.label": "Order per bulan",
      "calc.winner_payg": "Pay-as-you-go lebih hemat.",
      "calc.winner_unli": "Unlimited lebih hemat.",
      "calc.winner_eq": "Hampir sama — pilih sesuai kebiasaan.",
      "calc.savings": "Hemat {{n}} / bulan",

      "faq.eyebrow": "FAQ",
      "faq.h2": "Pertanyaan yang Sering Ditanya",
      "faq.q1": "Butuh wifi untuk kasir?",
      "faq.a1": "Tidak wajib — sistem jalan di browser, cukup HP/tablet + data seluler. Wifi disarankan agar lebih stabil saat ramai.",
      "faq.q2": "Kalau pelanggan tak bawa HP / tak ada wifi?",
      "faq.a2": "Tetap bisa pesan ke pelayan — TymiY pelengkap, bukan pengganti.",
      "faq.q3": "Bisa cetak struk?",
      "faq.a3": "Saat ini ringkasan tampil di layar kasir. Fitur cetak struk sedang dikembangkan.",
      "faq.q4": "Apa benefit untuk resto saya?",
      "faq.a4": "Order langsung masuk layar kasir/dapur, menu bisa diupdate tanpa cetak ulang, ringkasan penjualan harian otomatis, meja berputar lebih cepat — tanpa tambah staff saat ramai.",

      "fnd.eyebrow": "Tim Kami",
      "fnd.h2": "Dibangun oleh praktisi di Indonesia",
      "fnd.sub": "TymiY didirikan oleh dua praktisi computer science yang percaya UMKM Indonesia layak dapat tools digital yang sederhana & terjangkau.",
      "fnd.n1": "[[TODO: nama founder 1]]", "fnd.r1": "Co-founder · Engineering", "fnd.b1": "[[TODO: bio singkat founder 1 — 1-2 kalimat, ganti sebelum launch]]",
      "fnd.n2": "[[TODO: nama founder 2]]", "fnd.r2": "Co-founder · Product", "fnd.b2": "[[TODO: bio singkat founder 2 — 1-2 kalimat, ganti sebelum launch]]",

      "final.eyebrow": "Mulai Gratis",
      "final.h2": "Siap mencoba TymiY?",
      "final.sub": "Chat WhatsApp kami sekarang — kami bantu setup dari awal sampai jalan.",
      "final.cta": "Chat WhatsApp Sekarang",
      "final.trust1": "Setup gratis",
      "final.trust2": "Tanpa kontrak",
      "final.trust3": "Batal kapan saja",

      "footer.tag": "Sistem QR Order untuk kafé & resto kecil di Indonesia.",
      "footer.copy": "© 2026 TymiY. All rights reserved.",
      "footer.made": "Made in Indonesia 🇮🇩"
    },

    EN: {
      "nav.how": "How it works", "nav.why": "Why TymiY", "nav.price": "Pricing", "nav.faq": "FAQ",

      "hero.eyebrow": "For small cafés & restaurants",
      "hero.h1": "An affordable solution,<br><span class=\"grad\">QR ordering from the table.</span>",
      "hero.sub": "Orders go straight to your cashier.<br>For small cafés &amp; restaurants in Indonesia.",
      "hero.cta1": "Try Free",
      "hero.cta2": "See How It Works",
      "hero.m1": "Free setup", "hero.m2": "Cancel anytime", "hero.m3": "Indonesian-native",
      "hero.tag": "Preview",
      "phone.s1tag": "Customer View",
      "phone.s2tag": "Cashier View",
      "phone.s3tag": "Owner Dashboard",

      "phone.s1t": "Simple Café Menu",
      "phone.s2t": "New Order — Table 04",
      "phone.s3t": "Daily Sales Summary",

      "how.eyebrow": "For Customers",
      "how.h2": "How Customers Order",
      "how.sub": "Sit, scan the QR on the table, pick menu items, pay. That's it.",
      "how.t1": "Customer sits down", "how.d1": "Any table, any time.",
      "how.t2": "Scan QR on the table", "how.d2": "QR already in place — they use their own phone.",
      "how.t3": "Pick menu & order", "how.d3": "Straight from phone, no cashier queue.",
      "how.t4": "Pay", "how.d4": "QRIS, e-wallet, or cash at the counter.",
      "how.videoBtn": "Watch Demo Video (<30 sec)",
      "how.videoWarn": "Demo placeholder",
      "how.videoCopy": "Short demo video appears here.<br>Muted & Indonesian captions — opt-in, no autoplay.",

      "why.eyebrow": "Advantages",
      "why.h2": "Why TymiY?",
      "why.sub": "Built for Indonesian small businesses.",
      "why.t1": "Affordable Pricing",
      "why.d1": "Among the most affordable in its class. No hidden fees, no long contracts.",
      "why.t1p": "From Rp 200/transaction",
      "why.t1cta": "See Pricing →",
      "why.t2": "Dead Simple", "why.d2": "Setup without the hassle.", "why.t2cta": "How to start →",
      "why.t3": "We Install & Support", "why.d3": "Our team comes, sets things up, and helps until your restaurant runs smoothly. No tech worries.",
      "why.t4": "Indonesian-first, for UMKM", "why.d4": "Not a complex POS for restaurant chains. Built for small Indonesian warungs.",
      "why.t5": "Faster Orders, No Mistakes",
      "why.d5": "Orders land straight on the cashier / kitchen screen — tables turn faster.",
      "why.chk1": "Straight to the kitchen",
      "why.chk2": "No missed orders",
      "why.chk3": "No extra staff at rush hour",

      "owner.eyebrow": "For Owners",
      "owner.h2": "How You Start Using TymiY",
      "owner.sub": "Three short steps. Not a timeline — just a checklist.",
      "owner.t1": "Set Up", "owner.t1free": "FREE", "owner.d1": "We install it. You just receive.",
      "owner.t2": "Print & stick QR on each table", "owner.d2": "QR already printed neatly. Just stick it.",
      "owner.t3": "Go live", "owner.d3": "Customers just scan & order. Done.",
      "owner.ph": "[[TODO: owner/restaurant photo — replace before launch]]",

      "price.eyebrow": "Pricing",
      "price.h2": "Free setup. Cancel anytime.",
      "price.sub": "Pick based on usage. Drag the slider below to see which plan saves you more.",
      "price.p1n": "Pay-as-you-go", "price.p1sub": "For those just starting.",
      "price.p1f1": "Free setup (once)", "price.p1f2": "Pay per use", "price.p1f3": "No monthly fee",
      "price.p1fine": "If you stop and rejoin, re-installation fee is Rp 100.000.",
      "price.p1cta": "Try Free",
      "price.rec": "Recommended",
      "price.p2n": "Unlimited", "price.p2sub": "For busy spots.",
      "price.p2f1": "Free setup, forever", "price.p2f2": "Unlimited transactions", "price.p2f3": "Stop & rejoin anytime",
      "price.p2fine": "Setup stays free even if you stop & rejoin.",
      "price.p2cta": "Try Free",

      "calc.title": "Which plan saves you more?",
      "calc.sub": "Drag the slider to your estimated monthly orders.",
      "calc.label": "Orders per month",
      "calc.winner_payg": "Pay-as-you-go is cheaper.",
      "calc.winner_unli": "Unlimited is cheaper.",
      "calc.winner_eq": "Roughly equal — pick by habit.",
      "calc.savings": "Save {{n}} / month",

      "faq.eyebrow": "FAQ",
      "faq.h2": "Frequently Asked Questions",
      "faq.q1": "Do I need wifi at the cashier?",
      "faq.a1": "Not required — the system runs in any browser. Phone/tablet + mobile data is enough. Wifi is recommended for stability at rush hour.",
      "faq.q2": "What if a customer has no phone or no wifi?",
      "faq.a2": "They can still order from a server — TymiY is a complement, not a replacement.",
      "faq.q3": "Can it print receipts?",
      "faq.a3": "Currently the summary shows on the cashier screen. Receipt printing is in development.",
      "faq.q4": "What's the benefit for my restaurant?",
      "faq.a4": "Orders go straight to the cashier/kitchen screen, menus update without reprinting, daily sales summary is automatic, tables turn faster — no extra staff at rush hour.",

      "fnd.eyebrow": "Our Team",
      "fnd.h2": "Built by practitioners in Indonesia",
      "fnd.sub": "TymiY was founded by two computer-science practitioners who believe Indonesian small businesses deserve digital tools that are simple & affordable.",
      "fnd.n1": "[[TODO: founder 1 name]]", "fnd.r1": "Co-founder · Engineering", "fnd.b1": "[[TODO: founder 1 short bio — 1-2 sentences, replace before launch]]",
      "fnd.n2": "[[TODO: founder 2 name]]", "fnd.r2": "Co-founder · Product", "fnd.b2": "[[TODO: founder 2 short bio — 1-2 sentences, replace before launch]]",

      "final.eyebrow": "Start Free",
      "final.h2": "Ready to try TymiY?",
      "final.sub": "Chat us on WhatsApp now — we'll help you from setup to go-live.",
      "final.cta": "Chat WhatsApp Now",
      "final.trust1": "Free setup",
      "final.trust2": "No contract",
      "final.trust3": "Cancel anytime",

      "footer.tag": "QR Ordering for small cafés & restaurants in Indonesia.",
      "footer.copy": "© 2026 TymiY. All rights reserved.",
      "footer.made": "Made in Indonesia 🇮🇩"
    }
  };

  /* ---------- SVG icons (inline render strings) ---------- */
  const icons = {
    // Used in nav, footer, CTA
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5s-.6-1.4-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3.9 2.5 1.1 2.7.1.2 1.9 2.8 4.5 3.9 1.6.7 2.2.7 3 .6.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5c1.5.9 3.3 1.4 5.2 1.4 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.7 0-3.3-.5-4.6-1.3l-.3-.2-3.4 1.1 1.1-3.3-.2-.3C3.5 15.1 3 13.6 3 12c0-5 4-9 9-9s9 4 9 9-4 9.2-9 9.2z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    // Bento tile icons
    coin: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
    fast: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>',
    check: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>',
    tools: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"/><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"/></svg>',
    globe: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/></svg>'
  };

  /* ---------- Hero phone illustrations ----------
     SVG UI mockups — swap for real screenshots when ready. */
  const phoneSlides = [
    {
      theme: 's1',
      tagKey: 'phone.s1tag',
      svg: `<svg viewBox="0 0 252 532" xmlns="http://www.w3.org/2000/svg">
<rect width="252" height="532" fill="#F8FAFC"/>
<rect width="252" height="88" fill="#2563EB"/>
<text x="126" y="50" font-size="10" fill="rgba(255,255,255,.6)" font-family="system-ui,sans-serif" text-anchor="middle" letter-spacing="1">TYMIY ORDER</text>
<text x="126" y="72" font-size="20" fill="white" font-family="system-ui,sans-serif" font-weight="700" text-anchor="middle">Meja 04</text>
<rect x="14" y="100" width="224" height="32" rx="16" fill="rgba(37,99,235,.1)"/>
<rect x="16" y="102" width="78" height="28" rx="14" fill="#2563EB"/>
<text x="55" y="121" font-size="11" fill="white" font-family="system-ui,sans-serif" font-weight="600" text-anchor="middle">Minuman</text>
<text x="140" y="121" font-size="11" fill="#5B6478" font-family="system-ui,sans-serif" text-anchor="middle">Makanan</text>
<text x="212" y="121" font-size="11" fill="#5B6478" font-family="system-ui,sans-serif" text-anchor="middle">Snack</text>
<rect x="14" y="146" width="224" height="64" rx="12" fill="white"/>
<rect x="14" y="146" width="4" height="64" rx="2" fill="#2563EB"/>
<circle cx="44" cy="178" r="16" fill="#EEF3FF"/>
<rect x="37" y="172" width="14" height="10" rx="3" fill="#2563EB"/>
<rect x="34" y="182" width="20" height="3" rx="1.5" fill="#93C5FD"/>
<text x="70" y="170" font-size="12" fill="#0F172A" font-family="system-ui,sans-serif" font-weight="600">Kopi Susu</text>
<text x="70" y="184" font-size="10" fill="#5B6478" font-family="system-ui,sans-serif">Arabica · 200ml</text>
<text x="70" y="200" font-size="11" fill="#2563EB" font-family="system-ui,sans-serif" font-weight="700">Rp 25.000</text>
<rect x="202" y="163" width="26" height="26" rx="8" fill="#2563EB"/>
<rect x="213.5" y="169" width="3" height="14" rx="1.5" fill="white"/>
<rect x="207" y="175.5" width="16" height="3" rx="1.5" fill="white"/>
<rect x="14" y="220" width="224" height="64" rx="12" fill="white"/>
<rect x="14" y="220" width="4" height="64" rx="2" fill="#10B981"/>
<circle cx="44" cy="252" r="16" fill="#D1FAE5"/>
<rect x="37" y="246" width="14" height="10" rx="3" fill="#10B981"/>
<rect x="34" y="256" width="20" height="3" rx="1.5" fill="#6EE7B7"/>
<text x="70" y="244" font-size="12" fill="#0F172A" font-family="system-ui,sans-serif" font-weight="600">Matcha Latte</text>
<text x="70" y="258" font-size="10" fill="#5B6478" font-family="system-ui,sans-serif">Premium · 350ml</text>
<text x="70" y="274" font-size="11" fill="#2563EB" font-family="system-ui,sans-serif" font-weight="700">Rp 32.000</text>
<rect x="202" y="237" width="26" height="26" rx="8" fill="#EEF3FF"/>
<rect x="213.5" y="243" width="3" height="14" rx="1.5" fill="#2563EB"/>
<rect x="207" y="249.5" width="16" height="3" rx="1.5" fill="#2563EB"/>
<rect x="14" y="294" width="224" height="64" rx="12" fill="white"/>
<rect x="14" y="294" width="4" height="64" rx="2" fill="#F59E0B"/>
<circle cx="44" cy="326" r="16" fill="#FEF3C7"/>
<rect x="37" y="320" width="14" height="10" rx="3" fill="#D97706"/>
<rect x="34" y="330" width="20" height="3" rx="1.5" fill="#FCD34D"/>
<text x="70" y="318" font-size="12" fill="#0F172A" font-family="system-ui,sans-serif" font-weight="600">Nasi Goreng</text>
<text x="70" y="332" font-size="10" fill="#5B6478" font-family="system-ui,sans-serif">Spesial telur</text>
<text x="70" y="348" font-size="11" fill="#2563EB" font-family="system-ui,sans-serif" font-weight="700">Rp 25.000</text>
<rect x="202" y="311" width="26" height="26" rx="8" fill="#EEF3FF"/>
<rect x="213.5" y="317" width="3" height="14" rx="1.5" fill="#2563EB"/>
<rect x="207" y="323.5" width="16" height="3" rx="1.5" fill="#2563EB"/>
<rect x="0" y="440" width="252" height="92" fill="white"/>
<rect x="0" y="440" width="252" height="1" fill="#E2E6EE"/>
<text x="18" y="460" font-size="10" fill="#5B6478" font-family="system-ui,sans-serif">1 item dipilih</text>
<text x="18" y="481" font-size="17" fill="#0B1120" font-family="system-ui,sans-serif" font-weight="700">Rp 25.000</text>
<rect x="14" y="490" width="224" height="34" rx="17" fill="#2563EB"/>
<text x="126" y="512" font-size="13" fill="white" font-family="system-ui,sans-serif" font-weight="600" text-anchor="middle">Kirim Pesanan</text>
</svg>`
    },
    {
      theme: 's2',
      tagKey: 'phone.s2tag',
      svg: `<svg viewBox="0 0 252 532" xmlns="http://www.w3.org/2000/svg">
<rect width="252" height="532" fill="white"/>
<rect width="252" height="100" fill="#059669"/>
<circle cx="126" cy="42" r="18" fill="rgba(255,255,255,.15)"/>
<rect x="120" y="34" width="12" height="16" rx="4" fill="white"/>
<rect x="118" y="47" width="16" height="5" rx="2.5" fill="white"/>
<rect x="123" y="52" width="6" height="3" rx="1.5" fill="white"/>
<text x="126" y="78" font-size="17" fill="white" font-family="system-ui,sans-serif" font-weight="700" text-anchor="middle">Pesanan Baru!</text>
<text x="126" y="93" font-size="10" fill="rgba(255,255,255,.7)" font-family="system-ui,sans-serif" text-anchor="middle">Baru saja masuk</text>
<rect x="94" y="112" width="64" height="26" rx="13" fill="#DCFCE7"/>
<text x="126" y="129" font-size="11" fill="#065F46" font-family="system-ui,sans-serif" font-weight="600" text-anchor="middle">Meja 04</text>
<text x="18" y="158" font-size="9" fill="#5B6478" font-family="system-ui,sans-serif" letter-spacing=".08em">DETAIL PESANAN</text>
<rect x="14" y="166" width="224" height="50" rx="10" fill="#F8FAFC"/>
<circle cx="32" cy="191" r="8" fill="#10B981"/>
<text x="32" y="195" font-size="10" fill="white" font-family="system-ui,sans-serif" text-anchor="middle" font-weight="700">&#10003;</text>
<text x="50" y="187" font-size="12" fill="#0F172A" font-family="system-ui,sans-serif" font-weight="600">Es Kopi Susu</text>
<text x="50" y="202" font-size="10" fill="#5B6478" font-family="system-ui,sans-serif">1&#215; · Rp 25.000</text>
<text x="232" y="191" font-size="11" fill="#10B981" font-family="system-ui,sans-serif" font-weight="700" text-anchor="end">Rp 25.000</text>
<rect x="14" y="224" width="224" height="50" rx="10" fill="#F8FAFC"/>
<circle cx="32" cy="249" r="8" fill="#10B981"/>
<text x="32" y="253" font-size="10" fill="white" font-family="system-ui,sans-serif" text-anchor="middle" font-weight="700">&#10003;</text>
<text x="50" y="245" font-size="12" fill="#0F172A" font-family="system-ui,sans-serif" font-weight="600">Nasi Goreng</text>
<text x="50" y="260" font-size="10" fill="#5B6478" font-family="system-ui,sans-serif">1&#215; · Rp 25.000</text>
<text x="232" y="249" font-size="11" fill="#10B981" font-family="system-ui,sans-serif" font-weight="700" text-anchor="end">Rp 25.000</text>
<rect x="14" y="282" width="224" height="50" rx="10" fill="#F8FAFC"/>
<circle cx="32" cy="307" r="8" fill="#10B981"/>
<text x="32" y="311" font-size="10" fill="white" font-family="system-ui,sans-serif" text-anchor="middle" font-weight="700">&#10003;</text>
<text x="50" y="303" font-size="12" fill="#0F172A" font-family="system-ui,sans-serif" font-weight="600">Roti Bakar</text>
<text x="50" y="318" font-size="10" fill="#5B6478" font-family="system-ui,sans-serif">2&#215; · Rp 30.000</text>
<text x="232" y="307" font-size="11" fill="#10B981" font-family="system-ui,sans-serif" font-weight="700" text-anchor="end">Rp 30.000</text>
<rect x="14" y="346" width="224" height="1" fill="#E2E6EE"/>
<text x="18" y="366" font-size="11" fill="#5B6478" font-family="system-ui,sans-serif">Total Pesanan</text>
<text x="238" y="366" font-size="15" fill="#0B1120" font-family="system-ui,sans-serif" font-weight="700" text-anchor="end">Rp 80.000</text>
<rect x="70" y="378" width="112" height="26" rx="13" fill="#DCFCE7"/>
<text x="126" y="395" font-size="10" fill="#065F46" font-family="system-ui,sans-serif" font-weight="600" text-anchor="middle">Sedang Disiapkan</text>
<rect x="14" y="420" width="104" height="36" rx="10" fill="#F1F5F9"/>
<text x="66" y="442" font-size="12" fill="#5B6478" font-family="system-ui,sans-serif" font-weight="500" text-anchor="middle">Tunda</text>
<rect x="128" y="420" width="110" height="36" rx="10" fill="#059669"/>
<text x="183" y="442" font-size="12" fill="white" font-family="system-ui,sans-serif" font-weight="600" text-anchor="middle">Terima Pesanan</text>
</svg>`
    },
    {
      theme: 's3',
      tagKey: 'phone.s3tag',
      svg: `<svg viewBox="0 0 252 532" xmlns="http://www.w3.org/2000/svg">
<rect width="252" height="532" fill="#0B1120"/>
<rect x="94" y="36" width="64" height="24" rx="12" fill="rgba(103,232,249,.12)"/>
<text x="126" y="52" font-size="10" fill="#67E8F9" font-family="system-ui,sans-serif" font-weight="600" text-anchor="middle" letter-spacing=".06em">HARI INI</text>
<text x="126" y="105" font-size="26" fill="white" font-family="system-ui,sans-serif" font-weight="800" text-anchor="middle">Rp 2.470.000</text>
<text x="126" y="124" font-size="11" fill="rgba(255,255,255,.45)" font-family="system-ui,sans-serif" text-anchor="middle">Total Pendapatan</text>
<rect x="88" y="136" width="76" height="22" rx="11" fill="rgba(16,185,129,.18)"/>
<text x="126" y="151" font-size="10" fill="#34D399" font-family="system-ui,sans-serif" font-weight="600" text-anchor="middle">&#8593; +12% kemarin</text>
<text x="18" y="186" font-size="9" fill="rgba(255,255,255,.35)" font-family="system-ui,sans-serif" letter-spacing=".06em">ORDER PER JAM</text>
<rect x="18" y="264" width="28" height="56" rx="5" fill="#2563EB" opacity=".55"/>
<rect x="60" y="234" width="28" height="86" rx="5" fill="#2563EB" opacity=".7"/>
<rect x="102" y="210" width="28" height="110" rx="5" fill="#4F8BFF"/>
<rect x="102" y="210" width="28" height="4" rx="2" fill="#67E8F9"/>
<rect x="144" y="244" width="28" height="76" rx="5" fill="#2563EB" opacity=".75"/>
<rect x="186" y="224" width="28" height="96" rx="5" fill="#2563EB" opacity=".85"/>
<text x="32" y="337" font-size="9" fill="rgba(255,255,255,.3)" font-family="system-ui,sans-serif" text-anchor="middle">10am</text>
<text x="74" y="337" font-size="9" fill="rgba(255,255,255,.3)" font-family="system-ui,sans-serif" text-anchor="middle">11am</text>
<text x="116" y="337" font-size="9" fill="rgba(255,255,255,.3)" font-family="system-ui,sans-serif" text-anchor="middle">12pm</text>
<text x="158" y="337" font-size="9" fill="rgba(255,255,255,.3)" font-family="system-ui,sans-serif" text-anchor="middle">1pm</text>
<text x="200" y="337" font-size="9" fill="rgba(255,255,255,.3)" font-family="system-ui,sans-serif" text-anchor="middle">2pm</text>
<rect x="14" y="352" width="68" height="72" rx="12" fill="rgba(255,255,255,.06)"/>
<text x="48" y="382" font-size="22" fill="white" font-family="system-ui,sans-serif" font-weight="700" text-anchor="middle">38</text>
<text x="48" y="398" font-size="9" fill="rgba(255,255,255,.45)" font-family="system-ui,sans-serif" text-anchor="middle">Order</text>
<rect x="92" y="352" width="68" height="72" rx="12" fill="rgba(255,255,255,.06)"/>
<text x="126" y="382" font-size="22" fill="white" font-family="system-ui,sans-serif" font-weight="700" text-anchor="middle">52</text>
<text x="126" y="398" font-size="9" fill="rgba(255,255,255,.45)" font-family="system-ui,sans-serif" text-anchor="middle">Pelanggan</text>
<rect x="170" y="352" width="68" height="72" rx="12" fill="rgba(255,255,255,.06)"/>
<text x="204" y="382" font-size="17" fill="white" font-family="system-ui,sans-serif" font-weight="700" text-anchor="middle">47rb</text>
<text x="204" y="398" font-size="9" fill="rgba(255,255,255,.45)" font-family="system-ui,sans-serif" text-anchor="middle">Rata-rata</text>
<rect x="0" y="440" width="252" height="1" fill="rgba(255,255,255,.08)"/>
<circle cx="72" cy="466" r="5" fill="#2563EB"/>
<circle cx="126" cy="466" r="4" fill="rgba(255,255,255,.18)"/>
<circle cx="180" cy="466" r="4" fill="rgba(255,255,255,.18)"/>
</svg>`
    }
  ];

  /* ---------- Pricing config (single source of truth) ----------
     Change pricing here and the calculator follows automatically. */
  const pricing = {
    paygPerTx: 200,         // Rp per transaction
    unliPerMonth: 150000,   // Rp per month
    sliderMin: 0,
    sliderMax: 2000,
    sliderStep: 10,
    sliderDefault: 500,
    // Below this absolute Rp difference, call it a tie
    tieThresholdRp: 5000
  };

  /* ---------- Pure logic helpers ---------- */

  function planComparison(n, pricing) {
    const payg = n * pricing.paygPerTx;
    const unli = pricing.unliPerMonth;
    const diff = Math.abs(payg - unli);
    let winner;
    if (diff < pricing.tieThresholdRp) winner = 'eq';
    else if (payg < unli) winner = 'payg';
    else winner = 'unli';
    const savings = winner === 'eq' ? 0 : diff;
    return { payg, unli, winner, savings };
  }

  function findMissingKeys(i18n) {
    const langs = Object.keys(i18n);
    const all = new Set(langs.flatMap(l => Object.keys(i18n[l])));
    const missing = [];
    langs.forEach(l => all.forEach(k => { if (i18n[l][k] === undefined) missing.push({ lang: l, key: k }); }));
    return missing;
  }

  /* ---------- Pure index-math helper ---------- */

  function nextIndex(i, n) { return ((i % n) + n) % n; }

  /* ---------- Expose ---------- */
  root.TymiY = {
    i18n: i18n,
    icons: icons,
    phoneSlides: phoneSlides,
    pricing: pricing,
    defaultLang: 'ID',
    planComparison: planComparison,
    findMissingKeys: findMissingKeys,
    nextIndex: nextIndex
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { i18n, pricing, planComparison, findMissingKeys, nextIndex };
  }
})(typeof window !== 'undefined' ? window : {});