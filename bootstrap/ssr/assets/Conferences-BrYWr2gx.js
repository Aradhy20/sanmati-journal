import { jsx, jsxs } from "react/jsx-runtime";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { M as MainLayout } from "./MainLayout--nOC9VTu.js";
import { Globe, ShieldCheck, Calendar, MapPin, ArrowRight, Mail } from "lucide-react";
import { D as DotPattern, S as ScrollReveal, r as revealVariants, G as GridPattern, a as ScaleOnHover } from "./ScrollReveal-BS2wxcDt.js";
import "@inertiajs/react";
import "framer-motion";
import "react";
import "react-hot-toast";
function Conferences() {
  const conferences = [
    {
      title: "Global Discourse on Sustainable Development",
      date: "Nov 2026",
      location: "International Hybrid Conference",
      tag: "Upcoming"
    }
  ];
  return /* @__PURE__ */ jsx(MainLayout, { children: /* @__PURE__ */ jsxs("div", { className: "bg-warm-bg min-h-screen", children: [
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Academic Conferences",
        breadcrumb: "Events",
        subtitle: "International platforms for research dissemination"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-24 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx(DotPattern, { className: "opacity-10" }),
      /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto mt-12 relative z-10", children: /* @__PURE__ */ jsx(ScrollReveal, { variants: revealVariants.zoom, children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-sm relative overflow-hidden", children: [
        /* @__PURE__ */ jsx(GridPattern, { className: "opacity-5" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-8 opacity-5", children: /* @__PURE__ */ jsx(Globe, { className: "w-32 h-32" }) }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark mb-6", children: "International Conferences" }),
          /* @__PURE__ */ jsx("p", { className: "text-dark/80 text-lg leading-relaxed mb-12", children: "Sanmati Journal hosts and collaborates with leading universities to organize international conferences. These events provide a unique opportunity for global networking and high-impact scholarship." }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 mb-16", children: conferences.map((conf, i) => /* @__PURE__ */ jsx(ScrollReveal, { delay: i * 0.1, variants: revealVariants.left, children: /* @__PURE__ */ jsx(ScaleOnHover, { children: /* @__PURE__ */ jsx("div", { className: "p-1 border border-slate-100 rounded-[32px] bg-gradient-to-br from-blue-500 to-indigo-600 shadow-xl shadow-blue-500/10", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[31px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-grow", children: [
              /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 bg-primary/5 text-primary-dark text-[10px] font-black uppercase tracking-widest rounded-full mb-4", children: [
                /* @__PURE__ */ jsx(ShieldCheck, { className: "w-3 h-3" }),
                " Peer Reviewed"
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black text-dark mb-3 leading-tight", children: conf.title }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-5 text-sm font-bold text-gray-500", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4 text-primary" }),
                  " ",
                  conf.date
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 text-primary" }),
                  " ",
                  conf.location
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("button", { className: "shrink-0 px-8 py-4 bg-dark text-white font-black uppercase tracking-widest rounded-2xl hover:bg-slate-800 transition-all flex items-center gap-2 text-xs", children: [
              "View CFP ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
            ] })
          ] }) }) }) }, i)) }),
          /* @__PURE__ */ jsx(ScrollReveal, { variants: revealVariants.zoom, delay: 0.2, children: /* @__PURE__ */ jsxs("div", { className: "p-8 bg-warm-bg rounded-3xl border border-gray-200 relative overflow-hidden", children: [
            /* @__PURE__ */ jsx(GridPattern, { className: "opacity-5" }),
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-dark mb-4", children: "Call for Collaboration" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm leading-relaxed mb-6", children: "Are you planning an academic conference? Sanmati Journal offers publishing partnerships for special issues and conference proceedings. Join our network of institutional partners." }),
            /* @__PURE__ */ jsxs("a", { href: "mailto:sanmatijournal@gmail.com", className: "flex items-center gap-2 text-primary font-bold hover:underline", children: [
              /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }),
              " partner@sanmatijournal.com"
            ] })
          ] }) })
        ] })
      ] }) }) })
    ] })
  ] }) });
}
export {
  Conferences as default
};
