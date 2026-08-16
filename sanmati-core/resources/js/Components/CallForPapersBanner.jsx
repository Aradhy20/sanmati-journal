import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
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
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-8 lg:p-12">
                    {/* Background decorations */}
                    <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-cyan-400/10 blur-2xl pointer-events-none" />

                    <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
                        {/* Text */}
                        <div className="lg:col-span-7 space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wider">
                                <CalendarDays className="w-3.5 h-3.5 text-cyan-300" />
                                Call for Papers — Volume 2, Issue 3
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white leading-tight">
                                Submissions Open for the Upcoming Scholarly Issue
                            </h2>

                            <p className="text-blue-100 text-base leading-relaxed max-w-xl">
                                We invite original research papers, review articles, and case studies across all academic disciplines. Fast 15–30 day peer review with CrossRef DOI assignment.
                            </p>

                            {/* Key points */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                                {[
                                    { label: 'Review Time', val: '15–30 Days' },
                                    { label: 'DOI Included', val: 'CrossRef DOI' },
                                    { label: 'Open Access', val: 'CC-BY 4.0' },
                                ].map((item, i) => (
                                    <div key={i} className="p-2.5 rounded-xl bg-white/10 border border-white/15">
                                        <div className="text-xs text-blue-200">{item.label}</div>
                                        <div className="text-sm font-bold text-white mt-0.5">{item.val}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Countdown + CTAs */}
                        <div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-6">
                            <div className="text-center lg:text-right">
                                <div className="text-xs font-bold text-blue-200 uppercase tracking-widest mb-3 flex items-center gap-1.5 justify-center lg:justify-end">
                                    <Clock className="w-3.5 h-3.5 text-cyan-300" /> Submission Window
                                </div>
                                <Countdown targetDate={deadline.toISOString()} />
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                                <Link
                                    href="/submission-guidelines/call-for-papers"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 shadow-lg shadow-black/10 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 group"
                                >
                                    <SendHorizonal className="w-4 h-4" />
                                    Submit Paper Now
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                </Link>

                                <Link
                                    href="/downloads"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-sm transition-all"
                                >
                                    <Download className="w-4 h-4" />
                                    Author Kit
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
