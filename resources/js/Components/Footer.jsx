import { Link } from '@inertiajs/react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, ArrowRight, Send, Globe, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-[#050B15] text-white/60 pt-16 pb-8 relative overflow-hidden">
            {/* Subtle background element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64" />
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Upper Section: Brand & Newsletter */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
                    <div className="lg:col-span-5 space-y-8">
                        <Link href="/" className="inline-block group">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-12 h-12 rounded-2xl bg-white p-1.5 shadow-xl group-hover:scale-105 transition-transform duration-500">
                                    <img loading="lazy" src="/logo.jpg" alt="Sanmati Logo" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-serif font-bold text-white tracking-tight leading-none mb-1">Sanmati Spectrum</h3>
                                    <span className="text-[10px] font-black tracking-[0.2em] uppercase text-secondary">ISSN: 3108-1819</span>
                                </div>
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-md font-medium text-white/40 italic">
                            "A national cornerstone for multidisciplinary academic excellence, fostering critical inquiry and innovation across the sciences and humanities."
                        </p>
                        <div className="flex items-center gap-4">
                            {[
                                { icon: Linkedin, href: "https://www.linkedin.com/company/sanamti-journal/", color: "hover:bg-[#0077B5]" },
                                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61584411285548", color: "hover:bg-[#1877F2]" },
                                { icon: Twitter, href: "#", color: "hover:bg-[#1DA1F2]" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all duration-300 ${social.color} hover:border-transparent group`}
                                >
                                    <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-[0.03] rotate-12 transition-transform duration-700 group-hover:rotate-45">
                                <Send className="w-32 h-32 text-white" />
                            </div>
                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Subscribe to Updates</h4>
                                    <p className="text-sm text-white/40">Get notified about upcoming volumes and call for papers.</p>
                                </div>
                                <form action="/api/newsletter/subscribe" method="POST" className="flex gap-2">
                                    <input 
                                        type="email" 
                                        placeholder="academic-email@edu.in"
                                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                                        required
                                    />
                                    <button type="submit" className="p-3 bg-secondary text-white rounded-xl hover:bg-secondary-dark transition-all shadow-lg shadow-secondary/20">
                                        <Send className="w-5 h-5" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Section: Links & Contact */}
                <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div>
                        <h4 className="text-[11px] font-black tracking-[0.25em] uppercase text-white mb-8 border-l-2 border-secondary pl-4">Publications</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Latest Issues', href: '/archive' },
                                { name: 'Call for Papers', href: '/submission-guidelines/call-for-papers' },
                                { name: 'Submission Guide', href: '/submission-guidelines' },
                                { name: 'Author Guidelines', href: '/submission-guidelines/important-info' },
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href} className="text-[13px] font-bold text-white/40 hover:text-white transition-colors flex items-center gap-3 group">
                                        <ArrowRight className="w-3 h-3 text-secondary opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[11px] font-black tracking-[0.25em] uppercase text-white mb-8 border-l-2 border-secondary pl-4">Institutional</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Editorial Board', href: '/editorial-team/editorial-board' },
                                { name: 'Advisory Board', href: '/editorial-team/advisory-board' },
                                { name: 'Technical Team', href: '/editorial-team/technical-team' },
                                { name: 'Ethics Policy', href: '/publication-policy/ethics' },
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href} className="text-[13px] font-bold text-white/40 hover:text-white transition-colors flex items-center gap-3 group">
                                        <ArrowRight className="w-3 h-3 text-secondary opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-[11px] font-black tracking-[0.25em] uppercase text-white mb-8 border-l-2 border-secondary pl-4">Contact & Registry</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <MapPin className="w-5 h-5 text-secondary shrink-0" />
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">Office</p>
                                        <p className="text-xs leading-relaxed text-white/70 font-medium">Sanmati Publication<br />Moradabad – 244001, Bharat</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Mail className="w-5 h-5 text-secondary shrink-0" />
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">Inquiries</p>
                                        <a href="mailto:sanmatijournal@gmail.com" className="text-xs font-bold text-white/70 hover:text-white transition-colors">sanmatijournal@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4 pt-1">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                                    <div>
                                        <p className="text-[9px] font-black uppercase tracking-widest text-white/20">Ed-in-Chief</p>
                                        <p className="text-[11px] font-bold text-white/60">+91 9870713912</p>
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black uppercase tracking-widest text-white/20">Managing Editor</p>
                                        <p className="text-[11px] font-bold text-white/60">+91 7999525735</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                        <p className="text-[11px] font-bold text-white/30 tracking-widest uppercase">© {new Date().getFullYear()} Sanmati Spectrum</p>
                        <div className="flex items-center gap-4 text-[10px] font-black tracking-widest uppercase text-white/20">
                            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                            <span>/</span>
                            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                            <span>/</span>
                            <Link href="/compliance" className="hover:text-white transition-colors">Open Access</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/5">
                        <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
                        <span className="text-[10px] font-black tracking-widest uppercase text-white/40">COPE Guidelines Compliant</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

