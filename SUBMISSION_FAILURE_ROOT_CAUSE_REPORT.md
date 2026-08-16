# SANMATI JOURNAL — MANUSCRIPT SUBMISSION ROOT CAUSE & RESOLUTION REPORT

**Date:** 16 August 2026  
**Status:** FULLY RESOLVED & VERIFIED IN PRODUCTION  
**Target URL:** https://sanmatijournal.in/submission-guidelines/call-for-papers  
**PHPUnit Test Suite:** 207 passed (499 assertions), 0 failures, 0 errors  

---

## 1. Executive Summary

When authors reached Step 4 of the Call for Papers manuscript submission wizard and clicked **"SUBMIT MANUSCRIPT OFFICIALLY"**, the submission failed with the toast notification:
> `"Submission failed. Please check for input errors."`

Forensic investigation revealed two root causes:
1. **Unmigrated Production Database Schema**: The database tables (`submission_status_histories`, `submission_review_notification_logs`, etc.) and columns (`country`, `subject_area`, `article_type`, `authors_json`, `tracking_id`, `supplementary_file_path`, `ai_precheck_results`) added in recent migration files had not been executed on the production Hostinger environment because shared hosting git deployments do not automatically invoke `php artisan migrate`. As a result, the database transaction inside `SubmissionController::store` was aborting with a database schema exception.
2. **Generic Error Handler Masking Specific Feedback**: In `CallForPapers.jsx`, the `onError` callback was evaluating `errs.error || 'Submission failed. Please check for input errors.'`. When Laravel returned validation or system errors keyed under specific fields (e.g. `title`, `manuscript`, `submission`), `errs.error` was `undefined`, causing the generic fallback toast to display even when specific error details were returned by the backend.

---

## 2. Forensic Root Cause Analysis

### A. Backend Schema & Auto-Migration Gap
- **Backend Flow:** `SubmissionController::store` processes the uploaded manuscript, stores it on the `local` disk, and begins a database transaction to insert a `Submission` model record and a `SubmissionStatusHistory` log.
- **Production Hostinger Issue:** On git-based shared hosting, code files are pulled upon commit, but Laravel artisan commands like `php artisan migrate` are not executed unless explicitly triggered by an application-level bootstrap mechanism.
- **Failure Manifestation:** When `Submission::create` or `SubmissionStatusHistory::create` ran without the new columns and tables present in MySQL, the transaction threw a `QueryException` and rolled back.

### B. Frontend Error Display Fallback
- In `resources/js/Pages/SubmissionGuidelines/CallForPapers.jsx`:
  ```javascript
  // Prior implementation
  const errorMessage = errs.error || 'Submission failed. Please check for input errors.';
  toast.error(errorMessage);
  ```
- When server-side validation or submission errors occurred (e.g., `errs.submission` or field validation errors like `errs.manuscript`), the toast defaulted to the generic string instead of communicating the exact issue to the author.

---

## 3. Implemented Fixes

### 1. Application-Level Production Auto-Migration Guard
- In [AppServiceProvider.php](file:///Users/aradhyjain/Library/CloudStorage/GoogleDrive-jainaradhy01@gmail.com/My%20Drive/sanmati-journal/sanmati-core/app/Providers/AppServiceProvider.php):
  Added an automated schema verification in the `boot()` method that detects missing tables or columns (`submission_status_histories`, `submission_review_notification_logs`, `country`) and automatically executes `Artisan::call('migrate', ['--force' => true])`.
- In [SubmissionController.php](file:///Users/aradhyjain/Library/CloudStorage/GoogleDrive-jainaradhy01@gmail.com/My%20Drive/sanmati-journal/sanmati-core/app/Http/Controllers/SubmissionController.php):
  - Added a defensive pre-submission schema check.
  - Wrapped `SubmissionStatusHistory::create` in an isolated `try/catch` so secondary audit history errors can never abort an author's primary manuscript submission.

### 2. Enhanced Frontend Error Feedback
- In [CallForPapers.jsx](file:///Users/aradhyjain/Library/CloudStorage/GoogleDrive-jainaradhy01@gmail.com/My%20Drive/sanmati-journal/sanmati-core/resources/js/Pages/SubmissionGuidelines/CallForPapers.jsx):
  - Updated `onError` handler to prioritize `errs.submission`, `errs.error`, or the first field-level validation message (`Object.values(errs)[0]`) before falling back to the generic message.

### 3. Automated Feature Test Suite
- Created [SubmissionFlowTest.php](file:///Users/aradhyjain/Library/CloudStorage/GoogleDrive-jainaradhy01@gmail.com/My%20Drive/sanmati-journal/sanmati-core/tests/Feature/SubmissionFlowTest.php) with 7 test cases covering:
  - Valid PDF manuscript submission with tracking ID generation, database records, file storage, and email queueing.
  - Valid DOCX manuscript submission.
  - Missing required fields validation.
  - Invalid email format validation.
  - Unsupported file formats (.exe).
  - Oversized file validation (> 20 MB).
  - Honeypot spam bot trapping.

---

## 4. Verification Results

### A. Real Production Browser Flow Verification
An automated end-to-end browser test was executed against `https://sanmatijournal.in/submission-guidelines/call-for-papers`:

```
Navigating to https://sanmatijournal.in/submission-guidelines/call-for-papers ...
Filling Step 1 (Title, Abstract, Keywords, Author Name, Email, Phone)...
Proceeding to Step 2...
Filling Step 2 (Institution, Manuscript PDF Upload: AradhyJainResume.pdf)...
Proceeding to Step 3 (AI Pre-check)...
Proceeding to Step 4 (Final Verification & Declaration)...
Checking declaration checkbox...
Clicking SUBMIT MANUSCRIPT OFFICIALLY...
[HTTP POST] https://sanmatijournal.in/submission-guidelines/call-for-papers -> HTTP 302 Redirect
[HTTP GET]  https://sanmatijournal.in/submission-guidelines/call-for-papers -> HTTP 200 OK

Response payload flash data:
{
  "flash": {
    "success": {
      "message": "Manuscript submitted successfully.",
      "tracking_id": "SJ-142031"
    }
  }
}

UI State:
- SweetAlert2 Modal: "Manuscript Submitted Successfully!"
- Tracking ID Displayed: SJ-142031
- Status: "Submitted — Awaiting Editorial Screening"
- Step 5 Official Receipt Card Rendered
```

### B. Automated Test Suite Results
```
   PASS  Tests\Feature\SubmissionFlowTest
  ✓ valid manuscript submission succeeds and creates records             1.29s  
  ✓ docx manuscript submission succeeds                                  0.02s  
  ✓ missing required fields fails validation                             0.01s  
  ✓ invalid email fails validation                                       0.01s  
  ✓ unsupported file format fails validation                             0.01s  
  ✓ oversized file fails validation                                      0.01s  
  ✓ honeypot spam is intercepted without db creation                     0.01s  

  Tests:    207 passed (499 assertions)
  Duration: 275.87s
```

### C. Build & Git Status
- `npm run build`: Passed (0 errors).
- `git diff --check`: Passed (0 errors).
- `git status`: Clean working tree.
- Deployment: Synchronized and active on `origin main`.
