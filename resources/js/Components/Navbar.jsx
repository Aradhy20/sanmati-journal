import { useState, useRef, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Menu, X, ChevronDown, ArrowUpRight, Mail, Phone, MapPin, Sun, Moon, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileNavDropdown = ({ item, isActive, setIsOpen }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className="space-y-1">
            <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold text-dark hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
                aria-expanded={isExpanded}
            >
                {item.name}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-secondary' : 'text-gray-400'}`} />
            </button>
            <AnimatePresence initial={false}>
                {isExpanded && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <div className="pl-2 pr-2 py-1 grid grid-cols-1 gap-1 border-l-2 border-primary/10 ml-6 mt-1 mb-2">
                             {item.dropdown.map((subItem) => (
                                <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className={`block px-4 py-2.5 text-[13px] rounded-xl transition-colors ${isActive(subItem.href)
                                        ? 'bg-primary/5 text-primary font-bold'
                                        : 'text-dark/70 font-medium hover:text-primary hover:bg-primary/5'
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {subItem.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Navbar = ({ onOpenSearch }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [dark, setDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return document.documentElement.classList.contains('dark');
        }
        return false;
    });

    const timeoutRef = useRef(null);

    const toggleDark = () => {
        const next = !dark;
        setDark(next);
        document.documentElement.classList.toggle('dark', next);
        try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch {}
    };

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
            href: '#',
            dropdown: [
                { name: 'Editor', href: '/editorial-team/editors' },
                { name: 'Editorial Board', href: '/editorial-team/editorial-board' },
                { name: 'Advisory Board', href: '/editorial-team/advisory-board' },
                { name: 'Technical Team', href: '/editorial-team/technical-team' },
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
        { name: 'Journal Insights', href: '/archive' },
        { name: 'Books', href: '/book-publication' },
        {
            name: 'Events & News',
            href: '#',
            dropdown: [
                { name: 'Seminars', href: '/academic-events/seminar' },
                { name: 'Conferences', href: '/academic-events/conferences' },
                { name: 'Workshops', href: '/academic-events/workshop' },
                { name: 'Awards', href: '/awards' },
            ],
        },
        {
            name: 'Gallery',
            href: '/gallery-view',
            dropdown: [
                { name: 'Photos', href: '/gallery/photo' },
                { name: 'News', href: '/media-news' },
            ],
        },
        { name: 'Contact', href: '/contact' },
    ];

    const isActive = (href) => {
        if (href === '/') return url === '/';
        return url.startsWith(href);
    };

    return (
        <header className="sticky top-0 z-50 flex flex-col w-full overflow-x-visible">

            {/* Main Navbar - Solid Academic Header */}
            <nav className={`w-full relative z-40 overflow-x-visible transition-all duration-500 ease-[0.22,1,0.36,1] ${scrolled ? 'bg-white shadow-md border-b border-gray-200 py-2' : 'bg-white border-b border-gray-100 py-4'}`}>
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-[72px] gap-3 xl:gap-6">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 group min-w-0">
                            <motion.div 
                                className={`rounded-xl overflow-hidden shadow-sm border border-gray-100 flex-shrink-0 bg-white group-hover:shadow-md group-hover:border-primary/20 transition-all duration-500 ${scrolled ? 'w-9 h-9 p-0.5' : 'w-11 h-11 sm:w-13 sm:h-13 p-1'}`}
                            >
                                <img
                                    src="/logo.jpg"
                                    alt="Sanmati Journal Logo"
                                    className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500"
                                />
                            </motion.div>
                            {/* Text hidden on xl desktops to give nav links room; visible on tablet/mobile header */}
                            <div className="hidden sm:block xl:hidden min-w-0">
                                <span className={`block font-black text-dark group-hover:text-primary transition-colors tracking-tight leading-tight truncate ${scrolled ? 'text-base' : 'text-lg sm:text-xl'}`}>
                                    Sanmati Spectrum
                                </span>
                                <span className={`font-semibold tracking-[0.2em] uppercase transition-colors block ${scrolled ? 'text-[8px] text-secondary' : 'text-[9px] text-gray-400'}`}>
                                    Research Journal
                                </span>
                            </div>
                            {/* On xl+ show compact text so brand is still visible */}
                            <div className="hidden xl:block min-w-0">
                                <span className={`block font-black text-dark group-hover:text-primary transition-colors tracking-tight leading-tight whitespace-nowrap ${scrolled ? 'text-sm' : 'text-base'}`}>
                                    Sanmati Spectrum
                                </span>
                                <span className="text-[8px] font-semibold tracking-[0.18em] uppercase text-gray-400 block">
                                    Research Journal
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden xl:flex items-center justify-center gap-0.5 flex-1 min-w-0 overflow-visible">
                            {navItems.map((item) => (
                                <div
                                    key={item.name}
                                    className="relative flex-shrink-0"
                                    onMouseEnter={() => handleMouseEnter(item.name)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                {item.href === '#' ? (
                                        <button
                                            aria-haspopup="true"
                                            aria-expanded={activeDropdown === item.name}
                                            className={`relative flex flex-col items-center text-[11px] font-bold px-1.5 xl:px-2 py-2 rounded-full transition-all whitespace-nowrap tracking-wide ${isActive(item.href)
                                                ? 'text-primary bg-primary/5'
                                                : 'text-dark/80 hover:text-primary hover:bg-primary/5'
                                                }`}
                                        >
                                            <span className="flex items-center gap-1">
                                                {item.name}
                                                {item.dropdown && (
                                                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180 text-secondary' : 'text-gray-400'}`} />
                                                )}
                                            </span>
                                        </button>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className={`relative flex flex-col items-center text-[11px] font-bold px-1.5 xl:px-2 py-2 rounded-full transition-all whitespace-nowrap tracking-wide ${isActive(item.href)
                                                ? 'text-primary bg-primary/5'
                                                : 'text-dark/80 hover:text-primary hover:bg-primary/5'
                                                }`}
                                        >
                                            <span className="flex items-center gap-1">
                                                {item.name}
                                                {item.dropdown && (
                                                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180 text-secondary' : 'text-gray-400'}`} />
                                                )}
                                            </span>
                                            {isActive(item.href) && (
                                                <motion.span
                                                    layoutId="nav-active-dot"
                                                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-secondary"
                                                />
                                            )}
                                        </Link>
                                    )}

                                    {item.dropdown && (
                                        <AnimatePresence>
                                            {activeDropdown === item.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                                    className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl border border-gray-100 p-2 mt-2 z-50 origin-top-left"
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
                                                            <ArrowUpRight className={`w-4 h-4 transition-all duration-300 ${isActive(subItem.href) ? 'opacity-100 text-secondary' : 'opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0'}`} />
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* CTA + Search + Toggle */}
                        <div className="flex items-center gap-2 sm:gap-4">
                            <button
                                onClick={onOpenSearch}
                                className="p-2.5 rounded-xl bg-gray-100 hover:bg-primary/10 text-dark hover:text-primary transition-all flex-shrink-0"
                                aria-label="Search"
                            >
                                <Search className="w-5 h-5" />
                            </button>

                            <Link
                                href="/submission-guidelines/call-for-papers"
                                className="hidden xl:inline-flex px-4 py-2.5 bg-primary text-white text-[10px] font-bold tracking-[0.08em] uppercase rounded-full hover:bg-primary-dark transition-all shadow-md shadow-primary/20 hover:shadow-lg whitespace-nowrap flex-shrink-0"
                            >
                                Send Paper
                            </Link>


                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="xl:hidden bg-gray-100 text-dark p-2.5 rounded-xl hover:bg-gray-200 transition-colors"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu - Refined */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="xl:hidden fixed inset-0 top-0 left-0 w-full h-full bg-white z-[999] overflow-y-auto"
                        >
                            {/* Mobile menu header */}
                            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 sticky top-0 bg-white z-10 shadow-sm">
                                <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setIsOpen(false)}>
                                    <div className="w-9 h-9 rounded-xl overflow-hidden shadow-sm border border-gray-100 flex-shrink-0">
                                        <img src="/logo.jpg" alt="Sanmati Journal Logo" className="object-contain w-full h-full" />
                                    </div>
                                    <span className="text-base font-black text-dark">Sanmati Spectrum</span>
                                </Link>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-dark transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="px-4 py-5 space-y-1 pb-24">
                                {navItems.map((item) => (
                                    <div key={item.name} className="border-b border-gray-50 last:border-0 pb-3 last:pb-0">
                                        {item.dropdown ? (
                                            <MobileNavDropdown item={item} isActive={isActive} setIsOpen={setIsOpen} />
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className={`block px-4 py-3 text-sm font-bold rounded-xl transition-colors ${isActive(item.href)
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
                                <div className="pt-6 pb-2">
                                    <Link
                                        href="/submission-guidelines/call-for-papers"
                                        className="block w-full py-4 text-center text-xs font-bold tracking-widest uppercase text-white bg-primary rounded-full shadow-xl shadow-primary/20"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Send Your Paper
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

        </header>
    );
};

export default Navbar;
