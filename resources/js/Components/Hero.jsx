import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, CheckCircle, Clock } from 'lucide-react';

const Hero = () => {
    const [particles, setParticles] = useState([]);
    const [daysLeft, setDaysLeft] = useState(0);

    useEffect(() => {
        // Calculate days left for "Next Issue" (Dummy logic: end of current month)
        const now = new Date();
        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        const diffTime = Math.abs(endOfMonth - now);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        setDaysLeft(diffDays);

        const generateParticles = () => {
            setParticles(
                [...Array(20)].map(() => ({
                    x: Math.random() * 100 + "vw",
                    y: Math.random() * 100 + "vh",
                    scale: Math.random() * 0.5 + 0.5,
                    width: Math.random() * 4 + 2 + "px",
                    height: Math.random() * 4 + 2 + "px",
                    duration: Math.random() * 10 + 10,
                    animY: -(Math.random() * 50 + 50) + "vh",
                    delay: Math.random() * 5,
                }))
            );
        };

        requestAnimationFrame(() => {
            generateParticles();
        });
    }, []);

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-20 pb-16">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=2515&auto=format&fit=crop"
                    alt="Sanmati Library"
                    className="object-cover object-center w-full h-full opacity-40 mix-blend-overlay scale-110 animate-slow-zoom"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900/80 to-slate-900/95 z-10" />

            {/* Animated Particles */}
            <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
                {particles.map((p, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white rounded-full opacity-20"
                        initial={{
                            x: p.x,
                            y: p.y,
                            scale: p.scale,
                        }}
                        animate={{
                            y: [null, p.animY],
                            opacity: [0.2, 0],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: p.delay,
                        }}
                        style={{
                            width: p.width,
                            height: p.height,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                >
                    <div className="flex justify-center mb-8 relative">
                        {/* Glowing Ring behind Logo */}
                        <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full scale-150 animate-pulse" />

                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden bg-white relative z-10">
                            <img src="/logo.jpg" alt="Sanmati Journal Logo" className="w-full h-full object-contain p-2" />
                        </div>
                    </div>

                    {/* Trust/Credibility Badge */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-500/10 backdrop-blur-md text-blue-200 text-sm font-bold border border-blue-400/20 shadow-lg"
                        >
                            <CheckCircle className="w-4 h-4 text-blue-400" /> ISSN: 3108-1819
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-500/10 backdrop-blur-md text-emerald-200 text-sm font-bold border border-emerald-400/20 shadow-lg"
                        >
                            <CheckCircle className="w-4 h-4 text-emerald-400" /> Peer Reviewed
                        </motion.span>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-5 leading-tight tracking-tight">
                        Sanmati <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">Spectrum</span>
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl font-light text-slate-300 mb-6">
                        Accelerating Global Research & Discovery
                    </p>

                    <p className="text-sm md:text-base text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Join a premier multidisciplinary platform ensuring <span className="text-white font-semibold">fast-track review</span>, <span className="text-white font-semibold">global indexing</span>, and <span className="text-white font-semibold">academic excellence</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                        <Link
                            href="/submission-guidelines/call-for-papers"
                            className="group relative px-7 py-3.5 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-full font-bold text-sm hover:shadow-2xl hover:shadow-yellow-500/20 transition-all overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Submit Manuscript <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>

                        <Link
                            href="/basic-info/about-journal"
                            className="px-7 py-3.5 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-full font-medium text-sm hover:bg-white/10 hover:border-white/40 transition-all flex items-center gap-2"
                        >
                            Read Journal <BookOpen className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Urgency / Status Bar */}
                    <div className="inline-flex items-center gap-6 px-6 py-3 rounded-2xl bg-slate-800/50 backdrop-blur border border-white/10 text-sm text-slate-300">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            <span className="font-semibold text-emerald-400">Submissions Open</span>
                        </div>
                        <div className="w-px h-4 bg-white/10"></div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-orange-400" />
                            <span>Next Issue closes in <span className="text-white font-bold">{daysLeft} days</span></span>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
