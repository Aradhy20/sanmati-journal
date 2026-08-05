import React, { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';
import { motion } from 'framer-motion';
import Modal from '../Components/ui/Modal';
import CitationGenerator from '../Components/ui/CitationGenerator';
import {
    Calendar, Download, ArrowLeft, Tag, AlignLeft, Users,
    Quote, ChevronRight, Mail, Twitter, Linkedin, Clock, Copy, Check, MessageCircle
} from 'lucide-react';

/* ── Reading Progress Bar ── */
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
            className="fixed top-0 left-0 z-[200] h-0.5 bg-primary transition-all duration-100"
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

    const shareLinks = [
        {
            label: 'Share on Twitter/X',
            icon: Twitter,
            href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(paper.title)}&url=${encodeURIComponent(url)}`,
            color: 'hover:bg-slate-100 hover:text-primary',
        },
        {
            label: 'Share on LinkedIn',
            icon: Linkedin,
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
            color: 'hover:bg-slate-100 hover:text-primary',
        },
        {
            label: 'Share via Email',
            icon: Mail,
            href: `mailto:?subject=${encodeURIComponent(paper.title)}&body=${encodeURIComponent('Check out this research article: ' + url)}`,
            color: 'hover:bg-slate-100 hover:text-primary',
        },
        {
            label: 'Share on WhatsApp',
            icon: MessageCircle,
            href: `https://wa.me/?text=${encodeURIComponent(paper.title + '\n' + url)}`,
            color: 'hover:bg-slate-100 hover:text-primary',
        },
    ];

    return (
        <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mr-2">Share</span>
            {shareLinks.map(s => {
                const Icon = s.icon;
                return (
                    <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className={`w-8 h-8 rounded border border-[#E9E5DD] bg-white flex items-center justify-center text-slate-500 transition-colors ${s.color}`}
                    >
                        <Icon className="w-3.5 h-3.5" />
                    </a>
                );
            })}
            <button
                onClick={copyLink}
                aria-label={copied ? 'Link copied!' : 'Copy link'}
                className={`w-8 h-8 rounded border flex items-center justify-center transition-colors ${
                    copied ? 'bg-primary border-primary text-white' : 'bg-white border-[#E9E5DD] text-slate-500 hover:bg-slate-50'
                }`}
            >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
        </div>
    );
}

/* ── Main Article Page ── */
export default function Article({ paper }) {
    const [citationModalOpen, setCitationModalOpen] = useState(false);

    const pubDate = paper.issue?.year
        ? `${paper.issue.month_range ? paper.issue.month_range + ' ' : ''}${paper.issue.year}`
        : new Date(paper.created_at).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://sanmatijournal.in';
    const articleUrl = `${baseUrl}/article/${paper.id}`;
    const pdfUrl = `${baseUrl}/download/paper/${paper.id}`;

    const keywords = paper.keywords ? paper.keywords.split(',').map(k => k.trim()).filter(Boolean) : [];

    const readingMinutes = paper.abstract
        ? Math.max(1, Math.ceil(paper.abstract.split(' ').length / 200))
        : 5;

    const pageRange = paper.page_numbers ? paper.page_numbers.split('-').map(p => p.trim()) : [];
    const firstPage = pageRange[0] || null;
    const lastPage = pageRange[1] || null;
    const volumeNum = paper.issue?.volume?.volume_number || paper.issue?.volume || null;
    const issueNum = paper.issue?.issue_number || null;

    const scholarlyArticleJsonLd = {
        schema: {
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "headline": paper.title,
            "name": paper.title,
            "abstract": paper.abstract,
            "description": paper.meta_description || (paper.abstract || '').substring(0, 160),
            "author": paper.authors.split(',').map(name => ({ "@type": "Person", "name": name.trim() })),
            "datePublished": paper.issue?.year ? String(paper.issue.year) : new Date(paper.created_at).toISOString().split('T')[0],
            "inLanguage": ["en", "hi"],
            "isAccessibleForFree": true,
            "license": "https://creativecommons.org/licenses/by/4.0/",
            "isPartOf": {
                "@type": "Periodical",
                "name": "Sanmati Spectrum of Knowledge & Emerging Discourse",
                "issn": "3108-1819"
            },
            "volumeNumber": volumeNum ? String(volumeNum) : undefined,
            "issueNumber": issueNum ? String(issueNum) : undefined,
            "pageStart": firstPage || undefined,
            "pageEnd": lastPage || undefined,
            "identifier": paper.doi ? { "@type": "PropertyValue", "propertyID": "DOI", "value": paper.doi } : undefined,
            "url": articleUrl,
            "sameAs": `${baseUrl}/download/paper/${paper.id}`,
            "publisher": {
                "@type": "Organization",
                "name": "Sanmati Spectrum of Knowledge & Emerging Discourse",
                "url": "https://sanmatijournal.in",
                "logo": {
                    "@type": "ImageObject",
                    "url": `${baseUrl}/logo.webp`
                }
            }
        },
        breadcrumb: [
            { name: 'Home',    url: '/' },
            { name: 'Archive', url: '/archive' },
            { name: 'Article', url: `/article/${paper.id}` },
        ]
    };

    return (
        <MainLayout
            title={`${paper.title} | Peer Reviewed Multidisciplinary Research Journal`}
            description={`${paper.meta_description || (paper.abstract || '').substring(0, 150)}... Published in Sanmati peer reviewed multidisciplinary ISSN journal (ISSN 3108-1819).`}
            keywords={`${keywords.join(', ')}, UGC Care Journal, Multidisciplinary Research Journal, Publish Research Paper in India, Peer Reviewed Journal, ISSN Journal`}
            jsonLd={scholarlyArticleJsonLd}
            aiSummary={paper.abstract}
        >
            <ReadingProgress />

            <Head>
                <meta name="citation_title"            content={paper.title} />
                <meta name="citation_author"           content={paper.authors} />
                <meta name="citation_publication_date" content={pubDate} />
                <meta name="citation_journal_title"    content="Sanmati Spectrum of Knowledge & Emerging Discourse" />
                <meta name="citation_issn"             content="3108-1819" />
                <meta name="citation_pdf_url"          content={`${baseUrl}/download/paper/${paper.id}`} />
                {volumeNum && <meta name="citation_volume" content={String(volumeNum)} />}
                {issueNum && <meta name="citation_issue" content={String(issueNum)} />}
                {firstPage && <meta name="citation_firstpage" content={firstPage} />}
                {lastPage && <meta name="citation_lastpage" content={lastPage} />}
                {paper.doi && <meta name="citation_doi" content={paper.doi} />}

                <meta name="DC.title"      content={paper.title} />
                <meta name="DC.creator"    content={paper.authors} />
                <meta name="DC.date"       content={pubDate} />
                <meta name="DC.publisher"  content="Sanmati Spectrum of Knowledge & Emerging Discourse" />
                <meta name="DC.format"     content="application/pdf" />
                <meta name="DC.language"   content="en" />
                {paper.doi && <meta name="DC.identifier" content={paper.doi} />}
            </Head>

            {/* ── Article Hero ── */}
            <div className="bg-[#FFFDF8] pt-10 pb-0 border-b border-[#E9E5DD]/60">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-6">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link href="/archive" className="hover:text-primary transition-colors">Archive</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary font-bold truncate max-w-[200px]">Article</span>
                    </nav>

                    {/* Back link */}
                    <Link
                        href="/archive"
                        className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-primary transition-colors mb-6 group"
                    >
                        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                        Back to Archive
                    </Link>

                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-6">
                        <span className="px-2.5 py-0.5 text-[9px] font-bold tracking-wider uppercase bg-[#E9E5DD] text-slate-700 rounded">{paper.category || 'Research Article'}</span>
                        <span className="px-2.5 py-0.5 text-[9px] font-bold tracking-wider uppercase bg-primary/15 text-primary rounded">Open Access</span>
                        {paper.doi && <span className="px-2.5 py-0.5 text-[9px] font-bold tracking-wider uppercase bg-secondary/15 text-secondary rounded">DOI</span>}
                        {paper.issue && (
                            <span className="px-2.5 py-0.5 text-[9px] font-bold tracking-wider uppercase bg-[#E9E5DD]/60 text-slate-500 rounded">
                                Vol. {paper.issue.volume?.volume_number ?? paper.issue.volume}, Issue {paper.issue.issue_number}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className="bg-[#FFFDF8]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-dark leading-tight tracking-tight mb-8"
                    >
                        {paper.title}
                    </motion.h1>

                    {/* Authors, Date, Reading Time */}
                    <div className="flex flex-wrap items-center gap-5 pb-8 border-b border-[#E9E5DD] mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-[#F7F4EC] border border-[#E9E5DD] flex items-center justify-center text-primary">
                                <Users className="w-4 h-4" />
                            </div>
                            <div>
                                <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Authors</div>
                                <div className="text-xs font-bold text-dark">{paper.authors}</div>
                            </div>
                        </div>
                        <div className="h-8 w-px bg-[#E9E5DD] hidden sm:block" aria-hidden="true" />
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-[#F7F4EC] border border-[#E9E5DD] flex items-center justify-center text-[#C77D5B]">
                                <Calendar className="w-4 h-4" />
                            </div>
                            <div>
                                <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Published</div>
                                <div className="text-xs font-bold text-dark">{pubDate}</div>
                            </div>
                        </div>
                        <div className="h-8 w-px bg-[#E9E5DD] hidden sm:block" aria-hidden="true" />
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-[#F7F4EC] border border-[#E9E5DD] flex items-center justify-center text-primary">
                                <Clock className="w-4 h-4" />
                            </div>
                            <div>
                                <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Reading Time</div>
                                <div className="text-xs font-bold text-dark">{readingMinutes} min read</div>
                            </div>
                        </div>
                    </div>

                    {/* Action Bar */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-10">
                        <SharePanel paper={paper} url={articleUrl} />
                        <div className="flex gap-2.5 w-full sm:w-auto">
                            <button
                                onClick={() => setCitationModalOpen(true)}
                                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors shadow-2xs"
                            >
                                <Quote className="w-3.5 h-3.5 text-blue-600" />
                                Cite Article
                            </button>
                            <a
                                href={`/download/paper/${paper.id}`}
                                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20"
                            >
                                <Download className="w-3.5 h-3.5" />
                                Download PDF
                            </a>
                        </div>
                    </div>



                    {/* Abstract */}
                    <section aria-labelledby="abstract-heading" className="mb-10">
                        <h2 id="abstract-heading" className="flex items-center gap-2 text-lg font-serif font-bold text-dark mb-4">
                            <AlignLeft className="w-4.5 h-4.5 text-primary" />
                            Abstract
                        </h2>
                        <div className="text-sm text-slate-600 leading-relaxed bg-white border border-[#E9E5DD] rounded-xl p-6">
                            {paper.abstract}
                        </div>
                    </section>

                    {/* Keywords */}
                    {keywords.length > 0 && (
                        <section aria-labelledby="keywords-heading" className="mb-10">
                            <h2 id="keywords-heading" className="flex items-center gap-2 text-sm font-serif font-bold text-dark mb-3">
                                <Tag className="w-4 h-4 text-primary" />
                                Keywords
                            </h2>
                            <div className="flex flex-wrap gap-1.5">
                                {keywords.map((kw, i) => (
                                    <span key={i} className="px-2.5 py-1 text-[10px] font-medium text-slate-600 bg-[#F7F4EC] border border-[#E9E5DD] rounded">
                                        {kw}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* DOI Section */}
                    {paper.doi && (
                        <section aria-labelledby="doi-heading" className="mb-10 p-5 rounded-xl bg-[#F7F4EC] border border-[#E9E5DD]">
                            <h2 id="doi-heading" className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                                CrossRef DOI
                            </h2>
                            <a
                                href={paper.doi.startsWith('http') ? paper.doi : `https://doi.org/${paper.doi}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary hover:underline"
                            >
                                {paper.doi.startsWith('http') ? paper.doi : `https://doi.org/${paper.doi}`}
                            </a>
                        </section>
                    )}

                    {/* Publication Info */}
                    {paper.issue && (
                        <section aria-labelledby="pub-info-heading" className="mb-10 p-5 rounded-xl border border-[#E9E5DD] bg-white">
                            <h2 id="pub-info-heading" className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-4">
                                Publication Information
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {[
                                    { label: 'Journal',     value: 'Sanmati Spectrum' },
                                    { label: 'ISSN',        value: '3108-1819' },
                                    { label: 'Volume',      value: paper.issue.volume?.volume_number ?? paper.issue.volume },
                                    { label: 'Issue',       value: paper.issue.issue_number },
                                ].map(({ label, value }) => (
                                    <div key={label}>
                                        <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">{label}</div>
                                        <div className="text-xs font-bold text-dark mt-0.5">{value}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* CTA */}
                    <div className="flex flex-wrap gap-3 py-8 border-t border-[#E9E5DD]">
                        <a
                            href={`/download/paper/${paper.id}`}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-primary-dark transition-colors"
                        >
                            <Download className="w-4 h-4" />
                            Download Full Paper (PDF)
                        </a>
                        <Link href="/archive" className="inline-flex items-center gap-2 px-6 py-3 bg-[#F7F4EC] text-dark border border-[#E9E5DD] font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors">
                            Browse More Articles
                        </Link>
                    </div>
                </div>
            </div>

            {/* Citation Modal */}
            <Modal
                isOpen={citationModalOpen}
                onClose={() => setCitationModalOpen(false)}
                title="Citation Generator"
                size="lg"
            >
                <div className="p-6 bg-[#FFFDF8]">
                    <p className="text-xs text-slate-500 mb-4 font-medium font-serif">Copy and paste a formatted citation suitable for your academic document bibliography.</p>
                    <CitationGenerator paper={paper} />
                </div>
            </Modal>
        </MainLayout>
    );
}
