import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import Seo from '@/Components/Seo';
import { motion } from 'framer-motion';
import { BookOpen, Target, FileCheck, Users, Globe, TrendingUp, ExternalLink, Award } from 'lucide-react';
import PageHeader from '@/Components/PageHeader';

const Indexing = () => {
    const indexingBodies = [
        {
            name: 'Google Scholar',
            description: 'Sanmati Spectrum is indexed in Google Scholar, the world\'s largest academic search engine, ensuring broad visibility and indexing for published research.',
            icon: Globe,
            status: 'Indexed',
            url: 'https://scholar.google.com/citations?user=16C5z8MAAAAJ&hl=en',
        },
        {
            name: 'ISSN (Online Serial Identification)',
            description: 'Our journal holds a registered ISSN, establishing it as a recognized and uniquely identifiable serial publication worldwide.',
            icon: FileCheck,
            status: 'Registered',
        },
        {
            name: 'DOI (Digital Object Identifier)',
            description: 'Every published paper receives a unique DOI identifier, providing a permanent link for academic citation and indexing.',
            icon: Target,
            status: 'Assigned per paper',
        },
        {
            name: 'DRJI (Directory of Research Journals Indexing)',
            description: 'Indexed in DRJI, a reputed directory that evaluates and indexes quality peer-reviewed research journals from across the globe.',
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
            name: 'Open Access Licensing',
            description: 'All articles are published under an open access model, ensuring research is freely available to readers worldwide without paywall barriers.',
            icon: Users,
            status: 'Full Open Access',
        },
        {
            name: 'Journal Impact Factor (JIF)',
            description: 'Sanmati Spectrum has achieved an evaluated Journal Impact Factor of 5.3, reflecting the citation frequency of our peer-reviewed publications.',
            icon: Award,
            status: 'Impact Factor: 5.3',
        },
    ];

    const jsonLd = {
        schema: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Indexing & Abstracting Databases",
            "url": "https://sanmatijournal.in/basic-info/indexing",
            "description": "Sanmati Spectrum of Knowledge indexing details in Google Scholar, CrossRef DOI, ISSN portal, and academic databases."
        },
        breadcrumb: [
            { name: 'Home', url: '/' },
            { name: 'Basic Info', url: '/basic-info/about-journal' },
            { name: 'Indexing', url: '/basic-info/indexing' }
        ]
    };

    return (
        <MainLayout
            title="Indexing & Abstracting | Sanmati Spectrum Journal"
            description="Sanmati Spectrum Journal (ISSN 3108-1819) is indexed in Google Scholar, CrossRef DOI, and global databases with an evaluated Impact Factor of 5.3."
            keywords="journal indexing, Google Scholar journal, CrossRef DOI, ISSN 3108-1819, impact factor 5.3, open access indexing"
            jsonLd={jsonLd}
        >
            <PageHeader
                title="Indexing & Abstracting"
                subtitle="High-impact citation metrics and search database visibility trackers."
            />

            <section className="py-12 lg:py-16 bg-[#FFFDF8] text-[#2E2E2E]">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                     >
                        <h2 className="text-xl md:text-2xl font-serif font-bold text-dark max-w-xl mx-auto leading-tight">
                            Scholarly Discoverability & Global Recognition
                        </h2>
                        <p className="text-xs text-slate-500 font-medium max-w-lg mx-auto mt-2 leading-relaxed">
                            We index our quarterly articles in prominent research search engines to guarantee global visibility and citation stability for academic work.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {indexingBodies.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="bg-white rounded-xl p-5 border border-[#E9E5DD] flex flex-col justify-between hover:border-primary transition-colors"
                                >
                                    <div>
                                        <div className="w-8 h-8 bg-[#F7F4EC] border border-[#E9E5DD] rounded flex items-center justify-center mb-4 text-primary">
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <h3 className="text-sm font-serif font-bold text-dark mb-1.5">{item.name}</h3>
                                        <p className="text-slate-500 text-xs leading-relaxed mb-4 font-medium">{item.description}</p>
                                    </div>
                                    <div className="flex justify-between items-center pt-3 border-t border-[#E9E5DD]/60">
                                        <span className="inline-block px-2.5 py-0.5 bg-primary/10 text-primary text-[9px] font-bold uppercase tracking-wider rounded">
                                            {item.status}
                                        </span>
                                        {item.url && (
                                            <a
                                                href={item.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary hover:text-primary-dark text-[10px] font-bold flex items-center gap-1 uppercase tracking-wider"
                                            >
                                                Scholar Link <ExternalLink className="w-3 h-3" />
                                            </a>
                                        )}
                                    </div>
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
