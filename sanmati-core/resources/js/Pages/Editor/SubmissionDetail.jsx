import React, { useState } from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { 
  FileText, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  ArrowLeft, 
  RefreshCw, 
  ShieldCheck, 
  UserCheck, 
  Building,
  Globe,
  Tag,
  History,
  AlertCircle,
  Lock,
  MessageSquare,
  PlusCircle
} from 'lucide-react';

export default function SubmissionDetail({ submission = {}, candidate_reviewers = [], allowed_transitions = [], can_update_status = false }) {
  const { errors } = usePage().props;
  const [selectedTargetStatus, setSelectedTargetStatus] = useState('');
  const [transitionNote, setTransitionNote] = useState('');
  const [editorialNoteText, setEditorialNoteText] = useState('');
  const [isSubmittingTransition, setIsSubmittingTransition] = useState(false);
  const [isSubmittingNote, setIsSubmittingNote] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedReviewerId, setSelectedReviewerId] = useState('');
  const [isAssigningReviewer, setIsAssigningReviewer] = useState(false);

  const handleAssignReviewer = (e) => {
    e.preventDefault();
    if (!selectedReviewerId) return;
    setIsAssigningReviewer(true);
    router.post(
      route('editor.submissions.reviewers.store', { submission: submission.id }),
      { reviewer_id: selectedReviewerId },
      {
        onFinish: () => setIsAssigningReviewer(false),
        onSuccess: () => setSelectedReviewerId(''),
      }
    );
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'submitted':
        return 'Submitted (Awaiting Screening)';
      case 'under_editorial_screening':
        return 'Editorial Screening';
      case 'under_review':
        return 'Under Peer Review';
      case 'revisions_requested':
        return 'Revisions Requested';
      case 'accepted':
        return 'Accepted';
      case 'rejected':
        return 'Rejected';
      default:
        return status;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'submitted':
        return (
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-300">
            <Clock className="w-4 h-4 text-amber-600" /> Awaiting Screening
          </span>
        );
      case 'under_editorial_screening':
        return (
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-900 border border-indigo-300">
            <ShieldCheck className="w-4 h-4 text-indigo-600" /> Editorial Screening
          </span>
        );
      case 'under_review':
        return (
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-300">
            <RefreshCw className="w-4 h-4 text-blue-600 animate-spin" /> Under Peer Review
          </span>
        );
      case 'revisions_requested':
        return (
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-orange-50 text-orange-900 border border-orange-300">
            <AlertTriangle className="w-4 h-4 text-orange-600" /> Revisions Requested
          </span>
        );
      case 'accepted':
        return (
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-900 border border-emerald-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Accepted
          </span>
        );
      case 'rejected':
        return (
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-red-50 text-red-900 border border-red-300">
            <XCircle className="w-4 h-4 text-red-600" /> Rejected
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-300">
            <FileText className="w-4 h-4" /> {status}
          </span>
        );
    }
  };

  const handleOpenConfirm = (targetStatus) => {
    setSelectedTargetStatus(targetStatus);
    setShowConfirmModal(true);
  };

  const handleExecuteTransition = (e) => {
    e.preventDefault();
    if (!selectedTargetStatus) return;

    setIsSubmittingTransition(true);
    router.post(
      route('editor.submissions.transition-status', submission.id),
      {
        target_status: selectedTargetStatus,
        note: transitionNote,
      },
      {
        preserveScroll: true,
        onSuccess: () => {
          setShowConfirmModal(false);
          setTransitionNote('');
          setSelectedTargetStatus('');
        },
        onFinish: () => setIsSubmittingTransition(false),
      }
    );
  };

  const handleSaveEditorialNote = (e) => {
    e.preventDefault();
    if (!editorialNoteText.trim()) return;

    setIsSubmittingNote(true);
    router.post(
      route('editor.submissions.editorial-notes', submission.id),
      {
        note: editorialNoteText,
      },
      {
        preserveScroll: true,
        onSuccess: () => {
          setEditorialNoteText('');
        },
        onFinish: () => setIsSubmittingNote(false),
      }
    );
  };

  return (
    <MainLayout>
      <Head title={`Editor Review: ${submission.tracking_id} — Sanmati Spectrum of Knowledge`} />

      {/* Header Banner */}
      <section className="bg-gradient-to-br from-[#053b2a] via-[#09573e] to-[#04281c] text-white py-10 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto">
          <Link
            href={route('editor.dashboard')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-300 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Editor Workqueue
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-emerald-950 bg-amber-300 px-2.5 py-0.5 rounded">
                  {submission.tracking_id}
                </span>
                <span className="text-xs font-medium text-emerald-100/80 px-2.5 py-0.5 bg-emerald-900/60 rounded border border-emerald-700/50">
                  {submission.article_type}
                </span>
                {getStatusBadge(submission.status)}
              </div>

              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight leading-snug">
                {submission.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Validation Errors Alert */}
        {errors && (errors.target_status || errors.note) && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-red-800 text-sm">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Validation / Exception:</p>
              {errors.target_status && <p>{errors.target_status}</p>}
              {errors.note && <p>{errors.note}</p>}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Column (2 cols): Details, Internal Notes, Timeline */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Abstract Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <h2 className="text-lg font-serif font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <BookOpenIcon className="w-5 h-5 text-[#053b2a]" /> Abstract
              </h2>
              <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">
                {submission.abstract}
              </p>
              {submission.keywords && (
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
                  <Tag className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-semibold text-slate-500">Keywords:</span>
                  <span className="text-xs text-slate-700 font-medium">{submission.keywords}</span>
                </div>
              )}
            </div>

            {/* Author Metadata Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <h2 className="text-lg font-serif font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-[#053b2a]" /> Corresponding Author & Information
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
                <div>
                  <p className="text-xs text-slate-400 uppercase font-semibold">Author Name</p>
                  <p className="font-bold text-slate-900 mt-0.5">{submission.author_name}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-semibold">Email Address</p>
                  <p className="font-medium text-slate-800 mt-0.5">{submission.author_email}</p>
                </div>
                {submission.institution && (
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-semibold flex items-center gap-1">
                      <Building className="w-3.5 h-3.5" /> Institution
                    </p>
                    <p className="font-medium text-slate-800 mt-0.5">{submission.institution}</p>
                  </div>
                )}
                {submission.country && (
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-semibold flex items-center gap-1">
                      <Globe className="w-3.5 h-3.5" /> Country
                    </p>
                    <p className="font-medium text-slate-800 mt-0.5">{submission.country}</p>
                  </div>
                )}
              </div>
            </div>

            {/* INTERNAL EDITORIAL NOTES PANEL */}
            <div className="bg-white rounded-2xl border-2 border-amber-300/60 p-6 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-3 gap-2">
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-amber-600" />
                  <h2 className="text-lg font-serif font-bold text-slate-900">
                    Internal Editorial Notes
                  </h2>
                </div>
                <span className="text-[11px] font-semibold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                  Visible ONLY to Editors & Administrators
                </span>
              </div>

              {/* Add Note Form */}
              {can_update_status ? (
                <form onSubmit={handleSaveEditorialNote} className="space-y-3">
                  <label className="block text-xs font-semibold text-slate-700">
                    Add Internal Note:
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Record internal screening thoughts, preliminary evaluation, or editor notes..."
                    value={editorialNoteText}
                    onChange={(e) => setEditorialNoteText(e.target.value)}
                    className="w-full p-3 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#053b2a] focus:outline-none transition-all"
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmittingNote || !editorialNoteText.trim()}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#053b2a] text-white text-xs font-bold rounded-lg hover:bg-[#08543c] disabled:opacity-50 transition-colors shadow-sm"
                    >
                      <PlusCircle className="w-3.5 h-3.5" />
                      {isSubmittingNote ? 'Saving Note...' : 'Save Internal Note'}
                    </button>
                  </div>
                </form>
              ) : (
                <p className="text-xs text-slate-500 italic">
                  Read-Only: Only assigned editors or administrators can add internal notes.
                </p>
              )}

              {/* Existing Notes List */}
              <div className="space-y-3 pt-2">
                {(!submission.editorial_notes || submission.editorial_notes.length === 0) ? (
                  <p className="text-xs text-slate-400 italic text-center py-4 bg-slate-50 rounded-xl border border-slate-100">
                    No internal editorial notes recorded for this manuscript.
                  </p>
                ) : (
                  submission.editorial_notes.map((n) => (
                    <div key={n.id} className="p-4 bg-amber-50/40 border border-amber-200/70 rounded-xl space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-900 flex items-center gap-1.5">
                          <MessageSquare className="w-3.5 h-3.5 text-amber-700" />
                          {n.editor ? n.editor.full_name : 'Editorial System'}
                        </span>
                        <span className="text-[11px] text-slate-500 font-mono">
                          {new Date(n.created_at).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })}
                        </span>
                      </div>
                      {/* Rendered as plain text to prevent XSS */}
                      <p className="text-xs text-slate-800 leading-relaxed whitespace-pre-line font-normal">
                        {n.note}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Assigned Peer Reviewers & Workload Monitoring */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <h2 className="text-lg font-serif font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-[#053b2a]" /> Assigned Peer Reviewers & Reminders
                </span>
                <span className="text-xs font-sans font-normal text-slate-500">
                  {submission.assigned_reviews ? submission.assigned_reviews.length : 0} Assigned
                </span>
              </h2>

              {/* Candidate Reviewer Workload Assignment Selection */}
              {candidate_reviewers && candidate_reviewers.length > 0 && (
                <form onSubmit={handleAssignReviewer} className="p-4 bg-emerald-50/50 border border-emerald-200 rounded-xl space-y-3">
                  <span className="text-xs font-bold text-[#053b2a] block">
                    Assign Candidate Reviewer (Workload Capacity Monitored)
                  </span>
                  <div className="flex flex-col sm:flex-row gap-3 items-center">
                    <select
                      value={selectedReviewerId}
                      onChange={(e) => setSelectedReviewerId(e.target.value)}
                      className="w-full sm:flex-1 py-2 px-3 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-[#053b2a] focus:outline-none"
                    >
                      <option value="">Select Candidate Reviewer...</option>
                      {candidate_reviewers.map((rev) => (
                        <option key={rev.id} value={rev.id}>
                          {rev.full_name} ({rev.email}) — [{rev.active_reviews_count} Active {rev.active_reviews_count === 1 ? 'Review' : 'Reviews'}]
                        </option>
                      ))}
                    </select>
                    <button
                      type="submit"
                      disabled={!selectedReviewerId || isAssigningReviewer}
                      className="w-full sm:w-auto px-4 py-2 bg-[#053b2a] hover:bg-[#042d20] text-white rounded-lg text-xs font-bold transition-all disabled:opacity-50 whitespace-nowrap shadow-sm"
                    >
                      Assign Reviewer
                    </button>
                  </div>
                  {errors.reviewer_id && (
                    <p className="text-[11px] text-red-600 font-semibold">{errors.reviewer_id}</p>
                  )}
                </form>
              )}

              {(!submission.assigned_reviews || submission.assigned_reviews.length === 0) ? (
                <p className="text-xs text-slate-500 italic bg-slate-50 border border-slate-200/80 rounded-xl p-4 text-center">
                  No peer reviewers assigned to this manuscript yet.
                </p>
              ) : (
                <div className="space-y-3">
                  {submission.assigned_reviews.map((rev) => (
                    <div key={rev.id} className="p-4 bg-slate-50/60 border border-slate-200 rounded-xl space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                        <div>
                          <span className="font-bold text-slate-900 block">
                            {rev.reviewer ? rev.reviewer.full_name : 'Assigned Reviewer'}
                          </span>
                          <span className="text-slate-500 text-[11px] block">
                            {rev.reviewer ? rev.reviewer.email : 'No email'}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          {rev.is_overdue && (
                            <span className="px-2.5 py-0.5 rounded-full bg-red-100 border border-red-300 text-red-800 text-[10px] font-bold uppercase tracking-wider">
                              OVERDUE ({rev.days_overdue}d late)
                            </span>
                          )}
                          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                            rev.status === 'completed' ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' :
                            rev.status === 'accepted' ? 'bg-blue-100 text-blue-800 border border-blue-300' :
                            rev.status === 'conflict_declared' ? 'bg-amber-100 text-amber-800 border border-amber-300' :
                            rev.status === 'declined' ? 'bg-red-100 text-red-800 border border-red-300' :
                            'bg-slate-100 text-slate-700 border border-slate-300'
                          }`}>
                            {rev.status}
                          </span>
                        </div>
                      </div>

                      {rev.due_at && (
                        <div className="text-[11px] text-slate-600 flex flex-wrap items-center justify-between pt-1 border-t border-slate-200/60">
                          <span>Due: <strong className="text-slate-800">{new Date(rev.due_at).toLocaleDateString('en-GB')}</strong></span>
                          <span>Reminders Sent: <strong className="text-slate-800">{rev.reminder_count}</strong> {rev.reminder_sent_at ? `(Last: ${new Date(rev.reminder_sent_at).toLocaleDateString('en-GB')})` : ''}</span>
                        </div>
                      )}

                      {rev.status === 'accepted' && (
                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => {
                              router.post(route('editor.reviews.send-reminder', { review: rev.id }), {}, {
                                preserveScroll: true,
                              });
                            }}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#053b2a] hover:bg-[#042d20] text-white rounded-lg text-xs font-semibold transition-all shadow-sm"
                          >
                            <Clock className="w-3.5 h-3.5" /> Send Due Date Reminder
                          </button>
                        </div>
                      )}

                      {/* Immutable Notification Audit Log History */}
                      {rev.notification_logs && rev.notification_logs.length > 0 && (
                        <div className="pt-2 border-t border-slate-200/80 space-y-1.5">
                          <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                            Notification Audit History
                          </span>
                          <div className="space-y-1.5">
                            {rev.notification_logs.map((log) => (
                              <div key={log.id} className="p-2 rounded-lg bg-white border border-slate-200 space-y-1">
                                <div className="flex flex-wrap items-center justify-between text-[11px]">
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold text-slate-800 capitalize">
                                      {log.notification_type.replace('_', ' ')}
                                    </span>
                                    <span className="text-slate-400">➔</span>
                                    <span className="font-mono text-slate-600">{log.recipient_email} ({log.recipient_role})</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                                      log.status === 'sent' ? 'bg-emerald-100 text-emerald-800' :
                                      log.status === 'failed' ? 'bg-red-100 text-red-800' :
                                      'bg-amber-100 text-amber-800'
                                    }`}>
                                      {log.status}
                                    </span>
                                    {log.status === 'failed' && (
                                      <button
                                        type="button"
                                        onClick={() => {
                                          router.post(route('editor.reviews.notifications.retry', { review: rev.id, log: log.id }), {}, {
                                            preserveScroll: true,
                                          });
                                        }}
                                        className="px-2 py-0.5 bg-red-800 hover:bg-red-900 text-white rounded text-[10px] font-bold transition-all shadow-sm"
                                      >
                                        Retry
                                      </button>
                                    )}
                                  </div>
                                </div>
                                {log.error_message && (
                                  <p className="text-[10px] text-red-700 bg-red-50 p-1.5 rounded border border-red-200 font-mono">
                                    {log.error_message}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Truthful Status History Timeline */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <h2 className="text-lg font-serif font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <History className="w-5 h-5 text-[#053b2a]" /> Stored Status History Timeline
              </h2>

              <div className="relative pl-6 border-l-2 border-slate-200 space-y-6">
                {(submission.status_history || []).map((event) => (
                  <div key={event.id} className="relative group">
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#053b2a] border-2 border-white ring-4 ring-slate-100" />
                    
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold text-[#053b2a] bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                          {getStatusLabel(event.to_status)}
                        </span>
                        <span className="text-xs text-slate-400">
                          {new Date(event.created_at).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600">Updated by <span className="font-semibold text-slate-800">{event.changed_by}</span></p>
                      {event.note && (
                        <p className="text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-700 italic mt-2">
                          "{event.note}"
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar (1 col): Status Transition Control Panel */}
          <div className="space-y-6">
            
            {/* Status Transition Engine Box */}
            <div className="bg-white rounded-2xl border-2 border-emerald-800/30 p-6 shadow-md space-y-5">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <ShieldCheck className="w-5 h-5 text-amber-500" />
                <h3 className="text-base font-serif font-bold text-slate-900">
                  Editorial Status Control Engine
                </h3>
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Current Status</p>
                <div className="mt-1.5">
                  {getStatusBadge(submission.status)}
                </div>
              </div>

              {can_update_status ? (
                <div className="space-y-4 pt-2">
                  <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    Permitted Next Status Transitions:
                  </p>

                  {allowed_transitions.length === 0 ? (
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-500 text-center italic">
                      Manuscript is in a terminal state ({getStatusLabel(submission.status)}). No further transitions available.
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {allowed_transitions.map((target) => (
                        <button
                          key={target}
                          type="button"
                          onClick={() => handleOpenConfirm(target)}
                          className="w-full inline-flex items-center justify-between px-4 py-2.5 bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 rounded-xl text-xs font-bold text-slate-800 hover:text-[#053b2a] transition-all group"
                        >
                          <span>Move to: {getStatusLabel(target)}</span>
                          <span className="text-slate-400 group-hover:text-[#053b2a] font-bold">→</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800 italic">
                  Read-Only: Only the assigned editor or administrator may execute status transitions.
                </div>
              )}
            </div>

            {/* Submission Info Sidebar Box */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3 text-xs text-slate-600">
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] border-b border-slate-100 pb-2">
                Manuscript Metadata
              </h4>
              <div className="flex justify-between">
                <span>Submitted Date:</span>
                <span className="font-semibold text-slate-800">
                  {new Date(submission.created_at).toLocaleDateString('en-GB')}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Subject Area:</span>
                <span className="font-semibold text-slate-800">{submission.subject_area || 'General'}</span>
              </div>
              <div className="flex justify-between">
                <span>Assigned Editor:</span>
                <span className="font-semibold text-slate-800">
                  {submission.editor ? submission.editor.full_name : 'Unassigned'}
                </span>
              </div>
            </div>

          </div>

        </div>

      </main>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 border border-slate-200">
            <h3 className="text-lg font-serif font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#053b2a]" /> Confirm Status Transition
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed">
              Are you sure you want to transition manuscript <span className="font-bold text-slate-900">{submission.tracking_id}</span> from:
              <br />
              <span className="font-semibold text-amber-800">"{getStatusLabel(submission.status)}"</span> ➔ <span className="font-semibold text-emerald-800">"{getStatusLabel(selectedTargetStatus)}"</span>?
            </p>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Optional Transition Note / Rationale:
              </label>
              <textarea
                rows={3}
                placeholder="Provide rationale for this status update..."
                value={transitionNote}
                onChange={(e) => setTransitionNote(e.target.value)}
                className="w-full p-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#053b2a] focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg text-xs font-medium hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleExecuteTransition}
                disabled={isSubmittingTransition}
                className="px-4 py-2 bg-[#053b2a] text-white rounded-lg text-xs font-bold hover:bg-[#08543c] disabled:opacity-50"
              >
                {isSubmittingTransition ? 'Executing...' : 'Confirm Transition'}
              </button>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
}

function BookOpenIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  );
}
