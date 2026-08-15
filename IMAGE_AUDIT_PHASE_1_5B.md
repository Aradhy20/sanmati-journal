# Sanmati Journal — IMAGE AUDIT (Phase 1.5B Verified)

| Page / Component | Image File | Purpose | Source | License | Alt Text | Width | Height | Loading | LCP? |
|---|---|---|---|---|---|---|---|---|---|
| **Global / All Pages** | `/images/seo/sanmati-journal-og.webp` | Open Graph Social Preview Card (Default) | Proprietary Brand Identity | Proprietary | "Sanmati Spectrum of Knowledge & Emerging Discourse" | 1200 | 630 | `eager` (crawler) | No |
| **Homepage** | `/images/hero-bg.webp` | Scholarly Backdrop Blend | Sanmati Library Assets | Proprietary | `""` (decorative blend) | 1920 | 1080 | `eager` / `high` | Yes (Background) |
| **Archive** (`/archive`) | `/images/archive/vol1_official_cover.webp` | Volume 1 Issue 1 Official Issue Cover | Editorial Directorate | Proprietary | "Sanmati Spectrum Volume 1 Issue 1 (January–March 2026) Official Issue Cover" | 96 | 128 | `lazy` | No |
| **Editorial Board** (`/editorial-team/editorial-board`) | `/images/team/dr-kalpana-jain.jpeg` | Board Member Portrait | Verified Member Photo | Authorized | "Dr. Kalpna Jain - Editorial Board Member" | 160 | 160 | `lazy` | No |
| **Editorial Board** (`/editorial-team/editorial-board`) | `/images/library-bg.webp` | Governance Quote Card Backdrop | Sanmati Academic Assets | Proprietary | "Editorial Board Assembly" | 640 | 480 | `lazy` | No |
| **Advisory Board** (`/editorial-team/advisory-board`) | `/images/library-bg.webp` | Advisory Quote Card Backdrop | Sanmati Academic Assets | Proprietary | "Advisory Board Counsel" | 640 | 480 | `lazy` | No |
| **Blog Index** (`/blog`) | `/images/blog/how-to-choose-multidisciplinary-research-journal.webp` | Card 1 Featured Graphic | Custom Editorial Design | Open Access | "How to Choose a Multidisciplinary Research Journal: Decision Framework" | 800 | 450 | `lazy` | No |
| **Blog Index** (`/blog`) | `/images/blog/research-paper-submission-checklist-postgraduate-students.webp` | Card 2 Featured Graphic | Custom Editorial Design | Open Access | "Research Paper Submission Checklist for Postgraduate Students" | 800 | 450 | `lazy` | No |
| **Blog Index** (`/blog`) | `/images/blog/apa-7-ieee-citation-examples-indian-researchers.webp` | Card 3 Featured Graphic | Custom Editorial Design | Open Access | "APA 7 & IEEE Citation Examples: Guide for Indian Researchers" | 800 | 450 | `lazy` | No |
| **Blog Index** (`/blog`) | `/images/blog/how-to-publish-research-paper-in-india.webp` | Card 4 Featured Graphic | Custom Editorial Design | Open Access | "How to Publish Research Paper in India: Complete Author Guide" | 800 | 450 | `lazy` | No |
| **Blog Index** (`/blog`) | `/images/blog/ugc-care-journal-guidelines-and-ethics.webp` | Card 5 Featured Graphic | Custom Editorial Design | Open Access | "UGC CARE Journal Guidelines & Academic Ethics Explained" | 800 | 450 | `lazy` | No |
| **Blog Index** (`/blog`) | `/images/blog/apa-7th-vs-ieee-citation-styles-guide.webp` | Card 6 Featured Graphic | Custom Editorial Design | Open Access | "APA 7th Edition vs IEEE Citation Styles: Complete Reference Guide" | 800 | 450 | `lazy` | No |
| **Blog Index** (`/blog`) | `/images/blog/scopus-vs-web-of-science-indexing-metrics.webp` | Card 7 Featured Graphic | Custom Editorial Design | Open Access | "Scopus vs Web of Science vs Google Scholar: Indexing Metrics" | 800 | 450 | `lazy` | No |
| **Blog Post Page** (`/blog/:slug`) | Dynamic `/images/blog/:slug.webp` | Main Article Header Hero | Custom Editorial Design | Open Access | Dynamic Article Title | 800 | 450 | `eager` / `high` | Yes (Article) |
| **About Foundation** (`/about-foundation`) | `/images/saraswati.webp` | Foundation Cultural Emblem | Foundation Archives | Proprietary | "Foundation Activity" | 400 | 400 | `lazy` | No |
| **Contact** (`/contact`) | `/images/contact/editorial_office.webp` | Editorial Office Photo | Office Asset | Proprietary | "Sanmati Editorial Office" | 600 | 400 | `lazy` | No |
| **Contact** (`/contact`) | `/images/contact/dr_namrta_jain_avatar.webp` | Managing Editor Avatar | Member Photo | Authorized | "Dr. Namrata Jain" | 120 | 120 | `lazy` | No |

---

## Technical Performance Highlights
1. **Zero External Hotlinks:** All assets are locally hosted in `public_html/images/`.
2. **Next-Gen Format:** Modern WebP format with native PNG/JPEG fallbacks.
3. **Explicit Dimensions:** All images carry explicit aspect ratios or `width`/`height` attributes to prevent Cumulative Layout Shift (CLS).
4. **Loading Optimization:** Critical hero/article headers use `fetchPriority="high"` while below-the-fold assets use `loading="lazy"` and `decoding="async"`.
