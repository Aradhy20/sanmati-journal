import PageHeader from '../../Components/PageHeader';
import MainLayout from '../../Layouts/MainLayout';
import { CheckCircle2, FileSearch, Send, ShieldCheck } from 'lucide-react';
import { GridPattern } from '../../Components/Graphics';
import { ScrollReveal, revealVariants } from '../../Components/ScrollReveal';

export default function PeerReview() {
    return (
        <MainLayout>
            <div className="bg-slate-50 min-h-screen relative">
                <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                    <GridPattern className="w-[600px] h-[600px]" />
                </div>

                <PageHeader
                    title="Editorial & Peer Review Process"
                    breadcrumb="Policy"
                    subtitle="Transparent, systematic, and rigorous standard"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
                    <div className="max-w-4xl mx-auto space-y-12 mt-12">

                        {/* Introduction */}
                        <ScrollReveal>
                            <section className="text-center mb-16">
                                <p className="text-xl text-slate-700 leading-relaxed font-serif max-w-2xl mx-auto text-blue-900/80">
                                    "Sanmati Spectrum of Knowledge & Emerging Discourse follows a transparent, systematic, and rigorous editorial and peer review process to maintain high academic standards."
                                </p>
                            </section>
                        </ScrollReveal>

                        {/* Steps */}
                        <div className="space-y-8 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-slate-200 hidden md:block" />

                            {[
                                { icon: Send, title: "Submission Process", content: ["Manuscripts are submitted via email to <strong class='text-blue-900'>sanmatijournal@gmail.com</strong>.", "Initial screening is conducted for scope, format, and plagiarism."], color: "text-blue-600", bg: "bg-blue-50" },
                                { icon: FileSearch, title: "Editorial Screening", content: ["The Editor-in-Chief and Editors assess manuscripts for relevance, originality, and academic quality.", "Manuscripts not meeting basic criteria may be rejected at this stage."], color: "text-indigo-600", bg: "bg-indigo-50" },
                                { icon: ShieldCheck, title: "Peer Review Process", content: ["Suitable manuscripts undergo <strong>Double-Blind Peer Review</strong>, ensuring anonymity of authors and reviewers.", "Reviewers evaluate originality, methodology, clarity, relevance, and contribution to knowledge.", "Review comments and revision suggestions are shared with authors, where applicable."], color: "text-purple-600", bg: "bg-purple-50" },
                                { icon: CheckCircle2, title: "Editorial Decision", content: "Based on reviewers’ reports, manuscripts may be:", type: "decision", color: "text-emerald-600", bg: "bg-emerald-50" },
                                { icon: FileSearch, title: "Revision & Acceptance", content: ["Revised manuscripts must be submitted within the stipulated timeframe.", "Final acceptance is granted after satisfactory compliance with reviewer comments."], color: "text-amber-600", bg: "bg-amber-50" },
                                { icon: Send, title: "Publication", content: ["Accepted manuscripts are scheduled for publication in the forthcoming issue.", "Authors are informed of publication details via email."], color: "text-cyan-600", bg: "bg-cyan-50" }
                            ].map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    <ScrollReveal key={index} delay={index * 0.1} variants={revealVariants.left}>
                                        <div className="relative pl-0 md:pl-24">
                                            {/* Timeline Node */}
                                            <div className="absolute left-0 top-6 w-16 h-16 bg-white rounded-full border-4 border-slate-50 shadow-lg hidden md:flex items-center justify-center z-10">
                                                <span className="text-xl font-black text-slate-300">0{index + 1}</span>
                                            </div>

                                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow relative overflow-hidden group">
                                                <div className={`absolute top-0 right-0 w-32 h-32 ${step.bg} rounded-bl-[100px] opacity-50 transition-transform group-hover:scale-110`} />

                                                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3 relative z-10">
                                                    <div className={`p-2 ${step.bg} rounded-lg ${step.color}`}>
                                                        <Icon className="w-5 h-5" />
                                                    </div>
                                                    {step.title}
                                                </h3>

                                                {step.type === 'decision' ? (
                                                    <div className="relative z-10">
                                                        <p className="mb-4 text-slate-700">{step.content}</p>
                                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-bold text-slate-800">
                                                            <li className="bg-green-50 px-4 py-3 rounded-xl border border-green-100 text-green-700 flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full" />Accepted</li>
                                                            <li className="bg-yellow-50 px-4 py-3 rounded-xl border border-yellow-100 text-yellow-700 flex items-center gap-2"><div className="w-2 h-2 bg-yellow-500 rounded-full" />Minor Revisions</li>
                                                            <li className="bg-orange-50 px-4 py-3 rounded-xl border border-orange-100 text-orange-700 flex items-center gap-2"><div className="w-2 h-2 bg-orange-500 rounded-full" />Major Revisions</li>
                                                            <li className="bg-red-50 px-4 py-3 rounded-xl border border-red-100 text-red-700 flex items-center gap-2"><div className="w-2 h-2 bg-red-500 rounded-full" />Rejected</li>
                                                        </ul>
                                                    </div>
                                                ) : (
                                                    <ul className="list-disc pl-6 space-y-3 text-slate-600 relative z-10">
                                                        {step.content.map((line, i) => (
                                                            <li key={i} dangerouslySetInnerHTML={{ __html: line }} />
                                                        ))}
                                                    </ul>
                                                )}

                                                {/* Step Number for Mobile */}
                                                <div className="absolute top-4 right-4 text-4xl font-black text-slate-100 md:hidden">0{index + 1}</div>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                );
                            })}

                            <ScrollReveal delay={0.6} variants={revealVariants.up}>
                                <div className="mt-12 md:pl-24">
                                    <div className="bg-blue-900 text-white p-8 rounded-3xl shadow-xl text-center relative overflow-hidden">
                                        <GridPattern className="opacity-10 absolute inset-0" />
                                        <p className="relative z-10 font-bold text-lg md:text-xl">
                                            The journal ensures fairness, confidentiality, and academic integrity at every stage of the editorial and peer review process.
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>

                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
