import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, CheckCircle2, Star, Send, Download } from 'lucide-react';
import MainLayout from '../../Layouts/MainLayout';

export default function ReviewerDashboard() {
    const assignedPapers = [
        { id: 'SANMATI-2026-051', title: 'Empirical Metrics for Generative AI in Academic Literature Reviews', deadline: '2026-02-20', status: 'Review Pending' }
    ];

    return (
        <MainLayout title="Reviewer Portal | Sanmati Spectrum Journal" description="Peer reviewer portal for reviewing assigned research manuscripts and submitting evaluation reports.">
            <div className="py-10 bg-slate-50 min-h-[85vh]">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl mb-8 flex items-center justify-between">
                        <div className="space-y-1">
                            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-[10px] font-bold uppercase tracking-wider rounded-full">
                                Double-Blind Peer Review Portal
                            </span>
                            <h1 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight">
                                Peer Reviewer Workspace
                            </h1>
                            <p className="text-xs sm:text-sm text-slate-300 font-medium">
                                Evaluate manuscripts under COPE ethical standards.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-2xs space-y-4">
                        <h3 className="text-base font-bold text-slate-900">Assigned Manuscripts for Peer Evaluation</h3>
                        
                        {assignedPapers.map((paper, idx) => (
                            <div key={idx} className="p-5 border border-slate-200 rounded-2xl bg-slate-50/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                <div className="space-y-1">
                                    <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">ID: {paper.id}</span>
                                    <h4 className="text-sm font-bold text-slate-900">{paper.title}</h4>
                                    <p className="text-xs text-slate-500">Review Deadline: {paper.deadline}</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <a href={`/download/manuscript/${paper.id}`} className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-bold text-xs rounded-xl flex items-center gap-1.5">
                                        <Download className="w-3.5 h-3.5 text-blue-600" /> Read PDF
                                    </a>
                                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center gap-1.5">
                                        <Send className="w-3.5 h-3.5" /> Submit Review Report
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}
