import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export default function AboutSection() {
    return (
        <section className="py-32 bg-surface relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/4 rounded-full -ml-48 -mt-48 blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -mr-48 -mb-48 blur-[100px]" />

            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left — Dual Image Layout */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-7 relative z-10">
                                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[450px] border-4 border-white">
                                    <img src="/fistudy-assets/resources/about-journal-1.png" alt="Book Publication" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute -bottom-8 -left-6 bg-white rounded-3xl shadow-[0_20px_40px_rgba(79,119,255,0.12)] p-6 border border-gray-100 animate-float">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-serif font-black text-primary">25</span>
                                        <span className="text-secondary text-2xl font-black">+</span>
                                    </div>
                                    <p className="text-dark-light text-[11px] font-black uppercase tracking-[0.2em] mt-1">Research Fields</p>
                                </div>
                            </div>
                            <div className="col-span-5 pt-16">
                                <div className="rounded-[2rem] overflow-hidden shadow-xl h-64 mb-6 border-4 border-white">
                                    <img src="/fistudy-assets/resources/about-journal-2.png" alt="Book Editions" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                                </div>
                                <div className="bg-gradient-to-br from-primary to-primary-dark rounded-[2rem] p-8 text-white relative overflow-hidden shadow-xl">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12" />
                                    <div className="flex items-baseline gap-1 mb-2">
                                        <span className="text-3xl font-serif font-bold">02</span>
                                        <span className="text-secondary text-xl font-black">+</span>
                                    </div>
                                    <p className="text-white/80 text-[11px] font-black uppercase tracking-widest leading-tight">Years of Academic Leadership</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — Narrative */}
                    <motion.div {...fadeInUp} className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-px w-10 bg-secondary" />
                            <span className="text-secondary font-black text-[11px] uppercase tracking-[0.3em]">Our Philosophical Core</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-dark leading-[1.1] mb-8">
                            Cultivating a Global <span className="text-primary italic">Spectrum of Knowledge</span>
                        </h2>
                        <p className="text-muted leading-relaxed text-lg mb-10 border-l-2 border-primary/15 pl-8">
                            Sanmati Spectrum is India's rising multidisciplinary beacon, dedicating to bridging the gap between traditional intellectual rigor and modern scientific discourse. We celebrate original research and book publications alike.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                            {[
                                { title: 'The Mission', desc: 'To empower researchers by providing a high-impact, peer-reviewed ecosystem for global visibility.', icon: 'M' },
                                { title: 'The Vision', desc: 'To become the gold standard in multidisciplinary publishing and academic integrity.', icon: 'V' },
                            ].map((item, i) => (
                                <div key={i} className="group p-6 rounded-2xl bg-warm-bg border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                                    <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center text-primary font-black text-sm mb-4 group-hover:bg-primary group-hover:text-white transition-colors uppercase">{item.icon}</div>
                                    <h3 className="font-bold text-dark mb-2 tracking-tight">{item.title}</h3>
                                    <p className="text-muted text-[13px] leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-8">
                            <Link href="/basic-info/about-journal"
                                className="group px-8 py-4 bg-primary text-white rounded-2xl font-bold text-xs hover:bg-primary-dark transition-all flex items-center gap-3 shadow-xl shadow-primary/20 hover:-translate-y-1 uppercase tracking-widest">
                                <ChevronRight className="w-4 h-4" /> Explore Our Ethos
                            </Link>
                            <div className="hidden sm:block">
                                <p className="text-muted text-[11px] font-black uppercase tracking-[0.2em] mb-1">Authenticated</p>
                                <p className="text-dark font-black text-sm">ISSN: 3108-1819</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
