import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
import { useMotionValue, useSpring, motion } from "framer-motion";
import { useEffect } from "react";
import { ArrowRight, BookOpen, Trophy, FileText, Globe, Microscope, Award } from "lucide-react";
const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 50, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const targetX = (clientX - window.innerWidth / 2) / 40;
      const targetY = (clientY - window.innerHeight / 2) / 40;
      mouseX.set(targetX);
      mouseY.set(targetY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  return /* @__PURE__ */ jsxs("section", { className: "relative w-full min-h-[90svh] xl:min-h-screen flex flex-col justify-center overflow-hidden bg-warm-bg pt-20 lg:pt-12 pb-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 pointer-events-none overflow-hidden z-0", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 opacity-[0.03]",
          style: {
            backgroundImage: "radial-gradient(var(--color-primary) 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          animate: {
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            rotate: [0, 5, 0]
          },
          transition: { duration: 25, repeat: Infinity, ease: "easeInOut" },
          className: "absolute -top-40 -right-40 w-[700px] h-[700px] bg-secondary/5 rounded-full blur-[140px]"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          animate: {
            scale: [1, 1.1, 1],
            y: [0, -60, 0]
          },
          transition: { duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 },
          className: "absolute -bottom-60 -left-40 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[160px]"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 right-0 transform translate-x-1/3 select-none hidden xl:block", children: /* @__PURE__ */ jsx("span", { className: "text-[16vw] font-serif font-black text-primary/5 leading-none tracking-tighter italic", children: "Spectrum" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container-custom relative z-10 py-10 flex-grow flex flex-col justify-center", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          variants: containerVariants,
          initial: "hidden",
          animate: "visible",
          className: "lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1",
          children: [
            /* @__PURE__ */ jsx(motion.div, { variants: itemVariants, className: "flex justify-center lg:justify-start", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-secondary/20 rounded-full shadow-lg shadow-secondary/5", children: [
              /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-secondary animate-pulse" }),
              /* @__PURE__ */ jsx("span", { className: "text-secondary text-[10px] font-black uppercase tracking-[0.25em] font-sans", children: "ISSN: 3108-1819 · PEER REVIEWED" })
            ] }) }),
            /* @__PURE__ */ jsx(
              motion.p,
              {
                variants: itemVariants,
                className: "text-slate-500 font-sans font-bold text-sm md:text-base tracking-[0.15em] uppercase",
                children: "India’s Premier Multidisciplinary Research Journal"
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.h1,
              {
                variants: itemVariants,
                className: "text-4xl md:text-6xl lg:text-7xl xl:text-[5.2rem] font-serif font-bold leading-[1.1] text-primary tracking-tight",
                children: [
                  "Sanmati Spectrum ",
                  /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
                  /* @__PURE__ */ jsxs("span", { className: "text-secondary relative inline-block italic", children: [
                    "of Knowledge",
                    /* @__PURE__ */ jsx("svg", { className: "absolute -bottom-2 left-0 w-full h-3 text-secondary/30 pointer-events-none", viewBox: "0 0 100 10", preserveAspectRatio: "none", children: /* @__PURE__ */ jsx("path", { d: "M0,5 Q50,10 100,5", stroke: "currentColor", strokeWidth: "4", fill: "none", strokeLinecap: "round" }) })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.p,
              {
                variants: itemVariants,
                className: "text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium",
                children: "Empowering scholars, educators, innovators, and researchers through peer-reviewed publications and academic excellence."
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                variants: itemVariants,
                className: "flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 pt-4",
                children: [
                  /* @__PURE__ */ jsxs(
                    Link,
                    {
                      href: "/submission-guidelines/call-for-papers",
                      className: "thm-btn w-full sm:w-auto",
                      children: [
                        /* @__PURE__ */ jsx("span", { children: "Submit Research" }),
                        /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    Link,
                    {
                      href: "/archive",
                      className: "thm-btn-outline w-full sm:w-auto gap-3",
                      children: [
                        /* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4 text-secondary" }),
                        /* @__PURE__ */ jsx("span", { children: "Explore Journal" })
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                variants: itemVariants,
                className: "grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/60 max-w-md mx-auto lg:mx-0 mt-4",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-center lg:text-left", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-primary", children: "550+" }),
                    /* @__PURE__ */ jsx("p", { className: "text-[9px] uppercase font-black text-slate-400 tracking-wider", children: "Papers" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center lg:text-left border-x border-slate-200/60", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-primary", children: "2.5K" }),
                    /* @__PURE__ */ jsx("p", { className: "text-[9px] uppercase font-black text-slate-400 tracking-wider", children: "Citations" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center lg:text-left", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-primary", children: "Fast" }),
                    /* @__PURE__ */ jsx("p", { className: "text-[9px] uppercase font-black text-slate-400 tracking-wider", children: "Review" })
                  ] })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-5 relative order-1 lg:order-2 flex justify-center", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          style: { x, y },
          className: "relative w-full max-w-[420px] lg:max-w-none aspect-[4/5] lg:aspect-square flex items-center justify-center",
          children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.9, rotate: -5 },
                animate: { opacity: 1, scale: 1, rotate: 0 },
                transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
                className: "relative w-4/5 h-4/5 rounded-[3rem] overflow-hidden shadow-2xl group border-4 border-white bg-white",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 z-10 pointer-events-none" }),
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "/images/saraswati.jpeg",
                      alt: "Academic Heritage",
                      className: "w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-[2s]"
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "absolute bottom-6 inset-x-6 p-4 bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl shadow-lg z-20 text-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "block text-[9px] font-black uppercase tracking-widest text-secondary mb-1", children: "Global Recognition" }),
                    /* @__PURE__ */ jsx("span", { className: "text-primary font-bold text-xs", children: "Double-Blind Peer Reviewed Journal" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                animate: { y: [0, -10, 0], x: [0, 5, 0] },
                transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                className: "absolute -top-4 -right-2 lg:-right-10 bg-white/80 backdrop-blur-xl border border-white rounded-2xl shadow-xl p-4 z-30 flex items-center gap-3.5 max-w-[200px]",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "w-5 h-5" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-black text-primary leading-none", children: "UGC CARE" }),
                    /* @__PURE__ */ jsx("p", { className: "text-[9px] font-bold text-slate-500 mt-1 uppercase", children: "Indexed Standards" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                animate: { y: [0, 12, 0], x: [0, -6, 0] },
                transition: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
                className: "absolute bottom-12 -left-2 lg:-left-10 bg-white/80 backdrop-blur-xl border border-white rounded-2xl shadow-xl p-4 z-30 flex items-center gap-3.5 max-w-[180px]",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 flex-shrink-0", children: /* @__PURE__ */ jsx(Trophy, { className: "w-5 h-5" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-black text-primary leading-none", children: "High Impact" }),
                    /* @__PURE__ */ jsx("p", { className: "text-[9px] font-bold text-slate-500 mt-1 uppercase", children: "Impact Rating" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] border border-slate-200 rounded-full pointer-events-none z-0 opacity-60" }),
            /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-slate-200/50 rounded-full border-dashed pointer-events-none z-0 opacity-40 animate-[spin_60s_linear_infinite]" })
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full relative z-20 mt-auto border-t border-slate-200/60 bg-white/50 backdrop-blur-sm", children: /* @__PURE__ */ jsx("div", { className: "container-custom py-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center md:justify-between items-center gap-6 opacity-80 grayscale hover:grayscale-0 transition-all duration-500 cursor-default", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "font-sans font-black text-[10px] uppercase tracking-widest", children: "Crossref DOI" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:block w-px h-4 bg-slate-200" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Globe, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "font-sans font-black text-[10px] uppercase tracking-widest", children: "Open Access" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:block w-px h-4 bg-slate-200" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Microscope, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "font-sans font-black text-[10px] uppercase tracking-widest", children: "Google Scholar" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:block w-px h-4 bg-slate-200" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Award, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "font-sans font-black text-[10px] uppercase tracking-widest", children: "ISO Certified" })
      ] })
    ] }) }) })
  ] });
};
const ShieldCheck = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }),
  /* @__PURE__ */ jsx("path", { d: "m9 12 2 2 4-4" })
] });
export {
  Hero as default
};
