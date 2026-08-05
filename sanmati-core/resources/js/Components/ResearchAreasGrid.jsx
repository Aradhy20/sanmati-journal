import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import {
    FlaskConical, Cpu, Scale, BookOpen, Users, Globe,
    Landmark, Briefcase, GraduationCap, Heart, Leaf, Music,
    ChevronRight
} from 'lucide-react';

const AREAS = [
    { name: 'Science & Technology', icon: FlaskConical, count: 'Research papers', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100', href: '/submission-guidelines/areas' },
    { name: 'Engineering & IT',     icon: Cpu,           count: 'Research papers', color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-100', href: '/submission-guidelines/areas' },
    { name: 'Law & Legal Studies',  icon: Scale,         count: 'Research papers', color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-100', href: '/submission-guidelines/areas' },
    { name: 'Arts & Humanities',    icon: BookOpen,      count: 'Research papers', color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-100', href: '/submission-guidelines/areas' },
    { name: 'Social Sciences',      icon: Users,         count: 'Research papers', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100', href: '/submission-guidelines/areas' },
    { name: 'International Studies',icon: Globe,         count: 'Research papers', color: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-100', href: '/submission-guidelines/areas' },
    { name: 'Political Science',    icon: Landmark,      count: 'Research papers', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100', href: '/submission-guidelines/areas' },
    { name: 'Commerce & Business',  icon: Briefcase,     count: 'Research papers', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100', href: '/submission-guidelines/areas' },
    { name: 'Education',            icon: GraduationCap, count: 'Research papers', color: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-100', href: '/submission-guidelines/areas' },
    { name: 'Medical & Health',     icon: Heart,         count: 'Research papers', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-100', href: '/submission-guidelines/areas' },
    { name: 'Environmental Sciences', icon: Leaf,        count: 'Research papers', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-100', href: '/submission-guidelines/areas' },
    { name: 'Literature & Culture', icon: Music,         count: 'Research papers', color: 'text-pink-600', bg: 'bg-pink-50', border: 'border-pink-100', href: '/submission-guidelines/areas' },
];

export default function ResearchAreasGrid() {
    return (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200/60" aria-labelledby="areas-heading">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-bold uppercase tracking-widest mb-4">
                        Research Domains
                    </span>
                    <h2 id="areas-heading" className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 mb-3">
                        Multidisciplinary Research
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Categories</span>
                    </h2>
                    <p className="text-slate-500 text-base max-w-xl mx-auto">
                        We welcome research from 20+ disciplines. If your field is not listed, contact us — we consider all areas of scholarly inquiry.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {AREAS.map((area, i) => {
                        const Icon = area.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: '-30px' }}
                                transition={{ duration: 0.35, delay: i * 0.04 }}
                            >
                                <Link
                                    href={area.href}
                                    className={`group flex flex-col items-center text-center p-5 rounded-2xl border ${area.border} ${area.bg} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 block`}
                                >
                                    <div className={`w-12 h-12 rounded-2xl bg-white/80 flex items-center justify-center ${area.color} mb-3 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className={`text-xs font-bold leading-snug ${area.color} group-hover:underline`}>{area.name}</h3>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-10 text-center"
                >
                    <Link
                        href="/submission-guidelines/areas"
                        className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 border border-blue-200 hover:border-blue-400 bg-blue-50 hover:bg-blue-100 px-6 py-3 rounded-xl transition-all duration-200 group"
                    >
                        View All Research Areas
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
