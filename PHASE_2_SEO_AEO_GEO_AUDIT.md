# SANMATI JOURNAL — PHASE 2 ADVANCED SEO + AEO + GEO + RESEARCHER DISCOVERY AUDIT

**Domain:** `https://sanmatijournal.in`
**Journal:** Sanmati Spectrum of Knowledge & Emerging Discourse
**ISSN:** 3108-1819
**Audit Date:** August 2026
**Auditor:** Senior Technical SEO & Academic Application Engineer

---

## 1. EXECUTIVE SUMMARY & SCORECARD

| Dimension | Score | Status | Primary Focus Area |
| :--- | :---: | :---: | :--- |
| **Technical SEO** | **90%** | **STRONG** | Add missing blog & policy URLs to `sitemap.xml`; enhance server-rendered static `<head>` fallback |
| **On-Page SEO** | **85%** | **GOOD** | Refine meta descriptions and H1/H2 hierarchy across secondary policy pages |
| **Article SEO & Scholarly Discovery** | **92%** | **EXCELLENT** | Google Scholar & Highwire Press meta tags active across all 81 papers; full DOI resolution |
| **Structured Data (Schema.org)** | **88%** | **STRONG** | `ScholarlyArticle`, `AboutPage`, and `Organization` active; add `FAQPage` & `Article` (Blog) |
| **AEO (Answer Engine Optimization)** | **80%** | **GOOD** | Implement 40–80 word direct answer blocks for LLM RAG/search crawlers |
| **GEO / AI Search Discoverability** | **84%** | **STRONG** | Explicit entity definition, verified ISSN, publisher attribution, and zero synthetic claims |
| **Internal Linking Architecture** | **80%** | **GOOD** | Cross-link blog posts to published papers, citation tools, and subject areas |
| **Performance & Core Web Vitals** | **82%** | **STABLE** | Desktop: 92+; Mobile: ~70 (LCP 4.1s, CLS 0.01; hero preloaded, WebP assets <764KB) |
| **Accessibility (WCAG 2.1)** | **90%** | **STRONG** | Semantic tags, high contrast, touch targets >= 44px, responsive tables |
| **Academic Conversion UX** | **86%** | **STRONG** | 3-click funnel from Article/Blog -> Guidelines -> Call for Papers -> Submit Manuscript |

---

## 2. DETAILED AUDIT FINDINGS

### A. Technical SEO & Indexability
* **Status:** PASS
* **Protocol & Redirects:** Full HTTPS enforcement; non-WWW canonical; HTTP -> HTTPS 301 redirects active.
* **Robots.txt:** Clean crawling directives (`Allow: /`, disallows private `/admin`, `/editor`, `/reviewer`, `/dashboard`).
* **Sitemap.xml:** 121 URLs indexed (81 research articles + core static pages).
  * *Audit Issue:* Missing the 7 newly added high-intent blog articles (`/blog/*`), `/downloads`, `/publication-policy/copyright`, and `/reviewer-guidelines`.
* **Server-Side Fallback `<head>`:** Blade view currently uses default metadata if `$meta` is not shared from the controller before client-side Inertia hydration.

### B. Scholarly Metadata & Google Scholar Indexing
* **Status:** EXCELLENT (92%)
* **Active Citation Tags on `/article/{id}`:**
  * `citation_title`
  * `citation_author` (Individual tag per co-author)
  * `citation_journal_title` (`Sanmati Spectrum of Knowledge & Emerging Discourse`)
  * `citation_issn` (`3108-1819`)
  * `citation_publication_date` (`YYYY/MM/DD`)
  * `citation_pdf_url` (`https://sanmatijournal.in/download/paper/{id}`)
  * `citation_doi` (Resolving CrossRef / Zenodo DOIs)
* **Schema.org ScholarlyArticle:** Fully present on all 81 article pages with `headline`, `author`, `abstract`, `isPartOf`, `identifier` (DOI), `license` (CC-BY 4.0), and `publisher`.

### C. AEO & GEO (AI / Answer Engine Visibility)
* **Entity Definition:** Journal name standardized as `"Sanmati Spectrum of Knowledge & Emerging Discourse"`, ISSN `"3108-1819"`, Publisher `"Sanmati Educational & Research Foundation"`.
* **Zero False Claims:** No unverified indexing claims (Scopus, WoS, UGC CARE, DOAJ).
* **Opportunity:** Embed structured Q&A format on key submission, fee, and review pages to trigger Google featured snippets and direct answers in Perplexity, Claude, ChatGPT Search, and Google AI Overviews.

### D. Keyword Strategy & Topic Clusters
Target high-intent academic search queries across 4 clusters:
1. **Journal Discovery:** `peer reviewed multidisciplinary research journal India`, `open access journal ISSN 3108-1819`, `international research journal crossref doi`.
2. **Submission Intent:** `submit research paper online India`, `fast peer review multidisciplinary journal`, `call for papers multidisciplinary research 2026`.
3. **Student & Scholar Intent:** `how to publish research paper in india for postgraduate students`, `research paper submission checklist`, `research paper formatting guide`.
4. **Citation & Methodology:** `apa 7th vs ieee citation style guide`, `plagiarism guidelines research paper india`.

---

## 3. PRIORITY ACTION PLAN (P0 — P3)

### Priority P0: Critical Technical & Indexing Fixes
1. **Sitemap Dynamic Blog & Policy Inclusion:** Update `SitemapController.php` to dynamically pull all articles from `BlogService::getAllArticles()` and include `/downloads`, `/publication-policy/copyright`, and `/reviewer-guidelines`.
2. **Server-Side Blade Metadata Sharing:** Ensure `HandleInertiaRequests.php` and controllers pass accurate server-rendered `<title>` and `<meta name="description">` into `app.blade.php` for search crawlers that parse static HTML prior to JavaScript hydration.

### Priority P1: High-Impact Structured Data & AEO Blocks
3. **Blog Schema.org Article Implementation:** Ensure `Blog/Show.jsx` and `BlogService` output structured Schema.org `Article` / `BlogPosting` JSON-LD with `headline`, `image`, `datePublished`, `dateModified`, `author`, and `publisher`.
4. **FAQPage Schema Integration:** Add Schema.org `FAQPage` structured data to `HomeFAQ.jsx`, `SubmissionGuidelines/Index.jsx`, and `ReviewProcess.jsx` to power rich answer snippets.
5. **Direct Answer Callouts (AEO):** Add concise 40–60 word answer boxes at the top of Submission Guidelines, Review Process, and Publication Charges.

### Priority P2: Internal Linking Graph & Academic Tools
6. **Blog-to-Paper Cross-Linking:** Embed relevant published paper citations inside each of the 7 blog articles to boost scholarly depth and internal link equity.
7. **One-Click Citation Formatter on Article Pages:** Enhance the citation section on `/article/{id}` with copyable APA 7, IEEE, MLA 9, and BibTeX snippets.
8. **Research Area Paper Feeds:** Link `/submission-guidelines/areas/{slug}` to dynamic lists of published papers within each specific field.

### Priority P3: Acquisition & Distribution (First 100 Targeted Visitors)
9. **Author Notification & Social Share Kit:** Provide published authors with pre-formatted citation cards and direct DOI links to share with their departmental faculty and institutional repositories.
10. **Editorial & Institutional Network Outreach:** Share Volume 1 Issue 1 announcement with university departments and affiliated academic research groups.
11. **GA4 Custom Academic Events:** Configure non-intrusive event listeners for `article_view`, `paper_pdf_download`, `doi_outbound_click`, and `submission_start`.

---

## 4. GOOGLE SEARCH CONSOLE SETUP GUIDE (MANUAL STEP)

To connect Google Search Console for `https://sanmatijournal.in`:
1. Navigate to [Google Search Console](https://search.google.com/search-console).
2. Choose **Domain Property** (`sanmatijournal.in`) or **URL Prefix** (`https://sanmatijournal.in`).
3. Verification Options:
   * **DNS TXT Record (Recommended):** Add the `google-site-verification=...` TXT record in Hostinger DNS Zone.
   * **HTML Meta Tag:** Add `<meta name="google-site-verification" content="...">` to `resources/views/app.blade.php`.
4. Once verified, submit sitemap URL: `https://sanmatijournal.in/sitemap.xml`.
