import { useState, useRef, useEffect, useCallback } from 'react';
import { Link, usePage } from '@inertiajs/react';
import {
    Menu, X, ChevronDown, Search, BookOpen, Users, FileText, Award,
    Globe, Mail, Phone, ExternalLink, Sparkles, ArrowRight, Shield,
    GraduationCap, FlaskConical, Scale, Briefcase, Landmark, Heart,
    Atom, BookMarked, SendHorizonal, Palette
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Navigation Data ──────────────────────────────────────── */
const NAV_ITEMS = [
    {
        name: 'Journal',
        dropdown: [
            { name: 'About Journal',     href: '/basic-info/about-journal',   icon: BookOpen,    desc: 'Mission, scope & publication history' },
            { name: 'Vision & Mission',  href: '/basic-info/vision-mission',  icon: Sparkles,    desc: 'Our academic goals and values' },
            { name: 'Objective & Scope', href: '/basic-info/objective-scope', icon: Globe,       desc: 'Research domains we cover' },
            { name: 'Journal Info',      href: '/basic-info/journal-info',    icon: FileText,    desc: 'ISSN, frequency, language & details' },
            { name: 'Indexing',          href: '/basic-info/indexing',        icon: Award,       desc: 'CrossRef, Google Scholar & more' },
            { name: 'About Foundation',  href: '/about-foundation',           icon: Landmark,    desc: 'Sanmati Publication trust' },
        ],
    },
    {
        name: 'Editorial',
        dropdown: [
            { name: 'Editors',           href: '/editorial-team/editors',         icon: Users,    desc: 'Chief & associate editors' },
            { name: 'Editorial Board',   href: '/editorial-team/editorial-board', icon: BookMarked, desc: 'Subject expert reviewers' },
            { name: 'Advisory Board',    href: '/editorial-team/advisory-board',  icon: Shield,   desc: 'Senior academic advisors' },
            { name: 'Technical Team',    href: '/editorial-team/technical-team',  icon: Atom,     desc: 'Publishing & production team' },
        ],
    },
    {
        name: 'Authors',
        dropdown: [
            { name: 'Call for Papers',        href: '/submission-guidelines/call-for-papers',      icon: SendHorizonal, desc: 'Submit your research now' },
            { name: 'Submission Guidelines',  href: '/submission-guidelines',                       icon: FileText,      desc: 'Formatting & manuscript rules' },
            { name: 'Research Areas',         href: '/submission-guidelines/areas',                 icon: FlaskConical,  desc: 'Disciplines we accept' },
            { name: 'Publication Charges',    href: '/submission-guidelines/publication-charges',   icon: Briefcase,     desc: 'APC & fee waivers' },
            { name: 'Review Process',         href: '/submission-guidelines/review-process',        icon: Shield,        desc: 'Double-blind peer review' },
            { name: 'Important Info',         href: '/submission-guidelines/important-info',        icon: BookOpen,      desc: 'Deadlines & key dates' },
            { name: 'Track Manuscript',       href: '/track-manuscript',                            icon: Search,        desc: 'Check your submission status' },
        ],
    },
    {
        name: 'Policy',
        dropdown: [
            { name: 'Publication Ethics', href: '/publication-policy/ethics',      icon: Scale,          desc: 'COPE-aligned editorial standards' },
            { name: 'Plagiarism Policy',  href: '/publication-policy/plagiarism',  icon: Shield,         desc: 'Originality & screening policy' },
            { name: 'Peer Review',        href: '/publication-policy/peer-review', icon: GraduationCap,  desc: 'Review methodology & criteria' },
            { name: 'Compliance',         href: '/compliance',                      icon: Award,          desc: 'Legal & regulatory compliance' },
        ],
    },
    { name: 'Archive', href: '/archive' },
    { name: 'Contact', href: '/contact' },
];

/* ─── Quick Stats Strip ───────────────────────────────────── */
const QUICK_STATS = [
    { label: 'ISSN (Online)', value: '3108-1819' },
    { label: 'Impact Factor', value: '5.3' },
    { label: 'Open Access',   value: '100%' },
];

/* ─── Mobile Nav Item ─────────────────────────────────────── */
const MobileNavItem = ({ item, isActive, closeMenu }) => {
    const [open, setOpen] = useState(false);
    const hasChild = item.dropdown?.length > 0;

    if (!hasChild) {
        return (
            <Link
                href={item.href}
                onClick={closeMenu}
                className={`flex items-center justify-between w-full px-5 py-3.5 rounded-2xl text-sm font-bold transition-all duration-200 ${
                    isActive(item.href)
                        ? 'bg-secondary/10 text-secondary'
                        : 'text-white/90 hover:bg-white/10'
                }`}
            >
                {item.name}
                <ArrowRight className="w-4 h-4 opacity-40" />
            </Link>
        );
    }

    return (
        <div>
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between w-full px-5 py-3.5 rounded-2xl text-sm font-bold text-white/90 hover:bg-white/10 transition-all duration-200"
                aria-expanded={open}
            >
                {item.name}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180 text-secondary' : 'opacity-40'}`} />
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                    >
                        <div className="ml-4 mt-1 mb-2 border-l border-white/15 pl-4 space-y-0.5">
                            {item.dropdown.map(sub => (
                                <Link
                                    key={sub.href}
                                    href={sub.href}
                                    onClick={closeMenu}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-200 ${
                                        isActive(sub.href)
                                            ? 'bg-secondary/15 text-secondary font-bold'
                                            : 'text-white/70 hover:text-white hover:bg-white/10 font-medium'
                                    }`}
                                >
                                    {sub.icon && <sub.icon className="w-4 h-4 flex-shrink-0 opacity-70" />}
                                    {sub.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

/* ─── Desktop Mega Menu ────────────────────────────────────── */
const MegaMenu = ({ item, isActive }) => (
    <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.98 }}
        transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50"
        style={{ minWidth: '520px' }}
    >
        <div className="bg-white/95 backdrop-blur-2xl border border-slate-200/80 rounded-2xl shadow-[0_24px_60px_-8px_rgba(11,31,58,0.20)] overflow-hidden">
            <div className="p-2 grid grid-cols-2 gap-0.5">
                {item.dropdown.map(sub => (
                    <Link
                        key={sub.href}
                        href={sub.href}
                        className={`group flex items-start gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 ${
                            isActive(sub.href)
                                ? 'bg-primary/8 text-primary'
                                : 'hover:bg-slate-50 text-slate-700 hover:text-primary'
                        }`}
                    >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200 ${
                            isActive(sub.href)
                                ? 'bg-primary text-white'
                                : 'bg-slate-100 text-slate-500 group-hover:bg-primary/10 group-hover:text-primary'
                        }`}>
                            {sub.icon && <sub.icon className="w-4 h-4" />}
                        </div>
                        <div>
                            <div className="text-sm font-bold leading-tight">{sub.name}</div>
                            {sub.desc && (
                                <div className="text-[11px] text-slate-400 mt-0.5 leading-tight line-clamp-1">{sub.desc}</div>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
            <div className="px-4 py-3 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">Sanmati Spectrum of Knowledge</span>
                <span className="ds-badge-accent">ISSN 3108-1819</span>
            </div>
        </div>
    </motion.div>
);

/* ─── Main Navbar ──────────────────────────────────────────── */
const Navbar = ({ onOpenSearch }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const timeoutRef = useRef(null);
    const { url } = usePage();

    // Theme Switcher State
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('site-theme') || 'classic';
        }
        return 'classic';
    });
    const [isThemeOpen, setIsThemeOpen] = useState(false);
    const themeRef = useRef(null);

    const isActive = useCallback((href) => {
        if (!href) return false;
        return url === href || url.startsWith(href + '/') || url.startsWith(href + '?');
    }, [url]);

    const isGroupActive = useCallback((item) => {
        if (item.href) return isActive(item.href);
        return item.dropdown?.some(sub => isActive(sub.href));
    }, [isActive]);

    useEffect(() => {
        let last = false;
        const onScroll = () => {
            const next = window.scrollY > 20;
            if (next !== last) { last = next; setScrolled(next); }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => { setIsOpen(false); }, [url]);

    // Lock body scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const openDropdown  = (name) => { clearTimeout(timeoutRef.current); setActiveDropdown(name); };
    const closeDropdown = ()     => { timeoutRef.current = setTimeout(() => setActiveDropdown(null), 120); };
    const stayOpen      = ()     => { clearTimeout(timeoutRef.current); };

    // Apply theme
    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        if (typeof window !== 'undefined') {
            localStorage.setItem('site-theme', newTheme);
            if (newTheme === 'classic') {
                document.documentElement.removeAttribute('data-theme');
            } else {
                document.documentElement.setAttribute('data-theme', newTheme);
            }
        }
        setIsThemeOpen(false);
    };

    // Close theme dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (themeRef.current && !themeRef.current.contains(event.target)) {
                setIsThemeOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Initial theme load sync
    useEffect(() => {
        const savedTheme = localStorage.getItem('site-theme') || 'classic';
        if (savedTheme === 'classic') {
            document.documentElement.removeAttribute('data-theme');
        } else {
            document.documentElement.setAttribute('data-theme', savedTheme);
        }
    }, []);

    return (
        <>
            {/* ── Announcement Strip ── */}
            <div className="bg-primary text-white py-2 px-4 text-center hidden md:flex items-center justify-center gap-6">
                <div className="flex items-center gap-4 text-[11px] font-medium text-white/80">
                    {QUICK_STATS.map((s, i) => (
                        <span key={i} className="flex items-center gap-2">
                            <span className="text-secondary font-black">{s.value}</span>
                            <span>{s.label}</span>
                            {i < QUICK_STATS.length - 1 && <span className="w-1 h-1 rounded-full bg-white/30 ml-2" />}
                        </span>
                    ))}
                </div>
                <div className="ml-auto flex items-center gap-4 text-[11px] text-white/70">
                    <a href="mailto:sanmatijournal@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
                        <Mail className="w-3 h-3" />
                        sanmatijournal@gmail.com
                    </a>
                    <a href="tel:+918979782949" className="flex items-center gap-1.5 hover:text-white transition-colors">
                        <Phone className="w-3 h-3" />
                        +91 89797 82949
                    </a>
                </div>
            </div>

            {/* ── Main Header ── */}
            <nav
                role="navigation"
                aria-label="Main navigation"
                className={`sticky top-0 z-[100] w-full transition-all duration-300 ${
                    scrolled
                        ? 'bg-white/95 backdrop-blur-2xl shadow-[0_4px_24px_rgba(11,31,58,0.10)] border-b border-slate-200/60'
                        : 'bg-white border-b border-slate-100'
                }`}
            >
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-18">

                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
                            <div className="relative">
                                <img
                                    src="/logo.jpg"
                                    alt="Sanmati Journal"
                                    className="h-10 w-10 rounded-xl object-cover shadow-sm group-hover:shadow-md transition-shadow duration-300"
                                />
                                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" aria-hidden="true" />
                            </div>
                            <div className="hidden sm:block">
                                <div className="text-[13px] font-black text-primary leading-tight tracking-tight">
                                    Sanmati Spectrum
                                </div>
                                <div className="text-[10px] text-muted font-medium leading-tight">
                                    of Knowledge & Emerging Discourse
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center gap-0.5">
                            {NAV_ITEMS.map((item) => (
                                item.dropdown ? (
                                    <div
                                        key={item.name}
                                        className="relative"
                                        onMouseEnter={() => openDropdown(item.name)}
                                        onMouseLeave={closeDropdown}
                                    >
                                        <button
                                            onFocus={() => openDropdown(item.name)}
                                            onBlur={closeDropdown}
                                            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[13px] font-bold transition-all duration-200 ${
                                                isGroupActive(item)
                                                    ? 'text-primary bg-primary/8'
                                                    : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                                            }`}
                                            aria-haspopup="true"
                                            aria-expanded={activeDropdown === item.name}
                                        >
                                            {item.name}
                                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180 text-secondary' : ''}`} />
                                        </button>
                                        <AnimatePresence>
                                            {activeDropdown === item.name && (
                                                <div onMouseEnter={stayOpen} onMouseLeave={closeDropdown}>
                                                    <MegaMenu item={item} isActive={isActive} />
                                                </div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`px-3.5 py-2 rounded-xl text-[13px] font-bold transition-all duration-200 ${
                                            isActive(item.href)
                                                ? 'text-primary bg-primary/8'
                                                : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            ))}
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center gap-2">
                            {/* Search */}
                            <button
                                onClick={onOpenSearch}
                                aria-label="Search articles (Ctrl+K)"
                                title="Search (Ctrl+K)"
                                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-primary transition-all duration-200"
                            >
                                <Search className="w-4 h-4" />
                                <span className="hidden md:flex items-center gap-1.5 text-xs text-slate-400">
                                    Search
                                    <kbd className="px-1.5 py-0.5 bg-white rounded text-[10px] border border-slate-200 font-mono">⌘K</kbd>
                                </span>
                            </button>

                            {/* Theme Selector */}
                            <div className="relative" ref={themeRef}>
                                <button
                                    onClick={() => setIsThemeOpen(!isThemeOpen)}
                                    aria-label="Change theme"
                                    title="Choose color theme"
                                    className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-primary transition-all duration-200"
                                >
                                    <Palette className="w-4 h-4" />
                                </button>
                                <AnimatePresence>
                                    {isThemeOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute right-0 mt-2 w-48 bg-white border border-slate-100 rounded-2xl shadow-xl z-[150] p-2"
                                        >
                                            <div className="text-[10px] font-black uppercase tracking-wider text-muted px-3 py-1.5 border-b border-slate-50 mb-1">
                                                Select Theme
                                            </div>
                                            {[
                                                { id: 'classic', label: 'Classic Navy', color: 'bg-[#0B1F3A]' },
                                                { id: 'emerald', label: 'Forest Emerald', color: 'bg-[#064E3B]' },
                                                { id: 'crimson', label: 'Deep Crimson', color: 'bg-[#4C0519]' },
                                                { id: 'dark', label: 'Scholarly Dark', color: 'bg-[#0A0F1D]' },
                                            ].map((t) => (
                                                <button
                                                    key={t.id}
                                                    onClick={() => handleThemeChange(t.id)}
                                                    className={`flex items-center gap-3 w-full px-3 py-2 text-xs font-bold rounded-xl transition-all ${
                                                        theme === t.id
                                                            ? 'bg-slate-100 text-primary'
                                                            : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
                                                    }`}
                                                >
                                                    <span className={`w-3.5 h-3.5 rounded-full ${t.color} border border-slate-200/50 flex-shrink-0`} />
                                                    {t.label}
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Submit CTA */}
                            <Link
                                href="/submission-guidelines/call-for-papers"
                                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary text-white text-xs font-black uppercase tracking-wider hover:bg-secondary-dark transition-all duration-200 shadow-md hover:shadow-[0_8px_20px_rgba(139,108,48,0.35)]"
                            >
                                <SendHorizonal className="w-3.5 h-3.5" />
                                Submit Paper
                            </Link>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-all duration-200"
                                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                                aria-expanded={isOpen}
                            >
                                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* ── Mobile Fullscreen Menu ── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="fixed inset-0 z-[99] lg:hidden flex flex-col"
                        style={{ background: 'linear-gradient(160deg, #0B1F3A 0%, #1a3560 50%, #0B2D5E 100%)' }}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 flex-shrink-0">
                            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                                <img src="/logo.jpg" alt="Sanmati" className="h-9 w-9 rounded-xl object-cover" />
                                <div>
                                    <div className="text-sm font-black text-white">Sanmati Spectrum</div>
                                    <div className="text-[10px] text-white/50">of Knowledge</div>
                                </div>
                            </Link>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                                aria-label="Close menu"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Scrollable Nav */}
                        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
                            {NAV_ITEMS.map(item => (
                                <MobileNavItem
                                    key={item.name}
                                    item={item}
                                    isActive={isActive}
                                    closeMenu={() => setIsOpen(false)}
                                />
                            ))}
                        </div>

                        {/* Footer Strip */}
                        <div className="px-5 py-5 border-t border-white/10 space-y-3 flex-shrink-0">
                            {/* Mobile Theme Selector */}
                            <div className="flex items-center justify-between px-1 mb-2">
                                <span className="text-[11px] font-black uppercase text-white/50 tracking-wider">Select Theme</span>
                                <div className="flex gap-2">
                                    {[
                                        { id: 'classic', color: 'bg-[#0B1F3A]', title: 'Classic' },
                                        { id: 'emerald', color: 'bg-[#064E3B]', title: 'Emerald' },
                                        { id: 'crimson', color: 'bg-[#4C0519]', title: 'Crimson' },
                                        { id: 'dark', color: 'bg-[#0A0F1D]', title: 'Dark' },
                                    ].map((t) => (
                                        <button
                                            key={t.id}
                                            onClick={() => handleThemeChange(t.id)}
                                            title={t.title}
                                            className={`w-7 h-7 rounded-full ${t.color} border-2 transition-all flex items-center justify-center ${
                                                theme === t.id ? 'border-white scale-110' : 'border-white/20'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <Link
                                href="/submission-guidelines/call-for-papers"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-secondary text-white font-black text-sm hover:bg-secondary-dark transition-colors"
                            >
                                <SendHorizonal className="w-4 h-4" />
                                Submit Your Research Paper
                            </Link>
                            <div className="flex items-center justify-center gap-6 text-[11px] text-white/40">
                                <span>ISSN: 3108-1819</span>
                                <span className="w-1 h-1 rounded-full bg-white/30" />
                                <span>Impact Factor: 5.3</span>
                                <span className="w-1 h-1 rounded-full bg-white/30" />
                                <span>Open Access</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
