import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Star, CheckCircle, BookMarked, Sparkles, Globe } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#eef1ff] via-[#f5f0ff] to-[#fff0f5]">
            {/* Soft decorative blobs */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 -left-1/4 w-[650px] h-[650px] bg-[#687EFF]/10 rounded-full blur-[180px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F87A53]/8 rounded-full blur-[160px]" />
                <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#687EFF]/6 rounded-full blur-[140px]" />
            </div>

            {/* Subtle dot-grid pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.06]"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #687EFF 1.5px, transparent 0)', backgroundSize: '40px 40px' }} />

            {/* Main Content – Two-Column Split */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-32 pb-24 lg:pt-36 lg:pb-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">

                    {/* ── LEFT: Text Content ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Tagline pill */}
                        <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#687EFF]/10 border border-[#687EFF]/25 rounded-full mb-6">
                            <Sparkles className="w-3.5 h-3.5 text-[#687EFF]" />
                            <span className="text-[#687EFF] font-black text-[11px] uppercase tracking-[0.35em]">
                                ISSN: 3108-1819 · Peer-Reviewed Journal
                            </span>
                        </div>

                        {/* Hindi Tagline */}
                        <p className="text-[#F87A53] font-bold text-base mb-3 font-sans" lang="hi">
                            ज्ञान, शोध और प्रकाशन का एक राष्ट्रीय मंच
                        </p>

                        {/* Main Headline */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-8 leading-[1.15] tracking-tight text-[#052143]">
                            Sanmati Spectrum of{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#687EFF] to-[#F87A53]">
                                Knowledge
                            </span>
                            <br />
                            <span className="text-[#052143]">
                                &amp; New Ideas &amp; Research
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-10 max-w-lg border-l-4 border-[#687EFF]/40 pl-6">
                            A place for experts to share new ideas. A national, peer-reviewed quarterly journal inviting original research, case studies, and book publications across a wide range of research fields.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 mb-12 max-w-2xl">
                            <Link
                                href="/submission-guidelines/call-for-papers"
                                className="group w-full sm:w-auto justify-center px-7 py-3.5 bg-[#687EFF] text-white rounded-full font-bold text-xs shadow-lg shadow-[#687EFF]/30 hover:bg-[#052143] transition-all flex items-center gap-2 hover:-translate-y-1 uppercase tracking-[0.1em]"
                            >
                                Submit
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                            </Link>
                            <Link
                                href="/archive"
                                className="group w-full sm:w-auto justify-center px-7 py-3.5 bg-[#052143] text-white rounded-full font-bold text-xs hover:bg-[#0a1f3d] transition-all flex items-center gap-2 hover:-translate-y-1 uppercase tracking-[0.1em] shadow-lg shadow-[#052143]/25"
                            >
                                <BookOpen className="w-4 h-4" /> Explore
                            </Link>
                            <Link
                                href="/book-publication"
                                className="group w-full sm:w-auto justify-center px-7 py-3.5 bg-[#F87A53] text-white rounded-full font-bold text-xs hover:bg-[#e56940] transition-all flex items-center gap-2 hover:-translate-y-1 uppercase tracking-[0.1em] shadow-lg shadow-[#F87A53]/25"
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
                        {/* Main large image */}
                        <div className="relative rounded-[3rem] overflow-hidden shadow-[0_30px_80px_rgba(104,126,255,0.18)] border-2 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop"
                                alt="Sanmati Journal Library — Academic Research"
                                className="w-full aspect-[4/3] object-cover object-top"
                                loading="eager"
                            />
                            {/* Bottom overlay detail */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-white/40 via-transparent to-transparent">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[#052143]/80 text-xs font-bold uppercase tracking-widest">New Submissions Open — 2026</span>
                                </div>
                                <div className="flex -space-x-3">
                                    {['https://i.pravatar.cc/36?img=3', 'https://i.pravatar.cc/36?img=5', 'https://i.pravatar.cc/36?img=7'].map((src, j) => (
                                        <img key={j} src={src} alt="Reviewer" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow" />
                                    ))}
                                    <div className="w-9 h-9 rounded-full border-2 border-white bg-[#687EFF] flex items-center justify-center text-[10px] font-black text-white shadow">+12</div>
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
            <div className="absolute bottom-0 w-full bg-white/80 backdrop-blur-md border-t border-gray-100 py-4 shadow-sm z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 md:gap-8">
                        {[
                            { icon: CheckCircle, label: 'Authenticated', value: 'ISSN: 3108-1819', color: 'text-[#687EFF]' },
                            { icon: Star, label: 'Impact', value: 'Double-Blind Review', color: 'text-[#F87A53]' },
                            { icon: Users, label: 'Authors', value: '200+ Contributors', color: 'text-[#687EFF]' },
                            { icon: BookOpen, label: 'Archive', value: '500+ Papers', color: 'text-[#052143]' },
                            { icon: Globe, label: 'Scope', value: 'A Wide Range of Research Fields', color: 'text-[#687EFF]' },
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
