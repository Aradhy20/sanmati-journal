import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, User, ArrowRight, Tag, Search, Sparkles } from 'lucide-react';
import MainLayout from '../../Layouts/MainLayout';
import { Link } from '@inertiajs/react';

export default function BlogIndex({ posts = [] }) {
    const defaultPosts = posts.length > 0 ? posts : [
        {
            slug: 'how-to-publish-research-paper-in-india',
            title: 'How to Publish Research Paper in India: Complete Author Guide',
            category: 'Publishing Guide',
            readTime: '6 min read',
            author: 'Sanmati Editorial Directorate',
            date: 'February 2026',
            excerpt: 'Step-by-step guide covering manuscript formatting, journal selection, UGC CARE parameters, plagiarism checks, and double-blind peer review.'
        },
        {
            slug: 'ugc-care-journal-guidelines-and-ethics',
            title: 'UGC CARE Journal Guidelines & Academic Ethics Explained',
            category: 'UGC Standards',
            readTime: '8 min read',
            author: 'Dr Namrata Jain',
            date: 'January 2026',
            excerpt: 'Understanding UGC CARE list parameters, COPE ethics compliance, and citation credibility for Indian academicians.'
        },
        {
            slug: 'apa-7th-vs-ieee-citation-styles-guide',
            title: 'APA 7th Edition vs IEEE Citation Styles: Complete Reference Guide',
            category: 'Academic Writing',
            readTime: '5 min read',
            author: 'Technical Editors',
            date: 'January 2026',
            excerpt: 'Detailed reference examples for formatting in-text citations, journal articles, books, and digital DOIs accurately.'
        },
        {
            slug: 'scopus-vs-web-of-science-indexing-metrics',
            title: 'Scopus vs Web of Science vs Google Scholar: Indexing Metrics',
            category: 'Research Metrics',
            readTime: '7 min read',
            author: 'Research Directorate',
            date: 'December 2025',
            excerpt: 'Comparative analysis of Impact Factors, h-index calculation, and citation tracking databases for scholars.'
        }
    ];

    return (
        <MainLayout title="Research Blog & Author Resource Guides | Sanmati Spectrum Journal" description="Expert articles on academic writing, UGC CARE standards, citation formatting, APA 7th edition, and research methodology.">
            <div className="py-12 bg-slate-50 min-h-[85vh]">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Header */}
                    <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
                        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
                            <BookOpen className="w-4 h-4 text-blue-600" /> Academic Knowledge Base
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight">
                            Research Blog & Author Guides
                        </h1>
                        <p className="text-sm text-slate-600 font-medium leading-relaxed">
                            Practical insights, citation guidelines, and academic writing tips for global researchers.
                        </p>
                    </div>

                    {/* Blog Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {defaultPosts.map((post, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.08 }}
                                className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div className="space-y-4">
                                    {/* Featured Image Thumbnail */}
                                    {post.image && (
                                        <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-2xl border border-slate-100 aspect-[16/9] bg-slate-100 group">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                width="800"
                                                height="450"
                                                loading="lazy"
                                                decoding="async"
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </Link>
                                    )}

                                    <div className="flex items-center justify-between gap-2">
                                        <span className="px-3 py-1 bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider rounded-lg border border-blue-100">
                                            {post.category}
                                        </span>
                                        <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                                            <Clock className="w-3.5 h-3.5" /> {post.readTime}
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors leading-snug">
                                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                    </h2>

                                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                                    <span>By {post.author} • {post.date}</span>
                                    <Link href={`/blog/${post.slug}`} className="font-bold text-blue-600 hover:underline flex items-center gap-1">
                                        Read Full Guide <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}
