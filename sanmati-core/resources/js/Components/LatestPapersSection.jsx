import { useState, lazy, Suspense } from 'react';
import { BookOpen, Download, Eye, Sparkles, Quote, ArrowRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

const AiFeaturesModal = lazy(() => import('./AiFeaturesModal'));

export default function LatestPapersSection({ papers = [] }) {
    const [selectedPaper, setSelectedPaper] = useState(null);
    const [isAiModalOpen, setIsAiModalOpen] = useState(false);

    const paperList = papers.length > 0 ? papers.slice(0, 6) : [
        {
            id: 1,
            title: "Advancements in Multidisciplinary Empirical Research and Peer Review Governance",
            authors: "Dr Namrata Jain, Dr Ratnesh Kumar Jain",
            category: "Multidisciplinary",
            doi: "10.5281/zenodo.sanmati.01",
            views: 1450,
            downloads: 380,
            abstract: "This paper evaluates peer review methodology, COPE ethics compliance, and citation tracking metrics across international open access academic journals."
        },
        {
            id: 2,
            title: "Artificial Intelligence in Academic Publishing & Citation Analytics",
            authors: "Dr Sachin Kumar, Dr S. Padmapriya",
            category: "Computer Science & AI",
            doi: "10.5281/zenodo.sanmati.02",
            views: 2100,
            downloads: 540,
            abstract: "Investigating natural language processing algorithms for automated abstract summarization, plagiarism detection, and citation style validation."
        }
    ];

    const openAiModal = (paper) => {
        setSelectedPaper(paper);
        setIsAiModalOpen(true);
    };

    return (
        <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200/60">
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
                            <BookOpen className="w-4 h-4 text-blue-600" /> Featured Research Papers
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                            Explore Latest Peer-Reviewed Publications
                        </h2>
                        <p className="text-sm text-slate-600 font-medium mt-2 max-w-xl">
                            Read open access research assigned with persistent CrossRef DOIs (ISSN 3108-1819).
                        </p>
                    </div>

                    <div className="mt-6 md:mt-0 flex gap-3">
                        <Link
                            href="/archive"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs shadow-sm transition-all"
                        >
                            View All Papers
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {paperList.map((paper, idx) => (
                        <div
                            key={paper.id || idx}
                            className="bg-white border border-slate-200/80 rounded-2xl p-6 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div>
                                <div className="flex items-center justify-between gap-2 mb-3">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[10px] font-bold tracking-wide uppercase">
                                        {paper.category || 'Article'}
                                    </span>
                                    {paper.views && (
                                        <span className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                                            <Eye className="w-3 h-3" /> {paper.views}
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-base font-serif font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                                    <Link href={`/article/${paper.id}`}>
                                        {paper.title}
                                    </Link>
                                </h3>

                                <p className="text-xs text-slate-600 font-medium mb-3 line-clamp-1">
                                    {paper.authors}
                                </p>

                                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-5">
                                    {paper.abstract}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                                <Link
                                    href={`/article/${paper.id}`}
                                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                    Read Paper
                                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                                </Link>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => openAiModal(paper)}
                                        className="p-1.5 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-100 transition-colors"
                                        title="AI Research Assistant"
                                    >
                                        <Sparkles className="w-3.5 h-3.5" />
                                    </button>
                                    {paper.file_url ? (
                                        <a
                                            href={`/download/paper/${paper.id}`}
                                            className="p-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors"
                                            title="Download PDF"
                                        >
                                            <Download className="w-3.5 h-3.5" />
                                        </a>
                                    ) : paper.doi ? (
                                        <a
                                            href={paper.doi.startsWith('http') ? paper.doi : `https://doi.org/${paper.doi}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-indigo-600 transition-colors"
                                            title="View DOI Record"
                                        >
                                            <BookOpen className="w-3.5 h-3.5" />
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
