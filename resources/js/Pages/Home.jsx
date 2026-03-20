import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

import MainLayout from '@/Layouts/MainLayout';
import Seo from '@/Components/Seo';

// Extracted Partials
import LatestBooks from './Home/Partials/LatestBooks';
import EditorialLeadership from './Home/Partials/EditorialLeadership';
import AboutSection from './Home/Partials/AboutSection';
import {
    FeaturesBar,
    FeaturedAuthors,
    AcademicDomains,
    AcademicImpact,
    WhyChooseOurBooks,
    PublicationProcess,
    NewsletterCTA,
    Testimonials,
    InvitationCTA
} from './Home/Partials/HomeSections';

export default function Home({ testimonials }) {
    return (
        <MainLayout>
            <Seo
                title="Sanmati Spectrum | Global Publisher of Books & Research"
                description="Sanmati Spectrum is a premier multidisciplinary platform..."
                keywords="Sanmati Spectrum, Book Publications, Multidisciplinary Research, Academic Journals, Peer-Reviewed Papers"
            />
            {/* HERO SECTION */}
            <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-dark">
                {/* Backgrounds */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/fistudy-assets/resources/hero-books.jpg" 
                        alt="Academic Excellence" 
                        className="w-full h-full object-cover opacity-30 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/70 to-dark" />
                </div>
                {/* Rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[0.5px] border-white/5 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border-[0.5px] border-white/5 rounded-full" />

                <div className="container-custom relative z-10 text-center px-4">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="max-w-4xl mx-auto mt-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-[0_0_30px_rgba(79,119,255,0.2)]">
                            <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
                            <span className="text-white/80 text-[10px] uppercase font-black tracking-[0.3em]">Igniting Global Minds</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-bold text-white leading-[1.05] tracking-tight mb-8 drop-shadow-2xl">
                            Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40 italic">Research</span> <br />
                            & <span className="text-secondary drop-shadow-[0_0_20px_rgba(255,107,107,0.3)]">Pioneering</span> Thoughts
                        </h1>
                        <p className="text-lg md:text-xl text-white/60 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                            A multidisciplinary haven where profound scholarly inquiries meet global readership. We publish premium books, journals, and empirical insights to shape the future of academia.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/book-publication" className="w-full sm:w-auto px-10 py-5 bg-primary text-white rounded-2xl font-bold uppercase tracking-widest text-[11px] hover:bg-white hover:text-dark transition-all duration-300 shadow-[0_20px_40px_rgba(79,119,255,0.3)] hover:-translate-y-1 group flex justify-center items-center gap-3">
                                Explore Books <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                            <Link href="/basic-info/about-journal" className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/20 text-white rounded-2xl font-bold uppercase tracking-widest text-[11px] hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex justify-center items-center gap-3">
                                Discover Our Vision
                            </Link>
                        </div>
                    </motion.div>
                    
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3">
                        <span className="text-white/40 text-[9px] uppercase tracking-[0.4em] font-black">Scroll Down</span>
                        <div className="w-10 h-16 rounded-full border border-white/20 flex items-start justify-center p-2 bg-white/5 backdrop-blur-sm">
                            <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
                                <ArrowDown className="w-4 h-4 text-white/50" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <FeaturesBar />
            <AboutSection />
            <LatestBooks />
            <EditorialLeadership />
            <FeaturedAuthors />
            <AcademicDomains />
            <AcademicImpact />
            <WhyChooseOurBooks />
            <PublicationProcess />
            <Testimonials testimonials={testimonials || []} />
            <NewsletterCTA />
            <InvitationCTA />
        </MainLayout>
    );
}
