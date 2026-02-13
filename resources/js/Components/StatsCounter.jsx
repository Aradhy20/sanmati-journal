import { useSpring, useTransform, useInView, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { GridPattern, GlassyBlob } from './Graphics';
import { BookOpen, Users, Clock, ShieldCheck, TrendingUp } from 'lucide-react';
import { DynamicCard } from './DynamicCard';

function CounterCard({ value, label, suffix = "", icon: Icon, gradient, delay }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const springValue = useSpring(0, { stiffness: 50, damping: 20, duration: 2 });
    const displayValue = useTransform(springValue, (current) => Math.round(current));
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (isInView) {
            springValue.set(value);
        }
    }, [isInView, value, springValue]);

    useEffect(() => {
        return displayValue.on("change", (latest) => setDisplay(latest));
    }, [displayValue]);

    const colorClass = gradient.split('-')[1];

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: delay }}
            className="h-full"
        >
            <DynamicCard gradient={gradient} className="h-full p-8 group">
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                        <div className={`p-4 rounded-2xl bg-${colorClass}-50 text-${colorClass}-600 group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-8 h-8" />
                        </div>
                        <div className="p-2 rounded-full bg-slate-50 group-hover:bg-white/80 transition-colors">
                            <TrendingUp className={`w-5 h-5 text-${colorClass}-500`} />
                        </div>
                    </div>

                    <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-black text-slate-900 tracking-tight">
                            {display}
                        </span>
                        <span className={`text-2xl font-bold text-${colorClass}-600`}>
                            {suffix}
                        </span>
                    </div>

                    <p className="mt-4 text-slate-500 font-bold uppercase tracking-widest text-xs group-hover:text-slate-700 transition-colors">
                        {label}
                    </p>
                </div>
            </DynamicCard>
        </motion.div>
    );
}

export default function StatsCounter() {
    const stats = [
        {
            value: 10,
            label: "Disciplines Covered",
            suffix: "+",
            icon: BookOpen,
            gradient: "from-blue-500 to-indigo-600"
        },
        {
            value: 25,
            label: "Expert Reviewers",
            suffix: "+",
            icon: Users,
            gradient: "from-purple-500 to-pink-600"
        },
        {
            value: 45,
            label: "Days to Decision",
            suffix: " Avg",
            icon: Clock,
            gradient: "from-amber-500 to-orange-600"
        },
        {
            value: 100,
            label: "Transparency",
            suffix: "%",
            icon: ShieldCheck,
            gradient: "from-emerald-500 to-teal-600"
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <GridPattern className="opacity-[0.03]" />
                <GlassyBlob className="top-0 left-1/4 w-96 h-96" color="bg-blue-100" />
                <GlassyBlob className="bottom-0 right-1/4 w-96 h-96" color="bg-purple-100" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <CounterCard
                            key={index}
                            {...stat}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
