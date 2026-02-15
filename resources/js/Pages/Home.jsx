import Hero from '../Components/Hero';
import { Link } from '@inertiajs/react';
import { BookOpen, Clock, Globe, ShieldCheck, ArrowRight, FileText, Users, Award, Zap, Brain } from 'lucide-react';
import { ScrollReveal, ScaleOnHover, revealVariants } from '../Components/ScrollReveal';
import NewsTicker from '../Components/NewsTicker';
import StatsCounter from '../Components/StatsCounter';
import MainLayout from '../Layouts/MainLayout';
import ProcessTimeline from '../Components/ProcessTimeline';
import FeaturedPapers from '../Components/FeaturedPapers';
import Testimonials from '../Components/Testimonials';
import { DynamicCard, GradientText } from '../Components/DynamicCard';
import { GridPattern, GlassyBlob, DotPattern, FloatingGraphic } from '../Components/DecorativeElements';
import HomeFeatures from '../Components/HomeFeatures'; // New Feature Section
import HomeFAQ from '../Components/HomeFAQ'; // New FAQ Section


const DecorativeShapes = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <GridPattern className="opacity-40" />
        <GlassyBlob className="top-[10%] left-[-5%] w-96 h-96" color="bg-blue-100" />
        <GlassyBlob className="top-[40%] right-[-5%] w-[500px] h-[500px]" color="bg-purple-100" />
        <GlassyBlob className="bottom-[10%] left-[10%] w-72 h-72" color="bg-amber-100" />
    </div>
);

// Social Proof Component
const TrustedBy = () => (
    <div className="py-10 border-b border-slate-100 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Trusted by Scholars from Top Institutions</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Placeholders for University Logos - Using Text for now */}
                <span className="text-base font-serif font-bold text-slate-800 hover:text-blue-800 transition-colors cursor-default">IIT Delhi</span>
                <span className="text-base font-serif font-bold text-slate-800 hover:text-blue-800 transition-colors cursor-default">JNU</span>
                <span className="text-base font-serif font-bold text-slate-800 hover:text-blue-800 transition-colors cursor-default">BHU</span>
                <span className="text-base font-serif font-bold text-slate-800 hover:text-blue-800 transition-colors cursor-default">Teerthanker Mahaveer University</span>
                <span className="text-base font-serif font-bold text-slate-800 hover:text-blue-800 transition-colors cursor-default">DU</span>
            </div>
        </div>
    </div>
);

export default function Home({ newsItems, featuredPapers }) {
    return (
        <MainLayout>
            <Hero />
            <NewsTicker items={newsItems} />
            <TrustedBy />

            <div className="relative">
                <DecorativeShapes />
                <StatsCounter />

                {/* Why Publish With Us? - Bento Grid Style */}
                <section className="py-24 relative z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <span className="text-blue-600 font-bold tracking-widest text-sm uppercase px-4 py-1 bg-blue-50 rounded-full inline-block mb-4">Why Choose Sanmati</span>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                                    <GradientText>Excellence</GradientText> in Every Aspect
                                </h2>
                                <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed">
                                    We combine academic rigor with modern publishing speed.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
                            {/* Large Card 1 */}
                            <ScrollReveal className="md:col-span-2 row-span-2">
                                <div className="group h-full bg-white rounded-3xl p-8 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col justify-end">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                                            <Clock className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Rapid Peer Review</h3>
                                        <p className="text-slate-600 text-sm">Our streamlined process ensures a first decision within 4-6 weeks, helping you publish faster without compromising quality.</p>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Card 2 */}
                            <ScrollReveal className="md:col-span-1">
                                <div className="group h-full bg-white rounded-3xl p-8 border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -mr-8 -mt-8" />
                                    <div className="relative z-10">
                                        <Globe className="w-10 h-10 text-green-600 mb-4" />
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Global Reach</h3>
                                        <p className="text-slate-500 text-sm">Open access ensures instant global visibility.</p>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Card 3 */}
                            <ScrollReveal className="md:col-span-1">
                                <div className="group h-full bg-white rounded-3xl p-8 border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -mr-8 -mt-8" />
                                    <div className="relative z-10">
                                        <ShieldCheck className="w-10 h-10 text-purple-600 mb-4" />
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Integrity</h3>
                                        <p className="text-slate-500 text-sm">Strict adherence to COPE ethical guidelines.</p>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Large Card 4 - AI Powered */}
                            <ScrollReveal className="md:col-span-3">
                                <div className="group h-full bg-slate-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden flex items-center justify-between">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 z-0" />
                                    <GridPattern className="opacity-20 text-white z-0" />

                                    <div className="relative z-10 max-w-2xl">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Brain className="w-8 h-8 text-yellow-400" />
                                            <span className="font-bold text-yellow-400 uppercase tracking-widest text-sm">AI-Enhanced Discovery</span>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold mb-3">Smart Indexing for Better Citations</h3>
                                        <p className="text-blue-100 text-sm">We utilize advanced AI algorithms to ensure your paper is correctly categorized and easily discoverable by researchers in your field.</p>
                                    </div>
                                    <div className="hidden md:block relative z-10">
                                        <Link href="/basic-info/indexing" className="px-6 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-yellow-400 transition-colors">
                                            Learn about Indexing
                                        </Link>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* NEW: Zig Zag Feature Section */}
                <HomeFeatures />

                <ProcessTimeline />

                {/* Editorial Leadership - Animated Cards */}
                <section className="py-24 bg-white relative overflow-hidden transition-colors duration-300">
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
                                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Dr. Namrta Jain</h3>
                                            <p className="text-slate-600 text-sm leading-relaxed mb-4">"Our mission is to foster a global dialogue through rigorous, multidisciplinary research that addresses the challenges of tomorrow."</p>
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
                                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Dr. Ratnesh K. Jain</h3>
                                            <p className="text-slate-600 text-sm leading-relaxed mb-4">"We are committed to maintaining the highest ethical standards while ensuring that quality research reaches a global audience instantly."</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                <FeaturedPapers papers={featuredPapers} />

                {/* NEW: FAQ Section */}
                <HomeFAQ />
            </div>

            {/* Final CTA Section */}
            <section className="py-24 relative overflow-hidden text-center text-white">
                <div className="absolute inset-0 bg-blue-900 z-0" />
                <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-600 via-indigo-900 to-slate-900 opacity-90" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">Ready to Contribute?</h2>
                        <p className="text-base text-blue-100 mb-10">Join our community of scholars and researchers today.</p>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <Link href="/submission-guidelines/call-for-papers" className="px-8 py-4 bg-white text-blue-900 rounded-full font-bold text-sm hover:bg-yellow-400 hover:text-slate-900 transition-all shadow-xl inline-block">
                                Submit Your Paper
                            </Link>
                            <Link href="/contact" className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-bold text-sm hover:bg-white/10 transition-all inline-block hover:border-white">
                                Contact Us
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <Testimonials />
        </MainLayout>
    );
}
