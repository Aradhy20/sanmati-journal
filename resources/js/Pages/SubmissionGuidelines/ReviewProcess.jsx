import PageHeader from '../../Components/PageHeader';
import MainLayout from '../../Layouts/MainLayout';
import {
    ShieldCheck, Send, FileSearch, CheckCircle2,
    RefreshCcw, BookOpen, Clock, ArrowRight
} from 'lucide-react';
import { Link } from '@inertiajs/react';
import { ScrollReveal, revealVariants, ScaleOnHover } from '../../Components/ScrollReveal';

export default function ReviewProcess() {
    const steps = [
        {
            title: "Submission Process",
            desc: "Manuscripts are submitted via email to sanmatijournal@gmail.com. Initial screening is conducted for scope, format, and plagiarism.",
            icon: <Send className="w-6 h-6" />
        },
        {
            title: "Editorial Screening",
            desc: "The Editor-in-Chief and Editors assess manuscripts for relevance, originality, and academic quality. Manuscripts not meeting basic criteria may be rejected at this stage.",
            icon: <FileSearch className="w-6 h-6" />
        },
        {
            title: "Peer Review Process",
            desc: "Suitable manuscripts undergo Double-Blind Peer Review, ensuring anonymity of authors and reviewers. Reviewers evaluate originality, methodology, clarity, relevance, and contribution to knowledge.",
            icon: <ShieldCheck className="w-6 h-6" />
        },
        {
            title: "Editorial Decision",
            desc: "Based on reviewers’ reports, manuscripts may be: Accepted, Accepted with minor revisions, Accepted with major revisions, or Rejected.",
            icon: <CheckCircle2 className="w-6 h-6" />
        },
        {
            title: "Revision & Acceptance",
            desc: "Revised manuscripts must be submitted within the stipulated timeframe. Final acceptance is granted after satisfactory compliance with reviewer comments.",
            icon: <RefreshCcw className="w-6 h-6" />
        },
        {
            title: "Publication",
            desc: "Accepted manuscripts are scheduled for publication in the forthcoming issue. Authors are informed of publication details via email.",
            icon: <BookOpen className="w-6 h-6" />
        }
    ];

    return (
        <MainLayout>
            <div className="bg-slate-50 min-h-screen">
                <PageHeader
                    title="Editorial & Peer Review"
                    breadcrumb="Submission"
                    subtitle="Transparent, systematic, and rigorous standard"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="max-w-4xl mx-auto mt-12">

                        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <ShieldCheck className="w-32 h-32" />
                            </div>

                            <div className="relative z-10">
                                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Our Review Standards</h2>
                                <p className="text-slate-700 text-lg leading-relaxed mb-16 max-w-2xl">
                                    Sanmati Spectrum of Knowledge & Emerging Discourse follows a transparent, systematic, and rigorous editorial and peer review process to maintain high academic standards.
                                </p>

                                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-200 before:to-transparent">
                                    {steps.map((step, i) => (
                                        <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-2xl border border-white bg-blue-900 text-white shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:scale-110 transition-transform duration-300">
                                                {step.icon}
                                            </div>
                                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-xs font-black text-blue-600 uppercase tracking-widest">Step {i + 1}</span>
                                                </div>
                                                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">{step.title}</h4>
                                                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-20 p-8 bg-slate-900 text-white rounded-3xl text-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-blue-600/10 animate-pulse"></div>
                                    <div className="relative z-10">
                                        <p className="text-lg font-serif italic mb-6">"Ensuring fairness, confidentiality, and academic integrity at every stage."</p>
                                        <div className="flex justify-center gap-6 text-sm opacity-70">
                                            <div className="flex items-center gap-2">
                                                <ShieldCheck className="w-4 h-4" /> Double-Blind
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4" /> Systematic
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4" /> Rigorous
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Nav */}
                        <div className="mt-12 flex justify-start">
                            <Link href="/submission-guidelines/publication-charges" className="flex items-center gap-2 text-slate-500 hover:text-blue-900 font-bold transition-all group">
                                <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-blue-900">
                                    <ArrowRight className="w-4 h-4 rotate-180" />
                                </div>
                                Publication Charges
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
