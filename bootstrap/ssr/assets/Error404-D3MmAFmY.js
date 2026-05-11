import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";
import { BookOpen, Search, Home, ArrowLeft } from "lucide-react";
import { M as MainLayout, S as Seo } from "./MainLayout-Cp1D8Zpu.js";
import "react";
import "react-hot-toast";
function Error404() {
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Seo, { title: "404 – Page Not Found", description: "The page you are looking for doesn't exist." }),
    /* @__PURE__ */ jsxs("section", { className: "min-h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[160px]" })
      ] }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 opacity-[0.03]",
          style: { backgroundImage: "linear-gradient(#111827 1px, transparent 1px), linear-gradient(90deg, #111827 1px, transparent 1px)", backgroundSize: "40px 40px" }
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 text-center max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            animate: { y: [0, -18, 0] },
            transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
            className: "inline-flex mb-10",
            children: /* @__PURE__ */ jsxs("div", { className: "relative w-40 h-40 rounded-[3rem] bg-white shadow-2xl border border-slate-100 flex items-center justify-center", children: [
              /* @__PURE__ */ jsx(BookOpen, { className: "w-20 h-20 text-secondary/30" }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  animate: { rotate: [0, 8, -8, 0] },
                  transition: { repeat: Infinity, duration: 5, ease: "easeInOut" },
                  className: "absolute -top-3 -right-3 w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center shadow-lg",
                  children: /* @__PURE__ */ jsx(Search, { className: "w-6 h-6 text-white" })
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7 },
            children: [
              /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-5 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6", children: /* @__PURE__ */ jsx("span", { className: "text-primary font-black text-[11px] uppercase tracking-[0.35em]", children: "Error 404 · Page Not Found" }) }),
              /* @__PURE__ */ jsxs("h1", { className: "text-5xl sm:text-7xl font-serif font-bold text-primary mb-6 leading-none tracking-tight", children: [
                "Lost in the",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-secondary italic", children: "Knowledge Base" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-lg font-medium leading-relaxed mb-12 max-w-lg mx-auto", children: "The page you are seeking has been archived, retracted, or moved. Let us guide you back." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
                /* @__PURE__ */ jsxs(
                  Link,
                  {
                    href: "/",
                    className: "group flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 hover:-translate-y-1",
                    children: [
                      /* @__PURE__ */ jsx(Home, { className: "w-4 h-4" }),
                      "Return Home"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  Link,
                  {
                    href: "/archive",
                    className: "group flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary rounded-2xl font-bold text-xs uppercase tracking-widest border border-slate-200 hover:border-secondary hover:shadow-xl transition-all hover:-translate-y-1",
                    children: [
                      /* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4" }),
                      "Browse Archive"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-16 pt-10 border-t border-slate-100", children: [
                /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-xs font-bold uppercase tracking-widest mb-6", children: "Popular Destinations" }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3 justify-center", children: [
                  { label: "Submit Manuscript", href: "/submission-guidelines/call-for-papers" },
                  { label: "Editorial Team", href: "/editorial-team/editors" },
                  { label: "About Journal", href: "/basic-info/about-journal" },
                  { label: "Contact Us", href: "/contact" }
                ].map((link) => /* @__PURE__ */ jsxs(
                  Link,
                  {
                    href: link.href,
                    className: "flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-slate-100 rounded-full text-[11px] font-bold text-slate-600 hover:bg-secondary hover:text-white transition-all",
                    children: [
                      /* @__PURE__ */ jsx(ArrowLeft, { className: "w-3 h-3 rotate-180" }),
                      link.label
                    ]
                  },
                  link.href
                )) })
              ] })
            ]
          }
        )
      ] })
    ] })
  ] });
}
export {
  Error404 as default
};
