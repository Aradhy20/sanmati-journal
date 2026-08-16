import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import {
    Bell, Calendar, Clock, SendHorizonal, FileText, ArrowRight,
    Award, Users, Globe, ChevronDown, ChevronUp, X, Sparkles, MessageCircle
} from 'lucide-react';

export default function NoticeBoard({ announcement: customAnnouncement = null }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    const announcement = customAnnouncement || {
        id: 'international-seminar-gen-z-2026',
        slug: 'international-seminar-gen-z-2026',
        title: 'अंतरराष्ट्रीय संगोष्ठी, शोध-पत्र वाचन एवं श्रेष्ठ शिक्षक सम्मान अवार्ड',
        title_en: 'International Seminar, Research Paper Presentation & Best Teacher Award',
        theme: 'GEN Z: EDUCATION, DIGITAL CULTURE, INNOVATION AND SOCIAL TRANSFORMATION',
        theme_hi: 'जेन-जी : शिक्षा, डिजिटल संस्कृति, नवाचार एवं सामाजिक परिवर्तन',
        organizers: [
            { name: 'सन्मति एजुकेशन एंड रिसर्च फाउंडेशन ऑफ इंडिया (SERFI)' },
            { name: 'भगवान आदिनाथ कॉलेज ऑफ एजुकेशन, ललितपुर (उ.प्र.)' }
        ],
        event_date_formatted: '05 सितम्बर 2026',
        event_date_en: '05 September 2026',
        mode: 'Hybrid Mode (ऑनलाइन एवं ऑफलाइन)',
        registration_deadline_formatted: '15 अगस्त 2026',
        is_registration_deadline_passed: true,
        paper_deadline_formatted: '30 अगस्त 2026',
        is_paper_deadline_active: true,
        submission_email: 'bacesanmatijournal@gmail.com',
        registration_url: 'https://docs.google.com/forms/d/e/1FAIpQLSfzSIAiplpzvwaHKfHkLlGKhIIx5UDb-CcL8fqGRpvt2IyXNg/viewform?usp=header',
        whatsapp_group_url: 'https://chat.whatsapp.com/CXmOENonzJSCG3nNxnTXLq?s=cl&p=a&ilr=0',
    };

    // Track Announcement Impression in GA4 DataLayer
    useEffect(() => {
        if (typeof window !== 'undefined' && window.dataLayer) {
            window.dataLayer.push({
                event: 'announcement_view',
                announcement_id: announcement.id,
                announcement_title: announcement.title_en,
            });
        }
    }, [announcement.id, announcement.title_en]);

    const trackCtaClick = (ctaType) => {
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

    if (isDismissed) return null;

    return (
        <section
            role="region"
            aria-label="Important Academic Announcement"
            className="relative bg-gradient-to-r from-amber-500/10 via-blue-500/10 to-indigo-500/10 border-b-2 border-blue-600/30 overflow-hidden"
        >
            {/* Top decorative accent ribbon */}
            <div className="h-1 w-full bg-gradient-to-r from-amber-500 via-blue-600 to-indigo-600" />

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
                {/* Header Strip with Controls */}
                <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-slate-900 text-xs font-bold uppercase tracking-wider shadow-xs">
                            <Bell className="w-3.5 h-3.5 animate-bounce" /> Important Notice
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[11px] font-bold">
                            <Award className="w-3 h-3 text-blue-600" /> International Seminar & Award 2026
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                            <Globe className="w-3 h-3 text-emerald-600" /> Hybrid Mode
                        </span>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                        <button
                            onClick={() => setIsCollapsed(p => !p)}
                            className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
                            aria-expanded={!isCollapsed}
                            aria-label={isCollapsed ? 'Expand announcement details' : 'Collapse announcement details'}
                            title={isCollapsed ? 'Expand notice' : 'Collapse notice'}
                        >
                            {isCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                        </button>
                        <button
                            onClick={() => setIsDismissed(true)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
                            aria-label="Dismiss announcement banner"
                            title="Dismiss notice"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="grid lg:grid-cols-12 gap-5 items-center">
                    {/* Left & Center: Titles & Key Information */}
                    <div className="lg:col-span-8 space-y-2.5">
                        <div className="space-y-1">
                            <p className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                                {announcement.organizers.map(o => o.name).join(' एवं ')}
                            </p>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-slate-900 leading-tight">
                                {announcement.title}
                            </h2>
                            <div className="text-xs sm:text-sm font-semibold text-blue-800">
                                <span>Theme: </span>
                                <span className="font-bold text-blue-900">{announcement.theme}</span>
                                <span className="block text-slate-700 font-medium text-xs mt-0.5">
                                    ({announcement.theme_hi})
                                </span>
                            </div>
                        </div>

                        {!isCollapsed && (
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-xs text-slate-700">
                                <span className="inline-flex items-center gap-1 font-semibold text-slate-800">
                                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                                    <span>Date: <strong>05 सितम्बर 2026 (शिक्षक दिवस)</strong></span>
                                </span>
                                <span className="inline-flex items-center gap-1 font-semibold text-emerald-700">
                                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                                    <span>शोध-पत्र अंतिम तिथि: <strong>30 अगस्त 2026</strong></span>
                                </span>
                                <span className="inline-flex items-center gap-1 text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded-md text-[11px] font-medium">
                                    <span>पंजीकरण अंतिम तिथि: 15 अगस्त 2026 (समाप्त)</span>
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Right: Quick Action Buttons */}
                    <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5 justify-end">
                        <Link
                            href={`/announcements/${announcement.slug}`}
                            onClick={() => trackCtaClick('view_notice')}
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-md shadow-blue-700/20 hover:-translate-y-0.5 active:scale-95 transition-all text-center"
                        >
                            <FileText className="w-4 h-4" />
                            <span>View Full Notice & Details</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </Link>

                        <div className="grid grid-cols-2 gap-2">
                            <a
                                href={`mailto:${announcement.submission_email}?subject=Paper%20Submission%20-%20International%20Seminar%202026`}
                                onClick={() => trackCtaClick('submit_paper')}
                                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-[11px] shadow-2xs hover:border-slate-400 transition-all text-center"
                            >
                                <SendHorizonal className="w-3.5 h-3.5 text-blue-600" />
                                <span>Submit Paper</span>
                            </a>

                            <a
                                href={announcement.whatsapp_group_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackCtaClick('whatsapp')}
                                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-[#128C7E] font-bold text-[11px] transition-all text-center"
                            >
                                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                                <span>WhatsApp Group</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
