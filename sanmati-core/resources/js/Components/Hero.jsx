import { useState, useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';
import { motion, useInView } from 'framer-motion';
import {
    ArrowRight, SendHorizonal, Download, ShieldCheck, Award,
    Globe, Users, FileText, CheckCircle2, Sparkles, ChevronRight,
    BookOpen, Star
} from 'lucide-react';

/* ── Animated Counter ── */
function AnimatedCounter({ end, suffix = '', duration = 2000 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const step = end / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= end) { setCount(end); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [inView, end, duration]);

    return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/* ── Mesh/Grid Background ── */
function MeshBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/8 blur-[120px]" />
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-indigo-500/8 blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-400/6 blur-[80px]" />
            <div
                className="absolute inset-0 opacity-[0.018]"
                style={{
                    backgroundImage: `linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)`,
                    backgroundSize: '64px 64px',
                }}
            />
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-blue-400/25"
                    style={{ top: `${15 + i * 16}%`, left: `${8 + i * 14}%` }}
                    animate={{ y: [0, -12, 0], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
                />
            ))}
        </div>
    );
}

export default function Hero({ papers = [], currentIssue = null }) {
    const stats = [
        { label: 'Published Papers', value: 93, suffix: '+', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
        { label: 'Authors & Scholars', value: 200, suffix: '+', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-50' },
        { label: 'Countries Reached', value: 15, suffix: '+', icon: Globe, color: 'text-cyan-600', bg: 'bg-cyan-50' },
        { label: 'Max Review Days', value: 30, suffix: '', icon: Star, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    ];

    const badges = [
        { label: 'ISSN 3108-1819', icon: ShieldCheck, color: 'bg-blue-50 border-blue-200 text-blue-700' },
        { label: 'CrossRef DOI', icon: Award, color: 'bg-indigo-50 border-indigo-200 text-indigo-700' },
        { label: 'CC-BY 4.0 License', icon: Globe, color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
        { label: 'Double-Blind Review', icon: CheckCircle2, color: 'bg-cyan-50 border-cyan-200 text-cyan-700' },
    ];

    return (
        <section
            className="relative min-h-[90vh] flex items-center py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50/30 border-b border-slate-200/60"
            aria-label="Hero — Sanmati Spectrum of Knowledge"
        >
            <MeshBackground />

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-center">

                    {/* ── Left: Headline + CTAs ── */}
                    <div className="lg:col-span-7 space-y-8">

                        {/* Announcement Pill */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link
                                href="/submission-guidelines/call-for-papers"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-200 text-blue-700 text-xs font-bold hover:bg-blue-600/15 transition-colors group"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shrink-0" />
                                Now accepting submissions — Volume 2, Issue 3
                                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </motion.div>

                        {/* H1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="space-y-5"
                        >
                            <h1 className="text-4xl sm:text-5xl lg:text-[58px] xl:text-[64px] font-heading font-bold text-slate-900 leading-[1.08] tracking-tight">
                                Publish Research That
                                <br />
                                <span className="relative inline-block">
                                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                                        Creates Global Impact
                                    </span>
                                    <motion.span
                                        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
                                    />
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-xl">
                                Join researchers, academicians, and professionals publishing high-quality multidisciplinary research through a transparent, rigorous peer-review process.
                            </p>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-wrap gap-2"
                        >
                            {badges.map((badge, i) => {
                                const Icon = badge.icon;
                                return (
                                    <span
                                        key={i}
                                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[11px] font-bold uppercase tracking-wider ${badge.color}`}
                                    >
                                        <Icon className="w-3.5 h-3.5 shrink-0" />
                                        {badge.label}
                                    </span>
                                );
                            })}
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link
                                href="/submission-guidelines/call-for-papers"
                                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 hover:shadow-blue-700/35 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 group"
                            >
                                <SendHorizonal className="w-4 h-4" />
                                Submit Your Paper
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                            <Link
                                href="/current-issue"
                                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-800 font-bold text-sm tracking-wide shadow-sm hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
                            >
                                <BookOpen className="w-4 h-4 text-blue-600" />
                                Explore Current Issue
                            </Link>
                        </motion.div>

                        {/* Live Counters */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.55 }}
                            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 border-t border-slate-100"
                        >
                            {stats.map((stat, i) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={i} className="pt-4 text-center group">
                                        <div className={`inline-flex items-center justify-center w-9 h-9 rounded-xl ${stat.bg} ${stat.color} mb-2 group-hover:scale-110 transition-transform`}>
                                            <Icon className="w-4.5 h-4.5" />
                                        </div>
                                        <div className={`text-2xl font-heading font-bold ${stat.color}`}>
                                            <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                        </div>
                                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5 leading-snug">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* ── Right: Glassmorphism Journal Card ── */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.93, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            className="relative"
                        >
                            {/* Outer glow */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/12 via-indigo-600/8 to-cyan-500/8 rounded-[36px] blur-2xl" />

                            {/* Card */}
                            <div className="relative bg-white/92 backdrop-blur-xl border border-white/70 rounded-[28px] p-7 shadow-2xl shadow-blue-900/10 space-y-5 overflow-hidden">
                                {/* Decorative top-right glow */}
                                <div className="absolute top-0 right-0 w-64 h-48 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-[28px] pointer-events-none" />

                                {/* Card header */}
                                <div className="flex items-start justify-between relative">
                                    <div className="space-y-0.5">
                                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block">Official Publication</span>
                                        <h2 className="text-xl font-heading font-bold text-slate-900 leading-tight">
                                            Sanmati Spectrum
                                            <span className="text-slate-500 font-medium text-base"> of Knowledge</span>
                                        </h2>
                                        <p className="text-xs text-slate-400 font-medium">& Emerging Discourse</p>
                                    </div>
                                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                                        <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 font-bold text-[10px] uppercase tracking-wider rounded-full border border-emerald-200">Open Access</span>
                                        <span className="px-2.5 py-1 bg-blue-50 text-blue-700 font-bold text-[10px] uppercase tracking-wider rounded-full border border-blue-200">ISSN 3108-1819</span>
                                    </div>
                                </div>

                                {/* Stats grid */}
                                <div className="grid grid-cols-2 gap-2.5 relative">
                                    {[
                                        { label: 'Online ISSN', value: '3108-1819', color: 'text-blue-600' },
                                        { label: 'Peer Review Time', value: '15–30 Days', color: 'text-indigo-600' },
                                        { label: 'Published Papers', value: '93+', color: 'text-cyan-600' },
                                        { label: 'DOI Provider', value: 'CrossRef', color: 'text-emerald-600' },
                                    ].map((item, i) => (
                                        <div key={i} className="p-3.5 bg-slate-50/80 border border-slate-100 rounded-2xl hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all duration-200">
                                            <div className={`text-lg font-heading font-bold ${item.color}`}>{item.value}</div>
                                            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">{item.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Latest paper */}
                                {papers.length > 0 && (
                                    <div className="p-4 bg-gradient-to-br from-blue-50/80 to-indigo-50/40 border border-blue-100 rounded-2xl space-y-2">
                                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                                            <Sparkles className="w-3 h-3" />
                                            Latest Published Paper
                                        </div>
                                        <p className="text-xs font-bold text-slate-900 line-clamp-2 leading-snug">{papers[0].title}</p>
                                        <div className="flex items-center justify-between">
                                            <p className="text-[11px] text-slate-500 font-medium truncate pr-2">By {papers[0].authors}</p>
                                            <Link
                                                href={`/article/${papers[0].id}`}
                                                className="inline-flex items-center gap-0.5 text-[10px] font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider shrink-0"
                                            >
                                                Read <ArrowRight className="w-3 h-3" />
                                            </Link>
                                        </div>
                                    </div>
                                )}

                                {/* Archive CTA */}
                                <Link
                                    href="/archive"
                                    className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl border-2 border-dashed border-slate-200 text-xs font-bold text-slate-500 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 group"
                                >
                                    <BookOpen className="w-3.5 h-3.5" />
                                    Browse Complete Volume Archive
                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            </div>

                            {/* Floating badge */}
                            <motion.a
                                href="/download/author-guidelines-template"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.0, duration: 0.5 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="absolute -bottom-5 -left-5 flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-2xl shadow-xl text-xs font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-colors cursor-pointer"
                            >
                                <Download className="w-4 h-4 text-blue-600" />
                                Download Author Template
                            </motion.a>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
