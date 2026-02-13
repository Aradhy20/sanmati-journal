import { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

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

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex-shrink-0 flex items-center -ml-2 md:-ml-4">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform">
                                <img
                                    src="/logo.jpg"
                                    alt="Sanmati Journal Logo"
                                    className="object-contain w-full h-full bg-white"
                                />
                            </div>
                            <span className="text-2xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
                                Sanmati Journal
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-6">
                        {navItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown(item.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={item.href}
                                    className="flex items-center text-sm font-medium text-slate-700 hover:text-blue-900 transition-colors py-2"
                                >
                                    {item.name}
                                    {item.dropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                                </Link>

                                {item.dropdown && (
                                    <AnimatePresence>
                                        {activeDropdown === item.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                                className="absolute top-full left-0 w-64 bg-white/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[20px] border border-white/20 p-2 mt-2 z-50 overflow-hidden"
                                            >
                                                <div className="relative">
                                                    {item.dropdown.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="flex items-center justify-between px-4 py-3 text-sm text-slate-600 hover:bg-blue-600 hover:text-white rounded-[12px] transition-all group/sub"
                                                        >
                                                            {subItem.name}
                                                            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/sub:opacity-100 -translate-x-2 group-hover/sub:translate-x-0 transition-all" />
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}

                        <Link
                            href="/submission-guidelines/call-for-papers"
                            className="ml-4 px-6 py-2.5 bg-blue-900 text-white text-sm font-bold rounded-full hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-900/30 transition-all flex items-center gap-2"
                        >
                            Submit Paper
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-4 lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-blue-900 p-2"
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
                        className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
                    >
                        <div className="px-4 py-8 space-y-2 relative">
                            {navItems.map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    {item.dropdown ? (
                                        <div className="space-y-1">
                                            <div className="font-bold text-slate-900 px-3 pt-4 pb-2 text-xs uppercase tracking-widest opacity-50">{item.name}</div>
                                            <div className="space-y-1">
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="block px-6 py-3 text-base font-semibold text-slate-700 hover:text-blue-900 hover:bg-blue-50/50 rounded-2xl transition-all"
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
                                            className="block px-3 py-4 text-xl font-bold text-slate-900 border-b border-slate-50 hover:text-blue-900 transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </motion.div>
                            ))}
                            <Link
                                href="/submission-guidelines/call-for-papers"
                                className="block px-6 py-5 mt-8 text-center text-lg font-bold text-white bg-blue-900 rounded-[24px] shadow-2xl shadow-blue-900/20"
                                onClick={() => setIsOpen(false)}
                            >
                                Submit Your Paper
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav >
    );
};

export default Navbar;
