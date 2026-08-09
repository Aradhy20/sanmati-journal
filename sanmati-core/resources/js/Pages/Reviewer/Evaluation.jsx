import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { 
  ShieldCheck, 
  FileText, 
  Lock, 
  Save, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Star,
  ArrowLeft,
  MessageSquare
} from 'lucide-react';

export default function ReviewerEvaluation({ review = {}, auth_user = {} }) {
  const isFinalized = review.is_draft === false || !!review.submitted_at;
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const { data, setData, post, processing, errors } = useForm({
    originality_score: review.originality_score || '',
    methodology_score: review.methodology_score || '',
    relevance_score: review.relevance_score || '',
    clarity_score: review.clarity_score || '',
    overall_score: review.overall_score || '',
    recommendation: review.recommendation || '',
    reviewer_comments: review.reviewer_comments || '',
    confidential_comments: review.confidential_comments || '',
  });

  const handleSaveDraft = (e) => {
    e.preventDefault();
    if (isFinalized) return;
    post(route('reviewer.reviews.draft', { review: review.id }), {
      preserveScroll: true,
    });
  };

  const handleSubmitFinal = (e) => {
    e.preventDefault();
    if (isFinalized) return;
    setShowConfirmModal(true);
  };

  const confirmSubmitFinal = () => {
    setShowConfirmModal(false);
    post(route('reviewer.reviews.submit', { review: review.id }), {
      preserveScroll: true,
    });
  };

  const scoreCategories = [
    { key: 'originality_score', label: 'Originality & Innovation', desc: 'Novelty of research topic, methodology, or theoretical findings.' },
    { key: 'methodology_score', label: 'Technical & Methodological Rigor', desc: 'Accuracy of research design, data analysis, and mathematical proofs.' },
    { key: 'relevance_score', label: 'Scientific Relevance', desc: 'Contribution to knowledge domain and practical applicability.' },
    { key: 'clarity_score', label: 'Structural & Textual Clarity', desc: 'Readability, organization, figure quality, and linguistic precision.' },
    { key: 'overall_score', label: 'Overall Evaluation Score', desc: 'Comprehensive assessment rating of manuscript quality.' },
  ];

  return (
    <MainLayout>
      <Head title={`Peer Review Evaluation — ${review.submission?.tracking_id || 'Manuscript'}`} />

      {/* Header Banner */}
      <section className="bg-gradient-to-br from-[#053b2a] via-[#09573e] to-[#04281c] text-white py-10 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-5xl mx-auto space-y-4">
          <Link
            href={route('reviewer.dashboard')}
            className="inline-flex items-center gap-1.5 text-xs text-emerald-200 hover:text-white transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Reviewer Workqueue
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-700/50 text-xs font-medium text-emerald-200 mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Double-Blind Peer Review Form
              </div>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                Manuscript Review Evaluation
              </h1>
            </div>

            {/* View Manuscript Action Button */}
            <div>
              <a
                href={route('reviewer.reviews.manuscript', { review: review.id })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#053b2a]"
                aria-label={`View manuscript for review ${review.submission?.tracking_id || review.id}`}
              >
                <FileText className="w-4 h-4" />
                View Manuscript File
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* Status Banners */}
        {review.status === 'invited' && (
          <div className="bg-blue-50 border border-blue-300 rounded-2xl p-5 text-blue-900 flex items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-blue-600 shrink-0" />
              <div>
                <h3 className="text-sm font-bold">Review Invitation Pending Acceptance</h3>
                <p className="text-xs text-blue-800 mt-0.5">
                  You must accept this review invitation before submitting your evaluation form.
                </p>
              </div>
            </div>
            <Link
              method="post"
              as="button"
              href={route('reviewer.reviews.accept', { review: review.id })}
              className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold rounded-xl transition-colors shrink-0"
            >
              Accept Invitation Now
            </Link>
          </div>
        )}

        {review.status === 'conflict_declared' && (
          <div className="bg-rose-50 border border-rose-300 rounded-2xl p-5 text-rose-900 flex items-start gap-4 shadow-sm">
            <AlertCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold">Conflict of Interest Declared</h3>
              <p className="text-xs text-rose-800 mt-1 leading-relaxed">
                A Conflict of Interest has been declared for this manuscript. Evaluation form submission is blocked pending handling editor review.
              </p>
            </div>
          </div>
        )}

        {isFinalized && (
          <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 text-amber-900 flex items-start gap-4 shadow-sm">
            <Lock className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold">Review Evaluation Finalized</h3>
              <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                This evaluation was finalized and submitted on{' '}
                <span className="font-semibold">{review.submitted_at ? new Date(review.submitted_at).toLocaleDateString() : 'Record'}</span>. 
                Submitted review evaluations are locked and immutable.
              </p>
            </div>
          </div>
        )}

        {/* Double-Blind Manuscript Details Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <span className="px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg text-xs font-mono font-bold">
              {review.submission?.tracking_id || `REVIEW-#${review.id}`}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              <Lock className="w-3 h-3" /> Author Anonymized (Double-Blind)
            </span>
          </div>

          <h2 className="text-lg font-serif font-bold text-slate-900 leading-snug">
            {review.submission?.title || 'Untitled Manuscript'}
          </h2>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600 pt-1">
            {review.submission?.article_type && (
              <span>Article Type: <strong className="text-slate-800">{review.submission.article_type}</strong></span>
            )}
            {review.submission?.subject_area && (
              <span>Subject Area: <strong className="text-slate-800">{review.submission.subject_area}</strong></span>
            )}
          </div>
        </div>

        {/* Evaluation Form */}
        <form onSubmit={handleSubmitFinal} className="space-y-8">

          {/* Section 1: Structured Scores (1-5) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-base font-serif font-bold text-slate-900 flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500 fill-amber-400" />
                Structured Evaluation Criteria (1 to 5 Scale)
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Rate each criterion from 1 (Poor / Unsatisfactory) to 5 (Excellent / Outstanding).
              </p>
            </div>

            <div className="space-y-6">
              {scoreCategories.map((cat) => (
                <div key={cat.key} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <label htmlFor={cat.key} className="text-xs font-bold text-slate-800">
                      {cat.label} <span className="text-rose-500">*</span>
                    </label>
                    <span className="text-[11px] text-slate-400 font-normal">{cat.desc}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        type="button"
                        disabled={isFinalized}
                        onClick={() => setData(cat.key, num)}
                        className={`flex-1 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                          Number(data[cat.key]) === num
                            ? 'bg-[#053b2a] text-white border-[#053b2a] shadow-sm ring-2 ring-[#053b2a]/30'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 disabled:opacity-60'
                        }`}
                      >
                        {num} {num === 1 ? '(Poor)' : num === 5 ? '(Excellent)' : ''}
                      </button>
                    ))}
                  </div>
                  {errors[cat.key] && (
                    <p className="text-[11px] text-rose-600 font-medium">{errors[cat.key]}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Reviewer Recommendation */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <h2 className="text-base font-serif font-bold text-slate-900">
                Editorial Recommendation <span className="text-rose-500">*</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Select your final publication recommendation for the editorial board.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { value: 'accept', label: 'Accept Manuscript', desc: 'Accept in current form without revision' },
                { value: 'minor_revision', label: 'Minor Revisions', desc: 'Accept subject to minor revisions' },
                { value: 'major_revision', label: 'Major Revisions', desc: 'Requires substantial revisions and re-review' },
                { value: 'reject', label: 'Reject Manuscript', desc: 'Decline publication' },
              ].map((opt) => (
                <label
                  key={opt.value}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                    data.recommendation === opt.value
                      ? 'bg-emerald-50/70 border-emerald-500 ring-2 ring-emerald-500/20'
                      : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="recommendation"
                      value={opt.value}
                      disabled={isFinalized}
                      checked={data.recommendation === opt.value}
                      onChange={(e) => setData('recommendation', e.target.value)}
                      className="text-[#053b2a] focus:ring-[#053b2a]"
                    />
                    <span className="text-xs font-bold text-slate-900">{opt.label}</span>
                  </div>
                  <span className="text-[11px] text-slate-500 mt-2 leading-tight">{opt.desc}</span>
                </label>
              ))}
            </div>
            {errors.recommendation && (
              <p className="text-[11px] text-rose-600 font-medium">{errors.recommendation}</p>
            )}
          </div>

          {/* Section 3: Reviewer Comments (Public to Author & Editor) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
            <div className="border-b border-slate-100 pb-3">
              <h2 className="text-base font-serif font-bold text-slate-900 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#053b2a]" />
                Reviewer Comments (Visible to Author & Editor) <span className="text-rose-500">*</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Provide constructive feedback, methodologies analysis, and specific corrections for the author.
              </p>
            </div>

            <textarea
              rows={6}
              disabled={isFinalized}
              placeholder="Enter detailed reviewer feedback for the author..."
              value={data.reviewer_comments}
              onChange={(e) => setData('reviewer_comments', e.target.value)}
              className="w-full p-3.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-[#053b2a] focus:outline-none transition-all disabled:bg-slate-100 disabled:text-slate-600"
            />
            {errors.reviewer_comments && (
              <p className="text-[11px] text-rose-600 font-medium">{errors.reviewer_comments}</p>
            )}
          </div>

          {/* Section 4: Confidential Editor Comments */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
            <div className="border-b border-slate-100 pb-3">
              <h2 className="text-base font-serif font-bold text-slate-900 flex items-center gap-2">
                <Lock className="w-5 h-5 text-amber-600" />
                Confidential Editor Comments (Visible ONLY to Editor & Admin)
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Optional private notes intended exclusively for the handling editor or editorial board.
              </p>
            </div>

            <textarea
              rows={4}
              disabled={isFinalized}
              placeholder="Enter confidential notes for the editor..."
              value={data.confidential_comments}
              onChange={(e) => setData('confidential_comments', e.target.value)}
              className="w-full p-3.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-[#053b2a] focus:outline-none transition-all disabled:bg-slate-100 disabled:text-slate-600"
            />
            {errors.confidential_comments && (
              <p className="text-[11px] text-rose-600 font-medium">{errors.confidential_comments}</p>
            )}
          </div>

          {/* Form Actions */}
          {!isFinalized && (
            <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-4">
              <button
                type="button"
                onClick={handleSaveDraft}
                disabled={processing}
                className="w-full sm:w-auto px-6 py-3 bg-slate-100 text-slate-800 text-xs font-bold rounded-xl hover:bg-slate-200 transition-colors shadow-sm inline-flex items-center justify-center gap-2"
              >
                <Save className="w-4 h-4 text-slate-600" />
                Save Draft Evaluation
              </button>

              <button
                type="submit"
                disabled={processing}
                className="w-full sm:w-auto px-8 py-3 bg-[#053b2a] text-white text-xs font-bold rounded-xl hover:bg-[#08543c] transition-colors shadow-md inline-flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Submit Final Review Evaluation
              </button>
            </div>
          )}

        </form>

        {/* Finalization Confirmation Modal */}
        {showConfirmModal && (
          <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 max-w-md w-full shadow-2xl space-y-4 animate-in fade-in zoom-in duration-150">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mx-auto">
                <AlertCircle className="w-6 h-6" />
              </div>

              <div className="text-center space-y-2">
                <h3 className="text-lg font-serif font-bold text-slate-900">
                  Finalize & Submit Review?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Once finalized, your evaluation scores, recommendation, and comments will be locked and cannot be modified.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowConfirmModal(false)}
                  className="flex-1 py-2.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={confirmSubmitFinal}
                  className="flex-1 py-2.5 bg-[#053b2a] text-white text-xs font-bold rounded-xl hover:bg-[#08543c] transition-colors shadow-sm"
                >
                  Confirm & Finalize
                </button>
              </div>
            </div>
          </div>
        )}

      </main>
    </MainLayout>
  );
}
