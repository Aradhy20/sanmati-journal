import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import React, { useState, Suspense } from "react";
import { M as MainLayout } from "./MainLayout-m1d9rhuV.js";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@inertiajs/react";
import { Mail, Users, BookOpen, Loader2, CheckCircle, Send, AlertCircle, Globe, ArrowRight, ArrowUpRight, Microscope, Palette, Calculator, Scale, GraduationCap, Cpu, Lightbulb, ChevronRight, UploadCloud, FileCheck, RefreshCw } from "lucide-react";
import toast from "react-hot-toast";
import confetti from "canvas-confetti";
function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    var _a, _b, _c;
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    setMessage("");
    try {
      const csrfToken = (_a = document.cookie.split("; ").find((row) => row.startsWith("XSRF-TOKEN="))) == null ? void 0 : _a.split("=")[1];
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-XSRF-TOKEN": csrfToken ? decodeURIComponent(csrfToken) : ""
        },
        body: JSON.stringify({ email, name })
      });
      const data = await res.json();
      if (res.ok || res.status === 200 || res.status === 201) {
        setStatus("success");
        const successMsg = data.message || "You have successfully subscribed!";
        setMessage(successMsg);
        toast.success(successMsg);
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#687EFF", "#F87A53", "#052143", "#ffffff"]
        });
        setEmail("");
        setName("");
      } else {
        const errMsg = ((_c = (_b = data.errors) == null ? void 0 : _b.email) == null ? void 0 : _c[0]) || data.message || "Something went wrong. Please try again.";
        setStatus("error");
        setMessage(errMsg);
        toast.error(errMsg);
      }
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Please check your connection.");
      toast.error("Network error. Please check your connection.");
    }
  };
  return /* @__PURE__ */ jsxs("section", { className: "py-12 relative overflow-hidden bg-[#0a0f2e]", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 z-0 opacity-60 mix-blend-screen",
        style: {
          backgroundImage: "url(/images/newsletter-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-0 bg-gradient-to-br from-[#0a0f2e]/80 via-[#10245E]/70 to-[#273295]/80 mix-blend-multiply" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 z-0 opacity-10",
        style: { backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)", backgroundSize: "36px 36px" }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute -top-40 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] z-0" }),
    /* @__PURE__ */ jsx("div", { className: "container-custom relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.7 },
          className: "lg:w-1/2 text-center lg:text-left",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full mb-6", children: [
              /* @__PURE__ */ jsx(Mail, { className: "w-3 h-3 text-secondary" }),
              /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[9px] uppercase tracking-[0.35em]", children: "Academic Newsletter" })
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white mb-4 leading-tight", children: [
              "Stay Updated with ",
              /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#F87A53]", children: "Latest Research" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-white/50 text-sm font-medium max-w-xl", children: "Receive Call for Papers alerts, book releases, and academic news directly in your inbox." }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center lg:justify-start gap-4 mt-8", children: [
              { icon: Users, label: "2,000+ Subs" },
              { icon: BookOpen, label: "Monthly Digest" }
            ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2", children: [
              /* @__PURE__ */ jsx(item.icon, { className: "w-3.5 h-3.5 text-secondary" }),
              /* @__PURE__ */ jsx("span", { className: "text-white/60 text-[11px] font-bold uppercase tracking-wider", children: item.label })
            ] }, i)) })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.7, delay: 0.2 },
          className: "lg:w-1/2 w-full",
          children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    value: name,
                    onChange: (e) => setName(e.target.value),
                    placeholder: "Name (Optional)",
                    className: "px-5 py-3.5 bg-white/10 border border-white/15 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-secondary/60 focus:bg-white/15 transition-all font-medium text-xs"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "email",
                    value: email,
                    onChange: (e) => {
                      setEmail(e.target.value);
                      if (status !== "idle") setStatus("idle");
                    },
                    placeholder: "Email Address *",
                    required: true,
                    className: "px-5 py-3.5 bg-white/10 border border-white/15 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-secondary/60 focus:bg-white/15 transition-all font-medium text-xs"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  disabled: status === "loading" || status === "success",
                  className: "w-full flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-white rounded-xl font-black text-[11px] uppercase tracking-widest hover:bg-secondary-light transition-all hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed",
                  children: status === "loading" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(Loader2, { className: "w-4 h-4 animate-spin" }),
                    " Subscribing..."
                  ] }) : status === "success" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4" }),
                    " Subscribed!"
                  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(Send, { className: "w-3.5 h-3.5" }),
                    " Join Newsletter"
                  ] })
                }
              )
            ] }),
            /* @__PURE__ */ jsx(AnimatePresence, { children: message && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, height: 0 },
                animate: { opacity: 1, height: "auto" },
                exit: { opacity: 0, height: 0 },
                className: `flex items-center gap-3 mt-4 p-3 rounded-xl text-[11px] font-bold ${status === "success" ? "bg-green-500/10 border border-green-500/20 text-green-400" : "bg-red-500/10 border border-red-500/20 text-red-400"}`,
                children: [
                  status === "success" ? /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 flex-shrink-0" }) : /* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4 flex-shrink-0" }),
                  message
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("p", { className: "text-white/20 text-center text-[10px] mt-4 font-medium uppercase tracking-widest", children: "Secure Academic Gateway • Encrypted Subscriptions" })
          ] })
        }
      )
    ] }) })
  ] });
}
const Hero = React.lazy(() => import("./Hero-DDHmFHgL.js"));
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};
function Home() {
  return /* @__PURE__ */ jsxs(
    MainLayout,
    {
      title: "Sanmati Spectrum of Knowledge | National Multidisciplinary Research Journal",
      description: "Sanmati Spectrum is India's leading multidisciplinary peer-reviewed academic journal. Publishing high-quality research papers, thesis, and hardcover books across science, arts, commerce, and law.",
      keywords: "multidisciplinary journal india, peer-reviewed research, academic book publication, sanmati spectrum of knowledge, ugc care listed journal, publish book from thesis, national research journal",
      children: [
        /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsxs("div", { className: "min-h-[95vh] flex flex-col gap-4 items-center justify-center text-primary font-bold bg-[#050B14]", children: [
          /* @__PURE__ */ jsx(Globe, { className: "w-12 h-12 animate-spin text-accent opacity-20" }),
          /* @__PURE__ */ jsx("span", { className: "animate-pulse tracking-widest text-sm uppercase text-white/60", children: "Loading Core Engine..." })
        ] }), children: /* @__PURE__ */ jsx(Hero, {}) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 lg:py-32 bg-white relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center", children: [
          /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "lg:col-span-7", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-primary/40" }),
              /* @__PURE__ */ jsx("span", { className: "text-primary font-black text-[10px] uppercase tracking-[0.3em]", children: "Institutional Mission" })
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-serif font-black text-dark leading-tight mb-8", children: [
              "Building a ",
              /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Global Research Community" }),
              " of Academic Rigor"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600 font-medium leading-relaxed text-base md:text-lg mb-8 border-l-2 border-primary/20 pl-6", children: "Sanmati Spectrum serves as a premier national platform bridging the gap between historical scholarship and modern scientific progress. We empower scholars across all major disciplines with professional peer review and high-impact publishing." }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
              /* @__PURE__ */ jsxs(
                Link,
                {
                  href: "/basic-info/about-journal",
                  className: "group px-7 py-3.5 bg-primary text-white rounded-xl font-bold text-xs hover:bg-primary-dark transition-all flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 uppercase tracking-widest",
                  children: [
                    "Our Ethos ",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-[9px] font-black uppercase tracking-[0.2em]", children: "Verified ISSN" }),
                /* @__PURE__ */ jsx("p", { className: "text-dark font-black text-sm", children: "3108-1819" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.8 },
                className: "p-8 rounded-2xl bg-slate-50 border border-slate-100/80 flex flex-col justify-between hover:border-primary/20 hover:shadow-md transition-all duration-300",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary font-black text-sm mb-6", children: "M" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "font-bold text-dark mb-2 text-base tracking-tight", children: "The Mission" }),
                    /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-[12px] leading-relaxed font-medium", children: "Empowering scholars via high-impact peer review and global open-access discoverability." })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.8, delay: 0.1 },
                className: "p-8 rounded-2xl bg-slate-50 border border-slate-100/80 flex flex-col justify-between hover:border-primary/20 hover:shadow-md transition-all duration-300",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary font-black text-sm mb-6", children: "V" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "font-bold text-dark mb-2 text-base tracking-tight", children: "The Vision" }),
                    /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-[12px] leading-relaxed font-medium", children: "To stand as the absolute gold standard in multidisciplinary publishing and research integrity." })
                  ] })
                ]
              }
            )
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 lg:py-32 bg-slate-50 border-y border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6", children: [
            /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "max-w-xl", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-primary/40" }),
                /* @__PURE__ */ jsx("span", { className: "text-primary font-black text-[10px] uppercase tracking-[0.3em]", children: "Curated Volumes" })
              ] }),
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-serif font-black text-dark leading-tight", children: [
                "Featured ",
                /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Scholarly Book Releases" })
              ] })
            ] }),
            /* @__PURE__ */ jsx(motion.div, { ...fadeInUp, children: /* @__PURE__ */ jsxs(Link, { href: "/book-publication", className: "group text-xs font-black uppercase tracking-[0.2em] text-slate-600 hover:text-primary transition-colors flex items-center gap-2", children: [
              "All Releases ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1.5 transition-transform" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
            {
              genre: "Academic Research",
              format: "Hardcover · 520 Pages",
              title: "Published Volume 37",
              excerpt: "A comprehensive collection of multidisciplinary research papers exploring emerging trends in science, arts, and commerce.",
              img: "/images/books/WhatsApp Image 2026-02-16 at 9.21.50 PM.jpeg",
              badge: "Latest Release"
            },
            {
              genre: "Multidisciplinary",
              format: "Hardcover · 480 Pages",
              title: "Published Volume 35",
              excerpt: "Exploring the intersections of traditional knowledge and modern scientific discourse through peer-reviewed excellence.",
              img: "/images/books/WhatsApp Image 2026-02-16 at 9.21.49 PM (1).jpeg",
              badge: "Bestseller"
            },
            {
              genre: "Social Sciences",
              format: "Hardcover · 450 Pages",
              title: "Published Volume 32",
              excerpt: "Documenting critical insights and scholarly perspectives on global socio-economic challenges and modern society.",
              img: "/images/books/WhatsApp Image 2026-02-16 at 9.21.47 PM.jpeg",
              badge: "Editor's Choice"
            }
          ].map((book, i) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1, duration: 0.8 },
              className: "group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-primary/15 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "aspect-[4/5] overflow-hidden relative bg-slate-50", children: [
                  /* @__PURE__ */ jsx("img", { src: book.img, alt: book.title, className: "w-full h-full object-cover group-hover:scale-102 transition-transform duration-700", loading: "lazy" }),
                  book.badge && /* @__PURE__ */ jsx("span", { className: "absolute top-4 left-4 bg-primary text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm", children: book.badge })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "p-8 flex flex-col flex-grow justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-primary font-black text-[10px] tracking-[0.2em] uppercase mb-1", children: book.genre }),
                    /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-[11px] font-bold mb-4", children: book.format }),
                    /* @__PURE__ */ jsx("h3", { className: "text-lg font-serif font-bold text-dark mb-3 group-hover:text-primary transition-colors leading-tight", children: book.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-[13px] leading-relaxed mb-6 font-medium line-clamp-3", children: book.excerpt })
                  ] }),
                  /* @__PURE__ */ jsxs(Link, { href: "/book-publication", className: "mt-auto inline-flex items-center justify-center gap-2 w-full py-3 bg-slate-50 text-slate-700 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all group/btn", children: [
                    "Order Copy ",
                    /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" })
                  ] })
                ] })
              ]
            },
            i
          )) })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 lg:py-32 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-primary/40" }),
              /* @__PURE__ */ jsx("span", { className: "text-primary font-black text-[10px] uppercase tracking-[0.3em]", children: "Academic Scope" }),
              /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-primary/40" })
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-serif font-black text-dark mb-4", children: [
              "Explore ",
              /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Fields of Study" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-medium text-sm leading-relaxed", children: "Publishing papers and volumes across the full spectrum of modern academic and scientific research." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: [
            { name: "Science & Technology", icon: Microscope, color: "bg-blue-50/50 text-blue-600", slug: "science-technology" },
            { name: "Social Sciences", icon: Users, color: "bg-emerald-50/50 text-emerald-600", slug: "social-sciences" },
            { name: "Arts & Humanities", icon: Palette, color: "bg-purple-50/50 text-purple-600", slug: "arts-humanities" },
            { name: "Commerce & Management", icon: Calculator, color: "bg-orange-50/50 text-orange-600", slug: "management-commerce" },
            { name: "Law & Governance", icon: Scale, color: "bg-red-50/50 text-red-600", slug: "law-governance" },
            { name: "Education", icon: GraduationCap, color: "bg-cyan-50/50 text-cyan-600", slug: "education" },
            { name: "Computer Science", icon: Cpu, color: "bg-indigo-50/50 text-indigo-600", slug: "science-technology" },
            { name: "Innovation Research", icon: Lightbulb, color: "bg-yellow-50/50 text-yellow-600", slug: "science-technology" }
          ].map((cat, idx) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: idx * 0.05, duration: 0.6 },
              children: /* @__PURE__ */ jsxs(
                Link,
                {
                  href: `/submission-guidelines/areas/${cat.slug}`,
                  className: "group p-6 rounded-2xl bg-white border border-slate-100 hover:border-primary/15 hover:shadow-sm transition-all duration-300 flex flex-col items-center text-center h-full block",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: `w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-primary group-hover:text-white transition-all duration-300`, children: /* @__PURE__ */ jsx(cat.icon, { className: "w-6 h-6" }) }),
                    /* @__PURE__ */ jsx("h3", { className: "font-bold text-dark text-sm mb-1 group-hover:text-primary transition-colors tracking-tight leading-tight", children: cat.name }),
                    /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-auto pt-2 block", children: "Explore Area" })
                  ]
                }
              )
            },
            idx
          )) })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 lg:py-32 bg-slate-50 border-t border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-primary/40" }),
              /* @__PURE__ */ jsx("span", { className: "text-primary font-black text-[10px] uppercase tracking-[0.3em]", children: "Editorial Board" }),
              /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-primary/40" })
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-serif font-black text-dark mb-4", children: [
              "Distinguished ",
              /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Leadership" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto", children: [
            /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "group bg-white rounded-2xl p-8 border border-slate-100 hover:border-primary/15 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left shadow-sm", children: [
              /* @__PURE__ */ jsx("div", { className: "w-24 h-24 rounded-2xl overflow-hidden shrink-0 bg-slate-100", children: /* @__PURE__ */ jsx("img", { src: "/mam.jpeg", alt: "Dr Namrata Jain", className: "w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary font-black text-[9px] uppercase tracking-widest block mb-1", children: "Editor-in-Chief" }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif font-bold text-dark mb-2 group-hover:text-primary transition-colors", children: "Dr Namrata Jain" }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-[12px] leading-relaxed mb-4 font-medium", children: "Assistant Professor at TMU. Over 17 years of experience in Hindi literature, Indian knowledge traditions, and educational research." }),
                /* @__PURE__ */ jsxs(Link, { href: "/editorial-team/editorial-board", className: "inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-primary hover:text-primary-dark transition-colors", children: [
                  "View Full Board ",
                  /* @__PURE__ */ jsx(ChevronRight, { className: "w-3.5 h-3.5" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, transition: { delay: 0.1 }, className: "group bg-white rounded-2xl p-8 border border-slate-100 hover:border-primary/15 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left shadow-sm", children: [
              /* @__PURE__ */ jsx("div", { className: "w-24 h-24 rounded-2xl overflow-hidden shrink-0 bg-slate-100", children: /* @__PURE__ */ jsx("img", { src: "/sir.jpeg", alt: "Dr. Ratnesh Kumar Jain", className: "w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary font-black text-[9px] uppercase tracking-widest block mb-1", children: "Managing Editor" }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif font-bold text-dark mb-2 group-hover:text-primary transition-colors", children: "Dr. Ratnesh Kumar Jain" }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-[12px] leading-relaxed mb-4 font-medium", children: "Associate Professor & NSS Coordinator at TMU. Expert in student welfare, educational management, and philosophy." }),
                /* @__PURE__ */ jsxs(Link, { href: "/editorial-team/editorial-board", className: "inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-primary hover:text-primary-dark transition-colors", children: [
                  "View Full Board ",
                  /* @__PURE__ */ jsx(ChevronRight, { className: "w-3.5 h-3.5" })
                ] })
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(PipelineSection, {}),
        /* @__PURE__ */ jsx("section", { className: "py-12 bg-white border-y border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12 text-center", children: [
          /* @__PURE__ */ jsx("p", { className: "text-slate-400 font-black text-[9px] uppercase tracking-[0.25em] mb-6", children: "Our Abstracting & Indexing Partners" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center items-center gap-8 md:gap-16", children: ["Google Scholar", "CrossRef", "UGC CARE (Proposed)", "DOAJ Directory", "ResearchGate"].map((partner, idx) => /* @__PURE__ */ jsx("span", { className: "font-serif font-bold text-sm md:text-base text-slate-400 hover:text-primary transition-colors duration-300 cursor-default", children: partner }, idx)) })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 lg:py-32 bg-slate-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6", children: [
            /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "max-w-xl", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-primary/40" }),
                /* @__PURE__ */ jsx("span", { className: "text-primary font-black text-[10px] uppercase tracking-[0.3em]", children: "Trending Papers" })
              ] }),
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-serif font-black text-dark leading-tight", children: [
                "Most ",
                /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Accessed Research" })
              ] })
            ] }),
            /* @__PURE__ */ jsx(motion.div, { ...fadeInUp, children: /* @__PURE__ */ jsxs(Link, { href: "/archive", className: "group text-xs font-black uppercase tracking-[0.2em] text-slate-600 hover:text-primary transition-colors flex items-center gap-2", children: [
              "Browse Archive ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1.5 transition-transform" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
            { rank: "01", field: "Multidisciplinary", title: "Sanmati Spectrum of Knowledge & Emerging Discourse (January-March, 2026)", authors: "Dr Namrata Jain, Dr. Ratnesh Kumar Jain", doi: "https://doi.org/10.5281/zenodo.19710093", reads: "Featured Volume", tag: "Hot" },
            { rank: "02", field: "Commerce & Economics", title: "Impact of Digital Literacy on Rural Education Outcomes", authors: "Dr. Ravi Sharma, Prof. Anita Gupta", reads: "1.2k reads", tag: "Trending" },
            { rank: "03", field: "Social Science", title: "Multidisciplinary Perspectives on Modern Academic Discourse", authors: "Dr. Priya Kumari, Dr. Ratnesh Jain", reads: "987 reads", tag: "Featured" }
          ].map((paper, i) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 15 },
              whileInView: { opacity: 1, y: 15 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              className: "group bg-white p-8 rounded-2xl border border-slate-100 hover:border-primary/15 transition-all duration-300 flex flex-col justify-between shadow-sm",
              children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-xs font-serif font-black text-primary", children: paper.rank }),
                    /* @__PURE__ */ jsx("span", { className: "bg-primary/5 text-primary text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest", children: paper.tag })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-primary font-black text-[9px] uppercase tracking-widest mb-2", children: paper.field }),
                  /* @__PURE__ */ jsx("h3", { className: "font-serif font-bold text-dark text-base leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-3", children: paper.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-[12px] font-medium mb-4", children: paper.authors }),
                  paper.doi && /* @__PURE__ */ jsxs("div", { className: "text-[10px] text-slate-400 font-bold tracking-wider mb-6", children: [
                    "DOI: ",
                    /* @__PURE__ */ jsx("a", { href: paper.doi, target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline font-bold", children: paper.doi.replace("https://doi.org/", "") })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-t border-slate-100 pt-4 mt-auto", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-slate-400 text-[11px] font-bold", children: paper.reads }),
                  /* @__PURE__ */ jsxs(Link, { href: "/archive", className: "text-primary text-[10px] font-black uppercase tracking-widest flex items-center gap-1 group/link", children: [
                    "View ",
                    /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" })
                  ] })
                ] })
              ]
            },
            i
          )) })
        ] }) }),
        /* @__PURE__ */ jsx(NewsletterSection, {}),
        /* @__PURE__ */ jsx("section", { className: "py-20 lg:py-32 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-6 text-center", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block px-3 py-1 bg-primary/5 rounded-full text-[9px] text-primary font-black tracking-[0.25em] uppercase mb-6", children: "Call For Submissions" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-serif font-black text-dark mb-6 leading-tight tracking-tight", children: [
            "Shaping the Future of ",
            /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Global Research" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm md:text-base font-medium mb-10 max-w-xl mx-auto leading-relaxed", children: "Join our fast-growing community of researchers, practitioners, and scholars. Submit your next manuscript or propose a hardcover book volume." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [
            /* @__PURE__ */ jsxs(Link, { href: "/submission-guidelines/call-for-papers", className: "group px-8 py-3.5 bg-primary text-white rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-primary-dark transition-all flex items-center gap-2 shadow-md", children: [
              "Submit Manuscript ",
              /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4" })
            ] }),
            /* @__PURE__ */ jsx(Link, { href: "/book-publication", className: "px-8 py-3.5 border border-slate-200 text-slate-700 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-slate-50 transition-all flex items-center gap-2", children: "Browse Publications" })
          ] })
        ] }) })
      ]
    }
  );
}
const pipelineSteps = [
  {
    step: "01",
    title: "Send Your Paper",
    icon: UploadCloud,
    shortDesc: "Digital intake with initial ethics validation.",
    fullDesc: "Authors submit via our secure portal. Each submission undergoes scope screening, formatting compliance check, and plagiarism analysis. A unique Tracking ID is emailed within 24 hours."
  },
  {
    step: "02",
    title: "Double-Blind Peer Review",
    icon: FileCheck,
    shortDesc: "Evaluation by distinguished domain experts.",
    fullDesc: "Our editorial team assigns two or three independent reviewers in the manuscript's domain. The double-blind process ensures impartiality. Reviewers evaluate methodology, originality, and significance."
  },
  {
    step: "03",
    title: "Revision & Refinement",
    icon: RefreshCw,
    shortDesc: "Collaborative revision based on feedback.",
    fullDesc: "Authors receive detailed reviewer feedback with an opportunity to revise and resubmit. The editorial team mediates the revision process, verifying all concerns are addressed."
  },
  {
    step: "04",
    title: "Publication & Archival",
    icon: Globe,
    shortDesc: "DOI registration, indexing, and distribution.",
    fullDesc: "Accepted manuscripts are typeset, assigned a CrossRef DOI, and published in the next quarterly volume. They are simultaneously indexed in Google Scholar with full open-access availability."
  }
];
function PipelineSection() {
  const [activeStep, setActiveStep] = useState(null);
  return /* @__PURE__ */ jsx("section", { className: "py-20 lg:py-32 bg-white relative overflow-hidden border-t border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-primary/40" }),
        /* @__PURE__ */ jsx("span", { className: "text-primary font-black text-[10px] uppercase tracking-[0.3em]", children: "Publication Journey" }),
        /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-primary/40" })
      ] }),
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-serif font-black text-dark mb-4", children: [
        "Our Peer Review & ",
        /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Publishing Workflow" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-medium text-sm", children: "Click any phase to explore your manuscript's journey in detail." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8", children: pipelineSteps.map((item, i) => {
      const isActive = activeStep === i;
      return /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setActiveStep(isActive ? null : i),
          className: `group p-6 flex flex-col items-center text-center rounded-2xl transition-all duration-300 focus:outline-none ${isActive ? "bg-primary text-white shadow-md -translate-y-1" : "bg-white border border-slate-100 hover:border-primary/15 hover:shadow-sm hover:-translate-y-0.5"}`,
          children: [
            /* @__PURE__ */ jsx("div", { className: `w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-300 shadow-sm ${isActive ? "bg-white/10" : "bg-slate-50 group-hover:bg-primary group-hover:text-white"}`, children: /* @__PURE__ */ jsx(item.icon, { className: `w-6 h-6 ${isActive ? "text-white" : "text-primary group-hover:text-white"}` }) }),
            /* @__PURE__ */ jsxs("span", { className: `text-[10px] font-black uppercase tracking-widest block mb-1 ${isActive ? "text-white/60" : "text-slate-400"}`, children: [
              "Step ",
              item.step
            ] }),
            /* @__PURE__ */ jsx("h3", { className: `text-xs font-serif font-bold mb-1 ${isActive ? "text-white" : "text-dark group-hover:text-primary"}`, children: item.title }),
            /* @__PURE__ */ jsx("p", { className: `text-[10px] leading-relaxed font-medium hidden md:block ${isActive ? "text-white/70" : "text-slate-400"}`, children: item.shortDesc })
          ]
        },
        i
      );
    }) }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: false,
        animate: { opacity: activeStep !== null ? 1 : 0, y: activeStep !== null ? 0 : 10 },
        transition: { duration: 0.3 },
        className: activeStep !== null ? "block" : "hidden",
        children: activeStep !== null && /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 rounded-2xl border border-slate-100 p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6", children: [
          /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm", children: React.createElement(pipelineSteps[activeStep].icon, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-primary mb-1 block", children: "Phase Details" }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-serif font-bold text-dark mb-2", children: pipelineSteps[activeStep].title }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 leading-relaxed text-sm font-medium", children: pipelineSteps[activeStep].fullDesc })
          ] })
        ] })
      }
    )
  ] }) });
}
export {
  Home as default
};
