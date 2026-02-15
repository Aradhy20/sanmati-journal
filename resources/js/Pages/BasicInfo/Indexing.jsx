import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import Seo from '@/Components/Seo';
import { motion } from 'framer-motion';
import { BookOpen, Target, FileCheck, Users, Globe, TrendingUp } from 'lucide-react';

const Indexing = () => {
    const indexingBodies = [
        {
            name: 'Google Scholar',
            description: 'Sanmati Journal is indexed in Google Scholar, the world\'s largest academic search engine, ensuring broad visibility for published research.',
            icon: Globe,
            status: 'Indexed',
        },
        {
            name: 'ISSN (International Standard Serial Number)',
            description: 'Our journal holds a registered ISSN, establishing it as a recognized and uniquely identifiable serial publication worldwide.',
            icon: FileCheck,
            status: 'Registered',
        },
        {
            name: 'DOI (Digital Object Identifier)',
            description: 'Every published paper receives a unique DOI, providing a permanent link for citation and ensuring long-term accessibility.',
            icon: Target,
            status: 'Assigned per paper',
        },
        {
            name: 'DRJI (Directory of Research Journals Indexing)',
            description: 'Indexed in DRJI, a reputed directory that evaluates and indexes quality research journals from across the globe.',
            icon: BookOpen,
            status: 'Indexed',
        },
        {
            name: 'CrossRef',
            description: 'As a CrossRef member, our DOIs are registered in the largest citation linking network, facilitating scholarly reference linking.',
            icon: TrendingUp,
            status: 'Member',
        },
        {
            name: 'Open Access',
            description: 'All articles are published under an open access model, ensuring research is freely available to readers worldwide without subscription barriers.',
            icon: Users,
            status: 'Full Open Access',
        },
    ];

    return (
        <MainLayout>
            <Seo
                title="Indexing & Abstracting — Sanmati Journal"
                description="Sanmati Journal is indexed in Google Scholar, DRJI, CrossRef and holds ISSN registration. All papers receive DOI identifiers."
            />

            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 font-serif mb-4">
                            Indexing & Abstracting
                        </h1>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Sanmati Journal is indexed and abstracted in several prestigious databases
                            and directories, ensuring maximum visibility and discoverability for your research.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {indexingBodies.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100"
                                >
                                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.name}</h3>
                                    <p className="text-slate-600 text-sm mb-3">{item.description}</p>
                                    <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                                        {item.status}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default Indexing;
