import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
const PageHeader = ({ title, breadcrumb, subtitle }) => {
  return /* @__PURE__ */ jsxs("section", { className: "relative py-12 lg:py-24 md:py-32 overflow-hidden bg-warm-bg", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-warm-bg via-surface/80 to-primary/5" }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 opacity-[0.8]",
          style: { backgroundImage: "radial-gradient(circle at 2px 2px, rgba(10,37,64,0.03) 2px, transparent 0)", backgroundSize: "48px 48px" }
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none z-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-24 -left-24 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          animate: { y: [0, -20, 0], rotate: [0, 5, 0] },
          transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          className: "absolute top-1/4 right-1/4 opacity-20",
          children: /* @__PURE__ */ jsx("div", { className: "w-12 h-12 border border-secondary/30 rounded-full" })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          animate: { y: [0, 20, 0], rotate: [0, -5, 0] },
          transition: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 },
          className: "absolute bottom-1/4 left-1/4 opacity-20",
          children: /* @__PURE__ */ jsx("div", { className: "w-20 h-20 border border-primary/20 rounded-lg rotate-45" })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 relative z-10", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        className: "text-center",
        children: [
          /* @__PURE__ */ jsxs("nav", { className: "flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] mb-10", children: [
            /* @__PURE__ */ jsx(Link, { href: "/", className: "text-muted hover:text-secondary transition-colors", children: "Portal" }),
            /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-primary/20" }),
            breadcrumb && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("span", { className: "text-muted", children: breadcrumb }),
              /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-primary/20" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-secondary", children: title })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl lg:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-dark mb-6 tracking-tight", children: title }),
          subtitle && /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-6", children: [
            /* @__PURE__ */ jsx("span", { className: "h-px w-12 bg-secondary/40" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted font-medium max-w-2xl italic leading-relaxed", children: subtitle })
          ] })
        ]
      }
    ) })
  ] });
};
export {
  PageHeader as P
};
