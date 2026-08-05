import { Link } from '@inertiajs/react';
import { useState } from 'react';
import {
    Mail, Phone, MapPin, ExternalLink, ArrowRight, BookOpen,
    FileText, Users, Shield, Award, ChevronRight,
    Globe, SendHorizonal, Star
} from 'lucide-react';
import { motion } from 'framer-motion';

const FOOTER_LINKS = {
    journal: {
        title: 'The Journal',
        links: [
            { name: 'About Journal',     href: '/basic-info/about-journal' },
            { name: 'Vision & Mission',  href: '/basic-info/vision-mission' },
            { name: 'Objective & Scope', href: '/basic-info/objective-scope' },
            { name: 'Journal Info',      href: '/basic-info/journal-info' },
            { name: 'Indexing',          href: '/basic-info/indexing' },
            { name: 'About Foundation',  href: '/about-foundation' },
        ],
    },
    editorial: {
        title: 'Editorial',
        links: [
            { name: 'Editors',         href: '/editorial-team/editors' },
            { name: 'Editorial Board', href: '/editorial-team/editorial-board' },
            { name: 'Advisory Board',  href: '/editorial-team/advisory-board' },
            { name: 'Technical Team',  href: '/editorial-team/technical-team' },
        ],
    },
    authors: {
        title: 'For Authors',
        links: [
            { name: 'Call for Papers',       href: '/submission-guidelines/call-for-papers' },
            { name: 'Author Guidelines',     href: '/submission-guidelines' },
            { name: 'Research Areas',        href: '/submission-guidelines/areas' },
            { name: 'Publication Charges',   href: '/submission-guidelines/publication-charges' },
            { name: 'Review Process',        href: '/submission-guidelines/review-process' },
            { name: 'Track Manuscript',      href: '/track-manuscript' },
        ],
    },
    policy: {
        title: 'Policies',
        links: [
            { name: 'Publication Ethics', href: '/publication-policy/ethics' },
            { name: 'Plagiarism Policy',  href: '/publication-policy/plagiarism' },
            { name: 'Peer Review',        href: '/publication-policy/peer-review' },
            { name: 'Compliance',         href: '/compliance' },
            { name: 'Contact Us',         href: '/contact' },
        ],
    },
};

const INDEXING_BADGES = [
    { name: 'CrossRef DOI' },
    { name: 'Google Scholar' },
    { name: 'ISSN Portal' },
    { name: 'ResearchGate' },
    { name: 'Academia.edu' },
    { name: 'Open Access' },
];

export default function Footer() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const year = new Date().getFullYear();

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email || status === 'loading') return;
        setStatus('loading');
        try {
            const res = await fetch('/api/newsletter/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content },
                body: JSON.stringify({ email }),
            });
            setStatus(res.ok ? 'success' : 'error');
            if (res.ok) setEmail('');
        } catch {
            setStatus('error');
        }
        setTimeout(() => setStatus('idle'), 4000);
    };

    return (
        <footer className="relative bg-[#F7F4EC] text-[#2E2E2E] border-t border-[#E9E5DD] overflow-hidden" role="contentinfo">
            <div className="relative z-10">
                {/* ── Top Section ── */}
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">

                        {/* Brand Column (wider) */}
                        <div className="lg:col-span-4 space-y-5">
                            <Link href="/" className="flex items-center gap-3 group w-fit">
                                <img
                                    src="/logo.webp"
                                    alt="Sanmati Spectrum of Knowledge - Peer Reviewed Multidisciplinary ISSN Journal Logo"
                                    width="44"
                                    height="44"
                                    loading="lazy"
                                    decoding="async"
                                    className="h-11 w-11 rounded-lg object-cover border border-[#E9E5DD]"
                                />
                                <div>
                                    <div className="text-base font-serif font-black text-primary leading-tight">Sanmati Spectrum</div>
                                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider leading-tight">of Knowledge & Emerging Discourse</div>
                                </div>
                            </Link>

                            <p className="text-xs text-[#2E2E2E]/80 leading-relaxed max-w-xs font-medium">
                                Publish research paper in India with Sanmati Spectrum — a peer reviewed multidisciplinary ISSN journal (ISSN 3108-1819) aligned with UGC Care guidelines.
                            </p>

                            {/* Key Badges */}
                            <div className="flex flex-wrap gap-1.5">
                                <span className="px-2.5 py-0.5 text-[9px] font-bold tracking-wider uppercase bg-[#E9E5DD] text-slate-700 rounded">ISSN 3108-1819</span>
                                <span className="px-2.5 py-0.5 text-[9px] font-bold tracking-wider uppercase bg-primary/10 text-primary rounded">Open Access</span>
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[9px] font-bold tracking-wider uppercase bg-secondary/15 text-secondary rounded">
                                    <Star className="w-2.5 h-2.5 fill-current" />IF 5.3
                                </span>
                            </div>

                            {/* Contact Details */}
                            <div className="space-y-2 text-xs text-[#2E2E2E]/80 font-medium">
                                <div className="flex items-start gap-2">
                                    <Mail className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                                    <div className="flex flex-col gap-1">
                                        <a href="mailto:sanmatijournal@gmail.com" className="hover:text-primary transition-colors">
                                            sanmatijournal@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <a href="tel:+919870713912" className="flex items-center gap-2 hover:text-primary transition-colors">
                                    <Phone className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                                    +91 9870713912 / +91 8979782949
                                </a>
                                <div className="flex items-start gap-2">
                                    <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>B-002 ‘Sanmati’ Faculty Block, TMU Campus, Delhi Road Moradabad</span>
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="space-y-2.5 max-w-xs">
                                <div className="text-[10px] font-bold uppercase tracking-widest text-[#2E2E2E]/60">Stay Informed</div>
                                <form onSubmit={handleSubscribe} className="flex gap-2">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="Your email address"
                                        className="flex-1 px-3 py-2 rounded-lg bg-white border border-[#E9E5DD] text-xs text-dark placeholder:text-slate-400 focus:outline-none focus:border-primary transition-all duration-200"
                                        required
                                        disabled={status === 'loading' || status === 'success'}
                                    />
                                    <button
                                        type="submit"
                                        disabled={status === 'loading' || status === 'success'}
                                        className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white text-xs font-bold uppercase tracking-wider disabled:opacity-50 transition-all duration-200 flex-shrink-0"
                                        aria-label="Subscribe"
                                    >
                                        <SendHorizonal className="w-3.5 h-3.5" />
                                    </button>
                                </form>
                                {status === 'success' && <p className="text-[10px] text-primary font-bold">✓ Subscribed successfully!</p>}
                                {status === 'error'   && <p className="text-[10px] text-secondary font-bold">Something went wrong. Try again.</p>}
                            </div>
                        </div>

                        {/* Link Columns */}
                        {Object.values(FOOTER_LINKS).map((section) => (
                            <div key={section.title} className="lg:col-span-2 space-y-3.5">
                                <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#2E2E2E]/60">
                                    {section.title}
                                </h3>
                                <ul className="space-y-1.5">
                                    {section.links.map(link => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="group flex items-center gap-1 text-xs text-[#2E2E2E]/80 hover:text-primary transition-colors duration-250 font-medium"
                                            >
                                                <ChevronRight className="w-3 h-3 text-primary/60 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0 -ml-1" />
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Indexing Strip ── */}
                <div className="border-t border-[#E9E5DD] py-6">
                    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <span className="text-[9px] font-bold uppercase tracking-widest text-[#2E2E2E]/60 flex-shrink-0">
                                Indexed & Abstracted In
                            </span>
                            <div className="flex flex-wrap items-center gap-1.5">
                                {INDEXING_BADGES.map(b => (
                                    <span
                                        key={b.name}
                                        className="inline-flex items-center px-2.5 py-0.5 rounded border border-[#E9E5DD] bg-white text-[10px] font-medium text-[#2E2E2E]/80 hover:text-primary hover:border-primary transition-colors cursor-default"
                                    >
                                        {b.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Bottom Bar ── */}
                <div className="border-t border-[#E9E5DD] py-5 bg-[#FFFDF8]/40">
                    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] text-slate-500 font-medium">
                            <p>
                                © {year} Sanmati Spectrum of Knowledge & Emerging Discourse. All rights reserved.
                            </p>
                            <div className="flex items-center gap-1">
                                Committed to academic integrity and international research visibility
                            </div>
                            <div className="flex items-center gap-3">
                                <Link href="/publication-policy/ethics"     className="hover:text-primary transition-colors">Ethics</Link>
                                <span className="w-1 h-1 rounded-full bg-slate-300" />
                                <Link href="/publication-policy/plagiarism" className="hover:text-primary transition-colors">Plagiarism</Link>
                                <span className="w-1 h-1 rounded-full bg-slate-300" />
                                <Link href="/compliance"                    className="hover:text-primary transition-colors">Compliance</Link>
                                <span className="w-1 h-1 rounded-full bg-slate-300" />
                                <Link href="/contact"                       className="hover:text-primary transition-colors">Contact</Link>
                                <span className="w-1 h-1 rounded-full bg-slate-300" />
                                <Link href="/antigravity-sandbox"           className="hover:text-primary font-bold text-primary transition-colors">Antigravity Sandbox</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
