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
                { name: 'News', href: '/gallery/journal-news' },
            ],
        },
        { name: 'Contact', href: '/contact' },
    ];

    const isActive = (href) => {
        if (href === '/') return url === '/';
        return url.startsWith(href);
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md border-b border-slate-200' : 'bg-white/95 backdrop-blur-md border-b border-slate-100'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-[72px]">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 flex-shrink-0">
                        <div className="w-11 h-11 rounded-lg overflow-hidden shadow-sm border border-slate-100 flex-shrink-0">
                            <img
                                src="/logo.jpg"
                                alt="Sanmati Journal Logo"
                                className="object-contain w-full h-full bg-white"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-lg font-serif font-bold text-slate-900 leading-tight block">
                                Sanmati Journal
                            </span>
                            <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase leading-none">
                                ISSN: 3108-1819
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden xl:flex items-center gap-1">
                        {navItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => handleMouseEnter(item.name)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link
                                    href={item.href}
                                    className={`flex items-center text-[13px] font-semibold px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${isActive(item.href)
                                            ? 'text-blue-900 bg-blue-50'
                                            : 'text-slate-600 hover:text-blue-900 hover:bg-slate-50'
                                        }`}
                                >
                                    {item.name}
                                    {item.dropdown && (
                                        <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                                    )}
                                </Link>

                                {item.dropdown && (
                                    <AnimatePresence>
                                        {activeDropdown === item.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 8 }}
                                                transition={{ duration: 0.15, ease: 'easeOut' }}
                                                className="absolute top-full left-0 w-60 bg-white shadow-xl rounded-xl border border-slate-100 p-1.5 mt-1 z-50"
                                            >
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className={`flex items-center justify-between px-3.5 py-2.5 text-[13px] rounded-lg transition-colors group/sub ${isActive(subItem.href)
                                                                ? 'bg-blue-50 text-blue-900 font-semibold'
                                                                : 'text-slate-600 hover:bg-blue-600 hover:text-white font-medium'
                                                            }`}
                                                    >
                                                        {subItem.name}
                                                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover/sub:opacity-100 transition-opacity" />
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
                    <div className="flex items-center gap-3">
                        <Link
                            href="/submission-guidelines/call-for-papers"
                            className="hidden xl:inline-flex px-5 py-2 bg-blue-900 text-white text-[13px] font-bold rounded-lg hover:bg-blue-800 transition-colors items-center gap-1.5 shadow-sm"
                        >
                            Submit Paper
                        </Link>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="xl:hidden text-slate-600 hover:text-blue-900 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                        transition={{ duration: 0.2 }}
                        className="xl:hidden bg-white border-t border-slate-100 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-1 max-h-[70vh] overflow-y-auto">
                            {navItems.map((item, i) => (
                                <div key={item.name}>
                                    {item.dropdown ? (
                                        <div className="space-y-0.5">
                                            <div className="font-bold text-slate-400 px-3 pt-4 pb-1 text-[11px] uppercase tracking-widest">
                                                {item.name}
                                            </div>
                                            {item.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className={`block px-5 py-2.5 text-sm font-medium rounded-lg transition-colors ${isActive(subItem.href)
                                                            ? 'bg-blue-50 text-blue-900 font-semibold'
                                                            : 'text-slate-600 hover:text-blue-900 hover:bg-slate-50'
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
                                            className={`block px-3 py-3 text-base font-bold rounded-lg transition-colors ${isActive(item.href)
                                                    ? 'text-blue-900 bg-blue-50'
                                                    : 'text-slate-800 hover:text-blue-900 hover:bg-slate-50'
                                                }`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <Link
                                href="/submission-guidelines/call-for-papers"
                                className="block px-5 py-3.5 mt-4 text-center text-sm font-bold text-white bg-blue-900 rounded-xl shadow-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                Submit Your Paper
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
