import React, { Suspense, useState, useRef, useEffect, lazy } from 'react';
import MainLayout from '../Layouts/MainLayout';
import { motion, useInView, animate } from 'framer-motion';
import { Link } from '@inertiajs/react';
import {
    ArrowRight, BookOpen, Users, Globe, Award, FileText, Star, Trophy,
    Lightbulb, GraduationCap, Microscope, Scale, Palette, Calculator, Cpu,
    ChevronRight, ArrowUpRight, CheckCircle, Clock, BarChart2, Database,
    Search, BookMarked, Shield, Zap, Heart, Quote, SendHorizonal,
    FlaskConical, Leaf, ShoppingBag, BookCopy, Gavel, Building2,
    Download, ExternalLink, Filter, TrendingUp, Bookmark, Share2,
    PlayCircle, ChevronLeft, Phone, Mail, MapPin, MessageCircle
} from 'lucide-react';

const Hero             = lazy(() => import('../Components/Hero'));
const Testimonials     = lazy(() => import('../Components/Testimonials'));
const NewsletterSection = lazy(() => import('../Components/NewsletterSection'));
const HomeFAQ          = lazy(() => import('../Components/HomeFAQ'));
const JournalMetricsDashboard = lazy(() => import('../Components/JournalMetricsDashboard'));

/* ── Animation presets ── */
const fadeUp = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
};

/* ── Disciplines ── */
const DISCIPLINES = [
    { icon: FlaskConical, name: 'Science & Technology',  slug: 'science-technology',   count: 18, color: 'bg-blue-50 text-blue-600 border-blue-200' },
    { icon: Users,        name: 'Social Sciences',        slug: 'social-sciences',       count: 22, color: 'bg-purple-50 text-purple-600 border-purple-200' },
    { icon: Palette,      name: 'Arts & Humanities',      slug: 'arts-humanities',       count: 15, color: 'bg-rose-50 text-rose-600 border-rose-200' },
    { icon: ShoppingBag,  name: 'Management & Commerce',  slug: 'management-commerce',   count: 12, color: 'bg-amber-50 text-amber-700 border-amber-200' },
    { icon: Gavel,        name: 'Law & Governance',       slug: 'law-governance',        count: 8,  color: 'bg-slate-100 text-slate-700 border-slate-200' },
    { icon: GraduationCap,name: 'Education',              slug: 'education',             count: 10, color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { icon: Leaf,         name: 'Environment',            slug: 'environment',           count: 5,  color: 'bg-teal-50 text-teal-700 border-teal-200' },
    { icon: Lightbulb,    name: 'Philosophy',             slug: 'philosophy',            count: 3,  color: 'bg-indigo-50 text-indigo-600 border-indigo-200' },
];

/* ── Why Publish ── */
const WHY = [
    { icon: Zap,          title: 'Fast Review',         desc: '15–30 days double-blind peer review with expert subject reviewers.' },
    { icon: Award,        title: 'CrossRef DOI',         desc: 'Every article receives a registered CrossRef DOI for global indexing.' },
    { icon: Globe,        title: 'Open Access',          desc: '100% open access — no paywall, free to read for researchers worldwide.' },
    { icon: Shield,       title: 'COPE Compliant',       desc: 'Strict publication ethics aligned with COPE international standards.' },
    { icon: BarChart2,    title: 'Impact Factor 5.3',    desc: 'Recognised academic impact score reflecting research quality.' },
    { icon: BookMarked,   title: 'Certificate + DOI',    desc: 'Authors receive DOI certificate and publication confirmation.' },
];

/* ── Submission Steps ── */
const STEPS = [
    { num: '01', title: 'Prepare Manuscript',     desc: 'Format according to our author guidelines and templates.' },
    { num: '02', title: 'Submit Online',           desc: 'Email or submit via our online submission portal.' },
    { num: '03', title: 'Initial Screening',       desc: 'Editorial team checks scope, formatting & originality.' },
    { num: '04', title: 'Peer Review',             desc: 'Double-blind review by 2+ subject-matter experts.' },
    { num: '05', title: 'Decision & Revision',     desc: 'Receive reviewer feedback, revise if required.' },
    { num: '06', title: 'Publication & DOI',       desc: 'Paper published online with CrossRef DOI assigned.' },
];

/* ── Paper Card ── */
function ArticleCard({ paper, index }) {
    const [bookmarked, setBookmarked] = useState(false);
    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="article-card group flex flex-col h-full"
        >
            {/* Category */}
            <div className="flex items-center justify-between mb-3">
                <span className="ds-badge-info capitalize text-[10px]">Research Article</span>
                <button
                    onClick={() => setBookmarked(b => !b)}
                    aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark article'}
                    className="text-slate-300 hover:text-secondary transition-colors"
                >
                    <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-secondary text-secondary' : ''}`} />
                </button>
            </div>

            {/* Title */}
            <h3 className="text-sm font-bold text-primary leading-snug mb-2 line-clamp-3 group-hover:text-accent transition-colors flex-1">
                <Link href={`/article/${paper.id}`} className="hover:underline underline-offset-2">
                    {paper.title}
                </Link>
            </h3>

            {/* Authors */}
            <p className="text-xs text-muted mb-3 truncate">
                <span className="font-semibold">{paper.authors}</span>
            </p>

            {/* Abstract */}
            {paper.abstract && (
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4 flex-shrink-0">
                    {paper.abstract}
                </p>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-auto">
                <div className="flex items-center gap-2">
                    {paper.doi && (
                        <span className="badge-doi">DOI</span>
                    )}
                    {paper.issue && (
                        <span className="text-[10px] text-muted">Vol. {paper.issue.volume?.volume_number}, Iss. {paper.issue.issue_number}</span>
                    )}
                </div>
                <Link
                    href={`/article/${paper.id}`}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-accent hover:text-primary transition-colors"
                >
                    Read <ArrowRight className="w-3 h-3" />
                </Link>
            </div>
        </motion.article>
    );
}

/* ── Section: Latest Articles ── */
function LatestArticles({ papers }) {
    const [filter, setFilter] = useState('all');
    const tabs = ['all', 'hindi', 'english'];

    const filtered = papers.filter(p => {
        if (filter === 'all') return true;
        const lang = (p.language || '').toLowerCase();
        return lang.includes(filter);
    });

    return (
        <section className="section-py bg-warm-bg" aria-labelledby="articles-title">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <div>
                        <div className="section-tagline">
                            <BookOpen className="w-3 h-3" />
                            Latest Research
                        </div>
                        <h2 id="articles-title" className="section-title">Featured Articles</h2>
                    </div>
                    <div className="flex items-center gap-2">
                        {tabs.map(t => (
                            <button
                                key={t}
                                onClick={() => setFilter(t)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all duration-200 ${
                                    filter === t
                                        ? 'bg-primary text-white shadow-md'
                                        : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'
                                }`}
                            >
                                {t === 'all' ? 'All' : t === 'hindi' ? 'हिन्दी' : 'English'}
                            </button>
                        ))}
                        <Link href="/archive" className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-primary hover:border-primary transition-colors">
                            View All <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>

                {filtered.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filtered.slice(0, 6).map((paper, i) => (
                            <ArticleCard key={paper.id} paper={paper} index={i} />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="article-card space-y-3">
                                <div className="skeleton h-4 w-20 rounded-full" />
                                <div className="skeleton h-5 w-full rounded" />
                                <div className="skeleton h-5 w-4/5 rounded" />
                                <div className="skeleton h-3 w-2/3 rounded" />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

/* ── Section: Disciplines ── */
function DisciplinesSection() {
    return (
        <section className="section-py bg-white" aria-labelledby="disciplines-title">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <div className="section-tagline mx-auto w-fit">
                        <Globe className="w-3 h-3" />
                        Research Scope
                    </div>
                    <h2 id="disciplines-title" className="section-title mb-4">Disciplines We Publish</h2>
                    <p className="section-subtitle mx-auto">
                        Welcoming original research across all major academic disciplines — in Hindi and English.
                    </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {DISCIPLINES.map((d, i) => {
                        const Icon = d.icon;
                        return (
                            <motion.div
                                key={d.slug}
                                {...fadeUp}
                                transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                            >
                                <Link
                                    href={`/submission-guidelines/areas/${d.slug}`}
                                    className={`group flex flex-col items-center text-center p-5 rounded-2xl border bg-gradient-to-br hover:-translate-y-1 hover:shadow-md transition-all duration-300 ${d.color}`}
                                    style={{ background: 'white', borderColor: d.color.split(' ').find(c => c.startsWith('border-'))?.replace('border-', '') }}
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${d.color}`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-sm font-bold text-primary leading-snug mb-1">{d.name}</span>
                                    <span className="text-[11px] text-muted">{d.count} articles</span>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/* ── Section: Submission Process ── */
function SubmissionProcess() {
    return (
        <section className="section-py relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #0B1F3A 0%, #0F2B50 100%)' }} aria-labelledby="process-title">
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '50px 50px' }} aria-hidden="true" />
            <div className="relative z-10 container-custom">
                <div className="text-center mb-12">
                    <div className="section-tagline-blue mx-auto w-fit border-white/20 bg-white/10 text-white/80">
                        <FileText className="w-3 h-3" />
                        How to Publish
                    </div>
                    <h2 id="process-title" className="section-title-lg text-white mb-4">
                        Simple Submission Process
                    </h2>
                    <p className="text-base text-white/55 max-w-xl mx-auto">
                        From submission to DOI — a transparent, author-friendly publishing journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
                    {STEPS.map((step, i) => (
                        <motion.div
                            key={step.num}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="group relative bg-white/8 border border-white/12 rounded-2xl p-6 hover:bg-white/12 hover:border-white/25 transition-all duration-300 backdrop-blur-sm"
                        >
                            <div className="text-4xl font-black text-white/10 font-serif leading-none mb-4 select-none" aria-hidden="true">{step.num}</div>
                            <div className="w-8 h-1 bg-secondary rounded-full mb-4" />
                            <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-sm text-white/55 leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/submission-guidelines/call-for-papers" className="thm-btn">
                        <SendHorizonal className="w-4 h-4" />
                        Submit Your Paper Now
                    </Link>
                    <Link href="/submission-guidelines" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/25 text-white font-bold text-sm hover:bg-white/10 transition-all duration-200">
                        Read Guidelines
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

/* ── Section: Why Publish ── */
function WhyPublish() {
    return (
        <section className="section-py bg-warm-bg" aria-labelledby="why-title">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="section-tagline">
                            <Trophy className="w-3 h-3" />
                            Why Choose Us
                        </div>
                        <h2 id="why-title" className="section-title mb-5">
                            Publish with Confidence & Credibility
                        </h2>
                        <p className="section-subtitle mb-8">
                            Join hundreds of researchers who trust Sanmati Spectrum for fast, ethical, and impactful academic publishing.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/submission-guidelines/call-for-papers" className="thm-btn">
                                <SendHorizonal className="w-4 h-4" /> Submit Now
                            </Link>
                            <Link href="/basic-info/about-journal" className="thm-btn-outline">
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {WHY.map((w, i) => {
                            const Icon = w.icon;
                            return (
                                <motion.div
                                    key={w.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="card-premium p-5 group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-primary/8 text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-sm font-black text-primary mb-1">{w.title}</h3>
                                    <p className="text-xs text-muted leading-relaxed">{w.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── Section: News & Updates ── */
function NewsSection({ news }) {
    if (!news?.length) return null;
    return (
        <section className="section-py bg-white" aria-labelledby="news-title">
            <div className="container-custom">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                    <div>
                        <div className="section-tagline">
                            <Zap className="w-3 h-3" />
                            Latest Updates
                        </div>
                        <h2 id="news-title" className="section-title">News & Announcements</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {news.slice(0, 3).map((item, i) => (
                        <motion.div
                            key={item.id || i}
                            {...fadeUp}
                            transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                            className="card-premium overflow-hidden group"
                        >
                            <div className="h-1 bg-gradient-to-r from-secondary to-accent" />
                            <div className="p-5">
                                {item.date && (
                                    <div className="flex items-center gap-1.5 text-[11px] text-muted mb-3">
                                        <Clock className="w-3 h-3" />
                                        {new Date(item.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                                    </div>
                                )}
                                <h3 className="text-sm font-bold text-primary leading-snug mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                                    {item.title || item.name}
                                </h3>
                                {item.description && (
                                    <p className="text-xs text-muted leading-relaxed line-clamp-3">{item.description}</p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ── Section: Call to Action Banner ── */
function CTABanner() {
    return (
        <section className="py-16 bg-gradient-to-r from-secondary to-secondary-dark relative overflow-hidden" aria-labelledby="cta-title">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} aria-hidden="true" />
            <div className="relative z-10 container-custom text-center">
                <motion.div {...fadeUp}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-[11px] font-black uppercase tracking-[0.2em] mb-5">
                        <Star className="w-3 h-3 fill-white" />
                        Open for Submissions
                    </div>
                    <h2 id="cta-title" className="text-3xl md:text-5xl font-serif font-black text-white mb-4 leading-tight">
                        Ready to Share Your Research?
                    </h2>
                    <p className="text-base text-white/75 mb-8 max-w-xl mx-auto">
                        Submit your manuscript today. Fast review, CrossRef DOI, and publication in India's premier multidisciplinary journal.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/submission-guidelines/call-for-papers" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-secondary font-black text-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                            <SendHorizonal className="w-4 h-4" /> Submit Paper Now
                        </Link>
                        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/40 text-white font-bold text-sm hover:bg-white/10 transition-all duration-200">
                            <Mail className="w-4 h-4" /> Contact Editorial
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

/* ── Main Home Page ── */
export default function Home({ newsItems = [], featuredPapers = [], testimonials = [], currentIssue = null }) {

    const aiSummary = "Sanmati Spectrum of Knowledge & Emerging Discourse is a national multidisciplinary peer-reviewed quarterly academic journal (ISSN 3108-1819, Impact Factor 5.3, Open Access) published by Sanmati Publication. It publishes original research articles in Hindi and English across Science, Social Sciences, Humanities, Management, Law, Education, and Philosophy. Every article receives a CrossRef DOI. The journal follows COPE publication ethics and double-blind peer review. It is indexed in Google Scholar, ResearchGate, and Academia.edu.";

    return (
        <MainLayout
            title="Sanmati Spectrum of Knowledge | India's Premier Research Journal"
            description="India's top peer-reviewed multidisciplinary research journal. Publish your research with CrossRef DOI, Impact Factor 5.3, fast review, open access. ISSN 3108-1819."
            aiSummary={aiSummary}
        >
            {/* Hero */}
            <Suspense fallback={<div className="min-h-[92vh] bg-primary animate-pulse" />}>
                <Hero papers={featuredPapers} currentIssue={currentIssue} />
            </Suspense>

            {/* Journal Impact Dashboard */}
            <Suspense fallback={<div className="section-py bg-white" />}>
                <JournalMetricsDashboard />
            </Suspense>

            {/* Featured Articles */}
            <LatestArticles papers={featuredPapers} />

            {/* Disciplines */}
            <DisciplinesSection />

            {/* Submission Process */}
            <SubmissionProcess />

            {/* Why Publish */}
            <WhyPublish />

            {/* News */}
            <NewsSection news={newsItems} />

            {/* Testimonials */}
            <Suspense fallback={<div className="section-py bg-warm-bg" />}>
                <Testimonials testimonials={testimonials} />
            </Suspense>

            {/* CTA Banner */}
            <CTABanner />

            {/* Newsletter */}
            <Suspense fallback={<div className="section-py-sm" />}>
                <NewsletterSection />
            </Suspense>

            {/* FAQ */}
            <Suspense fallback={<div className="section-py bg-white" />}>
                <HomeFAQ />
            </Suspense>
        </MainLayout>
    );
}
