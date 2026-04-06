import React, { Suspense, useState } from 'react';
import MainLayout from '../Layouts/MainLayout';
const Hero = React.lazy(() => import('../Components/Hero'));
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import {
    ArrowRight, BookOpen, Users, Globe, Award, FileText, Send, Star, Trophy,
    Lightbulb, GraduationCap, Microscope, Scale, Palette, Calculator, Cpu,
    CheckCircle, Zap, Shield, Search, Clock, ChevronRight, ArrowUpRight,
    Quote, UploadCloud, FileCheck, RefreshCw, BookMarked, Package, Truck, Heart, Feather
} from 'lucide-react';
import NewsletterSection from '../Components/NewsletterSection';


const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export default function Home() {
    return (
        <MainLayout
            title="Sanmati Spectrum of Knowledge | National Multidisciplinary Research Journal"
            description="Sanmati Spectrum is India's leading multidisciplinary peer-reviewed academic journal. Publishing high-quality research papers, thesis, and hardcover books across science, arts, commerce, and law."
            keywords="multidisciplinary journal india, peer-reviewed research, academic book publication, sanmati spectrum of knowledge, ugc care listed journal, publish book from thesis, national research journal"
        >
            <Suspense fallback={<div className="min-h-[95vh] flex flex-col gap-4 items-center justify-center text-primary font-bold">
                <Globe className="w-12 h-12 animate-spin-slow opacity-20" />
                <span className="animate-pulse tracking-widest text-sm uppercase">Loading Core Engine...</span>
            </div>}>
                <Hero />
            </Suspense>

            {/* ─── ABOUT SECTION ─── */}
            <section className="py-32 bg-surface relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/4 rounded-full -ml-48 -mt-48 blur-[100px]" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -mr-48 -mb-48 blur-[100px]" />

                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        {/* Left — Visual Info Grid */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="relative grid grid-cols-2 gap-6"
                        >
                            <div className="col-span-2 bg-white rounded-3xl p-8 2xl:p-12 shadow-sm border border-gray-100 hover:shadow-2xl hover:border-primary/20 transition-all duration-700 overflow-hidden relative group lg:block">
                                <div className="absolute right-0 top-0 w-64 h-64 bg-primary/4 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-1000" />
                                <Quote className="w-12 h-12 text-primary/10 mb-6 group-hover:text-primary/20 transition-colors" />
                                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-dark leading-tight relative z-10">
                                    "A thriving academic ecosystem where groundbreaking <span className="text-primary italic">research meets global publishing</span>."
                                </h3>
                            </div>

                            <div className="col-span-2 sm:col-span-1 bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden shadow-xl group cursor-default">
                                <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-colors duration-700" />
                                <BookOpen className="w-10 h-10 text-secondary mb-8 group-hover:scale-110 transition-transform duration-500" />
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-5xl lg:text-6xl font-serif font-black">25</span>
                                    <span className="text-secondary text-4xl font-black">+</span>
                                </div>
                                <p className="text-white/80 text-xs font-black uppercase tracking-widest leading-tight">Research Fields</p>
                            </div>

                            <div className="col-span-2 sm:col-span-1 bg-white rounded-3xl p-8 lg:p-10 shadow-[0_10px_40px_rgba(79,119,255,0.08)] border border-primary/10 relative overflow-hidden group hover:border-secondary/30 transition-all duration-500 cursor-default text-center flex flex-col items-center justify-center">
                                <Award className="w-10 h-10 text-secondary mb-8 group-hover:scale-110 transition-transform duration-500" />
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-5xl lg:text-6xl font-serif font-black text-dark">Est.</span>
                                </div>
                                <p className="text-primary/60 text-xs font-black uppercase tracking-widest leading-tight">Founded 2023</p>
                            </div>
                        </motion.div>

                        {/* Right — Narrative */}
                        <motion.div {...fadeInUp} className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="h-px w-10 bg-secondary" />
                                <span className="text-secondary font-black text-[11px] uppercase tracking-[0.3em]">Our Philosophical Core</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl lg:text-5xl font-serif font-bold text-dark leading-[1.1] mb-8">
                                Building a <span className="text-primary italic">Global Research Community</span>
                            </h2>
                            <p className="text-slate-600 font-medium leading-relaxed text-lg mb-10 border-l-2 border-primary/15 pl-8">
                                Sanmati Spectrum is India's leading platform, dedicated to bridging the gap between traditional research and modern scientific discussion. We publish original research and high-quality books across diverse fields.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                {[
                                    { title: 'The Mission', desc: 'To empower researchers by providing a high-impact, peer-reviewed ecosystem for global visibility.', icon: 'M' },
                                    { title: 'The Vision', desc: 'To become the gold standard in multidisciplinary publishing and academic integrity.', icon: 'V' },
                                ].map((item, i) => (
                                    <div key={i} className="group p-6 rounded-2xl bg-warm-bg border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                                        <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center text-primary font-black text-sm mb-4 group-hover:bg-primary group-hover:text-white transition-colors uppercase">{item.icon}</div>
                                        <h3 className="font-bold text-dark mb-2 tracking-tight">{item.title}</h3>
                                        <p className="text-muted text-[13px] leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center gap-8">
                                <Link href="/basic-info/about-journal"
                                    className="group px-8 py-4 bg-primary text-white rounded-2xl font-bold text-xs hover:bg-primary-dark transition-all flex items-center gap-3 shadow-xl shadow-primary/20 hover:-translate-y-1 uppercase tracking-widest">
                                    <ChevronRight className="w-4 h-4" /> Explore Our Ethos
                                </Link>
                                <div className="hidden sm:block">
                                    <p className="text-gray-300 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Authenticated</p>
                                    <p className="text-dark font-black text-sm">ISSN: 3108-1819</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── LATEST BOOK RELEASES ─── */}
            <section className="py-32 bg-warm-bg">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
                        <motion.div {...fadeInUp} className="max-w-2xl">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="h-px w-10 bg-secondary" />
                                <span className="text-secondary font-black text-[11px] uppercase tracking-[0.3em]">New Arrivals</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl lg:text-5xl font-serif font-bold text-dark leading-tight">
                                Latest <span className="text-primary italic">Book Releases</span> & Publications
                            </h2>
                        </motion.div>
                        <motion.div {...fadeInUp}>
                            <Link href="/book-publication" className="group px-10 py-5 bg-white border border-gray-200 text-dark rounded-2xl font-bold text-xs hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center gap-3 shadow-sm hover:shadow-xl hover:-translate-y-1 uppercase tracking-widest">
                                All Publications <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Search and Filters UI */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 mb-12">
                        <div className="flex-grow flex items-center bg-warm-bg rounded-xl px-4 py-3 border border-transparent focus-within:bg-white focus-within:border-primary/30 transition-all">
                            <Search className="w-5 h-5 text-muted mr-3" />
                            <input type="text" placeholder="Search by title, author, or keyword..." className="w-full bg-transparent border-none outline-none text-sm font-medium text-dark placeholder:text-muted/60" />
                        </div>
                        <div className="flex gap-4">
                            <select className="bg-warm-bg text-dark font-bold text-xs uppercase tracking-wider rounded-xl px-6 py-3 border-none outline-none focus:ring-2 focus:ring-primary/20 appearance-none min-w-[140px] text-center">
                                <option>Any Year</option>
                                <option>2024</option>
                                <option>2023</option>
                                <option>2022</option>
                            </select>
                            <select className="bg-warm-bg text-dark font-bold text-xs uppercase tracking-wider rounded-xl px-6 py-3 border-none outline-none focus:ring-2 focus:ring-primary/20 appearance-none min-w-[140px] text-center">
                                <option>Subject</option>
                                <option>Physics</option>
                                <option>Economics</option>
                                <option>Sociology</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                        {[
                            {
                                genre: 'Academic Research',
                                format: 'Hardcover · 520 Pages',
                                title: 'Published Volume 37',
                                excerpt: 'A comprehensive collection of multidisciplinary research papers exploring emerging trends in science, arts, and commerce.',
                                img: '/images/books/WhatsApp Image 2026-02-16 at 9.21.50 PM.jpeg',
                                badge: "Latest Release",
                                price: 'Order Now',
                                stars: 5,
                            },
                            {
                                genre: 'Multidisciplinary',
                                format: 'Hardcover · 480 Pages',
                                title: 'Published Volume 35',
                                excerpt: 'Exploring the intersections of traditional knowledge and modern scientific discourse through peer-reviewed excellence.',
                                img: '/images/books/WhatsApp Image 2026-02-16 at 9.21.49 PM (1).jpeg',
                                badge: 'Bestseller',
                                price: 'Order Now',
                                stars: 5,
                            },
                            {
                                genre: 'Social Sciences',
                                format: 'Hardcover · 450 Pages',
                                title: 'Published Volume 32',
                                excerpt: 'Documenting critical insights and scholarly perspectives on global socio-economic challenges and modern society.',
                                img: '/images/books/WhatsApp Image 2026-02-16 at 9.21.47 PM.jpeg',
                                badge: "Editor's Choice",
                                price: 'Order Now',
                                stars: 5,
                            },
                        ].map((book, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="md:col-span-4 group relative flex flex-col justify-between h-full bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-primary/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(79,119,255,0.12)] hover:-translate-y-1 transition-all duration-500"
                            >
                                <div className="aspect-[3/4] overflow-hidden relative">
                                    <img src={book.img} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" loading="lazy" />
                                    {book.badge && (
                                        <span className="absolute top-4 left-4 bg-secondary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg z-10">
                                            {book.badge}
                                        </span>
                                    )}
                                </div>
                                <div className="p-8 flex flex-col justify-between flex-grow">
                                    <div>
                                        {/* Stars */}
                                        <div className="flex gap-1 mb-3">
                                            {[...Array(book.stars)].map((_, k) => (
                                                <Star key={k} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                                            ))}
                                        </div>
                                        <p className="text-primary font-black text-[10px] tracking-[0.2em] uppercase mb-1">{book.genre}</p>
                                        <p className="text-slate-500 text-[11px] font-bold mb-4">{book.format}</p>
                                        <h3 className="text-xl font-serif font-bold text-dark mb-4 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                                            {book.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">{book.excerpt}</p>
                                    </div>
                                    <Link href="/book-publication" className="mt-auto inline-flex items-center justify-center gap-2 w-full py-3.5 bg-primary/8 text-primary rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all group/btn">
                                        {book.price} <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── EDITORIAL LEADERSHIP ─── */}
            <section className="py-32 bg-white relative">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row items-end justify-between gap-10 mb-10 lg:mb-20">
                        <motion.div {...fadeInUp} className="max-w-2xl">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="h-px w-10 bg-secondary" />
                                <span className="text-secondary font-black text-[11px] uppercase tracking-[0.3em]">Guardians of Integrity</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl lg:text-5xl font-serif font-bold text-dark leading-tight">
                                Distinguished <span className="text-primary italic">Editorial Leadership</span>
                            </h2>
                        </motion.div>
                        <motion.div {...fadeInUp} className="hidden lg:block pb-2">
                            <Link href="/editorial-team/editorial-board" className="text-xs font-black uppercase tracking-[0.2em] text-dark-light hover:text-primary transition-colors flex items-center gap-3 group">
                                View Full Board <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 max-w-5xl mx-auto">
                        {/* Editor-in-Chief : Dr. Namrta Jain */}
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary-dark text-white p-10 flex flex-col items-center text-center shadow-2xl hover:-translate-y-1 transition-all duration-700 relative">
                                <div className="absolute top-0 right-0 p-8 opacity-5"><Trophy className="w-24 h-24 text-secondary scale-150 rotate-12" /></div>
                                <div className="w-44 h-44 rounded-2xl overflow-hidden mb-8 border-4 border-white/30 shadow-2xl relative z-10">
                                    <img loading="lazy" src="/mam.jpeg" alt="Dr. Namrta Jain" className="w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-700" />
                                </div>
                                <span className="inline-block px-4 py-1.5 bg-secondary/25 border border-secondary/40 rounded-full text-[10px] text-secondary font-black tracking-widest uppercase mb-4 w-fit">Editor-in-Chief</span>
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold mb-2 tracking-tight group-hover:text-secondary-light transition-colors duration-300">Dr. Namrta Jain</h3>
                                <p className="text-white/70 text-[12px] font-bold uppercase tracking-[0.05em] mb-8">Sanmati Spectrum of Knowledge & Emerging Discourse</p>

                                <div className="w-full bg-white/10 rounded-2xl p-4 mb-6 border border-white/10 text-xs">
                                    <p className="flex justify-between border-b border-white/5 pb-2 mb-2"><span className="text-white/40 uppercase tracking-widest font-black text-[9px]">Email</span> <a href="mailto:sanmatijournal@gmail.com" className="font-bold hover:text-secondary transition-colors">sanmatijournal@gmail.com</a></p>
                                    <p className="flex justify-between"><span className="text-white/40 uppercase tracking-widest font-black text-[9px]">Mob</span> <span className="font-bold">+91 9870713912 / 8979782949</span></p>
                                </div>

                                <div className="mt-auto w-full pt-4">
                                    <a href="https://scholar.google.com/citations?user=YzXafxwAAAAJ&hl=en" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[11px] font-black tracking-widest uppercase text-white hover:text-secondary transition-colors">
                                        <ArrowUpRight className="w-3.5 h-3.5" /> Google Scholar Profile
                                    </a>
                                </div>
                            </div>
                        </motion.div>



                        {/* Managing Editor : Dr. Ratnesh Kumar Jain */}
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="group">
                            <div className="h-full rounded-2xl overflow-hidden bg-surface border border-gray-100 p-10 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-700 relative">
                                <div className="absolute top-0 right-0 p-8 opacity-5"><Users className="w-24 h-24 text-primary scale-150 -rotate-12" /></div>
                                <div className="w-44 h-44 rounded-2xl overflow-hidden mb-8 border-4 border-white shadow-xl relative z-10 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                    <img loading="lazy" src="/sir.jpeg" alt="Dr. Ratnesh Kumar Jain" className="w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-700" />
                                </div>
                                <span className="inline-block px-4 py-1.5 bg-primary/8 rounded-full text-[10px] text-primary font-black tracking-widest uppercase mb-4">Managing Editor</span>
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark mb-2 group-hover:text-primary transition-colors duration-300">Dr. Ratnesh Kumar Jain</h3>
                                <p className="text-dark/40 text-[10px] uppercase font-black tracking-widest mb-8 min-h-[15px]"></p>

                                <div className="w-full bg-warm-bg rounded-2xl p-4 mb-6 border border-gray-50 text-xs text-left">
                                    <p className="flex justify-between border-b border-gray-200 pb-2 mb-2"><span className="text-muted uppercase tracking-widest font-black text-[9px]">Email</span> <a href="mailto:Jainratnesh79@gmail.com" className="font-bold text-dark hover:text-primary transition-colors">Jainratnesh79@gmail.com</a></p>
                                    <p className="flex justify-between"><span className="text-muted uppercase tracking-widest font-black text-[9px]">Mob</span> <span className="font-bold text-dark">+91 7999525735</span></p>
                                </div>

                                <div className="mt-auto w-full pt-4">
                                    <a href="https://www.tmu.ac.in/nss-coordinator-desk" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[11px] font-black tracking-widest uppercase text-dark hover:text-primary transition-colors">
                                        <ArrowUpRight className="w-3.5 h-3.5" /> TMU Coordinator Desk
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── ACADEMIC DOMAINS ─── */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-primary/2 rounded-full blur-[120px] -ml-96" />
                <div className="container-custom relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-20">
                        <motion.div {...fadeInUp} className="flex items-center justify-center gap-4 mb-6">
                            <span className="h-px w-10 bg-secondary" />
                            <span className="text-secondary font-black text-[11px] uppercase tracking-[0.4em]">Our Academic Scope</span>
                            <span className="h-px w-10 bg-secondary" />
                        </motion.div>
                        <motion.h2 {...fadeInUp} transition={{ delay: 0.1 }} className="text-2xl md:text-3xl lg:text-4xl lg:text-5xl font-serif font-bold text-dark mb-6">
                            <span className="text-primary italic">Explore Many Fields of Study</span>
                        </motion.h2>
                        <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-muted font-medium text-lg leading-relaxed">
                            We publish books and papers across the full spectrum of modern and traditional research.
                        </motion.p>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
                        initial="initial" whileInView="whileInView" viewport={{ once: true }}
                        variants={{ whileInView: { transition: { staggerChildren: 0.05 } } }}
                    >
                        {[
                            { name: "Science & Technology", icon: Microscope, color: "bg-blue-50 text-blue-600", count: "15+" },
                            { name: "Social Sciences", icon: Users, color: "bg-emerald-50 text-emerald-600", count: "12+" },
                            { name: "Arts & Humanities", icon: Palette, color: "bg-purple-50 text-purple-600", count: "10+" },
                            { name: "Commerce & Management", icon: Calculator, color: "bg-orange-50 text-orange-600", count: "8+" },
                            { name: "Law & Governance", icon: Scale, color: "bg-red-50 text-red-600", count: "6+" },
                            { name: "Education", icon: GraduationCap, color: "bg-cyan-50 text-cyan-600", count: "9+" },
                            { name: "Computer Science", icon: Cpu, color: "bg-indigo-50 text-indigo-600", count: "11+" },
                            { name: "Innovation Research", icon: Lightbulb, color: "bg-yellow-50 text-yellow-600", count: "7+" },
                        ].map((cat, idx) => (
                            <motion.div
                                key={idx}
                                variants={{ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 } }}
                                className="h-full group p-8 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:border-primary/20 hover:shadow-[0_20px_40px_rgba(79,119,255,0.08)] transition-all duration-500 flex flex-col justify-between items-center text-center"
                            >
                                <div className="flex flex-col items-center">
                                    <div className={`w-20 h-20 rounded-xl ${cat.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm shrink-0`}>
                                        <cat.icon className="w-9 h-9" />
                                    </div>
                                    <h3 className="font-bold text-dark text-base mb-2 px-2 group-hover:text-primary transition-colors tracking-tight leading-tight">{cat.name}</h3>
                                </div>
                                <div className="mt-auto pt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                    {cat.count} Publications
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ─── ACADEMIC IMPACT (Counters) ─── */}
            <section className="py-12 lg:py-24 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12 text-center">
                        {[
                            { icon: FileText, num: "500+", label: "Papers Received" },
                            { icon: Users, num: "200+", label: "Global Scholars" },
                            { icon: Award, num: "50+", label: "Expert Reviewers" },
                            { icon: Globe, num: "25+", label: "Domain Disciplines" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className="group"
                            >
                                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-500">
                                    <stat.icon className="w-8 h-8 text-white/80 group-hover:scale-110 transition-transform" />
                                </div>
                                <div className="text-2xl md:text-3xl lg:text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter">{stat.num}</div>
                                <p className="text-white/50 text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── WHY CHOOSE OUR BOOKS ─── */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative group"
                        >
                            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] relative">
                                <img loading="lazy" src="/fistudy-assets/resources/research_library.png" alt="Premium Books" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="absolute -bottom-10 -right-10 bg-white p-10 rounded-2xl shadow-[0_30px_60px_rgba(79,119,255,0.12)] border border-gray-100"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <Award className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-xl md:text-2xl lg:text-3xl font-black text-dark tracking-tighter">Gold Standard</div>
                                        <p className="text-muted text-xs font-bold uppercase tracking-widest mt-1">Peer Review Quality</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div {...fadeInUp}>
                            <div className="flex items-center gap-4 mb-8">
                                <span className="h-px w-10 bg-secondary" />
                                <span className="text-secondary font-black text-[11px] uppercase tracking-[0.4em]">Why Choose Us</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl lg:text-5xl font-serif font-bold text-dark leading-[1.15] mb-8">
                                Premium <span className="text-primary italic">Publishing Excellence</span> for Every Author
                            </h2>
                            <p className="text-slate-600 font-medium text-lg leading-relaxed mb-12">
                                We deliver high-quality book publishing services — from review and design to global distribution. Every book we publish is crafted with academic integrity and premium quality.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                {[
                                    { icon: Globe, label: "Global Shipping", desc: "Delivered to 50+ countries worldwide." },
                                    { icon: Feather, label: "Signed Editions", desc: "Exclusive author-signed collector copies." },
                                    { icon: Zap, label: "Early Access", desc: "Pre-order before official launch dates." },
                                    { icon: Package, label: "Premium Hardcover", desc: "High-quality binding and print production." },
                                ].map((feature, i) => (
                                    <div key={i} className="flex gap-4 p-6 rounded-3xl bg-warm-bg border border-gray-50 hover:border-primary/20 transition-all group">
                                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all text-primary">
                                            <feature.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-black text-dark mb-1">{feature.label}</h4>
                                            <p className="text-muted text-[11px] font-bold uppercase tracking-wide opacity-60">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Link href="/book-publication" className="inline-flex items-center gap-4 text-dark font-black text-xs uppercase tracking-[0.2em] group">
                                <span className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-white group-hover:bg-primary transition-all">
                                    <ArrowRight className="w-6 h-6" />
                                </span>
                                Browse All Books
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── PUBLICATION PROCESS ─── */}
            <PipelineSection />

            {/* ─── INDEXING & ABSTRACTING ─── */}
            <section className="py-20 bg-warm-bg border-y border-gray-100">
                <div className="container-custom">
                    <div className="text-center mb-10">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <span className="h-px w-10 bg-secondary" />
                            <span className="text-secondary font-black text-[11px] uppercase tracking-[0.3em]">Global Visibility</span>
                            <span className="h-px w-10 bg-secondary" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-dark">
                            Indexed & <span className="text-primary italic">Abstracted In</span>
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
                        {/* Placeholder Logos for Indexing */}
                        <div className="font-bold text-xl tracking-tight text-gray-500">Google Scholar</div>
                        <div className="font-bold text-xl tracking-tight text-gray-500">CrossRef</div>
                        <div className="font-bold text-xl tracking-tight text-gray-500">UGC CARE (Proposed)</div>
                        <div className="font-bold text-xl tracking-tight text-gray-500">Directory of Open Access Journals (DOAJ)</div>
                        <div className="font-bold text-xl tracking-tight text-gray-500">ResearchGate</div>
                    </div>
                </div>
            </section>

            {/* ─── TRENDING / MOST READ SECTION ─── */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="absolute -top-40 left-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px]" />
                <div className="container-custom relative z-10">
                    <motion.div {...fadeInUp} className="flex flex-col md:flex-row items-end justify-between gap-8 mb-14">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="h-px w-10 bg-secondary" />
                                <span className="text-secondary font-black text-[11px] uppercase tracking-[0.3em]">Most Accessed</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark leading-tight">
                                Trending <span className="text-primary italic">Research Papers</span>
                            </h2>
                        </div>
                        <Link href="/archive" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-dark/60 hover:text-primary transition-colors group shrink-0">
                            Browse All Archives <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { rank: '01', field: 'Multidisciplinary', title: 'Sanmati Spectrum of Knowledge & Emerging Discourse (January-March, 2026)', authors: 'Dr. Namrta Jain, Dr. Ratnesh Kumar Jain', reads: 'Featured Issue', tag: 'Hot' },
                            { rank: '02', field: 'Commerce & Economics', title: 'Impact of Digital Literacy on Rural Education Outcomes', authors: 'Dr. Ravi Sharma, Prof. Anita Gupta', reads: '1.2k reads', tag: 'Trending' },
                            { rank: '03', field: 'Social Science', title: 'Multidisciplinary Perspectives on Modern Academic Discourse', authors: 'Dr. Priya Kumari, Dr. Ratnesh Jain', reads: '987 reads', tag: 'Featured' },
                        ].map((paper, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative bg-warm-bg border border-gray-100 rounded-xl p-8 hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(79,119,255,0.10)] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                            >
                                <div className="absolute top-6 right-6 flex items-center gap-2">
                                    <span className="bg-secondary/10 text-secondary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{paper.tag}</span>
                                </div>
                                <div className="text-7xl font-black text-primary/5 group-hover:text-primary/10 transition-colors leading-none mb-4 -ml-2">{paper.rank}</div>
                                <p className="text-secondary font-black text-[10px] uppercase tracking-[0.2em] mb-3">{paper.field}</p>
                                <h3 className="font-serif font-bold text-dark text-lg leading-snug mb-4 group-hover:text-primary transition-colors">{paper.title}</h3>
                                <p className="text-muted text-[12px] font-medium mb-6 truncate">{paper.authors}</p>
                                <div className="flex items-center justify-between">
                                    <span className="flex items-center gap-2 text-muted text-[11px] font-bold">
                                        <Globe className="w-3.5 h-3.5 text-secondary" /> {paper.reads}
                                    </span>
                                    <Link href="/archive" className="text-primary text-[11px] font-black uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
                                        View <ChevronRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── NEWSLETTER (Fully Functional) ─── */}
            <NewsletterSection />

            {/* ─── INVITATION (CTA) ─── */}
            <section className="py-12 lg:py-24">
                <div className="container-custom">
                    <div className="relative rounded-3xl bg-gradient-to-br from-primary via-primary-dark to-[#0a0f2e] p-14 lg:p-24 overflow-hidden text-center shadow-[0_50px_100px_rgba(79,119,255,0.25)]">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-secondary/15 rounded-full blur-[100px]" />
                        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-coral/10 rounded-full blur-[100px]" />

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <span className="inline-block px-5 py-2 bg-white/8 border border-white/15 rounded-full text-[10px] text-secondary font-black tracking-[0.3em] uppercase mb-8">Ready for Publication</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl lg:text-7xl font-serif font-bold text-white mb-10 leading-[1.1] tracking-tight">
                                Shaping the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-light">Global Research</span>
                            </h2>
                            <p className="text-white/45 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                                Join our community of scholars and authors. Submit your manuscript or explore our latest book releases.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <Link href="/submission-guidelines/call-for-papers" className="group px-12 py-6 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-dark transition-all flex items-center gap-3 shadow-2xl">
                                    Submit Manuscript <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </Link>
                                <Link href="/book-publication" className="px-12 py-6 border border-white/15 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/8 transition-all flex items-center gap-3">
                                    <BookOpen className="w-4 h-4" /> Browse Publications
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

// ─── INTERACTIVE PIPELINE SECTION ─────────────────────────────────────────
const pipelineSteps = [
    {
        step: "01",
        title: "Send Your Paper",
        icon: UploadCloud,
        shortDesc: "Digital intake with initial ethics and originality validation.",
        fullDesc: "Authors submit via our secure portal. Each submission undergoes scope screening, formatting compliance check, and plagiarism analysis. A unique Tracking ID is emailed within 24 hours of receipt.",
    },
    {
        step: "02",
        title: "Double-Blind Peer Review",
        icon: FileCheck,
        shortDesc: "Evaluation by distinguished domain experts.",
        fullDesc: "Our editorial team assigns two or three independent reviewers in the manuscript's domain. The double-blind process ensures impartiality. Reviewers evaluate methodology, originality, significance, and writing quality typically over 4–6 weeks.",
    },
    {
        step: "03",
        title: "Revision & Refinement",
        icon: RefreshCw,
        shortDesc: "Collaborative revision based on expert feedback.",
        fullDesc: "Authors receive detailed reviewer feedback with an opportunity to revise and resubmit. The editorial team mediates the revision process, verifying all concerns are addressed before the manuscript moves forward.",
    },
    {
        step: "04",
        title: "Publication & Archival",
        icon: Globe,
        shortDesc: "DOI registration, global indexing, and distribution.",
        fullDesc: "Accepted manuscripts are typeset, assigned a CrossRef DOI, and published in the next quarterly volume. They are simultaneously indexed in Google Scholar and UGC CARE with full open-access availability.",
    },
];

function PipelineSection() {
    const [activeStep, setActiveStep] = useState(null);

    return (
        <section className="py-32 bg-warm-bg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] -mr-96 -mt-96" />
            <div className="container-custom relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
                    <motion.div {...fadeInUp} className="flex items-center justify-center gap-4 mb-6">
                        <span className="h-px w-10 bg-secondary" />
                        <span className="text-secondary font-black text-[11px] uppercase tracking-[0.4em]">Publication Pipeline</span>
                        <span className="h-px w-10 bg-secondary" />
                    </motion.div>
                    <motion.h2 {...fadeInUp} transition={{ delay: 0.1 }} className="text-2xl md:text-3xl lg:text-4xl lg:text-5xl font-serif font-bold text-dark mb-4">
                        The <span className="text-primary italic">Scholarly Journey</span>
                    </motion.h2>
                    <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-muted font-medium text-base">
                        Click any step to explore your manuscript's journey in detail.
                    </motion.p>
                </div>

                {/* Steps Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative mb-6">
                    <div className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
                    {pipelineSteps.map((item, i) => {
                        const isActive = activeStep === i;
                        return (
                            <motion.button
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.8 }}
                                onClick={() => setActiveStep(isActive ? null : i)}
                                className={`relative group p-8 flex flex-col items-center text-center rounded-xl transition-all duration-500 cursor-pointer focus:outline-none ${isActive
                                        ? 'bg-primary shadow-2xl shadow-primary/20 -translate-y-2'
                                        : 'bg-white border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1'
                                    }`}
                            >
                                <div className={`relative z-10 w-24 h-24 rounded-full flex items-center justify-center mb-6 transition-all duration-500 shadow-lg ${isActive ? 'bg-white/20 border-2 border-white/30' : 'bg-surface border border-gray-100 group-hover:bg-primary group-hover:border-primary'
                                    }`}>
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-secondary text-white text-[10px] font-black px-3 py-1 rounded-full">{item.step}</div>
                                    <item.icon className={`w-10 h-10 transition-colors duration-300 ${isActive ? 'text-white' : 'text-secondary group-hover:text-white'}`} />
                                </div>
                                <h3 className={`text-sm font-serif font-bold mb-2 transition-colors ${isActive ? 'text-white' : 'text-dark group-hover:text-primary'}`}>{item.title}</h3>
                                <p className={`text-[11px] leading-relaxed font-medium hidden md:block ${isActive ? 'text-white/70' : 'text-muted'}`}>{item.shortDesc}</p>
                            </motion.button>
                        );
                    })}
                </div>

                {/* Expanded Detail Panel */}
                <motion.div
                    initial={false}
                    animate={{ opacity: activeStep !== null ? 1 : 0, y: activeStep !== null ? 0 : 10 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className={activeStep !== null ? 'block' : 'hidden'}
                >
                    {activeStep !== null && (
                        <div className="bg-white rounded-2xl border border-primary/10 shadow-2xl p-10 md:p-14 flex flex-col md:flex-row items-start gap-10">
                            <div className="w-20 h-20 bg-primary/8 rounded-2xl flex items-center justify-center shrink-0">
                                {React.createElement(pipelineSteps[activeStep].icon, { className: 'w-10 h-10 text-primary' })}
                            </div>
                            <div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-secondary mb-2 block">Step {pipelineSteps[activeStep].step}</span>
                                <h3 className="text-xl md:text-2xl font-serif font-bold text-dark mb-4">{pipelineSteps[activeStep].title}</h3>
                                <p className="text-muted leading-relaxed text-base font-medium">{pipelineSteps[activeStep].fullDesc}</p>
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}

