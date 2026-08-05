import { useState, useRef, useEffect, useCallback } from 'react';
import { Link, usePage } from '@inertiajs/react';
import {
    Menu, X, ChevronDown, Search, BookOpen, Users, FileText, Award,
    Globe, Mail, Phone, ExternalLink, Sparkles, ArrowRight, Shield,
    GraduationCap, FlaskConical, Scale, Briefcase, Landmark,
    Atom, BookMarked, SendHorizonal
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
                className={`flex items-center justify-between w-full px-5 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                    isActive(item.href)
                        ? 'bg-primary/10 text-primary'
                        : 'text-dark/90 hover:bg-slate-100'
                }`}
            >
                {item.name}
                <ArrowRight className="w-4 h-4 opacity-40 text-primary" />
            </Link>
        );
    }

    return (
        <div>
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between w-full px-5 py-3.5 rounded-xl text-sm font-bold text-dark/90 hover:bg-slate-100 transition-all duration-200"
                aria-expanded={open}
            >
                {item.name}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180 text-primary' : 'opacity-40'}`} />
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
                        <div className="ml-4 mt-1 mb-2 border-l border-slate-200 pl-4 space-y-0.5">
                            {item.dropdown.map(sub => (
                                <Link
                                    key={sub.href}
                                    href={sub.href}
                                    onClick={closeMenu}
                                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                                        isActive(sub.href)
                                            ? 'bg-primary/10 text-primary font-bold'
                                            : 'text-dark/70 hover:text-primary hover:bg-slate-100 font-medium'
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
        style={{ minWidth: '500px' }}
    >
        <div className="bg-white border border-slate-200 rounded-2xl shadow-card overflow-hidden">
            <div className="p-2 grid grid-cols-2 gap-0.5">
                {item.dropdown.map(sub => (
                    <Link
                        key={sub.href}
                        href={sub.href}
                        className={`group flex items-start gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 ${
                            isActive(sub.href)
                                ? 'bg-primary/8 text-primary'
                                : 'hover:bg-slate-100 text-dark hover:text-primary'
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
                            <div className="text-xs font-bold leading-tight">{sub.name}</div>
                            {sub.desc && (
                                <div className="text-[10px] text-slate-400 mt-0.5 leading-tight line-clamp-1">{sub.desc}</div>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
            <div className="px-4 py-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-medium">Sanmati Spectrum of Knowledge</span>
                <span className="text-[10px] font-bold text-primary px-2.5 py-0.5 bg-primary/10 rounded-full">ISSN 3108-1819</span>
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
                    <a href="mailto:sanmatijournal@gmail.com" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
                        <Mail className="w-3 h-3 text-secondary" />
                        sanmatijournal@gmail.com
                    </a>
                    <a href="tel:+919870713912" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
                        <Phone className="w-3 h-3 text-secondary" />
                        +91 9870713912 / +91 8979782949
                    </a>
                </div>
            </div>

            {/* ── Main Header ── */}
            <nav
                role="navigation"
                aria-label="Main navigation"
                className={`sticky top-0 z-[100] w-full transition-all duration-300 ${
                    scrolled
                        ? 'bg-white/90 backdrop-blur-xl shadow-md border-b border-slate-200/80'
                        : 'bg-white/95 backdrop-blur-md border-b border-slate-200/60'
                }`}
            >
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-18">

                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
                            <div className="relative">
                                <img
                                    src="/logo.webp"
                                    alt="Sanmati Spectrum of Knowledge - Peer Reviewed Multidisciplinary ISSN Journal Logo"
                                    width="40"
                                    height="40"
                                    loading="eager"
                                    fetchpriority="high"
                                    className="h-10 w-10 rounded-xl object-cover border border-slate-200 shadow-xs group-hover:scale-105 transition-transform"
                                />
                            </div>
                            <div className="hidden sm:block">
                                <div className="text-[15px] font-serif font-bold text-slate-900 leading-tight tracking-tight">
                                    Sanmati Spectrum
                                </div>
                                <div className="text-[9px] text-blue-600 font-bold uppercase tracking-wider leading-tight">
                                    of Knowledge & Emerging Discourse
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center gap-1">
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
                                            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                                                isGroupActive(item)
                                                    ? 'text-blue-600 bg-blue-50'
                                                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100'
                                            }`}
                                            aria-haspopup="true"
                                            aria-expanded={activeDropdown === item.name}
                                        >
                                            {item.name}
                                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180 text-blue-600' : ''}`} />
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
                                        className={`px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                                            isActive(item.href)
                                                ? 'text-blue-600 bg-blue-50'
                                                : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            ))}
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center gap-2">
                            {/* Search Button */}
                            <button
                                onClick={onOpenSearch}
                                aria-label="Search articles (Ctrl+K)"
                                title="Search (Ctrl+K)"
                                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-all duration-200"
                            >
                                <Search className="w-4 h-4 text-blue-600" />
                                <span className="hidden md:flex items-center gap-1.5 text-xs text-slate-600">
                                    Search
                                    <kbd className="px-1.5 py-0.5 bg-white rounded text-[10px] border border-slate-200 font-mono shadow-2xs">⌘K</kbd>
                                </span>
                            </button>

                            {/* Submit CTA */}
                            <Link
                                href="/submission-guidelines/call-for-papers"
                                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-blue-600/20 active:scale-95 transition-all duration-200"
                            >
                                <SendHorizonal className="w-3.5 h-3.5" />
                                Submit Paper
                            </Link>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-all duration-200"
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
                        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="fixed inset-y-0 right-0 w-full max-w-sm z-[999] lg:hidden flex flex-col bg-white border-l border-slate-200 shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 flex-shrink-0 bg-slate-50">
                            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                                <img src="/logo.jpg" alt="Sanmati Journal Logo" className="h-9 w-9 rounded-lg object-cover" />
                                <div>
                                    <div className="text-sm font-serif font-black text-primary">Sanmati Spectrum</div>
                                    <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">of Knowledge</div>
                                </div>
                            </Link>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-10 h-10 rounded-lg bg-slate-200/50 flex items-center justify-center text-dark hover:bg-slate-200 transition-colors"
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
                        <div className="px-5 py-5 border-t border-slate-200 space-y-3 flex-shrink-0 bg-slate-50">
                            <Link
                                href="/submission-guidelines/call-for-papers"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-dark transition-colors"
                            >
                                <SendHorizonal className="w-4 h-4" />
                                Submit Your Manuscript
                            </Link>
                            <div className="flex items-center justify-center gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                                <span>ISSN: 3108-1819</span>
                                <span className="w-1 h-1 rounded-full bg-slate-300" />
                                <span>Impact Factor: 5.3</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
