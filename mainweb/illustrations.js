/* ============================================================
   TymiY — SVG Illustrations
   Custom hand-drawn F&B / UMKM themed visuals.
   ============================================================ */

const ill = {
  /* ---------- Hero: phone with QR menu, floating around ---------- */
  heroPhone: `
    <svg width="320" height="500" viewBox="0 0 320 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="phoneSkin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#0B1120"/>
          <stop offset="1" stop-color="#1B2336"/>
        </linearGradient>
        <linearGradient id="screenBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#F8FAFC"/>
          <stop offset="1" stop-color="#EEF3FF"/>
        </linearGradient>
        <linearGradient id="brandGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#2563EB"/>
          <stop offset="1" stop-color="#67E8F9"/>
        </linearGradient>
      </defs>

      <!-- Phone body -->
      <rect x="20" y="10" width="280" height="480" rx="40" fill="url(#phoneSkin)"/>
      <rect x="20" y="10" width="280" height="480" rx="40" fill="none" stroke="#000" stroke-opacity=".25"/>
      <!-- Screen -->
      <rect x="30" y="22" width="260" height="456" rx="30" fill="url(#screenBg)"/>
      <!-- Notch -->
      <rect x="130" y="28" width="60" height="14" rx="7" fill="#0B1120"/>

      <!-- Top bar / cafe brand -->
      <g transform="translate(48 64)">
        <rect width="36" height="36" rx="10" fill="url(#brandGrad)"/>
        <text x="18" y="24" text-anchor="middle" fill="#fff" font-family="Sora,sans-serif" font-size="14" font-weight="700">W</text>
        <text x="48" y="18" fill="#0B1120" font-family="Sora,sans-serif" font-size="14" font-weight="700">Warung Aroma</text>
        <text x="48" y="32" fill="#5B6478" font-family="sans-serif" font-size="10">Table 04 · Menu</text>
      </g>

      <!-- Featured item card -->
      <g transform="translate(46 116)">
        <rect width="228" height="92" rx="14" fill="#fff" stroke="#E2E6EE"/>
        <rect width="78" height="92" rx="14" fill="#FDE6C4"/>
        <!-- noodle bowl -->
        <circle cx="39" cy="46" r="28" fill="#FFFFFF"/>
        <circle cx="39" cy="46" r="22" fill="#E7B97A"/>
        <path d="M22 44 Q30 36 38 44 Q46 52 56 42" stroke="#7C4A1A" stroke-width="2" fill="none" stroke-linecap="round"/>
        <circle cx="32" cy="40" r="3" fill="#fff"/>
        <circle cx="46" cy="44" r="3" fill="#9BCB6E"/>
        <text x="92" y="22" fill="#0B1120" font-family="Sora,sans-serif" font-size="12" font-weight="700">Mie Ayam Spesial</text>
        <text x="92" y="38" fill="#5B6478" font-family="sans-serif" font-size="9">Best seller · 4.9★</text>
        <text x="92" y="62" fill="#2563EB" font-family="Sora,sans-serif" font-size="13" font-weight="700">Rp 28.000</text>
        <rect x="180" y="50" width="36" height="22" rx="11" fill="#2563EB"/>
        <text x="198" y="65" text-anchor="middle" fill="#fff" font-family="Sora,sans-serif" font-size="10" font-weight="700">+</text>
      </g>

      <!-- Category chips -->
      <g transform="translate(46 224)">
        <rect width="56" height="22" rx="11" fill="#2563EB"/>
        <text x="28" y="15" text-anchor="middle" fill="#fff" font-family="Sora,sans-serif" font-size="10" font-weight="600">All</text>
        <rect x="64" width="56" height="22" rx="11" fill="#EEF3FF"/>
        <text x="92" y="15" text-anchor="middle" fill="#2563EB" font-family="Sora,sans-serif" font-size="10" font-weight="600">Mains</text>
        <rect x="128" y="0" width="60" height="22" rx="11" fill="#EEF3FF"/>
        <text x="158" y="15" text-anchor="middle" fill="#2563EB" font-family="Sora,sans-serif" font-size="10" font-weight="600">Drinks</text>
      </g>

      <!-- Menu items list -->
      <g transform="translate(46 260)">
        <rect width="228" height="48" rx="12" fill="#fff" stroke="#E2E6EE"/>
        <circle cx="26" cy="24" r="14" fill="#67E8F9" opacity=".5"/>
        <path d="M20 24 q6 -8 12 0 q-6 8 -12 0" fill="#0B1120"/>
        <text x="50" y="20" fill="#0B1120" font-family="Sora,sans-serif" font-size="11" font-weight="700">Es Teh Manis</text>
        <text x="50" y="34" fill="#5B6478" font-family="sans-serif" font-size="9">Iced sweet tea · regional fav</text>
        <text x="210" y="28" text-anchor="end" fill="#2563EB" font-family="Sora,sans-serif" font-size="11" font-weight="700">Rp 6k</text>
      </g>
      <g transform="translate(46 314)">
        <rect width="228" height="48" rx="12" fill="#fff" stroke="#E2E6EE"/>
        <circle cx="26" cy="24" r="14" fill="#FFE0AC"/>
        <rect x="18" y="18" width="16" height="12" rx="2" fill="#C97B3B"/>
        <text x="50" y="20" fill="#0B1120" font-family="Sora,sans-serif" font-size="11" font-weight="700">Nasi Goreng Kampung</text>
        <text x="50" y="34" fill="#5B6478" font-family="sans-serif" font-size="9">Classic fried rice</text>
        <text x="210" y="28" text-anchor="end" fill="#2563EB" font-family="Sora,sans-serif" font-size="11" font-weight="700">Rp 22k</text>
      </g>

      <!-- Cart bar -->
      <g transform="translate(46 378)">
        <rect width="228" height="56" rx="16" fill="#0B1120"/>
        <circle cx="26" cy="28" r="11" fill="url(#brandGrad)"/>
        <text x="26" y="32" text-anchor="middle" fill="#fff" font-family="Sora,sans-serif" font-size="11" font-weight="700">3</text>
        <text x="46" y="24" fill="#fff" font-family="Sora,sans-serif" font-size="11" font-weight="600">View order</text>
        <text x="46" y="38" fill="#67E8F9" font-family="Sora,sans-serif" font-size="11" font-weight="700">Rp 56.000</text>
        <rect x="160" y="14" width="58" height="28" rx="14" fill="url(#brandGrad)"/>
        <text x="189" y="32" text-anchor="middle" fill="#fff" font-family="Sora,sans-serif" font-size="11" font-weight="700">Pay →</text>
      </g>

      <!-- Home indicator -->
      <rect x="125" y="464" width="70" height="4" rx="2" fill="#0B1120" opacity=".3"/>
    </svg>
  `,

  /* ---------- Hero floating chips ---------- */
  iconQR: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M21 14v3M14 17v4M17 21h4"/></svg>`,
  iconBolt: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/></svg>`,
  iconChat: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,

  /* ---------- "Why TymiY" icons ---------- */
  whyIcons: {
    local: `<svg viewBox="0 0 28 28" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 25s-9-7-9-14a9 9 0 0 1 18 0c0 7-9 14-9 14z"/><circle cx="14" cy="11" r="3"/></svg>`,
    fast: `<svg viewBox="0 0 28 28" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4l-1 9h6l-7 11 1-9H7l7-11z"/></svg>`,
    price: `<svg viewBox="0 0 28 28" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2v24M19 7H11.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H8"/></svg>`,
    support: `<svg viewBox="0 0 28 28" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a10 10 0 1 1 20 0v6a3 3 0 0 1-3 3h-2v-9h5M4 14v6a3 3 0 0 0 3 3h2v-9H4"/></svg>`,
    growth: `<svg viewBox="0 0 28 28" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l8-8 5 5 9-11M16 7h7v7"/></svg>`,
  },

  /* ---------- Step icons ---------- */
  stepIcons: {
    consult: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><circle cx="9" cy="10" r="1" fill="currentColor"/><circle cx="13" cy="10" r="1" fill="currentColor"/><circle cx="17" cy="10" r="1" fill="currentColor"/></svg>`,
    deploy: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4z"/><path d="M9 12l2 2 4-4"/></svg>`,
    maintain: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.65 1.65 0 0 0-1.8-.3 1.65 1.65 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.65 1.65 0 0 0-1.1-1.5 1.65 1.65 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.65 1.65 0 0 0 .3-1.8 1.65 1.65 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.65 1.65 0 0 0 1.5-1.1 1.65 1.65 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.65 1.65 0 0 0 1.8.3H9a1.65 1.65 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.65 1.65 0 0 0 1 1.5 1.65 1.65 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.65 1.65 0 0 0-.3 1.8V9a1.65 1.65 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.65 1.65 0 0 0-1.5 1z"/></svg>`,
  },

  /* ---------- Founder silhouettes (gradient avatar shapes) ---------- */
  founderA: `
    <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYEnd meet" width="100%" height="100%">
      <defs>
        <clipPath id="f1clip"><rect width="200" height="200"/></clipPath>
      </defs>
      <g clip-path="url(#f1clip)">
        <circle cx="100" cy="80" r="40" fill="#0B1120" opacity=".85"/>
        <path d="M30 220 q0 -60 70 -60 q70 0 70 60 z" fill="#0B1120" opacity=".85"/>
        <circle cx="86" cy="78" r="3" fill="#fff"/>
        <circle cx="114" cy="78" r="3" fill="#fff"/>
        <path d="M88 92 q12 10 24 0" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/>
        <!-- glasses -->
        <circle cx="86" cy="74" r="9" fill="none" stroke="#67E8F9" stroke-width="2"/>
        <circle cx="114" cy="74" r="9" fill="none" stroke="#67E8F9" stroke-width="2"/>
        <path d="M95 74 h10" stroke="#67E8F9" stroke-width="2"/>
      </g>
    </svg>
  `,
  founderB: `
    <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYEnd meet" width="100%" height="100%">
      <defs>
        <clipPath id="f2clip"><rect width="200" height="200"/></clipPath>
      </defs>
      <g clip-path="url(#f2clip)">
        <!-- hair -->
        <path d="M60 70 q0 -40 40 -40 q40 0 40 40 q0 10 -4 18 l-4 0 q-4 -28 -32 -28 q-28 0 -32 28 l-4 0 q-4 -8 -4 -18z" fill="#0B1120" opacity=".85"/>
        <circle cx="100" cy="86" r="36" fill="#0B1120" opacity=".85"/>
        <path d="M30 220 q0 -60 70 -60 q70 0 70 60 z" fill="#0B1120" opacity=".85"/>
        <circle cx="88" cy="84" r="3" fill="#fff"/>
        <circle cx="112" cy="84" r="3" fill="#fff"/>
        <path d="M90 98 q10 8 20 0" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/>
        <!-- earring dot -->
        <circle cx="68" cy="100" r="3" fill="#67E8F9"/>
        <circle cx="132" cy="100" r="3" fill="#67E8F9"/>
      </g>
    </svg>
  `,

  /* ---------- Project image illustrations (6 different) ---------- */
  proj: {
    coffee: `
      <svg viewBox="0 0 400 300" width="100%" height="100%">
        <defs>
          <linearGradient id="pc1" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#2563EB"/><stop offset="1" stop-color="#67E8F9"/></linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#pc1)"/>
        <!-- saucer -->
        <ellipse cx="200" cy="220" rx="120" ry="22" fill="#fff" opacity=".25"/>
        <!-- cup -->
        <path d="M120 130 h140 l-10 90 a14 14 0 0 1 -14 12 h-92 a14 14 0 0 1 -14 -12z" fill="#fff"/>
        <ellipse cx="190" cy="138" rx="70" ry="14" fill="#6B3F1B"/>
        <!-- handle -->
        <path d="M260 150 q30 0 30 28 q0 28 -30 28" fill="none" stroke="#fff" stroke-width="10"/>
        <!-- steam -->
        <path d="M170 105 q-8 -14 0 -28 q8 -14 0 -28" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" opacity=".7">
          <animate attributeName="opacity" values=".4;.9;.4" dur="3s" repeatCount="indefinite"/>
        </path>
        <path d="M200 100 q-8 -14 0 -28 q8 -14 0 -28" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" opacity=".5">
          <animate attributeName="opacity" values=".7;.2;.7" dur="3s" repeatCount="indefinite"/>
        </path>
        <path d="M230 105 q-8 -14 0 -28 q8 -14 0 -28" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" opacity=".7">
          <animate attributeName="opacity" values=".4;.9;.4" dur="3s" begin="1s" repeatCount="indefinite"/>
        </path>
      </svg>
    `,
    bakery: `
      <svg viewBox="0 0 400 300" width="100%" height="100%">
        <defs><linearGradient id="pc2" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#F59E0B"/><stop offset="1" stop-color="#FBBF24"/></linearGradient></defs>
        <rect width="400" height="300" fill="url(#pc2)"/>
        <!-- croissant -->
        <path d="M120 200 q40 -100 160 -40 q-30 100 -160 40z" fill="#fff" opacity=".15"/>
        <path d="M120 200 q40 -100 160 -40 q-30 100 -160 40z" fill="#7C2D12" opacity=".7"/>
        <path d="M140 190 q50 -70 130 -30 q-30 70 -130 30z" fill="#F59E0B"/>
        <path d="M150 180 q40 -50 110 -20" stroke="#7C2D12" stroke-width="3" fill="none" opacity=".4"/>
        <path d="M160 200 q40 -40 100 -10" stroke="#7C2D12" stroke-width="3" fill="none" opacity=".4"/>
        <!-- sparkle -->
        <circle cx="320" cy="80" r="8" fill="#fff" opacity=".7"/>
        <circle cx="100" cy="60" r="4" fill="#fff" opacity=".5"/>
      </svg>
    `,
    resto: `
      <svg viewBox="0 0 400 300" width="100%" height="100%">
        <defs><linearGradient id="pc3" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#0B1120"/><stop offset="1" stop-color="#1B2336"/></linearGradient></defs>
        <rect width="400" height="300" fill="url(#pc3)"/>
        <!-- 3 plates -->
        <g transform="translate(80 80)">
          <circle r="44" cx="44" cy="44" fill="#fff"/>
          <circle r="36" cx="44" cy="44" fill="#67E8F9" opacity=".3"/>
          <circle r="14" cx="44" cy="44" fill="#0B1120"/>
        </g>
        <g transform="translate(178 100)">
          <circle r="50" cx="50" cy="50" fill="#fff"/>
          <circle r="40" cx="50" cy="50" fill="#FBBF24" opacity=".4"/>
          <path d="M30 50 q20 -16 40 0 q-20 16 -40 0" fill="#7C2D12"/>
        </g>
        <g transform="translate(290 80)">
          <circle r="44" cx="44" cy="44" fill="#fff"/>
          <circle r="36" cx="44" cy="44" fill="#9BCB6E" opacity=".5"/>
          <circle r="20" cx="44" cy="44" fill="#fff"/>
          <circle r="6" cx="38" cy="38" fill="#7C2D12"/>
          <circle r="5" cx="50" cy="42" fill="#7C2D12"/>
        </g>
        <!-- chain logo bar -->
        <rect x="100" y="220" width="200" height="40" rx="20" fill="#67E8F9" opacity=".15"/>
        <text x="200" y="246" text-anchor="middle" fill="#67E8F9" font-family="Sora,sans-serif" font-size="14" font-weight="700">MULTI-OUTLET</text>
      </svg>
    `,
    cloud: `
      <svg viewBox="0 0 400 300" width="100%" height="100%">
        <defs><linearGradient id="pc4" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#7C3AED"/><stop offset="1" stop-color="#2563EB"/></linearGradient></defs>
        <rect width="400" height="300" fill="url(#pc4)"/>
        <!-- ops dashboard -->
        <rect x="60" y="60" width="280" height="180" rx="14" fill="#fff" opacity=".95"/>
        <rect x="76" y="76" width="68" height="40" rx="8" fill="#EEF3FF"/>
        <text x="110" y="98" text-anchor="middle" fill="#2563EB" font-family="Sora,sans-serif" font-size="14" font-weight="700">142</text>
        <text x="110" y="108" text-anchor="middle" fill="#5B6478" font-family="sans-serif" font-size="8">orders</text>
        <rect x="156" y="76" width="68" height="40" rx="8" fill="#D6F5FB"/>
        <text x="190" y="98" text-anchor="middle" fill="#0E7A93" font-family="Sora,sans-serif" font-size="14" font-weight="700">18m</text>
        <text x="190" y="108" text-anchor="middle" fill="#5B6478" font-family="sans-serif" font-size="8">avg time</text>
        <rect x="236" y="76" width="88" height="40" rx="8" fill="#0B1120"/>
        <text x="280" y="98" text-anchor="middle" fill="#67E8F9" font-family="Sora,sans-serif" font-size="14" font-weight="700">+24%</text>
        <text x="280" y="108" text-anchor="middle" fill="#A8B0C5" font-family="sans-serif" font-size="8">vs last wk</text>
        <!-- chart -->
        <polyline points="76,200 110,170 145,180 180,150 215,160 250,130 285,140 320,110" fill="none" stroke="#2563EB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <polyline points="76,210 110,200 145,205 180,180 215,190 250,170 285,175 320,160" fill="none" stroke="#67E8F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity=".7"/>
      </svg>
    `,
    street: `
      <svg viewBox="0 0 400 300" width="100%" height="100%">
        <defs><linearGradient id="pc5" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#16A34A"/><stop offset="1" stop-color="#67E8F9"/></linearGradient></defs>
        <rect width="400" height="300" fill="url(#pc5)"/>
        <!-- cart base -->
        <rect x="120" y="180" width="160" height="60" rx="6" fill="#7C2D12"/>
        <!-- canopy -->
        <path d="M100 180 L300 180 L280 130 L120 130 z" fill="#fff"/>
        <path d="M100 180 L300 180 L280 130 L120 130 z" fill="none" stroke="#0B1120" stroke-width="2"/>
        <!-- stripes -->
        <rect x="125" y="140" width="30" height="35" fill="#DC2626" opacity=".7"/>
        <rect x="185" y="140" width="30" height="35" fill="#DC2626" opacity=".7"/>
        <rect x="245" y="140" width="30" height="35" fill="#DC2626" opacity=".7"/>
        <!-- QR -->
        <rect x="170" y="195" width="60" height="60" rx="6" fill="#fff"/>
        <g fill="#0B1120">
          <rect x="178" y="203" width="14" height="14"/>
          <rect x="208" y="203" width="14" height="14"/>
          <rect x="178" y="233" width="14" height="14"/>
          <rect x="200" y="220" width="6" height="6"/>
          <rect x="210" y="225" width="6" height="6"/>
          <rect x="220" y="218" width="4" height="4"/>
        </g>
        <!-- wheels -->
        <circle cx="150" cy="245" r="14" fill="#0B1120"/>
        <circle cx="250" cy="245" r="14" fill="#0B1120"/>
      </svg>
    `,
    loyalty: `
      <svg viewBox="0 0 400 300" width="100%" height="100%">
        <defs><linearGradient id="pc6" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#DB2777"/><stop offset="1" stop-color="#F59E0B"/></linearGradient></defs>
        <rect width="400" height="300" fill="url(#pc6)"/>
        <!-- card -->
        <rect x="80" y="80" width="240" height="150" rx="16" fill="#fff" transform="rotate(-6 200 155)"/>
        <rect x="100" y="120" width="200" height="80" rx="10" fill="#0B1120" transform="rotate(-6 200 160)"/>
        <text x="200" y="160" text-anchor="middle" fill="#FBBF24" font-family="Sora,sans-serif" font-size="22" font-weight="700" transform="rotate(-6 200 160)">★ ★ ★ ★ ☆</text>
        <text x="200" y="186" text-anchor="middle" fill="#fff" font-family="Sora,sans-serif" font-size="11" font-weight="600" transform="rotate(-6 200 186)">4 of 5 stamps</text>
        <!-- floating sparkle -->
        <circle cx="340" cy="80" r="6" fill="#FBBF24"/>
        <circle cx="60" cy="240" r="4" fill="#fff" opacity=".6"/>
      </svg>
    `,
  },

  /* ---------- Feature visual (phone with QR on a table) ---------- */
  featurePhone: `
    <svg viewBox="0 0 460 440" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fph-skin" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#0B1120"/><stop offset="1" stop-color="#1B2336"/></linearGradient>
        <linearGradient id="fph-screen" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#EEF3FF"/></linearGradient>
        <linearGradient id="fph-brand" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#2563EB"/><stop offset="1" stop-color="#67E8F9"/></linearGradient>
      </defs>

      <!-- table shadow -->
      <ellipse cx="230" cy="410" rx="170" ry="14" fill="#0B1120" opacity=".15"/>

      <!-- QR card on table -->
      <g transform="translate(50 240) rotate(-8 70 70)">
        <rect width="160" height="180" rx="10" fill="#fff" stroke="#E2E6EE"/>
        <rect width="160" height="32" fill="#2563EB"/>
        <text x="80" y="22" text-anchor="middle" fill="#fff" font-family="Sora,sans-serif" font-size="12" font-weight="700">SCAN TO ORDER</text>
        <!-- qr -->
        <g transform="translate(28 48)">
          <rect width="104" height="104" rx="6" fill="#0B1120"/>
          <g fill="#fff">
            <rect x="8" y="8" width="24" height="24" rx="2"/>
            <rect x="14" y="14" width="12" height="12" fill="#0B1120"/>
            <rect x="72" y="8" width="24" height="24" rx="2"/>
            <rect x="78" y="14" width="12" height="12" fill="#0B1120"/>
            <rect x="8" y="72" width="24" height="24" rx="2"/>
            <rect x="14" y="78" width="12" height="12" fill="#0B1120"/>
            <rect x="40" y="10" width="6" height="6"/>
            <rect x="50" y="14" width="4" height="4"/>
            <rect x="60" y="10" width="6" height="6"/>
            <rect x="40" y="24" width="4" height="4"/>
            <rect x="46" y="30" width="6" height="6"/>
            <rect x="58" y="26" width="4" height="4"/>
            <rect x="10" y="40" width="4" height="4"/>
            <rect x="20" y="44" width="6" height="6"/>
            <rect x="34" y="40" width="4" height="4"/>
            <rect x="44" y="46" width="6" height="6"/>
            <rect x="58" y="42" width="4" height="4"/>
            <rect x="68" y="46" width="6" height="6"/>
            <rect x="80" y="40" width="4" height="4"/>
            <rect x="90" y="44" width="6" height="6"/>
            <rect x="10" y="60" width="6" height="6"/>
            <rect x="22" y="64" width="4" height="4"/>
            <rect x="36" y="60" width="6" height="6"/>
            <rect x="48" y="64" width="4" height="4"/>
            <rect x="60" y="60" width="6" height="6"/>
            <rect x="74" y="62" width="4" height="4"/>
            <rect x="88" y="60" width="6" height="6"/>
            <rect x="42" y="80" width="6" height="6"/>
            <rect x="54" y="82" width="4" height="4"/>
            <rect x="68" y="80" width="6" height="6"/>
            <rect x="80" y="86" width="4" height="4"/>
            <rect x="90" y="80" width="6" height="6"/>
          </g>
        </g>
        <text x="80" y="170" text-anchor="middle" fill="#0B1120" font-family="Sora,sans-serif" font-size="10" font-weight="700">TABLE 04</text>
      </g>

      <!-- Phone -->
      <g transform="translate(190 30)">
        <rect width="220" height="380" rx="34" fill="url(#fph-skin)"/>
        <rect x="8" y="8" width="204" height="364" rx="28" fill="url(#fph-screen)"/>
        <rect x="92" y="14" width="48" height="10" rx="5" fill="#0B1120"/>

        <!-- header -->
        <g transform="translate(20 40)">
          <rect width="28" height="28" rx="8" fill="url(#fph-brand)"/>
          <text x="14" y="20" text-anchor="middle" fill="#fff" font-family="Sora,sans-serif" font-size="12" font-weight="700">W</text>
          <text x="40" y="14" fill="#0B1120" font-family="Sora,sans-serif" font-size="12" font-weight="700">Warung Aroma</text>
          <text x="40" y="26" fill="#5B6478" font-family="sans-serif" font-size="9">Table 04 · 2 guests</text>
          <circle cx="170" cy="14" r="10" fill="#EEF3FF"/>
          <text x="170" y="18" text-anchor="middle" fill="#2563EB" font-family="Sora,sans-serif" font-size="10" font-weight="700">3</text>
        </g>

        <!-- search bar -->
        <rect x="20" y="80" width="180" height="28" rx="14" fill="#F4F6FB"/>
        <circle cx="34" cy="94" r="5" fill="none" stroke="#5B6478" stroke-width="1.5"/>
        <text x="48" y="98" fill="#5B6478" font-family="sans-serif" font-size="10">Search menu...</text>

        <!-- big food card -->
        <rect x="20" y="120" width="180" height="100" rx="12" fill="#FFE0AC"/>
        <circle cx="110" cy="170" r="44" fill="#fff"/>
        <circle cx="110" cy="170" r="36" fill="#FBBF24"/>
        <circle cx="110" cy="170" r="22" fill="#fff"/>
        <circle cx="104" cy="166" r="6" fill="#7C2D12"/>
        <circle cx="116" cy="170" r="5" fill="#9BCB6E"/>
        <rect x="20" y="120" width="60" height="20" rx="12" fill="#0B1120"/>
        <text x="50" y="134" text-anchor="middle" fill="#fff" font-family="Sora,sans-serif" font-size="9" font-weight="700">★ POPULAR</text>

        <!-- items -->
        <g transform="translate(20 232)">
          <rect width="180" height="42" rx="10" fill="#fff" stroke="#E2E6EE"/>
          <circle cx="22" cy="21" r="13" fill="#9BCB6E" opacity=".4"/>
          <text x="44" y="18" fill="#0B1120" font-family="Sora,sans-serif" font-size="10" font-weight="700">Gado-gado</text>
          <text x="44" y="30" fill="#5B6478" font-family="sans-serif" font-size="8">veggie salad · peanut sauce</text>
          <text x="170" y="26" text-anchor="end" fill="#2563EB" font-family="Sora,sans-serif" font-size="10" font-weight="700">Rp 18k</text>
        </g>
        <g transform="translate(20 280)">
          <rect width="180" height="42" rx="10" fill="#fff" stroke="#E2E6EE"/>
          <circle cx="22" cy="21" r="13" fill="#67E8F9" opacity=".5"/>
          <text x="44" y="18" fill="#0B1120" font-family="Sora,sans-serif" font-size="10" font-weight="700">Es Cendol</text>
          <text x="44" y="30" fill="#5B6478" font-family="sans-serif" font-size="8">coconut & palm sugar</text>
          <text x="170" y="26" text-anchor="end" fill="#2563EB" font-family="Sora,sans-serif" font-size="10" font-weight="700">Rp 12k</text>
        </g>

        <!-- pay bar -->
        <g transform="translate(20 332)">
          <rect width="180" height="36" rx="14" fill="url(#fph-brand)"/>
          <text x="14" y="22" fill="#fff" font-family="Sora,sans-serif" font-size="10" font-weight="600">3 items</text>
          <text x="166" y="22" text-anchor="end" fill="#fff" font-family="Sora,sans-serif" font-size="11" font-weight="700">Pay Rp 58k →</text>
        </g>
      </g>

      <!-- floating order ping -->
      <g>
        <rect x="350" y="80" width="100" height="48" rx="14" fill="#fff" stroke="#E2E6EE"/>
        <circle cx="370" cy="104" r="8" fill="#16A34A"/>
        <text x="370" y="108" text-anchor="middle" fill="#fff" font-family="Sora,sans-serif" font-size="11" font-weight="700">✓</text>
        <text x="386" y="100" fill="#0B1120" font-family="Sora,sans-serif" font-size="9" font-weight="700">New order</text>
        <text x="386" y="114" fill="#5B6478" font-family="sans-serif" font-size="8">Table 04 · Rp 58k</text>
      </g>
    </svg>
  `,

  /* ---------- Social icons ---------- */
  social: {
    ig: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4z"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/></svg>`,
    wa: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-1.3 4.5L21 21l-5-1.3a8.4 8.4 0 1 1 5-8.2z"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 6l10 7 10-7"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L7.9 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>`,
  },

  /* ---------- Misc UI ---------- */
  check: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  plus:  `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>`,
  arrowR: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  arrowL: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 5 5 12 12 19"/></svg>`,
  burger: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="14" y2="18"/></svg>`,
  close: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
};

window.ill = ill;
