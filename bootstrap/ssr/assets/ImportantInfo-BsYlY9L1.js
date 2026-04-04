import { jsx, jsxs } from "react/jsx-runtime";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { M as MainLayout } from "./MainLayout-B53y4pKW.js";
import { FileText, ArrowRight, Mail, Globe, ShieldCheck, Clock, BookOpen, Type, AlignLeft, Layout, Users, ListChecks } from "lucide-react";
import { Link } from "@inertiajs/react";
import { D as DotPattern, S as ScrollReveal, r as revealVariants, G as GridPattern, a as ScaleOnHover } from "./ScrollReveal-BS2wxcDt.js";
import "framer-motion";
import "react";
import "react-hot-toast";
function ImportantInformation() {
  const guidelines = [
    { label: "Submission Mode", value: "Email only", icon: /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5" }) },
    { label: "Submission Email", value: "sanmatijournal@gmail.com", icon: /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5 text-primary" }) },
    { label: "Language", value: "Hindi / English", icon: /* @__PURE__ */ jsx(Globe, { className: "w-5 h-5" }) },
    { label: "Review Process", value: "Double-Blind Peer Review", icon: /* @__PURE__ */ jsx(ShieldCheck, { className: "w-5 h-5 text-emerald-600" }) },
    { label: "Publication Frequency", value: "Quarterly", icon: /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5" }) },
    { label: "Manuscripts", value: "Original and unpublished.", icon: /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5" }) },
    { label: "Submission Format", value: "MS Word (.doc/.docx)", icon: /* @__PURE__ */ jsx(BookOpen, { className: "w-5 h-5 text-primary" }) },
    { label: "Font", value: "Times New Roman (Eng), Mangal Unicode (Hindi)", icon: /* @__PURE__ */ jsx(Type, { className: "w-5 h-5" }) },
    { label: "Title", value: "14 pt Bold", icon: /* @__PURE__ */ jsx(Type, { className: "w-5 h-5 font-bold" }) },
    { label: "Main Text", value: "12 pt | Line spacing: 1.5", icon: /* @__PURE__ */ jsx(AlignLeft, { className: "w-5 h-5" }) },
    { label: "Abstract", value: "150–250 words with 4–6 keywords", icon: /* @__PURE__ */ jsx(Layout, { className: "w-5 h-5" }) },
    { label: "Maximum Co-authors", value: "Two", icon: /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-secondary" }) },
    { label: "Referencing Style", value: "APA", icon: /* @__PURE__ */ jsx(ListChecks, { className: "w-5 h-5 text-emerald-600" }) }
  ];
  return /* @__PURE__ */ jsx(MainLayout, { children: /* @__PURE__ */ jsxs("div", { className: "bg-warm-bg min-h-screen", children: [
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Important Information",
        breadcrumb: "Submission",
        subtitle: "Formatting Rules & Submission Guidelines"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-24 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx(DotPattern, { className: "opacity-10" }),
      /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto mt-12 relative z-10", children: /* @__PURE__ */ jsx(ScrollReveal, { variants: revealVariants.zoom, children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-sm relative overflow-hidden", children: [
        /* @__PURE__ */ jsx(GridPattern, { className: "opacity-5" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-8 opacity-5", children: /* @__PURE__ */ jsx(FileText, { className: "w-32 h-32" }) }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark mb-8", children: "Author Checklist" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2", children: guidelines.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between py-4 border-b border-slate-50 group hover:bg-warm-bg/50 px-4 rounded-xl transition-colors", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "text-gray-400 group-hover:text-primary transition-colors", children: item.icon }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-gray-500 uppercase tracking-tight", children: item.label })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-dark text-right max-w-[200px]", children: item.value })
          ] }, i)) }),
          /* @__PURE__ */ jsx(ScrollReveal, { variants: revealVariants.zoom, delay: 0.3, children: /* @__PURE__ */ jsxs("div", { className: "mt-12 p-8 bg-blue-900 text-white rounded-3xl shadow-xl shadow-blue-900/10 relative overflow-hidden group", children: [
            /* @__PURE__ */ jsx(GridPattern, { className: "opacity-20 group-hover:scale-110 transition-transform duration-1000" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col md:flex-row items-center gap-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex-grow", children: [
                /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold mb-2", children: "Academic Discourse" }),
                /* @__PURE__ */ jsx("p", { className: "text-blue-100 italic leading-relaxed", children: "Researchers, academicians, and scholars are encouraged to contribute and be part of this multidisciplinary academic discourse." })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "shrink-0", children: /* @__PURE__ */ jsx(ScaleOnHover, { children: /* @__PURE__ */ jsxs(Link, { href: "/submission-guidelines/publication-charges", className: "px-8 py-4 bg-white text-dark font-bold rounded-full hover:bg-primary/5 transition-all flex items-center gap-2", children: [
                "Review Publication Fees ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
              ] }) }) })
            ] })
          ] }) })
        ] })
      ] }) }) })
    ] })
  ] }) });
}
export {
  ImportantInformation as default
};
