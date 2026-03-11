import { useState, useRef, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Menu, X, ChevronDown, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
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
        <>
            {/* Top Info Bar */}
            <div className="bg-dark text-white/80 text-xs hidden lg:block">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-10">
                    <div className="flex items-center gap-6">
                        <a href="mailto:sanmatijournal@gmail.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                            <Mail className="w-3.5 h-3.5" /> sanmatijournal@gmail.com
                        </a>
                        <a href="tel:+918979782949" className="flex items-center gap-2 hover:text-secondary transition-colors">
                            <Phone className="w-3.5 h-3.5" /> +91 8979782949
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>TMU Campus, Delhi Road Moradabad (U.P) 244001</span>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-0' : 'bg-white/95 backdrop-blur-xl py-1'}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between h-[72px]">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
                            <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-md border border-gray-100 flex-shrink-0 bg-white group-hover:shadow-lg transition-shadow">
                                <img
                                    src="/logo.jpg"
                                    alt="Sanmati Journal Logo"
                                    className="object-contain w-full h-full p-1"
                                />
                            </div>
                            <div className="hidden sm:block">
                                <span className="text-xl font-bold text-dark leading-tight block group-hover:text-primary transition-colors">
                                    Sanmati Spectrum
                                </span>
                                <span className="text-[10px] text-gray-400 font-bold tracking-[0.15em] uppercase leading-none">
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
                                        className={`flex items-center text-[13px] font-semibold px-4 py-2.5 rounded-full transition-all whitespace-nowrap ${isActive(item.href)
                                            ? 'text-primary bg-primary/5'
                                            : 'text-dark/70 hover:text-primary hover:bg-primary/5'
                                            }`}
                                    >
                                        {item.name}
                                        {item.dropdown && (
                                            <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform ${activeDropdown === item.name ? 'rotate-180 text-primary' : 'text-gray-400'}`} />
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
                                                    className="absolute top-full left-0 w-64 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.12)] rounded-2xl border border-gray-100 p-2 mt-2 z-50 origin-top-left"
                                                >
                                                    {item.dropdown.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className={`flex items-center justify-between px-4 py-3 text-[13px] rounded-xl transition-all group/sub ${isActive(subItem.href)
                                                                ? 'bg-primary/5 text-primary font-bold'
                                                                : 'text-dark/70 hover:bg-primary/5 hover:text-primary font-medium'
                                                                }`}
                                                        >
                                                            {subItem.name}
                                                            <ArrowUpRight className={`w-3.5 h-3.5 transition-all ${isActive(subItem.href) ? 'opacity-100 text-primary' : 'opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0'}`} />
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
                                className="hidden xl:inline-flex px-6 py-2.5 bg-primary text-white text-[12px] font-bold tracking-wide uppercase rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Submit Paper
                            </Link>

                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="xl:hidden bg-primary/5 text-primary p-2.5 rounded-xl hover:bg-primary/10 transition-colors"
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
                            className="xl:hidden bg-white border-t border-gray-100 overflow-hidden shadow-2xl"
                        >
                            <div className="px-6 py-6 space-y-2 max-h-[80vh] overflow-y-auto">
                                {navItems.map((item) => (
                                    <div key={item.name} className="border-b border-gray-50 last:border-0 pb-2 last:pb-0">
                                        {item.dropdown ? (
                                            <div className="space-y-1">
                                                <div className="font-bold text-gray-400 px-4 pt-4 pb-2 text-[10px] uppercase tracking-[0.2em]">
                                                    {item.name}
                                                </div>
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className={`block px-5 py-3 text-sm rounded-xl transition-colors ${isActive(subItem.href)
                                                            ? 'bg-primary/5 text-primary font-bold'
                                                            : 'text-dark/60 font-medium hover:text-primary hover:bg-primary/5'
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
                                                    ? 'text-primary bg-primary/5'
                                                    : 'text-dark hover:text-primary hover:bg-primary/5'
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
                                        className="block w-full py-4 text-center text-sm font-bold tracking-widest uppercase text-white bg-primary rounded-full shadow-xl"
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
        </>
    );
};

export default Navbar;
