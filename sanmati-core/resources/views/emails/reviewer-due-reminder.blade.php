@component('mail::message')
# ⏳ Review Due Date Reminder — {{ $trackingId }}

Dear **{{ $reviewerName }}**,

This is a friendly reminder regarding your accepted review assignment for manuscript **{{ $trackingId }}** submitted to **Sanmati Spectrum of Knowledge**.

---

## 📋 Review Details

| | |
|---|---|
| **Tracking ID** | `{{ $trackingId }}` |
| **Title** | {{ $paperTitle }} |
| **Review Due Date** | **{{ $dueAt }}** |

---

<x-mail::button :url="$portalUrl" color="primary">
Complete Review Evaluation
</x-mail::button>

Please log into your reviewer dashboard to complete and submit your evaluation report.

Warm Regards,  
**Editorial Office**  
Sanmati Spectrum of Knowledge  
ISSN: 3108-1819  
@endcomponent
