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
                <div className="text-center mb-12">
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
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {AREAS.map((area, i) => {
                        const Icon = area.icon;
                        return (
                            <div key={i}>
                                <Link
                                    href={area.href}
                                    className={`group flex flex-col items-center text-center p-4 rounded-2xl bg-white border ${area.border} hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 block h-full`}
                                >
                                    <div className={`w-11 h-11 rounded-xl ${area.bg} ${area.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200`}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div className="text-xs font-heading font-bold text-slate-800 group-hover:text-blue-700 transition-colors leading-snug mb-1">
                                        {area.name}
                                    </div>
                                    <div className="text-[10px] text-slate-400 mt-auto flex items-center gap-0.5 group-hover:text-blue-600 transition-colors">
                                        Submit paper
                                        <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-10 text-center">
                    <Link
                        href="/submission-guidelines/areas"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        View all research areas & scope details
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
