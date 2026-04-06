import { jsx, jsxs } from "react/jsx-runtime";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { M as MainLayout } from "./MainLayout-CB7w1Kzm.js";
import { ShieldCheck, Scale, FileCheck } from "lucide-react";
import { G as GridPattern, S as ScrollReveal, r as revealVariants } from "./ScrollReveal-BS2wxcDt.js";
import "@inertiajs/react";
import "framer-motion";
import "react";
import "react-hot-toast";
function Ethics() {
  return /* @__PURE__ */ jsx(MainLayout, { children: /* @__PURE__ */ jsxs("div", { className: "bg-warm-bg min-h-screen relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 opacity-10 pointer-events-none", children: /* @__PURE__ */ jsx(GridPattern, { className: "w-[600px] h-[600px]" }) }),
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Publication Ethics",
        breadcrumb: "Policy",
        subtitle: "Commitment to integrity, fairness, and academic standards"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-24 relative z-10", children: /* @__PURE__ */ jsx(ScrollReveal, { variants: revealVariants.up, children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto space-y-12 mt-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white p-10 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-2 h-full bg-primary" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-primary/5 rounded-xl text-primary-dark ring-1 ring-blue-100", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "w-8 h-8" }) }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-serif font-bold text-dark", children: "Ethical Standards" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-dark/80 leading-relaxed mb-8 text-lg", children: [
          "Sanmati Spectrum of Knowledge & Emerging Discourse is committed to the highest standards of academic quality and research integrity. We strictly adhere to the guidelines set by the ",
          /* @__PURE__ */ jsx("strong", { children: "Committee on Publication Ethics (COPE)" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: ["Fairness", "Transparency", "Objectivity", "Accountability"].map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 p-4 bg-warm-bg rounded-xl border border-slate-100 hover:border-primary/20 transition-colors", children: [
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]" }),
          /* @__PURE__ */ jsx("span", { className: "font-bold text-dark/80", children: item })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsx(ScrollReveal, { delay: 0.1, variants: revealVariants.left, className: "h-full", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-2xl border border-slate-100 shadow-lg h-full hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 text-primary bg-primary/5 w-fit p-3 rounded-xl", children: /* @__PURE__ */ jsx(Scale, { className: "w-8 h-8" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-dark mb-3", children: "Misconduct Policy" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: "Any form of research misconduct, including fabrication, falsification, or ethical breaches, is examined strictly. We reserve the right to reject or retract any such manuscript." })
        ] }) }),
        /* @__PURE__ */ jsx(ScrollReveal, { delay: 0.2, variants: revealVariants.right, className: "h-full", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-2xl border border-slate-100 shadow-lg h-full hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 text-emerald-600 bg-emerald-50 w-fit p-3 rounded-xl", children: /* @__PURE__ */ jsx(FileCheck, { className: "w-8 h-8" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-dark mb-3", children: "Author Responsibility" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: "Authors must ensure their work is original and not under consideration elsewhere. Proper citation and acknowledgment of sources are mandatory." })
        ] }) })
      ] })
    ] }) }) })
  ] }) });
}
export {
  Ethics as default
};
