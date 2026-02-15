<?php

use App\Http\Controllers\JournalController;
use Illuminate\Support\Facades\Route;

Route::get('/', [JournalController::class, 'index'])->name('home');
Route::get('/editorial-team', [JournalController::class, 'editorialTeam'])->name('editorial-team');
Route::get('/editorial-team/editors', [JournalController::class, 'editors'])->name('editorial-team.editors');
Route::get('/editorial-team/editorial-board', [JournalController::class, 'editorialBoard'])->name('editorial-team.board');
Route::get('/editorial-team/advisory-board', [JournalController::class, 'advisoryBoard'])->name('editorial-team.advisory');
Route::get('/about-journal', [JournalController::class, 'aboutJournal'])->name('about-journal');
Route::get('/gallery-view', [JournalController::class, 'gallery'])->name('gallery');
Route::get('/gallery/photo', [JournalController::class, 'galleryPhoto'])->name('gallery.photo');
Route::get('/gallery/news', [JournalController::class, 'galleryNews'])->name('gallery.news');
Route::get('/archive', [JournalController::class, 'archive'])->name('archive');
Route::get('/contact', [JournalController::class, 'contact'])->name('contact');
Route::post('/contact', [JournalController::class, 'contactStore'])->name('contact.store')->middleware('throttle:60,1');

// Basic info routes
Route::get('/basic-info/vision-mission', [JournalController::class, 'visionMission'])->name('vision-mission');
Route::get('/basic-info/objective-scope', [JournalController::class, 'objectiveScope'])->name('objective-scope');
Route::get('/basic-info/journal-info', [JournalController::class, 'journalInfo'])->name('journal-info');
Route::get('/basic-info/about-journal', [JournalController::class, 'aboutJournal'])->name('basic-info.about-journal');
Route::get('/basic-info/indexing', [JournalController::class, 'indexing'])->name('basic-info.indexing');

// Submission guidelines
Route::get('/submission-guidelines', [JournalController::class, 'submissionGuidelines'])->name('submission-guidelines');
Route::get('/submission-guidelines/call-for-papers', [JournalController::class, 'callForPapers'])->name('submission-guidelines.call');
Route::get('/submission-guidelines/areas', [JournalController::class, 'submissionAreas'])->name('submission-guidelines.areas');
Route::get('/submission-guidelines/areas/{slug}', [JournalController::class, 'areaDetail'])->name('submission-guidelines.area-detail');
Route::get('/submission-guidelines/important-info', [JournalController::class, 'importantInfo'])->name('submission-guidelines.info');
Route::get('/submission-guidelines/publication-charges', [JournalController::class, 'publicationCharges'])->name('submission-guidelines.charges');
Route::get('/submission-guidelines/review-process', [JournalController::class, 'peerReviewProcess'])->name('submission-guidelines.review');

// Academic events
Route::get('/academic-events/seminar', [JournalController::class, 'seminars'])->name('academic-events.seminar');
Route::get('/academic-events/conferences', [JournalController::class, 'conferences'])->name('academic-events.conferences');
Route::get('/academic-events/workshop', [JournalController::class, 'workshop'])->name('academic-events.workshop');

// Publication policy
Route::get('/publication-policy/ethics', [JournalController::class, 'ethics'])->name('publication-policy.ethics');
Route::get('/publication-policy/plagiarism', [JournalController::class, 'plagiarism'])->name('publication-policy.plagiarism');
Route::get('/publication-policy/peer-review', [JournalController::class, 'peerReview'])->name('publication-policy.peer-review');

// Other specialized pages
Route::get('/awards', [JournalController::class, 'awards'])->name('awards');
Route::get('/book-publication', [JournalController::class, 'bookPublication'])->name('book-publication');
Route::get('/compliance', [JournalController::class, 'compliance'])->name('compliance');

// Authentication Routes
Route::get('/login', [App\Http\Controllers\Auth\LoginController::class, 'create'])->name('login');
Route::post('/login', [App\Http\Controllers\Auth\LoginController::class, 'store'])->middleware('throttle:60,1');
Route::post('/logout', [App\Http\Controllers\Auth\LoginController::class, 'destroy'])->name('logout');

// Admin Routes (Protected with auth + admin role check)
Route::prefix('admin')->name('admin.')->middleware(['auth', 'admin'])->group(function () {
    Route::get('/', [\App\Http\Controllers\AdminController::class, 'index'])->name('dashboard');
    Route::get('/enquiries', [\App\Http\Controllers\AdminController::class, 'enquiries'])->name('enquiries');
    Route::patch('/enquiries/{enquiry}/status', [\App\Http\Controllers\AdminController::class, 'updateEnquiryStatus'])->name('enquiries.status');

    Route::get('/news', [\App\Http\Controllers\AdminController::class, 'news'])->name('news');
    Route::post('/news', [\App\Http\Controllers\AdminController::class, 'storeNews'])->name('news.store');
    Route::patch('/news/{news}/toggle', [\App\Http\Controllers\AdminController::class, 'toggleNews'])->name('news.toggle');
    Route::delete('/news/{news}', [\App\Http\Controllers\AdminController::class, 'deleteNews'])->name('news.delete');

    Route::get('/papers', [\App\Http\Controllers\AdminController::class, 'papers'])->name('papers');
    Route::post('/issues', [\App\Http\Controllers\AdminController::class, 'storeIssue'])->name('issues.store');
    Route::patch('/issues/{issue}/toggle', [\App\Http\Controllers\AdminController::class, 'toggleIssue'])->name('issues.toggle');
    Route::delete('/issues/{issue}', [\App\Http\Controllers\AdminController::class, 'deleteIssue'])->name('issues.delete');
    Route::post('/papers', [\App\Http\Controllers\AdminController::class, 'storePaper'])->name('papers.store');
    Route::delete('/papers/{paper}', [\App\Http\Controllers\AdminController::class, 'deletePaper'])->name('papers.delete');

    Route::get('/team', [\App\Http\Controllers\AdminController::class, 'team'])->name('team');
    Route::post('/team', [\App\Http\Controllers\AdminController::class, 'storeTeamMember'])->name('team.store');
    Route::delete('/team/{teamMember}', [\App\Http\Controllers\AdminController::class, 'deleteTeamMember'])->name('team.delete');

    Route::get('/gallery', [\App\Http\Controllers\AdminController::class, 'gallery'])->name('gallery');
    Route::post('/gallery', [\App\Http\Controllers\AdminController::class, 'storeGalleryItem'])->name('gallery.store');
    Route::delete('/gallery/{gallery}', [\App\Http\Controllers\AdminController::class, 'deleteGalleryItem'])->name('gallery.delete');
});


