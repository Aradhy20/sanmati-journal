import { jsx, jsxs } from "react/jsx-runtime";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { M as MainLayout } from "./MainLayout-DpDjnVwe.js";
import { ShieldCheck, Clock, CheckCircle2, ArrowRight, Send, FileSearch, RefreshCcw, BookOpen } from "lucide-react";
import { Link } from "@inertiajs/react";
import "react";
import "framer-motion";
import "react-hot-toast";
function ReviewProcess() {
  const steps = [
    {
      title: "Submission Process",
      desc: "Manuscripts are submitted via email to sanmatijournal@gmail.com. Initial screening is conducted for scope, format, and plagiarism.",
      icon: /* @__PURE__ */ jsx(Send, { className: "w-6 h-6" })
    },
    {
      title: "Editorial Screening",
      desc: "The Editor-in-Chief and Editors assess manuscripts for relevance, originality, and academic quality. Manuscripts not meeting basic criteria may be rejected at this stage.",
      icon: /* @__PURE__ */ jsx(FileSearch, { className: "w-6 h-6" })
    },
    {
      title: "Peer Review Process",
      desc: "Suitable manuscripts undergo Double-Blind Peer Review, ensuring anonymity of authors and reviewers. Reviewers evaluate originality, methodology, clarity, relevance, and contribution to knowledge.",
      icon: /* @__PURE__ */ jsx(ShieldCheck, { className: "w-6 h-6" })
    },
    {
      title: "Editorial Decision",
      desc: "Based on reviewers’ reports, manuscripts may be: Accepted, Accepted with minor revisions, Accepted with major revisions, or Rejected.",
      icon: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-6 h-6" })
    },
    {
      title: "Revision & Acceptance",
      desc: "Revised manuscripts must be submitted within the stipulated timeframe. Final acceptance is granted after satisfactory compliance with reviewer comments.",
      icon: /* @__PURE__ */ jsx(RefreshCcw, { className: "w-6 h-6" })
    },
    {
      title: "Publication",
      desc: "Accepted manuscripts are scheduled for publication in the forthcoming issue. Authors are informed of publication details via email.",
      icon: /* @__PURE__ */ jsx(BookOpen, { className: "w-6 h-6" })
    }
  ];
  return /* @__PURE__ */ jsx(MainLayout, { children: /* @__PURE__ */ jsxs("div", { className: "bg-warm-bg min-h-screen", children: [
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Editorial & Peer Review",
        breadcrumb: "Submission",
        subtitle: "Transparent, systematic, and rigorous standard"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto mt-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-sm relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-8 opacity-5", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "w-32 h-32" }) }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark mb-6", children: "Our Review Standards" }),
          /* @__PURE__ */ jsx("p", { className: "text-dark/80 text-lg leading-relaxed mb-16 max-w-2xl", children: "Sanmati Spectrum of Knowledge & Emerging Discourse follows a transparent, systematic, and rigorous editorial and peer review process to maintain high academic standards." }),
          /* @__PURE__ */ jsx("div", { className: "space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-200 before:to-transparent", children: steps.map((step, i) => /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-12 h-12 rounded-2xl border border-white bg-blue-900 text-white shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:scale-110 transition-transform duration-300", children: step.icon }),
            /* @__PURE__ */ jsxs("div", { className: "w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl bg-warm-bg border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group", children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 mb-2", children: /* @__PURE__ */ jsxs("span", { className: "text-xs font-black text-primary uppercase tracking-widest", children: [
                "Step ",
                i + 1
              ] }) }),
              /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-dark mb-3 group-hover:text-dark transition-colors", children: step.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: step.desc })
            ] })
          ] }, i)) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-20 p-8 bg-dark text-white rounded-3xl text-center relative overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-primary/10 animate-pulse" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsx("p", { className: "text-lg font-serif italic mb-6", children: '"Ensuring fairness, confidentiality, and academic integrity at every stage."' }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-6 text-sm opacity-70", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4" }),
                  " Double-Blind"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
                  " Systematic"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4" }),
                  " Rigorous"
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 flex justify-start", children: /* @__PURE__ */ jsxs(Link, { href: "/submission-guidelines/publication-charges", className: "flex items-center gap-2 text-gray-500 hover:text-dark font-bold transition-all group", children: [
        /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-blue-900", children: /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 rotate-180" }) }),
        "Publication Charges"
      ] }) })
    ] }) })
  ] }) });
}
export {
  ReviewProcess as default
};
