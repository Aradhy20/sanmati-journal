import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { Archive as Archive$1, Search, Calendar, Layers, FileText, BookOpen, Download, Quote } from "lucide-react";
import { Link } from "@inertiajs/react";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { M as MainLayout, S as Seo } from "./MainLayout-C8sFQwz7.js";
import { M as Modal, C as CitationGenerator } from "./CitationGenerator-Nttig6Bx.js";
import "react-hot-toast";
function SkeletonCard({ variant = "paper", lines = 3, className = "" }) {
  const shimmer = "bg-slate-200 rounded animate-pulse";
  if (variant === "stat") {
    return /* @__PURE__ */ jsxs("div", { className: `ds-card p-8 space-y-4 ${className}`, children: [
      /* @__PURE__ */ jsx("div", { className: `${shimmer} h-12 w-12` }),
      /* @__PURE__ */ jsx("div", { className: `${shimmer} h-8 w-1/2` }),
      /* @__PURE__ */ jsx("div", { className: `${shimmer} h-4 w-3/4` })
    ] });
  }
  if (variant === "editor") {
    return /* @__PURE__ */ jsxs("div", { className: `ds-card p-6 flex gap-4 ${className}`, children: [
      /* @__PURE__ */ jsx("div", { className: `${shimmer} rounded-full w-16 h-16 flex-shrink-0` }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-2", children: [
        /* @__PURE__ */ jsx("div", { className: `${shimmer} h-4 w-3/4` }),
        /* @__PURE__ */ jsx("div", { className: `${shimmer} h-3 w-1/2` }),
        /* @__PURE__ */ jsx("div", { className: `${shimmer} h-3 w-2/3` })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: `ds-card p-8 space-y-4 ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
      /* @__PURE__ */ jsx("div", { className: `${shimmer} h-6 w-24 rounded-full` }),
      /* @__PURE__ */ jsx("div", { className: `${shimmer} h-10 w-10 rounded-xl` })
    ] }),
    Array.from({ length: lines }).map((_, i) => /* @__PURE__ */ jsx(
      "div",
      {
        className: `${shimmer} h-4`,
        style: { width: i === lines - 1 ? "60%" : "100%" }
      },
      i
    )),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 pt-2", children: [
      /* @__PURE__ */ jsx("div", { className: `${shimmer} rounded-full w-10 h-10` }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-1 flex-1", children: [
        /* @__PURE__ */ jsx("div", { className: `${shimmer} h-3 w-1/2` }),
        /* @__PURE__ */ jsx("div", { className: `${shimmer} h-2 w-1/3` })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between pt-4 border-t border-slate-100", children: [
      /* @__PURE__ */ jsx("div", { className: `${shimmer} h-3 w-20` }),
      /* @__PURE__ */ jsx("div", { className: `${shimmer} h-3 w-20` })
    ] })
  ] });
}
function SkeletonGrid({ count = 3, variant = "paper", cols = "3", className = "" }) {
  const colMap = {
    "2": "grid-cols-1 md:grid-cols-2",
    "3": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    "4": "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  };
  return /* @__PURE__ */ jsx("div", { className: `grid ${colMap[cols] ?? colMap["3"]} gap-8 ${className}`, children: Array.from({ length: count }).map((_, i) => /* @__PURE__ */ jsx(SkeletonCard, { variant }, i)) });
}
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};
function Archive({ issues }) {
  const isLoading = issues == null;
  const dbIssues = Array.isArray(issues) ? issues : (issues == null ? void 0 : issues.data) || [];
  const hardcodedIssues = [
    {
      id: "vol1-issue1",
      volume: "1",
      number: "1",
      year: "Jan-March 2026",
      papers: [
        {
          id: "static-1",
          title: "Sanmati Spectrum of Knowledge & Emerging Discourse (January-March, 2026) Hindi & English",
          authors: "Sanmati Journal Editorial Board",
          file_path: "https://drive.google.com/file/d/1nPxKxugSA6yMcpbJyQuNuEQ7QcnrpPt2/view?usp=sharing",
          thumbnail: "https://drive.google.com/thumbnail?id=1nPxKxugSA6yMcpbJyQuNuEQ7QcnrpPt2&sz=w800"
        }
      ]
    }
  ];
  const issueList = dbIssues.length > 0 ? dbIssues : hardcodedIssues;
  const [citationPaper, setCitationPaper] = useState(null);
  const scholarlySchema = issueList.flatMap(
    (issue) => (issue.papers || []).map((paper) => {
      var _a;
      return {
        "@context": "https://schema.org",
        "@type": "ScholarlyArticle",
        "headline": paper.title,
        "author": [
          {
            "@type": "Person",
            "name": paper.authors
          }
        ],
        "url": `https://sanmatijournal.in/storage/${paper.file_path}`,
        "publisher": {
          "@type": "Organization",
          "name": "Sanmati Journal"
        },
        "issueNumber": issue.number,
        "volumeNumber": issue.volume,
        "datePublished": (_a = issue.year) == null ? void 0 : _a.toString()
      };
    })
  );
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: "Journal Archive",
        description: "Access our repository of past volumes and peer-reviewed research issues.",
        jsonLd: scholarlySchema.length > 0 ? scholarlySchema : void 0
      }
    ),
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "The Knowledge Repository",
        breadcrumb: "Archives",
        subtitle: "Curated collection of multidisciplinary scholarly discourse across previous volumes."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24 relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-8 mb-10 lg:mb-20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Archive$1, { className: "w-6 h-6 text-primary" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-serif font-bold text-dark", children: "Chronological Access" }),
            /* @__PURE__ */ jsxs("p", { className: "text-muted text-xs font-medium uppercase tracking-widest mt-1", children: [
              "Found ",
              issueList.length,
              " Total Issues"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative w-full md:w-80", children: [
          /* @__PURE__ */ jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Search archives...",
              className: "w-full pl-12 pr-6 py-4 bg-surface border border-gray-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            }
          )
        ] })
      ] }),
      isLoading ? /* @__PURE__ */ jsx(SkeletonGrid, { count: 4, cols: "2", className: "mt-4" }) : issueList.length > 0 ? /* @__PURE__ */ jsx("div", { className: "space-y-20", children: issueList.map((issue, idx) => {
        var _a, _b, _c;
        return /* @__PURE__ */ jsxs(
          motion.div,
          {
            ...fadeInUp,
            transition: { delay: idx * 0.1 },
            className: "relative",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 mb-10", children: [
                /* @__PURE__ */ jsxs("div", { className: "px-6 py-2 bg-dark text-white rounded-full text-xs font-black uppercase tracking-[0.2em]", children: [
                  "Volume ",
                  issue.volume
                ] }),
                /* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-gray-100" }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-muted text-sm font-bold", children: [
                  /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4 text-secondary" }),
                  issue.year
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10", children: [
                /* @__PURE__ */ jsx("div", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-surface border border-gray-100 rounded-[2.5rem] sticky top-32 shadow-sm overflow-hidden", children: [
                  ((_b = (_a = issue.papers) == null ? void 0 : _a[0]) == null ? void 0 : _b.thumbnail) && /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: issue.papers[0].file_path,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "block group relative overflow-hidden",
                      children: [
                        /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: issue.papers[0].thumbnail,
                            alt: `Volume ${issue.volume} Cover`,
                            className: "w-full aspect-[3/4] object-cover object-top group-hover:scale-105 transition-transform duration-500",
                            loading: "lazy"
                          }
                        ),
                        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-white text-xs font-black uppercase tracking-widest bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm", children: "View PDF" }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-secondary block mb-4", children: "Inaugural Issue" }),
                    /* @__PURE__ */ jsxs("h3", { className: "text-xl md:text-2xl font-serif font-bold text-dark mb-3", children: [
                      "Issue No. ",
                      issue.number
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-muted text-sm leading-relaxed mb-6", children: "This issue features a compilation of peer-reviewed research and analytical discourse across multidisciplinary themes." }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-dark font-black text-[10px] uppercase tracking-widest", children: [
                      /* @__PURE__ */ jsx(Layers, { className: "w-4 h-4 text-primary" }),
                      ((_c = issue.papers) == null ? void 0 : _c.length) || 0,
                      " Research Papers"
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx("div", { className: "lg:col-span-8 space-y-4", children: issue.papers && issue.papers.map((paper) => /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    whileHover: { x: 10 },
                    className: "group p-8 bg-white border border-gray-50 rounded-3xl hover:border-primary/20 hover:shadow-xl transition-all duration-500",
                    children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-6", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                          /* @__PURE__ */ jsx(FileText, { className: "w-4 h-4 text-secondary" }),
                          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-black text-secondary uppercase tracking-[0.2em]", children: "Research Article" })
                        ] }),
                        String(paper.id).startsWith("static-") ? /* @__PURE__ */ jsx("a", { href: paper.file_path, target: "_blank", rel: "noopener noreferrer", className: "block", children: /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors leading-[1.4]", children: paper.title }) }) : /* @__PURE__ */ jsx(Link, { href: `/article/${paper.id}`, className: "block", children: /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors leading-[1.4]", children: paper.title }) }),
                        /* @__PURE__ */ jsx("p", { className: "text-muted font-medium italic text-sm", children: paper.authors })
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row items-center gap-3 mt-4 md:mt-0", children: String(paper.id).startsWith("static-") ? /* @__PURE__ */ jsxs(Fragment, { children: [
                        /* @__PURE__ */ jsxs(
                          "a",
                          {
                            href: paper.file_path,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-secondary/10 text-secondary rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-secondary/20 transition-all",
                            children: [
                              /* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4" }),
                              "View"
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxs(
                          "a",
                          {
                            href: paper.file_path,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-dark text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all shadow-lg shadow-dark/10 group-hover:-translate-y-1",
                            children: [
                              /* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }),
                              "PDF"
                            ]
                          }
                        )
                      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                        /* @__PURE__ */ jsxs(
                          Link,
                          {
                            href: `/article/${paper.id}`,
                            className: "w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-secondary/10 text-secondary rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-secondary/20 transition-all",
                            children: [
                              /* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4" }),
                              "View"
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxs(
                          "button",
                          {
                            onClick: () => setCitationPaper(paper),
                            className: "w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-all",
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
                            className: "w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-dark text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all shadow-lg shadow-dark/10 group-hover:-translate-y-1",
                            children: [
                              /* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }),
                              "PDF"
                            ]
                          }
                        )
                      ] }) })
                    ] })
                  },
                  paper.id
                )) })
              ] })
            ]
          },
          issue.id
        );
      }) }) : /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          className: "max-w-2xl mx-auto text-center py-32 px-10 bg-surface rounded-[3rem] border border-dashed border-gray-200",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-24 h-24 bg-white rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-xl border border-gray-50", children: /* @__PURE__ */ jsx(Search, { className: "w-10 h-10 text-secondary animate-pulse" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark mb-4", children: "The Vault is Preparing" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted text-lg leading-relaxed mb-10", children: "Our inaugural scholarship cycle is currently under review. The digital archives will be available shortly after the first quarterly publication." }),
            /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-4 px-8 py-3 bg-dark text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em]", children: "Current Cycle: Spring 2026" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      Modal,
      {
        isOpen: !!citationPaper,
        onClose: () => setCitationPaper(null),
        title: "Citation Engine",
        size: "lg",
        children: citationPaper && /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-slate-500 mb-6 text-sm", children: "Use the provided formats to cite this research paper accurately in your bibliography." }),
          /* @__PURE__ */ jsx(CitationGenerator, { paper: citationPaper })
        ] })
      }
    )
  ] });
}
export {
  Archive as default
};
