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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
                {/* Intro */}
                <motion.div {...fadeInUp} className="card-modern p-8 md:p-12 mb-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5" />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-serif font-bold text-dark mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                <BookOpen className="text-primary w-5 h-5" />
                            </div>
                            Introduction
                        </h2>
                        <div className="prose prose-lg text-gray-600 max-w-none">
                            <p className="leading-relaxed mb-6">
                                <strong className="text-dark font-bold">Sanmati Spectrum of Knowledge & Emerging Discourse</strong> is dedicated to promoting multidisciplinary academic dialogue and advancing knowledge through rigorous research. The journal encourages innovative perspectives that integrate arts, sciences, society, culture, and technology.
                            </p>
                            <p className="leading-relaxed">
                                As a national, peer-reviewed, and refereed quarterly journal, we provide a scholarly platform for original research, case studies, thematic articles, book reviews, and conference papers.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <motion.div {...fadeInUp} transition={{ delay: 0.1 }}
                        className="h-full p-8 bg-gradient-to-br from-primary to-primary-dark text-white rounded-3xl shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-110 transition-transform duration-700" />
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                            <Target className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                        <p className="text-white/80 leading-relaxed text-lg">
                            To foster a global ecosystem of knowledge sharing where academic rigor meets innovative thinking, empowering researchers to solve tomorrow's challenges.
                        </p>
                    </motion.div>

                    <motion.div {...fadeInUp} transition={{ delay: 0.2 }}
                        className="h-full p-8 bg-gradient-to-br from-dark to-dark-light text-white rounded-3xl shadow-xl relative overflow-hidden group">
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full -ml-16 -mb-16 blur-2xl group-hover:scale-110 transition-transform duration-700" />
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                            <Globe className="w-6 h-6 text-secondary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                        <p className="text-white/70 leading-relaxed text-lg">
                            To become the world's most trusted multidisciplinary citation index, bridging the gap between traditional wisdom and modern scientific inquiry.
                        </p>
                    </motion.div>
                </div>

                {/* Key Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <motion.div {...fadeInUp} transition={{ delay: 0.3 }}
                        className="card-modern p-8">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <Award className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-dark">Journal Essentials</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                { label: "ISSN (Print)", value: "3108-1819" },
                                { label: "Frequency", value: "Quarterly" },
                                { label: "Format", value: "Print (Offline)" },
                                { label: "Language", value: "Bilingual (Hindi & English)" }
                            ].map((item, i) => (
                                <li key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors">
                                    <span className="text-gray-500 font-medium text-sm uppercase tracking-wide">{item.label}</span>
                                    <span className="font-bold text-dark">{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div {...fadeInUp} transition={{ delay: 0.4 }}
                        className="card-modern p-8 flex flex-col">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-dark">Publication Info</h3>
                        </div>
                        <ul className="space-y-4 flex-1">
                            {[
                                { label: "Commencement", value: "2026" },
                                { label: "Nature", value: "National" }
                            ].map((item, i) => (
                                <li key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-secondary/5 transition-colors">
                                    <span className="text-gray-500 font-medium text-sm uppercase tracking-wide">{item.label}</span>
                                    <span className="font-bold text-dark">{item.value}</span>
                                </li>
                            ))}
                            <li className="bg-gradient-to-br from-dark to-dark-light text-white p-6 rounded-2xl mt-2 shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-8 -mt-8" />
                                <span className="text-white/50 font-medium text-xs uppercase tracking-widest block mb-2">Publisher Address</span>
                                <span className="font-bold text-lg block mb-1">JTS Publications</span>
                                <span className="text-white/60 text-sm leading-relaxed block">V-508 Gali No. 17, Vijay Park, Delhi – 110053</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}
