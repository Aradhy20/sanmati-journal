import PageHeader from '../../Components/PageHeader';
import MainLayout from '../../Layouts/MainLayout';
import {
    FileText, Mail, Globe, ShieldCheck, Clock,
    BookOpen, Type, AlignLeft, Layout, Users,
    ListChecks, ArrowRight
} from 'lucide-react';
import { Link } from '@inertiajs/react';
import { GridPattern, DotPattern } from '../../Components/Graphics';
import { ScrollReveal, revealVariants, ScaleOnHover } from '../../Components/ScrollReveal';

export default function ImportantInformation() {
    const guidelines = [
        { label: "Submission Mode", value: "Email only", icon: <Mail className="w-5 h-5" /> },
        { label: "Submission Email", value: "sanmatijournal@gmail.com", icon: <Mail className="w-5 h-5 text-blue-600" /> },
        { label: "Language", value: "Hindi / English", icon: <Globe className="w-5 h-5" /> },
        { label: "Review Process", value: "Double-Blind Peer Review", icon: <ShieldCheck className="w-5 h-5 text-emerald-600" /> },
        { label: "Publication Frequency", value: "Quarterly", icon: <Clock className="w-5 h-5" /> },
        { label: "Manuscripts", value: "Original and unpublished.", icon: <FileText className="w-5 h-5" /> },
        { label: "Submission Format", value: "MS Word (.doc/.docx)", icon: <BookOpen className="w-5 h-5 text-blue-600" /> },
        { label: "Font", value: "Times New Roman (Eng), Mangal Unicode (Hindi)", icon: <Type className="w-5 h-5" /> },
        { label: "Title", value: "14 pt Bold", icon: <Type className="w-5 h-5 font-bold" /> },
        { label: "Main Text", value: "12 pt | Line spacing: 1.5", icon: <AlignLeft className="w-5 h-5" /> },
        { label: "Abstract", value: "150–250 words with 4–6 keywords", icon: <Layout className="w-5 h-5" /> },
        { label: "Maximum Co-authors", value: "Two", icon: <Users className="w-5 h-5 text-purple-600" /> },
        { label: "Referencing Style", value: "APA", icon: <ListChecks className="w-5 h-5 text-emerald-600" /> },
    ];

    return (
        <MainLayout>
            <div className="bg-slate-50 min-h-screen">
                <PageHeader
                    title="Important Information"
                    breadcrumb="Submission"
                    subtitle="Formatting Rules & Submission Guidelines"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative overflow-hidden">
                    <DotPattern className="opacity-10" />
                    <div className="max-w-4xl mx-auto mt-12 relative z-10">
                        <ScrollReveal variants={revealVariants.zoom}>
                            <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                                <GridPattern className="opacity-5" />
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <FileText className="w-32 h-32" />
                                </div>

                                <div className="relative z-10">
                                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Author Checklist</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                        {guidelines.map((item, i) => (
                                            <div key={i} className="flex items-center justify-between py-4 border-b border-slate-50 group hover:bg-slate-50/50 px-4 rounded-xl transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <div className="text-slate-400 group-hover:text-blue-600 transition-colors">
                                                        {item.icon}
                                                    </div>
                                                    <span className="text-sm font-bold text-slate-500 uppercase tracking-tight">{item.label}</span>
                                                </div>
                                                <span className="text-sm font-bold text-slate-900 text-right max-w-[200px]">
                                                    {item.value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <ScrollReveal variants={revealVariants.zoom} delay={0.3}>
                                        <div className="mt-12 p-8 bg-blue-900 text-white rounded-3xl shadow-xl shadow-blue-900/10 relative overflow-hidden group">
                                            <GridPattern className="opacity-20 group-hover:scale-110 transition-transform duration-1000" />
                                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                                                <div className="flex-grow">
                                                    <h4 className="text-xl font-bold mb-2">Academic Discourse</h4>
                                                    <p className="text-blue-100 italic leading-relaxed">
                                                        Researchers, academicians, and scholars are encouraged to contribute and be part of this multidisciplinary academic discourse.
                                                    </p>
                                                </div>
                                                <div className="shrink-0">
                                                    <ScaleOnHover>
                                                        <Link href="/submission-guidelines/publication-charges" className="px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-all flex items-center gap-2">
                                                            Review Publication Fees <ArrowRight className="w-4 h-4" />
                                                        </Link>
                                                    </ScaleOnHover>
                                                </div>
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
