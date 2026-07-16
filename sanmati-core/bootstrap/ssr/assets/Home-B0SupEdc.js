import { jsxs, jsx } from "react/jsx-runtime";
import { Suspense, lazy, useState } from "react";
import { M as MainLayout } from "./MainLayout-CN4PiKyW.js";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";
import { BookOpen, ArrowRight, Globe, FlaskConical, Users, Palette, ShoppingBag, Gavel, GraduationCap, Leaf, Lightbulb, FileText, SendHorizonal, Trophy, Zap, Award, Shield, BarChart2, BookMarked, Clock, Star, Mail, Bookmark } from "lucide-react";
import "react-hot-toast";
const Hero = lazy(() => import("./Hero-DeEGyuw6.js"));
const Testimonials = lazy(() => import("./Testimonials-DMgrH-n5.js"));
const NewsletterSection = lazy(() => import("./NewsletterSection-BUBB_euJ.js"));
const HomeFAQ = lazy(() => import("./HomeFAQ-CXhxTWVH.js"));
const JournalMetricsDashboard = lazy(() => import("./JournalMetricsDashboard-_zzW86Es.js"));
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
};
const DISCIPLINES = [
  { icon: FlaskConical, name: "Science & Technology", slug: "science-technology", count: 18, color: "bg-blue-50 text-blue-600 border-blue-200" },
  { icon: Users, name: "Social Sciences", slug: "social-sciences", count: 22, color: "bg-purple-50 text-purple-600 border-purple-200" },
  { icon: Palette, name: "Arts & Humanities", slug: "arts-humanities", count: 15, color: "bg-rose-50 text-rose-600 border-rose-200" },
  { icon: ShoppingBag, name: "Management & Commerce", slug: "management-commerce", count: 12, color: "bg-amber-50 text-amber-700 border-amber-200" },
  { icon: Gavel, name: "Law & Governance", slug: "law-governance", count: 8, color: "bg-slate-100 text-slate-700 border-slate-200" },
  { icon: GraduationCap, name: "Education", slug: "education", count: 10, color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  { icon: Leaf, name: "Environment", slug: "environment", count: 5, color: "bg-teal-50 text-teal-700 border-teal-200" },
  { icon: Lightbulb, name: "Philosophy", slug: "philosophy", count: 3, color: "bg-indigo-50 text-indigo-600 border-indigo-200" }
];
const WHY = [
  { icon: Zap, title: "Fast Review", desc: "15–30 days double-blind peer review with expert subject reviewers." },
  { icon: Award, title: "CrossRef DOI", desc: "Every article receives a registered CrossRef DOI for global indexing." },
  { icon: Globe, title: "Open Access", desc: "100% open access — no paywall, free to read for researchers worldwide." },
  { icon: Shield, title: "COPE Compliant", desc: "Strict publication ethics aligned with COPE international standards." },
  { icon: BarChart2, title: "Impact Factor 5.3", desc: "Recognised academic impact score reflecting research quality." },
  { icon: BookMarked, title: "Certificate + DOI", desc: "Authors receive DOI certificate and publication confirmation." }
];
const STEPS = [
  { num: "01", title: "Prepare Manuscript", desc: "Format according to our author guidelines and templates." },
  { num: "02", title: "Submit Online", desc: "Email or submit via our online submission portal." },
  { num: "03", title: "Initial Screening", desc: "Editorial team checks scope, formatting & originality." },
  { num: "04", title: "Peer Review", desc: "Double-blind review by 2+ subject-matter experts." },
  { num: "05", title: "Decision & Revision", desc: "Receive reviewer feedback, revise if required." },
  { num: "06", title: "Publication & DOI", desc: "Paper published online with CrossRef DOI assigned." }
];
function ArticleCard({ paper, index }) {
  var _a;
  const [bookmarked, setBookmarked] = useState(false);
  return /* @__PURE__ */ jsxs(
    motion.article,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-40px" },
      transition: { duration: 0.5, delay: index * 0.08 },
      className: "article-card group flex flex-col h-full",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsx("span", { className: "ds-badge-info capitalize text-[10px]", children: "Research Article" }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setBookmarked((b) => !b),
              "aria-label": bookmarked ? "Remove bookmark" : "Bookmark article",
              className: "text-slate-300 hover:text-secondary transition-colors",
              children: /* @__PURE__ */ jsx(Bookmark, { className: `w-4 h-4 ${bookmarked ? "fill-secondary text-secondary" : ""}` })
            }
          )
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-primary leading-snug mb-2 line-clamp-3 group-hover:text-accent transition-colors flex-1", children: /* @__PURE__ */ jsx(Link, { href: `/article/${paper.id}`, className: "hover:underline underline-offset-2", children: paper.title }) }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted mb-3 truncate", children: /* @__PURE__ */ jsx("span", { className: "font-semibold", children: paper.authors }) }),
        paper.abstract && /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4 flex-shrink-0", children: paper.abstract }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between pt-3 border-t border-slate-100 mt-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            paper.doi && /* @__PURE__ */ jsx("span", { className: "badge-doi", children: "DOI" }),
            paper.issue && /* @__PURE__ */ jsxs("span", { className: "text-[10px] text-muted", children: [
              "Vol. ",
              (_a = paper.issue.volume) == null ? void 0 : _a.volume_number,
              ", Iss. ",
              paper.issue.issue_number
            ] })
          ] }),
          /* @__PURE__ */ jsxs(
            Link,
            {
              href: `/article/${paper.id}`,
              className: "inline-flex items-center gap-1 text-[11px] font-bold text-accent hover:text-primary transition-colors",
              children: [
                "Read ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function LatestArticles({ papers }) {
  const [filter, setFilter] = useState("all");
  const tabs = ["all", "hindi", "english"];
  const filtered = papers.filter((p) => {
    if (filter === "all") return true;
    const lang = (p.language || "").toLowerCase();
    return lang.includes(filter);
  });
  return /* @__PURE__ */ jsx("section", { className: "section-py bg-warm-bg", "aria-labelledby": "articles-title", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "section-tagline", children: [
          /* @__PURE__ */ jsx(BookOpen, { className: "w-3 h-3" }),
          "Latest Research"
        ] }),
        /* @__PURE__ */ jsx("h2", { id: "articles-title", className: "section-title", children: "Featured Articles" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        tabs.map((t) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setFilter(t),
            className: `px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all duration-200 ${filter === t ? "bg-primary text-white shadow-md" : "bg-white text-slate-500 hover:bg-slate-100 border border-slate-200"}`,
            children: t === "all" ? "All" : t === "hindi" ? "हिन्दी" : "English"
          },
          t
        )),
        /* @__PURE__ */ jsxs(Link, { href: "/archive", className: "ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-primary hover:border-primary transition-colors", children: [
          "View All ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
        ] })
      ] })
    ] }),
    filtered.length > 0 ? /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: filtered.slice(0, 6).map((paper, i) => /* @__PURE__ */ jsx(ArticleCard, { paper, index: i }, paper.id)) }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: [...Array(6)].map((_, i) => /* @__PURE__ */ jsxs("div", { className: "article-card space-y-3", children: [
      /* @__PURE__ */ jsx("div", { className: "skeleton h-4 w-20 rounded-full" }),
      /* @__PURE__ */ jsx("div", { className: "skeleton h-5 w-full rounded" }),
      /* @__PURE__ */ jsx("div", { className: "skeleton h-5 w-4/5 rounded" }),
      /* @__PURE__ */ jsx("div", { className: "skeleton h-3 w-2/3 rounded" })
    ] }, i)) })
  ] }) });
}
function DisciplinesSection() {
  return /* @__PURE__ */ jsx("section", { className: "section-py bg-white", "aria-labelledby": "disciplines-title", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "section-tagline mx-auto w-fit", children: [
        /* @__PURE__ */ jsx(Globe, { className: "w-3 h-3" }),
        "Research Scope"
      ] }),
      /* @__PURE__ */ jsx("h2", { id: "disciplines-title", className: "section-title mb-4", children: "Disciplines We Publish" }),
      /* @__PURE__ */ jsx("p", { className: "section-subtitle mx-auto", children: "Welcoming original research across all major academic disciplines — in Hindi and English." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: DISCIPLINES.map((d, i) => {
      var _a;
      const Icon = d.icon;
      return /* @__PURE__ */ jsx(
        motion.div,
        {
          ...fadeUp,
          transition: { ...fadeUp.transition, delay: i * 0.06 },
          children: /* @__PURE__ */ jsxs(
            Link,
            {
              href: `/submission-guidelines/areas/${d.slug}`,
              className: `group flex flex-col items-center text-center p-5 rounded-2xl border bg-gradient-to-br hover:-translate-y-1 hover:shadow-md transition-all duration-300 ${d.color}`,
              style: { background: "white", borderColor: (_a = d.color.split(" ").find((c) => c.startsWith("border-"))) == null ? void 0 : _a.replace("border-", "") },
              children: [
                /* @__PURE__ */ jsx("div", { className: `w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${d.color}`, children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6" }) }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-primary leading-snug mb-1", children: d.name }),
                /* @__PURE__ */ jsxs("span", { className: "text-[11px] text-muted", children: [
                  d.count,
                  " articles"
                ] })
              ]
            }
          )
        },
        d.slug
      );
    }) })
  ] }) });
}
function SubmissionProcess() {
  return /* @__PURE__ */ jsxs("section", { className: "section-py relative overflow-hidden", style: { background: "linear-gradient(160deg, #0B1F3A 0%, #0F2B50 100%)" }, "aria-labelledby": "process-title", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.04]", style: { backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "50px 50px" }, "aria-hidden": "true" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 container-custom", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "section-tagline-blue mx-auto w-fit border-white/20 bg-white/10 text-white/80", children: [
          /* @__PURE__ */ jsx(FileText, { className: "w-3 h-3" }),
          "How to Publish"
        ] }),
        /* @__PURE__ */ jsx("h2", { id: "process-title", className: "section-title-lg text-white mb-4", children: "Simple Submission Process" }),
        /* @__PURE__ */ jsx("p", { className: "text-base text-white/55 max-w-xl mx-auto", children: "From submission to DOI — a transparent, author-friendly publishing journey." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12", children: STEPS.map((step, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: i * 0.08 },
          className: "group relative bg-white/8 border border-white/12 rounded-2xl p-6 hover:bg-white/12 hover:border-white/25 transition-all duration-300 backdrop-blur-sm",
          children: [
            /* @__PURE__ */ jsx("div", { className: "text-4xl font-black text-white/10 font-serif leading-none mb-4 select-none", "aria-hidden": "true", children: step.num }),
            /* @__PURE__ */ jsx("div", { className: "w-8 h-1 bg-secondary rounded-full mb-4" }),
            /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-white mb-2", children: step.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-white/55 leading-relaxed", children: step.desc })
          ]
        },
        step.num
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxs(Link, { href: "/submission-guidelines/call-for-papers", className: "thm-btn", children: [
          /* @__PURE__ */ jsx(SendHorizonal, { className: "w-4 h-4" }),
          "Submit Your Paper Now"
        ] }),
        /* @__PURE__ */ jsxs(Link, { href: "/submission-guidelines", className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/25 text-white font-bold text-sm hover:bg-white/10 transition-all duration-200", children: [
          "Read Guidelines",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] })
    ] })
  ] });
}
function WhyPublish() {
  return /* @__PURE__ */ jsx("section", { className: "section-py bg-warm-bg", "aria-labelledby": "why-title", children: /* @__PURE__ */ jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "section-tagline", children: [
        /* @__PURE__ */ jsx(Trophy, { className: "w-3 h-3" }),
        "Why Choose Us"
      ] }),
      /* @__PURE__ */ jsx("h2", { id: "why-title", className: "section-title mb-5", children: "Publish with Confidence & Credibility" }),
      /* @__PURE__ */ jsx("p", { className: "section-subtitle mb-8", children: "Join hundreds of researchers who trust Sanmati Spectrum for fast, ethical, and impactful academic publishing." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxs(Link, { href: "/submission-guidelines/call-for-papers", className: "thm-btn", children: [
          /* @__PURE__ */ jsx(SendHorizonal, { className: "w-4 h-4" }),
          " Submit Now"
        ] }),
        /* @__PURE__ */ jsx(Link, { href: "/basic-info/about-journal", className: "thm-btn-outline", children: "Learn More" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: WHY.map((w, i) => {
      const Icon = w.icon;
      return /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.08 },
          className: "card-premium p-5 group",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/8 text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-all duration-300", children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-sm font-black text-primary mb-1", children: w.title }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted leading-relaxed", children: w.desc })
          ]
        },
        w.title
      );
    }) })
  ] }) }) });
}
function NewsSection({ news }) {
  if (!(news == null ? void 0 : news.length)) return null;
  return /* @__PURE__ */ jsx("section", { className: "section-py bg-white", "aria-labelledby": "news-title", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "section-tagline", children: [
        /* @__PURE__ */ jsx(Zap, { className: "w-3 h-3" }),
        "Latest Updates"
      ] }),
      /* @__PURE__ */ jsx("h2", { id: "news-title", className: "section-title", children: "News & Announcements" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-5", children: news.slice(0, 3).map((item, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        ...fadeUp,
        transition: { ...fadeUp.transition, delay: i * 0.1 },
        className: "card-premium overflow-hidden group",
        children: [
          /* @__PURE__ */ jsx("div", { className: "h-1 bg-gradient-to-r from-secondary to-accent" }),
          /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
            item.date && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-[11px] text-muted mb-3", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-3 h-3" }),
              new Date(item.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-primary leading-snug mb-2 line-clamp-2 group-hover:text-accent transition-colors", children: item.title || item.name }),
            item.description && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted leading-relaxed line-clamp-3", children: item.description })
          ] })
        ]
      },
      item.id || i
    )) })
  ] }) });
}
function CTABanner() {
  return /* @__PURE__ */ jsxs("section", { className: "py-16 bg-gradient-to-r from-secondary to-secondary-dark relative overflow-hidden", "aria-labelledby": "cta-title", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10", style: { backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }, "aria-hidden": "true" }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 container-custom text-center", children: /* @__PURE__ */ jsxs(motion.div, { ...fadeUp, children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-[11px] font-black uppercase tracking-[0.2em] mb-5", children: [
        /* @__PURE__ */ jsx(Star, { className: "w-3 h-3 fill-white" }),
        "Open for Submissions"
      ] }),
      /* @__PURE__ */ jsx("h2", { id: "cta-title", className: "text-3xl md:text-5xl font-serif font-black text-white mb-4 leading-tight", children: "Ready to Share Your Research?" }),
      /* @__PURE__ */ jsx("p", { className: "text-base text-white/75 mb-8 max-w-xl mx-auto", children: "Submit your manuscript today. Fast review, CrossRef DOI, and publication in India's premier multidisciplinary journal." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxs(Link, { href: "/submission-guidelines/call-for-papers", className: "inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-secondary font-black text-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300", children: [
          /* @__PURE__ */ jsx(SendHorizonal, { className: "w-4 h-4" }),
          " Submit Paper Now"
        ] }),
        /* @__PURE__ */ jsxs(Link, { href: "/contact", className: "inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/40 text-white font-bold text-sm hover:bg-white/10 transition-all duration-200", children: [
          /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }),
          " Contact Editorial"
        ] })
      ] })
    ] }) })
  ] });
}
function Home({ newsItems = [], featuredPapers = [], testimonials = [], currentIssue = null }) {
  const aiSummary = "Sanmati Spectrum of Knowledge & Emerging Discourse is a national multidisciplinary peer-reviewed quarterly academic journal (ISSN 3108-1819, Impact Factor 5.3, Open Access) published by Sanmati Publication. It publishes original research articles in Hindi and English across Science, Social Sciences, Humanities, Management, Law, Education, and Philosophy. Every article receives a CrossRef DOI. The journal follows COPE publication ethics and double-blind peer review. It is indexed in Google Scholar, ResearchGate, and Academia.edu.";
  return /* @__PURE__ */ jsxs(
    MainLayout,
    {
      title: "Sanmati Spectrum of Knowledge | India's Premier Research Journal",
      description: "India's top peer-reviewed multidisciplinary research journal. Publish your research with CrossRef DOI, Impact Factor 5.3, fast review, open access. ISSN 3108-1819.",
      aiSummary,
      children: [
        /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { className: "min-h-[92vh] bg-primary animate-pulse" }), children: /* @__PURE__ */ jsx(Hero, { papers: featuredPapers, currentIssue }) }),
        /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { className: "section-py bg-white" }), children: /* @__PURE__ */ jsx(JournalMetricsDashboard, {}) }),
        /* @__PURE__ */ jsx(LatestArticles, { papers: featuredPapers }),
        /* @__PURE__ */ jsx(DisciplinesSection, {}),
        /* @__PURE__ */ jsx(SubmissionProcess, {}),
        /* @__PURE__ */ jsx(WhyPublish, {}),
        /* @__PURE__ */ jsx(NewsSection, { news: newsItems }),
        /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { className: "section-py bg-warm-bg" }), children: /* @__PURE__ */ jsx(Testimonials, { testimonials }) }),
        /* @__PURE__ */ jsx(CTABanner, {}),
        /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { className: "section-py-sm" }), children: /* @__PURE__ */ jsx(NewsletterSection, {}) }),
        /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { className: "section-py bg-white" }), children: /* @__PURE__ */ jsx(HomeFAQ, {}) })
      ]
    }
  );
}
export {
  Home as default
};
