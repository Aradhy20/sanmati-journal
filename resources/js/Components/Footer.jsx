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
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C8A96B]">ISSN: 3108-1819</span>
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
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Chief Editor</span>
                                            <span className="text-[11px] font-semibold text-slate-300">+91 9870713912</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Managing</span>
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
                        <p className="text-[12px] font-medium text-slate-400">
                            © {new Date().getFullYear()} Sanmati Spectrum. All rights reserved.
                        </p>
                        <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400">
                            <Link href="/privacy" className="px-3 py-1.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] hover:text-white transition-all duration-300">Privacy</Link>
                            <Link href="/terms" className="px-3 py-1.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] hover:text-white transition-all duration-300">Terms</Link>
                            <Link href="/compliance" className="px-3 py-1.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] hover:text-white transition-all duration-300">Compliance</Link>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] rounded-lg border border-white/[0.05]">
                            <ShieldCheck className="w-3.5 h-3.5 text-secondary/70" />
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">COPE MEMBER</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] rounded-lg border border-white/[0.05]">
                            <Award className="w-3.5 h-3.5 text-emerald-400/70" />
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">PEER REVIEWED</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

