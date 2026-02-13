import PageHeader from '../Components/PageHeader';
import MainLayout from '../Layouts/MainLayout';
import { ScrollReveal, revealVariants } from '../Components/ScrollReveal';
import { GlassyBlob, GridPattern } from '../Components/Graphics';
import { DynamicCard, GradientText } from '../Components/DynamicCard';

export default function AboutJournal() {
    return (
        <MainLayout>
            <PageHeader
                title="About the Journal"
                breadcrumb="Basic Information"
                subtitle="Sanmati Spectrum of Knowledge & Emerging Discourse"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative">
                <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                    <GridPattern className="w-[400px] h-[400px]" />
                </div>

                <ScrollReveal variants={revealVariants.zoom}>
                    <DynamicCard className="p-10 mb-12" gradient="from-blue-600 to-indigo-800">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Introduction</h2>
                        <div className="space-y-6">
                            <p className="text-slate-700 text-lg leading-relaxed">
                                <strong className="text-blue-900">Sanmati Spectrum of Knowledge & Emerging Discourse</strong> is dedicated to promoting multidisciplinary academic dialogue and advancing knowledge through rigorous research. The journal encourages innovative perspectives that integrate arts, sciences, society, culture, and technology.
                            </p>
                            <p className="text-slate-700 text-lg leading-relaxed">
                                As a national, peer-reviewed, and refereed quarterly journal, we provide a scholarly platform for original research, case studies, thematic articles, book reviews, and conference papers.
                            </p>
                        </div>
                    </DynamicCard>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ScrollReveal variants={revealVariants.left} delay={0.2}>
                        <div className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-100 shadow-xl">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
                                Journal Details
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    { label: "ISSN (Print)", value: "3108-1819" },
                                    { label: "Frequency", value: "Quarterly" },
                                    { label: "Format", value: "Print (Offline)" },
                                    { label: "Language", value: "Bilingual (Hindi & English)" }
                                ].map((item, i) => (
                                    <li key={i} className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors rounded-lg px-2">
                                        <span className="text-slate-600 font-medium">{item.label}</span>
                                        <span className="font-bold text-slate-900">{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal variants={revealVariants.right} delay={0.3}>
                        <div className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-100 shadow-xl">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <div className="w-1.5 h-6 bg-indigo-600 rounded-full" />
                                Publication Info
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    { label: "Commencement", value: "2026" },
                                    { label: "Nature", value: "National" }
                                ].map((item, i) => (
                                    <li key={i} className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors rounded-lg px-2">
                                        <span className="text-slate-600 font-medium">{item.label}</span>
                                        <span className="font-bold text-slate-900">{item.value}</span>
                                    </li>
                                ))}
                                <li className="flex flex-col py-3 px-2">
                                    <span className="text-slate-600 font-medium mb-2">Publisher</span>
                                    <div className="bg-blue-50 p-4 rounded-2xl">
                                        <span className="font-bold text-blue-900 block mb-1">JTS Publications</span>
                                        <span className="text-sm text-slate-600 leading-relaxed">V-508 Gali No. 17, Vijay Park, Delhi – 110053</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </MainLayout>
    );
}
