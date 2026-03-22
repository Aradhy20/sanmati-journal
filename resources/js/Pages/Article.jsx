import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';
import PageHeader from '../Components/PageHeader';
import { Calendar, FileText, Download, ArrowLeft, Tag, AlignLeft, Users, Quote } from 'lucide-react';
import Modal from '../Components/ui/Modal';
import CitationGenerator from '../Components/ui/CitationGenerator';

export default function Article({ paper }) {
    const [citationModalOpen, setCitationModalOpen] = useState(false);

    // Format publication date if issue exists, else use created_at
    const pubDate = paper.issue?.year 
        ? `${paper.issue.month_range ? paper.issue.month_range + ' ' : ''}${paper.issue.year}`
        : new Date(paper.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <MainLayout>
            <Head>
                <title>{`${paper.title} | Sanmati Journal`}</title>
                <meta name="description" content={paper.meta_description || paper.abstract.substring(0, 160)} />
                {/* Google Scholar standard indexing tags */}
                <meta name="citation_title" content={paper.title} />
                <meta name="citation_author" content={paper.authors} />
                <meta name="citation_publication_date" content={pubDate} />
                <meta name="citation_journal_title" content="Sanmati Journal" />
                <meta name="citation_pdf_url" content={`${window.location.origin}/download/paper/${paper.id}`} />
            </Head>

            <PageHeader 
                title="Research Article" 
                subtitle="Peer-reviewed scholarship published in the Sanmati Spectrum Research Journal"
                breadcrumbs={[
                    { name: 'Home', url: '/' },
                    { name: 'Archive', url: '/archive' },
                    { name: 'Article', url: '#' }
                ]}
            />

            <div className="py-24 bg-surface dark:bg-slate-900 transition-colors">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <Link href="/archive" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-primary transition-colors mb-10 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Archive
                    </Link>

                    {/* Meta Top Tag */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-primary/10 text-primary">
                            {paper.category || 'Research Article'}
                        </span>
                        {paper.doi && (
                            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200">
                                DOI: {paper.doi}
                            </span>
                        )}
                    </div>

                    {/* Article Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-dark dark:text-white leading-[1.2] mb-8">
                        {paper.title}
                    </h1>

                    {/* Authors & Date */}
                    <div className="flex flex-wrap items-center gap-6 pb-10 border-b border-gray-100 dark:border-slate-800 mb-12">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                <Users className="w-5 h-5 text-slate-400" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">Authors</p>
                                <p className="font-bold text-dark dark:text-slate-200">{paper.authors}</p>
                            </div>
                        </div>

                        <div className="h-10 w-px bg-gray-100 dark:bg-slate-800 hidden sm:block"></div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                <Calendar className="w-5 h-5 text-slate-400" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">Published</p>
                                <p className="font-bold text-dark dark:text-slate-200">{pubDate}</p>
                            </div>
                        </div>
                    </div>

                    {/* Action Bar */}
                    <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 dark:border-slate-700 flex flex-col sm:flex-row gap-4 justify-between items-center mb-16 relative z-10 -mt-6">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-sm font-bold text-slate-600 dark:text-slate-300">Open Access</span>
                        </div>
                        <div className="flex gap-4 w-full sm:w-auto">
                            <button 
                                onClick={() => setCitationModalOpen(true)}
                                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-700 text-dark dark:text-white font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                            >
                                <Quote className="w-4 h-4" /> Cite
                            </button>
                            <a 
                                href={`/download/paper/${paper.id}`}
                                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5"
                            >
                                <Download className="w-4 h-4" /> Read PDF
                            </a>
                        </div>
                    </div>

                    {/* Content Body */}
                    <div className="prose prose-lg dark:prose-invert prose-headings:font-serif prose-a:text-primary max-w-none mb-16">
                        <h2 className="flex items-center gap-3 text-2xl font-serif font-black text-dark dark:text-white mb-6">
                            <AlignLeft className="w-6 h-6 text-primary" /> Abstract
                        </h2>
                        <div className="text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line bg-white/50 dark:bg-slate-800/50 p-8 rounded-3xl border border-white dark:border-slate-700">
                            {paper.abstract}
                        </div>
                    </div>

                    {/* Keywords */}
                    {paper.keywords && (
                        <div className="mt-12 flex flex-wrap items-center gap-3">
                            <Tag className="w-5 h-5 text-slate-400 mr-2" />
                            {paper.keywords.split(',').map((keyword, i) => (
                                <span key={i} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700">
                                    {keyword.trim()}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Citation Modal */}
            <Modal
                isOpen={citationModalOpen}
                onClose={() => setCitationModalOpen(false)}
                title="Citation Engine"
                size="lg"
            >
                <div className="p-6">
                    <p className="text-slate-500 mb-6">Copy and paste a formatted citation or use one of the links to import into a bibliography manager.</p>
                    <CitationGenerator paper={paper} />
                </div>
            </Modal>
        </MainLayout>
    );
}
