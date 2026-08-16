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
        desc: 'Authors address reviewer feedback and submit revised drafts. The Editor-in-Chief makes the final decision on publication.',
        link: '/submission-guidelines/important-info',
        linkText: 'Key Info',
        color: 'text-amber-600',
        bg: 'bg-amber-600',
        light: 'bg-amber-50',
        border: 'border-amber-200',
    },
    {
        step: '06',
        icon: CheckCircle2,
        title: 'Acceptance & Proofreading',
        desc: 'Accepted manuscripts receive professional layout editing, reference verification, author galley proof review, and CrossRef DOI assignment.',
        link: '/submission-guidelines/publication-charges',
        linkText: 'APC Details',
        color: 'text-emerald-600',
        bg: 'bg-emerald-600',
        light: 'bg-emerald-50',
        border: 'border-emerald-200',
    },
    {
        step: '07',
        icon: Printer,
        title: 'Publication & DOI',
        desc: 'The finalized article is published online with an assigned CrossRef DOI, full open access (CC-BY 4.0), and submitted to indexing databases.',
        link: '/basic-info/indexing',
        linkText: 'Indexing Details',
        color: 'text-teal-600',
        bg: 'bg-teal-600',
        light: 'bg-teal-50',
        border: 'border-teal-200',
    },
];

export default function SubmissionProcessTimeline() {
    return (
        <section className="py-16 lg:py-24 bg-white border-b border-slate-200/60" aria-labelledby="process-heading">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-bold uppercase tracking-widest mb-4">
                        Step-by-Step Workflow
                    </span>
                    <h2 id="process-heading" className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-4">
                        From Submission to
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Global Publication</span>
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        A transparent, 7-stage publication lifecycle designed to maintain rigorous academic standards while respecting author timelines.
                    </p>
                </div>

                {/* Steps List */}
                <div className="relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-teal-200 z-0" />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-7 gap-4 relative z-10">
                        {STEPS.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <div
                                    key={i}
                                    className="flex flex-col bg-white border border-slate-200/80 rounded-2xl p-4 hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
                                >
                                    {/* Step number badge */}
                                    <div className="flex items-center justify-between mb-3">
                                        <span className={`w-8 h-8 rounded-xl ${s.bg} text-white text-xs font-bold font-mono flex items-center justify-center shadow-sm`}>
                                            {s.step}
                                        </span>
                                        <div className={`w-8 h-8 rounded-xl ${s.light} ${s.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                                            <Icon className="w-4 h-4" />
                                        </div>
                                    </div>

                                    <h3 className="text-sm font-heading font-bold text-slate-900 mb-1.5 leading-snug">{s.title}</h3>
                                    <p className="text-xs text-slate-500 leading-relaxed flex-grow mb-3">{s.desc}</p>

                                    <Link
                                        href={s.link}
                                        className={`inline-flex items-center gap-1 text-[11px] font-bold ${s.color} hover:underline mt-auto`}
                                    >
                                        {s.linkText}
                                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom CTA Banner */}
                <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl shadow-blue-600/20">
                    <div>
                        <div className="text-lg font-heading font-bold">Ready to publish your research?</div>
                        <div className="text-sm text-blue-100 mt-0.5">Submit your manuscript today — peer review takes 15–30 days.</div>
                    </div>
                    <Link
                        href="/submission-guidelines/call-for-papers"
                        className="shrink-0 px-6 py-3 rounded-xl bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 transition-colors shadow-sm"
                    >
                        Submit Manuscript
                    </Link>
                </div>
            </div>
        </section>
    );
}
