import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import React, { useState, useEffect, Suspense, useRef } from "react";
import { M as MainLayout } from "./MainLayout-CgOr05Na.js";
import { motion, AnimatePresence, useInView, animate } from "framer-motion";
import { Link } from "@inertiajs/react";
import { Mail, Users, BookOpen, Loader2, CheckCircle, Send, AlertCircle, Quote, Star, ChevronLeft, ChevronRight, Globe, ArrowRight, ShieldCheck, Award, FileText, Heart, ArrowUpRight, Microscope, Palette, Calculator, Scale, GraduationCap, Cpu, Feather, UploadCloud, FileCheck, RefreshCw } from "lucide-react";
import toast from "react-hot-toast";
import confetti from "canvas-confetti";
import { S as ScrollReveal } from "./ScrollReveal-1c_Su25q.js";
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
          colors: ["#0F766E", "#F59E0B", "#111827", "#ffffff"]
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
  return /* @__PURE__ */ jsxs("section", { className: "py-12 relative overflow-hidden bg-primary", children: [
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
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary mix-blend-multiply" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 z-0 opacity-10",
        style: { backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)", backgroundSize: "36px 36px" }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute -top-40 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] z-0" }),
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
              /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-light", children: "Latest Research" })
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
const testimonials = [
  {
    quote: "The peer-review process at Sanmati Spectrum was incredibly rigorous yet efficient. The feedback from reviewers significantly improved my paper.",
    name: "Dr. Elena Rossi",
    role: "Associate Professor, University of Milan",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    quote: "A truly multidisciplinary platform. It's rare to find a journal that values cross-domain dialogue with such academic integrity.",
    name: "Prof. James Chen",
    role: "Head of Research, Global Tech Institute",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    quote: "Publishing my case study here gave me visibility I hadn't seen elsewhere. The open-access policy is a game changer for researchers in developing countries.",
    name: "Dr. Amina Mansour",
    role: "Academic Researcher, Cairo University",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  }
];
const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev2) => (prev2 + 1) % testimonials.length);
    }, 8e3);
    return () => clearInterval(timer);
  }, []);
  const next = () => setCurrent((prev2) => (prev2 + 1) % testimonials.length);
  const prev = () => setCurrent((prev2) => (prev2 - 1 + testimonials.length) % testimonials.length);
  return /* @__PURE__ */ jsxs("section", { className: "py-16 bg-dark text-white overflow-hidden relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx(Quote, { className: "w-12 h-12 text-primary mx-auto mb-6 opacity-50" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-serif font-bold mb-4", children: "Voice of Researchers" }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 fill-amber-500 text-amber-500" }, i)) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto relative px-12", children: [
        /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -20 },
            transition: { duration: 0.5 },
            className: "text-center",
            children: [
              /* @__PURE__ */ jsxs("p", { className: "text-xl md:text-3xl font-light italic leading-relaxed mb-12 text-slate-300", children: [
                "“",
                testimonials[current].quote,
                "”"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
                /* @__PURE__ */ jsx("div", { className: "w-20 h-20 rounded-full border-2 border-primary/30 p-1 mb-6 relative overflow-hidden", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    loading: "lazy",
                    src: testimonials[current].image,
                    alt: testimonials[current].name,
                    className: "object-cover rounded-full w-full h-full"
                  }
                ) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-1", children: testimonials[current].name }),
                /* @__PURE__ */ jsx("p", { className: "text-primary-light font-medium text-sm tracking-wide", children: testimonials[current].role })
              ] })
            ]
          },
          current
        ) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: prev,
            className: "absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10",
            "aria-label": "Previous testimonial",
            children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-6 h-6" })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: next,
            className: "absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10",
            "aria-label": "Next testimonial",
            children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-6 h-6" })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-3 mt-16", children: testimonials.map((_, i) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setCurrent(i),
          title: `Go to slide ${i + 1}`,
          className: "group py-3 px-2 -my-3 -mx-2 transition-all duration-200 cursor-pointer outline-none",
          "aria-label": `Go to slide ${i + 1}`,
          children: /* @__PURE__ */ jsx("div", { className: `h-1.5 transition-all duration-500 rounded-full ${i === current ? "w-8 bg-primary" : "w-2 bg-slate-700 group-hover:bg-slate-500"}` })
        },
        i
      )) })
    ] })
  ] });
};
const Hero = React.lazy(() => import("./Hero-Y0yNtLOz.js"));
const fadeInUp = {
  initial: { opacity: 0, y: 30, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
};
const AnimatedCounter = ({ from, to, duration = 2.5 }) => {
  const nodeRef = useRef();
  const inView = useInView(nodeRef, { once: true });
  useEffect(() => {
    if (!inView) return;
    const node = nodeRef.current;
    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        if (node) {
          node.textContent = Math.round(value).toLocaleString();
        }
      }
    });
    return () => controls.stop();
  }, [from, to, duration, inView]);
  return /* @__PURE__ */ jsx("span", { ref: nodeRef, children: from });
};
function Home() {
  const [savedPapers, setSavedPapers] = useState({});
  const toggleSavePaper = (idx) => {
    setSavedPapers((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I submit my research paper to Sanmati Spectrum?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Authors can submit their manuscripts digitally via our call for papers submission portal. Our editorial team conducts an initial screening, followed by a double-blind peer review."
        }
      },
      {
        "@type": "Question",
        "name": "Does the journal provide a CrossRef DOI for published papers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every research paper accepted and published in Sanmati Spectrum of Knowledge receives a registered CrossRef DOI for global archival indexing."
        }
      },
      {
        "@type": "Question",
        "name": "What are the indexing standards of Sanmati Journal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sanmati Spectrum is indexed with Google Scholar, CrossRef DOIs, and follows strict publishing ethics compliant with the Committee on Publication Ethics (COPE)."
        }
      }
    ]
  };
  return /* @__PURE__ */ jsxs(
    MainLayout,
    {
      title: "Sanmati Spectrum of Knowledge | National Multidisciplinary Research Journal",
      description: "Sanmati Spectrum is India's leading multidisciplinary peer-reviewed academic journal. Publishing high-quality research papers, thesis, and hardcover books across science, arts, commerce, and law.",
      keywords: "multidisciplinary journal india, peer-reviewed research, academic book publication, sanmati spectrum of knowledge, ugc care listed journal, publish book from thesis, national research journal",
      jsonLd: faqSchema,
      children: [
        /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsxs("div", { className: "min-h-[95vh] flex flex-col gap-4 items-center justify-center text-primary font-bold bg-warm-bg", children: [
          /* @__PURE__ */ jsx(Globe, { className: "w-12 h-12 animate-spin text-secondary opacity-30" }),
          /* @__PURE__ */ jsx("span", { className: "animate-pulse tracking-[0.3em] text-[10px] uppercase font-black text-slate-400", children: "Initializing Journal Framework" })
        ] }), children: /* @__PURE__ */ jsx(Hero, {}) }),
        /* @__PURE__ */ jsxs("section", { className: "py-16 lg:py-24 relative overflow-hidden bg-white", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-24 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" }),
          /* @__PURE__ */ jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-center", children: [
            /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "lg:col-span-7", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                /* @__PURE__ */ jsx("span", { className: "h-[1.5px] w-8 bg-secondary" }),
                /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[10px] uppercase tracking-[0.3em]", children: "Institutional Mission" })
              ] }),
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl xl:text-6xl font-serif font-bold text-primary leading-[1.15] mb-8 tracking-tight", children: [
                "Advancing ",
                /* @__PURE__ */ jsx("span", { className: "text-secondary italic", children: "Scholarly Excellence" }),
                " Through Global Rigor"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-600 font-medium leading-relaxed text-lg mb-10 border-l-4 border-secondary/30 pl-6 max-w-2xl", children: "Sanmati Spectrum of Knowledge serves as a premier national platform bridging the gap between legacy knowledge and modern scientific progress. We empower educators and scholars across all disciplines with fast, transparent peer-review mechanisms." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-6", children: [
                /* @__PURE__ */ jsxs(Link, { href: "/basic-info/about-journal", className: "thm-btn", children: [
                  /* @__PURE__ */ jsx("span", { children: "Learn Our Ethos" }),
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 px-5 py-3 bg-slate-50 rounded-xl border border-slate-100", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-[9px] font-black uppercase tracking-[0.2em]", children: "Verified ISSN" }),
                    /* @__PURE__ */ jsx("p", { className: "text-primary font-black text-sm tracking-wider", children: "3108-1819" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: 30 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.8, delay: 0.2 },
                  className: "card-glass p-8 flex flex-col justify-between group hover:-translate-y-2",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-white shadow-ambient flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500", children: /* @__PURE__ */ jsx(Award, { className: "w-6 h-6 text-secondary group-hover:text-white transition-colors" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h3", { className: "font-serif font-bold text-xl text-primary mb-3", children: "The Mission" }),
                      /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm leading-relaxed font-medium", children: "Empowering global discovery through rigorous double-blind academic standards." })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: 30 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.8, delay: 0.3 },
                  className: "bg-primary p-8 rounded-3xl flex flex-col justify-between shadow-ambient-lg group hover:-translate-y-2 text-white",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(Star, { className: "w-6 h-6 text-secondary fill-secondary" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h3", { className: "font-serif font-bold text-xl text-white mb-3", children: "The Vision" }),
                      /* @__PURE__ */ jsx("p", { className: "text-white/80 text-sm leading-relaxed font-medium", children: "To catalyze transformation in research methodology and multidisciplinary integrity." })
                    ] })
                  ]
                }
              )
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "py-16 bg-primary relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:3rem_3rem]" }),
          /* @__PURE__ */ jsx("div", { className: "container-custom relative z-10", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-5 gap-8", children: [
            { icon: FileText, label: "Papers Published", value: 550, suffix: "+", color: "text-secondary" },
            { icon: Users, label: "Reviewers", value: 45, suffix: "+", color: "text-white" },
            { icon: Star, label: "Global Citations", value: 2500, suffix: "+", color: "text-secondary" },
            { icon: Globe, label: "Index Score", value: 98, suffix: "%", color: "text-white" },
            { icon: Award, label: "Affiliations", value: 15, suffix: "+", color: "text-secondary" }
          ].map((stat, i) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.9 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true },
              transition: { delay: i * 0.1, duration: 0.5 },
              className: "text-center flex flex-col items-center",
              children: [
                /* @__PURE__ */ jsx("div", { className: `w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/10 ${stat.color}`, children: /* @__PURE__ */ jsx(stat.icon, { className: "w-5 h-5" }) }),
                /* @__PURE__ */ jsxs("div", { className: "text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-1", children: [
                  /* @__PURE__ */ jsx(AnimatedCounter, { from: 0, to: stat.value }),
                  stat.suffix
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black uppercase tracking-[0.2em] text-slate-400", children: stat.label })
              ]
            },
            i
          )) }) })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "py-16 lg:py-24 bg-warm-bg", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-end mb-16 gap-6", children: [
            /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "max-w-2xl", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsx("span", { className: "h-[1.5px] w-8 bg-secondary" }),
                /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[10px] uppercase tracking-[0.3em]", children: "Legacy Archive" })
              ] }),
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-serif font-bold text-primary leading-tight tracking-tight", children: [
                "Featured ",
                /* @__PURE__ */ jsx("span", { className: "text-secondary italic", children: "Hardcover Volumes" })
              ] })
            ] }),
            /* @__PURE__ */ jsx(motion.div, { ...fadeInUp, children: /* @__PURE__ */ jsxs(Link, { href: "/book-publication", className: "thm-btn-outline py-2.5 text-[10px]", children: [
              /* @__PURE__ */ jsx("span", { children: "Browse Repertoire" }),
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-10", children: [
            {
              genre: "Academic Research",
              format: "Volume 37 · 2026",
              title: "Multidisciplinary Frontiers",
              excerpt: "A masterwork collection documenting the latest critical intersections of applied sciences, arts, and governance.",
              img: "/images/books/WhatsApp Image 2026-02-16 at 9.21.50 PM.jpeg",
              badge: "Latest Vol"
            },
            {
              genre: "Education",
              format: "Volume 35 · 2025",
              title: "Traditional Meets Modern",
              excerpt: "Exploring traditional cultural wisdom and synthesizing it with forward-facing digital pedagogical methods.",
              img: "/images/books/WhatsApp Image 2026-02-16 at 9.21.49 PM (1).jpeg",
              badge: "Critical Choice"
            },
            {
              genre: "Social Studies",
              format: "Volume 32 · 2025",
              title: "Socio-Economic Discourse",
              excerpt: "An essential analytical volume presenting research targeted at evolving modern societal economic constraints.",
              img: "/images/books/WhatsApp Image 2026-02-16 at 9.21.47 PM.jpeg",
              badge: "Archival"
            }
          ].map((book, i) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.15, duration: 0.8 },
              className: "group flex flex-col",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-ambient hover:shadow-ambient-lg transition-all duration-700 mb-6", children: [
                  /* @__PURE__ */ jsx("img", { src: book.img, alt: book.title, className: "w-full h-full object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-[1.5s]", loading: "lazy" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
                  /* @__PURE__ */ jsx("span", { className: "absolute top-5 left-5 bg-white/90 backdrop-blur-md text-primary text-[9px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-lg border border-white/50", children: book.badge }),
                  /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 inset-x-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500", children: /* @__PURE__ */ jsx(Link, { href: "/book-publication", className: "w-full py-3.5 bg-secondary text-primary font-bold text-xs uppercase tracking-widest rounded-xl text-center block shadow-xl shadow-secondary/20", children: "Secure Copy" }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "px-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[9px] tracking-[0.2em] uppercase", children: book.genre }),
                    /* @__PURE__ */ jsx("span", { className: "text-slate-400 text-[10px] font-bold", children: book.format })
                  ] }),
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors leading-tight", children: book.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-[13px] leading-relaxed line-clamp-2", children: book.excerpt })
                ] })
              ]
            },
            i
          )) })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "py-16 lg:py-24 bg-white relative border-y border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-end mb-16 gap-6", children: [
            /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "max-w-2xl", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsx("span", { className: "h-[1.5px] w-8 bg-secondary" }),
                /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[10px] uppercase tracking-[0.3em]", children: "Analytics & Trends" })
              ] }),
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-serif font-bold text-primary leading-tight tracking-tight", children: [
                "Most ",
                /* @__PURE__ */ jsx("span", { className: "text-secondary italic", children: "Viewed Investigations" })
              ] })
            ] }),
            /* @__PURE__ */ jsx(motion.div, { ...fadeInUp, children: /* @__PURE__ */ jsxs(Link, { href: "/archive", className: "flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary group", children: [
              "Explore Whole Registry ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
            { rank: "01", field: "Multidisciplinary", title: "Sanmati Spectrum of Knowledge: Volume 37 Overview & Impact Strategies", authors: "Dr. Namrata Jain, Dr. Ratnesh Kumar Jain", doi: "https://doi.org/10.5281/zenodo.19710093", stats: "1.8k Views", tag: "Featured" },
            { rank: "02", field: "Commerce", title: "Strategic Analysis of Digital Rural Pedagogies and Transformation Factors", authors: "Dr. Ravi Sharma, Prof. Anita Gupta", stats: "1.2k Views", tag: "Trending" },
            { rank: "03", field: "Humanities", title: "The Historical Interlink Between Tradition and Modern Epistemologies", authors: "Dr. Priya Kumari, Prof. Alok Jain", stats: "940 Views", tag: "Recommended" }
          ].map((paper, i) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1, duration: 0.7 },
              className: "card-glass p-8 flex flex-col hover:-translate-y-2 group cursor-pointer",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-8", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-serif text-4xl font-black text-slate-100 group-hover:text-secondary/10 transition-colors duration-500", children: paper.rank }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("span", { className: "px-2 py-1 rounded-md bg-slate-50 border border-slate-100 text-[9px] font-black text-slate-500 uppercase tracking-wider", children: paper.tag }),
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        onClick: (e) => {
                          e.preventDefault();
                          toggleSavePaper(i);
                        },
                        className: "w-7 h-7 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors border border-slate-100",
                        "aria-label": savedPapers[i] ? "Remove paper from saved list" : "Save paper to your reading list",
                        children: /* @__PURE__ */ jsx(Heart, { className: `w-3.5 h-3.5 ${savedPapers[i] ? "fill-red-500 text-red-500" : ""}` })
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsx("span", { className: "text-[9px] font-black uppercase tracking-widest text-secondary mb-3", children: paper.field }),
                /* @__PURE__ */ jsx("h3", { className: "font-serif font-bold text-lg text-primary leading-snug mb-4 group-hover:text-secondary transition-colors line-clamp-3", children: paper.title }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-xs font-medium mb-6 line-clamp-1", children: paper.authors }),
                /* @__PURE__ */ jsxs("div", { className: "mt-auto pt-5 border-t border-slate-100 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-[10px] font-bold text-slate-400", children: [
                    /* @__PURE__ */ jsx(FileText, { className: "w-3 h-3" }),
                    paper.stats
                  ] }),
                  /* @__PURE__ */ jsxs(Link, { href: "/archive", className: "text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-1 group/arrow", children: [
                    "Read ",
                    /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-3 h-3 group-hover/arrow:translate-x-0.5 transition-transform" })
                  ] })
                ] })
              ]
            },
            i
          )) })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "py-16 lg:py-24 bg-slate-50", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-20", children: [
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-3 mb-4 bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm", children: [
              /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-secondary" }),
              /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[9px] uppercase tracking-[0.25em]", children: "Scholarly Breadth" })
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-serif font-bold text-primary mb-6 tracking-tight", children: [
              "Matrix of ",
              /* @__PURE__ */ jsx("span", { className: "text-secondary italic", children: "Domain Areas" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-medium text-base max-w-xl mx-auto leading-relaxed", children: "Targeting the full comprehensive spectrum of national disciplinary fields." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-6", children: [
            { name: "Science & Tech", icon: Microscope, color: "text-blue-600", slug: "science-technology" },
            { name: "Social Sciences", icon: Users, color: "text-emerald-600", slug: "social-sciences" },
            { name: "Arts & Humanities", icon: Palette, color: "text-violet-600", slug: "arts-humanities" },
            { name: "Commerce", icon: Calculator, color: "text-orange-600", slug: "management-commerce" },
            { name: "Law & Ethics", icon: Scale, color: "text-red-600", slug: "law-governance" },
            { name: "Education", icon: GraduationCap, color: "text-cyan-600", slug: "education" },
            { name: "Computer Science", icon: Cpu, color: "text-indigo-600", slug: "science-technology" },
            { name: "Philosophy", icon: Feather, color: "text-amber-600", slug: "philosophy" }
          ].map((cat, idx) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 15 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: idx * 0.05, duration: 0.5 },
              children: /* @__PURE__ */ jsxs(
                Link,
                {
                  href: `/submission-guidelines/areas/${cat.slug}`,
                  className: "group p-6 md:p-8 bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-ambient hover:border-secondary/30 transition-all duration-500 flex flex-col items-center text-center h-full",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: `w-14 h-14 rounded-2xl bg-slate-50 group-hover:bg-primary flex items-center justify-center mb-5 transition-all duration-500 text-slate-400 group-hover:text-white`, children: /* @__PURE__ */ jsx(cat.icon, { className: "w-6 h-6 group-hover:scale-110 transition-transform duration-500" }) }),
                    /* @__PURE__ */ jsx("h3", { className: "font-serif font-bold text-primary text-base mb-1 group-hover:text-secondary transition-colors", children: cat.name }),
                    /* @__PURE__ */ jsx("div", { className: "h-px w-0 group-hover:w-8 bg-secondary transition-all duration-500 mt-3" })
                  ]
                }
              )
            },
            idx
          )) })
        ] }) }),
        /* @__PURE__ */ jsxs("section", { className: "py-16 lg:py-24 bg-white relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-24 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" }),
          /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-3 mb-4", children: /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[10px] uppercase tracking-[0.3em]", children: "Board of Directors" }) }),
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-serif font-bold text-primary mb-4 tracking-tight", children: [
                "Presiding ",
                /* @__PURE__ */ jsx("span", { className: "text-secondary italic", children: "Leadership" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto", children: [
              /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "group bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 flex flex-col sm:flex-row gap-8 items-center sm:items-start hover:bg-white hover:shadow-ambient-lg transition-all duration-700", children: [
                /* @__PURE__ */ jsx("div", { className: "w-32 h-32 rounded-[2rem] overflow-hidden shadow-lg shrink-0 border-4 border-white", children: /* @__PURE__ */ jsx("img", { src: "/mam.jpeg", alt: "Dr Namrata Jain", className: "w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-1000" }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 text-center sm:text-left", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center sm:justify-start gap-2 mb-2 text-secondary", children: [
                    /* @__PURE__ */ jsx(Quote, { className: "w-3 h-3 fill-secondary opacity-50" }),
                    /* @__PURE__ */ jsx("span", { className: "font-black text-[9px] uppercase tracking-widest", children: "Editor-in-Chief" })
                  ] }),
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-serif font-bold text-primary mb-3", children: "Dr Namrata Jain" }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm font-medium leading-relaxed mb-6", children: "Assistant Professor at TMU. Renowned authority in Indian knowledge traditions and pedagogical innovation." }),
                  /* @__PURE__ */ jsxs(Link, { href: "/editorial-team/editorial-board", className: "inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-primary hover:text-secondary transition-colors", children: [
                    "Expert Profile ",
                    /* @__PURE__ */ jsx(ChevronRight, { className: "w-3.5 h-3.5" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, transition: { delay: 0.15 }, className: "group bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 flex flex-col sm:flex-row gap-8 items-center sm:items-start hover:bg-white hover:shadow-ambient-lg transition-all duration-700", children: [
                /* @__PURE__ */ jsx("div", { className: "w-32 h-32 rounded-[2rem] overflow-hidden shadow-lg shrink-0 border-4 border-white", children: /* @__PURE__ */ jsx("img", { src: "/sir.jpeg", alt: "Dr. Ratnesh Kumar Jain", className: "w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-1000" }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 text-center sm:text-left", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center sm:justify-start gap-2 mb-2 text-secondary", children: [
                    /* @__PURE__ */ jsx(Quote, { className: "w-3 h-3 fill-secondary opacity-50" }),
                    /* @__PURE__ */ jsx("span", { className: "font-black text-[9px] uppercase tracking-widest", children: "Managing Editor" })
                  ] }),
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-serif font-bold text-primary mb-3", children: "Dr. Ratnesh Kumar Jain" }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm font-medium leading-relaxed mb-6", children: "Associate Professor & NSS Coordinator at TMU. Specialized in academic management and operational integrity." }),
                  /* @__PURE__ */ jsxs(Link, { href: "/editorial-team/editorial-board", className: "inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-primary hover:text-secondary transition-colors", children: [
                    "Expert Profile ",
                    /* @__PURE__ */ jsx(ChevronRight, { className: "w-3.5 h-3.5" })
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(PipelineSection, {}),
        /* @__PURE__ */ jsx(Testimonials, {}),
        /* @__PURE__ */ jsxs("section", { className: "py-16 lg:py-24 bg-primary text-white relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none", children: /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[140px]" }) }),
          /* @__PURE__ */ jsx("div", { className: "container-custom relative z-10 text-center max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.95 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true },
              transition: { duration: 0.8 },
              children: [
                /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-[0.25em] text-secondary mb-8 border border-white/10", children: "Call For Manuscripts" }),
                /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1] mb-8", children: [
                  "Elevate Your Research to ",
                  /* @__PURE__ */ jsx("br", {}),
                  /* @__PURE__ */ jsx("span", { className: "text-secondary italic", children: "Global Visibility" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-300 text-base md:text-lg font-medium max-w-xl mx-auto mb-12 leading-relaxed", children: "Join our recognized platform of over 2,500 educators and innovators. Submit your latest manuscript for fast-track editorial triage." }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-5 justify-center items-center", children: [
                  /* @__PURE__ */ jsxs(Link, { href: "/submission-guidelines/call-for-papers", className: "thm-btn w-full sm:w-auto shadow-2xl", children: [
                    /* @__PURE__ */ jsx("span", { children: "Submit Manuscript" }),
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                  ] }),
                  /* @__PURE__ */ jsx(Link, { href: "/archive", className: "thm-btn-outline !border-white/30 !text-white hover:!bg-white hover:!text-primary w-full sm:w-auto", children: /* @__PURE__ */ jsx("span", { children: "Explore Database" }) })
                ] })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx(NewsletterSection, {})
      ]
    }
  );
}
const pipelineSteps = [
  {
    step: "01",
    title: "Manuscript Intake",
    icon: UploadCloud,
    shortDesc: "Secure submission with ethical triage.",
    fullDesc: "Authors submit natively. Each work undergoes scope scanning, metadata check, and full plagiarism triage with our automated validation engine."
  },
  {
    step: "02",
    title: "Double-Blind Review",
    icon: FileCheck,
    shortDesc: "Anonymous multi-stage assessment.",
    fullDesc: "Assigned blindly to two independent faculty peers. Evaluation is performed strictly on empirical grounds, methodology precision, and empirical weight."
  },
  {
    step: "03",
    title: "Refine & Optimize",
    icon: RefreshCw,
    shortDesc: "Iterative peer-feedback refinement.",
    fullDesc: "Direct collaborative loop where authors incorporate reviewer enhancements, guided transparently by our internal managing editor."
  },
  {
    step: "04",
    title: "DOI Registration",
    icon: Globe,
    shortDesc: "Global archival & indexing launch.",
    fullDesc: "The final paper is typeset, minted with a permanent Crossref DOI, indexed in Global Repositories, and launched in high-fidelity open access format."
  }
];
function PipelineSection() {
  const [activeStep, setActiveStep] = useState(null);
  return /* @__PURE__ */ jsx("section", { className: "py-16 lg:py-24 bg-warm-bg border-y border-slate-200/50", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-20", children: [
      /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[10px] uppercase tracking-[0.3em] block mb-4", children: "The Mechanism" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-serif font-bold text-primary mb-4 tracking-tight", children: [
        "Journal ",
        /* @__PURE__ */ jsx("span", { className: "text-secondary italic", children: "Publishing Engine" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10", children: pipelineSteps.map((item, i) => {
      const isActive = activeStep === i;
      return /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setActiveStep(isActive ? null : i),
          className: `group p-8 text-left rounded-[2rem] transition-all duration-500 relative overflow-hidden border ${isActive ? "bg-primary border-primary shadow-ambient-lg -translate-y-2 text-white" : "bg-white border-slate-200/60 hover:border-secondary/40 shadow-sm hover:-translate-y-1"}`,
          children: [
            /* @__PURE__ */ jsx("div", { className: `w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${isActive ? "bg-white/10 border border-white/20" : "bg-slate-50 group-hover:bg-secondary/10"}`, children: /* @__PURE__ */ jsx(item.icon, { className: `w-5 h-5 ${isActive ? "text-secondary" : "text-slate-400 group-hover:text-secondary"} transition-colors` }) }),
            /* @__PURE__ */ jsx("span", { className: `font-serif font-bold text-4xl block mb-4 ${isActive ? "text-white/30" : "text-slate-500 group-hover:text-slate-400"} transition-colors`, children: item.step }),
            /* @__PURE__ */ jsx("h3", { className: `font-serif font-bold text-lg leading-tight mb-2 ${isActive ? "text-white" : "text-primary"}`, children: item.title }),
            /* @__PURE__ */ jsx("p", { className: `text-[12px] leading-relaxed font-medium ${isActive ? "text-slate-300" : "text-slate-500"}`, children: item.shortDesc })
          ]
        },
        i
      );
    }) }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: false,
        animate: { opacity: activeStep !== null ? 1 : 0, height: activeStep !== null ? "auto" : 0 },
        className: "overflow-hidden",
        children: activeStep !== null && /* @__PURE__ */ jsxs("div", { className: "p-8 bg-white rounded-3xl shadow-ambient border border-slate-200/60 flex flex-col md:flex-row gap-6 items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-2xl bg-primary/5 text-secondary flex items-center justify-center shrink-0", children: React.createElement(pipelineSteps[activeStep].icon, { className: "w-7 h-7" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-serif font-bold text-primary text-xl mb-2", children: [
              pipelineSteps[activeStep].title,
              " Expanded"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600 font-medium leading-relaxed text-base", children: pipelineSteps[activeStep].fullDesc })
          ] })
        ] })
      }
    )
  ] }) });
}
export {
  Home as default
};
