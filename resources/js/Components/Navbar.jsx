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
            name: 'Editorial',
            href: '#',
            dropdown: [
                { name: 'Editor', href: '/editorial-team/editors' },
                { name: 'Editorial Board', href: '/editorial-team/editorial-board' },
                { name: 'Advisory Board', href: '/editorial-team/advisory-board' },
                { name: 'Technical Team', href: '/editorial-team/technical-team' },
            ],
        },
        {
            name: 'Authors',
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
        { name: 'Archive', href: '/archive' },
        { name: 'Foundation', href: '/about-foundation' },
        { name: 'Books', href: '/book-publication' },
        {
            name: 'Events',
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

            {/* Main Navbar - 2026 Premium Glass Header */}
            <nav className={`w-full relative z-40 overflow-x-visible transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border-b ${scrolled 
                ? 'bg-white/80 backdrop-blur-xl border-slate-200/60 shadow-lg shadow-primary/5 py-1.5' 
                : 'bg-white/60 backdrop-blur-md border-transparent py-4'}`}>
                <div className="container-custom">
                    <div className="flex items-center justify-between h-16 sm:h-[72px] gap-1.5 xl:gap-2 2xl:gap-6">
                        {/* Luxury Animated Logo & Nameplate */}
                        <Link href="/" className="flex items-center gap-3 flex-shrink-0 group min-w-0 relative">
                            <div className="absolute -inset-2 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <motion.div 
                                className={`rounded-xl overflow-hidden shadow-sm border border-slate-100 flex-shrink-0 bg-white relative z-10 group-hover:shadow-lg transition-all duration-500 ${scrolled ? 'w-9 h-9 p-0.5' : 'w-11 h-11 sm:w-12 sm:h-12 p-0.5'}`}
                            >
                                <img
                                    src="/logo.jpg"
                                    alt="Sanmati Journal Logo"
                                    className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-110"
                                />
                            </motion.div>
                            
                            <div className="hidden sm:flex flex-col min-w-0 relative z-10">
                                <span className={`block font-serif font-bold text-primary leading-none tracking-tight transition-all duration-500 ${scrolled ? 'text-lg' : 'text-lg xl:text-xl 2xl:text-2xl'}`}>
                                    Sanmati <span className="text-secondary font-normal italic">Spectrum</span>
                                </span>
                                <span className="text-[8px] font-bold tracking-wider 2xl:tracking-[0.3em] uppercase text-muted mt-0.5 font-sans">
                                    Academic Research
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Menu - Luxury Glass Styling */}
                        <div className="hidden xl:flex items-center justify-center gap-0.5 2xl:gap-1 flex-1 min-w-0 overflow-visible relative">
                            {navItems.map((item) => (
                                <div
                                    key={item.name}
                                    className="relative flex-shrink-0 px-1"
                                    onMouseEnter={() => handleMouseEnter(item.name)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {item.href === '#' ? (
                                        <button
                                            aria-haspopup="true"
                                            aria-expanded={activeDropdown === item.name}
                                            className={`relative group/nav flex items-center gap-1 text-[9px] 2xl:text-[10px] font-black uppercase tracking-wider 2xl:tracking-[0.15em] px-1.5 2xl:px-3 py-2 rounded-lg transition-all duration-300 font-sans ${activeDropdown === item.name || isActive(item.href)
                                                ? 'text-primary'
                                                : 'text-slate-600 hover:text-primary'
                                                }`}
                                        >
                                            {item.name}
                                            {item.dropdown && (
                                                <ChevronDown className={`w-3 h-3 transition-transform duration-500 ${activeDropdown === item.name ? 'rotate-180 text-secondary' : 'text-slate-400 group-hover/nav:text-secondary'}`} />
                                            )}
                                            <span className={`absolute bottom-0 left-3 right-3 h-0.5 bg-secondary rounded-full origin-left transition-transform duration-500 scale-x-0 ${activeDropdown === item.name ? 'scale-x-100' : 'group-hover/nav:scale-x-100'}`} />
                                        </button>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className={`relative group/nav flex items-center gap-1 text-[9px] 2xl:text-[10px] font-black uppercase tracking-wider 2xl:tracking-[0.15em] px-1.5 2xl:px-3 py-2 rounded-lg transition-all duration-300 font-sans ${isActive(item.href)
                                                ? 'text-primary'
                                                : 'text-slate-600 hover:text-primary'
                                                }`}
                                        >
                                            {item.name}
                                            <span className={`absolute bottom-0 left-3 right-3 h-0.5 bg-secondary rounded-full transition-all duration-500 ${isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover/nav:scale-x-100 origin-left'}`} />
                                        </Link>
                                    )}

                                    {item.dropdown && (
                                        <AnimatePresence>
                                            {activeDropdown === item.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 15, scale: 0.97 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                                                    className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-2xl shadow-xl shadow-primary/5 rounded-xl border border-slate-100 p-1.5 mt-3 z-50 origin-top-left overflow-hidden"
                                                >
                                                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary" />
                                                    {item.dropdown.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className={`flex items-center justify-between px-4 py-3 text-[13px] rounded-lg transition-all group/sub font-sans ${isActive(subItem.href)
                                                                ? 'bg-secondary/5 text-primary font-bold'
                                                                : 'text-slate-600 hover:bg-slate-50 hover:text-primary font-medium'
                                                                }`}
                                                        >
                                                            {subItem.name}
                                                            <ArrowUpRight className={`w-3.5 h-3.5 transition-all duration-500 ${isActive(subItem.href) ? 'text-secondary opacity-100' : 'opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 group-hover/sub:text-secondary'}`} />
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Glass Interaction Array */}
                        <div className="flex items-center gap-1.5 2xl:gap-2.5">
                            <div className="hidden sm:flex items-center gap-1.5 bg-slate-100/50 border border-slate-200/50 p-1 rounded-xl backdrop-blur-sm">
                                <button
                                    onClick={onOpenSearch}
                                    className="p-2 rounded-lg text-slate-600 hover:text-primary hover:bg-white shadow-none hover:shadow-sm transition-all duration-300"
                                    aria-label="Search"
                                >
                                    <Search className="w-4.5 h-4.5" />
                                </button>

                                <button
                                    onClick={toggleDark}
                                    className="p-2 rounded-lg text-slate-600 hover:text-primary hover:bg-white shadow-none hover:shadow-sm transition-all duration-300"
                                    aria-label="Toggle Theme"
                                >
                                    {dark ? <Sun className="w-4.5 h-4.5 text-amber-500" /> : <Moon className="w-4.5 h-4.5" />}
                                </button>
                            </div>

                            <Link
                                href="/submission-guidelines/call-for-papers"
                                className="hidden lg:inline-flex px-3 2xl:px-6 py-3 bg-secondary text-white text-[9px] 2xl:text-[10px] font-black tracking-wider 2xl:tracking-[0.2em] uppercase rounded-xl hover:bg-secondary-dark transition-all shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30 active:scale-[0.98] whitespace-nowrap font-sans"
                            >
                                Submit Manuscript
                            </Link>

                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="xl:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100/50 hover:bg-slate-200/60 text-primary transition-all backdrop-blur-sm"
                                aria-label="Toggle navigation"
                            >
                                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Fullscreen Mobile Overlay - 2026 Refinement */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="xl:hidden fixed inset-0 top-0 left-0 w-full h-full bg-white z-[999] overflow-y-auto flex flex-col"
                        >
                            {/* Static Mobile Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 sticky top-0 bg-white z-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-xl border border-slate-100 overflow-hidden">
                                        <img src="/logo.jpg" alt="Logo" className="w-full h-full object-contain" />
                                    </div>
                                    <span className="font-serif font-bold text-lg text-primary">Sanmati Spectrum</span>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-700"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="flex-grow px-6 py-8 space-y-1 pb-12">
                                {navItems.map((item, idx) => (
                                    <motion.div 
                                        key={item.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="border-b border-slate-50 last:border-0 pb-2"
                                    >
                                        {item.dropdown ? (
                                            <MobileNavDropdown item={item} isActive={isActive} setIsOpen={setIsOpen} />
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className={`block w-full px-4 py-4 text-sm font-bold rounded-xl transition-colors font-sans uppercase tracking-wider ${isActive(item.href)
                                                    ? 'text-secondary bg-secondary/5'
                                                    : 'text-primary hover:bg-slate-50'
                                                    }`}
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            <div className="p-6 border-t border-slate-100 bg-slate-50">
                                <Link
                                    href="/submission-guidelines/call-for-papers"
                                    className="flex items-center justify-center w-full py-4 text-xs font-bold uppercase tracking-widest text-white bg-secondary rounded-xl shadow-lg shadow-secondary/20"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Submit Your Manuscript
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

        </header>
    );
};

export default Navbar;
