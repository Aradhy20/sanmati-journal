import PageHeader from '../../Components/PageHeader';
import MainLayout from '../../Layouts/MainLayout';
import { Cpu, Clock, MapPin, ArrowRight, BookOpen } from 'lucide-react';
import { GridPattern, DotPattern } from '../../Components/Graphics';
import { ScrollReveal, revealVariants } from '../../Components/ScrollReveal';

export default function Workshop() {
    return (
        <MainLayout>
            <div className="bg-slate-50 min-h-screen">
                <PageHeader
                    title="Academic Workshops"
                    breadcrumb="Events"
                    subtitle="Practical skills for modern researchers"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative overflow-hidden">
                    <DotPattern className="opacity-10" />
                    <div className="max-w-4xl mx-auto mt-12 relative z-10">
                        <ScrollReveal variants={revealVariants.zoom}>
                            <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                                <GridPattern className="opacity-5" />
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <Cpu className="w-32 h-32" />
                                </div>

                                <div className="relative z-10">
                                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Hands-on Workshops</h2>
                                    <p className="text-slate-700 text-lg leading-relaxed mb-12">
                                        Our workshops are designed to bridge the gap between theory and practice. We provide intensive training on research tools, publication ethics, and academic writing to empower the next generation of scholars.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                                        <ScrollReveal variants={revealVariants.zoom} delay={0.1}>
                                            <div className="group p-8 bg-slate-50 rounded-[32px] border border-slate-200 hover:bg-white hover:shadow-2xl hover:border-blue-300 transition-all duration-300 relative overflow-hidden h-full">
                                                <GridPattern className="opacity-0 group-hover:opacity-5 transition-opacity" />
                                                <div className="relative z-10">
                                                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                                                        <BookOpen className="w-7 h-7" />
                                                    </div>
                                                    <h3 className="text-xl font-bold text-slate-900 mb-3">Academic Writing</h3>
                                                    <p className="text-slate-600 text-sm leading-relaxed mb-6">Master the art of structuring research papers and navigating the peer-review process.</p>
                                                    <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-widest">
                                                        Learn More <ArrowRight className="w-4 h-4" />
                                                    </div>
                                                </div>
                                            </div>
                                        </ScrollReveal>

                                        <ScrollReveal variants={revealVariants.zoom} delay={0.2}>
                                            <div className="group p-8 bg-slate-50 rounded-[32px] border border-slate-200 hover:bg-white hover:shadow-2xl hover:border-blue-300 transition-all duration-300 relative overflow-hidden h-full">
                                                <GridPattern className="opacity-0 group-hover:opacity-5 transition-opacity" />
                                                <div className="relative z-10">
                                                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                                                        <Cpu className="w-7 h-7" />
                                                    </div>
                                                    <h3 className="text-xl font-bold text-slate-900 mb-3">Data Analysis</h3>
                                                    <p className="text-slate-600 text-sm leading-relaxed mb-6">Comprehensive training on statistical tools and qualitative data analysis software.</p>
                                                    <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-widest">
                                                        Learn More <ArrowRight className="w-4 h-4" />
                                                    </div>
                                                </div>
                                            </div>
                                        </ScrollReveal>
                                    </div>

                                    <ScrollReveal variants={revealVariants.zoom} delay={0.3}>
                                        <div className="p-10 bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-[40px] relative overflow-hidden group">
                                            <GridPattern className="opacity-20 group-hover:scale-110 transition-transform duration-1000" />
                                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                                                <div className="max-w-md">
                                                    <h4 className="text-2xl font-bold mb-4">Upcoming Session</h4>
                                                    <p className="text-blue-100 text-sm leading-relaxed mb-6">
                                                        &ldquo;Mastering APA 7th Edition & Reference Management Tools&rdquo; — A 3-hour intensive workshop for doctoral students.
                                                    </p>
                                                    <div className="flex flex-wrap gap-4 text-xs font-bold">
                                                        <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> 10:00 AM - 1:00 PM</div>
                                                        <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Online via Zoom</div>
                                                    </div>
                                                </div>
                                                <button className="shrink-0 px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-all shadow-xl">
                                                    Register Now
                                                </button>
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
