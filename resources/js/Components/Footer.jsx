import { Link } from '@inertiajs/react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, ArrowRight, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-dark text-white/70">
            {/* Newsletter Bar - Sophisticated & Integrated */}
            <div className="bg-primary/5 border-b border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -mr-32 -mt-32 blur-3xl animate-blob" />
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="text-center lg:text-left">
                            <h3 className="text-2xl font-serif font-bold text-white mb-2 tracking-tight">Stay Informed</h3>
                            <p className="text-white/50 text-sm max-w-md">Receive latest research updates, call for papers, and academic news directly in your inbox.</p>
                        </div>
                        <form action="https://formspree.io/f/PLACEHOLDER_ENDPOINT" method="POST" className="flex w-full lg:w-auto gap-3">
                            <div className="relative w-full lg:w-96 group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-secondary transition-colors" />
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="your-email@academic.edu"
                                    className="w-full pl-12 pr-6 py-4 rounded-2xl text-sm bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary/30 transition-all"
                                />
                                <input type="hidden" name="_subject" value="New Newsletter Subscriber!" />
                            </div>
                            <button type="submit" className="px-8 py-4 bg-secondary text-white font-bold text-sm rounded-2xl hover:bg-secondary-dark transition-all flex items-center gap-2 whitespace-nowrap shadow-lg shadow-secondary/10 hover:shadow-secondary/20 hover:-translate-y-0.5">
                                Join <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Main Footer - Luxury Academic Feel */}
            <div className="pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-20">
                        {/* About Column */}
                        <div className="space-y-6 lg:col-span-2">
                            <h4 className="text-[11px] font-black tracking-[0.2em] uppercase text-white mb-6 border-l-2 border-secondary pl-4">About</h4>
                            <Link href="/" className="inline-block group">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-white p-1 shadow-sm">
                                        <img loading="lazy" src="/logo.jpg" alt="Logo" className="w-full h-full object-contain" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors tracking-tight">Sanmati Spectrum</h3>
                                </div>
                                <span className="inline-block px-3 py-1 bg-secondary/20 border border-secondary/30 rounded-full text-[9px] text-white font-black tracking-[0.2em] uppercase">ISSN: 3108-1819</span>
                            </Link>
                            <p className="text-sm leading-relaxed text-slate-300 font-medium">
                                A premier national platform for multidisciplinary research, fostering academic discourse and innovation across sciences and humanities.
                            </p>
                        </div>

                        {/* Navigation Columns */}
                        {[
                            {
                                title: 'Publications',
                                links: [
                                    { name: 'Latest Issues', href: '/archive' },
                                    { name: 'Call for Papers', href: '/submission-guidelines/call-for-papers' },
                                    { name: 'Submission Guide', href: '/submission-guidelines' },
                                    { name: 'Editorial Team', href: '/editorial-team/editorial-board' },
                                    { name: 'Gallery & News', href: '/gallery-view' },
                                ]
                            },
                            {
                                title: 'Policies',
                                links: [
                                    { name: 'Ethics Policy', href: '/publication-policy/ethics' },
                                    { name: 'Peer Review', href: '/publication-policy/peer-review' },
                                    { name: 'Open Access', href: '/compliance' },
                                    { name: 'Privacy Policy', href: '/privacy' },
                                    { name: 'Terms of Use', href: '/terms' },
                                ]
                            }
                        ].map((col, idx) => (
                            <div key={idx}>
                                <h4 className="text-[11px] font-black tracking-[0.2em] uppercase text-white mb-8 border-l-2 border-secondary pl-4">{col.title}</h4>
                                <ul className="space-y-4">
                                    {col.links.map((link, i) => (
                                        <li key={i}>
                                            <Link href={link.href} className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-3 group">
                                                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-secondary group-hover:scale-125 transition-all" />
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Social Column */}
                        <div>
                            <h4 className="text-[11px] font-black tracking-[0.2em] uppercase text-white mb-8 border-l-2 border-secondary pl-4">Social</h4>
                            <div className="flex items-center gap-4">
                                <a
                                    href="https://www.linkedin.com/company/sanmati-journal/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Sanmati Spectrum on LinkedIn"
                                    className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0077B5] hover:border-[#0077B5] hover:text-white transition-all duration-300 group shadow-lg"
                                >
                                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                                <a
                                    href="https://www.facebook.com/profile.php?id=61584411285548"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Sanmati Spectrum on Facebook"
                                    className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all duration-300 group shadow-lg"
                                >
                                    <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-[11px] font-black tracking-[0.2em] uppercase text-white mb-8 border-l-2 border-secondary pl-4">Contact</h4>
                            <div className="space-y-5">
                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 border border-white/20 hover:border-white/30 transition-colors">
                                    <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                    <p className="text-[13px] leading-relaxed text-white font-medium">JTS Publications<br />V-508 Gali No. 17, Vijay Park<br/>Delhi – 110053, Bharat (India)</p>
                                </div>
                                <div className="space-y-3 pl-2">
                                    <div className="flex items-start gap-4 text-[13px] font-bold">
                                        <Phone className="w-4 h-4 text-white mt-0.5 shrink-0" />
                                        <div className="flex flex-col space-y-2">
                                            <div>
                                                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Editor-in-Chief</p>
                                                <a href="tel:+919870713912" className="text-slate-200 hover:text-white transition-colors hover:underline">+91 9870713912</a>
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Editorial Office</p>
                                                <a href="tel:+918979782949" className="text-slate-200 hover:text-white transition-colors hover:underline">+91 8979782949</a>
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Managing Editor</p>
                                                <a href="tel:+917999525735" className="text-slate-200 hover:text-white transition-colors hover:underline">+91 7999525735</a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="mailto:sanmatijournal@gmail.com" className="flex items-center gap-4 text-[13px] font-bold text-slate-200 hover:text-white transition-colors mt-2">
                                        <Mail className="w-4 h-4 text-white shrink-0" /> <span className="hover:underline">sanmatijournal@gmail.com</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-white/20 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-[13px] font-medium text-slate-400 flex items-center gap-2">
                            <span>© {new Date().getFullYear()}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-500" />
                            <span className="text-slate-300">Sanmati Spectrum of Knowledge</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <Link href="/privacy" className="text-[12px] font-bold text-slate-300 hover:text-white transition-colors uppercase tracking-widest">Privacy Policy</Link>
                            <Link href="/terms" className="text-[12px] font-bold text-slate-300 hover:text-white transition-colors uppercase tracking-widest">Legal</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
