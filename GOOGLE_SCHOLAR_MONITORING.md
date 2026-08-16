# Google Scholar Indexing & Technical Readiness Monitoring Report

**Journal:** Sanmati Spectrum of Knowledge & Emerging Discourse (ISSN 3108-1819)  
**Publisher:** Sanmati Spectrum of Knowledge & Emerging Discourse  
**License:** Creative Commons Attribution 4.0 International (CC-BY 4.0)  
**Status:** **TECHNICALLY READY / WAITING FOR CRAWL**

---

## 1. Technical Readiness Audit for Google Scholar

Google Scholar uses automated web crawlers that look for specific academic bibliographic meta tags (Highwire Press and Dublin Core standards) in the HTML `<head>` and a direct downloadable PDF file link.

### 1.1 Highwire Press Meta Tags Implementation (Verified on Live Production)
Every article at `https://sanmatijournal.in/article/{id}` renders complete Highwire Press tags:

| Highwire Press Meta Tag | Example Live Output | Purpose / Standard |
| :--- | :--- | :--- |
| `citation_title` | `Sanmati Spectrum of Knowledge & Emerging Discourse (January-March, 2026)` | Exact article title |
| `citation_author` | `Dr Namrata Jain`, `Dr. Ratnesh Kumar Jain` | Individual author tags per contributor |
| `citation_journal_title` | `Sanmati Spectrum of Knowledge & Emerging Discourse` | Full official journal title |
| `citation_issn` | `3108-1819` | Official ISSN registered with ISSN International Centre |
| `citation_publication_date`| `2026/06/04` or `2026` | Standard YYYY/MM/DD or YYYY format |
| `citation_pdf_url` | `https://sanmatijournal.in/download/paper/81` | Direct downloadable PDF link for full-text indexing |
| `citation_doi` | `10.5281/zenodo.19710093` | Persistent Digital Object Identifier |
| `citation_keywords` | `Inaugural Issue, Multidisciplinary Research Journal` | Subject index keywords |
| `citation_volume` | `1` | Journal volume number |
| `citation_issue` | `1` | Issue number |

### 1.2 Dublin Core Meta Tags Implementation
- `DC.title`
- `DC.creator`
- `DC.date`
- `DC.publisher`
- `DC.format` (`application/pdf`)
- `DC.language` (`en`)
- `DC.identifier` (`https://doi.org/...`)

### 1.3 Schema.org ScholarlyArticle JSON-LD
In addition to Highwire Press tags, each paper page embeds structured `ScholarlyArticle` JSON-LD:
```json
{
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "headline": "...",
  "name": "...",
  "abstract": "...",
  "author": [{"@type": "Person", "name": "..."}],
  "datePublished": "2026-06-04",
  "isAccessibleForFree": true,
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "isPartOf": {
    "@type": "Periodical",
    "name": "Sanmati Spectrum of Knowledge & Emerging Discourse",
    "issn": "3108-1819"
  },
  "url": "https://sanmatijournal.in/article/81"
}
```

---

## 2. Full-Text PDF Crawlability & Privacy Verification

- **Direct Download Access:** The `citation_pdf_url` endpoint (`/download/paper/{id}`) serves the complete binary PDF stream with `Content-Disposition: inline/attachment` and standard `application/pdf` MIME type without requiring CAPTCHA, login, or paywall.
- **Robots.txt Open Access:** `robots.txt` explicitly allows crawlers to access `/download/` and `/article/`.
- **Zero Privacy Leakage:** Reviewer identities, internal reviewer scores, draft remarks, and administrative notes are strictly excluded from the public HTML, metadata, and PDF download stream.

---

## 3. Indexing Status & Expectations

> [!NOTE]
> **INDEXING STATUS POLICY**: Having technically compliant metadata does **NOT** mean Google Scholar has indexed the papers yet. Google Scholar's crawler operates on an independent, non-instantaneous schedule (typically 2 to 8 weeks after initial discovery via sitemap or academic links).
> 
> Current Status: **TECHNICALLY READY / WAITING FOR CRAWL**

---

## 4. How to Verify Google Scholar Indexing (Monitoring Protocol)

Periodically perform the following searches on [Google Scholar](https://scholar.google.com/):

### Search 1: Journal Source Search
```text
source:"Sanmati Spectrum of Knowledge"
```
*Expected Result when indexed:* Lists all indexed articles with citation counts and author profiles.

### Search 2: Exact Title Search
```text
"Sanmati Spectrum of Knowledge & Emerging Discourse (January-March, 2026)"
```
*Expected Result when indexed:* Direct snippet with [PDF] link pointing to `sanmatijournal.in`.

### Search 3: Author-Specific Search
```text
author:"Namrata Jain" "Sanmati Spectrum"
```

---

## 5. Acceleration Tactics for Authors
1. **Google Scholar Author Profiles:** Authors of published papers should claim or create their profile on [Google Scholar Citations](https://scholar.google.com/citations) and add their published Sanmati paper.
2. **ResearchGate & Academia.edu:** Authors should upload their published Open Access paper (CC-BY 4.0) with DOI linking back to `https://sanmatijournal.in/article/{id}`.
3. **Institutional Repositories:** Submit the paper to university institutional repositories (DSpace, EPrints) with official citation tags.
