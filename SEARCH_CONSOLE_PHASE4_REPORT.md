# Google Search Console Phase 4 Operations & Priority Indexing Report

**Journal:** Sanmati Spectrum of Knowledge & Emerging Discourse (ISSN 3108-1819)  
**Domain:** `sanmatijournal.in`  
**Sitemap URL:** `https://sanmatijournal.in/sitemap.xml`  
**Status:** IMPLEMENTATION COMPLETE — READY FOR GOOGLE SEARCH CONSOLE VERIFICATION & CRAWL

---

## 1. Google Search Console Setup & Ownership Verification

> [!IMPORTANT]
> **HUMAN ACTION REQUIRED**: Verification requires accessing the Google Search Console admin dashboard and Hostinger DNS zone editor. Follow the step-by-step instructions below.

### Step-by-Step Domain Verification Instructions:
1. Navigate to [Google Search Console](https://search.google.com/search-console).
2. Click **Add Property** (top-left property selector).
3. Select the **Domain** property type (covers `https://`, `http://`, `www.`, and all subdomains).
4. Enter the domain: `sanmatijournal.in` and click **Continue**.
5. Google will display a unique DNS TXT verification record:
   ```text
   google-site-verification=<UNIQUE_GOOGLE_TOKEN_PROVIDED_IN_DASHBOARD>
   ```
6. Log into **Hostinger hPanel**:
   - Go to **Domains** -> `sanmatijournal.in` -> **DNS / Name Servers**.
   - Under **Manage DNS records**, create a new record:
     - **Type:** `TXT`
     - **Name / Host:** `@` (or leave blank if default)
     - **TXT Value:** Paste the exact `google-site-verification=...` string from Google.
     - **TTL:** `14400` (or default 3600).
   - Click **Add Record**.
7. Return to Google Search Console and click **Verify**.

---

## 2. Sitemap Submission Protocol

Once Domain property verification is confirmed:
1. In the Google Search Console sidebar, navigate to **Indexing** -> **Sitemaps**.
2. In the *Add a new sitemap* field, enter:
   ```text
   sitemap.xml
   ```
3. Click **Submit**.
4. Verify that the sitemap status shows **Success** and displays all discovered URLs (approx. 50+ URLs including static pages, programmatic subject areas, blog guides, and published papers).

### Sitemap Verification Matrix
| Property | Expected Value | Verification Method |
| :--- | :--- | :--- |
| **Sitemap URL** | `https://sanmatijournal.in/sitemap.xml` | `curl -I https://sanmatijournal.in/sitemap.xml` (HTTP 200) |
| **Content-Type** | `application/xml` | Verified |
| **Root Tag** | `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">` | Verified |
| **Image Tags** | Included on all articles and blog posts | Verified |

---

## 3. Priority URL Indexing Queue

After submitting the sitemap, use the **URL Inspection** tool in Search Console to inspect and request priority indexing for the following high-value target pages:

### Priority Queue 1: Commercial & Author Conversion Landing Pages (Immediate)
1. `https://sanmatijournal.in/` (Homepage — Core Journal Entity)
2. `https://sanmatijournal.in/submission-guidelines/call-for-papers` (Call for Papers 2026 Portal)
3. `https://sanmatijournal.in/submission-guidelines` (Author Submission Guidelines)
4. `https://sanmatijournal.in/submission-guidelines/review-process` (Peer Review Policy)
5. `https://sanmatijournal.in/submission-guidelines/areas` (Subject Areas Hub)
6. `https://sanmatijournal.in/downloads` (Author Toolkit & Word Template Hub)

### Priority Queue 2: Academic Authority & Information Pages
7. `https://sanmatijournal.in/about-journal` (Aims, Scope & Governance)
8. `https://sanmatijournal.in/archive` (Published Issues Archive)
9. `https://sanmatijournal.in/current-issue` (Latest Issue Volume 1 Issue 1)
10. `https://sanmatijournal.in/publication-policy/ethics` (COPE Ethics Statement)
11. `https://sanmatijournal.in/editorial-team/editors` (Editorial Leadership & Board)

### Priority Queue 3: High-Intent Researcher Guides (Organic Discovery)
12. `https://sanmatijournal.in/blog` (Academic Knowledge Base Hub)
13. `https://sanmatijournal.in/blog/how-to-publish-research-paper-in-india` (Comprehensive Roadmap)
14. `https://sanmatijournal.in/blog/research-paper-formatting-guide-word-template` (Formatting Specifications)
15. `https://sanmatijournal.in/blog/how-to-write-an-academic-abstract-with-examples` (Abstract Writing Guide)
16. `https://sanmatijournal.in/blog/literature-review-writing-guide-for-researchers` (Synthesis Matrix Guide)
17. `https://sanmatijournal.in/blog/how-to-avoid-plagiarism-in-academic-research` (Plagiarism & Ethics)
18. `https://sanmatijournal.in/blog/how-double-blind-peer-review-works-author-guide` (Peer Review Workflow)
19. `https://sanmatijournal.in/blog/how-to-choose-multidisciplinary-research-journal` (Decision Framework)
20. `https://sanmatijournal.in/blog/research-paper-submission-checklist-postgraduate-students` (12-Point Checklist)
21. `https://sanmatijournal.in/blog/apa-7-ieee-citation-examples-indian-researchers` (Citation Cheat Sheet)
22. `https://sanmatijournal.in/blog/ugc-care-journal-guidelines-and-ethics` (UGC Standards)
23. `https://sanmatijournal.in/blog/scopus-vs-web-of-science-indexing-metrics` (Indexing Metrics)

### Priority Queue 4: Published Scholarly Articles (Google Scholar Discovery)
24. `https://sanmatijournal.in/article/81` (Inaugural Issue Complete Volume)
25. `https://sanmatijournal.in/article/47` (Individual Research Article)

---

## 4. URL Inspection Triage & Remediation Matrix

When inspecting URLs in Google Search Console, classify issues according to the matrix below:

| Status in GSC | Root Cause Analysis | Corrective Action |
| :--- | :--- | :--- |
| **URL is on Google** | Page is indexed and eligible for search results | Monitor weekly impressions and CTR in `SEO_WEEKLY_DASHBOARD.md`. |
| **Crawled — currently not indexed** | Google crawled the page but decided not to index yet | Check content depth, ensure internal links point to it from `/blog` and `/`, ensure schema JSON-LD is valid. |
| **Discovered — currently not indexed** | Google found URL in sitemap but has not scheduled crawl | Normal for new pages. Maintain internal links. Do not spam indexing requests. |
| **Page with redirect** | URL redirects to another version | Verify canonical tag points to final HTTPS non-trailing slash URL. |
| **Duplicate without user-selected canonical** | Google detected duplicate content | Verify `<link rel="canonical" href="...">` is present in `<head>`. |
| **Excluded by ‘noindex’ tag** | robots meta contains noindex | Ensure `robots` meta tag has `index, follow`. (Verified on Sanmati). |
| **Blocked by robots.txt** | Disallowed path in `robots.txt` | Check `https://sanmatijournal.in/robots.txt`. (Only private paths like `/admin`, `/app/` are blocked). |

---

## 5. Monitoring Cadence
- **Weekly:** Review Coverage and Page Indexing reports in GSC.
- **Monthly:** Audit new paper URLs and update priority indexing queue.
