import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FileText, Users, Globe, Clock, CheckCircle, TrendingUp, Star } from 'lucide-react';

function CountUp({ end, suffix = '', duration = 2000, decimal = false }) {
    const [val, setVal] = useState(end);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });

    useEffect(() => {
        if (!inView) return;
        let start = null;
        const step = (ts) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            const ease = 1 - Math.pow(1 - p, 4);
            setVal(decimal ? parseFloat((ease * end).toFixed(1)) : Math.floor(ease * end));
            if (p < 1) requestAnimationFrame(step);
            else setVal(end);
        };
        requestAnimationFrame(step);
    }, [inView, end, duration, decimal]);

    return <span ref={ref}>{val}{suffix}</span>;
}

const METRICS = [
    {
        icon: FileText,
        label: 'Papers Published',
        value: 93, suffix: '+',
        desc: 'Peer-reviewed research manuscripts.',
        color: 'bg-white border-[#E9E5DD] hover:border-primary',
        iconBg: 'bg-[#F7F4EC] text-primary',
    },
    {
        icon: Users,
        label: 'Contributing Authors',
        value: 200, suffix: '+',
        desc: 'Scholars from leading institutions.',
        color: 'bg-white border-[#E9E5DD] hover:border-primary',
        iconBg: 'bg-[#F7F4EC] text-[#C77D5B]',
    },
    {
        icon: Clock,
        label: 'Avg. Review Time',
        value: 21, suffix: ' Days',
        desc: 'Rigorous peer review timeline.',
        color: 'bg-white border-[#E9E5DD] hover:border-primary',
        iconBg: 'bg-[#F7F4EC] text-primary',
    },
    {
        icon: Globe,
        label: 'States Represented',
        value: 15, suffix: '+',
        desc: 'National and regional coverage.',
        color: 'bg-white border-[#E9E5DD] hover:border-primary',
        iconBg: 'bg-[#F7F4EC] text-primary',
    },
    {
        icon: Star,
        label: 'Impact Factor',
        value: 5.3, suffix: '',
        decimal: true,
        desc: 'Indexed academic citation score.',
        color: 'bg-white border-[#E9E5DD] hover:border-primary',
        iconBg: 'bg-[#F7F4EC] text-[#C77D5B]',
    },
    {
        icon: CheckCircle,
        label: 'Acceptance Rate',
        value: 42, suffix: '%',
        desc: 'Rigorously vetted submission process.',
        color: 'bg-white border-[#E9E5DD] hover:border-primary',
        iconBg: 'bg-[#F7F4EC] text-primary',
    },
];

export default function JournalMetricsDashboard() {
    return (
        <section className="py-16 bg-[#FFFDF8] border-b border-[#E9E5DD]" aria-labelledby="metrics-title">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider mb-3 mx-auto">
                        <TrendingUp className="w-3.5 h-3.5" />
                        Key Metrics
                    </div>
                    <h2 id="metrics-title" className="text-2xl md:text-3xl font-serif font-medium text-dark mb-4">
                        Publishing Impact Dashboard
                    </h2>
                    <p className="text-sm text-slate-500 font-medium max-w-md mx-auto">
                        Transparent, ethical publishing performance indicators showing speed, reach, and rigor.
                    </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {METRICS.map((m, i) => {
                        const Icon = m.icon;
                        return (
                            <motion.div
                                key={m.label}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className={`rounded-xl border p-5 ${m.color} hover:-translate-y-0.5 transition-all duration-200`}
                            >
                                <div className={`w-8 h-8 rounded border border-[#E9E5DD] flex items-center justify-center mb-4 text-xs font-bold ${m.iconBg}`}>
                                    <Icon className="w-4 h-4" />
                                </div>
                                <div className="text-2xl font-serif font-bold text-dark leading-none mb-2">
                                    <CountUp end={m.value} suffix={m.suffix} decimal={m.decimal} />
                                </div>
                                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 leading-snug">{m.label}</div>
                                <p className="text-[10px] text-slate-400 font-medium leading-relaxed">{m.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
