import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { usePage, Link, Head } from "@inertiajs/react";
import { ChevronDown, ArrowUpRight, Search, X, Menu, Mail, Send, Linkedin, Facebook, MapPin, Phone, Loader2, FileText, BookOpen, MessageCircle } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Toaster } from "react-hot-toast";
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
      name: "Editorial Team",
      href: "#",
      dropdown: [
        { name: "Editor", href: "/editorial-team/editors" },
        { name: "Editorial Board", href: "/editorial-team/editorial-board" },
        { name: "Advisory Board", href: "/editorial-team/advisory-board" },
        { name: "Technical Team", href: "/editorial-team/technical-team" }
      ]
    },
    {
      name: "For Authors",
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
    { name: "Archives", href: "/archive" },
    { name: "Books", href: "/book-publication" },
    {
      name: "Events & News",
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
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 flex flex-col w-full overflow-x-visible", children: /* @__PURE__ */ jsxs("nav", { className: `w-full relative z-40 overflow-x-visible transition-all duration-500 ease-[0.22,1,0.36,1] ${scrolled ? "bg-white shadow-md border-b border-gray-200 py-2" : "bg-white border-b border-gray-100 py-4"}`, children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16 sm:h-[72px] gap-3 xl:gap-6", children: [
      /* @__PURE__ */ jsxs(Link, { href: "/", className: "flex items-center gap-2 sm:gap-3 flex-shrink-0 group min-w-0", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: `rounded-xl overflow-hidden shadow-sm border border-gray-100 flex-shrink-0 bg-white group-hover:shadow-md group-hover:border-primary/20 transition-all duration-500 ${scrolled ? "w-9 h-9 p-0.5" : "w-11 h-11 sm:w-13 sm:h-13 p-1"}`,
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/logo.jpg",
                alt: "Sanmati Journal Logo",
                className: "object-contain w-full h-full group-hover:scale-105 transition-transform duration-500"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "hidden sm:block xl:hidden min-w-0", children: [
          /* @__PURE__ */ jsx("span", { className: `block font-black text-dark group-hover:text-primary transition-colors tracking-tight leading-tight truncate ${scrolled ? "text-base" : "text-lg sm:text-xl"}`, children: "Sanmati Spectrum" }),
          /* @__PURE__ */ jsx("span", { className: `font-semibold tracking-[0.2em] uppercase transition-colors block ${scrolled ? "text-[8px] text-secondary" : "text-[9px] text-gray-400"}`, children: "Research Journal" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hidden xl:block min-w-0", children: [
          /* @__PURE__ */ jsx("span", { className: `block font-black text-dark group-hover:text-primary transition-colors tracking-tight leading-tight whitespace-nowrap ${scrolled ? "text-sm" : "text-base"}`, children: "Sanmati Spectrum" }),
          /* @__PURE__ */ jsx("span", { className: "text-[8px] font-semibold tracking-[0.18em] uppercase text-gray-400 block", children: "Research Journal" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden xl:flex items-center justify-center gap-0.5 flex-1 min-w-0 overflow-visible", children: navItems.map((item) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "relative flex-shrink-0",
          onMouseEnter: () => handleMouseEnter(item.name),
          onMouseLeave: handleMouseLeave,
          children: [
            item.href === "#" ? /* @__PURE__ */ jsx(
              "button",
              {
                "aria-haspopup": "true",
                "aria-expanded": activeDropdown === item.name,
                className: `relative flex flex-col items-center text-[11px] font-bold px-1.5 xl:px-2 py-2 rounded-full transition-all whitespace-nowrap tracking-wide ${isActive(item.href) ? "text-primary bg-primary/5" : "text-dark/80 hover:text-primary hover:bg-primary/5"}`,
                children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                  item.name,
                  item.dropdown && /* @__PURE__ */ jsx(ChevronDown, { className: `w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180 text-secondary" : "text-gray-400"}` })
                ] })
              }
            ) : /* @__PURE__ */ jsxs(
              Link,
              {
                href: item.href,
                className: `relative flex flex-col items-center text-[11px] font-bold px-1.5 xl:px-2 py-2 rounded-full transition-all whitespace-nowrap tracking-wide ${isActive(item.href) ? "text-primary bg-primary/5" : "text-dark/80 hover:text-primary hover:bg-primary/5"}`,
                children: [
                  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                    item.name,
                    item.dropdown && /* @__PURE__ */ jsx(ChevronDown, { className: `w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180 text-secondary" : "text-gray-400"}` })
                  ] }),
                  isActive(item.href) && /* @__PURE__ */ jsx(
                    motion.span,
                    {
                      layoutId: "nav-active-dot",
                      className: "absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-secondary"
                    }
                  )
                ]
              }
            ),
            item.dropdown && /* @__PURE__ */ jsx(AnimatePresence, { children: activeDropdown === item.name && /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 10, scale: 0.95 },
                animate: { opacity: 1, y: 0, scale: 1 },
                exit: { opacity: 0, y: 5, scale: 0.95 },
                transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
                className: "absolute top-full left-0 w-64 bg-white/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl border border-gray-100 p-2 mt-2 z-50 origin-top-left",
                children: item.dropdown.map((subItem) => /* @__PURE__ */ jsxs(
                  Link,
                  {
                    href: subItem.href,
                    className: `flex items-center justify-between px-4 py-3 text-[13px] rounded-xl transition-all group/sub ${isActive(subItem.href) ? "bg-primary/5 text-primary font-bold" : "text-dark/70 hover:bg-primary/5 hover:text-primary font-medium"}`,
                    children: [
                      subItem.name,
                      /* @__PURE__ */ jsx(ArrowUpRight, { className: `w-4 h-4 transition-all duration-300 ${isActive(subItem.href) ? "opacity-100 text-secondary" : "opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0"}` })
                    ]
                  },
                  subItem.name
                ))
              }
            ) })
          ]
        },
        item.name
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 sm:gap-4", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: onOpenSearch,
            className: "p-2.5 rounded-xl bg-gray-100 hover:bg-primary/10 text-dark hover:text-primary transition-all flex-shrink-0",
            "aria-label": "Search",
            children: /* @__PURE__ */ jsx(Search, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/submission-guidelines/call-for-papers",
            className: "hidden xl:inline-flex px-4 py-2.5 bg-primary text-white text-[10px] font-bold tracking-[0.08em] uppercase rounded-full hover:bg-primary-dark transition-all shadow-md shadow-primary/20 hover:shadow-lg whitespace-nowrap flex-shrink-0",
            children: "Send Paper"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsOpen(!isOpen),
            className: "xl:hidden bg-gray-100 text-dark p-2.5 rounded-xl hover:bg-gray-200 transition-colors",
            "aria-label": "Toggle menu",
            children: isOpen ? /* @__PURE__ */ jsx(X, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(Menu, { className: "w-5 h-5" })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: "100%" },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: "100%" },
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
        className: "xl:hidden fixed inset-0 top-0 left-0 w-full h-full bg-white z-[999] overflow-y-auto",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b border-gray-100 sticky top-0 bg-white z-10 shadow-sm", children: [
            /* @__PURE__ */ jsxs(Link, { href: "/", className: "flex items-center gap-2.5 group", onClick: () => setIsOpen(false), children: [
              /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-xl overflow-hidden shadow-sm border border-gray-100 flex-shrink-0", children: /* @__PURE__ */ jsx("img", { src: "/logo.jpg", alt: "Sanmati Journal Logo", className: "object-contain w-full h-full" }) }),
              /* @__PURE__ */ jsx("span", { className: "text-base font-black text-dark", children: "Sanmati Spectrum" })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setIsOpen(false),
                className: "p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-dark transition-colors",
                "aria-label": "Close menu",
                children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "px-4 py-5 space-y-1 pb-24", children: [
            navItems.map((item) => /* @__PURE__ */ jsx("div", { className: "border-b border-gray-50 last:border-0 pb-3 last:pb-0", children: item.dropdown ? /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("div", { className: "font-black text-secondary px-4 pt-2 pb-1 text-[10px] uppercase tracking-[0.3em]", children: item.name }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-1", children: item.dropdown.map((subItem) => /* @__PURE__ */ jsx(
                Link,
                {
                  href: subItem.href,
                  className: `block px-5 py-3 text-[13px] rounded-xl transition-colors ${isActive(subItem.href) ? "bg-primary/5 text-primary font-bold" : "text-dark/60 font-medium hover:text-primary hover:bg-primary/5"}`,
                  onClick: () => setIsOpen(false),
                  children: subItem.name
                },
                subItem.name
              )) })
            ] }) : /* @__PURE__ */ jsx(
              Link,
              {
                href: item.href,
                className: `block px-4 py-3 text-sm font-bold rounded-xl transition-colors ${isActive(item.href) ? "text-primary bg-primary/5" : "text-dark hover:text-primary hover:bg-primary/5"}`,
                onClick: () => setIsOpen(false),
                children: item.name
              }
            ) }, item.name)),
            /* @__PURE__ */ jsx("div", { className: "pt-6 pb-2", children: /* @__PURE__ */ jsx(
              Link,
              {
                href: "/submission-guidelines/call-for-papers",
                className: "block w-full py-4 text-center text-xs font-bold tracking-widest uppercase text-white bg-primary rounded-full shadow-xl shadow-primary/20",
                onClick: () => setIsOpen(false),
                children: "Send Your Paper"
              }
            ) })
          ] })
        ]
      }
    ) })
  ] }) });
};
const Footer = () => {
  return /* @__PURE__ */ jsxs("footer", { className: "relative overflow-hidden bg-dark text-white/70", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 border-b border-white/5 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -mr-32 -mt-32 blur-3xl animate-blob" }),
      /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-8 py-12 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-center justify-between gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center lg:text-left", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-serif font-bold text-white mb-2 tracking-tight", children: "Stay Informed" }),
          /* @__PURE__ */ jsx("p", { className: "text-white/50 text-sm max-w-md", children: "Receive latest research updates, call for papers, and academic news directly in your inbox." })
        ] }),
        /* @__PURE__ */ jsxs("form", { action: "/api/newsletter/subscribe", method: "POST", className: "flex w-full lg:w-auto gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative w-full lg:w-96 group", children: [
            /* @__PURE__ */ jsx(Mail, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-secondary transition-colors" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                name: "email",
                required: true,
                placeholder: "your-email@academic.edu",
                className: "w-full pl-12 pr-6 py-4 rounded-2xl text-sm bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary/30 transition-all"
              }
            ),
            /* @__PURE__ */ jsx("input", { type: "hidden", name: "_subject", value: "New Newsletter Subscriber!" })
          ] }),
          /* @__PURE__ */ jsxs("button", { type: "submit", className: "px-8 py-4 bg-secondary text-white font-bold text-sm rounded-2xl hover:bg-secondary-dark transition-all flex items-center gap-2 whitespace-nowrap shadow-lg shadow-secondary/10 hover:shadow-secondary/20 hover:-translate-y-0.5", children: [
            "Join ",
            /* @__PURE__ */ jsx(Send, { className: "w-4 h-4" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "pt-20 pb-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-20", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 lg:col-span-2", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-[11px] font-black tracking-[0.2em] uppercase text-white mb-6 border-l-2 border-secondary pl-4", children: "About" }),
          /* @__PURE__ */ jsxs(Link, { href: "/", className: "inline-block group", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-white p-1 shadow-sm", children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/logo.jpg", alt: "Logo", className: "w-full h-full object-contain" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white group-hover:text-secondary transition-colors tracking-tight", children: "Sanmati Spectrum" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "inline-block px-3 py-1 bg-secondary/20 border border-secondary/30 rounded-full text-[9px] text-white font-black tracking-[0.2em] uppercase", children: "ISSN: 3108-1819" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-slate-300 font-medium", children: "A premier national platform for multidisciplinary research, fostering academic discourse and innovation across sciences and humanities." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 p-4 bg-white/5 border border-secondary border-dashed rounded-xl", children: [
            /* @__PURE__ */ jsx("h5", { className: "text-[10px] font-black tracking-widest text-secondary uppercase mb-2", children: "Academic Integrity" }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-white/80 leading-relaxed font-medium", children: [
              "This journal follows the guidelines formulated by the ",
              /* @__PURE__ */ jsx("strong", { className: "text-white", children: "Committee on Publication Ethics (COPE)" }),
              ". All manuscripts are subject to rigorous Double-Blind Peer Review and iThenticate similarity checks."
            ] })
          ] })
        ] }),
        [
          {
            title: "Publications",
            links: [
              { name: "Latest Issues", href: "/archive" },
              { name: "Call for Papers", href: "/submission-guidelines/call-for-papers" },
              { name: "Submission Guide", href: "/submission-guidelines" },
              { name: "Editorial Team", href: "/editorial-team/editorial-board" },
              { name: "Gallery & News", href: "/gallery-view" }
            ]
          },
          {
            title: "Policies",
            links: [
              { name: "Ethics Policy", href: "/publication-policy/ethics" },
              { name: "Peer Review", href: "/publication-policy/peer-review" },
              { name: "Open Access", href: "/compliance" },
              { name: "Privacy Policy", href: "/privacy" },
              { name: "Terms of Use", href: "/terms" }
            ]
          }
        ].map((col, idx) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-[11px] font-black tracking-[0.2em] uppercase text-white mb-8 border-l-2 border-secondary pl-4", children: col.title }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: col.links.map((link, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { href: link.href, className: "text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-3 group", children: [
            /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-secondary group-hover:scale-125 transition-all" }),
            link.name
          ] }) }, i)) })
        ] }, idx)),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-[11px] font-black tracking-[0.2em] uppercase text-white mb-8 border-l-2 border-secondary pl-4", children: "Social" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://www.linkedin.com/company/sanamti-journal/",
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Sanmati Spectrum on LinkedIn",
                className: "size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0077B5] hover:border-[#0077B5] hover:text-white transition-all duration-300 group shadow-lg",
                children: /* @__PURE__ */ jsx(Linkedin, { className: "w-5 h-5 group-hover:scale-110 transition-transform" })
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://www.facebook.com/profile.php?id=61584411285548",
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Sanmati Spectrum on Facebook",
                className: "size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all duration-300 group shadow-lg",
                children: /* @__PURE__ */ jsx(Facebook, { className: "w-5 h-5 group-hover:scale-110 transition-transform" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-[11px] font-black tracking-[0.2em] uppercase text-white mb-8 border-l-2 border-secondary pl-4", children: "Contact" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-4 rounded-2xl bg-white/10 border border-white/20 hover:border-white/30 transition-colors", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5 text-secondary shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxs("p", { className: "text-[13px] leading-relaxed text-white font-medium", children: [
                "JTS Publications",
                /* @__PURE__ */ jsx("br", {}),
                "V-508 Gali No. 17, Vijay Park",
                /* @__PURE__ */ jsx("br", {}),
                "Delhi – 110053, Bharat (India)"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3 pl-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 text-[13px] font-bold", children: [
                /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-white mt-0.5 shrink-0" }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-2", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5", children: "Editor-in-Chief" }),
                    /* @__PURE__ */ jsx("a", { href: "tel:+919870713912", className: "text-slate-200 hover:text-white transition-colors hover:underline", children: "+91 9870713912" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5", children: "Editorial Office" }),
                    /* @__PURE__ */ jsx("a", { href: "tel:+918979782949", className: "text-slate-200 hover:text-white transition-colors hover:underline", children: "+91 8979782949" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5", children: "Managing Editor" }),
                    /* @__PURE__ */ jsx("a", { href: "tel:+917999525735", className: "text-slate-200 hover:text-white transition-colors hover:underline", children: "+91 7999525735" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("a", { href: "mailto:sanmatijournal@gmail.com", className: "flex items-center gap-4 text-[13px] font-bold text-slate-200 hover:text-white transition-colors mt-2", children: [
                /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4 text-white shrink-0" }),
                " ",
                /* @__PURE__ */ jsx("span", { className: "hover:underline", children: "sanmatijournal@gmail.com" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-t border-white/20 pt-10 flex flex-col md:flex-row items-center justify-between gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-[13px] font-medium text-slate-400 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            "© ",
            (/* @__PURE__ */ new Date()).getFullYear()
          ] }),
          /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-slate-500" }),
          /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "Sanmati Spectrum of Knowledge" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
          /* @__PURE__ */ jsx(Link, { href: "/privacy", className: "text-[12px] font-bold text-slate-300 hover:text-white transition-colors uppercase tracking-widest", children: "Privacy Policy" }),
          /* @__PURE__ */ jsx(Link, { href: "/terms", className: "text-[12px] font-bold text-slate-300 hover:text-white transition-colors uppercase tracking-widest", children: "Legal" })
        ] })
      ] })
    ] }) })
  ] });
};
function Seo({ title, description, keywords, image, type = "website", author, publishedTime, jsonLd }) {
  const siteName = "Sanmati Spectrum of Knowledge";
  const defaultDescription = "Top-ranking research journal in India. Publish your research paper fast. A high-authority, peer-reviewed, UGC-approved (proposed) multidisciplinary academic journal indexing high-quality research and books.";
  const defaultKeywords = "research journal India, UGC approved journal, publish research paper fast, peer-reviewed journal, academic publishing, open access, sanmati spectrum";
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
      "name": "JTS Publications",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.jpg`
      }
    }
  };
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
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(jsonLd || defaultJsonLd) })
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
  useEffect(() => {
    const handleOpenSearch = () => setIsSearchOpen(true);
    window.addEventListener("open-search", handleOpenSearch);
    return () => window.removeEventListener("open-search", handleOpenSearch);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col bg-warm-bg font-sans antialiased relative overflow-x-hidden selection:bg-primary/10 selection:text-primary", children: [
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
    )
  ] });
}
export {
  MainLayout as M,
  Seo as S
};
