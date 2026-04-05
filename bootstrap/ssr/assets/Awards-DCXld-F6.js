import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import { Trophy, Sparkles, Medal, ArrowRight, Star, Award } from "lucide-react";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { M as MainLayout, S as Seo } from "./MainLayout-DpDjnVwe.js";
import "react";
import "react-hot-toast";
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};
function Awards() {
  const awards = [
    {
      title: "Researcher of the Decade",
      category: "Individual Excellence",
      desc: "The highest honor bestowed upon scholars with transformative impact and prolific academic lineage.",
      icon: /* @__PURE__ */ jsx(Trophy, { className: "w-8 h-8 text-white" }),
      colorClass: "bg-primary"
    },
    {
      title: "Emerging Scholar",
      category: "Institutional Pride",
      desc: "Encouraging original inquiry and innovative methodology among early-career doctoral researchers.",
      icon: /* @__PURE__ */ jsx(Star, { className: "w-8 h-8 text-white" }),
      colorClass: "bg-secondary"
    },
    {
      title: "Distinguished Paper",
      category: "Annual Publication",
      desc: "Awarded to manuscripts that exhibit extraordinary empirical rigor and theoretical significance.",
      icon: /* @__PURE__ */ jsx(Award, { className: "w-8 h-8 text-white" }),
      colorClass: "bg-dark"
    }
  ];
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: "Scholarship Awards",
        description: "Sanmati Journal honors academic excellence through prestigious annual awards for researchers and authors."
      }
    ),
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Journal Awards",
        breadcrumb: "Recognition",
        subtitle: "Celebrating the intellectual vanguards who redefine the boundaries of multidisciplinary research."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24 relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-32", children: [
        /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
            /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-primary" }),
            /* @__PURE__ */ jsx("span", { className: "text-primary font-black text-[11px] uppercase tracking-[0.4em]", children: "Honorarium Registry" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl lg:text-4xl md:text-5xl font-serif font-bold text-dark mb-8 leading-tight", children: [
            "Celebrating the ",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-secondary italic", children: "Scholarly Legacy" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted font-medium leading-relaxed max-w-xl", children: "The Sanmati Awards Program was established to amplify high-impact research. We believe that recognizing excellence is fundamental to fostering a thriving global intellectual community." })
        ] }),
        /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "relative aspect-video rounded-[3rem] overflow-hidden bg-surface border border-gray-100 p-8 flex items-center justify-center", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" }),
          /* @__PURE__ */ jsx(Trophy, { className: "w-48 h-48 text-primary/10 animate-pulse" }),
          /* @__PURE__ */ jsx(Sparkles, { className: "absolute top-1/4 right-1/4 w-12 h-12 text-secondary/30" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 lg:mb-32", children: awards.map((award, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          ...fadeInUp,
          transition: { delay: i * 0.2 },
          className: "group relative h-full bg-white p-6 lg:p-12 rounded-[3.5rem] border border-gray-50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 overflow-hidden",
          children: [
            /* @__PURE__ */ jsx("div", { className: `absolute top-0 left-0 w-2 h-full ${award.colorClass}` }),
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-8 opacity-5", children: /* @__PURE__ */ jsx(Trophy, { className: "w-24 h-24" }) }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full", children: [
              /* @__PURE__ */ jsx("div", { className: `w-16 h-16 rounded-[2rem] flex items-center justify-center transition-all duration-500 shadow-xl mb-10 group-hover:rotate-12 ${award.colorClass}`, children: award.icon }),
              /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[9px] uppercase tracking-[0.3em] mb-4 block", children: award.category }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-serif font-bold text-dark mb-6 group-hover:text-primary transition-colors duration-300", children: award.title }),
              /* @__PURE__ */ jsx("p", { className: "text-muted text-sm leading-relaxed font-medium mb-10 flex-1 italic opacity-80", children: award.desc })
            ] })
          ]
        },
        i
      )) }),
      /* @__PURE__ */ jsx(motion.div, { ...fadeInUp, children: /* @__PURE__ */ jsxs("div", { className: "relative rounded-[4rem] overflow-hidden bg-dark p-6 lg:p-12 lg:p-24 shadow-2xl flex flex-col lg:flex-row items-center gap-8 lg:gap-16", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-5 bg-[size:40px_40px] bg-grid-white/[0.2]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/10 to-transparent" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex-1 text-center lg:text-left", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center lg:justify-start gap-4 mb-8", children: [
            /* @__PURE__ */ jsx(Medal, { className: "w-10 h-10 text-secondary" }),
            /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[11px] uppercase tracking-[0.4em]", children: "Submission Cycle 2026" })
          ] }),
          /* @__PURE__ */ jsxs("h3", { className: "text-xl md:text-2xl lg:text-3xl md:text-5xl font-serif font-bold text-white mb-8", children: [
            "Nominations are ",
            /* @__PURE__ */ jsx("span", { className: "text-secondary italic", children: "Open" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-white/60 text-xl leading-relaxed font-light max-w-2xl", children: "We invite recommendations for scholars who have demonstrated exceptional empirical rigor. Self-nominations for the 'Best Paper' category are also welcome." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative z-10 shrink-0 w-full lg:w-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              href: "/contact-us",
              className: "inline-flex items-center justify-center gap-4 px-12 py-6 bg-white text-dark rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-secondary hover:text-white transition-all shadow-xl hover:-translate-y-1",
              children: [
                "Submit Nomination ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-white/30 text-[10px] text-center uppercase tracking-widest", children: "Deadline: December 31, 2026" })
        ] }) })
      ] }) })
    ] })
  ] });
}
export {
  Awards as default
};
