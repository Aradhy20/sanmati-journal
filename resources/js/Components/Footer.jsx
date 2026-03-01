import { Link } from '@inertiajs/react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';
import { AcademicCrest } from './Graphics';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-200 text-slate-600 pt-20 pb-10 relative overflow-hidden transition-colors duration-300">
            <AcademicCrest className="absolute -bottom-10 -right-10 w-96 h-96 text-slate-50 opacity-50 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block group">
                            <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-blue-800 transition-colors">Sanmati Spectrum</h3>
                            <span className="block text-[10px] text-slate-400 font-bold tracking-[0.2em] uppercase mt-1">ISSN: 3108-1819</span>
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-500 font-light">
                            National Multidisciplinary Peer Reviewed Refereed Journal promoting high-quality research across diverse academic disciplines.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" aria-label="Twitter" className="size-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-200 hover:bg-blue-50 transition-all"><Twitter className="w-4 h-4" /></a>
                            <a href="#" aria-label="Facebook" className="size-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all"><Facebook className="w-4 h-4" /></a>
                            <a href="#" aria-label="LinkedIn" className="size-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-700 hover:border-blue-200 hover:bg-blue-50 transition-all"><Linkedin className="w-4 h-4" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold tracking-widest uppercase text-slate-900 mb-6">Explore</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Home</Link></li>
                            <li><Link href="/basic-info/about-journal" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">About Journal</Link></li>
                            <li><Link href="/editorial-team" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Editorial Team</Link></li>
                            <li><Link href="/submission-guidelines/call-for-papers" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Call for Papers</Link></li>
                        </ul>
                    </div>

                    {/* Policies */}
                    <div>
                        <h4 className="text-sm font-bold tracking-widest uppercase text-slate-900 mb-6">Legal & Policy</h4>
                        <ul className="space-y-4">
                            <li><Link href="/publication-policy/ethics" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Publication Ethics</Link></li>
                            <li><Link href="/publication-policy/plagiarism" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Plagiarism Policy</Link></li>
                            <li><Link href="/publication-policy/peer-review" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Peer Review Process</Link></li>
                            <li><Link href="/compliance" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Open Access Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-bold tracking-widest uppercase text-slate-900 mb-6">Contact Us</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 size-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100"><MapPin className="w-3.5 h-3.5 text-blue-600" /></div>
                                <span className="text-sm leading-relaxed text-slate-500">B-002 Faculty Block TMU Campus, Delhi Road Moradabad (U.P) 244001</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="size-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100"><Phone className="w-3.5 h-3.5 text-blue-600" /></div>
                                <span className="text-sm text-slate-500">+91 8979782949, +91 7999525735</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="size-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100"><Mail className="w-3.5 h-3.5 text-blue-600" /></div>
                                <span className="text-sm text-slate-500">sanmatijournal@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[13px] text-slate-400 font-medium">
                        © {new Date().getFullYear()} Sanmati Spectrum of Knowledge. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-[13px] text-slate-400 font-medium">
                        <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
