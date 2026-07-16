import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { motion, useInView } from "framer-motion";
import { Star, CheckCircle, SendHorizonal, ArrowRight, BookOpen, Shield, Award, Globe, Zap, FileText, Users, ChevronRight, BarChart2 } from "lucide-react";
function useCounter(target, duration = 2e3, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}
const StatBadge = ({ icon: Icon, value, label, suffix = "", color = "primary" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const num = typeof value === "number" ? useCounter(value, 1800, inView) : null;
  const colors = {
    gold: "from-amber-500/20 to-amber-600/10 border-amber-400/30 text-amber-300",
    emerald: "from-emerald-500/20 to-emerald-600/10 border-emerald-400/30 text-emerald-300",
    blue: "from-blue-500/20 to-blue-600/10 border-blue-400/30 text-blue-300",
    primary: "from-white/10 to-white/5 border-white/20 text-white"
  };
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 20 },
      animate: inView ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.5 },
      className: `flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-br border backdrop-blur-sm ${colors[color]}`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(Icon, { className: "w-4.5 h-4.5" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-lg font-black leading-none font-serif", children: num !== null ? `${num}${suffix}` : value }),
          /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider opacity-70 mt-0.5", children: label })
        ] })
      ]
    }
  );
};
const TRUST = [
  { icon: Shield, text: "Double-Blind Peer Review" },
  { icon: Award, text: "CrossRef DOI Indexed" },
  { icon: Globe, text: "Open Access Journal" },
  { icon: Zap, text: "15–30 Days Review" }
];
function Hero({ papers = [], currentIssue = null }) {
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 10
      });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: heroRef,
      className: "relative min-h-[92vh] flex items-center overflow-hidden",
      "aria-label": "Hero — Sanmati Spectrum Research Journal",
      style: { background: "linear-gradient(150deg, #0B1F3A 0%, #0F2B50 40%, #0B1F3A 80%, #071628 100%)" },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 pointer-events-none select-none overflow-hidden", "aria-hidden": "true", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              animate: { x: mousePos.x * 1.2, y: mousePos.y * 0.8 },
              transition: { type: "spring", stiffness: 40, damping: 20 },
              className: "absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20",
              style: { background: "radial-gradient(circle, rgba(139,108,48,0.6) 0%, transparent 70%)" }
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              animate: { x: mousePos.x * -0.8, y: mousePos.y * 1.2 },
              transition: { type: "spring", stiffness: 30, damping: 20 },
              className: "absolute -bottom-48 -left-48 w-[700px] h-[700px] rounded-full opacity-15",
              style: { background: "radial-gradient(circle, rgba(21,101,192,0.5) 0%, transparent 70%)" }
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              animate: { x: mousePos.x * 0.5, y: mousePos.y * 0.5 },
              transition: { type: "spring", stiffness: 20, damping: 20 },
              className: "absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full opacity-8",
              style: { background: "radial-gradient(circle, rgba(5,150,105,0.4) 0%, transparent 70%)" }
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute inset-0 opacity-[0.03]",
              style: { backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }
            }
          ),
          [...Array(6)].map((_, i) => /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute w-1.5 h-1.5 rounded-full bg-secondary/40",
              style: { left: `${15 + i * 15}%`, top: `${20 + i % 3 * 30}%` },
              animate: { y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] },
              transition: { duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }
            },
            i
          ))
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6 },
                className: "flex flex-wrap items-center gap-3",
                children: [
                  /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-[11px] font-black uppercase tracking-[0.2em]", children: [
                    /* @__PURE__ */ jsx(Star, { className: "w-3 h-3 fill-current" }),
                    "Impact Factor 5.3"
                  ] }),
                  /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-black uppercase tracking-[0.2em]", children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "w-3 h-3" }),
                    "Open Access"
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.h1,
              {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.7, delay: 0.1 },
                className: "text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-white leading-[1.08] tracking-tight",
                children: [
                  "Advancing",
                  " ",
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "relative inline-block",
                      style: { WebkitTextFillColor: "transparent", WebkitBackgroundClip: "text", backgroundClip: "text", backgroundImage: "linear-gradient(135deg, #c9973d 0%, #8b6c30 50%, #f0c060 100%)" },
                      children: "Research"
                    }
                  ),
                  /* @__PURE__ */ jsx("br", {}),
                  "Across Disciplines"
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.2 },
                className: "text-base md:text-lg text-white/65 leading-relaxed max-w-lg",
                children: "India's premier multidisciplinary peer-reviewed journal. Publish original research across Science, Humanities, Law, Education & Commerce — with CrossRef DOI indexing."
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.3 },
                className: "flex flex-wrap gap-3",
                children: [
                  /* @__PURE__ */ jsxs(
                    Link,
                    {
                      href: "/submission-guidelines/call-for-papers",
                      className: "inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-secondary text-white font-black text-sm hover:bg-secondary-dark hover:shadow-[0_16px_40px_rgba(139,108,48,0.45)] transition-all duration-300 group",
                      children: [
                        /* @__PURE__ */ jsx(SendHorizonal, { className: "w-4 h-4" }),
                        "Submit Paper",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    Link,
                    {
                      href: "/archive",
                      className: "inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/10 text-white border border-white/20 font-bold text-sm hover:bg-white/18 hover:border-white/35 backdrop-blur-sm transition-all duration-300",
                      children: [
                        /* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4" }),
                        "Browse Archive"
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.6, delay: 0.4 },
                className: "flex flex-wrap gap-2 pt-2",
                children: TRUST.map(({ icon: Icon, text }) => /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 border border-white/12 text-[11px] text-white/65 font-medium backdrop-blur-sm", children: [
                  /* @__PURE__ */ jsx(Icon, { className: "w-3 h-3 text-secondary flex-shrink-0" }),
                  text
                ] }, text))
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 40 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.8, delay: 0.2 },
              className: "space-y-4",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                  /* @__PURE__ */ jsx(StatBadge, { icon: FileText, value: 93, suffix: "+", label: "Papers Published", color: "primary" }),
                  /* @__PURE__ */ jsx(StatBadge, { icon: Users, value: 200, suffix: "+", label: "Contributing Authors", color: "primary" }),
                  /* @__PURE__ */ jsx(StatBadge, { icon: Globe, value: 15, suffix: "+", label: "States Represented", color: "emerald" }),
                  /* @__PURE__ */ jsx(StatBadge, { icon: Star, value: "5.3", label: "Impact Factor", color: "gold" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-white/8 border border-white/15 backdrop-blur-md p-5 space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("div", { className: "text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-1", children: "Current Issue" }),
                      currentIssue ? /* @__PURE__ */ jsxs("div", { className: "text-sm font-bold text-white", children: [
                        "Vol. ",
                        currentIssue.volume,
                        ", Issue ",
                        currentIssue.issue_number,
                        " · ",
                        currentIssue.year
                      ] }) : /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-white", children: "Vol. 2, Issue 2 · 2025" })
                    ] }),
                    /* @__PURE__ */ jsxs(Link, { href: "/archive", className: "flex items-center gap-1 text-[11px] text-secondary hover:text-secondary-light transition-colors font-bold", children: [
                      "View All ",
                      /* @__PURE__ */ jsx(ChevronRight, { className: "w-3.5 h-3.5" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                    papers.slice(0, 3).map((paper, i) => /* @__PURE__ */ jsxs(
                      Link,
                      {
                        href: `/article/${paper.id}`,
                        className: "flex items-start gap-3 p-3 rounded-xl hover:bg-white/8 transition-colors group",
                        children: [
                          /* @__PURE__ */ jsx("span", { className: "w-6 h-6 rounded-lg bg-secondary/20 text-secondary text-[10px] font-black flex items-center justify-center flex-shrink-0 mt-0.5", children: i + 1 }),
                          /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                            /* @__PURE__ */ jsx("p", { className: "text-[12px] text-white/80 font-medium line-clamp-2 group-hover:text-white transition-colors leading-snug", children: paper.title }),
                            /* @__PURE__ */ jsx("p", { className: "text-[10px] text-white/40 mt-0.5 truncate", children: paper.authors })
                          ] })
                        ]
                      },
                      paper.id
                    )),
                    papers.length === 0 && [1, 2, 3].map((i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-3", children: [
                      /* @__PURE__ */ jsx("div", { className: "skeleton w-6 h-6 rounded-lg flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-1.5", children: [
                        /* @__PURE__ */ jsx("div", { className: "skeleton h-3 rounded w-full" }),
                        /* @__PURE__ */ jsx("div", { className: "skeleton h-3 rounded w-3/4" })
                      ] })
                    ] }, i))
                  ] }),
                  /* @__PURE__ */ jsxs(
                    Link,
                    {
                      href: "/archive",
                      className: "flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-white/15 text-xs text-white/60 font-bold hover:bg-white/8 hover:text-white transition-all duration-200",
                      children: [
                        "View All Published Articles",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/10", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(BarChart2, { className: "w-4 h-4 text-blue-400" }) }),
                  /* @__PURE__ */ jsxs("div", { className: "text-[11px] text-white/50 leading-snug", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-white/80 font-bold", children: "CrossRef DOI" }),
                    " assigned to every article ·",
                    " ",
                    /* @__PURE__ */ jsx("span", { className: "text-white/80 font-bold", children: "ISSN 3108-1819" }),
                    " (Online)"
                  ] })
                ] })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 1.5 },
            "aria-hidden": "true",
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] text-white/30 font-bold uppercase tracking-widest", children: "Scroll" }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  animate: { y: [0, 6, 0] },
                  transition: { duration: 1.5, repeat: Infinity },
                  className: "w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5",
                  children: /* @__PURE__ */ jsx("div", { className: "w-1 h-2 rounded-full bg-white/40" })
                }
              )
            ]
          }
        )
      ]
    }
  );
}
export {
  Hero as default
};
