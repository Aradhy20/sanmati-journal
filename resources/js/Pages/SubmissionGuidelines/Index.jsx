import PageHeader from '../../Components/PageHeader';
import MainLayout from '../../Layouts/MainLayout';
import {
    Calendar, Search, FileText, Banknote, MapPin,
    ShieldCheck, ArrowRight, Mail
} from 'lucide-react';
import { Link } from '@inertiajs/react';
import { DotPattern, GridPattern, FloatingGraphic } from '../../Components/Graphics';
import { revealVariants, ScrollReveal } from '../../Components/ScrollReveal';

export default function SubmissionGuidelines() {
    const sections = [
        {
            title: "Call for Papers",
            description: "Volume 1, Issue 1 | January–March 2026. Inviting original, unpublished research.",
            icon: <Calendar className="w-6 h-6 text-blue-600" />,
            href: "/submission-guidelines/call-for-papers",
            color: "blue"
        },
        {
            title: "Areas of Submission",
            description: "Multidisciplinary scope covering Arts, Science, Tech, Law, Medicine, and more.",
            icon: <Search className="w-6 h-6 text-purple-600" />,
            href: "/submission-guidelines/areas",
            color: "purple"
        },
        {
            title: "Important Information",
            description: "Detailed formatting rules, language requirements, and submission checklist.",
            icon: <FileText className="w-6 h-6 text-emerald-600" />,
            href: "/submission-guidelines/important-info",
            color: "emerald"
        },
        {
            title: "Publication Charges",
            description: "Processing fee details, payment modes, and registration information.",
            icon: <Banknote className="w-6 h-6 text-amber-600" />,
            href: "/submission-guidelines/publication-charges",
            color: "amber"
        },
        {
            title: "Contact Us",
            description: "Reach our Editorial Office - Dr. Namrta Jain for any submission queries.",
            icon: <MapPin className="w-6 h-6 text-rose-600" />,
            href: "/contact",
            color: "rose"
        },
        {
            title: "Editorial & Review Process",
            description: "Transparent Double-Blind Peer Review process and publication stages.",
            icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
            href: "/submission-guidelines/review-process",
            color: "indigo"
        },
    ];

    return (
        <MainLayout>
            <div className="bg-slate-50 min-h-screen">
                <PageHeader
                    title="Submission Guidelines"
                    breadcrumb="Guidelines"
                    subtitle="Complete framework for authors and researchers"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="max-w-6xl mx-auto mt-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <DotPattern className="opacity-10" />
                            {sections.map((section, idx) => (
                                <ScrollReveal key={idx} delay={idx * 0.1} variants={revealVariants.zoom}>
                                    <Link
                                        href={section.href}
                                        className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
                                    >
                                        <GridPattern className="opacity-0 group-hover:opacity-5 transition-opacity" />

                                        <div className="relative z-10 flex flex-col h-full">
                                            <div className="flex items-start justify-between mb-6">
                                                <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-blue-50 transition-colors">
                                                    <FloatingGraphic delay={idx * 0.2}>
                                                        {section.icon}
                                                    </FloatingGraphic>
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2 group-hover:text-blue-900 transition-colors">
                                                {section.title}
                                            </h3>
                                            <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                                                {section.description}
                                            </p>

                                            <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                                                View Details <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </Link>
                                </ScrollReveal>
                            ))}
                        </div>

                        {/* Quick Call to Action */}
                        <div className="mt-16 p-10 bg-slate-900 text-white rounded-3xl shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full -mr-32 -mt-32 opacity-20"></div>
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                                <div className="max-w-2xl text-center md:text-left">
                                    <h2 className="text-3xl font-serif font-bold mb-4">Ready to Submit Your Research?</h2>
                                    <p className="text-slate-400 leading-relaxed italic">
                                        &ldquo;Researchers, academicians, and scholars are encouraged to contribute and be part of this multidisciplinary academic discourse.&rdquo;
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                                    <a href="mailto:sanmatijournal@gmail.com" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-all flex items-center justify-center gap-2">
                                        <Mail className="w-5 h-5" /> Submit via Email
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
