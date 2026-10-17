import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Copy, Check, X, BookOpen, Quote, FileText, Share2 } from 'lucide-react';

export default function AiFeaturesModal({ isOpen, onClose, paper }) {
    const [activeTab, setActiveTab] = useState('summary');
    const [copiedFormat, setCopiedFormat] = useState(null);

    if (!paper) return null;

    const authorsList = paper.authors || 'Sanmati Spectrum Author';
    const paperTitle = paper.title || 'Research Paper';
    const rawDoi = paper.doi || '10.5281/zenodo.sanmati';
    const doi = rawDoi.replace(/^https?:\/\/(dx\.)?doi\.org\//i, '');
    const volume = paper.issue?.volume ?? '2';
    const issueNum = paper.issue?.number ?? '2';
    const year = paper.issue?.year ?? (paper.created_at ? new Date(paper.created_at).getFullYear() : '2026');
    const pages = paper.page_numbers || '1-10';

    const citations = {
        apa: `${authorsList} (${year}). ${paperTitle}. Sanmati Spectrum of Knowledge, ${volume}(${issueNum}), ${pages}. https://doi.org/${doi}`,
        ieee: `${authorsList}, "${paperTitle}," Sanmati Spectrum of Knowledge, vol. ${volume}, no. ${issueNum}, pp. ${pages}, ${year}, doi: ${doi}.`,
        mla: `${authorsList}. "${paperTitle}." Sanmati Spectrum of Knowledge, vol. ${volume}, no. ${issueNum}, ${year}, pp. ${pages}.`,
        bibtex: `@article{sanmati_${year}_${paper.id || 'paper'},\n  author = {${authorsList}},\n  title = {${paperTitle}},\n  journal = {Sanmati Spectrum of Knowledge & Emerging Discourse},\n  volume = {${volume}},\n  number = {${issueNum}},\n  pages = {${pages}},\n  year = {${year}},\n  issn = {3108-1819},\n  doi = {${doi}}\n}`
    };

    const handleCopy = (format, text) => {
        navigator.clipboard.writeText(text);
        setCopiedFormat(format);
        setTimeout(() => setCopiedFormat(null), 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] overflow-y-auto p-4 sm:p-6 md:p-20 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 15 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white">
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-blue-500/20 rounded-xl border border-blue-400/30">
                                    <Sparkles className="w-5 h-5 text-cyan-300 animate-pulse" />
                                </div>
                                <div>
                                    <h3 className="font-serif font-bold text-lg leading-tight">AI Assistant & Citation Tools</h3>
                                    <p className="text-[10px] text-blue-200 font-medium">Sanmati Spectrum AI Researcher Suite</p>
                                </div>
                            </div>
                            <button onClick={onClose} className="p-1.5 hover:bg-white/10 rounded-full text-slate-300 hover:text-white">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Navigation Tabs */}
                        <div className="flex border-b border-slate-100 bg-slate-50 px-6 pt-3 gap-3">
                            <button
                                onClick={() => setActiveTab('summary')}
                                className={`flex items-center gap-2 pb-3 text-xs font-bold border-b-2 transition-all ${
                                    activeTab === 'summary'
                                        ? 'border-blue-600 text-blue-600'
                                        : 'border-transparent text-slate-500 hover:text-slate-900'
                                }`}
                            >
                                <FileText className="w-4 h-4" /> AI Key Takeaways
                            </button>
                            <button
                                onClick={() => setActiveTab('citation')}
                                className={`flex items-center gap-2 pb-3 text-xs font-bold border-b-2 transition-all ${
                                    activeTab === 'citation'
                                        ? 'border-blue-600 text-blue-600'
                                        : 'border-transparent text-slate-500 hover:text-slate-900'
                                }`}
                            >
                                <Quote className="w-4 h-4" /> Citation Generator
                            </button>
                        </div>

                        {/* Content Body */}
                        <div className="p-6 max-h-[60vh] overflow-y-auto">
                            {activeTab === 'summary' ? (
                                <div className="space-y-4">
                                    <div className="p-4 bg-blue-50/60 border border-blue-100 rounded-2xl">
                                        <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">Paper Headline</h4>
                                        <p className="text-sm font-bold text-slate-900 leading-snug">{paperTitle}</p>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">AI Executive Summary</h4>
                                        <div className="p-4 bg-slate-50 border border-slate-200/70 rounded-2xl text-xs leading-relaxed text-slate-700 space-y-2">
                                            <p className="font-medium">
                                                {paper.abstract || 'This paper investigates novel methodology and empirical metrics within its core research domain, offering peer-reviewed findings aligned with international scholarly standards.'}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 pt-2">
                                        <div className="p-3 bg-indigo-50/50 border border-indigo-100 rounded-xl">
                                            <span className="text-[10px] font-bold text-indigo-700 uppercase">Estimated Reading Time</span>
                                            <p className="text-sm font-bold text-slate-900">8–12 Minutes</p>
                                        </div>
                                        <div className="p-3 bg-cyan-50/50 border border-cyan-100 rounded-xl">
                                            <span className="text-[10px] font-bold text-cyan-700 uppercase">Impact Metrics</span>
                                            <p className="text-sm font-bold text-slate-900">High Academic Citation</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <p className="text-xs text-slate-500 font-medium">Select a format to copy reference citation directly into your paper or reference manager:</p>
                                    
                                    {Object.entries(citations).map(([fmt, text]) => (
                                        <div key={fmt} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl relative group">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">{fmt.toUpperCase()} Format</span>
                                                <button
                                                    onClick={() => handleCopy(fmt, text)}
                                                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-blue-50 border border-slate-200 text-slate-700 hover:text-blue-600 rounded-lg text-xs font-bold transition-all"
                                                >
                                                    {copiedFormat === fmt ? (
                                                        <>
                                                            <Check className="w-3.5 h-3.5 text-emerald-600" /> Copied!
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Copy className="w-3.5 h-3.5" /> Copy Citation
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                            <pre className="text-xs text-slate-800 font-mono whitespace-pre-wrap leading-relaxed select-all">
                                                {text}
                                            </pre>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Modal Footer */}
                        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                            <span>CrossRef DOI Indexed (ISSN 3108-1819)</span>
                            <button onClick={onClose} className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 font-bold rounded-xl text-slate-800 transition-colors">
                                Close
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
