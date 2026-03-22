@component('mail::message')
# ✅ Submission Received — {{ $trackingId }}

Dear **{{ $authorName }}**,

Thank you for submitting your manuscript to **Sanmati Spectrum of Knowledge**. We have successfully received your paper and it is now under preliminary review.

---

## 📋 Submission Summary

| | |
|---|---|
| **Tracking ID** | `{{ $trackingId }}` |
| **Paper Title** | {{ $paperTitle }} |
| **Received On** | {{ $submittedAt }} |

---

## 📬 What Happens Next?

1. **Initial Screening** — Our editorial team will check for completeness and scope fit within **3–5 business days**.
2. **Double-Blind Peer Review** — After screening, your paper enters the peer-review process with domain experts.
3. **Decision** — You will receive an acceptance, revision request, or rejection notice by email.

---

> Please keep your **Tracking ID `{{ $trackingId }}`** safe. You may need it for any future correspondence with our editorial office.

For queries, email us at [sanmatijournal@gmail.com](mailto:sanmatijournal@gmail.com) or call **+91 8979782949**.

@component('mail::button', ['url' => 'https://sanmatijournal.in/submission-guidelines', 'color' => 'primary'])
View Submission Guidelines
@endcomponent

Warm Regards,
**Editorial Team**
Sanmati Spectrum of Knowledge
ISSN: 3108-1819
@endcomponent
