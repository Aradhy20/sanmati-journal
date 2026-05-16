import { jsx, jsxs } from "react/jsx-runtime";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { M as MainLayout } from "./MainLayout-D3LOXUxX.js";
import { Globe, ShieldCheck, Star, Calendar, MapPin, Clock, FileText, ArrowRight, ExternalLink, Landmark, CheckCircle, BookOpen, AlertCircle, Phone, CreditCard, Users, Mail } from "lucide-react";
import { D as DotPattern, G as GridPattern } from "./Graphics-CZ-Bhg_h.js";
import { S as ScrollReveal, r as revealVariants, a as ScaleOnHover } from "./ScrollReveal-1c_Su25q.js";
import "@inertiajs/react";
import "framer-motion";
import "react";
import "react-hot-toast";
const SectionLabel = ({ children }) => /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/10 rounded-full mb-4", children: [
  /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-secondary" }),
  /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[10px] uppercase tracking-[0.25em]", children })
] });
const InfoBadge = ({ icon: Icon, label, value }) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm", children: [
  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0", children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5" }) }),
  /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black uppercase tracking-widest text-slate-400", children: label }),
    /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-primary", children: value })
  ] })
] });
function Seminars() {
  const feeOptions = [
    {
      title: "Full Package",
      price: "₹1,200",
      features: [
        "ISSN Journal Publication (with DOI)",
        "Research Excellence Award Certificate",
        "Paper Presentation Certificate",
        "Hard copies delivered by post"
      ],
      highlight: true
    },
    {
      title: "Award & Certificate Only",
      price: "₹400",
      features: [
        "Research Excellence Award Certificate",
        "Paper Presentation Certificate",
        "No journal publication"
      ],
      highlight: false
    },
    {
      title: "Joint Submission (with Guide)",
      price: "₹1,500",
      features: [
        "One ISSN Journal Hard Copy",
        "Author Award + Presentation Certificate",
        "Guide Award + Presentation Certificate",
        "All hard copies delivered by post"
      ],
      highlight: false
    }
  ];
  const guidelines = [
    "आलेख की शब्द सीमा: 2500 से 3500 शब्द",
    "माध्यम: हिंदी एवं अंग्रेजी भाषा में स्वीकार",
    "फ़ॉन्ट: केवल मंगल यूनिकोड में आलेख स्वीकार",
    "पूर्ण आलेख जमा की अंतिम तिथि: 15 मई 2026",
    "5 मई 2026 के बाद रजिस्ट्रेशन स्वीकार नहीं"
  ];
  return /* @__PURE__ */ jsx(
    MainLayout,
    {
      title: "International Seminar 2026 | SERFI | Sanmati Journal",
      description: "SERFI International Seminar & Research Excellence Awards on 5 June 2026. Hybrid mode event organized under Muradabad chapter. Submit your paper for ISSN journal publication with DOI.",
      children: /* @__PURE__ */ jsxs("div", { className: "bg-warm-bg min-h-screen", children: [
        /* @__PURE__ */ jsx(
          PageHeader,
          {
            title: "अंतरराष्ट्रीय सेमिनार 2026",
            breadcrumb: "Academic Events",
            subtitle: "International Seminar & Research Excellence Award — 5 June 2026"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-28 relative overflow-hidden", children: [
          /* @__PURE__ */ jsx(DotPattern, { className: "opacity-10" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 mt-12 space-y-10", children: [
            /* @__PURE__ */ jsx(ScrollReveal, { variants: revealVariants.zoom, children: /* @__PURE__ */ jsxs("div", { className: "relative bg-primary rounded-[2.5rem] overflow-hidden shadow-2xl", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:3rem_3rem]" }),
              /* @__PURE__ */ jsx("div", { className: "absolute -top-20 -right-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl pointer-events-none" }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10 p-8 md:p-14", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 mb-6", children: [
                  /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary/20 text-secondary text-[10px] font-black uppercase tracking-widest rounded-full border border-secondary/30", children: [
                    /* @__PURE__ */ jsx(Globe, { className: "w-3 h-3" }),
                    " International"
                  ] }),
                  /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-full border border-white/20", children: [
                    /* @__PURE__ */ jsx(ShieldCheck, { className: "w-3 h-3" }),
                    " Hybrid Mode"
                  ] }),
                  /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-full border border-white/20", children: [
                    /* @__PURE__ */ jsx(Star, { className: "w-3 h-3" }),
                    " ISSN Journal"
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-3", children: [
                  "अंतरराष्ट्रीय सेमिनार एवं",
                  /* @__PURE__ */ jsx("span", { className: "text-secondary italic block", children: "रिसर्च एक्सीलेंस अवार्ड" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-white/70 text-base md:text-lg font-medium mb-2", children: "International Seminar & Research Excellence Award" }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm mb-8", children: "मुरादाबाद के तत्वाधान में आयोजित" }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-10", children: [
                  /* @__PURE__ */ jsx(InfoBadge, { icon: Calendar, label: "Date", value: "5 June 2026" }),
                  /* @__PURE__ */ jsx(InfoBadge, { icon: MapPin, label: "Mode", value: "Hybrid" }),
                  /* @__PURE__ */ jsx(InfoBadge, { icon: Clock, label: "Registration Deadline", value: "5 May 2026" }),
                  /* @__PURE__ */ jsx(InfoBadge, { icon: FileText, label: "Paper Deadline", value: "15 May 2026" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: "https://docs.google.com/forms/d/e/1FAIpQLSdLsNuH6Cj_Jo5UpvaZpiWljZ-5y9OC6qsaQ570v3bfQ_93Qg/viewform?usp=publish-editor",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "inline-flex items-center gap-2 px-8 py-4 bg-secondary text-primary font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-secondary/90 transition-all shadow-xl shadow-secondary/20",
                      children: [
                        "Register Free ",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: "https://chat.whatsapp.com/CbUOTudApQ97iTgTS4nd5B?mode=gi_t",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-black text-xs uppercase tracking-widest rounded-2xl border border-white/20 hover:bg-white/20 transition-all",
                      children: [
                        "Join WhatsApp Group ",
                        /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4" })
                      ]
                    }
                  )
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx(ScrollReveal, { variants: revealVariants.left, children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-12 relative overflow-hidden", children: [
              /* @__PURE__ */ jsx(GridPattern, { className: "opacity-5" }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                /* @__PURE__ */ jsx(SectionLabel, { children: "About SERFI" }),
                /* @__PURE__ */ jsxs("h3", { className: "text-2xl md:text-3xl font-serif font-bold text-primary mb-6", children: [
                  "सन्मति एजुकेशन एंड रिसर्च फाउंडेशन ऑफ इंडिया",
                  /* @__PURE__ */ jsx("span", { className: "text-secondary", children: " (SERFI)" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-600 leading-relaxed text-base mb-8", children: "SERFI भारत सरकार में पंजीकृत, ISO प्रमाणित तथा नीति आयोग (NITI Aayog) से मान्यता प्राप्त एक प्रतिष्ठित संस्था है। इसका मूल उद्देश्य ज्ञान, शोध और नवाचार को प्रोत्साहित करना है।" }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
                  { icon: Landmark, label: "Govt. Registration", value: "IV-203/26" },
                  { icon: ShieldCheck, label: "Certification", value: "ISO Certified" },
                  { icon: Star, label: "Recognition", value: "NITI Aayog Listed" }
                ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-white shrink-0", children: /* @__PURE__ */ jsx(item.icon, { className: "w-5 h-5" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black uppercase tracking-widest text-slate-400", children: item.label }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-primary", children: item.value })
                  ] })
                ] }, i)) })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx(ScrollReveal, { variants: revealVariants.right, children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-slate-50 to-blue-50/40 rounded-[2rem] border border-slate-100 p-8 md:p-12", children: [
              /* @__PURE__ */ jsx(SectionLabel, { children: "Seminar Theme / विषय" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl font-serif font-bold text-primary leading-relaxed", children: '"समकालीन समाज में शिक्षा, ज्ञान, विज्ञान, संस्कृति और मीडिया के बदलते आयाम: एक बहुविषयी दृष्टिकोण"' }),
                /* @__PURE__ */ jsx("p", { className: "text-lg font-medium text-secondary italic leading-relaxed border-l-4 border-secondary/30 pl-5", children: '"Changing Dimensions of Education, Knowledge, Science, Culture and Media in Contemporary Society: A Multidisciplinary Perspective"' }),
                /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-500 font-medium mt-4 flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-secondary mt-0.5 shrink-0" }),
                  "इस विषय से संबंधित किसी भी उप-विषय पर आलेख स्वीकार किए जाते हैं। Sub-topics related to this theme are also accepted."
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx(ScrollReveal, { variants: revealVariants.zoom, children: /* @__PURE__ */ jsxs("div", { className: "relative bg-secondary/10 border border-secondary/20 rounded-[2rem] p-8 md:p-10 overflow-hidden", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-6 opacity-10", children: /* @__PURE__ */ jsx(BookOpen, { className: "w-24 h-24 text-secondary" }) }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                  /* @__PURE__ */ jsx(AlertCircle, { className: "w-5 h-5 text-secondary" }),
                  /* @__PURE__ */ jsx("span", { className: "font-black text-[11px] uppercase tracking-widest text-secondary", children: "Publication Note / नोट" })
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "text-primary font-semibold text-base leading-relaxed mb-3", children: [
                  "आप सभी के अनुरोध पर, इस बार का प्रकाशन ",
                  /* @__PURE__ */ jsx("strong", { children: "ISSN जर्नल" }),
                  " में किया जा रहा है।"
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "text-slate-700 text-sm leading-relaxed", children: [
                  "आपके आलेख ",
                  /* @__PURE__ */ jsx("strong", { className: "text-primary", children: "सन्मति स्पेक्ट्रम ऑफ नॉलेज एंड इमर्जिंग डिस्कोर्स" }),
                  " — Peer Reviewed Journal में ",
                  /* @__PURE__ */ jsx("strong", { children: "DOI नंबर" }),
                  " के साथ प्रकाशित किए जाएंगे।"
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx(ScrollReveal, { variants: revealVariants.zoom, children: /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
                /* @__PURE__ */ jsx(SectionLabel, { children: "Participation Fee / सहयोग राशि" }),
                /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-serif font-bold text-primary", children: "Registration is Free · Publication Packages" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: feeOptions.map((option, i) => /* @__PURE__ */ jsx(ScaleOnHover, { children: /* @__PURE__ */ jsx("div", { className: `h-full rounded-[2rem] p-px ${option.highlight ? "bg-gradient-to-br from-secondary to-amber-400 shadow-xl shadow-secondary/20" : "bg-slate-100"}`, children: /* @__PURE__ */ jsxs("div", { className: `h-full rounded-[calc(2rem-1px)] p-8 flex flex-col ${option.highlight ? "bg-primary text-white" : "bg-white"}`, children: [
                option.highlight && /* @__PURE__ */ jsx("span", { className: "inline-block px-3 py-1 bg-secondary text-primary text-[9px] font-black uppercase tracking-widest rounded-full mb-4 self-start", children: "Most Popular" }),
                /* @__PURE__ */ jsx("h4", { className: `text-lg font-serif font-bold mb-2 ${option.highlight ? "text-white" : "text-primary"}`, children: option.title }),
                /* @__PURE__ */ jsx("p", { className: `text-4xl font-black mb-6 ${option.highlight ? "text-secondary" : "text-primary"}`, children: option.price }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-3 flex-1", children: option.features.map((f, j) => /* @__PURE__ */ jsxs("li", { className: `flex items-start gap-2 text-sm font-medium ${option.highlight ? "text-white/80" : "text-slate-600"}`, children: [
                  /* @__PURE__ */ jsx(CheckCircle, { className: `w-4 h-4 shrink-0 mt-0.5 ${option.highlight ? "text-secondary" : "text-secondary"}` }),
                  f
                ] }, j)) })
              ] }) }) }, i)) })
            ] }) }),
            /* @__PURE__ */ jsx(ScrollReveal, { variants: revealVariants.left, children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-12", children: [
              /* @__PURE__ */ jsx(SectionLabel, { children: "Payment Details / भुगतान विवरण" }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif font-bold text-primary mb-8", children: "Payment Information" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100", children: [
                  /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 text-secondary" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black uppercase tracking-widest text-slate-400", children: "Google Pay / PhonePe" }),
                    /* @__PURE__ */ jsx("p", { className: "text-base font-bold text-primary", children: "9870713912" })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: /* @__PURE__ */ jsxs("div", { className: "p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2", children: [
                  /* @__PURE__ */ jsxs("p", { className: "text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(CreditCard, { className: "w-4 h-4" }),
                    " Bank Transfer"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-x-6 gap-y-1.5 text-sm", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-slate-500 font-medium", children: "Account Name" }),
                    /* @__PURE__ */ jsx("span", { className: "font-bold text-primary", children: "NAMRTA" }),
                    /* @__PURE__ */ jsx("span", { className: "text-slate-500 font-medium", children: "Account No." }),
                    /* @__PURE__ */ jsx("span", { className: "font-bold text-primary", children: "6010000400017351" }),
                    /* @__PURE__ */ jsx("span", { className: "text-slate-500 font-medium", children: "IFSC Code" }),
                    /* @__PURE__ */ jsx("span", { className: "font-bold text-primary", children: "PUNB0601000" })
                  ] })
                ] }) })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx(ScrollReveal, { variants: revealVariants.right, children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-12", children: [
              /* @__PURE__ */ jsx(SectionLabel, { children: "Submission Guidelines / निर्देश" }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif font-bold text-primary mb-8", children: "Paper Submission Instructions" }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: guidelines.map((g, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-slate-700 font-medium text-sm leading-relaxed", children: [
                /* @__PURE__ */ jsx("span", { className: "w-6 h-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5", children: i + 1 }),
                g
              ] }, i)) })
            ] }) }),
            /* @__PURE__ */ jsx(ScrollReveal, { variants: revealVariants.zoom, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-primary rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute -bottom-8 -right-8 opacity-5", children: /* @__PURE__ */ jsx(Users, { className: "w-40 h-40" }) }),
                /* @__PURE__ */ jsx(SectionLabel, { children: "Organizer" }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif font-bold text-white mb-6", children: "आयोजन समिति" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm", children: [
                  /* @__PURE__ */ jsx("p", { className: "font-bold text-secondary text-base", children: "डॉ. नम्रता जैन" }),
                  /* @__PURE__ */ jsx("p", { className: "text-white/70", children: "अध्यक्ष, SERFI" }),
                  /* @__PURE__ */ jsx("p", { className: "text-white/70", children: "मुख्य संपादक, सन्मति स्पेक्ट्रम ऑफ नॉलेज" }),
                  /* @__PURE__ */ jsxs("div", { className: "pt-4 space-y-2", children: [
                    /* @__PURE__ */ jsxs("a", { href: "tel:919870713912", className: "flex items-center gap-2 text-white hover:text-secondary transition-colors font-medium", children: [
                      /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
                      " +91 9870713912"
                    ] }),
                    /* @__PURE__ */ jsxs("a", { href: "mailto:sanmatijournal@gmail.com", className: "flex items-center gap-2 text-white hover:text-secondary transition-colors font-medium", children: [
                      /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }),
                      " sanmatijournal@gmail.com"
                    ] }),
                    /* @__PURE__ */ jsxs("a", { href: "https://sanmatijournal.in", target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 text-white hover:text-secondary transition-colors font-medium", children: [
                      /* @__PURE__ */ jsx(Globe, { className: "w-4 h-4" }),
                      " sanmatijournal.in"
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-10", children: [
                /* @__PURE__ */ jsx(SectionLabel, { children: "Key Dates / महत्वपूर्ण तिथियां" }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif font-bold text-primary mb-6", children: "Important Deadlines" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
                  { date: "5 May 2026", event: "Registration Deadline — लिंक बंद", alert: true },
                  { date: "15 May 2026", event: "Full Paper Submission Deadline", alert: false },
                  { date: "5 June 2026", event: "International Seminar Day (Hybrid)", alert: false }
                ].map((d, i) => /* @__PURE__ */ jsxs("div", { className: `flex items-center gap-4 p-4 rounded-2xl ${d.alert ? "bg-red-50 border border-red-100" : "bg-slate-50 border border-slate-100"}`, children: [
                  /* @__PURE__ */ jsx("div", { className: `w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${d.alert ? "bg-red-100" : "bg-primary/5"}`, children: /* @__PURE__ */ jsx(Calendar, { className: `w-5 h-5 ${d.alert ? "text-red-500" : "text-primary"}` }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: `text-xs font-black uppercase tracking-widest ${d.alert ? "text-red-500" : "text-secondary"}`, children: d.date }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-primary", children: d.event })
                  ] })
                ] }, i)) }),
                /* @__PURE__ */ jsxs("div", { className: "mt-6 pt-6 border-t border-slate-100 space-y-3", children: [
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: "https://docs.google.com/forms/d/e/1FAIpQLSdLsNuH6Cj_Jo5UpvaZpiWljZ-5y9OC6qsaQ570v3bfQ_93Qg/viewform?usp=publish-editor",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "flex items-center justify-center gap-2 w-full py-3.5 bg-secondary text-primary font-black text-xs uppercase tracking-widest rounded-xl hover:bg-secondary/90 transition-all",
                      children: [
                        "Register via Google Form ",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: "https://chat.whatsapp.com/CbUOTudApQ97iTgTS4nd5B?mode=gi_t",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "flex items-center justify-center gap-2 w-full py-3.5 bg-slate-50 text-primary font-black text-xs uppercase tracking-widest rounded-xl border border-slate-200 hover:bg-slate-100 transition-all",
                      children: [
                        "Join WhatsApp Group ",
                        /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4" })
                      ]
                    }
                  )
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx(ScrollReveal, { variants: revealVariants.zoom, children: /* @__PURE__ */ jsx("div", { className: "text-center py-8 px-6 bg-slate-50 rounded-[2rem] border border-slate-100", children: /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-sm font-medium leading-relaxed max-w-2xl mx-auto", children: "🙏 सभी साथी सदस्यों से विनम्र निवेदन है कि इस संदेश को अपने अन्य समूहों में भी साझा करें, ताकि हम सभी मिलकर शोधार्थियों एवं विद्वानों के रिसर्च वर्क को बेहतर बनाने में सहयोग कर सकें।" }) }) })
          ] })
        ] })
      ] })
    }
  );
}
export {
  Seminars as default
};
