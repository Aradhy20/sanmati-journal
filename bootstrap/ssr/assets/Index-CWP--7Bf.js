import { jsx, jsxs } from "react/jsx-runtime";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { M as MainLayout } from "./MainLayout-xD0Rcxqj.js";
import { ArrowRight, Mail, Calendar, Search, FileText, Banknote, MapPin, ShieldCheck } from "lucide-react";
import { Link } from "@inertiajs/react";
import { D as DotPattern, S as ScrollReveal, r as revealVariants, G as GridPattern, F as FloatingGraphic } from "./ScrollReveal-BS2wxcDt.js";
import "framer-motion";
import "react";
import "react-hot-toast";
function SubmissionGuidelines() {
  const sections = [
    {
      title: "Call for Papers",
      description: "Volume 1, Issue 1 | January–March 2026. Inviting original, unpublished research.",
      icon: /* @__PURE__ */ jsx(Calendar, { className: "w-6 h-6 text-primary" }),
      href: "/submission-guidelines/call-for-papers",
      color: "blue"
    },
    {
      title: "Areas of Submission",
      description: "Multidisciplinary scope covering Arts, Science, Tech, Law, Medicine, and more.",
      icon: /* @__PURE__ */ jsx(Search, { className: "w-6 h-6 text-secondary" }),
      href: "/submission-guidelines/areas",
      color: "purple"
    },
    {
      title: "Important Information",
      description: "Detailed formatting rules, language requirements, and submission checklist.",
      icon: /* @__PURE__ */ jsx(FileText, { className: "w-6 h-6 text-emerald-600" }),
      href: "/submission-guidelines/important-info",
      color: "emerald"
    },
    {
      title: "Publication Charges",
      description: "Processing fee details, payment modes, and registration information.",
      icon: /* @__PURE__ */ jsx(Banknote, { className: "w-6 h-6 text-amber-600" }),
      href: "/submission-guidelines/publication-charges",
      color: "amber"
    },
    {
      title: "Contact Us",
      description: "Reach our Editorial Office - Dr. Namrta Jain for any submission queries.",
      icon: /* @__PURE__ */ jsx(MapPin, { className: "w-6 h-6 text-rose-600" }),
      href: "/contact",
      color: "rose"
    },
    {
      title: "Editorial & Review Process",
      description: "Transparent Double-Blind Peer Review process and publication stages.",
      icon: /* @__PURE__ */ jsx(ShieldCheck, { className: "w-6 h-6 text-primary" }),
      href: "/submission-guidelines/review-process",
      color: "indigo"
    }
  ];
  return /* @__PURE__ */ jsx(MainLayout, { children: /* @__PURE__ */ jsxs("div", { className: "bg-warm-bg min-h-screen", children: [
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Submission Guidelines",
        breadcrumb: "Guidelines",
        subtitle: "Complete framework for authors and researchers"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto mt-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsx(DotPattern, { className: "opacity-10" }),
        sections.map((section, idx) => /* @__PURE__ */ jsx(ScrollReveal, { delay: idx * 0.1, variants: revealVariants.zoom, children: /* @__PURE__ */ jsxs(
          Link,
          {
            href: section.href,
            className: "group bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col h-full relative overflow-hidden",
            children: [
              /* @__PURE__ */ jsx(GridPattern, { className: "opacity-0 group-hover:opacity-5 transition-opacity" }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full", children: [
                /* @__PURE__ */ jsx("div", { className: "flex items-start justify-between mb-6", children: /* @__PURE__ */ jsx("div", { className: "p-4 bg-warm-bg rounded-2xl group-hover:bg-primary/5 transition-colors", children: /* @__PURE__ */ jsx(FloatingGraphic, { delay: idx * 0.2, children: section.icon }) }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-dark mb-3 flex items-center gap-2 group-hover:text-dark transition-colors", children: section.title }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm leading-relaxed mb-8 flex-grow", children: section.description }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all", children: [
                  "View Details ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                ] })
              ] })
            ]
          }
        ) }, idx))
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-16 p-10 bg-dark text-white rounded-3xl shadow-2xl relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-primary rounded-full -mr-32 -mt-32 opacity-20" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col md:flex-row items-center justify-between gap-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "max-w-2xl text-center md:text-left", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-2xl lg:text-3xl font-serif font-bold mb-4", children: "Ready to Submit Your Research?" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400 leading-relaxed italic", children: "“Researchers, academicians, and scholars are encouraged to contribute and be part of this multidisciplinary academic discourse.”" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4 w-full md:w-auto", children: /* @__PURE__ */ jsxs("a", { href: "mailto:sanmatijournal@gmail.com", className: "px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary transition-all flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5" }),
            " Submit via Email"
          ] }) })
        ] })
      ] })
    ] }) })
  ] }) });
}
export {
  SubmissionGuidelines as default
};
