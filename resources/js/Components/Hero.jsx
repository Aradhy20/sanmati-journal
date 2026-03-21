import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Star, CheckCircle, Clock, BookMarked, Sparkles, Globe } from 'lucide-react';


const Hero = () => {
    const [daysLeft, setDaysLeft] = useState(0);

    useEffect(() => {
        const now = new Date();
        const eom = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        setDaysLeft(Math.ceil((eom - now) / (1000 * 60 * 60 * 24)));
    }, []);

    return (
        <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-gradient-to-br from-[#eef1ff] via-[#f5f0ff] to-[#fff0f5]">
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
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

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
                                &amp; Emerging Discourse
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-[#6B778B] font-medium leading-relaxed mb-10 max-w-lg border-l-4 border-[#687EFF]/40 pl-6">
                            A national, multidisciplinary, peer-reviewed and referred quarterly journal. The journal provides a scholarly platform for original research, case studies, thematic articles, book reviews, and conference/seminar papers across diverse disciplines.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4 mb-12">
                            <Link
                                href="/submission-guidelines/call-for-papers"
                                className="group px-8 py-4 bg-[#687EFF] text-white rounded-full font-bold text-sm shadow-lg shadow-[#687EFF]/30 hover:bg-[#052143] transition-all flex items-center gap-3 hover:-translate-y-1 uppercase tracking-[0.1em]"
                            >
                                Submit Manuscript
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                            </Link>
                            <Link
                                href="/archive"
                                className="group px-8 py-4 bg-[#052143] text-white rounded-full font-bold text-sm hover:bg-[#0a1f3d] transition-all flex items-center gap-3 hover:-translate-y-1 uppercase tracking-[0.1em] shadow-lg shadow-[#052143]/25"
                            >
                                <BookOpen className="w-4 h-4" /> Read Archive
                            </Link>
                            <Link
                                href="/book-publication"
                                className="group px-8 py-4 bg-[#F87A53] text-white rounded-full font-bold text-sm hover:bg-[#e56940] transition-all flex items-center gap-3 hover:-translate-y-1 uppercase tracking-[0.1em] shadow-lg shadow-[#F87A53]/25"
                            >
                                <BookMarked className="w-4 h-4" /> Book Publications
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-8 border-t border-[#687EFF]/15">
                            {[
                                { icon: CheckCircle, label: 'Authenticated', value: 'ISSN: 3108-1819', color: 'text-[#687EFF]' },
                                { icon: Clock, label: 'Open Call', value: `Closes in ${daysLeft} days`, color: 'text-[#F87A53]' },
                                { icon: Star, label: 'Impact', value: 'Double-Blind Review', color: 'text-[#F87A53]' },
                                { icon: Users, label: 'Authors', value: '200+ Contributors', color: 'text-[#687EFF]' },
                                { icon: BookOpen, label: 'Archive', value: '500+ Papers', color: 'text-[#052143]' },
                                { icon: Globe, label: 'Scope', value: '25+ Research Fields', color: 'text-[#687EFF]' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-[#687EFF]/15 shadow-sm">
                                    <item.icon className={`w-4 h-4 flex-shrink-0 ${item.color}`} />
                                    <div>
                                        <p className="text-[#052143] text-[10px] font-black uppercase tracking-widest leading-none mb-0.5">{item.label}</p>
                                        <p className="text-[#6B778B] text-[11px] font-bold">{item.value}</p>
                                    </div>
                                </div>
                            ))}
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
                        <div className="relative rounded-[3rem] overflow-hidden shadow-[0_30px_80px_rgba(104,126,255,0.18)] border-2 border-white animate-float">
                            <img
                                src="/fistudy-assets/backgrounds/slider-1-1.png"
                                alt="Sanmati Journal Publication"
                                className="w-full h-[520px] object-cover"
                                loading="eager"
                            />
                            {/* Bottom overlay detail */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-white/40 via-transparent to-transparent">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[#052143]/80 text-xs font-bold uppercase tracking-widest">Now Accepting Vol. 1 Submissions</span>
                                </div>
                                <div className="flex -space-x-3">
                                    {['/fistudy-assets/team/team-1-1.jpg', '/fistudy-assets/team/team-1-2.jpg', '/fistudy-assets/team/team-2-1.jpg'].map((src, j) => (
                                        <img key={j} src={src} alt="Reviewer" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow" />
                                    ))}
                                    <div className="w-9 h-9 rounded-full border-2 border-white bg-[#687EFF] flex items-center justify-center text-[10px] font-black text-white shadow">+12</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge — Readers */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -top-6 -left-8 bg-white rounded-2xl shadow-xl p-5 border border-[#687EFF]/15 z-20"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-xl bg-[#687EFF]/10 flex items-center justify-center">
                                    <Users className="w-5 h-5 text-[#687EFF]" />
                                </div>
                                <div>
                                    <p className="text-2xl font-black text-[#052143] leading-none">2,000+</p>
                                    <p className="text-[#6B778B] text-[10px] font-black uppercase tracking-widest mt-0.5">Active Readers</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Badge — Research Artifacts */}
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                            className="absolute -bottom-6 -right-8 bg-white rounded-2xl shadow-xl p-5 border border-[#F87A53]/15 z-20"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-xl bg-[#F87A53]/10 flex items-center justify-center">
                                    <BookOpen className="w-5 h-5 text-[#F87A53]" />
                                </div>
                                <div>
                                    <p className="text-2xl font-black text-[#052143] leading-none">500+</p>
                                    <p className="text-[#6B778B] text-[10px] font-black uppercase tracking-widest mt-0.5">Research Artifacts</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Badge — Star Rating */}
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                            className="absolute top-1/2 -right-10 bg-[#052143] rounded-2xl shadow-xl p-4 border border-white/10 z-20"
                        >
                            <div className="flex gap-1 mb-1">
                                {[...Array(5)].map((_, k) => (
                                    <Star key={k} className="w-3.5 h-3.5 fill-[#F87A53] text-[#F87A53]" />
                                ))}
                            </div>
                            <p className="text-white text-[11px] font-bold">50+ Expert Reviewers</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
