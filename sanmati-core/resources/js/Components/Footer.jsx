import { Link } from '@inertiajs/react';
import {
    BookOpen, Mail, Phone, MapPin, ExternalLink,
    Globe, Shield, Award, FileText, ChevronRight,
    Twitter, Linkedin, Youtube, Facebook,
    ArrowRight, CheckCircle2
} from 'lucide-react';

const COLS = [
    {
        title: 'Journal',
        links: [
            { name: 'About Journal',     href: '/basic-info/about-journal' },
            { name: 'Special Issue',     href: '/special-issue' },
            { name: 'Archive',           href: '/archive' },
            { name: 'Vision & Mission',  href: '/basic-info/vision-mission' },
            { name: 'Journal Info',      href: '/basic-info/journal-info' },
            { name: 'Indexing',          href: '/basic-info/indexing' },
            { name: 'About Foundation',  href: '/about-foundation' },
            { name: 'Blog',              href: '/blog' },
        ],
    },
    {
        title: 'Editorial',
        links: [
            { name: 'Editors',           href: '/editorial-team/editors' },
            { name: 'Editorial Board',   href: '/editorial-team/editorial-board' },
            { name: 'Advisory Board',    href: '/editorial-team/advisory-board' },
            { name: 'Technical Team',    href: '/editorial-team/technical-team' },
        ],
    },
    {
        title: 'For Authors',
        links: [
            { name: 'Call for Papers',       href: '/submission-guidelines/call-for-papers' },
            { name: 'Submission Guidelines', href: '/submission-guidelines' },
            { name: 'Research Areas',        href: '/submission-guidelines/areas' },
            { name: 'Publication Charges',   href: '/submission-guidelines/publication-charges' },
            { name: 'Review Process',        href: '/submission-guidelines/review-process' },
            { name: 'Track Manuscript',      href: '/track-manuscript' },
        ],
    },
    {
        title: 'Policies',
        links: [
            { name: 'Publication Ethics',  href: '/publication-policy/ethics' },
            { name: 'Plagiarism Policy',   href: '/publication-policy/plagiarism' },
            { name: 'Peer Review Policy',  href: '/publication-policy/peer-review' },
            { name: 'Compliance',          href: '/compliance' },
            { name: 'Downloads',           href: '/downloads' },
        ],
    },
];

const TRUST = [
    { label: 'ISSN 3108-1819', icon: Shield },
    { label: 'CrossRef DOI', icon: Award },
    { label: 'Open Access CC-BY 4.0', icon: Globe },
    { label: 'Double-Blind Review', icon: CheckCircle2 },
    { label: 'COPE Guidelines', icon: FileText },
];

const SOCIALS = [
    { label: 'LinkedIn', icon: Linkedin, href: '#' },
    { label: 'Twitter / X', icon: Twitter, href: '#' },
    { label: 'YouTube', icon: Youtube, href: '#' },
    { label: 'Facebook', icon: Facebook, href: '#' },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-white" role="contentinfo">
            {/* ── Top CTA Band ── */}
            <div className="border-b border-slate-800/70">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-heading font-bold text-white">Ready to Publish Your Research?</h2>
                            <p className="text-slate-400 text-sm mt-1">Submit your manuscript today and reach researchers worldwide.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center">
                            <Link
                                href="/submission-guidelines/call-for-papers"
                                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-blue-600/30 text-center"
                            >
                                <span>Submit Your Paper</span>
                                <ArrowRight className="w-4 h-4 shrink-0" />
                            </Link>
                            <a
                                href="/download/author-guidelines-template"
                                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white text-sm font-bold hover:-translate-y-0.5 transition-all duration-200 text-center"
                            >
                                Download Template
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Main Footer Grid ── */}
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">

                    {/* Brand column (spans 2) */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group w-fit">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
                                <BookOpen className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <div className="text-sm font-heading font-bold text-white leading-tight">Sanmati Spectrum</div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">of Knowledge</div>
                            </div>
                        </Link>

                        <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                            An international peer-reviewed multidisciplinary research journal committed to advancing knowledge through rigorous scholarship and open access dissemination.
                        </p>

                        {/* Contact details */}
                        <div className="space-y-2.5">
                            <a href="mailto:sanmatijournal@gmail.com" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors group">
                                <Mail className="w-4 h-4 text-blue-400 group-hover:text-blue-300 shrink-0" />
                                sanmatijournal@gmail.com
                            </a>
                            <div className="flex flex-col gap-1 text-sm text-slate-400">
                                <a href="tel:+919870713912" className="flex items-center gap-2.5 hover:text-white transition-colors group">
                                    <Phone className="w-4 h-4 text-blue-400 group-hover:text-blue-300 shrink-0" />
                                    +91 98707 13912
                                </a>
                                <a href="tel:+917999525735" className="flex items-center gap-2.5 hover:text-white transition-colors pl-6.5 text-xs text-slate-400 group">
                                    +91 79995 25735
                                </a>
                            </div>
                            <div className="flex items-start gap-2.5 text-sm text-slate-400">
                                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                                <span>B-002, Faculty Block, TMU Campus, Moradabad, UP, India</span>
                            </div>
                            <div className="pt-2 text-xs text-slate-400">
                                Published by{' '}
                                <Link href="/about-foundation" className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-2">
                                    Sanmati Education & Research Foundation of India
                                </Link>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="flex items-center gap-2">
                            {SOCIALS.map(({ label, icon: Icon, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white border border-slate-700 hover:border-blue-500 transition-all duration-200"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav columns */}
                    {COLS.map(col => (
                        <div key={col.title} className="space-y-4">
                            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-widest">{col.title}</h3>
                            <ul className="space-y-2.5">
                                {col.links.map(link => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-slate-400 hover:text-white flex items-center gap-1.5 group transition-colors duration-150"
                                        >
                                            <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all duration-150" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>

            {/* ── Trust Badges Strip ── */}
            <div className="border-t border-slate-800/70">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {TRUST.map(({ label, icon: Icon }) => (
                            <span key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-[11px] font-bold text-slate-300 uppercase tracking-wide">
                                <Icon className="w-3.5 h-3.5 text-blue-400" />
                                {label}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Bottom Bar ── */}
            <div className="border-t border-slate-800">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
                        <p>© {year} Sanmati Spectrum of Knowledge & Emerging Discourse. All rights reserved.</p>
                        <div className="flex items-center justify-center flex-wrap gap-4">
                            <Link href="/publication-policy/ethics" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
                            <Link href="/compliance" className="hover:text-slate-300 transition-colors">Terms of Use</Link>
                            <Link href="/sitemap.xml" className="hover:text-slate-300 transition-colors">Sitemap</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
