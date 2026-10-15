import { useState, useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';
import {
    ArrowRight, SendHorizonal, Download, ShieldCheck, Award,
    Globe, Users, FileText, CheckCircle2, Sparkles, ChevronRight,
    BookOpen, Star
} from 'lucide-react';

/* ── Hero CSS Animations (replaces framer-motion for decorative elements) ── */
const heroParticleStyle = (index) => ({
    position: 'absolute',
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: 'rgba(59,130,246,0.3)',
    top: `${18 + index * 20}%`,
    left: `${10 + index * 22}%`,
    animation: `heroFloat ${3.5 + index * 0.5}s ease-in-out ${index * 0.4}s infinite`,
    pointerEvents: 'none',
});

const heroBadgeStyle = {
    animation: 'heroSlideIn 0.5s ease-out 1.0s both',
};

/* ── Animated Counter ── */
function AnimatedCounter({ end, suffix = '', duration = 2000 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (typeof IntersectionObserver === 'undefined' || !ref.current) {
            setInView(true);
            return;
        }
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                observer.disconnect();
            }
        }, { rootMargin: '-40px' });

        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const step = Math.max(1, end / (duration / 16));
        const timer = setInterval(() => {
            start += step;
            if (start >= end) { setCount(end); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [inView, end, duration]);

    return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/* ── Scholarly Hero Background ── */
function MeshBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {/* Ambient Academic Glows */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[130px]" />
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[110px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-400/8 blur-[90px]" />

            {/* Subtle Academic Grid Texture */}
            <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: `linear-gradient(#1E3A8A 1px, transparent 1px), linear-gradient(90deg, #1E3A8A 1px, transparent 1px)`,
                    backgroundSize: '48px 48px',
                }}
            />

            {[...Array(4)].map((_, i) => (
                <div
                    key={i}
                    aria-hidden="true"
                    style={heroParticleStyle(i)}
                />
            ))}
        </div>
    );
}

export default function Hero({ papers = [], currentIssue = null, metrics = null }) {
    const stats = [
        { label: 'Published Papers', value: metrics?.papers ?? 0, suffix: metrics?.papers > 0 ? '+' : '', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
        { label: 'Authors & Scholars', value: metrics?.authors ?? 0, suffix: metrics?.authors > 0 ? '+' : '', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-50' },
        { label: 'Countries Reached', value: metrics?.papers > 0 ? 15 : 0, suffix: metrics?.papers > 0 ? '+' : '', icon: Globe, color: 'text-cyan-600', bg: 'bg-cyan-50' },
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
            className="relative min-h-[90vh] flex items-center py-12 sm:py-16 lg:py-24 xl:py-28 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50/30 border-b border-slate-200/60"
            aria-label="Hero — Sanmati Spectrum of Knowledge"
        >
            <MeshBackground />

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full overflow-hidden">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">

                    {/* ── Left: Headline + CTAs ── */}
                    <div className="lg:col-span-7 space-y-6 sm:space-y-8 min-w-0">

                        {/* Announcement Pill */}
                        <div className="max-w-full">
                            <Link
                                href="/submission-guidelines/call-for-papers"
                                className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-600/10 border border-blue-200 text-blue-700 text-[11px] sm:text-xs font-bold hover:bg-blue-600/15 transition-colors group max-w-full"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shrink-0" />
                                <span className="truncate">Now accepting submissions — Volume 2, Issue 3</span>
                                <ChevronRight className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </div>

                        {/* H1 - Responsive Typography */}
                        <div className="space-y-4 sm:space-y-5 min-w-0">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[62px] font-heading font-bold text-slate-900 leading-[1.12] sm:leading-[1.08] tracking-tight break-words">
                                Publish Research That
                                <br />
                                <span className="relative inline-block max-w-full mt-1">
                                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent break-words">
                                        Creates Global Impact
                                    </span>
                                    <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
                                </span>
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 font-medium leading-relaxed max-w-xl break-words">
                                Join researchers, academicians, and professionals publishing high-quality multidisciplinary research through a transparent, rigorous peer-review process.
                            </p>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 max-w-full">
                            {badges.map((badge, i) => {
                                const Icon = badge.icon;
                                return (
                                    <span
                                        key={i}
                                        className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shrink-0 ${badge.color}`}
                                    >
                                        <Icon className="w-3 sm:w-3.5 h-3 sm:h-3.5 shrink-0" />
                                        {badge.label}
                                    </span>
                                );
                            })}
                        </div>

                        {/* CTAs - Stack on mobile, inline on tablet/desktop */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                            <Link
                                href="/submission-guidelines/call-for-papers"
                                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 hover:shadow-blue-700/35 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 group text-center"
                            >
                                <SendHorizonal className="w-4 h-4 shrink-0" />
                                <span>Submit Your Paper</span>
                                <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                            <Link
                                href="/current-issue"
                                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-800 font-bold text-sm tracking-wide shadow-sm hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 text-center"
                            >
                                <BookOpen className="w-4 h-4 shrink-0 text-blue-600" />
                                <span>Explore Current Issue</span>
                            </Link>
                        </div>

                        {/* Special Issue Quick Access Link */}
                        <div className="pt-1">
                            <Link
                                href="/special-issue"
                                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-indigo-50/90 hover:bg-indigo-100/90 border border-indigo-200/80 text-indigo-800 text-xs font-bold transition-all group"
                            >
                                <Sparkles className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                                <span>Explore Dedicated Special Issue (31 Articles)</span>
                                <ArrowRight className="w-3 h-3 text-indigo-600 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </div>

                        {/* Live Counters */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2 border-t border-slate-100">
                            {stats.map((stat, i) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={i} className="pt-3 sm:pt-4 text-center group min-w-0">
                                        <div className={`inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl ${stat.bg} ${stat.color} mb-1.5 sm:mb-2 group-hover:scale-110 transition-transform`}>
                                            <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                                        </div>
                                        <div className={`text-xl sm:text-2xl font-heading font-bold ${stat.color}`}>
                                            <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                        </div>
                                        <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5 leading-snug break-words">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* ── Right: Glassmorphism Journal Card ── */}
                    <div className="lg:col-span-5 min-w-0">
                        <div className="relative">
                            {/* Outer glow - constrained to avoid mobile overflow */}
                            <div className="absolute inset-0 sm:-inset-4 bg-gradient-to-br from-blue-600/12 via-indigo-600/8 to-cyan-500/8 rounded-[36px] blur-2xl pointer-events-none" />

                            {/* Card */}
                            <div className="relative bg-white/92 backdrop-blur-xl border border-white/70 rounded-[28px] p-5 sm:p-7 shadow-2xl shadow-blue-900/10 space-y-4 sm:space-y-5 overflow-hidden">
                                {/* Decorative top-right glow */}
                                <div className="absolute top-0 right-0 w-64 h-48 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-[28px] pointer-events-none" />

                                {/* Card header */}
                                <div className="flex flex-col min-[380px]:flex-row items-start justify-between gap-2 relative">
                                    <div className="space-y-0.5 min-w-0">
                                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block">Official Publication</span>
                                        <h2 className="text-lg sm:text-xl font-heading font-bold text-slate-900 leading-tight">
                                            Sanmati Spectrum
                                            <span className="text-slate-500 font-medium text-sm sm:text-base"> of Knowledge</span>
                                        </h2>
                                        <p className="text-xs text-slate-400 font-medium">& Emerging Discourse</p>
                                    </div>
                                    <div className="flex flex-row min-[380px]:flex-col items-start min-[380px]:items-end gap-1.5 shrink-0 flex-wrap">
                                        <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-emerald-50 text-emerald-700 font-bold text-[9px] sm:text-[10px] uppercase tracking-wider rounded-full border border-emerald-200">Open Access</span>
                                        <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-blue-50 text-blue-700 font-bold text-[9px] sm:text-[10px] uppercase tracking-wider rounded-full border border-blue-200">ISSN 3108-1819</span>
                                    </div>
                                </div>

                                {/* Stats grid */}
                                <div className="grid grid-cols-2 gap-2 sm:gap-2.5 relative">
                                    {[
                                        { label: 'Online ISSN', value: '3108-1819', color: 'text-blue-600' },
                                        { label: 'Peer Review Time', value: '15–30 Days', color: 'text-indigo-600' },
                                        { label: 'Published Papers', value: (metrics?.papers ? `${metrics.papers}+` : '0+'), color: 'text-cyan-600' },
                                        { label: 'DOI Provider', value: 'CrossRef', color: 'text-emerald-600' },
                                    ].map((item, i) => (
                                        <div key={i} className="p-3 sm:p-3.5 bg-slate-50/80 border border-slate-100 rounded-2xl hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all duration-200 min-w-0">
                                            <div className={`text-base sm:text-lg font-heading font-bold ${item.color} truncate`}>{item.value}</div>
                                            <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5 leading-tight">{item.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Latest paper */}
                                {papers.length > 0 && (
                                    <div className="p-3.5 sm:p-4 bg-gradient-to-br from-blue-50/80 to-indigo-50/40 border border-blue-100 rounded-2xl space-y-1.5 sm:space-y-2">
                                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                                            <Sparkles className="w-3 h-3 shrink-0" />
                                            Latest Published Paper
                                        </div>
                                        <p className="text-xs font-bold text-slate-900 line-clamp-2 leading-snug">{papers[0].title}</p>
                                        <div className="flex items-center justify-between gap-2">
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
                                    className="flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 rounded-2xl border-2 border-dashed border-slate-200 text-xs font-bold text-slate-500 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 group text-center"
                                >
                                    <BookOpen className="w-3.5 h-3.5 shrink-0" />
                                    <span className="truncate">Browse Complete Volume Archive</span>
                                    <ArrowRight className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            </div>

                            {/* Floating badge */}
                            <div className="mt-3 sm:mt-0 sm:absolute sm:-bottom-5 sm:-left-5">
                                <a
                                    href="/download/author-guidelines-template"
                                    style={heroBadgeStyle}
                                    className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-200 rounded-2xl shadow-md sm:shadow-xl text-xs font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600 hover:scale-105 transition-all cursor-pointer max-w-full"
                                >
                                    <Download className="w-4 h-4 text-blue-600 shrink-0" />
                                    <span className="truncate">Download Author Template</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
