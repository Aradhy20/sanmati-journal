import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { 
  FileCheck2, 
  Clock, 
  CheckCircle2, 
  RefreshCw, 
  Search, 
  Filter, 
  ShieldCheck, 
  UserCheck, 
  AlertCircle,
  Inbox,
  Lock,
  ArrowRight,
  BookOpen,
  FileText
} from 'lucide-react';

export default function ReviewerDashboard({ counts = {}, reviews = {}, filters = {}, auth_user = {} }) {
  const [search, setSearch] = useState(filters.search || '');
  const [status, setStatus] = useState(filters.status || '');
  const [selectedCoiReview, setSelectedCoiReview] = useState(null);
  const [coiReason, setCoiReason] = useState('');
  const [coiError, setCoiError] = useState('');

  const handleCoiSubmit = (e) => {
    e.preventDefault();
    if (!coiReason || coiReason.trim().length < 5) {
      setCoiError('Please provide a valid Conflict of Interest reason (minimum 5 characters).');
      return;
    }
    setCoiError('');
    router.post(
      route('reviewer.reviews.conflict', { review: selectedCoiReview.id }),
      { coi_reason: coiReason },
      {
        onSuccess: () => {
          setSelectedCoiReview(null);
          setCoiReason('');
        },
      }
    );
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    router.get(
      route('reviewer.dashboard'),
      { search, status },
      { preserveState: true, replace: true }
    );
  };

  const handleResetFilters = () => {
    setSearch('');
    setStatus('');
    router.get(route('reviewer.dashboard'), {}, { replace: true });
  };

  const reviewItems = reviews.data || [];

  return (
    <MainLayout>
      <Head title="Peer Reviewer Workqueue — Sanmati Spectrum of Knowledge" />

      {/* Header Banner */}
      <section className="bg-gradient-to-br from-[#053b2a] via-[#09573e] to-[#04281c] text-white py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-700/50 text-xs font-medium text-emerald-200 mb-3">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Double-Blind Peer Review Portal
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white">
              Peer Reviewer Dashboard
            </h1>
            <p className="mt-2 text-sm text-emerald-100/90 max-w-2xl leading-relaxed">
              Welcome, <span className="font-semibold text-white">{auth_user.name || 'Reviewer'}</span>. Manage your double-blind manuscript invitations, review deadlines, and secure manuscript files.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          
          {/* Pending Invitations */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Pending Invitations
              </span>
              <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <p className="text-2xl font-serif font-bold text-slate-900 mt-2">
              {counts.pending_invitations ?? 0}
            </p>
            <p className="text-[10px] text-slate-400 mt-1">Awaiting acceptance</p>
          </div>

          {/* Active Reviews */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Active Evaluations
              </span>
              <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                <RefreshCw className="w-4 h-4" />
              </div>
            </div>
            <p className="text-2xl font-serif font-bold text-slate-900 mt-2">
              {counts.active_reviews ?? 0}
            </p>
            <p className="text-[10px] text-slate-400 mt-1">Under active review</p>
          </div>

          {/* Overdue Reviews */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Overdue Reviews
              </span>
              <div className="w-8 h-8 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-700">
                <AlertCircle className="w-4 h-4" />
              </div>
            </div>
            <p className="text-2xl font-serif font-bold text-slate-900 mt-2">
              {counts.overdue_reviews ?? 0}
            </p>
            <p className="text-[10px] text-slate-400 mt-1">Past submission deadline</p>
          </div>

          {/* Completed Reviews */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Completed Reviews
              </span>
              <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <p className="text-2xl font-serif font-bold text-slate-900 mt-2">
              {counts.completed_reviews ?? 0}
            </p>
            <p className="text-[10px] text-slate-400 mt-1">Evaluations submitted</p>
          </div>

          {/* Total Assignments */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Total Portfolio
              </span>
              <div className="w-8 h-8 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700">
                <FileCheck2 className="w-4 h-4" />
              </div>
            </div>
            <p className="text-2xl font-serif font-bold text-slate-900 mt-2">
              {counts.total_assignments ?? 0}
            </p>
            <p className="text-[10px] text-slate-400 mt-1">Lifetime assigned reviews</p>
          </div>

        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search assigned manuscripts by title or keyword..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-[#053b2a] focus:outline-none transition-all"
              />
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full md:w-48 py-2.5 px-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 focus:bg-white focus:ring-2 focus:ring-[#053b2a] focus:outline-none transition-all"
              >
                <option value="">All Review Statuses</option>
                <option value="invited">Invited</option>
                <option value="accepted">Accepted / In Progress</option>
                <option value="overdue">Overdue Reviews</option>
                <option value="completed">Completed / Submitted</option>
                <option value="declined">Declined</option>
              </select>

              <button
                type="submit"
                className="px-4 py-2.5 bg-[#053b2a] text-white text-xs font-bold rounded-xl hover:bg-[#08543c] transition-colors shadow-sm whitespace-nowrap"
              >
                Filter
              </button>

              {(search || status) && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="px-3 py-2.5 text-xs text-slate-500 hover:text-slate-900 hover:underline whitespace-nowrap"
                >
                  Reset
                </button>
              )}
            </div>

          </form>
        </div>

        {/* Workqueue List */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-base font-serif font-bold text-slate-900 flex items-center gap-2">
              <Inbox className="w-5 h-5 text-[#053b2a]" />
              Assigned Manuscripts Workqueue
            </h2>
            <span className="text-xs text-slate-400 font-mono">
              Double-Blind Scoped: {reviewItems.length} items
            </span>
          </div>

          {reviewItems.length > 0 ? (
            <div className="divide-y divide-slate-100">
              {reviewItems.map((item) => (
                <div key={item.id} className="p-6 hover:bg-slate-50/80 transition-colors flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-mono font-semibold">
                        {item.submission?.tracking_id || `REVIEW-#${item.id}`}
                      </span>
                      <span className="capitalize text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {item.status || 'invited'}
                      </span>
                      {item.is_overdue && (
                        <span className="px-2 py-0.5 rounded bg-red-100 border border-red-300 text-red-800 text-[11px] font-bold inline-flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 text-red-700" /> Overdue by {item.days_overdue} {item.days_overdue === 1 ? 'day' : 'days'}
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900 leading-snug">
                      {item.submission?.title || 'Untitled Manuscript'}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                      {item.submission?.article_type && (
                        <span>Type: <strong className="text-slate-700 font-medium">{item.submission.article_type}</strong></span>
                      )}
                      {item.submission?.subject_area && (
                        <span>Subject: <strong className="text-slate-700 font-medium">{item.submission.subject_area}</strong></span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    {/* View Manuscript Button (for accepted / completed) */}
                    {(item.status === 'accepted' || item.status === 'completed') && (
                      <a
                        href={route('reviewer.reviews.manuscript', { review: item.id })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#053b2a] text-white text-xs font-semibold rounded-lg hover:bg-[#08543c] focus:ring-2 focus:ring-[#053b2a] focus:ring-offset-2 transition-colors shadow-sm"
                        aria-label={`View manuscript for review ${item.submission?.tracking_id || item.id}`}
                      >
                        <FileText className="w-4 h-4" />
                        View Manuscript
                      </a>
                    )}

                    {/* INVITED Actions */}
                    {item.status === 'invited' && (
                      <>
                        <Link
                          method="post"
                          as="button"
                          href={route('reviewer.reviews.accept', { review: item.id })}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-600 transition-colors shadow-sm"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          Accept Invitation
                        </Link>

                        <Link
                          method="post"
                          as="button"
                          href={route('reviewer.reviews.decline', { review: item.id })}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg hover:bg-slate-300 transition-colors"
                        >
                          Decline
                        </Link>
                      </>
                    )}

                    {/* ACCEPTED & COMPLETED Evaluation Links */}
                    {(item.status === 'accepted' || item.status === 'completed') && (
                      <Link
                        href={route('reviewer.reviews.evaluation', { review: item.id })}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-700 text-white text-xs font-semibold rounded-lg hover:bg-emerald-800 focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2 transition-colors shadow-sm"
                        aria-label={`Evaluate manuscript for review ${item.submission?.tracking_id || item.id}`}
                      >
                        <FileCheck2 className="w-4 h-4" />
                        {item.status === 'completed' ? 'View Evaluation' : 'Evaluate Manuscript'}
                      </Link>
                    )}

                    {/* Declare COI Modal Trigger for Invited / Accepted */}
                    {(item.status === 'invited' || item.status === 'accepted') && (
                      <button
                        type="button"
                        onClick={() => setSelectedCoiReview(item)}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs text-rose-700 hover:text-rose-900 font-medium hover:bg-rose-50 rounded-lg transition-colors"
                      >
                        <AlertTriangle className="w-3.5 h-3.5" />
                        Declare COI
                      </button>
                    )}

                    {/* CONFLICT DECLARED Badge */}
                    {item.status === 'conflict_declared' && (
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold rounded-lg">
                        <AlertTriangle className="w-4 h-4 text-rose-600" />
                        Conflict Declared (Under Review)
                      </span>
                    )}

                    {/* DECLINED Badge */}
                    {item.status === 'declined' && (
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-semibold rounded-lg">
                        Invitation Declined
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="p-12 text-center space-y-4 bg-gradient-to-b from-slate-50/50 to-white">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#053b2a] mx-auto shadow-sm">
                <ShieldCheck className="w-8 h-8" />
              </div>

              <div className="max-w-md mx-auto space-y-2">
                <h3 className="text-lg font-serif font-bold text-slate-900">
                  Reviewer Authentication Active
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Your peer-reviewer account (<span className="font-semibold text-slate-800">{auth_user.email}</span>) is authenticated. Assigned review invitations and double-blind manuscript evaluation forms will appear here once assigned by the editorial board.
                </p>
              </div>

              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-100/80 text-[#053b2a] border border-emerald-300">
                  <Lock className="w-3.5 h-3.5" /> Double-Blind Author Anonymization Active
                </span>
              </div>
            </div>
          )}

        </div>

        {/* Conflict of Interest Declaration Modal */}
        {selectedCoiReview && (
          <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 max-w-md w-full shadow-2xl space-y-4 animate-in fade-in zoom-in duration-150">
              <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 mx-auto">
                <AlertTriangle className="w-6 h-6" />
              </div>

              <div className="text-center space-y-1">
                <h3 className="text-lg font-serif font-bold text-slate-900">
                  Declare Conflict of Interest
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Manuscript: <span className="font-semibold">{selectedCoiReview.submission?.tracking_id}</span>
                </p>
              </div>

              <form onSubmit={handleCoiSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Reason for Conflict of Interest <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe the nature of your financial, institutional, personal, or academic conflict of interest..."
                    value={coiReason}
                    onChange={(e) => setCoiReason(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-rose-500 focus:outline-none transition-all"
                  />
                  {coiError && (
                    <p className="text-[11px] text-rose-600 font-medium mt-1">{coiError}</p>
                  )}
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCoiReview(null);
                      setCoiReason('');
                      setCoiError('');
                    }}
                    className="flex-1 py-2.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 bg-rose-700 text-white text-xs font-bold rounded-xl hover:bg-rose-800 transition-colors shadow-sm"
                  >
                    Submit COI Declaration
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </main>
    </MainLayout>
  );
}
