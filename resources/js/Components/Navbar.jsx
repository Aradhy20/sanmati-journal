import { useState, useRef, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const timeoutRef = useRef(null);
    const { url } = usePage();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMouseEnter = (name) => {
        clearTimeout(timeoutRef.current);
        setActiveDropdown(name);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
    };

    const navItems = [
        { name: 'Home', href: '/' },
        {
            name: 'About',
            href: '#',
            dropdown: [
                { name: 'About the Journal', href: '/basic-info/about-journal' },
                { name: 'Vision & Mission', href: '/basic-info/vision-mission' },
                { name: 'Objective & Scope', href: '/basic-info/objective-scope' },
                { name: 'Journal Information', href: '/basic-info/journal-info' },
                { name: 'Compliance', href: '/compliance' },
            ],
        },
        {
            name: 'Editorial Team',
            href: '/editorial-team',
            dropdown: [
                { name: 'Editor', href: '/editorial-team/editors' },
                { name: 'Editorial Board', href: '/editorial-team/editorial-board' },
                { name: 'Advisory Board', href: '/editorial-team/advisory-board' },
            ],
        },
        {
            name: 'For Authors',
            href: '#',
            dropdown: [
                { name: 'Submission Guidelines', href: '/submission-guidelines' },
                { name: 'Call for Papers', href: '/submission-guidelines/call-for-papers' },
                { name: 'Areas of Submission', href: '/submission-guidelines/areas' },
                { name: 'Publication Charges', href: '/submission-guidelines/publication-charges' },
                { name: 'Publication Ethics', href: '/publication-policy/ethics' },
                { name: 'Plagiarism Policy', href: '/publication-policy/plagiarism' },
                { name: 'Peer Review Process', href: '/publication-policy/peer-review' },
            ],
        },
        { name: 'Archives', href: '/archive' },
        {
            name: 'Events & News',
            href: '#',
            dropdown: [
                { name: 'Seminars', href: '/academic-events/seminar' },
                { name: 'Conferences', href: '/academic-events/conferences' },
                { name: 'Workshops', href: '/academic-events/workshop' },
                { name: 'Book Publication', href: '/book-publication' },
                { name: 'Awards', href: '/awards' },
            ],
        },
        {
            name: 'Gallery',
            href: '/gallery-view',
            dropdown: [
                { name: 'Photos', href: '/gallery/photo' },
                { name: 'News', href: '/gallery/news' },
            ],
        },
        { name: 'Contact', href: '/contact' },
    ];

    const isActive = (href) => {
        if (href === '/') return url === '/';
        return url.startsWith(href);
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-200 py-1' : 'bg-transparent py-3'}`}>
            <div className="w-full px-6 lg:px-12">
                <div className="flex items-center justify-between h-[72px]">
                    {/* Logo - Top Left Corner */}
                    <Link href="/" className="flex items-center gap-4 flex-shrink-0 group">
                        <div className="w-12 h-12 rounded-xl overflow-hidden shadow-sm border border-slate-200 flex-shrink-0 bg-white group-hover:shadow-md transition-shadow">
                            <img
                                src="/logo.jpg"
                                alt="Sanmati Journal Logo"
                                className="object-contain w-full h-full p-1"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-xl font-serif font-bold text-slate-900 leading-tight block group-hover:text-blue-800 transition-colors">
                                Sanmati Spectrum
                            </span>
                            <span className="text-[10px] text-slate-500 font-bold tracking-[0.15em] uppercase leading-none">
                                ISSN: 3108-1819
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden xl:flex items-center gap-2">
                        {navItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => handleMouseEnter(item.name)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link
                                    href={item.href}
                                    className={`flex items-center text-[14px] font-semibold px-4 py-2.5 rounded-full transition-all whitespace-nowrap ${isActive(item.href)
                                        ? 'text-blue-900 bg-blue-50/80 shadow-sm'
                                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                                        }`}
                                >
                                    {item.name}
                                    {item.dropdown && (
                                        <ChevronDown className={`w-4 h-4 ml-1.5 transition-transform ${activeDropdown === item.name ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                                    )}
                                </Link>

                                {item.dropdown && (
                                    <AnimatePresence>
                                        {activeDropdown === item.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                                className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-slate-100 p-2 mt-2 z-50 origin-top-left"
                                            >
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className={`flex items-center justify-between px-4 py-3 text-[14px] rounded-xl transition-all group/sub ${isActive(subItem.href)
                                                            ? 'bg-blue-50/80 text-blue-900 font-bold'
                                                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium'
                                                            }`}
                                                    >
                                                        {subItem.name}
                                                        <ArrowUpRight className={`w-4 h-4 transition-all ${isActive(subItem.href) ? 'opacity-100 text-blue-600' : 'opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0'}`} />
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA + Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/submission-guidelines/call-for-papers"
                            className="hidden xl:inline-flex px-6 py-2.5 bg-slate-900 text-white text-[13px] font-bold tracking-wide uppercase rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10 hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Submit Paper
                        </Link>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="xl:hidden bg-white text-slate-800 p-2.5 rounded-full shadow-sm border border-slate-200 hover:bg-slate-50 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="xl:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 overflow-hidden shadow-2xl"
                    >
                        <div className="px-6 py-6 space-y-2 max-h-[80vh] overflow-y-auto">
                            {navItems.map((item, i) => (
                                <div key={item.name} className="border-b border-slate-50 last:border-0 pb-2 last:pb-0">
                                    {item.dropdown ? (
                                        <div className="space-y-1">
                                            <div className="font-bold text-slate-400 px-4 pt-4 pb-2 text-[10px] uppercase tracking-[0.2em]">
                                                {item.name}
                                            </div>
                                            {item.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className={`block px-5 py-3 text-sm rounded-xl transition-colors ${isActive(subItem.href)
                                                        ? 'bg-blue-50 text-blue-900 font-bold'
                                                        : 'text-slate-600 font-medium hover:text-slate-900 hover:bg-slate-50'
                                                        }`}
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className={`block px-4 py-3 text-base font-bold rounded-xl transition-colors ${isActive(item.href)
                                                ? 'text-blue-900 bg-blue-50'
                                                : 'text-slate-800 hover:text-slate-900 hover:bg-slate-50'
                                                }`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <div className="pt-6 pb-4">
                                <Link
                                    href="/submission-guidelines/call-for-papers"
                                    className="block w-full py-4 text-center text-sm font-bold tracking-widest uppercase text-white bg-slate-900 rounded-full shadow-xl"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Submit Your Paper
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
