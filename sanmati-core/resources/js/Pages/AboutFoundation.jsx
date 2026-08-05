import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import PageHeader from '../Components/PageHeader';
import Seo from '../Components/Seo';
import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Eye, Target } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
};

export default function AboutFoundation() {
    const jsonLd = {
        schema: {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Sanmati Education & Research Foundation of India",
            "url": "https://sanmatijournal.in/about-foundation",
            "description": "Sanmati Education & Research Foundation of India promotes holistic social development through education, academic research, and publication activities."
        },
        breadcrumb: [
            { name: 'Home', url: '/' },
            { name: 'About Foundation', url: '/about-foundation' }
        ]
    };

    const objectives = [
        "To promote quality education, research, and publication activities.",
        "To publish and distribute books, journals, magazines, newsletters, and research papers.",
        "To organize seminars, workshops, conferences, award ceremonies, and awareness campaigns.",
        "To establish, manage, and support schools, colleges, libraries, and other new educational institutions.",
        "To promote education, vocational training, and skill development for underprivileged and economically weaker sections of society.",
        "To support inclusive and special education initiatives for differently abled children and individuals.",
        "To organize educational, health, and social awareness programs for public welfare.",
        "To confer awards and honors upon outstanding educators, researchers, social workers, and talented individuals for their contributions to society.",
        "To promote women empowerment, human rights, social justice, equality, and an inclusive society free from discrimination.",
        "To encourage activities related to environmental protection, renewable energy, animal welfare, and overall social development."
    ];

    return (
        <MainLayout
            title="Sanmati Education & Research Foundation of India | About Us"
            description="Sanmati Education & Research Foundation of India is dedicated to promoting holistic social development, academic research, publishing, and educational welfare."
            keywords="sanmati foundation, education foundation India, research foundation, academic publisher India, social development foundation"
            jsonLd={jsonLd}
        >

            <PageHeader
                title="The Foundation"
                breadcrumb="About Foundation"
                subtitle="Building an educated, empowered, and harmonious society."
            />

            <div className="bg-[#FFFDF8] py-12 lg:py-16 text-[#2E2E2E]">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Name & Meaning */}
                    <motion.div 
                        {...fadeInUp}
                        className="max-w-3xl mx-auto text-center mb-12"
                    >
                        <h2 className="text-xl md:text-2xl font-serif font-bold text-dark mb-4 leading-tight">
                            Sanmati Education & Research Foundation of India
                        </h2>
                        <div className="text-xs text-slate-500 leading-relaxed space-y-3 font-medium">
                            <p>
                                The name reflects the objectives and core ideology of the organization. The word <span className="font-bold text-primary">"Sanmati"</span> means wisdom, positive thinking, and right guidance, symbolizing education, knowledge, and moral values. 
                            </p>
                            <p>
                                The terms <span className="font-bold text-primary">"Education & Research"</span> represent the foundation's commitment towards education, research, innovation, book publication, and knowledge development. The word <span className="font-bold text-primary">"Foundation"</span> highlights its social and welfare-oriented identity, while <span className="font-bold text-primary">"of India"</span> signifies the organization's dedication to serving society, education, and human development at the national level.
                            </p>
                        </div>
                    </motion.div>

                    {/* About Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12 max-w-4xl mx-auto">
                        <motion.div 
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-[#E9E5DD] relative bg-[#F7F4EC]">
                                <img src="/images/saraswati.jpeg" alt="Foundation Activity" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-4"
                        >
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 rounded text-primary text-[10px] font-bold uppercase tracking-wider">
                                <Shield className="w-3.5 h-3.5" /> About Us
                            </div>
                            <h3 className="text-lg font-serif font-bold text-dark">Promoting Holistic Social Development</h3>
                            <div className="text-xs text-slate-500 leading-relaxed font-medium space-y-3">
                                <p>
                                    Sanmati Education & Research Foundation of India is a social, educational, and research-oriented organization dedicated to promoting holistic social development through education, research, innovation, and welfare activities. The foundation works towards spreading knowledge and awareness by organizing quality educational programs, book publications, research activities, seminars, workshops, conferences, and skill development initiatives.
                                </p>
                                <p>
                                    The foundation is especially committed to the upliftment of underprivileged communities, women, children, senior citizens, and differently abled individuals. It actively promotes human rights, women empowerment, equality, inclusive growth, and sustainable community development.
                                </p>
                                <p>
                                    We also recognize and honor outstanding educators, researchers, social workers, and talented individuals for their remarkable contributions to society. Through continuous efforts in research, innovation, vocational training, and community welfare programs, the foundation aims to build an educated, empowered, self-reliant, and socially responsible nation.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Vision & Mission */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
                        <motion.div 
                            {...fadeInUp}
                            className="bg-white p-6 rounded-xl border border-[#E9E5DD]"
                        >
                            <div className="w-10 h-10 bg-[#F7F4EC] border border-[#E9E5DD] rounded flex items-center justify-center text-primary mb-4">
                                <Eye className="w-5 h-5" />
                            </div>
                            <h3 className="text-sm font-serif font-bold text-dark mb-2">Our Vision</h3>
                            <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                To build an educated, empowered, inclusive, and self-reliant society through education, research, book publication, seminars, workshops, innovation, and social welfare.
                            </p>
                        </motion.div>

                        <motion.div 
                            {...fadeInUp}
                            className="bg-white p-6 rounded-xl border border-[#E9E5DD]"
                        >
                            <div className="w-10 h-10 bg-[#F7F4EC] border border-[#E9E5DD] rounded flex items-center justify-center text-secondary mb-4">
                                <Target className="w-5 h-5" />
                            </div>
                            <h3 className="text-sm font-serif font-bold text-dark mb-2">Our Mission</h3>
                            <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                To promote education, research, book publication, seminars, workshops, and skill development activities for the social, educational, and cultural upliftment of underprivileged communities, women, children, and differently abled individuals, while encouraging innovation, environmental protection, human rights, equality, cultural values, and sustainable community development.
                            </p>
                        </motion.div>
                    </div>

                    {/* Objectives & Scope */}
                    <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
                        <div className="text-center mb-6">
                            <h3 className="text-lg font-serif font-bold text-dark">Objective & Scope</h3>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Key focus areas and strategic goals of the foundation.</p>
                        </div>
                        
                        <div className="bg-white rounded-xl border border-[#E9E5DD] p-6 md:p-8">
                            <ul className="space-y-4">
                                {objectives.map((obj, idx) => (
                                    <motion.li 
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.03 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#F7F4EC] border border-[#E9E5DD] flex items-center justify-center text-primary mt-0.5">
                                            <CheckCircle2 className="w-3 h-3" />
                                        </div>
                                        <p className="text-xs text-slate-600 leading-relaxed font-medium">{obj}</p>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                </div>
            </div>
        </MainLayout>
    );
}
