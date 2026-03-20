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
                        <div className="flex w-full lg:w-auto gap-3">
                            <div className="relative w-full lg:w-96 group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-secondary transition-colors" />
                                <input
                                    type="email"
                                    placeholder="your-email@academic.edu"
                                    className="w-full pl-12 pr-6 py-4 rounded-2xl text-sm bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary/30 transition-all"
                                />
                            </div>
                            <button className="px-8 py-4 bg-secondary text-white font-bold text-sm rounded-2xl hover:bg-secondary-dark transition-all flex items-center gap-2 whitespace-nowrap shadow-lg shadow-secondary/10 hover:shadow-secondary/20 hover:-translate-y-0.5">
                                Join <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer - Luxury Academic Feel */}
            <div className="pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
                        {/* Brand Container */}
                        <div className="space-y-6">
                            <Link href="/" className="inline-block group">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-white p-1 shadow-sm">
                                        <img src="/logo.jpg" alt="Logo" className="w-full h-full object-contain" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors tracking-tight">Sanmati Spectrum</h3>
                                </div>
                                <span className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-[9px] text-secondary font-black tracking-[0.2em] uppercase">ISSN: 3108-1819</span>
                            </Link>
                            <p className="text-sm leading-relaxed text-white/40 font-medium">
                                A premier national platform for multidisciplinary research, fostering academic discourse and innovation across sciences and humanities.
                            </p>
                            <div className="flex gap-4 pt-2">
                                {[Linkedin, Facebook, Twitter].map((Icon, idx) => (
                                    <a key={idx} href="#" className="size-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-300 group">
                                        <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Columns */}
                        {[
                            {
                                title: 'Publication',
                                links: [
                                    { name: 'Latest Issues', href: '/archive' },
                                    { name: 'Call for Papers', href: '/submission-guidelines/call-for-papers' },
                                    { name: 'Submission Guide', href: '/submission-guidelines' },
                                    { name: 'Editorial Team', href: '/editorial-team/editorial-board' },
                                    { name: 'Gallery & News', href: '/gallery-view' },
                                ]
                            },
                            {
                                title: 'Trust & Safety',
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
                                            <Link href={link.href} className="text-sm font-medium hover:text-secondary transition-colors flex items-center gap-3 group">
                                                <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-secondary group-hover:scale-125 transition-all" />
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-[11px] font-black tracking-[0.2em] uppercase text-white mb-8 border-l-2 border-secondary pl-4">Inquiries</h4>
                            <div className="space-y-5">
                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                                    <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                    <p className="text-[13px] leading-relaxed font-medium">JTS Publications<br />V-508 Gali No. 17, Vijay Park<br/>Delhi – 110053, Bharat (India)</p>
                                </div>
                                <div className="space-y-3 pl-2">
                                    <div className="flex items-start gap-4 text-[13px] font-bold hover:text-secondary transition-colors">
                                        <Phone className="w-4 h-4 text-secondary/70 mt-0.5 shrink-0" /> 
                                        <div className="flex flex-col space-y-2">
                                            <a href="tel:+919870713912" className="hover:text-primary transition-colors hover:underline">+91 9870713912</a>
                                            <a href="tel:+918979782949" className="hover:text-primary transition-colors hover:underline">+91 8979782949</a>
                                            <a href="tel:+917999525735" className="hover:text-primary transition-colors hover:underline">+91 7999525735</a>
                                        </div>
                                    </div>
                                    <a href="mailto:sanmatijournal@gmail.com" className="flex items-center gap-4 text-[13px] font-bold hover:text-secondary transition-colors mt-2">
                                        <Mail className="w-4 h-4 text-secondary/70 shrink-0" /> <span className="hover:underline hover:text-primary">sanmatijournal@gmail.com</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-[12px] font-medium text-white/30 flex items-center gap-2">
                            <span>© {new Date().getFullYear()}</span>
                            <span className="w-1 h-1 rounded-full bg-white/10" />
                            <span>Sanmati Spectrum of Knowledge</span>
                        </div>
                        <div className="flex items-center gap-8">
                            <Link href="/terms" className="text-[12px] font-bold text-white/30 hover:text-secondary transition-colors uppercase tracking-widest">Legal</Link>
                            <Link href="/privacy" className="text-[12px] font-bold text-white/30 hover:text-secondary transition-colors uppercase tracking-widest">Sitemap</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
