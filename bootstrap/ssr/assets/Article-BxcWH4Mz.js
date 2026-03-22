import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import { M as MainLayout } from "./MainLayout-CJx8SN4D.js";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { ArrowLeft, Users, Calendar, Quote, Download, AlignLeft, Tag } from "lucide-react";
import { M as Modal, C as CitationGenerator } from "./CitationGenerator-Nttig6Bx.js";
import "framer-motion";
import "react-hot-toast";
function Article({ paper }) {
  var _a;
  const [citationModalOpen, setCitationModalOpen] = useState(false);
  const pubDate = ((_a = paper.issue) == null ? void 0 : _a.year) ? `${paper.issue.month_range ? paper.issue.month_range + " " : ""}${paper.issue.year}` : new Date(paper.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: `${paper.title} | Sanmati Journal` }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: paper.meta_description || paper.abstract.substring(0, 160) }),
      /* @__PURE__ */ jsx("meta", { name: "citation_title", content: paper.title }),
      /* @__PURE__ */ jsx("meta", { name: "citation_author", content: paper.authors }),
      /* @__PURE__ */ jsx("meta", { name: "citation_publication_date", content: pubDate }),
      /* @__PURE__ */ jsx("meta", { name: "citation_journal_title", content: "Sanmati Journal" }),
      /* @__PURE__ */ jsx("meta", { name: "citation_pdf_url", content: `${window.location.origin}/download/paper/${paper.id}` })
    ] }),
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Research Article",
        subtitle: "Peer-reviewed scholarship published in the Sanmati Spectrum Research Journal",
        breadcrumbs: [
          { name: "Home", url: "/" },
          { name: "Archive", url: "/archive" },
          { name: "Article", url: "#" }
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "py-24 bg-surface dark:bg-slate-900 transition-colors", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(Link, { href: "/archive", className: "inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-primary transition-colors mb-10 group", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4 group-hover:-translate-x-1 transition-transform" }),
        "Back to Archive"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-6", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-flex items-center px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-primary/10 text-primary", children: paper.category || "Research Article" }),
        paper.doi && /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200", children: [
          "DOI: ",
          paper.doi
        ] })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl lg:text-5xl font-serif font-black text-dark dark:text-white leading-[1.2] mb-8", children: paper.title }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-6 pb-10 border-b border-gray-100 dark:border-slate-800 mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center", children: /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-slate-400" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5", children: "Authors" }),
            /* @__PURE__ */ jsx("p", { className: "font-bold text-dark dark:text-slate-200", children: paper.authors })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "h-10 w-px bg-gray-100 dark:bg-slate-800 hidden sm:block" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center", children: /* @__PURE__ */ jsx(Calendar, { className: "w-5 h-5 text-slate-400" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5", children: "Published" }),
            /* @__PURE__ */ jsx("p", { className: "font-bold text-dark dark:text-slate-200", children: pubDate })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 dark:border-slate-700 flex flex-col sm:flex-row gap-4 justify-between items-center mb-16 relative z-10 -mt-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-green-500 animate-pulse" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-slate-600 dark:text-slate-300", children: "Open Access" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 w-full sm:w-auto", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setCitationModalOpen(true),
              className: "flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-700 text-dark dark:text-white font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors",
              children: [
                /* @__PURE__ */ jsx(Quote, { className: "w-4 h-4" }),
                " Cite"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: `/download/paper/${paper.id}`,
              className: "flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5",
              children: [
                /* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }),
                " Read PDF"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "prose prose-lg dark:prose-invert prose-headings:font-serif prose-a:text-primary max-w-none mb-16", children: [
        /* @__PURE__ */ jsxs("h2", { className: "flex items-center gap-3 text-2xl font-serif font-black text-dark dark:text-white mb-6", children: [
          /* @__PURE__ */ jsx(AlignLeft, { className: "w-6 h-6 text-primary" }),
          " Abstract"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line bg-white/50 dark:bg-slate-800/50 p-8 rounded-3xl border border-white dark:border-slate-700", children: paper.abstract })
      ] }),
      paper.keywords && /* @__PURE__ */ jsxs("div", { className: "mt-12 flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsx(Tag, { className: "w-5 h-5 text-slate-400 mr-2" }),
        paper.keywords.split(",").map((keyword, i) => /* @__PURE__ */ jsx("span", { className: "px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700", children: keyword.trim() }, i))
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      Modal,
      {
        isOpen: citationModalOpen,
        onClose: () => setCitationModalOpen(false),
        title: "Citation Engine",
        size: "lg",
        children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-slate-500 mb-6", children: "Copy and paste a formatted citation or use one of the links to import into a bibliography manager." }),
          /* @__PURE__ */ jsx(CitationGenerator, { paper })
        ] })
      }
    )
  ] });
}
export {
  Article as default
};
