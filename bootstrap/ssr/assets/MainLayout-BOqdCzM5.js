import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { usePage, Link, Head } from "@inertiajs/react";
import { ChevronDown, ArrowUpRight, Search, Sun, Moon, X, Menu, ArrowRight, Linkedin, Facebook, Twitter, MapPin, Mail, ShieldCheck, Award, Loader2, FileText, BookOpen, MessageCircle, ArrowUp } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useSpring, useScroll } from "framer-motion";
import { Toaster } from "react-hot-toast";
const MobileNavDropdown = ({ item, isActive, setIsOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setIsExpanded(!isExpanded),
        className: "w-full flex items-center justify-between px-4 py-3 text-sm font-bold text-dark hover:text-primary hover:bg-primary/5 rounded-xl transition-colors",
        "aria-expanded": isExpanded,
        children: [
          item.name,
          /* @__PURE__ */ jsx(ChevronDown, { className: `w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180 text-secondary" : "text-gray-400"}` })
        ]
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: isExpanded && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: { duration: 0.2 },
        className: "overflow-hidden",
        children: /* @__PURE__ */ jsx("div", { className: "pl-2 pr-2 py-1 grid grid-cols-1 gap-1 border-l-2 border-primary/10 ml-6 mt-1 mb-2", children: item.dropdown.map((subItem) => /* @__PURE__ */ jsx(
          Link,
          {
            href: subItem.href,
            className: `block px-4 py-2.5 text-[13px] rounded-xl transition-colors ${isActive(subItem.href) ? "bg-primary/5 text-primary font-bold" : "text-dark/70 font-medium hover:text-primary hover:bg-primary/5"}`,
            onClick: () => setIsOpen(false),
            children: subItem.name
          },
          subItem.name
        )) })
      }
    ) })
  ] });
};
const Navbar = ({ onOpenSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });
  const timeoutRef = useRef(null);
  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
    }
  };
  const { url } = usePage();
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleMouseEnter = (name) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };
  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "#",
      dropdown: [
        { name: "About the Journal", href: "/basic-info/about-journal" },
        { name: "Vision & Mission", href: "/basic-info/vision-mission" },
        { name: "Objective & Scope", href: "/basic-info/objective-scope" },
        { name: "Journal Information", href: "/basic-info/journal-info" },
        { name: "Compliance", href: "/compliance" }
      ]
    },
    {
      name: "Editorial",
      href: "#",
      dropdown: [
        { name: "Editor", href: "/editorial-team/editors" },
        { name: "Editorial Board", href: "/editorial-team/editorial-board" },
        { name: "Advisory Board", href: "/editorial-team/advisory-board" },
        { name: "Technical Team", href: "/editorial-team/technical-team" }
      ]
    },
    {
      name: "Authors",
      href: "#",
      dropdown: [
        { name: "Submission Guidelines", href: "/submission-guidelines" },
        { name: "Call for Papers", href: "/submission-guidelines/call-for-papers" },
        { name: "Areas of Submission", href: "/submission-guidelines/areas" },
        { name: "Publication Charges", href: "/submission-guidelines/publication-charges" },
        { name: "Publication Ethics", href: "/publication-policy/ethics" },
        { name: "Plagiarism Policy", href: "/publication-policy/plagiarism" },
        { name: "Peer Review Process", href: "/publication-policy/peer-review" }
      ]
    },
    { name: "Archive", href: "/archive" },
    { name: "Foundation", href: "/about-foundation" },
    { name: "Books", href: "/book-publication" },
    {
      name: "Events",
      href: "#",
      dropdown: [
        { name: "Seminars", href: "/academic-events/seminar" },
        { name: "Conferences", href: "/academic-events/conferences" },
        { name: "Workshops", href: "/academic-events/workshop" },
        { name: "Awards", href: "/awards" }
      ]
    },
    {
      name: "Gallery",
      href: "/gallery-view",
      dropdown: [
        { name: "Photos", href: "/gallery/photo" },
        { name: "News", href: "/media-news" }
      ]
    },
    { name: "Contact", href: "/contact" }
  ];
  const isActive = (href) => {
    if (href === "/") return url === "/";
    return url.startsWith(href);
  };
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 flex flex-col w-full overflow-x-visible", children: /* @__PURE__ */ jsxs("nav", { className: `w-full relative z-40 overflow-x-visible transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border-b ${scrolled ? "bg-white/80 backdrop-blur-xl border-slate-200/60 shadow-lg shadow-primary/5 py-1.5" : "bg-white/60 backdrop-blur-md border-transparent py-4"}`, children: [
    /* @__PURE__ */ jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16 sm:h-[72px] gap-3 xl:gap-6", children: [
      /* @__PURE__ */ jsxs(Link, { href: "/", className: "flex items-center gap-3 flex-shrink-0 group min-w-0 relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-2 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: `rounded-xl overflow-hidden shadow-sm border border-slate-100 flex-shrink-0 bg-white relative z-10 group-hover:shadow-lg transition-all duration-500 ${scrolled ? "w-9 h-9 p-0.5" : "w-11 h-11 sm:w-12 sm:h-12 p-0.5"}`,
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/logo.jpg",
                alt: "Sanmati Journal Logo",
                className: "object-contain w-full h-full transition-transform duration-700 group-hover:scale-110"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "hidden sm:flex flex-col min-w-0 relative z-10", children: [
          /* @__PURE__ */ jsxs("span", { className: `block font-serif font-bold text-primary leading-none tracking-tight transition-all duration-500 ${scrolled ? "text-lg" : "text-xl sm:text-2xl"}`, children: [
            "Sanmati ",
            /* @__PURE__ */ jsx("span", { className: "text-secondary font-normal italic", children: "Spectrum" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-[8px] font-bold tracking-[0.3em] uppercase text-muted mt-0.5 font-sans", children: "Academic Research" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden xl:flex items-center justify-center gap-1 flex-1 min-w-0 overflow-visible relative", children: navItems.map((item) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "relative flex-shrink-0 px-1",
          onMouseEnter: () => handleMouseEnter(item.name),
          onMouseLeave: handleMouseLeave,
          children: [
            item.href === "#" ? /* @__PURE__ */ jsxs(
              "button",
              {
                "aria-haspopup": "true",
                "aria-expanded": activeDropdown === item.name,
                className: `relative group/nav flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.15em] px-3 py-2 rounded-lg transition-all duration-300 font-sans ${activeDropdown === item.name || isActive(item.href) ? "text-primary" : "text-slate-600 hover:text-primary"}`,
                children: [
                  item.name,
                  item.dropdown && /* @__PURE__ */ jsx(ChevronDown, { className: `w-3 h-3 transition-transform duration-500 ${activeDropdown === item.name ? "rotate-180 text-secondary" : "text-slate-400 group-hover/nav:text-secondary"}` }),
                  /* @__PURE__ */ jsx("span", { className: `absolute bottom-0 left-3 right-3 h-0.5 bg-secondary rounded-full origin-left transition-transform duration-500 scale-x-0 ${activeDropdown === item.name ? "scale-x-100" : "group-hover/nav:scale-x-100"}` })
                ]
              }
            ) : /* @__PURE__ */ jsxs(
              Link,
              {
                href: item.href,
                className: `relative group/nav flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.15em] px-3 py-2 rounded-lg transition-all duration-300 font-sans ${isActive(item.href) ? "text-primary" : "text-slate-600 hover:text-primary"}`,
                children: [
                  item.name,
                  /* @__PURE__ */ jsx("span", { className: `absolute bottom-0 left-3 right-3 h-0.5 bg-secondary rounded-full transition-all duration-500 ${isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100 origin-left"}` })
                ]
              }
            ),
            item.dropdown && /* @__PURE__ */ jsx(AnimatePresence, { children: activeDropdown === item.name && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 15, scale: 0.97 },
                animate: { opacity: 1, y: 0, scale: 1 },
                exit: { opacity: 0, y: 10, scale: 0.98 },
                transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
                className: "absolute top-full left-0 w-64 bg-white/95 backdrop-blur-2xl shadow-xl shadow-primary/5 rounded-xl border border-slate-100 p-1.5 mt-3 z-50 origin-top-left overflow-hidden",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary" }),
                  item.dropdown.map((subItem) => /* @__PURE__ */ jsxs(
                    Link,
                    {
                      href: subItem.href,
                      className: `flex items-center justify-between px-4 py-3 text-[13px] rounded-lg transition-all group/sub font-sans ${isActive(subItem.href) ? "bg-secondary/5 text-primary font-bold" : "text-slate-600 hover:bg-slate-50 hover:text-primary font-medium"}`,
                      children: [
                        subItem.name,
                        /* @__PURE__ */ jsx(ArrowUpRight, { className: `w-3.5 h-3.5 transition-all duration-500 ${isActive(subItem.href) ? "text-secondary opacity-100" : "opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 group-hover/sub:text-secondary"}` })
                      ]
                    },
                    subItem.name
                  ))
                ]
              }
            ) })
          ]
        },
        item.name
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxs("div", { className: "hidden sm:flex items-center gap-1.5 bg-slate-100/50 border border-slate-200/50 p-1 rounded-xl backdrop-blur-sm", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: onOpenSearch,
              className: "p-2 rounded-lg text-slate-600 hover:text-primary hover:bg-white shadow-none hover:shadow-sm transition-all duration-300",
              "aria-label": "Search",
              children: /* @__PURE__ */ jsx(Search, { className: "w-4.5 h-4.5" })
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: toggleDark,
              className: "p-2 rounded-lg text-slate-600 hover:text-primary hover:bg-white shadow-none hover:shadow-sm transition-all duration-300",
              "aria-label": "Toggle Theme",
              children: dark ? /* @__PURE__ */ jsx(Sun, { className: "w-4.5 h-4.5 text-amber-500" }) : /* @__PURE__ */ jsx(Moon, { className: "w-4.5 h-4.5" })
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/submission-guidelines/call-for-papers",
            className: "hidden lg:inline-flex px-6 py-3 bg-secondary text-white text-[10px] font-black tracking-[0.2em] uppercase rounded-xl hover:bg-secondary-dark transition-all shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30 active:scale-[0.98] whitespace-nowrap font-sans",
            children: "Submit Manuscript"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsOpen(!isOpen),
            className: "xl:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100/50 hover:bg-slate-200/60 text-primary transition-all backdrop-blur-sm",
            "aria-label": "Toggle navigation",
            children: isOpen ? /* @__PURE__ */ jsx(X, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(Menu, { className: "w-5 h-5" })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
        className: "xl:hidden fixed inset-0 top-0 left-0 w-full h-full bg-white z-[999] overflow-y-auto flex flex-col",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-slate-100 sticky top-0 bg-white z-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-xl border border-slate-100 overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: "/logo.jpg", alt: "Logo", className: "w-full h-full object-contain" }) }),
              /* @__PURE__ */ jsx("span", { className: "font-serif font-bold text-lg text-primary", children: "Sanmati Spectrum" })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setIsOpen(false),
                className: "w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-700",
                children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex-grow px-6 py-8 space-y-1 pb-12", children: navItems.map((item, idx) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -10 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: idx * 0.05 },
              className: "border-b border-slate-50 last:border-0 pb-2",
              children: item.dropdown ? /* @__PURE__ */ jsx(MobileNavDropdown, { item, isActive, setIsOpen }) : /* @__PURE__ */ jsx(
                Link,
                {
                  href: item.href,
                  className: `block w-full px-4 py-4 text-sm font-bold rounded-xl transition-colors font-sans uppercase tracking-wider ${isActive(item.href) ? "text-secondary bg-secondary/5" : "text-primary hover:bg-slate-50"}`,
                  onClick: () => setIsOpen(false),
                  children: item.name
                }
              )
            },
            item.name
          )) }),
          /* @__PURE__ */ jsx("div", { className: "p-6 border-t border-slate-100 bg-slate-50", children: /* @__PURE__ */ jsx(
            Link,
            {
              href: "/submission-guidelines/call-for-papers",
              className: "flex items-center justify-center w-full py-4 text-xs font-bold uppercase tracking-widest text-white bg-secondary rounded-xl shadow-lg shadow-secondary/20",
              onClick: () => setIsOpen(false),
              children: "Submit Your Manuscript"
            }
          ) })
        ]
      }
    ) })
  ] }) });
};
const Footer = () => {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-primary text-slate-300 pt-20 pb-8 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/3 pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3 pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-16", children: /* @__PURE__ */ jsxs("div", { className: "relative group bg-white/[0.03] border border-white/[0.05] rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-96 h-96 bg-gradient-radial from-secondary/10 to-transparent opacity-30 blur-3xl -mr-48 -mt-48 transition-opacity group-hover:opacity-50 duration-700" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h3", { className: "font-serif text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight", children: [
              "Advance Your ",
              /* @__PURE__ */ jsx("span", { className: "text-secondary", children: "Research" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-base font-medium leading-relaxed max-w-lg", children: "Join a global community of scholars. Submit your manuscript today and accelerate the impact of your academic findings." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 lg:justify-end", children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                href: "/submit",
                className: "thm-btn bg-secondary text-primary flex items-center justify-center gap-2 px-8 py-4 rounded-2xl shadow-[0_20px_40px_rgba(200,169,107,0.15)] hover:shadow-[0_20px_50px_rgba(200,169,107,0.25)]",
                children: [
                  "Submit Manuscript",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/submission-guidelines",
                className: "thm-btn-outline border-white/20 hover:border-white/40 text-white flex items-center justify-center gap-2 px-8 py-4 rounded-2xl",
                children: "Author Guidelines"
              }
            )
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-4 space-y-8", children: [
          /* @__PURE__ */ jsx(Link, { href: "/", className: "inline-block group", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-2", children: [
            /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-white p-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.3)] group-hover:scale-105 transition-transform duration-500", children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/logo.jpg", alt: "Sanmati Logo", className: "w-full h-full object-contain" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-serif font-bold text-white tracking-tight leading-none mb-1", children: "Sanmati Spectrum" }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold tracking-[0.2em] uppercase text-secondary opacity-90", children: "ISSN: 3108-1819" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed max-w-sm font-medium text-slate-400/90", children: "A premier multidisciplinary research archive dedicated to the relentless pursuit of truth, scientific innovation, and cultural advancement." }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: [
            { icon: Linkedin, href: "https://www.linkedin.com/company/sanamti-journal/", label: "LinkedIn" },
            { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61584411285548", label: "Facebook" },
            { icon: Twitter, href: "#", label: "Twitter" }
          ].map((social, i) => /* @__PURE__ */ jsx(
            "a",
            {
              href: social.href,
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": social.label,
              className: "size-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-secondary hover:bg-white/[0.06] hover:border-secondary/30 transition-all duration-300 group",
              children: /* @__PURE__ */ jsx(social.icon, { className: "w-4 h-4 group-hover:scale-110 transition-transform duration-300" })
            },
            i
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h4", { className: "text-sm font-bold text-white mb-6 font-serif flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "w-1 h-4 bg-secondary rounded-full block" }),
              "Navigation"
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-3.5", children: [
              { name: "Home Archive", href: "/archive" },
              { name: "Call for Papers", href: "/submission-guidelines/call-for-papers" },
              { name: "Aim & Scope", href: "/about/aim-scope" },
              { name: "Indexing", href: "/indexing" }
            ].map((link, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: link.href, className: "text-[13px] font-medium text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2 inline-flex", children: link.name }) }, i)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h4", { className: "text-sm font-bold text-white mb-6 font-serif flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "w-1 h-4 bg-secondary rounded-full block" }),
              "Governance"
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-3.5", children: [
              { name: "Editorial Board", href: "/editorial-team/editorial-board" },
              { name: "Advisory Board", href: "/editorial-team/advisory-board" },
              { name: "Peer Review Policy", href: "/publication-policy/peer-review" },
              { name: "Ethics Statement", href: "/publication-policy/ethics" }
            ].map((link, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: link.href, className: "text-[13px] font-medium text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2 inline-flex", children: link.name }) }, i)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h4", { className: "text-sm font-bold text-white mb-6 font-serif flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "w-1 h-4 bg-secondary rounded-full block" }),
              "Editorial Contact"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex gap-3.5", children: [
                /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 text-secondary shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-400 font-medium leading-relaxed", children: [
                  "Sanmati Publication",
                  /* @__PURE__ */ jsx("br", {}),
                  "Moradabad – 244001, Bharat"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-3.5", children: [
                /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4 text-secondary shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsx("a", { href: "mailto:sanmatijournal@gmail.com", className: "text-xs text-slate-400 hover:text-white font-semibold transition-colors", children: "sanmatijournal@gmail.com" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxs("div", { className: "p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-1", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-500 uppercase tracking-wider", children: "Chief Editor" }),
                  /* @__PURE__ */ jsx("span", { className: "text-[11px] font-semibold text-slate-300", children: "+91 9870713912" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-500 uppercase tracking-wider", children: "Managing" }),
                  /* @__PURE__ */ jsx("span", { className: "text-[11px] font-semibold text-slate-300", children: "+91 7999525735" })
                ] })
              ] }) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-8 flex flex-col md:flex-row items-center justify-between gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center gap-4 md:gap-8", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-[12px] font-medium text-slate-500", children: [
            "© ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            " Sanmati Spectrum. All rights reserved."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-[11px] font-semibold text-slate-500", children: [
            /* @__PURE__ */ jsx(Link, { href: "/privacy", className: "hover:text-white transition-colors", children: "Privacy" }),
            /* @__PURE__ */ jsx("span", { className: "text-white/10", children: "/" }),
            /* @__PURE__ */ jsx(Link, { href: "/terms", className: "hover:text-white transition-colors", children: "Terms" }),
            /* @__PURE__ */ jsx("span", { className: "text-white/10", children: "/" }),
            /* @__PURE__ */ jsx(Link, { href: "/compliance", className: "hover:text-white transition-colors", children: "Compliance" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] rounded-lg border border-white/[0.05]", children: [
            /* @__PURE__ */ jsx(ShieldCheck, { className: "w-3.5 h-3.5 text-secondary/70" }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-slate-400", children: "COPE MEMBER" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] rounded-lg border border-white/[0.05]", children: [
            /* @__PURE__ */ jsx(Award, { className: "w-3.5 h-3.5 text-emerald-400/70" }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-slate-400", children: "PEER REVIEWED" })
          ] })
        ] })
      ] })
    ] })
  ] });
};
function Seo({ title, description, keywords, image, type = "website", author, publishedTime, jsonLd }) {
  const siteName = "Sanmati Spectrum of Knowledge";
  const defaultDescription = "Top-ranking research journal in India. Publish your research paper fast. A high-authority, peer-reviewed, UGC-approved (proposed) multidisciplinary academic journal indexing high-quality research and books.";
  const defaultKeywords = "UGC CARE listed journal, peer reviewed journal India, multidisciplinary research journal, publish research paper India, international journal India, sanmati spectrum of knowledge, academic publishing, open access journal";
  const defaultImage = "/logo.jpg";
  const siteUrl = "https://sanmatijournal.in";
  const { url } = usePage();
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const finalDescription = description || defaultDescription;
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
            isSearching ? /* @__PURE__ */ jsx(Loader2, { className: "w-5 h-5 text-primary animate-spin ml-4" }) : /* @__PURE__ */ jsx("button", { onClick: onClose, className: "p-2 hover:bg-gray-200 rounded-full transition-colors ml-2", children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5 text-dark/50" }) })
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
                      book.cover_image && /* @__PURE__ */ jsx("div", { className: "w-10 h-12 rounded border border-gray-100 overflow-hidden flex-shrink-0", children: /* @__PURE__ */ jsx("img", { src: "/storage/" + book.cover_image, className: "w-full h-full object-cover", loading: "lazy" }) }),
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
function MainLayout({ children, title, description, keywords, jsonLd }) {
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
    /* @__PURE__ */ jsx(Seo, { title, description, keywords, jsonLd }),
    /* @__PURE__ */ jsx("a", { href: "#main-content", className: "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-primary focus:text-white focus:rounded-xl focus:shadow-xl font-bold", children: "Skip to main content" }),
    /* @__PURE__ */ jsx(Toaster, { position: "top-center", toastOptions: {
      duration: 5e3,
      style: { background: "#fff", color: "#052143", fontWeight: "bold" }
    } }),
    /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 pointer-events-none z-0 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-blob" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] bg-secondary/5 rounded-full blur-[140px] animate-blob animation-delay-4000" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px] animate-blob animation-delay-2000" })
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
