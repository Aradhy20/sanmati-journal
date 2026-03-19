import PageHeader from '../Components/PageHeader';
import MainLayout from '../Layouts/MainLayout';
import { motion } from 'framer-motion';
import Seo from '../Components/Seo';
import { Target, BookOpen, Globe, Award, Users, CheckCircle } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

export default function AboutJournal() {
    return (
        <MainLayout>
            <Seo
                title="About Us"
                description="Sanmati Spectrum of Knowledge - A leading national peer-reviewed journal fostering multidisciplinary research."
            />

            <PageHeader
                title="About the Journal"
                breadcrumb="Basic Information"
                subtitle="Sanmati Spectrum of Knowledge & Emerging Discourse"
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 relative">
                {/* ─── INTRODUCTION (The Scholarly Mandate) ─── */}
                <motion.div {...fadeInUp} className="relative group mb-24">
                    <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="relative bg-white border border-gray-100 rounded-[2.5rem] p-10 md:p-16 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-[0.03] rotate-12">
                            <BookOpen className="w-64 h-64 text-dark" />
                        </div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-10">
                                <span className="h-px w-10 bg-secondary" />
                                <span className="text-secondary font-black text-[11px] uppercase tracking-[0.4em]">The Mandate</span>
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-10 leading-[1.1]">
                                Engineering a <span className="text-primary italic">Paradigm for Research</span>
                            </h2>
                            
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                                <div className="lg:col-span-12 prose prose-lg prose-slate max-w-none">
                                    <p className="text-xl text-dark/70 font-medium leading-relaxed mb-8">
                                        <strong className="text-dark font-black">Sanmati Spectrum of Knowledge & Emerging Discourse</strong> serves as an elite national platform designed to catalyze the cross-pollination of complex ideas across diverse academic landscapes.
                                    </p>
                                    <p className="text-muted leading-relaxed mb-8">
                                        We operate at the intersection of traditional academic rigor and contemporary innovative inquiry. As a peer-reviewed, refereed quarterly journal, we provide a structured environment for the publication of transformative research that addresses both fundamental theoretical questions and urgent practical implementations.
                                    </p>
                                    <div className="flex flex-wrap gap-4 mt-10">
                                        {['Multidisciplinary', 'Peer-Reviewed', 'Refereed', 'Quarterly'].map((tag) => (
                                            <span key={tag} className="px-5 py-2 bg-surface border border-gray-100 rounded-full text-[10px] font-black uppercase tracking-widest text-secondary">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ─── MISSION & VISION (Strategic Core) ─── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative p-12 lg:p-16 bg-dark rounded-[3rem] overflow-hidden group shadow-2xl"
                    >
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-1000" />
                        
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:bg-primary transition-colors duration-500">
                                <Target className="w-8 h-8 text-secondary group-hover:text-white" />
                            </div>
                            <h3 className="text-3xl font-serif font-bold text-white mb-6">Our Mission</h3>
                            <p className="text-white/40 text-lg leading-relaxed font-medium">
                                To architect a global knowledge substrate where rigorous scholarly inquiry meets accessibility, empowering the next generation of researchers to solve multidimensional societal challenges.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative p-12 lg:p-16 bg-surface border border-gray-100 rounded-[3rem] overflow-hidden group hover:shadow-2xl transition-all duration-700"
                    >
                        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-1000" />
                        
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-50 flex items-center justify-center mb-10 group-hover:bg-secondary transition-colors duration-500">
                                <Globe className="w-8 h-8 text-primary group-hover:text-white" />
                            </div>
                            <h3 className="text-3xl font-serif font-bold text-dark mb-6">Our Vision</h3>
                            <p className="text-muted text-lg leading-relaxed font-medium">
                                To establish Sanmati Spectrum as the premier citation index for multidisciplinary excellence, bridging the historical wisdom of ivory towers with the agile advancements of the modern digital era.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* ─── JOURNAL ESSENTIALS (Structural Data) ─── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <motion.div {...fadeInUp} className="bg-white border border-gray-100 rounded-[2.5rem] p-10 lg:p-14 shadow-sm">
                        <div className="flex items-center gap-6 mb-12">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                                <Award className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-dark">Identity & Protocol</h3>
                        </div>
                        
                        <div className="space-y-4">
                            {[
                                { label: "ISSN (Print)", value: "3108-1819" },
                                { label: "Cycle Frequency", value: "Quarterly (4 Issues/Year)" },
                                { label: "Dissemination", value: "Print / Physical Archives" },
                                { label: "Linguistic Scope", value: "Bilingual (Hindi & English)" }
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between items-center p-6 bg-surface rounded-2xl border border-gray-50 hover:border-primary/20 transition-all group">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-muted group-hover:text-secondary transition-colors">{item.label}</span>
                                    <span className="font-bold text-dark group-hover:text-primary transition-colors">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-dark rounded-[2.5rem] p-10 lg:p-14 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-6 mb-12">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                    <Users className="w-7 h-7 text-secondary" />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-white">Institutional Origin</h3>
                            </div>
                            
                            <div className="space-y-6">
                                <div className="flex justify-between items-center p-6 bg-white/5 rounded-2xl border border-white/5">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/30">Inauguration</span>
                                    <span className="font-bold text-white">Academic Cycle 2026</span>
                                </div>
                                
                                <div className="p-8 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl border border-white/5 mt-6">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-secondary block mb-4">Official Publisher Address</span>
                                    <h4 className="text-xl font-bold text-white mb-2">JTS Publications</h4>
                                    <p className="text-white/40 text-sm leading-relaxed">
                                        V-508 Gali No. 17, Vijay Park,<br />
                                        Delhi – 110053, Bharat (India)
                                    </p>
                                </div>
                                
                                <div className="flex items-center gap-4 text-white/20 text-[10px] font-black uppercase tracking-[0.4em] justify-center mt-10">
                                    <span className="h-px w-8 bg-white/10" />
                                    National Research Register
                                    <span className="h-px w-8 bg-white/10" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}
