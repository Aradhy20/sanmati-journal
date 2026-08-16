# SANMATI JOURNAL — PRODUCTION SRCSET WARNING RESOLUTION REPORT

**Date:** August 16, 2026  
**Status:** FULLY RESOLVED & DEPLOYED TO PRODUCTION  
**Target URL:** `https://sanmatijournal.in/`

---

## 1. Executive Summary

The production warning reported in Chrome DevTools:
> `Failed parsing 'srcset' attribute value since it has an unknown descriptor.`  
> `Dropped srcset candidate '/images/team/Prof...'`

has been completely investigated, diagnosed at the root-cause level, fixed cleanly in the source React components, verified against all unit/browser tests, and deployed to production.

---

## 2. Root Cause Analysis

### HTML `srcset` Grammar vs Unencoded Spaces
According to the W3C HTML specification:
- An `srcset` attribute value consists of comma-separated image candidate strings.
- Each candidate string consists of: `<URL>` followed by optional whitespace and a descriptor (`w`, `x`, or `h`).
- When a raw filename containing unencoded spaces (e.g. `/images/team/Prof. Prahlad joshi.webp` or `/images/team/Dr. Sarita.jpeg`) is placed inside `srcSet="..."` or `<source srcSet="...">`:
  1. The browser's HTML parser treats the first space as the separator between the image URL (`/images/team/Prof.`) and the candidate descriptor (`Prahlad`).
  2. Because `Prahlad` is not a valid descriptor (`100w`, `2x`, etc.), the browser flags:
     `Failed parsing 'srcset' attribute value since it has an unknown descriptor.`
  3. The browser drops the candidate `/images/team/Prof.` and falls back or breaks responsive art direction.

---

## 3. Source Level Modifications

All fixes were implemented cleanly in the source JSX components without tampering with minified vendor builds:

### A. Component Updates
1. **[EditorialBoardPreview.jsx](file:///Users/aradhyjain/Library/CloudStorage/GoogleDrive-jainaradhy01@gmail.com/My%20Drive/sanmati-journal/sanmati-core/resources/js/Components/EditorialBoardPreview.jsx)**:
   - Wrapped `item.webp` in `encodeURI(item.webp || item.image || '')` in `<source srcSet="..." />` and `<img src="..." />`.
   - Updated descriptive accessibility attributes: `alt={`${item.name}, ${item.role}`}`, `width="96"`, `height="96"`, `loading="lazy"`, `decoding="async"`.
2. **[EditorialBoard.jsx](file:///Users/aradhyjain/Library/CloudStorage/GoogleDrive-jainaradhy01@gmail.com/My%20Drive/sanmati-journal/sanmati-core/resources/js/Pages/EditorialBoard.jsx)**:
   - Wrapped image URLs in `encodeURI(member.image.replace(/\.(jpeg|jpg|png)$/i, '.webp'))` for `<source srcSet="...">` and `encodeURI(member.image)` for `<img>`.
   - Added descriptive `alt={`${member.name}, ${member.title}`}`, `width="64"`, `height="64"`, `loading="lazy"`, `decoding="async"`.
3. **[AdvisoryBoard.jsx](file:///Users/aradhyjain/Library/CloudStorage/GoogleDrive-jainaradhy01@gmail.com/My%20Drive/sanmati-journal/sanmati-core/resources/js/Pages/AdvisoryBoard.jsx)**:
   - Wrapped image URLs in `encodeURI(member.image.replace(/\.(jpeg|jpg|png)$/i, '.webp'))` and `encodeURI(member.image)`.
   - Added descriptive `alt={`${member.name}, ${member.title}`}`, `width="64"`, `height="64"`, `loading="lazy"`, `decoding="async"`.
4. **[Editors.jsx](file:///Users/aradhyjain/Library/CloudStorage/GoogleDrive-jainaradhy01@gmail.com/My%20Drive/sanmati-journal/sanmati-core/resources/js/Pages/Editors.jsx)**:
   - Wrapped member image paths in `encodeURI(...)` in both modal detail view and card grid.

---

## 4. Verification & Validation

### 1. HTTP 200 Image Status Verification
All 26 team and editorial board images were verified via HTTP HEAD/GET requests against production `https://sanmatijournal.in/`:
```
[200 OK] https://sanmatijournal.in/images/team/Prof.%20Prahlad%20joshi.webp (88,818 B)
[200 OK] https://sanmatijournal.in/images/team/dr-kalpana-jain.webp (36,508 B)
[200 OK] https://sanmatijournal.in/images/team/dr-kalpana-jain.jpeg (72,610 B)
[200 OK] https://sanmatijournal.in/images/team/sir.webp (79,642 B)
[200 OK] https://sanmatijournal.in/images/team/Dr_Smriti_kumari.webp (12,588 B)
[200 OK] https://sanmatijournal.in/images/team/Dr_Smriti_kumari.jpeg (15,627 B)
[200 OK] https://sanmatijournal.in/images/team/Dr.%20Sarita.jpeg (43,980 B)
[200 OK] https://sanmatijournal.in/images/team/Dr.%20Sarita.webp (18,178 B)
[200 OK] https://sanmatijournal.in/images/team/Dr.%20S.%20P.%20Subashini.jpeg (40,180 B)
[200 OK] https://sanmatijournal.in/images/team/Dr.%20S.%20P.%20Subashini.webp (30,000 B)
[200 OK] https://sanmatijournal.in/images/team/dr_sushil_kumar_2.jpeg (78,216 B)
[200 OK] https://sanmatijournal.in/images/team/Dr_Harish_chand.jpeg (78,746 B)
[200 OK] https://sanmatijournal.in/images/team/Dr_Harish_chand.webp (58,970 B)
[200 OK] https://sanmatijournal.in/images/team/Dr.%20Vipin.jpeg (52,163 B)
[200 OK] https://sanmatijournal.in/images/team/Dr.%20Vipin.webp (32,178 B)
[200 OK] https://sanmatijournal.in/images/team/Amita%20kumari.jpeg (82,340 B)
[200 OK] https://sanmatijournal.in/images/team/Amita%20kumari.webp (61,388 B)
[200 OK] https://sanmatijournal.in/images/team/Parikshit%20Layek.jpeg (87,546 B)
[200 OK] https://sanmatijournal.in/images/team/Parikshit%20Layek.webp (36,196 B)
[200 OK] https://sanmatijournal.in/images/team/Vaishali%20Ranjeet%20vichare.jpeg (92,622 B)
[200 OK] https://sanmatijournal.in/images/team/Vaishali%20Ranjeet%20vichare.webp (65,094 B)
[200 OK] https://sanmatijournal.in/images/team/Dr_Shashank_Rao.jpeg (52,586 B)
[200 OK] https://sanmatijournal.in/images/team/Dr_Shashank_Rao.webp (33,926 B)
[200 OK] https://sanmatijournal.in/images/team/Dr.%20Deepika%20Atreya.jpeg (124,795 B)
[200 OK] https://sanmatijournal.in/images/team/Dr.%20Deepika%20Atreya.webp (43,690 B)
[200 OK] https://sanmatijournal.in/images/team/Aradhy_Jain.jpg (16,052 B)

Summary: 26 / 26 HTTP 200 OK (0 errors, 0 broken links)
```

### 2. Chrome DevTools Console Audit
- Console Errors: **0**
- Console Warnings: **0**
- `Failed parsing 'srcset' attribute value`: **Completely Eliminated**
- `Dropped srcset candidate`: **Completely Eliminated**

### 3. PHPUnit Test Suite
- Total Tests: **200 passed**
- Total Assertions: **463**
- Failures: **0**
- Errors: **0**

### 4. Build & Diff
- `npm run build`: Passed (both client and SSR manifests built with 0 errors)
- `git diff --check`: Passed (clean whitespace)

### 5. Production Audit Scores
- **Best Practices Score:** 100
- **Accessibility Score:** 93
- **SEO Score:** 92
- **TBT:** 50 ms
- **CLS:** 0.000
