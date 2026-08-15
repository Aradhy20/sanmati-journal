import { motion } from 'framer-motion';
import { Clock, User, ArrowLeft, Share2, Bookmark, BookOpen, CheckCircle2, FileText, SendHorizonal, Download } from 'lucide-react';
import MainLayout from '../../Layouts/MainLayout';
import { Link } from '@inertiajs/react';
import SEOBreadcrumb from '../../Components/SEOBreadcrumb';

export default function BlogShow({ post = null }) {
    const articleData = post || {
        title: "How to Publish Research Paper in India: Complete Author Guide",
        category: "Publishing Guide",
        readTime: "6 min read",
        author: "Sanmati Editorial Directorate",
        date: "February 2026",
        excerpt: "Comprehensive guide for Indian scholars on manuscript formatting, UGC CARE parameters, anti-plagiarism screening, and double-blind peer review.",
        content: `
            <h3>1. Understanding Peer Reviewed Multidisciplinary Research Journals</h3>
            <p>Publishing an academic research paper in India requires careful alignment with international academic standards and UGC CARE guidelines. Research authors must ensure their manuscript presents original empirical evidence, valid statistical analysis, and ethical citations.</p>

            <h3>2. Key Steps Before Manuscript Submission</h3>
            <ul>
                <li><strong>Formatting:</strong> Structure your manuscript according to standard MS Word template guidelines with abstract, keywords, introduction, research methodology, results, discussion, and references.</li>
                <li><strong>Plagiarism Check:</strong> Ensure your manuscript similarity index is well below 10% using standard anti-plagiarism screening.</li>
                <li><strong>CrossRef DOI Registration:</strong> Verify that the target journal assigns persistent CrossRef Digital Object Identifiers (DOIs) to all accepted papers.</li>
            </ul>

            <h3>3. The Double-Blind Peer Review Process</h3>
            <p>Once submitted to Sanmati Spectrum of Knowledge (ISSN 3108-1819), your paper undergoes initial desk evaluation followed by independent double-blind peer review by two external academic reviewers within 15–30 days.</p>
        `
    };

    const cleanExcerpt = articleData.excerpt || (articleData.content ? articleData.content.replace(/<[^>]+>/g, '').substring(0, 160).trim() : articleData.title);
    const postUrl = `https://sanmatijournal.in/blog/${articleData.slug || 'how-to-publish-research-paper-in-india'}`;
    const imageUrl = articleData.image ? (articleData.image.startsWith('http') ? articleData.image : `https://sanmatijournal.in${articleData.image}`) : 'https://sanmatijournal.in/images/seo/sanmati-journal-og.webp';

    const blogPostingSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": articleData.title,
        "description": cleanExcerpt,
        "image": imageUrl,
        "author": {
            "@type": "Organization",
            "name": articleData.author || "Sanmati Editorial Directorate",
            "url": "https://sanmatijournal.in"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Sanmati Spectrum of Knowledge & Emerging Discourse",
            "logo": {
                "@type": "ImageObject",
                "url": "https://sanmatijournal.in/logo.webp"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": postUrl
        },
        "inLanguage": "en-IN"
    };

    const breadcrumbs = [
        { name: 'Home', href: '/' },
        { name: 'Research Blog', href: '/blog' },
        { name: articleData.title, href: '#' }
    ];

    return (
        <MainLayout
            title={`${articleData.title} | Sanmati Spectrum Blog`}
            description={cleanExcerpt}
            image={articleData.image}
        >
            {/* Inject BlogPosting Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
            />

            <div className="py-10 bg-white min-h-[85vh]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                    
                    <div className="flex items-center justify-between">
                        <SEOBreadcrumb items={breadcrumbs} />
                        <Link href="/blog" className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
                            <ArrowLeft className="w-3.5 h-3.5" /> All Guides
                        </Link>
                    </div>

                    {/* Article Header */}
                    <div className="space-y-4 border-b border-slate-100 pb-6">
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider rounded-lg border border-blue-100">
                            {articleData.category}
                        </span>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
                            {articleData.title}
                        </h1>
                        <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                            <span>By {articleData.author}</span>
                            <span>•</span>
                            <span>{articleData.date}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {articleData.readTime}</span>
                        </div>
                    </div>

                    {/* Featured Image */}
                    {articleData.image && (
                        <div className="rounded-2xl overflow-hidden border border-slate-200/80 aspect-[16/9] shadow-xs bg-slate-900">
                            <img
                                src={articleData.image}
                                alt={articleData.title}
                                width="800"
                                height="450"
                                fetchPriority="high"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    {/* Article Body */}
                    <div
                        className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 text-sm font-medium"
                        dangerouslySetInnerHTML={{ __html: articleData.content }}
                    />

                    {/* Author Next Steps Callout */}
                    <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/50 border border-blue-100 space-y-4">
                        <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                            <BookOpen className="w-4 h-4 text-blue-600" />
                            Academic Publishing with Sanmati Journal
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed font-medium">
                            Sanmati Spectrum of Knowledge (ISSN 3108-1819) welcomes original empirical and review manuscripts across science, technology, arts, commerce, and law for double-blind peer review.
                        </p>
                        <div className="flex flex-wrap gap-3 pt-1">
                            <Link
                                href="/submission-guidelines/call-for-papers"
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors shadow-xs"
                            >
                                <SendHorizonal className="w-3.5 h-3.5" /> Submit Manuscript
                            </Link>
                            <Link
                                href="/submission-guidelines"
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors"
                            >
                                <FileText className="w-3.5 h-3.5 text-blue-600" /> Author Guidelines
                            </Link>
                            <Link
                                href="/downloads"
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors"
                            >
                                <Download className="w-3.5 h-3.5 text-emerald-600" /> Download Templates
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}

