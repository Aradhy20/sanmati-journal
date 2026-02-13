import PageHeader from '../../Components/PageHeader';
import MainLayout from '../../Layouts/MainLayout';
import { Calendar, PenTool, ArrowRight, Mail, ShieldCheck } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { GridPattern, DotPattern } from '../../Components/Graphics';
import { ScrollReveal, revealVariants, ScaleOnHover } from '../../Components/ScrollReveal';

export default function CallForPapers() {
    return (
        <MainLayout>
            <div className="bg-slate-50 min-h-screen">
                <PageHeader
                    title="Call for Papers"
                    breadcrumb="Submission"
                    subtitle="Volume 1, Issue 1 | January–March 2026"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative overflow-hidden">
                    <DotPattern className="opacity-10" />
                    <div className="max-w-4xl mx-auto flex flex-col gap-12 mt-12 relative z-10">

                        {/* Main Content */}
                        <ScrollReveal variants={revealVariants.zoom}>
                            <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm overflow-hidden relative">
                                <GridPattern className="opacity-5" />
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <Calendar className="w-32 h-32" />
                                </div>
                                <div className="relative z-10">
                                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6"> Call for Papers</h2>
                                    <p className="text-slate-700 text-lg leading-relaxed mb-8">
                                        Sanmati Spectrum of Knowledge & Emerging Discourse invites original, unpublished, and high-quality research papers for its Volume 1, Issue 1 (January–March 2026).
                                    </p>

                                    <ScrollReveal variants={revealVariants.left} delay={0.2}>
                                        <div className="bg-blue-50 border-l-4 border-blue-600 p-8 mb-8 rounded-r-2xl relative overflow-hidden">
                                            <GridPattern className="opacity-5" />
                                            <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                                                <Calendar className="w-5 h-5" /> Important Dates
                                            </h3>
                                            <div className="space-y-4">
                                                <div className="flex justify-between items-center border-b border-blue-100 pb-3">
                                                    <span className="text-slate-600 font-bold">Last Date of Submission</span>
                                                    <span className="font-bold text-slate-900">25 February 2026</span>
                                                </div>
                                                <div className="flex justify-between items-center border-b border-blue-100 pb-3">
                                                    <span className="text-slate-600 font-bold">Notification of Acceptance</span>
                                                    <span className="font-bold text-slate-900">Within 10–15 days</span>
                                                </div>
                                                <div className="flex justify-between items-center pb-3">
                                                    <span className="text-slate-600 font-bold">Publication Month</span>
                                                    <span className="font-bold text-slate-900">March 2026</span>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 mb-8 font-serif italic text-slate-700">
                                        Researchers, academicians, and scholars are encouraged to contribute and be part of this multidisciplinary academic discourse.
                                    </div>

                                    <div className="flex flex-wrap gap-4 mt-8">
                                        <ScaleOnHover>
                                            <a
                                                href="mailto:sanmatijournal@gmail.com"
                                                className="px-8 py-4 bg-blue-900 text-white font-bold rounded-full hover:bg-blue-800 transition-all flex items-center gap-2 shadow-lg shadow-blue-900/20"
                                            >
                                                <Mail className="w-5 h-5" /> Email Your Manuscript
                                            </a>
                                        </ScaleOnHover>
                                        <ScaleOnHover>
                                            <Link
                                                href="/submission-guidelines/areas"
                                                className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full border border-slate-200 hover:bg-slate-50 transition-all flex items-center gap-2"
                                            >
                                                View Areas of Submission <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </ScaleOnHover>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Secondary Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ScrollReveal variants={revealVariants.left} delay={0.3}>
                                <ScaleOnHover className="h-full">
                                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-md h-full relative overflow-hidden">
                                        <GridPattern className="opacity-0 group-hover:opacity-5 transition-opacity" />
                                        <PenTool className="w-8 h-8 text-blue-600 mb-4" />
                                        <h4 className="font-bold text-slate-900 mb-2">Submission Format</h4>
                                        <p className="text-sm text-slate-600 mb-4">Manuscripts must be submitted in MS Word format (.doc/.docx) using the specified template.</p>
                                        <Link href="/submission-guidelines/important-info" className="text-blue-600 text-sm font-bold hover:underline flex items-center gap-1">
                                            Check Guidelines <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </ScaleOnHover>
                            </ScrollReveal>
                            <ScrollReveal variants={revealVariants.right} delay={0.4}>
                                <ScaleOnHover className="h-full">
                                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-md h-full relative overflow-hidden">
                                        <GridPattern className="opacity-0 group-hover:opacity-5 transition-opacity" />
                                        <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />
                                        <h4 className="font-bold text-slate-900 mb-2">Review Process</h4>
                                        <p className="text-sm text-slate-600 mb-4">All submissions undergo a rigorous Double-Blind Peer Review process to ensure top quality.</p>
                                        <Link href="/submission-guidelines/review-process" className="text-blue-600 text-sm font-bold hover:underline flex items-center gap-1">
                                            Learn More <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </ScaleOnHover>
                            </ScrollReveal>
                        </div>

                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
