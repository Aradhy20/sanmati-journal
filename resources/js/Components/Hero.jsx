import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';

const Hero = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
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
        <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=2515&auto=format&fit=crop"
                    alt="Sanmati Library"
                    className="object-cover object-center w-full h-full opacity-60 mix-blend-overlay scale-110 animate-slow-zoom"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-900/90 z-10" />

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

                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden bg-white relative z-10">
                            <img src="/logo.jpg" alt="Sanmati Journal Logo" className="w-full h-full object-contain p-2" />
                        </div>
                    </div>

                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md text-blue-200 text-sm font-medium mb-8 border border-white/20 shadow-lg"
                    >
                        ISSN: 3108-1819 | Peer Reviewed & Refereed
                    </motion.span>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
                        Sanmati <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">Spectrum</span> <br />
                        <span className="text-3xl md:text-5xl lg:text-6xl font-light text-slate-300">of Knowledge & Emerging Discourse</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed border-t border-white/10 pt-8 mt-8">
                        A National Multidisciplinary Peer Reviewed Refereed Journal
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link
                            href="/submission-guidelines/call-for-papers"
                            className="group relative px-8 py-4 bg-yellow-500 text-slate-900 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Submit Manuscript <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>

                        <Link
                            href="/basic-info/about-journal"
                            className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-full font-medium text-lg hover:bg-white/10 hover:border-white/40 transition-all flex items-center gap-2"
                        >
                            Read Journal <BookOpen className="w-5 h-5" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
