import { Link } from '@inertiajs/react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import React, { useEffect } from 'react';
import { ArrowRight, BookOpen, Users, Star, CheckCircle, BookMarked, Sparkles, Globe, Award, ShieldCheck, Microscope } from 'lucide-react';

const Hero = () => {
    // Elegant Mouse Tracking Spring System for Parallax Spotlight
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 40, stiffness: 200, mass: 1 };
    const spotlightX = useSpring(mouseX, springConfig);
    const spotlightY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const targetX = clientX - window.innerWidth / 2;
            const targetY = clientY - window.innerHeight / 2;
            mouseX.set(targetX * 0.15);
            mouseY.set(targetY * 0.15);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <section className="relative flex flex-col min-h-[100svh] overflow-hidden bg-[#030712] justify-center pt-24 transition-colors duration-500">
            {/* ── CINEMATIC VISUAL ENGINE (Background Mesh, Grids & Spotlight) ── */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* SVG Cyber Grid System */}
                <div 
                    className="absolute inset-0 opacity-[0.12] dark:opacity-[0.16] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]"
                    style={{
                        maskImage: 'radial-gradient(ellipse 60% 50% at 50% 10%, #000 60%, transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 10%, #000 60%, transparent 100%)'
                    }}
                />

                {/* Parallax Spotlight Aura */}
                <motion.div 
                    style={{ x: spotlightX, y: spotlightY }}
                    className="absolute top-[20%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-purple-600/10 rounded-full blur-[140px] mix-blend-screen"
                />

                {/* Animated Floating Gradients */}
                <motion.div 
                    animate={{ 
                        scale: [1, 1.15, 1],
                        rotate: [0, 45, 0],
                        x: [0, 20, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/4 right-[10%] w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[120px]"
                />
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, -45, 0],
                        x: [0, -30, 0],
                        y: [0, 40, 0]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-1/4 left-[5%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]"
                />
            </div>

            {/* Premium Dark Fallback Layer */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#030712] via-[#080e1b] to-[#030712] opacity-95 pointer-events-none" />

            {/* Main Content – Two-Column Split */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24 flex-grow flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* ── LEFT: Staggered Cinematic Presentation ── */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="lg:col-span-7 space-y-8"
                    >
                        {/* Immersive Floating Badge */}
                        <motion.div 
                            variants={itemVariants} 
                            className="inline-flex items-center gap-2.5 px-4.5 py-2 bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-full shadow-2xl transition-all duration-300"
                        >
                            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                            <span className="text-white font-black text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-sans">
                                ISSN: 3108-1819 · Peer-Reviewed Research
                            </span>
                        </motion.div>

                        {/* Hindi Divine Subheading */}
                        <motion.p variants={itemVariants} className="text-cyan-400 text-sm sm:text-base font-black tracking-widest uppercase font-sans">
                            ज्ञान, शोध और प्रकाशन का एक राष्ट्रीय एवं अन्तर्राष्ट्रीय मंच
                        </motion.p>

                        {/* Premium Immersive Headline */}
                        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black leading-[1.05] tracking-tight text-white">
                            Bridging Scholarly Rigor <br />
                            with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 font-serif italic">Global Discovery</span>
                        </motion.h1>

                        {/* Premium Narrative Left Border Anchor */}
                        <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl border-l-4 border-cyan-400 pl-6 font-medium">
                            Welcome to Sanmati Spectrum of Knowledge, India's premier multidisciplinary research platform. We empower authors with double-blind peer reviews, instant DOI activation, and open-access search indexing.
                        </motion.p>

                        {/* Interactive Dynamic Action Array */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap items-center gap-4 pt-4 max-w-xl">
                            <Link
                                href="/submission-guidelines/call-for-papers"
                                className="group w-full sm:w-auto justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white rounded-xl font-bold text-xs hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2.5 uppercase tracking-widest"
                            >
                                Submit Manuscript
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/archive"
                                className="group w-full sm:w-auto justify-center px-8 py-4 bg-white/[0.03] hover:bg-white/[0.07] backdrop-blur-xl text-white border border-white/10 rounded-xl font-bold text-xs hover:border-white/20 transition-all duration-300 flex items-center gap-2.5 hover:-translate-y-1 uppercase tracking-widest shadow-2xl"
                            >
                                <BookOpen className="w-4 h-4 text-cyan-400" /> Read Research
                            </Link>
                            <Link
                                href="/book-publication"
                                className="group w-full sm:w-auto justify-center px-8 py-4 bg-transparent text-slate-400 hover:text-white rounded-xl font-bold text-xs transition-colors flex items-center gap-2 uppercase tracking-widest"
                            >
                                <BookMarked className="w-4 h-4 text-purple-400" /> Explore Books
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* ── RIGHT: Goddess Saraswati Art with Futuristic Glassmorphic Overlays ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 relative hidden lg:block"
                    >
                        {/* Goddess Saraswati Container */}
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-white/[0.02] backdrop-blur-xl p-4 border border-white/10 group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            <img
                                src="/images/saraswati.jpeg"
                                alt="Goddess Saraswati — Symbol of Knowledge"
                                className="w-full aspect-square object-contain transition-transform duration-1000 group-hover:scale-102 rounded-[2.5rem] bg-white"
                                loading="eager"
                                fetchPriority="high"
                            />
                            {/* Floating bottom glass overlay */}
                            <div className="absolute bottom-8 left-8 right-8 p-6 bg-[#040814]/90 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl">
                                <div className="flex items-center gap-2.5 mb-2.5">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-cyan-400 text-[9px] font-black uppercase tracking-[0.25em] font-sans">Call For Papers Active</span>
                                </div>
                                <p className="text-white font-bold text-sm leading-snug">Quarterly Volume 38 (2026) is accepting submissions</p>
                            </div>
                        </div>

                        {/* Floating Active Scholars Glass Badge */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -top-6 -left-8 bg-[#040814]/95 backdrop-blur-2xl rounded-2xl shadow-2xl p-4.5 border border-white/10 z-10 flex items-center gap-3.5"
                        >
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center border border-white/5">
                                <Users className="w-5 h-5 text-cyan-400" />
                            </div>
                            <div>
                                <p className="text-xl font-black text-white leading-none">2,500+</p>
                                <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mt-1">Active Scholars</p>
                            </div>
                        </motion.div>

                        {/* Floating Impact Star Badge */}
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -bottom-4 -right-4 bg-[#040814]/95 backdrop-blur-2xl rounded-2xl shadow-2xl p-4.5 border border-white/10 z-10 flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 flex items-center justify-center border border-white/5">
                                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                            </div>
                            <div>
                                <p className="text-base font-black text-white leading-none font-serif italic">Double-Blind</p>
                                <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mt-1">Peer Review Standard</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Horizontal Trust Bar below the Hero Section */}
            <div className="relative w-full bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 py-8 shadow-2xl z-20 mt-auto transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                        {[
                            { icon: CheckCircle, label: 'Authenticated', value: 'ISSN: 3108-1819', color: 'text-blue-600 dark:text-blue-400' },
                            { icon: Award, label: 'Impact Factor', value: 'High Academic Score', color: 'text-purple-600 dark:text-purple-400' },
                            { icon: Users, label: 'Contributors', value: '250+ Researchers', color: 'text-cyan-600 dark:text-cyan-400' },
                            { icon: BookOpen, label: 'Publications', value: '550+ Papers Archived', color: 'text-emerald-500' },
                            { icon: Globe, label: 'Open Access', value: 'Google Scholar Indexed', color: 'text-blue-600 dark:text-blue-400' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4.5 group">
                                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-slate-100 dark:border-slate-700">
                                    <item.icon className={`w-5 h-5 flex-shrink-0 ${item.color}`} />
                                </div>
                                <div>
                                    <p className="text-slate-400 dark:text-slate-500 text-[9px] font-black uppercase tracking-[0.15em] leading-none mb-1">{item.label}</p>
                                    <p className="text-slate-800 dark:text-slate-200 text-xs sm:text-[13px] font-bold tracking-tight">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
