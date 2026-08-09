import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { 
  FileText, 
  Search, 
  Filter, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  ArrowUpRight, 
  RefreshCw,
  ShieldCheck,
  UserCheck,
  FolderOpen,
  UserPlus,
  Lock
} from 'lucide-react';

export default function Dashboard({ counts = {}, submissions = {}, filters = {}, auth_user = {} }) {
  const [searchTerm, setSearchTerm] = useState(filters.search || '');
  const [statusFilter, setStatusFilter] = useState(filters.status || '');
  const [claimingId, setClaimingId] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    router.get(
      route('editor.dashboard'),
      { search: searchTerm, status: statusFilter },
      { preserveState: true, replace: true }
    );
  };

  const handleStatusChange = (newStatus) => {
    setStatusFilter(newStatus);
    router.get(
      route('editor.dashboard'),
      { search: searchTerm, status: newStatus },
      { preserveState: true, replace: true }
    );
  };

  const handleReset = () => {
    setSearchTerm('');
    setStatusFilter('');
    router.get(route('editor.dashboard'), {}, { preserveState: true, replace: true });
  };

  const handleClaim = (submissionId) => {
    setClaimingId(submissionId);
    router.post(
      route('editor.submissions.claim', submissionId),
      {},
      {
        preserveScroll: true,
        onFinish: () => setClaimingId(null),
      }
    );
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'submitted':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-300">
            <Clock className="w-3.5 h-3.5 text-amber-600" /> Awaiting Screening
          </span>
        );
      case 'under_review':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-300">
            <RefreshCw className="w-3.5 h-3.5 text-blue-600 animate-spin" /> Under Peer Review
          </span>
        );
      case 'revisions_requested':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-800 border border-orange-300">
            <AlertTriangle className="w-3.5 h-3.5 text-orange-600" /> Revisions Requested
          </span>
        );
      case 'accepted':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Accepted
          </span>
        );
      case 'rejected':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-800 border border-red-300">
            <XCircle className="w-3.5 h-3.5 text-red-600" /> Rejected
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-300">
            <FileText className="w-3.5 h-3.5" /> {status || 'Submitted'}
          </span>
        );
    }
  };

  const getEditorBadge = (item) => {
    if (!item.editor_id) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-900 border border-amber-300">
          Unassigned (Claimable)
        </span>
      );
    }

    if (item.editor_id === auth_user.id) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-900 border border-emerald-300">
          <ShieldCheck className="w-3 h-3 text-emerald-700" /> Assigned to You
        </span>
      );
    }

    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-300">
        <Lock className="w-3 h-3 text-slate-400" /> Assigned: {item.editor?.full_name || `Editor #${item.editor_id}`}
      </span>
    );
  };

  const submissionList = submissions?.data || [];
  const paginationLinks = submissions?.links || [];

  return (
    <MainLayout>
      <Head title="Editor Dashboard — Sanmati Spectrum of Knowledge" />

      {/* Header Banner */}
      <section className="bg-gradient-to-br from-[#053b2a] via-[#09573e] to-[#04281c] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 uppercase tracking-widest mb-2">
              <ShieldCheck className="w-4 h-4 text-amber-300" />
              <span>Editorial Workspace</span>
              <span>•</span>
              <span>Ownership Isolation Active</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Editorial Workqueue & Dashboard
            </h1>
            <p className="mt-2 text-emerald-100/90 text-sm max-w-2xl">
              Oversee incoming manuscripts, claim unassigned submissions, evaluate review progress, and perform authorized editorial operations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Total Scoped</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">{counts.total || 0}</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 shadow-sm">
            <p className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider">Assigned to Me</p>
            <p className="text-2xl font-bold text-emerald-900 mt-1">{counts.assigned_to_me || 0}</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-amber-200 bg-amber-50/50 shadow-sm">
            <p className="text-[11px] font-semibold text-amber-800 uppercase tracking-wider">Unassigned</p>
            <p className="text-2xl font-bold text-amber-900 mt-1">{counts.unassigned || 0}</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 bg-slate-50/50 shadow-sm">
            <p className="text-[11px] font-semibold text-slate-700 uppercase tracking-wider">Awaiting Screen</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">{counts.submitted || 0}</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-blue-200 bg-blue-50/30 shadow-sm">
            <p className="text-[11px] font-semibold text-blue-800 uppercase tracking-wider">Under Review</p>
            <p className="text-2xl font-bold text-blue-900 mt-1">{counts.under_review || 0}</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-orange-200 bg-orange-50/30 shadow-sm">
            <p className="text-[11px] font-semibold text-orange-800 uppercase tracking-wider">Revisions Req.</p>
            <p className="text-2xl font-bold text-orange-900 mt-1">{counts.revisions_requested || 0}</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-emerald-200 bg-emerald-50/30 shadow-sm">
            <p className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider">Accepted</p>
            <p className="text-2xl font-bold text-emerald-900 mt-1">{counts.accepted || 0}</p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-sm mb-6">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by title, tracking ID (SJ-XXXXXX), author name, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#053b2a] focus:border-transparent transition-all"
              />
            </div>

            {/* Status Filter Dropdown */}
            <div className="relative w-full md:w-56">
              <Filter className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <select
                value={statusFilter}
                onChange={(e) => handleStatusChange(e.target.value)}
                className="w-full pl-10 pr-8 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#053b2a] focus:border-transparent appearance-none cursor-pointer"
              >
                <option value="">All Statuses</option>
                <option value="submitted">Submitted (Awaiting Screening)</option>
                <option value="under_review">Under Peer Review</option>
                <option value="revisions_requested">Revisions Requested</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            {/* Submit & Reset Actions */}
            <div className="flex items-center gap-2">
              <button
                type="submit"
                className="px-4 py-2.5 bg-[#053b2a] text-white rounded-lg text-sm font-medium hover:bg-[#08543c] transition-colors focus:ring-2 focus:ring-[#053b2a] focus:ring-offset-2"
              >
                Search
              </button>
              {(filters.search || filters.status) && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-3 py-2.5 border border-slate-300 text-slate-600 rounded-lg text-sm hover:bg-slate-50 transition-colors"
                >
                  Reset
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Submissions List / Table */}
        {submissionList.length === 0 ? (
          /* Empty State */
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center shadow-sm">
            <div className="w-16 h-16 bg-emerald-50 text-[#053b2a] rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-100">
              <FolderOpen className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">
              {filters.search || filters.status ? 'No matching manuscripts found' : 'No manuscripts in workqueue'}
            </h3>
            <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
              {filters.search || filters.status
                ? 'Try adjusting your search criteria or clearing filters.'
                : 'There are currently no manuscripts assigned or available in your workqueue.'}
            </p>
            {(filters.search || filters.status) && (
              <button
                onClick={handleReset}
                className="mt-6 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200"
              >
                Clear Filters
              </button>
            )}
          </div>
        ) : (
          /* Submissions List Cards */
          <div className="space-y-4">
            {submissionList.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#053b2a] bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md">
                      {item.tracking_id}
                    </span>
                    <span className="text-xs text-slate-500 font-medium px-2 py-0.5 bg-slate-100 rounded">
                      {item.article_type || 'Original Research'}
                    </span>
                    {getStatusBadge(item.status)}
                    {getEditorBadge(item)}
                  </div>

                  <h2 className="text-lg font-serif font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <UserCheck className="w-3.5 h-3.5 text-slate-400" /> Author: {item.author_name} ({item.author_email})
                    </span>
                    <span>Submitted: {new Date(item.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                    {item.country && <span>Country: {item.country}</span>}
                  </div>
                </div>

                <div className="flex items-center gap-2.5 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 shrink-0">
                  {/* Claim Button if Unassigned */}
                  {!item.editor_id && (
                    <button
                      onClick={() => handleClaim(item.id)}
                      disabled={claimingId === item.id}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-amber-500 text-slate-950 font-bold text-xs rounded-lg hover:bg-amber-400 disabled:opacity-50 transition-colors shadow-sm"
                    >
                      <UserPlus className="w-3.5 h-3.5" />
                      {claimingId === item.id ? 'Claiming...' : 'Claim Manuscript'}
                    </button>
                  )}

                  <Link
                    href={route('admin.submissions')}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-[#053b2a] transition-colors"
                  >
                    <span>View Submission</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}

            {/* Pagination Controls */}
            {paginationLinks.length > 3 && (
              <div className="flex items-center justify-between border-t border-slate-200 pt-6 mt-8">
                <div className="text-xs text-slate-500">
                  Showing {submissions.from} to {submissions.to} of {submissions.total} submissions
                </div>
                <div className="flex items-center gap-1">
                  {paginationLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.url || '#'}
                      dangerouslySetInnerHTML={{ __html: link.label }}
                      className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
                        link.active
                          ? 'bg-[#053b2a] text-white font-bold'
                          : link.url
                          ? 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                          : 'bg-slate-50 text-slate-400 cursor-not-allowed'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </MainLayout>
  );
}
