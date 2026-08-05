import { useRef } from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import {
    ArrowRight, BookOpen, Star, Globe, Award, ShieldCheck,
    Zap, FileText, Users, SendHorizonal, CheckCircle2, Download, Sparkles
} from 'lucide-react';

export default function Hero({ papers = [], currentIssue = null }) {
    const trustBadges = [
        "✓ ISSN Registered (3108-1819)",
        "✓ Peer Reviewed Journal",
        "✓ Open Access (CC-BY 4.0)",
        "✓ CrossRef DOI Assigned",
        "✓ Multidisciplinary Scope",
        "✓ Fast 15–30 Days Review"
    ];

    return (
        <section
            className="relative py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80 overflow-hidden"
            aria-label="Hero — Sanmati Spectrum Academic Journal"
        >
            {/* Soft Floating Background Glows */}
            <div className="absolute top-10 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column: Headlines & CTAs */}
                    <div className="lg:col-span-7 space-y-6">
                        
                        {/* Top Badge Strip */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-wrap items-center gap-2"
                        >
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
                                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                                ISSN 3108-1819 Registered
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                                <Award className="w-3.5 h-3.5 text-indigo-600" />
                                CrossRef DOI Indexed
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
                                <Star className="w-3.5 h-3.5 fill-current text-cyan-600" />
                                Impact Factor 5.3
                            </span>
                        </motion.div>

                        {/* Main H1 Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.12] tracking-tight"
                        >
                            Publish Your Research in an <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent italic">International Peer Reviewed Journal</span>
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl"
                        >
                            Publish high-quality multidisciplinary research with transparent peer review, DOI support, ISSN registration, and rapid publication.
                        </motion.p>

                        {/* Verified Trust Badges List */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2"
                        >
                            {trustBadges.map((badge, idx) => (
                                <div key={idx} className="flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-2xs">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                    <span>{badge.replace('✓ ', '')}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* Action CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <Link
                                href="/submission-guidelines/call-for-papers"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/25 active:scale-95 transition-all duration-200"
                            >
                                <SendHorizonal className="w-4 h-4" />
                                Submit Paper
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <a
                                href="/download/author-guidelines-template"
                                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs uppercase tracking-wider shadow-xs hover:border-slate-300 transition-all duration-200"
                            >
                                <Download className="w-4 h-4 text-blue-600" />
                                Download Template
                            </a>
                        </motion.div>

                    </div>

                    {/* Right Column: Platform Preview & Metrics Showcase Card */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden"
                        >
                            {/* Card Decorative Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

                            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div>
                                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">Official Publication</span>
                                    <h3 className="text-xl font-serif font-bold text-slate-900">Sanmati Spectrum</h3>
                                </div>
                                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-bold text-[10px] uppercase tracking-wider rounded-full border border-emerald-200">
                                    Open Access
                                </span>
                            </div>

                            {/* Quick Stats Grid inside card */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="p-3.5 bg-slate-50 border border-slate-100 rounded-2xl">
                                    <div className="text-2xl font-serif font-bold text-blue-600">3108-1819</div>
                                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">Online ISSN</div>
                                </div>
                                <div className="p-3.5 bg-slate-50 border border-slate-100 rounded-2xl">
                                    <div className="text-2xl font-serif font-bold text-indigo-600">15–30 Days</div>
                                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">Peer Review</div>
                                </div>
                                <div className="p-3.5 bg-slate-50 border border-slate-100 rounded-2xl">
                                    <div className="text-2xl font-serif font-bold text-cyan-600">500+</div>
                                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">Published Papers</div>
                                </div>
                                <div className="p-3.5 bg-slate-50 border border-slate-100 rounded-2xl">
                                    <div className="text-2xl font-serif font-bold text-emerald-600">CrossRef</div>
                                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">DOI Provider</div>
                                </div>
                            </div>

                            {/* Recent Featured Article Callout */}
                            {papers.length > 0 ? (
                                <div className="p-4 bg-blue-50/60 border border-blue-100 rounded-2xl space-y-1">
                                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-blue-700 uppercase tracking-wider">
                                        <Sparkles className="w-3 h-3 text-blue-600" /> Latest Featured Paper
                                    </div>
                                    <h4 className="text-xs font-bold text-slate-900 line-clamp-2 leading-snug">
                                        {papers[0].title}
                                    </h4>
                                    <p className="text-[11px] text-slate-500 font-medium">By {papers[0].authors}</p>
                                </div>
                            ) : null}

                            <div className="pt-2 text-center">
                                <Link
                                    href="/archive"
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider"
                                >
                                    Browse Complete Volume Archive <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
