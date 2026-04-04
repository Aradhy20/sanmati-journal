import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Users, Mail, Phone, ChevronRight, ExternalLink, X, GraduationCap, BookOpen, BookMarked, Medal, Building2 } from "lucide-react";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { M as MainLayout, S as Seo } from "./MainLayout-B53y4pKW.js";
import "@inertiajs/react";
import "react-hot-toast";
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};
const BioModal = ({ member, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 },
        className: "fixed inset-0 bg-dark/80 backdrop-blur-sm z-[100]",
        onClick: onClose
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-[101] overflow-y-auto w-full", children: /* @__PURE__ */ jsx("div", { className: "flex min-h-full items-center justify-center p-4 py-12 sm:p-6 lg:p-8", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 50, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, scale: 0.95, y: 20 },
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
        className: "relative w-full max-w-4xl bg-white rounded-[2rem] lg:rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col md:flex-row border border-gray-100",
        onClick: (e) => e.stopPropagation(),
        children: [
          /* @__PURE__ */ jsx("div", { className: "md:w-2/5 md:shrink-0 relative bg-dark", children: /* @__PURE__ */ jsxs("div", { className: "md:absolute inset-0 aspect-square md:aspect-auto", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                loading: "lazy",
                src: member.image,
                alt: member.name,
                className: "w-full h-full object-cover object-top opacity-80"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" }),
            /* @__PURE__ */ jsxs("div", { className: "absolute bottom-6 left-6 right-6", children: [
              /* @__PURE__ */ jsx("span", { className: "inline-block px-4 py-1.5 bg-secondary/90 backdrop-blur-md rounded-full text-[10px] text-white font-black tracking-widest uppercase mb-4 shadow-xl", children: member.role }),
              /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-2xl lg:text-3xl font-serif font-bold text-white leading-tight mb-2", children: member.name }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: member.email ? `mailto:${member.email}` : "#",
                  className: "text-white/70 text-[11px] font-bold tracking-widest uppercase hover:text-white transition-colors",
                  children: member.email
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "md:w-3/5 p-8 md:p-12 lg:p-16 relative bg-warm-bg flex flex-col max-h-[85vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: onClose,
                className: "absolute top-6 right-6 lg:top-8 lg:right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark/50 hover:text-dark hover:bg-gray-100 transition-all shadow-sm border border-gray-100 z-10",
                children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "space-y-10 pb-8", children: [
              /* @__PURE__ */ jsx("div", { className: "prose prose-sm prose-p:leading-relaxed prose-p:text-muted max-w-none prose-p:font-medium", children: /* @__PURE__ */ jsx("p", { className: "text-base text-dark drop-shadow-sm/20 first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:-mt-1", children: member.bio.intro }) }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-8 pt-8 border-t border-gray-100", children: [
                member.bio.qualifications && /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-white text-secondary flex items-center justify-center shrink-0 shadow-sm border border-gray-50", children: /* @__PURE__ */ jsx(GraduationCap, { className: "w-5 h-5" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "text-[10px] font-black uppercase tracking-[0.2em] text-muted mb-2", children: "Educational Qualifications" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-dark leading-relaxed", children: member.bio.qualifications })
                  ] })
                ] }),
                member.bio.books && /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-white text-secondary flex items-center justify-center shrink-0 shadow-sm border border-gray-50", children: /* @__PURE__ */ jsx(BookOpen, { className: "w-5 h-5" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "text-[10px] font-black uppercase tracking-[0.2em] text-muted mb-2", children: "Books Published as Author" }),
                    /* @__PURE__ */ jsx("p", { className: "text-[13px] font-medium text-dark/80 leading-relaxed", children: member.bio.books })
                  ] })
                ] }),
                member.bio.edited && /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-white text-secondary flex items-center justify-center shrink-0 shadow-sm border border-gray-50", children: /* @__PURE__ */ jsx(BookMarked, { className: "w-5 h-5" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "text-[10px] font-black uppercase tracking-[0.2em] text-muted mb-2", children: "Edited Volumes & Publications" }),
                    /* @__PURE__ */ jsx("p", { className: "text-[13px] font-medium text-dark/80 leading-relaxed", children: member.bio.edited })
                  ] })
                ] }),
                member.bio.awards && /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-white text-secondary flex items-center justify-center shrink-0 shadow-sm border border-gray-50", children: /* @__PURE__ */ jsx(Medal, { className: "w-5 h-5" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "text-[10px] font-black uppercase tracking-[0.2em] text-muted mb-2", children: "Major Honors & Awards" }),
                    /* @__PURE__ */ jsx("p", { className: "text-[13px] font-medium text-dark/80 leading-relaxed", children: member.bio.awards })
                  ] })
                ] }),
                member.bio.memberships && /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-white text-secondary flex items-center justify-center shrink-0 shadow-sm border border-gray-50", children: /* @__PURE__ */ jsx(Building2, { className: "w-5 h-5" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "text-[10px] font-black uppercase tracking-[0.2em] text-muted mb-2", children: "Memberships & Affiliations" }),
                    /* @__PURE__ */ jsx("p", { className: "text-[13px] font-medium text-dark/80 leading-relaxed", children: member.bio.memberships })
                  ] })
                ] })
              ] }),
              member.profileUrl && /* @__PURE__ */ jsx("div", { className: "pt-8 border-t border-gray-100 flex justify-end", children: /* @__PURE__ */ jsxs(
                "a",
                {
                  href: member.profileUrl,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "inline-flex items-center gap-3 px-6 py-3 bg-dark text-white text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-primary transition-colors shadow-lg shadow-dark/10",
                  children: [
                    /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4" }),
                    " Verify Credentials"
                  ]
                }
              ) })
            ] })
          ] })
        ]
      }
    ) }) })
  ] }) });
};
const ExecutiveMember = ({ member, index }) => {
  const [isBioOpen, setIsBioOpen] = useState(false);
  const Icon = member.icon;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        ...fadeInUp,
        transition: { delay: index * 0.1 },
        className: `group flex flex-col h-full bg-white rounded-[2rem] border ${index === 0 ? "border-primary/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(var(--primary),0.12)]" : "border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-gray-200"} transition-all duration-500 overflow-hidden relative`,
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-8 opacity-5 pointer-events-none transition-opacity duration-500 group-hover:opacity-10", children: /* @__PURE__ */ jsx(Icon, { className: "w-32 h-32 text-primary rotate-12" }) }),
          /* @__PURE__ */ jsxs("div", { className: "p-8 pb-6 flex flex-col sm:flex-row gap-6 items-start relative z-10 border-b border-gray-50 bg-gradient-to-b from-surface/50 to-white", children: [
            /* @__PURE__ */ jsx("div", { className: "w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-[1.5rem] overflow-hidden shadow-md border-2 border-white ring-1 ring-gray-100 relative", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: member.image,
                alt: member.name,
                className: "w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700",
                loading: "lazy"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 pt-2", children: [
              /* @__PURE__ */ jsxs("span", { className: `inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${member.colorClass.includes("gold") ? "from-amber-500/10 to-amber-600/10 text-amber-600 border-amber-500/10" : "from-primary/10 to-secondary/10 text-primary border-primary/10"} text-[10px] font-black uppercase tracking-widest rounded-full mb-3 border`, children: [
                /* @__PURE__ */ jsx(Icon, { className: "w-3.5 h-3.5" }),
                member.role
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl sm:text-3xl font-serif font-bold text-dark leading-tight group-hover:text-primary transition-colors", children: member.name })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-8 pt-6 flex-1 flex flex-col bg-white relative z-10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-muted text-[10px] font-black uppercase tracking-widest mb-3", children: "Official Designation" }),
            /* @__PURE__ */ jsx("div", { className: "text-dark/80 font-bold text-sm leading-relaxed mb-8 flex-1", children: member.title }),
            /* @__PURE__ */ jsxs("div", { className: "w-full rounded-2xl p-5 mb-8 border border-gray-100 bg-surface/50 text-xs", children: [
              member.email && /* @__PURE__ */ jsxs("p", { className: "flex justify-between items-center border-b border-gray-200/50 pb-3 mb-3", children: [
                /* @__PURE__ */ jsxs("span", { className: "text-muted uppercase tracking-widest font-black text-[9px] flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Mail, { className: "w-3.5 h-3.5" }),
                  " Email"
                ] }),
                /* @__PURE__ */ jsx("a", { href: `mailto:${member.email}`, className: "font-bold text-dark hover:text-primary transition-colors truncate ml-4", children: member.email })
              ] }),
              member.phone && /* @__PURE__ */ jsxs("p", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsxs("span", { className: "text-muted uppercase tracking-widest font-black text-[9px] flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Phone, { className: "w-3.5 h-3.5" }),
                  " Mob"
                ] }),
                /* @__PURE__ */ jsx("span", { className: "font-bold text-dark text-right", children: member.phone })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 mt-auto", children: [
              member.bio && /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setIsBioOpen(true),
                  className: "w-full py-3.5 bg-dark text-white rounded-xl text-[11px] font-black uppercase tracking-widest shadow-lg shadow-dark/10 hover:bg-primary transition-all duration-300 flex items-center justify-center gap-2 group/btn",
                  children: [
                    "Read Full Biography ",
                    /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4 group-hover/btn:translate-x-1 transition-transform" })
                  ]
                }
              ),
              member.profileUrl ? /* @__PURE__ */ jsxs("a", { href: member.profileUrl, target: "_blank", rel: "noreferrer", className: "flex items-center justify-center gap-2 w-full py-3.5 bg-white text-dark rounded-xl text-[11px] font-black uppercase tracking-widest border border-gray-200 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group/link", children: [
                "Official Profile ",
                /* @__PURE__ */ jsx(ExternalLink, { className: "w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform text-muted group-hover/link:text-primary" })
              ] }) : /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 w-full py-3.5 bg-surface text-dark/30 rounded-xl text-[11px] font-black uppercase tracking-widest border border-gray-100", children: [
                "Sanmati Affiliate ",
                /* @__PURE__ */ jsx(ChevronRight, { className: "w-3.5 h-3.5 opacity-50" })
              ] })
            ] })
          ] })
        ]
      }
    ),
    member.bio && /* @__PURE__ */ jsx(
      BioModal,
      {
        member,
        isOpen: isBioOpen,
        onClose: () => setIsBioOpen(false)
      }
    )
  ] });
};
function Editors() {
  const executiveMembers = [
    {
      name: "Dr. Namrta Jain",
      role: "Editor-in–Chief",
      title: "Sanmati Spectrum of Knowledge & Emerging Discourse",
      email: "sanmatijournal@gmail.com",
      phone: "+91 9870713912 & +91 8979782949",
      profileUrl: "https://scholar.google.com/citations?user=YzXafxwAAAAJ&hl=en",
      image: "/images/team/mam.jpeg",
      icon: Trophy,
      colorClass: "bg-secondary text-white border-transparent",
      bio: {
        intro: "डा. नम्रता जैन हिंदी एवं भारतीय ज्ञान परंपरा से आधारित पुस्तकों की समीक्षा, समालोचना एवं संपादन एवं लेखन कला में दक्ष विदुषी हैं। वर्तमान में तीर्थंकर महावीर विश्वविद्यालय, मुरादाबाद (उ.प्र.) के कॉलेज ऑफ लॉ एंड लीगल स्टडीज में सहा. प्राध्यापिका के पद पर कार्यरत हैं। उन्हें शिक्षा के क्षेत्र में 17 वर्षों का समृद्ध अनुभव प्राप्त है। आपने विभिन्न राष्ट्रीय एवं अंतर्राष्ट्रीय कार्यशालाओं, वेबिनारों एवं संगोष्ठियों का आयोजन किया है तथा उनमें सक्रिय सहभागिता भी की है। डा. नम्रता जैन Sanmati Spectrum of Knowledge & Emerging Discourse की मुख्य संपादक की भूमिका का निर्बाहन कर रही है ।",
        qualifications: "एम.ए. (हिंदी, संस्कृत, योग, दर्शनशास्त्र), एम.एड., यूजीसी-नेट (हिंदी एवं शिक्षाशास्त्र), पीएच.डी. (हिंदी एवं शिक्षाशास्त्र)",
        books: "मन्नू भंडारी के कथा साहित्य में स्त्री विमर्श, डी.एल.एड. प्रथम एवं चतुर्थ सेमेस्टर (SCERT, उ.प्र.) हेतु हिंदी शिक्षण, मूल मनोवैज्ञानिक प्रक्रियाएं, प्रयोजनमूलक भाषा एवं अनुवाद, Development of Education System in India, भारतीय शिक्षा प्रणाली का बदलता स्वरूप, भारतीय समाज एवं मनोविज्ञान, सामाजिक परिवर्तन और सामाजिक आंदोलनों का समाजशास्त्र, भारतीय ज्ञान परम्परा: विज्ञान, दर्शन, संस्कृति और स्वास्थ्य की विरासत, टीजीटी एवं पीजीटी (हिंदी व संस्कृत) विषयों पर प्रतियोगी पुस्तकों का लेखन।",
        edited: "वैश्विक विचारधाराओं का मूल : भारतीय ज्ञान परंपराएँ, वैश्विक चिंतन एवं भारतीय ज्ञान परंपराएँ, भारतीय ज्ञान परंपराओं का वैश्विक दृष्टिकोण, यथार्थ के धरातल पर मानवीय विचारों की दिशाएँ, New Education Policy: Different Dimensions of Education, राष्ट्रीय शिक्षा नीति 2020 : वर्तमान परिदृश्य में शिक्षा के विभिन्न आयाम, भारतीय लोकतंत्र का चतुर्थ स्तंभ : मीडिया (भाग-1 एवं भाग-2), समकालीन साहित्य और स्त्री विमर्श, पंडित श्रीराम शर्मा आचार्य की सामाजिक क्रांति और नारी जागरण, स्वामी विवेकानंद की सामाजिक क्रांति, प्रेमचंद के साहित्य में प्रतिरोध के स्वर, भारत की गतिशील प्रवृत्ति के आधार स्तंभ : महान शिक्षाशास्त्री, दार्शनिक, साहित्यकार एवं महापुरुष, भारतीय परिवेश में किन्नर जीवन की भूमिका, भारत के महान शिक्षाशास्त्री, दार्शनिक, साहित्यकार एवं महापुरुषों का पथ-प्रदर्शन, भारतीय समाज के विविध आयाम, भारत के महान शिक्षाशास्त्री, दार्शनिक, साहित्यकार एवं महापुरुषों का पथ-प्रदर्शन : एक संगोष्ठी, शिक्षा, शिक्षक एवं शिक्षार्थी : त्रिध्रुवीय प्रक्रिया का बृहद् अवलोकन, महान शिक्षाशास्त्रियों, साहित्यकारों, महापुरुषों एवं दार्शनिकों का भारत के विकास में महत्वपूर्ण अवदान, भारतीय साहित्य, सिनेमा और संस्कृति के विविध आयाम, भारत के महान शिक्षाशास्त्रियों, दार्शनिकों, साहित्यकारों एवं महापुरुषों का योगदान, आत्मनिर्भर भारत के विविध आयाम : आवश्यकताएँ, चुनौतियाँ एवं समाधान (भाग-1 एवं भाग-2), भारतीय शोध प्रकाशन के परिदृश्य और शोध प्रविधि, नव भारत की दिशा : शिक्षा, तकनीक, स्वास्थ्य एवं समाज, नव भारत का पथ : शिक्षा, तकनीक, स्वास्थ्य और समाज।",
        awards: "Swami Vivekanand Gaurav Samman – 2026, Best Keynote Speaker Award – 2024, Global Nature Peace Award – 2024, पर्यावरण संरक्षण रत्न पुरस्कार - 2024, International Women Warrior Award – 2024, Top 100 Indian Educators of the Year Award – 2024, Innovative Author Award – 2024, Researcher of the Year – 2023, सर्वोच्य महिला रत्न पुरस्कार – 2023, National Unity Peace Award – 2023, Maa Saraswati Sahitya Samman – 2023, Nari Shakti Samman Samaroh – 2022।",
        memberships: "प्रेसिडेंट: CKNKH हिंदी साहित्य समिति (भारत सरकार द्वारा पंजीकृत), प्रेसिडेंट: रघुराज पीपल मैन रिसर्च समिति (भारत सरकार द्वारा पंजीकृत), प्रेसिडेंट: Educrea उत्तर प्रदेश रिसर्च समिति सदस्य: महात्मा गांधी अंतरराष्ट्रीय हिंदी विश्वविद्यालय, वर्धा द्वारा प्रकाशित ‘बहुवचन’ (UGC-CARE सूचीबद्ध पत्रिका), संपादकीय बोर्ड सदस्य: Universe Journal of Education & Humanities, संपादकीय बोर्ड सदस्य: Shiksha Shodh Manthan – Journal of Education & Humanities, Author Member: CKNKH Foundation (2023), Member: Educrea Global Association।"
      }
    },
    {
      name: "Dr. Ratnesh Kumar Jain",
      role: "Managing Editor",
      title: "Teerthanker Mahaveer University, Moradabad",
      email: "Jainratnesh79@gmail.com",
      phone: "+91 7999525735",
      profileUrl: "https://www.tmu.ac.in/nss-coordinator-desk",
      image: "/images/team/sir.jpeg",
      icon: Users,
      colorClass: "bg-white/90 text-dark border border-white/20",
      bio: {
        intro: "Dr. Ratnesh Kumar Jain is currently serving at Teerthanker Mahaveer University, Moradabad (U.P.) as Assistant Dean – Student Welfare and University Coordinator – National Service Scheme (NSS). He is an Associate Professor in the Faculty of Humanities & Social Sciences, Centre for Jain Studies, and also serves as the Managing Editor of Sanmati Spectrum of Knowledge & Emerging Discourse. He has over 20 years of rich experience in the field of education. He has organized and actively participated in several national and international workshops, seminars, conferences, and webinars. A number of his research articles have been published in reputed journals.",
        qualifications: "M.Sc. (Botany & IT), M.A. (English, Hindi & Yoga), M.Ed., Ph.D. (Philosophy & Education), UGC-NET, PGDCA.",
        books: "Science Teaching for D.El.Ed. First, Third, and Fourth Semester (SCERT, U.P.), Microbiology & Plant Pathology, Development of Education System in India, Core Science, महाविद्यालयीन स्तर पर शैक्षिक प्रशासन एवं प्रबन्धन में प्राचार्यो की भूमिका, राष्ट्र निर्माण का युवा मंच: राष्ट्रीय सेवा योजना.",
        edited: "वैश्विक विचारधाराओं का मूल : भारतीय ज्ञान परंपराएँ, वैश्विक चिंतन एवं भारतीय ज्ञान परंपराएँ, भारतीय ज्ञान परंपराओं का वैश्विक दृष्टिकोण, यथार्थ के धरातल पर मानवीय विचारों की दिशाएँ, New Education Policy: Different Dimensions of Education, राष्ट्रीय शिक्षा नीति 2020 : वर्तमान परिदृश्य में शिक्षा के विभिन्न आयाम, भारतीय लोकतंत्र का चतुर्थ स्तंभ : मीडिया (Part I & Part II), पंडित श्रीराम शर्मा आचार्य की सामाजिक क्रांति और नारी जागरण, स्वामी विवेकानंद की सामाजिक क्रांति, प्रेमचंद के साहित्य में प्रतिरोध के स्वर, भारत की गतिशील प्रवृत्ति के आधार स्तंभ : महान शिक्षाशास्त्री, दार्शनिक, साहित्यकार एवं महापुरुष, भारत के महान शिक्षाशास्त्री, दार्शनिक, साहित्यकार एवं महापुरुषों का पथ-प्रदर्शन, भारत के महान शिक्षाशास्त्री, दार्शनिक, साहित्यकार एवं महापुरुषों का पथ-प्रदर्शन : एक संगोष्ठी, शिक्षा, शिक्षक एवं शिक्षार्थी : त्रिध्रुवीय प्रक्रिया का बृहद् अवलोकन, महान शिक्षाशास्त्रियों, साहित्यकारों, महापुरुषों एवं दार्शनिकों का भारत के विकास में महत्वपूर्ण अवदान, भारत के महान शिक्षाशास्त्रियों, दार्शनिकों, साहित्यकारों एवं महापुरुषों का योगदान, आत्मनिर्भर भारत के विविध आयाम : आवश्यकताएँ, चुनौतियाँ एवं समाधान (Part I & Part II), The Direction of New India Education, Technology, Health and Society.",
        awards: "Best Keynote Speaker Award (2024), Environmental Conservation Ratna Award (2024), Research Guru Award (2024).",
        memberships: "Member, Bahuvachan (UGC-CARE listed journal), published by Mahatma Gandhi Antarrashtriya Hindi Vishwavidyalaya, Wardha; Editorial Board Member, Universe Journal of Education and Humanities; Author Member, CKNKH Foundation (2023)."
      }
    }
  ];
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: "Executive Editors",
        description: "The supreme academic leadership and founding editors guiding the multidisciplinary vision of Sanmati Journal."
      }
    ),
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Executive Editors",
        breadcrumb: "Leadership",
        subtitle: "The architects of our empirical standards and global scholarly narrative."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24 relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center mb-12 lg:mb-24", children: [
        /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "flex items-center gap-4 mb-6", children: [
          /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-secondary" }),
          /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[11px] uppercase tracking-[0.4em]", children: "Supreme Leadership" }),
          /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-secondary" })
        ] }),
        /* @__PURE__ */ jsxs(motion.h2, { ...fadeInUp, transition: { delay: 0.1 }, className: "text-2xl md:text-3xl lg:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-dark mb-6 leading-tight", children: [
          "The Founding ",
          /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Visionaries" })
        ] }),
        /* @__PURE__ */ jsx(motion.p, { ...fadeInUp, transition: { delay: 0.2 }, className: "text-xl text-muted font-medium max-w-2xl leading-relaxed", children: "Pioneering the strategic evolution, operational brilliance, and peer-reviewed excellence across our global academic platform." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 max-w-5xl mx-auto", children: executiveMembers.map((m, i) => /* @__PURE__ */ jsx(ExecutiveMember, { member: m, index: i }, i)) })
    ] })
  ] });
}
export {
  Editors as default
};
