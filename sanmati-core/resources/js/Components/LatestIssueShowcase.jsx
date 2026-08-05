import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Download, Eye, Sparkles, Quote, ExternalLink, Bookmark, Share2, ArrowRight } from 'lucide-react';
import { Link } from '@inertiajs/react';
import AiFeaturesModal from './AiFeaturesModal';

export default function LatestIssueShowcase({ currentIssue, papers = [] }) {
    const [selectedPaper, setSelectedPaper] = useState(null);
    const [isAiModalOpen, setIsAiModalOpen] = useState(false);

    const issueVolume = currentIssue?.volume?.volume_number || '1';
    const issueNum = currentIssue?.number || '1';
    const issueYear = currentIssue?.year || '2026';
    const issueTitle = currentIssue?.title || `Volume ${issueVolume}, Issue ${issueNum} (${issueYear})`;
    const paperList = papers.length > 0 ? papers.slice(0, 4) : [
        {
            id: 1,
            title: "Advancements in Multidisciplinary Empirical Research and Peer Review Governance",
            authors: "Dr Namrata Jain, Dr Ratnesh Kumar Jain",
            category: "Multidisciplinary",
            doi: "10.5281/zenodo.sanmati.01",
            abstract: "This paper evaluates current peer review methodology, COPE ethics compliance, and citation tracking metrics across international open access academic journals."
        },
        {
            id: 2,
            title: "Artificial Intelligence in Academic Publishing & Citation Analytics",
            authors: "Dr Sachin Kumar, Dr S. Padmapriya",
            category: "Computer Science & AI",
            doi: "10.5281/zenodo.sanmati.02",
            abstract: "Investigating natural language processing algorithms for automated abstract summarization, plagiarism detection, and citation style validation."
        }
    ];

    const openAiModal = (paper) => {
        setSelectedPaper(paper);
        setIsAiModalOpen(true);
    };

    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            {/* AI Assistant Modal */}
            <AiFeaturesModal
                isOpen={isAiModalOpen}
                onClose={() => setIsAiModalOpen(false)}
                paper={selectedPaper}
            />

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
                    <div>
                        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
                            <BookOpen className="w-4 h-4 text-blue-600" /> Current Issue Showcase
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                            {issueTitle}
                        </h2>
                        <p className="text-sm text-slate-600 font-medium mt-2 max-w-xl">
                            Peer-reviewed multidisciplinary articles assigned with CrossRef DOIs (ISSN 3108-1819).
                        </p>
                    </div>
                    <Link
                        href="/current-issue"
                        className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider group"
                    >
                        Browse Full Issue <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left: Issue Journal Cover Card */}
                    <div className="lg:col-span-4 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden border border-slate-800">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                        
                        <div className="relative z-10 space-y-6">
                            <span className="px-3 py-1 bg-blue-500/20 text-cyan-300 border border-blue-400/30 text-[10px] font-bold uppercase tracking-wider rounded-full">
                                Published Issue
                            </span>

                            <div>
                                <h3 className="text-2xl font-serif font-bold leading-tight">Sanmati Spectrum</h3>
                                <p className="text-xs text-slate-300 font-medium uppercase tracking-wider mt-1">of Knowledge & Emerging Discourse</p>
                            </div>

                            <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 space-y-2 text-xs">
                                <div className="flex justify-between">
                                    <span className="text-slate-400">ISSN Online:</span>
                                    <span className="font-bold text-cyan-300">3108-1819</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Impact Factor:</span>
                                    <span className="font-bold text-cyan-300">5.3</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Access Type:</span>
                                    <span className="font-bold text-emerald-400">100% Open Access</span>
                                </div>
                            </div>

                            <Link
                                href="/current-issue"
                                className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all"
                            >
                                View Complete Issue Articles <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Right: Featured Papers List */}
                    <div className="lg:col-span-8 space-y-4">
                        {paperList.map((paper, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.08 }}
                                className="bg-slate-50 border border-slate-200/80 hover:border-blue-300 rounded-3xl p-6 shadow-xs hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                    <span className="px-2.5 py-0.5 bg-blue-100 text-blue-700 font-bold text-[10px] uppercase tracking-wider rounded-md">
                                        {paper.category || 'Research Article'}
                                    </span>
                                    {paper.doi && (
                                        <span className="text-[10px] font-mono text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-md">
                                            DOI: {paper.doi}
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-base md:text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors leading-snug mb-2">
                                    <Link href={`/article/${paper.id}`}>{paper.title}</Link>
                                </h3>

                                <p className="text-xs text-slate-500 font-medium mb-3">
                                    By {paper.authors}
                                </p>

                                <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-2 mb-4">
                                    {paper.abstract}
                                </p>

                                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200/60">
                                    <div className="flex items-center gap-2 text-xs">
                                        <Link
                                            href={`/article/${paper.id}`}
                                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition-colors"
                                        >
                                            Read Paper <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                        <a
                                            href={`/download/paper/${paper.id}`}
                                            className="px-3 py-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 font-bold rounded-xl text-xs flex items-center gap-1.5 transition-colors"
                                        >
                                            <Download className="w-3.5 h-3.5 text-blue-600" /> PDF
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => openAiModal(paper)}
                                            className="px-3 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-100 font-bold rounded-xl text-xs flex items-center gap-1.5 transition-colors"
                                        >
                                            <Sparkles className="w-3.5 h-3.5 text-indigo-600" /> AI Tools / Citation
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
