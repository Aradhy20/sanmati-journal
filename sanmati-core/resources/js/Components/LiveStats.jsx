import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { FileText, Users, Globe, Clock, BookOpen, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

function Counter({ end, suffix = '', prefix = '', duration = 2000 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });

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

    return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

export default function LiveStats({ metrics = null }) {
    const STATS = [
        {
            icon: FileText,
            value: metrics?.papers ?? 0, suffix: metrics?.papers > 0 ? '+' : '',
            label: 'Published Papers',
            desc: 'Research articles published across all volumes',
            color: 'from-blue-500 to-blue-600',
            bg: 'bg-blue-50',
            text: 'text-blue-600',
        },
        {
            icon: Users,
            value: metrics?.authors ?? 0, suffix: metrics?.authors > 0 ? '+' : '',
            label: 'Authors & Scholars',
            desc: 'Researchers who have published with us',
            color: 'from-indigo-500 to-indigo-600',
            bg: 'bg-indigo-50',
            text: 'text-indigo-600',
        },
        {
            icon: Globe,
            value: metrics?.papers > 0 ? 15 : 0, suffix: metrics?.papers > 0 ? '+' : '',
            label: 'Countries Reached',
            desc: 'Global reach across multiple continents',
            color: 'from-cyan-500 to-cyan-600',
            bg: 'bg-cyan-50',
            text: 'text-cyan-600',
        },
        {
            icon: Clock,
            value: 30, suffix: ' Days',
            label: 'Max Review Time',
            desc: 'Fast 15–30 day peer review turnaround',
            color: 'from-emerald-500 to-emerald-600',
            bg: 'bg-emerald-50',
            text: 'text-emerald-600',
        },
        {
            icon: BookOpen,
            value: metrics?.volumes ?? 0, suffix: '',
            label: 'Volumes Published',
            desc: 'Consistent publication since inception',
            color: 'from-violet-500 to-violet-600',
            bg: 'bg-violet-50',
            text: 'text-violet-600',
        },
        {
            icon: Award,
            value: 100, suffix: '%',
            label: 'Open Access',
            desc: 'All research freely accessible worldwide',
            color: 'from-amber-500 to-amber-600',
            bg: 'bg-amber-50',
            text: 'text-amber-600',
        },
    ];
    return (
        <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200/60" aria-labelledby="stats-heading">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-bold uppercase tracking-widest mb-4">
                        Live Platform Stats
                    </span>
                    <h2 id="stats-heading" className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 mb-3">
                        Growing Research Community
                    </h2>
                    <p className="text-slate-500 text-base max-w-xl mx-auto">
                        Real-time numbers reflecting our commitment to accelerating global research and knowledge dissemination.
                    </p>
                </motion.div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {STATS.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.5, delay: i * 0.07 }}
                                className="group p-5 bg-white border border-slate-100 rounded-2xl hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100/80 hover:-translate-y-1 transition-all duration-300 text-center"
                            >
                                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${stat.bg} ${stat.text} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div className={`text-3xl font-heading font-bold ${stat.text} leading-none mb-1.5`}>
                                    <Counter end={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-sm font-bold text-slate-800 mb-1">{stat.label}</div>
                                <div className="text-[11px] text-slate-400 leading-snug">{stat.desc}</div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
