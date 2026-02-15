import PageHeader from '../Components/PageHeader';
import MainLayout from '../Layouts/MainLayout';
import { ScrollReveal, revealVariants } from '../Components/ScrollReveal';
import { GridPattern, DotPattern } from '../Components/Graphics';
import Seo from '../Components/Seo';
import { Target, BookOpen, Globe, Award, CheckCircle2, Users } from 'lucide-react';

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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                    <GridPattern className="w-[600px] h-[600px] text-blue-500" />
                </div>

                {/* Intro Section */}
                <ScrollReveal variants={revealVariants.fadeUp}>
                    <div className="p-8 md:p-12 mb-16 bg-white rounded-[2.5rem] shadow-xl border border-slate-100 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 opacity-50" />
                        <div className="relative z-10">
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <BookOpen className="text-blue-600" /> Introduction
                            </h2>
                            <div className="prose prose-lg text-slate-600 max-w-none">
                                <p className="leading-relaxed mb-6">
                                    <strong className="text-blue-900 font-bold">Sanmati Spectrum of Knowledge & Emerging Discourse</strong> is dedicated to promoting multidisciplinary academic dialogue and advancing knowledge through rigorous research. The journal encourages innovative perspectives that integrate arts, sciences, society, culture, and technology.
                                </p>
                                <p className="leading-relaxed">
                                    As a national, peer-reviewed, and refereed quarterly journal, we provide a scholarly platform for original research, case studies, thematic articles, book reviews, and conference papers.
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Mission & Vision Split */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <ScrollReveal variants={revealVariants.left} delay={0.1}>
                        <div className="h-full p-8 bg-blue-600 text-white rounded-3xl shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-110 transition-transform duration-700" />
                            <Target className="w-12 h-12 text-blue-200 mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-blue-100 leading-relaxed text-lg">
                                To foster a global ecosystem of knowledge sharing where academic rigor meets innovative thinking, empowering researchers to solve tomorrow's challenges.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal variants={revealVariants.right} delay={0.2}>
                        <div className="h-full p-8 bg-slate-900 text-white rounded-3xl shadow-xl relative overflow-hidden group">
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full -ml-16 -mb-16 blur-2xl group-hover:scale-110 transition-transform duration-700" />
                            <Globe className="w-12 h-12 text-indigo-300 mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-slate-300 leading-relaxed text-lg">
                                To become the world's most trusted multidisciplinary citation index, bridging the gap between traditional wisdom and modern scientific inquiry.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Key Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ScrollReveal variants={revealVariants.fadeUp} delay={0.3}>
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                                    <Award className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Journal Essentials</h3>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    { label: "ISSN (Print)", value: "3108-1819" },
                                    { label: "Frequency", value: "Quarterly" },
                                    { label: "Format", value: "Print (Offline)" },
                                    { label: "Language", value: "Bilingual (Hindi & English)" }
                                ].map((item, i) => (
                                    <li key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors cursor-default">
                                        <span className="text-slate-600 font-medium text-sm uppercase tracking-wide">{item.label}</span>
                                        <span className="font-bold text-slate-900">{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal variants={revealVariants.fadeUp} delay={0.4}>
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Publication Info</h3>
                            </div>

                            <ul className="space-y-4 flex-1">
                                {[
                                    { label: "Commencement", value: "2026" },
                                    { label: "Nature", value: "National" }
                                ].map((item, i) => (
                                    <li key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-xl hover:bg-indigo-50 transition-colors cursor-default">
                                        <span className="text-slate-600 font-medium text-sm uppercase tracking-wide">{item.label}</span>
                                        <span className="font-bold text-slate-900">{item.value}</span>
                                    </li>
                                ))}

                                <li className="bg-slate-900 text-white p-6 rounded-2xl mt-4 shadow-lg relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10" />
                                    <span className="text-slate-400 font-medium text-xs uppercase tracking-widest block mb-2">Publisher Address</span>
                                    <span className="font-bold text-lg block mb-1">JTS Publications</span>
                                    <span className="text-slate-300 text-sm leading-relaxed block max-w-xs">V-508 Gali No. 17, Vijay Park, Delhi – 110053</span>
                                </li>
                            </ul>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </MainLayout>
    );
}
