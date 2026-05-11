import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, FileCheck, RefreshCw, Globe } from 'lucide-react';

const pipelineSteps = [
    {
        step: "01",
        title: "Manuscript Intake",
        icon: UploadCloud,
        shortDesc: "Secure submission with ethical triage.",
        fullDesc: "Authors submit natively. Each work undergoes scope scanning, metadata check, and full plagiarism triage with our automated validation engine.",
    },
    {
        step: "02",
        title: "Double-Blind Review",
        icon: FileCheck,
        shortDesc: "Anonymous multi-stage assessment.",
        fullDesc: "Assigned blindly to two independent faculty peers. Evaluation is performed strictly on empirical grounds, methodology precision, and empirical weight.",
    },
    {
        step: "03",
        title: "Refine & Optimize",
        icon: RefreshCw,
        shortDesc: "Iterative peer-feedback refinement.",
        fullDesc: "Direct collaborative loop where authors incorporate reviewer enhancements, guided transparently by our internal managing editor.",
    },
    {
        step: "04",
        title: "DOI Registration",
        icon: Globe,
        shortDesc: "Global archival & indexing launch.",
        fullDesc: "The final paper is typeset, minted with a permanent Crossref DOI, indexed in Global Repositories, and launched in high-fidelity open access format.",
    },
];

export default function PipelineSection() {
    const [activeStep, setActiveStep] = useState(null);

    return (
        <section className="py-16 lg:py-24 bg-warm-bg border-y border-slate-200/50">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-secondary font-black text-[10px] uppercase tracking-[0.3em] block mb-4">The Mechanism</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4 tracking-tight">
                        Journal <span className="text-secondary italic">Publishing Engine</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {pipelineSteps.map((item, i) => {
                        const isActive = activeStep === i;
                        return (
                            <button
                                key={i}
                                onClick={() => setActiveStep(isActive ? null : i)}
                                className={`group p-8 text-left rounded-[2rem] transition-all duration-500 relative overflow-hidden border ${isActive
                                        ? 'bg-primary border-primary shadow-ambient-lg -translate-y-2 text-white'
                                        : 'bg-white border-slate-200/60 hover:border-secondary/40 shadow-sm hover:-translate-y-1'
                                    }`}
                            >
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${isActive ? 'bg-white/10 border border-white/20' : 'bg-slate-50 group-hover:bg-secondary/10'}`}>
                                    <item.icon className={`w-5 h-5 ${isActive ? 'text-secondary' : 'text-slate-400 group-hover:text-secondary'} transition-colors`} />
                                </div>
                                <span className={`font-serif font-bold text-4xl block mb-4 ${isActive ? 'text-white/30' : 'text-slate-500 group-hover:text-slate-400'} transition-colors`}>{item.step}</span>
                                <h3 className={`font-serif font-bold text-lg leading-tight mb-2 ${isActive ? 'text-white' : 'text-primary'}`}>{item.title}</h3>
                                <p className={`text-[12px] leading-relaxed font-medium ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>{item.shortDesc}</p>
                            </button>
                        );
                    })}
                </div>

                <motion.div
                    initial={false}
                    animate={{ opacity: activeStep !== null ? 1 : 0, height: activeStep !== null ? 'auto' : 0 }}
                    className="overflow-hidden"
                >
                    {activeStep !== null && (
                        <div className="p-8 bg-white rounded-3xl shadow-ambient border border-slate-200/60 flex flex-col md:flex-row gap-6 items-center">
                            <div className="w-16 h-16 rounded-2xl bg-primary/5 text-secondary flex items-center justify-center shrink-0">
                                {React.createElement(pipelineSteps[activeStep].icon, { className: 'w-7 h-7' })}
                            </div>
                            <div>
                                <h4 className="font-serif font-bold text-primary text-xl mb-2">{pipelineSteps[activeStep].title} Expanded</h4>
                                <p className="text-slate-600 font-medium leading-relaxed text-base">{pipelineSteps[activeStep].fullDesc}</p>
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
