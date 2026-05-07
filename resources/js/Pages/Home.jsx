import React, { Suspense, useState, useRef, useEffect } from 'react';
import MainLayout from '../Layouts/MainLayout';
const Hero = React.lazy(() => import('../Components/Hero'));
import { motion, useInView, animate } from 'framer-motion';
import { Link } from '@inertiajs/react';
import {
    ArrowRight, BookOpen, Users, Globe, Award, FileText, Star, Trophy,
    Lightbulb, GraduationCap, Microscope, Scale, Palette, Calculator, Cpu,
    ChevronRight, ArrowUpRight, UploadCloud, FileCheck, RefreshCw, Feather
} from 'lucide-react';
import NewsletterSection from '../Components/NewsletterSection';

// Animations
const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

// Reusable Animated Counter
const AnimatedCounter = ({ from, to, duration = 2 }) => {
    const nodeRef = useRef();
    const inView = useInView(nodeRef, { once: true });
    
    useEffect(() => {
        if (!inView) return;
        const node = nodeRef.current;
        const controls = animate(from, to, {
            duration,
            onUpdate(value) {
                if (node) {
                    node.textContent = Math.round(value);
                }
            },
        });
        return () => controls.stop();
    }, [from, to, duration, inView]);
    
    return <span ref={nodeRef}>{from}</span>;
};

export default function Home() {
    return (
        <MainLayout
            title="Sanmati Spectrum of Knowledge | National Multidisciplinary Research Journal"
            description="Sanmati Spectrum is India's leading multidisciplinary peer-reviewed academic journal. Publishing high-quality research papers, thesis, and hardcover books across science, arts, commerce, and law."
            keywords="multidisciplinary journal india, peer-reviewed research, academic book publication, sanmati spectrum of knowledge, ugc care listed journal, publish book from thesis, national research journal"
        >
            <Suspense fallback={
                <div className="min-h-[95vh] flex flex-col gap-4 items-center justify-center text-primary font-bold bg-[#050B14]">
                    <Globe className="w-12 h-12 animate-spin text-accent opacity-20" />
                    <span className="animate-pulse tracking-widest text-sm uppercase text-white/60">Loading Core Engine...</span>
                </div>
            }>
                <Hero />
            </Suspense>

            {/* ─── 1. CORE MISSION (Editorial Spaced Layout) ─── */}
            <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                        {/* Narrative Left */}
                        <motion.div {...fadeInUp} className="lg:col-span-7">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-px w-8 bg-primary/40" />
                                <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em]">Institutional Mission</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-dark leading-tight mb-8">
                                Building a <span className="text-primary italic">Global Research Community</span> of Academic Rigor
                            </h2>
                            <p className="text-slate-600 font-medium leading-relaxed text-base md:text-lg mb-8 border-l-2 border-primary/20 pl-6">
                                Sanmati Spectrum serves as a premier national platform bridging the gap between historical scholarship and modern scientific progress. We empower scholars across all major disciplines with professional peer review and high-impact publishing.
                            </p>
                            <div className="flex items-center gap-6">
                                <Link href="/basic-info/about-journal"
                                    className="group px-7 py-3.5 bg-primary text-white rounded-xl font-bold text-xs hover:bg-primary-dark transition-all flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 uppercase tracking-widest">
                                    Our Ethos <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <div>
                                    <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.2em]">Verified ISSN</p>
                                    <p className="text-dark font-black text-sm">3108-1819</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Cards Right (Clean Bento Layout) */}
                        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="p-8 rounded-2xl bg-slate-50 border border-slate-100/80 flex flex-col justify-between hover:border-primary/20 hover:shadow-md transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary font-black text-sm mb-6">M</div>
                                <div>
                                    <h3 className="font-bold text-dark mb-2 text-base tracking-tight">The Mission</h3>
                                    <p className="text-slate-500 text-[12px] leading-relaxed font-medium">Empowering scholars via high-impact peer review and global open-access discoverability.</p>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="p-8 rounded-2xl bg-slate-50 border border-slate-100/80 flex flex-col justify-between hover:border-primary/20 hover:shadow-md transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary font-black text-sm mb-6">V</div>
                                <div>
                                    <h3 className="font-bold text-dark mb-2 text-base tracking-tight">The Vision</h3>
                                    <p className="text-slate-500 text-[12px] leading-relaxed font-medium">To stand as the absolute gold standard in multidisciplinary publishing and research integrity.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── 2. FEATURED PUBLICATIONS (Magazine/Editorial Style) ─── */}
            <section className="py-20 lg:py-32 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                        <motion.div {...fadeInUp} className="max-w-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="h-px w-8 bg-primary/40" />
                                <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em]">Curated Volumes</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-black text-dark leading-tight">
                                Featured <span className="text-primary italic">Scholarly Book Releases</span>
                            </h2>
                        </motion.div>
                        <motion.div {...fadeInUp}>
                            <Link href="/book-publication" className="group text-xs font-black uppercase tracking-[0.2em] text-slate-600 hover:text-primary transition-colors flex items-center gap-2">
                                All Releases <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {[
                            {
                                genre: 'Academic Research',
                                format: 'Hardcover · 520 Pages',
                                title: 'Published Volume 37',
                                excerpt: 'A comprehensive collection of multidisciplinary research papers exploring emerging trends in science, arts, and commerce.',
                                img: '/images/books/WhatsApp Image 2026-02-16 at 9.21.50 PM.jpeg',
                                badge: "Latest Release",
                            },
                            {
                                genre: 'Multidisciplinary',
                                format: 'Hardcover · 480 Pages',
                                title: 'Published Volume 35',
                                excerpt: 'Exploring the intersections of traditional knowledge and modern scientific discourse through peer-reviewed excellence.',
                                img: '/images/books/WhatsApp Image 2026-02-16 at 9.21.49 PM (1).jpeg',
                                badge: 'Bestseller',
                            },
                            {
                                genre: 'Social Sciences',
                                format: 'Hardcover · 450 Pages',
                                title: 'Published Volume 32',
                                excerpt: 'Documenting critical insights and scholarly perspectives on global socio-economic challenges and modern society.',
                                img: '/images/books/WhatsApp Image 2026-02-16 at 9.21.47 PM.jpeg',
                                badge: "Editor's Choice",
                            },
                        ].map((book, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-primary/15 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
                            >
                                <div className="aspect-[4/5] overflow-hidden relative bg-slate-50">
                                    <img src={book.img} alt={book.title} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700" loading="lazy" />
                                    {book.badge && (
                                        <span className="absolute top-4 left-4 bg-primary text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                                            {book.badge}
                                        </span>
                                    )}
                                </div>
                                <div className="p-8 flex flex-col flex-grow justify-between">
                                    <div>
                                        <p className="text-primary font-black text-[10px] tracking-[0.2em] uppercase mb-1">{book.genre}</p>
                                        <p className="text-slate-400 text-[11px] font-bold mb-4">{book.format}</p>
                                        <h3 className="text-lg font-serif font-bold text-dark mb-3 group-hover:text-primary transition-colors leading-tight">
                                            {book.title}
                                        </h3>
                                        <p className="text-slate-500 text-[13px] leading-relaxed mb-6 font-medium line-clamp-3">{book.excerpt}</p>
                                    </div>
                                    <Link href="/book-publication" className="mt-auto inline-flex items-center justify-center gap-2 w-full py-3 bg-slate-50 text-slate-700 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all group/btn">
                                        Order Copy <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── 3. ACADEMIC SCOPE & DOMAINS (Clean Icon Grid) ─── */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <span className="h-px w-8 bg-primary/40" />
                            <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em]">Academic Scope</span>
                            <span className="h-px w-8 bg-primary/40" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-black text-dark mb-4">
                            Explore <span className="text-primary italic">Fields of Study</span>
                        </h2>
                        <p className="text-slate-500 font-medium text-sm leading-relaxed">
                            Publishing papers and volumes across the full spectrum of modern academic and scientific research.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Science & Technology", icon: Microscope, color: "bg-blue-50/50 text-blue-600", slug: "science-technology" },
                            { name: "Social Sciences", icon: Users, color: "bg-emerald-50/50 text-emerald-600", slug: "social-sciences" },
                            { name: "Arts & Humanities", icon: Palette, color: "bg-purple-50/50 text-purple-600", slug: "arts-humanities" },
                            { name: "Commerce & Management", icon: Calculator, color: "bg-orange-50/50 text-orange-600", slug: "management-commerce" },
                            { name: "Law & Governance", icon: Scale, color: "bg-red-50/50 text-red-600", slug: "law-governance" },
                            { name: "Education", icon: GraduationCap, color: "bg-cyan-50/50 text-cyan-600", slug: "education" },
                            { name: "Computer Science", icon: Cpu, color: "bg-indigo-50/50 text-indigo-600", slug: "science-technology" },
                            { name: "Innovation Research", icon: Lightbulb, color: "bg-yellow-50/50 text-yellow-600", slug: "science-technology" },
                        ].map((cat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05, duration: 0.6 }}
                            >
                                <Link 
                                    href={`/submission-guidelines/areas/${cat.slug}`}
                                    className="group p-6 rounded-2xl bg-white border border-slate-100 hover:border-primary/15 hover:shadow-sm transition-all duration-300 flex flex-col items-center text-center h-full block"
                                >
                                    <div className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-primary group-hover:text-white transition-all duration-300`}>
                                        <cat.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-dark text-sm mb-1 group-hover:text-primary transition-colors tracking-tight leading-tight">{cat.name}</h3>
                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-auto pt-2 block">Explore Area</span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── 4. EDITORIAL SPOTLIGHT (Minimal, Clean Preview) ─── */}
            <section className="py-20 lg:py-32 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <span className="h-px w-8 bg-primary/40" />
                            <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em]">Editorial Board</span>
                            <span className="h-px w-8 bg-primary/40" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-black text-dark mb-4">
                            Distinguished <span className="text-primary italic">Leadership</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Editor-in-Chief */}
                        <motion.div {...fadeInUp} className="group bg-white rounded-2xl p-8 border border-slate-100 hover:border-primary/15 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left shadow-sm">
                            <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 bg-slate-100">
                                <img src="/mam.jpeg" alt="Dr Namrata Jain" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div>
                                <span className="text-primary font-black text-[9px] uppercase tracking-widest block mb-1">Editor-in-Chief</span>
                                <h3 className="text-xl font-serif font-bold text-dark mb-2 group-hover:text-primary transition-colors">Dr Namrata Jain</h3>
                                <p className="text-slate-500 text-[12px] leading-relaxed mb-4 font-medium">Assistant Professor at TMU. Over 17 years of experience in Hindi literature, Indian knowledge traditions, and educational research.</p>
                                <Link href="/editorial-team/editorial-board" className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-primary hover:text-primary-dark transition-colors">
                                    View Full Board <ChevronRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Managing Editor */}
                        <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="group bg-white rounded-2xl p-8 border border-slate-100 hover:border-primary/15 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left shadow-sm">
                            <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 bg-slate-100">
                                <img src="/sir.jpeg" alt="Dr. Ratnesh Kumar Jain" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div>
                                <span className="text-primary font-black text-[9px] uppercase tracking-widest block mb-1">Managing Editor</span>
                                <h3 className="text-xl font-serif font-bold text-dark mb-2 group-hover:text-primary transition-colors">Dr. Ratnesh Kumar Jain</h3>
                                <p className="text-slate-500 text-[12px] leading-relaxed mb-4 font-medium">Associate Professor & NSS Coordinator at TMU. Expert in student welfare, educational management, and philosophy.</p>
                                <Link href="/editorial-team/editorial-board" className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-primary hover:text-primary-dark transition-colors">
                                    View Full Board <ChevronRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── 5. SUBMISSION PIPELINE (Highly Polished Timeline) ─── */}
            <PipelineSection />

            {/* ─── 6. INDEXING PARTNERS (Clean Social Proof Strip) ─── */}
            <section className="py-12 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                    <p className="text-slate-400 font-black text-[9px] uppercase tracking-[0.25em] mb-6">Our Abstracting & Indexing Partners</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                        {['Google Scholar', 'CrossRef', 'UGC CARE (Proposed)', 'DOAJ Directory', 'ResearchGate'].map((partner, idx) => (
                            <span key={idx} className="font-serif font-bold text-sm md:text-base text-slate-400 hover:text-primary transition-colors duration-300 cursor-default">
                                {partner}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── 7. TRENDING PAPERS (Clean Magazine Style Listing) ─── */}
            <section className="py-20 lg:py-32 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                        <motion.div {...fadeInUp} className="max-w-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="h-px w-8 bg-primary/40" />
                                <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em]">Trending Papers</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-black text-dark leading-tight">
                                Most <span className="text-primary italic">Accessed Research</span>
                            </h2>
                        </motion.div>
                        <motion.div {...fadeInUp}>
                            <Link href="/archive" className="group text-xs font-black uppercase tracking-[0.2em] text-slate-600 hover:text-primary transition-colors flex items-center gap-2">
                                Browse Archive <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {[
                            { rank: '01', field: 'Multidisciplinary', title: 'Sanmati Spectrum of Knowledge & Emerging Discourse (January-March, 2026)', authors: 'Dr Namrata Jain, Dr. Ratnesh Kumar Jain', doi: 'https://doi.org/10.5281/zenodo.19710093', reads: 'Featured Volume', tag: 'Hot' },
                            { rank: '02', field: 'Commerce & Economics', title: 'Impact of Digital Literacy on Rural Education Outcomes', authors: 'Dr. Ravi Sharma, Prof. Anita Gupta', reads: '1.2k reads', tag: 'Trending' },
                            { rank: '03', field: 'Social Science', title: 'Multidisciplinary Perspectives on Modern Academic Discourse', authors: 'Dr. Priya Kumari, Dr. Ratnesh Jain', reads: '987 reads', tag: 'Featured' },
                        ].map((paper, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 15 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-primary/15 transition-all duration-300 flex flex-col justify-between shadow-sm"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-serif font-black text-primary">{paper.rank}</span>
                                        <span className="bg-primary/5 text-primary text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest">{paper.tag}</span>
                                    </div>
                                    <p className="text-primary font-black text-[9px] uppercase tracking-widest mb-2">{paper.field}</p>
                                    <h3 className="font-serif font-bold text-dark text-base leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-3">{paper.title}</h3>
                                    <p className="text-slate-400 text-[12px] font-medium mb-4">{paper.authors}</p>
                                    {paper.doi && (
                                        <div className="text-[10px] text-slate-400 font-bold tracking-wider mb-6">
                                            DOI: <a href={paper.doi} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">{paper.doi.replace('https://doi.org/', '')}</a>
                                        </div>
                                    )}
                                </div>
                                <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                                    <span className="text-slate-400 text-[11px] font-bold">{paper.reads}</span>
                                    <Link href="/archive" className="text-primary text-[10px] font-black uppercase tracking-widest flex items-center gap-1 group/link">
                                        View <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── 8. NEWSLETTER (Fully Integrated & Minimal) ─── */}
            <NewsletterSection />

            {/* ─── 9. FINAL CTA (Highly Minimal Immersive Call to Action) ─── */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <span className="inline-block px-3 py-1 bg-primary/5 rounded-full text-[9px] text-primary font-black tracking-[0.25em] uppercase mb-6">Call For Submissions</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-black text-dark mb-6 leading-tight tracking-tight">
                        Shaping the Future of <span className="text-primary italic">Global Research</span>
                    </h2>
                    <p className="text-slate-500 text-sm md:text-base font-medium mb-10 max-w-xl mx-auto leading-relaxed">
                        Join our fast-growing community of researchers, practitioners, and scholars. Submit your next manuscript or propose a hardcover book volume.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/submission-guidelines/call-for-papers" className="group px-8 py-3.5 bg-primary text-white rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-primary-dark transition-all flex items-center gap-2 shadow-md">
                            Submit Manuscript <ArrowUpRight className="w-4 h-4" />
                        </Link>
                        <Link href="/book-publication" className="px-8 py-3.5 border border-slate-200 text-slate-700 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-slate-50 transition-all flex items-center gap-2">
                            Browse Publications
                        </Link>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

// ─── PIPELINE TIMELINE COMPONENT ─────────────────────────────────────────
const pipelineSteps = [
    {
        step: "01",
        title: "Send Your Paper",
        icon: UploadCloud,
        shortDesc: "Digital intake with initial ethics validation.",
        fullDesc: "Authors submit via our secure portal. Each submission undergoes scope screening, formatting compliance check, and plagiarism analysis. A unique Tracking ID is emailed within 24 hours.",
    },
    {
        step: "02",
        title: "Double-Blind Peer Review",
        icon: FileCheck,
        shortDesc: "Evaluation by distinguished domain experts.",
        fullDesc: "Our editorial team assigns two or three independent reviewers in the manuscript's domain. The double-blind process ensures impartiality. Reviewers evaluate methodology, originality, and significance.",
    },
    {
        step: "03",
        title: "Revision & Refinement",
        icon: RefreshCw,
        shortDesc: "Collaborative revision based on feedback.",
        fullDesc: "Authors receive detailed reviewer feedback with an opportunity to revise and resubmit. The editorial team mediates the revision process, verifying all concerns are addressed.",
    },
    {
        step: "04",
        title: "Publication & Archival",
        icon: Globe,
        shortDesc: "DOI registration, indexing, and distribution.",
        fullDesc: "Accepted manuscripts are typeset, assigned a CrossRef DOI, and published in the next quarterly volume. They are simultaneously indexed in Google Scholar with full open-access availability.",
    },
];

function PipelineSection() {
    const [activeStep, setActiveStep] = useState(null);

    return (
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="h-px w-8 bg-primary/40" />
                        <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em]">Publication Journey</span>
                        <span className="h-px w-8 bg-primary/40" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-black text-dark mb-4">
                        Our Peer Review & <span className="text-primary italic">Publishing Workflow</span>
                    </h2>
                    <p className="text-slate-500 font-medium text-sm">
                        Click any phase to explore your manuscript's journey in detail.
                    </p>
                </div>

                {/* Steps Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {pipelineSteps.map((item, i) => {
                        const isActive = activeStep === i;
                        return (
                            <button
                                key={i}
                                onClick={() => setActiveStep(isActive ? null : i)}
                                className={`group p-6 flex flex-col items-center text-center rounded-2xl transition-all duration-300 focus:outline-none ${isActive
                                        ? 'bg-primary text-white shadow-md -translate-y-1'
                                        : 'bg-white border border-slate-100 hover:border-primary/15 hover:shadow-sm hover:-translate-y-0.5'
                                    }`}
                            >
                                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-300 shadow-sm ${isActive ? 'bg-white/10' : 'bg-slate-50 group-hover:bg-primary group-hover:text-white'}`}>
                                    <item.icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-primary group-hover:text-white'}`} />
                                </div>
                                <span className={`text-[10px] font-black uppercase tracking-widest block mb-1 ${isActive ? 'text-white/60' : 'text-slate-400'}`}>Step {item.step}</span>
                                <h3 className={`text-xs font-serif font-bold mb-1 ${isActive ? 'text-white' : 'text-dark group-hover:text-primary'}`}>{item.title}</h3>
                                <p className={`text-[10px] leading-relaxed font-medium hidden md:block ${isActive ? 'text-white/70' : 'text-slate-400'}`}>{item.shortDesc}</p>
                            </button>
                        );
                    })}
                </div>

                {/* Expanded Detail Panel */}
                <motion.div
                    initial={false}
                    animate={{ opacity: activeStep !== null ? 1 : 0, y: activeStep !== null ? 0 : 10 }}
                    transition={{ duration: 0.3 }}
                    className={activeStep !== null ? 'block' : 'hidden'}
                >
                    {activeStep !== null && (
                        <div className="bg-slate-50 rounded-2xl border border-slate-100 p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                            <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                                {React.createElement(pipelineSteps[activeStep].icon, { className: 'w-6 h-6' })}
                            </div>
                            <div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-1 block">Phase Details</span>
                                <h3 className="text-lg font-serif font-bold text-dark mb-2">{pipelineSteps[activeStep].title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm font-medium">{pipelineSteps[activeStep].fullDesc}</p>
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
