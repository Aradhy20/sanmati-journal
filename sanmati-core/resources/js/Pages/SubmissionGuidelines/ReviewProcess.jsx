import PageHeader from '../../Components/PageHeader';
import MainLayout from '../../Layouts/MainLayout';
import {
    ShieldCheck, Send, FileSearch, CheckCircle2,
    RefreshCcw, BookOpen, Clock, ArrowRight
} from 'lucide-react';
import { Link } from '@inertiajs/react';
import { ScrollReveal } from '../../Components/ScrollReveal';

export default function ReviewProcess() {
    const jsonLd = {
        schema: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Peer Review Process",
            "url": "https://sanmatijournal.in/submission-guidelines/review-process",
            "description": "Double-blind peer review policy and evaluation workflow of Sanmati Spectrum of Knowledge."
        },
        breadcrumb: [
            { name: 'Home', url: '/' },
            { name: 'Submission Guidelines', url: '/submission-guidelines' },
            { name: 'Review Process', url: '/submission-guidelines/review-process' }
        ]
    };

    const steps = [
        {
            title: "Submission Process",
            desc: "Manuscripts are submitted via email to sanmatijournal@gmail.com. Initial screening is conducted for scope compliance, formatting, and plagiarism check.",
            icon: <Send className="w-4 h-4" />
        },
        {
            title: "Editorial Screening",
            desc: "The Editor-in-Chief and section editors assess submissions for academic relevance, originality, and writing quality. Papers not meeting baseline criteria may be desk rejected.",
            icon: <FileSearch className="w-4 h-4" />
        },
        {
            title: "Double-Blind Peer Review",
            desc: "Suitable manuscripts undergo double-blind peer review, safeguarding the anonymity of both authors and reviewers. Reviewers evaluate methodology, rigor, and scholarly contribution.",
            icon: <ShieldCheck className="w-4 h-4" />
        },
        {
            title: "Editorial Decision",
            desc: "Based on referee reports, the editorial board decides to Accept, Accept with minor revisions, Request major revisions, or Decline publication.",
            icon: <CheckCircle2 className="w-4 h-4" />
        },
        {
            title: "Revision & Finalization",
            desc: "Revised papers must address reviewer comments. Final acceptance is confirmed after verifying revisions satisfy the referee comments.",
            icon: <RefreshCcw className="w-4 h-4" />
        },
        {
            title: "Metadata & Indexing",
            desc: "Accepted papers are assigned a CrossRef DOI, indexed online, and published in the forthcoming volume issue.",
            icon: <BookOpen className="w-4 h-4" />
        }
    ];

    return (
        <MainLayout
            title="Double Blind Peer Reviewed Journal Process | Sanmati Journal"
            description="Double-blind peer review process of Sanmati multidisciplinary research journal (ISSN 3108-1819). Aligned with UGC Care quality standards to publish research paper in India."
            keywords="UGC Care Journal, Multidisciplinary Research Journal, Publish Research Paper in India, Peer Reviewed Journal, ISSN Journal, double blind review"
            jsonLd={jsonLd}
        >
            <div className="bg-[#FFFDF8] min-h-screen">
                <PageHeader
                    title="Double-Blind Peer Reviewed Journal Workflow"
                    breadcrumb="Submission"
                    subtitle="UGC Care Aligned & Transparent Academic Evaluation Standards"
                />

                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16 text-[#2E2E2E]">
                    <div className="max-w-3xl mx-auto mt-10">

                        <ScrollReveal>
                            <div className="bg-white p-6 md:p-10 rounded-xl border border-[#E9E5DD]">
                                <div className="space-y-6">
                                    <h2 className="text-xl font-serif font-bold text-dark border-b border-[#E9E5DD] pb-3">Peer Review Standards</h2>
                                    <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-2xl">
                                        Sanmati Spectrum follows a transparent, systematic, and double-blind peer review process to ensure high-impact multidisciplinary scientific rigor.
                                    </p>

                                    {/* Timeline */}
                                    <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-4 before:w-[1px] before:bg-[#E9E5DD]">
                                        {steps.map((step, i) => (
                                            <div key={i} className="flex gap-4 relative">
                                                <div className="w-8 h-8 rounded border border-[#E9E5DD] bg-[#F7F4EC] text-primary flex items-center justify-center shrink-0 z-10">
                                                    {step.icon}
                                                </div>
                                                <div className="bg-[#F7F4EC]/50 border border-[#E9E5DD]/70 rounded-lg p-5 flex-1 space-y-1.5">
                                                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Step 0{i + 1}</span>
                                                    <h4 className="text-xs font-bold uppercase tracking-wider text-dark">{step.title}</h4>
                                                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Integrity Box */}
                                    <div className="p-6 bg-[#F7F4EC] border border-[#E9E5DD] rounded-xl text-center space-y-4">
                                        <p className="text-sm font-serif italic text-dark">"Ensuring absolute fairness, review confidentiality, and academic integrity."</p>
                                        <div className="flex justify-center gap-5 text-[9px] font-bold uppercase tracking-wider text-slate-400">
                                            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-primary" /> Double-Blind</span>
                                            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-primary" /> Systematic</span>
                                            <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> COPE Guidelines</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Navigation Footer */}
                        <div className="mt-8 flex justify-start text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            <Link href="/submission-guidelines/publication-charges" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                                <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                                Publication Charges
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
