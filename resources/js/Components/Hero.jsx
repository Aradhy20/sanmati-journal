import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Star, CheckCircle, BookMarked, Sparkles, Globe, Award } from 'lucide-react';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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
        <section className="relative flex flex-col min-h-[100svh] overflow-hidden bg-[#050B14] justify-center pt-24">
            {/* Background Image with Parallax & Soft Blurs */}
            <div 
                className="absolute inset-0 z-0 opacity-45 mix-blend-overlay scale-105 pointer-events-none"
                style={{ 
                    backgroundImage: 'url(/images/hero-bg.png)', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }} 
            />
            
            {/* Ambient Lighting / Floating Gradients */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '12s' }} />
            </div>

            {/* Premium Slate Overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050B14]/90 via-[#0a1222]/95 to-[#050B14]" />

            {/* Main Content – Two-Column Split */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24 flex-grow flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* ── LEFT: Text Content with Staggered Entrance ── */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="lg:col-span-7 space-y-8"
                    >
                        {/* Tagline Pill */}
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
                            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                            <span className="text-white font-black text-[10px] sm:text-[11px] uppercase tracking-[0.3em]">
                                ISSN: 3108-1819 · Peer-Reviewed Multidisciplinary Journal
                            </span>
                        </motion.div>

                        {/* Hindi Tagline */}
                        <motion.p variants={itemVariants} className="text-cyan-400 text-base sm:text-lg font-bold font-sans tracking-wide" lang="hi">
                            ज्ञान, शोध और प्रकाशन का एक राष्ट्रीय एवं अन्तर्राष्ट्रीय मंच
                        </motion.p>

                        {/* Main Premium Headline */}
                        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black leading-[1.1] tracking-tight text-white">
                            Bridging Scholarly Rigor with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Global Discovery</span>
                        </motion.h1>

                        {/* Description with Clean Left Border Accent */}
                        <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl border-l-4 border-cyan-500 pl-6 font-medium">
                            Welcome to Sanmati Spectrum of Knowledge, India's premier national multidisciplinary research platform. We empower authors with high-impact publishing, blind peer review, and global open-access indexing.
                        </motion.p>

                        {/* Premium CTA Buttons */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap items-center gap-4 pt-4 max-w-xl">
                            <Link
                                href="/submission-guidelines/call-for-papers"
                                className="group w-full sm:w-auto justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-xs hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-1 transition-all flex items-center gap-2.5 uppercase tracking-widest"
                            >
                                Submit Manuscript
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/archive"
                                className="group w-full sm:w-auto justify-center px-8 py-4 bg-white/5 backdrop-blur-md text-white border border-white/10 rounded-xl font-bold text-xs hover:bg-white/10 transition-all flex items-center gap-2.5 hover:-translate-y-1 uppercase tracking-widest shadow-lg"
                            >
                                <BookOpen className="w-4 h-4 text-cyan-400" /> Read Research
                            </Link>
                            <Link
                                href="/book-publication"
                                className="group w-full sm:w-auto justify-center px-8 py-4 bg-transparent text-slate-300 hover:text-white rounded-xl font-bold text-xs transition-all flex items-center gap-2 uppercase tracking-widest"
                            >
                                <BookMarked className="w-4 h-4" /> Explore Books
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* ── RIGHT: Goddess Saraswati Art with Glassmorphic Elements ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 relative hidden lg:block"
                    >
                        {/* Goddess Saraswati Image with premium border glow */}
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white/5 backdrop-blur-md p-3 border border-white/10 group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            <img
                                src="/images/saraswati.jpeg"
                                alt="Goddess Saraswati — Symbol of Knowledge"
                                className="w-full aspect-square object-contain transition-transform duration-1000 group-hover:scale-103 rounded-[2rem] bg-white"
                                loading="eager"
                            />
                            {/* Floating bottom glass overlay */}
                            <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#0c1322]/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl">
                                <div className="flex items-center gap-2.5 mb-2.5">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em]">Call For Papers Active</span>
                                </div>
                                <p className="text-white font-bold text-sm leading-snug">Quarterly Volume 38 (2026) is accepting submissions</p>
                            </div>
                        </div>

                        {/* Floating Active Readers Glass Badge */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -top-6 -left-8 bg-[#0c1322]/90 backdrop-blur-xl rounded-2xl shadow-2xl p-4.5 border border-white/10 z-10 flex items-center gap-3.5"
                        >
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center border border-white/5">
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
                            className="absolute -bottom-4 -right-4 bg-[#0c1322]/90 backdrop-blur-xl rounded-2xl shadow-2xl p-4.5 border border-white/10 z-10 flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 flex items-center justify-center border border-white/5">
                                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                            </div>
                            <div>
                                <p className="text-base font-black text-white leading-none">Double-Blind</p>
                                <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mt-1">Peer Review Standard</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Horizontal Trust Bar below the Hero Section */}
            <div className="relative w-full bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 py-6 shadow-md z-20 mt-auto">
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
