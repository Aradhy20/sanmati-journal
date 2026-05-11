import React, { Suspense, useState, useRef, useEffect } from 'react';
import MainLayout from '../Layouts/MainLayout';
const Hero = React.lazy(() => import('../Components/Hero'));
import { motion, useInView, animate } from 'framer-motion';
import { Link } from '@inertiajs/react';
import {
    ArrowRight, BookOpen, Users, Globe, Award, FileText, Star, Trophy,
    Lightbulb, GraduationCap, Microscope, Scale, Palette, Calculator, Cpu,
    ChevronRight, ArrowUpRight, UploadCloud, FileCheck, RefreshCw, Feather,
    Heart, Share2, Bookmark, ShieldCheck, Quote
} from 'lucide-react';
import NewsletterSection from '../Components/NewsletterSection';
import Testimonials from '../Components/Testimonials';

// Sophisticated Animations for 2026 Cinematic Feel
const fadeInUp = {
    initial: { opacity: 0, y: 30, filter: 'blur(8px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
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

export default function Home() {
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
            description="Sanmati Spectrum is India's leading multidisciplinary peer-reviewed academic journal. Publishing high-quality research papers, thesis, and hardcover books across science, arts, commerce, and law."
            keywords="multidisciplinary journal india, peer-reviewed research, academic book publication, sanmati spectrum of knowledge, ugc care listed journal, publish book from thesis, national research journal"
            jsonLd={faqSchema}
        >
            <Suspense fallback={
                <div className="min-h-[95vh] flex flex-col gap-4 items-center justify-center text-primary font-bold bg-warm-bg">
                    <Globe className="w-12 h-12 animate-spin text-secondary opacity-30" />
                    <span className="animate-pulse tracking-[0.3em] text-[10px] uppercase font-black text-slate-400">Initializing Journal Framework</span>
                </div>
            }>
                <Hero />
            </Suspense>

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

            {/* ─── 3. FEATURED PUBLICATIONS (High Contrast Cover Gallery) ─── */}
            <section className="py-16 lg:py-24 bg-warm-bg">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
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
                                className="group flex flex-col"
                            >
                                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-ambient hover:shadow-ambient-lg transition-all duration-700 mb-6">
                                    <img src={book.img} alt={book.title} className="w-full h-full object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-[1.5s]" loading="lazy" />
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
                                
                                <div className="px-2">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-secondary font-black text-[9px] tracking-[0.2em] uppercase">{book.genre}</span>
                                        <span className="text-slate-400 text-[10px] font-bold">{book.format}</span>
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors leading-tight">
                                        {book.title}
                                    </h3>
                                    <p className="text-slate-500 text-[13px] leading-relaxed line-clamp-2">{book.excerpt}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── 4. TRENDING RESEARCH SECTION (Premium Paper Cards) ─── */}
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
                        {[
                            { rank: '01', field: 'Multidisciplinary', title: 'Sanmati Spectrum of Knowledge: Volume 37 Overview & Impact Strategies', authors: 'Dr. Namrata Jain, Dr. Ratnesh Kumar Jain', doi: 'https://doi.org/10.5281/zenodo.19710093', stats: '1.8k Views', tag: 'Featured' },
                            { rank: '02', field: 'Commerce', title: 'Strategic Analysis of Digital Rural Pedagogies and Transformation Factors', authors: 'Dr. Ravi Sharma, Prof. Anita Gupta', stats: '1.2k Views', tag: 'Trending' },
                            { rank: '03', field: 'Humanities', title: 'The Historical Interlink Between Tradition and Modern Epistemologies', authors: 'Dr. Priya Kumari, Prof. Alok Jain', stats: '940 Views', tag: 'Recommended' },
                        ].map((paper, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.7 }}
                                className="card-glass p-8 flex flex-col hover:-translate-y-2 group cursor-pointer"
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <span className="font-serif text-4xl font-black text-slate-100 group-hover:text-secondary/10 transition-colors duration-500">{paper.rank}</span>
                                    <div className="flex items-center gap-2">
                                        <span className="px-2 py-1 rounded-md bg-slate-50 border border-slate-100 text-[9px] font-black text-slate-500 uppercase tracking-wider">{paper.tag}</span>
                                        <button 
                                            onClick={(e) => { e.preventDefault(); toggleSavePaper(i); }}
                                            className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors border border-slate-100"
                                            aria-label={savedPapers[i] ? "Remove paper from saved list" : "Save paper to your reading list"}
                                        >
                                            <Heart className={`w-3.5 h-3.5 ${savedPapers[i] ? 'fill-red-500 text-red-500' : ''}`} />
                                        </button>
                                    </div>
                                </div>
                                
                                <span className="text-[9px] font-black uppercase tracking-widest text-secondary mb-3">{paper.field}</span>
                                <h3 className="font-serif font-bold text-lg text-primary leading-snug mb-4 group-hover:text-secondary transition-colors line-clamp-3">{paper.title}</h3>
                                <p className="text-slate-500 text-xs font-medium mb-6 line-clamp-1">{paper.authors}</p>

                                <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
                                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                                        <FileText className="w-3 h-3" />
                                        {paper.stats}
                                    </div>
                                    <Link href="/archive" className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-1 group/arrow">
                                        Read <ArrowUpRight className="w-3 h-3 group-hover/arrow:translate-x-0.5 transition-transform" />
                                    </Link>
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
                        <motion.div {...fadeInUp} className="group bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 flex flex-col sm:flex-row gap-8 items-center sm:items-start hover:bg-white hover:shadow-ambient-lg transition-all duration-700">
                            <div className="w-32 h-32 rounded-[2rem] overflow-hidden shadow-lg shrink-0 border-4 border-white">
                                <img src="/mam.jpeg" alt="Dr Namrata Jain" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-1000" />
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
                        <motion.div {...fadeInUp} transition={{ delay: 0.15 }} className="group bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 flex flex-col sm:flex-row gap-8 items-center sm:items-start hover:bg-white hover:shadow-ambient-lg transition-all duration-700">
                            <div className="w-32 h-32 rounded-[2rem] overflow-hidden shadow-lg shrink-0 border-4 border-white">
                                <img src="/sir.jpeg" alt="Dr. Ratnesh Kumar Jain" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-1000" />
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

            {/* ─── 7. PIPELINE ─── */}
            <PipelineSection />

            {/* ─── 8. REVIEWS ─── */}
            <Testimonials />

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


            <NewsletterSection />
        </MainLayout>
    );
};

// ─── PIPELINE COMPONENT: UPDATED WITH CINEMATIC DARK NAVY THEME ──────────
const pipelineSteps = [
    {
        step: "01",
        title: "Manuscript Intake",
        icon: UploadCloud,
        shortDesc: "Secure submission with ethical triage.",
        fullDesc: "Authors submit natively. Each work undergoes scope scanning, metadata check, and full plagiarism triage with our automated validation engine.",
    },
    {
        step: "02",
        title: "Double-Blind Review",
        icon: FileCheck,
        shortDesc: "Anonymous multi-stage assessment.",
        fullDesc: "Assigned blindly to two independent faculty peers. Evaluation is performed strictly on empirical grounds, methodology precision, and empirical weight.",
    },
    {
        step: "03",
        title: "Refine & Optimize",
        icon: RefreshCw,
        shortDesc: "Iterative peer-feedback refinement.",
        fullDesc: "Direct collaborative loop where authors incorporate reviewer enhancements, guided transparently by our internal managing editor.",
    },
    {
        step: "04",
        title: "DOI Registration",
        icon: Globe,
        shortDesc: "Global archival & indexing launch.",
        fullDesc: "The final paper is typeset, minted with a permanent Crossref DOI, indexed in Global Repositories, and launched in high-fidelity open access format.",
    },
];

function PipelineSection() {
    const [activeStep, setActiveStep] = useState(null);

    return (
        <section className="py-16 lg:py-24 bg-warm-bg border-y border-slate-200/50">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-secondary font-black text-[10px] uppercase tracking-[0.3em] block mb-4">The Mechanism</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4 tracking-tight">
                        Journal <span className="text-secondary italic">Publishing Engine</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {pipelineSteps.map((item, i) => {
                        const isActive = activeStep === i;
                        return (
                            <button
                                key={i}
                                onClick={() => setActiveStep(isActive ? null : i)}
                                className={`group p-8 text-left rounded-[2rem] transition-all duration-500 relative overflow-hidden border ${isActive
                                        ? 'bg-primary border-primary shadow-ambient-lg -translate-y-2 text-white'
                                        : 'bg-white border-slate-200/60 hover:border-secondary/40 shadow-sm hover:-translate-y-1'
                                    }`}
                            >
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${isActive ? 'bg-white/10 border border-white/20' : 'bg-slate-50 group-hover:bg-secondary/10'}`}>
                                    <item.icon className={`w-5 h-5 ${isActive ? 'text-secondary' : 'text-slate-400 group-hover:text-secondary'} transition-colors`} />
                                </div>
                                <span className={`font-serif font-bold text-4xl block mb-4 ${isActive ? 'text-white/30' : 'text-slate-500 group-hover:text-slate-400'} transition-colors`}>{item.step}</span>
                                <h3 className={`font-serif font-bold text-lg leading-tight mb-2 ${isActive ? 'text-white' : 'text-primary'}`}>{item.title}</h3>
                                <p className={`text-[12px] leading-relaxed font-medium ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>{item.shortDesc}</p>
                            </button>
                        );
                    })}
                </div>

                <motion.div
                    initial={false}
                    animate={{ opacity: activeStep !== null ? 1 : 0, height: activeStep !== null ? 'auto' : 0 }}
                    className="overflow-hidden"
                >
                    {activeStep !== null && (
                        <div className="p-8 bg-white rounded-3xl shadow-ambient border border-slate-200/60 flex flex-col md:flex-row gap-6 items-center">
                            <div className="w-16 h-16 rounded-2xl bg-primary/5 text-secondary flex items-center justify-center shrink-0">
                                {React.createElement(pipelineSteps[activeStep].icon, { className: 'w-7 h-7' })}
                            </div>
                            <div>
                                <h4 className="font-serif font-bold text-primary text-xl mb-2">{pipelineSteps[activeStep].title} Expanded</h4>
                                <p className="text-slate-600 font-medium leading-relaxed text-base">{pipelineSteps[activeStep].fullDesc}</p>
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
