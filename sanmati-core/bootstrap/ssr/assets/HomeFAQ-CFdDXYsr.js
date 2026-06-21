import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { S as ScrollReveal, r as revealVariants } from "./ScrollReveal-1c_Su25q.js";
import { HelpCircle, Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return /* @__PURE__ */ jsxs("div", { className: "border-b border-gray-200 last:border-0", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: "w-full py-6 flex items-center justify-between gap-4 text-left group",
        onClick,
        "aria-expanded": isOpen,
        children: [
          /* @__PURE__ */ jsx("span", { className: `text-lg transition-colors font-medium ${isOpen ? "text-primary" : "text-dark group-hover:text-primary"}`, children: question }),
          /* @__PURE__ */ jsx("span", { className: `shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? "bg-primary border-primary text-white rotate-180" : "bg-white border-gray-200 text-gray-500 group-hover:border-primary group-hover:text-primary"}`, children: isOpen ? /* @__PURE__ */ jsx(Minus, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: { duration: 0.3 },
        className: "overflow-hidden",
        children: /* @__PURE__ */ jsx("p", { className: "pb-6 text-gray-600 leading-relaxed max-w-2xl", children: answer })
      }
    ) })
  ] });
};
function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [
    {
      q: "How fast is the peer review process?",
      a: "We pride ourselves on efficiency. Our typical turnaround time from submission to first decision is 4-6 weeks. We use an automated tracking system to keep reviews on schedule."
    },
    {
      q: "Is the journal indexed in Scopus/Web of Science?",
      a: "We are currently indexed in Google Scholar, CrossRef, and ResearchGate. Application for Scopus and Web of Science indexing is in progress and expected to be completed by late 2026."
    },
    {
      q: "What are the publication charges (APC)?",
      a: "We maintain a transparent Article Processing Charge (APC) policy to support open access. Detailed fee structures are available on our submission guidelines page. Partial waivers are available for researchers from low-income countries."
    },
    {
      q: "Can I submit a review paper?",
      a: "Yes! We welcome original research articles, review papers, case studies, and short communications across all our multidisciplinary tracks."
    },
    {
      q: "How do I track my submission?",
      a: "Once you submit, you will receive login credentials for our Author Dashboard, where you can see real-time updates on your manuscript's status."
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-white relative", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-purple-700 rounded-full text-sm font-bold uppercase tracking-widest mb-4", children: [
        /* @__PURE__ */ jsx(HelpCircle, { className: "w-4 h-4" }),
        " Need Help?"
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-serif font-bold text-dark mb-4", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Got questions? We've got answers." })
    ] }) }),
    /* @__PURE__ */ jsx(ScrollReveal, { delay: 0.2, variants: revealVariants.fadeUp, children: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8", children: faqs.map((faq, i) => /* @__PURE__ */ jsx(
      FAQItem,
      {
        question: faq.q,
        answer: faq.a,
        isOpen: openIndex === i,
        onClick: () => setOpenIndex(openIndex === i ? null : i)
      },
      i
    )) }) })
  ] }) });
}
export {
  HomeFAQ as default
};
