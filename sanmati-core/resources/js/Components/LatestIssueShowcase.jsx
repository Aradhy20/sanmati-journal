import { useState, lazy, Suspense } from 'react';
import { 
    BookOpen, 
    Calendar, 
    Download, 
    Eye, 
    Sparkles, 
    Quote, 
    ExternalLink, 
    Award, 
    CheckCircle2, 
    ShieldCheck, 
    ArrowRight,
    FileText,
    Users
} from 'lucide-react';
import { Link } from '@inertiajs/react';
import Modal from './ui/Modal';
import CitationGenerator from './ui/CitationGenerator';

const AiFeaturesModal = lazy(() => import('./AiFeaturesModal'));

export default function LatestIssueShowcase({ currentIssue, papers = [] }) {
    const [selectedCitationPaper, setSelectedCitationPaper] = useState(null);
    const [selectedAiPaper, setSelectedAiPaper] = useState(null);

    // Verified Issue Metadata from Database
    const volume = String(currentIssue?.volume ?? '2');
    const issueNum = String(currentIssue?.number ?? '2');
    const year = String(currentIssue?.year ?? '2026');
    const monthRange = currentIssue?.month_range ?? 'April – June';
    const issueTitle = currentIssue?.title || `Volume ${volume}, Issue ${issueNum} (${year})`;

    // Get clean research papers belonging to this issue (exclude complete issue book)
    const rawPapers = Array.isArray(currentIssue?.papers) && currentIssue.papers.length > 0 
        ? currentIssue.papers 
        : (Array.isArray(papers) ? papers : []);
    const cleanPapers = rawPapers.filter(p => p.category !== 'Complete Issue Book');
    const articleCount = cleanPapers.length > 0 ? cleanPapers.length : 34;

    // Preview 3 real articles from this current issue
    const previewPapers = cleanPapers.slice(0, 3);

    // Only show download if a verified downloadable issue compilation exists
    const hasDownload = Boolean(currentIssue?.file_url || (volume === '1' && issueNum === '1'));
    const downloadUrl = currentIssue?.file_url || (volume === '1' && issueNum === '1' ? '/download/issue/vol1-issue1' : null);

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden border-b border-slate-200/70" aria-label="Current Issue Showcase">
            {/* Citation Modal */}
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
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-12 gap-4">
                    <div>
                        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
                            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                            Official Publication · Current Active Issue
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                            {issueTitle}
                        </h2>
                        <p className="text-sm text-slate-600 font-medium mt-1.5 max-w-2xl">
                            Sanmati Spectrum of Knowledge & Emerging Discourse — Peer-reviewed quarterly multidisciplinary research assigned with persistent CrossRef DOIs (ISSN 3108-1819).
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2.5 shrink-0">
                        <Link
                            href="/special-issue"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-indigo-200 bg-indigo-50/90 hover:bg-indigo-100 text-indigo-700 font-bold text-xs shadow-sm transition-all"
                        >
                            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                            Special Issue (31 Articles)
                        </Link>
                        <Link
                            href="/archive"
                            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs shadow-sm transition-all"
                        >
                            Browse Archive
                            <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>

                {/* 12-Column Responsive Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
                    
                    {/* ── Left Column: Typographic Issue Cover Plate & Actions (5 cols) ── */}
                    <div className="lg:col-span-5 flex flex-col gap-5">
                        <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-slate-950 via-[#0B1E3F] to-slate-900 text-white shadow-2xl border border-blue-900/50 overflow-hidden">
                            {/* Subtle background glow & grid lines */}
                            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
                            <div 
                                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                                style={{
                                    backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                                    backgroundSize: "28px 28px"
                                }}
                            />

                            <div className="relative z-10 flex flex-col justify-between min-h-[360px]">
                                {/* Top Header */}
                                <div>
                                    <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-4 mb-6">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-300">
                                                Active Volume
                                            </span>
                                        </div>
                                        <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-md bg-white/10 border border-white/15 text-blue-200">
                                            ISSN: 3108-1819
                                        </span>
                                    </div>

                                    {/* Journal Brand Emblem & Title */}
                                    <div className="space-y-2 mb-6">
                                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-600/30 border border-blue-400/30 text-blue-200 text-[10px] font-bold uppercase tracking-wider">
                                            <Award className="w-3 h-3 text-cyan-300" /> Peer-Reviewed Journal
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug tracking-tight">
                                            Sanmati Spectrum
                                            <span className="block text-sm sm:text-base font-sans font-normal text-slate-300 mt-0.5">
                                                of Knowledge & Emerging Discourse
                                            </span>
                                        </h3>
                                    </div>

                                    {/* Issue Designator Plate */}
                                    <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.07] border border-white/15 backdrop-blur-sm space-y-2 mb-6">
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">
                                            Official Publication Period
                                        </div>
                                        <div className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
                                            Volume {volume}, Issue {issueNum}
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                                            <Calendar className="w-3.5 h-3.5 text-blue-400" />
                                            <span>{monthRange} {year}</span>
                                            <span className="w-1 h-1 rounded-full bg-white/40" />
                                            <span className="text-emerald-300 font-semibold">{articleCount} Research Articles</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Governance & Footprint */}
                                <div className="pt-4 border-t border-white/10 flex flex-col gap-2 text-[10px] text-slate-400 font-medium">
                                    <div className="flex items-center justify-between">
                                        <span>Publisher:</span>
                                        <span className="text-slate-200 font-semibold">Sanmati Education & Research Foundation</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span>Licensing:</span>
                                        <span className="text-emerald-300 font-semibold">Open Access (CC-BY 4.0)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Actions under cover plate */}
                        <div className="space-y-2.5">
                            <Link
                                href={`/issue/${volume}/${issueNum}`}
                                className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/25 hover:shadow-blue-700/35 hover:-translate-y-0.5 transition-all duration-200 text-center"
                            >
                                <BookOpen className="w-4 h-4 shrink-0" />
                                <span>Explore All {articleCount} Articles</span>
                                <ArrowRight className="w-4 h-4 shrink-0" />
                            </Link>

                            <div className="grid grid-cols-2 gap-2.5">
                                <Link
                                    href="/current-issue"
                                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-[11px] shadow-xs hover:border-slate-300 transition-all text-center"
                                >
                                    <FileText className="w-3.5 h-3.5 text-blue-600" />
                                    <span>Current Issue Page</span>
                                </Link>

                                {hasDownload && downloadUrl ? (
                                    <a
                                        href={downloadUrl}
                                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-[11px] shadow-xs hover:border-slate-300 transition-all text-center"
                                    >
                                        <Download className="w-3.5 h-3.5 text-emerald-600" />
                                        <span>Download PDF</span>
                                    </a>
                                ) : (
                                    <Link
                                        href="/submission-guidelines/call-for-papers"
                                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-[11px] shadow-xs hover:border-slate-300 transition-all text-center"
                                    >
                                        <Award className="w-3.5 h-3.5 text-indigo-600" />
                                        <span>Submit to Next Issue</span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* ── Right Column: Issue Bibliographic Specs & Real Articles Preview (7 cols) ── */}
                    <div className="lg:col-span-7 flex flex-col gap-6">
                        
                        {/* 4-Item Bibliographic & Governance Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                            <div className="space-y-1">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Period</span>
                                <span className="text-xs font-bold text-slate-800 block truncate">{monthRange}</span>
                                <span className="text-[10px] text-slate-500 font-medium">Quarterly</span>
                            </div>
                            <div className="space-y-1">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Publications</span>
                                <span className="text-xs font-bold text-blue-600 block">{articleCount} Papers</span>
                                <span className="text-[10px] text-slate-500 font-medium">Peer-Reviewed</span>
                            </div>
                            <div className="space-y-1">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Indexing</span>
                                <span className="text-xs font-bold text-slate-800 block truncate">CrossRef DOI</span>
                                <span className="text-[10px] text-slate-500 font-medium">Google Scholar</span>
                            </div>
                            <div className="space-y-1">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Review Model</span>
                                <span className="text-xs font-bold text-emerald-600 block truncate">Double-Blind</span>
                                <span className="text-[10px] text-slate-500 font-medium">COPE Compliant</span>
                            </div>
                        </div>

                        {/* Editorial Leadership Citation */}
                        <div className="px-4 py-3 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-blue-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-blue-600 shrink-0" />
                                <span className="font-semibold">
                                    Editorial Board: Dr. Namrata Jain (Editor-in-Chief) & Dr. Ratnesh Kumar Jain (Managing Editor)
                                </span>
                            </div>
                            <Link 
                                href="/editorial-team/editors" 
                                className="text-[11px] font-bold text-blue-700 hover:text-blue-900 underline whitespace-nowrap"
                            >
                                View Editorial Team →
                            </Link>
                        </div>

                        {/* Selected Research Articles Preview */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-between px-1">
                                <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                                    Selected Research Articles from Volume {volume}, Issue {issueNum}
                                </h3>
                                <Link 
                                    href={`/issue/${volume}/${issueNum}`}
                                    className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                                >
                                    <span>View All ({articleCount})</span>
                                    <ArrowRight className="w-3 h-3" />
                                </Link>
                            </div>

                            {/* 3 Real Articles Cards */}
                            <div className="space-y-3">
                                {previewPapers.map((paper, idx) => (
                                    <div
                                        key={paper.id || idx}
                                        className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 hover:border-blue-300 hover:shadow-md hover:shadow-blue-900/5 transition-all duration-200 group flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between gap-2 mb-2">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100 uppercase tracking-wider">
                                                        #{String(idx + 1).padStart(2, '0')} · {paper.category || 'Research Article'}
                                                    </span>
                                                </div>
                                                {paper.doi && (
                                                    <a
                                                        href={paper.doi.startsWith('http') ? paper.doi : `https://doi.org/${paper.doi}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-[10px] font-mono text-slate-500 hover:text-blue-600 hover:underline truncate max-w-[170px]"
                                                        title={paper.doi}
                                                    >
                                                        DOI: {paper.doi.replace(/^https?:\/\/(dx\.)?doi\.org\//i, '')}
                                                    </a>
                                                )}
                                            </div>

                                            <h4 className="text-sm sm:text-base font-serif font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-1.5 line-clamp-2">
                                                <Link href={`/article/${paper.id}`}>
                                                    {paper.title}
                                                </Link>
                                            </h4>

                                            <p className="text-xs text-slate-600 font-medium mb-3 line-clamp-1">
                                                {paper.authors}
                                            </p>
                                        </div>

                                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 flex-wrap">
                                            <Link
                                                href={`/article/${paper.id}`}
                                                className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                                            >
                                                <span>Read Article</span>
                                                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                                            </Link>

                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => setSelectedCitationPaper(paper)}
                                                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-bold transition-colors"
                                                    title="Cite this paper"
                                                >
                                                    <Quote className="w-3 h-3 text-slate-500" />
                                                    <span>Cite</span>
                                                </button>

                                                <button
                                                    onClick={() => setSelectedAiPaper(paper)}
                                                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 text-[11px] font-bold transition-colors"
                                                    title="AI Summary"
                                                >
                                                    <Sparkles className="w-3 h-3 text-indigo-600" />
                                                    <span>AI Summary</span>
                                                </button>

                                                {paper.file_url && (
                                                    <a
                                                        href={`/download/paper/${paper.id}`}
                                                        className="p-1 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors"
                                                        title="Download PDF"
                                                    >
                                                        <Download className="w-3 h-3" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Issue Exploration Callout Banner */}
                        <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50/50 to-slate-50 border border-blue-200/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                            <div className="space-y-0.5">
                                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                                    Complete Volume 2, Issue 2 Archive
                                </h4>
                                <p className="text-xs text-slate-600 font-medium">
                                    Access all {articleCount} articles with complete abstracts, references, and citation tools.
                                </p>
                            </div>
                            <Link
                                href={`/issue/${volume}/${issueNum}`}
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-blue-700 font-bold text-xs shadow-xs hover:border-blue-300 transition-all shrink-0"
                            >
                                <span>Browse Complete Issue</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
