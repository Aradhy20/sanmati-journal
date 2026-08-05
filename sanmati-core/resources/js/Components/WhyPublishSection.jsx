import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import {
    Zap, Globe, Shield, Clock, Award, Users,
    FileCheck, Sparkles, ChevronRight
} from 'lucide-react';

const BENEFITS = [
    {
        icon: Shield,
        title: 'Rigorous Peer Review',
        desc: 'Double-blind peer review by subject-matter experts ensuring research quality and integrity.',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        border: 'border-blue-100',
        link: '/publication-policy/peer-review',
    },
    {
        icon: Globe,
        title: 'Global Open Access',
        desc: 'Your research is freely accessible to readers worldwide under CC-BY 4.0 license with no paywalls.',
        color: 'text-emerald-600',
        bg: 'bg-emerald-50',
        border: 'border-emerald-100',
        link: '/basic-info/about-journal',
    },
    {
        icon: Award,
        title: 'CrossRef DOI Assigned',
        desc: 'Every paper receives a permanent CrossRef Digital Object Identifier for long-term citation tracking.',
        color: 'text-indigo-600',
        bg: 'bg-indigo-50',
        border: 'border-indigo-100',
        link: '/basic-info/indexing',
    },
    {
        icon: Zap,
        title: 'Fast Publication',
        desc: 'Peer review completed in 15–30 days. Accepted papers are published in the next available issue.',
        color: 'text-amber-600',
        bg: 'bg-amber-50',
        border: 'border-amber-100',
        link: '/submission-guidelines/review-process',
    },
    {
        icon: FileCheck,
        title: 'Author Support',
        desc: 'Dedicated editorial support for formatting, language, and submission throughout the publication process.',
        color: 'text-cyan-600',
        bg: 'bg-cyan-50',
        border: 'border-cyan-100',
        link: '/submission-guidelines',
    },
    {
        icon: Users,
        title: 'Expert Editorial Board',
        desc: 'Your manuscript is evaluated by experienced academics and researchers from relevant disciplines.',
        color: 'text-violet-600',
        bg: 'bg-violet-50',
        border: 'border-violet-100',
        link: '/editorial-team/editorial-board',
    },
    {
        icon: Sparkles,
        title: 'Multidisciplinary Scope',
        desc: 'We accept research from over 20 disciplines including science, technology, arts, commerce, and social sciences.',
        color: 'text-rose-600',
        bg: 'bg-rose-50',
        border: 'border-rose-100',
        link: '/submission-guidelines/areas',
    },
    {
        icon: Clock,
        title: 'ISSN Registered',
        desc: 'Officially registered with International Standard Serial Number (ISSN 3108-1819) for permanent identification.',
        color: 'text-slate-600',
        bg: 'bg-slate-50',
        border: 'border-slate-200',
        link: '/basic-info/journal-info',
    },
];

export default function WhyPublishSection() {
    return (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/60" aria-labelledby="why-heading">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-bold uppercase tracking-widest mb-4">
                        Why Choose Us
                    </span>
                    <h2 id="why-heading" className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-4">
                        Why Publish With<br />
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Sanmati Spectrum?</span>
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        We offer researchers a credible, transparent, and fast publication pathway with international recognition and permanent DOI citation support.
                    </p>
                </motion.div>

                {/* Benefits grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {BENEFITS.map((b, i) => {
                        const Icon = b.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
                                className="group relative p-6 bg-white border border-slate-100 rounded-2xl hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100/80 hover:-translate-y-1 transition-all duration-300"
                            >
                                {/* Icon */}
                                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${b.bg} ${b.color} mb-5 group-hover:scale-110 transition-transform duration-300 border ${b.border}`}>
                                    <Icon className="w-6 h-6" />
                                </div>

                                <h3 className="text-base font-heading font-bold text-slate-900 mb-2 leading-snug">{b.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed mb-4">{b.desc}</p>

                                <Link
                                    href={b.link}
                                    className={`inline-flex items-center gap-1 text-xs font-bold ${b.color} uppercase tracking-wide group/link`}
                                >
                                    Learn more
                                    <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA row */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 text-center"
                >
                    <Link
                        href="/submission-guidelines/call-for-papers"
                        className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 group"
                    >
                        Start Your Submission
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
