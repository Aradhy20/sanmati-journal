import { jsx, jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, BookOpen, BookMarked, CheckCircle, Star, Users, Globe, Clock } from "lucide-react";
function CountdownTimer({ targetDate, className = "" }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +/* @__PURE__ */ new Date();
      let tl = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      if (difference > 0) {
        tl = {
          days: Math.floor(difference / (1e3 * 60 * 60 * 24)),
          hours: Math.floor(difference / (1e3 * 60 * 60) % 24),
          minutes: Math.floor(difference / 1e3 / 60 % 60),
          seconds: Math.floor(difference / 1e3 % 60)
        };
      }
      return tl;
    };
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1e3);
    return () => clearInterval(timer);
  }, [targetDate]);
  if (!isMounted) return null;
  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds }
  ];
  return /* @__PURE__ */ jsx("div", { className: `flex items-center gap-2 sm:gap-4 ${className}`, "aria-live": "polite", children: timeBlocks.map((block, i) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center min-w-[50px] sm:min-w-[64px]", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-white/90 backdrop-blur-md dark:bg-slate-800/90 shadow-sm border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 sm:px-4 sm:py-3 w-full text-center mb-1", children: /* @__PURE__ */ jsx("span", { className: "text-xl sm:text-2xl font-black font-serif text-ds-accent tracking-tighter shadow-sm", children: String(block.value).padStart(2, "0") }) }),
      /* @__PURE__ */ jsx("span", { className: "text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest", children: block.label })
    ] }),
    i < 3 && /* @__PURE__ */ jsx("span", { className: "text-xl font-black text-slate-300 dark:text-slate-600 self-start mt-2 sm:mt-3", children: ":" })
  ] }, block.label)) });
}
const Hero = () => {
  const [eomDate, setEomDate] = useState(() => {
    const now = /* @__PURE__ */ new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59).toISOString();
  });
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-[95vh] flex items-center overflow-hidden bg-gradient-to-br from-[#eef1ff] via-[#f5f0ff] to-[#fff0f5]", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0 pointer-events-none overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 -left-1/4 w-[650px] h-[650px] bg-[#687EFF]/10 rounded-full blur-[180px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F87A53]/8 rounded-full blur-[160px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#687EFF]/6 rounded-full blur-[140px]" })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 z-0 opacity-[0.06]",
        style: { backgroundImage: "radial-gradient(circle at 2px 2px, #687EFF 1.5px, transparent 0)", backgroundSize: "40px 40px" }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24 lg:py-32", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -40 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-5 py-2 bg-[#687EFF]/10 border border-[#687EFF]/25 rounded-full mb-6", children: [
              /* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-[#687EFF]" }),
              /* @__PURE__ */ jsx("span", { className: "text-[#687EFF] font-black text-[11px] uppercase tracking-[0.35em]", children: "ISSN: 3108-1819 · Peer-Reviewed Journal" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-[#F87A53] font-bold text-base mb-3 font-sans", lang: "hi", children: "ज्ञान, शोध और प्रकाशन का एक राष्ट्रीय मंच" }),
            /* @__PURE__ */ jsxs("h1", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-8 leading-[1.15] tracking-tight text-[#052143]", children: [
              "Sanmati Spectrum of",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-[#687EFF] to-[#F87A53]", children: "Knowledge" }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "text-[#052143]", children: "& Emerging Discourse" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-[#6B778B] font-medium leading-relaxed mb-10 max-w-lg border-l-4 border-[#687EFF]/40 pl-6", children: "A national, multidisciplinary, peer-reviewed and referred quarterly journal. The journal provides a scholarly platform for original research, case studies, thematic articles, book reviews, and conference/seminar papers across diverse disciplines." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row flex-wrap items-center gap-3 mb-12 max-w-2xl", children: [
              /* @__PURE__ */ jsxs(
                Link,
                {
                  href: "/submission-guidelines/call-for-papers",
                  className: "group w-full sm:w-auto justify-center px-7 py-3.5 bg-[#687EFF] text-white rounded-full font-bold text-xs shadow-lg shadow-[#687EFF]/30 hover:bg-[#052143] transition-all flex items-center gap-2 hover:-translate-y-1 uppercase tracking-[0.1em]",
                  children: [
                    "Submit Manuscript",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1.5 transition-transform" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Link,
                {
                  href: "/archive",
                  className: "group w-full sm:w-auto justify-center px-7 py-3.5 bg-[#052143] text-white rounded-full font-bold text-xs hover:bg-[#0a1f3d] transition-all flex items-center gap-2 hover:-translate-y-1 uppercase tracking-[0.1em] shadow-lg shadow-[#052143]/25",
                  children: [
                    /* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4" }),
                    " Read Archive"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Link,
                {
                  href: "/book-publication",
                  className: "group w-full sm:w-auto justify-center px-7 py-3.5 bg-[#F87A53] text-white rounded-full font-bold text-xs hover:bg-[#e56940] transition-all flex items-center gap-2 hover:-translate-y-1 uppercase tracking-[0.1em] shadow-lg shadow-[#F87A53]/25",
                  children: [
                    /* @__PURE__ */ jsx(BookMarked, { className: "w-4 h-4" }),
                    " Book Publications"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3 pt-8 border-t border-[#687EFF]/15 mb-8", children: [
              { icon: CheckCircle, label: "Authenticated", value: "ISSN: 3108-1819", color: "text-[#687EFF]" },
              { icon: Star, label: "Impact", value: "Double-Blind Review", color: "text-[#F87A53]" },
              { icon: Users, label: "Authors", value: "200+ Contributors", color: "text-[#687EFF]" },
              { icon: BookOpen, label: "Archive", value: "500+ Papers", color: "text-[#052143]" },
              { icon: Globe, label: "Scope", value: "25+ Research Fields", color: "text-[#687EFF]" }
            ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-[#687EFF]/15 dark:border-slate-700 shadow-sm", children: [
              /* @__PURE__ */ jsx(item.icon, { className: `w-4 h-4 flex-shrink-0 ${item.color}` }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-[#052143] dark:text-slate-300 text-[10px] font-black uppercase tracking-widest leading-none mb-0.5", children: item.label }),
                /* @__PURE__ */ jsx("p", { className: "text-[#6B778B] dark:text-slate-400 text-[11px] font-bold", children: item.value })
              ] })
            ] }, i)) }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl border border-emerald-500/20 shadow-sm p-4 inline-block mb-12", children: [
              /* @__PURE__ */ jsxs("p", { className: "text-[#052143] dark:text-slate-300 text-[10px] font-black uppercase tracking-widest mb-3 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Clock, { className: "w-3.5 h-3.5 text-emerald-500" }),
                "Current Cycle Closes In"
              ] }),
              /* @__PURE__ */ jsx(CountdownTimer, { targetDate: eomDate })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
          className: "relative hidden lg:block",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative rounded-[3rem] overflow-hidden shadow-[0_30px_80px_rgba(104,126,255,0.18)] border-2 border-white animate-float", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/fistudy-assets/backgrounds/slider-1-1.png",
                  alt: "Sanmati Journal Publication",
                  className: "w-full h-[520px] object-cover",
                  loading: "eager"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-white/40 via-transparent to-transparent", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-green-500 animate-pulse" }),
                  /* @__PURE__ */ jsx("span", { className: "text-[#052143]/80 text-xs font-bold uppercase tracking-widest", children: "New Submissions Open — 2026" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex -space-x-3", children: [
                  ["/fistudy-assets/team/team-1-1.jpg", "/fistudy-assets/team/team-1-2.jpg", "/fistudy-assets/team/team-2-1.jpg"].map((src, j) => /* @__PURE__ */ jsx("img", { src, alt: "Reviewer", className: "w-9 h-9 rounded-full border-2 border-white object-cover shadow" }, j)),
                  /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-full border-2 border-white bg-[#687EFF] flex items-center justify-center text-[10px] font-black text-white shadow", children: "+12" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                animate: { y: [0, -8, 0] },
                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                className: "absolute top-12 -left-12 bg-white rounded-2xl shadow-xl p-5 border border-[#687EFF]/15 z-20",
                children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-xl bg-[#687EFF]/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-[#687EFF]" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-2xl font-black text-[#052143] leading-none", children: "2,000+" }),
                    /* @__PURE__ */ jsx("p", { className: "text-[#6B778B] text-[10px] font-black uppercase tracking-widest mt-0.5", children: "Active Readers" })
                  ] })
                ] })
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                animate: { y: [0, 8, 0] },
                transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                className: "absolute -bottom-6 right-12 bg-white rounded-2xl shadow-xl p-5 border border-[#F87A53]/15 z-20",
                children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-xl bg-[#F87A53]/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(BookOpen, { className: "w-5 h-5 text-[#F87A53]" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-2xl font-black text-[#052143] leading-none", children: "500+" }),
                    /* @__PURE__ */ jsx("p", { className: "text-[#6B778B] text-[10px] font-black uppercase tracking-widest mt-0.5", children: "Research Artifacts" })
                  ] })
                ] })
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                animate: { y: [0, -5, 0] },
                transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
                className: "absolute top-1/3 -right-6 bg-[#052143] rounded-2xl shadow-xl p-4 border border-white/10 z-20",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "flex gap-1 mb-1", children: [...Array(5)].map((_, k) => /* @__PURE__ */ jsx(Star, { className: "w-3.5 h-3.5 fill-[#F87A53] text-[#F87A53]" }, k)) }),
                  /* @__PURE__ */ jsx("p", { className: "text-white text-[11px] font-bold", children: "50+ Expert Reviewers" })
                ]
              }
            )
          ]
        }
      )
    ] }) })
  ] });
};
export {
  Hero as default
};
