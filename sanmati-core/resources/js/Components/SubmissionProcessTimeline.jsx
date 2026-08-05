import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import {
    SendHorizonal, FileText, Search, MessageSquare,
    Edit3, CheckCircle2, Printer, ArrowRight
} from 'lucide-react';

const STEPS = [
    {
        step: '01',
        icon: SendHorizonal,
        title: 'Prepare & Submit',
        desc: 'Download the author template, prepare your manuscript following our formatting guidelines, and submit via email or the online portal.',
        link: '/submission-guidelines',
        linkText: 'View Guidelines',
        color: 'text-blue-600',
        bg: 'bg-blue-600',
        light: 'bg-blue-50',
        border: 'border-blue-200',
    },
    {
        step: '02',
        icon: FileText,
        title: 'Initial Screening',
        desc: 'Our editorial team reviews your submission for scope, formatting compliance, and preliminary quality assessment within 2–3 working days.',
        link: '/publication-policy/ethics',
        linkText: 'Ethics Policy',
        color: 'text-indigo-600',
        bg: 'bg-indigo-600',
        light: 'bg-indigo-50',
        border: 'border-indigo-200',
    },
    {
        step: '03',
        icon: Search,
        title: 'Plagiarism Check',
        desc: 'All manuscripts undergo rigorous originality screening. Papers must maintain originality standards before peer review.',
        link: '/publication-policy/plagiarism',
        linkText: 'Plagiarism Policy',
        color: 'text-cyan-600',
        bg: 'bg-cyan-600',
        light: 'bg-cyan-50',
        border: 'border-cyan-200',
    },
    {
        step: '04',
        icon: MessageSquare,
        title: 'Peer Review',
        desc: 'Manuscripts are reviewed by two or more subject-matter experts using a double-blind process. Reviewers provide structured feedback within 15–30 days.',
        link: '/publication-policy/peer-review',
        linkText: 'Review Process',
        color: 'text-violet-600',
        bg: 'bg-violet-600',
        light: 'bg-violet-50',
        border: 'border-violet-200',
    },
    {
        step: '05',
        icon: Edit3,
        title: 'Revision & Decision',
        desc: 'Authors receive detailed reviewer comments. Revisions may be requested before the final editorial decision is communicated.',
        link: '/submission-guidelines/important-info',
        linkText: 'Author Guide',
        color: 'text-amber-600',
        bg: 'bg-amber-500',
        light: 'bg-amber-50',
        border: 'border-amber-200',
    },
    {
        step: '06',
        icon: Printer,
        title: 'Publication & DOI',
        desc: 'Accepted papers are typeset, assigned a permanent CrossRef DOI, and published in the next available issue with full open access.',
        link: '/archive',
        linkText: 'View Archive',
        color: 'text-emerald-600',
        bg: 'bg-emerald-600',
        light: 'bg-emerald-50',
        border: 'border-emerald-200',
    },
];

export default function SubmissionProcessTimeline() {
    return (
        <section className="py-16 lg:py-24 bg-white border-b border-slate-200/60" aria-labelledby="process-heading">
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
                        Publication Journey
                    </span>
                    <h2 id="process-heading" className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 mb-3">
                        From Submission to<br />
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Publication</span>
                    </h2>
                    <p className="text-slate-500 text-base max-w-xl mx-auto">
                        A transparent, structured 6-step journey designed to ensure every published paper meets high standards of quality and integrity.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="relative">
                    {/* Vertical connector line */}
                    <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-blue-600 via-indigo-400 to-emerald-500 hidden lg:block" aria-hidden="true" />

                    <div className="space-y-6">
                        {STEPS.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: '-40px' }}
                                    transition={{ duration: 0.45, delay: i * 0.06 }}
                                    className="relative flex flex-col lg:flex-row gap-5 group"
                                >
                                    {/* Step number bubble */}
                                    <div className="flex-shrink-0 flex items-start gap-5">
                                        <div className={`relative z-10 w-16 h-16 rounded-2xl ${s.bg} flex items-center justify-center shadow-lg shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className={`flex-1 p-6 bg-white border ${s.border} rounded-2xl ${s.light} hover:shadow-md hover:-translate-y-0.5 transition-all duration-300`}>
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <div>
                                                <span className={`text-[10px] font-bold uppercase tracking-widest ${s.color} mb-1 block`}>Step {s.step}</span>
                                                <h3 className="text-lg font-heading font-bold text-slate-900">{s.title}</h3>
                                            </div>
                                            <CheckCircle2 className={`w-5 h-5 ${s.color} shrink-0 mt-1 opacity-40`} />
                                        </div>
                                        <p className="text-sm text-slate-600 leading-relaxed mb-4">{s.desc}</p>
                                        <Link
                                            href={s.link}
                                            className={`inline-flex items-center gap-1.5 text-xs font-bold ${s.color} uppercase tracking-wide hover:underline group/link`}
                                        >
                                            {s.linkText}
                                            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                                        </Link>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 text-center"
                >
                    <Link
                        href="/submission-guidelines/call-for-papers"
                        className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 group"
                    >
                        <SendHorizonal className="w-4 h-4" />
                        Start Your Submission Now
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
