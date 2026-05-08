import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import React, { useState, useEffect, Suspense, useRef } from "react";
import { M as MainLayout } from "./MainLayout-Z2n4S167.js";
import { motion, AnimatePresence, useInView, animate } from "framer-motion";
import { Link } from "@inertiajs/react";
import { Mail, Users, BookOpen, Loader2, CheckCircle, Send, AlertCircle, Quote, Star, ChevronLeft, ChevronRight, Globe, ArrowRight, FileText, Award, ArrowUpRight, Heart, Microscope, Palette, Calculator, Scale, GraduationCap, Cpu, Feather, UploadCloud, FileCheck, RefreshCw } from "lucide-react";
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
  return /* @__PURE__ */ jsxs("section", { className: "py-24 bg-dark text-white overflow-hidden relative", children: [
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
                /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-white mb-1", children: testimonials[current].name }),
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
          className: `h-1.5 transition-all duration-500 rounded-full ${i === current ? "w-8 bg-primary" : "w-2 bg-slate-700"}`,
          "aria-label": `Go to slide ${i + 1}`
        },
        i
      )) })
    ] })
  ] });
};
const Hero = React.lazy(() => import("./Hero-D5N_avrL.js"));
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};
const AnimatedCounter = ({ from, to, duration = 2 }) => {
  const nodeRef = useRef();
  const inView = useInView(nodeRef, { once: true });
  useEffect(() => {
    if (!inView) return;
    const node = nodeRef.current;
    const controls = animate(from, to, {
      duration,
      onUpdate(value) {
        if (node) {
          node.textContent = Math.round(value);
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
        /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsxs("div", { className: "min-h-[95vh] flex flex-col gap-4 items-center justify-center text-primary font-bold bg-[#050B14]", children: [
          /* @__PURE__ */ jsx(Globe, { className: "w-12 h-12 animate-spin text-accent opacity-20" }),
          /* @__PURE__ */ jsx("span", { className: "animate-pulse tracking-widest text-sm uppercase text-white/60", children: "Loading Core Engine..." })
        ] }), children: /* @__PURE__ */ jsx(Hero, {}) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 lg:py-32 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center", children: [
          /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "lg:col-span-7", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-primary/40" }),
              /* @__PURE__ */ jsx("span", { className: "text-primary dark:text-primary-light font-black text-[10px] uppercase tracking-[0.3em]", children: "Institutional Mission" })
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-serif font-black text-dark dark:text-white leading-tight mb-8", children: [
              "Building a ",
              /* @__PURE__ */ jsx("span", { className: "text-primary dark:text-primary-light italic font-serif", children: "Global Research Community" }),
              " of Academic Rigor"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-base md:text-lg mb-8 border-l-2 border-primary/20 pl-6", children: "Sanmati Spectrum of Knowledge serves as a premier national platform bridging the gap between historical scholarship and modern scientific progress. We empower scholars and educators across all major disciplines with professional double-blind peer review and high-impact publishing." }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
              /* @__PURE__ */ jsxs(
                Link,
                {
                  href: "/basic-info/about-journal",
                  className: "group px-7 py-3.5 bg-primary dark:bg-primary-light text-white dark:text-slate-950 rounded-xl font-bold text-xs hover:bg-primary-dark transition-all flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 uppercase tracking-widest",
                  children: [
                    "Our Ethos ",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-[9px] font-black uppercase tracking-[0.2em]", children: "Verified ISSN" }),
                /* @__PURE__ */ jsx("p", { className: "text-dark dark:text-slate-200 font-black text-sm", children: "3108-1819" })
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
                className: "p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex flex-col justify-between hover:border-primary/20 dark:hover:border-primary-light/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-primary-light font-black text-base mb-6", children: "M" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "font-bold text-dark dark:text-white mb-2 text-base tracking-tight", children: "The Mission" }),
                    /* @__PURE__ */ jsx("p", { className: "text-slate-500 dark:text-slate-400 text-[13px] leading-relaxed font-medium", children: "Empowering scholars via high-impact peer review and global open-access discoverability." })
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
                className: "p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex flex-col justify-between hover:border-primary/20 dark:hover:border-primary-light/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center text-secondary dark:text-secondary-light font-black text-base mb-6", children: "V" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "font-bold text-dark dark:text-white mb-2 text-base tracking-tight", children: "The Vision" }),
                    /* @__PURE__ */ jsx("p", { className: "text-slate-500 dark:text-slate-400 text-[13px] leading-relaxed font-medium", children: "To stand as the absolute gold standard in multidisciplinary publishing and research integrity." })
                  ] })
                ]
              }
            )
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-slate-50 dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 transition-colors duration-300", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
            /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 dark:bg-primary/10 text-primary dark:text-primary-light rounded-full text-[10px] font-black uppercase tracking-widest mb-4", children: "Journal Analytics" }),
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-serif font-black text-dark dark:text-white", children: [
              "Global Impact & ",
              /* @__PURE__ */ jsx("span", { className: "text-primary dark:text-primary-light italic font-serif", children: "Authority" }),
              " Metrics"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6", children: [
            { icon: FileText, label: "Total Papers Published", value: 550, suffix: "+", color: "text-blue-500 bg-blue-500/5 dark:bg-blue-500/10" },
            { icon: Users, label: "Expert Reviewers", value: 45, suffix: "+", color: "text-purple-500 bg-purple-500/5 dark:bg-purple-500/10" },
            { icon: Star, label: "Global Citations", value: 1200, suffix: "+", color: "text-amber-500 bg-amber-500/5 dark:bg-amber-500/10" },
            { icon: Globe, label: "Countries Reached", value: 15, suffix: "+", color: "text-emerald-500 bg-emerald-500/5 dark:bg-emerald-500/10" },
            { icon: Award, label: "Active Authors", value: 250, suffix: "+", color: "text-cyan-500 bg-cyan-500/5 dark:bg-cyan-500/10" }
          ].map((stat, i) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 15 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.05, duration: 0.6 },
              className: "bg-white dark:bg-slate-950 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all group",
              children: [
                /* @__PURE__ */ jsx("div", { className: `w-12 h-12 rounded-2xl ${stat.color} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform`, children: /* @__PURE__ */ jsx(stat.icon, { className: "w-6 h-6" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-black text-dark dark:text-white mb-2 tracking-tight", children: [
                    /* @__PURE__ */ jsx(AnimatedCounter, { from: 0, to: stat.value }),
                    stat.suffix
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-[11px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 leading-tight", children: stat.label })
                ] })
              ]
            },
            i
          )) })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 lg:py-32 bg-white dark:bg-slate-950 transition-colors duration-300", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6", children: [
            /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "max-w-xl", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-primary/40" }),
                /* @__PURE__ */ jsx("span", { className: "text-primary dark:text-primary-light font-black text-[10px] uppercase tracking-[0.3em]", children: "Hardcover Publications" })
              ] }),
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-serif font-black text-dark dark:text-white leading-tight", children: [
                "Featured ",
                /* @__PURE__ */ jsx("span", { className: "text-primary dark:text-primary-light italic font-serif", children: "Scholarly Book Releases" })
              ] })
            ] }),
            /* @__PURE__ */ jsx(motion.div, { ...fadeInUp, children: /* @__PURE__ */ jsxs(Link, { href: "/book-publication", className: "group text-xs font-black uppercase tracking-[0.2em] text-slate-500 hover:text-primary dark:hover:text-primary-light transition-colors flex items-center gap-2", children: [
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
              className: "group bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:border-primary/20 dark:hover:border-primary-light/20 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "aspect-[4/5] overflow-hidden relative bg-slate-100 dark:bg-slate-950", children: [
                  /* @__PURE__ */ jsx("img", { src: book.img, alt: book.title, className: "w-full h-full object-cover group-hover:scale-102 transition-transform duration-700", loading: "lazy" }),
                  book.badge && /* @__PURE__ */ jsx("span", { className: "absolute top-4 left-4 bg-primary dark:bg-primary-light text-white dark:text-slate-950 text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md", children: book.badge })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "p-8 flex flex-col flex-grow justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-primary dark:text-primary-light font-black text-[10px] tracking-[0.2em] uppercase mb-1", children: book.genre }),
                    /* @__PURE__ */ jsx("p", { className: "text-slate-400 dark:text-slate-500 text-[11px] font-bold mb-4", children: book.format }),
                    /* @__PURE__ */ jsx("h3", { className: "text-lg font-serif font-bold text-dark dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-primary-light transition-colors leading-tight", children: book.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-slate-500 dark:text-slate-400 text-[13px] leading-relaxed mb-6 font-medium line-clamp-3", children: book.excerpt })
                  ] }),
                  /* @__PURE__ */ jsxs(Link, { href: "/book-publication", className: "mt-auto inline-flex items-center justify-center gap-2 w-full py-3.5 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary dark:hover:bg-primary-light hover:text-white dark:hover:text-slate-950 transition-all group/btn border border-slate-100 dark:border-slate-800 shadow-sm", children: [
                    "Order Copy ",
                    /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" })
                  ] })
                ] })
              ]
            },
            i
          )) })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 lg:py-32 bg-slate-50 dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 transition-colors duration-300", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6", children: [
            /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "max-w-xl", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-primary/40" }),
                /* @__PURE__ */ jsx("span", { className: "text-primary dark:text-primary-light font-black text-[10px] uppercase tracking-[0.3em]", children: "Trending Papers" })
              ] }),
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-serif font-black text-dark dark:text-white leading-tight", children: [
                "Most ",
                /* @__PURE__ */ jsx("span", { className: "text-primary dark:text-primary-light italic font-serif font-bold", children: "Accessed Research" }),
                " Papers"
              ] })
            ] }),
            /* @__PURE__ */ jsx(motion.div, { ...fadeInUp, children: /* @__PURE__ */ jsxs(Link, { href: "/archive", className: "group text-xs font-black uppercase tracking-[0.2em] text-slate-500 hover:text-primary dark:hover:text-primary-light transition-colors flex items-center gap-2", children: [
              "Browse Archive ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1.5 transition-transform" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
            { rank: "01", field: "Multidisciplinary", title: "Sanmati Spectrum of Knowledge & Emerging Discourse (January-March, 2026)", authors: "Dr Namrata Jain, Dr. Ratnesh Kumar Jain", doi: "https://doi.org/10.5281/zenodo.19710093", reads: "Featured Volume", tag: "Hot", readTime: "12 min read" },
            { rank: "02", field: "Commerce & Economics", title: "Impact of Digital Literacy on Rural Education Outcomes", authors: "Dr. Ravi Sharma, Prof. Anita Gupta", reads: "1.2k reads", tag: "Trending", readTime: "8 min read" },
            { rank: "03", field: "Social Science", title: "Multidisciplinary Perspectives on Modern Academic Discourse", authors: "Dr. Priya Kumari, Dr. Ratnesh Jain", reads: "987 reads", tag: "Featured", readTime: "10 min read" }
          ].map((paper, i) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 15 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1, duration: 0.6 },
              className: "group bg-white dark:bg-slate-950 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-primary/25 dark:hover:border-primary-light/25 hover:shadow-xl transition-all duration-300 flex flex-col justify-between",
              children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-serif font-black text-primary dark:text-primary-light", children: paper.rank }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "bg-primary/5 dark:bg-primary/10 text-primary dark:text-primary-light text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest", children: paper.tag }),
                      /* @__PURE__ */ jsx(
                        "button",
                        {
                          onClick: () => toggleSavePaper(i),
                          className: "p-1.5 rounded-full hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-slate-400 hover:text-red-500",
                          "aria-label": "Save Paper",
                          children: /* @__PURE__ */ jsx(Heart, { className: `w-3.5 h-3.5 ${savedPapers[i] ? "fill-red-500 text-red-500" : ""}` })
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-primary dark:text-primary-light font-black text-[9px] uppercase tracking-widest mb-2", children: paper.field }),
                  /* @__PURE__ */ jsx("h3", { className: "font-serif font-bold text-dark dark:text-white text-base leading-snug mb-3 group-hover:text-primary dark:group-hover:text-primary-light transition-colors line-clamp-3", children: paper.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-400 dark:text-slate-500 text-[12px] font-medium mb-4", children: paper.authors }),
                  paper.doi && /* @__PURE__ */ jsxs("div", { className: "text-[10px] text-slate-400 dark:text-slate-500 font-bold tracking-wider mb-6 leading-none", children: [
                    "DOI: ",
                    /* @__PURE__ */ jsx("a", { href: paper.doi, target: "_blank", rel: "noopener noreferrer", className: "text-primary dark:text-primary-light hover:underline font-bold", children: paper.doi.replace("https://doi.org/", "") })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4 mt-auto", children: [
                  /* @__PURE__ */ jsxs("span", { className: "text-slate-400 dark:text-slate-500 text-[11px] font-bold", children: [
                    paper.reads,
                    " · ",
                    paper.readTime
                  ] }),
                  /* @__PURE__ */ jsxs(Link, { href: "/archive", className: "text-primary dark:text-primary-light text-[10px] font-black uppercase tracking-widest flex items-center gap-1 group/link", children: [
                    "View ",
                    /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" })
                  ] })
                ] })
              ]
            },
            i
          )) })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 lg:py-32 bg-white dark:bg-slate-950 transition-colors duration-300", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-primary/40" }),
              /* @__PURE__ */ jsx("span", { className: "text-primary dark:text-primary-light font-black text-[10px] uppercase tracking-[0.3em]", children: "Academic Scope" }),
              /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-primary/40" })
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-serif font-black text-dark dark:text-white mb-4", children: [
              "Explore ",
              /* @__PURE__ */ jsx("span", { className: "text-primary dark:text-primary-light italic font-serif", children: "Fields of Study" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 dark:text-slate-400 font-medium text-sm leading-relaxed", children: "Publishing high-quality research papers across the full multidisciplinary spectrum of modern scholarly fields." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: [
            { name: "Science & Technology", icon: Microscope, color: "bg-blue-50/50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400", slug: "science-technology" },
            { name: "Social Sciences", icon: Users, color: "bg-emerald-50/50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400", slug: "social-sciences" },
            { name: "Arts & Humanities", icon: Palette, color: "bg-purple-50/50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400", slug: "arts-humanities" },
            { name: "Commerce & Management", icon: Calculator, color: "bg-orange-50/50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400", slug: "management-commerce" },
            { name: "Law & Governance", icon: Scale, color: "bg-red-50/50 text-red-600 dark:bg-red-500/10 dark:text-red-400", slug: "law-governance" },
            { name: "Education", icon: GraduationCap, color: "bg-cyan-50/50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400", slug: "education" },
            { name: "Computer Science", icon: Cpu, color: "bg-indigo-50/50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400", slug: "science-technology" },
            { name: "Philosophy & Jain Studies", icon: Feather, color: "bg-amber-50/50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400", slug: "philosophy" }
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
                  className: "group p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary/20 dark:hover:border-primary-light/20 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center h-full block focus:ring-2 focus:ring-primary/40 dark:focus:ring-primary-light/40 focus:outline-none",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: `w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary dark:group-hover:bg-primary-light group-hover:text-white dark:group-hover:text-slate-950 transition-all duration-300`, children: /* @__PURE__ */ jsx(cat.icon, { className: "w-6 h-6" }) }),
                    /* @__PURE__ */ jsx("h3", { className: "font-bold text-dark dark:text-white text-base mb-2 group-hover:text-primary dark:group-hover:text-primary-light transition-colors tracking-tight leading-snug", children: cat.name }),
                    /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider mt-auto pt-4 block group-hover:text-primary dark:group-hover:text-primary-light transition-colors", children: "Explore Area" })
                  ]
                }
              )
            },
            idx
          )) })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "py-16 bg-slate-50 dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 transition-colors duration-300", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12 text-center", children: [
          /* @__PURE__ */ jsx("p", { className: "text-slate-400 dark:text-slate-500 font-black text-[9px] uppercase tracking-[0.3em] mb-10", children: "Institutional Registries & Archival Partners" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center items-center gap-10 md:gap-20", children: [
            { name: "Google Scholar", value: "Indexed" },
            { name: "CrossRef DOI", value: "Registry" },
            { name: "UGC CARE Listed", value: "Proposed" },
            { name: "Double-Blind Review", value: "Compliance" },
            { name: "Open Access", value: "COPE Member" }
          ].map((partner, idx) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-serif font-black text-lg md:text-xl text-slate-600 dark:text-slate-300 group hover:text-primary dark:hover:text-primary-light transition-colors", children: partner.name }),
            /* @__PURE__ */ jsx("span", { className: "text-[8px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mt-1", children: partner.value })
          ] }, idx)) })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 lg:py-32 bg-white dark:bg-slate-950 transition-colors duration-300", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-primary/40" }),
              /* @__PURE__ */ jsx("span", { className: "text-primary dark:text-primary-light font-black text-[10px] uppercase tracking-[0.3em]", children: "Editorial Board" }),
              /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-primary/40" })
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-serif font-black text-dark dark:text-white mb-4", children: [
              "Distinguished ",
              /* @__PURE__ */ jsx("span", { className: "text-primary dark:text-primary-light italic font-serif", children: "Leadership" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto", children: [
            /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "group bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 hover:border-primary/15 dark:hover:border-primary-light/15 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left", children: [
              /* @__PURE__ */ jsx("div", { className: "w-28 h-28 rounded-2xl overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-800 shadow-md", children: /* @__PURE__ */ jsx("img", { src: "/mam.jpeg", alt: "Dr Namrata Jain", className: "w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary dark:text-primary-light font-black text-[9px] uppercase tracking-widest block mb-2 leading-none", children: "Editor-in-Chief" }),
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-serif font-bold text-dark dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-primary-light transition-colors", children: "Dr Namrata Jain" }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-500 dark:text-slate-400 text-xs sm:text-[13px] leading-relaxed mb-4 font-medium", children: "Assistant Professor at TMU. Over 17 years of experience in Hindi literature, Indian knowledge traditions, and educational research." }),
                /* @__PURE__ */ jsxs(Link, { href: "/editorial-team/editorial-board", className: "inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary transition-colors", children: [
                  "View Full Board ",
                  /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, transition: { delay: 0.1 }, className: "group bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 hover:border-primary/15 dark:hover:border-primary-light/15 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left", children: [
              /* @__PURE__ */ jsx("div", { className: "w-28 h-28 rounded-2xl overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-800 shadow-md", children: /* @__PURE__ */ jsx("img", { src: "/sir.jpeg", alt: "Dr. Ratnesh Kumar Jain", className: "w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "text-primary dark:text-primary-light font-black text-[9px] uppercase tracking-widest block mb-2 leading-none", children: "Managing Editor" }),
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-serif font-bold text-dark dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-primary-light transition-colors", children: "Dr. Ratnesh Kumar Jain" }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-500 dark:text-slate-400 text-xs sm:text-[13px] leading-relaxed mb-4 font-medium", children: "Associate Professor & NSS Coordinator at TMU. Expert in student welfare, educational management, and philosophy." }),
                /* @__PURE__ */ jsxs(Link, { href: "/editorial-team/editorial-board", className: "inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary transition-colors", children: [
                  "View Full Board ",
                  /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4" })
                ] })
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(PipelineSection, {}),
        /* @__PURE__ */ jsx(Testimonials, {}),
        /* @__PURE__ */ jsx(NewsletterSection, {}),
        /* @__PURE__ */ jsxs("section", { className: "py-24 lg:py-36 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none", children: /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px]" }) }),
          /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-6 text-center relative z-10", children: [
            /* @__PURE__ */ jsx("span", { className: "inline-block px-4 py-1.5 bg-primary/5 dark:bg-primary/10 rounded-full text-[9px] text-primary dark:text-primary-light font-black tracking-[0.25em] uppercase mb-6", children: "Call For Manuscripts" }),
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black text-dark dark:text-white mb-6 leading-tight tracking-tight", children: [
              "Shaping the Future of ",
              /* @__PURE__ */ jsx("span", { className: "text-primary dark:text-primary-light italic font-serif font-bold", children: "Global Research" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 dark:text-slate-400 text-sm md:text-base font-medium mb-10 max-w-xl mx-auto leading-relaxed", children: "Join our fast-growing community of researchers, educators, and domain practitioners. Submit your next manuscript or propose a hardcover book volume today." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [
              /* @__PURE__ */ jsxs(Link, { href: "/submission-guidelines/call-for-papers", className: "group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold uppercase tracking-widest text-[10px] hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center gap-2", children: [
                "Submit Manuscript ",
                /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4" })
              ] }),
              /* @__PURE__ */ jsx(Link, { href: "/book-publication", className: "px-8 py-4 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-slate-50 dark:hover:bg-slate-900 transition-all flex items-center gap-2", children: "Browse Publications" })
            ] })
          ] })
        ] })
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
  return /* @__PURE__ */ jsxs("section", { className: "py-20 lg:py-32 bg-[#050B14] relative overflow-hidden border-t border-white/5 transition-colors duration-300", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/4 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-white/20" }),
          /* @__PURE__ */ jsx("span", { className: "text-cyan-400 font-black text-[10px] uppercase tracking-[0.3em]", children: "Publication Journey" }),
          /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-white/20" })
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-serif font-black text-white mb-4", children: [
          "Our Peer Review & ",
          /* @__PURE__ */ jsx("span", { className: "text-cyan-400 italic font-serif", children: "Publishing Workflow" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 font-medium text-sm", children: "Click any phase to explore your manuscript's journey in detail." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8", children: pipelineSteps.map((item, i) => {
        const isActive = activeStep === i;
        return /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setActiveStep(isActive ? null : i),
            className: `group p-6 flex flex-col items-center text-center rounded-2xl transition-all duration-300 focus:outline-none ${isActive ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl -translate-y-1" : "bg-white/5 border border-white/10 hover:border-white/20 hover:shadow-lg hover:-translate-y-0.5"}`,
            children: [
              /* @__PURE__ */ jsx("div", { className: `w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-300 shadow-sm ${isActive ? "bg-white/10" : "bg-slate-900 group-hover:bg-primary group-hover:text-white"}`, children: /* @__PURE__ */ jsx(item.icon, { className: `w-6 h-6 ${isActive ? "text-white" : "text-cyan-400 group-hover:text-white"}` }) }),
              /* @__PURE__ */ jsxs("span", { className: `text-[10px] font-black uppercase tracking-widest block mb-1 ${isActive ? "text-white/60" : "text-slate-400"}`, children: [
                "Step ",
                item.step
              ] }),
              /* @__PURE__ */ jsx("h3", { className: `text-xs font-serif font-bold mb-1 ${isActive ? "text-white" : "text-white group-hover:text-cyan-400"}`, children: item.title }),
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
          children: activeStep !== null && /* @__PURE__ */ jsxs("div", { className: "bg-white/5 rounded-2xl border border-white/10 p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-md", children: React.createElement(pipelineSteps[activeStep].icon, { className: "w-6 h-6" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-1 block", children: "Phase Details" }),
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-serif font-bold text-white mb-2", children: pipelineSteps[activeStep].title }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-sm font-medium", children: pipelineSteps[activeStep].fullDesc })
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
