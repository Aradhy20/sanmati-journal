import { Link } from '@inertiajs/react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, ArrowRight, Send, Globe, ShieldCheck, BookOpen, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-primary text-slate-300 pt-20 pb-8 relative overflow-hidden">
            {/* Premium Lighting Emitters */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Upper CTA Tier */}
                <div className="mb-16">
                    <div className="relative group bg-white/[0.03] border border-white/[0.05] rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl overflow-hidden">
                        <div className="absolute right-0 top-0 w-96 h-96 bg-gradient-radial from-secondary/10 to-transparent opacity-30 blur-3xl -mr-48 -mt-48 transition-opacity group-hover:opacity-50 duration-700" />
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
                            <div>
                                <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                                    Advance Your <span className="text-secondary">Research</span>
                                </h3>
                                <p className="text-slate-400 text-base font-medium leading-relaxed max-w-lg">
                                    Join a global community of scholars. Submit your manuscript today and accelerate the impact of your academic findings.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                                <Link 
                                    href="/submit" 
                                    className="thm-btn bg-secondary text-primary flex items-center justify-center gap-2 px-8 py-4 rounded-2xl shadow-[0_20px_40px_rgba(200,169,107,0.15)] hover:shadow-[0_20px_50px_rgba(200,169,107,0.25)]"
                                >
                                    Submit Manuscript
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link 
                                    href="/submission-guidelines" 
                                    className="thm-btn-outline border-white/20 hover:border-white/40 text-white flex items-center justify-center gap-2 px-8 py-4 rounded-2xl"
                                >
                                    Author Guidelines
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
                    {/* Brand Section */}
                    <div className="lg:col-span-4 space-y-8">
                        <Link href="/" className="inline-block group">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-14 h-14 rounded-2xl bg-white p-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.3)] group-hover:scale-105 transition-transform duration-500">
                                    <img loading="lazy" src="/logo.jpg" alt="Sanmati Logo" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-serif font-bold text-white tracking-tight leading-none mb-1">Sanmati Spectrum</h3>
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-secondary opacity-90">ISSN: 3108-1819</span>
                                </div>
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-sm font-medium text-slate-400/90">
                            A premier multidisciplinary research archive dedicated to the relentless pursuit of truth, scientific innovation, and cultural advancement.
                        </p>
                        <div className="flex items-center gap-3">
                            {[
                                { icon: Linkedin, href: "https://www.linkedin.com/company/sanamti-journal/", label: "LinkedIn" },
                                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61584411285548", label: "Facebook" },
                                { icon: Twitter, href: "#", label: "Twitter" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="size-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-secondary hover:bg-white/[0.06] hover:border-secondary/30 transition-all duration-300 group"
                                >
                                    <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link Groups */}
                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
                        <div>
                            <h4 className="text-sm font-bold text-white mb-6 font-serif flex items-center gap-2">
                                <span className="w-1 h-4 bg-secondary rounded-full block"></span>
                                Navigation
                            </h4>
                            <ul className="space-y-3.5">
                                {[
                                    { name: 'Home Archive', href: '/archive' },
                                    { name: 'Call for Papers', href: '/submission-guidelines/call-for-papers' },
                                    { name: 'Aim & Scope', href: '/about/aim-scope' },
                                    { name: 'Indexing', href: '/indexing' },
                                ].map((link, i) => (
                                    <li key={i}>
                                        <Link href={link.href} className="text-[13px] font-medium text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2 inline-flex">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-bold text-white mb-6 font-serif flex items-center gap-2">
                                <span className="w-1 h-4 bg-secondary rounded-full block"></span>
                                Governance
                            </h4>
                            <ul className="space-y-3.5">
                                {[
                                    { name: 'Editorial Board', href: '/editorial-team/editorial-board' },
                                    { name: 'Advisory Board', href: '/editorial-team/advisory-board' },
                                    { name: 'Peer Review Policy', href: '/publication-policy/peer-review' },
                                    { name: 'Ethics Statement', href: '/publication-policy/ethics' },
                                ].map((link, i) => (
                                    <li key={i}>
                                        <Link href={link.href} className="text-[13px] font-medium text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2 inline-flex">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-bold text-white mb-6 font-serif flex items-center gap-2">
                                <span className="w-1 h-4 bg-secondary rounded-full block"></span>
                                Editorial Contact
                            </h4>
                            <div className="space-y-5">
                                <div className="flex gap-3.5">
                                    <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                    <div className="text-xs text-slate-400 font-medium leading-relaxed">
                                        Sanmati Publication<br />Moradabad – 244001, Bharat
                                    </div>
                                </div>
                                <div className="flex gap-3.5">
                                    <Mail className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                    <a href="mailto:sanmatijournal@gmail.com" className="text-xs text-slate-400 hover:text-white font-semibold transition-colors">
                                        sanmatijournal@gmail.com
                                    </a>
                                </div>
                                <div className="pt-2">
                                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Chief Editor</span>
                                            <span className="text-[11px] font-semibold text-slate-300">+91 9870713912</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Managing</span>
                                            <span className="text-[11px] font-semibold text-slate-300">+91 7999525735</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Credentials */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <p className="text-[12px] font-medium text-slate-500">
                            © {new Date().getFullYear()} Sanmati Spectrum. All rights reserved.
                        </p>
                        <div className="flex items-center gap-4 text-[11px] font-semibold text-slate-500">
                            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                            <span className="text-white/10">/</span>
                            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                            <span className="text-white/10">/</span>
                            <Link href="/compliance" className="hover:text-white transition-colors">Compliance</Link>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] rounded-lg border border-white/[0.05]">
                            <ShieldCheck className="w-3.5 h-3.5 text-secondary/70" />
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">COPE MEMBER</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] rounded-lg border border-white/[0.05]">
                            <Award className="w-3.5 h-3.5 text-emerald-400/70" />
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">PEER REVIEWED</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

