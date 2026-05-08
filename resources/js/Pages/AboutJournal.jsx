import PageHeader from '../Components/PageHeader';
import MainLayout from '../Layouts/MainLayout';
import { motion } from 'framer-motion';
import Seo from '../Components/Seo';
import { Target, BookOpen, Globe, Award, Users, ShieldCheck, Microscope } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

export default function AboutJournal() {
    const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntity": {
            "@type": "Organization",
            "name": "Sanmati Spectrum of Knowledge & Emerging Discourse",
            "url": "https://sanmatijournal.in/basic-info/about-journal",
            "logo": "https://sanmatijournal.in/images/logo.png",
            "description": "Sanmati Spectrum of Knowledge & Emerging Discourse is a national-level multidisciplinary quarterly peer-reviewed research journal established with the objective of promoting high-quality academic research."
        }
    };

    return (
        <MainLayout>
            <Seo
                title="About Us"
                description="Sanmati Spectrum of Knowledge - A leading national peer-reviewed journal fostering multidisciplinary research."
                jsonLd={aboutSchema}
            />

            <PageHeader
                title="About the Journal"
                breadcrumb="Basic Information"
                subtitle="Sanmati Spectrum of Knowledge & Emerging Discourse"
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24 relative">
                {/* ─── INTRODUCTION ─── */}
                <motion.div {...fadeInUp} className="relative group mb-12 lg:mb-24">
                    <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="relative bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-[2.5rem] p-10 md:p-16 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 lg:p-12 opacity-[0.03] rotate-12">
                            <BookOpen className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 text-dark dark:text-white" />
                        </div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-10">
                                <span className="h-px w-10 bg-secondary" />
                                <span className="text-secondary dark:text-cyan-400 font-black text-[11px] uppercase tracking-[0.4em]">The Mandate</span>
                            </div>
                            
                            <h2 className="text-2xl md:text-3xl lg:text-4xl md:text-5xl font-serif font-bold text-dark dark:text-white mb-10 leading-[1.1]">
                                Promoting <span className="text-primary dark:text-primary-light italic">High-Quality</span> Academic Research
                            </h2>
                            
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                                <div className="lg:col-span-12 prose prose-lg prose-slate max-w-none">
                                    <p className="text-xl text-dark/70 dark:text-slate-300 font-medium leading-relaxed mb-8">
                                        <strong className="text-dark dark:text-white font-black">“Sanmati Spectrum of Knowledge & Emerging Discourse”</strong> is a national-level multidisciplinary quarterly research journal established in 2026 with the objective of promoting high-quality academic research, intellectual dialogue, and innovative scholarship across diverse disciplines.
                                    </p>
                                    <p className="text-muted dark:text-slate-400 leading-relaxed mb-4">
                                        Published in print (offline) format with ISSN (Print): <strong className="text-dark dark:text-white">3108-1819</strong>, the journal serves as a credible and structured platform for scholars, academicians, researchers, and practitioners to disseminate original research. It is bilingual in nature, accepting submissions in both English and Hindi, thereby ensuring inclusivity and accessibility for a wide academic audience.
                                    </p>
                                    <p className="text-muted dark:text-slate-400 leading-relaxed">
                                        In the contemporary global knowledge ecosystem, where disciplinary boundaries are increasingly fluid, the journal emphasizes multidisciplinary and interdisciplinary approaches that integrate insights from arts, humanities, social sciences, media studies, and scientific domains.
                                    </p>
                                    <div className="flex flex-wrap gap-4 mt-10">
                                        {['Multidisciplinary', 'Bilingual', 'Peer-Reviewed', 'Quarterly'].map((tag) => (
                                            <span key={tag} className="px-5 py-2 bg-surface dark:bg-slate-800 border border-gray-100 dark:border-slate-800 rounded-full text-[10px] font-black uppercase tracking-widest text-secondary dark:text-cyan-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ─── MISSION & VISION ─── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 lg:mb-24">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative p-6 lg:p-12 lg:p-16 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-[3rem] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-700"
                    >
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(10,37,64,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-1000" />
                        
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-warm-bg dark:bg-slate-800 shadow-sm border border-gray-50 dark:border-slate-700 flex items-center justify-center mb-10 group-hover:bg-primary transition-colors duration-500">
                                <Target className="w-8 h-8 text-secondary dark:text-cyan-400 group-hover:text-white" />
                            </div>
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark dark:text-white mb-6">Our Mission</h3>
                            <p className="text-muted dark:text-slate-400 text-lg leading-relaxed font-medium">
                                To encourage original and impactful research, provide opportunities for early-career researchers and young scholars, and promote collaborative and interdisciplinary academic engagement, contributing to the broader goal of societal development and intellectual progress.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative p-6 lg:p-12 lg:p-16 bg-surface dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-[3rem] overflow-hidden group hover:shadow-2xl transition-all duration-700"
                    >
                        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-1000" />
                        
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-gray-50 dark:border-slate-700 flex items-center justify-center mb-10 group-hover:bg-secondary transition-colors duration-500">
                                <Globe className="w-8 h-8 text-primary dark:text-primary-light group-hover:text-white" />
                            </div>
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark dark:text-white mb-6">Our Vision</h3>
                            <p className="text-muted dark:text-slate-400 text-lg leading-relaxed font-medium">
                                To emerge as a leading academic platform at both national and international levels, recognized for its scholarly rigor, ethical standards, and meaningful contributions to knowledge advancement.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* ─── SCOPE & ETHICS ─── */}
                <div className="mb-12 lg:mb-24">
                    <motion.div {...fadeInUp} className="bg-warm-bg dark:bg-slate-950 border border-gray-100 dark:border-slate-800 rounded-[3rem] p-10 lg:p-16 shadow-inner relative overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 relative z-10">
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-gray-50 dark:border-slate-700 flex items-center justify-center">
                                        <Microscope className="w-6 h-6 text-primary dark:text-primary-light" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-dark dark:text-white">Scope & Focus</h3>
                                </div>
                                <p className="text-muted dark:text-slate-400 leading-relaxed mb-6">
                                    The scope of the journal is broad and inclusive, covering a wide range of disciplines including arts and humanities, social sciences, media and communication studies, natural and applied sciences, and emerging interdisciplinary fields. It welcomes a variety of scholarly contributions such as research articles, review papers, case studies, thematic essays, book reviews, and papers presented at conferences and seminars.
                                </p>
                                <p className="text-muted dark:text-slate-400 leading-relaxed">
                                    A key strength lies in its focus on emerging research areas of contemporary academic and societal importance. These include fields such as artificial intelligence and society, digital humanities, climate change and sustainability, media and democracy, gender studies, social justice, globalization, and Indian knowledge systems.
                                </p>
                            </div>
                            
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-gray-50 dark:border-slate-700 flex items-center justify-center">
                                        <ShieldCheck className="w-6 h-6 text-secondary dark:text-cyan-400" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-dark dark:text-white">Editorial Philosophy & Ethics</h3>
                                </div>
                                <p className="text-muted dark:text-slate-400 leading-relaxed mb-6">
                                    To ensure the integrity and quality of published research, the journal follows a strict <strong>double-blind peer review system</strong>, in which the identities of both authors and reviewers are kept confidential. Submissions are assessed by subject experts based on originality, relevance, methodological rigor, clarity of presentation, and contribution to existing knowledge.
                                </p>
                                <p className="text-muted dark:text-slate-400 leading-relaxed">
                                    The journal also upholds a stringent policy against plagiarism. All manuscripts are screened using plagiarism detection tools, and only those that comply with the indexing guidelines prescribed by regulatory authorities such as UGC are considered for publication.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                
                {/* ─── EXPANDED ACADEMIC MANIFESTO ─── */}
                <div className="mb-12 lg:mb-24">
                    <motion.div {...fadeInUp} className="bg-white dark:bg-slate-900 p-10 lg:p-16 rounded-[3rem] border border-gray-100 dark:border-slate-800 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all duration-700">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-1000" />
                        
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                            <div>
                                <h3 className="text-2xl font-serif font-bold text-dark dark:text-white mb-8 flex items-center gap-4">
                                    <span className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-primary-light border border-primary/20 shadow-sm"><BookOpen className="w-6 h-6"/></span>
                                    Submission Blueprint
                                </h3>
                                <p className="text-muted dark:text-slate-400 leading-relaxed mb-6">
                                    The submission process is designed to be systematic and user-friendly. Authors are required to submit their manuscripts in <strong className="text-dark dark:text-white">MS Word format (.doc/.docx)</strong>, using <strong>Times New Roman</strong> font for English and <strong>Mangal Unicode</strong> for Hindi. The formatting guidelines specify a 14-point bold title, 12-point regular text, and 1.5-line spacing.
                                </p>
                                <p className="text-muted dark:text-slate-400 leading-relaxed">
                                    Each manuscript must include an abstract of 150–250 words along with 4–6 keywords. The number of co-authors is limited to a maximum of two, and references must be formatted according to <strong>APA style</strong>. Submissions are accepted via email at <strong className="text-primary dark:text-primary-light hover:underline"><a href="mailto:sanmatijournal@gmail.com">sanmatijournal@gmail.com</a></strong>, along with complete author details, institutional affiliation, and contact information.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-serif font-bold text-dark dark:text-white mb-8 flex items-center gap-4">
                                    <span className="w-12 h-12 rounded-2xl bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center text-secondary dark:text-cyan-400 border border-secondary/20 shadow-sm"><Globe className="w-6 h-6"/></span>
                                    Global Relevance & Future
                                </h3>
                                <p className="text-muted dark:text-slate-400 leading-relaxed mb-6">
                                    A key strength of "Sanmati Spectrum" lies in its focus on emerging research areas of contemporary societal importance, including <strong className="text-dark dark:text-white">artificial intelligence, digital humanities, climate change, media and democracy, and Indian knowledge systems</strong>. It explores the rich diversity of Indian intellectual traditions while simultaneously engaging with global theories.
                                </p>
                                <p className="text-muted dark:text-slate-400 leading-relaxed">
                                    Looking toward the future, the journal aspires to achieve international recognition by being indexed into reputed databases such as <strong>Scopus, Web of Science, and ABDC</strong>. The journal has already established advanced publishing standards through <strong>DOI and Crossref</strong> integration, with digital platform expansion underway.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ─── JOURNAL ESSENTIALS ─── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <motion.div {...fadeInUp} className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-[2.5rem] p-10 lg:p-14 shadow-sm">
                        <div className="flex items-center gap-6 mb-12">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                                <Award className="w-7 h-7 text-primary dark:text-primary-light" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-dark dark:text-white">Identity & Protocol</h3>
                        </div>
                        
                        <div className="space-y-4">
                            {[
                                { label: "ISSN (Print)", value: "3108-1819" },
                                { label: "Cycle Frequency", value: "Quarterly (4 Issues/Year)" },
                                { label: "Dissemination", value: "Print / Physical Insights" },
                                { label: "Linguistic Scope", value: "Bilingual (Hindi & English)" }
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between items-center p-6 bg-surface dark:bg-slate-800 rounded-2xl border border-gray-50 dark:border-slate-700/50 hover:border-primary/20 transition-all group">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-muted dark:text-slate-400 group-hover:text-secondary transition-colors">{item.label}</span>
                                    <span className="font-bold text-dark dark:text-white group-hover:text-primary dark:group-hover:text-primary-light transition-colors">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-[2.5rem] p-10 lg:p-14 shadow-sm relative overflow-hidden group hover:shadow-2xl transition-all duration-700">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px]" />
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-6 mb-12">
                                <div className="w-14 h-14 rounded-2xl bg-surface dark:bg-slate-800 border border-gray-50 dark:border-slate-700 flex items-center justify-center shadow-sm">
                                    <Users className="w-7 h-7 text-secondary dark:text-cyan-400" />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-dark dark:text-white">Institutional Origin</h3>
                            </div>
                            
                            <div className="space-y-6">
                                <div className="flex justify-between items-center p-6 bg-warm-bg dark:bg-slate-800 rounded-2xl border border-gray-50 dark:border-slate-700/50">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-muted dark:text-slate-400">Inauguration</span>
                                    <span className="font-bold text-dark dark:text-white">Academic Cycle 2026</span>
                                </div>
                                
                                <div className="p-8 bg-gradient-to-br from-primary/5 to-transparent dark:from-primary/10 dark:to-transparent rounded-3xl border border-primary/10 dark:border-primary/20 mt-6">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-secondary dark:text-cyan-400 block mb-4">Official Publisher Address</span>
                                    <h4 className="text-xl font-bold text-dark dark:text-white mb-2">Sanmati Publication</h4>
                                    <p className="text-muted dark:text-slate-400 text-sm leading-relaxed">
                                        Moradabad – 244001, Bharat (India)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}
