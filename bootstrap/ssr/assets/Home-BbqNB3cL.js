import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import React, { useState, Suspense } from "react";
import { M as MainLayout } from "./MainLayout-B53y4pKW.js";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@inertiajs/react";
import { Mail, Users, BookOpen, Globe, Loader2, CheckCircle, Send, AlertCircle, Quote, Award, ChevronRight, ArrowRight, Search, Star, ArrowUpRight, Trophy, Microscope, Palette, Calculator, Scale, GraduationCap, Cpu, Lightbulb, FileText, Feather, Zap, Package, UploadCloud, FileCheck, RefreshCw } from "lucide-react";
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
  return /* @__PURE__ */ jsxs("section", { className: "py-20 bg-gradient-to-br from-[#0a0f2e] via-primary-dark to-primary relative overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 opacity-10",
        style: { backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)", backgroundSize: "36px 36px" }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute -top-40 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -bottom-40 right-0 w-[500px] h-[500px] bg-[#F87A53]/8 rounded-full blur-[120px]" }),
    /* @__PURE__ */ jsx("div", { className: "container-custom relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.7 },
          className: "text-center mb-14",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/20 rounded-full mb-6", children: [
              /* @__PURE__ */ jsx(Mail, { className: "w-3.5 h-3.5 text-secondary" }),
              /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[11px] uppercase tracking-[0.35em]", children: "Academic Newsletter" })
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight", children: [
              "Stay at the Forefront of ",
              /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#F87A53]", children: "Scholarly Research" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-white/50 text-lg font-medium max-w-2xl mx-auto", children: "Subscribe to receive Call for Papers alerts, new book releases, and academic event announcements directly to your inbox." })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.7, delay: 0.1 },
          className: "flex flex-wrap justify-center gap-6 mb-12",
          children: [
            { icon: Users, label: "2,000+ Subscribers" },
            { icon: BookOpen, label: "Monthly Digest" },
            { icon: Globe, label: "Across India & Abroad" }
          ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 bg-white/8 border border-white/10 rounded-2xl px-6 py-3", children: [
            /* @__PURE__ */ jsx(item.icon, { className: "w-4 h-4 text-secondary" }),
            /* @__PURE__ */ jsx("span", { className: "text-white/70 text-sm font-bold", children: item.label })
          ] }, i))
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.7, delay: 0.2 },
          children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-4", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  value: name,
                  onChange: (e) => setName(e.target.value),
                  placeholder: "Your Name (optional)",
                  className: "px-6 py-4 bg-white/10 border border-white/15 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-secondary/60 focus:bg-white/15 transition-all font-medium text-sm"
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
                  placeholder: "Enter your email address *",
                  required: true,
                  className: "px-6 py-4 bg-white/10 border border-white/15 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-secondary/60 focus:bg-white/15 transition-all font-medium text-sm"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  disabled: status === "loading" || status === "success",
                  className: "flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-secondary-light transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed",
                  children: status === "loading" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(Loader2, { className: "w-5 h-5 animate-spin" }),
                    " Subscribing..."
                  ] }) : status === "success" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5" }),
                    " Subscribed!"
                  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(Send, { className: "w-4 h-4" }),
                    " Subscribe"
                  ] })
                }
              )
            ] }),
            /* @__PURE__ */ jsx(AnimatePresence, { children: message && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: -10 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0 },
                className: `flex items-center gap-3 mt-4 p-4 rounded-2xl text-sm font-bold ${status === "success" ? "bg-green-500/15 border border-green-500/30 text-green-400" : "bg-red-500/15 border border-red-500/30 text-red-400"}`,
                children: [
                  status === "success" ? /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 flex-shrink-0" }) : /* @__PURE__ */ jsx(AlertCircle, { className: "w-5 h-5 flex-shrink-0" }),
                  message
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("p", { className: "text-white/30 text-center text-[11px] mt-6 font-medium", children: "No spam, ever. Unsubscribe anytime. Your email is safe with us." })
          ] })
        }
      )
    ] }) })
  ] });
}
const Hero = React.lazy(() => import("./Hero-sEgNw7nB.js"));
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};
function Home() {
  return /* @__PURE__ */ jsxs(
    MainLayout,
    {
      title: "Sanmati Spectrum of Knowledge | National Multidisciplinary Research Journal",
      description: "Sanmati Spectrum is India's leading multidisciplinary peer-reviewed academic journal. Publishing high-quality research papers, thesis, and hardcover books across science, arts, commerce, and law.",
      keywords: "multidisciplinary journal india, peer-reviewed research, academic book publication, sanmati spectrum of knowledge, ugc care listed journal, publish book from thesis, national research journal",
      children: [
        /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsxs("div", { className: "min-h-[95vh] flex flex-col gap-4 items-center justify-center text-primary font-bold", children: [
          /* @__PURE__ */ jsx(Globe, { className: "w-12 h-12 animate-spin-slow opacity-20" }),
          /* @__PURE__ */ jsx("span", { className: "animate-pulse tracking-widest text-sm uppercase", children: "Loading Core Engine..." })
        ] }), children: /* @__PURE__ */ jsx(Hero, {}) }),
        /* @__PURE__ */ jsxs("section", { className: "py-32 bg-surface relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-96 h-96 bg-primary/4 rounded-full -ml-48 -mt-48 blur-[100px]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -mr-48 -mb-48 blur-[100px]" }),
          /* @__PURE__ */ jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-20 items-center", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.95 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: true },
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                className: "relative grid grid-cols-2 gap-6",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "col-span-2 bg-white rounded-3xl p-8 2xl:p-12 shadow-sm border border-gray-100 hover:shadow-2xl hover:border-primary/20 transition-all duration-700 overflow-hidden relative group lg:block", children: [
                    /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-primary/4 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-1000" }),
                    /* @__PURE__ */ jsx(Quote, { className: "w-12 h-12 text-primary/10 mb-6 group-hover:text-primary/20 transition-colors" }),
                    /* @__PURE__ */ jsxs("h3", { className: "text-2xl lg:text-3xl font-serif font-bold text-dark leading-tight relative z-10", children: [
                      '"A thriving academic ecosystem where groundbreaking ',
                      /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "research meets global publishing" }),
                      '."'
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "col-span-2 sm:col-span-1 bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden shadow-xl group cursor-default", children: [
                    /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-colors duration-700" }),
                    /* @__PURE__ */ jsx(BookOpen, { className: "w-10 h-10 text-secondary mb-8 group-hover:scale-110 transition-transform duration-500" }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-1 mb-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-5xl lg:text-6xl font-serif font-black", children: "25" }),
                      /* @__PURE__ */ jsx("span", { className: "text-secondary text-4xl font-black", children: "+" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-white/80 text-xs font-black uppercase tracking-widest leading-tight", children: "Research Fields" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "col-span-2 sm:col-span-1 bg-white rounded-3xl p-8 lg:p-10 shadow-[0_10px_40px_rgba(79,119,255,0.08)] border border-primary/10 relative overflow-hidden group hover:border-secondary/30 transition-all duration-500 cursor-default text-center flex flex-col items-center justify-center", children: [
                    /* @__PURE__ */ jsx(Award, { className: "w-10 h-10 text-secondary mb-8 group-hover:scale-110 transition-transform duration-500" }),
                    /* @__PURE__ */ jsx("div", { className: "flex items-baseline gap-1 mb-2", children: /* @__PURE__ */ jsx("span", { className: "text-5xl lg:text-6xl font-serif font-black text-dark", children: "Est." }) }),
                    /* @__PURE__ */ jsx("p", { className: "text-primary/60 text-xs font-black uppercase tracking-widest leading-tight", children: "Founded 2023" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "relative z-10", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
                /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-secondary" }),
                /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[11px] uppercase tracking-[0.3em]", children: "Our Philosophical Core" })
              ] }),
              /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl lg:text-4xl lg:text-5xl font-serif font-bold text-dark leading-[1.1] mb-8", children: [
                "Building a ",
                /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Global Research Community" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-600 font-medium leading-relaxed text-lg mb-10 border-l-2 border-primary/15 pl-8", children: "Sanmati Spectrum is India's leading platform, dedicated to bridging the gap between traditional research and modern scientific discussion. We publish original research and high-quality books across diverse fields." }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12", children: [
                { title: "The Mission", desc: "To empower researchers by providing a high-impact, peer-reviewed ecosystem for global visibility.", icon: "M" },
                { title: "The Vision", desc: "To become the gold standard in multidisciplinary publishing and academic integrity.", icon: "V" }
              ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "group p-6 rounded-2xl bg-warm-bg border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center text-primary font-black text-sm mb-4 group-hover:bg-primary group-hover:text-white transition-colors uppercase", children: item.icon }),
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-dark mb-2 tracking-tight", children: item.title }),
                /* @__PURE__ */ jsx("p", { className: "text-muted text-[13px] leading-relaxed font-medium", children: item.desc })
              ] }, i)) }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-8", children: [
                /* @__PURE__ */ jsxs(
                  Link,
                  {
                    href: "/basic-info/about-journal",
                    className: "group px-8 py-4 bg-primary text-white rounded-2xl font-bold text-xs hover:bg-primary-dark transition-all flex items-center gap-3 shadow-xl shadow-primary/20 hover:-translate-y-1 uppercase tracking-widest",
                    children: [
                      /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4" }),
                      " Explore Our Ethos"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "hidden sm:block", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-[10px] font-black uppercase tracking-[0.2em] mb-1", children: "Authenticated" }),
                  /* @__PURE__ */ jsx("p", { className: "text-dark font-black text-sm", children: "ISSN: 3108-1819" })
                ] })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "py-32 bg-warm-bg", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-end mb-10 gap-8", children: [
            /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "max-w-2xl", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
                /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-secondary" }),
                /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[11px] uppercase tracking-[0.3em]", children: "New Arrivals" })
              ] }),
              /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl lg:text-4xl lg:text-5xl font-serif font-bold text-dark leading-tight", children: [
                "Latest ",
                /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Book Releases" }),
                " & Publications"
              ] })
            ] }),
            /* @__PURE__ */ jsx(motion.div, { ...fadeInUp, children: /* @__PURE__ */ jsxs(Link, { href: "/book-publication", className: "group px-10 py-5 bg-white border border-gray-200 text-dark rounded-2xl font-bold text-xs hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center gap-3 shadow-sm hover:shadow-xl hover:-translate-y-1 uppercase tracking-widest", children: [
              "All Publications ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1.5 transition-transform" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 mb-12", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-grow flex items-center bg-warm-bg rounded-xl px-4 py-3 border border-transparent focus-within:bg-white focus-within:border-primary/30 transition-all", children: [
              /* @__PURE__ */ jsx(Search, { className: "w-5 h-5 text-muted mr-3" }),
              /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Search by title, author, or keyword...", className: "w-full bg-transparent border-none outline-none text-sm font-medium text-dark placeholder:text-muted/60" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsxs("select", { className: "bg-warm-bg text-dark font-bold text-xs uppercase tracking-wider rounded-xl px-6 py-3 border-none outline-none focus:ring-2 focus:ring-primary/20 appearance-none min-w-[140px] text-center", children: [
                /* @__PURE__ */ jsx("option", { children: "Any Year" }),
                /* @__PURE__ */ jsx("option", { children: "2024" }),
                /* @__PURE__ */ jsx("option", { children: "2023" }),
                /* @__PURE__ */ jsx("option", { children: "2022" })
              ] }),
              /* @__PURE__ */ jsxs("select", { className: "bg-warm-bg text-dark font-bold text-xs uppercase tracking-wider rounded-xl px-6 py-3 border-none outline-none focus:ring-2 focus:ring-primary/20 appearance-none min-w-[140px] text-center", children: [
                /* @__PURE__ */ jsx("option", { children: "Subject" }),
                /* @__PURE__ */ jsx("option", { children: "Physics" }),
                /* @__PURE__ */ jsx("option", { children: "Economics" }),
                /* @__PURE__ */ jsx("option", { children: "Sociology" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch", children: [
            {
              genre: "Quantum Physics",
              format: "Hardcover · 320 Pages",
              title: "Non-Linear Dynamics in Sub-Atomic Particles",
              excerpt: "Investigating quantum fields under high-stress gravitational simulations — a groundbreaking multi-disciplinary synthesis.",
              img: "/fistudy-assets/resources/paper-physics.png",
              badge: "Editor's Choice",
              price: "Order Now",
              stars: 5
            },
            {
              genre: "Behavioral Economics",
              format: "E-book · 280 Pages",
              title: "The Cognitive Architecture of Market Shifts",
              excerpt: "A multidisciplinary study on human heuristic biases in rapid digital-first economic environments.",
              img: "/fistudy-assets/resources/paper-neuro.png",
              badge: "Bestseller",
              price: "Pre-Order",
              stars: 5
            },
            {
              genre: "Sustainability",
              format: "Hardcover · 350 Pages",
              title: "Urban Resilience in the Anthropocene Era",
              excerpt: "Analyzing the intersection of sociological patterns and environmental engineering in future megacities.",
              img: "/fistudy-assets/resources/paper-social.png",
              badge: "New Release",
              price: "Order Now",
              stars: 4
            }
          ].map((book, i) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              className: "md:col-span-4 group relative flex flex-col justify-between h-full bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-primary/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(79,119,255,0.12)] hover:-translate-y-1 transition-all duration-500",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "aspect-[3/4] overflow-hidden relative", children: [
                  /* @__PURE__ */ jsx("img", { src: book.img, alt: book.title, className: "w-full h-full object-cover group-hover:scale-105 transition-all duration-700", loading: "lazy" }),
                  book.badge && /* @__PURE__ */ jsx("span", { className: "absolute top-4 left-4 bg-secondary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg z-10", children: book.badge })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "p-8 flex flex-col justify-between flex-grow", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "flex gap-1 mb-3", children: [...Array(book.stars)].map((_, k) => /* @__PURE__ */ jsx(Star, { className: "w-3.5 h-3.5 fill-secondary text-secondary" }, k)) }),
                    /* @__PURE__ */ jsx("p", { className: "text-primary font-black text-[10px] tracking-[0.2em] uppercase mb-1", children: book.genre }),
                    /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-[11px] font-bold mb-4", children: book.format }),
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif font-bold text-dark mb-4 group-hover:text-primary transition-colors leading-tight line-clamp-2", children: book.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3", children: book.excerpt })
                  ] }),
                  /* @__PURE__ */ jsxs(Link, { href: "/book-publication", className: "mt-auto inline-flex items-center justify-center gap-2 w-full py-3.5 bg-primary/8 text-primary rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all group/btn", children: [
                    book.price,
                    " ",
                    /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" })
                  ] })
                ] })
              ]
            },
            i
          )) })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "py-32 bg-white relative", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-end justify-between gap-10 mb-10 lg:mb-20", children: [
            /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "max-w-2xl", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
                /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-secondary" }),
                /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[11px] uppercase tracking-[0.3em]", children: "Guardians of Integrity" })
              ] }),
              /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl lg:text-4xl lg:text-5xl font-serif font-bold text-dark leading-tight", children: [
                "Distinguished ",
                /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Editorial Leadership" })
              ] })
            ] }),
            /* @__PURE__ */ jsx(motion.div, { ...fadeInUp, className: "hidden lg:block pb-2", children: /* @__PURE__ */ jsxs(Link, { href: "/editorial-team/editorial-board", className: "text-xs font-black uppercase tracking-[0.2em] text-dark-light hover:text-primary transition-colors flex items-center gap-3 group", children: [
              "View Full Board ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-2 transition-transform" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 max-w-5xl mx-auto", children: [
            /* @__PURE__ */ jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, className: "group", children: /* @__PURE__ */ jsxs("div", { className: "h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary-dark text-white p-10 flex flex-col items-center text-center shadow-2xl hover:-translate-y-1 transition-all duration-700 relative", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-8 opacity-5", children: /* @__PURE__ */ jsx(Trophy, { className: "w-24 h-24 text-secondary scale-150 rotate-12" }) }),
              /* @__PURE__ */ jsx("div", { className: "w-44 h-44 rounded-2xl overflow-hidden mb-8 border-4 border-white/30 shadow-2xl relative z-10", children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/mam.jpeg", alt: "Dr. Namrta Jain", className: "w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-700" }) }),
              /* @__PURE__ */ jsx("span", { className: "inline-block px-4 py-1.5 bg-secondary/25 border border-secondary/40 rounded-full text-[10px] text-secondary font-black tracking-widest uppercase mb-4 w-fit", children: "Editor-in-Chief" }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl lg:text-3xl font-serif font-bold mb-2 tracking-tight group-hover:text-secondary-light transition-colors duration-300", children: "Dr. Namrta Jain" }),
              /* @__PURE__ */ jsx("p", { className: "text-white/70 text-[12px] font-bold uppercase tracking-[0.05em] mb-8", children: "Sanmati Spectrum of Knowledge & Emerging Discourse" }),
              /* @__PURE__ */ jsxs("div", { className: "w-full bg-white/10 rounded-2xl p-4 mb-6 border border-white/10 text-xs", children: [
                /* @__PURE__ */ jsxs("p", { className: "flex justify-between border-b border-white/5 pb-2 mb-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-white/40 uppercase tracking-widest font-black text-[9px]", children: "Email" }),
                  " ",
                  /* @__PURE__ */ jsx("a", { href: "mailto:sanmatijournal@gmail.com", className: "font-bold hover:text-secondary transition-colors", children: "sanmatijournal@gmail.com" })
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-white/40 uppercase tracking-widest font-black text-[9px]", children: "Mob" }),
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "font-bold", children: "+91 9870713912 / 8979782949" })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-auto w-full pt-4", children: /* @__PURE__ */ jsxs("a", { href: "https://scholar.google.com/citations?user=YzXafxwAAAAJ&hl=en", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 text-[11px] font-black tracking-widest uppercase text-white hover:text-secondary transition-colors", children: [
                /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-3.5 h-3.5" }),
                " Google Scholar Profile"
              ] }) })
            ] }) }),
            /* @__PURE__ */ jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: 0.15 }, className: "group", children: /* @__PURE__ */ jsxs("div", { className: "h-full rounded-2xl overflow-hidden bg-surface border border-gray-100 p-10 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-700 relative", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-8 opacity-5", children: /* @__PURE__ */ jsx(Users, { className: "w-24 h-24 text-primary scale-150 -rotate-12" }) }),
              /* @__PURE__ */ jsx("div", { className: "w-44 h-44 rounded-2xl overflow-hidden mb-8 border-4 border-white shadow-xl relative z-10 rotate-3 group-hover:rotate-0 transition-transform duration-500", children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/sir.jpeg", alt: "Dr. Ratnesh Kumar Jain", className: "w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-700" }) }),
              /* @__PURE__ */ jsx("span", { className: "inline-block px-4 py-1.5 bg-primary/8 rounded-full text-[10px] text-primary font-black tracking-widest uppercase mb-4", children: "Managing Editor" }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark mb-2 group-hover:text-primary transition-colors duration-300", children: "Dr. Ratnesh Kumar Jain" }),
              /* @__PURE__ */ jsx("p", { className: "text-dark/40 text-[10px] uppercase font-black tracking-widest mb-8 min-h-[15px]" }),
              /* @__PURE__ */ jsxs("div", { className: "w-full bg-warm-bg rounded-2xl p-4 mb-6 border border-gray-50 text-xs text-left", children: [
                /* @__PURE__ */ jsxs("p", { className: "flex justify-between border-b border-gray-200 pb-2 mb-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-muted uppercase tracking-widest font-black text-[9px]", children: "Email" }),
                  " ",
                  /* @__PURE__ */ jsx("a", { href: "mailto:Jainratnesh79@gmail.com", className: "font-bold text-dark hover:text-primary transition-colors", children: "Jainratnesh79@gmail.com" })
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-muted uppercase tracking-widest font-black text-[9px]", children: "Mob" }),
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "font-bold text-dark", children: "+91 7999525735" })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-auto w-full pt-4", children: /* @__PURE__ */ jsxs("a", { href: "https://www.tmu.ac.in/nss-coordinator-desk", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 text-[11px] font-black tracking-widest uppercase text-dark hover:text-primary transition-colors", children: [
                /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-3.5 h-3.5" }),
                " TMU Coordinator Desk"
              ] }) })
            ] }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("section", { className: "py-32 bg-white relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-primary/2 rounded-full blur-[120px] -ml-96" }),
          /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-10 lg:mb-20", children: [
              /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "flex items-center justify-center gap-4 mb-6", children: [
                /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-secondary" }),
                /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[11px] uppercase tracking-[0.4em]", children: "Our Academic Scope" }),
                /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-secondary" })
              ] }),
              /* @__PURE__ */ jsx(motion.h2, { ...fadeInUp, transition: { delay: 0.1 }, className: "text-2xl md:text-3xl lg:text-4xl lg:text-5xl font-serif font-bold text-dark mb-6", children: /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Explore Many Fields of Study" }) }),
              /* @__PURE__ */ jsx(motion.p, { ...fadeInUp, transition: { delay: 0.2 }, className: "text-muted font-medium text-lg leading-relaxed", children: "We publish books and papers across the full spectrum of modern and traditional research." })
            ] }),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch",
                initial: "initial",
                whileInView: "whileInView",
                viewport: { once: true },
                variants: { whileInView: { transition: { staggerChildren: 0.05 } } },
                children: [
                  { name: "Science & Technology", icon: Microscope, color: "bg-blue-50 text-blue-600", count: "15+" },
                  { name: "Social Sciences", icon: Users, color: "bg-emerald-50 text-emerald-600", count: "12+" },
                  { name: "Arts & Humanities", icon: Palette, color: "bg-purple-50 text-purple-600", count: "10+" },
                  { name: "Commerce & Management", icon: Calculator, color: "bg-orange-50 text-orange-600", count: "8+" },
                  { name: "Law & Governance", icon: Scale, color: "bg-red-50 text-red-600", count: "6+" },
                  { name: "Education", icon: GraduationCap, color: "bg-cyan-50 text-cyan-600", count: "9+" },
                  { name: "Computer Science", icon: Cpu, color: "bg-indigo-50 text-indigo-600", count: "11+" },
                  { name: "Innovation Research", icon: Lightbulb, color: "bg-yellow-50 text-yellow-600", count: "7+" }
                ].map((cat, idx) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    variants: { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 } },
                    className: "h-full group p-8 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:border-primary/20 hover:shadow-[0_20px_40px_rgba(79,119,255,0.08)] transition-all duration-500 flex flex-col justify-between items-center text-center",
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
                        /* @__PURE__ */ jsx("div", { className: `w-20 h-20 rounded-xl ${cat.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm shrink-0`, children: /* @__PURE__ */ jsx(cat.icon, { className: "w-9 h-9" }) }),
                        /* @__PURE__ */ jsx("h3", { className: "font-bold text-dark text-base mb-2 px-2 group-hover:text-primary transition-colors tracking-tight leading-tight", children: cat.name })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "mt-auto pt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500", children: [
                        /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-secondary" }),
                        cat.count,
                        " Publications"
                      ] })
                    ]
                  },
                  idx
                ))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "py-12 lg:py-24 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10", style: { backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)", backgroundSize: "40px 40px" } }),
          /* @__PURE__ */ jsx("div", { className: "container-custom relative z-10", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12 text-center", children: [
            { icon: FileText, num: "500+", label: "Papers Received" },
            { icon: Users, num: "200+", label: "Global Scholars" },
            { icon: Award, num: "50+", label: "Expert Reviewers" },
            { icon: Globe, num: "25+", label: "Domain Disciplines" }
          ].map((stat, i) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1, duration: 0.8 },
              className: "group",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-500", children: /* @__PURE__ */ jsx(stat.icon, { className: "w-8 h-8 text-white/80 group-hover:scale-110 transition-transform" }) }),
                /* @__PURE__ */ jsx("div", { className: "text-2xl md:text-3xl lg:text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter", children: stat.num }),
                /* @__PURE__ */ jsx("p", { className: "text-white/50 text-[10px] font-black uppercase tracking-[0.2em]", children: stat.label })
              ]
            },
            i
          )) }) })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "py-32 bg-white relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-20 items-center", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -50 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
              className: "relative group",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] relative", children: [
                  /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/fistudy-assets/resources/research_library.png", alt: "Premium Books", className: "w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" })
                ] }),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 40 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { delay: 0.5, duration: 0.8 },
                    className: "absolute -bottom-10 -right-10 bg-white p-10 rounded-2xl shadow-[0_30px_60px_rgba(79,119,255,0.12)] border border-gray-100",
                    children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Award, { className: "w-8 h-8 text-primary" }) }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("div", { className: "text-xl md:text-2xl lg:text-3xl font-black text-dark tracking-tighter", children: "Gold Standard" }),
                        /* @__PURE__ */ jsx("p", { className: "text-muted text-xs font-bold uppercase tracking-widest mt-1", children: "Peer Review Quality" })
                      ] })
                    ] })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
              /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-secondary" }),
              /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[11px] uppercase tracking-[0.4em]", children: "Why Choose Us" })
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl lg:text-4xl lg:text-5xl font-serif font-bold text-dark leading-[1.15] mb-8", children: [
              "Premium ",
              /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Publishing Excellence" }),
              " for Every Author"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600 font-medium text-lg leading-relaxed mb-12", children: "We deliver high-quality book publishing services — from review and design to global distribution. Every book we publish is crafted with academic integrity and premium quality." }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12", children: [
              { icon: Globe, label: "Global Shipping", desc: "Delivered to 50+ countries worldwide." },
              { icon: Feather, label: "Signed Editions", desc: "Exclusive author-signed collector copies." },
              { icon: Zap, label: "Early Access", desc: "Pre-order before official launch dates." },
              { icon: Package, label: "Premium Hardcover", desc: "High-quality binding and print production." }
            ].map((feature, i) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 p-6 rounded-3xl bg-warm-bg border border-gray-50 hover:border-primary/20 transition-all group", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all text-primary", children: /* @__PURE__ */ jsx(feature.icon, { className: "w-5 h-5" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "text-sm font-black text-dark mb-1", children: feature.label }),
                /* @__PURE__ */ jsx("p", { className: "text-muted text-[11px] font-bold uppercase tracking-wide opacity-60", children: feature.desc })
              ] })
            ] }, i)) }),
            /* @__PURE__ */ jsxs(Link, { href: "/book-publication", className: "inline-flex items-center gap-4 text-dark font-black text-xs uppercase tracking-[0.2em] group", children: [
              /* @__PURE__ */ jsx("span", { className: "w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-white group-hover:bg-primary transition-all", children: /* @__PURE__ */ jsx(ArrowRight, { className: "w-6 h-6" }) }),
              "Browse All Books"
            ] })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx(PipelineSection, {}),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-warm-bg border-y border-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4 mb-4", children: [
              /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-secondary" }),
              /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[11px] uppercase tracking-[0.3em]", children: "Global Visibility" }),
              /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-secondary" })
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl font-serif font-bold text-dark", children: [
              "Indexed & ",
              /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Abstracted In" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70", children: [
            /* @__PURE__ */ jsx("div", { className: "font-bold text-xl tracking-tight text-gray-500", children: "Google Scholar" }),
            /* @__PURE__ */ jsx("div", { className: "font-bold text-xl tracking-tight text-gray-500", children: "CrossRef" }),
            /* @__PURE__ */ jsx("div", { className: "font-bold text-xl tracking-tight text-gray-500", children: "UGC CARE (Proposed)" }),
            /* @__PURE__ */ jsx("div", { className: "font-bold text-xl tracking-tight text-gray-500", children: "Directory of Open Access Journals (DOAJ)" }),
            /* @__PURE__ */ jsx("div", { className: "font-bold text-xl tracking-tight text-gray-500", children: "ResearchGate" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("section", { className: "py-20 bg-white relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-40 left-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px]" }),
          /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10", children: [
            /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "flex flex-col md:flex-row items-end justify-between gap-8 mb-14", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
                  /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-secondary" }),
                  /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[11px] uppercase tracking-[0.3em]", children: "Most Accessed" })
                ] }),
                /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark leading-tight", children: [
                  "Trending ",
                  /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Research Papers" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(Link, { href: "/archive", className: "flex items-center gap-2 text-xs font-black uppercase tracking-widest text-dark/60 hover:text-primary transition-colors group shrink-0", children: [
                "Browse All Archives ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1.5 transition-transform" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
              { rank: "01", field: "Social Sciences", title: "Impact of Digital Literacy on Rural Education Outcomes in India", authors: "Dr. Ravi Sharma, Prof. Anita Gupta", reads: "1.2k reads", tag: "Hot" },
              { rank: "02", field: "Commerce & Economics", title: "Post-Pandemic MSME Recovery: A Multidisciplinary Analysis", authors: "Dr. Priya Mehta, Dr. Arun Singh", reads: "987 reads", tag: "Trending" },
              { rank: "03", field: "Education Research", title: "NEP 2020 Implementation: Challenges and Opportunities in Higher Education", authors: "Prof. S.K. Verma", reads: "876 reads", tag: "Featured" }
            ].map((paper, i) => /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                className: "group relative bg-warm-bg border border-gray-100 rounded-xl p-8 hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(79,119,255,0.10)] hover:-translate-y-1 transition-all duration-500 overflow-hidden",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute top-6 right-6 flex items-center gap-2", children: /* @__PURE__ */ jsx("span", { className: "bg-secondary/10 text-secondary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest", children: paper.tag }) }),
                  /* @__PURE__ */ jsx("div", { className: "text-7xl font-black text-primary/5 group-hover:text-primary/10 transition-colors leading-none mb-4 -ml-2", children: paper.rank }),
                  /* @__PURE__ */ jsx("p", { className: "text-secondary font-black text-[10px] uppercase tracking-[0.2em] mb-3", children: paper.field }),
                  /* @__PURE__ */ jsx("h3", { className: "font-serif font-bold text-dark text-lg leading-snug mb-4 group-hover:text-primary transition-colors", children: paper.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-muted text-[12px] font-medium mb-6 truncate", children: paper.authors }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2 text-muted text-[11px] font-bold", children: [
                      /* @__PURE__ */ jsx(Globe, { className: "w-3.5 h-3.5 text-secondary" }),
                      " ",
                      paper.reads
                    ] }),
                    /* @__PURE__ */ jsxs(Link, { href: "/archive", className: "text-primary text-[11px] font-black uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all", children: [
                      "View ",
                      /* @__PURE__ */ jsx(ChevronRight, { className: "w-3.5 h-3.5" })
                    ] })
                  ] })
                ]
              },
              i
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsx(NewsletterSection, {}),
        /* @__PURE__ */ jsx("section", { className: "py-12 lg:py-24", children: /* @__PURE__ */ jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxs("div", { className: "relative rounded-3xl bg-gradient-to-br from-primary via-primary-dark to-[#0a0f2e] p-14 lg:p-24 overflow-hidden text-center shadow-[0_50px_100px_rgba(79,119,255,0.25)]", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10", style: { backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)", backgroundSize: "40px 40px" } }),
          /* @__PURE__ */ jsx("div", { className: "absolute -top-20 -right-20 w-80 h-80 bg-secondary/15 rounded-full blur-[100px]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute -bottom-20 -left-20 w-80 h-80 bg-coral/10 rounded-full blur-[100px]" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-4xl mx-auto", children: [
            /* @__PURE__ */ jsx("span", { className: "inline-block px-5 py-2 bg-white/8 border border-white/15 rounded-full text-[10px] text-secondary font-black tracking-[0.3em] uppercase mb-8", children: "Ready for Publication" }),
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl lg:text-5xl lg:text-7xl font-serif font-bold text-white mb-10 leading-[1.1] tracking-tight", children: [
              "Shaping the Future of ",
              /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-light", children: "Global Research" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-white/45 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed", children: "Join our community of scholars and authors. Submit your manuscript or explore our latest book releases." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-6 justify-center items-center", children: [
              /* @__PURE__ */ jsxs(Link, { href: "/submission-guidelines/call-for-papers", className: "group px-12 py-6 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-dark transition-all flex items-center gap-3 shadow-2xl", children: [
                "Submit Manuscript ",
                /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" })
              ] }),
              /* @__PURE__ */ jsxs(Link, { href: "/book-publication", className: "px-12 py-6 border border-white/15 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/8 transition-all flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4" }),
                " Browse Publications"
              ] })
            ] })
          ] })
        ] }) }) })
      ]
    }
  );
}
const pipelineSteps = [
  {
    step: "01",
    title: "Send Your Paper",
    icon: UploadCloud,
    shortDesc: "Digital intake with initial ethics and originality validation.",
    fullDesc: "Authors submit via our secure portal. Each submission undergoes scope screening, formatting compliance check, and plagiarism analysis. A unique Tracking ID is emailed within 24 hours of receipt."
  },
  {
    step: "02",
    title: "Double-Blind Peer Review",
    icon: FileCheck,
    shortDesc: "Evaluation by distinguished domain experts.",
    fullDesc: "Our editorial team assigns two or three independent reviewers in the manuscript's domain. The double-blind process ensures impartiality. Reviewers evaluate methodology, originality, significance, and writing quality typically over 4–6 weeks."
  },
  {
    step: "03",
    title: "Revision & Refinement",
    icon: RefreshCw,
    shortDesc: "Collaborative revision based on expert feedback.",
    fullDesc: "Authors receive detailed reviewer feedback with an opportunity to revise and resubmit. The editorial team mediates the revision process, verifying all concerns are addressed before the manuscript moves forward."
  },
  {
    step: "04",
    title: "Publication & Archival",
    icon: Globe,
    shortDesc: "DOI registration, global indexing, and distribution.",
    fullDesc: "Accepted manuscripts are typeset, assigned a CrossRef DOI, and published in the next quarterly volume. They are simultaneously indexed in Google Scholar and UGC CARE with full open-access availability."
  }
];
function PipelineSection() {
  const [activeStep, setActiveStep] = useState(null);
  return /* @__PURE__ */ jsxs("section", { className: "py-32 bg-warm-bg relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] -mr-96 -mt-96" }),
    /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-12 lg:mb-20", children: [
        /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "flex items-center justify-center gap-4 mb-6", children: [
          /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-secondary" }),
          /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[11px] uppercase tracking-[0.4em]", children: "Publication Pipeline" }),
          /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-secondary" })
        ] }),
        /* @__PURE__ */ jsxs(motion.h2, { ...fadeInUp, transition: { delay: 0.1 }, className: "text-2xl md:text-3xl lg:text-4xl lg:text-5xl font-serif font-bold text-dark mb-4", children: [
          "The ",
          /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Scholarly Journey" })
        ] }),
        /* @__PURE__ */ jsx(motion.p, { ...fadeInUp, transition: { delay: 0.2 }, className: "text-muted font-medium text-base", children: "Click any step to explore your manuscript's journey in detail." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 relative mb-6", children: [
        /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute top-[52px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" }),
        pipelineSteps.map((item, i) => {
          const isActive = activeStep === i;
          return /* @__PURE__ */ jsxs(
            motion.button,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.15, duration: 0.8 },
              onClick: () => setActiveStep(isActive ? null : i),
              className: `relative group p-8 flex flex-col items-center text-center rounded-xl transition-all duration-500 cursor-pointer focus:outline-none ${isActive ? "bg-primary shadow-2xl shadow-primary/20 -translate-y-2" : "bg-white border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1"}`,
              children: [
                /* @__PURE__ */ jsxs("div", { className: `relative z-10 w-24 h-24 rounded-full flex items-center justify-center mb-6 transition-all duration-500 shadow-lg ${isActive ? "bg-white/20 border-2 border-white/30" : "bg-surface border border-gray-100 group-hover:bg-primary group-hover:border-primary"}`, children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute -top-2 left-1/2 -translate-x-1/2 bg-secondary text-white text-[10px] font-black px-3 py-1 rounded-full", children: item.step }),
                  /* @__PURE__ */ jsx(item.icon, { className: `w-10 h-10 transition-colors duration-300 ${isActive ? "text-white" : "text-secondary group-hover:text-white"}` })
                ] }),
                /* @__PURE__ */ jsx("h3", { className: `text-sm font-serif font-bold mb-2 transition-colors ${isActive ? "text-white" : "text-dark group-hover:text-primary"}`, children: item.title }),
                /* @__PURE__ */ jsx("p", { className: `text-[11px] leading-relaxed font-medium hidden md:block ${isActive ? "text-white/70" : "text-muted"}`, children: item.shortDesc })
              ]
            },
            i
          );
        })
      ] }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: false,
          animate: { opacity: activeStep !== null ? 1 : 0, y: activeStep !== null ? 0 : 10 },
          transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
          className: activeStep !== null ? "block" : "hidden",
          children: activeStep !== null && /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl border border-primary/10 shadow-2xl p-10 md:p-14 flex flex-col md:flex-row items-start gap-10", children: [
            /* @__PURE__ */ jsx("div", { className: "w-20 h-20 bg-primary/8 rounded-2xl flex items-center justify-center shrink-0", children: React.createElement(pipelineSteps[activeStep].icon, { className: "w-10 h-10 text-primary" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("span", { className: "text-[10px] font-black uppercase tracking-widest text-secondary mb-2 block", children: [
                "Step ",
                pipelineSteps[activeStep].step
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-serif font-bold text-dark mb-4", children: pipelineSteps[activeStep].title }),
              /* @__PURE__ */ jsx("p", { className: "text-muted leading-relaxed text-base font-medium", children: pipelineSteps[activeStep].fullDesc })
            ] })
          ] })
        }
      )
    ] })
  ] });
}
export {
  Home as default
};
