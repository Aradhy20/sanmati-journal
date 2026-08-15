# PHASE 2 BATCH 1 — P0 TECHNICAL SEO & INDEXING PLAN

**Base Release Commit:** `a17adb25f8472edf13930c2f64b51e30effccba8`
**Target Scope:** P0 Technical SEO & Sitemap Indexation Only
**Date:** August 2026

---

## 1. OBJECTIVES
1. **P0-1 Sitemap Completeness:** Update `SitemapController.php` to dynamically index all articles from `BlogService::getAllArticles()`, plus `/downloads`, `/publication-policy/copyright`, and `/reviewer-guidelines`. Zero duplicate URLs, 100% valid XML.
2. **P0-2 Initial Server-Side HTML Metadata:** Ensure Laravel backend passes exact page-level SEO attributes (`title`, `description`, `canonical`, `og:*`, `twitter:*`, and `citation_*` for articles) directly into `app.blade.php` before JavaScript hydration.

---

## 2. FILES TO MODIFY
* `sanmati-core/app/Http/Controllers/SitemapController.php`: Add dynamic blog articles and missing public static routes.
* `sanmati-core/app/Http/Middleware/HandleInertiaRequests.php` & `sanmati-core/resources/views/app.blade.php`: Connect server-side metadata resolution so static HTML head contains page-specific title, description, and canonical data.
* `sanmati-core/app/Http/Controllers/BlogController.php` & `sanmati-core/app/Http/Controllers/JournalController.php`: Ensure `$meta` and paper data are passed properly to Inertia root view.

---

## 3. EXPECTED BEHAVIOR
* `GET /sitemap.xml`: Returns HTTP 200 with ~132 total valid URLs (81 research articles + 7 blog articles + 44 static/subject area routes).
* `curl -s /blog/how-to-publish-research-paper-in-india`: Initial raw HTML contains exact article title, description, canonical, and OG tags without needing client-side JS execution.
* `curl -s /article/63`: Initial raw HTML contains exact paper title, author, description, canonical, OG, and Highwire Press Google Scholar citation tags.
* 100% PHPUnit tests (188 tests, 353 assertions) pass.
* Zero changes to reviewer, author, or editor workflows.

---

## 4. ROLLBACK APPROACH
If any regression occurs, reset to base commit `a17adb25f8472edf13930c2f64b51e30effccba8` with `git reset --hard a17adb25f8472edf13930c2f64b51e30effccba8`.
