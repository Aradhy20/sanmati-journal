import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { 
  FileText, 
  Search, 
  Filter, 
  PlusCircle, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  ArrowUpRight, 
  BookOpen, 
  RefreshCw 
} from 'lucide-react';

export default function Dashboard({ counts = {}, submissions = {}, filters = {} }) {
  const [searchTerm, setSearchTerm] = useState(filters.search || '');
  const [statusFilter, setStatusFilter] = useState(filters.status || '');

  const handleSearch = (e) => {
    e.preventDefault();
    router.get(
      route('author.dashboard'),
      { search: searchTerm, status: statusFilter },
      { preserveState: true, replace: true }
    );
  };

  const handleStatusChange = (newStatus) => {
    setStatusFilter(newStatus);
    router.get(
      route('author.dashboard'),
      { search: searchTerm, status: newStatus },
      { preserveState: true, replace: true }
    );
  };

  const handleReset = () => {
    setSearchTerm('');
    setStatusFilter('');
    router.get(route('author.dashboard'), {}, { preserveState: true, replace: true });
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'submitted':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
            <Clock className="w-3.5 h-3.5" /> Submitted
          </span>
        );
      case 'under_editorial_screening':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-800 border border-indigo-200">
            <Clock className="w-3.5 h-3.5 text-indigo-600" /> Editorial Screening
          </span>
        );
      case 'under_review':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Under Peer Review
          </span>
        );
      case 'revisions_requested':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-700 border border-orange-200">
            <AlertTriangle className="w-3.5 h-3.5" /> Revisions Requested
          </span>
        );
      case 'accepted':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5" /> Accepted for Publication
          </span>
        );
      case 'rejected':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-200">
            <XCircle className="w-3.5 h-3.5" /> Decision: Rejected
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
            <FileText className="w-3.5 h-3.5" /> {status || 'Submitted'}
          </span>
        );
    }
  };

  const submissionList = submissions?.data || [];
  const paginationLinks = submissions?.links || [];

  return (
    <MainLayout>
      <Head title="Author Dashboard — Sanmati Spectrum of Knowledge" />

      {/* Header Banner */}
      <section className="bg-gradient-to-br from-[#053b2a] via-[#09573e] to-[#04281c] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 uppercase tracking-widest mb-2">
              <span>Author Workspace</span>
              <span>•</span>
              <span>Sanmati Portal</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              My Research Submissions
            </h1>
            <p className="mt-2 text-emerald-100/90 text-sm max-w-2xl">
              Track manuscript evaluation status, submit new research, and review editorial feedback securely.
            </p>
          </div>

          <Link
            href={route('submission-guidelines.call-for-papers')}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-amber-400 text-slate-900 font-semibold text-sm hover:bg-amber-300 transition-all shadow-lg hover:shadow-amber-400/20 shrink-0"
          >
            <PlusCircle className="w-4 h-4" />
            Submit New Manuscript
          </Link>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Total Papers</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">{counts.total || 0}</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-amber-100 bg-amber-50/30 shadow-sm">
            <p className="text-xs font-medium text-amber-700 uppercase tracking-wider">Submitted</p>
            <p className="text-2xl font-bold text-amber-800 mt-1">{counts.submitted || 0}</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-blue-100 bg-blue-50/30 shadow-sm">
            <p className="text-xs font-medium text-blue-700 uppercase tracking-wider">Under Review</p>
            <p className="text-2xl font-bold text-blue-800 mt-1">{counts.under_review || 0}</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-orange-100 bg-orange-50/30 shadow-sm">
            <p className="text-xs font-medium text-orange-700 uppercase tracking-wider">Revisions Req.</p>
            <p className="text-2xl font-bold text-orange-800 mt-1">{counts.revisions_requested || 0}</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-emerald-100 bg-emerald-50/30 shadow-sm">
            <p className="text-xs font-medium text-emerald-700 uppercase tracking-wider">Accepted</p>
            <p className="text-2xl font-bold text-emerald-800 mt-1">{counts.accepted || 0}</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-red-100 bg-red-50/30 shadow-sm">
            <p className="text-xs font-medium text-red-700 uppercase tracking-wider">Rejected</p>
            <p className="text-2xl font-bold text-red-800 mt-1">{counts.rejected || 0}</p>
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
                placeholder="Search by paper title or tracking ID (e.g. SJ-XXXXXX)..."
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
                <option value="submitted">Submitted</option>
                <option value="under_review">Under Review</option>
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
                Apply Search
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
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">
              {filters.search || filters.status ? 'No matching submissions found' : 'No manuscripts submitted yet'}
            </h3>
            <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
              {filters.search || filters.status
                ? 'Try adjusting your search criteria or clearing filters to locate your manuscript.'
                : 'You have not submitted any research manuscripts to Sanmati Spectrum of Knowledge yet.'}
            </p>
            <div className="mt-6 flex justify-center gap-3">
              {filters.search || filters.status ? (
                <button
                  onClick={handleReset}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200"
                >
                  Clear Filters
                </button>
              ) : (
                <Link
                  href={route('submission-guidelines.call-for-papers')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#053b2a] text-white rounded-lg text-sm font-medium hover:bg-[#08543c] shadow-md"
                >
                  <PlusCircle className="w-4 h-4" />
                  Submit Your First Manuscript
                </Link>
              )}
            </div>
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
                  </div>

                  <h2 className="text-lg font-serif font-bold text-slate-900 hover:text-[#053b2a] transition-colors leading-snug">
                    {item.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
                    <span>Submitted: {new Date(item.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                    {item.country && <span>Country: {item.country}</span>}
                    {item.authors_json && Array.isArray(item.authors_json) && item.authors_json.length > 0 && (
                      <span>Co-Authors: {item.authors_json.length}</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100">
                  <Link
                    href={route('author.submissions.show', item.id)}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-[#053b2a] transition-colors"
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
