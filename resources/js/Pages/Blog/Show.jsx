import React from 'react';
import MainLayout from '../../Layouts/MainLayout';
import Seo from '../../Components/Seo';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { Calendar, User, ArrowLeft, Share2, Bookmark, CheckCircle } from 'lucide-react';

export default function BlogShow({ slug }) {
    // We would normally fetch this based on slug, but here is a mock post
    const post = {
        title: 'Why Publishing in a UGC CARE Listed Journal Matters',
        author: 'Dr. Namrta Jain',
        date: 'Oct 15, 2024',
        category: 'Academic Publishing',
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1200&auto=format&fit=crop',
        content: `
            <p class="lead text-xl text-dark/70 font-medium mb-8">The UGC CARE (Consortium for Academic and Research Ethics) list has become the gold standard for academic integrity in Indian higher education. Understanding its significance is crucial for every researcher and academic professional.</p>
            
            <h3 class="text-2xl font-serif font-bold text-dark mt-10 mb-4">The API Score Paradigm</h3>
            <p class="mb-6">For university faculty in India, the Academic Performance Indicator (API) score dictates career progression. Publications in UGC CARE listed journals carry significantly more weight, ensuring that your hard work translates into tangible career growth. The rigorous screening mechanism introduced by the UGC protects authentic research from being undervalued by predatory publications.</p>
            
            <div class="bg-warm-bg border-l-4 border-secondary p-6 my-10 rounded-r-xl">
                <p class="italic text-dark font-medium m-0">"A publication is only as valuable as the integrity of the platform that hosts it. Our proposed UGC CARE listing represents our commitment to this integrity."</p>
            </div>
            
            <h3 class="text-2xl font-serif font-bold text-dark mt-10 mb-4">Global Indexing & Visibility</h3>
            <p class="mb-6">Journals aspiring for or achieving UGC CARE status typically maintain high standards of peer review. This attracts indexing by global abstracting databases like CrossRef, Google Scholar, and DOAJ. The downstream effect for an author is massive: higher citation counts, global visibility, and institutional recognition.</p>
            
            <ul class="space-y-4 my-8">
                <li class="flex items-start gap-3"><span class="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5"><div class="w-2 h-2 rounded-full bg-primary"></div></span> <span><strong>Career Advancement:</strong> Essential for CAS (Career Advancement Scheme) promotions.</span></li>
                <li class="flex items-start gap-3"><span class="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5"><div class="w-2 h-2 rounded-full bg-primary"></div></span> <span><strong>Funding Opportunities:</strong> Major grant agencies mandate publication in reputed journals.</span></li>
                <li class="flex items-start gap-3"><span class="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5"><div class="w-2 h-2 rounded-full bg-primary"></div></span> <span><strong>Academic Integrity:</strong> Ensures your work is not associated with predatory practices.</span></li>
            </ul>
            
            <p class="mb-6">At Sanmati Spectrum, our editorial board strictly adheres to COPE guidelines, placing us in strong contention for upcoming high-tier indexing recognitions.</p>
        `
    };

    return (
        <MainLayout>
            <Seo
                title={post.title}
                description={post.content.substring(0, 150).replace(/<[^>]+>/g, '')}
                image={post.image}
                type="article"
            />

            {/* Hero Section */}
            <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-surface">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[100px] -mr-48 -mt-48" />
                
                <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted hover:text-primary transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>
                    
                    <div className="flex justify-center mb-6">
                        <span className="bg-white border border-gray-100 text-primary text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-[0.2em] shadow-sm">
                            {post.category}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-5xl font-serif font-bold text-dark leading-[1.15] mb-8">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-bold text-muted uppercase tracking-widest">
                        <span className="flex items-center gap-2"><User className="w-4 h-4 text-secondary" /> {post.author}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-secondary" /> {post.date}</span>
                    </div>
                </div>
            </div>

            {/* Featured Image */}
            <div className="max-w-5xl mx-auto px-6 lg:px-8 -mt-10 lg:-mt-16 relative z-20">
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[21/9] bg-white border-4 border-white">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
            </div>

            {/* Article Content */}
            <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
                <div className="flex items-center justify-between border-b border-gray-100 pb-8 mb-12">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-lg">
                            {post.author.charAt(0)}
                        </div>
                        <div>
                            <div className="font-bold text-dark text-sm">{post.author}</div>
                            <div className="text-[10px] uppercase font-black tracking-widest text-muted">Author</div>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-colors">
                            <Share2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div 
                    className="prose prose-lg prose-slate max-w-none 
                               prose-headings:font-serif prose-headings:font-bold prose-headings:text-dark
                               prose-p:text-slate-600 prose-p:leading-relaxed
                               prose-a:text-primary hover:prose-a:text-primary-dark prose-a:font-bold prose-a:no-underline"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Newsletter Box at End of Post */}
                <div className="mt-20 p-10 bg-warm-bg rounded-3xl border border-primary/10 text-center">
                    <h4 className="text-2xl font-serif font-bold text-dark mb-4">Stay Intellectually Curious</h4>
                    <p className="text-muted mb-8 max-w-md mx-auto">Subscribe to get notified about our latest call for papers, academic workshops, and new publications.</p>
                    <form className="max-w-sm mx-auto flex gap-2">
                        <input type="email" placeholder="Your academic email" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm" />
                        <button className="px-6 py-3 bg-primary text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary-dark transition-colors">Join</button>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
}
