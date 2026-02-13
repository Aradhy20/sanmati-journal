import Hero from '../Components/Hero';
import { Link } from '@inertiajs/react';
import { BookOpen, Clock, Globe, ShieldCheck, ArrowRight, FileText } from 'lucide-react';
import { ScrollReveal, ScaleOnHover, revealVariants } from '../Components/ScrollReveal';
import NewsTicker from '../Components/NewsTicker';
import StatsCounter from '../Components/StatsCounter';
import MainLayout from '../Layouts/MainLayout';
import ProcessTimeline from '../Components/ProcessTimeline';
import FeaturedPapers from '../Components/FeaturedPapers';
import Testimonials from '../Components/Testimonials';
import { DynamicCard, GradientText } from '../Components/DynamicCard';
import { GridPattern, GlassyBlob, DotPattern, FloatingGraphic } from '../Components/DecorativeElements';

const DecorativeShapes = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <GridPattern className="opacity-40" />
        <GlassyBlob className="top-[10%] left-[-5%] w-96 h-96" color="bg-blue-100" />
        <GlassyBlob className="top-[40%] right-[-5%] w-[500px] h-[500px]" color="bg-purple-100" />
        <GlassyBlob className="bottom-[10%] left-[10%] w-72 h-72" color="bg-amber-100" />
    </div>
);

export default function Home({ newsItems, featuredPapers }) {
    return (
        <MainLayout>
            <Hero />
            <NewsTicker items={newsItems} />

            <div className="relative">
                <DecorativeShapes />
                <StatsCounter />

                {/* Why Publish With Us? - Interactive Grid */}
                <section className="py-24 relative z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <span className="text-blue-600 font-bold tracking-widest text-sm uppercase px-4 py-1 bg-blue-50 rounded-full inline-block">Why Choose Sanmati</span>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-4 mb-4">
                                    <GradientText>Excellence</GradientText> in Publishing
                                </h2>
                                <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                                    We prioritize academic integrity, rigorous peer review, and global accessibility for your research.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    icon: Clock,
                                    title: "Fast Peer Review",
                                    desc: "Rigorous yet efficient double-blind peer review process completed within 4-6 weeks.",
                                    gradient: "from-blue-500 to-indigo-600",
                                    iconColor: "text-blue-600",
                                    bg: "bg-blue-50"
                                },
                                {
                                    icon: Globe,
                                    title: "Global Reach",
                                    desc: "Open access formatting ensures your research reaches scholars worldwide instantly.",
                                    gradient: "from-green-500 to-emerald-600",
                                    iconColor: "text-green-600",
                                    bg: "bg-green-50"
                                },
                                {
                                    icon: ShieldCheck,
                                    title: "Academic Integrity",
                                    desc: "Zero tolerance for plagiarism with strict adherence to COPE guidelines.",
                                    gradient: "from-purple-500 to-fuchsia-600",
                                    iconColor: "text-purple-600",
                                    bg: "bg-purple-50"
                                },
                                {
                                    icon: BookOpen,
                                    title: "Multidisciplinary",
                                    desc: "Welcoming diverse research across Arts, Humanities, Science, and Social Sciences.",
                                    gradient: "from-amber-500 to-orange-600",
                                    iconColor: "text-amber-600",
                                    bg: "bg-amber-50"
                                }
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <ScrollReveal key={i} delay={i * 0.1} variants={revealVariants.zoom}>
                                        <DynamicCard gradient={item.gradient} className="h-full p-8">
                                            <div className={`relative z-10 mb-6 p-4 rounded-2xl w-fit ${item.bg} group-hover:scale-110 transition-transform duration-300`}>
                                                <Icon className={`w-10 h-10 ${item.iconColor}`} />
                                            </div>
                                            <h3 className="relative z-10 text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-800 transition-colors">{item.title}</h3>
                                            <p className="relative z-10 text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                                        </DynamicCard>
                                    </ScrollReveal>
                                )
                            })}
                        </div>
                    </div>
                </section>

                <ProcessTimeline />

                {/* Editorial Leadership - Animated Cards */}
                <section className="py-24 bg-slate-50 relative overflow-hidden transition-colors duration-300">
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <DotPattern className="opacity-20" />
                        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30 animate-blob" />
                        <div className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-200 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000" />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <ScrollReveal>
                            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                                <div>
                                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">
                                        Editorial Leadership
                                    </h2>
                                    <p className="text-slate-600">
                                        Guided by distinguished experts in their fields.
                                    </p>
                                </div>
                                <Link
                                    href="/editorial-team"
                                    className="text-blue-600 font-bold hover:underline flex items-center gap-2"
                                >
                                    View Entire Team <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Editor-in-Chief */}
                            <ScrollReveal delay={0.1} variants={revealVariants.left}>
                                <div className="relative group bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
                                    <GridPattern className="opacity-5" />
                                    <div className="h-32 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden" />
                                    <div className="px-8 pb-8 relative">
                                        <div className="relative -mt-20 mb-6 w-fit">
                                            <div className="w-40 h-40 rounded-full border-4 border-white shadow-xl overflow-hidden relative z-10">
                                                <img src="/mam.jpg" alt="Dr. Namrta Jain" className="w-full h-full object-cover" />
                                            </div>
                                        </div>
                                        <div>
                                            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest rounded-full mb-3">
                                                Editor-in-Chief
                                            </span>
                                            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-3">Dr. Namrta Jain</h3>
                                            <p className="text-slate-600 leading-relaxed mb-6">Spearheading the journal’s mission to foster multidisciplinary research and academic excellence.</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Co-Editor */}
                            <ScrollReveal delay={0.2} variants={revealVariants.right}>
                                <div className="relative group bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
                                    <GridPattern className="opacity-5" />
                                    <div className="h-32 bg-gradient-to-r from-yellow-500 to-amber-600 relative overflow-hidden" />
                                    <div className="px-8 pb-8 relative">
                                        <div className="relative -mt-20 mb-6 w-fit">
                                            <div className="w-40 h-40 rounded-full border-4 border-white shadow-xl overflow-hidden relative z-10">
                                                <img src="/sir.jpg" alt="Dr. Ratnesh K. Jain" className="w-full h-full object-cover" />
                                            </div>
                                        </div>
                                        <div>
                                            <span className="inline-block px-3 py-1 bg-yellow-50 text-yellow-700 text-xs font-bold uppercase tracking-widest rounded-full mb-3">
                                                Co-Editor-in-Chief
                                            </span>
                                            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-3">Dr. Ratnesh K. Jain</h3>
                                            <p className="text-slate-600 leading-relaxed mb-6">Ensuring the highest standards of peer review, ethical publishing, and editorial integrity.</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* About Journal */}
                <section className="py-24 bg-white relative overflow-hidden transition-colors duration-300">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 translate-x-32" />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <ScrollReveal variants={revealVariants.left}>
                                <FloatingGraphic>
                                    <div className="relative">
                                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-xl animate-pulse" />
                                        <div className="relative bg-slate-900 text-white p-10 rounded-2xl shadow-2xl">
                                            <h3 className="text-2xl font-serif font-bold mb-6">Current Issue</h3>
                                            <div className="flex items-center gap-4 mb-8">
                                                <div className="p-4 bg-white/10 rounded-lg backdrop-blur">
                                                    <FileText className="w-12 h-12 text-yellow-400" />
                                                </div>
                                                <div>
                                                    <p className="text-blue-300 text-sm font-bold uppercase tracking-wider">Volume 1, Issue 1</p>
                                                    <p className="text-xl font-bold">Jan - Mar 2026</p>
                                                </div>
                                            </div>
                                            <Link href="/submission-guidelines/call-for-papers" className="block w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-center rounded-xl transition-colors">
                                                Submit Manuscript Now
                                            </Link>
                                        </div>
                                    </div>
                                </FloatingGraphic>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2} variants={revealVariants.right}>
                                <div>
                                    <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">About the Journal</h2>
                                    <p className="text-lg text-slate-700 leading-relaxed mb-6 text-justify">
                                        <strong className="text-blue-900">Sanmati Spectrum of Knowledge & Emerging Discourse</strong> (ISSN: 3108-1819) is a premier national, multidisciplinary, peer-reviewed journal.
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <Link href="/basic-info/about-journal" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-colors">
                                            Read More <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>


                <FeaturedPapers papers={featuredPapers} />
            </div>

            {/* Final CTA Section */}
            <section className="py-24 relative overflow-hidden text-center text-white">
                <div className="absolute inset-0 bg-blue-900 z-0" />
                <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-600 via-indigo-900 to-slate-900 opacity-90" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">Ready to Contribute?</h2>
                        <p className="text-xl text-blue-100 mb-12">Join our community of scholars and researchers.</p>
                        <Link href="/submission-guidelines/call-for-papers" className="px-10 py-5 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-slate-900 transition-all shadow-xl inline-block">
                            Submit Your Paper
                        </Link>
                    </ScrollReveal>
                </div>
            </section>

            <Testimonials />
        </MainLayout>
    );
}
