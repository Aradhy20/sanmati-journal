@component('mail::message')
# ✅ Review Evaluation Submitted — {{ $trackingId }}

Dear **{{ $editorName }}**,

Reviewer **{{ $reviewerName }}** has completed and finalized their peer-review evaluation for manuscript **{{ $trackingId }}**.

---

## 📋 Evaluation Summary

| | |
|---|---|
| **Tracking ID** | `{{ $trackingId }}` |
| **Manuscript Title** | {{ $paperTitle }} |
| **Reviewer Name** | {{ $reviewerName }} |
| **Recommendation** | **{{ strtoupper($recommendation) }}** |
| **Completed On** | {{ $completedAt }} |

---

<x-mail::button :url="$editorUrl" color="primary">
View Full Evaluation in Editor Portal
</x-mail::button>

Log into your editor dashboard to read the full evaluation scores, detailed reviewer comments, and confidential editor notes.

Warm Regards,  
**Editorial System**  
Sanmati Spectrum of Knowledge  
@endcomponent
