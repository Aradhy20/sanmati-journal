import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Star, CheckCircle, BookMarked, Sparkles, Globe } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative flex flex-col min-h-[100svh] overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/library-bg.png')" }}>
            {/* Soft white overlay for readability */}
            <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px] z-0" />
            {/* Soft decorative blobs */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 -left-1/4 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] lg:w-[650px] lg:h-[650px] bg-primary/10 rounded-full blur-[120px] sm:blur-[150px] lg:blur-[180px]" />
                <div className="absolute bottom-0 right-0 w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] lg:w-[500px] lg:h-[500px] bg-secondary/8 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-primary/6 rounded-full blur-[100px]" />
            </div>

            {/* Subtle dot-grid pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.06]"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-primary, #687EFF) 1.5px, transparent 0)', backgroundSize: '40px 40px' }} />

            {/* Main Content – Two-Column Split */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-32 pb-24 lg:pt-36 lg:pb-32 flex-1 flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">

                    {/* ── LEFT: Text Content ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Tagline pill */}
                        <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 border border-primary/25 rounded-full mb-6">
                            <Sparkles className="w-3.5 h-3.5 text-primary" />
                            <span className="text-primary font-black text-[11px] uppercase tracking-[0.35em]">
                                ISSN: 3108-1819 · Peer-Reviewed Journal
                            </span>
                        </div>

                        {/* Hindi Tagline */}
                        <p className="text-secondary font-bold text-base mb-3 font-sans" lang="hi">
                            ज्ञान, शोध और प्रकाशन का एक राष्ट्रीय मंच
                        </p>

                        {/* Main Headline */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-8 leading-[1.15] tracking-tight text-dark">
                            Sanmati Spectrum of{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                Knowledge
                            </span>
                            <br />
                            <span className="text-dark">
                                &amp; Emerging Discourse
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-10 max-w-lg border-l-4 border-primary/40 pl-6">
                            A place for experts to share new ideas. A national, peer-reviewed quarterly journal inviting original research, case studies, and book publications across a wide range of research fields.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 mb-12 max-w-2xl">
                            <Link
                                href="/submission-guidelines/call-for-papers"
                                className="group w-full sm:w-auto justify-center px-7 py-3.5 bg-primary text-white rounded-full font-bold text-xs shadow-lg shadow-primary/30 hover:bg-dark transition-all flex items-center gap-2 hover:-translate-y-1 uppercase tracking-[0.1em]"
                            >
                                Submit
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                            </Link>
                            <Link
                                href="/archive"
                                className="group w-full sm:w-auto justify-center px-7 py-3.5 bg-dark text-white rounded-full font-bold text-xs hover:bg-[#0a1f3d] transition-all flex items-center gap-2 hover:-translate-y-1 uppercase tracking-[0.1em] shadow-lg shadow-dark/25"
                            >
                                <BookOpen className="w-4 h-4" /> Explore
                            </Link>
                            <Link
                                href="/book-publication"
                                className="group w-full sm:w-auto justify-center px-7 py-3.5 bg-secondary text-white rounded-full font-bold text-xs hover:bg-[#e56940] transition-all flex items-center gap-2 hover:-translate-y-1 uppercase tracking-[0.1em] shadow-lg shadow-secondary/25"
                            >
                                <BookMarked className="w-4 h-4" /> Learn
                            </Link>
                        </div>
                    </motion.div>

                    {/* ── RIGHT: Visual + Floating Badges ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative hidden lg:block"
                    >
                        {/* Main large image — Goddess Saraswati */}
                        <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(104,126,255,0.25)] border-4 border-white/60 bg-white/40 backdrop-blur-md p-6">
                            <img
                                src="/images/saraswati.jpeg"
                                alt="Goddess Saraswati — Symbol of Knowledge"
                                className="w-full aspect-square object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105"
                                loading="eager"
                            />
                            {/* Bottom overlay detail */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-white/40 via-transparent to-transparent">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-dark/80 text-xs font-bold uppercase tracking-widest">New Submissions Open — 2026</span>
                                </div>
                                <div className="flex -space-x-3">
                                    {['https://i.pravatar.cc/36?img=3', 'https://i.pravatar.cc/36?img=5', 'https://i.pravatar.cc/36?img=7'].map((src, j) => (
                                        <img key={j} src={src} alt="Reviewer" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow" />
                                    ))}
                                    <div className="w-9 h-9 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] font-black text-white shadow">+12</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge — Readers (Glassmorphism z-10 over z-0 image) */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute top-12 -left-8 bg-white/60 backdrop-blur-md rounded-2xl shadow-xl p-5 border border-white/40 z-10"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                                    <Users className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-2xl font-black text-dark leading-none">2,000+</p>
                                    <p className="text-slate-600 text-[10px] font-black uppercase tracking-widest mt-0.5">Active Readers</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Horizontal Trust Bar below the Hero Section */}
            <div className="relative w-full bg-white/80 backdrop-blur-md border-t border-gray-100 py-4 shadow-sm z-20 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                        {[
                            { icon: CheckCircle, label: 'Authenticated', value: 'ISSN: 3108-1819', color: 'text-primary' },
                            { icon: Star, label: 'Impact', value: 'Double-Blind Review', color: 'text-secondary' },
                            { icon: Users, label: 'Authors', value: '200+ Contributors', color: 'text-primary' },
                            { icon: BookOpen, label: 'Archive', value: '500+ Papers', color: 'text-dark' },
                            { icon: Globe, label: 'Scope', value: 'A Wide Range of Research Fields', color: 'text-primary' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <item.icon className={`w-5 h-5 flex-shrink-0 ${item.color}`} />
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest leading-none mb-0.5">{item.label}</p>
                                    <p className="text-slate-800 text-[12px] font-bold">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
