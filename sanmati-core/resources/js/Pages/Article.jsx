import React, { useState, useEffect, useRef } from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';
import { motion } from 'framer-motion';
import Modal from '../Components/ui/Modal';
import CitationGenerator from '../Components/ui/CitationGenerator';
import {
    Calendar, FileText, Download, ArrowLeft, Tag, AlignLeft, Users,
    Quote, Share2, Link2, ExternalLink, BookOpen, CheckCircle,
    Clock, ChevronRight, Mail, Twitter, Linkedin, Star, Eye,
    Copy, Check, MessageCircle
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
            className="fixed top-0 left-0 z-[200] h-0.5 bg-gradient-to-r from-secondary via-accent to-emerald transition-all duration-100"
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
            color: 'hover:bg-sky-50 hover:text-sky-600',
        },
        {
            label: 'Share on LinkedIn',
            icon: Linkedin,
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
            color: 'hover:bg-blue-50 hover:text-blue-700',
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
            color: 'hover:bg-green-50 hover:text-green-700',
        },
    ];

    return (
        <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-black uppercase tracking-wider text-muted mr-1">Share</span>
            {shareLinks.map(s => {
                const Icon = s.icon;
                return (
                    <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className={`w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 transition-all duration-200 ${s.color}`}
                    >
                        <Icon className="w-4 h-4" />
                    </a>
                );
            })}
            <button
                onClick={copyLink}
                aria-label={copied ? 'Link copied!' : 'Copy link'}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 ${
                    copied ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
            >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
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

    const keywords = paper.keywords ? paper.keywords.split(',').map(k => k.trim()).filter(Boolean) : [];

    const readingMinutes = paper.abstract
        ? Math.max(1, Math.ceil(paper.abstract.split(' ').length / 200))
        : 5;

    const scholarlyArticleJsonLd = {
        schema: {
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "headline": paper.title,
            "abstract": paper.abstract,
            "author": paper.authors.split(',').map(name => ({ "@type": "Person", "name": name.trim() })),
            "datePublished": paper.issue?.year ? String(paper.issue.year) : new Date(paper.created_at).toISOString().split('T')[0],
            "isPartOf": {
                "@type": "Periodical",
                "name": "Sanmati Spectrum of Knowledge & Emerging Discourse",
                "issn": "3108-1819"
            },
            "identifier": paper.doi ? { "@type": "PropertyValue", "propertyID": "DOI", "value": paper.doi } : undefined,
            "url": `${baseUrl}/download/paper/${paper.id}`,
            "publisher": {
                "@type": "Organization",
                "name": "Sanmati Spectrum of Knowledge & Emerging Discourse",
                "url": "https://sanmatijournal.in"
            }
        },
        breadcrumb: [
            { name: 'Home',    url: '/' },
            { name: 'Archive', url: '/archive' },
            { name: 'Article', url: `/article/${paper.id}` },
        ]
    };

    return (
        <MainLayout jsonLd={scholarlyArticleJsonLd} aiSummary={paper.abstract}>
            <ReadingProgress />

            <Head>
                <title>{`${paper.title} | Sanmati Spectrum Journal`}</title>
                <meta name="description" content={paper.meta_description || (paper.abstract || '').substring(0, 160)} />
                <meta name="citation_title"            content={paper.title} />
                <meta name="citation_author"           content={paper.authors} />
                <meta name="citation_publication_date" content={pubDate} />
                <meta name="citation_journal_title"    content="Sanmati Spectrum of Knowledge & Emerging Discourse" />
                <meta name="citation_pdf_url"          content={`${baseUrl}/download/paper/${paper.id}`} />
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
            <div className="bg-gradient-to-b from-primary/5 to-transparent pt-10 pb-0">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted mb-6">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link href="/archive" className="hover:text-primary transition-colors">Archive</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary font-medium truncate max-w-[200px]">Article</span>
                    </nav>

                    {/* Back link */}
                    <Link
                        href="/archive"
                        className="inline-flex items-center gap-2 text-xs font-bold text-muted hover:text-primary transition-colors mb-6 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Archive
                    </Link>

                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                        <span className="ds-badge-primary">{paper.category || 'Research Article'}</span>
                        <span className="badge-open">Open Access</span>
                        {paper.doi && <span className="badge-doi">DOI</span>}
                        {paper.issue && (
                            <span className="ds-badge-neutral">
                                Vol. {paper.issue.volume?.volume_number ?? paper.issue.volume}, Issue {paper.issue.issue_number}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-primary leading-tight tracking-tight mb-8"
                    >
                        {paper.title}
                    </motion.h1>

                    {/* Authors, Date, Reading Time */}
                    <div className="flex flex-wrap items-center gap-5 pb-8 border-b border-slate-100 mb-8">
                        <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-xl bg-primary/8 flex items-center justify-center">
                                <Users className="w-4.5 h-4.5 text-primary" />
                            </div>
                            <div>
                                <div className="text-[10px] font-black uppercase tracking-wider text-muted">Authors</div>
                                <div className="text-sm font-bold text-primary">{paper.authors}</div>
                            </div>
                        </div>
                        <div className="h-8 w-px bg-slate-100 hidden sm:block" aria-hidden="true" />
                        <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-xl bg-primary/8 flex items-center justify-center">
                                <Calendar className="w-4.5 h-4.5 text-primary" />
                            </div>
                            <div>
                                <div className="text-[10px] font-black uppercase tracking-wider text-muted">Published</div>
                                <div className="text-sm font-bold text-dark">{pubDate}</div>
                            </div>
                        </div>
                        <div className="h-8 w-px bg-slate-100 hidden sm:block" aria-hidden="true" />
                        <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-xl bg-primary/8 flex items-center justify-center">
                                <Clock className="w-4.5 h-4.5 text-primary" />
                            </div>
                            <div>
                                <div className="text-[10px] font-black uppercase tracking-wider text-muted">Reading Time</div>
                                <div className="text-sm font-bold text-dark">{readingMinutes} min read</div>
                            </div>
                        </div>
                    </div>

                    {/* Action Bar */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 mb-10">
                        <SharePanel paper={paper} url={articleUrl} />
                        <div className="flex gap-3 w-full sm:w-auto">
                            <button
                                onClick={() => setCitationModalOpen(true)}
                                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-primary font-bold text-sm hover:border-primary hover:shadow-sm transition-all duration-200"
                            >
                                <Quote className="w-4 h-4" />
                                Cite
                            </button>
                            <a
                                href={`/download/paper/${paper.id}`}
                                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-dark transition-all duration-200 shadow-md hover:shadow-lg"
                            >
                                <Download className="w-4 h-4" />
                                Download PDF
                            </a>
                        </div>
                    </div>

                    {/* Abstract */}
                    <section aria-labelledby="abstract-heading" className="mb-10">
                        <h2 id="abstract-heading" className="flex items-center gap-2.5 text-xl font-serif font-black text-primary mb-5">
                            <AlignLeft className="w-5 h-5 text-secondary" />
                            Abstract
                        </h2>
                        <div className="relative">
                            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-secondary to-accent" aria-hidden="true" />
                            <div className="ml-5 text-base text-slate-600 leading-[1.9] bg-slate-50/60 border border-slate-100 rounded-2xl p-6">
                                {paper.abstract}
                            </div>
                        </div>
                    </section>

                    {/* Keywords */}
                    {keywords.length > 0 && (
                        <section aria-labelledby="keywords-heading" className="mb-10">
                            <h2 id="keywords-heading" className="flex items-center gap-2.5 text-lg font-serif font-bold text-primary mb-4">
                                <Tag className="w-4.5 h-4.5 text-secondary" />
                                Keywords
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {keywords.map((kw, i) => (
                                    <span key={i} className="tag-chip">
                                        {kw}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* DOI Section */}
                    {paper.doi && (
                        <section aria-labelledby="doi-heading" className="mb-10 p-5 rounded-2xl bg-orange-50 border border-orange-100">
                            <h2 id="doi-heading" className="text-xs font-black uppercase tracking-wider text-orange-600 mb-2">
                                CrossRef DOI
                            </h2>
                            <a
                                href={`https://doi.org/${paper.doi}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-mono font-bold text-orange-700 hover:text-orange-900 transition-colors"
                            >
                                <ExternalLink className="w-4 h-4" />
                                https://doi.org/{paper.doi}
                            </a>
                        </section>
                    )}

                    {/* Publication Info */}
                    {paper.issue && (
                        <section aria-labelledby="pub-info-heading" className="mb-10 p-5 rounded-2xl border border-slate-100 bg-slate-50">
                            <h2 id="pub-info-heading" className="text-xs font-black uppercase tracking-wider text-muted mb-4">
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
                                        <div className="text-[10px] font-black uppercase tracking-wider text-muted">{label}</div>
                                        <div className="text-sm font-bold text-primary mt-0.5">{value}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* CTA */}
                    <div className="flex flex-wrap gap-3 py-8 border-t border-slate-100">
                        <a
                            href={`/download/paper/${paper.id}`}
                            className="thm-btn-dark"
                        >
                            <Download className="w-4 h-4" />
                            Download Full Paper (PDF)
                        </a>
                        <Link href="/archive" className="thm-btn-outline">
                            <BookOpen className="w-4 h-4" />
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
                <div className="p-6">
                    <p className="text-sm text-muted mb-6">Copy and paste a formatted citation or use one of the links to import into your bibliography manager.</p>
                    <CitationGenerator paper={paper} />
                </div>
            </Modal>
        </MainLayout>
    );
}
