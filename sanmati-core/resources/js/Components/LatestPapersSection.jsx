import { useState, lazy, Suspense } from 'react';
import { 
    BookOpen, 
    Download, 
    Eye, 
    Sparkles, 
    Quote, 
    ArrowRight, 
    ExternalLink,
    FileText,
    Users,
    Tag
} from 'lucide-react';
import { Link } from '@inertiajs/react';
import Modal from './ui/Modal';
import CitationGenerator from './ui/CitationGenerator';

const AiFeaturesModal = lazy(() => import('./AiFeaturesModal'));

export default function LatestPapersSection({ papers = [] }) {
    const [selectedCitationPaper, setSelectedCitationPaper] = useState(null);
    const [selectedAiPaper, setSelectedAiPaper] = useState(null);

    // Filter out Complete Issue Book, take up to 6 individual research papers
    const rawPapers = Array.isArray(papers) ? papers : [];
    const cleanPapers = rawPapers.filter(p => p.category !== 'Complete Issue Book');
    const paperList = cleanPapers.slice(0, 6);

    return (
        <section className="py-16 md:py-24 bg-slate-50/70 relative overflow-hidden border-b border-slate-200/60" aria-label="Featured Research Papers">
            {/* Academic Citation Modal */}
            <Modal
                isOpen={!!selectedCitationPaper}
                onClose={() => setSelectedCitationPaper(null)}
                title="Academic Citation Generator"
                size="lg"
            >
                {selectedCitationPaper && (
                    <div className="p-6 bg-[#FFFDF8]">
                        <p className="text-slate-600 mb-4 text-xs font-medium">
                            Select standard citation format (APA, MLA, BibTeX) for academic reference lists:
                        </p>
                        <CitationGenerator paper={selectedCitationPaper} />
                    </div>
                )}
            </Modal>

            {/* AI Assistant Modal (Lazy Loaded) */}
            {selectedAiPaper && (
                <Suspense fallback={null}>
                    <AiFeaturesModal
                        isOpen={!!selectedAiPaper}
                        onClose={() => setSelectedAiPaper(null)}
                        paper={selectedAiPaper}
                    />
                </Suspense>
            )}

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Heading & Action */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-14 gap-4">
                    <div>
                        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
                            <BookOpen className="w-4 h-4 text-blue-600" />
                            Featured Research Papers
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                            Explore Latest Peer-Reviewed Publications
                        </h2>
                        <p className="text-sm text-slate-600 font-medium mt-2 max-w-xl">
                            Read open access research assigned with persistent CrossRef DOIs (ISSN 3108-1819).
                        </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                        <Link
                            href="/archive"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs shadow-sm hover:shadow transition-all group"
                        >
                            <span>View All Papers</span>
                            <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* 3-Column Responsive Grid on Desktop, 2 on Tablet, 1 on Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {paperList.map((paper, idx) => {
                        const isSpecial = paper.category === 'Special Issue Article' || paper.issue?.is_special_issue;
                        const issueLabel = isSpecial
                            ? `Special Issue (${paper.issue?.month_range || 'Oct'} ${paper.issue?.year || '2026'})`
                            : (paper.issue?.volume 
                                ? `Vol. ${paper.issue.volume}, Issue ${paper.issue.number || '1'} (${paper.issue.year || '2026'})`
                                : 'Peer-Reviewed Issue');

                        return (
                            <div
                                key={paper.id || idx}
                                className="bg-white border border-slate-200/80 rounded-2xl p-6 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full"
                            >
                                <div>
                                    {/* Category & Issue Tag */}
                                    <div className="flex items-center justify-between gap-2 mb-3.5 flex-wrap">
                                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wide uppercase border ${
                                            isSpecial 
                                                ? 'bg-amber-50 text-amber-800 border-amber-200'
                                                : 'bg-blue-50 text-blue-700 border-blue-100'
                                        }`}>
                                            {paper.category || 'Research Article'}
                                        </span>

                                        <span className="text-[10px] font-semibold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100 truncate max-w-[170px]">
                                            {issueLabel}
                                        </span>
                                    </div>

                                    {/* Article Title */}
                                    <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors mb-2.5 line-clamp-3 break-words">
                                        <Link href={`/article/${paper.id}`}>
                                            {paper.title}
                                        </Link>
                                    </h3>

                                    {/* Authors */}
                                    <div className="flex items-start gap-1.5 mb-3 text-xs text-slate-600 font-medium">
                                        <Users className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                                        <span className="line-clamp-2 break-words leading-relaxed">{paper.authors}</span>
                                    </div>

                                    {/* Abstract / Scope Excerpt */}
                                    {paper.abstract && (
                                        <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-4 break-words">
                                            {paper.abstract}
                                        </p>
                                    )}

                                    {/* Persistent DOI badge */}
                                    {paper.doi && (
                                        <div className="mb-4">
                                            <a
                                                href={paper.doi.startsWith('http') ? paper.doi : `https://doi.org/${paper.doi}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 text-[11px] font-mono text-slate-600 hover:text-blue-700 transition-colors max-w-full"
                                                title={paper.doi}
                                            >
                                                <span className="font-bold text-[9px] uppercase px-1 py-0.2 rounded bg-blue-100/70 text-blue-700">DOI</span>
                                                <span className="truncate">{paper.doi.replace(/^https?:\/\/(dx\.)?doi\.org\//i, '')}</span>
                                                <ExternalLink className="w-3 h-3 shrink-0 text-slate-400" />
                                            </a>
                                        </div>
                                    )}
                                </div>

                                {/* Card Footer Actions */}
                                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
                                    <Link
                                        href={`/article/${paper.id}`}
                                        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                                    >
                                        <span>Read Article</span>
                                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                    </Link>

                                    <div className="flex items-center gap-1.5">
                                        <button
                                            onClick={() => setSelectedCitationPaper(paper)}
                                            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-bold transition-colors"
                                            title="Cite this paper"
                                        >
                                            <Quote className="w-3 h-3 text-slate-500" />
                                            <span>Cite</span>
                                        </button>

                                        <button
                                            onClick={() => setSelectedAiPaper(paper)}
                                            className="p-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 transition-colors"
                                            title="AI Research Assistant"
                                        >
                                            <Sparkles className="w-3.5 h-3.5" />
                                        </button>

                                        {paper.file_url && (
                                            <a
                                                href={`/download/paper/${paper.id}`}
                                                className="p-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors"
                                                title="Download PDF"
                                            >
                                                <Download className="w-3.5 h-3.5" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Section Footer Callout */}
                <div className="mt-12 text-center">
                    <p className="text-xs text-slate-500 font-medium mb-3">
                        Over 190+ peer-reviewed articles indexed across 7 volumes and special collections.
                    </p>
                    <Link
                        href="/archive"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-blue-600/20 hover:shadow-lg transition-all"
                    >
                        <span>Explore Complete Academic Archive</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
