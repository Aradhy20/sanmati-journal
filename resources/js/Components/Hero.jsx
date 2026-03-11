import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, CheckCircle, Clock } from 'lucide-react';

const slides = [
    {
        bg: '/fistudy-assets/backgrounds/slider-1-1.jpg',
        tagline: 'Peer-Reviewed Research Journal',
        title: 'Advance Knowledge.\nPublish With Impact.',
        sub: 'Sanmati Spectrum is a national multidisciplinary journal committed to publishing original, peer-reviewed research across sciences, humanities, and social disciplines.',
    },
    {
        bg: '/fistudy-assets/backgrounds/slider-1-2.jpg',
        tagline: 'Open Access & Indexed',
        title: 'Your Research.\nGlobal Reach.',
        sub: 'Submit your manuscript today and join a growing community of scholars who are shaping the academic conversation through high-quality, rigorous research.',
    },
    {
        bg: '/fistudy-assets/backgrounds/slider-1-3.jpg',
        tagline: 'Volume 1, Issue 1 — 2026',
        title: 'Submit Papers.\nShape the Future.',
        sub: 'We are now accepting original research papers, case studies and review articles across all academic disciplines for our inaugural issue.',
    },
];

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const [daysLeft, setDaysLeft] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const now = new Date();
        const eom = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        setDaysLeft(Math.ceil((eom - now) / (1000 * 60 * 60 * 24)));
    }, []);

    const slide = slides[current];

    return (
        <section className="relative min-h-[92vh] flex items-center overflow-hidden">
            {/* Slide backgrounds */}
            <AnimatePresence mode="sync">
                <motion.div
                    key={current}
                    className="absolute inset-0 z-0"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                >
                    <img
                        src={slide.bg}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/30" />
                </motion.div>
            </AnimatePresence>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 z-0 opacity-5"
                 style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            {/* Content */}
            <div className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-8 py-28 lg:py-36">
                <div className="max-w-3xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.7 }}
                        >
                            {/* Tagline */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-0.5 bg-secondary" />
                                <span className="text-secondary text-sm font-bold uppercase tracking-[0.25em]">
                                    {slide.tagline}
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.05] tracking-tight mb-6 whitespace-pre-line">
                                {slide.title}
                            </h1>

                            {/* Subtitle */}
                            <p className="text-lg text-white/65 font-light leading-relaxed mb-10 max-w-2xl">
                                {slide.sub}
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <Link
                                    href="/submission-guidelines/call-for-papers"
                                    className="group px-9 py-4 bg-secondary text-white rounded-full font-bold text-sm shadow-2xl shadow-secondary/30 hover:bg-secondary-dark transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 uppercase tracking-wider"
                                >
                                    Submit Manuscript
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/basic-info/about-journal"
                                    className="px-9 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-bold text-sm hover:bg-white/20 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 uppercase tracking-wider"
                                >
                                    <BookOpen className="w-4 h-4 text-white/70" /> Explore Journal
                                </Link>
                            </div>

                            {/* Trust bar */}
                            <div className="flex flex-wrap items-center gap-6">
                                <span className="inline-flex items-center gap-2 text-sm text-white/60">
                                    <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                                    ISSN: 3108-1819
                                </span>
                                <span className="inline-flex items-center gap-2 text-sm text-white/60">
                                    <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                                    Double-Blind Peer Review
                                </span>
                                <div className="inline-flex items-center gap-2 text-sm text-white/60">
                                    <Clock className="w-4 h-4 text-secondary shrink-0" />
                                    Closes in <span className="text-secondary font-bold ml-1">{daysLeft} days</span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-12 left-6 lg:left-8 flex gap-2 z-20">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-1 rounded-full transition-all duration-500 ${i === current ? 'w-10 bg-secondary' : 'w-4 bg-white/30 hover:bg-white/50'}`}
                            aria-label={`Slide ${i + 1}`}
                        />
                    ))}
                </div>

                {/* Editor Portraits — right side */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 z-10">
                    {[
                        { name: "Dr. Namrta Jain", role: "Editor-in-Chief", img: "/mam.jpg" },
                        { name: "Dr. Ratnesh Kumar", role: "Managing Editor", img: "/sir.jpg" },
                    ].map((ed, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + i * 0.2 }}
                            className="group flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/10 hover:bg-white/15 transition-all cursor-default"
                        >
                            <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-secondary/40 shrink-0">
                                <img src={ed.img} alt={ed.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="text-white text-xs font-bold">{ed.name}</p>
                                <p className="text-secondary text-[10px] font-semibold uppercase tracking-wider">{ed.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
