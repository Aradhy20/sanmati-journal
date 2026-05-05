import { jsx, jsxs } from "react/jsx-runtime";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { M as MainLayout } from "./MainLayout-CB7w1Kzm.js";
import { Cpu, BookOpen, ArrowRight, Clock, MapPin } from "lucide-react";
import { D as DotPattern, S as ScrollReveal, r as revealVariants, G as GridPattern } from "./ScrollReveal-BS2wxcDt.js";
import "@inertiajs/react";
import "framer-motion";
import "react";
import "react-hot-toast";
function Workshop() {
  return /* @__PURE__ */ jsx(MainLayout, { children: /* @__PURE__ */ jsxs("div", { className: "bg-warm-bg min-h-screen", children: [
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Academic Workshops",
        breadcrumb: "Events",
        subtitle: "Practical skills for modern researchers"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-24 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx(DotPattern, { className: "opacity-10" }),
      /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto mt-12 relative z-10", children: /* @__PURE__ */ jsx(ScrollReveal, { variants: revealVariants.zoom, children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-sm relative overflow-hidden", children: [
        /* @__PURE__ */ jsx(GridPattern, { className: "opacity-5" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-8 opacity-5", children: /* @__PURE__ */ jsx(Cpu, { className: "w-32 h-32" }) }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark mb-6", children: "Hands-on Workshops" }),
          /* @__PURE__ */ jsx("p", { className: "text-dark/80 text-lg leading-relaxed mb-12", children: "Our workshops are designed to bridge the gap between theory and practice. We provide intensive training on research tools, publication ethics, and academic writing to empower the next generation of scholars." }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-16", children: [
            /* @__PURE__ */ jsx(ScrollReveal, { variants: revealVariants.zoom, delay: 0.1, children: /* @__PURE__ */ jsxs("div", { className: "group p-8 bg-warm-bg rounded-[32px] border border-gray-200 hover:bg-white hover:shadow-2xl hover:border-blue-300 transition-all duration-300 relative overflow-hidden h-full", children: [
              /* @__PURE__ */ jsx(GridPattern, { className: "opacity-0 group-hover:opacity-5 transition-opacity" }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(BookOpen, { className: "w-7 h-7" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-dark mb-3", children: "Academic Writing" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm leading-relaxed mb-6", children: "Master the art of structuring research papers and navigating the peer-review process." }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest", children: [
                  "Learn More ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx(ScrollReveal, { variants: revealVariants.zoom, delay: 0.2, children: /* @__PURE__ */ jsxs("div", { className: "group p-8 bg-warm-bg rounded-[32px] border border-gray-200 hover:bg-white hover:shadow-2xl hover:border-blue-300 transition-all duration-300 relative overflow-hidden h-full", children: [
              /* @__PURE__ */ jsx(GridPattern, { className: "opacity-0 group-hover:opacity-5 transition-opacity" }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(Cpu, { className: "w-7 h-7" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-dark mb-3", children: "Data Analysis" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm leading-relaxed mb-6", children: "Comprehensive training on statistical tools and qualitative data analysis software." }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest", children: [
                  "Learn More ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                ] })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx(ScrollReveal, { variants: revealVariants.zoom, delay: 0.3, children: /* @__PURE__ */ jsxs("div", { className: "p-10 bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-[40px] relative overflow-hidden group", children: [
            /* @__PURE__ */ jsx(GridPattern, { className: "opacity-20 group-hover:scale-110 transition-transform duration-1000" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col md:flex-row items-center justify-between gap-10", children: [
              /* @__PURE__ */ jsxs("div", { className: "max-w-md", children: [
                /* @__PURE__ */ jsx("h4", { className: "text-2xl font-bold mb-4", children: "Upcoming Session" }),
                /* @__PURE__ */ jsx("p", { className: "text-blue-100 text-sm leading-relaxed mb-6", children: "“Mastering APA 7th Edition & Reference Management Tools” — A 3-hour intensive workshop for doctoral students." }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 text-xs font-bold", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
                    " 10:00 AM - 1:00 PM"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4" }),
                    " Online via Zoom"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx("button", { className: "shrink-0 px-8 py-4 bg-white text-dark font-bold rounded-full hover:bg-primary/5 transition-all shadow-xl", children: "Register Now" })
            ] })
          ] }) })
        ] })
      ] }) }) })
    ] })
  ] }) });
}
export {
  Workshop as default
};
