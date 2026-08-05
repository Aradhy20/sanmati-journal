import { motion } from 'framer-motion';
import { Send, FileSearch, Users, RefreshCw, CheckCircle2, Award, ArrowRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function SubmissionProcessTimeline() {
    const steps = [
        {
            num: "01",
            title: "Online Manuscript Submission",
            desc: "Submit your original research paper, review article, or case study online or via email with standard formatting.",
            icon: Send,
            color: "text-blue-600",
            bg: "bg-blue-50",
            border: "border-blue-200"
        },
        {
            num: "02",
            title: "Initial Editorial Screening",
            desc: "Manuscript evaluated for scope alignment, formatting completeness, and preliminary anti-plagiarism screening.",
            icon: FileSearch,
            color: "text-indigo-600",
            bg: "bg-indigo-50",
            border: "border-indigo-200"
        },
        {
            num: "03",
            title: "Double-Blind Peer Review",
            desc: "Evaluated by two independent international external peer reviewers in the relevant academic discipline.",
            icon: Users,
            color: "text-purple-600",
            bg: "bg-purple-50",
            border: "border-purple-200"
        },
        {
            num: "04",
            title: "Author Revisions & Resubmission",
            desc: "Authors receive peer review feedback and submit revised manuscript with highlighted modifications.",
            icon: RefreshCw,
            color: "text-amber-600",
            bg: "bg-amber-50",
            border: "border-amber-200"
        },
        {
            num: "05",
            title: "Editorial Acceptance Decision",
            desc: "Final decision communicated by Managing Editor. Copyright agreement and APC processing.",
            icon: CheckCircle2,
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            border: "border-emerald-200"
        },
        {
            num: "06",
            title: "DOI & Open Access Publication",
            desc: "Article assigned CrossRef DOI, published in the latest issue, and official publication certificate issued.",
            icon: Award,
            color: "text-cyan-600",
            bg: "bg-cyan-50",
            border: "border-cyan-200"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
                        <Send className="w-4 h-4 text-blue-600" /> Transparent Workflow
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                        6-Step Publication Journey
                    </h2>
                    <p className="text-sm text-slate-600 font-medium mt-3 leading-relaxed">
                        From initial submission to CrossRef DOI registration and global open-access dissemination.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.08 }}
                                className={`bg-slate-50 border ${step.border} rounded-3xl p-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`w-12 h-12 rounded-2xl ${step.bg} flex items-center justify-center ${step.color}`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <span className="font-mono text-xl font-bold text-slate-300">{step.num}</span>
                                    </div>
                                    <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                                    <p className="text-xs text-slate-600 font-medium leading-relaxed">{step.desc}</p>
                                </div>

                                <div className="mt-4 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-blue-600">
                                    <span>Step {idx + 1} of 6</span> <ArrowRight className="w-3 h-3" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/submission-guidelines/call-for-papers"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/25 transition-all duration-200"
                    >
                        Start Your Submission <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
