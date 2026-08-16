# Google Analytics 4 (GA4) & GTM Phase 4 Implementation & Audit Report

**Journal:** Sanmati Spectrum of Knowledge & Emerging Discourse (ISSN 3108-1819)  
**GA4 Measurement ID:** `G-5HWBXKRHF4`  
**Google Tag Manager ID:** `GTM-K4FNSFHK`  
**Status:** CODEBASE INSTRUMENTED — READY FOR GA4 ADMIN KEY EVENT CONFIGURATION

---

## 1. Executive Summary & Verification

GA4 and Google Tag Manager are fully integrated into the master layout ([app.blade.php](file:///Users/aradhyjain/Library/CloudStorage/GoogleDrive-jainaradhy01@gmail.com/My%20Drive/sanmati-journal/sanmati-core/resources/views/app.blade.php)) using a performance-optimized, non-blocking deferred loading pattern. The client-side React application emits structured, privacy-preserving academic lifecycle events to `window.dataLayer`.

---

## 2. Event Dictionary & Parameter Specification

All client-side events are strictly scoped to operational analytics. **Zero Personally Identifiable Information (PII) is transmitted.**

| Event Name | Trigger Location | Parameters Sent | Purpose |
| :--- | :--- | :--- | :--- |
| `page_view` | Every page transition | `page_location`, `page_title`, `page_referrer` | Track overall traffic, bounce rates, and navigation paths |
| `article_view` | `/article/{id}` | `article_id`, `article_title`, `journal_volume` | Track reader engagement and scholarly paper discovery |
| `blog_view` | `/blog/{slug}` | `blog_slug`, `blog_category` | Measure organic interest in academic writing guides |
| `file_download` | `/downloads`, `/article/{id}`, `/blog/*` | `file_name`, `file_type`, `portal_source` | Track template and PDF downloads (Author Toolkit usage) |
| `submission_started` | `/submission-guidelines/call-for-papers` | `portal_source` | Top of submission funnel (Author initiated process) |
| `submission_step_completed` | Step 1, Step 2, Step 3 in Submission Wizard | `step` (`1`, `2`, `3`) | Measure step-by-step submission wizard progression |
| `manuscript_uploaded` | Step 2 in Submission Wizard | `file_type` (`docx`, `pdf`, `doc`) | Micro-conversion: author uploaded draft manuscript |
| `ai_precheck_started` | Step 3 in Submission Wizard | *None* | Track author utilization of formatting pre-check tool |
| `ai_precheck_completed` | Step 3 in Submission Wizard | `checks_count` | Measure diagnostic completion rate |
| `submission_completed` | Step 4 Submission Success | `tracking_id` (e.g. `SJ-ABC123`) | **Primary Key Event**: Formal manuscript registration |
| `submission_failed` | Submission Wizard Error Handler | *None* | Identify input or network friction points |

---

## 3. Strict Privacy & Anti-PII Compliance

In compliance with academic privacy norms, GDPR, and Google Analytics policies, the following fields are **strictly prohibited and never sent** to GA4:
- ❌ Author Legal Names
- ❌ Author Email Addresses
- ❌ Author Contact Phone Numbers
- ❌ Full Text Manuscript Contents
- ❌ Reviewer Identities or Comments
- ❌ Database Credentials, API Tokens, or Session Keys

---

## 4. GA4 Key Events Setup (Human Action Required)

> [!IMPORTANT]
> **HUMAN ACTION REQUIRED**: In Google Analytics 4, mark the critical business conversions as **Key Events** (formerly Conversion Events).

### Step-by-Step Instructions for GA4 Administrator:
1. Log into [Google Analytics](https://analytics.google.com/) using the account managing `G-5HWBXKRHF4`.
2. Select property: **Sanmati Journal**.
3. In the lower-left navigation, click **Admin** (Gear icon).
4. Under *Data display*, click **Events**.
5. Locate or create the following events and toggle the **Mark as key event** switch to **ON**:
   - `submission_completed` (**Priority 1 — Primary Conversion**)
   - `manuscript_uploaded` (**Priority 2 — High-Intent Micro-Conversion**)
   - `file_download` (**Priority 3 — Author Toolkit Download**)
   - `submission_started` (**Priority 4 — Funnel Entry**)

### Custom Dimensions Setup (Admin -> Data display -> Custom definitions):
Create the following Custom Dimensions (Scope: **Event**):
- `article_title` (Event parameter: `article_title`)
- `article_id` (Event parameter: `article_id`)
- `blog_slug` (Event parameter: `blog_slug`)
- `blog_category` (Event parameter: `blog_category`)
- `file_name` (Event parameter: `file_name`)
- `file_type` (Event parameter: `file_type`)
- `portal_source` (Event parameter: `portal_source`)
- `step` (Event parameter: `step`)

---

## 5. Researcher Acquisition & Submission Measurement Funnel

In GA4 **Explore** -> **Funnel Exploration**, construct the 5-stage acquisition funnel:

```text
Stage 1: Organic Discovery
   ├── Land on Academic Guide (/blog/*) or Published Paper (/article/*)
   └── Event: page_view / blog_view / article_view
       ↓
Stage 2: Resource Engagement
   ├── Download Author Template (.docx) or Checklist (.pdf)
   └── Event: file_download
       ↓
Stage 3: Submission Entry
   ├── Navigate to Call for Papers Portal
   └── Event: submission_started
       ↓
Stage 4: Manuscript Attachment
   ├── Complete Step 1 & Step 2, upload paper
   └── Event: manuscript_uploaded (Step 2 completed)
       ↓
Stage 5: Official Submission
   ├── Consent declaration signed & tracking ID generated
   └── Event: submission_completed (Key Event)
```

---

## 6. Weekly Metrics to Monitor
- **Organic Landing Page Conversion Rate:** `(Submissions Started / Organic Blog Visitors) * 100`
- **Funnel Drop-off Rate:** Step 1 -> Step 2 -> Step 3 -> Completed
- **Top Downloaded Toolkits:** MS Word Template vs Submission Checklist vs Citation Guide
- **Top Converting Acquisition Sources:** Organic Search vs LinkedIn vs WhatsApp vs Academic Outreach
