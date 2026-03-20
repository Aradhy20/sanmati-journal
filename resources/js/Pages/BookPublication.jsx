import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import PageHeader from '../Components/PageHeader';
import { motion } from 'framer-motion';
import Seo from '../Components/Seo';
import { BookOpen, Library, ArrowRight, Download, Star } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
};

export default function BookPublication({ bookImages }) {
    // Basic sorting to make the layout predictable or random based on preferences
    // We'll reverse it so the newest images (if sorted alphabetically) might show up creatively
    const displayBooks = bookImages ? [...bookImages].reverse() : [];

    return (
        <MainLayout>
            <Seo
                title="Book Publications"
                description="Explore the expansive library of academic books, treatises, and emerging discourse volumes published by Sanmati Journal."
            />

            <PageHeader
                title="Monographs & Books"
                breadcrumb="Publications"
                subtitle="Exclusive scholarly volumes, extensive research compilations, and foundational textbooks by leading international authors."
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 relative">
                
                {/* ─── INTRODUCTION / CALLOUT ─── */}
                <motion.div {...fadeInUp} className="relative group mb-20">
                    <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="relative bg-white border border-gray-100 rounded-[2.5rem] p-10 md:p-14 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-[0.03] rotate-12 pointer-events-none">
                            <Library className="w-64 h-64 text-dark" />
                        </div>
                        
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-8 prose prose-lg prose-slate max-w-none">
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="h-px w-10 bg-secondary" />
                                    <span className="text-secondary font-black text-[11px] uppercase tracking-[0.4em]">The Digital Library</span>
                                </div>
                                
                                <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark mb-6 leading-[1.1]">
                                    A Legacy of <span className="text-primary italic">Published Excellence</span>
                                </h2>
                                
                                <p className="text-xl text-dark/70 font-medium leading-relaxed mb-6">
                                    Beyond our quarterly journals, JTS Publications curates and publishes highly specialized monographs and books focusing on multifaceted disciplines. 
                                </p>
                                <p className="text-muted leading-relaxed">
                                    Browse our extensive repository of over {displayBooks.length} beautifully bound academic books. Each publication undergoes rigorous peer-review and editorial formatting to meet global university press standards.
                                </p>
                            </div>
                            
                            <div className="lg:col-span-4 flex justify-center lg:justify-end">
                                <div className="bg-warm-bg border border-primary/10 rounded-3xl p-8 text-center max-w-xs w-full shadow-inner">
                                    <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-primary">
                                        <Star className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-4xl font-black text-dark mb-2">{displayBooks.length}+</h4>
                                    <p className="text-[11px] font-black uppercase tracking-widest text-muted">Volumes Published</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ─── BOOK GALLERY GRID ─── */}
                <div className="mb-8">
                    <h3 className="text-2xl font-serif font-bold text-dark">Latest Releases</h3>
                    <p className="text-muted mt-2">Discover our recently published titles across all major disciplines.</p>
                </div>

                {displayBooks.length > 0 ? (
                    <motion.div 
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-2 ml:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 xl:gap-8"
                    >
                        {displayBooks.map((imgSrc, index) => (
                            <motion.div 
                                key={index} 
                                variants={fadeInUp}
                                className="group relative bg-white rounded-2xl p-3 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
                            >
                                <div className="relative aspect-[2/3] w-full rounded-xl overflow-hidden bg-surface mb-4">
                                    {/* Glass reflection effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                                    <div className="absolute top-0 right-0 w-24 h-full bg-white blur-[50px] opacity-0 group-hover:opacity-20 transform translate-x-full group-hover:-translate-x-full transition-all duration-1000 z-10" />
                                    
                                    <img 
                                        src={imgSrc} 
                                        alt={`Published Book ${index + 1}`} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                        loading="lazy"
                                    />
                                    
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-dark/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center p-4">
                                        <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl mb-3">
                                            <BookOpen className="w-5 h-5" />
                                        </button>
                                        <span className="text-white text-xs font-bold tracking-wider uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                            View Details
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="mt-auto px-2 pb-2">
                                    <h4 className="font-bold text-dark text-sm line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                                        Academic Volume {index + 1}
                                    </h4>
                                    <p className="text-muted text-[10px] uppercase font-black tracking-widest mt-2 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
                                        JTS Publications
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <div className="text-center py-32 bg-surface rounded-[2.5rem] border border-gray-100 border-dashed">
                        <Library className="w-16 h-16 text-muted/30 mx-auto mb-6" />
                        <h3 className="text-2xl font-serif font-bold text-dark mb-2">Library Updating</h3>
                        <p className="text-muted">Digital scans of the physical volumes are currently being processed into the catalog.</p>
                    </div>
                )}
                
                {/* ─── BOTTOM CTA ─── */}
                <div className="mt-24">
                    <div className="bg-dark rounded-[2.5rem] p-12 relative overflow-hidden text-center group">
                        <div className="absolute inset-0 bg-gradient-to-br from-dark to-primary/40" />
                        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 2px, transparent 0)', backgroundSize: '32px 32px' }} />
                        
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Want to Publish Your Manuscript?</h3>
                            <p className="text-white/60 text-lg mb-10">
                                JTS Publications offers comprehensive editorial, peer-review, and physical printing services for academic authors. Turn your thesis into a globally distributed book.
                            </p>
                            <a href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-dark font-black tracking-widest text-xs uppercase rounded-full hover:bg-secondary hover:text-white transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(0,196,180,0.3)] hover:-translate-y-1">
                                Contact Editorial Board <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </MainLayout>
    );
}
