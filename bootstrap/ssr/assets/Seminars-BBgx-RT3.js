import { jsx, jsxs } from "react/jsx-runtime";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { M as MainLayout } from "./MainLayout-DnA_ZOa1.js";
import { Users, Calendar, MapPin, ArrowRight, Mail } from "lucide-react";
import { D as DotPattern, S as ScrollReveal, r as revealVariants, G as GridPattern, a as ScaleOnHover } from "./ScrollReveal-BS2wxcDt.js";
import "@inertiajs/react";
import "framer-motion";
import "react";
import "react-hot-toast";
function Seminars() {
  return /* @__PURE__ */ jsx(MainLayout, { children: /* @__PURE__ */ jsxs("div", { className: "bg-warm-bg min-h-screen", children: [
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Academic Seminars",
        breadcrumb: "Events",
        subtitle: "Fostering academic dialogue through specialized seminars"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-24 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx(DotPattern, { className: "opacity-10" }),
      /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto mt-12 relative z-10", children: /* @__PURE__ */ jsx(ScrollReveal, { variants: revealVariants.zoom, children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-sm relative overflow-hidden", children: [
        /* @__PURE__ */ jsx(GridPattern, { className: "opacity-5" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-8 opacity-5", children: /* @__PURE__ */ jsx(Users, { className: "w-32 h-32" }) }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark mb-6", children: "Upcoming Seminars" }),
          /* @__PURE__ */ jsx("p", { className: "text-dark/80 text-lg leading-relaxed mb-12", children: "Sanmati Journal regularly organizes seminars focusing on emerging trends in multidisciplinary research, providing a platform for scholars to present their work-in-progress and receive expert feedback." }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsx(ScrollReveal, { variants: revealVariants.left, children: /* @__PURE__ */ jsx(ScaleOnHover, { children: /* @__PURE__ */ jsxs("div", { className: "p-8 bg-primary/5 rounded-3xl border border-blue-100 relative group overflow-hidden", children: [
              /* @__PURE__ */ jsx(GridPattern, { className: "opacity-10" }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "inline-block px-3 py-1 bg-primary/10 text-primary-dark text-xs font-bold rounded-full mb-3 uppercase tracking-wider", children: "National Level" }),
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-dark mb-2", children: "Research Methodology & Ethics" }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 text-sm text-gray-500 font-medium", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
                      " To be announced"
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4" }),
                      " Virtual Event"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("button", { className: "px-6 py-2.5 bg-blue-900 text-white font-bold rounded-full hover:bg-blue-800 transition-all flex items-center justify-center gap-2", children: [
                  "Notify Me ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                ] })
              ] })
            ] }) }) }),
            /* @__PURE__ */ jsx("div", { className: "p-8 bg-warm-bg rounded-3xl border border-gray-200 border-dashed text-center", children: /* @__PURE__ */ jsx("p", { className: "text-gray-500 font-medium italic", children: "More events coming soon for 2026 academic calendar." }) })
          ] }),
          /* @__PURE__ */ jsx(ScrollReveal, { variants: revealVariants.zoom, delay: 0.2, children: /* @__PURE__ */ jsxs("div", { className: "mt-16 p-8 bg-dark text-white rounded-3xl relative overflow-hidden", children: [
            /* @__PURE__ */ jsx(GridPattern, { className: "opacity-10" }),
            /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold mb-4 relative z-10", children: "Want to Host a Seminar?" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-8 relative z-10", children: "If your institution is interested in collaborating with Sanmati Journal for an academic seminar, please reach out to our event coordination team." }),
            /* @__PURE__ */ jsxs("a", { href: "mailto:sanmatijournal@gmail.com", className: "inline-flex items-center gap-2 text-primary-light font-bold hover:text-blue-300 transition-colors relative z-10", children: [
              /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5" }),
              " contact@sanmatijournal.com"
            ] })
          ] }) })
        ] })
      ] }) }) })
    ] })
  ] }) });
}
export {
  Seminars as default
};
