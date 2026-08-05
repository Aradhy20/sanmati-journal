import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FileText, Upload, CheckCircle2, Clock, AlertCircle, FileCheck,
    Download, Eye, MessageSquare, ChevronRight, Send, Award, FileSpreadsheet, Sparkles
} from 'lucide-react';
import MainLayout from '../../Layouts/MainLayout';
import { Link } from '@inertiajs/react';

export default function AuthorDashboard({ author = null, manuscripts = [] }) {
    const [activeTab, setActiveTab] = useState('overview');
    const [selectedManuscript, setSelectedManuscript] = useState(null);

    const defaultManuscripts = manuscripts.length > 0 ? manuscripts : [
        {
            id: 'SANMATI-2026-042',
            title: 'Multidisciplinary Empirical Approaches in Indian Knowledge Systems',
            category: 'Humanities & Social Sciences',
            submittedDate: '2026-01-15',
            status: 'Under Review',
            statusColor: 'bg-amber-100 text-amber-800 border-amber-200',
            progressStep: 3,
            doi: '10.5281/zenodo.sanmati.042',
            reviewerComments: [
                { date: '2026-01-28', author: 'Reviewer #1', text: 'Strong empirical methodology. Suggest expanding section 3.2 on statistical sampling and citations.' },
                { date: '2026-02-02', author: 'Editor-in-Chief', text: 'Minor revision requested. Please submit revised PDF with highlighted changes.' }
            ]
        },
        {
            id: 'SANMATI-2025-189',
            title: 'Artificial Intelligence and Natural Language Processing for Academic Research',
            category: 'Computer Science & AI',
            submittedDate: '2025-11-10',
            status: 'Published',
            statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
            progressStep: 6,
            doi: '10.5281/zenodo.sanmati.189',
            publishedDate: '2025-12-05',
            volume: 'Volume 1, Issue 2 (2025)',
            downloads: 420,
            views: 1850
        }
    ];

    const timelineSteps = [
        "Submitted",
        "Desk Screening",
        "Peer Review",
        "Revision Requested",
        "Proofreading",
        "Published"
    ];

    return (
        <MainLayout title="Author Dashboard | Sanmati Spectrum Journal" description="Manage your research manuscripts, track peer review progress, download certificates, and respond to reviewer feedback.">
            <div className="py-10 bg-slate-50 min-h-[85vh]">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Header Banner */}
                    <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div className="space-y-1">
                            <span className="px-3 py-1 bg-blue-500/20 text-cyan-300 border border-blue-400/30 text-[10px] font-bold uppercase tracking-wider rounded-full">
                                Author Portal
                            </span>
                            <h1 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight">
                                Welcome, Dr. Author Portal
                            </h1>
                            <p className="text-xs sm:text-sm text-slate-300 font-medium">
                                Manage manuscripts, review timeline progress, and download official publication certificates.
                            </p>
                        </div>

                        <Link
                            href="/submission-guidelines/call-for-papers"
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center gap-2 shrink-0 transition-all"
                        >
                            <Send className="w-4 h-4" /> Submit New Manuscript
                        </Link>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Total Submitted', val: defaultManuscripts.length, icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
                            { label: 'Under Review', val: defaultManuscripts.filter(m => m.status === 'Under Review').length, icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
                            { label: 'Published Papers', val: defaultManuscripts.filter(m => m.status === 'Published').length, icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                            { label: 'Total Article Views', val: '2,270+', icon: Eye, color: 'text-purple-600', bg: 'bg-purple-50' }
                        ].map((stat, i) => {
                            const Icon = stat.icon;
                            return (
                                <div key={i} className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-2xs flex items-center justify-between">
                                    <div>
                                        <div className="text-2xl font-serif font-bold text-slate-900">{stat.val}</div>
                                        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">{stat.label}</div>
                                    </div>
                                    <div className={`w-10 h-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex border-b border-slate-200 bg-white rounded-2xl px-6 pt-3 mb-8 gap-4 overflow-x-auto scrollbar-none shadow-2xs">
                        {[
                            { id: 'overview', label: 'My Manuscripts', icon: FileText },
                            { id: 'certificates', label: 'Certificates & APC Invoices', icon: Award },
                            { id: 'analytics', label: 'Research Analytics', icon: Sparkles }
                        ].map(tab => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 pb-3 text-xs font-bold border-b-2 transition-all shrink-0 ${
                                        activeTab === tab.id
                                            ? 'border-blue-600 text-blue-600'
                                            : 'border-transparent text-slate-500 hover:text-slate-900'
                                    }`}
                                >
                                    <Icon className="w-4 h-4" /> {tab.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Tab 1: Manuscripts */}
                    {activeTab === 'overview' && (
                        <div className="space-y-6">
                            {defaultManuscripts.map((m, idx) => (
                                <div key={idx} className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-2xs space-y-6">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">ID: {m.id}</span>
                                                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${m.statusColor}`}>
                                                    {m.status}
                                                </span>
                                            </div>
                                            <h3 className="text-base font-bold text-slate-900 leading-snug">{m.title}</h3>
                                            <p className="text-xs text-slate-500 font-medium">Category: {m.category} • Submitted on {m.submittedDate}</p>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            {m.reviewerComments && (
                                                <button
                                                    onClick={() => setSelectedManuscript(m)}
                                                    className="px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-100 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-colors"
                                                >
                                                    <MessageSquare className="w-3.5 h-3.5" /> Reviewer Notes ({m.reviewerComments.length})
                                                </button>
                                            )}
                                            {m.status === 'Published' && (
                                                <Link
                                                    href={`/article/${m.id}`}
                                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 transition-colors"
                                                >
                                                    <Eye className="w-3.5 h-3.5" /> View Paper
                                                </Link>
                                            )}
                                        </div>
                                    </div>

                                    {/* Submission Progress Bar */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs font-bold text-slate-600">
                                            <span>Peer Review Progress Tracker</span>
                                            <span>Step {m.progressStep} of {timelineSteps.length}</span>
                                        </div>
                                        <div className="grid grid-cols-6 gap-2">
                                            {timelineSteps.map((step, sIdx) => {
                                                const isCompleted = sIdx < m.progressStep;
                                                const isCurrent = sIdx + 1 === m.progressStep;
                                                return (
                                                    <div key={sIdx} className="space-y-1">
                                                        <div className={`h-2 rounded-full transition-all ${
                                                            isCompleted ? 'bg-blue-600' : isCurrent ? 'bg-amber-500 animate-pulse' : 'bg-slate-200'
                                                        }`} />
                                                        <span className={`block text-[9px] font-bold uppercase tracking-wider text-center truncate ${
                                                            isCompleted || isCurrent ? 'text-slate-900' : 'text-slate-400'
                                                        }`}>
                                                            {step}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Tab 2: Certificates */}
                    {activeTab === 'certificates' && (
                        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-2xs space-y-4">
                            <h3 className="text-base font-bold text-slate-900">Author Certificates & Receipts</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {defaultManuscripts.filter(m => m.status === 'Published').map((m, i) => (
                                    <div key={i} className="p-4 border border-slate-200 rounded-2xl bg-slate-50/60 flex items-center justify-between">
                                        <div className="space-y-1 pr-4">
                                            <span className="text-[10px] font-bold uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Verified Certificate</span>
                                            <h4 className="text-xs font-bold text-slate-900 line-clamp-1">{m.title}</h4>
                                            <p className="text-[11px] text-slate-500 font-medium">{m.volume} • DOI: {m.doi}</p>
                                        </div>
                                        <a
                                            href={`/download/certificate/${m.id}`}
                                            className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shrink-0"
                                        >
                                            <Download className="w-3.5 h-3.5" /> PDF
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Reviewer Comments Drawer Modal */}
                    <AnimatePresence>
                        {selectedManuscript && (
                            <div className="fixed inset-0 z-[200] overflow-y-auto p-4 sm:p-6 md:p-20 flex items-center justify-center">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
                                    onClick={() => setSelectedManuscript(null)}
                                />
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl p-6 border border-slate-200 z-10 space-y-4"
                                >
                                    <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                                        <h3 className="text-base font-bold text-slate-900">Reviewer Notes & Revision Upload</h3>
                                        <button onClick={() => setSelectedManuscript(null)} className="text-slate-400 hover:text-slate-600 font-bold">✕</button>
                                    </div>

                                    <div className="space-y-3 max-h-60 overflow-y-auto">
                                        {selectedManuscript.reviewerComments.map((note, nIdx) => (
                                            <div key={nIdx} className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-xs space-y-1">
                                                <div className="flex justify-between font-bold text-amber-900">
                                                    <span>{note.author}</span>
                                                    <span className="text-[10px] text-amber-700">{note.date}</span>
                                                </div>
                                                <p className="text-slate-700 font-medium">{note.text}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-3 border-t border-slate-100 space-y-2">
                                        <label className="block text-xs font-bold text-slate-700 uppercase">Upload Revised Manuscript (PDF)</label>
                                        <input type="file" accept=".pdf" className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                                        <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-colors mt-2">
                                            Submit Revised Manuscript
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </MainLayout>
    );
}
