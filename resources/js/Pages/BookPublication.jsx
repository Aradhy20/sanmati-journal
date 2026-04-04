import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import PageHeader from '../Components/PageHeader';
import { motion } from 'framer-motion';
import Seo from '../Components/Seo';
import { BookOpen, Library, ArrowRight, Star, ShoppingCart } from 'lucide-react';
import { Link } from '@inertiajs/react';

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

export default function BookPublication({ books }) {
    const dbBooks = books || [];
    
    // Antigravity Placeholder Books - Wait for Admin to populate or replace hardcoded
    const hardcodedBooks = [
    {
        "id": 1,
        "title": "Published Volume 1",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.23 PM.jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 2,
        "title": "Published Volume 2",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.24 PM (1).jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 3,
        "title": "Published Volume 3",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.24 PM.jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 4,
        "title": "Published Volume 4",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.25 PM.jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 5,
        "title": "Published Volume 5",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.26 PM.jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 6,
        "title": "Published Volume 6",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.27 PM (1).jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 7,
        "title": "Published Volume 7",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.27 PM.jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 8,
        "title": "Published Volume 8",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.29 PM (1).jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 9,
        "title": "Published Volume 9",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.29 PM.jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 10,
        "title": "Published Volume 10",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.30 PM.jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 11,
        "title": "Published Volume 11",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.33 PM.jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 12,
        "title": "Published Volume 12",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.34 PM.jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 13,
        "title": "Published Volume 13",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.35 PM.jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 14,
        "title": "Published Volume 14",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.36 PM.jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 15,
        "title": "Published Volume 15",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.37 PM.jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 16,
        "title": "Published Volume 16",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.38 PM (1).jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 17,
        "title": "Published Volume 17",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.38 PM.jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 18,
        "title": "Published Volume 18",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.39 PM (1).jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 19,
        "title": "Published Volume 19",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.39 PM.jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 20,
        "title": "Published Volume 20",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.40 PM.jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 21,
        "title": "Published Volume 21",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.41 PM (1).jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 22,
        "title": "Published Volume 22",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.41 PM.jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 23,
        "title": "Published Volume 23",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.42 PM (1).jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 24,
        "title": "Published Volume 24",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.42 PM.jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 25,
        "title": "Published Volume 25",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.43 PM.jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 26,
        "title": "Published Volume 26",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.44 PM.jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 27,
        "title": "Published Volume 27",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.45 PM (1).jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 28,
        "title": "Published Volume 28",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.45 PM (2).jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 29,
        "title": "Published Volume 29",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.45 PM.jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 30,
        "title": "Published Volume 30",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.46 PM.jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 31,
        "title": "Published Volume 31",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.20.47 PM.jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 32,
        "title": "Published Volume 32",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.21.47 PM.jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 33,
        "title": "Published Volume 33",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.21.48 PM (1).jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 34,
        "title": "Published Volume 34",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.21.48 PM.jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 35,
        "title": "Published Volume 35",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.21.49 PM (1).jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 36,
        "title": "Published Volume 36",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.21.49 PM.jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    },
    {
        "id": 37,
        "title": "Published Volume 37",
        "author": "Sanmati Journal Collections",
        "image_url": "/images/books/WhatsApp Image 2026-02-16 at 9.21.50 PM.jpeg",
        "amazon_link": "",
        "flipkart_link": ""
    }
];

    const displayBooks = dbBooks.length > 0 ? dbBooks : hardcodedBooks;

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

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24 relative">
                
                {/* ─── INTRODUCTION / CALLOUT ─── */}
                <motion.div {...fadeInUp} className="relative group mb-10 lg:mb-20">
                    <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="relative bg-white border border-gray-100 rounded-[2.5rem] p-10 md:p-14 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 lg:p-12 opacity-[0.03] rotate-12 pointer-events-none">
                            <Library className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 text-dark" />
                        </div>
                        
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
                            <div className="lg:col-span-8 prose prose-lg prose-slate max-w-none">
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="h-px w-10 bg-secondary" />
                                    <span className="text-secondary font-black text-[11px] uppercase tracking-[0.4em]">The Digital Library</span>
                                </div>
                                
                                <h2 className="text-xl md:text-2xl lg:text-3xl md:text-5xl font-serif font-bold text-dark mb-6 leading-[1.1]">
                                    A Legacy of <span className="text-primary italic">Published Excellence</span>
                                </h2>
                                
                                <p className="text-xl text-dark/70 font-medium leading-relaxed mb-6">
                                    Beyond our quarterly journals, JTS Publications curates and publishes highly specialized monographs and books focusing on multifaceted disciplines. 
                                </p>
                                <p className="text-muted leading-relaxed">
                                    Browse our extensive repository of beautifully bound academic books. Each publication undergoes rigorous peer-review and editorial formatting to meet global university press standards.
                                </p>
                            </div>
                            
                            <div className="lg:col-span-4 flex justify-center lg:justify-end">
                                <div className="bg-warm-bg border border-primary/10 rounded-3xl p-8 text-center max-w-xs w-full shadow-inner">
                                    <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-primary">
                                        <Star className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-2xl md:text-3xl lg:text-4xl font-black text-dark mb-2">{displayBooks.length}+</h4>
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
                        {displayBooks.map((book, index) => (
                            <motion.div 
                                key={book.id || index} 
                                variants={fadeInUp}
                                className="group relative bg-white rounded-2xl p-3 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
                            >
                                <div className="relative aspect-[2/3] w-full rounded-xl overflow-hidden bg-surface mb-4">
                                    {/* Glass reflection effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                                    <div className="absolute top-0 right-0 w-24 h-full bg-white blur-[50px] opacity-0 group-hover:opacity-20 transform translate-x-full group-hover:-translate-x-full transition-all duration-1000 z-10" />
                                    
                                    <img 
                                        src={book.image_url} 
                                        alt={book.title} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                        loading="lazy"
                                    />
                                    
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-dark/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center p-4 gap-3">
                                        {book.amazon_link && (
                                            <a href={book.amazon_link} target="_blank" rel="noreferrer" className="w-full py-2.5 bg-[#FF9900] hover:bg-[#FF9900]/90 text-white rounded-xl flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-md">
                                                <ShoppingCart className="w-4 h-4" /> <span className="text-xs font-black tracking-wide">AMAZON</span>
                                            </a>
                                        )}
                                        {book.flipkart_link && (
                                            <a href={book.flipkart_link} target="_blank" rel="noreferrer" className="w-full py-2.5 bg-[#2874F0] hover:bg-[#2874F0]/90 text-white rounded-xl flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75 shadow-md">
                                                <ShoppingCart className="w-4 h-4" /> <span className="text-xs font-black tracking-wide">FLIPKART</span>
                                            </a>
                                        )}
                                        {(!book.amazon_link && !book.flipkart_link) && (
                                            <>
                                                <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl mb-3">
                                                    <BookOpen className="w-5 h-5" />
                                                </button>
                                                <span className="text-white text-xs font-bold tracking-wider uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                                    View Details
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>
                                
                                <div className="mt-auto px-2 pb-2">
                                    <h4 className="font-bold text-dark text-sm line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                                        {book.title}
                                    </h4>
                                    <p className="text-muted text-[10px] uppercase font-black tracking-widest mt-2 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
                                        {book.author || 'JTS Publications'}
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
                <div className="mt-12 lg:mt-24">
                    <div className="bg-dark rounded-[2.5rem] p-6 lg:p-12 relative overflow-hidden text-center group">
                        <div className="absolute inset-0 bg-gradient-to-br from-dark to-primary/40" />
                        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 2px, transparent 0)', backgroundSize: '32px 32px' }} />
                        
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h3 className="text-xl md:text-2xl lg:text-3xl md:text-4xl font-serif font-bold text-white mb-6">Want to Publish Your Manuscript?</h3>
                            <p className="text-white/60 text-lg mb-10">
                                JTS Publications offers comprehensive editorial, peer-review, and physical printing services for academic authors. Turn your thesis into a globally distributed book.
                            </p>
                            <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-dark font-black tracking-widest text-xs uppercase rounded-full hover:bg-secondary hover:text-white transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(0,196,180,0.3)] hover:-translate-y-1">
                                Contact Editorial Board <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </MainLayout>
    );
}
