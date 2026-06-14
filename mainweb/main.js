/* ============================================================
   TymiY — main.js
   All behavior: language switching, hero phone slider, video
   toggle, pricing calculator, reveal-on-scroll.
   Depends on window.TymiY from illustrations.js.
   ============================================================ */
(function () {
  'use strict';

  if (!window.TymiY) {
    console.error('[TymiY] illustrations.js must load before main.js');
    return;
  }

  const { i18n, phoneSlides, pricing, defaultLang } = window.TymiY;

  /* ============================================================
     1. Hero phone slide rendering (data-driven)
     Each phone element permanently shows one slide; slot classes
     drive which phone is in the front vs back positions.
     ============================================================ */
  function renderPhoneSlides() {
    phoneSlides.forEach((s, i) => {
      const wrap = document.getElementById(`phoneContent${i}`);
      if (wrap) wrap.innerHTML = `<div class="phone-slide ${s.theme}" role="img">${s.svg}</div>`; // static content only — sanitise if this ever becomes dynamic
    });
    updatePhoneSlots();
    updateTag();
  }

  /* ============================================================
     2. i18n switching
     ============================================================ */
  let currentLang = defaultLang || 'ID';

  function updateTag() {
    // Each phone has its own tag; set it to that phone's slide tagKey.
    // CSS (.phone.slot-front .phone-preview-tag) shows only the front one.
    phoneSlides.forEach((s, i) => {
      const phone = document.getElementById(`phone${i}`);
      if (!phone) return;
      const tag = phone.querySelector('.phone-preview-tag');
      if (!tag || !s.tagKey) return;
      tag.setAttribute('data-i18n', s.tagKey);
      const txt = i18n[currentLang] && i18n[currentLang][s.tagKey];
      if (txt !== undefined) tag.textContent = txt;
    });
    // Set localized aria-label on each phone-slide for screen readers
    phoneSlides.forEach((s, i) => {
      const slide = document.querySelector(`#phoneContent${i} .phone-slide`);
      const label = i18n[currentLang] && i18n[currentLang][s.tagKey];
      if (slide && label) slide.setAttribute('aria-label', label);
    });
  }

  function syncLangButtons() {
    document.querySelectorAll('.lang button').forEach(b => {
      const on = b.dataset.lang === currentLang;
      b.classList.toggle('on', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  function applyLang(lang) {
    if (!i18n[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang === 'ID' ? 'id' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (i18n[lang][k] !== undefined) el.textContent = i18n[lang][k];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => { // static content only — sanitise if this ever becomes dynamic
      const k = el.getAttribute('data-i18n-html');
      if (i18n[lang][k] !== undefined) el.innerHTML = i18n[lang][k]; // static content only — sanitise if this ever becomes dynamic
    });

    updateCalc(); // re-render calculator strings
    updateTag();
    syncLangButtons();
  }

  function wireLangSwitcher() {
    // Two .lang groups (desktop nav + mobile drawer) — applyLang→syncLangButtons keeps all in sync.
    document.querySelectorAll('.lang button').forEach(b => {
      b.addEventListener('click', () => applyLang(b.dataset.lang));
    });
  }

  /* ============================================================
     3. Hero phone slider — slot-based
     slideIdx is the single source of truth. updatePhoneSlots()
     derives which phone gets which slot class on every change.
     ============================================================ */
  let slideIdx = 0;
  let slideTimer = null;

  function updatePhoneSlots() {
    const n = phoneSlides.length;
    for (let i = 0; i < n; i++) {
      const phone = document.getElementById(`phone${i}`);
      if (!phone) continue;
      phone.classList.remove('slot-front', 'slot-back-left', 'slot-back-right', 'entering-front');
      if (i === slideIdx) {
        phone.classList.add('entering-front', 'slot-front');
        const clear = () => phone.classList.remove('entering-front');
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce) {
          clear();
        } else {
          const onEnd = () => { phone.removeEventListener('transitionend', onEnd); clear(); };
          phone.addEventListener('transitionend', onEnd, { once: true });
          setTimeout(onEnd, 600); // safety-net fallback
        }
      } else if (i === (slideIdx + 1) % n) {
        phone.classList.add('slot-back-right');
      } else {
        phone.classList.add('slot-back-left');
      }
    }
  }

  function setSlide(i) {
    const n = phoneSlides.length;
    const prev = slideIdx;
    slideIdx = window.TymiY.nextIndex(i, n);
    if (slideIdx === prev) return;
    updatePhoneSlots();
    updateTag();
    const status = document.getElementById('carouselStatus');
    if (status) {
      const key = phoneSlides[slideIdx] && phoneSlides[slideIdx].tagKey;
      status.textContent = (i18n[currentLang] && key && i18n[currentLang][key]) || '';
    }
  }

  function startSlider() {
    stopSlider();
    slideTimer = setInterval(() => setSlide(slideIdx + 1), 5000);
  }
  function stopSlider() {
    if (slideTimer) {
      clearInterval(slideTimer);
      slideTimer = null;
    }
  }

  function wireSlider() {
    const carousel = document.getElementById('phoneCarousel');
    if (!carousel) return;

    carousel.setAttribute('tabindex', '0');
    carousel.setAttribute('role', 'group');
    carousel.setAttribute('aria-roledescription', 'carousel');
    carousel.setAttribute('aria-label', 'Product preview screens');
    carousel.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { setSlide(slideIdx + 1); startSlider(); }
      else if (e.key === 'ArrowLeft') { setSlide(slideIdx - 1); startSlider(); }
    });

    let didDrag = false;

    // Clicking a back phone navigates to its slide
    document.querySelectorAll('.phone[data-phone]').forEach(phone => {
      phone.addEventListener('click', () => {
        if (didDrag) { didDrag = false; return; }
        const idx = parseInt(phone.dataset.phone, 10);
        if (idx !== slideIdx) { setSlide(idx); startSlider(); }
      });
    });

    // Touch swipe on the carousel container
    let touchStartX = 0;
    let touchStartY = 0;
    carousel.addEventListener('touchstart', e => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      stopSlider();
    }, { passive: true });
    carousel.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      const dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        didDrag = true;
        setSlide(slideIdx + (dx < 0 ? 1 : -1));
      }
      startSlider();
    }, { passive: true });

    // Mouse drag on the carousel container
    let mouseStartX = 0;
    let isDragging = false;
    carousel.addEventListener('mousedown', e => {
      didDrag = false;
      mouseStartX = e.clientX;
      isDragging = true;
      stopSlider();
      e.preventDefault();
    });
    window.addEventListener('mouseup', e => {
      if (!isDragging) return;
      isDragging = false;
      const dx = e.clientX - mouseStartX;
      if (Math.abs(dx) > 40) { didDrag = true; setSlide(slideIdx + (dx < 0 ? 1 : -1)); }
      startSlider();
    });

    carousel.addEventListener('mouseenter', stopSlider);
    carousel.addEventListener('mouseleave', () => { if (!isDragging) startSlider(); });

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      startSlider();
    }
  }

  /* ============================================================
     4. Section 4: owner steps carousel (vertical slide)
     ============================================================ */
  let ownerIdx = 0;
  let ownerSlidesEl = null;

  function setOwnerSlide(newIdx) {
    if (!ownerSlidesEl) return;
    const slides = Array.from(ownerSlidesEl.querySelectorAll('.owner-slide'));
    const items  = Array.from(document.querySelectorAll('#ownerSteps .item'));
    if (newIdx === ownerIdx || !slides[newIdx]) return;

    const forward = newIdx > ownerIdx;
    const prevIdx = ownerIdx;
    ownerIdx = newIdx;

    // Snap incoming slide to off-screen with no transition
    slides[newIdx].style.transition = 'none';
    slides[newIdx].classList.remove('is-active', 'is-above', 'is-below');
    slides[newIdx].classList.add(forward ? 'is-below' : 'is-above');

    void slides[newIdx].offsetWidth; // force reflow

    slides[newIdx].style.transition = '';
    slides[newIdx].classList.remove('is-above', 'is-below');
    slides[newIdx].classList.add('is-active');

    slides[prevIdx].classList.remove('is-active');
    slides[prevIdx].classList.add(forward ? 'is-above' : 'is-below');

    items.forEach((el, i) => el.classList.toggle('active', i === newIdx));
  }

  function wireOwnerCarousel() {
    ownerSlidesEl = document.getElementById('ownerSlides');
    if (!ownerSlidesEl) return;
    document.querySelectorAll('#ownerSteps .item').forEach((el, i) => {
      if (el.tagName !== 'BUTTON') {
        el.setAttribute('role', 'button');
        el.setAttribute('tabindex', '0');
      }
      el.addEventListener('click', () => setOwnerSlide(i));
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setOwnerSlide(i);
        }
      });
    });
  }

  /* ============================================================
     Section 2: opt-in video toggle (lazy-loads iframe on first click)
     ============================================================ */
  function wireVideoToggle() {
    const btn = document.getElementById('videoBtn');
    const frame = document.getElementById('videoFrame');
    if (!btn || !frame) return;
    let loaded = false;
    btn.addEventListener('click', () => {
      if (!loaded) {
        const iframe = frame.querySelector('iframe[data-src]');
        if (iframe) { iframe.src = iframe.dataset.src; loaded = true; }
      }
      frame.classList.toggle('on');
    });
  }

  /* ============================================================
     5. Pricing calculator (ROI priority #1 per spec)
     ============================================================ */
  let calcEls = null;

  function fmtRp(n) {
    return 'Rp ' + n.toLocaleString('id-ID');
  }

  function updateCalc() {
    if (!calcEls) return;
    const n = parseInt(calcEls.slider.value, 10);
    const { payg, unli, winner, savings } = window.TymiY.planComparison(n, pricing);

    calcEls.val.textContent = n.toLocaleString('id-ID');
    calcEls.payg.textContent = fmtRp(payg);
    calcEls.unli.textContent = fmtRp(unli);

    // Slider fill
    const pct = ((n - pricing.sliderMin) / (pricing.sliderMax - pricing.sliderMin)) * 100;
    calcEls.slider.style.setProperty('--p', pct + '%');

    calcEls.barPayg.classList.remove('win');
    calcEls.barUnli.classList.remove('win');

    const t = i18n[currentLang] || i18n.ID;

    if (winner === 'eq') {
      calcEls.winner.textContent = t['calc.winner_eq'];
      calcEls.savings.textContent = '—';
    } else if (winner === 'payg') {
      calcEls.barPayg.classList.add('win');
      calcEls.winner.textContent = t['calc.winner_payg'];
      calcEls.savings.textContent = t['calc.savings'].replace('{{n}}', fmtRp(savings));
    } else {
      calcEls.barUnli.classList.add('win');
      calcEls.winner.textContent = t['calc.winner_unli'];
      calcEls.savings.textContent = t['calc.savings'].replace('{{n}}', fmtRp(savings));
    }
    const t2 = i18n[currentLang] || i18n.ID;
    calcEls.slider.setAttribute('aria-valuetext', `${n.toLocaleString('id-ID')} ${t2['calc.label']}`);
  }

  function wireCalculator() {
    const slider = document.getElementById('calcSlider');
    if (!slider) return;

    // Apply pricing config to the slider element
    slider.min = pricing.sliderMin;
    slider.max = pricing.sliderMax;
    slider.step = pricing.sliderStep;
    slider.value = pricing.sliderDefault;

    calcEls = {
      slider,
      val: document.getElementById('calcVal'),
      payg: document.getElementById('paygCost'),
      unli: document.getElementById('unliCost'),
      barPayg: document.getElementById('barPayg'),
      barUnli: document.getElementById('barUnli'),
      winner: document.getElementById('calcWinner'),
      savings: document.getElementById('calcSavings')
    };

    slider.addEventListener('input', updateCalc);
    updateCalc();
  }

  /* ============================================================
     6. Reveal on scroll
     ============================================================ */
  function wireReveal() {
    const els = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('on'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('on');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => io.observe(el));
  }

  /* ============================================================
     7. Nav: scroll shadow + mobile drawer
     ============================================================ */
  function wireNavScroll() {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        nav.classList.toggle('scrolled', window.scrollY > 8);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function wireDrawer() {
    const burger = document.getElementById('burgerBtn');
    const drawer = document.getElementById('mobDrawer');
    const closeBtn = document.getElementById('drawerClose');
    if (!burger || !drawer) return;

    let lastFocus = null;

    function trap(e) {
      if (e.key !== 'Tab') return;
      const focusable = drawer.querySelectorAll('button, a[href], input, [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    function open() {
      lastFocus = document.activeElement;
      drawer.classList.add('on');
      drawer.setAttribute('aria-hidden', 'false');
      burger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      // Focus first focusable element inside drawer
      const first = drawer.querySelector('button, a');
      if (first) first.focus();
      document.addEventListener('keydown', trap);
    }
    function close() {
      document.removeEventListener('keydown', trap);
      drawer.classList.remove('on');
      drawer.setAttribute('aria-hidden', 'true');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    burger.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', close);

    // Click backdrop (the drawer element itself, not its .panel child) closes
    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) close();
    });

    // Esc closes
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('on')) close();
    });

    // Tapping any anchor inside drawer closes it (smooth scroll then dismiss)
    drawer.querySelectorAll('a.item').forEach(a => a.addEventListener('click', close));
  }

  /* ============================================================
     Boot
     ============================================================ */
  function init() {
    // i18n parity check (logs, never throws)
    const _missing = window.TymiY.findMissingKeys(i18n);
    if (_missing.length) console.warn('[i18n] missing keys:', _missing);

    // Dev element-presence audit
    ['phoneCarousel','calcSlider','ownerSlides','burgerBtn','mobDrawer','videoBtn','videoFrame']
      .forEach(id => { if (!document.getElementById(id)) console.warn(`[TymiY] expected #${id} not found`); });

    renderPhoneSlides();
    wireLangSwitcher();
    wireSlider();
    wireOwnerCarousel();
    wireVideoToggle();
    wireCalculator();        // sets calcEls FIRST
    wireReveal();
    wireNavScroll();
    wireDrawer();
    applyLang(currentLang);  // LAST — one full localization pass after all DOM is wired
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();