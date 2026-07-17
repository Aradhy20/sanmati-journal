import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useRef, useCallback, useEffect } from "react";
import { usePage, Link, Head } from "@inertiajs/react";
import { Mail, Phone, BookOpen, Sparkles, Globe, FileText, Award, Landmark, Users, BookMarked, Shield, Atom, SendHorizonal, FlaskConical, Briefcase, Search, Scale, GraduationCap, ChevronDown, X, Menu, ArrowRight, Star, MapPin, ChevronRight, Heart, Loader2, MessageCircle, ArrowUp } from "lucide-react";
import { AnimatePresence, motion, useMotionValue, useSpring, useScroll } from "framer-motion";
import { Toaster } from "react-hot-toast";
const NAV_ITEMS = [
  {
    name: "Journal",
    dropdown: [
      { name: "About Journal", href: "/basic-info/about-journal", icon: BookOpen, desc: "Mission, scope & publication history" },
      { name: "Vision & Mission", href: "/basic-info/vision-mission", icon: Sparkles, desc: "Our academic goals and values" },
      { name: "Objective & Scope", href: "/basic-info/objective-scope", icon: Globe, desc: "Research domains we cover" },
      { name: "Journal Info", href: "/basic-info/journal-info", icon: FileText, desc: "ISSN, frequency, language & details" },
      { name: "Indexing", href: "/basic-info/indexing", icon: Award, desc: "CrossRef, Google Scholar & more" },
      { name: "About Foundation", href: "/about-foundation", icon: Landmark, desc: "Sanmati Publication trust" }
    ]
  },
  {
    name: "Editorial",
    dropdown: [
      { name: "Editors", href: "/editorial-team/editors", icon: Users, desc: "Chief & associate editors" },
      { name: "Editorial Board", href: "/editorial-team/editorial-board", icon: BookMarked, desc: "Subject expert reviewers" },
      { name: "Advisory Board", href: "/editorial-team/advisory-board", icon: Shield, desc: "Senior academic advisors" },
      { name: "Technical Team", href: "/editorial-team/technical-team", icon: Atom, desc: "Publishing & production team" }
    ]
  },
  {
    name: "Authors",
    dropdown: [
      { name: "Call for Papers", href: "/submission-guidelines/call-for-papers", icon: SendHorizonal, desc: "Submit your research now" },
      { name: "Submission Guidelines", href: "/submission-guidelines", icon: FileText, desc: "Formatting & manuscript rules" },
      { name: "Research Areas", href: "/submission-guidelines/areas", icon: FlaskConical, desc: "Disciplines we accept" },
      { name: "Publication Charges", href: "/submission-guidelines/publication-charges", icon: Briefcase, desc: "APC & fee waivers" },
      { name: "Review Process", href: "/submission-guidelines/review-process", icon: Shield, desc: "Double-blind peer review" },
      { name: "Important Info", href: "/submission-guidelines/important-info", icon: BookOpen, desc: "Deadlines & key dates" },
      { name: "Track Manuscript", href: "/track-manuscript", icon: Search, desc: "Check your submission status" }
    ]
  },
  {
    name: "Policy",
    dropdown: [
      { name: "Publication Ethics", href: "/publication-policy/ethics", icon: Scale, desc: "COPE-aligned editorial standards" },
      { name: "Plagiarism Policy", href: "/publication-policy/plagiarism", icon: Shield, desc: "Originality & screening policy" },
      { name: "Peer Review", href: "/publication-policy/peer-review", icon: GraduationCap, desc: "Review methodology & criteria" },
      { name: "Compliance", href: "/compliance", icon: Award, desc: "Legal & regulatory compliance" }
    ]
  },
  { name: "Archive", href: "/archive" },
  { name: "Contact", href: "/contact" }
];
const QUICK_STATS = [
  { label: "ISSN (Online)", value: "3108-1819" },
  { label: "Impact Factor", value: "5.3" },
  { label: "Open Access", value: "100%" }
];
const MobileNavItem = ({ item, isActive, closeMenu }) => {
  var _a;
  const [open, setOpen] = useState(false);
  const hasChild = ((_a = item.dropdown) == null ? void 0 : _a.length) > 0;
  if (!hasChild) {
    return /* @__PURE__ */ jsxs(
      Link,
      {
        href: item.href,
        onClick: closeMenu,
        className: `flex items-center justify-between w-full px-5 py-3.5 rounded-2xl text-sm font-bold transition-all duration-200 ${isActive(item.href) ? "bg-secondary/10 text-secondary" : "text-white/90 hover:bg-white/10"}`,
        children: [
          item.name,
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 opacity-40" })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setOpen(!open),
        className: "flex items-center justify-between w-full px-5 py-3.5 rounded-2xl text-sm font-bold text-white/90 hover:bg-white/10 transition-all duration-200",
        "aria-expanded": open,
        children: [
          item.name,
          /* @__PURE__ */ jsx(ChevronDown, { className: `w-4 h-4 transition-transform duration-300 ${open ? "rotate-180 text-secondary" : "opacity-40"}` })
        ]
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: open && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] },
        className: "overflow-hidden",
        children: /* @__PURE__ */ jsx("div", { className: "ml-4 mt-1 mb-2 border-l border-white/15 pl-4 space-y-0.5", children: item.dropdown.map((sub) => /* @__PURE__ */ jsxs(
          Link,
          {
            href: sub.href,
            onClick: closeMenu,
            className: `flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-200 ${isActive(sub.href) ? "bg-secondary/15 text-secondary font-bold" : "text-white/70 hover:text-white hover:bg-white/10 font-medium"}`,
            children: [
              sub.icon && /* @__PURE__ */ jsx(sub.icon, { className: "w-4 h-4 flex-shrink-0 opacity-70" }),
              sub.name
            ]
          },
          sub.href
        )) })
      }
    ) })
  ] });
};
const MegaMenu = ({ item, isActive }) => /* @__PURE__ */ jsx(
  motion.div,
  {
    initial: { opacity: 0, y: 12, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 8, scale: 0.98 },
    transition: { duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] },
    className: "absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50",
    style: { minWidth: "520px" },
    children: /* @__PURE__ */ jsxs("div", { className: "bg-white/95 backdrop-blur-2xl border border-slate-200/80 rounded-2xl shadow-[0_24px_60px_-8px_rgba(11,31,58,0.20)] overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "p-2 grid grid-cols-2 gap-0.5", children: item.dropdown.map((sub) => /* @__PURE__ */ jsxs(
        Link,
        {
          href: sub.href,
          className: `group flex items-start gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 ${isActive(sub.href) ? "bg-primary/8 text-primary" : "hover:bg-slate-50 text-slate-700 hover:text-primary"}`,
          children: [
            /* @__PURE__ */ jsx("div", { className: `w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200 ${isActive(sub.href) ? "bg-primary text-white" : "bg-slate-100 text-slate-500 group-hover:bg-primary/10 group-hover:text-primary"}`, children: sub.icon && /* @__PURE__ */ jsx(sub.icon, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm font-bold leading-tight", children: sub.name }),
              sub.desc && /* @__PURE__ */ jsx("div", { className: "text-[11px] text-slate-400 mt-0.5 leading-tight line-clamp-1", children: sub.desc })
            ] })
          ]
        },
        sub.href
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "px-4 py-3 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[11px] text-slate-400 font-medium", children: "Sanmati Spectrum of Knowledge" }),
        /* @__PURE__ */ jsx("span", { className: "ds-badge-accent", children: "ISSN 3108-1819" })
      ] })
    ] })
  }
);
const Navbar = ({ onOpenSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef(null);
  const { url } = usePage();
  const isActive = useCallback((href) => {
    if (!href) return false;
    return url === href || url.startsWith(href + "/") || url.startsWith(href + "?");
  }, [url]);
  const isGroupActive = useCallback((item) => {
    var _a;
    if (item.href) return isActive(item.href);
    return (_a = item.dropdown) == null ? void 0 : _a.some((sub) => isActive(sub.href));
  }, [isActive]);
  useEffect(() => {
    let last = false;
    const onScroll = () => {
      const next = window.scrollY > 20;
      if (next !== last) {
        last = next;
        setScrolled(next);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [url]);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  const openDropdown = (name) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };
  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 120);
  };
  const stayOpen = () => {
    clearTimeout(timeoutRef.current);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.removeAttribute("data-theme");
      localStorage.removeItem("site-theme");
    }
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-primary text-white py-2 px-4 text-center hidden md:flex items-center justify-center gap-6", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4 text-[11px] font-medium text-white/80", children: QUICK_STATS.map((s, i) => /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-secondary font-black", children: s.value }),
        /* @__PURE__ */ jsx("span", { children: s.label }),
        i < QUICK_STATS.length - 1 && /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-white/30 ml-2" })
      ] }, i)) }),
      /* @__PURE__ */ jsxs("div", { className: "ml-auto flex items-center gap-4 text-[11px] text-white/70", children: [
        /* @__PURE__ */ jsxs("a", { href: "mailto:sanmatijournal@gmail.com", className: "flex items-center gap-1.5 hover:text-white transition-colors", children: [
          /* @__PURE__ */ jsx(Mail, { className: "w-3 h-3" }),
          "sanmatijournal@gmail.com"
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "tel:+918979782949", className: "flex items-center gap-1.5 hover:text-white transition-colors", children: [
          /* @__PURE__ */ jsx(Phone, { className: "w-3 h-3" }),
          "+91 89797 82949"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "nav",
      {
        role: "navigation",
        "aria-label": "Main navigation",
        className: `sticky top-0 z-[100] w-full transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-2xl shadow-[0_4px_24px_rgba(11,31,58,0.10)] border-b border-slate-200/60" : "bg-white border-b border-slate-100"}`,
        children: /* @__PURE__ */ jsx("div", { className: "max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16 lg:h-18", children: [
          /* @__PURE__ */ jsxs(Link, { href: "/", className: "flex items-center gap-3 flex-shrink-0 group", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/logo.jpg",
                  alt: "Sanmati Journal",
                  className: "h-10 w-10 rounded-xl object-cover shadow-sm group-hover:shadow-md transition-shadow duration-300"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white", "aria-hidden": "true" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "hidden sm:block", children: [
              /* @__PURE__ */ jsx("div", { className: "text-[13px] font-black text-primary leading-tight tracking-tight", children: "Sanmati Spectrum" }),
              /* @__PURE__ */ jsx("div", { className: "text-[10px] text-muted font-medium leading-tight", children: "of Knowledge & Emerging Discourse" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hidden lg:flex items-center gap-0.5", children: NAV_ITEMS.map((item) => item.dropdown ? /* @__PURE__ */ jsxs(
            "div",
            {
              className: "relative",
              onMouseEnter: () => openDropdown(item.name),
              onMouseLeave: closeDropdown,
              children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onFocus: () => openDropdown(item.name),
                    onBlur: closeDropdown,
                    className: `flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[13px] font-bold transition-all duration-200 ${isGroupActive(item) ? "text-primary bg-primary/8" : "text-slate-600 hover:text-primary hover:bg-slate-50"}`,
                    "aria-haspopup": "true",
                    "aria-expanded": activeDropdown === item.name,
                    children: [
                      item.name,
                      /* @__PURE__ */ jsx(ChevronDown, { className: `w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180 text-secondary" : ""}` })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(AnimatePresence, { children: activeDropdown === item.name && /* @__PURE__ */ jsx("div", { onMouseEnter: stayOpen, onMouseLeave: closeDropdown, children: /* @__PURE__ */ jsx(MegaMenu, { item, isActive }) }) })
              ]
            },
            item.name
          ) : /* @__PURE__ */ jsx(
            Link,
            {
              href: item.href,
              className: `px-3.5 py-2 rounded-xl text-[13px] font-bold transition-all duration-200 ${isActive(item.href) ? "text-primary bg-primary/8" : "text-slate-600 hover:text-primary hover:bg-slate-50"}`,
              children: item.name
            },
            item.name
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: onOpenSearch,
                "aria-label": "Search articles (Ctrl+K)",
                title: "Search (Ctrl+K)",
                className: "flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-primary transition-all duration-200",
                children: [
                  /* @__PURE__ */ jsx(Search, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsxs("span", { className: "hidden md:flex items-center gap-1.5 text-xs text-slate-400", children: [
                    "Search",
                    /* @__PURE__ */ jsx("kbd", { className: "px-1.5 py-0.5 bg-white rounded text-[10px] border border-slate-200 font-mono", children: "⌘K" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              Link,
              {
                href: "/submission-guidelines/call-for-papers",
                className: "hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary text-white text-xs font-black uppercase tracking-wider hover:bg-secondary-dark transition-all duration-200 shadow-md hover:shadow-[0_8px_20px_rgba(139,108,48,0.35)]",
                children: [
                  /* @__PURE__ */ jsx(SendHorizonal, { className: "w-3.5 h-3.5" }),
                  "Submit Paper"
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setIsOpen(!isOpen),
                className: "lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-all duration-200",
                "aria-label": isOpen ? "Close menu" : "Open menu",
                "aria-expanded": isOpen,
                children: isOpen ? /* @__PURE__ */ jsx(X, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(Menu, { className: "w-5 h-5" })
              }
            )
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: "100%" },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: "100%" },
        transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
        className: "fixed inset-0 z-[99] lg:hidden flex flex-col",
        style: { background: "linear-gradient(160deg, #0B1F3A 0%, #1a3560 50%, #0B2D5E 100%)" },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b border-white/10 flex-shrink-0", children: [
            /* @__PURE__ */ jsxs(Link, { href: "/", onClick: () => setIsOpen(false), className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("img", { src: "/logo.jpg", alt: "Sanmati", className: "h-9 w-9 rounded-xl object-cover" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm font-black text-white", children: "Sanmati Spectrum" }),
                /* @__PURE__ */ jsx("div", { className: "text-[10px] text-white/50", children: "of Knowledge" })
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setIsOpen(false),
                className: "w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors",
                "aria-label": "Close menu",
                children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto px-4 py-4 space-y-1", children: NAV_ITEMS.map((item) => /* @__PURE__ */ jsx(
            MobileNavItem,
            {
              item,
              isActive,
              closeMenu: () => setIsOpen(false)
            },
            item.name
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "px-5 py-5 border-t border-white/10 space-y-3 flex-shrink-0", children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                href: "/submission-guidelines/call-for-papers",
                onClick: () => setIsOpen(false),
                className: "flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-secondary text-white font-black text-sm hover:bg-secondary-dark transition-colors",
                children: [
                  /* @__PURE__ */ jsx(SendHorizonal, { className: "w-4 h-4" }),
                  "Submit Your Research Paper"
                ]
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-6 text-[11px] text-white/40", children: [
              /* @__PURE__ */ jsx("span", { children: "ISSN: 3108-1819" }),
              /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-white/30" }),
              /* @__PURE__ */ jsx("span", { children: "Impact Factor: 5.3" }),
              /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-white/30" }),
              /* @__PURE__ */ jsx("span", { children: "Open Access" })
            ] })
          ] })
        ]
      }
    ) })
  ] });
};
const FOOTER_LINKS = {
  journal: {
    title: "The Journal",
    links: [
      { name: "About Journal", href: "/basic-info/about-journal" },
      { name: "Vision & Mission", href: "/basic-info/vision-mission" },
      { name: "Objective & Scope", href: "/basic-info/objective-scope" },
      { name: "Journal Info", href: "/basic-info/journal-info" },
      { name: "Indexing", href: "/basic-info/indexing" },
      { name: "About Foundation", href: "/about-foundation" }
    ]
  },
  editorial: {
    title: "Editorial",
    links: [
      { name: "Editors", href: "/editorial-team/editors" },
      { name: "Editorial Board", href: "/editorial-team/editorial-board" },
      { name: "Advisory Board", href: "/editorial-team/advisory-board" },
      { name: "Technical Team", href: "/editorial-team/technical-team" }
    ]
  },
  authors: {
    title: "For Authors",
    links: [
      { name: "Call for Papers", href: "/submission-guidelines/call-for-papers" },
      { name: "Author Guidelines", href: "/submission-guidelines" },
      { name: "Research Areas", href: "/submission-guidelines/areas" },
      { name: "Publication Charges", href: "/submission-guidelines/publication-charges" },
      { name: "Review Process", href: "/submission-guidelines/review-process" },
      { name: "Track Manuscript", href: "/track-manuscript" }
    ]
  },
  policy: {
    title: "Policies",
    links: [
      { name: "Publication Ethics", href: "/publication-policy/ethics" },
      { name: "Plagiarism Policy", href: "/publication-policy/plagiarism" },
      { name: "Peer Review", href: "/publication-policy/peer-review" },
      { name: "Compliance", href: "/compliance" },
      { name: "Awards", href: "/awards" },
      { name: "Contact Us", href: "/contact" }
    ]
  }
};
const INDEXING_BADGES = [
  { name: "CrossRef DOI", color: "bg-orange-100 text-orange-700 border-orange-200" },
  { name: "Google Scholar", color: "bg-blue-100 text-blue-700 border-blue-200" },
  { name: "ISSN Portal", color: "bg-purple-100 text-purple-700 border-purple-200" },
  { name: "ResearchGate", color: "bg-teal-100 text-teal-700 border-teal-200" },
  { name: "Academia.edu", color: "bg-slate-100 text-slate-700 border-slate-200" },
  { name: "Open Access", color: "bg-emerald-100 text-emerald-700 border-emerald-200" }
];
function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const handleSubscribe = async (e) => {
    var _a;
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-CSRF-TOKEN": (_a = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : _a.content },
        body: JSON.stringify({ email })
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setEmail("");
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 4e3);
  };
  return /* @__PURE__ */ jsxs("footer", { className: "relative bg-slate-900 text-white overflow-hidden", role: "contentinfo", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-emerald", "aria-hidden": "true" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-40 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none", "aria-hidden": "true" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none", "aria-hidden": "true" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-4 space-y-6", children: [
          /* @__PURE__ */ jsxs(Link, { href: "/", className: "flex items-center gap-3 group w-fit", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/logo.jpg",
                alt: "Sanmati Spectrum Journal",
                className: "h-12 w-12 rounded-xl object-cover border-2 border-white/10 group-hover:border-secondary/50 transition-colors duration-300"
              }
            ),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-base font-black text-white leading-tight", children: "Sanmati Spectrum" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-white/50 leading-tight", children: "of Knowledge & Emerging Discourse" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-white/60 leading-relaxed max-w-xs", children: "A national multidisciplinary peer-reviewed quarterly research journal dedicated to advancing scholarly discourse across disciplines." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "badge-issn text-[10px]", children: "ISSN 3108-1819" }),
            /* @__PURE__ */ jsx("span", { className: "badge-open text-[10px]", children: "Open Access" }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold bg-amber-900/30 text-amber-400 border border-amber-800/40 rounded-md", children: [
              /* @__PURE__ */ jsx(Star, { className: "w-2.5 h-2.5" }),
              "IF 5.3"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2.5 text-sm text-white/60", children: [
            /* @__PURE__ */ jsxs("a", { href: "mailto:sanmatijournal@gmail.com", className: "flex items-center gap-2.5 hover:text-white transition-colors", children: [
              /* @__PURE__ */ jsx(Mail, { className: "w-3.5 h-3.5 text-secondary flex-shrink-0" }),
              "sanmatijournal@gmail.com"
            ] }),
            /* @__PURE__ */ jsxs("a", { href: "tel:+918979782949", className: "flex items-center gap-2.5 hover:text-white transition-colors", children: [
              /* @__PURE__ */ jsx(Phone, { className: "w-3.5 h-3.5 text-secondary flex-shrink-0" }),
              "+91 89797 82949"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2.5", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "w-3.5 h-3.5 text-secondary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { children: "Patel Nagar, Haridwar, Uttarakhand 249401, India" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs font-black uppercase tracking-widest text-white/40", children: "Stay Updated" }),
            /* @__PURE__ */ jsxs("form", { onSubmit: handleSubscribe, className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                  placeholder: "Your email address",
                  className: "flex-1 px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-secondary/50 focus:bg-white/15 transition-all duration-200",
                  required: true,
                  disabled: status === "loading" || status === "success"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  disabled: status === "loading" || status === "success",
                  className: "px-4 py-2.5 rounded-xl bg-secondary hover:bg-secondary-dark disabled:opacity-50 transition-all duration-200 flex-shrink-0",
                  "aria-label": "Subscribe",
                  children: /* @__PURE__ */ jsx(SendHorizonal, { className: "w-4 h-4 text-white" })
                }
              )
            ] }),
            status === "success" && /* @__PURE__ */ jsx("p", { className: "text-xs text-emerald-400", children: "✓ Subscribed successfully!" }),
            status === "error" && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-400", children: "Something went wrong. Try again." })
          ] })
        ] }),
        Object.values(FOOTER_LINKS).map((section) => /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xs font-black uppercase tracking-[0.2em] text-white/40", children: section.title }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: section.links.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            Link,
            {
              href: link.href,
              className: "group flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors duration-200",
              children: [
                /* @__PURE__ */ jsx(ChevronRight, { className: "w-3 h-3 text-secondary/60 group-hover:text-secondary transition-colors flex-shrink-0 -ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" }),
                link.name
              ]
            }
          ) }, link.href)) })
        ] }, section.title))
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "border-t border-white/8 py-6", children: /* @__PURE__ */ jsx("div", { className: "max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-4", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-white/30 flex-shrink-0", children: "Indexed & Abstracted In" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center gap-2", children: INDEXING_BADGES.map((b) => /* @__PURE__ */ jsx(
          "span",
          {
            className: `inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-bold border ${b.color} opacity-80 hover:opacity-100 transition-opacity`,
            children: b.name
          },
          b.name
        )) })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "border-t border-white/8 py-5", children: /* @__PURE__ */ jsx("div", { className: "max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/30", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "© ",
          year,
          " Sanmati Spectrum of Knowledge & Emerging Discourse. All rights reserved."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
          "Made with ",
          /* @__PURE__ */ jsx(Heart, { className: "w-3 h-3 text-red-400 mx-0.5 fill-red-400", "aria-label": "love" }),
          " for researchers across India"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { href: "/publication-policy/ethics", className: "hover:text-white transition-colors", children: "Ethics" }),
          /* @__PURE__ */ jsx(Link, { href: "/publication-policy/plagiarism", className: "hover:text-white transition-colors", children: "Plagiarism" }),
          /* @__PURE__ */ jsx(Link, { href: "/compliance", className: "hover:text-white transition-colors", children: "Compliance" }),
          /* @__PURE__ */ jsx(Link, { href: "/contact", className: "hover:text-white transition-colors", children: "Contact" })
        ] })
      ] }) }) })
    ] })
  ] });
}
function Seo({ title, description, keywords, image, type = "website", author, publishedTime, jsonLd, aiSummary }) {
  const siteName = "Sanmati Spectrum of Knowledge";
  const defaultDescription = "Top-ranking research journal in India (Impact Factor 5.3). Publish your research paper fast. A high-authority, peer-reviewed multidisciplinary academic journal indexing high-quality research and books.";
  const defaultKeywords = "peer reviewed journal India, multidisciplinary research journal, publish research paper India, international journal India, sanmati spectrum of knowledge, academic publishing, open access journal";
  const defaultImage = "/logo.jpg";
  const siteUrl = "https://sanmatijournal.in";
  const { url } = usePage();
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const finalDescription = description || aiSummary || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalImage = image ? image.startsWith("http") ? image : `${siteUrl}${image}` : `${siteUrl}${defaultImage}`;
  const canonicalUrl = `${siteUrl}${url}`;
  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "AcademicJournal",
    "name": siteName,
    "url": siteUrl,
    "description": defaultDescription,
    "issn": "3108-1819",
    "publisher": {
      "@type": "Organization",
      "name": "Sanmati Publication",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.jpg`
      }
    }
  };
  const breadcrumbJsonLd = (jsonLd == null ? void 0 : jsonLd.breadcrumb) ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": jsonLd.breadcrumb.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url ? item.url.startsWith("http") ? item.url : `${siteUrl}${item.url}` : void 0
    }))
  } : null;
  return /* @__PURE__ */ jsxs(Head, { children: [
    /* @__PURE__ */ jsx("title", { children: fullTitle }),
    aiSummary && /* @__PURE__ */ jsx("meta", { name: "ai-agent-summary", content: aiSummary }),
    aiSummary && /* @__PURE__ */ jsx("meta", { name: "summary", content: aiSummary }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: finalDescription }),
    /* @__PURE__ */ jsx("meta", { name: "keywords", content: finalKeywords }),
    /* @__PURE__ */ jsx("meta", { name: "author", content: author || "Sanmati Journal" }),
    /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonicalUrl }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: type }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: fullTitle }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: finalDescription }),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: finalImage }),
    /* @__PURE__ */ jsx("meta", { property: "og:url", content: canonicalUrl }),
    /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: siteName }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: fullTitle }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: finalDescription }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: finalImage }),
    publishedTime && /* @__PURE__ */ jsx("meta", { property: "article:published_time", content: publishedTime }),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify((jsonLd == null ? void 0 : jsonLd.schema) || jsonLd || defaultJsonLd) }),
    breadcrumbJsonLd && /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd) })
  ] });
}
const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 30, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], .group')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    setIsVisible(true);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);
  return /* @__PURE__ */ jsxs("div", { className: "fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "absolute w-10 h-10 border border-secondary/30 rounded-full",
        style: {
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: "-50%",
          y: "-50%"
        },
        animate: {
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? "rgba(87, 118, 241, 0.5)" : "rgba(255, 120, 45, 0.3)",
          opacity: isVisible ? 1 : 0
        },
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "absolute w-1.5 h-1.5 bg-secondary rounded-full",
        style: {
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: "-50%",
          y: "-50%"
        },
        animate: {
          scale: isHovering ? 0.5 : 1,
          backgroundColor: isHovering ? "rgba(87, 118, 241, 1)" : "rgba(255, 120, 45, 1)",
          opacity: isVisible ? 1 : 0
        }
      }
    )
  ] });
};
const Preloader = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 250);
    return () => clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: loading && /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "fixed inset-0 z-[10000] bg-dark flex flex-col items-center justify-center gap-8",
      initial: { opacity: 1 },
      exit: {
        opacity: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
      },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              className: "w-20 h-20 rounded-2xl bg-primary/10 border border-white/5 flex items-center justify-center relative z-10 overflow-hidden",
              children: /* @__PURE__ */ jsx("img", { src: "/logo.jpg", alt: "Logo", className: "w-12 h-12 object-contain" })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute inset-0 border border-secondary/30 rounded-2xl",
              initial: { scale: 0.8, opacity: 0 },
              animate: { scale: 1.1, opacity: 0 },
              transition: { duration: 1.5, repeat: Infinity, ease: "easeOut" }
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx(
            motion.h3,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.2 },
              className: "text-white font-serif text-2xl font-bold tracking-tight mb-3",
              children: "Sanmati Journal"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "w-32 h-[1px] bg-white/5 mx-auto relative overflow-hidden", children: /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute inset-0 bg-secondary",
              initial: { x: "-100%" },
              animate: { x: "100%" },
              transition: { duration: 1, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }
            }
          ) }),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              initial: { opacity: 0 },
              animate: { opacity: 0.3 },
              transition: { delay: 0.4 },
              className: "text-white text-[9px] uppercase tracking-[0.4em] mt-5 font-black",
              children: "Academic Excellence"
            }
          )
        ] })
      ]
    }
  ) });
};
function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState({ papers: [], books: [] });
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        var _a;
        return (_a = inputRef.current) == null ? void 0 : _a.focus();
      }, 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
      setResults({ papers: [], books: [] });
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults({ papers: [], books: [] });
      return;
    }
    const fetchResults = async () => {
      setIsSearching(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setResults(data);
      } catch (error) {
        console.error("Search failed", error);
      } finally {
        setIsSearching(false);
      }
    };
    const timeoutId = setTimeout(fetchResults, 400);
    return () => clearTimeout(timeoutId);
  }, [query]);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[100] flex items-start justify-center pt-10 sm:pt-20 px-4 pb-20", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: onClose,
        className: "absolute inset-0 bg-dark/60 backdrop-blur-md"
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95, y: -20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95, y: -20 },
        transition: { duration: 0.2, ease: "easeOut" },
        className: "relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[85vh]",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "relative flex items-center px-6 py-4 border-b border-gray-100 bg-surface/50", children: [
            /* @__PURE__ */ jsx(Search, { className: "w-6 h-6 text-primary mr-4 opacity-50" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                ref: inputRef,
                type: "text",
                value: query,
                onChange: (e) => setQuery(e.target.value),
                placeholder: "Search papers, authors, books...",
                className: "w-full bg-transparent border-none outline-none text-xl font-medium text-dark placeholder:text-dark/20 focus:ring-0 p-0"
              }
            ),
            isSearching ? /* @__PURE__ */ jsx(Loader2, { className: "w-5 h-5 text-primary animate-spin ml-4" }) : /* @__PURE__ */ jsx(
              "button",
              {
                onClick: onClose,
                className: "p-2 hover:bg-gray-200 rounded-full transition-colors ml-2",
                "aria-label": "Close search modal",
                children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5 text-dark/50" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-y-auto p-2 scrollbar-hide", children: [
            query.length > 0 && query.length < 2 && /* @__PURE__ */ jsx("div", { className: "p-10 text-center text-muted text-sm font-medium", children: "Please enter at least 2 characters..." }),
            query.length >= 2 && results.papers.length === 0 && results.books.length === 0 && !isSearching && /* @__PURE__ */ jsxs("div", { className: "p-10 text-center text-muted", children: [
              /* @__PURE__ */ jsx(Search, { className: "w-10 h-10 mx-auto text-gray-200 mb-4" }),
              /* @__PURE__ */ jsxs("p", { className: "font-medium text-dark/70", children: [
                'No results found for "',
                query,
                '"'
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm mt-1", children: "Try searching for a different author, title, or topic." })
            ] }),
            (results.papers.length > 0 || results.books.length > 0) && /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-4", children: [
              results.papers.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3 px-2", children: [
                  /* @__PURE__ */ jsx(FileText, { className: "w-4 h-4 text-secondary" }),
                  /* @__PURE__ */ jsx("h4", { className: "text-xs font-black uppercase tracking-widest text-dark/40", children: "Research Papers" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-2", children: results.papers.map((paper) => /* @__PURE__ */ jsxs(
                  Link,
                  {
                    href: "/archive",
                    onClick: onClose,
                    className: "block p-4 rounded-2xl hover:bg-primary/5 border border-transparent hover:border-primary/10 transition-colors group",
                    children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-bold text-dark group-hover:text-primary transition-colors leading-tight mb-1", children: paper.title }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted truncate", children: paper.authors })
                    ]
                  },
                  paper.id
                )) })
              ] }),
              results.books.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3 px-2", children: [
                  /* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4 text-primary" }),
                  /* @__PURE__ */ jsx("h4", { className: "text-xs font-black uppercase tracking-widest text-dark/40", children: "Published Volumes" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-2", children: results.books.map((book) => /* @__PURE__ */ jsxs(
                  Link,
                  {
                    href: "/book-publication",
                    onClick: onClose,
                    className: "flex items-center gap-4 p-3 rounded-2xl hover:bg-secondary/5 border border-transparent hover:border-secondary/10 transition-colors group",
                    children: [
                      book.cover_image && /* @__PURE__ */ jsx("div", { className: "w-10 h-12 rounded border border-gray-100 overflow-hidden flex-shrink-0", children: /* @__PURE__ */ jsx("img", { src: "/storage/" + book.cover_image, alt: book.title, className: "w-full h-full object-cover", loading: "lazy" }) }),
                      /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-bold text-dark group-hover:text-secondary transition-colors leading-tight truncate", children: book.title }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted truncate", children: book.author })
                      ] })
                    ]
                  },
                  book.id
                )) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-surface/50 border-t border-gray-100 px-6 py-3 flex items-center justify-between text-[11px] font-medium text-muted", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 bg-gray-200 rounded font-mono text-dark", children: "ESC" }),
              " to close"
            ] }),
            /* @__PURE__ */ jsx("span", { children: "Sanmati Spectrum Search Engine" })
          ] })
        ]
      }
    )
  ] }) });
}
function MainLayout({ children, title, description, keywords, jsonLd, aiSummary }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 1e-3
  });
  useEffect(() => {
    const handleOpenSearch = () => setIsSearchOpen(true);
    window.addEventListener("open-search", handleOpenSearch);
    const handleScroll = () => setIsScrolled(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("open-search", handleOpenSearch);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col bg-warm-bg font-sans antialiased relative overflow-x-hidden selection:bg-primary/10 selection:text-primary", children: [
    /* @__PURE__ */ jsx(motion.div, { style: { scaleX }, className: "fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent origin-left z-[110]" }),
    /* @__PURE__ */ jsx(Seo, { title, description, keywords, jsonLd, aiSummary }),
    /* @__PURE__ */ jsx("a", { href: "#main-content", className: "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-primary focus:text-white focus:rounded-xl focus:shadow-xl font-bold", children: "Skip to main content" }),
    /* @__PURE__ */ jsx(Toaster, { position: "top-center", toastOptions: {
      duration: 5e3,
      style: { background: "#fff", color: "#052143", fontWeight: "bold" }
    } }),
    /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 pointer-events-none z-0 overflow-hidden hidden md:block", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-blob will-change-transform" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] bg-secondary/5 rounded-full blur-[140px] animate-blob animation-delay-4000 will-change-transform" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px] animate-blob animation-delay-2000 will-change-transform" })
    ] }),
    /* @__PURE__ */ jsx(CustomCursor, {}),
    /* @__PURE__ */ jsx(Preloader, {}),
    /* @__PURE__ */ jsx("header", { role: "banner", className: "overflow-x-visible", children: /* @__PURE__ */ jsx(Navbar, { onOpenSearch: () => setIsSearchOpen(true) }) }),
    /* @__PURE__ */ jsx(SearchModal, { isOpen: isSearchOpen, onClose: () => setIsSearchOpen(false) }),
    /* @__PURE__ */ jsx("main", { id: "main-content", className: "flex-grow relative z-10", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.99, y: 5 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 1.01, y: -5 },
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        children
      },
      title
    ) }) }),
    /* @__PURE__ */ jsx("footer", { role: "contentinfo", children: /* @__PURE__ */ jsx(Footer, {}) }),
    /* @__PURE__ */ jsx(
      motion.a,
      {
        href: "https://wa.me/918979782949",
        target: "_blank",
        rel: "noreferrer",
        whileHover: { scale: 1.1, translateY: -5 },
        whileTap: { scale: 0.95 },
        className: "fixed bottom-6 right-6 lg:bottom-10 lg:right-10 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.3)] flex items-center justify-center z-[60] border-2 border-white focus:outline-none focus:ring-4 focus:ring-[#25D366]/50",
        "aria-label": "Contact on WhatsApp",
        children: /* @__PURE__ */ jsx(MessageCircle, { className: "w-7 h-7" })
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: isScrolled && /* @__PURE__ */ jsx(
      motion.button,
      {
        initial: { opacity: 0, scale: 0.8, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.8, y: 20 },
        whileHover: { scale: 1.1, translateY: -5 },
        whileTap: { scale: 0.95 },
        onClick: scrollToTop,
        className: "fixed bottom-24 right-6 lg:bottom-28 lg:right-10 w-12 h-12 bg-dark text-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex items-center justify-center z-[60] border border-white/20 focus:outline-none focus:ring-4 focus:ring-dark/50",
        "aria-label": "Scroll to top",
        children: /* @__PURE__ */ jsx(ArrowUp, { className: "w-6 h-6" })
      }
    ) })
  ] });
}
export {
  MainLayout as M,
  Seo as S
};
