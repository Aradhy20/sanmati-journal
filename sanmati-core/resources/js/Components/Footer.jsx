import { Link } from '@inertiajs/react';
import { useState } from 'react';
import {
    Mail, Phone, MapPin, ExternalLink, ArrowRight, BookOpen,
    FileText, Users, Shield, Award, Rss, ChevronRight,
    Globe, SendHorizonal, Heart, Star
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
            { name: 'Awards',             href: '/awards' },
            { name: 'Contact Us',         href: '/contact' },
        ],
    },
};

const INDEXING_BADGES = [
    { name: 'CrossRef DOI', color: 'bg-orange-100 text-orange-700 border-orange-200' },
    { name: 'Google Scholar', color: 'bg-blue-100 text-blue-700 border-blue-200' },
    { name: 'ISSN Portal', color: 'bg-purple-100 text-purple-700 border-purple-200' },
    { name: 'ResearchGate', color: 'bg-teal-100 text-teal-700 border-teal-200' },
    { name: 'Academia.edu', color: 'bg-slate-100 text-slate-700 border-slate-200' },
    { name: 'Open Access', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
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
        <footer className="relative bg-slate-900 text-white overflow-hidden" role="contentinfo">
            {/* Decorative gradient top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-emerald" aria-hidden="true" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

            <div className="relative z-10">
                {/* ── Top Section ── */}
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">

                        {/* Brand Column (wider) */}
                        <div className="lg:col-span-4 space-y-6">
                            <Link href="/" className="flex items-center gap-3 group w-fit">
                                <img
                                    src="/logo.jpg"
                                    alt="Sanmati Spectrum Journal"
                                    className="h-12 w-12 rounded-xl object-cover border-2 border-white/10 group-hover:border-secondary/50 transition-colors duration-300"
                                />
                                <div>
                                    <div className="text-base font-black text-white leading-tight">Sanmati Spectrum</div>
                                    <div className="text-xs text-white/50 leading-tight">of Knowledge & Emerging Discourse</div>
                                </div>
                            </Link>

                            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
                                A national multidisciplinary peer-reviewed quarterly research journal dedicated to advancing scholarly discourse across disciplines.
                            </p>

                            {/* Key Badges */}
                            <div className="flex flex-wrap gap-2">
                                <span className="badge-issn text-[10px]">ISSN 3108-1819</span>
                                <span className="badge-open text-[10px]">Open Access</span>
                                <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold bg-amber-900/30 text-amber-400 border border-amber-800/40 rounded-md">
                                    <Star className="w-2.5 h-2.5" />IF 5.3
                                </span>
                            </div>

                            {/* Contact */}
                            <div className="space-y-2.5 text-sm text-white/60">
                                <a href="mailto:sanmatijournal@gmail.com" className="flex items-center gap-2.5 hover:text-white transition-colors">
                                    <Mail className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                                    sanmatijournal@gmail.com
                                </a>
                                <a href="tel:+918979782949" className="flex items-center gap-2.5 hover:text-white transition-colors">
                                    <Phone className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                                    +91 89797 82949
                                </a>
                                <div className="flex items-start gap-2.5">
                                    <MapPin className="w-3.5 h-3.5 text-secondary flex-shrink-0 mt-0.5" />
                                    <span>Patel Nagar, Haridwar, Uttarakhand 249401, India</span>
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="space-y-3">
                                <div className="text-xs font-black uppercase tracking-widest text-white/40">Stay Updated</div>
                                <form onSubmit={handleSubscribe} className="flex gap-2">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="Your email address"
                                        className="flex-1 px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-secondary/50 focus:bg-white/15 transition-all duration-200"
                                        required
                                        disabled={status === 'loading' || status === 'success'}
                                    />
                                    <button
                                        type="submit"
                                        disabled={status === 'loading' || status === 'success'}
                                        className="px-4 py-2.5 rounded-xl bg-secondary hover:bg-secondary-dark disabled:opacity-50 transition-all duration-200 flex-shrink-0"
                                        aria-label="Subscribe"
                                    >
                                        <SendHorizonal className="w-4 h-4 text-white" />
                                    </button>
                                </form>
                                {status === 'success' && <p className="text-xs text-emerald-400">✓ Subscribed successfully!</p>}
                                {status === 'error'   && <p className="text-xs text-red-400">Something went wrong. Try again.</p>}
                            </div>
                        </div>

                        {/* Link Columns */}
                        {Object.values(FOOTER_LINKS).map((section) => (
                            <div key={section.title} className="lg:col-span-2 space-y-4">
                                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/40">
                                    {section.title}
                                </h3>
                                <ul className="space-y-2">
                                    {section.links.map(link => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="group flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors duration-200"
                                            >
                                                <ChevronRight className="w-3 h-3 text-secondary/60 group-hover:text-secondary transition-colors flex-shrink-0 -ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
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
                <div className="border-t border-white/8 py-6">
                    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <span className="text-[10px] font-black uppercase tracking-widest text-white/30 flex-shrink-0">
                                Indexed & Abstracted In
                            </span>
                            <div className="flex flex-wrap items-center gap-2">
                                {INDEXING_BADGES.map(b => (
                                    <span
                                        key={b.name}
                                        className={`inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-bold border ${b.color} opacity-80 hover:opacity-100 transition-opacity`}
                                    >
                                        {b.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Bottom Bar ── */}
                <div className="border-t border-white/8 py-5">
                    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/30">
                            <p>
                                © {year} Sanmati Spectrum of Knowledge & Emerging Discourse. All rights reserved.
                            </p>
                            <div className="flex items-center gap-1">
                                Made with <Heart className="w-3 h-3 text-red-400 mx-0.5 fill-red-400" aria-label="love" /> for researchers across India
                            </div>
                            <div className="flex items-center gap-4">
                                <Link href="/publication-policy/ethics"     className="hover:text-white transition-colors">Ethics</Link>
                                <Link href="/publication-policy/plagiarism" className="hover:text-white transition-colors">Plagiarism</Link>
                                <Link href="/compliance"                    className="hover:text-white transition-colors">Compliance</Link>
                                <Link href="/contact"                       className="hover:text-white transition-colors">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
