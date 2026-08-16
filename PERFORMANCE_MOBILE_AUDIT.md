# Sanmati Journal — Mobile Performance & Core Web Vitals Audit Report (Phase 1 Baseline)

**Target Site:** `https://sanmatijournal.in`  
**Test Viewports:** 360×800 (Mobile Standard), 375×812 (iPhone), 390×844 (Modern Flagship)  
**Emulation:** Simulated Mobile (Slow 4G, 4× CPU Slowdown) via Lighthouse 12.8.2  
**Baseline Date:** August 16, 2026

---

## 1. Executive Baseline Scores & Core Web Vitals

| Metric | Measured Baseline | Target | Status |
| :--- | :--- | :--- | :--- |
| **Mobile Performance Score** | **66 / 100** | **≥ 90 / 100** | ⚠️ Needs Optimization |
| **Desktop Performance Score** | **92 / 100** | **≥ 95 / 100** | 🟡 Near Target |
| **Largest Contentful Paint (LCP)** | **5.3s** | **≤ 2.0s** | ❌ Critical Bottleneck |
| **First Contentful Paint (FCP)** | **3.4s** | **≤ 1.8s** | ❌ High Delay |
| **Total Blocking Time (TBT)** | **150ms** | **≤ 100ms** | 🟢 Good (<200ms) |
| **Cumulative Layout Shift (CLS)** | **0.000** | **≤ 0.05** | 🟢 Perfect |
| **Speed Index** | **6.3s** | **≤ 3.0s** | ❌ Slow Visual Progression |
| **Interaction to Next Paint (INP)** | **< 100ms** | **≤ 200ms** | 🟢 Excellent |

---

## 2. Deep Dive: LCP Subparts Breakdown & Root Cause

From the performance trace analysis:

| LCP Phase | Timing (ms) | Percentage of LCP | Analysis / Verdict |
| :--- | :--- | :--- | :--- |
| **Time to First Byte (TTFB)** | 704.8 ms | 13% | Acceptable edge hosting response |
| **Resource Load Delay** | 467.0 ms | 9% | Low delay |
| **Resource Load Duration** | 208.4 ms | 4% | Very fast image download |
| **Element Render Delay** | **3,924.6 ms** | **74%** | 🚨 **PRIMARY BOTTLENECK (Render Delay)** |

### Actual LCP Element Identified:
```html
<img src="https://sanmatijournal.in/images/hero-bg-mobile.webp" 
     alt="" 
     fetchpriority="high" 
     class="absolute inset-0 w-full h-full object-cover object-center opacity-15 mix-blend-multiply scale-105">
```
- **Bounding Box:** 433px × 1479px (Covers the full mobile hero viewport)
- **Root Cause of 3.92s Render Delay:**
  1. The decorative hero background is marked as an `<img>` element inside the React `<Hero>` component.
  2. Because the application hydrates on the client side, the browser cannot render this `<img>` until **all JavaScript bundles** (`vendor.js`, `motion.js`, `MainLayout.js`, `Home.js`) are fully downloaded, parsed, and executed.
  3. Furthermore, the `<picture>` tag in `Hero.jsx` had fallback `src="/images/hero-bg.webp"` (166KB), causing browsers to initiate downloads for both desktop and mobile hero images.

---

## 3. Bottleneck Analysis by Category

### 3.1 JavaScript Bottlenecks (Payload & Main Thread Execution)
- **Framer-Motion Ingestion on Every Route:** `MainLayout.jsx`, `Navbar.jsx`, `CustomCursor.jsx`, `LiveStats.jsx`, `TrustCredentials.jsx`, and `ScrollReveal.jsx` all eagerly imported `framer-motion` (44KB gzip / 138KB unminified).
- **Duplicate Third-Party Analytics:**
  - `https://www.googletagmanager.com/gtag/js?id=G-5HWBXKRHF4` (185KB)
  - `https://www.googletagmanager.com/gtag/js?id=G-5HWBXKRHF4&cx=c&gtm=4e68c1` (185KB - via GTM)
  - `https://www.googletagmanager.com/gtm.js?id=GTM-K4FNSFHK` (113KB)
  - Result: Over 480KB of third-party analytics scripts evaluated on the main thread.
- **Main Thread Evaluation Cost:** Total script evaluation = 693.3ms + script parse/compile = 146.3ms.

### 3.2 Font & CSS Bottlenecks
- **External Google Fonts Roundtrips:** `app.blade.php` initiates external requests to `fonts.googleapis.com` and `fonts.gstatic.com` for multiple weights of Inter and Space Grotesk.
- **Render-Blocking Stylesheet:** `app-C3Jvdup5.css` (25.7KB) blocks initial render before FCP.

### 3.3 Image Bottlenecks
- **Hero Image Discovery:** Hero background loaded via React rather than pure CSS / immediate HTML background pattern.
- **Unoptimized Editorial Images:** Sub-pages contain images such as `Prof. Prahlad joshi.jpeg` (121.4KB uncompressed JPEG) instead of WebP variants.
- **Redundant Logo Downloads:** `logo.jpg` (115KB) and `logo.webp` (60.5KB) both downloaded on first visit.

---

## 4. Prioritized Engineering Action Plan

1. **LCP Optimization (Phase 2):**
   - Shift decorative hero background to lightweight CSS styling or pre-rendered element.
   - Promote primary H1 text ("SANMATI SPECTRUM OF KNOWLEDGE & EMERGING DISCOURSE") as the primary LCP target with optimized web font rendering.
2. **JavaScript Decoupling (Phase 4):**
   - Remove `framer-motion` from `MainLayout`, `Navbar`, `CustomCursor`, `ScrollReveal`, `TrustCredentials`, `LiveStats`, `LatestIssueShowcase`, and `LatestPapersSection`.
   - Replace with hardware-accelerated CSS transitions (`transition-all`, Tailwind transforms).
   - Lazy-load secondary modals (`AiFeaturesModal`, `SmartSearchModal`).
3. **Analytics Consolidation (Phase 5):**
   - Eliminate duplicate GA4 initialization while preserving all 8 custom events (`page_view`, `article_view`, `blog_view`, `file_download`, `submission_started`, `submission_step_completed`, `manuscript_uploaded`, `submission_completed`).
4. **Font Optimization (Phase 7):**
   - Self-host core WOFF2 fonts with `font-display: swap` or optimize Google Fonts preconnect with single consolidated request.
5. **Image Modernization (Phase 3):**
   - Serve WebP variants for all team and editorial imagery with explicit aspect ratios and `loading="lazy"` below the fold.
