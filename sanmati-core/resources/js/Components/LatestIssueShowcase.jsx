import { useState, lazy, Suspense } from 'react';
import { BookOpen, Calendar, Download, Eye, Sparkles, Quote, ExternalLink, Bookmark, Share2, ArrowRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

const AiFeaturesModal = lazy(() => import('./AiFeaturesModal'));

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
            {/* AI Assistant Modal (Lazy Loaded) */}
            {isAiModalOpen && (
                <Suspense fallback={null}>
                    <AiFeaturesModal
                        isOpen={isAiModalOpen}
                        onClose={() => setIsAiModalOpen(false)}
                        paper={selectedPaper}
                    />
                </Suspense>
            )}

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

                    <div className="mt-6 md:mt-0 flex flex-wrap gap-3">
                        <Link
                            href="/downloads"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs shadow-sm transition-all"
                        >
                            <Download className="w-4 h-4 text-slate-600" />
                            Download Full Issue
                        </Link>
                        <Link
                            href="/archive"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm shadow-blue-500/20 transition-all"
                        >
                            Browse Archive
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {paperList.map((paper, idx) => (
                        <div
                            key={paper.id || idx}
                            className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 lg:p-7 hover:border-blue-300 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div>
                                <div className="flex items-center justify-between gap-3 mb-4">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-100/60 border border-blue-200 text-blue-800 text-[11px] font-bold tracking-wide uppercase">
                                        {paper.category || 'Research Article'}
                                    </span>
                                    {paper.doi && (
                                        <span className="text-[11px] font-mono text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200 truncate max-w-[180px]">
                                            DOI: {paper.doi}
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-lg lg:text-xl font-serif font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors mb-3 line-clamp-2">
                                    <Link href={`/article/${paper.id}`}>
                                        {paper.title}
                                    </Link>
                                </h3>

                                <p className="text-xs font-semibold text-slate-600 mb-3 line-clamp-1">
                                    {paper.authors}
                                </p>

                                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-6">
                                    {paper.abstract}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between gap-2 flex-wrap">
                                <Link
                                    href={`/article/${paper.id}`}
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                    Read Full Paper
                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                </Link>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => openAiModal(paper)}
                                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 text-[11px] font-bold hover:bg-indigo-100 transition-colors"
                                        title="AI Research Assistant"
                                    >
                                        <Sparkles className="w-3 h-3 text-indigo-600" />
                                        AI Summary
                                    </button>
                                    <Link
                                        href={`/download/paper/${paper.id}`}
                                        className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-600 transition-colors"
                                        title="Download PDF"
                                    >
                                        <Download className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
