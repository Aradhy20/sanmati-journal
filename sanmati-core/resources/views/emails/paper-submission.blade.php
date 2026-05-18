@component('mail::message')
# 📄 New Manuscript Received

A new paper has been submitted to **Sanmati Spectrum of Knowledge**. The author's manuscript is attached to this email.

---

## 📋 Paper Details

| Field | Details |
|--|--|
| **Tracking ID** | {{ $trackingId }} |
| **Paper Title** | {{ $paperTitle }} |
| **Subject Area** | {{ $subjectArea }} |
| **Keywords** | {{ $keywords ?: 'Not provided' }} |
| **Submitted On** | {{ $submittedAt }} |

---

## 👤 Author Information

| Field | Details |
|--|--|
| **Name** | {{ $authorName }} |
| **Email** | {{ $authorEmail }} |
| **Phone** | {{ $authorPhone ?: 'Not provided' }} |
| **Institution** | {{ $institution ?: 'Not provided' }} |

---

## 📝 Abstract

{{ $abstract }}

---

<x-mail::button :url="config('app.url') . '/admin'" color="primary">
Open Editorial Dashboard
</x-mail::button>

> **Note:** The PDF manuscript is attached to this email as `Manuscript_{{ $trackingId }}.pdf`.
> Please check the spam folder if you do not see the attachment.

---

**Sanmati Spectrum of Knowledge**
ISSN: 3108-1819 · sanmatijournal@gmail.com
@endcomponent
