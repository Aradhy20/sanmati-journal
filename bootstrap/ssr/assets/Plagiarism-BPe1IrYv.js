import { jsx, jsxs } from "react/jsx-runtime";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { M as MainLayout } from "./MainLayout-CJx8SN4D.js";
import { AlertTriangle } from "lucide-react";
import { G as GridPattern, S as ScrollReveal, r as revealVariants } from "./ScrollReveal-BS2wxcDt.js";
import "@inertiajs/react";
import "framer-motion";
import "react";
import "react-hot-toast";
function Plagiarism() {
  return /* @__PURE__ */ jsx(MainLayout, { children: /* @__PURE__ */ jsxs("div", { className: "bg-warm-bg min-h-screen relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 opacity-10 pointer-events-none", children: /* @__PURE__ */ jsx(GridPattern, { className: "w-[600px] h-[600px]" }) }),
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Plagiarism Policy",
        breadcrumb: "Policy",
        subtitle: "Zero-tolerance policy towards academic dishonesty"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-24 relative z-10", children: /* @__PURE__ */ jsx(ScrollReveal, { variants: revealVariants.up, children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-10 rounded-2xl shadow-xl border border-slate-100 max-w-4xl mx-auto text-center mt-12 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-orange-500" }),
      /* @__PURE__ */ jsx("div", { className: "inline-block p-4 bg-red-50 rounded-full text-red-600 mb-6 ring-4 ring-red-50/50", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "w-12 h-12" }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark mb-6", children: "Strict Screening Process" }),
      /* @__PURE__ */ jsx("p", { className: "text-dark/80 text-lg leading-relaxed mb-8", children: "The journal follows a strict zero-tolerance policy. All submissions are screened using industry-standard plagiarism detection software before the review process begins." }),
      /* @__PURE__ */ jsxs("div", { className: "inline-block bg-warm-bg p-8 rounded-2xl border-2 border-dashed border-gray-200 mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "text-4xl lg:text-6xl font-black text-dark mb-2 tracking-tighter", children: "20%" }),
        /* @__PURE__ */ jsx("div", { className: "text-primary font-bold uppercase tracking-widest text-xs", children: "Maximum Similarity Index" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 mt-2 font-medium", children: "(Excluding References)" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-red-50 border border-red-100 rounded-xl p-4 text-red-800 text-sm font-medium", children: [
        "Manuscripts exceeding this limit will be ",
        /* @__PURE__ */ jsx("strong", { className: "text-red-900 underline decoration-red-300 decoration-2 underline-offset-2", children: "summarily rejected" }),
        " without peer review."
      ] })
    ] }) }) })
  ] }) });
}
export {
  Plagiarism as default
};
