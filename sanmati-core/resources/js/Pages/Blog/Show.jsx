import { motion } from 'framer-motion';
import { Clock, User, ArrowLeft, Share2, Bookmark, BookOpen, CheckCircle2 } from 'lucide-react';
import MainLayout from '../../Layouts/MainLayout';
import { Link } from '@inertiajs/react';

export default function BlogShow({ post = null }) {
    const articleData = post || {
        title: "How to Publish Research Paper in India: Complete Author Guide",
        category: "Publishing Guide",
        readTime: "6 min read",
        author: "Sanmati Editorial Directorate",
        date: "February 2026",
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

    return (
        <MainLayout title={`${articleData.title} | Sanmati Spectrum Blog`} description={articleData.title}>
            <div className="py-12 bg-white min-h-[85vh]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                    
                    <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline">
                        <ArrowLeft className="w-4 h-4" /> Back to Knowledge Base
                    </Link>

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

                    {/* Article Body */}
                    <div
                        className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 text-sm font-medium"
                        dangerouslySetInnerHTML={{ __html: articleData.content }}
                    />

                </div>
            </div>
        </MainLayout>
    );
}
