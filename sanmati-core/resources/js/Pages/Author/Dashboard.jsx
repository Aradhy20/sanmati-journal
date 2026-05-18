import React from 'react';
import MainLayout from '../../Layouts/MainLayout';
import PageHeader from '../../Components/PageHeader';
import { FileText, CheckCircle, Clock, Search, AlertCircle, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AuthorDashboard({ submissions = [] }) {
    // Fallback static data if no database submissions propagated
    const activeSubmissions = submissions.length > 0 ? submissions : [
        {
            id: 'SJ-492104',
            title: 'Pedagogical Impacts of Machine Learning in Undergraduate Education',
            status: 'under_review',
            date: '2026-03-20',
            file_name: 'manuscript_v1.pdf'
        },
        {
            id: 'SJ-103942',
            title: 'A Comparative Analysis of Organic Compounds in Synthetic Structures',
            status: 'revisions_requested',
            date: '2026-03-15',
            file_name: 'smith_et_al_chemistry.pdf'
        }
    ];

    const getStatusConfig = (status) => {
        switch(status) {
            case 'under_review':
                return { color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200', icon: Clock, label: 'Under Double-Blind Review' };
            case 'revisions_requested':
                return { color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200', icon: AlertCircle, label: 'Revisions Requested' };
            case 'accepted':
                return { color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200', icon: CheckCircle, label: 'Accepted for Publication' };
            default:
                return { color: 'text-gray-600', bg: 'bg-gray-50', border: 'border-gray-200', icon: FileText, label: 'Submitted' };
        }
    };

    return (
        <MainLayout>
            <div className="bg-[#eef1ff] min-h-screen">
                <PageHeader
                    title="Author Dashboard"
                    breadcrumb="My Submissions"
                    subtitle="Track your manuscript status in real-time."
                />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
                    
                    {/* Header Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {[{ label: 'Total Submitted', val: '2', color: 'bg-indigo-600' }, { label: 'Under Review', val: '1', color: 'bg-blue-500' }, { label: 'Publications', val: '0', color: 'bg-emerald-500' }].map((stat, i) => (
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center justify-between overflow-hidden relative group">
                                <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-20 ${stat.color} group-hover:opacity-40 transition-opacity`}></div>
                                <div>
                                    <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">{stat.label}</p>
                                    <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-slate-800">{stat.val}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Submissions List */}
                    <div className="bg-white rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden">
                        <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-white/50 backdrop-blur-md">
                            <h3 className="text-2xl font-serif font-bold text-slate-900">Manuscript Registry</h3>
                            <button className="text-sm font-bold text-blue-600 bg-blue-50 px-6 py-2.5 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                                + New Submission
                            </button>
                        </div>
                        
                        <div className="divide-y divide-gray-50">
                            {activeSubmissions.map((sub, index) => {
                                const config = getStatusConfig(sub.status);
                                const StatusIcon = config.icon;
                                return (
                                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + (index * 0.1) }} key={sub.id} className="p-8 hover:bg-slate-50 transition-colors flex flex-col md:flex-row gap-6 items-start md:items-center justify-between group">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="font-mono text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-md">{sub.id}</span>
                                                <span className={`flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md border ${config.bg} ${config.color} ${config.border}`}>
                                                    <StatusIcon className="w-3 h-3" /> {config.label}
                                                </span>
                                            </div>
                                            <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{sub.title}</h4>
                                            
                                            <div className="flex flex-wrap items-center gap-6 mt-4">
                                                <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                                                    <Calendar className="w-4 h-4 text-slate-400" /> Submitted: {sub.date}
                                                </div>
                                                <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                                                    <FileText className="w-4 h-4 text-slate-400" /> {sub.file_name}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="shrink-0 flex gap-3">
                                            {sub.status === 'revisions_requested' && (
                                                <button className="px-5 py-2.5 bg-orange-600 text-white font-bold text-sm rounded-xl hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/30">
                                                    Upload Revision
                                                </button>
                                            )}
                                            <button className="px-5 py-2.5 bg-white border border-gray-200 text-slate-700 font-bold text-sm rounded-xl hover:bg-slate-50 transition-colors">
                                                View Details
                                            </button>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}
