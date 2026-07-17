import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { FileText, Layers, Calendar, Search, Filter, Eye, ShieldCheck, Quote, Download, BookOpen } from "lucide-react";
import { Head, Link } from "@inertiajs/react";
import { M as MainLayout, S as Seo } from "./MainLayout-BdmIsu1R.js";
import { P as PageHeader } from "./PageHeader-DKpFkYbo.js";
import { M as Modal } from "./Modal-C963gXOF.js";
import { C as CitationGenerator } from "./CitationGenerator-Bz1tzc_I.js";
import "react-hot-toast";
function Archive({ issues }) {
  const dbIssues = Array.isArray(issues) ? issues : (issues == null ? void 0 : issues.data) || [];
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVolume, setSelectedVolume] = useState("all");
  const [selectedAuthor, setSelectedAuthor] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activePaperMenu, setActivePaperMenu] = useState(null);
  const [citationPaper, setCitationPaper] = useState(null);
  useRef({});
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activePaperMenu && !event.target.closest(".pdf-dropdown-container")) {
        setActivePaperMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activePaperMenu]);
  const MONTH_RANGE_OVERRIDES = {
    "1-1": "January – March",
    "2-1": "April – June",
    "2-2": "April – June"
  };
  const researchIssues = useMemo(() => {
    return [...dbIssues].map((issue) => ({
      ...issue,
      // Apply month_range override, filter out compilation papers from count
      month_range: MONTH_RANGE_OVERRIDES[`${issue.volume}-${issue.number}`] || issue.month_range,
      papers: (issue.papers || []).filter((p) => p.category !== "Complete Issue Book")
    })).sort((a, b) => {
      const volA = parseInt(a.volume) || 0;
      const volB = parseInt(b.volume) || 0;
      if (volA !== volB) {
        return volB - volA;
      }
      const numA = parseInt(a.number) || 0;
      const numB = parseInt(b.number) || 0;
      return numB - numA;
    });
  }, [dbIssues]);
  const volumeOptions = useMemo(() => {
    const vols = {};
    researchIssues.forEach((issue) => {
      const vol = String(issue.volume);
      if (!vols[vol]) {
        vols[vol] = {
          val: vol,
          label: `Volume ${vol}`
        };
      }
    });
    if (vols["1"]) vols["1"].label = "Volume 1 (Jan–Mar 2026)";
    if (vols["2"]) vols["2"].label = "Volume 2 (Apr–Jun 2026)";
    return Object.values(vols).sort((a, b) => b.val.localeCompare(a.val));
  }, [researchIssues]);
  const allAuthors = useMemo(() => {
    const authorsSet = /* @__PURE__ */ new Set();
    researchIssues.forEach((issue) => {
      (issue.papers || []).forEach((paper) => {
        if (paper.authors) {
          const parts = paper.authors.split(/,|\b&|\band\b/i);
          parts.forEach((part) => {
            const name = part.trim();
            if (name && name.length > 2) {
              authorsSet.add(name);
            }
          });
        }
      });
    });
    return Array.from(authorsSet).sort();
  }, [researchIssues]);
  const allCategories = useMemo(() => {
    const categoriesSet = /* @__PURE__ */ new Set();
    researchIssues.forEach((issue) => {
      (issue.papers || []).forEach((paper) => {
        if (paper.category && paper.category !== "Complete Issue Book") {
          categoriesSet.add(paper.category);
        }
      });
    });
    return Array.from(categoriesSet).sort();
  }, [researchIssues]);
  const stats = useMemo(() => {
    const vols = new Set(researchIssues.map((i) => i.volume));
    const papersCount = researchIssues.reduce((acc, issue) => {
      var _a;
      return acc + (((_a = issue.papers) == null ? void 0 : _a.length) || 0);
    }, 0);
    return {
      volumes: vols.size,
      issues: researchIssues.length,
      papers: papersCount
    };
  }, [researchIssues]);
  const filteredIssues = useMemo(() => {
    return researchIssues.map((issue) => {
      if (selectedVolume !== "all" && String(issue.volume) !== selectedVolume) {
        return { ...issue, papers: [] };
      }
      const filteredPapers = (issue.papers || []).filter((paper) => {
        var _a, _b;
        const matchesSearch = searchQuery === "" || ((_a = paper.title) == null ? void 0 : _a.toLowerCase().includes(searchQuery.toLowerCase())) || ((_b = paper.authors) == null ? void 0 : _b.toLowerCase().includes(searchQuery.toLowerCase())) || paper.keywords && paper.keywords.toLowerCase().includes(searchQuery.toLowerCase()) || `volume ${issue.volume}`.includes(searchQuery.toLowerCase()) || `vol ${issue.volume}`.includes(searchQuery.toLowerCase());
        const matchesAuthor = selectedAuthor === "all" || paper.authors && paper.authors.toLowerCase().includes(selectedAuthor.toLowerCase());
        const matchesCategory = selectedCategory === "all" || paper.category && paper.category === selectedCategory;
        return matchesSearch && matchesAuthor && matchesCategory;
      });
      return { ...issue, papers: filteredPapers };
    }).filter((issue) => issue.papers && issue.papers.length > 0);
  }, [researchIssues, searchQuery, selectedVolume, selectedAuthor, selectedCategory]);
  const scholarlySchema = useMemo(() => {
    return researchIssues.flatMap(
      (issue) => (issue.papers || []).map((paper) => ({
        "@context": "https://schema.org",
        "@type": "ScholarlyArticle",
        "headline": paper.title,
        "author": (paper.authors || "").split(/,|\b&|\band\b/i).map((name) => ({
          "@type": "Person",
          "name": name.trim()
        })),
        "url": paper.doi || `https://sanmatijournal.in/article/${paper.id}`,
        "publisher": {
          "@type": "Organization",
          "name": "Sanmati Journal",
          "logo": "https://sanmatijournal.in/logo.jpg"
        },
        "issueNumber": issue.number,
        "volumeNumber": issue.volume,
        "datePublished": String(issue.year)
      }))
    );
  }, [researchIssues]);
  const seoData = {
    schema: scholarlySchema.length > 0 ? scholarlySchema : void 0,
    breadcrumb: [
      { name: "Home", url: "/" },
      { name: "Archive", url: "/archive" }
    ]
  };
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: "Journal Archive | Sanmati Spectrum of Knowledge",
        description: "Browse through the academic archive of Sanmati Journal. Read peer-reviewed multidisciplinary research articles, scholarly papers, and official issue compilations.",
        jsonLd: seoData
      }
    ),
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("style", { children: `
                    .font-poppins { font-family: 'Poppins', sans-serif; }
                    .font-inter { font-family: 'Inter', sans-serif; }
                ` }) }),
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Journal Archive",
        breadcrumb: "Archives",
        subtitle: "Explore our digital repository of peer-reviewed multi-disciplinary scientific papers, research articles, and volumes."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-[#F8FAFC] py-12 lg:py-20 font-inter text-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-serif font-bold text-primary", children: "Research Analytics" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500 mt-1", children: "Real-time statistics of published volumes and papers." })
        ] }),
        /* @__PURE__ */ jsxs(
          Link,
          {
            href: "/submission-guidelines/call-for-papers",
            className: "inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-secondary-dark transition-colors shadow-lg shadow-secondary/20",
            children: [
              /* @__PURE__ */ jsx(FileText, { className: "w-4 h-4" }),
              " Submit Paper"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-16", children: [
        { label: "Total Volumes", value: stats.volumes, icon: /* @__PURE__ */ jsx(Layers, { className: "w-6 h-6 text-accent" }), border: "border-l-4 border-l-accent" },
        { label: "Total Issues", value: stats.issues, icon: /* @__PURE__ */ jsx(Calendar, { className: "w-6 h-6 text-secondary" }), border: "border-l-4 border-l-secondary" },
        { label: "Published Papers", value: stats.papers, icon: /* @__PURE__ */ jsx(FileText, { className: "w-6 h-6 text-primary" }), border: "border-l-4 border-l-primary" }
      ].map((stat, idx) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: idx * 0.1, duration: 0.5 },
          className: `bg-white rounded-2xl shadow-sm p-6 flex items-center justify-between hover:shadow-md transition-all duration-300 ${stat.border}`,
          children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-slate-400 uppercase tracking-widest font-poppins", children: stat.label }),
              /* @__PURE__ */ jsx("h4", { className: "text-3xl font-bold font-poppins text-slate-900 mt-1", children: stat.value })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center", children: stat.icon })
          ]
        },
        idx
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-12 flex flex-col lg:flex-row gap-4 items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative w-full lg:max-w-md", children: [
          /* @__PURE__ */ jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Search by paper title, authors, or keywords...",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              className: "w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap w-full lg:w-auto gap-4 items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 flex-1 sm:flex-none", children: [
            /* @__PURE__ */ jsx(Filter, { className: "w-4 h-4 text-slate-400" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider font-poppins", children: "Filter By:" })
          ] }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              value: selectedVolume,
              onChange: (e) => setSelectedVolume(e.target.value),
              className: "px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all cursor-pointer font-medium text-slate-700 w-full sm:w-[180px]",
              children: [
                /* @__PURE__ */ jsx("option", { value: "all", children: "All Volumes" }),
                volumeOptions.map((opt) => /* @__PURE__ */ jsx("option", { value: opt.val, children: opt.label }, opt.val))
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "select",
            {
              value: selectedAuthor,
              onChange: (e) => setSelectedAuthor(e.target.value),
              className: "px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all cursor-pointer font-medium text-slate-700 w-full sm:w-[180px]",
              children: [
                /* @__PURE__ */ jsx("option", { value: "all", children: "All Authors" }),
                allAuthors.map((author, index) => /* @__PURE__ */ jsx("option", { value: author, children: author }, index))
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "select",
            {
              value: selectedCategory,
              onChange: (e) => setSelectedCategory(e.target.value),
              className: "px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all cursor-pointer font-medium text-slate-700 w-full sm:w-[180px]",
              children: [
                /* @__PURE__ */ jsx("option", { value: "all", children: "All Categories" }),
                allCategories.map((category, index) => /* @__PURE__ */ jsx("option", { value: category, children: category }, index))
              ]
            }
          )
        ] })
      ] }),
      filteredIssues.length > 0 ? /* @__PURE__ */ jsx("div", { className: "space-y-12", children: filteredIssues.map((issue) => {
        var _a;
        return /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow duration-300",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 border-b border-slate-100 px-6 py-5 flex flex-col sm:flex-row justify-between sm:items-center gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxs("span", { className: "px-4 py-1.5 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-full font-poppins", children: [
                    "Volume ",
                    issue.volume
                  ] }),
                  /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold font-poppins text-slate-900", children: [
                    issue.month_range ? `${issue.month_range} ` : "",
                    issue.year
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest font-poppins", children: [
                  /* @__PURE__ */ jsxs("span", { children: [
                    "Issue ",
                    issue.number
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-slate-300" }),
                  /* @__PURE__ */ jsxs("span", { children: [
                    ((_a = issue.papers) == null ? void 0 : _a.length) || 0,
                    " Research Papers"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "p-6 bg-slate-50/30", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6", children: issue.papers.map((paper, index) => /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-ambient hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2 mb-4", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxs("span", { className: "text-xs font-bold text-slate-400 font-poppins", children: [
                          "#",
                          String(index + 1).padStart(2, "0")
                        ] }),
                        /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-slate-300" }),
                        /* @__PURE__ */ jsx("span", { className: "text-[9px] font-black uppercase tracking-wider text-secondary-dark bg-secondary/10 px-2 py-1 rounded border border-secondary/20", children: paper.category || "Research Article" })
                      ] }),
                      /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] font-bold text-slate-400", children: [
                        /* @__PURE__ */ jsx(Eye, { className: "w-3 h-3" }),
                        " ",
                        10 + paper.id % 7 * 20
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx(
                      Link,
                      {
                        href: `/article/${paper.id}`,
                        className: "block font-bold text-lg text-slate-900 hover:text-accent transition-colors leading-snug mb-3 line-clamp-3 font-poppins",
                        children: paper.title
                      }
                    ),
                    /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-xs font-medium leading-relaxed mb-6 flex-grow line-clamp-2", children: paper.authors }),
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 mb-6", children: [
                      paper.doi && /* @__PURE__ */ jsxs(
                        "a",
                        {
                          href: paper.doi,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-[10px] font-black text-blue-600 uppercase border border-blue-100 hover:bg-blue-100 transition-colors",
                          children: [
                            /* @__PURE__ */ jsx(ShieldCheck, { className: "w-3 h-3" }),
                            " DOI"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-[10px] font-bold border border-slate-200", children: [
                        /* @__PURE__ */ jsx(Quote, { className: "w-3 h-3 text-slate-400" }),
                        " ",
                        paper.citations || 0
                      ] }),
                      /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-[10px] font-bold border border-slate-200", children: [
                        /* @__PURE__ */ jsx(Download, { className: "w-3 h-3 text-slate-400" }),
                        " ",
                        paper.id % 5 * 15 + 5
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-3 pt-4 border-t border-slate-100 mt-auto", children: [
                      /* @__PURE__ */ jsxs(
                        Link,
                        {
                          href: `/article/${paper.id}`,
                          className: "flex items-center justify-center gap-1.5 py-2.5 bg-slate-50 hover:bg-primary/10 text-slate-700 font-bold rounded-xl text-[10px] uppercase tracking-wider transition-colors border border-slate-200/60",
                          children: [
                            /* @__PURE__ */ jsx(BookOpen, { className: "w-3.5 h-3.5" }),
                            " View"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "a",
                        {
                          href: `/download/paper/${paper.id}`,
                          className: "flex items-center justify-center gap-1.5 py-2.5 bg-primary hover:bg-primary-light text-white font-bold rounded-xl text-[10px] uppercase tracking-wider transition-colors shadow-sm",
                          children: [
                            /* @__PURE__ */ jsx(Download, { className: "w-3.5 h-3.5" }),
                            " PDF"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "button",
                        {
                          onClick: () => setCitationPaper(paper),
                          className: "flex items-center justify-center gap-1.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-[10px] uppercase tracking-wider transition-colors border border-slate-200/60",
                          children: [
                            /* @__PURE__ */ jsx(Quote, { className: "w-3.5 h-3.5" }),
                            " Cite"
                          ]
                        }
                      )
                    ] })
                  ]
                },
                paper.id
              )) }) })
            ]
          },
          issue.id
        );
      }) }) : /* @__PURE__ */ jsxs("div", { className: "text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200 p-8", children: [
        /* @__PURE__ */ jsx(Search, { className: "w-12 h-12 text-slate-300 mx-auto mb-4 animate-pulse" }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold font-poppins text-slate-800", children: "No Research Papers Found" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500 max-w-sm mx-auto mt-2 leading-relaxed", children: "No papers matched your search query or filters. Try adjusting your search term or selecting another volume/author." }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              setSearchQuery("");
              setSelectedVolume("all");
              setSelectedAuthor("all");
            },
            className: "mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-light text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-colors font-poppins",
            children: "Reset All Filters"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      Modal,
      {
        isOpen: !!citationPaper,
        onClose: () => setCitationPaper(null),
        title: "Citation Generator",
        size: "lg",
        children: citationPaper && /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-slate-500 mb-6 text-sm", children: "Use the provided formats to cite this research paper accurately in your bibliography or papers." }),
          /* @__PURE__ */ jsx(CitationGenerator, { paper: citationPaper })
        ] })
      }
    )
  ] });
}
export {
  Archive as default
};
