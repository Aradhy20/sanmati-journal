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
        <section className="relative flex flex-col min-h-[100svh] overflow-hidden bg-white justify-center pt-24 transition-colors duration-500">
            {/* ── EDITORIAL VISUAL ENGINE (Subtle Grid, Light Aura) ── */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Soft Grid Background */}
                <div 
                    className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:4rem_4rem]"
                    style={{
                        maskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, #000 60%, transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, #000 60%, transparent 100%)'
                    }}
                />

                {/* Soft Parallax Light Glows (Editorial Accents) */}
                <motion.div 
                    style={{ x: spotlightX, y: spotlightY }}
                    className="absolute top-[15%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]"
                />

                <motion.div 
                    animate={{ 
                        scale: [1, 1.1, 1],
                        y: [0, -20, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/4 right-[5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"
                />
            </div>

            {/* Clean Tonal Grounding */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-white to-slate-50/50 opacity-95 pointer-events-none" />

            {/* Main Content – Clean Editorial Two-Column Split */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24 flex-grow flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* ── LEFT: Staggered Content ── */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="lg:col-span-7 space-y-8"
                    >
                        {/* Distinguished Floating Badge */}
                        <motion.div 
                            variants={itemVariants} 
                            className="inline-flex items-center gap-2.5 px-4.5 py-2 bg-primary/5 backdrop-blur-md border border-primary/10 rounded-full shadow-sm transition-all duration-300"
                        >
                            <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
                            <span className="text-primary font-black text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-sans">
                                ISSN: 3108-1819 · National Multidisciplinary 
                            </span>
                        </motion.div>

                        {/* Hindi Subheading (Scholarship focus) */}
                        <motion.p variants={itemVariants} className="text-secondary text-sm sm:text-base font-black tracking-widest uppercase font-sans">
                            ज्ञान, शोध और प्रकाशन का एक राष्ट्रीय मंच
                        </motion.p>

                        {/* Sophisticated Serif Headline */}
                        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] tracking-tight text-primary">
                            Building a Global <br />
                            Research Community of <br />
                            <span className="text-secondary italic font-normal">Academic Rigor</span>
                        </motion.h1>

                        {/* Premium Narrative Anchor */}
                        <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl border-l-4 border-secondary/30 pl-6 font-medium">
                            India's premier platform empowering authors with double-blind peer reviews, instant DOI activation, and open-access indexing.
                        </motion.p>

                        {/* Action Array */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap items-center gap-4 pt-4 max-w-xl">
                            <Link
                                href="/submission-guidelines/call-for-papers"
                                className="group w-full sm:w-auto justify-center px-8 py-4 bg-primary text-white rounded-xl font-bold text-xs hover:shadow-2xl hover:bg-primary-dark hover:-translate-y-1 transition-all duration-300 flex items-center gap-2.5 uppercase tracking-widest shadow-lg shadow-primary/10"
                            >
                                Submit Manuscript
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/archive"
                                className="group w-full sm:w-auto justify-center px-8 py-4 bg-white border border-slate-200 text-primary rounded-xl font-bold text-xs hover:border-primary hover:bg-slate-50 transition-all duration-300 flex items-center gap-2.5 hover:-translate-y-1 uppercase tracking-widest shadow-sm"
                            >
                                <BookOpen className="w-4 h-4 text-secondary" /> Read Research
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* ── RIGHT: Goddess Saraswati Art w/ Sophisticated Styling ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="lg:col-span-5 relative hidden lg:block"
                    >
                        <div className="relative rounded-[3rem] overflow-hidden shadow-xl bg-white p-4 border border-slate-100 group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            <img
                                src="/images/saraswati.jpeg"
                                alt="Symbol of Knowledge"
                                className="w-full aspect-square object-contain transition-transform duration-1000 group-hover:scale-105 rounded-[2.5rem]"
                                loading="eager"
                                fetchPriority="high"
                            />
                            {/* Sophisticated Overlay */}
                            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-100 shadow-xl">
                                <div className="flex items-center gap-2.5 mb-2.5">
                                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                                    <span className="text-secondary text-[9px] font-black uppercase tracking-[0.25em] font-sans">Active Submissions</span>
                                </div>
                                <p className="text-primary font-bold text-sm leading-snug">Quarterly Volume 38 (2026) accepts manuscripts.</p>
                            </div>
                        </div>

                        {/* Tonal Impact Badges */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -top-6 -left-8 bg-white backdrop-blur-xl rounded-2xl shadow-lg p-4.5 border border-slate-100 z-10 flex items-center gap-3.5"
                        >
                            <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center">
                                <Users className="w-5 h-5 text-secondary" />
                            </div>
                            <div>
                                <p className="text-xl font-black text-primary leading-none">2,500+</p>
                                <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mt-1">Scholars</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -bottom-4 -right-4 bg-white backdrop-blur-xl rounded-2xl shadow-lg p-4.5 border border-slate-100 z-10 flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                                <Star className="w-5 h-5 text-amber-600 fill-amber-600" />
                            </div>
                            <div>
                                <p className="text-base font-bold text-primary leading-none font-serif italic">Double-Blind</p>
                                <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mt-1">Standard</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Clean Trust Bar */}
            <div className="relative w-full bg-slate-50 border-t border-slate-100 py-8 shadow-sm z-20 mt-auto transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                        {[
                            { icon: CheckCircle, label: 'Authenticated', value: 'ISSN: 3108-1819', color: 'text-secondary' },
                            { icon: Award, label: 'Impact Factor', value: 'High Score', color: 'text-primary' },
                            { icon: Users, label: 'Contributors', value: '250+ Researchers', color: 'text-secondary' },
                            { icon: BookOpen, label: 'Publications', value: '550+ Papers', color: 'text-emerald-600' },
                            { icon: Globe, label: 'Open Access', value: 'Indexed', color: 'text-secondary' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4.5 group">
                                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm border border-slate-100">
                                    <item.icon className={`w-5 h-5 flex-shrink-0 ${item.color}`} />
                                </div>
                                <div>
                                    <p className="text-slate-500 text-[9px] font-black uppercase tracking-[0.15em] leading-none mb-1">{item.label}</p>
                                    <p className="text-primary text-xs sm:text-[13px] font-bold tracking-tight">{item.value}</p>
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
