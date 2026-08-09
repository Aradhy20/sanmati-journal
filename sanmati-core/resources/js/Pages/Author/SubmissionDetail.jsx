import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { 
  ArrowLeft, 
  Clock, 
  FileText, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  RefreshCw, 
  Building, 
  Globe, 
  Tag, 
  UserCheck, 
  Calendar, 
  Info,
  Layers,
  ShieldCheck
} from 'lucide-react';

export default function SubmissionDetail({ submission }) {
  const getStatusBadge = (status) => {
    switch (status) {
      case 'submitted':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-300">
            <Clock className="w-4 h-4 text-amber-600" /> Submitted
          </span>
        );
      case 'under_editorial_screening':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-800 border border-indigo-300">
            <ShieldCheck className="w-4 h-4 text-indigo-600" /> Editorial Screening
          </span>
        );
      case 'under_review':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-300">
            <RefreshCw className="w-4 h-4 text-blue-600 animate-spin" /> Under Peer Review
          </span>
        );
      case 'revisions_requested':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-orange-50 text-orange-800 border border-orange-300">
            <AlertTriangle className="w-4 h-4 text-orange-600" /> Revisions Requested
          </span>
        );
      case 'accepted':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Accepted for Publication
          </span>
        );
      case 'rejected':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-red-50 text-red-800 border border-red-300">
            <XCircle className="w-4 h-4 text-red-600" /> Decision: Rejected
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-300">
            <FileText className="w-4 h-4" /> {status || 'Submitted'}
          </span>
        );
    }
  };

  const formatStatusName = (statusStr) => {
    if (!statusStr) return 'Submitted';
    switch (statusStr) {
      case 'submitted': return 'Manuscript Submitted';
      case 'under_review': return 'Under Peer Review';
      case 'revisions_requested': return 'Revisions Requested';
      case 'accepted': return 'Accepted for Publication';
      case 'rejected': return 'Submission Rejected';
      default: return statusStr.replace('_', ' ');
    }
  };

  const histories = submission?.status_histories || [];

  return (
    <MainLayout>
      <Head title={`Manuscript ${submission.tracking_id} — Sanmati Spectrum`} />

      {/* Header Banner */}
      <section className="bg-gradient-to-br from-[#053b2a] via-[#09573e] to-[#04281c] text-white py-10 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/40">
        <div className="max-w-6xl mx-auto">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-medium text-emerald-200/90 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href={route('author.dashboard')} className="hover:text-white transition-colors">Author Dashboard</Link>
            <span>/</span>
            <span className="text-amber-300 font-mono font-bold">{submission.tracking_id}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold text-amber-300 bg-amber-950/80 border border-amber-500/40 px-3 py-1 rounded-full">
              {submission.tracking_id}
            </span>
            <span className="text-xs font-medium text-emerald-100 bg-emerald-900/60 px-3 py-1 rounded-full border border-emerald-700/60">
              {submission.article_type || 'Original Research'}
            </span>
            {submission.subject_area && (
              <span className="text-xs text-emerald-200/90 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/60">
                {submission.subject_area}
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight tracking-tight">
            {submission.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-emerald-100/90">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-amber-300" /> Corresponding Author: {submission.author_name}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-300" /> Submitted: {new Date(submission.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
            </span>
          </div>
        </div>
      </section>

      {/* Main Detail Grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* Status Card Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Evaluation Status</p>
            <div className="mt-2 flex items-center gap-3">
              {getStatusBadge(submission.status)}
            </div>
          </div>

          <div className="text-xs text-slate-500 md:text-right border-t md:border-t-0 border-slate-100 pt-3 md:pt-0">
            <p>Last Activity: <span className="font-semibold text-slate-700">{new Date(submission.updated_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span></p>
            <p className="mt-0.5 text-emerald-700 font-medium flex items-center gap-1 md:justify-end">
              <ShieldCheck className="w-3.5 h-3.5" /> Direct Primary Ownership Secured
            </p>
          </div>
        </div>

        {/* Revisions Notice (if revisions requested) */}
        {submission.status === 'revisions_requested' && (
          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl shadow-sm">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-amber-900">Revision Requested by Editors</h3>
                <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                  Revision requested. Revision submission functionality will be available through the author workflow in upcoming operational updates.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Manuscript Content & Metadata (2 Cols) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Abstract Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 mb-3">
                <FileText className="w-4 h-4 text-[#053b2a]" /> Abstract
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line bg-slate-50 p-4 rounded-xl border border-slate-200/70">
                {submission.abstract}
              </p>
            </div>

            {/* Keywords & Details */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 mb-1">
                <Layers className="w-4 h-4 text-[#053b2a]" /> Manuscript Metadata
              </h2>

              {submission.keywords && (
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase">Keywords</p>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {submission.keywords.split(',').map((kw, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1 text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium">
                        <Tag className="w-3 h-3 text-slate-400" /> {kw.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-100">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70">
                  <p className="text-xs font-semibold text-slate-500 uppercase">Corresponding Author</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">{submission.author_name}</p>
                  <p className="text-xs text-slate-600">{submission.author_email}</p>
                  {submission.author_phone && <p className="text-xs text-slate-500 mt-0.5">{submission.author_phone}</p>}
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70">
                  <p className="text-xs font-semibold text-slate-500 uppercase">Institution & Country</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">{submission.institution || 'Institutional Affiliation Not Specified'}</p>
                  <p className="text-xs text-slate-600 flex items-center gap-1 mt-0.5">
                    <Globe className="w-3 h-3 text-slate-400" /> {submission.country || 'India'}
                  </p>
                </div>
              </div>

              {/* Co-Authors Listing (if any) */}
              {submission.authors_json && Array.isArray(submission.authors_json) && submission.authors_json.length > 0 && (
                <div className="pt-3 border-t border-slate-100">
                  <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Co-Authors ({submission.authors_json.length})</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {submission.authors_json.map((co, idx) => (
                      <div key={idx} className="p-2.5 bg-slate-50 rounded-lg text-xs border border-slate-200/60">
                        <p className="font-semibold text-slate-800">{co.name || `Co-author #${idx + 1}`}</p>
                        {co.email && <p className="text-slate-500 text-[11px]">{co.email}</p>}
                        {co.institution && <p className="text-slate-500 text-[11px]">{co.institution}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Truthful Status History & Workflow Timeline */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-[#053b2a]" /> Status & Event History
              </h2>

              {histories.length > 0 ? (
                /* Render stored historical events */
                <div className="relative pl-6 border-l-2 border-emerald-100 space-y-6">
                  {histories.map((ev, index) => (
                    <div key={ev.id || index} className="relative">
                      {/* Timeline dot */}
                      <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#053b2a] border-2 border-white ring-2 ring-emerald-100" />
                      
                      <div>
                        <p className="text-xs font-bold text-slate-900 leading-snug">
                          {formatStatusName(ev.to_status)}
                        </p>
                        <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                          {new Date(ev.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Fallback for legacy submissions: Truthful display without fake historical events */
                <div className="space-y-4">
                  <div className="relative pl-6 border-l-2 border-emerald-200">
                    <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#053b2a] border-2 border-white ring-2 ring-emerald-100" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">Manuscript Submitted</p>
                      <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                        {new Date(submission.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
                    <Info className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      Detailed status history will appear as your manuscript progresses through peer review and editorial evaluation.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Actions Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Author Options</h3>
              <Link
                href={route('author.dashboard')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-[#053b2a] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Return to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
