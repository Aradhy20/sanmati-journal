import PageHeader from '../../Components/PageHeader';
import MainLayout from '../../Layouts/MainLayout';
import { Globe, Calendar, MapPin, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { GridPattern, DotPattern } from '../../Components/Graphics';
import { ScrollReveal, revealVariants, ScaleOnHover } from '../../Components/ScrollReveal';

export default function Conferences() {
    const conferences = [
        {
            title: "Global Discourse on Sustainable Development",
            date: "Nov 2026",
            location: "International Hybrid Conference",
            tag: "Upcoming"
        }
    ];

    return (
        <MainLayout>
            <div className="bg-slate-50 min-h-screen">
                <PageHeader
                    title="Academic Conferences"
                    breadcrumb="Events"
                    subtitle="International platforms for research dissemination"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative overflow-hidden">
                    <DotPattern className="opacity-10" />
                    <div className="max-w-4xl mx-auto mt-12 relative z-10">
                        <ScrollReveal variants={revealVariants.zoom}>
                            <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                                <GridPattern className="opacity-5" />
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <Globe className="w-32 h-32" />
                                </div>

                                <div className="relative z-10">
                                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">International Conferences</h2>
                                    <p className="text-slate-700 text-lg leading-relaxed mb-12">
                                        Sanmati Journal hosts and collaborates with leading universities to organize international conferences. These events provide a unique opportunity for global networking and high-impact scholarship.
                                    </p>

                                    <div className="grid grid-cols-1 gap-6 mb-16">
                                        {conferences.map((conf, i) => (
                                            <ScrollReveal key={i} delay={i * 0.1} variants={revealVariants.left}>
                                                <ScaleOnHover>
                                                    <div className="p-1 border border-slate-100 rounded-[32px] bg-gradient-to-br from-blue-500 to-indigo-600 shadow-xl shadow-blue-500/10">
                                                        <div className="bg-white rounded-[31px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                                            <div className="flex-grow">
                                                                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest rounded-full mb-4">
                                                                    <ShieldCheck className="w-3 h-3" /> Peer Reviewed
                                                                </div>
                                                                <h3 className="text-2xl font-black text-slate-900 mb-3 leading-tight">{conf.title}</h3>
                                                                <div className="flex flex-wrap gap-5 text-sm font-bold text-slate-500">
                                                                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-indigo-600" /> {conf.date}</div>
                                                                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-indigo-600" /> {conf.location}</div>
                                                                </div>
                                                            </div>
                                                            <button className="shrink-0 px-8 py-4 bg-slate-900 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-slate-800 transition-all flex items-center gap-2 text-xs">
                                                                View CFP <ArrowRight className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </ScaleOnHover>
                                            </ScrollReveal>
                                        ))}
                                    </div>

                                    <ScrollReveal variants={revealVariants.zoom} delay={0.2}>
                                        <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 relative overflow-hidden">
                                            <GridPattern className="opacity-5" />
                                            <h4 className="text-lg font-bold text-slate-900 mb-4">Call for Collaboration</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                                Are you planning an academic conference? Sanmati Journal offers publishing partnerships for special issues and conference proceedings. Join our network of institutional partners.
                                            </p>
                                            <a href="mailto:sanmatijournal@gmail.com" className="flex items-center gap-2 text-indigo-600 font-bold hover:underline">
                                                <Mail className="w-4 h-4" /> partner@sanmatijournal.com
                                            </a>
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
