import React, { Suspense } from 'react';
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

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export default function Home() {
    return (
        <MainLayout title="Home" description="Sanmati Spectrum: A National Multidisciplinary Research Journal & Book Publication">
            <Suspense fallback={<div className="min-h-[95vh] flex items-center justify-center text-primary font-bold">Loading Hero...</div>}>
                <Hero />
            </Suspense>

            {/* ─── FEATURES BAR (Publication Highlights) ─── */}
            <section className="py-8 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10">
                        {[
                            { icon: BookMarked, stat: '500+', label: 'Exclusive Titles' },
                            { icon: Truck, stat: 'Global', label: 'Shipping Available' },
                            { icon: Heart, stat: 'Signed', label: 'Author Editions' },
                            { icon: Zap, stat: 'Early', label: 'Access Programs' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 px-8 py-4">
                                <item.icon className="w-8 h-8 text-white/70 shrink-0" />
                                <div>
                                    <p className="text-white font-black text-xl leading-none">{item.stat}</p>
                                    <p className="text-white/60 text-[11px] font-bold uppercase tracking-widest">{item.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── ABOUT SECTION ─── */}
            <section className="py-32 bg-surface relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/4 rounded-full -ml-48 -mt-48 blur-[100px]" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -mr-48 -mb-48 blur-[100px]" />

                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        {/* Left — Dual Image Layout */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            <div className="grid grid-cols-12 gap-4">
                                <div className="col-span-7 relative z-10">
                                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[450px] border-4 border-white">
                                        <img src="/fistudy-assets/resources/about-journal-1.png" alt="Book Publication" className="w-full h-full object-cover" loading="lazy" />
                                    </div>
                                    <div className="absolute -bottom-8 -left-6 bg-white rounded-3xl shadow-[0_20px_40px_rgba(79,119,255,0.12)] p-6 border border-gray-100 animate-float">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl font-serif font-black text-primary">25</span>
                                            <span className="text-secondary text-2xl font-black">+</span>
                                        </div>
                                        <p className="text-dark-light text-[10px] font-black uppercase tracking-[0.2em] mt-1">Research Fields</p>
                                    </div>
                                </div>
                                <div className="col-span-5 pt-16">
                                    <div className="rounded-[2rem] overflow-hidden shadow-xl h-64 mb-6 border-4 border-white">
                                        <img src="/fistudy-assets/resources/about-journal-2.png" alt="Book Editions" className="w-full h-full object-cover" loading="lazy" />
                                    </div>
                                    <div className="bg-gradient-to-br from-primary to-primary-dark rounded-[2rem] p-8 text-white relative overflow-hidden shadow-xl">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12" />
                                        <div className="flex items-baseline gap-1 mb-2">
                                            <span className="text-3xl font-serif font-bold">02</span>
                                            <span className="text-secondary text-xl font-black">+</span>
                                        </div>
                                        <p className="text-white/50 text-[10px] font-black uppercase tracking-widest leading-tight">Years of Academic Leadership</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right — Narrative */}
                        <motion.div {...fadeInUp} className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="h-px w-10 bg-secondary" />
                                <span className="text-secondary font-black text-[11px] uppercase tracking-[0.3em]">Our Philosophical Core</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-dark leading-[1.1] mb-8">
                                Cultivating a Global <span className="text-primary italic">Spectrum of Knowledge</span>
                            </h2>
                            <p className="text-muted leading-relaxed text-lg mb-10 border-l-2 border-primary/15 pl-8">
                                Sanmati Spectrum is India's rising multidisciplinary beacon, dedicating to bridging the gap between traditional intellectual rigor and modern scientific discourse. We celebrate original research and book publications alike.
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
                            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-dark leading-tight">
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
                    <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 mb-12">
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

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                genre: 'Quantum Physics',
                                format: 'Hardcover · 320 Pages',
                                title: 'Non-Linear Dynamics in Sub-Atomic Particles',
                                excerpt: 'Investigating quantum fields under high-stress gravitational simulations — a groundbreaking multi-disciplinary synthesis.',
                                img: '/fistudy-assets/resources/paper-physics.png',
                                badge: "Editor's Choice",
                                price: 'Order Now',
                                stars: 5,
                            },
                            {
                                genre: 'Behavioral Economics',
                                format: 'E-book · 280 Pages',
                                title: 'The Cognitive Architecture of Market Shifts',
                                excerpt: 'A multidisciplinary study on human heuristic biases in rapid digital-first economic environments.',
                                img: '/fistudy-assets/resources/paper-neuro.png',
                                badge: 'Bestseller',
                                price: 'Pre-Order',
                                stars: 5,
                            },
                            {
                                genre: 'Sustainability',
                                format: 'Hardcover · 350 Pages',
                                title: 'Urban Resilience in the Anthropocene Era',
                                excerpt: 'Analyzing the intersection of sociological patterns and environmental engineering in future megacities.',
                                img: '/fistudy-assets/resources/paper-social.png',
                                badge: 'New Release',
                                price: 'Order Now',
                                stars: 4,
                            },
                        ].map((book, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(79,119,255,0.12)] hover:-translate-y-2 transition-all duration-500"
                            >
                                <div className="h-56 overflow-hidden relative">
                                    <img src={book.img} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" loading="lazy" />
                                    {book.badge && (
                                        <span className="absolute top-4 left-4 bg-secondary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                                            {book.badge}
                                        </span>
                                    )}
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    {/* Stars */}
                                    <div className="flex gap-1 mb-3">
                                        {[...Array(book.stars)].map((_, k) => (
                                            <Star key={k} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                                        ))}
                                    </div>
                                    <p className="text-primary font-black text-[10px] tracking-[0.2em] uppercase mb-1">{book.genre}</p>
                                    <p className="text-muted text-[11px] font-bold mb-4">{book.format}</p>
                                    <h3 className="text-xl font-serif font-bold text-dark mb-4 group-hover:text-primary transition-colors leading-tight">
                                        {book.title}
                                    </h3>
                                    <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">{book.excerpt}</p>
                                    <Link href="/book-publication" className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-primary/8 text-primary rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all group/btn">
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
                    <div className="flex flex-col lg:flex-row items-end justify-between gap-10 mb-20">
                        <motion.div {...fadeInUp} className="max-w-2xl">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="h-px w-10 bg-secondary" />
                                <span className="text-secondary font-black text-[11px] uppercase tracking-[0.3em]">Guardians of Integrity</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-dark leading-tight">
                                Distinguished <span className="text-primary italic">Editorial Leadership</span>
                            </h2>
                        </motion.div>
                        <motion.div {...fadeInUp} className="hidden lg:block pb-2">
                            <Link href="/editorial-team/editorial-board" className="text-xs font-black uppercase tracking-[0.2em] text-dark-light hover:text-primary transition-colors flex items-center gap-3 group">
                                View Full Board <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Editor-in-Chief : Dr. Namrta Jain */}
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="h-full rounded-[3rem] overflow-hidden bg-gradient-to-br from-primary to-primary-dark text-white p-10 flex flex-col items-center text-center shadow-2xl hover:-translate-y-2 transition-all duration-700 relative">
                                <div className="absolute top-0 right-0 p-8 opacity-5"><Trophy className="w-24 h-24 text-secondary scale-150 rotate-12" /></div>
                                <div className="w-44 h-44 rounded-[2.5rem] overflow-hidden mb-8 border-4 border-white/30 shadow-2xl relative z-10">
                                    <img src="/mam.jpeg" alt="Dr. Namrta Jain" className="w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-700" />
                                </div>
                                <span className="inline-block px-4 py-1.5 bg-secondary/25 border border-secondary/40 rounded-full text-[10px] text-secondary font-black tracking-widest uppercase mb-4 w-fit">Editor-in-Chief</span>
                                <h3 className="text-3xl font-serif font-bold mb-2 tracking-tight group-hover:text-secondary-light transition-colors duration-300">Dr. Namrta Jain</h3>
                                <p className="text-white/70 text-[12px] font-bold uppercase tracking-[0.1em] mb-2">Assistant Professor</p>
                                <p className="text-white/40 text-[10px] uppercase font-black tracking-widest mb-6">Teerthanker Mahaveer University, Moradabad</p>
                                
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
                            <div className="h-full rounded-[3rem] overflow-hidden bg-surface border border-gray-100 p-10 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:border-primary/20 hover:-translate-y-2 transition-all duration-700 relative">
                                <div className="absolute top-0 right-0 p-8 opacity-5"><Users className="w-24 h-24 text-primary scale-150 -rotate-12" /></div>
                                <div className="w-44 h-44 rounded-[2.5rem] overflow-hidden mb-8 border-4 border-white shadow-xl relative z-10 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                    <img src="/sir.jpeg" alt="Dr. Ratnesh Kumar Jain" className="w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-700" />
                                </div>
                                <span className="inline-block px-4 py-1.5 bg-primary/8 rounded-full text-[10px] text-primary font-black tracking-widest uppercase mb-4">Managing Editor</span>
                                <h3 className="text-3xl font-serif font-bold text-dark mb-2 group-hover:text-primary transition-colors duration-300">Dr. Ratnesh Kr. Jain</h3>
                                <p className="text-muted text-[12px] font-bold uppercase tracking-wider mb-2">Asst. Dean / Assoc. Professor</p>
                                <p className="text-dark/40 text-[10px] uppercase font-black tracking-widest mb-6">Teerthanker Mahaveer University, Moradabad</p>
                                
                                <div className="w-full bg-warm-bg rounded-2xl p-4 mb-6 border border-gray-50 text-xs">
                                    <p className="flex justify-between border-b border-gray-200 pb-2 mb-2"><span className="text-muted uppercase tracking-widest font-black text-[9px]">Email</span> <a href="mailto:Jainratnesh79@gmail.com" className="font-bold text-dark hover:text-primary transition-colors">Jainratnesh79@gmail.com</a></p>
                                    <p className="flex justify-between"><span className="text-muted uppercase tracking-widest font-black text-[9px]">Mob</span> <span className="font-bold text-dark">+91 7999525735</span></p>
                                </div>

                                <div className="mt-auto w-full pt-4">
                                    <a href="https://www.tmu.ac.in/nss-coordinator-desk" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[11px] font-black tracking-widest uppercase text-dark hover:text-primary transition-colors">
                                        <ArrowUpRight className="w-3.5 h-3.5" /> TMU Official Profile
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Executive Editor : Dr. Kalpna Jain */}
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="group">
                            <div className="h-full rounded-[3rem] overflow-hidden bg-surface border border-gray-100 p-10 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:border-secondary/20 hover:-translate-y-2 transition-all duration-700 relative">
                                <div className="absolute top-0 right-0 p-8 opacity-5"><Award className="w-24 h-24 text-secondary scale-150" /></div>
                                <div className="w-44 h-44 rounded-[2.5rem] overflow-hidden mb-8 border-4 border-white shadow-xl relative z-10 -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                    <img src="/dr kalpana jian.jpeg" alt="Dr. Kalpna Jain" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                                </div>
                                <span className="inline-block px-4 py-1.5 bg-secondary/10 rounded-full text-[10px] text-secondary font-black tracking-widest uppercase mb-4">Executive Editor</span>
                                <h3 className="text-3xl font-serif font-bold text-dark mb-2 group-hover:text-primary transition-colors duration-300">Dr. Kalpna Jain</h3>
                                <p className="text-muted text-[12px] font-bold uppercase tracking-wider mb-2">Principal / Assoc. Professor</p>
                                <p className="text-dark/40 text-[10px] uppercase font-black tracking-widest mb-6">Teerthanker Mahaveer University, Moradabad</p>
                                
                                <div className="w-full bg-warm-bg rounded-2xl p-4 mb-6 border border-gray-50 text-xs text-left">
                                    <p className="flex justify-between border-b border-gray-200 pb-2 mb-2"><span className="text-muted uppercase tracking-widest font-black text-[9px]">Email</span> <a href="mailto:Kalpnajain69@gmail.com" className="font-bold text-dark hover:text-primary transition-colors">Kalpnajain69@gmail.com</a></p>
                                    <p className="flex justify-between"><span className="text-muted uppercase tracking-widest font-black text-[9px]">Mob</span> <span className="font-bold text-dark">+91 9259283830</span></p>
                                </div>

                                <div className="mt-auto w-full pt-4">
                                    <a href="https://www.researchgate.net/profile/Dr-Jain-23" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[11px] font-black tracking-widest uppercase text-dark hover:text-primary transition-colors">
                                        <ArrowUpRight className="w-3.5 h-3.5" /> ResearchGate Profile
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── FEATURED AUTHORS ─── */}
            <section className="py-24 bg-warm-bg relative overflow-hidden">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <motion.div {...fadeInUp} className="flex items-center justify-center gap-4 mb-6">
                            <span className="h-px w-10 bg-secondary" />
                            <span className="text-secondary font-black text-[11px] uppercase tracking-[0.4em]">Author Corner</span>
                            <span className="h-px w-10 bg-secondary" />
                        </motion.div>
                        <motion.h2 {...fadeInUp} transition={{ delay: 0.1 }} className="text-4xl lg:text-5xl font-serif font-bold text-dark mb-6">
                            Our <span className="text-primary italic">Featured Authors</span>
                        </motion.h2>
                        <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-muted font-medium text-lg leading-relaxed">
                            Brilliant minds whose published works have shaped academic discourse across disciplines.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: 'Dr. Amit Sharma', field: 'Quantum Physics', books: '3 Published', img: '/fistudy-assets/team/team-1-2.jpg' },
                            { name: 'Prof. Ritu Verma', field: 'Behavioral Science', books: '5 Published', img: '/fistudy-assets/team/team-2-1.jpg' },
                            { name: 'Dr. Pradeep Kumar', field: 'Urban Studies', books: '2 Published', img: '/fistudy-assets/team/team-2-2.jpg' },
                            { name: 'Dr. Sunita Rao', field: 'Sustainability', books: '4 Published', img: '/fistudy-assets/team/team-1-1.jpg' },
                        ].map((author, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.7 }}
                                className="group p-8 bg-white rounded-[2rem] border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 text-center"
                            >
                                <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-6 border-2 border-white shadow-lg rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                    <img src={author.img} alt={author.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <span className="h-px w-4 bg-secondary" />
                                    <span className="text-secondary font-black text-[9px] uppercase tracking-[0.3em]">{author.field}</span>
                                </div>
                                <h3 className="text-lg font-serif font-bold text-dark mb-2 group-hover:text-primary transition-colors">{author.name}</h3>
                                <div className="flex items-center justify-center gap-2">
                                    <BookOpen className="w-3.5 h-3.5 text-primary/50" />
                                    <span className="text-muted text-[11px] font-bold uppercase tracking-widest">{author.books}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── ACADEMIC DOMAINS ─── */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-primary/2 rounded-full blur-[120px] -ml-96" />
                <div className="container-custom relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <motion.div {...fadeInUp} className="flex items-center justify-center gap-4 mb-6">
                            <span className="h-px w-10 bg-secondary" />
                            <span className="text-secondary font-black text-[11px] uppercase tracking-[0.4em]">Our Academic Scope</span>
                            <span className="h-px w-10 bg-secondary" />
                        </motion.div>
                        <motion.h2 {...fadeInUp} transition={{ delay: 0.1 }} className="text-4xl lg:text-5xl font-serif font-bold text-dark mb-6">
                            Explore <span className="text-primary italic">Intellectual Domains</span>
                        </motion.h2>
                        <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-muted font-medium text-lg leading-relaxed">
                            We publish books and papers across the full spectrum of modern and traditional scholarly inquiry.
                        </motion.p>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
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
                                className="group p-8 rounded-[2.5rem] bg-warm-bg border border-gray-100 hover:border-primary/20 hover:shadow-[0_20px_40px_rgba(79,119,255,0.08)] transition-all duration-500 flex flex-col items-center text-center"
                            >
                                <div className={`w-20 h-20 rounded-[1.75rem] ${cat.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm`}>
                                    <cat.icon className="w-9 h-9" />
                                </div>
                                <h3 className="font-bold text-dark text-base mb-2 px-2 group-hover:text-primary transition-colors tracking-tight leading-tight">{cat.name}</h3>
                                <div className="mt-auto pt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                    {cat.count} Publications
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ─── ACADEMIC IMPACT (Counters) ─── */}
            <section className="py-24 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {[
                            { icon: FileText, num: "500+", label: "Artifacts Published" },
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
                                <div className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter">{stat.num}</div>
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
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] relative">
                                <img src="/fistudy-assets/resources/research_library.png" alt="Premium Books" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[2.5rem] shadow-[0_30px_60px_rgba(79,119,255,0.12)] border border-gray-100"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <Award className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-3xl font-black text-dark tracking-tighter">Gold Standard</div>
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
                            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-dark leading-[1.15] mb-8">
                                Premium <span className="text-primary italic">Publishing Excellence</span> for Every Author
                            </h2>
                            <p className="text-muted font-medium text-lg leading-relaxed mb-12">
                                We deliver world-class book publishing services — from manuscript review and design to global distribution. Every title we publish carries the stamp of academic integrity and premium production quality.
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
            <section className="py-32 bg-warm-bg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] -mr-96 -mt-96" />
                <div className="container-custom relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-24">
                        <motion.div {...fadeInUp} className="flex items-center justify-center gap-4 mb-6">
                            <span className="h-px w-10 bg-secondary" />
                            <span className="text-secondary font-black text-[11px] uppercase tracking-[0.4em]">Publication Pipeline</span>
                            <span className="h-px w-10 bg-secondary" />
                        </motion.div>
                        <motion.h2 {...fadeInUp} transition={{ delay: 0.1 }} className="text-4xl lg:text-5xl font-serif font-bold text-dark mb-6">
                            The <span className="text-primary italic">Scholarly Journey</span>
                        </motion.h2>
                        <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-muted font-medium text-lg">
                            From your manuscript to a published masterpiece — a transparent, rigorous process.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                        <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
                        {[
                            { step: "01", title: "Manuscript Submission", desc: "Digital intake with initial ethics and originality validation.", icon: UploadCloud },
                            { step: "02", title: "Peer Review", desc: "Double-blind evaluation by distinguished domain experts.", icon: FileCheck },
                            { step: "03", title: "Refinement", desc: "Collaborative revision based on empirical rigor and expert feedback.", icon: RefreshCw },
                            { step: "04", title: "Publication & Archival", desc: "Final curation, DOI registration, global indexing, and shipping.", icon: Globe },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.8 }}
                                className="relative group p-10 flex flex-col items-center text-center"
                            >
                                <div className="z-10 w-28 h-28 rounded-full bg-white border border-gray-100 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-xl">
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-secondary text-white text-[10px] font-black px-3 py-1 rounded-full">{item.step}</div>
                                    <item.icon className="w-10 h-10 text-secondary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-lg font-serif font-bold text-dark mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-muted text-[13px] leading-relaxed font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── NEWSLETTER (Coral Red Banner) ─── */}
            <section className="py-16 bg-coral relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="container-custom relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-10 justify-between">
                        <div className="text-white text-center lg:text-left">
                            <p className="text-white/70 font-black text-[11px] uppercase tracking-[0.35em] mb-2 flex items-center gap-2 justify-center lg:justify-start">
                                <Send className="w-3.5 h-3.5" /> Stay Updated
                            </p>
                            <h3 className="text-3xl lg:text-4xl font-serif font-bold">Subscribe for New Releases & Launch Events</h3>
                        </div>
                        <div className="flex gap-3 flex-shrink-0 w-full lg:w-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address..."
                                className="flex-1 lg:w-72 px-6 py-4 rounded-2xl bg-white/15 border border-white/25 text-white placeholder-white/50 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all font-medium text-sm"
                            />
                            <button className="px-8 py-4 bg-white text-coral font-black rounded-2xl text-sm uppercase tracking-widest hover:shadow-2xl hover:-translate-y-0.5 transition-all shrink-0">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── TESTIMONIALS ─── */}
            <section className="py-32 bg-white">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-20">
                        <motion.div {...fadeInUp} className="flex items-center justify-center gap-4 mb-6">
                            <span className="h-px w-10 bg-secondary" />
                            <span className="text-secondary font-black text-[11px] uppercase tracking-[0.4em]">Voice of Scholars</span>
                            <span className="h-px w-10 bg-secondary" />
                        </motion.div>
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-dark">
                            What Our <span className="text-primary italic">Readers Say</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { name: "Dr. Amit Sharma", role: "Professor, IIT Delhi", text: "Sanmati's book publications are of exceptional quality. The peer-review process is rigorous and the editorial team is highly responsive.", img: "/fistudy-assets/team/team-1-2.jpg", stars: 5 },
                            { name: "Prof. Ritu Verma", role: "Researcher, JNU", text: "The multidisciplinary focus and premium hardcover quality make their publications stand out. I'd recommend to every academic author.", img: "/fistudy-assets/team/team-2-1.jpg", stars: 5 },
                            { name: "Dr. Pradeep Kumar", role: "Associate Professor, BHU", text: "From manuscript to final book, the journey was smooth and professional. The global distribution is a huge plus for visibility.", img: "/fistudy-assets/team/team-2-2.jpg", stars: 5 },
                        ].map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-10 rounded-[2.5rem] bg-warm-bg border border-gray-100 hover:shadow-2xl hover:border-primary/15 hover:-translate-y-1 transition-all duration-500 relative"
                            >
                                <Quote className="absolute top-10 right-10 w-16 h-16 text-primary/5 group-hover:text-primary/10 transition-colors" />
                                <div className="flex gap-1 mb-6">
                                    {[...Array(t.stars)].map((_, k) => (
                                        <Star key={k} className="w-4 h-4 fill-secondary text-secondary" />
                                    ))}
                                </div>
                                <p className="text-muted font-medium text-lg italic leading-relaxed mb-10 relative z-10">"{t.text}"</p>
                                <div className="flex items-center gap-5">
                                    <div className="w-14 h-14 rounded-2xl overflow-hidden bg-primary/10">
                                        <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-110 transition-all" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark text-base">{t.name}</h4>
                                        <p className="text-muted text-[10px] font-black uppercase tracking-widest">{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── INVITATION (CTA) ─── */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="relative rounded-[3.5rem] bg-gradient-to-br from-primary via-primary-dark to-[#0a0f2e] p-14 lg:p-24 overflow-hidden text-center shadow-[0_50px_100px_rgba(79,119,255,0.25)]">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-secondary/15 rounded-full blur-[100px]" />
                        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-coral/10 rounded-full blur-[100px]" />

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <span className="inline-block px-5 py-2 bg-white/8 border border-white/15 rounded-full text-[10px] text-secondary font-black tracking-[0.3em] uppercase mb-8">Ready for Publication</span>
                            <h2 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-10 leading-[1.1] tracking-tight">
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
