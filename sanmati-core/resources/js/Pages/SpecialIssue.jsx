import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    BookOpen,
    Search,
    ExternalLink,
    Quote,
    Layers,
    ShieldCheck,
    CheckCircle2,
    Calendar,
    Users,
    ArrowRight,
    ArrowLeft,
    ChevronLeft,
    ChevronRight,
    Sparkles,
    FileText,
    Globe,
    Share2,
    Check,
    Copy,
    X,
    Filter
} from 'lucide-react';
import { Link, Head } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';
import PageHeader from '../Components/PageHeader';
import Modal from '../Components/ui/Modal';
import CitationGenerator from '../Components/ui/CitationGenerator';

export default function SpecialIssue({ issue, papers = [], totalCount = 31 }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [languageFilter, setLanguageFilter] = useState('all'); // 'all', 'hindi', 'english'
    const [citationPaper, setCitationPaper] = useState(null);
    const [copiedDoi, setCopiedDoi] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [viewAll, setViewAll] = useState(false);
    const pageSize = 10;

    const paperList = useMemo(() => {
        return Array.isArray(papers) ? papers : (papers?.data || []);
    }, [papers]);

    // Check if title contains Devanagari characters
    const isHindi = (text = '') => /[\u0900-\u097F]/.test(text);

    // Filtered papers
    const filteredPapers = useMemo(() => {
        return paperList.filter(paper => {
            const matchesQuery = !searchQuery.trim() ||
                (paper.title && paper.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (paper.authors && paper.authors.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (paper.doi && paper.doi.toLowerCase().includes(searchQuery.toLowerCase()));

            if (!matchesQuery) return false;

            if (languageFilter === 'hindi') {
                return isHindi(paper.title);
            } else if (languageFilter === 'english') {
                return !isHindi(paper.title);
            }

            return true;
        });
    }, [paperList, searchQuery, languageFilter]);

    // Reset pagination when filter changes
    const totalPages = Math.ceil(filteredPapers.length / pageSize) || 1;
    const paginatedPapers = useMemo(() => {
        if (viewAll) return filteredPapers;
        const start = (currentPage - 1) * pageSize;
        return filteredPapers.slice(start, start + pageSize);
    }, [filteredPapers, currentPage, viewAll, pageSize]);

    const handleCopyDoi = (doi) => {
        if (!doi) return;
        navigator.clipboard.writeText(doi).then(() => {
            setCopiedDoi(doi);
            setTimeout(() => setCopiedDoi(null), 2000);
        });
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            window.scrollTo({ top: 380, behavior: 'smooth' });
        }
    };

    // Schema.org structured data
    const jsonLd = useMemo(() => {
        return {
            schema: {
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                "name": "Special Issue: Artificial Intelligence, Technology & Multidisciplinary Studies | Sanmati Journal",
                "headline": "Special Issue — Sanmati Spectrum of Knowledge & Emerging Discourse",
                "description": "Dedicated special issue featuring 31 peer-reviewed research papers on Artificial Intelligence, Emerging Technologies, Social Sciences, and Multidisciplinary Studies with persistent Zenodo DOIs.",
                "url": "https://sanmatijournal.in/special-issue",
                "isPartOf": {
                    "@type": "Periodical",
                    "name": "Sanmati Spectrum of Knowledge & Emerging Discourse",
                    "issn": "3108-1819"
                },
                "hasPart": paperList.map(paper => ({
                    "@type": "ScholarlyArticle",
                    "headline": paper.title,
                    "name": paper.title,
                    "author": (paper.authors || "").split(/[,&|]| and /i).map(n => ({
                        "@type": "Person",
                        "name": n.trim()
                    })),
                    "url": `https://sanmatijournal.in/article/${paper.id}`,
                    "identifier": paper.doi ? {
                        "@type": "PropertyValue",
                        "propertyID": "DOI",
                        "value": paper.doi
                    } : undefined
                }))
            },
            breadcrumb: [
                { name: 'Home', url: '/' },
                { name: 'Archive', url: '/archive' },
                { name: 'Special Issue', url: '/special-issue' }
            ]
        };
    }, [paperList]);

    const hindiCount = useMemo(() => paperList.filter(p => isHindi(p.title)).length, [paperList]);
    const englishCount = paperList.length - hindiCount;

    return (
        <MainLayout
            title="Special Issue | Sanmati Spectrum of Knowledge (ISSN 3108-1819)"
            description="Explore 31 verified peer-reviewed research articles in the dedicated Special Issue on Artificial Intelligence, Emerging Technologies, and Multidisciplinary Discourse with persistent Zenodo DOIs."
            keywords="Special Issue, Artificial Intelligence, Emerging Technologies, Multidisciplinary Research, Zenodo DOI, Sanmati Journal, Open Access, ISSN 3108-1819"
            jsonLd={jsonLd}
        >
            {/* Citation Modal */}
            {citationPaper && (
                <Modal
                    isOpen={!!citationPaper}
                    onClose={() => setCitationPaper(null)}
                    title="Article Citation"
                >
                    <CitationGenerator paper={citationPaper} />
                </Modal>
            )}

            {/* ── Breadcrumb & Header Hero ── */}
            <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white pt-8 pb-14 sm:pb-16 relative overflow-hidden border-b border-slate-700/60">
                {/* Background decorative glows */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-6 flex-wrap">
                        <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
                        <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-60" />
                        <Link href="/archive" className="hover:text-blue-400 transition-colors">Archive</Link>
                        <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-60" />
                        <span className="text-amber-400 font-bold">Special Issue</span>
                    </nav>

                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-xs font-bold uppercase tracking-widest">
                            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span>Dedicated Special Issue</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-widest">
                            <Calendar className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                            <span>Published: October 2026</span>
                        </div>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-tight max-w-4xl">
                        Special Issue: Artificial Intelligence, Technology &amp; Multidisciplinary Studies
                    </h1>

                    {/* Verified Editorial Summary */}
                    <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
                        An official peer-reviewed research volume published in{' '}
                        <strong className="text-white font-bold">Sanmati Spectrum of Knowledge &amp; Emerging Discourse</strong> (ISSN 3108-1819),{' '}
                        <strong className="text-amber-300 font-bold">October 2026</strong>.
                        This dedicated publication compiles 31 verified research papers exploring artificial intelligence, digital innovation, governance,
                        environmental analysis, culture, and multidisciplinary pedagogy. Each article is assigned a persistent digital object identifier (DOI)
                        registered with Zenodo and provided with global Open Access under CC-BY 4.0.
                    </p>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-slate-800">
                        <div className="p-3 sm:p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Total Publications</div>
                            <div className="text-xl sm:text-2xl font-bold text-white mt-1 flex items-baseline gap-1">
                                {totalCount} <span className="text-xs text-amber-400 font-medium">Articles</span>
                            </div>
                        </div>
                        <div className="p-3 sm:p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Indexing &amp; DOI</div>
                            <div className="text-xl sm:text-2xl font-bold text-indigo-400 mt-1 flex items-baseline gap-1">
                                100% <span className="text-xs text-slate-300 font-medium">Zenodo Verified</span>
                            </div>
                        </div>
                        <div className="p-3 sm:p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Language Distribution</div>
                            <div className="text-xs sm:text-sm font-bold text-slate-200 mt-2">
                                Hindi ({hindiCount}) &bull; English ({englishCount})
                            </div>
                        </div>
                        <div className="p-3 sm:p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Access Policy</div>
                            <div className="text-xl sm:text-2xl font-bold text-emerald-400 mt-1 flex items-baseline gap-1">
                                Open Access <span className="text-xs text-slate-300 font-medium">(CC-BY 4.0)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Search & Filter Controls ── */}
            <div className="bg-slate-50 border-b border-slate-200/80 sticky top-[69px] z-20 backdrop-blur-md bg-slate-50/95 py-4">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
                        
                        {/* Search Input */}
                        <div className="relative flex-1 min-w-0">
                            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setCurrentPage(1);
                                }}
                                placeholder="Search special issue articles by title, author, or DOI..."
                                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all shadow-sm"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => {
                                        setSearchQuery('');
                                        setCurrentPage(1);
                                    }}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                                    aria-label="Clear search"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </div>

                        {/* Filter Tabs & View Controls */}
                        <div className="flex items-center gap-2 flex-wrap">
                            <div className="inline-flex rounded-xl bg-slate-200/70 p-1 text-xs font-bold">
                                <button
                                    onClick={() => { setLanguageFilter('all'); setCurrentPage(1); }}
                                    className={`px-3 py-1.5 rounded-lg transition-all ${languageFilter === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                                >
                                    All ({paperList.length})
                                </button>
                                <button
                                    onClick={() => { setLanguageFilter('hindi'); setCurrentPage(1); }}
                                    className={`px-3 py-1.5 rounded-lg transition-all ${languageFilter === 'hindi' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                                >
                                    Hindi ({hindiCount})
                                </button>
                                <button
                                    onClick={() => { setLanguageFilter('english'); setCurrentPage(1); }}
                                    className={`px-3 py-1.5 rounded-lg transition-all ${languageFilter === 'english' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                                >
                                    English ({englishCount})
                                </button>
                            </div>

                            <button
                                onClick={() => setViewAll(!viewAll)}
                                className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-colors ${viewAll ? 'bg-blue-600 text-white border-blue-600 shadow-sm' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'}`}
                            >
                                {viewAll ? 'Paginated View' : 'Show All (31)'}
                            </button>
                        </div>
                    </div>

                    {/* Active results count indicator */}
                    <div className="flex items-center justify-between text-xs text-slate-500 mt-2.5 px-0.5">
                        <span>
                            Showing <strong className="text-slate-800">{filteredPapers.length}</strong> of {totalCount} special issue articles
                            {searchQuery && <span> matching &ldquo;<span className="text-blue-600 font-semibold">{searchQuery}</span>&rdquo;</span>}
                        </span>
                        <Link href="/archive" className="text-blue-600 hover:text-blue-800 font-bold inline-flex items-center gap-1 hover:underline">
                            Browse Numbered Issues
                            <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* ── Articles List Section ── */}
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {filteredPapers.length === 0 ? (
                    /* Empty State */
                    <div className="text-center py-16 px-4 bg-white rounded-3xl border border-slate-200 shadow-sm max-w-xl mx-auto">
                        <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mx-auto mb-4">
                            <Search className="w-7 h-7" />
                        </div>
                        <h3 className="text-lg font-heading font-bold text-slate-900 mb-1">No Articles Found</h3>
                        <p className="text-xs text-slate-500 mb-5 max-w-sm mx-auto leading-relaxed">
                            No articles match your search query &ldquo;{searchQuery}&rdquo;. Try checking the spelling or resetting your filters.
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setLanguageFilter('all');
                            }}
                            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-sm"
                        >
                            Reset Search &amp; Filters
                        </button>
                    </div>
                ) : (
                    /* Articles Cards Grid */
                    <div className="space-y-4">
                        {paginatedPapers.map((paper, index) => {
                            const globalIndex = viewAll ? index + 1 : (currentPage - 1) * pageSize + index + 1;
                            const cleanDoi = (paper.doi || '').replace(/^https?:\/\/(dx\.)?doi\.org\//i, '');
                            const doiLink = paper.doi ? (paper.doi.startsWith('http') ? paper.doi : `https://doi.org/${cleanDoi}`) : null;

                            return (
                                <motion.article
                                    key={paper.id || index}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.25, delay: Math.min(index * 0.03, 0.3) }}
                                    className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 group"
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                                        
                                        {/* Left content block */}
                                        <div className="flex-1 min-w-0">
                                            
                                            {/* Badges bar */}
                                            <div className="flex flex-wrap items-center gap-2 mb-2.5">
                                                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase bg-amber-50 text-amber-800 border border-amber-200">
                                                    Special Issue #{globalIndex}
                                                </span>
                                                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-200">
                                                    Research Article
                                                </span>
                                                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase bg-emerald-50 text-emerald-700 border border-emerald-200">
                                                    Open Access
                                                </span>
                                                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase bg-indigo-50 text-indigo-700 border border-indigo-200">
                                                    Zenodo DOI
                                                </span>
                                            </div>

                                            {/* Article Title */}
                                            <h2 className="text-base sm:text-lg font-heading font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug break-words">
                                                <Link href={`/article/${paper.id}`} className="hover:underline">
                                                    {paper.title}
                                                </Link>
                                            </h2>

                                            {/* Authors */}
                                            <div className="flex items-center gap-2 mt-2.5 text-xs text-slate-600">
                                                <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                                <span className="font-semibold text-slate-800">{paper.authors}</span>
                                            </div>

                                            {/* Persistent DOI URL */}
                                            {doiLink && (
                                                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">DOI:</span>
                                                    <a
                                                        href={doiLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="font-mono text-indigo-700 hover:text-indigo-900 hover:underline break-all inline-flex items-center gap-1 font-medium"
                                                        title="Open registered Zenodo DOI in new tab"
                                                    >
                                                        {doiLink}
                                                        <ExternalLink className="w-3 h-3 shrink-0" />
                                                    </a>
                                                    <button
                                                        onClick={() => handleCopyDoi(doiLink)}
                                                        className="p-1 text-slate-400 hover:text-blue-600 rounded hover:bg-slate-100 transition-colors"
                                                        title="Copy DOI to clipboard"
                                                        aria-label="Copy DOI"
                                                    >
                                                        {copiedDoi === doiLink ? (
                                                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                                                        ) : (
                                                            <Copy className="w-3.5 h-3.5" />
                                                        )}
                                                    </button>
                                                </div>
                                            )}
                                        </div>

                                        {/* Right actions block */}
                                        <div className="flex flex-row lg:flex-col items-center lg:items-end justify-end gap-2 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100 shrink-0">
                                            <Link
                                                href={`/article/${paper.id}`}
                                                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm shadow-blue-600/20"
                                            >
                                                <span>Read Article</span>
                                                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                                            </Link>
                                            
                                            {doiLink && (
                                                <a
                                                    href={doiLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs transition-colors"
                                                    title="View persistent archive record on Zenodo"
                                                >
                                                    <ExternalLink className="w-3 h-3 text-indigo-600" />
                                                    <span>View DOI</span>
                                                </a>
                                            )}

                                            <button
                                                onClick={() => setCitationPaper(paper)}
                                                className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                                                title="Cite this paper"
                                            >
                                                <Quote className="w-3 h-3 text-slate-500" />
                                                <span>Cite</span>
                                            </button>
                                        </div>

                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                )}

                {/* ── Pagination Controls ── */}
                {!viewAll && totalPages > 1 && (
                    <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-xs text-slate-500 font-medium">
                            Showing page <strong className="text-slate-800">{currentPage}</strong> of <strong className="text-slate-800">{totalPages}</strong> (10 articles per page)
                        </div>
                        <div className="flex items-center gap-1.5">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold border transition-colors ${currentPage === 1 ? 'border-slate-200 text-slate-300 cursor-not-allowed bg-slate-50' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'}`}
                            >
                                <ChevronLeft className="w-4 h-4" />
                                <span>Previous</span>
                            </button>

                            {[...Array(totalPages)].map((_, i) => {
                                const pageNum = i + 1;
                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => handlePageChange(pageNum)}
                                        className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${currentPage === pageNum ? 'bg-blue-600 text-white shadow-sm' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'}`}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            })}

                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold border transition-colors ${currentPage === totalPages ? 'border-slate-200 text-slate-300 cursor-not-allowed bg-slate-50' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'}`}
                            >
                                <span>Next</span>
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                )}

                {/* ── Bottom Academic Information Card ── */}
                <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-blue-50/40 border border-slate-200/90 shadow-sm">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div className="space-y-2 max-w-2xl">
                            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 uppercase tracking-widest">
                                <ShieldCheck className="w-4 h-4 text-blue-600" />
                                Publishing Integrity &amp; Preservation
                            </div>
                            <h3 className="text-xl font-heading font-bold text-slate-900">
                                Permanent Archiving &amp; Indexing Standard
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                Every article published in this Special Issue is assigned an immutable DOI and permanently preserved in the Zenodo research repository. 
                                In accordance with COPE and UGC guidelines, metadata is discoverable via Google Scholar and major scholarly aggregators.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                            <Link
                                href="/archive"
                                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold shadow-sm transition-colors text-center"
                            >
                                <Layers className="w-4 h-4 text-slate-600" />
                                Complete Archives
                            </Link>
                            <Link
                                href="/submission-guidelines/call-for-papers"
                                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm shadow-blue-600/25 transition-colors text-center"
                            >
                                <FileText className="w-4 h-4" />
                                Submit to Next Issue
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </MainLayout>
    );
}
