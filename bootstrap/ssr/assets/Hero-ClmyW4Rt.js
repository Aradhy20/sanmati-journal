import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, BookOpen, Users, CheckCircle, Star, Globe } from "lucide-react";
const Hero = () => {
  return /* @__PURE__ */ jsxs("section", { className: "relative flex flex-col min-h-[100svh] overflow-hidden bg-gradient-to-br from-primary via-[#4f46e5] to-secondary", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0 pointer-events-none overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 -left-1/4 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] lg:w-[650px] lg:h-[650px] bg-white/10 rounded-full blur-[120px] sm:blur-[150px] lg:blur-[180px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] lg:w-[500px] lg:h-[500px] bg-white/10 rounded-full blur-[120px]" })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 z-0 opacity-[0.1]",
        style: { backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,1) 1.5px, transparent 0)", backgroundSize: "40px 40px" }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-32 pb-24 lg:pt-36 lg:pb-32 flex-1 flex flex-col justify-center", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -40 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6", children: [
              /* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-accent-light" }),
              /* @__PURE__ */ jsx("span", { className: "text-white font-black text-[11px] uppercase tracking-[0.35em]", children: "ISSN: 3108-1819 · Peer-Reviewed Journal" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-accent-light font-bold text-base mb-3 font-sans", lang: "hi", children: "ज्ञान, शोध और प्रकाशन का एक राष्ट्रीय मंच" }),
            /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-7xl font-serif font-black mb-8 leading-[1.1] tracking-tight text-white drop-shadow-md", children: [
              "Empowering ",
              /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-white", children: "Academic Excellence" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-white/90 font-medium leading-relaxed mb-10 max-w-lg border-l-4 border-accent-light/50 pl-6", children: "Publishing cutting-edge research across science, arts, commerce, and law. A national, peer-reviewed quarterly journal." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row flex-wrap items-center gap-4 mb-12 max-w-2xl", children: [
              /* @__PURE__ */ jsxs(
                Link,
                {
                  href: "/submission-guidelines/call-for-papers",
                  className: "group w-full sm:w-auto justify-center px-8 py-4 bg-white text-primary rounded-full font-bold text-sm shadow-xl hover:bg-slate-50 transition-all flex items-center gap-2 hover:-translate-y-1 uppercase tracking-[0.1em]",
                  children: [
                    "Submit Research",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1.5 transition-transform" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Link,
                {
                  href: "/archive",
                  className: "group w-full sm:w-auto justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-sm hover:bg-white/20 transition-all flex items-center gap-2 hover:-translate-y-1 uppercase tracking-[0.1em] shadow-xl",
                  children: [
                    /* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4" }),
                    " Current Issue"
                  ]
                }
              )
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
            /* @__PURE__ */ jsxs("div", { className: "relative rounded-[2rem] overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm p-3 border border-white/20", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/images/saraswati.jpeg",
                  alt: "Goddess Saraswati — Symbol of Knowledge",
                  className: "w-full aspect-square object-contain transition-transform duration-700 hover:scale-105 rounded-3xl bg-white",
                  loading: "eager"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "absolute bottom-3 left-3 right-3 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse" }),
                  /* @__PURE__ */ jsx("span", { className: "text-dark text-xs font-bold uppercase tracking-widest", children: "New Submissions Open" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex -space-x-3", children: [
                  ["https://i.pravatar.cc/36?img=3", "https://i.pravatar.cc/36?img=5", "https://i.pravatar.cc/36?img=7"].map((src, j) => /* @__PURE__ */ jsx("img", { src, alt: "Reviewer", className: "w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm" }, j)),
                  /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] font-black text-white shadow-sm", children: "+12" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                animate: { y: [0, -8, 0] },
                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                className: "absolute top-8 -left-12 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-5 border border-white/50 z-10",
                children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-primary" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-2xl font-black text-dark leading-none", children: "2,000+" }),
                    /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-[10px] font-black uppercase tracking-widest mt-0.5", children: "Active Readers" })
                  ] })
                ] })
              }
            )
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "relative w-full bg-white/80 backdrop-blur-md border-t border-gray-100 py-4 shadow-sm z-20 mt-auto", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-12", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6", children: [
      { icon: CheckCircle, label: "Authenticated", value: "ISSN: 3108-1819", color: "text-primary" },
      { icon: Star, label: "Impact", value: "Peer Review", color: "text-secondary" },
      { icon: Users, label: "Authors", value: "200+ Contributors", color: "text-primary" },
      { icon: BookOpen, label: "Archive", value: "500+ Papers", color: "text-dark" },
      { icon: Globe, label: "Scope", value: "Wide Research Fields", color: "text-primary" }
    ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center", children: /* @__PURE__ */ jsx(item.icon, { className: `w-4 h-4 flex-shrink-0 ${item.color}` }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-[9px] font-black uppercase tracking-widest leading-none mb-1", children: item.label }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-800 text-[11px] font-bold", children: item.value })
      ] })
    ] }, i)) }) }) })
  ] });
};
export {
  Hero as default
};
