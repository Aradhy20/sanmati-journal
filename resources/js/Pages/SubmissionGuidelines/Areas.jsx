import PageHeader from '../../Components/PageHeader';
import MainLayout from '../../Layouts/MainLayout';
import {
    Search, Globe, Radio, Cpu, GraduationCap,
    TrendingUp, Scale, HeartPulse, Leaf, BookOpen,
    Mail
} from 'lucide-react';
import { Link } from '@inertiajs/react';
import { GridPattern, DotPattern } from '../../Components/Graphics';
import { ScrollReveal, revealVariants, ScaleOnHover } from '../../Components/ScrollReveal';

export default function AreasOfSubmission() {
    const areas = [
        { title: "Arts & Humanities", icon: <Palette className="w-6 h-6" /> },
        { title: "Social Sciences", icon: <Globe className="w-6 h-6" /> },
        { title: "Journalism & Mass Communication", icon: <Radio className="w-6 h-6" /> },
        { title: "Science & Technology", icon: <Cpu className="w-6 h-6" /> },
        { title: "Education", icon: <GraduationCap className="w-6 h-6" /> },
        { title: "Management & Commerce", icon: <TrendingUp className="w-6 h-6" /> },
        { title: "Law & Public Administration", icon: <Scale className="w-6 h-6" /> },
        { title: "Health & Medical Sciences", icon: <HeartPulse className="w-6 h-6" /> },
        { title: "Environment & Sustainable Development", icon: <Leaf className="w-6 h-6" /> },
        { title: "Indian Knowledge Systems", icon: <BookOpen className="w-6 h-6" /> },
    ];

    return (
        <MainLayout>
            <div className="bg-slate-50 min-h-screen">
                <PageHeader
                    title="Areas of Submission"
                    breadcrumb="Submission"
                    subtitle="Multidisciplinary Scope & Coverage"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative overflow-hidden">
                    <DotPattern className="opacity-10" />
                    <div className="max-w-5xl mx-auto mt-12 relative z-10">
                        <ScrollReveal variants={revealVariants.zoom}>
                            <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
                                <GridPattern className="opacity-5" />
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <Search className="w-32 h-32" />
                                </div>

                                <div className="relative z-10">
                                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Scope of the Journal</h2>
                                    <p className="text-slate-700 text-lg leading-relaxed mb-12 max-w-3xl">
                                        Sanmati Spectrum of Knowledge & Emerging Discourse welcomes original research submissions across a wide range of disciplines. Authors are encouraged to submit papers in the following key sectors:
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                                        {areas.map((area, i) => (
                                            <ScrollReveal key={i} variants={revealVariants.zoom} delay={i * 0.05}>
                                                <ScaleOnHover>
                                                    <div className="group flex items-center gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-blue-900 hover:border-blue-900 transition-all duration-300 relative overflow-hidden">
                                                        <GridPattern className="opacity-0 group-hover:opacity-5 transition-opacity" />
                                                        <div className="relative z-10 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                                                            {area.icon}
                                                        </div>
                                                        <span className="relative z-10 font-bold text-slate-800 group-hover:text-white transition-colors text-lg">
                                                            {area.title}
                                                        </span>
                                                    </div>
                                                </ScaleOnHover>
                                            </ScrollReveal>
                                        ))}
                                    </div>

                                    <ScrollReveal variants={revealVariants.zoom} delay={0.3}>
                                        <div className="mt-16 p-8 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                                            <GridPattern className="opacity-10" />
                                            <div className="max-w-xl relative z-10">
                                                <h4 className="text-xl font-bold text-blue-900 mb-2">Ready to Contribute?</h4>
                                                <p className="text-slate-600">Ensure your manuscript aligns with one of our focus areas and follows the formatting guidelines.</p>
                                            </div>
                                            <div className="flex gap-4 shrink-0 relative z-10">
                                                <ScaleOnHover>
                                                    <Link href="/submission-guidelines/important-info" className="px-6 py-3 bg-white border border-slate-200 rounded-full font-bold text-slate-900 hover:bg-slate-50 transition-colors block">
                                                        Formatting Rules
                                                    </Link>
                                                </ScaleOnHover>
                                                <ScaleOnHover>
                                                    <a href="mailto:sanmatijournal@gmail.com" className="px-6 py-3 bg-blue-900 text-white rounded-full font-bold hover:bg-blue-800 transition-colors flex items-center gap-2">
                                                        <Mail className="w-4 h-4" /> Submit Paper
                                                    </a>
                                                </ScaleOnHover>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

function Palette({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
            <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
            <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.5-1.1s-.4-.7-.4-1.2c0-.9.7-1.6 1.6-1.6h5.8c.8 0 1.5-.7 1.5-1.5 0-3.9-3.9-7-8-7z" />
        </svg>
    );
}
