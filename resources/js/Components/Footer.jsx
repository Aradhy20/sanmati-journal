import { Link } from '@inertiajs/react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';
import { AcademicCrest } from './Graphics';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 relative overflow-hidden transition-colors duration-300">
            <AcademicCrest className="absolute -bottom-10 -right-10 w-64 h-64 text-slate-800" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif font-bold text-white">Sanmati Journal</h3>
                        <p className="text-sm leading-relaxed text-slate-400">
                            National Multidisciplinary Peer Reviewed Refereed Journal promoting high-quality research across diverse academic disciplines.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="/" className="hover:text-blue-400 transition-colors text-sm">Home</Link></li>
                            <li><Link href="/basic-info/about-journal" className="hover:text-blue-400 transition-colors text-sm">About Journal</Link></li>
                            <li><Link href="/editorial-team" className="hover:text-blue-400 transition-colors text-sm">Editorial Team</Link></li>
                            <li><Link href="/submission-guidelines/call-for-papers" className="hover:text-blue-400 transition-colors text-sm">Call for Papers</Link></li>
                        </ul>
                    </div>

                    {/* Policies */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Policies</h4>
                        <ul className="space-y-3">
                            <li><Link href="/publication-policy/ethics" className="hover:text-blue-400 transition-colors text-sm">Publication Ethics</Link></li>
                            <li><Link href="/publication-policy/plagiarism" className="hover:text-blue-400 transition-colors text-sm">Plagiarism Policy</Link></li>
                            <li><Link href="/publication-policy/peer-review" className="hover:text-blue-400 transition-colors text-sm">Peer Review Process</Link></li>
                            <li><Link href="/compliance" className="hover:text-blue-400 transition-colors text-sm">Open Access Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-blue-500 mt-0.5" />
                                <span className="text-sm">B-002 Faculty Block TMU Campus, Delhi Road Moradabad (U.P) 244001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-blue-500" />
                                <span className="text-sm">+91 8979782949, +91 7999525735</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-blue-500" />
                                <span className="text-sm">sanmatijournal@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center">
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} Sanmati Spectrum of Knowledge. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
