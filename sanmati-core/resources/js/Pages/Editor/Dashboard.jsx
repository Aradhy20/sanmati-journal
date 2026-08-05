import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, CheckCircle2, XCircle, Clock, FileText, Send, UserCheck, MessageSquare, ChevronRight } from 'lucide-react';
import MainLayout from '../../Layouts/MainLayout';

export default function EditorDashboard() {
    const [filterStatus, setFilterStatus] = useState('all');

    const pendingQueue = [
        { id: 'SANMATI-2026-051', title: 'Empirical Metrics for Generative AI in Academic Literature Reviews', author: 'Dr. S. Padmapriya', category: 'Computer Science & AI', submitted: '2026-02-01', reviewerAssigned: 'Dr. Shashank Rao', status: 'Desk Review' },
        { id: 'SANMATI-2026-049', title: 'Legal Governance and Intellectual Property Rights in Modern Higher Education', author: 'Dr. Vipin Kumar', category: 'Law & Governance', submitted: '2026-01-29', reviewerAssigned: 'Prof. Shruti Rai', status: 'Peer Review In-Progress' }
    ];

    return (
        <MainLayout title="Editor Directorate Dashboard | Sanmati Spectrum Journal" description="Managing Editor Queue, peer reviewer assignments, desk screening, and final editorial decisions.">
            <div className="py-10 bg-slate-50 min-h-[85vh]">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Header */}
                    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl mb-8 flex items-center justify-between">
                        <div className="space-y-1">
                            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-[10px] font-bold uppercase tracking-wider rounded-full">
                                Editorial Directorate
                            </span>
                            <h1 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight">
                                Managing Editor Control Panel
                            </h1>
                            <p className="text-xs sm:text-sm text-slate-300 font-medium">
                                Sanmati Spectrum of Knowledge (ISSN 3108-1819) Editorial Queue
                            </p>
                        </div>
                    </div>

                    {/* Queue Table */}
                    <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-2xs space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                            <h3 className="text-base font-bold text-slate-900">Manuscript Editorial Queue ({pendingQueue.length})</h3>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                                        <th className="p-3">Manuscript ID</th>
                                        <th className="p-3">Title & Category</th>
                                        <th className="p-3">Corresponding Author</th>
                                        <th className="p-3">Assigned Reviewer</th>
                                        <th className="p-3">Status</th>
                                        <th className="p-3 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pendingQueue.map((item, idx) => (
                                        <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50/60 transition-colors">
                                            <td className="p-3 font-mono font-bold text-blue-600">{item.id}</td>
                                            <td className="p-3 font-bold text-slate-900 max-w-xs truncate">{item.title}</td>
                                            <td className="p-3 text-slate-600 font-medium">{item.author}</td>
                                            <td className="p-3 text-slate-600 font-medium">{item.reviewerAssigned}</td>
                                            <td className="p-3">
                                                <span className="px-2.5 py-0.5 bg-amber-50 text-amber-800 border border-amber-200 font-bold text-[10px] rounded-full">
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td className="p-3 text-right space-x-2">
                                                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-xs">Assign</button>
                                                <button className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs">Accept</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}
