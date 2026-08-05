import PageHeader from '../Components/PageHeader';
import MainLayout from '../Layouts/MainLayout';
import { motion } from 'framer-motion';
import Seo from '../Components/Seo';
import { Target, BookOpen, Globe, Award, Users, ShieldCheck, Microscope } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
};

export default function AboutJournal() {
    const jsonLd = {
        schema: {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Sanmati Spectrum of Knowledge",
            "url": "https://sanmatijournal.in/basic-info/about-journal",
            "description": "Sanmati Spectrum of Knowledge & Emerging Discourse is a leading peer-reviewed national multidisciplinary quarterly research journal indexed with CrossRef DOI (ISSN 3108-1819)."
        },
        breadcrumb: [
            { name: 'Home', url: '/' },
            { name: 'About Journal', url: '/basic-info/about-journal' }
        ]
    };

    return (
        <MainLayout
            title="About Peer Reviewed Multidisciplinary Research Journal | Sanmati Journal"
            description="Sanmati Spectrum of Knowledge (ISSN 3108-1819) is an international peer reviewed multidisciplinary research journal in India aligned with UGC Care standards to publish research paper in India."
            keywords="UGC Care Journal, Multidisciplinary Research Journal, Publish Research Paper in India, Peer Reviewed Journal, ISSN Journal, ISSN 3108-1819"
            jsonLd={jsonLd}
        >

            <PageHeader
                title="About Sanmati Peer Reviewed Multidisciplinary Research Journal"
                breadcrumb="Basic Information"
                subtitle="UGC Care Aligned & ISSN Registered Academic Journal in India"
            />

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 bg-[#FFFDF8] text-[#2E2E2E]">
                {/* ─── INTRODUCTION ─── */}
                <motion.div {...fadeInUp} className="relative mb-12">
                    <div className="relative bg-white border border-[#E9E5DD] rounded-xl p-6 md:p-10">
                        <div className="absolute top-0 right-0 p-6 opacity-[0.03] rotate-12">
                            <BookOpen className="w-32 h-32 text-dark" />
                        </div>
                        
                        <div className="relative z-10 space-y-6">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#F7F4EC] border border-[#E9E5DD] text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                                UGC Care & COPE Aligned Mandate
                            </div>
                            
                            <h2 className="text-xl md:text-2xl font-serif font-bold text-dark leading-tight">
                                UGC Care Aligned & Peer Reviewed Journal Mandate
                            </h2>
                            
                            <div className="space-y-4 text-xs text-slate-500 font-medium leading-relaxed">
                                <p className="text-sm text-dark font-bold">
                                    “Sanmati Spectrum of Knowledge & Emerging Discourse” is a national-level multidisciplinary quarterly research journal established in 2026 with the objective of promoting high-quality academic research, intellectual dialogue, and innovative scholarship across diverse disciplines.
                                </p>
                                <p>
                                    Published in print (offline) format with ISSN (Print): <strong className="text-dark">3108-1819</strong>, the journal serves as a credible and structured platform for scholars, academicians, researchers, and practitioners to disseminate original research. It is bilingual in nature, accepting submissions in both English and Hindi, thereby ensuring inclusivity and accessibility for a wide academic audience.
                                </p>
                                <p>
                                    In the contemporary global knowledge ecosystem, where disciplinary boundaries are increasingly fluid, the journal emphasizes multidisciplinary and interdisciplinary approaches that integrate insights from arts, humanities, social sciences, media studies, and scientific domains.
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {['Multidisciplinary', 'Bilingual', 'Peer-Reviewed', 'Quarterly'].map((tag) => (
                                        <span key={tag} className="px-2.5 py-0.5 bg-[#F7F4EC] border border-[#E9E5DD] rounded text-[9px] font-bold uppercase tracking-wider text-primary">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ─── MISSION & VISION ─── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative p-6 bg-white border border-[#E9E5DD] rounded-xl overflow-hidden"
                    >
                        <div className="relative z-10 space-y-4">
                            <div className="w-10 h-10 rounded bg-[#F7F4EC] border border-[#E9E5DD] flex items-center justify-center text-primary">
                                <Target className="w-5 h-5" />
                            </div>
                            <h3 className="text-sm font-serif font-bold text-dark">Our Mission</h3>
                            <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                To encourage original and impactful research, provide opportunities for early-career researchers and young scholars, and promote collaborative and interdisciplinary academic engagement, contributing to the broader goal of societal development and intellectual progress.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative p-6 bg-white border border-[#E9E5DD] rounded-xl overflow-hidden"
                    >
                        <div className="relative z-10 space-y-4">
                            <div className="w-10 h-10 rounded bg-[#F7F4EC] border border-[#E9E5DD] flex items-center justify-center text-secondary">
                                <Globe className="w-5 h-5" />
                            </div>
                            <h3 className="text-sm font-serif font-bold text-dark">Our Vision</h3>
                            <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                To emerge as a leading academic platform at both national and international levels, recognized for its scholarly rigor, ethical standards, and meaningful contributions to knowledge advancement.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* ─── SCOPE & ETHICS ─── */}
                <div className="mb-12">
                    <motion.div {...fadeInUp} className="bg-[#F7F4EC]/40 border border-[#E9E5DD] rounded-xl p-6 md:p-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded bg-[#F7F4EC] border border-[#E9E5DD] flex items-center justify-center text-primary">
                                        <Microscope className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-sm font-serif font-bold text-dark">Scope & Focus</h3>
                                </div>
                                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                    The scope of the journal is broad and inclusive, covering a wide range of disciplines including arts and humanities, social sciences, media and communication studies, natural and applied sciences, and emerging interdisciplinary fields. It welcomes a variety of scholarly contributions such as research articles, review papers, case studies, thematic essays, book reviews, and papers presented at conferences and seminars.
                                </p>
                                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                    A key strength lies in its focus on emerging research areas of contemporary academic and societal importance. These include fields such as artificial intelligence and society, digital humanities, climate change and sustainability, media and democracy, gender studies, social justice, globalization, and Indian knowledge systems.
                                </p>
                            </div>
                            
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded bg-[#F7F4EC] border border-[#E9E5DD] flex items-center justify-center text-secondary">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-sm font-serif font-bold text-dark">Editorial Philosophy & Ethics</h3>
                                </div>
                                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                    To ensure the integrity and quality of published research, the journal follows a strict <strong>double-blind peer review system</strong>, in which the identities of both authors and reviewers are kept confidential. Submissions are assessed by subject experts based on originality, relevance, methodological rigor, clarity of presentation, and contribution to existing knowledge.
                                </p>
                                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                    The journal also upholds a stringent policy against plagiarism. All manuscripts are screened using plagiarism detection tools, and only those that comply with the indexing guidelines prescribed by regulatory authorities such as UGC are considered for publication.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ─── EXPANDED ACADEMIC MANIFESTO ─── */}
                <div className="mb-12">
                    <motion.div {...fadeInUp} className="bg-white p-6 md:p-10 rounded-xl border border-[#E9E5DD]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <h3 className="text-sm font-serif font-bold text-dark flex items-center gap-2.5">
                                    <span className="w-8 h-8 rounded bg-[#F7F4EC] border border-[#E9E5DD] flex items-center justify-center text-primary"><BookOpen className="w-4 h-4"/></span>
                                    Submission Blueprint
                                </h3>
                                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                    The submission process is designed to be systematic and user-friendly. Authors are required to submit their manuscripts in <strong className="text-dark">MS Word format (.doc/.docx)</strong>, using <strong>Times New Roman</strong> font for English and <strong>Mangal Unicode</strong> for Hindi. The formatting guidelines specify a 14-point bold title, 12-point regular text, and 1.5-line spacing.
                                </p>
                                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                    Each manuscript must include an abstract of 150–250 words along with 4–6 keywords. The number of co-authors is limited to a maximum of two, and references must be formatted according to <strong>APA style</strong>. Submissions are accepted via email at <strong className="text-primary hover:underline"><a href="mailto:sanmatijournal@gmail.com">sanmatijournal@gmail.com</a></strong>, along with complete author details, institutional affiliation, and contact information.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-sm font-serif font-bold text-dark flex items-center gap-2.5">
                                    <span className="w-8 h-8 rounded bg-[#F7F4EC] border border-[#E9E5DD] flex items-center justify-center text-secondary"><Globe className="w-4 h-4"/></span>
                                    Global Relevance & Future
                                </h3>
                                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                    A key strength of \"Sanmati Spectrum\" lies in its focus on emerging research areas of contemporary societal importance, including <strong className="text-dark">artificial intelligence, digital humanities, climate change, media and democracy, and Indian knowledge systems</strong>. It explores the rich diversity of Indian intellectual traditions while simultaneously engaging with global theories.
                                </p>
                                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                    Looking toward the future, the journal aspires to achieve international recognition by being indexed into reputed databases such as <strong>Scopus, Web of Science, and ABDC</strong>. The journal has already established advanced publishing standards through <strong>DOI and Crossref</strong> integration, with digital platform expansion underway.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ─── JOURNAL ESSENTIALS ─── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div {...fadeInUp} className="bg-white border border-[#E9E5DD] rounded-xl p-6 md:p-8 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-[#F7F4EC] border border-[#E9E5DD] flex items-center justify-center text-primary">
                                <Award className="w-4.5 h-4.5" />
                            </div>
                            <h3 className="text-sm font-serif font-bold text-dark">Identity & Protocol</h3>
                        </div>
                        
                        <div className="space-y-2">
                            {[
                                { label: "ISSN (Print)", value: "3108-1819" },
                                { label: "Cycle Frequency", value: "Quarterly (4 Issues/Year)" },
                                { label: "Dissemination", value: "Print / Physical Insights" },
                                { label: "Linguistic Scope", value: "Bilingual (Hindi & English)" }
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between items-center p-4 bg-[#F7F4EC]/30 rounded-lg border border-[#E9E5DD]/60">
                                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">{item.label}</span>
                                    <span className="text-xs font-bold text-dark">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div {...fadeInUp} transition={{ delay: 0.05 }} className="bg-white border border-[#E9E5DD] rounded-xl p-6 md:p-8 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-[#F7F4EC] border border-[#E9E5DD] flex items-center justify-center text-secondary">
                                <Users className="w-4.5 h-4.5" />
                            </div>
                            <h3 className="text-sm font-serif font-bold text-dark">Institutional Origin</h3>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-4 bg-[#F7F4EC]/30 rounded-lg border border-[#E9E5DD]/60">
                                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Inauguration</span>
                                <span className="text-xs font-bold text-dark">Academic Cycle 2026</span>
                            </div>
                            
                            <div className="p-5 bg-[#F7F4EC]/50 rounded-lg border border-[#E9E5DD]">
                                <span className="text-[9px] font-bold uppercase tracking-wider text-secondary block mb-2">Official Publisher Address</span>
                                <h4 className="text-xs font-bold text-dark mb-1">Sanmati Publication</h4>
                                <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                                    Moradabad – 244001, Bharat (India)
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}
