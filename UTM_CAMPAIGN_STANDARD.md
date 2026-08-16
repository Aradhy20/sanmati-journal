# UTM Campaign Naming & Tracking Standards

**Journal:** Sanmati Spectrum of Knowledge & Emerging Discourse (ISSN 3108-1819)  
**Applies to:** External Links, Social Dissemination, Faculty Outreach, Academic Newsletters, Print Flyers

---

## 1. UTM Parameter Standard Taxonomy

All external acquisition links pointing to `sanmatijournal.in` must adhere strictly to lowercase, snake_case conventions.

| Parameter | Required? | Accepted Values | Description / Purpose |
| :--- | :--- | :--- | :--- |
| `utm_source` | **Yes** | `linkedin`, `whatsapp`, `email`, `researchgate`, `twitter`, `conference`, `qr_flyer`, `academic_forum` | Identifies the traffic platform |
| `utm_medium` | **Yes** | `social`, `community`, `outreach`, `referral`, `print`, `newsletter` | Identifies the marketing or distribution medium |
| `utm_campaign`| **Yes** | `cfp_2026`, `author_distrib`, `toolkit_promo`, `vol1_issue1`, `citation_guide` | Identifies the strategic campaign |
| `utm_content` | No | `faculty_invite`, `phd_scholars`, `template_docx`, `checklist_pdf`, `paper_{id}`, `hero_cta` | Differentiates specific creative assets or sub-targets |

---

## 2. Standard Campaign URL Directory

### 2.1 Call for Papers 2026 Campaigns

#### Faculty Email Outreach
```text
https://sanmatijournal.in/submission-guidelines/call-for-papers?utm_source=email&utm_medium=outreach&utm_campaign=cfp_2026&utm_content=faculty_invite
```

#### WhatsApp Academic Groups Broadcast
```text
https://sanmatijournal.in/submission-guidelines/call-for-papers?utm_source=whatsapp&utm_medium=community&utm_campaign=cfp_2026&utm_content=research_group
```

#### LinkedIn Post / Page Update
```text
https://sanmatijournal.in/submission-guidelines/call-for-papers?utm_source=linkedin&utm_medium=social&utm_campaign=cfp_2026&utm_content=announcement_post
```

#### Print Posters & Conference Handouts (QR Code destination)
```text
https://sanmatijournal.in/submission-guidelines/call-for-papers?utm_source=conference&utm_medium=print&utm_campaign=cfp_2026&utm_content=qr_flyer
```

---

### 2.2 Author Distribution Campaigns (For Published Papers)

#### LinkedIn Author Share Link (Article ID: 81)
```text
https://sanmatijournal.in/article/81?utm_source=linkedin&utm_medium=social&utm_campaign=author_distrib&utm_content=paper_81
```

#### WhatsApp Author Share Link (Article ID: 81)
```text
https://sanmatijournal.in/article/81?utm_source=whatsapp&utm_medium=community&utm_campaign=author_distrib&utm_content=paper_81
```

#### ResearchGate / External Academic Link (Article ID: 81)
```text
https://sanmatijournal.in/article/81?utm_source=researchgate&utm_medium=referral&utm_campaign=author_distrib&utm_content=paper_81
```

---

### 2.3 Author Toolkit & Resource Campaigns

#### Manuscript Word Template Promotion
```text
https://sanmatijournal.in/downloads?utm_source=linkedin&utm_medium=social&utm_campaign=toolkit_promo&utm_content=template_docx
```

#### Pre-Submission Checklist Promotion
```text
https://sanmatijournal.in/blog/research-paper-submission-checklist-postgraduate-students?utm_source=email&utm_medium=outreach&utm_campaign=toolkit_promo&utm_content=checklist_guide
```

#### Citation Style Guide Promotion
```text
https://sanmatijournal.in/blog/apa-7-ieee-citation-examples-indian-researchers?utm_source=whatsapp&utm_medium=community&utm_campaign=toolkit_promo&utm_content=citation_guide
```

---

## 3. Best Practices & Rules
1. **Never use spaces or special characters**: Use underscores (`_`) instead of hyphens or spaces in parameter values.
2. **Keep case lowercase**: Use `utm_source=linkedin`, NOT `utm_source=LinkedIn`.
3. **Preserve Clean URLs internally**: Never add UTM parameters to internal site links (e.g. from `/` to `/submission-guidelines`), as this breaks GA4 session continuity.
