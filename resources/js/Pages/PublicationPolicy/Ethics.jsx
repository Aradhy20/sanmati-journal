import PageHeader from '../../Components/PageHeader';
import MainLayout from '../../Layouts/MainLayout';
import { ShieldCheck, Scale, FileCheck } from 'lucide-react';
import { GridPattern } from '../../Components/Graphics';
import { ScrollReveal, revealVariants } from '../../Components/ScrollReveal';

export default function Ethics() {
    return (
        <MainLayout>
            <div className="bg-slate-50 min-h-screen relative">
                <div className="absolute top-0 left-0 opacity-10 pointer-events-none">
                    <GridPattern className="w-[600px] h-[600px]" />
                </div>

                <PageHeader
                    title="Publication Ethics"
                    breadcrumb="Policy"
                    subtitle="Commitment to integrity, fairness, and academic standards"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
                    <ScrollReveal variants={revealVariants.up}>
                        <div className="max-w-4xl mx-auto space-y-12 mt-12">

                            <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-blue-600" />
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-blue-50 rounded-xl text-blue-700 ring-1 ring-blue-100">
                                        <ShieldCheck className="w-8 h-8" />
                                    </div>
                                    <h2 className="text-2xl font-serif font-bold text-slate-900">Ethical Standards</h2>
                                </div>
                                <p className="text-slate-700 leading-relaxed mb-8 text-lg">
                                    Sanmati Spectrum of Knowledge & Emerging Discourse is committed to the highest standards of academic quality and research integrity. We strictly adhere to the guidelines set by the <strong>Committee on Publication Ethics (COPE)</strong>.
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {['Fairness', 'Transparency', 'Objectivity', 'Accountability'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                                            <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                                            <span className="font-bold text-slate-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <ScrollReveal delay={0.1} variants={revealVariants.left} className="h-full">
                                    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg h-full hover:shadow-xl transition-shadow">
                                        <div className="mb-6 text-indigo-600 bg-indigo-50 w-fit p-3 rounded-xl"><Scale className="w-8 h-8" /></div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">Misconduct Policy</h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            Any form of research misconduct, including fabrication, falsification, or ethical breaches, is examined strictly. We reserve the right to reject or retract any such manuscript.
                                        </p>
                                    </div>
                                </ScrollReveal>
                                <ScrollReveal delay={0.2} variants={revealVariants.right} className="h-full">
                                    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg h-full hover:shadow-xl transition-shadow">
                                        <div className="mb-6 text-emerald-600 bg-emerald-50 w-fit p-3 rounded-xl"><FileCheck className="w-8 h-8" /></div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">Author Responsibility</h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            Authors must ensure their work is original and not under consideration elsewhere. Proper citation and acknowledgment of sources are mandatory.
                                        </p>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </MainLayout>
    );
}
