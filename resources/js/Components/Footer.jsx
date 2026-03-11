import { Link } from '@inertiajs/react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, ArrowRight, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative overflow-hidden">
            {/* Newsletter Bar */}
            <div className="bg-secondary relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-white">
                            <h3 className="text-2xl font-bold mb-1">Subscribe to Our Newsletter</h3>
                            <p className="text-white/70 text-sm">Stay updated with latest publications and academic events</p>
                        </div>
                        <div className="flex w-full md:w-auto gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full md:w-80 px-6 py-3 rounded-full text-sm bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                            />
                            <button className="px-6 py-3 bg-white text-secondary font-bold text-sm rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2 whitespace-nowrap">
                                Subscribe <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="bg-dark text-white/70 pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
                        {/* Brand */}
                        <div className="space-y-5">
                            <Link href="/" className="inline-block group">
                                <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors">Sanmati Spectrum</h3>
                                <span className="block text-[10px] text-white/40 font-bold tracking-[0.2em] uppercase mt-1">ISSN: 3108-1819</span>
                            </Link>
                            <p className="text-sm leading-relaxed">
                                National Multidisciplinary Peer Reviewed Refereed Journal promoting high-quality research across diverse academic disciplines.
                            </p>
                            <div className="flex gap-3 pt-2">
                                <a href="#" aria-label="Twitter" className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all"><Twitter className="w-4 h-4" /></a>
                                <a href="#" aria-label="Facebook" className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all"><Facebook className="w-4 h-4" /></a>
                                <a href="#" aria-label="LinkedIn" className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all"><Linkedin className="w-4 h-4" /></a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-6">Explore</h4>
                            <ul className="space-y-3">
                                {[
                                    { name: 'Home', href: '/' },
                                    { name: 'About Journal', href: '/basic-info/about-journal' },
                                    { name: 'Editorial Team', href: '/editorial-team' },
                                    { name: 'Call for Papers', href: '/submission-guidelines/call-for-papers' },
                                    { name: 'Archives', href: '/archive' },
                                    { name: 'Gallery', href: '/gallery-view' },
                                ].map((item, i) => (
                                    <li key={i}>
                                        <Link href={item.href} className="text-sm hover:text-secondary transition-colors flex items-center gap-2 group">
                                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-secondary" />
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Policies */}
                        <div>
                            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-6">Legal & Policy</h4>
                            <ul className="space-y-3">
                                {[
                                    { name: 'Publication Ethics', href: '/publication-policy/ethics' },
                                    { name: 'Plagiarism Policy', href: '/publication-policy/plagiarism' },
                                    { name: 'Peer Review Process', href: '/publication-policy/peer-review' },
                                    { name: 'Open Access Policy', href: '/compliance' },
                                    { name: 'Submission Guidelines', href: '/submission-guidelines' },
                                ].map((item, i) => (
                                    <li key={i}>
                                        <Link href={item.href} className="text-sm hover:text-secondary transition-colors flex items-center gap-2 group">
                                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-secondary" />
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-6">Contact Us</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="mt-0.5 size-8 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                        <MapPin className="w-3.5 h-3.5 text-secondary" />
                                    </div>
                                    <span className="text-sm leading-relaxed">B-002 Faculty Block TMU Campus, Delhi Road Moradabad (U.P) 244001</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="size-8 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                        <Phone className="w-3.5 h-3.5 text-secondary" />
                                    </div>
                                    <span className="text-sm">+91 8979782949, +91 7999525735</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="size-8 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                        <Mail className="w-3.5 h-3.5 text-secondary" />
                                    </div>
                                    <span className="text-sm">sanmatijournal@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-[13px] text-white/40 font-medium">
                            © {new Date().getFullYear()} Sanmati Spectrum of Knowledge. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-[13px] text-white/40 font-medium">
                            <Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
