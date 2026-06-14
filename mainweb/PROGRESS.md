# TymiY Remediation — Progress

## Segments
- [x] P1 Foundation: dev warnings + pure-logic tests
- [x] P2 Launch blockers: content, claims, video lazy-load, SVG labels
- [x] P3 Correctness bugs: B1, B6/A5, B7
- [x] P4 Slider robustness: B2, B3, B4 + index-math test
- [x] P5 Accessibility: A1, A3, A4, A6
- [x] P6 Hardening + final QA: M1, S1, P1, QA matrix
- [x] AST Asset & keyword manifest (produces ASSETS.md) — run after P2
- [x] DSGN Section design pass (parallel branch) — coordinate with P5
- [x] VISUAL Visual polish: carousel edge fade, tag restyle, section spacing

## Content TODOs (owner must fill)

| Key (ID / EN) | What's needed |
|---|---|
| `fnd.n1` (ID & EN) | Real name of Founder 1 |
| `fnd.n2` (ID & EN) | Real name of Founder 2 |
| `fnd.b1` (ID & EN) | Short bio for Founder 1 (1–2 sentences) |
| `fnd.b2` (ID & EN) | Short bio for Founder 2 (1–2 sentences) |
| `owner.ph` (ID & EN) | Owner/restaurant photo — used as label on owner-slide tag; replace [[TODO]] text AND swap in real photo asset |
| `how.videoWarn` / `how.videoCopy` | Copy is fine; **real video URL** must be inserted into the `iframe[data-src]` in index.html before launch (see `<!-- TODO: replace data-src -->` comment in `#videoFrame`) |

## Claim wording — owner must confirm

The following superlatives were softened for legal/competitive safety. Owner should review and confirm or adjust before launch:

| Location | Was | Now | Action needed |
|---|---|---|---|
| ID `hero.h1` | "Solusi termurah," | "Solusi terjangkau," | Confirm or revert |
| EN `hero.h1` | "The cheapest solution," | "An affordable solution," | Confirm or revert |
| ID `why.t1` | "Harga Termurah" | "Harga Terjangkau" | Confirm or revert |
| EN `why.t1` | "Cheapest Price" | "Affordable Pricing" | Confirm or revert |
| ID `why.d1` | "Paling terjangkau di kelasnya..." | "Salah satu yang termurah di kelasnya..." | Confirm or revert |
| EN `why.d1` | "Most affordable in its class..." | "Among the most affordable in its class..." | Confirm or revert |
| HTML `index.html` static h1 fallback | "Solusi termurah," | "Solusi terjangkau," | Matches JS; no separate action |
| HTML `index.html` bento h3 | "Harga Termurah" | "Harga Terjangkau" | Matches JS; no separate action |

## Carry-forward bugs (fix in a later prompt)
(none — no new bugs introduced in P6)

## Log
(append one entry per segment: date, what changed, files, test results, new bugs)

### VISUAL — 2026-06-14

**What changed (index.html embedded CSS only — no JS, no illustrations.js):**

**1. Hero — carousel edge fade (mask approach used)**

`.phone-carousel` gained `-webkit-mask-image` + `mask-image`:
```
linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%)
```
The front phone is always centered (50%) inside the opaque `10%–90%` zone, so it stays fully visible. Back phones (at ±185px offset) dissolve into the hero background instead of hard-clipping. On mobile the back phones are already `scale(0)/opacity:0`, so the mask has no visual effect there.

Approach used: **CSS mask-image** (not scale-down fallback). The 10/90 percentages keep the ~82% tag position (front phone right edge + 8px) comfortably inside the opaque zone on a 428px carousel (desktop ~.75fr column).

**2. Hero — `.phone-preview-tag` restyle**

| Property | Before | After |
|---|---|---|
| position | `top:14px;right:-8px` (floating right) | `top:14px;left:50%;transform:translateX(-50%)` (centered) |
| font-size | `.63rem` | `.78rem` (matches `.eyebrow`) |
| letter-spacing | `.06em` | `.08em` (matches `.eyebrow`) |
| padding | `4px 11px` | `6px 12px` (matches `.eyebrow`) |
| color | `var(--navy)` | `var(--blue)` (matches `.eyebrow`) |
| border opacity | `rgba(37,99,235,.18)` | `rgba(37,99,235,.25)` |
| box-shadow | `0 2px 8px …` | `0 4px 12px …` (slightly more depth) |
| white-space | (not set) | `nowrap` (prevents text wrap on narrow phones) |

Tag sits at the frame/screen junction of the front phone, centered horizontally. Visibility rule (`.slot-front .phone-preview-tag{opacity:1}`) unchanged.

**3. Sections — padding + boundary**

Section background inventory (before / after):

| Section | Background | Padding before | Padding after | Separator added? |
|---|---|---|---|---|
| Hero | `--grad-hero` (→ ~`#F8FAFC`) | `calc(nav+40px) 0 88px` | **unchanged** | — |
| `#how` | `--ice` `#F8FAFC` | `72px 0` | `96px 0` | `border-top:1px solid rgba(15,23,42,.06)` ← separates from hero |
| `#why` | `#fff` | `72px 0` | `96px 0` | — (differs from `#how`) |
| `#owner` | `--blue-50` `#EEF3FF` | `72px 0` | `96px 0` | — (differs from `#why`) |
| `#pricing` | `--ice` `#F8FAFC` | `72px 0` | `96px 0` | — (differs from `#owner`) |
| `#faq` | `#fff` | `72px 0` | `96px 0` | — (differs from `#pricing`) |
| `#founders` | `--ice` `#F8FAFC` | `72px 0` | `96px 0` | — (differs from `#faq`) |
| Final CTA | dark gradient | `60px 0` | **unchanged** | — |
| Footer | navy | `48px 0 24px` | **unchanged** | — |

Mobile: `.section{padding}` changed from `52px 0` to `56px 0`.

Only one true same-background adjacency existed (Hero bottom ~`#F8FAFC` → `#how` `#F8FAFC`). Fixed with hairline. All other adjacencies already had differing backgrounds.

**Test results:**
- `node --check main.js illustrations.js` → EXIT 0 ✓
- `node --test tests/logic.test.js` → **14/14 PASS** (no regression — no JS changed) ✓

**Needs manual browser check:**
- **Carousel mask:** At desktop (~1280px), verify back phones dissolve softly at carousel edges and the front phone + preview tag remain fully opaque. Check that the tag does not get masked or clipped.
- **Preview tag:** Verify the "Preview" pill is centered on the phone, reads clearly, matches the eyebrow badge style, and does not overlap the notch awkwardly.
- **Section boundaries:** Scroll the full page — verify the hero→`#how` hairline is visible but subtle, padding feels generous and consistent at both desktop (1280px) and mobile (375px). No layout overflow.

**New bugs introduced:** None.
**New bugs queued:** None.

---

### AST — 2026-06-14

**What changed:**
- Created `ASSETS.md` at repo root — full asset & keyword manifest.

**Slots found: 13 total**

| ID | Section | Status |
|---|---|---|
| PHONE-1/2/3 | Hero carousel | SVG mockups — must replace with real product screenshots |
| HOW-1/2/3/4 | #how step cards | Empty → styled icon placeholders (filled by DSGN pass) |
| VIDEO | #how video frame | No URL set; iframe commented out |
| OWNER-SLIDE-SVG | #owner carousel | SVG illustrations OK for launch; real photos optional upgrade |
| OWNER-PH-LABEL | #owner slide tags | Text badge only — [[TODO]] text visible on live page (content fix) |
| FND-1-PHOTO | #founders | Shows "F1" initials → improved by DSGN pass |
| FND-2-PHOTO | #founders | Shows "F2" initials → improved by DSGN pass |
| FAVICON | `<head>` | Completely absent from HTML |
| OG-IMAGE | `<head>` | No og:image or twitter:image meta |

**Launch-blocking slots (7):** PHONE-1, PHONE-2, PHONE-3, FND-1-PHOTO, FND-2-PHOTO, FAVICON, OG-IMAGE, VIDEO (if button stays live).

**Must be supplied by owner:** FND-1-PHOTO, FND-2-PHOTO, PHONE-1/2/3 (real product screenshots).
**Can be created/generated:** FAVICON (from logo mark), OG-IMAGE (branded graphic), HOW-1/4 (stock/AI acceptable).

**Content TODOs updated:** OWNER-PH-LABEL added to watch list (see note in ASSETS.md).

**Test results:** No code changed — no tests needed.

**New bugs introduced:** None.

---

### DSGN — 2026-06-14

**Note:** This repository has no git history (not a git repo). Branch creation skipped; changes applied directly.

**What changed:**

**index.html (embedded CSS):**
- `.founder-photo` — `background` changed from flat gray gradient (`#E2E6EE → #CBD0DA`) to `var(--grad-brand)` (electric blue → cyan); `color` changed from `var(--muted)` to `#fff`. Initials now appear on the brand gradient, matching the logo mark and primary buttons — looks intentional rather than broken.
- Added `.step-img{position:relative}` — creates positioning context for the absolute-fill placeholder.
- Added `.step-img-placeholder{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}` + per-step color rules keyed by `data-asset-id`:
  - `HOW-1` → amber `#FFF7ED` / `#D97706`
  - `HOW-2` → blue `var(--blue-50)` / `var(--blue)`
  - `HOW-3` → mint `var(--mint)` / `#059669`
  - `HOW-4` → purple `#F5F3FF` / `#7C3AED`

**index.html (HTML — #how section):**
- All four `.step-img` divs updated:
  - Added `id="how-img-N"` and `data-asset-id="HOW-N"` (N = 1–4)
  - Added `.step-img-placeholder` child div with `aria-hidden="true"` and a per-step icon SVG
  - Updated commented-out `<img>` hints to use `.webp` extension and `loading="lazy"`

**Sections NOT changed:**
- `#owner` — `.owner-slide-tag` TODO text is a content issue; tracked in Content TODOs above. No data-i18n binding changed.
- All other sections assessed as complete.

**New files created:**
- `ASSETS.md` — full asset manifest (13 slots)
- `SECTION_DESIGN.md` — before→after notes, design decisions, preview instructions

**Test results:**
- `node --check main.js illustrations.js` → EXIT 0 ✓
- `node --test tests/logic.test.js` → **14/14 PASS** (no regression) ✓

**Needs manual browser check:**
- HOW step placeholders: verify 4 colored icon squares render correctly at 360 px (mobile, stacked) and 1280 px (desktop, 4-column). Confirm `→` arrows visible in gaps between cards at desktop; `↓` arrows visible at mobile.
- Founders: verify gradient avatar circles render correctly; initials readable on both retina and 1× displays.

**New bugs introduced:** None.
**New bugs queued:** None.

### P6 — 2026-06-14

**What changed:**

**index.html:**
- M1 confirmed: `<script src="illustrations.js" defer></script>` then `<script src="main.js" defer></script>` — already in correct order at lines 1358–1359. No change required.

**main.js:**
- **S1** `renderPhoneSlides()` line 25: added `// static content only — sanitise if this ever becomes dynamic` comment after `innerHTML` assignment.
- **S1** `applyLang()` lines 73 & 75: added same comment on the `querySelectorAll('[data-i18n-html]')` forEach line AND on the `el.innerHTML` assignment inside it.
- **P1** `wireNavScroll()`: replaced bare `const onScroll = () => nav.classList.toggle(...)` with rAF-throttled version using `let ticking = false` guard. `onScroll()` initial call retained (schedules a rAF frame immediately). `{ passive: true }` on the scroll event listener retained.

**MANUAL_QA.md:** Created at repo root — full browser checklist across Calculator, Hero Carousel, Language Toggle, Mobile Drawer, Video Demo Button, Owner Steps Carousel, Reduced Motion, A11y, and General sections. Run in both ID and EN.

**Static review:**
- `node --check main.js illustrations.js` → EXIT 0 (no syntax errors) ✓
- `node --test tests/logic.test.js` → 14/14 PASS (no regression) ✓
- All null-guards intact, no behavior changes (comments only for S1, rAF wrapper for P1).
- rAF initial call: `onScroll()` fires synchronously; inside it `ticking = true` then a rAF frame runs `classList.toggle` and resets `ticking = false`. This is correct — the nav `.scrolled` state is set on the first paint frame after load.

**Full run summary (P1–P6):**
- P1: Pure-logic helpers (`planComparison`, `findMissingKeys`, `nextIndex`) extracted to illustrations.js and covered by 14 passing unit tests. Dev audit warnings added.
- P2: Launch-blocker content fixes — softened superlatives, [[TODO]] markers for founder bios/photo/video URL, `data-i18n-html` fix for `<br>` in video copy, video lazy-load wiring.
- P3: Correctness bugs — dead arg in `startSlider` (B1), single `syncLangButtons` helper replacing dual sources of truth for lang button state (B6/A5), `wireCalculator` moved before `applyLang` in `init()` (B7).
- P4: Slider robustness — `transitionend`-driven cleanup replacing magic `setTimeout` (B2/B3), `nextIndex` extracted and tested (index-math), `didDrag` flag preventing double-jump after mouse/touch drag (B4).
- P5: Accessibility — carousel `role/tabindex/aria-roledescription` + keyboard navigation (A1), live region `#carouselStatus` in index.html (A1), `aria-valuetext` on slider (A3), focus-trap in drawer (A4), `role=button/tabindex/keydown` on owner step items (A6).
- P6: Hardening — M1 (script order confirmed), S1 (innerHTML comments), P1 (rAF-throttle scroll), MANUAL_QA.md created.

**Test results:**
- `node --check main.js illustrations.js` → EXIT 0
- `node --test tests/logic.test.js` → 14/14 PASS

**New bugs introduced:** None.
**New bugs queued:** None.

### P5 — 2026-06-14

**What changed:**

**index.html:**
- Added `.sr-only` utility class to embedded stylesheet (was absent): `position:absolute;width:1px;height:1px;...` — used by the carousel live region.
- Added `<p id="carouselStatus" class="sr-only" aria-live="polite"></p>` immediately after the closing `</div>` of `#phoneCarousel`, still inside `.phone-stage` (A1 live region).
- `#calcSlider` already had `aria-label="Orders per month"` — no change required (A3 confirmed).

**main.js:**
- **A1** `wireSlider()`: After `if (!carousel) return;`, added `tabindex="0"`, `role="group"`, `aria-roledescription="carousel"`, `aria-label="Product preview screens"` on the carousel element, plus a `keydown` listener for ArrowLeft/ArrowRight that calls `setSlide` + `startSlider`.
- **A1** `setSlide()`: Added live region update at end — reads `phoneSlides[slideIdx].tagKey`, looks up localized string in `i18n[currentLang]`, writes it to `#carouselStatus`. Null-guarded via `if (status)` and `&&` chain.
- **A3** `updateCalc()`: Added `calcEls.slider.setAttribute('aria-valuetext', ...)` at end — format: `"750 Order per bulan"` (uses localized `calc.label` from current lang). `const t2 = i18n[currentLang] || i18n.ID` fallback ensures no throw if lang is missing.
- **A4** `wireDrawer()`: Added `trap(e)` function inside `wireDrawer` scope — filters non-Tab keys, finds all focusable elements in drawer, wraps Shift+Tab from first→last and Tab from last→first. `open()` now calls `document.addEventListener('keydown', trap)` after focus. `close()` calls `document.removeEventListener('keydown', trap)` before restoring focus.
- **A6** `wireOwnerCarousel()`: Replaced single-line `el.addEventListener('click', ...)` forEach with expanded block that: checks `el.tagName !== 'BUTTON'` before adding `role="button"` + `tabindex="0"` (guards against future refactor to real `<button>`); attaches both `click` and `keydown` (Enter/Space) listeners. The `ownerSlidesEl` guard and all other logic remain intact.

**Static review:**
- `#carouselStatus` exists in index.html at line 837. ✓
- `#calcSlider` exists in index.html at line 1176 with `aria-label`. ✓
- `.sr-only` exists in embedded stylesheet at line 745. ✓
- All null-guards intact: `if (status)` in setSlide, `if (!calcEls) return` in updateCalc, `if (!carousel) return` in wireSlider, `if (!ownerSlidesEl) return` in wireOwnerCarousel, `if (!burger || !drawer) return` in wireDrawer. ✓
- Esc-close listener and backdrop-click close in `wireDrawer` are unchanged. ✓
- `trap` is a named function (not anonymous arrow) — required for `removeEventListener` to match by reference. ✓

**Test results:**
- `node --check main.js` → EXIT 0 (no syntax errors)
- `node --test tests/logic.test.js` → 14/14 PASS (no regression)

**Needs manual browser/screen-reader check:**
- **Carousel ←/→ keyboard**: Tab to `#phoneCarousel`, press ArrowRight/ArrowLeft — confirm slide advances/retreats and timer resets.
- **Carousel announcement**: After slide change via keyboard or auto-advance, screen reader should announce the slide name (e.g. "Preview") via the `polite` live region.
- **Slider value readout**: Move `#calcSlider` with keyboard — VoiceOver/NVDA should read e.g. "750 Order per bulan" (or EN equivalent) rather than the raw numeric value.
- **Drawer Tab-trap**: Open mobile drawer, Tab through all items — focus should cycle (not escape to page behind); Shift+Tab from first item should jump to last.
- **Owner-steps Enter/Space**: Tab to a `.vlist .item` step card, press Enter or Space — confirm the owner-slide panel changes to the correct slide.

**New bugs introduced:** None.
**New bugs queued:** None.

### P4 — 2026-06-14

**CSS mechanism found:** `.phone` uses CSS `transition` (both `transform` and `opacity`, `.45s cubic-bezier(.25,0,.2,1)`) — confirmed at line ~212 of the embedded `<style>` in index.html. No `@keyframes` on `.phone`. Therefore `transitionend` was used (not `animationend`).

**What changed:**

**illustrations.js:**
- Added `function nextIndex(i, n) { return ((i % n) + n) % n; }` before the expose block.
- Added `nextIndex` to `root.TymiY` exposed object.
- Added `nextIndex` to `module.exports`.

**main.js:**
- **B2 + B3** `updatePhoneSlots()`: replaced `setTimeout(..., 460)` magic-delay with event-driven cleanup. New code: adds `transitionend` listener (`{ once: true }`) to remove `entering-front` when the CSS transition completes; a `setTimeout(onEnd, 600)` safety-net fires if the event never arrives. Under `prefers-reduced-motion: reduce`, `clear()` is called synchronously with no timer or listener.
- **setSlide()**: inline `((i % n) + n) % n` replaced with `window.TymiY.nextIndex(i, n)`.
- **B4** `wireSlider()`: added `let didDrag = false;` scoped to `wireSlider`. `mousedown` resets it to `false`. `mouseup` (when `|dx| > 40`) and `touchend` (when horizontal swipe `|dx| > 40`) both set `didDrag = true` BEFORE calling `setSlide`. Each `.phone[data-phone]` click handler now bails early (and resets `didDrag`) when `didDrag` is true, preventing double-jump after drag.

**tests/logic.test.js:**
- Imported `nextIndex` from `illustrations.js`.
- Added 4 new test cases: `nextIndex(3,3)===0`, `nextIndex(-1,3)===2`, `nextIndex(4,3)===1`, `nextIndex(0,3)===0`.

**Test results:**
- `node --test tests/logic.test.js` → **14/14 PASS** (10 pre-existing + 4 new nextIndex cases)
- `node --check main.js` → EXIT 0 (no syntax errors)

**Needs manual browser check:**
- Fast-swipe stuck-state: verify `entering-front` is removed after the transition when the phone slides in quickly.
- Single-jump on drag: drag left/right — confirm exactly one slide change, no extra click-jump following the drag.
- Reduced-motion suppression: with `prefers-reduced-motion: reduce` active, verify `entering-front` is removed synchronously (no linger, no z-index pop).

**New bugs introduced:** None.
**New bugs queued:** None.

### P3 — 2026-06-14

**What changed (main.js only):**

- **B1** `startSlider()`: removed dead second argument from `setInterval` callback — `setSlide(slideIdx + 1, 1)` → `setSlide(slideIdx + 1)`. `setSlide` only accepts one parameter; the stray `1` was silently ignored but was misleading.
- **B6 + A5** Added `syncLangButtons()` helper (lines 56–62): iterates all `.lang button` elements (covers both desktop nav and mobile drawer groups via a single `querySelectorAll`), toggles `.on` class and sets `aria-pressed` attribute using `currentLang` as the single source of truth. `applyLang()` now calls `syncLangButtons()` as its last step, so every language change — including the boot call — syncs button state and aria attributes automatically.
- **B6 + A5** Simplified `wireLangSwitcher()`: click handler now just calls `applyLang(b.dataset.lang)`. Removed the inline class-toggling loop that was a redundant second source of truth; all button-state updates now flow through `applyLang → syncLangButtons`.
- **B7** Reordered `init()` so `wireCalculator()` (which sets `calcEls`) runs before `applyLang(currentLang)`. `applyLang` is now the very last call in `init()`, giving one clean localization pass after all DOM refs are wired. Dev-audit block (from P1) retained at the top of `init()` unchanged.

**Static review:**
- `applyLang` is called once on boot as the last step of `init()`. ✓
- `syncLangButtons` uses `document.querySelectorAll('.lang button')` — covers both `.lang` groups (nav + drawer) in a single pass. ✓
- All null-guards intact: `if (!i18n[lang]) return` in `applyLang`, `if (!calcEls) return` in `updateCalc`, `if (!phone) return` / `if (!tag …) return` in `updateTag`, `if (!carousel) return` in `wireSlider`, etc. ✓

**Test results:**
- `node --check main.js` → EXIT 0 (no syntax errors)
- `node --test tests/logic.test.js` → 10/10 PASS (no regression)

**Needs manual browser check:**
- Correct language button (ID by default) has `.on` class and `aria-pressed="true"` on page load.
- Clicking the other language button updates the calculator display correctly on first interaction.
- `aria-pressed` toggles to `"false"` on the previously-active button and `"true"` on the newly-active button.

**New bugs introduced:** None.
**New bugs queued:** None.

### P2 — 2026-06-14

**What changed:**

**illustrations.js:**
- `hero.h1` (ID): "Solusi termurah," → "Solusi terjangkau,"
- `hero.h1` (EN): "The cheapest solution," → "An affordable solution,"
- `hero.tag` (ID): "Preview — screenshot menyusul" → "Preview"
- `hero.tag` (EN): "Preview — real screenshots coming" → "Preview"
- `why.t1` (ID): "Harga Termurah" → "Harga Terjangkau"
- `why.t1` (EN): "Cheapest Price" → "Affordable Pricing"
- `why.d1` (ID): "Paling terjangkau di kelasnya..." → "Salah satu yang termurah di kelasnya..."
- `why.d1` (EN): "Most affordable in its class..." → "Among the most affordable in its class..."
- `owner.ph` (ID & EN): placeholder text → [[TODO]] marker
- `fnd.n1`, `fnd.n2` (ID & EN): "Founder 1/2" → [[TODO: real name]] markers
- `fnd.b1`, `fnd.b2` (ID & EN): placeholder bio text → [[TODO: short bio]] markers

**index.html:**
- Static fallback h1 text updated to "Solusi terjangkau,"
- `phone-preview-tag` initial text updated to "Preview"
- Bento h3 for `why.t1` updated to "Harga Terjangkau"
- `#videoFrame` `.placeholder` corrected from `data-i18n` to `data-i18n-html` (the value contains `<br>` — was rendering as literal text)
- Added commented-out `<iframe data-src="...">` template in `#videoFrame` with `[[TODO]]` note for real video URL

**main.js:**
- `renderPhoneSlides()`: added `role="img"` to `.phone-slide` div
- `updateTag()`: added aria-label update loop at end — sets localized `aria-label` on each `.phone-slide` per current language
- `wireVideoToggle()`: replaced simple toggle with lazy-load pattern — iframe `data-src` is moved to `src` only on first click

**Video iframe finding:** The `#videoFrame` element had NO iframe with a hardcoded `src` — it contained only the badge-warn span and placeholder div. This is not a regression bug; the lazy-load wiring is in place for when the real URL is added.

**Test results:** 10/10 PASS (node --test tests/logic.test.js)
- `findMissingKeys`: ID and EN parity confirmed (0 missing keys — [[TODO]] markers are symmetric across both langs)
- `planComparison`: all 8 cases pass unchanged

**New bugs found and fixed:**
- `how.videoCopy` was bound with `data-i18n` despite containing `<br>` HTML markup — corrected to `data-i18n-html` in index.html (previously the `<br>` was rendered as literal text in browsers)

**New bugs queued (out of scope for P2):** None.

---

### P1 — 2026-06-14
**What changed:**
- `illustrations.js`: Added `planComparison(n, pricing)` and `findMissingKeys(i18n)` pure functions before the expose block. Both added to `root.TymiY` object. Dual-export guard added (`module.exports`). IIFE argument changed to `typeof window !== 'undefined' ? window : {}` for Node compatibility.
- `main.js`: `updateCalc()` rewritten to delegate logic to `window.TymiY.planComparison()` — DOM/formatting preserved identically (tie shows `'—'`, savings uses `{{n}}` substitution). `init()` now runs i18n parity check (`findMissingKeys`) and element-presence audit for 7 expected IDs at boot (console.warn only, never throws).
- `tests/logic.test.js`: Created using `node:test` + `node:assert/strict` — no external deps.
- `PROGRESS.md`: Created this file.

**Test results:** 10/10 PASS (node --test tests/logic.test.js)
- findMissingKeys: ID and EN parity confirmed (0 missing keys)
- planComparison: n=0→payg, n=500→payg(savings 50000), n=730→eq, n=750→eq, n=770→eq, n=1000→unli(savings 50000), n=2000→unli(savings 250000), cost values correct for n=500 and n=1000

**Element audit (index.html):** All 7 expected IDs present — phoneCarousel, calcSlider, ownerSlides, burgerBtn, mobDrawer, videoBtn, videoFrame. No carry-forward bugs from this check.

**New bugs queued:** None.
