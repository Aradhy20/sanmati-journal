import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import MainLayout from '../../Layouts/MainLayout';
import {
    Calendar, Clock, SendHorizonal, FileText, CheckCircle2, Award,
    Users, Globe, Shield, Sparkles, MessageCircle, AlertTriangle,
    Copy, Check, Download, BookOpen, ChevronRight, HelpCircle,
    Landmark, CreditCard, ChevronDown, ChevronUp, Share2
} from 'lucide-react';

export default function AnnouncementShow({ announcement }) {
    const [copiedAccount, setCopiedAccount] = useState(false);
    const [copiedIfsc, setCopiedIfsc] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    // Track Page and Announcement Impression in GA4
    useEffect(() => {
        if (typeof window !== 'undefined' && window.dataLayer) {
            window.dataLayer.push({
                event: 'announcement_view',
                announcement_id: announcement.id,
                announcement_title: announcement.title_en,
            });
        }
    }, [announcement.id, announcement.title_en]);

    const trackAction = (ctaType) => {
        if (typeof window !== 'undefined' && window.dataLayer) {
            window.dataLayer.push({
                event: 'announcement_cta_click',
                announcement_id: announcement.id,
                announcement_title: announcement.title_en,
                cta_type: ctaType,
            });

            if (ctaType === 'register') {
                window.dataLayer.push({
                    event: 'conference_registration_click',
                    announcement_id: announcement.id,
                });
            } else if (ctaType === 'whatsapp') {
                window.dataLayer.push({
                    event: 'whatsapp_group_click',
                    announcement_id: announcement.id,
                });
            } else if (ctaType === 'submit_paper') {
                window.dataLayer.push({
                    event: 'paper_submission_click',
                    announcement_id: announcement.id,
                });
            }
        }
    };

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text);
        if (type === 'account') {
            setCopiedAccount(true);
            setTimeout(() => setCopiedAccount(false), 2000);
        } else {
            setCopiedIfsc(true);
            setTimeout(() => setCopiedIfsc(false), 2000);
        }
    };

    // Strict SEO & JSON-LD Construction
    const seoTitle = "International Seminar on Gen Z, Education, Digital Culture & Innovation | Sanmati Journal";
    const seoDescription = "International seminar and research paper presentation on GEN Z: Education, Digital Culture, Innovation and Social Transformation organized by SERFI & Bhagwan Adinath College of Education on 05 September 2026.";
    const seoKeywords = "International Conference 2026, Gen Z Education Seminar, Paper Presentation, Best Teacher Award, SERFI, Bhagwan Adinath College of Education, Sanmati Journal, ISSN 3108-1819";
    const canonicalUrl = "https://sanmatijournal.in/announcements/international-seminar-gen-z-2026";

    // Factual Event Schema (Only strictly supplied facts)
    const eventJsonLd = {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": announcement.title_en,
        "alternateName": announcement.title,
        "description": `${announcement.theme} (${announcement.theme_hi})`,
        "startDate": "2026-09-05",
        "endDate": "2026-09-05",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
        "organizer": [
            {
                "@type": "Organization",
                "name": "Sanmati Education and Research Foundation of India (SERFI)"
            },
            {
                "@type": "Organization",
                "name": "Bhagwan Adinath College of Education, Lalitpur (U.P.)"
            }
        ],
        "isAccessibleForFree": true,
        "url": canonicalUrl
    };

    // Breadcrumb Schema
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://sanmatijournal.in"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Announcements",
                "item": "https://sanmatijournal.in/announcements"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "International Seminar Gen Z 2026",
                "item": canonicalUrl
            }
        ]
    };

    // FAQ Schema
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": announcement.faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f.a
            }
        }))
    };

    return (
        <MainLayout
            title={seoTitle}
            description={seoDescription}
            keywords={seoKeywords}
            jsonLd={[eventJsonLd, breadcrumbJsonLd, faqJsonLd]}
        >
            <div className="bg-slate-50 min-h-screen py-10 lg:py-16">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

                    {/* ── 1. Breadcrumbs ── */}
                    <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 overflow-x-auto pb-1" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                        <ChevronRight className="w-3.5 h-3.5" />
                        <span className="text-slate-700">Announcements</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                        <span className="text-blue-700 font-bold truncate max-w-xs sm:max-w-md">International Seminar Gen Z 2026</span>
                    </nav>

                    {/* ── 2. Hero Header Banner ── */}
                    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-xl shadow-slate-900/5 relative overflow-hidden space-y-6">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

                        {/* Badges */}
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
                                <Award className="w-4 h-4 text-blue-600" /> International Conference
                            </span>
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold">
                                <Globe className="w-4 h-4 text-emerald-600" /> Hybrid Mode (Online & Offline)
                            </span>
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold">
                                <Sparkles className="w-4 h-4 text-amber-600" /> शिक्षक दिवस विशेष सम्मान
                            </span>
                        </div>

                        {/* Title & Theme */}
                        <div className="space-y-4 max-w-4xl">
                            <div className="space-y-1">
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                                    संयुक्त तत्वावधान में आयोजित (Joint Organization)
                                </p>
                                <h2 className="text-sm sm:text-base font-bold text-slate-700">
                                    {announcement.organizers.map(o => o.name).join(' एवं ')}
                                </h2>
                            </div>

                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 leading-tight">
                                {announcement.title}
                            </h1>

                            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 space-y-1.5">
                                <div className="text-xs font-bold uppercase tracking-wider text-blue-700">
                                    Conference Theme (संगोष्ठी का मुख्य विषय):
                                </div>
                                <div className="text-base sm:text-lg font-bold text-blue-950 font-serif">
                                    {announcement.theme}
                                </div>
                                <div className="text-sm sm:text-base font-semibold text-slate-700">
                                    {announcement.theme_hi}
                                </div>
                            </div>
                        </div>

                        {/* Key Action Strip */}
                        <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3 items-center">
                            <a
                                href={`mailto:${announcement.submission_email}?subject=Paper%20Submission%20-%20Gen%20Z%20Seminar%202026`}
                                onClick={() => trackAction('submit_paper')}
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md shadow-blue-700/20 transition-all hover:-translate-y-0.5"
                            >
                                <SendHorizonal className="w-4 h-4" />
                                <span>Submit Research Paper (30 Aug Deadline)</span>
                            </a>

                            <a
                                href={announcement.whatsapp_group_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackAction('whatsapp')}
                                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md shadow-green-600/20 transition-all hover:-translate-y-0.5"
                            >
                                <MessageCircle className="w-4 h-4" />
                                <span>Join WhatsApp Group</span>
                            </a>

                            <a
                                href={announcement.registration_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackAction('register')}
                                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm transition-all"
                            >
                                <span>Registration Form (Late Inquiry)</span>
                            </a>
                        </div>
                    </div>

                    {/* ── 3. Special Honor Box (शिक्षक दिवस विशेष सम्मान) ── */}
                    <div className="bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-amber-500/15 border-2 border-amber-400/80 rounded-3xl p-6 sm:p-8 space-y-3 relative overflow-hidden">
                        <div className="flex items-center gap-2.5 text-amber-900 font-bold text-base sm:text-lg">
                            <span className="text-2xl">🥳</span>
                            <h2 className="font-heading tracking-tight">{announcement.special_notice_badge}</h2>
                        </div>
                        <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed max-w-4xl">
                            {announcement.special_notice}
                        </p>
                    </div>

                    {/* ── 4. Critical Dates Grid (Registration passed vs Paper Deadline Active) ── */}
                    <div className="grid sm:grid-cols-3 gap-5">
                        {/* Event Date */}
                        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-2">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                <Calendar className="w-5 h-5" />
                            </div>
                            <div className="text-xs font-bold text-slate-500 uppercase">संगोष्ठी तिथि (Event Date)</div>
                            <div className="text-xl font-heading font-bold text-slate-900">{announcement.event_date_formatted}</div>
                            <p className="text-xs text-slate-500 font-medium">शिक्षक दिवस (Teachers' Day) • Hybrid Mode</p>
                        </div>

                        {/* Paper Submission Deadline (ACTIVE) */}
                        <div className="bg-white border-2 border-emerald-500/60 rounded-2xl p-6 space-y-2 relative shadow-md shadow-emerald-500/5">
                            <div className="absolute top-4 right-4">
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider animate-pulse">
                                    🟢 Active Deadline
                                </span>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                <Clock className="w-5 h-5" />
                            </div>
                            <div className="text-xs font-bold text-emerald-700 uppercase">शोध-पत्र जमा अंतिम तिथि</div>
                            <div className="text-xl font-heading font-bold text-emerald-900">{announcement.paper_deadline_formatted}</div>
                            <p className="text-xs text-slate-600 font-medium">ईमेल: <code className="text-blue-700">{announcement.submission_email}</code></p>
                        </div>

                        {/* Registration Deadline (EXPIRED) */}
                        <div className="bg-white border border-amber-300 rounded-2xl p-6 space-y-2 relative">
                            <div className="absolute top-4 right-4">
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-bold uppercase tracking-wider">
                                    ⚠️ Passed
                                </span>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                                <AlertTriangle className="w-5 h-5" />
                            </div>
                            <div className="text-xs font-bold text-slate-500 uppercase">पंजीकरण अंतिम तिथि</div>
                            <div className="text-xl font-heading font-bold text-slate-800">{announcement.registration_deadline_formatted}</div>
                            <p className="text-xs text-amber-800 font-medium">पंजीकरण की आधिकारिक तिथि समाप्त हो चुकी है।</p>
                        </div>
                    </div>

                    {/* ── 5. Sub-topics Grid ── */}
                    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-6">
                        <div>
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
                                Research Scope & Topics
                            </span>
                            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                                {announcement.subtopics_heading}
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                                शोधकर्ता, प्राध्यापक, शोधार्थी एवं विद्यार्थी निम्नलिखित किसी भी विषय/उप-विषय पर शोध-आलेख प्रेषित कर सकते हैं:
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                            {announcement.subtopics.map((topic, i) => (
                                <div
                                    key={i}
                                    className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-blue-50/50 hover:border-blue-300 transition-all flex flex-col justify-center"
                                >
                                    <div className="text-sm font-bold text-slate-800 leading-snug">{topic.name}</div>
                                    <div className="text-[11px] text-slate-500 font-medium mt-0.5">{topic.en}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── 6. Selected Paper Benefits & Publishing Details ── */}
                    <div className="grid md:grid-cols-12 gap-6 items-start">
                        {/* Left: Journal Publication */}
                        <div className="md:col-span-6 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-4">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase">
                                <BookOpen className="w-4 h-4 text-blue-600" /> शोध-पत्रों का प्रकाशन
                            </div>
                            <h3 className="text-xl font-serif font-bold text-slate-900 leading-tight">
                                {announcement.publication_journal}
                            </h3>
                            <div className="flex flex-wrap gap-2 text-xs">
                                <span className="px-2.5 py-1 rounded-lg bg-slate-100 font-mono font-bold text-slate-700">
                                    ISSN: {announcement.publication_issn}
                                </span>
                                <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 font-bold">
                                    {announcement.publication_type}
                                </span>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                संगोष्ठी में चयनित एवं सहकर्मियों द्वारा समीक्षित उत्कृष्ट शोध-पत्रों को सन्मति जर्नल में विधिवत प्रकाशित किया जाएगा।
                            </p>
                        </div>

                        {/* Right: Benefits Checklist */}
                        <div className="md:col-span-6 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-4">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> शोध-पत्र लाभ (Benefits)
                            </div>
                            <h3 className="text-xl font-serif font-bold text-slate-900">
                                प्रत्येक चयनित शोध-पत्र को प्रदान किए जाएंगे:
                            </h3>
                            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                                {announcement.benefits.map((b, i) => (
                                    <li key={i} className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                        <span className="leading-snug">{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* ── 7. Collaboration / Contribution Amounts (₹1200 / ₹400 / ₹1600) ── */}
                    <div className="space-y-4">
                        <div>
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
                                Registration & Contribution
                            </span>
                            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                                सहभागिता एवं सहयोग राशि (Contribution Details)
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-500 font-medium">
                                अपनी आवश्यकतानुसार उपयुक्त पैकेज का चयन करें:
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-5">
                            {announcement.plans.map((plan, i) => (
                                <div
                                    key={i}
                                    className={`rounded-3xl p-6 border flex flex-col justify-between space-y-4 ${
                                        plan.popular
                                            ? 'bg-gradient-to-b from-blue-50/80 to-white border-blue-300 ring-2 ring-blue-600/20 shadow-lg'
                                            : 'bg-white border-slate-200/80'
                                    }`}
                                >
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between gap-2">
                                            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                                                plan.popular ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                                            }`}>
                                                {plan.tag}
                                            </span>
                                        </div>

                                        <div className="text-3xl font-heading font-bold text-slate-900">
                                            {plan.amount}
                                        </div>

                                        <h3 className="text-base font-bold text-slate-800 leading-snug">
                                            {plan.title}
                                        </h3>

                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            {plan.desc}
                                        </p>
                                    </div>

                                    <div className="pt-3 border-t border-slate-100">
                                        <a
                                            href={`mailto:${announcement.submission_email}?subject=Paper%20Submission%20${plan.amount}%20Plan`}
                                            onClick={() => trackAction('submit_paper')}
                                            className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                                                plan.popular
                                                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'
                                                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                                            }`}
                                        >
                                            <span>चयन करें एवं पेपर भेजें</span>
                                            <ChevronRight className="w-3.5 h-3.5" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── 8. Official Bank Payment Information (Protected Card) ── */}
                    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-5">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0">
                                    <Landmark className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900">
                                        आधिकारिक बैंक विवरण (Official Bank Details for Payment)
                                    </h3>
                                    <p className="text-xs text-slate-500 font-medium">
                                        Sanmati Education and Research Foundation of India
                                    </p>
                                </div>
                            </div>
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
                                <CreditCard className="w-3.5 h-3.5" /> PNB Account
                            </span>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                                <div className="text-[11px] font-bold text-slate-500 uppercase">खाता धारक का नाम (Account Name)</div>
                                <div className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                                    {announcement.bank_details.account_name}
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                                <div className="text-[11px] font-bold text-slate-500 uppercase">बैंक का नाम (Bank Name)</div>
                                <div className="text-sm font-bold text-slate-800">
                                    {announcement.bank_details.bank_name}
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1 relative">
                                <div className="text-[11px] font-bold text-slate-500 uppercase">खाता संख्या (Account Number)</div>
                                <div className="text-sm font-mono font-bold text-slate-900 tracking-wider">
                                    {announcement.bank_details.account_number}
                                </div>
                                <button
                                    onClick={() => copyToClipboard(announcement.bank_details.account_number, 'account')}
                                    className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:text-blue-800 mt-1"
                                >
                                    {copiedAccount ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                                    <span>{copiedAccount ? 'Copied!' : 'Copy A/C'}</span>
                                </button>
                            </div>

                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1 relative">
                                <div className="text-[11px] font-bold text-slate-500 uppercase">IFSC कोड (IFSC Code)</div>
                                <div className="text-sm font-mono font-bold text-slate-900 tracking-wider">
                                    {announcement.bank_details.ifsc}
                                </div>
                                <button
                                    onClick={() => copyToClipboard(announcement.bank_details.ifsc, 'ifsc')}
                                    className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:text-blue-800 mt-1"
                                >
                                    {copiedIfsc ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                                    <span>{copiedIfsc ? 'Copied!' : 'Copy IFSC'}</span>
                                </button>
                            </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
                            <span>{announcement.bank_details.disclaimer}</span>
                        </div>
                    </div>

                    {/* ── 9. Internal Linking & Author Resources ── */}
                    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-3xl p-6 sm:p-8 space-y-6">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-blue-300">Author Resources & Guidelines</span>
                            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                                शोध-पत्र लेखन एवं प्रकाशन दिशा-निर्देश
                            </h2>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <Link
                                href="/submission-guidelines"
                                className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 transition-colors space-y-1 block"
                            >
                                <div className="text-xs text-blue-200">Guidelines</div>
                                <div className="text-sm font-bold text-white">Submission Guidelines</div>
                                <div className="text-[11px] text-slate-300">View Sanmati Journal submission guidelines</div>
                            </Link>

                            <Link
                                href="/submission-guidelines/call-for-papers"
                                className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 transition-colors space-y-1 block"
                            >
                                <div className="text-xs text-blue-200">Call for Papers</div>
                                <div className="text-sm font-bold text-white">Submit Research Paper</div>
                                <div className="text-[11px] text-slate-300">Upcoming volume deadlines & scope</div>
                            </Link>

                            <Link
                                href="/downloads"
                                className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 transition-colors space-y-1 block"
                            >
                                <div className="text-xs text-blue-200">Downloads</div>
                                <div className="text-sm font-bold text-white">Manuscript Template</div>
                                <div className="text-[11px] text-slate-300">Download author manuscript template</div>
                            </Link>

                            <Link
                                href="/about-journal"
                                className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 transition-colors space-y-1 block"
                            >
                                <div className="text-xs text-blue-200">Journal Info</div>
                                <div className="text-sm font-bold text-white">About Sanmati Journal</div>
                                <div className="text-[11px] text-slate-300">ISSN 3108-1819 & Peer Review</div>
                            </Link>
                        </div>
                    </div>

                    {/* ── 10. AEO / GEO FAQ Section ── */}
                    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-6">
                        <div>
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
                                <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
                            </span>
                            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                                संगोष्ठी एवं शोध-पत्र संबंधी सामान्य प्रश्न (FAQs)
                            </h2>
                        </div>

                        <div className="space-y-3">
                            {announcement.faqs.map((faq, idx) => {
                                const isOpen = openFaqIndex === idx;
                                return (
                                    <div
                                        key={idx}
                                        className="border border-slate-200 rounded-2xl overflow-hidden bg-white"
                                    >
                                        <button
                                            onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                                            className="w-full flex items-center justify-between gap-4 p-5 text-left font-bold text-slate-800 text-sm hover:bg-slate-50 transition-colors"
                                            aria-expanded={isOpen}
                                        >
                                            <span className="leading-snug">{faq.q}</span>
                                            <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform ${
                                                isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-600'
                                            }`}>
                                                <ChevronDown className="w-3.5 h-3.5" />
                                            </span>
                                        </button>
                                        {isOpen && (
                                            <div className="p-5 pt-2 text-xs sm:text-sm text-slate-600 border-t border-slate-100 leading-relaxed bg-slate-50/50">
                                                {faq.a}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* ── 11. Final Contact & Submission CTA Footer ── */}
                    <div className="text-center py-6 space-y-4">
                        <p className="text-xs text-slate-500">
                            आयोजन संबंधी किसी भी प्रश्न के लिए संपर्क करें: <a href={`mailto:${announcement.submission_email}`} className="font-bold text-blue-700 hover:underline">{announcement.submission_email}</a> | वेबसाइट: <a href="https://sanmatijournal.in" className="font-bold text-blue-700 hover:underline">sanmatijournal.in</a>
                        </p>
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}
