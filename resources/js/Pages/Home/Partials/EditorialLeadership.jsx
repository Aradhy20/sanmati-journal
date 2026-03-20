import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { Trophy, Users, Award, ArrowUpRight, ArrowRight } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export default function EditorialLeadership() {
    return (
        <section className="py-32 bg-white relative">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row items-end justify-between gap-10 mb-20">
                    <motion.div {...fadeInUp} className="max-w-2xl">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-px w-10 bg-secondary" />
                            <span className="text-secondary font-black text-[11px] uppercase tracking-[0.3em]">Guardians of Integrity</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-dark leading-tight">
                            Distinguished <span className="text-primary italic">Editorial Leadership</span>
                        </h2>
                    </motion.div>
                    <motion.div {...fadeInUp} className="hidden lg:block pb-2">
                        <Link href="/editorial-team/editorial-board" className="text-xs font-black uppercase tracking-[0.2em] text-dark-light hover:text-primary transition-colors flex items-center gap-3 group">
                            View Full Board <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Editor-in-Chief : Dr. Namrta Jain */}
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                        <div className="h-full rounded-[3rem] overflow-hidden bg-gradient-to-br from-primary to-primary-dark text-white p-10 flex flex-col items-center text-center shadow-2xl hover:-translate-y-2 transition-all duration-700 relative">
                            <div className="absolute top-0 right-0 p-8 opacity-5"><Trophy className="w-24 h-24 text-secondary scale-150 rotate-12" /></div>
                            <div className="w-44 h-44 rounded-[2.5rem] overflow-hidden mb-8 border-4 border-white/30 shadow-2xl relative z-10">
                                <img src="/mam.jpeg" alt="Dr. Namrta Jain" loading="lazy" decoding="async" className="w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-700" />
                            </div>
                            <span className="inline-block px-4 py-1.5 bg-secondary/25 border border-secondary/40 rounded-full text-[10px] text-secondary font-black tracking-widest uppercase mb-4 w-fit">Editor-in-Chief</span>
                            <h3 className="text-3xl font-serif font-bold mb-2 tracking-tight group-hover:text-secondary-light transition-colors duration-300">Dr. Namrta Jain</h3>
                            <p className="text-white/70 text-[12px] font-bold uppercase tracking-[0.1em] mb-2">Assistant Professor</p>
                            <p className="text-white/40 text-[10px] uppercase font-black tracking-widest mb-6">Teerthanker Mahaveer University, Moradabad</p>
                            
                            <div className="w-full bg-white/10 rounded-2xl p-4 mb-6 border border-white/10 text-xs">
                                <p className="flex justify-between border-b border-white/5 pb-2 mb-2"><span className="text-white/40 uppercase tracking-widest font-black text-[9px]">Email</span> <a href="mailto:sanmatijournal@gmail.com" className="font-bold hover:text-secondary transition-colors">sanmatijournal@gmail.com</a></p>
                                <p className="flex justify-between"><span className="text-white/40 uppercase tracking-widest font-black text-[9px]">Mob</span> <span className="font-bold">+91 9870713912 / 8979782949</span></p>
                            </div>

                            <div className="mt-auto w-full pt-4">
                                <a href="https://scholar.google.com/citations?user=YzXafxwAAAAJ&hl=en" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[11px] font-black tracking-widest uppercase text-white hover:text-secondary transition-colors">
                                    <ArrowUpRight className="w-3.5 h-3.5" /> Google Scholar Profile
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Managing Editor : Dr. Ratnesh Kumar Jain */}
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="group">
                        <div className="h-full rounded-[3rem] overflow-hidden bg-surface border border-gray-100 p-10 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:border-primary/20 hover:-translate-y-2 transition-all duration-700 relative">
                            <div className="absolute top-0 right-0 p-8 opacity-5"><Users className="w-24 h-24 text-primary scale-150 -rotate-12" /></div>
                            <div className="w-44 h-44 rounded-[2.5rem] overflow-hidden mb-8 border-4 border-white shadow-xl relative z-10 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                <img src="/sir.jpeg" alt="Dr. Ratnesh Kumar Jain" loading="lazy" decoding="async" className="w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-700" />
                            </div>
                            <span className="inline-block px-4 py-1.5 bg-primary/8 rounded-full text-[10px] text-primary font-black tracking-widest uppercase mb-4">Managing Editor</span>
                            <h3 className="text-3xl font-serif font-bold text-dark mb-2 group-hover:text-primary transition-colors duration-300">Dr. Ratnesh Kr. Jain</h3>
                            <p className="text-muted text-[12px] font-bold uppercase tracking-wider mb-2">Asst. Dean / Assoc. Professor</p>
                            <p className="text-dark/40 text-[10px] uppercase font-black tracking-widest mb-6">Teerthanker Mahaveer University, Moradabad</p>
                            
                            <div className="w-full bg-warm-bg rounded-2xl p-4 mb-6 border border-gray-50 text-xs">
                                <p className="flex justify-between border-b border-gray-200 pb-2 mb-2"><span className="text-muted uppercase tracking-widest font-black text-[9px]">Email</span> <a href="mailto:Jainratnesh79@gmail.com" className="font-bold text-dark hover:text-primary transition-colors">Jainratnesh79@gmail.com</a></p>
                                <p className="flex justify-between"><span className="text-muted uppercase tracking-widest font-black text-[9px]">Mob</span> <span className="font-bold text-dark">+91 7999525735</span></p>
                            </div>

                            <div className="mt-auto w-full pt-4">
                                <a href="https://www.tmu.ac.in/nss-coordinator-desk" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[11px] font-black tracking-widest uppercase text-dark hover:text-primary transition-colors">
                                    <ArrowUpRight className="w-3.5 h-3.5" /> TMU Official Profile
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Executive Editor : Dr. Kalpna Jain */}
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="group">
                        <div className="h-full rounded-[3rem] overflow-hidden bg-surface border border-gray-100 p-10 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:border-secondary/20 hover:-translate-y-2 transition-all duration-700 relative">
                            <div className="absolute top-0 right-0 p-8 opacity-5"><Award className="w-24 h-24 text-secondary scale-150" /></div>
                            <div className="w-44 h-44 rounded-[2.5rem] overflow-hidden mb-8 border-4 border-white shadow-xl relative z-10 -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                <img src="/dr kalpana jian.jpeg" alt="Dr. Kalpna Jain" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                            </div>
                            <span className="inline-block px-4 py-1.5 bg-secondary/10 rounded-full text-[10px] text-secondary font-black tracking-widest uppercase mb-4">Executive Editor</span>
                            <h3 className="text-3xl font-serif font-bold text-dark mb-2 group-hover:text-primary transition-colors duration-300">Dr. Kalpna Jain</h3>
                            <p className="text-muted text-[12px] font-bold uppercase tracking-wider mb-2">Principal / Assoc. Professor</p>
                            <p className="text-dark/40 text-[10px] uppercase font-black tracking-widest mb-6">Teerthanker Mahaveer University, Moradabad</p>
                            
                            <div className="w-full bg-warm-bg rounded-2xl p-4 mb-6 border border-gray-50 text-xs text-left">
                                <p className="flex justify-between border-b border-gray-200 pb-2 mb-2"><span className="text-muted uppercase tracking-widest font-black text-[9px]">Email</span> <a href="mailto:Kalpnajain69@gmail.com" className="font-bold text-dark hover:text-primary transition-colors">Kalpnajain69@gmail.com</a></p>
                                <p className="flex justify-between"><span className="text-muted uppercase tracking-widest font-black text-[9px]">Mob</span> <span className="font-bold text-dark">+91 9259283830</span></p>
                            </div>

                            <div className="mt-auto w-full pt-4">
                                <a href="https://www.researchgate.net/profile/Dr-Jain-23" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[11px] font-black tracking-widest uppercase text-dark hover:text-primary transition-colors">
                                    <ArrowUpRight className="w-3.5 h-3.5" /> ResearchGate Profile
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
