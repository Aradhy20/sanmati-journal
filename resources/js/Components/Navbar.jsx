import { useState, useRef, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Menu, X, ChevronDown, ArrowUpRight, Mail, Phone, MapPin, Sun, Moon, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CountdownTimer from './ui/CountdownTimer';

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

    const targetDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0, 23, 59, 59).toISOString();
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
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

    const isActive = (href) => {
        if (href === '/') return url === '/';
        return url.startsWith(href);
    };

    return (
        <header className="sticky top-0 z-50 flex flex-col w-full overflow-x-visible">

            {/* Top Info Bar - Top Notice Banner for Countdown */}
            <div className="bg-primary-dark text-white border-b border-primary/50 relative z-50">
                <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
                    <div className="flex items-center gap-4 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-white">
                        <span className="opacity-90">ISSN: 3108-1819</span>
                        <span className="w-1 h-1 rounded-full bg-secondary"></span>
                        <span className="text-secondary-light">UGC CARE Listed (Proposed)</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.15em] text-white/70">
                            Current Cycle Closes In:
                        </span>
                        <CountdownTimer targetDate={targetDate} className="scale-90 origin-right" />
                    </div>
                </div>
            </div>

            {/* Main Navbar - Solid Academic Header */}
            <nav className={`w-full relative z-40 overflow-x-visible transition-all duration-500 ease-[0.22,1,0.36,1] ${scrolled ? 'bg-white shadow-md border-b border-gray-200 py-2' : 'bg-white border-b border-gray-100 py-4'}`}>
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-4 xl:gap-10">
                            {/* Logo - Refined */}
                        <Link href="/" className="flex items-center gap-4 flex-shrink-0 group">
                            <motion.div 
                                className={`rounded-xl overflow-hidden shadow-sm border border-gray-100 flex-shrink-0 bg-white group-hover:shadow-md transition-all duration-500 ${scrolled ? 'w-10 h-10 p-0.5' : 'w-12 h-12 p-1'}`}
                            >
                                <img
                                    src="/logo.jpg"
                                    alt="Sanmati Journal Logo"
                                    className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500"
                                />
                            </motion.div>
                            <div className="hidden sm:block">
                                <span className="text-lg font-bold text-dark leading-tight block group-hover:text-primary transition-colors tracking-tight">
                                    Sanmati Spectrum
                                </span>
                                <span className={`text-[9px] font-bold tracking-[0.2em] uppercase transition-colors ${scrolled ? 'text-secondary' : 'text-gray-400'}`}>
                                    Research Journal
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-2 xl:gap-4 flex-wrap overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 min-w-0">
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
                                            className={`relative flex flex-col items-center text-[12px] xl:text-[13px] font-bold px-2 xl:px-3 py-2 rounded-full transition-all whitespace-nowrap tracking-wide ${isActive(item.href)
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
                                            className={`relative flex flex-col items-center text-[12px] xl:text-[13px] font-bold px-2 xl:px-3 py-2 rounded-full transition-all whitespace-nowrap tracking-wide ${isActive(item.href)
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
                                className="hidden xl:inline-flex px-7 py-3 bg-primary text-white text-[11px] font-bold tracking-[0.1em] uppercase rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Send Your Paper
                            </Link>
                            
                            {/* Dark Mode Toggle */}
                            <button
                                onClick={toggleDark}
                                className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-dark transition-colors flex-shrink-0"
                                aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
                                title={dark ? 'Light mode' : 'Dark mode'}
                            >
                                {dark
                                    ? <Sun className="w-4 h-4 text-amber-500" />
                                    : <Moon className="w-4 h-4 text-slate-600" />}
                            </button>

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
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="xl:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl overflow-hidden z-50 origin-top"
                        >
                            <div className="px-6 py-6 space-y-4 max-h-[calc(100vh-130px)] overflow-y-auto pb-12">
                                {navItems.map((item) => (
                                    <div key={item.name} className="border-b border-gray-50 last:border-0 pb-3 last:pb-0">
                                        {item.dropdown ? (
                                            <div className="space-y-2">
                                                <div className="font-black text-secondary px-4 pt-2 pb-1 text-[10px] uppercase tracking-[0.3em]">
                                                    {item.name}
                                                </div>
                                                <div className="grid grid-cols-1 gap-1">
                                                    {item.dropdown.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className={`block px-5 py-3 text-[13px] rounded-xl transition-colors ${isActive(subItem.href)
                                                                ? 'bg-primary/5 text-primary font-bold'
                                                                : 'text-dark/60 font-medium hover:text-primary hover:bg-primary/5'
                                                                }`}
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
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
