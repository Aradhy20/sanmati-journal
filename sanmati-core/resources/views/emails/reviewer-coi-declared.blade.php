@component('mail::message')
# ⚠️ Conflict of Interest Declared — {{ $trackingId }}

Dear **{{ $editorName }}**,

Reviewer **{{ $reviewerName }}** has declared a Conflict of Interest (COI) for assigned manuscript **{{ $trackingId }}**.

---

## 📋 Conflict Details

| | |
|---|---|
| **Tracking ID** | `{{ $trackingId }}` |
| **Manuscript Title** | {{ $paperTitle }} |
| **Reviewer Name** | {{ $reviewerName }} |
| **Declared On** | {{ $declaredAt }} |

### COI Reason Provided by Reviewer:
> {{ $coiReason }}

---

<x-mail::button :url="$editorUrl" color="error">
Resolve Conflict in Editor Portal
</x-mail::button>

Please review the conflict declaration and either re-invite the reviewer or decline the review assignment.

Warm Regards,  
**Editorial System**  
Sanmati Spectrum of Knowledge  
@endcomponent
