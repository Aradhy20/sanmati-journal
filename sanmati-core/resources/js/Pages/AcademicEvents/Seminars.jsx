import PageHeader from '../../Components/PageHeader';
import MainLayout from '../../Layouts/MainLayout';
import {
    Calendar, Users, MapPin, Mail, ArrowRight, ExternalLink,
    Award, BookOpen, FileText, Clock, Phone, CreditCard,
    CheckCircle, AlertCircle, Globe, ShieldCheck, Star, Landmark
} from 'lucide-react';
import { GridPattern, DotPattern } from '../../Components/Graphics';
import { ScrollReveal, revealVariants, ScaleOnHover } from '../../Components/ScrollReveal';

const SectionLabel = ({ children }) => (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/10 rounded-full mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
        <span className="text-secondary font-black text-[10px] uppercase tracking-[0.25em]">{children}</span>
    </div>
);

const InfoBadge = ({ icon: Icon, label, value }) => (
    <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
        <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
            <Icon className="w-5 h-5" />
        </div>
        <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{label}</p>
            <p className="text-sm font-bold text-primary">{value}</p>
        </div>
    </div>
);

export default function Seminars() {
    const feeOptions = [
        {
            title: "Full Package",
            price: "₹1,200",
            features: [
                "ISSN Journal Publication (with DOI)",
                "Research Excellence Award Certificate",
                "Paper Presentation Certificate",
                "Hard copies delivered by post",
            ],
            highlight: true,
        },
        {
            title: "Award & Certificate Only",
            price: "₹400",
            features: [
                "Research Excellence Award Certificate",
                "Paper Presentation Certificate",
                "No journal publication",
            ],
            highlight: false,
        },
        {
            title: "Joint Submission (with Guide)",
            price: "₹1,500",
            features: [
                "One ISSN Journal Hard Copy",
                "Author Award + Presentation Certificate",
                "Guide Award + Presentation Certificate",
                "All hard copies delivered by post",
            ],
            highlight: false,
        },
    ];

    const guidelines = [
        "आलेख की शब्द सीमा: 2500 से 3500 शब्द",
        "माध्यम: हिंदी एवं अंग्रेजी भाषा में स्वीकार",
        "फ़ॉन्ट: केवल मंगल यूनिकोड में आलेख स्वीकार",
        "पूर्ण आलेख जमा की अंतिम तिथि: 15 मई 2026",
        "5 मई 2026 के बाद रजिस्ट्रेशन स्वीकार नहीं",
    ];

    return (
        <MainLayout
            title="International Seminar 2026 | SERFI | Sanmati Journal"
            description="SERFI International Seminar & Research Excellence Awards on 5 June 2026. Hybrid mode event organized under Muradabad chapter. Submit your paper for ISSN journal publication with DOI."
        >
            <div className="bg-warm-bg min-h-screen">
                <PageHeader
                    title="अंतरराष्ट्रीय सेमिनार 2026"
                    breadcrumb="Academic Events"
                    subtitle="International Seminar & Research Excellence Award — 5 June 2026"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-28 relative overflow-hidden">
                    <DotPattern className="opacity-10" />

                    <div className="relative z-10 mt-12 space-y-10">

                        {/* ── HERO EVENT CARD ── */}
                        <ScrollReveal variants={revealVariants.zoom}>
                            <div className="relative bg-primary rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                                <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

                                <div className="relative z-10 p-8 md:p-14">
                                    <div className="flex flex-wrap gap-3 mb-6">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary/20 text-secondary text-[10px] font-black uppercase tracking-widest rounded-full border border-secondary/30">
                                            <Globe className="w-3 h-3" /> International
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-full border border-white/20">
                                            <ShieldCheck className="w-3 h-3" /> Hybrid Mode
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-full border border-white/20">
                                            <Star className="w-3 h-3" /> ISSN Journal
                                        </span>
                                    </div>

                                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-3">
                                        अंतरराष्ट्रीय सेमिनार एवं
                                        <span className="text-secondary italic block">रिसर्च एक्सीलेंस अवार्ड</span>
                                    </h2>
                                    <p className="text-white/70 text-base md:text-lg font-medium mb-2">
                                        International Seminar &amp; Research Excellence Award
                                    </p>
                                    <p className="text-slate-400 text-sm mb-8">
                                        मुरादाबाद के तत्वाधान में आयोजित
                                    </p>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                                        <InfoBadge icon={Calendar} label="Date" value="5 June 2026" />
                                        <InfoBadge icon={MapPin} label="Mode" value="Hybrid" />
                                        <InfoBadge icon={Clock} label="Registration Deadline" value="5 May 2026" />
                                        <InfoBadge icon={FileText} label="Paper Deadline" value="15 May 2026" />
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a
                                            href="https://docs.google.com/forms/d/e/1FAIpQLSdLsNuH6Cj_Jo5UpvaZpiWljZ-5y9OC6qsaQ570v3bfQ_93Qg/viewform?usp=publish-editor"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-primary font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-secondary/90 transition-all shadow-xl shadow-secondary/20"
                                        >
                                            Register Free <ArrowRight className="w-4 h-4" />
                                        </a>
                                        <a
                                            href="https://chat.whatsapp.com/CbUOTudApQ97iTgTS4nd5B?mode=gi_t"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-black text-xs uppercase tracking-widest rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
                                        >
                                            Join WhatsApp Group <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* ── ABOUT SERFI ── */}
                        <ScrollReveal variants={revealVariants.left}>
                            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-12 relative overflow-hidden">
                                <GridPattern className="opacity-5" />
                                <div className="relative z-10">
                                    <SectionLabel>About SERFI</SectionLabel>
                                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">
                                        सन्मति एजुकेशन एंड रिसर्च फाउंडेशन ऑफ इंडिया
                                        <span className="text-secondary"> (SERFI)</span>
                                    </h3>

                                    <p className="text-slate-600 leading-relaxed text-base mb-8">
                                        SERFI भारत सरकार में पंजीकृत, ISO प्रमाणित तथा नीति आयोग (NITI Aayog) से मान्यता प्राप्त एक प्रतिष्ठित संस्था है। इसका मूल उद्देश्य ज्ञान, शोध और नवाचार को प्रोत्साहित करना है।
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        {[
                                            { icon: Landmark, label: "Govt. Registration", value: "IV-203/26" },
                                            { icon: ShieldCheck, label: "Certification", value: "ISO Certified" },
                                            { icon: Star, label: "Recognition", value: "NITI Aayog Listed" },
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                                <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-white shrink-0">
                                                    <item.icon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.label}</p>
                                                    <p className="text-sm font-bold text-primary">{item.value}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* ── SEMINAR THEME ── */}
                        <ScrollReveal variants={revealVariants.right}>
                            <div className="bg-gradient-to-br from-slate-50 to-blue-50/40 rounded-[2rem] border border-slate-100 p-8 md:p-12">
                                <SectionLabel>Seminar Theme / विषय</SectionLabel>
                                <div className="space-y-4">
                                    <p className="text-xl md:text-2xl font-serif font-bold text-primary leading-relaxed">
                                        "समकालीन समाज में शिक्षा, ज्ञान, विज्ञान, संस्कृति और मीडिया के बदलते आयाम: एक बहुविषयी दृष्टिकोण"
                                    </p>
                                    <p className="text-lg font-medium text-secondary italic leading-relaxed border-l-4 border-secondary/30 pl-5">
                                        "Changing Dimensions of Education, Knowledge, Science, Culture and Media in Contemporary Society: A Multidisciplinary Perspective"
                                    </p>
                                    <p className="text-sm text-slate-500 font-medium mt-4 flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                                        इस विषय से संबंधित किसी भी उप-विषय पर आलेख स्वीकार किए जाते हैं।
                                        Sub-topics related to this theme are also accepted.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* ── PUBLICATION NOTE ── */}
                        <ScrollReveal variants={revealVariants.zoom}>
                            <div className="relative bg-secondary/10 border border-secondary/20 rounded-[2rem] p-8 md:p-10 overflow-hidden">
                                <div className="absolute top-4 right-6 opacity-10">
                                    <BookOpen className="w-24 h-24 text-secondary" />
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <AlertCircle className="w-5 h-5 text-secondary" />
                                        <span className="font-black text-[11px] uppercase tracking-widest text-secondary">Publication Note / नोट</span>
                                    </div>
                                    <p className="text-primary font-semibold text-base leading-relaxed mb-3">
                                        आप सभी के अनुरोध पर, इस बार का प्रकाशन <strong>ISSN जर्नल</strong> में किया जा रहा है।
                                    </p>
                                    <p className="text-slate-700 text-sm leading-relaxed">
                                        आपके आलेख <strong className="text-primary">सन्मति स्पेक्ट्रम ऑफ नॉलेज एंड इमर्जिंग डिस्कोर्स</strong> — Peer Reviewed Journal में <strong>DOI नंबर</strong> के साथ प्रकाशित किए जाएंगे।
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* ── FEE STRUCTURE ── */}
                        <ScrollReveal variants={revealVariants.zoom}>
                            <div>
                                <div className="text-center mb-8">
                                    <SectionLabel>Participation Fee / सहयोग राशि</SectionLabel>
                                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary">Registration is Free · Publication Packages</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {feeOptions.map((option, i) => (
                                        <ScaleOnHover key={i}>
                                            <div className={`h-full rounded-[2rem] p-px ${option.highlight ? 'bg-gradient-to-br from-secondary to-amber-400 shadow-xl shadow-secondary/20' : 'bg-slate-100'}`}>
                                                <div className={`h-full rounded-[calc(2rem-1px)] p-8 flex flex-col ${option.highlight ? 'bg-primary text-white' : 'bg-white'}`}>
                                                    {option.highlight && (
                                                        <span className="inline-block px-3 py-1 bg-secondary text-primary text-[9px] font-black uppercase tracking-widest rounded-full mb-4 self-start">
                                                            Most Popular
                                                        </span>
                                                    )}
                                                    <h4 className={`text-lg font-serif font-bold mb-2 ${option.highlight ? 'text-white' : 'text-primary'}`}>{option.title}</h4>
                                                    <p className={`text-4xl font-black mb-6 ${option.highlight ? 'text-secondary' : 'text-primary'}`}>{option.price}</p>
                                                    <ul className="space-y-3 flex-1">
                                                        {option.features.map((f, j) => (
                                                            <li key={j} className={`flex items-start gap-2 text-sm font-medium ${option.highlight ? 'text-white/80' : 'text-slate-600'}`}>
                                                                <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${option.highlight ? 'text-secondary' : 'text-secondary'}`} />
                                                                {f}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </ScaleOnHover>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* ── PAYMENT DETAILS ── */}
                        <ScrollReveal variants={revealVariants.left}>
                            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-12">
                                <SectionLabel>Payment Details / भुगतान विवरण</SectionLabel>
                                <h3 className="text-xl font-serif font-bold text-primary mb-8">Payment Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                            <Phone className="w-5 h-5 text-secondary" />
                                            <div>
                                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Google Pay / PhonePe</p>
                                                <p className="text-base font-bold text-primary">9870713912</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2"><CreditCard className="w-4 h-4" /> Bank Transfer</p>
                                            <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
                                                <span className="text-slate-500 font-medium">Account Name</span>
                                                <span className="font-bold text-primary">NAMRTA</span>
                                                <span className="text-slate-500 font-medium">Account No.</span>
                                                <span className="font-bold text-primary">6010000400017351</span>
                                                <span className="text-slate-500 font-medium">IFSC Code</span>
                                                <span className="font-bold text-primary">PUNB0601000</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* ── SUBMISSION GUIDELINES ── */}
                        <ScrollReveal variants={revealVariants.right}>
                            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-12">
                                <SectionLabel>Submission Guidelines / निर्देश</SectionLabel>
                                <h3 className="text-xl font-serif font-bold text-primary mb-8">Paper Submission Instructions</h3>
                                <ul className="space-y-4">
                                    {guidelines.map((g, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-700 font-medium text-sm leading-relaxed">
                                            <span className="w-6 h-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">{i + 1}</span>
                                            {g}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>

                        {/* ── CONTACT / ORGANIZER ── */}
                        <ScrollReveal variants={revealVariants.zoom}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Contact Info */}
                                <div className="bg-primary rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden">
                                    <div className="absolute -bottom-8 -right-8 opacity-5"><Users className="w-40 h-40" /></div>
                                    <SectionLabel>Organizer</SectionLabel>
                                    <h3 className="text-xl font-serif font-bold text-white mb-6">आयोजन समिति</h3>
                                    <div className="space-y-3 text-sm">
                                        <p className="font-bold text-secondary text-base">डॉ. नम्रता जैन</p>
                                        <p className="text-white/70">अध्यक्ष, SERFI</p>
                                        <p className="text-white/70">मुख्य संपादक, सन्मति स्पेक्ट्रम ऑफ नॉलेज</p>
                                        <div className="pt-4 space-y-2">
                                            <a href="tel:919870713912" className="flex items-center gap-2 text-white hover:text-secondary transition-colors font-medium">
                                                <Phone className="w-4 h-4" /> +91 9870713912
                                            </a>
                                            <a href="mailto:sanmatijournal@gmail.com" className="flex items-center gap-2 text-white hover:text-secondary transition-colors font-medium">
                                                <Mail className="w-4 h-4" /> sanmatijournal@gmail.com
                                            </a>
                                            <a href="https://sanmatijournal.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-secondary transition-colors font-medium">
                                                <Globe className="w-4 h-4" /> sanmatijournal.in
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Important Deadlines */}
                                <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-10">
                                    <SectionLabel>Key Dates / महत्वपूर्ण तिथियां</SectionLabel>
                                    <h3 className="text-xl font-serif font-bold text-primary mb-6">Important Deadlines</h3>
                                    <div className="space-y-4">
                                        {[
                                            { date: "5 May 2026", event: "Registration Deadline — लिंक बंद", alert: true },
                                            { date: "15 May 2026", event: "Full Paper Submission Deadline", alert: false },
                                            { date: "5 June 2026", event: "International Seminar Day (Hybrid)", alert: false },
                                        ].map((d, i) => (
                                            <div key={i} className={`flex items-center gap-4 p-4 rounded-2xl ${d.alert ? 'bg-red-50 border border-red-100' : 'bg-slate-50 border border-slate-100'}`}>
                                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${d.alert ? 'bg-red-100' : 'bg-primary/5'}`}>
                                                    <Calendar className={`w-5 h-5 ${d.alert ? 'text-red-500' : 'text-primary'}`} />
                                                </div>
                                                <div>
                                                    <p className={`text-xs font-black uppercase tracking-widest ${d.alert ? 'text-red-500' : 'text-secondary'}`}>{d.date}</p>
                                                    <p className="text-sm font-semibold text-primary">{d.event}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                                        <a
                                            href="https://docs.google.com/forms/d/e/1FAIpQLSdLsNuH6Cj_Jo5UpvaZpiWljZ-5y9OC6qsaQ570v3bfQ_93Qg/viewform?usp=publish-editor"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 w-full py-3.5 bg-secondary text-primary font-black text-xs uppercase tracking-widest rounded-xl hover:bg-secondary/90 transition-all"
                                        >
                                            Register via Google Form <ArrowRight className="w-4 h-4" />
                                        </a>
                                        <a
                                            href="https://chat.whatsapp.com/CbUOTudApQ97iTgTS4nd5B?mode=gi_t"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 w-full py-3.5 bg-slate-50 text-primary font-black text-xs uppercase tracking-widest rounded-xl border border-slate-200 hover:bg-slate-100 transition-all"
                                        >
                                            Join WhatsApp Group <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* ── SHARE NOTE ── */}
                        <ScrollReveal variants={revealVariants.zoom}>
                            <div className="text-center py-8 px-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                                <p className="text-slate-600 text-sm font-medium leading-relaxed max-w-2xl mx-auto">
                                    🙏 सभी साथी सदस्यों से विनम्र निवेदन है कि इस संदेश को अपने अन्य समूहों में भी साझा करें, ताकि हम सभी मिलकर शोधार्थियों एवं विद्वानों के रिसर्च वर्क को बेहतर बनाने में सहयोग कर सकें।
                                </p>
                            </div>
                        </ScrollReveal>

                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
