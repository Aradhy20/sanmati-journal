import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Linkedin, ExternalLink, Code2, Server, Zap, Cpu, Shield, Users } from "lucide-react";
import { P as PageHeader } from "./PageHeader-DHJj0W5D.js";
import { M as MainLayout, S as Seo } from "./MainLayout-DnA_ZOa1.js";
import "@inertiajs/react";
import "react";
import "react-hot-toast";
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};
const skills = [
  { label: "Full-Stack Development", icon: Code2, color: "from-blue-500/10 to-indigo-500/10 text-blue-600" },
  { label: "Server & DevOps", icon: Server, color: "from-emerald-500/10 to-teal-500/10 text-emerald-600" },
  { label: "UI/UX Engineering", icon: Zap, color: "from-amber-500/10 to-orange-500/10 text-amber-600" },
  { label: "Platform Architecture", icon: Cpu, color: "from-purple-500/10 to-violet-500/10 text-purple-600" },
  { label: "Security & Performance", icon: Shield, color: "from-rose-500/10 to-red-500/10 text-rose-600" },
  { label: "Research Portal Systems", icon: Users, color: "from-sky-500/10 to-cyan-500/10 text-sky-600" }
];
const stats = [
  { value: "100%", label: "Uptime Target" },
  { value: "SSR", label: "Optimized Rendering" },
  { value: "HTTPS", label: "Secure Platform" },
  { value: "v2", label: "Current Platform" }
];
function TechnicalTeam() {
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: "Technical Team",
        description: "Meet the technical team behind the Sanmati Journal platform — the developers and engineers powering seamless academic publishing."
      }
    ),
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Technical Team",
        breadcrumb: "Team",
        subtitle: "The engineers and developers powering the Sanmati Journal digital infrastructure."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24", children: [
      /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, className: "text-center mb-16 lg:mb-24 max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4 mb-6", children: [
          /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-secondary" }),
          /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[11px] uppercase tracking-[0.4em]", children: "Engineering" }),
          /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-secondary" })
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark mb-6 leading-tight", children: [
          "Built with ",
          /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Precision" }),
          " &",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-secondary italic", children: "Purpose" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-dark/60 font-medium leading-relaxed", children: "The Sanmati Journal platform is engineered for reliability, speed, and a seamless academic experience — from submission to publication." })
      ] }),
      /* @__PURE__ */ jsx(motion.div, { ...fadeInUp, transition: { delay: 0.1 }, className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20", children: stats.map((s, i) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl border border-gray-100 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group", children: [
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-black text-primary mb-1 group-hover:scale-110 transition-transform", children: s.value }),
        /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold text-dark/50 uppercase tracking-widest", children: s.label })
      ] }, i)) }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-20", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          ...fadeInUp,
          transition: { delay: 0.15 },
          className: "w-full max-w-2xl bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-primary/5 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 group",
          children: [
            /* @__PURE__ */ jsx("div", { className: "h-2 w-full bg-gradient-to-r from-primary via-secondary to-primary" }),
            /* @__PURE__ */ jsx("div", { className: "p-8 sm:p-12", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center sm:items-start gap-8", children: [
              /* @__PURE__ */ jsx("div", { className: "shrink-0", children: /* @__PURE__ */ jsx("div", { className: "w-36 h-36 sm:w-44 sm:h-44 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white ring-2 ring-primary/10 bg-surface relative group-hover:ring-primary/30 transition-all duration-500", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/images/team/Aradhy_Jain.jpg",
                  alt: "Aradhy Jain",
                  className: "w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700",
                  loading: "lazy",
                  onError: (e) => {
                    e.target.style.display = "none";
                  }
                }
              ) }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 text-center sm:text-left", children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-[9px] font-black uppercase tracking-widest rounded-full mb-3 border border-primary/10", children: "Technical Lead" }),
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-serif font-bold text-dark mb-1 leading-tight group-hover:text-primary transition-colors", children: "Aradhy Jain" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-secondary/80 mb-4 uppercase tracking-widest", children: "Full-Stack Developer & Platform Architect" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-dark/60 font-medium leading-relaxed mb-6", children: "Designed, developed, and deployed the entire Sanmati Journal digital platform — building a fast, secure, and scalable academic publishing system from the ground up." }),
                /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center sm:justify-start gap-3", children: /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "https://www.linkedin.com/in/aradhyjain",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "flex items-center gap-2 px-4 py-2.5 bg-[#0A66C2]/10 hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white text-[11px] font-bold tracking-wider uppercase rounded-xl transition-all duration-300 border border-[#0A66C2]/20 hover:border-[#0A66C2] group/btn",
                    children: [
                      /* @__PURE__ */ jsx(Linkedin, { className: "w-4 h-4" }),
                      "LinkedIn",
                      /* @__PURE__ */ jsx(ExternalLink, { className: "w-3 h-3 opacity-60 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" })
                    ]
                  }
                ) })
              ] })
            ] }) })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs(motion.div, { ...fadeInUp, transition: { delay: 0.2 }, children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
          /* @__PURE__ */ jsx("span", { className: "text-secondary font-black text-[10px] uppercase tracking-[0.4em] mb-3 block", children: "Expertise" }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-serif font-bold text-dark", children: "Platform Technologies" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: skills.map((skill, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            ...fadeInUp,
            transition: { delay: 0.05 * i },
            className: `flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br ${skill.color.split(" ").slice(0, 2).join(" ")} border border-gray-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`,
            children: [
              /* @__PURE__ */ jsx("div", { className: `w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 ${skill.color.split(" ").pop()}`, children: /* @__PURE__ */ jsx(skill.icon, { className: "w-5 h-5" }) }),
              /* @__PURE__ */ jsx("span", { className: "font-bold text-dark text-sm", children: skill.label })
            ]
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsx(motion.div, { ...fadeInUp, transition: { delay: 0.3 }, className: "mt-20 text-center", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-[2rem] border border-primary/10", children: [
        /* @__PURE__ */ jsx("p", { className: "text-dark/60 text-sm font-medium", children: "Have a technical question or suggestion?" }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/contact",
            className: "inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white text-sm font-bold tracking-wider uppercase rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5",
            children: "Contact the Team"
          }
        )
      ] }) })
    ] })
  ] });
}
export {
  TechnicalTeam as default
};
