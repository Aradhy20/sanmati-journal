import { jsx, jsxs } from "react/jsx-runtime";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { M as MainLayout } from "./MainLayout-3fyI-IZY.js";
import { Send, FileSearch, ShieldCheck, CheckCircle2 } from "lucide-react";
import { G as GridPattern, S as ScrollReveal, r as revealVariants } from "./ScrollReveal-BS2wxcDt.js";
import "@inertiajs/react";
import "framer-motion";
import "react";
import "react-hot-toast";
function PeerReview() {
  return /* @__PURE__ */ jsx(MainLayout, { children: /* @__PURE__ */ jsxs("div", { className: "bg-warm-bg min-h-screen relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 opacity-10 pointer-events-none", children: /* @__PURE__ */ jsx(GridPattern, { className: "w-[600px] h-[600px]" }) }),
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Editorial & Peer Review Process",
        breadcrumb: "Policy",
        subtitle: "Transparent, systematic, and rigorous standard"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-24 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto space-y-12 mt-12", children: [
      /* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsx("section", { className: "text-center mb-16", children: /* @__PURE__ */ jsx("p", { className: "text-xl text-dark/80 leading-relaxed font-serif max-w-2xl mx-auto text-dark/80", children: '"Sanmati Spectrum of Knowledge & Emerging Discourse follows a transparent, systematic, and rigorous editorial and peer review process to maintain high academic standards."' }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-8 relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-8 top-8 bottom-8 w-0.5 bg-slate-200 hidden md:block" }),
        [
          { icon: Send, title: "Submission Process", content: ["Manuscripts are submitted via email to <strong class='text-dark'>sanmatijournal@gmail.com</strong>.", "Initial screening is conducted for scope, format, and plagiarism."], color: "text-primary", bg: "bg-primary/5" },
          { icon: FileSearch, title: "Editorial Screening", content: ["The Editor-in-Chief and Editors assess manuscripts for relevance, originality, and academic quality.", "Manuscripts not meeting basic criteria may be rejected at this stage."], color: "text-primary", bg: "bg-primary/5" },
          { icon: ShieldCheck, title: "Peer Review Process", content: ["Suitable manuscripts undergo <strong>Double-Blind Peer Review</strong>, ensuring anonymity of authors and reviewers.", "Reviewers evaluate originality, methodology, clarity, relevance, and contribution to knowledge.", "Review comments and revision suggestions are shared with authors, where applicable."], color: "text-secondary", bg: "bg-primary/5" },
          { icon: CheckCircle2, title: "Editorial Decision", content: "Based on reviewers’ reports, manuscripts may be:", type: "decision", color: "text-emerald-600", bg: "bg-emerald-50" },
          { icon: FileSearch, title: "Revision & Acceptance", content: ["Revised manuscripts must be submitted within the stipulated timeframe.", "Final acceptance is granted after satisfactory compliance with reviewer comments."], color: "text-amber-600", bg: "bg-amber-50" },
          { icon: Send, title: "Publication", content: ["Accepted manuscripts are scheduled for publication in the forthcoming issue.", "Authors are informed of publication details via email."], color: "text-cyan-600", bg: "bg-cyan-50" }
        ].map((step, index) => {
          const Icon = step.icon;
          return /* @__PURE__ */ jsx(ScrollReveal, { delay: index * 0.1, variants: revealVariants.left, children: /* @__PURE__ */ jsxs("div", { className: "relative pl-0 md:pl-24", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-6 w-16 h-16 bg-white rounded-full border-4 border-slate-50 shadow-lg hidden md:flex items-center justify-center z-10", children: /* @__PURE__ */ jsxs("span", { className: "text-xl font-black text-slate-300", children: [
              "0",
              index + 1
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow relative overflow-hidden group", children: [
              /* @__PURE__ */ jsx("div", { className: `absolute top-0 right-0 w-32 h-32 ${step.bg} rounded-bl-[100px] opacity-50 transition-transform group-hover:scale-110` }),
              /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-dark mb-4 flex items-center gap-3 relative z-10", children: [
                /* @__PURE__ */ jsx("div", { className: `p-2 ${step.bg} rounded-lg ${step.color}`, children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5" }) }),
                step.title
              ] }),
              step.type === "decision" ? /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                /* @__PURE__ */ jsx("p", { className: "mb-4 text-dark/80", children: step.content }),
                /* @__PURE__ */ jsxs("ul", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-bold text-dark", children: [
                  /* @__PURE__ */ jsxs("li", { className: "bg-green-50 px-4 py-3 rounded-xl border border-green-100 text-green-700 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-green-500 rounded-full" }),
                    "Accepted"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "bg-yellow-50 px-4 py-3 rounded-xl border border-yellow-100 text-yellow-700 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-yellow-500 rounded-full" }),
                    "Minor Revisions"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "bg-orange-50 px-4 py-3 rounded-xl border border-orange-100 text-orange-700 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-orange-500 rounded-full" }),
                    "Major Revisions"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "bg-red-50 px-4 py-3 rounded-xl border border-red-100 text-red-700 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-red-500 rounded-full" }),
                    "Rejected"
                  ] })
                ] })
              ] }) : /* @__PURE__ */ jsx("ul", { className: "list-disc pl-6 space-y-3 text-gray-600 relative z-10", children: step.content.map((line, i) => /* @__PURE__ */ jsx("li", { dangerouslySetInnerHTML: { __html: line } }, i)) }),
              /* @__PURE__ */ jsxs("div", { className: "absolute top-4 right-4 text-2xl md:text-3xl lg:text-4xl font-black text-slate-100 md:hidden", children: [
                "0",
                index + 1
              ] })
            ] })
          ] }) }, index);
        }),
        /* @__PURE__ */ jsx(ScrollReveal, { delay: 0.6, variants: revealVariants.up, children: /* @__PURE__ */ jsx("div", { className: "mt-12 md:pl-24", children: /* @__PURE__ */ jsxs("div", { className: "bg-blue-900 text-white p-8 rounded-3xl shadow-xl text-center relative overflow-hidden", children: [
          /* @__PURE__ */ jsx(GridPattern, { className: "opacity-10 absolute inset-0" }),
          /* @__PURE__ */ jsx("p", { className: "relative z-10 font-bold text-lg md:text-xl", children: "The journal ensures fairness, confidentiality, and academic integrity at every stage of the editorial and peer review process." })
        ] }) }) })
      ] })
    ] }) })
  ] }) });
}
export {
  PeerReview as default
};
