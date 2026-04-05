import { jsx, jsxs } from "react/jsx-runtime";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { M as MainLayout } from "./MainLayout-DnA_ZOa1.js";
import { Banknote, CheckCircle2, CreditCard, Users, Mail, ArrowRight } from "lucide-react";
import { Link } from "@inertiajs/react";
import { D as DotPattern, S as ScrollReveal, r as revealVariants, G as GridPattern, a as ScaleOnHover } from "./ScrollReveal-BS2wxcDt.js";
import "framer-motion";
import "react";
import "react-hot-toast";
function PublicationCharges() {
  return /* @__PURE__ */ jsx(MainLayout, { children: /* @__PURE__ */ jsxs("div", { className: "bg-warm-bg min-h-screen", children: [
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Publication Charges",
        breadcrumb: "Submission",
        subtitle: "Processing Fee & Payment Details"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-24 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx(DotPattern, { className: "opacity-10" }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto mt-12 relative z-10", children: [
        /* @__PURE__ */ jsx(ScrollReveal, { variants: revealVariants.zoom, children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-sm relative overflow-hidden", children: [
          /* @__PURE__ */ jsx(GridPattern, { className: "opacity-5" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-8 opacity-5", children: /* @__PURE__ */ jsx(Banknote, { className: "w-32 h-32" }) }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark mb-8", children: "Publication Fees" }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-6 lg:gap-12 items-stretch", children: [
              /* @__PURE__ */ jsx(ScrollReveal, { variants: revealVariants.left, className: "w-full md:w-1/2", children: /* @__PURE__ */ jsxs("div", { className: "h-full p-10 bg-blue-900 text-white rounded-3xl shadow-xl shadow-blue-900/20 flex flex-col justify-between relative overflow-hidden group", children: [
                /* @__PURE__ */ jsx(GridPattern, { className: "opacity-20 group-hover:scale-110 transition-transform duration-1000" }),
                /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-blue-300 text-sm font-bold uppercase tracking-widest mb-4", children: "Registration Fee" }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-2 mb-8", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-4xl lg:text-6xl font-black italic", children: "₹1200" }),
                    /* @__PURE__ */ jsx("span", { className: "text-primary-light text-lg font-medium", children: "/ Per Issue" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
                    "Online open-access publication",
                    "Detailed peer review process",
                    "DOI and Indexing services",
                    "Certificate of Publication"
                  ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-emerald-400 shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "opacity-90", children: item })
                  ] }, i)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "relative z-10 mt-12 p-5 bg-blue-800/50 rounded-2xl border border-blue-700/50", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-blue-200 uppercase font-bold mb-1", children: "Status" }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" }),
                    /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Active for Vol 1, Issue 1" })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxs(ScrollReveal, { variants: revealVariants.right, className: "w-full md:w-1/2 space-y-10 py-4", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "flex items-center gap-3 text-xl font-bold text-dark mb-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-2 bg-primary/10 rounded-lg text-primary", children: /* @__PURE__ */ jsx(CreditCard, { className: "w-6 h-6" }) }),
                    "Payment Mode"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3 pl-14", children: [
                    /* @__PURE__ */ jsxs("p", { className: "text-dark/80 flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-primary rounded-full" }),
                      /* @__PURE__ */ jsx("span", { className: "font-bold", children: "PhonePe" })
                    ] }),
                    /* @__PURE__ */ jsxs("p", { className: "text-dark/80 flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-primary rounded-full" }),
                      /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Google Pay" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "flex items-center gap-3 text-xl font-bold text-dark mb-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-2 bg-primary/10 rounded-lg text-primary", children: /* @__PURE__ */ jsx(Users, { className: "w-6 h-6" }) }),
                    "In the name of"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "pl-14", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl lg:text-3xl font-black italic text-dark leading-none", children: "NAMRTA" }),
                    /* @__PURE__ */ jsxs("div", { className: "mt-6 p-4 bg-amber-50 rounded-2xl border border-amber-100 flex items-start gap-3 relative overflow-hidden", children: [
                      /* @__PURE__ */ jsx(GridPattern, { className: "opacity-5" }),
                      /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5 text-amber-600 shrink-0 mt-0.5 relative z-10" }),
                      /* @__PURE__ */ jsxs("p", { className: "text-xs text-amber-800 leading-relaxed font-medium relative z-10", children: [
                        "After payment, please send the transaction screenshot along with your manuscript to ",
                        /* @__PURE__ */ jsx("strong", { className: "text-amber-900", children: "sanmatijournal@gmail.com" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 flex justify-between items-center px-4", children: [
          /* @__PURE__ */ jsx(ScaleOnHover, { children: /* @__PURE__ */ jsxs(Link, { href: "/submission-guidelines/important-info", className: "flex items-center gap-2 text-gray-500 hover:text-dark font-bold transition-all group", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-blue-900", children: /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 rotate-180" }) }),
            "Important Info"
          ] }) }),
          /* @__PURE__ */ jsx(ScaleOnHover, { children: /* @__PURE__ */ jsxs(Link, { href: "/contact", className: "flex items-center gap-2 text-gray-500 hover:text-dark font-bold transition-all group", children: [
            "Contact Us",
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-blue-900", children: /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" }) })
          ] }) })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  PublicationCharges as default
};
