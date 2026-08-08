/* =============================================================
   VirtaViral — script.js
   Premium TikTok Management Agency — Production JavaScript
   Version: 1.0.0
   ============================================================= */

/* =============================================================
   1. INITIALIZATION
   ============================================================= */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initLoading();
  initNavbar();
  initMobileMenu();
  initScrollProgress();
  initRevealAnimations();
  initCounters();
  initTestimonials();
  initFAQ();
  initMagneticButtons();
  initCookieNotice();
  initBackToTop();
  initPricingCalculator();
  initContactForm();
  initFAQSearch();
  setActiveNavLink();
});

/* =============================================================
   2. THEME (DARK MODE)
   ============================================================= */
function initTheme() {
  const saved = localStorage.getItem('vv-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  applyTheme(theme);

  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('vv-theme', theme);
}

/* =============================================================
   3. LANGUAGE SYSTEM (EN / FI)
   ============================================================= */
const translations = {
  en: {
    // Navigation
    'nav.home':      'Home',
    'nav.services':  'Services',
    'nav.pricing':   'Pricing',
    'nav.portfolio': 'Portfolio',
    'nav.about':     'About',
    'nav.faq':       'FAQ',
    'nav.contact':   'Contact',
    'nav.cta':       'Book a Free Call',
    // Hero
    'hero.eyebrow':  'Premium TikTok Management',
    'hero.h1a':      'Grow Your Business',
    'hero.h1b':      'on TikTok.',
    'hero.sub':      'We plan, create, edit and manage TikTok content that helps businesses reach more people, strengthen their brand, and stay consistently visible—so you can focus on running your business.',
    'hero.cta1':     'Book a Free Call',
    'hero.cta2':     'View Pricing',
    'hero.stat1':    'Views Generated',
    'hero.stat2':    'Videos Edited',
    'hero.stat3':    'Growing Businesses',
    // Trust
    'trust.label':   'Trusted by modern businesses',
    // Cookie
    'cookie.text':   'We use cookies to improve your experience. View our',
    'cookie.link':   'Privacy Policy',
    'cookie.accept': 'Accept',
    'cookie.decline':'Decline',
  },
  fi: {
    // Navigation
    'nav.home':      'Etusivu',
    'nav.services':  'Palvelut',
    'nav.pricing':   'Hinnoittelu',
    'nav.portfolio': 'Portfolio',
    'nav.about':     'Meistä',
    'nav.faq':       'UKK',
    'nav.contact':   'Yhteystiedot',
    'nav.cta':       'Varaa ilmainen puhelu',
    // Hero
    'hero.eyebrow':  'Premium TikTok-hallinta',
    'hero.h1a':      'Kasvata yrityksesi',
    'hero.h1b':      'TikTokissa.',
    'hero.sub':      'Suunnittelemme, luomme, editoimme ja hallinnoimme TikTok-sisältöä, joka auttaa yrityksiä tavoittamaan enemmän ihmisiä, vahvistamaan brändiään ja pysymään näkyvänä—jotta sinä voit keskittyä liiketoimintaasi.',
    'hero.cta1':     'Varaa ilmainen puhelu',
    'hero.cta2':     'Katso hinnoittelu',
    'hero.stat1':    'Katselukerrat',
    'hero.stat2':    'Editoitua videota',
    'hero.stat3':    'Kasvavaa yritystä',
    // Trust
    'trust.label':   'Modernien yritysten luottama',
    // Cookie
    'cookie.text':   'Käytämme evästeitä parantaaksemme käyttökokemustasi. Katso',
    'cookie.link':   'Tietosuojakäytäntömme',
    'cookie.accept': 'Hyväksy',
    'cookie.decline':'Hylkää',
  }
};

function initLanguage() {
  const saved = localStorage.getItem('vv-lang') || 'en';
  applyLanguage(saved);

  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-lang') || 'en';
      applyLanguage(current === 'en' ? 'fi' : 'en');
    });
  });
}

function applyLanguage(lang) {
  document.documentElement.setAttribute('data-lang', lang);
  localStorage.setItem('vv-lang', lang);

  // Update toggle button text
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.textContent = lang === 'en' ? 'FI' : 'EN';
    btn.setAttribute('aria-label', lang === 'en' ? 'Vaihda suomeksi' : 'Switch to English');
  });

  // Apply translations to data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const t = translations[lang];
    if (t && t[key]) {
      el.textContent = t[key];
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang;
}

/* =============================================================
   4. LOADING SCREEN
   ============================================================= */
function initLoading() {
  const screen = document.getElementById('loading-screen');
  if (!screen) return;

  // Hide after content loads
  window.addEventListener('load', () => {
    setTimeout(() => {
      screen.classList.add('hidden');
      document.body.style.overflow = '';
    }, 1200);
  });

  // Fallback
  setTimeout(() => {
    screen.classList.add('hidden');
    document.body.style.overflow = '';
  }, 3000);

  document.body.style.overflow = 'hidden';
}

/* =============================================================
   5. NAVBAR
   ============================================================= */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (current > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = current;
  }, { passive: true });
}

function setActiveNavLink() {
  const path = window.location.pathname;
  const filename = path.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-link, .mobile-menu-link').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkFile = href.split('/').pop() || 'index.html';

    if (linkFile === filename || (filename === '' && linkFile === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* =============================================================
   6. MOBILE MENU
   ============================================================= */
function initMobileMenu() {
  const hamburger = document.querySelector('.nav-hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!hamburger || !menu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = menu.classList.contains('open');
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // Close on link click
  menu.querySelectorAll('.mobile-menu-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close on escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMobileMenu();
  });
}

function openMobileMenu() {
  const hamburger = document.querySelector('.nav-hamburger');
  const menu = document.getElementById('mobile-menu');
  hamburger.classList.add('open');
  menu.classList.add('open');
  document.body.style.overflow = 'hidden';
  hamburger.setAttribute('aria-expanded', 'true');
}

function closeMobileMenu() {
  const hamburger = document.querySelector('.nav-hamburger');
  const menu = document.getElementById('mobile-menu');
  hamburger.classList.remove('open');
  menu.classList.remove('open');
  document.body.style.overflow = '';
  hamburger.setAttribute('aria-expanded', 'false');
}

/* =============================================================
   7. SCROLL PROGRESS
   ============================================================= */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    bar.style.width = `${Math.min(progress, 100)}%`;
  }, { passive: true });
}

/* =============================================================
   8. REVEAL ANIMATIONS (Intersection Observer)
   ============================================================= */
function initRevealAnimations() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* =============================================================
   9. ANIMATED COUNTERS
   ============================================================= */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseFloat(el.getAttribute('data-count'));
  const suffix = el.getAttribute('data-suffix') || '';
  const prefix = el.getAttribute('data-prefix') || '';
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out expo
    const eased = 1 - Math.pow(2, -10 * progress);
    const current = target * eased;

    // Format based on size
    let formatted;
    if (target >= 1000000) {
      formatted = (current / 1000000).toFixed(1) + 'M';
    } else if (target >= 1000) {
      formatted = Math.round(current / 100) / 10 + 'K';
    } else {
      formatted = Math.round(current).toString();
    }

    el.textContent = prefix + formatted + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      // Final value clean
      if (target >= 1000000) {
        el.textContent = prefix + (target / 1000000) + 'M+' + suffix;
      } else if (target >= 1000) {
        el.textContent = prefix + (target / 1000) + 'K+' + suffix;
      } else {
        el.textContent = prefix + target + suffix;
      }
    }
  }

  requestAnimationFrame(update);
}

/* =============================================================
   10. TESTIMONIALS SLIDER
   ============================================================= */
function initTestimonials() {
  const track = document.querySelector('.testimonials-track');
  if (!track) return;

  const cards = track.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.testimonials-dot');
  const btnPrev = document.querySelector('.testimonials-btn--prev');
  const btnNext = document.querySelector('.testimonials-btn--next');

  if (!cards.length) return;

  let current = 0;
  let autoplayTimer = null;
  const total = cards.length;
  const visibleCount = window.innerWidth > 768 ? 2 : 1;

  function goTo(idx) {
    current = ((idx % total) + total) % total;
    const offset = current * (100 / visibleCount);
    track.style.transform = `translateX(-${offset}%)`;

    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(() => goTo(current + 1), 5000);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  if (btnPrev) btnPrev.addEventListener('click', () => { goTo(current - 1); startAutoplay(); });
  if (btnNext) btnNext.addEventListener('click', () => { goTo(current + 1); startAutoplay(); });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); startAutoplay(); });
  });

  track.addEventListener('mouseenter', stopAutoplay);
  track.addEventListener('mouseleave', startAutoplay);

  // Touch support
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      goTo(diff > 0 ? current + 1 : current - 1);
    }
    startAutoplay();
  }, { passive: true });

  goTo(0);
  startAutoplay();
}

/* =============================================================
   11. FAQ ACCORDION
   ============================================================= */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));

      // Toggle clicked
      if (!isOpen) {
        item.classList.add('open');
      }

      // Update aria
      btn.setAttribute('aria-expanded', !isOpen);
    });
  });
}

/* =============================================================
   12. FAQ SEARCH (FAQ page)
   ============================================================= */
function initFAQSearch() {
  const searchInput = document.querySelector('.search-input');
  const faqItems = document.querySelectorAll('.faq-item');
  const tabs = document.querySelectorAll('.faq-tab');
  if (!searchInput || !faqItems.length) return;

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();

    faqItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = query === '' || text.includes(query) ? '' : 'none';
    });
  });

  // Category tabs
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const category = tab.getAttribute('data-category');

      faqItems.forEach(item => {
        if (category === 'all') {
          item.style.display = '';
        } else {
          item.style.display = item.getAttribute('data-category') === category ? '' : 'none';
        }
      });

      // Clear search
      searchInput.value = '';
    });
  });
}

/* =============================================================
   13. MAGNETIC BUTTONS
   ============================================================= */
function initMagneticButtons() {
  if (window.matchMedia('(pointer: coarse)').matches) return; // Skip on touch

  document.querySelectorAll('.btn-magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const pull = 0.25;
      btn.style.transform = `translate(${x * pull}px, ${y * pull}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

/* =============================================================
   14. COOKIE NOTICE
   ============================================================= */
function initCookieNotice() {
  const notice = document.getElementById('cookie-notice');
  if (!notice) return;

  if (localStorage.getItem('vv-cookies')) return;

  setTimeout(() => notice.classList.add('visible'), 2000);

  const acceptBtn  = notice.querySelector('.cookie-btn-accept');
  const declineBtn = notice.querySelector('.cookie-btn-decline');

  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('vv-cookies', 'accepted');
      notice.classList.remove('visible');
    });
  }

  if (declineBtn) {
    declineBtn.addEventListener('click', () => {
      localStorage.setItem('vv-cookies', 'declined');
      notice.classList.remove('visible');
    });
  }
}

/* =============================================================
   15. BACK TO TOP
   ============================================================= */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* =============================================================
   16. PRICING CALCULATOR
   ============================================================= */

// Global filming state — accessible from inline onclick and JS
var filmingSelected = false;

function setFilming(value) {
  filmingSelected = (value === 'yes');
  // Update button active states
  var btnNo  = document.getElementById('btn-no-filming');
  var btnYes = document.getElementById('btn-yes-filming');
  if (btnNo && btnYes) {
    if (filmingSelected) {
      btnNo.classList.remove('calc-toggle-btn--active');
      btnNo.setAttribute('aria-pressed', 'false');
      btnYes.classList.add('calc-toggle-btn--active');
      btnYes.setAttribute('aria-pressed', 'true');
    } else {
      btnYes.classList.remove('calc-toggle-btn--active');
      btnYes.setAttribute('aria-pressed', 'false');
      btnNo.classList.add('calc-toggle-btn--active');
      btnNo.setAttribute('aria-pressed', 'true');
    }
  }
  updateCalculator();
}

function updateCalculator() {
  var slider       = document.getElementById('calc-videos');
  var displayCount = document.getElementById('calc-count');
  var resultAmount = document.getElementById('calc-result-amount');
  var resultBreak  = document.getElementById('calc-breakdown');
  if (!slider || !resultAmount) return;

  var videos      = parseInt(slider.value);
  var editingCost = videos * 20;
  var filmingCost = filmingSelected ? 150 : 0;
  var total       = editingCost + filmingCost;

  if (displayCount) displayCount.textContent = videos;
  resultAmount.textContent = total + ' €';

  if (resultBreak) {
    var breakdown = videos + ' videos × 20 € = ' + editingCost + ' €';
    if (filmingSelected) breakdown += ' + filming = 150 €';
    resultBreak.textContent = breakdown;
  }

  // Update slider track fill
  var min = parseInt(slider.min);
  var max = parseInt(slider.max);
  var pct = ((videos - min) / (max - min)) * 100;
  slider.style.background = 'linear-gradient(90deg, var(--color-purple-light) ' + pct + '%, var(--border-medium) ' + pct + '%)';
}

function initPricingCalculator() {
  var slider = document.getElementById('calc-videos');
  if (!slider) return;

  // Wire up slider
  slider.addEventListener('input', updateCalculator);

  // Wire up toggle buttons
  var btnNo  = document.getElementById('btn-no-filming');
  var btnYes = document.getElementById('btn-yes-filming');
  if (btnNo)  btnNo.addEventListener('click',  function() { setFilming('no'); });
  if (btnYes) btnYes.addEventListener('click', function() { setFilming('yes'); });

  // Initial render
  updateCalculator();
}

/* =============================================================
   17. CONTACT FORM
   ============================================================= */

// ── HOW TO ACTIVATE THE CONTACT FORM ────────────────────────────
//
//  OPTION A — Formspree (recommended, free up to 50 submissions/month):
//    1. Go to https://formspree.io and create a free account
//    2. Create a new form, copy your Form ID (e.g. "xabc1234")
//    3. Replace null below with your endpoint string:
//       'https://formspree.io/f/YOUR_FORM_ID'
//
//  OPTION B — Any other POST endpoint:
//    Replace null with your full endpoint URL.
//
//  Until you set this, the form falls back to opening the user's
//  mail client with all fields pre-filled — works immediately.
// ────────────────────────────────────────────────────────────────
const FORM_ENDPOINT = null; // ← paste your Formspree URL here

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateForm(form)) return;

    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;

    // ── If no endpoint is configured, open mailto fallback ──────
    if (!FORM_ENDPOINT) {
      const fields = Object.fromEntries(new FormData(form));
      // ← REPLACE with your real email address:
      const to = 'virtaviral@gmail.com';
      const subject = encodeURIComponent(`New enquiry from ${fields.business_name || 'website'}`);
      const body = encodeURIComponent(
        `Business: ${fields.business_name || '—'}\n` +
        `Name: ${fields.name || '—'}\n` +
        `Email: ${fields.email || '—'}\n` +
        `Phone: ${fields.phone || '—'}\n` +
        `Website: ${fields.website || '—'}\n` +
        `Plan: ${fields.plan || '—'}\n` +
        `Content: ${fields.content_option || '—'}\n\n` +
        `Message:\n${fields.message || '—'}`
      );
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
      return;
    }

    // ── Formspree / custom endpoint submission ───────────────────
    submitBtn.textContent = '...';
    submitBtn.disabled = true;

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        showFormSuccess(form);
      } else {
        showFormError(submitBtn, 'Something went wrong. Please try again.', originalText);
      }
    } catch {
      showFormError(submitBtn, 'Could not send. Please email us directly.', originalText);
    } finally {
      submitBtn.disabled = false;
      if (submitBtn.textContent === '...') submitBtn.textContent = originalText;
    }
  });
}

function validateForm(form) {
  let valid = true;

  // Clear existing errors
  form.querySelectorAll('.form-error').forEach(el => el.textContent = '');
  form.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(el => {
    el.style.borderColor = '';
  });

  // Required fields
  form.querySelectorAll('[required]').forEach(field => {
    if (!field.value.trim()) {
      showFieldError(field, getLang() === 'fi' ? 'Tämä kenttä on pakollinen.' : 'This field is required.');
      valid = false;
    }
  });

  // Email validation
  const email = form.querySelector('input[type="email"]');
  if (email && email.value && !isValidEmail(email.value)) {
    showFieldError(email, getLang() === 'fi' ? 'Syötä kelvollinen sähköpostiosoite.' : 'Please enter a valid email address.');
    valid = false;
  }

  // Privacy checkbox
  const checkbox = form.querySelector('.form-checkbox');
  if (checkbox && !checkbox.checked) {
    const wrap = checkbox.closest('.form-group') || checkbox.parentElement;
    let errEl = wrap.querySelector('.form-error');
    if (!errEl) {
      errEl = document.createElement('span');
      errEl.className = 'form-error';
      wrap.appendChild(errEl);
    }
    errEl.textContent = getLang() === 'fi' ? 'Hyväksy tietosuojakäytäntö jatkaaksesi.' : 'Please accept the Privacy Policy to continue.';
    valid = false;
  }

  return valid;
}

function showFieldError(field, message) {
  field.style.borderColor = '#DC2626';
  const wrap = field.closest('.form-group');
  if (!wrap) return;
  let errEl = wrap.querySelector('.form-error');
  if (!errEl) {
    errEl = document.createElement('span');
    errEl.className = 'form-error';
    wrap.appendChild(errEl);
  }
  errEl.textContent = message;
}

function showFormSuccess(form) {
  form.style.display = 'none';
  const success = document.querySelector('.form-success');
  if (success) success.classList.add('visible');
}

function showFormError(btn, message, originalText) {
  btn.textContent = message;
  btn.style.background = '#DC2626';
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
  }, 3000);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getLang() {
  return document.documentElement.getAttribute('data-lang') || 'en';
}

/* =============================================================
   18. SMOOTH PAGE TRANSITIONS
   ============================================================= */
document.querySelectorAll('a[href]').forEach(link => {
  const href = link.getAttribute('href');
  // Only internal links
  if (
    href &&
    !href.startsWith('#') &&
    !href.startsWith('mailto:') &&
    !href.startsWith('tel:') &&
    !href.startsWith('http') &&
    !link.hasAttribute('target')
  ) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.classList.add('page-transition-out');
      setTimeout(() => {
        window.location.href = href;
      }, 280);
    });
  }
});
