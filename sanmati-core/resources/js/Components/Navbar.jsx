import { useState, useRef, useEffect, useCallback } from 'react';
import { Link, usePage } from '@inertiajs/react';
import {
    Menu, X, ChevronDown, Search, BookOpen, Users, FileText, Award,
    Globe, Mail, Phone, ExternalLink, Sparkles, ArrowRight, Shield,
    GraduationCap, FlaskConical, Scale, Briefcase, Landmark,
    Atom, BookMarked, SendHorizonal
} from 'lucide-react';

/* ─── Navigation Data ─────────────────────────────────────── */
const NAV_ITEMS = [
    {
        name: 'Journal',
        dropdown: [
            { name: 'About Journal',     href: '/basic-info/about-journal',   icon: BookOpen,    desc: 'Mission, scope & publication history' },
            { name: 'Vision & Mission',  href: '/basic-info/vision-mission',  icon: Sparkles,    desc: 'Our academic goals and values' },
            { name: 'Objective & Scope', href: '/basic-info/objective-scope', icon: Globe,       desc: 'Research domains we cover' },
            { name: 'Journal Info',      href: '/basic-info/journal-info',    icon: FileText,    desc: 'ISSN, frequency, language & details' },
            { name: 'Indexing',          href: '/basic-info/indexing',        icon: Award,       desc: 'CrossRef, Google Scholar & more' },
            { name: 'About Foundation',  href: '/about-foundation',           icon: Landmark,    desc: 'Sanmati Publication Trust' },
        ],
    },
    {
        name: 'Editorial',
        dropdown: [
            { name: 'Editors',           href: '/editorial-team/editors',         icon: Users,      desc: 'Chief & associate editors' },
            { name: 'Editorial Board',   href: '/editorial-team/editorial-board', icon: BookMarked, desc: 'Subject expert reviewers' },
            { name: 'Advisory Board',    href: '/editorial-team/advisory-board',  icon: Shield,     desc: 'Senior academic advisors' },
            { name: 'Technical Team',    href: '/editorial-team/technical-team',  icon: Atom,       desc: 'Publishing & production team' },
        ],
    },
    {
        name: 'Authors',
        dropdown: [
            { name: 'Conference 2026',       href: '/announcements/international-seminar-gen-z-2026', icon: Award,        desc: 'International Seminar & Best Teacher Award' },
            { name: 'Call for Papers',       href: '/submission-guidelines/call-for-papers',    icon: SendHorizonal, desc: 'Submit your research now' },
            { name: 'Submission Guidelines', href: '/submission-guidelines',                      icon: FileText,      desc: 'Formatting & manuscript rules' },
            { name: 'Research Areas',        href: '/submission-guidelines/areas',                icon: FlaskConical,  desc: 'Disciplines we accept' },
            { name: 'Publication Charges',   href: '/submission-guidelines/publication-charges',  icon: Briefcase,     desc: 'APC & fee waivers' },
            { name: 'Review Process',        href: '/submission-guidelines/review-process',       icon: Shield,        desc: 'Double-blind peer review' },
            { name: 'Important Info',        href: '/submission-guidelines/important-info',       icon: BookOpen,      desc: 'Deadlines & key dates' },
            { name: 'Track Manuscript',      href: '/track-manuscript',                           icon: Search,        desc: 'Check your submission status' },
        ],
    },
    {
        name: 'Policy',
        dropdown: [
            { name: 'Publication Ethics', href: '/publication-policy/ethics',      icon: Scale,         desc: 'COPE-aligned editorial standards' },
            { name: 'Plagiarism Policy',  href: '/publication-policy/plagiarism',  icon: Shield,        desc: 'Originality & screening policy' },
            { name: 'Peer Review',        href: '/publication-policy/peer-review', icon: GraduationCap, desc: 'Review methodology & criteria' },
            { name: 'Compliance',         href: '/compliance',                      icon: Award,         desc: 'Legal & regulatory compliance' },
        ],
    },
    { name: 'Archive', href: '/archive' },
    { name: 'Contact', href: '/contact' },
];

/* ─── Dropdown Menu ───────────────────────────────────────── */
function DropdownMenu({ items }) {
    return (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-2xl shadow-2xl shadow-slate-900/10 overflow-hidden z-50 ring-1 ring-slate-900/5 transition-all duration-150 animate-in fade-in zoom-in-95">
            {/* Top accent line */}
            <div className="h-0.5 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500" />
            <div className="p-2">
                {items.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <Link
                            key={i}
                            href={item.href}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50/80 transition-colors duration-150 group"
                        >
                            <span className="mt-0.5 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-150">
                                <Icon className="w-4 h-4" />
                            </span>
                            <span className="flex flex-col min-w-0">
                                <span className="text-sm font-bold text-slate-800 group-hover:text-blue-700 transition-colors leading-tight">{item.name}</span>
                                <span className="text-[11px] text-slate-500 mt-0.5 leading-snug">{item.desc}</span>
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

/* ─── Mobile Nav Item ─────────────────────────────────────── */
function MobileNavItem({ item, isActive, closeMenu }) {
    const [open, setOpen] = useState(false);
    const hasChild = item.dropdown?.length > 0;

    if (!hasChild) {
        return (
            <Link
                href={item.href}
                onClick={closeMenu}
                className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                    isActive(item.href)
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-slate-800 hover:bg-slate-100'
                }`}
            >
                {item.name}
                {isActive(item.href) && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
            </Link>
        );
    }

    return (
        <div>
            <button
                onClick={() => setOpen(p => !p)}
                className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                    open ? 'bg-blue-50 text-blue-700' : 'text-slate-800 hover:bg-slate-100'
                }`}
                aria-expanded={open}
            >
                {item.name}
                <span className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4 opacity-60" />
                </span>
            </button>
            {open && (
                <div className="overflow-hidden transition-all duration-200">
                    <div className="pl-4 pr-2 py-1.5 space-y-0.5">
                        {item.dropdown.map((sub, i) => {
                            const Icon = sub.icon;
                            return (
                                <Link
                                    key={i}
                                    href={sub.href}
                                    onClick={closeMenu}
                                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                                >
                                    <Icon className="w-4 h-4 text-blue-500 shrink-0" />
                                    {sub.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

/* ─── Main Navbar Component ───────────────────────────────── */
export default function Navbar({ onOpenSearch }) {
    const { url } = usePage();
    const { auth } = usePage().props;
    const user = auth?.user;

    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const dropdownTimeoutRef = useRef(null);
    const navRef = useRef(null);

    /* ── Scroll detection for compact header ── */
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /* ── Click outside to close menus ── */
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setActiveDropdown(null);
                setUserMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    /* ── Close mobile menu on route change ── */
    useEffect(() => {
        setMobileOpen(false);
        setActiveDropdown(null);
        setUserMenuOpen(false);
    }, [url]);

    /* ── Keyboard shortcut: ⌘K or Ctrl+K for search ── */
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                onOpenSearch?.();
            }
            if (e.key === 'Escape') {
                setActiveDropdown(null);
                setUserMenuOpen(false);
                setMobileOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onOpenSearch]);

    /* ── Dropdown hover handlers with slight debounce ── */
    const handleMouseEnter = useCallback((name) => {
        clearTimeout(dropdownTimeoutRef.current);
        setActiveDropdown(name);
    }, []);

    const handleMouseLeave = useCallback(() => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 150);
    }, []);

    const isActive = (href) => url === href || url.startsWith(href + '/');

    const getDashboardLink = () => {
        if (!user) return '/login';
        if (user.role === 'admin') return '/admin/dashboard';
        if (user.role === 'editor') return '/editor/dashboard';
        if (user.role === 'reviewer') return '/reviewer/dashboard';
        return '/dashboard';
    };

    return (
        <>
            {/* ── Top Utility Bar ── */}
            <div className="bg-slate-900 text-slate-300 text-[11px] font-medium border-b border-slate-800">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <span className="hidden sm:inline-flex items-center gap-1.5 text-blue-400 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            ISSN: 3108-1819 (Online)
                        </span>
                        <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
                            <Shield className="w-3 h-3 text-indigo-400" />
                            Peer-Reviewed Multidisciplinary Journal
                        </span>
                    </div>
                    <div className="flex items-center gap-4 ml-auto">
                        <Link href="/announcements/international-seminar-gen-z-2026" className="hover:text-amber-300 transition-colors flex items-center gap-1 text-amber-400 font-semibold">
                            <Sparkles className="w-3 h-3 text-amber-400" />
                            Seminar 2026
                        </Link>
                        <Link href="/blog" className="hover:text-white transition-colors flex items-center gap-1">
                            <BookOpen className="w-3 h-3 text-cyan-400" />
                            Research Blog
                        </Link>
                        <Link href="/downloads" className="hover:text-white transition-colors flex items-center gap-1">
                            <Award className="w-3 h-3 text-slate-400" />
                            Downloads
                        </Link>
                        <a href="mailto:sanmatijournal@gmail.com" className="hover:text-white transition-colors hidden sm:flex items-center gap-1">
                            <Mail className="w-3 h-3 text-blue-400" />
                            sanmatijournal@gmail.com
                        </a>
                    </div>
                </div>
            </div>

            {/* ── Main Sticky Header ── */}
            <header
                ref={navRef}
                className={`sticky top-0 z-40 transition-all duration-200 ${
                    scrolled
                        ? 'bg-white/95 backdrop-blur-md shadow-md shadow-slate-900/5 py-2.5'
                        : 'bg-white py-3.5 border-b border-slate-100'
                }`}
            >
                <nav className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main Navigation">
                    <div className="flex items-center justify-between gap-4">

                        {/* ── Brand Logo ── */}
                        <Link href="/" className="flex items-center gap-3 group shrink-0">
                            <img
                                src="/logo.webp"
                                alt="Sanmati Spectrum Logo"
                                width="44"
                                height="44"
                                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl object-contain shadow-sm border border-slate-100 group-hover:scale-105 transition-transform duration-200"
                            />
                            <div className="flex flex-col">
                                <span className="text-base sm:text-lg font-heading font-bold text-slate-900 leading-none tracking-tight group-hover:text-blue-600 transition-colors">
                                    Sanmati Spectrum
                                </span>
                                <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase mt-0.5">
                                    Knowledge & Emerging Discourse
                                </span>
                            </div>
                        </Link>

                        {/* ── Desktop Navigation Links ── */}
                        <div className="hidden lg:flex items-center gap-1">
                            {NAV_ITEMS.map((item) => (
                                <div
                                    key={item.name}
                                    className="relative"
                                    onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {!item.dropdown ? (
                                        <Link
                                            href={item.href}
                                            className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all duration-150 ${
                                                isActive(item.href)
                                                    ? 'bg-blue-50 text-blue-700'
                                                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                                            }`}
                                        >
                                            {item.name}
                                        </Link>
                                    ) : (
                                        <button
                                            className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-bold transition-all duration-150 ${
                                                activeDropdown === item.name
                                                    ? 'bg-blue-50 text-blue-700'
                                                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                                            }`}
                                            aria-haspopup="true"
                                            aria-expanded={activeDropdown === item.name}
                                        >
                                            {item.name}
                                            <span className={`transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`}>
                                                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                                            </span>
                                        </button>
                                    )}

                                    {activeDropdown === item.name && item.dropdown && (
                                        <DropdownMenu items={item.dropdown} />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* ── Right Actions ── */}
                        <div className="flex items-center gap-2">
                            {/* Search */}
                            <button
                                onClick={onOpenSearch}
                                className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all duration-150"
                                aria-label="Open search"
                            >
                                <Search className="w-4.5 h-4.5" />
                                <span className="hidden xl:inline text-slate-400 text-xs font-normal">Search...</span>
                                <kbd className="hidden xl:inline px-1.5 py-0.5 text-[10px] font-bold bg-slate-100 text-slate-500 rounded-md border border-slate-200">⌘K</kbd>
                            </button>

                            {/* Auth buttons */}
                            {user ? (
                                <div className="relative">
                                    <button
                                        onClick={() => setUserMenuOpen(p => !p)}
                                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-50 border border-blue-100 text-sm font-bold text-blue-700 hover:bg-blue-100 transition-all"
                                    >
                                        <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                                            {user.name?.charAt(0)?.toUpperCase()}
                                        </span>
                                        <span className="hidden sm:inline max-w-24 truncate">{user.name?.split(' ')[0]}</span>
                                        <ChevronDown className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${userMenuOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {userMenuOpen && (
                                        <div className="absolute right-0 top-full mt-2 w-52 bg-white border border-slate-200 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95">
                                            <Link href={getDashboardLink()} className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                                                <GraduationCap className="w-4 h-4 text-blue-500" /> Dashboard
                                            </Link>
                                            <Link href="/settings" className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                                                <Award className="w-4 h-4 text-blue-500" /> Profile Settings
                                            </Link>
                                            <div className="my-1 border-t border-slate-100" />
                                            <Link
                                                href="/logout"
                                                method="post"
                                                as="button"
                                                className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-bold text-red-600 hover:bg-red-50 transition-colors w-full text-left"
                                            >
                                                <X className="w-4 h-4" /> Sign Out
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="hidden sm:flex items-center gap-2">
                                    <Link
                                        href="/login"
                                        className="px-4 py-2 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-100 transition-colors"
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        href="/submission-guidelines/call-for-papers"
                                        className="px-4 py-2 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-200"
                                    >
                                        Submit Paper
                                    </Link>
                                </div>
                            )}

                            {/* Mobile menu toggle */}
                            <button
                                onClick={() => setMobileOpen(p => !p)}
                                className="lg:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                                aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                                aria-expanded={mobileOpen}
                                aria-controls="mobile-menu"
                            >
                                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* ── Mobile Drawer ── */}
            {mobileOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-[90] bg-slate-900/50 backdrop-blur-sm lg:hidden transition-opacity duration-200"
                        onClick={() => setMobileOpen(false)}
                        aria-hidden="true"
                    />
                    {/* Drawer */}
                    <div
                        id="mobile-menu"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Mobile navigation"
                        className="fixed top-0 right-0 bottom-0 z-[95] w-80 max-w-[90vw] bg-white shadow-2xl lg:hidden flex flex-col overflow-hidden transition-transform duration-300 ease-out"
                    >
                        {/* Drawer header */}
                        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                            <div>
                                <div className="text-sm font-heading font-bold text-slate-900">Sanmati Spectrum</div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">ISSN 3108-1819</div>
                            </div>
                            <button
                                onClick={() => setMobileOpen(false)}
                                className="w-8 h-8 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                                aria-label="Close menu"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Drawer body */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-1">
                            {NAV_ITEMS.map(item => (
                                <MobileNavItem key={item.name} item={item} isActive={isActive} closeMenu={() => setMobileOpen(false)} />
                            ))}
                        </div>

                        {/* Drawer footer CTAs */}
                        <div className="p-4 border-t border-slate-100 space-y-2.5">
                            {user ? (
                                <Link
                                    href={getDashboardLink()}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors"
                                >
                                    <GraduationCap className="w-4 h-4" /> Go to Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href="/submission-guidelines/call-for-papers"
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors"
                                    >
                                        <SendHorizonal className="w-4 h-4" /> Submit Paper
                                    </Link>
                                    <Link
                                        href="/login"
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-slate-200 text-slate-700 text-sm font-bold hover:bg-slate-50 transition-colors"
                                    >
                                        Sign In to Dashboard
                                    </Link>
                                </>
                            )}
                            <div className="flex items-center justify-center gap-4 pt-1">
                                <a href="tel:+918979782949" className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors">
                                    <Phone className="w-3.5 h-3.5" /> +91 89797 82949
                                </a>
                                <button onClick={onOpenSearch} className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors">
                                    <Search className="w-3.5 h-3.5" /> Search
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
