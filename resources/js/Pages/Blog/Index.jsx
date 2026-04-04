import React from 'react';
import MainLayout from '../../Layouts/MainLayout';
import PageHeader from '../../Components/PageHeader';
import Seo from '../../Components/Seo';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

export default function BlogIndex() {
    // Placeholder blog posts for SEO and structure
    const posts = [
        {
            slug: 'understanding-ugc-care-list-importance',
            title: 'Why Publishing in a UGC CARE Listed Journal Matters',
            excerpt: 'An in-depth look at how UGC CARE indexing impacts your academic career, API scores, and university promotions in India.',
            author: 'Dr. Namrta Jain',
            date: 'Oct 15, 2024',
            category: 'Academic Publishing',
            image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop'
        },
        {
            slug: 'how-to-write-abstract-research-paper',
            title: 'Crafting the Perfect Abstract for Your Research Paper',
            excerpt: 'The abstract is the first thing reviewers read. Learn the 5 essential components of a winning research abstract.',
            author: 'Editorial Board',
            date: 'Sep 28, 2024',
            category: 'Writing Tips',
            image: 'https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=600&auto=format&fit=crop'
        },
        {
            slug: 'multidisciplinary-research-future',
            title: 'The Rise of Multidisciplinary Research in the 21st Century',
            excerpt: 'Breaking down the silos between science, humanities, and commerce to solve complex global challenges.',
            author: 'Dr. Ratnesh Kumar Jain',
            date: 'Sep 10, 2024',
            category: 'Trends',
            image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600&auto=format&fit=crop'
        }
    ];

    return (
        <MainLayout>
            <Seo
                title="Academic Blog & Research News"
                description="Read the latest insights, submission tips, and news from the Sanmati Spectrum academic publishing ecosystem."
            />

            <PageHeader
                title="Journal Blog"
                breadcrumb="Blog"
                subtitle="Insights on academic publishing, research methodologies, and editorial news."
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
                
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <motion.div {...fadeInUp} className="max-w-2xl">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-px w-10 bg-secondary" />
                            <span className="text-secondary font-black text-[11px] uppercase tracking-[0.3em]">Latest Articles</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark leading-tight">
                            Publishing <span className="text-primary italic">Insights</span> & News
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.article 
                            key={index}
                            {...fadeInUp}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group flex flex-col h-full"
                        >
                            <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                                <img 
                                    src={post.image} 
                                    alt={post.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur text-primary text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest shadow-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </Link>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-[11px] font-bold text-muted mb-4 uppercase tracking-widest">
                                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-secondary" /> {post.date}</span>
                                    <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-secondary" /> {post.author}</span>
                                </div>

                                <Link href={`/blog/${post.slug}`} className="block mb-4">
                                    <h3 className="text-xl font-serif font-bold text-dark group-hover:text-primary transition-colors leading-snug line-clamp-2">
                                        {post.title}
                                    </h3>
                                </Link>

                                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto pt-6 border-t border-gray-50">
                                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-primary hover:text-secondary transition-colors group/link">
                                        Read Full Article <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
}
