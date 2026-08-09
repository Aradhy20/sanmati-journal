import { useState, useRef, useEffect, useCallback } from 'react';
import { Link, usePage } from '@inertiajs/react';
import {
    Menu, X, ChevronDown, Search, BookOpen, Users, FileText, Award,
    Globe, Mail, Phone, ExternalLink, Sparkles, ArrowRight, Shield,
    GraduationCap, FlaskConical, Scale, Briefcase, Landmark,
    Atom, BookMarked, SendHorizonal
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
        <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-2xl shadow-2xl shadow-slate-900/10 overflow-hidden z-50 ring-1 ring-slate-900/5"
        >
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
        </motion.div>
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
                <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-4 h-4 opacity-60" />
                </motion.span>
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                    >
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
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

/* ─── Main Navbar ─────────────────────────────────────────── */
export default function Navbar({ onOpenSearch }) {
    const { url } = usePage();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const navRef = useRef(null);
    const timeoutRef = useRef(null);

    const { auth } = usePage().props;
    const user = auth?.user;

    const isActive = useCallback((href) => {
        if (href === '/') return url === '/';
        return url.startsWith(href);
    }, [url]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 16);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') { setMobileOpen(false); setActiveDropdown(null); } };
        const handleClick = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setActiveDropdown(null);
                setUserMenuOpen(false);
            }
        };
        document.addEventListener('keydown', handleKey);
        document.addEventListener('mousedown', handleClick);
        return () => { document.removeEventListener('keydown', handleKey); document.removeEventListener('mousedown', handleClick); };
    }, []);

    // Prevent body scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const openDropdown = (name) => {
        clearTimeout(timeoutRef.current);
        setActiveDropdown(name);
    };
    const closeDropdown = () => {
        timeoutRef.current = setTimeout(() => setActiveDropdown(null), 120);
    };

    const getDashboardLink = () => {
        if (!user) return '/login';
        const role = user.role;
        if (role === 'admin') return '/admin/dashboard';
        if (role === 'editor') return '/editor/dashboard';
        if (role === 'reviewer') return '/reviewer/dashboard';
        return '/author/dashboard';
    };

    return (
        <>
            {/* ── Announcement Bar ── */}
            <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 text-white text-center py-2 px-4 text-xs font-bold tracking-wide">
                <span className="opacity-90">📢 Call for Papers — Volume 2, Issue 3 is now open.</span>{' '}
                <Link href="/submission-guidelines/call-for-papers" className="underline underline-offset-2 hover:no-underline ml-1 font-bold">
                    Submit Your Research →
                </Link>
            </div>

            {/* ── Main Header ── */}
            <header
                ref={navRef}
                className={`sticky top-0 z-[100] w-full transition-all duration-300 ${
                    scrolled
                        ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-200/70'
                        : 'bg-white border-b border-slate-200/50'
                }`}
            >
                <nav className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
                    <div className="flex items-center justify-between h-16 lg:h-[68px]">

                        {/* ── Logo ── */}
                        <Link href="/" className="flex items-center gap-3 group shrink-0" aria-label="Sanmati Journal home">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                                <BookOpen className="w-5 h-5 text-white" />
                            </div>
                            <div className="hidden sm:block">
                                <div className="text-base font-heading font-bold text-slate-900 leading-tight">Sanmati Spectrum</div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">of Knowledge</div>
                            </div>
                        </Link>

                        {/* ── Desktop Nav ── */}
                        <div className="hidden lg:flex items-center gap-1">
                            {NAV_ITEMS.map((item) => (
                                <div
                                    key={item.name}
                                    className="relative"
                                    onMouseEnter={() => item.dropdown && openDropdown(item.name)}
                                    onMouseLeave={() => item.dropdown && closeDropdown()}
                                >
                                    {item.href ? (
                                        <Link
                                            href={item.href}
                                            className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-bold transition-all duration-150 ${
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
                                            <motion.span
                                                animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                                            </motion.span>
                                        </button>
                                    )}

                                    <AnimatePresence>
                                        {activeDropdown === item.name && item.dropdown && (
                                            <DropdownMenu items={item.dropdown} />
                                        )}
                                    </AnimatePresence>
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
                                <div className="relative" ref={null}>
                                    <button
                                        onClick={() => setUserMenuOpen(p => !p)}
                                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-50 border border-blue-100 text-sm font-bold text-blue-700 hover:bg-blue-100 transition-all"
                                    >
                                        <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                                            {user.name?.charAt(0)?.toUpperCase()}
                                        </span>
                                        <span className="hidden sm:inline max-w-24 truncate">{user.name?.split(' ')[0]}</span>
                                        <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                                    </button>
                                    <AnimatePresence>
                                        {userMenuOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 8, scale: 0.97 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 8, scale: 0.97 }}
                                                className="absolute right-0 top-full mt-2 w-52 bg-white border border-slate-200 rounded-2xl shadow-2xl p-2 z-50"
                                            >
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
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
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
                                <AnimatePresence mode="wait">
                                    {mobileOpen
                                        ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X className="w-5 h-5" /></motion.span>
                                        : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu className="w-5 h-5" /></motion.span>
                                    }
                                </AnimatePresence>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* ── Mobile Drawer ── */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-[90] bg-slate-900/50 backdrop-blur-sm lg:hidden"
                            onClick={() => setMobileOpen(false)}
                            aria-hidden="true"
                        />
                        {/* Drawer */}
                        <motion.div
                            id="mobile-menu"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Mobile navigation"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 bottom-0 z-[95] w-80 max-w-[90vw] bg-white shadow-2xl lg:hidden flex flex-col overflow-hidden"
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
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
