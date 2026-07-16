import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Head, Link } from "@inertiajs/react";
import { M as MainLayout } from "./MainLayout-CN4PiKyW.js";
import { motion } from "framer-motion";
import { M as Modal } from "./Modal-C963gXOF.js";
import { C as CitationGenerator } from "./CitationGenerator-Bz1tzc_I.js";
import { ChevronRight, ArrowLeft, Users, Calendar, Clock, Quote, Download, AlignLeft, Tag, ExternalLink, BookOpen, Twitter, Linkedin, Mail, MessageCircle, Check, Copy } from "lucide-react";
import "react-hot-toast";
function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? scrolled / total * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "fixed top-0 left-0 z-[200] h-0.5 bg-gradient-to-r from-secondary via-accent to-emerald transition-all duration-100",
      style: { width: `${progress}%` },
      role: "progressbar",
      "aria-label": "Reading progress",
      "aria-valuenow": Math.round(progress)
    }
  );
}
function SharePanel({ paper, url }) {
  const [copied, setCopied] = useState(false);
  const copyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    });
  };
  const shareLinks = [
    {
      label: "Share on Twitter/X",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(paper.title)}&url=${encodeURIComponent(url)}`,
      color: "hover:bg-sky-50 hover:text-sky-600"
    },
    {
      label: "Share on LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: "hover:bg-blue-50 hover:text-blue-700"
    },
    {
      label: "Share via Email",
      icon: Mail,
      href: `mailto:?subject=${encodeURIComponent(paper.title)}&body=${encodeURIComponent("Check out this research article: " + url)}`,
      color: "hover:bg-slate-100 hover:text-primary"
    },
    {
      label: "Share on WhatsApp",
      icon: MessageCircle,
      href: `https://wa.me/?text=${encodeURIComponent(paper.title + "\n" + url)}`,
      color: "hover:bg-green-50 hover:text-green-700"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
    /* @__PURE__ */ jsx("span", { className: "text-xs font-black uppercase tracking-wider text-muted mr-1", children: "Share" }),
    shareLinks.map((s) => {
      const Icon = s.icon;
      return /* @__PURE__ */ jsx(
        "a",
        {
          href: s.href,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": s.label,
          className: `w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 transition-all duration-200 ${s.color}`,
          children: /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4" })
        },
        s.label
      );
    }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: copyLink,
        "aria-label": copied ? "Link copied!" : "Copy link",
        className: `w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 ${copied ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-500 hover:bg-slate-200"}`,
        children: copied ? /* @__PURE__ */ jsx(Check, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx(Copy, { className: "w-4 h-4" })
      }
    )
  ] });
}
function Article({ paper }) {
  var _a, _b, _c, _d;
  const [citationModalOpen, setCitationModalOpen] = useState(false);
  const pubDate = ((_a = paper.issue) == null ? void 0 : _a.year) ? `${paper.issue.month_range ? paper.issue.month_range + " " : ""}${paper.issue.year}` : new Date(paper.created_at).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://sanmatijournal.in";
  const articleUrl = `${baseUrl}/article/${paper.id}`;
  const keywords = paper.keywords ? paper.keywords.split(",").map((k) => k.trim()).filter(Boolean) : [];
  const readingMinutes = paper.abstract ? Math.max(1, Math.ceil(paper.abstract.split(" ").length / 200)) : 5;
  const scholarlyArticleJsonLd = {
    schema: {
      "@context": "https://schema.org",
      "@type": "ScholarlyArticle",
      "headline": paper.title,
      "abstract": paper.abstract,
      "author": paper.authors.split(",").map((name) => ({ "@type": "Person", "name": name.trim() })),
      "datePublished": ((_b = paper.issue) == null ? void 0 : _b.year) ? String(paper.issue.year) : new Date(paper.created_at).toISOString().split("T")[0],
      "isPartOf": {
        "@type": "Periodical",
        "name": "Sanmati Spectrum of Knowledge & Emerging Discourse",
        "issn": "3108-1819"
      },
      "identifier": paper.doi ? { "@type": "PropertyValue", "propertyID": "DOI", "value": paper.doi } : void 0,
      "url": `${baseUrl}/download/paper/${paper.id}`,
      "publisher": {
        "@type": "Organization",
        "name": "Sanmati Spectrum of Knowledge & Emerging Discourse",
        "url": "https://sanmatijournal.in"
      }
    },
    breadcrumb: [
      { name: "Home", url: "/" },
      { name: "Archive", url: "/archive" },
      { name: "Article", url: `/article/${paper.id}` }
    ]
  };
  return /* @__PURE__ */ jsxs(MainLayout, { jsonLd: scholarlyArticleJsonLd, aiSummary: paper.abstract, children: [
    /* @__PURE__ */ jsx(ReadingProgress, {}),
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: `${paper.title} | Sanmati Spectrum Journal` }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: paper.meta_description || (paper.abstract || "").substring(0, 160) }),
      /* @__PURE__ */ jsx("meta", { name: "citation_title", content: paper.title }),
      /* @__PURE__ */ jsx("meta", { name: "citation_author", content: paper.authors }),
      /* @__PURE__ */ jsx("meta", { name: "citation_publication_date", content: pubDate }),
      /* @__PURE__ */ jsx("meta", { name: "citation_journal_title", content: "Sanmati Spectrum of Knowledge & Emerging Discourse" }),
      /* @__PURE__ */ jsx("meta", { name: "citation_pdf_url", content: `${baseUrl}/download/paper/${paper.id}` }),
      paper.doi && /* @__PURE__ */ jsx("meta", { name: "citation_doi", content: paper.doi }),
      /* @__PURE__ */ jsx("meta", { name: "DC.title", content: paper.title }),
      /* @__PURE__ */ jsx("meta", { name: "DC.creator", content: paper.authors }),
      /* @__PURE__ */ jsx("meta", { name: "DC.date", content: pubDate }),
      /* @__PURE__ */ jsx("meta", { name: "DC.publisher", content: "Sanmati Spectrum of Knowledge & Emerging Discourse" }),
      /* @__PURE__ */ jsx("meta", { name: "DC.format", content: "application/pdf" }),
      /* @__PURE__ */ jsx("meta", { name: "DC.language", content: "en" }),
      paper.doi && /* @__PURE__ */ jsx("meta", { name: "DC.identifier", content: paper.doi })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-b from-primary/5 to-transparent pt-10 pb-0", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("nav", { "aria-label": "Breadcrumb", className: "flex items-center gap-2 text-xs text-muted mb-6", children: [
        /* @__PURE__ */ jsx(Link, { href: "/", className: "hover:text-primary transition-colors", children: "Home" }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "w-3 h-3" }),
        /* @__PURE__ */ jsx(Link, { href: "/archive", className: "hover:text-primary transition-colors", children: "Archive" }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "w-3 h-3" }),
        /* @__PURE__ */ jsx("span", { className: "text-primary font-medium truncate max-w-[200px]", children: "Article" })
      ] }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          href: "/archive",
          className: "inline-flex items-center gap-2 text-xs font-bold text-muted hover:text-primary transition-colors mb-6 group",
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4 group-hover:-translate-x-1 transition-transform" }),
            "Back to Archive"
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-6", children: [
        /* @__PURE__ */ jsx("span", { className: "ds-badge-primary", children: paper.category || "Research Article" }),
        /* @__PURE__ */ jsx("span", { className: "badge-open", children: "Open Access" }),
        paper.doi && /* @__PURE__ */ jsx("span", { className: "badge-doi", children: "DOI" }),
        paper.issue && /* @__PURE__ */ jsxs("span", { className: "ds-badge-neutral", children: [
          "Vol. ",
          ((_c = paper.issue.volume) == null ? void 0 : _c.volume_number) ?? paper.issue.volume,
          ", Issue ",
          paper.issue.issue_number
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10", children: [
      /* @__PURE__ */ jsx(
        motion.h1,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-primary leading-tight tracking-tight mb-8",
          children: paper.title
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-5 pb-8 border-b border-slate-100 mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-xl bg-primary/8 flex items-center justify-center", children: /* @__PURE__ */ jsx(Users, { className: "w-4.5 h-4.5 text-primary" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-[10px] font-black uppercase tracking-wider text-muted", children: "Authors" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-primary", children: paper.authors })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "h-8 w-px bg-slate-100 hidden sm:block", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-xl bg-primary/8 flex items-center justify-center", children: /* @__PURE__ */ jsx(Calendar, { className: "w-4.5 h-4.5 text-primary" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-[10px] font-black uppercase tracking-wider text-muted", children: "Published" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-dark", children: pubDate })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "h-8 w-px bg-slate-100 hidden sm:block", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-xl bg-primary/8 flex items-center justify-center", children: /* @__PURE__ */ jsx(Clock, { className: "w-4.5 h-4.5 text-primary" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-[10px] font-black uppercase tracking-wider text-muted", children: "Reading Time" }),
            /* @__PURE__ */ jsxs("div", { className: "text-sm font-bold text-dark", children: [
              readingMinutes,
              " min read"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 mb-10", children: [
        /* @__PURE__ */ jsx(SharePanel, { paper, url: articleUrl }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3 w-full sm:w-auto", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setCitationModalOpen(true),
              className: "flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-primary font-bold text-sm hover:border-primary hover:shadow-sm transition-all duration-200",
              children: [
                /* @__PURE__ */ jsx(Quote, { className: "w-4 h-4" }),
                "Cite"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: `/download/paper/${paper.id}`,
              className: "flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-dark transition-all duration-200 shadow-md hover:shadow-lg",
              children: [
                /* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }),
                "Download PDF"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { "aria-labelledby": "abstract-heading", className: "mb-10", children: [
        /* @__PURE__ */ jsxs("h2", { id: "abstract-heading", className: "flex items-center gap-2.5 text-xl font-serif font-black text-primary mb-5", children: [
          /* @__PURE__ */ jsx(AlignLeft, { className: "w-5 h-5 text-secondary" }),
          "Abstract"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-secondary to-accent", "aria-hidden": "true" }),
          /* @__PURE__ */ jsx("div", { className: "ml-5 text-base text-slate-600 leading-[1.9] bg-slate-50/60 border border-slate-100 rounded-2xl p-6", children: paper.abstract })
        ] })
      ] }),
      keywords.length > 0 && /* @__PURE__ */ jsxs("section", { "aria-labelledby": "keywords-heading", className: "mb-10", children: [
        /* @__PURE__ */ jsxs("h2", { id: "keywords-heading", className: "flex items-center gap-2.5 text-lg font-serif font-bold text-primary mb-4", children: [
          /* @__PURE__ */ jsx(Tag, { className: "w-4.5 h-4.5 text-secondary" }),
          "Keywords"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: keywords.map((kw, i) => /* @__PURE__ */ jsx("span", { className: "tag-chip", children: kw }, i)) })
      ] }),
      paper.doi && /* @__PURE__ */ jsxs("section", { "aria-labelledby": "doi-heading", className: "mb-10 p-5 rounded-2xl bg-orange-50 border border-orange-100", children: [
        /* @__PURE__ */ jsx("h2", { id: "doi-heading", className: "text-xs font-black uppercase tracking-wider text-orange-600 mb-2", children: "CrossRef DOI" }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: `https://doi.org/${paper.doi}`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-2 text-sm font-mono font-bold text-orange-700 hover:text-orange-900 transition-colors",
            children: [
              /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4" }),
              "https://doi.org/",
              paper.doi
            ]
          }
        )
      ] }),
      paper.issue && /* @__PURE__ */ jsxs("section", { "aria-labelledby": "pub-info-heading", className: "mb-10 p-5 rounded-2xl border border-slate-100 bg-slate-50", children: [
        /* @__PURE__ */ jsx("h2", { id: "pub-info-heading", className: "text-xs font-black uppercase tracking-wider text-muted mb-4", children: "Publication Information" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: [
          { label: "Journal", value: "Sanmati Spectrum" },
          { label: "ISSN", value: "3108-1819" },
          { label: "Volume", value: ((_d = paper.issue.volume) == null ? void 0 : _d.volume_number) ?? paper.issue.volume },
          { label: "Issue", value: paper.issue.issue_number }
        ].map(({ label, value }) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-[10px] font-black uppercase tracking-wider text-muted", children: label }),
          /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-primary mt-0.5", children: value })
        ] }, label)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 py-8 border-t border-slate-100", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: `/download/paper/${paper.id}`,
            className: "thm-btn-dark",
            children: [
              /* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }),
              "Download Full Paper (PDF)"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(Link, { href: "/archive", className: "thm-btn-outline", children: [
          /* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4" }),
          "Browse More Articles"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      Modal,
      {
        isOpen: citationModalOpen,
        onClose: () => setCitationModalOpen(false),
        title: "Citation Generator",
        size: "lg",
        children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted mb-6", children: "Copy and paste a formatted citation or use one of the links to import into your bibliography manager." }),
          /* @__PURE__ */ jsx(CitationGenerator, { paper })
        ] })
      }
    )
  ] });
}
export {
  Article as default
};
