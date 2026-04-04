import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";
import { BookOpen, Search, Home, ArrowLeft } from "lucide-react";
import { M as MainLayout, S as Seo } from "./MainLayout-DYvdgHCs.js";
import "react";
import "react-hot-toast";
function Error404() {
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Seo, { title: "404 – Page Not Found", description: "The page you are looking for doesn't exist." }),
    /* @__PURE__ */ jsxs("section", { className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eef1ff] via-[#f5f0ff] to-[#fff0f5] relative overflow-hidden px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#687EFF]/10 rounded-full blur-[180px]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#F87A53]/8 rounded-full blur-[160px]" })
      ] }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 opacity-[0.06]",
          style: { backgroundImage: "radial-gradient(circle at 2px 2px, #687EFF 1.5px, transparent 0)", backgroundSize: "40px 40px" }
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 text-center max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            animate: { y: [0, -18, 0] },
            transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
            className: "inline-flex mb-10",
            children: /* @__PURE__ */ jsxs("div", { className: "relative w-40 h-40 rounded-[3rem] bg-white shadow-2xl border border-[#687EFF]/20 flex items-center justify-center", children: [
              /* @__PURE__ */ jsx(BookOpen, { className: "w-20 h-20 text-[#687EFF]/30" }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  animate: { rotate: [0, 8, -8, 0] },
                  transition: { repeat: Infinity, duration: 5, ease: "easeInOut" },
                  className: "absolute -top-3 -right-3 w-12 h-12 bg-[#F87A53] rounded-2xl flex items-center justify-center shadow-lg",
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
              /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-5 py-2 bg-[#687EFF]/10 border border-[#687EFF]/25 rounded-full mb-6", children: /* @__PURE__ */ jsx("span", { className: "text-[#687EFF] font-black text-[11px] uppercase tracking-[0.35em]", children: "Error 404 · Page Not Found" }) }),
              /* @__PURE__ */ jsxs("h1", { className: "text-5xl sm:text-7xl font-serif font-black text-[#052143] mb-6 leading-none tracking-tight", children: [
                "Lost in the",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-[#687EFF] to-[#F87A53]", children: "Archives" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-[#6B778B] text-lg font-medium leading-relaxed mb-12 max-w-lg mx-auto", children: "The scholarly page you are seeking has moved, been retracted, or never existed. Let us guide you back to the knowledge base." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
                /* @__PURE__ */ jsxs(
                  Link,
                  {
                    href: "/",
                    className: "group flex items-center justify-center gap-3 px-8 py-4 bg-[#687EFF] text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-[#052143] transition-all shadow-xl shadow-[#687EFF]/30 hover:-translate-y-1",
                    children: [
                      /* @__PURE__ */ jsx(Home, { className: "w-4 h-4" }),
                      "Return to Homepage"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  Link,
                  {
                    href: "/archive",
                    className: "group flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#052143] rounded-2xl font-bold text-xs uppercase tracking-widest border border-[#687EFF]/20 hover:border-[#687EFF] hover:shadow-xl transition-all hover:-translate-y-1",
                    children: [
                      /* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4" }),
                      "Browse Archives"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-16 pt-10 border-t border-[#687EFF]/10", children: [
                /* @__PURE__ */ jsx("p", { className: "text-[#6B778B] text-xs font-bold uppercase tracking-widest mb-6", children: "Popular Destinations" }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3 justify-center", children: [
                  { label: "Submit Manuscript", href: "/submission-guidelines/call-for-papers" },
                  { label: "Editorial Team", href: "/editorial-team/editors" },
                  { label: "About Journal", href: "/basic-info/about-journal" },
                  { label: "Contact Us", href: "/contact" }
                ].map((link) => /* @__PURE__ */ jsxs(
                  Link,
                  {
                    href: link.href,
                    className: "flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-[#687EFF]/15 rounded-full text-[11px] font-bold text-[#052143] hover:bg-[#687EFF] hover:text-white hover:border-[#687EFF] transition-all",
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
