import { jsxs, jsx } from "react/jsx-runtime";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { M as MainLayout, S as Seo } from "./MainLayout-C8sFQwz7.js";
import { Sparkles, BookOpen, FileText, CheckCircle2, Users, ArrowRight, Mail, Palette, Globe, Radio, Cpu, GraduationCap, TrendingUp, Scale, HeartPulse, Leaf } from "lucide-react";
import { Link } from "@inertiajs/react";
import { S as ScrollReveal, r as revealVariants, G as GridPattern } from "./ScrollReveal-BS2wxcDt.js";
import { motion } from "framer-motion";
import "react";
import "react-hot-toast";
const AreaGraphic = ({ type, color }) => {
  const graphics = {
    arts: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 120 120", fill: "none", className: "w-full h-full", children: [
      /* @__PURE__ */ jsx("circle", { cx: "60", cy: "60", r: "50", stroke: color, strokeWidth: "1", opacity: "0.2" }),
      /* @__PURE__ */ jsx("circle", { cx: "60", cy: "60", r: "35", stroke: color, strokeWidth: "1", opacity: "0.15" }),
      /* @__PURE__ */ jsx("circle", { cx: "60", cy: "60", r: "20", stroke: color, strokeWidth: "1.5", opacity: "0.3" }),
      /* @__PURE__ */ jsx("path", { d: "M30 90 Q60 20 90 90", stroke: color, strokeWidth: "2", opacity: "0.3", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M20 70 Q60 10 100 70", stroke: color, strokeWidth: "1", opacity: "0.15", fill: "none" })
    ] }),
    social: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 120 120", fill: "none", className: "w-full h-full", children: [
      /* @__PURE__ */ jsx("circle", { cx: "40", cy: "50", r: "12", stroke: color, strokeWidth: "1.5", opacity: "0.25" }),
      /* @__PURE__ */ jsx("circle", { cx: "80", cy: "50", r: "12", stroke: color, strokeWidth: "1.5", opacity: "0.25" }),
      /* @__PURE__ */ jsx("circle", { cx: "60", cy: "80", r: "12", stroke: color, strokeWidth: "1.5", opacity: "0.25" }),
      /* @__PURE__ */ jsx("line", { x1: "48", y1: "55", x2: "72", y2: "55", stroke: color, strokeWidth: "1", opacity: "0.2" }),
      /* @__PURE__ */ jsx("line", { x1: "45", y1: "60", x2: "55", y2: "72", stroke: color, strokeWidth: "1", opacity: "0.2" }),
      /* @__PURE__ */ jsx("line", { x1: "75", y1: "60", x2: "65", y2: "72", stroke: color, strokeWidth: "1", opacity: "0.2" })
    ] }),
    media: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 120 120", fill: "none", className: "w-full h-full", children: [
      /* @__PURE__ */ jsx("rect", { x: "25", y: "30", width: "70", height: "50", rx: "8", stroke: color, strokeWidth: "1.5", opacity: "0.2" }),
      /* @__PURE__ */ jsx("circle", { cx: "60", cy: "55", r: "15", stroke: color, strokeWidth: "1.5", opacity: "0.25" }),
      /* @__PURE__ */ jsx("path", { d: "M55 48 L68 55 L55 62 Z", fill: color, opacity: "0.2" }),
      /* @__PURE__ */ jsx("line", { x1: "30", y1: "90", x2: "90", y2: "90", stroke: color, strokeWidth: "1", opacity: "0.15" })
    ] }),
    tech: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 120 120", fill: "none", className: "w-full h-full", children: [
      /* @__PURE__ */ jsx("rect", { x: "35", y: "35", width: "50", height: "50", rx: "4", stroke: color, strokeWidth: "1.5", opacity: "0.2" }),
      /* @__PURE__ */ jsx("rect", { x: "45", y: "45", width: "30", height: "30", rx: "2", stroke: color, strokeWidth: "1", opacity: "0.15" }),
      /* @__PURE__ */ jsx("line", { x1: "60", y1: "20", x2: "60", y2: "35", stroke: color, strokeWidth: "1", opacity: "0.2" }),
      /* @__PURE__ */ jsx("line", { x1: "60", y1: "85", x2: "60", y2: "100", stroke: color, strokeWidth: "1", opacity: "0.2" }),
      /* @__PURE__ */ jsx("line", { x1: "20", y1: "60", x2: "35", y2: "60", stroke: color, strokeWidth: "1", opacity: "0.2" }),
      /* @__PURE__ */ jsx("line", { x1: "85", y1: "60", x2: "100", y2: "60", stroke: color, strokeWidth: "1", opacity: "0.2" }),
      /* @__PURE__ */ jsx("circle", { cx: "60", cy: "60", r: "8", fill: color, opacity: "0.1" })
    ] }),
    education: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 120 120", fill: "none", className: "w-full h-full", children: [
      /* @__PURE__ */ jsx("path", { d: "M60 25 L100 45 L60 65 L20 45 Z", stroke: color, strokeWidth: "1.5", opacity: "0.25", fill: color, fillOpacity: "0.05" }),
      /* @__PURE__ */ jsx("line", { x1: "60", y1: "65", x2: "60", y2: "95", stroke: color, strokeWidth: "1", opacity: "0.2" }),
      /* @__PURE__ */ jsx("path", { d: "M35 55 L35 80 Q60 95 85 80 L85 55", stroke: color, strokeWidth: "1", opacity: "0.15", fill: "none" })
    ] }),
    business: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 120 120", fill: "none", className: "w-full h-full", children: [
      /* @__PURE__ */ jsx("rect", { x: "20", y: "70", width: "15", height: "30", rx: "2", fill: color, opacity: "0.1" }),
      /* @__PURE__ */ jsx("rect", { x: "40", y: "50", width: "15", height: "50", rx: "2", fill: color, opacity: "0.15" }),
      /* @__PURE__ */ jsx("rect", { x: "60", y: "35", width: "15", height: "65", rx: "2", fill: color, opacity: "0.2" }),
      /* @__PURE__ */ jsx("rect", { x: "80", y: "20", width: "15", height: "80", rx: "2", fill: color, opacity: "0.25" }),
      /* @__PURE__ */ jsx("path", { d: "M27 68 L47 48 L67 33 L87 18", stroke: color, strokeWidth: "1.5", opacity: "0.3", fill: "none" })
    ] }),
    law: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 120 120", fill: "none", className: "w-full h-full", children: [
      /* @__PURE__ */ jsx("line", { x1: "60", y1: "20", x2: "60", y2: "95", stroke: color, strokeWidth: "1.5", opacity: "0.2" }),
      /* @__PURE__ */ jsx("line", { x1: "30", y1: "45", x2: "90", y2: "45", stroke: color, strokeWidth: "1.5", opacity: "0.2" }),
      /* @__PURE__ */ jsx("circle", { cx: "30", cy: "55", r: "8", stroke: color, strokeWidth: "1", opacity: "0.2" }),
      /* @__PURE__ */ jsx("circle", { cx: "90", cy: "55", r: "8", stroke: color, strokeWidth: "1", opacity: "0.2" }),
      /* @__PURE__ */ jsx("rect", { x: "45", y: "90", width: "30", height: "8", rx: "2", fill: color, opacity: "0.15" })
    ] }),
    health: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 120 120", fill: "none", className: "w-full h-full", children: [
      /* @__PURE__ */ jsx("path", { d: "M20 60 L35 60 L45 30 L55 80 L65 45 L75 65 L85 60 L100 60", stroke: color, strokeWidth: "2", opacity: "0.25", fill: "none" }),
      /* @__PURE__ */ jsx("circle", { cx: "60", cy: "60", r: "40", stroke: color, strokeWidth: "1", opacity: "0.1" })
    ] }),
    environment: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 120 120", fill: "none", className: "w-full h-full", children: [
      /* @__PURE__ */ jsx("circle", { cx: "60", cy: "60", r: "40", stroke: color, strokeWidth: "1", opacity: "0.15" }),
      /* @__PURE__ */ jsx("ellipse", { cx: "60", cy: "60", rx: "40", ry: "15", stroke: color, strokeWidth: "1", opacity: "0.15" }),
      /* @__PURE__ */ jsx("ellipse", { cx: "60", cy: "60", rx: "15", ry: "40", stroke: color, strokeWidth: "1", opacity: "0.15" }),
      /* @__PURE__ */ jsx("path", { d: "M50 40 Q60 25 70 40 Q60 50 50 40 Z", fill: color, opacity: "0.15" })
    ] }),
    indian: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 120 120", fill: "none", className: "w-full h-full", children: [
      /* @__PURE__ */ jsx("circle", { cx: "60", cy: "50", r: "30", stroke: color, strokeWidth: "1", opacity: "0.15" }),
      /* @__PURE__ */ jsx("path", { d: "M60 20 L65 35 L80 35 L68 45 L72 60 L60 50 L48 60 L52 45 L40 35 L55 35 Z", stroke: color, strokeWidth: "1", opacity: "0.2", fill: color, fillOpacity: "0.05" }),
      /* @__PURE__ */ jsx("line", { x1: "40", y1: "85", x2: "80", y2: "85", stroke: color, strokeWidth: "1", opacity: "0.15" }),
      /* @__PURE__ */ jsx("line", { x1: "45", y1: "90", x2: "75", y2: "90", stroke: color, strokeWidth: "1", opacity: "0.1" })
    ] })
  };
  return /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 w-24 h-24 md:w-28 md:h-28 opacity-60 group-hover:opacity-100 transition-opacity duration-500", children: graphics[type] });
};
const areas = [
  {
    title: "Arts & Humanities",
    slug: "arts-humanities",
    icon: /* @__PURE__ */ jsx(Palette, { className: "w-6 h-6" }),
    color: "#e11d48",
    colorClass: "text-rose-500",
    bg: "bg-rose-50",
    borderHover: "hover:border-rose-200",
    graphic: "arts",
    desc: "Exploring human expression, cultural heritage, and creative thought across civilizations.",
    topics: ["Literature & Comparative Studies", "Philosophy & Ethics", "History & Archaeology", "Performing & Visual Arts", "Cultural & Media Studies", "Linguistics & Translation"],
    papers: "120+"
  },
  {
    title: "Social Sciences",
    slug: "social-sciences",
    icon: /* @__PURE__ */ jsx(Globe, { className: "w-6 h-6" }),
    color: "#3b82f6",
    colorClass: "text-primary",
    bg: "bg-primary/5",
    borderHover: "hover:border-primary/20",
    graphic: "social",
    desc: "Understanding human behavior, societal structures, and governance mechanisms.",
    topics: ["Sociology & Social Work", "Psychology & Behavioral Science", "Political Science & IR", "Anthropology & Ethnography", "Economics & Public Policy", "Gender & Development Studies"],
    papers: "200+"
  },
  {
    title: "Journalism & Mass Communication",
    slug: "journalism-media",
    icon: /* @__PURE__ */ jsx(Radio, { className: "w-6 h-6" }),
    color: "#f97316",
    colorClass: "text-orange-500",
    bg: "bg-orange-50",
    borderHover: "hover:border-orange-200",
    graphic: "media",
    desc: "Analyzing modern media ecosystems, digital narratives, and communication ethics.",
    topics: ["Print & Broadcast Journalism", "Digital & Social Media", "Public Relations & Advertising", "Media Law & Ethics", "Film & Documentary Studies", "Communication Theory"],
    papers: "85+"
  },
  {
    title: "Science & Technology",
    slug: "science-technology",
    icon: /* @__PURE__ */ jsx(Cpu, { className: "w-6 h-6" }),
    color: "#06b6d4",
    colorClass: "text-cyan-500",
    bg: "bg-cyan-50",
    borderHover: "hover:border-cyan-200",
    graphic: "tech",
    desc: "Advancing frontiers in computing, engineering, and applied sciences.",
    topics: ["Computer Science & AI", "Data Science & Analytics", "Biotechnology & Genetics", "Mechanical & Civil Engineering", "Nanotechnology", "Information Systems & Cybersecurity"],
    papers: "180+"
  },
  {
    title: "Education",
    slug: "education",
    icon: /* @__PURE__ */ jsx(GraduationCap, { className: "w-6 h-6" }),
    color: "#eab308",
    colorClass: "text-yellow-600",
    bg: "bg-yellow-50",
    borderHover: "hover:border-yellow-200",
    graphic: "education",
    desc: "Shaping the future of learning through pedagogy, policy, and technology.",
    topics: ["Curriculum & Instruction Design", "Educational Psychology", "EdTech & Digital Learning", "Higher Education Policy", "Special & Inclusive Education", "Teacher Training & Development"],
    papers: "150+"
  },
  {
    title: "Management & Commerce",
    slug: "management-commerce",
    icon: /* @__PURE__ */ jsx(TrendingUp, { className: "w-6 h-6" }),
    color: "#10b981",
    colorClass: "text-emerald-500",
    bg: "bg-emerald-50",
    borderHover: "hover:border-emerald-200",
    graphic: "business",
    desc: "Driving innovation in business strategy, finance, and the global economy.",
    topics: ["Strategic Management", "Financial Markets & Banking", "Marketing & Consumer Behavior", "Human Resource Management", "Entrepreneurship & Startups", "Accounting & Taxation"],
    papers: "170+"
  },
  {
    title: "Law & Public Administration",
    slug: "law-governance",
    icon: /* @__PURE__ */ jsx(Scale, { className: "w-6 h-6" }),
    color: "#64748b",
    colorClass: "text-gray-500",
    bg: "bg-gray-50",
    borderHover: "hover:border-slate-300",
    graphic: "law",
    desc: "Examining legal frameworks, justice systems, and public governance.",
    topics: ["Constitutional & Criminal Law", "International Law & Human Rights", "Cyber Law & IP Rights", "Administrative & Corporate Law", "Public Policy & Governance", "Environmental Law"],
    papers: "90+"
  },
  {
    title: "Health & Medical Sciences",
    slug: "health-medicine",
    icon: /* @__PURE__ */ jsx(HeartPulse, { className: "w-6 h-6" }),
    color: "#ef4444",
    colorClass: "text-red-500",
    bg: "bg-red-50",
    borderHover: "hover:border-red-200",
    graphic: "health",
    desc: "Improving global health outcomes through research in medicine and wellness.",
    topics: ["Public Health & Epidemiology", "Clinical Medicine & Surgery", "Nursing & Allied Health", "Pharmacy & Drug Research", "Mental Health & Wellness", "Nutrition & Dietetics"],
    papers: "130+"
  },
  {
    title: "Environment & Development",
    slug: "environment-sustainability",
    icon: /* @__PURE__ */ jsx(Leaf, { className: "w-6 h-6" }),
    color: "#22c55e",
    colorClass: "text-green-500",
    bg: "bg-green-50",
    borderHover: "hover:border-green-200",
    graphic: "environment",
    desc: "Tackling global challenges in sustainability, ecology, and urban systems.",
    topics: ["Climate Change & Mitigation", "Sustainable Development Goals", "Ecology & Biodiversity", "Urban Planning & Smart Cities", "Renewable Energy Systems", "Water & Waste Management"],
    papers: "95+"
  },
  {
    title: "Indian Knowledge Systems",
    slug: "indian-knowledge-systems",
    icon: /* @__PURE__ */ jsx(BookOpen, { className: "w-6 h-6" }),
    color: "#8b5cf6",
    colorClass: "text-violet-500",
    bg: "bg-violet-50",
    borderHover: "hover:border-violet-200",
    graphic: "indian",
    desc: "Reviving and researching India's ancient wisdom and traditional sciences.",
    topics: ["Vedic & Sanskrit Studies", "Ayurveda & Traditional Medicine", "Yoga & Meditation Science", "Indian Mathematics & Astronomy", "Jain, Buddhist & Hindu Philosophy", "Ancient Architecture & Art"],
    papers: "75+"
  }
];
function AreasOfSubmission() {
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: "Areas of Submission",
        description: "Explore 10+ multidisciplinary research areas at Sanmati Journal covering Arts, Science, Law, Health, Education, and more.",
        keywords: "research areas, submission topics, multidisciplinary journal, academic publishing"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "bg-warm-bg min-h-screen font-sans", children: [
      /* @__PURE__ */ jsx(
        PageHeader,
        {
          title: "Areas of Submission",
          breadcrumb: "Submission",
          subtitle: "Exploring the Frontiers of Knowledge"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-[-10%] right-[-10%] w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto relative z-10", children: [
          /* @__PURE__ */ jsx("div", { className: "text-center mb-14", children: /* @__PURE__ */ jsxs(ScrollReveal, { variants: revealVariants.fadeUp, children: [
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-dark text-xs font-bold uppercase tracking-widest mb-4", children: [
              /* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5" }),
              " Multidisciplinary Scope"
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl font-bold text-dark mb-4 tracking-tight", children: [
              "Scope of the ",
              /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600", children: "Journal" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm max-w-xl mx-auto leading-relaxed", children: "We welcome original research across 10 major disciplines. Click any area to explore detailed topics and submission guidelines." })
          ] }) }),
          /* @__PURE__ */ jsx(ScrollReveal, { variants: revealVariants.fadeUp, delay: 0.1, children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-14", children: [
            { label: "Disciplines", value: "10+", icon: /* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4" }) },
            { label: "Sub-Topics", value: "60+", icon: /* @__PURE__ */ jsx(FileText, { className: "w-4 h-4" }) },
            { label: "Published Papers", value: "1,295+", icon: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4" }) },
            { label: "Global Authors", value: "500+", icon: /* @__PURE__ */ jsx(Users, { className: "w-4 h-4" }) }
          ].map((stat, i) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-4 border border-slate-100 shadow-sm text-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-primary mb-1", children: [
              stat.icon,
              /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-gray-400", children: stat.label })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-dark", children: stat.value })
          ] }, i)) }) }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: areas.map((area, i) => /* @__PURE__ */ jsx(ScrollReveal, { variants: revealVariants.fadeUp, delay: i * 0.04, className: "h-full", children: /* @__PURE__ */ jsx(Link, { href: `/submission-guidelines/areas/${area.slug}`, className: "block h-full", children: /* @__PURE__ */ jsxs(
            motion.div,
            {
              whileHover: { y: -4 },
              transition: { type: "spring", stiffness: 300 },
              className: `group relative h-full bg-white rounded-2xl p-6 border border-slate-100 shadow-sm ${area.borderHover} hover:shadow-lg transition-all duration-300 overflow-hidden`,
              children: [
                /* @__PURE__ */ jsx(AreaGraphic, { type: area.graphic, color: area.color }),
                /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500", style: { background: `linear-gradient(to right, transparent, ${area.color}40, transparent)` } }),
                /* @__PURE__ */ jsxs("div", { className: "absolute top-4 right-4 px-3 py-1 rounded-full bg-dark text-white text-[10px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 z-20 flex items-center gap-1", children: [
                  "Explore ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-4", children: [
                    /* @__PURE__ */ jsx("div", { className: `w-11 h-11 rounded-xl ${area.bg} ${area.colorClass} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`, children: area.icon }),
                    /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-dark mb-1 group-hover:text-primary-dark transition-colors", children: area.title }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 leading-relaxed", children: area.desc })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "text-right shrink-0 hidden sm:block", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-dark", children: area.papers }),
                      /* @__PURE__ */ jsx("p", { className: "text-[10px] text-gray-400 uppercase tracking-wider font-bold", children: "Papers" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5 mt-3", children: area.topics.map((topic, j) => /* @__PURE__ */ jsx("span", { className: `inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-medium ${area.bg} ${area.colorClass} opacity-80 group-hover:opacity-100 transition-opacity`, children: topic }, j)) })
                ] })
              ]
            }
          ) }) }, i)) }),
          /* @__PURE__ */ jsx(ScrollReveal, { variants: revealVariants.fadeUp, delay: 0.3, children: /* @__PURE__ */ jsxs("div", { className: "mt-16 relative rounded-2xl overflow-hidden bg-dark text-white shadow-2xl", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 z-0" }),
            /* @__PURE__ */ jsx(GridPattern, { className: "opacity-20 text-white z-0" }),
            /* @__PURE__ */ jsx("div", { className: "absolute -top-24 -right-24 w-96 h-96 bg-primary rounded-full blur-[100px] opacity-30 animate-pulse" }),
            /* @__PURE__ */ jsx("div", { className: "absolute -bottom-24 -left-24 w-96 h-96 bg-violet-500 rounded-full blur-[100px] opacity-30 animate-pulse animation-delay-2000" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto", children: [
              /* @__PURE__ */ jsxs("div", { className: "text-center md:text-left", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-bold mb-3 font-serif", children: "Ready to Contribute?" }),
                /* @__PURE__ */ jsx("p", { className: "text-blue-200 text-sm max-w-lg", children: "Ensure your manuscript aligns with our focus areas and adheres to our rigorous publication standards." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 shrink-0", children: [
                /* @__PURE__ */ jsx(Link, { href: "/submission-guidelines/important-info", className: "px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-bold text-sm text-white hover:bg-white hover:text-dark transition-all duration-300", children: "Guidelines" }),
                /* @__PURE__ */ jsxs("a", { href: "mailto:sanmatijournal@gmail.com", className: "px-6 py-3 bg-white text-dark rounded-full font-bold text-sm shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2", children: [
                  /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }),
                  " Submit Now"
                ] })
              ] })
            ] })
          ] }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  AreasOfSubmission as default
};
