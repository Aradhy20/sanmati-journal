import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { SendHorizonal, Clock, ArrowRight, Download, CalendarDays } from 'lucide-react';

function Countdown({ targetDate }) {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

    useEffect(() => {
        const calc = () => {
            const diff = new Date(targetDate) - new Date();
            if (diff <= 0) return;
            setTimeLeft({
                days: Math.floor(diff / 86400000),
                hours: Math.floor((diff % 86400000) / 3600000),
                mins: Math.floor((diff % 3600000) / 60000),
                secs: Math.floor((diff % 60000) / 1000),
            });
        };
        calc();
        const timer = setInterval(calc, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="flex items-center gap-3" aria-label="Countdown timer">
            {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hrs' },
                { value: timeLeft.mins, label: 'Min' },
                { value: timeLeft.secs, label: 'Sec' },
            ].map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center min-w-[52px]">
                    <div className="text-2xl font-heading font-bold text-white bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-2 min-w-[52px] text-center tabular-nums">
                        {String(value).padStart(2, '0')}
                    </div>
                    <span className="text-[10px] font-bold text-blue-200 uppercase tracking-widest mt-1">{label}</span>
                </div>
            ))}
        </div>
    );
}

export default function CallForPapersBanner() {
    // Deadline: end of current quarter — adjust as needed
    const deadline = new Date();
    deadline.setMonth(deadline.getMonth() + 2);
    deadline.setDate(28);

    return (
        <section className="py-12 relative overflow-hidden" aria-label="Call for papers">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                    className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-8 lg:p-12"
                >
                    {/* Background decorations */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
                    <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-indigo-900/30 rounded-full blur-2xl pointer-events-none" aria-hidden="true" />
                    <div
                        className="absolute inset-0 opacity-[0.05]"
                        style={{
                            backgroundImage: `radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)`,
                            backgroundSize: '28px 28px',
                        }}
                        aria-hidden="true"
                    />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">

                        {/* Left content */}
                        <div className="text-center lg:text-left space-y-4 max-w-lg">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-[11px] font-bold uppercase tracking-widest">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Now Open — Volume 2, Issue 3
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white leading-tight">
                                Submit Your Research<br />for the Next Issue
                            </h2>
                            <p className="text-blue-100 text-base leading-relaxed">
                                We invite original research articles, review papers, and case studies from all multidisciplinary domains. Peer review in 15–30 days.
                            </p>

                            {/* Deadline */}
                            <div className="flex items-center gap-2 text-sm text-blue-200 font-bold">
                                <CalendarDays className="w-4 h-4" />
                                Submission deadline: {deadline.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                                <Link
                                    href="/submission-guidelines/call-for-papers"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-blue-900/20 group"
                                >
                                    <SendHorizonal className="w-4 h-4" />
                                    Submit Paper
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                                <a
                                    href="/download/author-guidelines-template"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white font-bold text-sm hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200"
                                >
                                    <Download className="w-4 h-4" />
                                    Download Template
                                </a>
                            </div>
                        </div>

                        {/* Right: Countdown */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center gap-2 text-blue-200 text-xs font-bold uppercase tracking-widest">
                                <Clock className="w-4 h-4" />
                                Deadline Countdown
                            </div>
                            <Countdown targetDate={deadline.toISOString()} />
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
