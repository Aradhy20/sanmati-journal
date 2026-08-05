import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Send, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function CallForPapersBanner() {
    const [timeLeft, setTimeLeft] = useState({ days: 14, hours: 8, minutes: 42, seconds: 15 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950 text-white relative overflow-hidden">
            {/* Ambient Lighting Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    
                    {/* Left Copy & Benefits */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                            <Calendar className="w-4 h-4 text-cyan-300" /> Call for Papers — Volume 1, Issue 1 (2026)
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight tracking-tight">
                            Publish Your Research in an <span className="text-cyan-400 italic">International Journal</span>
                        </h2>

                        <p className="text-sm md:text-base text-slate-300 leading-relaxed font-medium max-w-xl">
                            Inviting high-quality original research papers, empirical studies, and academic review articles for forthcoming publication. Fast double-blind peer review with CrossRef DOI registration.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            {[
                                "15–30 Days Rapid Peer Review",
                                "CrossRef DOI Registration",
                                "Online ISSN 3108-1819 Indexed",
                                "100% Open Access (CC-BY 4.0)",
                                "UGC Care Guideline Aligned",
                                "Author Certificate Issued"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-200">
                                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4 flex flex-wrap gap-4">
                            <Link
                                href="/submission-guidelines/call-for-papers"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-blue-600/30 transition-all duration-200"
                            >
                                <Send className="w-4 h-4" /> Submit Paper Online <ArrowRight className="w-4 h-4" />
                            </Link>
                            <a
                                href="mailto:sanmatijournal@gmail.com"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200"
                            >
                                Submit via Email
                            </a>
                        </div>
                    </div>

                    {/* Right Countdown Box */}
                    <div className="lg:col-span-5">
                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl text-center space-y-6 shadow-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-400/30 text-amber-300 rounded-full text-xs font-bold uppercase tracking-wider">
                                <Clock className="w-3.5 h-3.5" /> Upcoming Submission Deadline
                            </div>

                            <h3 className="text-xl font-serif font-bold text-white">Manuscript Submission Closing</h3>

                            {/* Timer Grid */}
                            <div className="grid grid-cols-4 gap-3">
                                {[
                                    { label: 'Days', val: timeLeft.days },
                                    { label: 'Hours', val: timeLeft.hours },
                                    { label: 'Mins', val: timeLeft.minutes },
                                    { label: 'Secs', val: timeLeft.seconds }
                                ].map((unit, i) => (
                                    <div key={i} className="bg-slate-900/80 border border-slate-700 p-3 rounded-2xl">
                                        <div className="text-2xl md:text-3xl font-serif font-bold text-cyan-300">
                                            {String(unit.val).padStart(2, '0')}
                                        </div>
                                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">
                                            {unit.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-2 text-xs text-slate-300 font-medium leading-relaxed border-t border-white/10">
                                <p>First Editorial Decision: <strong className="text-white font-bold">15–30 Days</strong></p>
                                <p className="text-[11px] text-slate-400 mt-0.5">Email Queries: sanmatijournal@gmail.com</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
