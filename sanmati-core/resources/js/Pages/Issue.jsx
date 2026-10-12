import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
    BookOpen, 
    Download, 
    FileText, 
    Calendar, 
    Layers, 
    ShieldCheck, 
    Quote, 
    Eye, 
    ChevronLeft, 
    ChevronRight, 
    ArrowLeft, 
    Search, 
    ExternalLink,
    Sparkles,
    CheckCircle2
} from 'lucide-react';
import { Link, Head } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';
import PageHeader from '../Components/PageHeader';
import Modal from '../Components/ui/Modal';
import CitationGenerator from '../Components/ui/CitationGenerator';

export default function Issue({ issue, prevIssue, nextIssue }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [citationPaper, setCitationPaper] = useState(null);

    const papers = useMemo(() => {
        return (issue?.papers || []).filter(p => p.category !== 'Complete Issue Book');
    }, [issue]);

    const filteredPapers = useMemo(() => {
        if (!searchQuery.trim()) return papers;
        const q = searchQuery.toLowerCase();
        return papers.filter(p => 
            (p.title && p.title.toLowerCase().includes(q)) ||
            (p.authors && p.authors.toLowerCase().includes(q)) ||
            (p.keywords && p.keywords.toLowerCase().includes(q)) ||
            (p.category && p.category.toLowerCase().includes(q))
        );
    }, [papers, searchQuery]);

    const pubDate = issue ? `${issue.month_range ? issue.month_range + ' ' : ''}${issue.year}` : '2026';
    const issueTitle = issue ? `Volume ${issue.volume}, Issue ${issue.number}` : 'Journal Issue';
    const fullIssueTitle = `${issueTitle} (${pubDate})`;

    const jsonLd = useMemo(() => {
        if (!issue) return {};
        return {
            schema: {
                "@context": "https://schema.org",
                "@type": "PublicationIssue",
                "issueNumber": String(issue.number),
                "volumeNumber": String(issue.volume),
                "datePublished": String(issue.year),
                "name": `Sanmati Spectrum of Knowledge - ${issueTitle}`,
                "isPartOf": {
                    "@type": "Periodical",
                    "name": "Sanmati Spectrum of Knowledge & Emerging Discourse",
                    "issn": "3108-1819"
                },
                "hasPart": papers.map(paper => ({
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
                { name: issueTitle, url: `/issue/${issue.volume}/${issue.number}` }
            ]
        };
    }, [issue, papers, issueTitle]);

    if (!issue) {
        return (
            <MainLayout
                title="Issue Not Found | Sanmati Journal"
                description="The requested journal issue could not be found."
            >
                <div className="min-h-[60vh] flex flex-col items-center justify-center py-20 px-4 bg-[#FFFDF8]">
                    <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-4">
                        <BookOpen className="w-8 h-8" />
                    </div>
                    <h1 className="text-2xl font-serif font-bold text-dark mb-2">Issue Not Found</h1>
                    <p className="text-sm text-slate-500 mb-6 text-center max-w-md">
                        The requested volume or issue does not exist in our archives.
                    </p>
                    <Link
                        href="/archive"
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-bold rounded-xl text-xs uppercase tracking-wider hover:bg-primary-dark transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Browse All Archives
                    </Link>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout
            title={`${fullIssueTitle} | Sanmati Journal`}
            description={`Explore peer-reviewed multidisciplinary articles in Volume ${issue.volume}, Issue ${issue.number} (${pubDate}) of Sanmati Spectrum of Knowledge (ISSN 3108-1819).`}
            keywords={`Volume ${issue.volume}, Issue ${issue.number}, Sanmati Journal, Research Articles, CrossRef DOI, ISSN 3108-1819`}
            jsonLd={jsonLd}
        >
            <Head>
                <meta property="og:title" content={`${fullIssueTitle} | Sanmati Journal`} />
                <meta property="og:description" content={`Explore all verified research articles published in Volume ${issue.volume}, Issue ${issue.number} (${pubDate}) of Sanmati Spectrum.`} />
                <link rel="canonical" href={`https://sanmatijournal.in/issue/${issue.volume}/${issue.number}`} />
            </Head>

            <PageHeader
                title={fullIssueTitle}
                breadcrumb={issueTitle}
                subtitle="Sanmati Spectrum of Knowledge & Emerging Discourse (ISSN 3108-1819)"
            />

            <div className="min-h-screen bg-[#FFFDF8] py-10 lg:py-16 text-[#2E2E2E]">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Navigation bar between issues */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-[#E9E5DD]">
                        <div className="flex items-center gap-3">
                            <Link 
                                href="/archive"
                                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-[#E9E5DD] rounded-lg text-xs font-bold transition-colors shadow-xs"
                            >
                                <ArrowLeft className="w-3.5 h-3.5" /> Complete Archive
                            </Link>
                            <span className="text-xs font-bold text-slate-400">|</span>
                            <span className="text-xs font-bold text-slate-600">
                                {papers.length} Verified Article{papers.length === 1 ? '' : 's'}
                            </span>
                        </div>

                        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
                            {prevIssue ? (
                                <Link
                                    href={`/issue/${prevIssue.volume}/${prevIssue.number}`}
                                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-[#E9E5DD] rounded-lg text-xs font-bold transition-colors"
                                    title={`Previous: Vol ${prevIssue.volume} Issue ${prevIssue.number}`}
                                >
                                    <ChevronLeft className="w-3.5 h-3.5" />
                                    <span>Vol {prevIssue.volume} No {prevIssue.number}</span>
                                </Link>
                            ) : (
                                <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-50 text-slate-300 border border-slate-100 rounded-lg text-xs font-medium cursor-not-allowed">
                                    <ChevronLeft className="w-3.5 h-3.5" /> First Issue
                                </span>
                            )}

                            {nextIssue ? (
                                <Link
                                    href={`/issue/${nextIssue.volume}/${nextIssue.number}`}
                                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-[#E9E5DD] rounded-lg text-xs font-bold transition-colors"
                                    title={`Next: Vol ${nextIssue.volume} Issue ${nextIssue.number}`}
                                >
                                    <span>Vol {nextIssue.volume} No {nextIssue.number}</span>
                                    <ChevronRight className="w-3.5 h-3.5" />
                                </Link>
                            ) : (
                                <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-50 text-slate-300 border border-slate-100 rounded-lg text-xs font-medium cursor-not-allowed">
                                    Latest Issue <ChevronRight className="w-3.5 h-3.5" />
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Issue Metadata Hero Banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-2xl border border-[#E9E5DD] p-6 lg:p-8 mb-10 shadow-sm"
                    >
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                            <div className="space-y-3 max-w-3xl">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-wider rounded-md">
                                        Volume {issue.volume}
                                    </span>
                                    <span className="px-3 py-1 bg-[#F7F4EC] text-slate-700 text-[10px] font-bold uppercase tracking-wider rounded-md border border-[#E9E5DD]">
                                        Issue {issue.number}
                                    </span>
                                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider rounded-md border border-emerald-200 flex items-center gap-1">
                                        <CheckCircle2 className="w-3 h-3" /> Peer Reviewed &amp; Open Access
                                    </span>
                                    {issue.is_current && (
                                        <span className="px-3 py-1 bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider rounded-md border border-amber-200">
                                            Current Issue
                                        </span>
                                    )}
                                </div>

                                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark tracking-tight">
                                    Sanmati Spectrum of Knowledge &amp; Emerging Discourse
                                </h2>

                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                                    National bilingual (Hindi &amp; English) peer-reviewed academic journal published by Sanmati Education &amp; Research Foundation of India. Indexed with CrossRef DOIs and registered under ISSN 3108-1819.
                                </p>

                                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 pt-1">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4 text-primary" />
                                        <span>Publication Date: <strong className="text-dark">{pubDate}</strong></span>
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <FileText className="w-4 h-4 text-primary" />
                                        <span>Total Articles: <strong className="text-dark">{papers.length}</strong></span>
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Layers className="w-4 h-4 text-primary" />
                                        <span>ISSN: <strong className="text-dark">3108-1819</strong></span>
                                    </span>
                                </div>
                            </div>

                            {/* Search bar within this issue */}
                            <div className="w-full lg:w-72 shrink-0">
                                <label htmlFor="issue-search" className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                                    Filter Issue Articles
                                </label>
                                <div className="relative">
                                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input
                                        id="issue-search"
                                        type="text"
                                        placeholder="Search title or author..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-9 pr-3 py-2 bg-[#F7F4EC] border border-[#E9E5DD] rounded-xl text-xs font-medium focus:outline-none focus:border-primary focus:bg-white transition-colors"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Articles List */}
                    {filteredPapers.length > 0 ? (
                        <div className="space-y-4">
                            <div className="flex justify-between items-center px-1">
                                <h3 className="text-sm font-serif font-bold text-dark uppercase tracking-wider">
                                    Published Papers Table of Contents
                                </h3>
                                <span className="text-xs text-slate-400 font-medium">
                                    Showing {filteredPapers.length} of {papers.length}
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {filteredPapers.map((paper, index) => {
                                    const cleanDoi = (paper.doi || '').replace(/^https?:\/\/(dx\.)?doi\.org\//i, '');
                                    const doiUrl = cleanDoi ? `https://doi.org/${cleanDoi}` : null;

                                    return (
                                        <motion.div
                                            key={paper.id}
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: Math.min(index * 0.03, 0.4) }}
                                            className="bg-white rounded-xl p-5 border border-[#E9E5DD] hover:border-primary hover:shadow-card transition-all duration-200 flex flex-col h-full"
                                        >
                                            <div className="flex items-center justify-between gap-2 mb-3">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[10px] font-bold text-slate-400">
                                                        #{String(index + 1).padStart(2, '0')}
                                                    </span>
                                                    <span className="w-1 h-1 rounded-full bg-slate-200" />
                                                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-600 bg-[#F7F4EC] px-2 py-0.5 rounded border border-[#E9E5DD]">
                                                        {paper.category || 'Research Article'}
                                                    </span>
                                                </div>
                                                <span className="inline-flex items-center gap-1 text-[9px] font-bold text-slate-400">
                                                    <Eye className="w-3.5 h-3.5" /> {10 + (paper.id % 7) * 20}
                                                </span>
                                            </div>

                                            <Link
                                                href={`/article/${paper.id}`}
                                                className="block font-serif font-bold text-sm text-dark hover:text-primary transition-colors leading-snug mb-2 line-clamp-3 break-words"
                                            >
                                                {paper.title}
                                            </Link>

                                            <p className="text-slate-500 text-[11px] font-medium leading-relaxed mb-4 flex-grow line-clamp-2 break-words">
                                                {paper.authors}
                                            </p>

                                            {/* DOI & Citation Badge */}
                                            <div className="flex flex-wrap items-center gap-1.5 mb-4">
                                                {doiUrl && (
                                                    <a
                                                        href={doiUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-primary/10 text-[9px] font-bold text-primary uppercase border border-primary/20 hover:bg-primary hover:text-white transition-colors"
                                                    >
                                                        <ShieldCheck className="w-3 h-3" /> DOI
                                                    </a>
                                                )}
                                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#F7F4EC] text-slate-600 text-[9px] font-bold border border-[#E9E5DD]">
                                                    <Quote className="w-3 h-3 text-slate-400" /> {paper.citations || 0}
                                                </span>
                                            </div>

                                            {/* Action buttons */}
                                            <div className={`grid ${paper.file_url || doiUrl ? 'grid-cols-3' : 'grid-cols-2'} gap-2 pt-3 border-t border-[#E9E5DD]/60 mt-auto`}>
                                                <Link
                                                    href={`/article/${paper.id}`}
                                                    className="flex items-center justify-center gap-1 py-1.5 bg-[#F7F4EC] hover:bg-slate-100 text-dark border border-[#E9E5DD] font-bold rounded text-[9px] uppercase tracking-wider transition-colors"
                                                >
                                                    <BookOpen className="w-3 h-3" /> View
                                                </Link>

                                                {paper.file_url ? (
                                                    <a
                                                        href={`/download/paper/${paper.id}`}
                                                        className="flex items-center justify-center gap-1 py-1.5 bg-primary hover:bg-primary-dark text-white font-bold rounded text-[9px] uppercase tracking-wider transition-colors"
                                                    >
                                                        <Download className="w-3 h-3" /> PDF
                                                    </a>
                                                ) : (
                                                    doiUrl && (
                                                        <a
                                                            href={doiUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center justify-center gap-1 py-1.5 bg-white hover:bg-slate-50 text-primary border border-primary/30 font-bold rounded text-[9px] uppercase tracking-wider transition-colors"
                                                        >
                                                            <ExternalLink className="w-3 h-3" /> DOI
                                                        </a>
                                                    )
                                                )}

                                                <button
                                                    onClick={() => setCitationPaper(paper)}
                                                    className="flex items-center justify-center gap-1 py-1.5 bg-white hover:bg-slate-50 text-dark border border-[#E9E5DD] font-bold rounded text-[9px] uppercase tracking-wider transition-colors"
                                                >
                                                    <Quote className="w-3.5 h-3.5" /> Cite
                                                </button>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-16 bg-white rounded-xl border border-dashed border-[#E9E5DD] p-6">
                            <Search className="w-10 h-10 text-slate-300 mx-auto mb-3 animate-pulse" />
                            <h3 className="text-sm font-bold text-dark uppercase tracking-wider">No Articles Found</h3>
                            <p className="text-xs text-slate-500 max-w-sm mx-auto mt-2 leading-relaxed font-medium">
                                No articles in this issue match your search query &ldquo;{searchQuery}&rdquo;.
                            </p>
                            <button
                                onClick={() => setSearchQuery('')}
                                className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-colors"
                            >
                                Clear Search
                            </button>
                        </div>
                    )}

                </div>
            </div>

            {/* Citation Modal */}
            <Modal
                isOpen={!!citationPaper}
                onClose={() => setCitationPaper(null)}
                title="Citation Generator"
                size="lg"
            >
                {citationPaper && (
                    <div className="p-6 bg-[#FFFDF8]">
                        <p className="text-slate-500 mb-4 text-xs font-medium">
                            Select and copy the citation format suitable for your academic document bibliography.
                        </p>
                        <CitationGenerator paper={citationPaper} />
                    </div>
                )}
            </Modal>
        </MainLayout>
    );
}
