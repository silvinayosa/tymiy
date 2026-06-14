# TymiY — Manual QA Checklist

Run in both **ID** and **EN** by toggling the language button. Check each item in a real browser (Chrome + Safari mobile recommended).

## Calculator
- [ ] Slider at 0: shows Pay-as-you-go winner, savings = Rp 0 vs Rp 150.000 diff
- [ ] Slider at 500: Pay-as-you-go winner, hemat Rp 50.000/bulan
- [ ] Slider at 750: "Hampir sama" / "Roughly equal" (tie zone)
- [ ] Slider at 1000: Unlimited winner, hemat Rp 50.000/bulan
- [ ] Slider at 2000: Unlimited winner, hemat Rp 250.000/bulan
- [ ] Calculator text updates immediately on language switch (no stale ID strings in EN)

## Hero Carousel
- [ ] Auto-advances every 5 seconds
- [ ] Touch swipe left/right = one slide change (not two)
- [ ] Mouse drag left/right = one slide change, no click fires after drag
- [ ] Clicking a back phone navigates to that slide
- [ ] Keyboard: focus carousel, ArrowRight advances, ArrowLeft goes back
- [ ] Screen reader (VoiceOver/NVDA): slide change announces the slide label (e.g. "Tampilan Kasir")
- [ ] No phone stuck mid-animation after fast swipe

## Language Toggle
- [ ] Active language button has `.on` class and `aria-pressed="true"` on page load
- [ ] Switching language updates ALL visible text including calculator labels
- [ ] Both nav (desktop) and drawer (mobile) language buttons stay in sync

## Mobile Drawer
- [ ] Burger opens drawer, × closes it, Esc closes it, backdrop click closes it
- [ ] Tab key stays trapped inside the drawer (does not escape to page behind)
- [ ] Shift+Tab at first item wraps to last; Tab at last item wraps to first
- [ ] Focus returns to burger button after close

## Video Demo Button
- [ ] Open DevTools Network tab, reload page: confirm NO video/iframe network request on load
- [ ] Click "Lihat Video Demo": iframe loads (requires real data-src URL to be set)

## Owner Steps Carousel
- [ ] Clicking step 1/2/3 updates the image panel (slides up/down)
- [ ] Keyboard: Tab to a step card, press Enter or Space → panel updates

## Reduced Motion (OS-level)
- [ ] Enable "Reduce motion" in OS: hero carousel does NOT auto-advance
- [ ] Phone transition cleanup runs synchronously (no stuck entering-front class)

## A11y
- [ ] No console.warn for missing i18n keys
- [ ] No console.warn for missing element IDs
- [ ] Pricing slider aria-valuetext updates as slider moves (inspect in DevTools or screen reader)

## General
- [ ] No horizontal scroll on iPhone 390px width
- [ ] All sections readable at 390px (no clipped text, no overflow)
- [ ] Footer three columns display correctly on desktop, stack on mobile
