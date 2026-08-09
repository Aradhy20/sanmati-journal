@component('mail::message')
# 📄 Peer Review Invitation — {{ $trackingId }}

Dear **{{ $reviewerName }}**,

You have been invited to serve as a peer reviewer for a manuscript submitted to **Sanmati Spectrum of Knowledge**.

---

## 📋 Manuscript Information

| | |
|---|---|
| **Tracking ID** | `{{ $trackingId }}` |
| **Title** | {{ $paperTitle }} |
| **Article Type** | {{ $articleType }} |
| **Subject Area** | {{ $subjectArea }} |
| **Review Due Date** | {{ $dueAt }} |

---

> **Double-Blind Peer Review Policy**: This journal operates under a strict double-blind peer review policy. Author identities have been removed from manuscript payloads to ensure unbiased evaluation.

<x-mail::button :url="$portalUrl" color="primary">
Access Reviewer Portal
</x-mail::button>

Please log into your reviewer dashboard to accept or decline this invitation.

Warm Regards,  
**Editorial Office**  
Sanmati Spectrum of Knowledge  
ISSN: 3108-1819  
@endcomponent
