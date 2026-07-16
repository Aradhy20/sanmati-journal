import { useEffect, useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { motion, useInView } from 'framer-motion';
import {
    ArrowRight, Download, BookOpen, Star, Globe, Award, Shield,
    Zap, FileText, Users, TrendingUp, SendHorizonal, ChevronRight,
    CheckCircle, Clock, BarChart2
} from 'lucide-react';

/* ── Animated Counter Hook ── */
function useCounter(target, duration = 2000, start = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!start) return;
        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [target, duration, start]);
    return count;
}

/* ── Stat Card ── */
const StatBadge = ({ icon: Icon, value, label, suffix = '', color = 'primary' }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const num = typeof value === 'number' ? useCounter(value, 1800, inView) : null;

    const colors = {
        gold:    'from-amber-500/20 to-amber-600/10 border-amber-400/30 text-amber-300',
        emerald: 'from-emerald-500/20 to-emerald-600/10 border-emerald-400/30 text-emerald-300',
        blue:    'from-blue-500/20 to-blue-600/10 border-blue-400/30 text-blue-300',
        primary: 'from-white/10 to-white/5 border-white/20 text-white',
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-br border backdrop-blur-sm ${colors[color]}`}
        >
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4.5 h-4.5" />
            </div>
            <div>
                <div className="text-lg font-black leading-none font-serif">
                    {num !== null ? `${num}${suffix}` : value}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider opacity-70 mt-0.5">{label}</div>
            </div>
        </motion.div>
    );
};

/* ── Trust Pills ── */
const TRUST = [
    { icon: Shield,    text: 'Double-Blind Peer Review' },
    { icon: Award,     text: 'CrossRef DOI Indexed' },
    { icon: Globe,     text: 'Open Access Journal' },
    { icon: Zap,       text: '15–30 Days Review' },
];

/* ── Main Hero ── */
export default function Hero({ papers = [], currentIssue = null }) {
    const heroRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // Subtle parallax on mouse move
    useEffect(() => {
        const el = heroRef.current;
        if (!el) return;
        const onMove = (e) => {
            const rect = el.getBoundingClientRect();
            setMousePos({
                x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
                y: ((e.clientY - rect.top) / rect.height - 0.5) * 10,
            });
        };
        el.addEventListener('mousemove', onMove);
        return () => el.removeEventListener('mousemove', onMove);
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-[92vh] flex items-center overflow-hidden"
            aria-label="Hero — Sanmati Spectrum Research Journal"
            style={{ background: 'linear-gradient(150deg, #0B1F3A 0%, #0F2B50 40%, #0B1F3A 80%, #071628 100%)' }}
        >
            {/* ── Animated Background Mesh ── */}
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
                {/* Orbs */}
                <motion.div
                    animate={{ x: mousePos.x * 1.2, y: mousePos.y * 0.8 }}
                    transition={{ type: 'spring', stiffness: 40, damping: 20 }}
                    className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20"
                    style={{ background: 'radial-gradient(circle, rgba(139,108,48,0.6) 0%, transparent 70%)' }}
                />
                <motion.div
                    animate={{ x: mousePos.x * -0.8, y: mousePos.y * 1.2 }}
                    transition={{ type: 'spring', stiffness: 30, damping: 20 }}
                    className="absolute -bottom-48 -left-48 w-[700px] h-[700px] rounded-full opacity-15"
                    style={{ background: 'radial-gradient(circle, rgba(21,101,192,0.5) 0%, transparent 70%)' }}
                />
                <motion.div
                    animate={{ x: mousePos.x * 0.5, y: mousePos.y * 0.5 }}
                    transition={{ type: 'spring', stiffness: 20, damping: 20 }}
                    className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full opacity-8"
                    style={{ background: 'radial-gradient(circle, rgba(5,150,105,0.4) 0%, transparent 70%)' }}
                />

                {/* Grid overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
                />

                {/* Floating dots */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full bg-secondary/40"
                        style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 30}%` }}
                        animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }}
                        transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* ── Left: Main Content ── */}
                    <div className="space-y-8">
                        {/* Pre-headline Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-wrap items-center gap-3"
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-[11px] font-black uppercase tracking-[0.2em]">
                                <Star className="w-3 h-3 fill-current" />
                                Impact Factor 5.3
                            </span>
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-black uppercase tracking-[0.2em]">
                                <CheckCircle className="w-3 h-3" />
                                Open Access
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-white leading-[1.08] tracking-tight"
                        >
                            Advancing{' '}
                            <span
                                className="relative inline-block"
                                style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text', backgroundImage: 'linear-gradient(135deg, #c9973d 0%, #8b6c30 50%, #f0c060 100%)' }}
                            >
                                Research
                            </span>
                            <br />
                            Across Disciplines
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base md:text-lg text-white/65 leading-relaxed max-w-lg"
                        >
                            India's premier multidisciplinary peer-reviewed journal. Publish original research across Science, Humanities, Law, Education & Commerce — with CrossRef DOI indexing.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap gap-3"
                        >
                            <Link
                                href="/submission-guidelines/call-for-papers"
                                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-secondary text-white font-black text-sm hover:bg-secondary-dark hover:shadow-[0_16px_40px_rgba(139,108,48,0.45)] transition-all duration-300 group"
                            >
                                <SendHorizonal className="w-4 h-4" />
                                Submit Paper
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/archive"
                                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/10 text-white border border-white/20 font-bold text-sm hover:bg-white/18 hover:border-white/35 backdrop-blur-sm transition-all duration-300"
                            >
                                <BookOpen className="w-4 h-4" />
                                Browse Archive
                            </Link>
                        </motion.div>

                        {/* Trust Pills */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-wrap gap-2 pt-2"
                        >
                            {TRUST.map(({ icon: Icon, text }) => (
                                <span key={text} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 border border-white/12 text-[11px] text-white/65 font-medium backdrop-blur-sm">
                                    <Icon className="w-3 h-3 text-secondary flex-shrink-0" />
                                    {text}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* ── Right: Stats Panel ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-4"
                    >
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-3">
                            <StatBadge icon={FileText}   value={93}    suffix="+"   label="Papers Published" color="primary" />
                            <StatBadge icon={Users}      value={200}   suffix="+"   label="Contributing Authors" color="primary" />
                            <StatBadge icon={Globe}      value={15}    suffix="+"   label="States Represented" color="emerald" />
                            <StatBadge icon={Star}       value="5.3"               label="Impact Factor" color="gold" />
                        </div>

                        {/* Current Issue Card */}
                        <div className="rounded-2xl bg-white/8 border border-white/15 backdrop-blur-md p-5 space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-1">Current Issue</div>
                                    {currentIssue ? (
                                        <div className="text-sm font-bold text-white">
                                            Vol. {currentIssue.volume}, Issue {currentIssue.issue_number} · {currentIssue.year}
                                        </div>
                                    ) : (
                                        <div className="text-sm font-bold text-white">Vol. 2, Issue 2 · 2025</div>
                                    )}
                                </div>
                                <Link href="/archive" className="flex items-center gap-1 text-[11px] text-secondary hover:text-secondary-light transition-colors font-bold">
                                    View All <ChevronRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>

                            {/* Mini paper list */}
                            <div className="space-y-2">
                                {papers.slice(0, 3).map((paper, i) => (
                                    <Link
                                        key={paper.id}
                                        href={`/article/${paper.id}`}
                                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/8 transition-colors group"
                                    >
                                        <span className="w-6 h-6 rounded-lg bg-secondary/20 text-secondary text-[10px] font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                                            {i + 1}
                                        </span>
                                        <div className="min-w-0">
                                            <p className="text-[12px] text-white/80 font-medium line-clamp-2 group-hover:text-white transition-colors leading-snug">
                                                {paper.title}
                                            </p>
                                            <p className="text-[10px] text-white/40 mt-0.5 truncate">{paper.authors}</p>
                                        </div>
                                    </Link>
                                ))}
                                {papers.length === 0 && [1,2,3].map(i => (
                                    <div key={i} className="flex items-start gap-3 p-3">
                                        <div className="skeleton w-6 h-6 rounded-lg flex-shrink-0" />
                                        <div className="flex-1 space-y-1.5">
                                            <div className="skeleton h-3 rounded w-full" />
                                            <div className="skeleton h-3 rounded w-3/4" />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/archive"
                                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-white/15 text-xs text-white/60 font-bold hover:bg-white/8 hover:text-white transition-all duration-200"
                            >
                                View All Published Articles
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>

                        {/* ISSN Strip */}
                        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/10">
                            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                <BarChart2 className="w-4 h-4 text-blue-400" />
                            </div>
                            <div className="text-[11px] text-white/50 leading-snug">
                                <span className="text-white/80 font-bold">CrossRef DOI</span> assigned to every article ·{' '}
                                <span className="text-white/80 font-bold">ISSN 3108-1819</span> (Online)
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── Scroll Indicator ── */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                aria-hidden="true"
            >
                <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
                >
                    <div className="w-1 h-2 rounded-full bg-white/40" />
                </motion.div>
            </motion.div>
        </section>
    );
}
