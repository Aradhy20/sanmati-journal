import PageHeader from '../../Components/PageHeader';
import MainLayout from '../../Layouts/MainLayout';
import { Calendar, Users, MapPin, Mail, ArrowRight } from 'lucide-react';
import { GridPattern, DotPattern } from '../../Components/Graphics';
import { ScrollReveal, revealVariants, ScaleOnHover } from '../../Components/ScrollReveal';

export default function Seminars() {
    return (
        <MainLayout>
            <div className="bg-slate-50 min-h-screen">
                <PageHeader
                    title="Academic Seminars"
                    breadcrumb="Events"
                    subtitle="Fostering academic dialogue through specialized seminars"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative overflow-hidden">
                    <DotPattern className="opacity-10" />
                    <div className="max-w-4xl mx-auto mt-12 relative z-10">
                        <ScrollReveal variants={revealVariants.zoom}>
                            <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                                <GridPattern className="opacity-5" />
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <Users className="w-32 h-32" />
                                </div>

                                <div className="relative z-10">
                                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Upcoming Seminars</h2>
                                    <p className="text-slate-700 text-lg leading-relaxed mb-12">
                                        Sanmati Journal regularly organizes seminars focusing on emerging trends in multidisciplinary research, providing a platform for scholars to present their work-in-progress and receive expert feedback.
                                    </p>

                                    <div className="space-y-6">
                                        <ScrollReveal variants={revealVariants.left}>
                                            <ScaleOnHover>
                                                <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 relative group overflow-hidden">
                                                    <GridPattern className="opacity-10" />
                                                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                                        <div>
                                                            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">National Level</div>
                                                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Research Methodology & Ethics</h3>
                                                            <div className="flex flex-wrap gap-4 text-sm text-slate-500 font-medium">
                                                                <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> To be announced</div>
                                                                <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Virtual Event</div>
                                                            </div>
                                                        </div>
                                                        <button className="px-6 py-2.5 bg-blue-900 text-white font-bold rounded-full hover:bg-blue-800 transition-all flex items-center justify-center gap-2">
                                                            Notify Me <ArrowRight className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </ScaleOnHover>
                                        </ScrollReveal>

                                        <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 border-dashed text-center">
                                            <p className="text-slate-500 font-medium italic">More events coming soon for 2026 academic calendar.</p>
                                        </div>
                                    </div>

                                    <ScrollReveal variants={revealVariants.zoom} delay={0.2}>
                                        <div className="mt-16 p-8 bg-slate-900 text-white rounded-3xl relative overflow-hidden">
                                            <GridPattern className="opacity-10" />
                                            <h4 className="text-xl font-bold mb-4 relative z-10">Want to Host a Seminar?</h4>
                                            <p className="text-slate-300 mb-8 relative z-10">If your institution is interested in collaborating with Sanmati Journal for an academic seminar, please reach out to our event coordination team.</p>
                                            <a href="mailto:sanmatijournal@gmail.com" className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors relative z-10">
                                                <Mail className="w-5 h-5" /> contact@sanmatijournal.com
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
