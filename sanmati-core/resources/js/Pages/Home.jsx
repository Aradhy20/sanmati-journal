import React, { Suspense, useState, useRef, useEffect } from 'react';
import MainLayout from '../Layouts/MainLayout';
const Hero = React.lazy(() => import('../Components/Hero'));
const Testimonials = React.lazy(() => import('../Components/Testimonials'));
const PipelineSection = React.lazy(() => import('../Components/PipelineSection'));
const NewsletterSection = React.lazy(() => import('../Components/NewsletterSection'));
const HomeFAQ = React.lazy(() => import('../Components/HomeFAQ'));
import { motion, useInView, animate } from 'framer-motion';
import { Link } from '@inertiajs/react';
import {
    ArrowRight, BookOpen, Users, Globe, Award, FileText, Star, Trophy,
    Lightbulb, GraduationCap, Microscope, Scale, Palette, Calculator, Cpu,
    ChevronRight, ArrowUpRight, Feather,
    Heart, Share2, Bookmark, ShieldCheck, Quote, Clock, CheckCircle, BarChart2,
    Database, Search, BookMarked, ExternalLink
} from 'lucide-react';

// Sophisticated Animations for 2026 Cinematic Feel
const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
};

// Reusable Animated Counter
const AnimatedCounter = ({ from, to, duration = 2.5 }) => {
    const nodeRef = useRef();
    const inView = useInView(nodeRef, { once: true });
    
    useEffect(() => {
        if (!inView) return;
        const node = nodeRef.current;
        const controls = animate(from, to, {
            duration,
            ease: "easeOut",
            onUpdate(value) {
                if (node) {
                    node.textContent = Math.round(value).toLocaleString();
                }
            },
        });
        return () => controls.stop();
    }, [from, to, duration, inView]);
    
    return <span ref={nodeRef}>{from}</span>;
};

export default function Home({ newsItems = [], featuredPapers = [], testimonials = [], currentIssue = null }) {
    const [savedPapers, setSavedPapers] = useState({});

    const toggleSavePaper = (idx) => {
        setSavedPapers(prev => ({ ...prev, [idx]: !prev[idx] }));
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How do I submit my research paper to Sanmati Spectrum?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Authors can submit their manuscripts digitally via our call for papers submission portal. Our editorial team conducts an initial screening, followed by a double-blind peer review."
                }
            },
            {
                "@type": "Question",
                "name": "Does the journal provide a CrossRef DOI for published papers?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, every research paper accepted and published in Sanmati Spectrum of Knowledge receives a registered CrossRef DOI for global archival indexing."
                }
            },
            {
                "@type": "Question",
                "name": "What are the indexing standards of Sanmati Journal?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sanmati Spectrum is indexed with Google Scholar, CrossRef DOIs, and follows strict publishing ethics compliant with the Committee on Publication Ethics (COPE)."
                }
            }
        ]
    };

    return (
        <MainLayout
            title="Sanmati Spectrum of Knowledge | National Multidisciplinary Research Journal"
            description="Sanmati Spectrum is India's leading multidisciplinary peer-reviewed academic journal (Impact Factor 5.3). Publishing high-quality research papers, thesis, and hardcover books across science, arts, commerce, and law."
            keywords="multidisciplinary journal india, peer-reviewed research, academic book publication, sanmati spectrum of knowledge, publish book from thesis, national research journal"
            jsonLd={faqSchema}
            aiSummary="Sanmati Spectrum of Knowledge & Emerging Discourse is a national multidisciplinary peer-reviewed quarterly academic journal (ISSN 3108-1819, Impact Factor 5.3) published by Sanmati Publication. The journal accepts original, peer-reviewed research articles and book publications in English and Hindi across Science, Humanities, Law, Education, and Commerce."
        >
            <Suspense fallback={
                <div className="min-h-[95vh] flex flex-col gap-4 items-center justify-center text-primary font-bold bg-warm-bg">
                    <Globe className="w-12 h-12 animate-spin text-secondary opacity-30" />
                    <span className="animate-pulse tracking-[0.3em] text-[10px] uppercase font-black text-slate-400">Initializing Journal Framework</span>
                </div>
            }>
                <Hero />
            </Suspense>

            {/* ─── INDEXING & TRUST BANNER ─── */}
            <section className="py-8 bg-white border-b border-slate-100">
                <div className="container-custom">
                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-70">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-secondary" />
                            <span className="font-bold text-xs uppercase tracking-widest text-primary">Peer-Reviewed</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-secondary" />
                            <span className="font-bold text-xs uppercase tracking-widest text-primary">Google Scholar Indexed</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe className="w-5 h-5 text-secondary" />
                            <span className="font-bold text-xs uppercase tracking-widest text-primary">CrossRef DOI Indexed</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Award className="w-5 h-5 text-secondary" />
                            <span className="font-bold text-xs uppercase tracking-widest text-primary">COPE Ethics Compliant</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FileText className="w-5 h-5 text-secondary" />
                            <span className="font-bold text-xs uppercase tracking-widest text-primary">ISSN 3108-1819</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── JOURNAL TRUST SIGNALS (Like Springer/Elsevier) ─── */}
            <section className="py-10 bg-slate-50 border-b border-slate-100">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            { icon: FileText, label: 'ISSN (Online)', value: '3108-1819', color: 'text-blue-600', bg: 'bg-blue-50' },
                            { icon: ExternalLink, label: 'DOI Provider', value: 'CrossRef', color: 'text-green-600', bg: 'bg-green-50' },
                            { icon: Clock, label: 'Avg. Review', value: '14–21 Days', color: 'text-orange-600', bg: 'bg-orange-50' },
                            { icon: CheckCircle, label: 'Ethics Standard', value: 'COPE Compliant', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                            { icon: Award, label: 'Impact Factor', value: '5.3', color: 'text-purple-600', bg: 'bg-purple-50' },
                            { icon: BookMarked, label: 'Open Access', value: '100% Free Read', color: 'text-secondary', bg: 'bg-secondary/5' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07, duration: 0.5 }}
                                className="flex flex-col items-center text-center p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-ambient hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-3`}>
                                    <item.icon className={`w-5 h-5 ${item.color}`} />
                                </div>
                                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                                <p className={`font-bold text-sm ${item.color} leading-snug`}>{item.value}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── INDEXING BADGES (Like MDPI) ─── */}
            <section className="py-8 bg-white border-b border-slate-100">
                <div className="container-custom">
                    <div className="text-center mb-6">
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Indexed & Abstracted In</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                        {[
                            { name: 'Google Scholar', href: 'https://scholar.google.com', icon: Search },
                            { name: 'CrossRef', href: 'https://www.crossref.org', icon: Database },
                            { name: 'BASE', href: 'https://www.base-search.net', icon: Globe },
                            { name: 'ROAD', href: 'https://road.issn.org', icon: BookOpen },
                            { name: 'ISSN Portal', href: 'https://portal.issn.org', icon: FileText },
                        ].map((db, i) => (
                            <a
                                key={i}
                                href={db.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-3 bg-slate-50 hover:bg-white border border-slate-200 hover:border-secondary/30 hover:shadow-ambient rounded-xl transition-all duration-300 group"
                                aria-label={`View ${db.name} indexing`}
                            >
                                <db.icon className="w-4 h-4 text-slate-400 group-hover:text-secondary transition-colors" />
                                <span className="text-xs font-black uppercase tracking-wider text-slate-600 group-hover:text-primary transition-colors">{db.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── 1. CORE MISSION ─── */}
            <section className="py-16 lg:py-24 relative overflow-hidden bg-white">
                {/* High-end radial light touch */}
                <div className="absolute -top-24 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
                
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-center">
                        {/* Narrative Left */}
                        <motion.div {...fadeInUp} className="lg:col-span-7">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-[1.5px] w-8 bg-secondary" />
                                <span className="text-secondary font-black text-[10px] uppercase tracking-[0.3em]">Institutional Mission</span>
                            </div>
                            
                            <h2 className="text-3xl md:text-5xl xl:text-6xl font-serif font-bold text-primary leading-[1.15] mb-8 tracking-tight">
                                Advancing <span className="text-secondary italic">Scholarly Excellence</span> Through Global Rigor
                            </h2>
                            
                            <p className="text-slate-600 font-medium leading-relaxed text-lg mb-10 border-l-4 border-secondary/30 pl-6 max-w-2xl">
                                Sanmati Spectrum of Knowledge serves as a premier national platform bridging the gap between legacy knowledge and modern scientific progress. We empower educators and scholars across all disciplines with fast, transparent peer-review mechanisms.
                            </p>
                            
                            <div className="flex flex-wrap items-center gap-6">
                                <Link href="/basic-info/about-journal" className="thm-btn">
                                    <span>Learn Our Ethos</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                
                                <div className="flex items-center gap-3 px-5 py-3 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                        <ShieldCheck className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.2em]">Verified ISSN</p>
                                        <p className="text-primary font-black text-sm tracking-wider">3108-1819</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Cards Right: Modern Aesthetic Elevators */}
                        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                            <motion.div 
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="card-glass p-8 flex flex-col justify-between group hover:-translate-y-2"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-ambient flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500">
                                    <Award className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h3 className="font-serif font-bold text-xl text-primary mb-3">The Mission</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed font-medium">Empowering global discovery through rigorous double-blind academic standards.</p>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="bg-primary p-8 rounded-3xl flex flex-col justify-between shadow-ambient-lg group hover:-translate-y-2 text-white"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <Star className="w-6 h-6 text-secondary fill-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-serif font-bold text-xl text-white mb-3">The Vision</h3>
                                    <p className="text-white/80 text-sm leading-relaxed font-medium">To catalyze transformation in research methodology and multidisciplinary integrity.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── 2. CINEMATIC IMPACT METRICS (Dark Themed Elegant Slate) ─── */}
            <section className="py-16 bg-primary relative overflow-hidden">
                {/* Textured aesthetic */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                
                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
                        {[
                            { icon: FileText, label: "Papers Published", value: 550, suffix: "+", color: "text-secondary" },
                            { icon: Users, label: "Reviewers", value: 45, suffix: "+", color: "text-white" },
                            { icon: Star, label: "Global Citations", value: 2500, suffix: "+", color: "text-secondary" },
                            { icon: Globe, label: "Index Score", value: 98, suffix: "%", color: "text-white" },
                            { icon: Award, label: "Affiliations", value: 15, suffix: "+", color: "text-secondary" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="text-center flex flex-col items-center"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/10 ${stat.color}`}>
                                    <stat.icon className="w-5 h-5" />
                                </div>
                                <div className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-1">
                                    <AnimatedCounter from={0} to={stat.value} />{stat.suffix}
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── UPCOMING SEMINAR ANNOUNCEMENT ─── */}
            <section className="py-10 bg-secondary/5 border-y border-secondary/10">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white rounded-3xl px-8 py-7 shadow-ambient border border-secondary/20"
                    >
                        <div className="flex items-start gap-5">
                            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shrink-0">
                                <Globe className="w-6 h-6 text-secondary" />
                            </div>
                            <div>
                                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-[9px] font-black uppercase tracking-widest rounded-full mb-2">Upcoming · 5 June 2026</span>
                                <h3 className="text-lg font-serif font-bold text-primary leading-snug">
                                    अंतरराष्ट्रीय सेमिनार एवं रिसर्च एक्सीलेंस अवार्ड
                                </h3>
                                <p className="text-slate-500 text-xs font-medium mt-1">SERFI · Hybrid Mode · ISSN Publication with DOI · Registration Free</p>
                            </div>
                        </div>
                        <Link
                            href="/academic-events/seminar"
                            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-primary/90 transition-all shadow-lg"
                        >
                            View Details <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ─── 3. FEATURED PUBLICATIONS (High Contrast Cover Gallery) ─── */}
            <section className="py-12 lg:py-16 bg-warm-bg">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                        <motion.div {...fadeInUp} className="max-w-2xl">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="h-[1.5px] w-8 bg-secondary" />
                                <span className="text-secondary font-black text-[10px] uppercase tracking-[0.3em]">Legacy Archive</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary leading-tight tracking-tight">
                                Featured <span className="text-secondary italic">Hardcover Volumes</span>
                            </h2>
                        </motion.div>
                        <motion.div {...fadeInUp}>
                            <Link href="/book-publication" className="thm-btn-outline py-2.5 text-[10px]">
                                <span>Browse Repertoire</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {[
                            {
                                genre: 'Academic Research',
                                format: 'Volume 37 · 2026',
                                title: 'Multidisciplinary Frontiers',
                                excerpt: 'A masterwork collection documenting the latest critical intersections of applied sciences, arts, and governance.',
                                img: '/images/books/WhatsApp Image 2026-02-16 at 9.21.50 PM.jpeg',
                                badge: "Latest Vol",
                            },
                            {
                                genre: 'Education',
                                format: 'Volume 35 · 2025',
                                title: 'Traditional Meets Modern',
                                excerpt: 'Exploring traditional cultural wisdom and synthesizing it with forward-facing digital pedagogical methods.',
                                img: '/images/books/WhatsApp Image 2026-02-16 at 9.21.49 PM (1).jpeg',
                                badge: 'Critical Choice',
                            },
                            {
                                genre: 'Social Studies',
                                format: 'Volume 32 · 2025',
                                title: 'Socio-Economic Discourse',
                                excerpt: 'An essential analytical volume presenting research targeted at evolving modern societal economic constraints.',
                                img: '/images/books/WhatsApp Image 2026-02-16 at 9.21.47 PM.jpeg',
                                badge: "Archival",
                            },
                        ].map((book, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.8 }}
                                className="group flex flex-col max-w-[300px] mx-auto w-full h-full"
                            >
                                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-ambient hover:shadow-ambient-lg transition-all duration-700 mb-6 shrink-0">
                                    <img src={book.img} alt={book.title} className="w-full h-full object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-[1.5s]" loading="lazy" decoding="async" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    <span className="absolute top-5 left-5 bg-white/90 backdrop-blur-md text-primary text-[9px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-lg border border-white/50">
                                        {book.badge}
                                    </span>
                                    
                                    <div className="absolute bottom-0 inset-x-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <Link href="/book-publication" className="w-full py-3.5 bg-secondary text-primary font-bold text-xs uppercase tracking-widest rounded-xl text-center block shadow-xl shadow-secondary/20">
                                            Secure Copy
                                        </Link>
                                    </div>
                                </div>
                                
                                <div className="px-2 flex-grow flex flex-col">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-secondary font-black text-[9px] tracking-[0.2em] uppercase">{book.genre}</span>
                                        <span className="text-slate-400 text-[10px] font-bold">{book.format}</span>
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors leading-tight">
                                        {book.title}
                                    </h3>
                                    <p className="text-slate-500 text-[13px] leading-relaxed line-clamp-2 mt-auto">{book.excerpt}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── 4. TRENDING RESEARCH SECTION (Real DB Data) ─── */}
            <section className="py-16 lg:py-24 bg-white relative border-y border-slate-100">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <motion.div {...fadeInUp} className="max-w-2xl">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="h-[1.5px] w-8 bg-secondary" />
                                <span className="text-secondary font-black text-[10px] uppercase tracking-[0.3em]">Analytics & Trends</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary leading-tight tracking-tight">
                                Most <span className="text-secondary italic">Viewed Investigations</span>
                            </h2>
                        </motion.div>
                        <motion.div {...fadeInUp}>
                            <Link href="/archive" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary group">
                                Explore Whole Registry <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {(featuredPapers.length > 0 ? featuredPapers.slice(0, 3) : [
                            { id: null, rank: '01', field: 'Multidisciplinary', title: 'Sanmati Spectrum of Knowledge: Volume 37 Overview & Impact Strategies', authors: 'Dr. Namrata Jain, Dr. Ratnesh Kumar Jain', doi: 'https://doi.org/10.5281/zenodo.19710093', tag: 'Featured' },
                            { id: null, rank: '02', field: 'Commerce', title: 'Strategic Analysis of Digital Rural Pedagogies and Transformation Factors', authors: 'Dr. Ravi Sharma, Prof. Anita Gupta', tag: 'Trending' },
                            { id: null, rank: '03', field: 'Humanities', title: 'The Historical Interlink Between Tradition and Modern Epistemologies', authors: 'Dr. Priya Kumari, Prof. Alok Jain', tag: 'Recommended' },
                        ]).map((paper, i) => (
                            <motion.div
                                key={paper.id || i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.7 }}
                                className="card-glass p-8 flex flex-col hover:-translate-y-2 group cursor-pointer h-full"
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <span className="font-serif text-4xl font-black text-slate-100 group-hover:text-secondary/10 transition-colors duration-500">{String(i + 1).padStart(2, '0')}</span>
                                    <div className="flex items-center gap-2">
                                        <span className="px-2 py-1 rounded-md bg-slate-50 border border-slate-100 text-[9px] font-black text-slate-500 uppercase tracking-wider">
                                            {paper.tag || (i === 0 ? 'Featured' : i === 1 ? 'Trending' : 'Recommended')}
                                        </span>
                                        <button 
                                            onClick={(e) => { e.preventDefault(); toggleSavePaper(i); }}
                                            className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors border border-slate-100"
                                            aria-label={savedPapers[i] ? "Remove paper from saved list" : "Save paper to your reading list"}
                                        >
                                            <Heart className={`w-3.5 h-3.5 ${savedPapers[i] ? 'fill-red-500 text-red-500' : ''}`} />
                                        </button>
                                    </div>
                                </div>
                                
                                <span className="text-[9px] font-black uppercase tracking-widest text-secondary mb-3">
                                    {paper.category || paper.field || 'Research'}
                                </span>
                                <h3 className="font-serif font-bold text-lg text-primary leading-snug mb-4 group-hover:text-secondary transition-colors line-clamp-3">
                                    {paper.title}
                                </h3>
                                <p className="text-slate-500 text-xs font-medium mb-6 line-clamp-1">{paper.authors}</p>

                                <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
                                    {paper.doi ? (
                                        <a
                                            href={paper.doi.startsWith('http') ? paper.doi : `https://doi.org/${paper.doi}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 hover:text-secondary transition-colors"
                                        >
                                            <FileText className="w-3 h-3" />
                                            DOI
                                        </a>
                                    ) : (
                                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                                            <FileText className="w-3 h-3" />
                                            Open Access
                                        </div>
                                    )}
                                    {paper.id ? (
                                        <Link href={`/article/${paper.id}`} className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-1 group/arrow">
                                            Read <ArrowUpRight className="w-3 h-3 group-hover/arrow:translate-x-0.5 transition-transform" />
                                        </Link>
                                    ) : (
                                        <Link href="/archive" className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-1 group/arrow">
                                            Browse <ArrowUpRight className="w-3 h-3 group-hover/arrow:translate-x-0.5 transition-transform" />
                                        </Link>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── 5. RESEARCH CATEGORIES (Refined Academic Matrix) ─── */}
            <section className="py-16 lg:py-24 bg-slate-50">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="inline-flex items-center gap-3 mb-4 bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm">
                            <div className="w-2 h-2 rounded-full bg-secondary" />
                            <span className="text-secondary font-black text-[9px] uppercase tracking-[0.25em]">Scholarly Breadth</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6 tracking-tight">
                            Matrix of <span className="text-secondary italic">Domain Areas</span>
                        </h2>
                        <p className="text-slate-500 font-medium text-base max-w-xl mx-auto leading-relaxed">
                            Targeting the full comprehensive spectrum of national disciplinary fields.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-6">
                        {[
                            { name: "Science & Tech", icon: Microscope, color: "text-blue-600", slug: "science-technology" },
                            { name: "Social Sciences", icon: Users, color: "text-emerald-600", slug: "social-sciences" },
                            { name: "Arts & Humanities", icon: Palette, color: "text-violet-600", slug: "arts-humanities" },
                            { name: "Commerce", icon: Calculator, color: "text-orange-600", slug: "management-commerce" },
                            { name: "Law & Ethics", icon: Scale, color: "text-red-600", slug: "law-governance" },
                            { name: "Education", icon: GraduationCap, color: "text-cyan-600", slug: "education" },
                            { name: "Computer Science", icon: Cpu, color: "text-indigo-600", slug: "science-technology" },
                            { name: "Philosophy", icon: Feather, color: "text-amber-600", slug: "philosophy" },
                        ].map((cat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05, duration: 0.5 }}
                                className="h-full"
                            >
                                <Link 
                                    href={`/submission-guidelines/areas/${cat.slug}`}
                                    className="group p-6 md:p-8 bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-ambient hover:border-secondary/30 transition-all duration-500 flex flex-col items-center text-center h-full"
                                >
                                    <div className={`w-14 h-14 rounded-2xl bg-slate-50 group-hover:bg-primary flex items-center justify-center mb-5 transition-all duration-500 text-slate-400 group-hover:text-white`}>
                                        <cat.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <h3 className="font-serif font-bold text-primary text-base mb-1 group-hover:text-secondary transition-colors">{cat.name}</h3>
                                    <div className="h-px w-0 group-hover:w-8 bg-secondary transition-all duration-500 mt-3" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── 6. EDITORIAL LEADERSHIP ─── */}
            <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
                <div className="absolute -top-24 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
                
                <div className="container-custom relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <span className="text-secondary font-black text-[10px] uppercase tracking-[0.3em]">Board of Directors</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4 tracking-tight">
                            Presiding <span className="text-secondary italic">Leadership</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                        {/* Member 1 */}
                        <motion.div {...fadeInUp} className="group bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 flex flex-col sm:flex-row gap-8 items-center sm:items-start hover:bg-white hover:shadow-ambient-lg transition-all duration-700 h-full">
                            <div className="w-32 h-32 rounded-[2rem] overflow-hidden shadow-lg shrink-0 border-4 border-white">
                                <picture>
                                    <source srcSet="/mam.webp" type="image/webp" />
                                    <img src="/mam.jpeg" alt="Dr Namrata Jain" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-1000" loading="lazy" decoding="async" />
                                </picture>
                            </div>
                            <div className="flex-1 text-center sm:text-left">
                                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2 text-secondary">
                                    <Quote className="w-3 h-3 fill-secondary opacity-50" />
                                    <span className="font-black text-[9px] uppercase tracking-widest">Editor-in-Chief</span>
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-primary mb-3">Dr Namrata Jain</h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">Assistant Professor at TMU. Renowned authority in Indian knowledge traditions and pedagogical innovation.</p>
                                <Link href="/editorial-team/editorial-board" className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-primary hover:text-secondary transition-colors">
                                    Expert Profile <ChevronRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Member 2 */}
                        <motion.div {...fadeInUp} transition={{ delay: 0.15 }} className="group bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 flex flex-col sm:flex-row gap-8 items-center sm:items-start hover:bg-white hover:shadow-ambient-lg transition-all duration-700 h-full">
                            <div className="w-32 h-32 rounded-[2rem] overflow-hidden shadow-lg shrink-0 border-4 border-white">
                                <picture>
                                    <source srcSet="/sir.webp" type="image/webp" />
                                    <img src="/sir.jpeg" alt="Dr. Ratnesh Kumar Jain" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-1000" loading="lazy" decoding="async" />
                                </picture>
                            </div>
                            <div className="flex-1 text-center sm:text-left">
                                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2 text-secondary">
                                    <Quote className="w-3 h-3 fill-secondary opacity-50" />
                                    <span className="font-black text-[9px] uppercase tracking-widest">Managing Editor</span>
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-primary mb-3">Dr. Ratnesh Kumar Jain</h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">Associate Professor & NSS Coordinator at TMU. Specialized in academic management and operational integrity.</p>
                                <Link href="/editorial-team/editorial-board" className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-primary hover:text-secondary transition-colors">
                                    Expert Profile <ChevronRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── 7. CURRENT ISSUE HIGHLIGHT ─── */}
            {currentIssue && (
                <section className="py-12 bg-slate-50 border-y border-slate-100">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white rounded-3xl px-8 py-8 shadow-ambient border border-secondary/10"
                        >
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shrink-0">
                                    <BookOpen className="w-7 h-7 text-secondary" />
                                </div>
                                <div>
                                    <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-[9px] font-black uppercase tracking-widest rounded-full mb-2">Current Issue</span>
                                    <h3 className="text-xl font-serif font-bold text-primary leading-snug">
                                        Volume {currentIssue.volume}, Issue {currentIssue.number}
                                        {currentIssue.month_range && ` · ${currentIssue.month_range}`}
                                        {currentIssue.year && ` ${currentIssue.year}`}
                                    </h3>
                                    <p className="text-slate-500 text-sm font-medium mt-1">
                                        {currentIssue.papers?.length || 0} Research Papers · Open Access · DOI Registered
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-3 shrink-0">
                                <Link
                                    href="/archive"
                                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-slate-200 text-primary font-black text-[10px] uppercase tracking-widest rounded-2xl hover:border-primary transition-all"
                                >
                                    All Issues
                                </Link>
                                <Link
                                    href="/archive"
                                    className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-primary/90 transition-all shadow-lg"
                                >
                                    Read Issue <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* ─── 7b. PIPELINE ─── */}

            <Suspense fallback={<div className="h-40 bg-warm-bg" />}>
                <PipelineSection />
            </Suspense>

            {/* ─── 8. REVIEWS ─── */}
            <Suspense fallback={<div className="h-40 bg-dark" />}>
                <Testimonials testimonials={testimonials} />
            </Suspense>

            {/* ─── 8b. FAQ SECTION ─── */}
            <Suspense fallback={<div className="h-48 bg-white" />}>
                <HomeFAQ />
            </Suspense>

            {/* ─── 9. FINAL CALL TO ACTION ─── */}
            <section className="py-16 lg:py-24 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[140px]" />
                </div>
                <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-[0.25em] text-secondary mb-8 border border-white/10">
                            Call For Manuscripts
                        </span>
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1] mb-8">
                            Elevate Your Research to <br />
                            <span className="text-secondary italic">Global Visibility</span>
                        </h2>
                        <p className="text-slate-300 text-base md:text-lg font-medium max-w-xl mx-auto mb-12 leading-relaxed">
                            Join our recognized platform of over 2,500 educators and innovators. Submit your latest manuscript for fast-track editorial triage.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                            <Link href="/submission-guidelines/call-for-papers" className="thm-btn w-full sm:w-auto shadow-2xl">
                                <span>Submit Manuscript</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="/archive" className="thm-btn-outline !border-white/30 !text-white hover:!bg-white hover:!text-primary w-full sm:w-auto">
                                <span>Explore Database</span>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>


            <Suspense fallback={<div className="h-40 bg-primary" />}>
                <NewsletterSection />
            </Suspense>
        </MainLayout>
    );
};


