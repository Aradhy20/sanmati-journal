import React, { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';
import { motion } from 'framer-motion';
import Modal from '../Components/ui/Modal';
import CitationGenerator from '../Components/ui/CitationGenerator';
import {
    Calendar, Download, ArrowLeft, Tag, AlignLeft, Users,
    Quote, ChevronRight, Mail, Twitter, Linkedin, Clock, Copy, Check, MessageCircle,
    BookOpen, Globe, Award, ExternalLink, Share2, FileText, Bookmark, ArrowRight
} from 'lucide-react';

/* ── Reading Progress ── */
function ReadingProgress() {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const onScroll = () => {
            const el = document.documentElement;
            const scrolled = el.scrollTop;
            const total = el.scrollHeight - el.clientHeight;
            setProgress(total > 0 ? (scrolled / total) * 100 : 0);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (
        <div
            className="fixed top-0 left-0 z-[200] h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-100"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-label="Reading progress"
            aria-valuenow={Math.round(progress)}
        />
    );
}

/* ── Share Panel ── */
function SharePanel({ paper, url }) {
    const [copied, setCopied] = useState(false);
    const copyLink = () => {
        navigator.clipboard.writeText(url).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const shares = [
        { label: 'Twitter', icon: Twitter, href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(paper.title)}&url=${encodeURIComponent(url)}` },
        { label: 'LinkedIn', icon: Linkedin, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
        { label: 'Email', icon: Mail, href: `mailto:?subject=${encodeURIComponent(paper.title)}&body=${encodeURIComponent('Check out: ' + url)}` },
        { label: 'WhatsApp', icon: MessageCircle, href: `https://wa.me/?text=${encodeURIComponent(paper.title + '\n' + url)}` },
    ];

    return (
        <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mr-1">Share</span>
            {shares.map(s => {
                const Icon = s.icon;
                return (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${s.label}`}
                        className="w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-150">
                        <Icon className="w-3.5 h-3.5" />
                    </a>
                );
            })}
            <button onClick={copyLink} aria-label={copied ? 'Copied!' : 'Copy link'}
                className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-150 ${copied ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-200 bg-white text-slate-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200'}`}>
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
        </div>
    );
}

/* ── Main Article Page ── */
export default function Article({ paper, relatedPapers = [] }) {
    const [citationModalOpen, setCitationModalOpen] = useState(false);

    const volumeNum = paper.issue?.volume?.volume_number || paper.issue?.volume || null;
    const issueNum = paper.issue?.number || paper.issue?.issue_number || null;

    const pubDate = paper.issue?.year
        ? `${paper.issue.month_range ? paper.issue.month_range + ' ' : ''}${paper.issue.year}`
        : new Date(paper.created_at).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://sanmatijournal.in';
    const articleUrl = `${baseUrl}/article/${paper.id}`;
    const pdfUrl = paper.file_url ? `${baseUrl}/download/paper/${paper.id}` : null;

    const keywords = paper.keywords ? paper.keywords.split(',').map(k => k.trim()).filter(Boolean) : [];
    const readingMinutes = paper.abstract ? Math.max(1, Math.ceil(paper.abstract.split(' ').length / 200)) : 4;
    const pageRange = paper.page_numbers ? paper.page_numbers.split('-').map(p => p.trim()) : [];
    const firstPage = pageRange[0] || null;
    const lastPage = pageRange[1] || null;

    const cleanDoi = (paper.doi || '').replace(/^https?:\/\/(dx\.)?doi\.org\//i, '');
    const doiUrl = cleanDoi ? `https://doi.org/${cleanDoi}` : null;
    const isZenodo = cleanDoi.toLowerCase().includes('zenodo');

    const jsonLd = {
        schema: {
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "headline": paper.title,
            "name": paper.title,
            ...(paper.abstract ? {
                "abstract": paper.abstract,
                "description": paper.meta_description || paper.abstract.substring(0, 160)
            } : {
                "description": paper.meta_description || paper.title
            }),
            "author": (paper.authors || '').split(',').map(name => ({ "@type": "Person", "name": name.trim() })),
            "datePublished": paper.issue?.year ? String(paper.issue.year) : new Date(paper.created_at).toISOString().split('T')[0],
            "inLanguage": ["en", "hi"],
            "isAccessibleForFree": true,
            "license": "https://creativecommons.org/licenses/by/4.0/",
            "isPartOf": {
                "@type": "Periodical",
                "name": "Sanmati Spectrum of Knowledge & Emerging Discourse",
                "issn": "3108-1819"
            },
            ...(volumeNum ? { "volumeNumber": String(volumeNum) } : {}),
            ...(issueNum ? { "issueNumber": String(issueNum) } : {}),
            ...(firstPage ? { "pageStart": firstPage } : {}),
            ...(lastPage ? { "pageEnd": lastPage } : {}),
            ...(cleanDoi ? { "identifier": { "@type": "PropertyValue", "propertyID": "DOI", "value": cleanDoi } } : {}),
            "url": articleUrl,
            ...(pdfUrl ? {
                "encoding": {
                    "@type": "MediaObject",
                    "contentUrl": pdfUrl,
                    "encodingFormat": "application/pdf"
                }
            } : {}),
            "publisher": {
                "@type": "Organization",
                "name": "Sanmati Spectrum of Knowledge & Emerging Discourse",
                "url": "https://sanmatijournal.in",
                "logo": { "@type": "ImageObject", "url": `${baseUrl}/logo.webp` }
            }
        },
        breadcrumb: [
            { name: 'Home', url: '/' },
            { name: 'Archive', url: '/archive' },
            ...(volumeNum && issueNum ? [
                { name: `Vol. ${volumeNum}, Issue ${issueNum}`, url: `/issue/${volumeNum}/${issueNum}` }
            ] : []),
            { name: 'Article', url: `/article/${paper.id}` },
        ]
    };

    useEffect(() => {
        if (typeof window !== 'undefined' && window.dataLayer) {
            window.dataLayer.push({
                event: 'article_view',
                article_id: paper.id,
                article_title: paper.title,
                journal_volume: volumeNum ? String(volumeNum) : undefined,
                journal_issue: issueNum ? String(issueNum) : undefined
            });
        }
    }, [paper.id]);

    const trackPaperDownload = () => {
        if (typeof window !== 'undefined' && window.dataLayer) {
            window.dataLayer.push({
                event: 'file_download',
                file_name: paper.title,
                file_type: 'pdf',
                article_id: paper.id,
                portal_source: 'article_page'
            });
        }
    };

    return (
        <MainLayout
            title={`${paper.title} | Sanmati Journal`}
            description={`${paper.meta_description || (paper.abstract || paper.title).substring(0, 150)}... Published in Sanmati Spectrum of Knowledge (ISSN 3108-1819).`}
            keywords={`${keywords.join(', ')}, UGC Care Journal, Multidisciplinary Research Journal, Publish Research Paper in India, Peer Reviewed Journal, ISSN Journal`}
            jsonLd={jsonLd}
            aiSummary={paper.abstract || undefined}
        >
            <ReadingProgress />

            <Head>
                <meta name="citation_title"            content={paper.title} />
                <meta name="citation_author"           content={paper.authors} />
                <meta name="citation_publication_date" content={pubDate} />
                <meta name="citation_journal_title"    content="Sanmati Spectrum of Knowledge & Emerging Discourse" />
                <meta name="citation_issn"             content="3108-1819" />
                {pdfUrl && <meta name="citation_pdf_url" content={pdfUrl} />}
                {volumeNum && <meta name="citation_volume" content={String(volumeNum)} />}
                {issueNum  && <meta name="citation_issue"  content={String(issueNum)} />}
                {firstPage && <meta name="citation_firstpage" content={firstPage} />}
                {lastPage  && <meta name="citation_lastpage"  content={lastPage} />}
                {cleanDoi  && <meta name="citation_doi" content={cleanDoi} />}
                <meta name="DC.title"     content={paper.title} />
                <meta name="DC.creator"   content={paper.authors} />
                <meta name="DC.date"      content={pubDate} />
                <meta name="DC.publisher" content="Sanmati Spectrum of Knowledge & Emerging Discourse" />
                {pdfUrl && <meta name="DC.format" content="application/pdf" />}
                <meta name="DC.language"  content="en" />
                {cleanDoi && <meta name="DC.identifier" content={`https://doi.org/${cleanDoi}`} />}
            </Head>

            {/* ── Article Hero band ── */}
            <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/60 pt-8 pb-0">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-5 flex-wrap">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3 shrink-0" />
                        <Link href="/archive" className="hover:text-blue-600 transition-colors">Archive</Link>
                        {volumeNum && issueNum && (
                            <>
                                <ChevronRight className="w-3 h-3 shrink-0" />
                                <Link href={`/issue/${volumeNum}/${issueNum}`} className="hover:text-blue-600 transition-colors">
                                    Vol. {volumeNum}, Issue {issueNum}
                                </Link>
                            </>
                        )}
                        <ChevronRight className="w-3 h-3 shrink-0" />
                        <span className="text-blue-600 font-bold truncate max-w-[220px]">Article</span>
                    </nav>

                    {volumeNum && issueNum ? (
                        <Link href={`/issue/${volumeNum}/${issueNum}`} className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-blue-600 mb-6 group transition-colors">
                            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                            Back to Volume {volumeNum}, Issue {issueNum}
                        </Link>
                    ) : (
                        <Link href="/archive" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-blue-600 mb-6 group transition-colors">
                            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                            Back to Archive
                        </Link>
                    )}
                </div>
            </div>

            {/* ── Main Content ── */}
            <div className="bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="grid lg:grid-cols-12 gap-10">

                        {/* ── Main column ── */}
                        <article className="lg:col-span-8 space-y-8">

                            {/* Category & Issue badges */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="flex flex-wrap items-center gap-2"
                            >
                                <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-200 rounded-lg">
                                    {paper.category || 'Research Article'}
                                </span>
                                <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg">
                                    Open Access
                                </span>
                                {cleanDoi && (
                                    <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-lg">
                                        {isZenodo ? 'Zenodo DOI' : 'CrossRef DOI'}
                                    </span>
                                )}
                                {volumeNum && issueNum && (
                                    <Link
                                        href={`/issue/${volumeNum}/${issueNum}`}
                                        className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-slate-100 text-slate-700 border border-slate-200 rounded-lg hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors"
                                    >
                                        Vol. {volumeNum}, Issue {issueNum}
                                    </Link>
                                )}
                            </motion.div>

                            {/* Title */}
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-900 leading-tight tracking-tight">
                                {paper.title}
                            </h1>

                            {/* Meta row */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.15 }}
                                className="flex flex-wrap items-center gap-5 pb-6 border-b border-slate-200"
                            >
                                {[
                                    { icon: Users, label: 'Authors', value: paper.authors, color: 'text-blue-600', bg: 'bg-blue-50' },
                                    { icon: Calendar, label: 'Published', value: pubDate, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                                    { icon: Clock, label: 'Reading Time', value: `${readingMinutes} min read`, color: 'text-slate-600', bg: 'bg-slate-100' },
                                ].map(({ icon: Icon, label, value, color, bg }) => (
                                    <div key={label} className="flex items-center gap-2.5">
                                        <div className={`w-8 h-8 rounded-xl ${bg} flex items-center justify-center ${color} shrink-0`}>
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">{label}</div>
                                            <div className="text-xs font-bold text-slate-800">{value}</div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>

                            {/* Action bar */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                                <SharePanel paper={paper} url={articleUrl} />
                                <div className="flex gap-2.5 w-full sm:w-auto">
                                    <button
                                        onClick={() => setCitationModalOpen(true)}
                                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-150 shadow-sm"
                                    >
                                        <Quote className="w-3.5 h-3.5" />
                                        Cite
                                    </button>
                                    {paper.file_url ? (
                                        <a
                                            href={`/download/paper/${paper.id}`}
                                            onClick={trackPaperDownload}
                                            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/25"
                                        >
                                            <Download className="w-3.5 h-3.5" />
                                            Download PDF
                                        </a>
                                    ) : doiUrl ? (
                                        <a
                                            href={doiUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-600/25"
                                        >
                                            <ExternalLink className="w-3.5 h-3.5" />
                                            View via DOI
                                        </a>
                                    ) : null}
                                </div>
                            </div>

                            {/* Abstract or Scholarly Notice */}
                            {paper.abstract ? (
                                <section aria-labelledby="abstract-heading">
                                    <h2 id="abstract-heading" className="flex items-center gap-2 text-lg font-heading font-bold text-slate-900 mb-4">
                                        <span className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center">
                                            <AlignLeft className="w-4 h-4 text-blue-600" />
                                        </span>
                                        Abstract
                                    </h2>
                                    <div className="text-sm text-slate-700 leading-[1.85] bg-blue-50/40 border border-blue-100 rounded-2xl p-6 font-medium">
                                        {paper.abstract}
                                    </div>
                                </section>
                            ) : (
                                <section aria-labelledby="scholarly-record-heading" className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                                    <h2 id="scholarly-record-heading" className="flex items-center gap-2 text-base font-heading font-bold text-slate-900 mb-2">
                                        <span className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center">
                                            <FileText className="w-4 h-4 text-indigo-600" />
                                        </span>
                                        Scholarly Publication Record
                                    </h2>
                                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                        This article is an officially published and verified scholarly record in Sanmati Spectrum of Knowledge &amp; Emerging Discourse.
                                        Full bibliographic citation, catalog entry, and persistent digital object identifier are registered below.
                                    </p>
                                    {doiUrl && (
                                        <a
                                            href={doiUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-colors shadow-sm"
                                        >
                                            <ExternalLink className="w-3.5 h-3.5" />
                                            Access Official Record on DOI Repository
                                        </a>
                                    )}
                                </section>
                            )}

                            {/* Keywords */}
                            {keywords.length > 0 && (
                                <section aria-labelledby="keywords-heading">
                                    <h2 id="keywords-heading" className="flex items-center gap-2 text-sm font-heading font-bold text-slate-900 mb-3">
                                        <span className="w-7 h-7 rounded-xl bg-indigo-50 flex items-center justify-center">
                                            <Tag className="w-3.5 h-3.5 text-indigo-600" />
                                        </span>
                                        Keywords
                                    </h2>
                                    <div className="flex flex-wrap gap-2">
                                        {keywords.map((kw, i) => (
                                            <span key={i} className="px-3 py-1.5 text-[11px] font-bold text-slate-600 bg-slate-100 border border-slate-200 rounded-lg hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors cursor-default">
                                                {kw}
                                            </span>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* DOI Section */}
                            {doiUrl && (
                                <section aria-labelledby="doi-heading" className="p-5 rounded-2xl bg-indigo-50 border border-indigo-100">
                                    <h2 id="doi-heading" className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 mb-2">
                                        {isZenodo ? 'Digital Object Identifier (Zenodo)' : 'Digital Object Identifier (CrossRef)'}
                                    </h2>
                                    <a
                                        href={doiUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-sm font-mono font-bold text-indigo-700 hover:text-indigo-900 hover:underline break-all"
                                    >
                                        {doiUrl}
                                        <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                                    </a>
                                </section>
                            )}

                            {/* Publication info */}
                            {paper.issue && (
                                <section aria-labelledby="pub-info-heading" className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
                                    <h2 id="pub-info-heading" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-5">
                                        Publication Information
                                    </h2>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                                        {[
                                            { label: 'Journal',  value: 'Sanmati Spectrum' },
                                            { label: 'ISSN',     value: '3108-1819' },
                                            { label: 'Volume',   value: volumeNum },
                                            { label: 'Issue',    value: issueNum },
                                            paper.page_numbers ? { label: 'Pages', value: paper.page_numbers } : null,
                                            { label: 'Access',   value: 'Open Access (CC-BY)' },
                                        ].filter(Boolean).map(({ label, value }) => (
                                            <div key={label}>
                                                <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">{label}</div>
                                                <div className="text-sm font-bold text-slate-800">{value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Related Papers in Same Issue */}
                            {relatedPapers && relatedPapers.length > 0 && (
                                <section aria-labelledby="related-heading" className="pt-4 border-t border-slate-200">
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 id="related-heading" className="text-base font-heading font-bold text-slate-900 flex items-center gap-2">
                                            <BookOpen className="w-4 h-4 text-blue-600" />
                                            Other Articles in this Issue
                                        </h2>
                                        {volumeNum && issueNum && (
                                            <Link
                                                href={`/issue/${volumeNum}/${issueNum}`}
                                                className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                                            >
                                                View all articles
                                                <ArrowRight className="w-3 h-3" />
                                            </Link>
                                        )}
                                    </div>
                                    <div className="space-y-3">
                                        {relatedPapers.map(rel => (
                                            <Link
                                                key={rel.id}
                                                href={`/article/${rel.id}`}
                                                className="block p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all group"
                                            >
                                                <div className="text-xs font-bold text-slate-800 group-hover:text-blue-600 line-clamp-2 transition-colors">
                                                    {rel.title}
                                                </div>
                                                <div className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                                                    {rel.authors}
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Bottom CTAs */}
                            <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-200">
                                {paper.file_url && (
                                    <a
                                        href={`/download/paper/${paper.id}`}
                                        onClick={trackPaperDownload}
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-md shadow-blue-600/25 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
                                    >
                                        <Download className="w-4 h-4" />
                                        Download Full Paper (PDF)
                                    </a>
                                )}
                                {doiUrl && (
                                    <a
                                        href={doiUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-sm shadow-md shadow-indigo-600/25 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Official DOI Record
                                    </a>
                                )}
                                {volumeNum && issueNum ? (
                                    <Link
                                        href={`/issue/${volumeNum}/${issueNum}`}
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-sm transition-all duration-200"
                                    >
                                        <BookOpen className="w-4 h-4 text-blue-600" />
                                        View Issue {issueNum}
                                    </Link>
                                ) : (
                                    <Link
                                        href="/archive"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-sm transition-all duration-200"
                                    >
                                        <BookOpen className="w-4 h-4 text-blue-600" />
                                        Browse Archive
                                    </Link>
                                )}
                            </div>
                        </article>

                        {/* ── Sidebar ── */}
                        <aside className="lg:col-span-4 space-y-5" aria-label="Article sidebar">

                            {/* Journal card */}
                            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-sm">
                                        <BookOpen className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-900 leading-tight">Sanmati Spectrum</div>
                                        <div className="text-[10px] text-slate-400 font-medium">of Knowledge &amp; Emerging Discourse</div>
                                    </div>
                                </div>
                                <div className="space-y-2.5 text-xs">
                                    {[
                                        { icon: Award, label: 'ISSN', value: '3108-1819' },
                                        { icon: Globe, label: 'Access', value: 'Open Access (CC-BY 4.0)' },
                                        { icon: FileText, label: 'DOI Provider', value: isZenodo ? 'Zenodo' : 'CrossRef' },
                                    ].map(({ icon: Icon, label, value }) => (
                                        <div key={label} className="flex items-center gap-2">
                                            <Icon className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                                            <span className="text-slate-500 font-medium">{label}:</span>
                                            <span className="font-bold text-slate-700">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Submit CTA card */}
                            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white space-y-4">
                                <h3 className="text-sm font-heading font-bold leading-snug">Publish Your Research With Us</h3>
                                <p className="text-blue-100 text-xs leading-relaxed">
                                    Submit your manuscript for peer review. Get a registered DOI and global open access publication.
                                </p>
                                <Link
                                    href="/submission-guidelines/call-for-papers"
                                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white text-blue-700 text-xs font-bold hover:bg-blue-50 transition-colors"
                                >
                                    Submit Your Paper
                                    <ChevronRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>

                            {/* Quick actions */}
                            <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                                <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Quick Actions</h3>
                                <button
                                    onClick={() => setCitationModalOpen(true)}
                                    className="flex items-center gap-2.5 w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all"
                                >
                                    <Quote className="w-4 h-4 text-blue-500" />
                                    Generate Citation
                                </button>
                                {paper.file_url && (
                                    <a
                                        href={`/download/paper/${paper.id}`}
                                        onClick={trackPaperDownload}
                                        className="flex items-center gap-2.5 w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all"
                                    >
                                        <Download className="w-4 h-4 text-blue-500" />
                                        Download PDF
                                    </a>
                                )}
                                {doiUrl && (
                                    <a
                                        href={doiUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2.5 w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all"
                                    >
                                        <ExternalLink className="w-4 h-4 text-blue-500" />
                                        View DOI Page
                                    </a>
                                )}
                                {volumeNum && issueNum && (
                                    <Link
                                        href={`/issue/${volumeNum}/${issueNum}`}
                                        className="flex items-center gap-2.5 w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all"
                                    >
                                        <BookOpen className="w-4 h-4 text-blue-500" />
                                        View Complete Issue
                                    </Link>
                                )}
                            </div>

                        </aside>

                    </div>
                </div>
            </div>

            {/* Citation Modal */}
            <Modal isOpen={citationModalOpen} onClose={() => setCitationModalOpen(false)} title="Citation Generator" size="lg">
                <div className="p-6">
                    <p className="text-xs text-slate-500 mb-4 font-medium">Copy and paste a formatted citation suitable for your academic bibliography.</p>
                    <CitationGenerator paper={paper} />
                </div>
            </Modal>
        </MainLayout>
    );
}
