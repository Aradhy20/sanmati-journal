import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Info, Copyright, Lock, Shield, FileCheck, AlertCircle, Share2, ChevronRight, Scale } from "lucide-react";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { M as MainLayout, S as Seo } from "./MainLayout-EqZlJ2m3.js";
import "@inertiajs/react";
import "react";
import "react-hot-toast";
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};
const PolicyCard = ({ icon: Icon, title, desc, colorClass, delay }) => /* @__PURE__ */ jsxs(
  motion.div,
  {
    ...fadeInUp,
    transition: { delay },
    className: "group relative h-full bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 overflow-hidden",
    children: [
      /* @__PURE__ */ jsx("div", { className: `absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-1000` }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full", children: [
        /* @__PURE__ */ jsx("div", { className: `w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg mb-8 ${colorClass}`, children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-white" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif font-bold text-dark mb-4 group-hover:text-primary transition-colors duration-300", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted text-sm leading-relaxed mb-10 flex-1 font-medium italic opacity-80", children: desc }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.2em] text-dark/30 group-hover:text-primary transition-colors", children: [
          /* @__PURE__ */ jsx(Scale, { className: "w-3.5 h-3.5" }),
          " Compliance Node ",
          delay * 10
        ] })
      ] })
    ]
  }
);
function Compliance() {
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: "Legal & Compliance Registry",
        description: "Our commitment to ethical scholarly dissemination, including Open Access, Copyright, and Plagiarism policies."
      }
    ),
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Legal Registry",
        breadcrumb: "Compliance",
        subtitle: "The ethical framework ensuring transparency & integrity across our multidisciplinary publications."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24 relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-12 lg:mb-24", children: [
        /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "lg:col-span-12 xl:col-span-7", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
            /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-primary" }),
            /* @__PURE__ */ jsx("span", { className: "text-primary font-black text-[11px] uppercase tracking-[0.4em]", children: "Policy Protocol" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl lg:text-4xl md:text-5xl font-serif font-bold text-dark mb-8 leading-tight", children: [
            "Publishing with ",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-secondary italic", children: "Ethical Precision" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted font-medium leading-relaxed max-w-xl", children: "Sanmati Journal adheres to international standards of scholarly publishing. Our goal is to protect intellectual property while maximizing global accessibility." })
        ] }),
        /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "lg:col-span-12 xl:col-span-5 bg-surface p-8 rounded-[3rem] border border-gray-100 flex items-start gap-6", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Info, { className: "w-6 h-6 text-primary" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-dark text-sm mb-2", children: "Notice for Authors" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted text-xs leading-relaxed", children: "All submissions are strictly peer-reviewed. Adherence to these guidelines is mandatory for initial screening." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsx(
          PolicyCard,
          {
            icon: Copyright,
            colorClass: "bg-primary",
            title: "Intellectual Property",
            desc: "Authors retain full copyright under the CC BY-NC 4.0 license. We protect the right of first publication while ensuring authorship remains the cornerstone of the work.",
            delay: 0.1
          }
        ),
        /* @__PURE__ */ jsx(
          PolicyCard,
          {
            icon: Lock,
            colorClass: "bg-secondary",
            title: "Open Access Protocol",
            desc: "Empowering the global community with immediate, unrestricted access to scholarly research without financial barriers or subscription delays.",
            delay: 0.2
          }
        ),
        /* @__PURE__ */ jsx(
          PolicyCard,
          {
            icon: Shield,
            colorClass: "bg-dark",
            title: "Integrity & Screening",
            desc: "Zero-tolerance for plagiarism. All manuscripts undergo high-rigidity screening via Turnitin. A similarity index below 20% is non-negotiable.",
            delay: 0.3
          }
        ),
        /* @__PURE__ */ jsx(
          PolicyCard,
          {
            icon: FileCheck,
            colorClass: "bg-emerald-600",
            title: "Author Declaration",
            desc: "A formal verification of originality. Authors must affirm the absence of conflict and the uniqueness of their empirical findings prior to review.",
            delay: 0.4
          }
        ),
        /* @__PURE__ */ jsx(
          PolicyCard,
          {
            icon: AlertCircle,
            colorClass: "bg-orange-600",
            title: "Discourse Transparency",
            desc: "Full disclosure of funding and personal relationships is required to ensure the neutrality and credibility of published academic discourse.",
            delay: 0.5
          }
        ),
        /* @__PURE__ */ jsx(
          PolicyCard,
          {
            icon: Share2,
            colorClass: "bg-blue-600",
            title: "Global Dissemination",
            desc: "Materials can be shared and adapted for non-commercial use, provided the original academic lineage is properly attributed to the authors.",
            delay: 0.6
          }
        )
      ] }),
      /* @__PURE__ */ jsx(motion.div, { ...fadeInUp, className: "mt-12 lg:mt-24", children: /* @__PURE__ */ jsxs("div", { className: "relative rounded-[4rem] overflow-hidden bg-dark p-6 lg:p-12 lg:p-20 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 lg:max-w-xl text-center lg:text-left", children: [
          /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[10px] uppercase tracking-[0.4em] mb-6 block", children: "Expert Guidance" }),
          /* @__PURE__ */ jsxs("h3", { className: "text-xl md:text-2xl lg:text-3xl md:text-4xl font-serif font-bold text-white mb-6", children: [
            "Clarifications on ",
            /* @__PURE__ */ jsx("span", { className: "text-secondary italic", children: "Compliance?" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-white/60 text-lg leading-relaxed font-light", children: "Our legal and ethics desk is available to assist authors with complex queries regarding licensing and intellectual property." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative z-10 shrink-0", children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: "/contact-us",
            className: "inline-flex items-center gap-4 px-10 py-5 bg-white text-dark rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-secondary hover:text-white transition-all shadow-xl hover:-translate-y-1",
            children: [
              "Contact Secretariat ",
              /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4" })
            ]
          }
        ) })
      ] }) })
    ] })
  ] });
}
export {
  Compliance as default
};
