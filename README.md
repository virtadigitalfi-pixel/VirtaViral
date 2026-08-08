# VirtaViral — Premium TikTok Management Agency Website

A complete, production-ready website for VirtaViral, a premium TikTok management agency. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools, no dependencies.

---

## 📁 Project Structure

```
VirtaViral/
│
├── index.html          Homepage
├── services.html       Services page
├── pricing.html        Pricing + calculator
├── portfolio.html      Portfolio / case studies
├── about.html          About page
├── faq.html            FAQ with search and categories
├── contact.html        Contact form
├── privacy.html        GDPR Privacy Policy
├── terms.html          Terms of Service
├── 404.html            Custom 404 error page
│
├── style.css           Complete design system
├── script.js           All JavaScript
│
├── robots.txt
├── sitemap.xml
├── README.md
│
└── assets/
    ├── images/         Page images and OG image
    ├── logos/          Logo files (see below)
    ├── icons/          Additional icons
    ├── fonts/          Local fonts (if added)
    └── videos/         Video assets (if added)
```

---

## 🚀 Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `virtaviral-website`)
2. Upload all files from this folder to the repository root
3. Go to **Settings → Pages**
4. Under **Source**, select `main` branch and `/ (root)`
5. Click **Save** — your site will be live at `https://yourusername.github.io/virtaviral-website/`
6. For a custom domain, add a `CNAME` file with your domain and configure DNS

---

## 🎨 Logos

| File | Used For |
|------|----------|
| `assets/logos/logo-primary.jpg` | Desktop navbar (horizontal wordmark) |
| `assets/logos/logo-stacked.jpg` | Footer, loading screen (stacked with wordmark) |

To replace logos:
1. Replace the `.jpg` files in `assets/logos/` with your new files (keep the same filenames)
2. Or update the `src` attributes in the HTML files

---

## 🖼 Images

Replace placeholder images by adding files to `assets/images/`. Key images to add:

| File | Purpose |
|------|---------|
| `og-image.jpg` | Social sharing preview (1200×630px) |
| `favicon.ico` or `favicon.png` | Browser tab icon |
| `apple-touch-icon.png` | iOS home screen (180×180px) |

Add favicon links to the `<head>` of each HTML file:
```html
<link rel="icon" type="image/png" href="assets/images/favicon.png" />
<link rel="apple-touch-icon" href="assets/images/apple-touch-icon.png" />
```

---

## 🎨 Changing Brand Colors

All colors are defined as CSS variables in `style.css`, Section 1:

```css
:root {
  --color-purple:       #5B21B6;   /* Main brand purple */
  --color-purple-light: #7C3AED;   /* Lighter purple for accents */
  --color-gold:         #B8860B;   /* Brand gold */
  --color-gold-light:   #D4A017;   /* Lighter gold */
  --bg-primary:         #F8F8F8;   /* Page background */
  --bg-secondary:       #FFFFFF;   /* Card background */
  --text-primary:       #111111;   /* Main text */
  --text-secondary:     #6B7280;   /* Muted text */
}
```

Change these variables and every element updates automatically.

---

## ✏️ Editing Text Content

All text is written directly in the HTML files. Simply open the relevant page and find the text you want to change.

For **bilingual content**, the language system uses `data-i18n` attributes for key strings and the `translations` object in `script.js`. To add/update translations:

```javascript
// In script.js, find the translations object:
const translations = {
  en: {
    'hero.h1a': 'Grow Your Business',
    // ... add or edit keys here
  },
  fi: {
    'hero.h1a': 'Kasvata yrityksesi',
    // ... Finnish translations here
  }
};
```

---

## 📧 Setting Up the Contact Form

The contact form uses **Formspree** for processing. To activate it:

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy your form ID (looks like `xabc1234`)
3. Open `script.js` and find:
   ```javascript
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
   ```
4. Replace `YOUR_FORM_ID` with your actual form ID

Formspree's free plan allows 50 submissions/month. Upgrade for more.

**Alternative**: Replace the fetch call in `initContactForm()` with any other form backend (Netlify Forms, EmailJS, etc.).

---

## 💰 Updating Pricing

Pricing is written directly in `pricing.html`. Find these values and update as needed:

- Custom plan: `€20/video` (search for `20` in pricing section)
- Pro plan: `€499/month`
- Elite plan: `€999/month`
- Content Creation add-on: `€150/month`
- Performance Guarantee: `€50` refund/credit, `10,000` views threshold

The pricing calculator logic is in `script.js` → `initPricingCalculator()`.

---

## 🖼 Adding Portfolio Projects

In `portfolio.html`, find the portfolio grid section. Each project card follows this structure:

```html
<article class="portfolio-card card">
  <div class="portfolio-thumb">
    <!-- Replace background gradient with actual image: -->
    <!-- <img src="assets/images/project-name.jpg" alt="Project name" /> -->
    <div style="position:absolute;inset:0;background:linear-gradient(...)"></div>
    <div class="portfolio-thumb-inner">
      <div class="portfolio-play">...</div>
      <div class="portfolio-meta">Industry · City</div>
    </div>
  </div>
  <div class="portfolio-body">
    <div class="portfolio-industry">Industry Type</div>
    <h3 class="portfolio-title">Business Name</h3>
    <div class="portfolio-stats">
      <div class="portfolio-stat">
        <span class="portfolio-stat-num">125K</span>
        <span class="portfolio-stat-label">Views</span>
      </div>
      <!-- more stats -->
    </div>
  </div>
</article>
```

---

## 🔍 SEO Editing

Each page has a `<head>` section with:

```html
<title>Page Title — VirtaViral</title>
<meta name="description" content="Page description..." />
<link rel="canonical" href="https://virtaviral.com/page.html" />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
```

**Important**: Replace all `https://virtaviral.com` references with your actual domain.

Also update `sitemap.xml` with correct dates when content changes.

---

## 🌓 Dark Mode

Dark mode is automatically toggled by the button in the navbar. The user's preference is saved in `localStorage` under the key `vv-theme`.

Dark mode styles are in `style.css` under the `[data-theme="dark"]` selectors. To adjust dark mode colors, modify the variables in that block.

---

## 🌍 Language System

The bilingual system (EN/FI) switches instantly without page reload. Language preference is saved in `localStorage` under `vv-theme`.

The translation system works in two ways:
1. **`data-i18n` attributes**: Elements with this attribute are automatically translated
2. **HTML content**: Longer sections are written in English by default — for full bilingual support of body text, duplicate sections with language conditionals

---

## ⚡ Performance Notes

- Google Fonts are loaded with `preconnect` for faster loading
- All animations use CSS `transform` and `opacity` (GPU-accelerated)
- JavaScript uses `IntersectionObserver` for efficient scroll animations
- No external JS libraries or frameworks
- Images should be compressed to WebP format for best performance

**Recommended image sizes:**
- Hero images: max 1400px wide
- Portfolio thumbnails: max 600px wide
- Logos: provide 2x resolution (retina)

---

## 🌐 Browser Support

Tested and supported in:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari (iOS 14+)
- Chrome for Android

`backdrop-filter` (glass blur) has graceful fallback in older browsers.

---

## 📋 Pre-Launch Checklist

- [ ] Replace logo files with final versions
- [ ] Add real favicon and apple-touch-icon
- [ ] Update all email addresses (`virtaviral@gmail.com`)
- [ ] Update all URLs from `virtaviral.com` to your real domain
- [ ] Set up Formspree endpoint in `script.js`
- [ ] Add real OG image to `assets/images/og-image.jpg`
- [ ] Update sitemap.xml with correct domain
- [ ] Update robots.txt with correct sitemap URL
- [ ] Update Privacy Policy contact details
- [ ] Update Terms of Service contact details
- [ ] Replace placeholder portfolio data with real projects
- [ ] Replace placeholder testimonials with real client feedback
- [ ] Test contact form submission
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit (target: 95+ performance)
- [ ] Submit sitemap to Google Search Console

---

## 🆘 Support

For questions about customising this website, contact the development team or refer to the inline comments in `style.css` and `script.js` — every major section is documented.
