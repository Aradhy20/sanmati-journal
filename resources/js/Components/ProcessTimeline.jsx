import { motion } from 'framer-motion';
import { Upload, Eye, PenTool, CheckCircle, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const steps = [
    {
        title: "Manuscript Submission",
        desc: "Authors submit their original research papers through our online system.",
        icon: <Upload className="w-6 h-6" />,
        color: "bg-blue-500"
    },
    {
        title: "Rigorous Peer Review",
        desc: "Double-blind review by independent subject matter experts.",
        icon: <Eye className="w-6 h-6" />,
        color: "bg-purple-500"
    },
    {
        title: "Revision & Finalization",
        desc: "Authors incorporate feedback to enhance paper quality.",
        icon: <PenTool className="w-6 h-6" />,
        color: "bg-amber-500"
    },
    {
        title: "Online Publication",
        desc: "Final accepted papers are published with DOI and global indexing.",
        icon: <CheckCircle className="w-6 h-6" />,
        color: "bg-green-500"
    }
];

const ProcessTimeline = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden transition-colors duration-300">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] opacity-60" />

            <div className="container-custom relative z-10 mx-auto px-4 max-w-7xl">
                <ScrollReveal>
                    <div className="text-center mb-20">
                        <span className="text-blue-600 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Publication Lifecycle</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                            From Submission to <br /> Global Impact
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-transparent mx-auto rounded-full" />
                    </div>
                </ScrollReveal>

                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-slate-100 -z-10">
                        <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                    </div>

                    {steps.map((step, index) => (
                        <ScrollReveal key={index} delay={index * 0.2}>
                            <div className="group relative flex flex-col items-center text-center">
                                {/* Icon Container */}
                                <div className={`relative w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center text-white shadow-lg mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)]`}>
                                    {step.icon}
                                    <div className="absolute -inset-2 bg-inherit opacity-20 blur-lg rounded-2xl group-hover:opacity-40 transition-opacity" />

                                    {/* Step Number Badge */}
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white text-slate-900 text-xs font-bold flex items-center justify-center shadow-md border border-slate-100">
                                        0{index + 1}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-sm max-w-[240px]">
                                    {step.desc}
                                </p>

                                {/* Connecting Arrow (Mobile/Tablet) */}
                                {index !== steps.length - 1 && (
                                    <div className="lg:hidden mt-8 text-slate-300">
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
