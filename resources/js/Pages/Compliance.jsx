import PageHeader from '../Components/PageHeader';
import MainLayout from '../Layouts/MainLayout';
import { Lock, FileCheck, Copyright, Shield, AlertCircle, Share2 } from 'lucide-react';
import { ScrollReveal, revealVariants } from '../Components/ScrollReveal';
import Seo from '../Components/Seo';

const PolicyCard = ({ icon: Icon, title, desc, color, delay }) => (
    <ScrollReveal variants={revealVariants.fadeUp} delay={delay} className="h-full">
        <div className={`h-full bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-300 group overflow-hidden relative`}>
            {/* Hover Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br from-${color}-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-${color}-50 text-${color}-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                    {title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm">
                    {desc}
                </p>
            </div>
        </div>
    </ScrollReveal>
);

export default function Compliance() {
    return (
        <MainLayout>
            <Seo
                title="Compliance & Copyright"
                description="Our Open Access policy, Copyright terms, and Author Declaration guidelines."
            />

            <div className="bg-slate-50 min-h-screen">
                <PageHeader
                    title="Compliance & Copyright"
                    breadcrumb="Legal"
                    subtitle="Our Commitment to Open and Ethical Publishing"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <PolicyCard
                            icon={Copyright}
                            color="blue"
                            title="Copyright Policy"
                            desc="Authors retain full copyright of their work under the Creative Commons Attribution License. By submitting, they grant the journal the right of first publication, ensuring their work is legally protected while allowing broad dissemination."
                            delay={0.1}
                        />

                        <PolicyCard
                            icon={Lock}
                            color="green"
                            title="Open Access"
                            desc="We believe knowledge should be free. All articles are available immediately upon publication to read, download, and share. This increases the visibility and citation impact of your research."
                            delay={0.2}
                        />

                        <PolicyCard
                            icon={FileCheck}
                            color="purple"
                            title="Author Declaration"
                            desc="Transparency is key. All authors must sign a formal declaration confirming the work's originality, absence of conflict of interest, and adherence to our ethical standards before publication."
                            delay={0.3}
                        />

                        <PolicyCard
                            icon={Shield}
                            color="red"
                            title="Plagiarism Policy"
                            desc="We adhere to a zero-tolerance policy against plagiarism. All submissions are screened using Turnitin. Similarity index must be below 20% (excluding references) to proceed to peer review."
                            delay={0.4}
                        />

                        <PolicyCard
                            icon={AlertCircle}
                            color="orange"
                            title="Conflict of Interest"
                            desc="Authors must disclose any financial or personal relationships that could influence the work. Reviewers and editors are also required to declare potential conflicts to ensure unbiased evaluation."
                            delay={0.5}
                        />

                        <PolicyCard
                            icon={Share2}
                            color="cyan"
                            title="Licensing & Sharing"
                            desc="Articles are licensed under CC BY-NC 4.0. You are free to share and adapt the material for non-commercial purposes, provided appropriate credit is given to the original author and source."
                            delay={0.6}
                        />

                    </div>

                    {/* Bottom CTA */}
                    <ScrollReveal variants={revealVariants.fadeUp} delay={0.7}>
                        <div className="mt-16 bg-blue-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
                            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-50" />

                            <div className="relative z-10 max-w-2xl mx-auto">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 font-serif">Have Legal Questions?</h3>
                                <p className="text-blue-100 mb-8">
                                    Our editorial office is available to clarify any doubts regarding copyright, licensing, or compliance.
                                </p>
                                <a href="/contact-us" className="inline-block px-8 py-3 bg-white text-blue-900 rounded-full font-bold hover:bg-blue-50 transition-colors">
                                    Contact Support
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </MainLayout>
    );
}
