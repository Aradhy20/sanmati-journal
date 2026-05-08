import { motion } from 'framer-motion';
import { Upload, Eye, PenTool, CheckCircle, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const steps = [
    {
        title: "Manuscript Submission",
        desc: "Authors submit their original research papers through our online system.",
        icon: <Upload className="w-5 h-5" />,
        color: "from-blue-500 to-cyan-500 shadow-blue-500/25"
    },
    {
        title: "Rigorous Peer Review",
        desc: "Double-blind review by independent subject matter experts.",
        icon: <Eye className="w-5 h-5" />,
        color: "from-indigo-500 to-purple-500 shadow-indigo-500/25"
    },
    {
        title: "Revision & Finalization",
        desc: "Authors incorporate feedback to enhance paper quality.",
        icon: <PenTool className="w-5 h-5" />,
        color: "from-amber-500 to-orange-500 shadow-amber-500/25"
    },
    {
        title: "Online Publication",
        desc: "Final accepted papers are published with DOI and global indexing.",
        icon: <CheckCircle className="w-5 h-5" />,
        color: "from-emerald-500 to-teal-500 shadow-emerald-500/25"
    }
];

const ProcessTimeline = () => {
    return (
        <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-500 border-t border-slate-100 dark:border-slate-900">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/5 dark:bg-primary-light/5 rounded-full blur-[120px] opacity-60 pointer-events-none" />

            <div className="container-custom relative z-10 mx-auto px-6 max-w-7xl">
                <ScrollReveal>
                    <div className="text-center mb-20">
                        <span className="text-primary dark:text-primary-light font-black tracking-[0.25em] text-[10px] uppercase mb-3 block">Publication Lifecycle</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-dark dark:text-white mb-6 leading-tight">
                            From Submission to <br /> <span className="text-primary dark:text-primary-light italic font-serif">Global Impact</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
                    </div>
                </ScrollReveal>

                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-slate-100 dark:bg-slate-800 -z-10">
                        <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                    </div>

                    {steps.map((step, index) => (
                        <ScrollReveal key={index} delay={index * 0.2}>
                            <div className="group relative flex flex-col items-center text-center">
                                {/* Icon Container */}
                                <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-xl mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl`}>
                                    {step.icon}
                                    <div className="absolute -inset-2 bg-inherit opacity-20 blur-lg rounded-2xl group-hover:opacity-40 transition-opacity" />

                                    {/* Step Number Badge */}
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white dark:bg-slate-900 text-dark dark:text-white text-xs font-black flex items-center justify-center shadow-lg border border-slate-100 dark:border-slate-800 font-sans">
                                        0{index + 1}
                                    </div>
                                </div>

                                <h3 className="text-lg sm:text-xl font-bold text-dark dark:text-white mb-4 group-hover:text-primary dark:group-hover:text-primary-light transition-colors tracking-tight">
                                    {step.title}
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-xs sm:text-sm max-w-[240px] font-medium">
                                    {step.desc}
                                </p>

                                {/* Connecting Arrow (Mobile/Tablet) */}
                                {index !== steps.length - 1 && (
                                    <div className="lg:hidden mt-8 text-slate-300 dark:text-slate-700">
                                        <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" />
                                    </div>
                                )}
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessTimeline;
